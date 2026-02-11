"use strict";
n.d(t, { Ay: () => ea }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(791332),
    s = n.n(a),
    o = n(551639),
    l = n(47167),
    u = n(508675),
    c = n(7584),
    d = n(352505),
    _ = n(542664),
    f = n(704726),
    h = n(335432),
    p = n(677413),
    g = n(863005),
    E = n(253932),
    A = n(734057),
    I = n(760751),
    T = n(808728),
    y = n(696451),
    S = n(317525),
    v = n(71393),
    C = n(576705),
    b = n(994500),
    N = n(351906),
    R = n(287809),
    O = n(248465),
    D = n(690521),
    L = n(562153),
    w = n(427262),
    x = n(652215),
    P = n(307731),
    M = n(985018);
function k(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    let i = t.substr(e.length);
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
function U(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    if ('"' !== t[1]) return k(e, t, n, r);
    let i = 2;
    for (; i < t.length; i++) {
        if ("\\" === t[i]) {
            i++;
            continue;
        }
        if ('"' === t[i]) break;
    }
    let a = t.substring(0, i + 1),
        s = (0, l.LG)(t.substring(2, i));
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
            return [a, t, r];
        })
        .first();
}
function G(e) {
    return { order: e.order, match: e.match, parse: (t) => ({ type: e.type, content: t[0] }) };
}
function F(e) {
    return { match: s().anyScopeRegex(e), parse: (e) => ({ type: "text", content: e[0] }) };
}
let V = _.A.RULES,
    B = f.Ay,
    j = /^<@!?(\d+)>/,
    H = /^<@&(\d+)>/,
    Y = /^<@\$(\d+)>/,
    W = /^<#(\d+)>/,
    K = /^<a?:(\w+):(\d+)>/,
    $ = /(@everyone|@here|@Clyde)\b/,
    z = /^[^\s]+@[^\s]+\.[^\s.]+/,
    q = {
        link: G(s().defaultRules.link),
        autolink: G(s().defaultRules.autolink),
        url: G(s().defaultRules.url),
        inlineCode: G(V.inlineCode),
        codeBlock: G(V.codeBlock),
        rawUserMention: F(j),
        rawRoleMention: F(H),
        rawChannelMention: F(W),
        rawEmoji: F(K),
        mention: {
            match(e, t, n) {
                let r = n.split(" ").pop() + e;
                if (z.test(r)) return null;
                let i = k("@", e, t.users, "mention");
                if (i || (i = k("@", e, t.mentionableRoles, "roleMention"))) return i;
                if (
                    !(i = k(
                        "@",
                        e,
                        t.users.map((e) => ({ ...e, text: e.text.split("#")[0] })),
                        "mention",
                    ))
                )
                    return null;
                let a = $.exec(e);
                if (null != a && i[0].length <= a[0].length) return null;
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
        channel: { match: (e, t) => U("#", e, t.channels), parse: (e) => ({ type: "text", content: `<#${e[1]}>` }) },
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
            order: V.emoji.order,
            match: (e) => c.Ay.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [r, i] = e,
                    { customEmoji: a } = n,
                    s = Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
                return null != s
                    ? {
                          type: "customEmoticon",
                          content: `<${!0 === s.animated ? "a" : ""}:${s.originalName ?? s.name}:${s.id}>`,
                          emoji: s,
                      }
                    : { type: "text", content: r };
            },
        },
        customEmoticons: {
            match: (e, t) => t.customEmoticonsRegex?.exec(e) ?? null,
            parse(e, t, n) {
                let [r, i] = e,
                    { emojiContext: a } = n,
                    s = a.getEmoticonByName(i);
                return null != s
                    ? {
                          type: "customEmoticon",
                          content: `<${!0 === s.animated ? "a" : ""}:${s.name}:${s.id}>`,
                          emoji: s,
                      }
                    : { type: "text", content: r };
            },
        },
        text: {
            ...B,
            match: (e, t) =>
                "string" == typeof t.textExclusions && "" !== t.textExclusions
                    ? (0, f.VC)(t.textExclusions).exec(e)
                    : null != B.match
                      ? B.match(e, t, "")
                      : null,
        },
    },
    X = {
        inlineCode: G(V.inlineCode),
        codeBlock: G(V.codeBlock),
        mention: {
            match: s().anyScopeRegex(j),
            parse(e, t, n) {
                let { isNotification: r, guild: a, channelId: s } = n,
                    o = R.default.getUser(e[1]);
                if (null == o) return { content: e[0] };
                let l = w.Ay.getUserTag(o, { identifiable: r && N.A.enabled ? "never" : "always" });
                if (r) {
                    let e = L.Ay.getNickname(a?.id, s, o) ?? w.Ay.getGlobalName(o);
                    return { content: null != e ? `@${e}` : `@${l}` };
                }
                {
                    if (o.bot) return { content: `@${l}` };
                    let e = "";
                    if (a?.id != null) {
                        let t = l.toLowerCase();
                        e = i().some(S.A.getUnsafeMutableRoles(a.id), (e) => t.startsWith(e.name.toLowerCase()))
                            ? `#${`${o.discriminator}`.padStart(4, "0")}`
                            : "";
                    }
                    return { content: `@${l}${e}` };
                }
            },
        },
        roleMention: {
            match: s().anyScopeRegex(H),
            parse(e, t, n) {
                let { guild: r } = n;
                if (null != r) {
                    let t = S.A.getRole(r.id, e[1]);
                    if (null != t) return { content: `@${t.name}` };
                }
                return { content: e[0] };
            },
        },
        gameMention: {
            match: s().anyScopeRegex(Y),
            parse(e, t, n) {
                let { guild: r } = n;
                if (
                    r &&
                    d.M.getCurrentConfig({ guildId: r.id, location: "Message Unparser" }, { autoTrackExposure: !0 })
                        .enabled
                ) {
                    let t = I.A.getDetectableGame(e[1]);
                    return null != t ? { content: `@${t.name}` } : { content: `@${M.intl.string(M.t["11pdXZ"])}` };
                }
                return { content: e[0] };
            },
        },
        channel: {
            match: s().anyScopeRegex(W),
            parse(e) {
                let t = A.A.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, l.m1)(t, R.default, b.A, !0, !0) };
            },
        },
        emoji: {
            match: s().anyScopeRegex(K),
            parse(e, t, n) {
                let [r, i, a] = e,
                    { guild: s } = n,
                    o = u.Ay.getDisambiguatedEmojiContext(s ? s.id : null).getById(a),
                    l = null != o ? o.name : i;
                return { content: `:${l}:`, id: a };
            },
        },
        soundboard: {
            match: s().anyScopeRegex(h.ds),
            parse(e) {
                let [t, n, r] = e;
                return { content: `<sound:${n}:${r}>` };
            },
        },
        spoiler: {
            match: s().anyScopeRegex(x.VFs),
            parse: () => ({ content: `<${M.intl.string(M.t["F+x38C"]).toLowerCase()}>` }),
        },
        staticRouteLink: { match: s().anyScopeRegex(x.P0V), parse: (e) => ({ content: `<id:${e[1]}>` }) },
        timestamp: {
            ...V.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = V.timestamp.parse(...t);
                return "text" === r.type ? { content: r.content } : { content: r.formatted };
            },
        },
        text: { ...B },
    };
[q, X].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let Z = s().parserFor(q),
    Q = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function J(e, t, n) {
    if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
        let r,
            i = c.Ay.translateSurrogatesToInlineEmoji(t.content);
        for (; null !== (r = Q.exec(i)); ) {
            let i;
            null != r[1] && "" !== r[1]
                ? e.emojiContext && (i = e.emojiContext.getById(r[1]))
                : (i = c.Ay.getByName(r[2])),
                i && n(i, t.isShortcut || !1);
        }
    }
}
function ee(e, t, n, r) {
    let i = "",
        a = [];
    return (
        e.forEach((e) => {
            if ((J(t, e, r), "string" == typeof e.content))
                switch (e.type) {
                    case "emoji":
                        a.push({ position: i.length, length: e.content.length, id: e.id }), (i += e.content);
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
                let { content: s, emoji: o } = ee(e.content, t, n, r);
                for (let e of o) a.push({ position: i.length + e.position, length: e.length, id: e.id });
                i += s;
            } else console.warn("Unknown message item type: ", e);
        }),
        { content: i, emoji: a }
    );
}
function et(e, t, n) {
    return ee(Z(e, t), t, c.Ay.translateInlineEmojiToSurrogates, n).content;
}
function en(e) {
    let t,
        n = e?.getGuildId(),
        r = null != n ? v.A.getGuild(n) : null,
        a = C.A.can(x.xBc.MENTION_EVERYONE, e);
    t = e?.isPrivate()
        ? e.recipients.map((e) => ({ userId: e, nick: null }))
        : null != n
          ? y.Ay.getMembers(n).map((e) => {
                let { userId: t, nick: n } = e;
                return { userId: t, nick: n };
            })
          : [];
    let s = i()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    r = R.default.getUser(n);
                return null == r || e.push({ id: n, text: r.tag }), e;
            }, []),
        ),
        o = i()(null != r ? S.A.getSortedRoles(r.id) : [])
            .filter((e) => {
                let { mentionable: t } = e;
                return a || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return { id: t, text: n };
            }),
        l = i()(T.Ay.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return { id: t, text: n };
        }),
        c =
            null != n
                ? i()(O.L3)
                      .filter((e) => e !== T.I6)
                      .flatMap((e) => T.Ay.getChannels(n)[e].map((e) => ({ id: e.channel.id, text: e.channel.name })))
                      .value()
                : [],
        d = g.A.computeAllActiveJoinedThreads(n).map((e) => ({ id: e.id, text: e.name })),
        _ = u.Ay.getDisambiguatedEmojiContext(n),
        f = _.getEscapedCustomEmoticonNames(),
        h = _.getCustomEmoji(),
        p = _.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: o,
        guild: r,
        users: s,
        channels: l.concat(c).concat(d),
        emojiContext: _,
        customEmoticonsRegex: p,
        customEmoji: h,
        textExclusions: f,
        disableErrorGuards: !0,
        isNotification: !1,
    };
}
function er(e) {
    return e;
}
function ei(e, t, n) {
    let r = A.A.getChannel(t),
        a = null != r ? r.getGuildId() : null,
        o = null != a ? v.A.getGuild(a) : null,
        l = n ? X : i().omit(X, ["spoiler", "timestamp"]),
        u = n ? er : c.Ay.translateSurrogatesToInlineEmoji,
        d = s().parserFor(l),
        _ = { inline: !0, guild: o, channelId: t, isNotification: n };
    return ee(d(e, _), _, u);
}
let ea = {
    parse(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = n ?? en(e),
            i = { content: t, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] };
        return (
            (i.content = et(i.content, r, (t, n) => {
                D.Ay.isEmojiPremiumLocked({ emoji: t, channel: e, intention: P.b_.CHAT })
                    ? i.invalidEmojis.push(t)
                    : n || i.validNonShortcutEmojis.push(t);
            })),
            i
        );
    },
    parsePreprocessor: (e, t) => Z(t, en(e)),
    unparse: (e, t, n) => ei(e, t, n).content,
    unparseWithMeta: ei,
};
