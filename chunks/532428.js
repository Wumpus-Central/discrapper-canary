n.d(t, {
    Ej: () => eb,
    Ni: () => J,
    Pr: () => en,
    Qe: () => ef,
    WK: () => eg,
    ZP: () => eO,
    _m: () => eE,
    co: () => ey,
    fx: () => z,
    mh: () => eh,
}),
    n(388685),
    n(413496),
    n(433524),
    n(35282),
    n(781311),
    n(804061),
    n(704826),
    n(539854),
    n(290780),
    n(642613);
var r = n(658722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(212819),
    u = n(933557),
    d = n(592125),
    f = n(984933),
    p = n(699516),
    _ = n(944486),
    m = n(246946),
    h = n(594174),
    g = n(483360),
    E = n(226951),
    b = n(51144),
    y = n(738018),
    O = n(719801),
    v = n(607802),
    S = n(612806),
    I = n(375123),
    T = n(28964),
    A = n(129301),
    C = n(981631),
    N = n(388032);
function P(e, t, n) {
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
function R(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase()),
    );
}
function L() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase()),
    );
}
function j() {
    let e = new Date().getFullYear();
    return new Set(
        o()
            .range(2015, e + 1)
            .map((e) => e.toString()),
    );
}
function M(e, t) {
    return [e, e.clone().add(1, t)];
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return M(l()().startOf(e).add(t, e), e);
}
function U(e, t, n) {
    return M(l()(e, t).local(), n);
}
function G() {
    return {
        [N.intl.string(N.t.HYiVEQ)]: () => k("day"),
        [N.intl.string(N.t.cu86KC)]: () => k("day", -1),
        [N.intl.string(N.t["FvBj/6"])]: () => k("week"),
        [N.intl.string(N.t["20uWCw"])]: () => k("month"),
        [N.intl.string(N.t["dXC/hn"])]: () => k("year"),
    };
}
let Z = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
    B = "\\d{4}",
    F = "([0-9]{4})-([0-9]{1,2})",
    V = "([^\\d\\s]+)",
    H = RegExp("(?:\\s*(".concat(Z, "|").concat(F, "|").concat(B, "|").concat(V, "))"), "i"),
    Y = RegExp("\\s*(true|false)", "i");
function W(e) {
    return "".concat(e, ":");
}
function K(e) {
    return RegExp(W(e), "i");
}
function z(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return (
        null !=
            (t = C.Xyh.test(n)
                ? n
                : r(
                      n === C.ME
                          ? h.default.getCurrentUser()
                          : null != e.getMatch(4)
                            ? h.default.findByTag(e.getMatch(4))
                            : h.default.findByTag(e.getMatch(2), e.getMatch(3)),
                  )) && (e.setData("userId", t), !0)
    );
}
function q(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        a = G()[i];
    return (
        null != a
            ? ([n, r] = a())
            : x().has(i)
              ? ([n, r] = U(i, "MMMM", "month"))
              : L().has(i)
                ? ([n, r] = U(i, "dddd", "day"))
                : j().has(i)
                  ? ([n, r] = U(i, "YYYY", "year"))
                  : ([n, r] = U(i, C.b2L, "day")),
        !!(n.isValid() && r.isValid()) &&
            ("before" === t ? ((r = n), (n = null)) : "after" === t && ((n = r), (r = null)),
            e.setData("start", n),
            e.setData("end", r),
            !0)
    );
}
function X(e, t, n) {
    let r = f.ZP.getChannels(n)[f.sH].concat(f.ZP.getChannels(n)[f.Zb]),
        i = f.ZP.getTextChannelNameDisambiguations(n),
        a = S.Z.getCurrentConfig({ location: "guildChannelValidator" }).enabled,
        s = o()
            .chain(r)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .concat(a && null != n ? d.Z.getAllThreadsForGuild(n) : [])
            .filter((e) => {
                var n, r;
                return t === (null != (r = null == (n = i[e.id]) ? void 0 : n.name) ? r : e.name);
            })
            .value();
    return (
        (null == s ? void 0 : s.length) > 0 &&
        (e.setData(
            "channelIds",
            s.map((e) => e.id),
        ),
        !0)
    );
}
function Q(e, t) {
    let n = Object.values(d.Z.getMutablePrivateChannels()).filter((e) => {
        if (t === (0, u.F6)(e, h.default, p.Z)) return !0;
        if (e.isDM()) {
            let n = e.getRecipientId(),
                r = h.default.getUser(n);
            return null != r && t === b.ZP.getUserTag(r);
        }
    });
    return (
        (null == n ? void 0 : n.length) > 0 &&
        (e.setData(
            "channelIds",
            n.map((e) => e.id),
        ),
        !0)
    );
}
function J(e, t) {
    let n = e.getMatch(1);
    return C.Xyh.test(n)
        ? (e.setData("channelIds", [n]), !0)
        : (n.startsWith('"') && n.endsWith('"') && (n = n.substring(1, n.length - 1).replaceAll(/\\(.)/g, (e, t) => t)),
            (0, v.b7)(t))
          ? X(e, n, t.guildId)
          : t.type === C.aib.DMS && !m.Z.hidePersonalInformation && Q(e, n);
}
function $(e) {
    let t = {
        [N.intl.string(N.t.ZNR2fi)]: "link",
        [N.intl.string(N.t["20uQR3"])]: "embed",
        [N.intl.string(N.t.L4lxyE)]: "poll",
        [N.intl.string(N.t.nrpA5E)]: "snapshot",
        [N.intl.string(N.t["AV/v6i"])]: "file",
        [N.intl.string(N.t.XM9XGP)]: "video",
        [N.intl.string(N.t.TNLcpx)]: "image",
        [N.intl.string(N.t.F8Wf0e)]: "sound",
        [N.intl.string(N.t.PJgX2h)]: "sticker",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("has", t), !0);
}
function ee(e) {
    let t = {
        [N.intl.string(N.t.tPZo4p)]: "user",
        [N.intl.string(N.t.JL7sRS)]: "bot",
        [N.intl.string(N.t.WjkIKU)]: "webhook",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("author_type", t), !0);
}
function et() {
    return [...Array.from(x()), ...Array.from(L()), ...Array.from(j()), ...Object.keys(G())];
}
function en() {
    return o().sample(et());
}
function er(e, t, n) {
    return ei(e, t, et()).map((e) =>
        D(R({}, e), {
            group: n,
            key: "".concat(n, "-").concat(e.text),
        }),
    );
}
function ei(e, t, n) {
    let r = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function ea(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [];
    e.forEach((e) => {
        let t = e.getData("channelIds");
        null != t && t.forEach((e) => n.push(e));
    });
    let r = (e) => {
            null == e || t.has(e.id) || (i.push(e), t.add(e.id));
        },
        i = [];
    return (
        n.forEach((e) => {
            let t = d.Z.getChannel(e);
            if (null != t)
                if (t.isDM()) {
                    let e = t.getRecipientId();
                    r(h.default.getUser(e));
                } else
                    t.isGroupDM() &&
                        t.recipients.forEach((e) => {
                            r(h.default.getUser(e));
                        });
        }),
        i
    );
}
function eo(e) {
    let { query: t, searchContext: n, maxResults: r = 10, tokens: i } = e,
        a = {
            query: (t = t.trim().split("#")[0]),
            limit: r,
            request: !1,
            boosters: (0, g.Cq)(c.h8.USER),
        },
        o = [];
    switch (n.type) {
        case C.aib.GUILD:
        case C.aib.GUILD_CHANNEL:
        case C.aib.THREAD:
            if (0 === t.length) {
                let e = [],
                    t = new Set(),
                    i = (n) => {
                        null == n ||
                            t.has(n.id) ||
                            p.Z.isBlockedOrIgnored(n.id) ||
                            (e.push({
                                user: n,
                                text: b.ZP.getUserTag(n),
                            }),
                            t.add(n.id));
                    },
                    a = _.Z.getCurrentlySelectedChannelId(n.guildId);
                return (
                    g.ZP.getRecentlyTalked(a, r).forEach((e) => {
                        let { record: t } = e;
                        return i(t);
                    }),
                    O.Z.getRecentMessageAuthorIds(n.guildId).forEach((e) => i(h.default.getUser(e))),
                    e.slice(0, r)
                );
            }
            o = g.ZP.queryGuildUsers(D(R({}, a), { guildId: n.guildId }));
            break;
        case C.aib.CHANNEL:
            o = g.ZP.queryChannelUsers(D(R({}, a), { channelId: n.channelId }));
            break;
        case C.aib.DMS:
            let s = ea(null != i ? i : []);
            if (null != s && s.length > 0) {
                let e = h.default.getCurrentUser();
                null != e && s.push(e),
                    (o = g.ZP.queryUsers(
                        D(R({}, a), {
                            users: s,
                            boosters: (0, g.Cq)(c.h8.USER),
                        }),
                    ));
            } else o = g.ZP.queryAllUsers(D(R({}, a), { boosters: (0, g.Cq)(c.h8.USER) }));
            break;
        default:
            return [];
    }
    let l = h.default.getCurrentUser(),
        u = t.toLowerCase().replace(/^@/, ""),
        d = null != l && t.length > 0 && (N.intl.string(N.t.Qf3ptv).startsWith(u) || C.ME.substr(1).startsWith(u)),
        f = o
            .filter((e) => {
                let { record: t } = e;
                return !p.Z.isBlockedOrIgnored(t.id) && (!d || t.id !== (null == l ? void 0 : l.id));
            })
            .map((e) => {
                let { record: t } = e;
                return {
                    text: b.ZP.getUserTag(t),
                    user: t,
                };
            });
    return (
        d &&
            f.unshift({
                text: C.ME,
                user: l,
            }),
        f
    );
}
function es() {
    return !m.Z.hidePersonalInformation;
}
function el(e, t, n) {
    let r = g.ZP.queryGroupDMs({
            query: e,
            limit: t,
            fuzzy: !0,
            boosters: (0, g.Cq)(c.h8.GROUP_DM),
        }),
        i = g.ZP.queryDMChannels({
            query: e,
            limit: t,
            boosters: (0, g.Cq)(c.h8.USER),
        }),
        a = o()(r.concat(i))
            .sort(c.qU)
            .map((e) => {
                let { record: t, comparator: n } = e;
                return {
                    text: n,
                    channel: t,
                    key: null == t ? void 0 : t.id,
                };
            })
            .filter((e) => null != e.text && null != e.channel && null != e.key)
            .value();
    if (0 === e.length && n) {
        let e = _.Z.getChannelId(),
            t = d.Z.getChannel(e);
        if (null != t && t.isPrivate()) {
            let n = a.findIndex((t) => {
                let { channel: n } = t;
                return n.id === e;
            });
            if (-1 !== n) {
                let e = a[n];
                a.splice(n, 1), a.unshift(e);
            } else if (t.isGroupDM()) {
                let e = (0, u.F6)(t, h.default, p.Z);
                a.unshift({
                    text: e,
                    channel: t,
                    key: t.id,
                });
            } else if (t.isDM()) {
                let e = t.getRecipientId(),
                    n = h.default.getUser(e);
                if (null != n) {
                    let e = b.ZP.getUserTag(n);
                    a.unshift({
                        text: e,
                        channel: t,
                        key: t.id,
                    });
                }
            }
        }
    }
    return a.slice(0, t);
}
function ec(e, t, n) {
    let r = S.Z.getCurrentConfig({ location: "getGuildChannelAutocompletions" }).enabled,
        i = g.ZP.queryChannels({
            query: e,
            type: f.sH,
            guildId: t,
            limit: 1 / 0,
            allowEmptyQueries: !0,
            allowSnowflake: !0,
            includeAllThreads: r,
            boosters: (0, g.Cq)(c.h8.TEXT_CHANNEL),
        })
            .concat(
                g.ZP.queryChannels({
                    query: e,
                    type: f.Zb,
                    guildId: t,
                    limit: 1 / 0,
                    allowEmptyQueries: !0,
                    allowSnowflake: !0,
                    boosters: (0, g.Cq)(c.h8.VOICE_CHANNEL),
                }),
            )
            .map((e) => {
                let { record: t } = e;
                return t;
            });
    if ((r || (i = i.filter((e) => !e.isThread())), 0 === e.length)) {
        let e = _.Z.getChannelId(t),
            n = i.find((t) => t.id === e);
        null != n && (i.splice(i.indexOf(n), 1), i.unshift(n));
    }
    let a = f.ZP.getTextChannelNameDisambiguations(t);
    return o()(i)
        .take(n)
        .map((e) => {
            var t, n;
            return {
                text: "".concat(null != (n = null == (t = a[e.id]) ? void 0 : t.name) ? n : e.name),
                channel: e,
                key: e.id,
            };
        })
        .value();
}
function eu(e) {
    let { query: t, searchContext: n, maxResults: r } = e;
    return ((t = t.trim()).startsWith('"') && t.endsWith('"')
        ? (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
        : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
    "#" === t[0] && (t = t.substring(1)),
    (0, v.b7)(n))
        ? ec(t, n.guildId, r)
        : n.type !== C.aib.DMS || m.Z.hidePersonalInformation
          ? []
          : el(t, r, !0);
}
let ed = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ef = (function (e) {
    return (e.FILTER = "FILTER"), (e.ANSWER = "ANSWER"), e;
})({});
function ep() {
    return (0, T.q$)({ location: "getHasOptions" })
        ? [
              N.intl.string(N.t.TNLcpx),
              N.intl.string(N.t.XM9XGP),
              N.intl.string(N.t.ZNR2fi),
              N.intl.string(N.t["AV/v6i"]),
              N.intl.string(N.t["20uQR3"]),
              N.intl.string(N.t.F8Wf0e),
              N.intl.string(N.t.L4lxyE),
              N.intl.string(N.t.PJgX2h),
              N.intl.string(N.t.nrpA5E),
          ]
        : [
              N.intl.string(N.t.ZNR2fi),
              N.intl.string(N.t["20uQR3"]),
              N.intl.string(N.t.L4lxyE),
              N.intl.string(N.t["AV/v6i"]),
              N.intl.string(N.t.XM9XGP),
              N.intl.string(N.t.TNLcpx),
              N.intl.string(N.t.F8Wf0e),
              N.intl.string(N.t.PJgX2h),
              N.intl.string(N.t.nrpA5E),
          ];
}
function e_(e) {
    let t = [N.intl.string(N.t.tPZo4p), N.intl.string(N.t.JL7sRS), N.intl.string(N.t.WjkIKU)],
        n = [
            N.intl.string(N.t.ZNR2fi),
            N.intl.string(N.t["20uQR3"]),
            N.intl.string(N.t.L4lxyE),
            N.intl.string(N.t["AV/v6i"]),
            N.intl.string(N.t.XM9XGP),
            N.intl.string(N.t.TNLcpx),
            N.intl.string(N.t.F8Wf0e),
            N.intl.string(N.t.PJgX2h),
            N.intl.string(N.t.nrpA5E),
        ];
    return {
        [C.dCx.FILTER_FROM]: {
            regex: K(N.intl.string(N.t["1TUdFo"])),
            componentType: "FILTER",
            key: W(N.intl.string(N.t["1TUdFo"])),
            plainText: N.intl.string(N.t["1TUdFo"]),
            validator: es,
            getAutocompletions: eo,
        },
        [C.dCx.ANSWER_USERNAME_FROM]: {
            follows: [C.dCx.FILTER_FROM],
            regex: ed,
            validator: z,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [C.dCx.FILTER_MENTIONS]: {
            regex: K(N.intl.string(N.t["i96lO+"])),
            componentType: "FILTER",
            key: W(N.intl.string(N.t["i96lO+"])),
            plainText: N.intl.string(N.t["i96lO+"]),
            validator: es,
            getAutocompletions: eo,
        },
        [C.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [C.dCx.FILTER_MENTIONS],
            regex: ed,
            validator: z,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [C.dCx.FILTER_HAS]: {
            regex: K(N.intl.string(N.t.CqCvir)),
            componentType: "FILTER",
            key: W(N.intl.string(N.t.CqCvir)),
            plainText: N.intl.string(N.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return ei(t, n, ep());
            },
        },
        [C.dCx.ANSWER_HAS]: {
            regex: RegExp("(?:\\s*-?(".concat(n.map((e) => E.Z.escape(e)).join("|"), "))"), "i"),
            follows: [C.dCx.FILTER_HAS],
            validator: $,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [C.dCx.FILTER_FILE_TYPE]: {
            regex: K(N.intl.string(N.t.TMNjFm)),
            key: W(N.intl.string(N.t.TMNjFm)),
            plainText: N.intl.string(N.t.TMNjFm),
            componentType: "FILTER",
        },
        [C.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [C.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extensions",
        },
        [C.dCx.FILTER_FILE_NAME]: {
            regex: K(N.intl.string(N.t["5xtLRC"])),
            key: W(N.intl.string(N.t["5xtLRC"])),
            plainText: N.intl.string(N.t["5xtLRC"]),
            componentType: "FILTER",
        },
        [C.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [C.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [C.dCx.FILTER_BEFORE]: {
            regex: K(N.intl.string(N.t["qZ+7BA"])),
            componentType: "FILTER",
            key: W(N.intl.string(N.t["qZ+7BA"])),
            plainText: N.intl.string(N.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return er(t, n, C.dCx.FILTER_BEFORE);
            },
        },
        [C.dCx.FILTER_ON]: {
            regex: K("(".concat(N.intl.string(N.t.tIxkOo), "|").concat(N.intl.string(N.t.h2NzSd), ")")),
            componentType: "FILTER",
            key: W(N.intl.string(N.t.h2NzSd)),
            plainText: N.intl.string(N.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return er(t, n, C.dCx.FILTER_ON);
            },
        },
        [C.dCx.FILTER_AFTER]: {
            regex: K(N.intl.string(N.t.KSDx7M)),
            componentType: "FILTER",
            key: W(N.intl.string(N.t.KSDx7M)),
            plainText: N.intl.string(N.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return er(t, n, C.dCx.FILTER_AFTER);
            },
        },
        [C.dCx.ANSWER_BEFORE]: {
            regex: H,
            follows: [C.dCx.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => q(e, "before"),
        },
        [C.dCx.ANSWER_ON]: {
            regex: H,
            follows: [C.dCx.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => q(e, "on"),
        },
        [C.dCx.ANSWER_AFTER]: {
            regex: H,
            follows: [C.dCx.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => q(e, "after"),
        },
        [C.dCx.FILTER_IN]: {
            regex: K(N.intl.string(N.t.WNpFHa)),
            componentType: "FILTER",
            key: W(N.intl.string(N.t.WNpFHa)),
            plainText: N.intl.string(N.t.WNpFHa),
            validator: () => {
                let t = null != e ? e : y.Z.getSelectedSearchContext();
                return null != t && (0, v.R6)(t);
            },
            getAutocompletions: eu,
        },
        [C.dCx.ANSWER_IN]: {
            regex: A.e,
            mutable: !0,
            follows: [C.dCx.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = null != e ? e : y.Z.getSelectedSearchContext();
                return null != n && J(t, n);
            },
            queryKey: "channel_id",
        },
        [C.dCx.FILTER_PINNED]: {
            regex: K(N.intl.string(N.t["0B74eY"])),
            componentType: "FILTER",
            key: W(N.intl.string(N.t["0B74eY"])),
            plainText: N.intl.string(N.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [C.dCx.ANSWER_PINNED]: {
            regex: Y,
            componentType: "ANSWER",
            follows: [C.dCx.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [C.dCx.FILTER_AUTHOR_TYPE]: {
            regex: K(N.intl.string(N.t.us8IQi)),
            componentType: "FILTER",
            key: W(N.intl.string(N.t.us8IQi)),
            validator: () => (0, I.Z)({ location: "SearchTokens" }),
            plainText: N.intl.string(N.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: r } = e;
                return ei(n, r, t);
            },
        },
        [C.dCx.ANSWER_AUTHOR_TYPE]: {
            regex: RegExp("(?:\\s*-?(".concat(t.map((e) => E.Z.escape(e)).join("|"), "))"), "i"),
            follows: [C.dCx.FILTER_AUTHOR_TYPE],
            validator: ee,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let em = {};
function eh() {
    return e_({ type: C.aib.DMS });
}
function eg() {
    Object.assign(em, e_());
}
function eE(e) {
    return C.TNx.test(e);
}
function eb(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(em).length,
        n = [];
    for (let r of Object.keys(em)) {
        if (n.length >= t) break;
        let a = em[r].key;
        eE(r) &&
            null != a &&
            i()(e.toLowerCase(), a) &&
            n.push({
                token: r,
                text: a,
            });
    }
    return n;
}
function ey(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return N.intl.string(N.t.Qf3ptv).startsWith(t) || C.ME.substring(1).startsWith(t);
}
let eO = em;
