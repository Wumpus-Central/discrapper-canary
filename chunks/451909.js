"use strict";
n.d(t, { Ay: () => Z }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(791332),
    a = n.n(s),
    o = n(551639),
    l = n(47167),
    u = n(508675),
    c = n(7584),
    d = n(542664),
    _ = n(704726),
    f = n(335432),
    p = n(677413),
    h = n(863005),
    E = n(253932),
    m = n(734057),
    g = n(808728),
    A = n(696451),
    I = n(317525),
    T = n(71393),
    S = n(576705),
    y = n(994500),
    N = n(351906),
    v = n(287809),
    C = n(248465),
    O = n(690521),
    R = n(562153),
    b = n(427262),
    D = n(652215),
    L = n(307731),
    w = n(985018);
function M(e, t, n, r) {
    if (t[0] !== e) return;
    let i = t.substring(e.length);
    return n
        .sortBy((e) => {
            let { text: t } = e;
            return -t.length;
        })
        .filter((e) => {
            let { text: n } = e;
            return 1 === t.toLowerCase().indexOf(n.toLowerCase());
        })
        .sortBy((e) => {
            let { text: t } = e;
            return +(t !== i);
        })
        .map((t) => {
            let { id: n, text: i } = t;
            return [e + i, n, r];
        })
        .first();
}
function P(e) {
    return { order: e.order, match: e.match, parse: (t) => ({ type: e.type, content: t[0] }) };
}
function x(e) {
    return { match: a().anyScopeRegex(e), parse: (e) => ({ type: "text", content: e[0] }) };
}
let k = d.A.RULES,
    U = _.Ay,
    G = /^<@!?(\d+)>/,
    F = /^<@&(\d+)>/,
    V = /^<#(\d+)>/,
    B = /^<a?:(\w+):(\d+)>/,
    H = /(@everyone|@here|@Clyde)\b/,
    j = /^[^\s]+@[^\s]+\.[^\s.]+/,
    Y = {
        link: P(a().defaultRules.link),
        autolink: P(a().defaultRules.autolink),
        url: P(a().defaultRules.url),
        inlineCode: P(k.inlineCode),
        codeBlock: P(k.codeBlock),
        rawUserMention: x(G),
        rawRoleMention: x(F),
        rawChannelMention: x(V),
        rawEmoji: x(B),
        mention: {
            match(e, t, n) {
                let r = n.split(" ").pop() + e;
                if (j.test(r)) return null;
                let i = M("@", e, t.users, "mention");
                if (null != i || null != (i = M("@", e, t.mentionableRoles, "roleMention"))) return i;
                if (
                    null ==
                    (i = M(
                        "@",
                        e,
                        t.users.map((e) => ({ ...e, text: e.text.split("#")[0] })),
                        "mention",
                    ))
                )
                    return null;
                let s = H.exec(e);
                if (null != s && i[0].length <= s[0].length) return null;
                if ("" === n) {
                    let t = p.U.exec(e);
                    if (null != t && i[0].length <= t[0].length) return null;
                }
                return i;
            },
            parse(e) {
                let [, t, n] = e,
                    r = "@";
                return "roleMention" === n && (r += "&"), { type: n, content: `<${r}${t}>` };
            },
        },
        channel: {
            match: (e, t) =>
                (function (e, t) {
                    if ("#" !== e[0]) return;
                    if ('"' !== e[1]) return M("#", e, t, "channel");
                    let n = 2;
                    for (; n < e.length; n++) {
                        if ("\\" === e[n]) {
                            n++;
                            continue;
                        }
                        if ('"' === e[n]) break;
                    }
                    let r = e.substring(0, n + 1),
                        i = (0, l.LG)(e.substring(2, n));
                    return t
                        .sortBy((e) => {
                            let { text: t } = e;
                            return -t.length;
                        })
                        .filter((e) => {
                            let { text: t } = e;
                            return i === t;
                        })
                        .map((e) => {
                            let { id: t } = e;
                            return [r, t, "channel"];
                        })
                        .first();
                })(e, t.channels) ?? null,
            parse: (e) => ({ type: "text", content: `<#${e[1]}>` }),
        },
        emoticon: {
            match(e, t, n) {
                if (!E.j7.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let r = c.Ay.EMOJI_SHORTCUT_RE.exec(e);
                return null == r || (r[0].length !== e.length && " " !== e[r[0].length] && "\n" !== e[r[0].length])
                    ? null
                    : r;
            },
            parse: (e) => ({ type: "emoticon", content: c.Ay.convertShortcutToName(e[1]), isShortcut: !0 }),
        },
        emoji: {
            order: k.emoji.order,
            match: (e) => c.Ay.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [r, i] = e,
                    { customEmoji: s } = n,
                    a = s.get(i) ?? null;
                return null != a
                    ? {
                          type: "customEmoticon",
                          content: `<${!0 === a.animated ? "a" : ""}:${a.originalName ?? a.name}:${a.id}>`,
                          emoji: a,
                      }
                    : { type: "text", content: r };
            },
        },
        customEmoticons: {
            match: (e, t) => t.customEmoticonsRegex?.exec(e) ?? null,
            parse(e, t, n) {
                let [r, i] = e,
                    { emojiContext: s } = n,
                    a = s.getEmoticonByName(i);
                return null != a
                    ? {
                          type: "customEmoticon",
                          content: `<${!0 === a.animated ? "a" : ""}:${a.name}:${a.id}>`,
                          emoji: a,
                      }
                    : { type: "text", content: r };
            },
        },
        text: {
            ...U,
            match: (e, t) =>
                "string" == typeof t.textExclusions && "" !== t.textExclusions
                    ? (0, _.VC)(t.textExclusions).exec(e)
                    : null != U.match
                      ? U.match(e, t, "")
                      : null,
        },
    },
    W = {
        inlineCode: P(k.inlineCode),
        codeBlock: P(k.codeBlock),
        mention: {
            match: a().anyScopeRegex(G),
            parse(e, t, n) {
                let { isNotification: r, guild: s, channelId: a } = n,
                    o = v.default.getUser(e[1]);
                if (null == o) return { content: e[0] };
                let l = b.Ay.getUserTag(o, { identifiable: r && N.A.enabled ? "never" : "always" });
                if (r) {
                    let e = R.Ay.getNickname(s?.id, a, o) ?? b.Ay.getGlobalName(o);
                    return { content: null != e ? `@${e}` : `@${l}` };
                }
                {
                    if (o.bot) return { content: `@${l}` };
                    let e = "";
                    if (s?.id != null) {
                        let t = l.toLowerCase();
                        e = i().some(I.A.getUnsafeMutableRoles(s.id), (e) => t.startsWith(e.name.toLowerCase()))
                            ? `#${`${o.discriminator}`.padStart(4, "0")}`
                            : "";
                    }
                    return { content: `@${l}${e}` };
                }
            },
        },
        roleMention: {
            match: a().anyScopeRegex(F),
            parse(e, t, n) {
                let { guild: r } = n;
                if (null != r) {
                    let t = I.A.getRole(r.id, e[1]);
                    if (null != t) return { content: `@${t.name}` };
                }
                return { content: e[0] };
            },
        },
        channel: {
            match: a().anyScopeRegex(V),
            parse(e) {
                let t = m.A.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, l.m1)(t, v.default, y.A, !0, !0) };
            },
        },
        emoji: {
            match: a().anyScopeRegex(B),
            parse(e, t, n) {
                let [r, i, s] = e,
                    { guild: a } = n,
                    o = u.Ay.getDisambiguatedEmojiContext(a ? a.id : null).getById(s),
                    l = null != o ? o.name : i;
                return { content: `:${l}:`, id: s };
            },
        },
        soundboard: {
            match: a().anyScopeRegex(f.ds),
            parse(e) {
                let [t, n, r] = e;
                return { content: `<sound:${n}:${r}>` };
            },
        },
        spoiler: {
            match: a().anyScopeRegex(D.VFs),
            parse: () => ({ content: `<${w.intl.string(w.t["F+x38C"]).toLowerCase()}>` }),
        },
        staticRouteLink: { match: a().anyScopeRegex(D.P0V), parse: (e) => ({ content: `<id:${e[1]}>` }) },
        timestamp: {
            ...k.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = k.timestamp.parse(...t);
                return "text" === r.type ? { content: r.content } : { content: r.formatted };
            },
        },
        text: { ...U },
    };
[Y, W].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let K = a().parserFor(Y),
    $ = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function z(e, t, n, r) {
    let i = "",
        s = [];
    return (
        e.forEach((e) => {
            if (
                null != r &&
                ("customEmoticon" === e.type && r(e.emoji, !1), "emoticon" === e.type || "text" === e.type)
            ) {
                let n,
                    i = c.Ay.translateSurrogatesToInlineEmoji(e.content);
                for (; null !== (n = $.exec(i)); ) {
                    let i;
                    null != n[1] && "" !== n[1]
                        ? t.emojiContext && (i = t.emojiContext.getById(n[1]))
                        : (i = c.Ay.getByName(n[2])),
                        i && r(i, e.isShortcut || !1);
                }
            }
            if ("string" == typeof e.content)
                switch (e.type) {
                    case "emoji":
                        s.push({ position: i.length, length: e.content.length, id: e.id }), (i += e.content);
                        break;
                    case "codeBlock":
                    case "inlineCode":
                    case "mention":
                    case "roleMention":
                    case "channel":
                        !0 === t.isNotification ? (i += (0, o.az)(e.content)) : (i += e.content);
                        break;
                    default:
                        i += n(e.content);
                }
            else if (e.content.constructor === Array) {
                let { content: a, emoji: o } = z(e.content, t, n, r);
                for (let e of o) s.push({ position: i.length + e.position, length: e.length, id: e.id });
                i += a;
            } else console.warn("Unknown message item type: ", e);
        }),
        { content: i, emoji: s }
    );
}
function q(e) {
    let t,
        n = e?.getGuildId(),
        r = null != n ? T.A.getGuild(n) : null,
        s = S.A.can(D.xBc.MENTION_EVERYONE, e);
    if (e?.isPrivate()) {
        t = e.recipients.map((e) => ({ userId: e, nick: null }));
        let n = v.default.getCurrentUser();
        null != n && t.push({ userId: n.id, nick: null });
    } else
        t =
            null != n
                ? A.Ay.getMembers(n).map((e) => {
                      let { userId: t, nick: n } = e;
                      return { userId: t, nick: n };
                  })
                : [];
    let a = i()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    r = v.default.getUser(n);
                return null == r || e.push({ id: n, text: r.tag }), e;
            }, []),
        ),
        o = i()(null != r ? I.A.getSortedRoles(r.id) : [])
            .filter((e) => {
                let { mentionable: t } = e;
                return s || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return { id: t, text: n };
            }),
        c = i()(g.Ay.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return { id: t, text: n };
        }),
        d =
            null != n
                ? i()(C.L3)
                      .filter((e) => e !== g.I6)
                      .flatMap((e) =>
                          g.Ay.getChannels(n)[e].map((e) => ({
                              id: e.channel.id,
                              text: (0, l.m1)(e.channel, v.default, y.A),
                          })),
                      )
                      .value()
                : [],
        _ = h.A.computeAllActiveJoinedThreads(n).map((e) => ({ id: e.id, text: (0, l.m1)(e, v.default, y.A) })),
        f = u.Ay.getDisambiguatedEmojiContext(n),
        p = f.getEscapedCustomEmoticonNames(),
        E = f.getCustomEmoji(),
        m = f.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: o,
        guild: r,
        users: a,
        channels: c.concat(d).concat(_),
        emojiContext: f,
        customEmoticonsRegex: m,
        customEmoji: E,
        textExclusions: p,
        isNotification: !1,
    };
}
function X(e) {
    return e;
}
function Q(e, t, n) {
    let r = m.A.getChannel(t),
        s = null != r ? r.getGuildId() : null,
        o = null != s ? T.A.getGuild(s) : null,
        l = n ? W : i().omit(W, ["spoiler", "timestamp"]),
        u = n ? X : c.Ay.translateSurrogatesToInlineEmoji,
        d = a().parserFor(l),
        _ = { inline: !0, guild: o, channelId: t, isNotification: n };
    return z(d(e, _), _, u);
}
let Z = {
    parse(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            s = i ?? q(e),
            a = { content: t, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] };
        return (
            (n = a.content),
            (r = (t, n) => {
                O.Ay.isEmojiPremiumLocked({ emoji: t, channel: e, intention: L.EmojiIntention.CHAT })
                    ? a.invalidEmojis.push(t)
                    : n || a.validNonShortcutEmojis.push(t);
            }),
            (a.content = z(K(n, s), s, c.Ay.translateInlineEmojiToSurrogates, r).content),
            a
        );
    },
    parsePreprocessor: (e, t) => K(t, q(e)),
    unparse: (e, t, n) => Q(e, t, n).content,
    unparseWithMeta: Q,
};
