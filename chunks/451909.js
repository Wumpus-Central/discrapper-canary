"use strict";
n.d(t, { Ay: () => J }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(791332),
    a = n.n(s),
    o = n(551639),
    l = n(47167),
    u = n(159273),
    c = n(7584),
    d = n(29814),
    _ = n(704726),
    h = n(113051),
    f = n(677413),
    p = n(695633),
    E = n(885386),
    m = n(734057),
    g = n(808728),
    A = n(696451),
    I = n(317525),
    T = n(71393),
    S = n(576705),
    y = n(994500),
    C = n(351906),
    N = n(287809),
    v = n(768038),
    R = n(690521),
    O = n(403362),
    b = n(562153),
    D = n(427262),
    L = n(652215),
    w = n(307731),
    M = n(375708);
function P(e, t, n, i) {
    if (t[0] !== e) return;
    let r = t.substring(e.length);
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
            return +(t !== r);
        })
        .map((t) => {
            let { id: n, text: r } = t;
            return [e + r, n, i];
        })
        .first();
}
function x(e) {
    return { order: e.order, match: e.match, parse: (t) => ({ type: e.type, content: t[0] }) };
}
function k(e) {
    return { match: a().anyScopeRegex(e), parse: (e) => ({ type: "text", content: e[0] }) };
}
let U = d.A.RULES,
    G = _.Ay,
    F = /^<@!?(\d+)>/,
    V = /^<@&(\d+)>/,
    B = /^<#(\d+)>/,
    j = /^<a?:(\w+):(\d+)>/,
    H = /(@everyone|@here|@Clyde)\b/,
    Y = /^[^\s]+@[^\s]+\.[^\s.]+/,
    W = {
        link: x(a().defaultRules.link),
        autolink: x(a().defaultRules.autolink),
        url: x(a().defaultRules.url),
        inlineCode: x(U.inlineCode),
        codeBlock: x(U.codeBlock),
        rawUserMention: k(F),
        rawRoleMention: k(V),
        rawChannelMention: k(B),
        rawEmoji: k(j),
        mention: {
            match(e, t, n) {
                let i = n.split(" ").pop() + e;
                if (Y.test(i)) return null;
                let r = P("@", e, t.users, "mention");
                if (null != r || null != (r = P("@", e, t.mentionableRoles, "roleMention"))) return r;
                if (
                    null ==
                    (r = P(
                        "@",
                        e,
                        t.users.map((e) => ({ ...e, text: e.text.split("#")[0] })),
                        "mention",
                    ))
                )
                    return null;
                let s = H.exec(e);
                if (null != s && r[0].length <= s[0].length) return null;
                if ("" === n) {
                    let t = f.U.exec(e);
                    if (null != t && r[0].length <= t[0].length) return null;
                }
                return r;
            },
            parse(e) {
                let [, t, n] = e,
                    i = "@";
                return "roleMention" === n && (i += "&"), { type: n, content: `<${i}${t}>` };
            },
        },
        channel: {
            match: (e, t) =>
                (function (e, t) {
                    if ("#" !== e[0]) return;
                    if ('"' !== e[1]) return P("#", e, t, "channel");
                    let n = 2;
                    for (; n < e.length; n++) {
                        if ("\\" === e[n]) {
                            n++;
                            continue;
                        }
                        if ('"' === e[n]) break;
                    }
                    let i = e.substring(0, n + 1),
                        r = (0, l.LG)(e.substring(2, n));
                    return t
                        .sortBy((e) => {
                            let { text: t } = e;
                            return -t.length;
                        })
                        .filter((e) => {
                            let { text: t } = e;
                            return r === t;
                        })
                        .map((e) => {
                            let { id: t } = e;
                            return [i, t, "channel"];
                        })
                        .first();
                })(e, t.channels) ?? null,
            parse: (e) => ({ type: "text", content: `<#${e[1]}>` }),
        },
        emoticon: {
            match(e, t, n) {
                if (!E.j7.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let i = c.Ay.EMOJI_SHORTCUT_RE.exec(e);
                return null == i || (i[0].length !== e.length && " " !== e[i[0].length] && "\n" !== e[i[0].length])
                    ? null
                    : i;
            },
            parse: (e) => ({ type: "emoticon", content: c.Ay.convertShortcutToName(e[1]), isShortcut: !0 }),
        },
        emoji: {
            order: U.emoji.order,
            match: (e) => c.Ay.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [i, r] = e,
                    { customEmoji: s } = n,
                    a = s.get(r) ?? null;
                return null != a
                    ? {
                          type: "customEmoticon",
                          content: `<${!0 === a.animated ? "a" : ""}:${a.originalName ?? a.name}:${a.id}>`,
                          emoji: a,
                      }
                    : { type: "text", content: i };
            },
        },
        customEmoticons: {
            match: (e, t) => t.customEmoticonsRegex?.exec(e) ?? null,
            parse(e, t, n) {
                let [i, r] = e,
                    { emojiContext: s } = n,
                    a = s.getEmoticonByName(r);
                return null != a
                    ? {
                          type: "customEmoticon",
                          content: `<${!0 === a.animated ? "a" : ""}:${a.name}:${a.id}>`,
                          emoji: a,
                      }
                    : { type: "text", content: i };
            },
        },
        text: {
            ...G,
            match: (e, t) =>
                "string" == typeof t.textExclusions && "" !== t.textExclusions
                    ? (0, _.VC)(t.textExclusions).exec(e)
                    : null != G.match
                      ? G.match(e, t, "")
                      : null,
        },
    },
    K = {
        inlineCode: x(U.inlineCode),
        codeBlock: x(U.codeBlock),
        mention: {
            match: a().anyScopeRegex(F),
            parse(e, t, n) {
                let { isNotification: i, guild: s, channelId: a } = n,
                    o = N.default.getUser(e[1]);
                if (null == o) return { content: e[0] };
                let l = D.Ay.getUserTag(o, { identifiable: i && C.A.enabled ? "never" : "always" });
                if (i) {
                    let e = b.Ay.getNickname(s?.id, a, o) ?? D.Ay.getGlobalName(o);
                    return { content: null != e ? `@${e}` : `@${l}` };
                }
                {
                    if (o.bot) return { content: `@${l}` };
                    let e = "";
                    if (s?.id != null) {
                        let t = l.toLowerCase();
                        e = r().some(I.A.getUnsafeMutableRoles(s.id), (e) => t.startsWith(e.name.toLowerCase()))
                            ? `#${`${o.discriminator}`.padStart(4, "0")}`
                            : "";
                    }
                    return { content: `@${l}${e}` };
                }
            },
        },
        roleMention: {
            match: a().anyScopeRegex(V),
            parse(e, t, n) {
                let { guild: i } = n;
                if (null != i) {
                    let t = I.A.getRole(i.id, e[1]);
                    if (null != t) return { content: `@${t.name}` };
                }
                return { content: e[0] };
            },
        },
        channel: {
            match: a().anyScopeRegex(B),
            parse(e) {
                let t = m.A.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, l.m1)(t, N.default, y.A, !0, !0) };
            },
        },
        emoji: {
            match: a().anyScopeRegex(j),
            parse(e, t, n) {
                let [i, r, s] = e,
                    { guild: a } = n,
                    o = u.Ay.getDisambiguatedEmojiContext(a ? a.id : null).getById(s),
                    l = null != o ? o.name : r;
                return { content: `:${l}:`, id: s };
            },
        },
        soundboard: {
            match: a().anyScopeRegex(h.ds),
            parse(e) {
                let [t, n, i] = e;
                return { content: `<sound:${n}:${i}>` };
            },
        },
        spoiler: {
            match: a().anyScopeRegex(L.VFs),
            parse: () => ({ content: `<${M.intl.string(M.t["F+x38C"]).toLowerCase()}>` }),
        },
        staticRouteLink: { match: a().anyScopeRegex(L.P0V), parse: (e) => ({ content: `<id:${e[1]}>` }) },
        timestamp: {
            ...U.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let i = U.timestamp.parse(...t);
                return "text" === i.type ? { content: i.content } : { content: i.formatted };
            },
        },
        text: { ...G },
    };
[W, K].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let $ = a().parserFor(W),
    z = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function q(e, t, n, i) {
    let r = "",
        s = [];
    return (
        e.forEach((e) => {
            if (
                null != i &&
                ("customEmoticon" === e.type && i(e.emoji, !1), "emoticon" === e.type || "text" === e.type)
            ) {
                let n,
                    r = c.Ay.translateSurrogatesToInlineEmoji(e.content);
                for (; null !== (n = z.exec(r)); ) {
                    let r;
                    null != n[1] && "" !== n[1]
                        ? t.emojiContext && (r = t.emojiContext.getById(n[1]))
                        : (r = c.Ay.getByName(n[2])),
                        r && i(r, e.isShortcut || !1);
                }
            }
            if ("string" == typeof e.content)
                switch (e.type) {
                    case "emoji":
                        s.push({ position: r.length, length: e.content.length, id: e.id }), (r += e.content);
                        break;
                    case "codeBlock":
                    case "inlineCode":
                    case "mention":
                    case "roleMention":
                    case "channel":
                        !0 === t.isNotification ? (r += (0, o.az)(e.content)) : (r += e.content);
                        break;
                    default:
                        r += n(e.content);
                }
            else if (e.content.constructor === Array) {
                let { content: a, emoji: o } = q(e.content, t, n, i);
                for (let e of o) s.push({ position: r.length + e.position, length: e.length, id: e.id });
                r += a;
            } else console.warn("Unknown message item type: ", e);
        }),
        { content: r, emoji: s }
    );
}
function Z(e) {
    let t,
        n = e?.getGuildId(),
        i = null != n ? T.A.getGuild(n) : null,
        s = S.A.can(L.xBc.MENTION_EVERYONE, e);
    if (e?.isPrivate()) {
        t = e.recipients.map((e) => ({ userId: e, nick: null }));
        let n = N.default.getCurrentUser();
        null != n && t.push({ userId: n.id, nick: null });
    } else
        t =
            null != n
                ? A.Ay.getMembers(n).map((e) => {
                      let { userId: t, nick: n } = e;
                      return { userId: t, nick: n };
                  })
                : [];
    let a = r()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    i = N.default.getUser(n);
                return null == i || e.push({ id: n, text: i.tag }), e;
            }, []),
        ),
        o = r()(null != i ? I.A.getSortedRoles(i.id) : [])
            .filter((e) => {
                let { mentionable: t } = e;
                return s || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return { id: t, text: n };
            }),
        c = r()(g.Ay.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return { id: t, text: n };
        }),
        d =
            null != n
                ? r()(v.L3)
                      .filter((e) => e !== g.I6)
                      .flatMap((e) =>
                          g.Ay.getChannels(n)[e].map((e) =>
                              e.channel.isCategory() && !S.A.can(L.xBc.VIEW_CHANNEL, e.channel)
                                  ? null
                                  : { id: e.channel.id, text: (0, l.m1)(e.channel, N.default, y.A) },
                          ),
                      )
                      .filter(O.Vq)
                      .value()
                : [],
        _ = p.A.computeAllActiveJoinedThreads(n).map((e) => ({ id: e.id, text: (0, l.m1)(e, N.default, y.A) })),
        h = u.Ay.getDisambiguatedEmojiContext(n),
        f = h.getEscapedCustomEmoticonNames(),
        E = h.getCustomEmoji(),
        m = h.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: o,
        guild: i,
        users: a,
        channels: c.concat(d).concat(_),
        emojiContext: h,
        customEmoticonsRegex: m,
        customEmoji: E,
        textExclusions: f,
        isNotification: !1,
    };
}
function X(e) {
    return e;
}
function Q(e, t, n) {
    let i = m.A.getChannel(t),
        s = null != i ? i.getGuildId() : null,
        o = null != s ? T.A.getGuild(s) : null,
        l = n ? K : r().omit(K, ["spoiler", "timestamp"]),
        u = n ? X : c.Ay.translateSurrogatesToInlineEmoji,
        d = a().parserFor(l),
        _ = { inline: !0, guild: o, channelId: t, isNotification: n };
    return q(d(e, _), _, u);
}
let J = {
    parse(e, t) {
        var n, i;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            s = r ?? Z(e),
            a = { content: t, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] };
        return (
            (n = a.content),
            (i = (t, n) => {
                R.Ay.isEmojiPremiumLocked({ emoji: t, channel: e, intention: w.EmojiIntention.CHAT })
                    ? a.invalidEmojis.push(t)
                    : n || a.validNonShortcutEmojis.push(t);
            }),
            (a.content = q($(n, s), s, c.Ay.translateInlineEmojiToSurrogates, i).content),
            a
        );
    },
    parsePreprocessor: (e, t) => $(t, Z(e)),
    unparse: (e, t, n) => Q(e, t, n).content,
    unparseWithMeta: Q,
};
