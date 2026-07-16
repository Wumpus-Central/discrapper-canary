"use strict";
n.d(t, { Ay: () => J }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(791332),
    s = n.n(a),
    l = n(551639),
    o = n(47167),
    d = n(159273),
    c = n(7584),
    u = n(29814),
    _ = n(704726),
    E = n(113051),
    A = n(677413),
    h = n(695633),
    I = n(885386),
    f = n(734057),
    p = n(808728),
    T = n(696451),
    m = n(317525),
    g = n(71393),
    S = n(576705),
    N = n(994500),
    C = n(351906),
    R = n(287809),
    O = n(768038),
    L = n(690521),
    D = n(403362),
    y = n(562153),
    v = n(427262),
    b = n(652215),
    M = n(307731),
    P = n(375708);
function U(e, t, n, i) {
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
function w(e) {
    return { order: e.order, match: e.match, parse: (t) => ({ type: e.type, content: t[0] }) };
}
function G(e) {
    return { match: s().anyScopeRegex(e), parse: (e) => ({ type: "text", content: e[0] }) };
}
let x = u.Ay.RULES,
    k = _.Ay,
    F = /^<@!?(\d+)>/,
    V = /^<@&(\d+)>/,
    B = /^<#(\d+)>/,
    H = /^<a?:(\w+):(\d+)>/,
    j = /(@everyone|@here|@Clyde)\b/,
    W = /^[^\s]+@[^\s]+\.[^\s.]+/,
    Y = {
        link: w(s().defaultRules.link),
        autolink: w(s().defaultRules.autolink),
        url: w(s().defaultRules.url),
        inlineCode: w(x.inlineCode),
        codeBlock: w(x.codeBlock),
        rawUserMention: G(F),
        rawRoleMention: G(V),
        rawChannelMention: G(B),
        rawEmoji: G(H),
        mention: {
            match(e, t, n) {
                let i = n.split(" ").pop() + e;
                if (W.test(i)) return null;
                let r = U("@", e, t.users, "mention");
                if (null != r || null != (r = U("@", e, t.mentionableRoles, "roleMention"))) return r;
                if (
                    null ==
                    (r = U(
                        "@",
                        e,
                        t.users.map((e) => ({ ...e, text: e.text.split("#")[0] })),
                        "mention",
                    ))
                )
                    return null;
                let a = j.exec(e);
                if (null != a && r[0].length <= a[0].length) return null;
                if ("" === n) {
                    let t = A.U.exec(e);
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
                    if ('"' !== e[1]) return U("#", e, t, "channel");
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
                if (!I.j7.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let i = c.Ay.EMOJI_SHORTCUT_RE.exec(e);
                return null == i || (i[0].length !== e.length && " " !== e[i[0].length] && "\n" !== e[i[0].length])
                    ? null
                    : i;
            },
            parse: (e) => ({ type: "emoticon", content: c.Ay.convertShortcutToName(e[1]), isShortcut: !0 }),
        },
        emoji: {
            order: x.emoji.order,
            match: (e) => c.Ay.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [i, r] = e,
                    { customEmoji: a } = n,
                    s = a.get(r) ?? null;
                return null != s
                    ? {
                          type: "customEmoticon",
                          content: `<${!0 === s.animated ? "a" : ""}:${s.originalName ?? s.name}:${s.id}>`,
                          emoji: s,
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
            ...k,
            match: (e, t) =>
                "string" == typeof t.textExclusions && "" !== t.textExclusions
                    ? (0, _.VC)(t.textExclusions).exec(e)
                    : null != k.match
                      ? k.match(e, t, "")
                      : null,
        },
    },
    K = {
        inlineCode: w(x.inlineCode),
        codeBlock: w(x.codeBlock),
        mention: {
            match: s().anyScopeRegex(F),
            parse(e, t, n) {
                let { isNotification: i, guild: a, channelId: s } = n,
                    l = R.default.getUser(e[1]);
                if (null == l) return { content: e[0] };
                let o = v.Ay.getUserTag(l, { identifiable: i && C.A.enabled ? "never" : "always" });
                if (i) {
                    let e = y.Ay.getNickname(a?.id, s, l) ?? v.Ay.getGlobalName(l);
                    return { content: null != e ? `@${e}` : `@${o}` };
                }
                {
                    if (l.bot) return { content: `@${o}` };
                    let e = "";
                    if (a?.id != null) {
                        let t = o.toLowerCase();
                        e = r().some(m.A.getUnsafeMutableRoles(a.id), (e) => t.startsWith(e.name.toLowerCase()))
                            ? `#${`${l.discriminator}`.padStart(4, "0")}`
                            : "";
                    }
                    return { content: `@${o}${e}` };
                }
            },
        },
        roleMention: {
            match: s().anyScopeRegex(V),
            parse(e, t, n) {
                let { guild: i } = n;
                if (null != i) {
                    let t = m.A.getRole(i.id, e[1]);
                    if (null != t) return { content: `@${t.name}` };
                }
                return { content: e[0] };
            },
        },
        channel: {
            match: s().anyScopeRegex(B),
            parse(e) {
                let t = f.A.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, o.m1)(t, R.default, N.A, !0, !0) };
            },
        },
        emoji: {
            match: s().anyScopeRegex(H),
            parse(e, t, n) {
                let [i, r, a] = e,
                    { guild: s } = n,
                    l = d.Ay.getDisambiguatedEmojiContext(s ? s.id : null).getById(a),
                    o = null != l ? l.name : r;
                return { content: `:${o}:`, id: a };
            },
        },
        soundboard: {
            match: s().anyScopeRegex(E.ds),
            parse(e) {
                let [t, n, i] = e;
                return { content: `<sound:${n}:${i}>` };
            },
        },
        spoiler: {
            match: s().anyScopeRegex(b.VFs),
            parse: () => ({ content: `<${P.intl.string(P.t["F+x38C"]).toLowerCase()}>` }),
        },
        staticRouteLink: { match: s().anyScopeRegex(b.P0V), parse: (e) => ({ content: `<id:${e[1]}>` }) },
        timestamp: {
            ...x.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let i = x.timestamp.parse(...t);
                return "text" === i.type ? { content: i.content } : { content: i.formatted };
            },
        },
        text: { ...k },
    };
[Y, K].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let $ = s().parserFor(Y),
    z = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function q(e, t, n, i) {
    let r = "",
        a = [];
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
                        a.push({ position: r.length, length: e.content.length, id: e.id }), (r += e.content);
                        break;
                    case "codeBlock":
                    case "inlineCode":
                    case "mention":
                    case "roleMention":
                    case "channel":
                        !0 === t.isNotification ? (r += (0, l.az)(e.content)) : (r += e.content);
                        break;
                    default:
                        r += n(e.content);
                }
            else if (e.content.constructor === Array) {
                let { content: s, emoji: l } = q(e.content, t, n, i);
                for (let e of l) a.push({ position: r.length + e.position, length: e.length, id: e.id });
                r += s;
            } else console.warn("Unknown message item type: ", e);
        }),
        { content: r, emoji: a }
    );
}
function Z(e) {
    let t,
        n = e?.getGuildId(),
        i = null != n ? g.A.getGuild(n) : null,
        a = S.A.can(b.xBc.MENTION_EVERYONE, e);
    if (e?.isPrivate()) {
        t = e.recipients.map((e) => ({ userId: e, nick: null }));
        let n = R.default.getCurrentUser();
        null != n && t.push({ userId: n.id, nick: null });
    } else
        t =
            null != n
                ? T.Ay.getMembers(n).map((e) => {
                      let { userId: t, nick: n } = e;
                      return { userId: t, nick: n };
                  })
                : [];
    let s = r()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    i = R.default.getUser(n);
                return null == i || e.push({ id: n, text: i.tag }), e;
            }, []),
        ),
        l = r()(null != i ? m.A.getSortedRoles(i.id) : [])
            .filter((e) => {
                let { mentionable: t } = e;
                return a || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return { id: t, text: n };
            }),
        c = r()(p.Ay.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return { id: t, text: n };
        }),
        u =
            null != n
                ? r()(O.L3)
                      .filter((e) => e !== p.I6)
                      .flatMap((e) =>
                          p.Ay.getChannels(n)[e].map((e) =>
                              e.channel.isCategory() && !S.A.can(b.xBc.VIEW_CHANNEL, e.channel)
                                  ? null
                                  : { id: e.channel.id, text: (0, o.m1)(e.channel, R.default, N.A) },
                          ),
                      )
                      .filter(D.Vq)
                      .value()
                : [],
        _ = h.A.computeAllActiveJoinedThreads(n).map((e) => ({ id: e.id, text: (0, o.m1)(e, R.default, N.A) })),
        E = d.Ay.getDisambiguatedEmojiContext(n),
        A = E.getEscapedCustomEmoticonNames(),
        I = E.getCustomEmoji(),
        f = E.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: l,
        guild: i,
        users: s,
        channels: c.concat(u).concat(_),
        emojiContext: E,
        customEmoticonsRegex: f,
        customEmoji: I,
        textExclusions: A,
        isNotification: !1,
    };
}
function X(e) {
    return e;
}
function Q(e, t, n) {
    let i = f.A.getChannel(t),
        a = null != i ? i.getGuildId() : null,
        l = null != a ? g.A.getGuild(a) : null,
        o = n ? K : r().omit(K, ["spoiler", "timestamp"]),
        d = n ? X : c.Ay.translateSurrogatesToInlineEmoji,
        u = s().parserFor(o),
        _ = { inline: !0, guild: l, channelId: t, isNotification: n };
    return q(u(e, _), _, d);
}
let J = {
    parse(e, t) {
        var n, i;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            a = r ?? Z(e),
            s = { content: t, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] };
        return (
            (n = s.content),
            (i = (t, n) => {
                L.Ay.isEmojiPremiumLocked({ emoji: t, channel: e, intention: M.EmojiIntention.CHAT })
                    ? s.invalidEmojis.push(t)
                    : n || s.validNonShortcutEmojis.push(t);
            }),
            (s.content = q($(n, a), a, c.Ay.translateInlineEmojiToSurrogates, i).content),
            s
        );
    },
    parsePreprocessor: (e, t) => $(t, Z(e)),
    unparse: (e, t, n) => Q(e, t, n).content,
    unparseWithMeta: Q,
};
