(n.d(t, { Ay: () => et }), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(478676),
    s = n.n(a),
    l = n(551639),
    o = n(47167),
    d = n(555424),
    c = n(236285),
    u = n(7584),
    _ = n(620181),
    E = n(999915),
    A = n(704726),
    h = n(113051),
    f = n(677413),
    I = n(863005),
    p = n(253932),
    T = n(734057),
    m = n(808728),
    g = n(696451),
    S = n(317525),
    N = n(71393),
    C = n(576705),
    O = n(994500),
    R = n(351906),
    L = n(287809),
    y = n(768038),
    D = n(690521),
    v = n(403362),
    b = n(562153),
    P = n(427262),
    M = n(652215);
n(827669);
var U = n(307731),
    w = n(105292);
function G(e, t, n, i) {
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
    return { match: s().anyScopeRegex(e), parse: (e) => ({ type: "text", content: e[0] }) };
}
let F = E.Ay.RULES,
    B = A.Ay,
    V = /^<@!?(\d+)>/,
    H = /^<@&(\d+)>/,
    j = /^<#(\d+)>/,
    W = /^<a?:(\w+):(\d+)>/,
    Y = /(@everyone|@here|@Clyde)\b/,
    K = /^[^\s]+@[^\s]+\.[^\s.]+/,
    $ = {
        link: x(s().defaultRules.link),
        autolink: x(s().defaultRules.autolink),
        url: x(s().defaultRules.url),
        inlineCode: x(F.inlineCode),
        codeBlock: x(F.codeBlock),
        rawUserMention: k(V),
        rawRoleMention: k(H),
        rawChannelMention: k(j),
        rawEmoji: k(W),
        mention: {
            match(e, t, n) {
                let i = n.split(" ").pop() + e,
                    r = n[n.length - 1];
                if ((null == r || !d._j.has(r)) && K.test(i)) return null;
                let a = G("$", e, t.games, "gameMention");
                if (
                    null != a ||
                    null != (a = G("@", e, t.users, "mention")) ||
                    null != (a = G("@", e, t.mentionableRoles, "roleMention"))
                )
                    return a;
                if (
                    null ==
                    (a = G(
                        "@",
                        e,
                        t.users.map((e) => ({ ...e, text: e.text.split("#")[0] })),
                        "mention",
                    ))
                )
                    return null;
                let s = Y.exec(e);
                if (null != s && a[0].length <= s[0].length) return null;
                if ("" === n) {
                    let t = f.U1.exec(e);
                    if (null != t && a[0].length <= t[0].length) return null;
                }
                return a;
            },
            parse(e) {
                let [, t, n] = e;
                if ("gameMention" === n) return { type: n, content: `<@$${t}>` };
                let i = "@";
                return ("roleMention" === n && (i += "&"), { type: n, content: `<${i}${t}>` });
            },
        },
        channel: {
            match: (e, t) =>
                (function (e, t) {
                    if ("#" !== e[0]) return;
                    if ('"' !== e[1]) return G("#", e, t, "channel");
                    let n = 2;
                    for (; n < e.length; n++) {
                        if ("\\" === e[n]) {
                            n++;
                            continue;
                        }
                        if ('"' === e[n]) break;
                    }
                    let i = e.substring(0, n + 1),
                        r = (0, o.LG)(e.substring(2, n));
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
                if (!p.j7.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let i = u.Ay.EMOJI_SHORTCUT_RE.exec(e);
                return null == i || (i[0].length !== e.length && " " !== e[i[0].length] && "\n" !== e[i[0].length])
                    ? null
                    : i;
            },
            parse: (e) => ({ type: "emoticon", content: u.Ay.convertShortcutToName(e[1]), isShortcut: !0 }),
        },
        emoji: {
            order: F.emoji.order,
            match: (e) => u.Ay.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [i, r] = e,
                    { customEmoji: a, emojiContext: s } = n,
                    l = (0, _.A)(s, r, a);
                return null != l
                    ? {
                          type: "customEmoticon",
                          content: `<${!0 === l.animated ? "a" : ""}:${l.originalName ?? l.name}:${l.id}>`,
                          emoji: l,
                      }
                    : { type: "text", content: i };
            },
        },
        customEmoticons: {
            match: (e, t) => t.customEmoticonsRegex?.exec(e) ?? null,
            parse(e, t, n) {
                let [i, r] = e,
                    { emojiContext: a } = n,
                    s = a.getEmoticonByName(r);
                return null != s
                    ? {
                          type: "customEmoticon",
                          content: `<${!0 === s.animated ? "a" : ""}:${s.name}:${s.id}>`,
                          emoji: s,
                      }
                    : { type: "text", content: i };
            },
        },
        text: {
            ...B,
            match: (e, t) =>
                "string" == typeof t.textExclusions && "" !== t.textExclusions
                    ? (0, A.VC)(t.textExclusions).exec(e)
                    : null != B.match
                      ? B.match(e, t, "")
                      : null,
        },
    },
    z = {
        inlineCode: x(F.inlineCode),
        codeBlock: x(F.codeBlock),
        mention: {
            match: s().anyScopeRegex(V),
            parse(e, t, n) {
                let { isNotification: i, guild: a, channelId: s } = n,
                    l = L.default.getUser(e[1]);
                if (null == l) return { content: e[0] };
                let o = P.Ay.getUserTag(l, { identifiable: i && R.A.enabled ? "never" : "always" });
                if (i) {
                    let e = b.Ay.getNickname(a?.id, s, l) ?? P.Ay.getGlobalName(l);
                    return { content: null != e ? `@${e}` : `@${o}` };
                }
                {
                    if (l.bot) return { content: `@${o}` };
                    let e = "";
                    if (a?.id != null) {
                        let t = o.toLowerCase();
                        e = r().some(S.A.getUnsafeMutableRoles(a.id), (e) => t.startsWith(e.name.toLowerCase()))
                            ? `#${`${l.discriminator}`.padStart(4, "0")}`
                            : "";
                    }
                    return { content: `@${o}${e}` };
                }
            },
        },
        roleMention: {
            match: s().anyScopeRegex(H),
            parse(e, t, n) {
                let { guild: i } = n;
                if (null != i) {
                    let t = S.A.getRole(i.id, e[1]);
                    if (null != t) return { content: `@${t.name}` };
                }
                return { content: e[0] };
            },
        },
        channel: {
            match: s().anyScopeRegex(j),
            parse(e) {
                let t = T.A.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, o.m1)(t, L.default, O.A, !0, !0) };
            },
        },
        emoji: {
            match: s().anyScopeRegex(W),
            parse(e, t, n) {
                let [i, r, a] = e,
                    { guild: s } = n,
                    l = c.Ay.getDisambiguatedEmojiContext(s ? s.id : null).getById(a),
                    o = null != l ? l.name : r;
                return { content: `:${o}:`, id: a };
            },
        },
        soundboard: {
            match: s().anyScopeRegex(h.ds),
            parse(e) {
                let [t, n, i] = e;
                return { content: `<sound:${n}:${i}>` };
            },
        },
        unicodeEmoji: {
            match: s().anyScopeRegex(u.Ay.EMOJI_NAME_RE),
            parse(e) {
                let [t, n] = e,
                    i = u.Ay.convertNameToSurrogate(n);
                return { content: "" !== i ? i : t };
            },
        },
        spoiler: {
            match: s().anyScopeRegex(M.VFs),
            parse: () => ({ content: `<${w.intl.string(w.t["F+x38C"]).toLowerCase()}>` }),
        },
        staticRouteLink: { match: s().anyScopeRegex(M.P0V), parse: (e) => ({ content: `<id:${e[1]}>` }) },
        timestamp: {
            ...F.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let i = F.timestamp.parse(...t);
                return "text" === i.type ? { content: i.content } : { content: i.formatted };
            },
        },
        text: { ...B },
    };
[$, z].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let X = s().parserFor($),
    q = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function Z(e, t, n, i) {
    let r = "",
        a = [];
    return (
        e.forEach((e) => {
            if (
                null != i &&
                ("customEmoticon" === e.type && i(e.emoji, !1), "emoticon" === e.type || "text" === e.type)
            ) {
                let n,
                    r = u.Ay.translateSurrogatesToInlineEmoji(e.content);
                for (; null !== (n = q.exec(r));) {
                    let r;
                    (null != n[1] && "" !== n[1]
                        ? t.emojiContext && (r = t.emojiContext.getById(n[1]))
                        : (r = u.Ay.getByName(n[2])),
                        r && i(r, e.isShortcut || !1));
                }
            }
            if ("string" == typeof e.content)
                switch (e.type) {
                    case "emoji":
                        (a.push({ position: r.length, length: e.content.length, id: e.id }), (r += e.content));
                        break;
                    case "codeBlock":
                    case "inlineCode":
                    case "mention":
                    case "roleMention":
                    case "gameMention":
                    case "channel":
                        !0 === t.isNotification ? (r += (0, l.az)(e.content)) : (r += e.content);
                        break;
                    default:
                        r += n(e.content);
                }
            else if (e.content.constructor === Array) {
                let { content: s, emoji: l } = Z(e.content, t, n, i);
                for (let e of l) a.push({ position: r.length + e.position, length: e.length, id: e.id });
                r += s;
            } else console.warn("Unknown message item type: ", e);
        }),
        { content: r, emoji: a }
    );
}
function Q(e, t) {
    let n,
        i = e?.getGuildId(),
        a = null != i ? N.A.getGuild(i) : null,
        s = C.A.can(M.xBc.MENTION_EVERYONE, e);
    if (e?.isPrivate()) {
        n = e.recipients.map((e) => ({ userId: e, nick: null }));
        let t = L.default.getCurrentUser();
        null != t && n.push({ userId: t.id, nick: null });
    } else
        n =
            null != i
                ? g.Ay.getMembers(i).map((e) => {
                      let { userId: t, nick: n } = e;
                      return { userId: t, nick: n };
                  })
                : [];
    let l = r()(
            n.reduce((e, t) => {
                let { userId: n } = t,
                    i = L.default.getUser(n);
                return (null == i || e.push({ id: n, text: i.tag }), e);
            }, []),
        ),
        d = r()(null != a ? S.A.getSortedRoles(a.id) : [])
            .filter((e) => {
                let { mentionable: t } = e;
                return s || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return { id: t, text: n };
            }),
        u = r()(m.Ay.getTextChannelNameDisambiguations(i)).map((e) => {
            let { id: t, name: n } = e;
            return { id: t, text: n };
        }),
        _ =
            null != i
                ? r()(y.L3)
                      .filter((e) => e !== m.I6)
                      .flatMap((e) =>
                          m.Ay.getChannels(i)[e].map((e) =>
                              e.channel.isCategory() && !C.A.can(M.xBc.VIEW_CHANNEL, e.channel)
                                  ? null
                                  : { id: e.channel.id, text: (0, o.m1)(e.channel, L.default, O.A) },
                          ),
                      )
                      .filter(v.Vq)
                      .value()
                : [],
        E = I.A.computeAllActiveJoinedThreads(i).map((e) => ({ id: e.id, text: (0, o.m1)(e, L.default, O.A) })),
        A = c.Ay.getDisambiguatedEmojiContext(i),
        h = A.getEscapedCustomEmoticonNames(),
        f = A.getCustomEmoji(),
        p = A.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: d,
        guild: a,
        users: l,
        games: r()(null != t ? Array.from(t.values()) : []).map((e) => {
            let { id: t, name: n } = e;
            return { id: t, text: n };
        }),
        channels: u.concat(_).concat(E),
        emojiContext: A,
        customEmoticonsRegex: p,
        customEmoji: f,
        textExclusions: h,
        isNotification: !1,
    };
}
function J(e) {
    return e;
}
function ee(e, t, n) {
    let i = T.A.getChannel(t),
        a = null != i ? i.getGuildId() : null,
        l = null != a ? N.A.getGuild(a) : null,
        o = n ? z : r().omit(z, ["spoiler", "timestamp", "unicodeEmoji"]),
        d = n ? J : u.Ay.translateSurrogatesToInlineEmoji,
        c = s().parserFor(o),
        _ = { inline: !0, guild: l, channelId: t, isNotification: n };
    return Z(c(e, _), _, d);
}
let et = {
    parse(e, t) {
        var n, i;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            s = r ?? Q(e, a),
            l = { content: t, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] };
        return (
            (n = l.content),
            (i = (t, n) => {
                D.Ay.isEmojiPremiumLocked({ emoji: t, channel: e, intention: U.EmojiIntention.CHAT })
                    ? l.invalidEmojis.push(t)
                    : n || l.validNonShortcutEmojis.push(t);
            }),
            (l.content = Z(X(n, s), s, u.Ay.translateInlineEmojiToSurrogates, i).content),
            l
        );
    },
    parsePreprocessor: (e, t) => X(t, Q(e)),
    unparse: (e, t, n) => ee(e, t, n).content,
    unparseWithMeta: ee,
};
