"use strict";
n.d(t, { Ay: () => ei }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(791332),
    a = n.n(s),
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
    E = n(253932),
    g = n(734057),
    A = n(760751),
    I = n(808728),
    T = n(696451),
    S = n(317525),
    y = n(71393),
    v = n(576705),
    N = n(994500),
    C = n(351906),
    R = n(287809),
    O = n(248465),
    b = n(690521),
    D = n(562153),
    L = n(427262),
    w = n(652215),
    M = n(307731),
    x = n(985018);
function P(e, t, n) {
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
    if ('"' !== t[1]) return P(e, t, n, r);
    let i = 2;
    for (; i < t.length; i++) {
        if ("\\" === t[i]) {
            i++;
            continue;
        }
        if ('"' === t[i]) break;
    }
    let s = t.substring(0, i + 1),
        a = (0, l.LG)(t.substring(2, i));
    return n
        .sortBy((e) => {
            let { text: t } = e;
            return -t.length;
        })
        .filter((e) => {
            let { text: t } = e;
            return a === t;
        })
        .map((e) => {
            let { id: t } = e;
            return [s, t, r];
        })
        .first();
}
function U(e) {
    return { order: e.order, match: e.match, parse: (t) => ({ type: e.type, content: t[0] }) };
}
function G(e) {
    return { match: a().anyScopeRegex(e), parse: (e) => ({ type: "text", content: e[0] }) };
}
let F = _.A.RULES,
    V = f.Ay,
    B = /^<@!?(\d+)>/,
    H = /^<@&(\d+)>/,
    j = /^<@\$(\d+)>/,
    Y = /^<#(\d+)>/,
    W = /^<a?:(\w+):(\d+)>/,
    K = /(@everyone|@here|@Clyde)\b/,
    $ = /^[^\s]+@[^\s]+\.[^\s.]+/,
    z = {
        link: U(a().defaultRules.link),
        autolink: U(a().defaultRules.autolink),
        url: U(a().defaultRules.url),
        inlineCode: U(F.inlineCode),
        codeBlock: U(F.codeBlock),
        rawUserMention: G(B),
        rawRoleMention: G(H),
        rawChannelMention: G(Y),
        rawEmoji: G(W),
        mention: {
            match(e, t, n) {
                let r = n.split(" ").pop() + e;
                if ($.test(r)) return null;
                let i = P("@", e, t.users, "mention");
                if (i || (i = P("@", e, t.mentionableRoles, "roleMention"))) return i;
                if (
                    !(i = P(
                        "@",
                        e,
                        t.users.map((e) => ({ ...e, text: e.text.split("#")[0] })),
                        "mention",
                    ))
                )
                    return null;
                let s = K.exec(e);
                if (null != s && i[0].length <= s[0].length) return null;
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
                if (!E.j7.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let r = c.Ay.EMOJI_SHORTCUT_RE.exec(e);
                return null == r || (r[0].length !== e.length && " " !== e[r[0].length] && "\n" !== e[r[0].length])
                    ? null
                    : r;
            },
            parse: (e) => ({ type: "emoticon", content: c.Ay.convertShortcutToName(e[1]), isShortcut: !0 }),
        },
        emoji: {
            order: F.emoji.order,
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
            ...V,
            match: (e, t) =>
                "string" == typeof t.textExclusions && "" !== t.textExclusions
                    ? (0, f.VC)(t.textExclusions).exec(e)
                    : null != V.match
                      ? V.match(e, t, "")
                      : null,
        },
    },
    q = {
        inlineCode: U(F.inlineCode),
        codeBlock: U(F.codeBlock),
        mention: {
            match: a().anyScopeRegex(B),
            parse(e, t, n) {
                let { isNotification: r, guild: s, channelId: a } = n,
                    o = R.default.getUser(e[1]);
                if (null == o) return { content: e[0] };
                let l = L.Ay.getUserTag(o, { identifiable: r && C.A.enabled ? "never" : "always" });
                if (r) {
                    let e = D.Ay.getNickname(s?.id, a, o) ?? L.Ay.getGlobalName(o);
                    return { content: null != e ? `@${e}` : `@${l}` };
                }
                {
                    if (o.bot) return { content: `@${l}` };
                    let e = "";
                    if (s?.id != null) {
                        let t = l.toLowerCase();
                        e = i().some(S.A.getUnsafeMutableRoles(s.id), (e) => t.startsWith(e.name.toLowerCase()))
                            ? `#${`${o.discriminator}`.padStart(4, "0")}`
                            : "";
                    }
                    return { content: `@${l}${e}` };
                }
            },
        },
        roleMention: {
            match: a().anyScopeRegex(H),
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
            match: a().anyScopeRegex(j),
            parse(e, t, n) {
                let { guild: r } = n;
                if (
                    r &&
                    d.M.getCurrentConfig({ guildId: r.id, location: "Message Unparser" }, { autoTrackExposure: !0 })
                        .enabled
                ) {
                    let t = A.A.getDetectableGame(e[1]);
                    return null != t ? { content: `@${t.name}` } : { content: `@${x.intl.string(x.t["11pdXZ"])}` };
                }
                return { content: e[0] };
            },
        },
        channel: {
            match: a().anyScopeRegex(Y),
            parse(e) {
                let t = g.A.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, l.m1)(t, R.default, N.A, !0, !0) };
            },
        },
        emoji: {
            match: a().anyScopeRegex(W),
            parse(e, t, n) {
                let [r, i, s] = e,
                    { guild: a } = n,
                    o = u.Ay.getDisambiguatedEmojiContext(a ? a.id : null).getById(s),
                    l = null != o ? o.name : i;
                return { content: `:${l}:`, id: s };
            },
        },
        soundboard: {
            match: a().anyScopeRegex(p.ds),
            parse(e) {
                let [t, n, r] = e;
                return { content: `<sound:${n}:${r}>` };
            },
        },
        spoiler: {
            match: a().anyScopeRegex(w.VFs),
            parse: () => ({ content: `<${x.intl.string(x.t["F+x38C"]).toLowerCase()}>` }),
        },
        staticRouteLink: { match: a().anyScopeRegex(w.P0V), parse: (e) => ({ content: `<id:${e[1]}>` }) },
        timestamp: {
            ...F.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = F.timestamp.parse(...t);
                return "text" === r.type ? { content: r.content } : { content: r.formatted };
            },
        },
        text: { ...V },
    };
[z, q].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let Z = a().parserFor(z),
    X = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function Q(e, t, n) {
    if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
        let r,
            i = c.Ay.translateSurrogatesToInlineEmoji(t.content);
        for (; null !== (r = X.exec(i)); ) {
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
        s = [];
    return (
        e.forEach((e) => {
            if ((Q(t, e, r), "string" == typeof e.content))
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
                let { content: a, emoji: o } = J(e.content, t, n, r);
                for (let e of o) s.push({ position: i.length + e.position, length: e.length, id: e.id });
                i += a;
            } else console.warn("Unknown message item type: ", e);
        }),
        { content: i, emoji: s }
    );
}
function ee(e, t, n) {
    return J(Z(e, t), t, c.Ay.translateInlineEmojiToSurrogates, n).content;
}
function et(e) {
    let t,
        n = e?.getGuildId(),
        r = null != n ? y.A.getGuild(n) : null,
        s = v.A.can(w.xBc.MENTION_EVERYONE, e);
    t = e?.isPrivate()
        ? e.recipients.map((e) => ({ userId: e, nick: null }))
        : null != n
          ? T.Ay.getMembers(n).map((e) => {
                let { userId: t, nick: n } = e;
                return { userId: t, nick: n };
            })
          : [];
    let a = i()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    r = R.default.getUser(n);
                return null == r || e.push({ id: n, text: r.tag }), e;
            }, []),
        ),
        o = i()(null != r ? S.A.getSortedRoles(r.id) : [])
            .filter((e) => {
                let { mentionable: t } = e;
                return s || t;
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
                ? i()(O.L3)
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
        users: a,
        channels: l.concat(c).concat(d),
        emojiContext: _,
        customEmoticonsRegex: h,
        customEmoji: p,
        textExclusions: f,
        isNotification: !1,
    };
}
function en(e) {
    return e;
}
function er(e, t, n) {
    let r = g.A.getChannel(t),
        s = null != r ? r.getGuildId() : null,
        o = null != s ? y.A.getGuild(s) : null,
        l = n ? q : i().omit(q, ["spoiler", "timestamp"]),
        u = n ? en : c.Ay.translateSurrogatesToInlineEmoji,
        d = a().parserFor(l),
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
                b.Ay.isEmojiPremiumLocked({ emoji: t, channel: e, intention: M.b_.CHAT })
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
