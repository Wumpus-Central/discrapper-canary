n.d(t, {
    Ay: () => el,
}),
    n(747238),
    n(896048),
    n(321073),
    n(114821),
    n(339614);
var r = n(735438),
    i = n.n(r),
    a = n(280230),
    o = n.n(a),
    s = n(551639),
    l = n(47167),
    c = n(508675),
    u = n(7584),
    d = n(352505),
    f = n(542664),
    p = n(704726),
    _ = n(335432),
    h = n(677413),
    m = n(863005),
    g = n(253932),
    E = n(734057),
    y = n(760751),
    b = n(808728),
    O = n(696451),
    v = n(317525),
    A = n(71393),
    I = n(576705),
    S = n(994500),
    T = n(351906),
    C = n(287809),
    N = n(248465),
    w = n(690521),
    R = n(562153),
    P = n(427262),
    D = n(652215),
    L = n(307731),
    x = n(985018);

function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            });
    }
    return e;
}

function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function G(e, t, n) {
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

function F(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    if ('"' !== t[1]) return G(e, t, n, r);
    let i = 2;
    for (; i < t.length; i++) {
        if ("\\" === t[i]) {
            i++;
            continue;
        }
        if ('"' === t[i]) break;
    }
    let a = t.substring(0, i + 1),
        o = (0, l.LG)(t.substring(2, i));
    return n
        .sortBy((e) => {
            let { text: t } = e;
            return -t.length;
        })
        .filter((e) => {
            let { text: t } = e;
            return o === t;
        })
        .map((e) => {
            let { id: t } = e;
            return [a, t, r];
        })
        .first();
}

function V(e) {
    return {
        order: e.order,
        match: e.match,
        parse: (t) => ({
            type: e.type,
            content: t[0],
        }),
    };
}

function B(e) {
    return {
        match: o().anyScopeRegex(e),
        parse: (e) => ({
            type: "text",
            content: e[0],
        }),
    };
}
let H = f.A.RULES,
    Y = p.Ay,
    W = /^<@!?(\d+)>/,
    K = /^<@&(\d+)>/,
    z = /^<@\$(\d+)>/,
    q = /^<#(\d+)>/,
    Z = /^<a?:(\w+):(\d+)>/,
    Q = /(@everyone|@here|@Clyde)\b/,
    X = /^[^\s]+@[^\s]+\.[^\s.]+/,
    J = {
        link: V(o().defaultRules.link),
        autolink: V(o().defaultRules.autolink),
        url: V(o().defaultRules.url),
        inlineCode: V(H.inlineCode),
        codeBlock: V(H.codeBlock),
        rawUserMention: B(W),
        rawRoleMention: B(K),
        rawChannelMention: B(q),
        rawEmoji: B(Z),
        mention: {
            match(e, t, n) {
                let r = n.split(" ").pop() + e;
                if (X.test(r)) return null;
                let i = G("@", e, t.users, "mention");
                if (i || (i = G("@", e, t.mentionableRoles, "roleMention"))) return i;
                if (
                    !(i = G(
                        "@",
                        e,
                        t.users.map((e) =>
                            U(j({}, e), {
                                text: e.text.split("#")[0],
                            }),
                        ),
                        "mention",
                    ))
                )
                    return null;
                let a = Q.exec(e);
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
                return (
                    "roleMention" === n && (r += "&"),
                    {
                        type: n,
                        content: "<".concat(r).concat(t, ">"),
                    }
                );
            },
        },
        channel: {
            match: (e, t) => F("#", e, t.channels),
            parse: (e) => ({
                type: "text",
                content: "<#".concat(e[1], ">"),
            }),
        },
        emoticon: {
            match(e, t, n) {
                if (!g.j7.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let r = u.Ay.EMOJI_SHORTCUT_RE.exec(e);
                return null == r || (r[0].length !== e.length && " " !== e[r[0].length] && "\n" !== e[r[0].length])
                    ? null
                    : r;
            },
            parse: (e) => ({
                type: "emoticon",
                content: u.Ay.convertShortcutToName(e[1]),
                isShortcut: !0,
            }),
        },
        emoji: {
            order: H.emoji.order,
            match: (e) => u.Ay.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [r, i] = e,
                    { customEmoji: a } = n,
                    o = Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
                if (null != o) {
                    var s;
                    return {
                        type: "customEmoticon",
                        content: "<"
                            .concat(!0 === o.animated ? "a" : "", ":")
                            .concat(null != (s = o.originalName) ? s : o.name, ":")
                            .concat(o.id, ">"),
                        emoji: o,
                    };
                }
                return {
                    type: "text",
                    content: r,
                };
            },
        },
        customEmoticons: {
            match(e, t) {
                var n, r;
                return null != (n = null == (r = t.customEmoticonsRegex) ? void 0 : r.exec(e)) ? n : null;
            },
            parse(e, t, n) {
                let [r, i] = e,
                    { emojiContext: a } = n,
                    o = a.getEmoticonByName(i);
                return null != o
                    ? {
                          type: "customEmoticon",
                          content: "<"
                              .concat(!0 === o.animated ? "a" : "", ":")
                              .concat(o.name, ":")
                              .concat(o.id, ">"),
                          emoji: o,
                      }
                    : {
                          type: "text",
                          content: r,
                      };
            },
        },
        text: U(j({}, Y), {
            match: (e, t) =>
                "string" == typeof t.textExclusions && "" !== t.textExclusions
                    ? (0, p.VC)(t.textExclusions).exec(e)
                    : null != Y.match
                      ? Y.match(e, t, "")
                      : null,
        }),
    },
    $ = {
        inlineCode: V(H.inlineCode),
        codeBlock: V(H.codeBlock),
        mention: {
            match: o().anyScopeRegex(W),
            parse(e, t, n) {
                let { isNotification: r, guild: a, channelId: o } = n,
                    s = C.default.getUser(e[1]);
                if (null == s)
                    return {
                        content: e[0],
                    };
                let l = P.Ay.getUserTag(s, {
                    identifiable: r && T.A.enabled ? "never" : "always",
                });
                if (r) {
                    var c;
                    let e = null != (c = R.Ay.getNickname(null == a ? void 0 : a.id, o, s)) ? c : P.Ay.getGlobalName(s);
                    return {
                        content: null != e ? "@".concat(e) : "@".concat(l),
                    };
                }
                {
                    if (s.bot)
                        return {
                            content: "@".concat(l),
                        };
                    let e = "";
                    if ((null == a ? void 0 : a.id) != null) {
                        let t = l.toLowerCase();
                        e = i().some(v.A.getUnsafeMutableRoles(a.id), (e) => t.startsWith(e.name.toLowerCase()))
                            ? "#".concat("".concat(s.discriminator).padStart(4, "0"))
                            : "";
                    }
                    return {
                        content: "@".concat(l).concat(e),
                    };
                }
            },
        },
        roleMention: {
            match: o().anyScopeRegex(K),
            parse(e, t, n) {
                let { guild: r } = n;
                if (null != r) {
                    let t = v.A.getRole(r.id, e[1]);
                    if (null != t)
                        return {
                            content: "@".concat(t.name),
                        };
                }
                return {
                    content: e[0],
                };
            },
        },
        gameMention: {
            match: o().anyScopeRegex(z),
            parse(e, t, n) {
                let { guild: r } = n;
                if (
                    r &&
                    d.M.getCurrentConfig(
                        {
                            guildId: r.id,
                            location: "Message Unparser",
                        },
                        {
                            autoTrackExposure: !0,
                        },
                    ).enabled
                ) {
                    let t = y.A.getDetectableGame(e[1]);
                    return null != t
                        ? {
                              content: "@".concat(t.name),
                          }
                        : {
                              content: "@".concat(x.intl.string(x.t["11pdXZ"])),
                          };
                }
                return {
                    content: e[0],
                };
            },
        },
        channel: {
            match: o().anyScopeRegex(q),
            parse(e) {
                let t = E.A.getChannel(e[1]);
                return {
                    content: null == t ? e[0] : (0, l.m1)(t, C.default, S.A, !0, !0),
                };
            },
        },
        emoji: {
            match: o().anyScopeRegex(Z),
            parse(e, t, n) {
                let [r, i, a] = e,
                    { guild: o } = n,
                    s = c.Ay.getDisambiguatedEmojiContext(o ? o.id : null).getById(a),
                    l = null != s ? s.name : i;
                return {
                    content: ":".concat(l, ":"),
                    id: a,
                };
            },
        },
        soundboard: {
            match: o().anyScopeRegex(_.ds),
            parse(e) {
                let [t, n, r] = e;
                return {
                    content: "<sound:".concat(n, ":").concat(r, ">"),
                };
            },
        },
        spoiler: {
            match: o().anyScopeRegex(D.VFs),
            parse: () => ({
                content: "<".concat(x.intl.string(x.t["F+x38C"]).toLowerCase(), ">"),
            }),
        },
        staticRouteLink: {
            match: o().anyScopeRegex(D.P0V),
            parse: (e) => ({
                content: "<id:".concat(e[1], ">"),
            }),
        },
        timestamp: U(j({}, H.timestamp), {
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = H.timestamp.parse(...t);
                return "text" === r.type
                    ? {
                          content: r.content,
                      }
                    : {
                          content: r.formatted,
                      };
            },
        }),
        text: j({}, Y),
    };
[J, $].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let ee = o().parserFor(J),
    et = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

function en(e, t, n) {
    if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
        let r,
            i = u.Ay.translateSurrogatesToInlineEmoji(t.content);
        for (; null !== (r = et.exec(i)); ) {
            let i;
            null != r[1] && "" !== r[1]
                ? e.emojiContext && (i = e.emojiContext.getById(r[1]))
                : (i = u.Ay.getByName(r[2])),
                i && n(i, t.isShortcut || !1);
        }
    }
}

function er(e, t, n, r) {
    let i = "",
        a = [];
    return (
        e.forEach((e) => {
            if ((en(t, e, r), "string" == typeof e.content))
                switch (e.type) {
                    case "emoji":
                        a.push({
                            position: i.length,
                            length: e.content.length,
                            id: e.id,
                        }),
                            (i += e.content);
                        break;
                    case "codeBlock":
                    case "inlineCode":
                    case "mention":
                    case "roleMention":
                    case "channel":
                        i += (0, s.az)(e.content);
                        break;
                    default:
                        i += n(e.content);
                }
            else if (e.content.constructor === Array) {
                let { content: o, emoji: s } = er(e.content, t, n, r);
                for (let e of s)
                    a.push({
                        position: i.length + e.position,
                        length: e.length,
                        id: e.id,
                    });
                i += o;
            } else console.warn("Unknown message item type: ", e);
        }),
        {
            content: i,
            emoji: a,
        }
    );
}

function ei(e, t, n) {
    return er(ee(e, t), t, u.Ay.translateInlineEmojiToSurrogates, n).content;
}

function ea(e) {
    let t,
        n = null == e ? void 0 : e.getGuildId(),
        r = null != n ? A.A.getGuild(n) : null,
        a = I.A.can(D.xBc.MENTION_EVERYONE, e);
    t = (null == e ? void 0 : e.isPrivate())
        ? e.recipients.map((e) => ({
              userId: e,
              nick: null,
          }))
        : null != n
          ? O.Ay.getMembers(n).map((e) => {
                let { userId: t, nick: n } = e;
                return {
                    userId: t,
                    nick: n,
                };
            })
          : [];
    let o = i()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    r = C.default.getUser(n);
                return (
                    null == r ||
                        e.push({
                            id: n,
                            text: r.tag,
                        }),
                    e
                );
            }, []),
        ),
        s = i()(null != r ? v.A.getSortedRoles(r.id) : [])
            .filter((e) => {
                let { mentionable: t } = e;
                return a || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return {
                    id: t,
                    text: n,
                };
            }),
        l = i()(b.Ay.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return {
                id: t,
                text: n,
            };
        }),
        u =
            null != n
                ? i()(N.L3)
                      .filter((e) => e !== b.I6)
                      .flatMap((e) =>
                          b.Ay.getChannels(n)[e].map((e) => ({
                              id: e.channel.id,
                              text: e.channel.name,
                          })),
                      )
                      .value()
                : [],
        d = m.A.computeAllActiveJoinedThreads(n).map((e) => ({
            id: e.id,
            text: e.name,
        })),
        f = c.Ay.getDisambiguatedEmojiContext(n),
        p = f.getEscapedCustomEmoticonNames(),
        _ = f.getCustomEmoji(),
        h = f.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: s,
        guild: r,
        users: o,
        channels: l.concat(u).concat(d),
        emojiContext: f,
        customEmoticonsRegex: h,
        customEmoji: _,
        textExclusions: p,
        disableErrorGuards: !0,
    };
}

function eo(e) {
    return e;
}

function es(e, t, n) {
    let r = E.A.getChannel(t),
        a = null != r ? r.getGuildId() : null,
        s = null != a ? A.A.getGuild(a) : null,
        l = n ? $ : i().omit($, ["spoiler", "timestamp"]),
        c = n ? eo : u.Ay.translateSurrogatesToInlineEmoji,
        d = o().parserFor(l),
        f = {
            inline: !0,
            guild: s,
            channelId: t,
            isNotification: n,
        };
    return er(d(e, f), f, c);
}
let el = {
    parse(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = null != n ? n : ea(e),
            i = {
                content: t,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: [],
            };
        return (
            (i.content = ei(i.content, r, (t, n) => {
                w.Ay.isEmojiPremiumLocked({
                    emoji: t,
                    channel: e,
                    intention: L.b_.CHAT,
                })
                    ? i.invalidEmojis.push(t)
                    : n || i.validNonShortcutEmojis.push(t);
            })),
            i
        );
    },
    parsePreprocessor: (e, t) => ee(t, ea(e)),
    unparse: (e, t, n) => es(e, t, n).content,
    unparseWithMeta: es,
};
