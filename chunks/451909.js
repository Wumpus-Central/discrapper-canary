"use strict";
n.d(t, { Ay: () => ei }), n(321073);
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
    p = n(335432),
    h = n(677413),
    m = n(863005),
    g = n(253932),
    E = n(734057),
    A = n(760751),
    I = n(808728),
    T = n(696451),
    y = n(317525),
    S = n(71393),
    v = n(576705),
    C = n(994500),
    b = n(351906),
    N = n(287809),
    R = n(248465),
    O = n(690521),
    D = n(562153),
    L = n(427262),
    w = n(652215),
    x = n(307731),
    P = n(985018);
function M(e, t, n) {
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
function k(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    if ('"' !== t[1]) return M(e, t, n, r);
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
function U(e) {
    return { order: e.order, match: e.match, parse: (t) => ({ type: e.type, content: t[0] }) };
}
function G(e) {
    return { match: s().anyScopeRegex(e), parse: (e) => ({ type: "text", content: e[0] }) };
}
let V = _.A.RULES,
    F = f.Ay,
    B = /^<@!?(\d+)>/,
    j = /^<@&(\d+)>/,
    H = /^<@\$(\d+)>/,
    Y = /^<#(\d+)>/,
    W = /^<a?:(\w+):(\d+)>/,
    K = /(@everyone|@here|@Clyde)\b/,
    z = /^[^\s]+@[^\s]+\.[^\s.]+/,
    $ = {
        link: U(s().defaultRules.link),
        autolink: U(s().defaultRules.autolink),
        url: U(s().defaultRules.url),
        inlineCode: U(V.inlineCode),
        codeBlock: U(V.codeBlock),
        rawUserMention: G(B),
        rawRoleMention: G(j),
        rawChannelMention: G(Y),
        rawEmoji: G(W),
        mention: {
            match(e, t, n) {
                let r = n.split(" ").pop() + e;
                if (z.test(r)) return null;
                let i = M("@", e, t.users, "mention");
                if (i || (i = M("@", e, t.mentionableRoles, "roleMention"))) return i;
                if (
                    !(i = M(
                        "@",
                        e,
                        t.users.map((e) => ({ ...e, text: e.text.split("#")[0] })),
                        "mention",
                    ))
                )
                    return null;
                let a = K.exec(e);
                if (null != a && i[0].length <= a[0].length) return null;
                if ("" === n) {
                    let t = h.U.exec(e);
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
        channel: { match: (e, t) => k("#", e, t.channels), parse: (e) => ({ type: "text", content: `<#${e[1]}>` }) },
        emoticon: {
            match(e, t, n) {
                if (!g.j7.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
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
            ...F,
            match: (e, t) =>
                "string" == typeof t.textExclusions && "" !== t.textExclusions
                    ? (0, f.VC)(t.textExclusions).exec(e)
                    : null != F.match
                      ? F.match(e, t, "")
                      : null,
        },
    },
    q = {
        inlineCode: U(V.inlineCode),
        codeBlock: U(V.codeBlock),
        mention: {
            match: s().anyScopeRegex(B),
            parse(e, t, n) {
                let { isNotification: r, guild: a, channelId: s } = n,
                    o = N.default.getUser(e[1]);
                if (null == o) return { content: e[0] };
                let l = L.Ay.getUserTag(o, { identifiable: r && b.A.enabled ? "never" : "always" });
                if (r) {
                    let e = D.Ay.getNickname(a?.id, s, o) ?? L.Ay.getGlobalName(o);
                    return { content: null != e ? `@${e}` : `@${l}` };
                }
                {
                    if (o.bot) return { content: `@${l}` };
                    let e = "";
                    if (a?.id != null) {
                        let t = l.toLowerCase();
                        e = i().some(y.A.getUnsafeMutableRoles(a.id), (e) => t.startsWith(e.name.toLowerCase()))
                            ? `#${`${o.discriminator}`.padStart(4, "0")}`
                            : "";
                    }
                    return { content: `@${l}${e}` };
                }
            },
        },
        roleMention: {
            match: s().anyScopeRegex(j),
            parse(e, t, n) {
                let { guild: r } = n;
                if (null != r) {
                    let t = y.A.getRole(r.id, e[1]);
                    if (null != t) return { content: `@${t.name}` };
                }
                return { content: e[0] };
            },
        },
        gameMention: {
            match: s().anyScopeRegex(H),
            parse(e, t, n) {
                let { guild: r } = n;
                if (
                    r &&
                    d.M.getCurrentConfig({ guildId: r.id, location: "Message Unparser" }, { autoTrackExposure: !0 })
                        .enabled
                ) {
                    let t = A.A.getDetectableGame(e[1]);
                    return null != t ? { content: `@${t.name}` } : { content: `@${P.intl.string(P.t["11pdXZ"])}` };
                }
                return { content: e[0] };
            },
        },
        channel: {
            match: s().anyScopeRegex(Y),
            parse(e) {
                let t = E.A.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, l.m1)(t, N.default, C.A, !0, !0) };
            },
        },
        emoji: {
            match: s().anyScopeRegex(W),
            parse(e, t, n) {
                let [r, i, a] = e,
                    { guild: s } = n,
                    o = u.Ay.getDisambiguatedEmojiContext(s ? s.id : null).getById(a),
                    l = null != o ? o.name : i;
                return { content: `:${l}:`, id: a };
            },
        },
        soundboard: {
            match: s().anyScopeRegex(p.ds),
            parse(e) {
                let [t, n, r] = e;
                return { content: `<sound:${n}:${r}>` };
            },
        },
        spoiler: {
            match: s().anyScopeRegex(w.VFs),
            parse: () => ({ content: `<${P.intl.string(P.t["F+x38C"]).toLowerCase()}>` }),
        },
        staticRouteLink: { match: s().anyScopeRegex(w.P0V), parse: (e) => ({ content: `<id:${e[1]}>` }) },
        timestamp: {
            ...V.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = V.timestamp.parse(...t);
                return "text" === r.type ? { content: r.content } : { content: r.formatted };
            },
        },
        text: { ...F },
    };
[$, q].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let Z = s().parserFor($),
    Q = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function X(e, t, n) {
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
function J(e, t, n, r) {
    let i = "",
        a = [];
    return (
        e.forEach((e) => {
            if ((X(t, e, r), "string" == typeof e.content))
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
                let { content: s, emoji: o } = J(e.content, t, n, r);
                for (let e of o) a.push({ position: i.length + e.position, length: e.length, id: e.id });
                i += s;
            } else console.warn("Unknown message item type: ", e);
        }),
        { content: i, emoji: a }
    );
}
function ee(e, t, n) {
    return J(Z(e, t), t, c.Ay.translateInlineEmojiToSurrogates, n).content;
}
function et(e) {
    let t,
        n = e?.getGuildId(),
        r = null != n ? S.A.getGuild(n) : null,
        a = v.A.can(w.xBc.MENTION_EVERYONE, e);
    t = e?.isPrivate()
        ? e.recipients.map((e) => ({ userId: e, nick: null }))
        : null != n
          ? T.Ay.getMembers(n).map((e) => {
                let { userId: t, nick: n } = e;
                return { userId: t, nick: n };
            })
          : [];
    let s = i()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    r = N.default.getUser(n);
                return null == r || e.push({ id: n, text: r.tag }), e;
            }, []),
        ),
        o = i()(null != r ? y.A.getSortedRoles(r.id) : [])
            .filter((e) => {
                let { mentionable: t } = e;
                return a || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return { id: t, text: n };
            }),
        l = i()(I.Ay.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return { id: t, text: n };
        }),
        c =
            null != n
                ? i()(R.L3)
                      .filter((e) => e !== I.I6)
                      .flatMap((e) => I.Ay.getChannels(n)[e].map((e) => ({ id: e.channel.id, text: e.channel.name })))
                      .value()
                : [],
        d = m.A.computeAllActiveJoinedThreads(n).map((e) => ({ id: e.id, text: e.name })),
        _ = u.Ay.getDisambiguatedEmojiContext(n),
        f = _.getEscapedCustomEmoticonNames(),
        p = _.getCustomEmoji(),
        h = _.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: o,
        guild: r,
        users: s,
        channels: l.concat(c).concat(d),
        emojiContext: _,
        customEmoticonsRegex: h,
        customEmoji: p,
        textExclusions: f,
        disableErrorGuards: !0,
        isNotification: !1,
    };
}
function en(e) {
    return e;
}
function er(e, t, n) {
    let r = E.A.getChannel(t),
        a = null != r ? r.getGuildId() : null,
        o = null != a ? S.A.getGuild(a) : null,
        l = n ? q : i().omit(q, ["spoiler", "timestamp"]),
        u = n ? en : c.Ay.translateSurrogatesToInlineEmoji,
        d = s().parserFor(l),
        _ = { inline: !0, guild: o, channelId: t, isNotification: n };
    return J(d(e, _), _, u);
}
let ei = {
    parse(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = n ?? et(e),
            i = { content: t, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] };
        return (
            (i.content = ee(i.content, r, (t, n) => {
                O.Ay.isEmojiPremiumLocked({ emoji: t, channel: e, intention: x.b_.CHAT })
                    ? i.invalidEmojis.push(t)
                    : n || i.validNonShortcutEmojis.push(t);
            })),
            i
        );
    },
    parsePreprocessor: (e, t) => Z(t, et(e)),
    unparse: (e, t, n) => er(e, t, n).content,
    unparseWithMeta: er,
};
