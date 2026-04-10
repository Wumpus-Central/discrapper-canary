"use strict";
n.d(t, { Ay: () => et }), n(321073);
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
    m = n(253932),
    E = n(734057),
    g = n(808728),
    A = n(696451),
    I = n(317525),
    T = n(71393),
    S = n(576705),
    y = n(994500),
    v = n(351906),
    N = n(287809),
    C = n(248465),
    R = n(690521),
    O = n(562153),
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
function x(e, t, n) {
    if (t[0] !== e) return;
    if ('"' !== t[1]) return M(e, t, n, "channel");
    let r = 2;
    for (; r < t.length; r++) {
        if ("\\" === t[r]) {
            r++;
            continue;
        }
        if ('"' === t[r]) break;
    }
    let i = t.substring(0, r + 1),
        s = (0, l.LG)(t.substring(2, r));
    return n
        .sortBy((e) => {
            let { text: t } = e;
            return -t.length;
        })
        .filter((e) => {
            let { text: t } = e;
            return s === t;
        })
        .map((e) => {
            let { id: t } = e;
            return [i, t, "channel"];
        })
        .first();
}
function P(e) {
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
    H = /^<a?:(\w+):(\d+)>/,
    j = /(@everyone|@here|@Clyde)\b/,
    Y = /^[^\s]+@[^\s]+\.[^\s.]+/,
    W = {
        link: P(a().defaultRules.link),
        autolink: P(a().defaultRules.autolink),
        url: P(a().defaultRules.url),
        inlineCode: P(U.inlineCode),
        codeBlock: P(U.codeBlock),
        rawUserMention: k(F),
        rawRoleMention: k(V),
        rawChannelMention: k(B),
        rawEmoji: k(H),
        mention: {
            match(e, t, n) {
                let r = n.split(" ").pop() + e;
                if (Y.test(r)) return null;
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
                let s = j.exec(e);
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
            match: (e, t) => x("#", e, t.channels) ?? null,
            parse: (e) => ({ type: "text", content: `<#${e[1]}>` }),
        },
        emoticon: {
            match(e, t, n) {
                if (!m.j7.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let r = c.Ay.EMOJI_SHORTCUT_RE.exec(e);
                return null == r || (r[0].length !== e.length && " " !== e[r[0].length] && "\n" !== e[r[0].length])
                    ? null
                    : r;
            },
            parse: (e) => ({ type: "emoticon", content: c.Ay.convertShortcutToName(e[1]), isShortcut: !0 }),
        },
        emoji: {
            order: U.emoji.order,
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
        inlineCode: P(U.inlineCode),
        codeBlock: P(U.codeBlock),
        mention: {
            match: a().anyScopeRegex(F),
            parse(e, t, n) {
                let { isNotification: r, guild: s, channelId: a } = n,
                    o = N.default.getUser(e[1]);
                if (null == o) return { content: e[0] };
                let l = b.Ay.getUserTag(o, { identifiable: r && v.A.enabled ? "never" : "always" });
                if (r) {
                    let e = O.Ay.getNickname(s?.id, a, o) ?? b.Ay.getGlobalName(o);
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
            match: a().anyScopeRegex(V),
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
            match: a().anyScopeRegex(B),
            parse(e) {
                let t = E.A.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, l.m1)(t, N.default, y.A, !0, !0) };
            },
        },
        emoji: {
            match: a().anyScopeRegex(H),
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
            ...U.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = U.timestamp.parse(...t);
                return "text" === r.type ? { content: r.content } : { content: r.formatted };
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
function q(e, t, n) {
    if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
        let r,
            i = c.Ay.translateSurrogatesToInlineEmoji(t.content);
        for (; null !== (r = z.exec(i)); ) {
            let i;
            null != r[1] && "" !== r[1]
                ? e.emojiContext && (i = e.emojiContext.getById(r[1]))
                : (i = c.Ay.getByName(r[2])),
                i && n(i, t.isShortcut || !1);
        }
    }
}
function Z(e, t, n, r) {
    let i = "",
        s = [];
    return (
        e.forEach((e) => {
            if ((q(t, e, r), "string" == typeof e.content))
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
                let { content: a, emoji: o } = Z(e.content, t, n, r);
                for (let e of o) s.push({ position: i.length + e.position, length: e.length, id: e.id });
                i += a;
            } else console.warn("Unknown message item type: ", e);
        }),
        { content: i, emoji: s }
    );
}
function X(e, t, n) {
    return Z($(e, t), t, c.Ay.translateInlineEmojiToSurrogates, n).content;
}
function Q(e) {
    let t,
        n = e?.getGuildId(),
        r = null != n ? T.A.getGuild(n) : null,
        s = S.A.can(D.xBc.MENTION_EVERYONE, e);
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
    let a = i()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    r = N.default.getUser(n);
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
                              text: (0, l.m1)(e.channel, N.default, y.A),
                          })),
                      )
                      .value()
                : [],
        _ = h.A.computeAllActiveJoinedThreads(n).map((e) => ({ id: e.id, text: (0, l.m1)(e, N.default, y.A) })),
        f = u.Ay.getDisambiguatedEmojiContext(n),
        p = f.getEscapedCustomEmoticonNames(),
        m = f.getCustomEmoji(),
        E = f.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: o,
        guild: r,
        users: a,
        channels: c.concat(d).concat(_),
        emojiContext: f,
        customEmoticonsRegex: E,
        customEmoji: m,
        textExclusions: p,
        isNotification: !1,
    };
}
function J(e) {
    return e;
}
function ee(e, t, n) {
    let r = E.A.getChannel(t),
        s = null != r ? r.getGuildId() : null,
        o = null != s ? T.A.getGuild(s) : null,
        l = n ? K : i().omit(K, ["spoiler", "timestamp"]),
        u = n ? J : c.Ay.translateSurrogatesToInlineEmoji,
        d = a().parserFor(l),
        _ = { inline: !0, guild: o, channelId: t, isNotification: n };
    return Z(d(e, _), _, u);
}
let et = {
    parse(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = n ?? Q(e),
            i = { content: t, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] };
        return (
            (i.content = X(i.content, r, (t, n) => {
                R.Ay.isEmojiPremiumLocked({ emoji: t, channel: e, intention: L.EmojiIntention.CHAT })
                    ? i.invalidEmojis.push(t)
                    : n || i.validNonShortcutEmojis.push(t);
            })),
            i
        );
    },
    parsePreprocessor: (e, t) => $(t, Q(e)),
    unparse: (e, t, n) => ee(e, t, n).content,
    unparseWithMeta: ee,
};
