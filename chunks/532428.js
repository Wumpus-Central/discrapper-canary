n.d(t, {
    Ej: () => eh,
    Ni: () => Q,
    Qe: () => ec,
    WK: () => ep,
    ZP: () => eg,
    _m: () => e_,
    co: () => em,
    fx: () => W,
    mh: () => ef,
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
    h = n(246946),
    m = n(594174),
    g = n(483360),
    E = n(226951),
    b = n(51144),
    y = n(738018),
    O = n(719801),
    v = n(607802),
    S = n(612806),
    I = n(129301),
    T = n(981631),
    C = n(388032);
function A(e, t, n) {
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
function N(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase()),
    );
}
function D() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase()),
    );
}
function x() {
    let e = new Date().getFullYear();
    return new Set(
        o()
            .range(2015, e + 1)
            .map((e) => e.toString()),
    );
}
function L(e, t) {
    return [e, e.clone().add(1, t)];
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return L(l()().startOf(e).add(t, e), e);
}
function M(e, t, n) {
    return L(l()(e, t).local(), n);
}
function k() {
    return {
        [C.intl.string(C.t.HYiVEQ)]: () => j("day"),
        [C.intl.string(C.t.cu86KC)]: () => j("day", -1),
        [C.intl.string(C.t["FvBj/6"])]: () => j("week"),
        [C.intl.string(C.t["20uWCw"])]: () => j("month"),
        [C.intl.string(C.t["dXC/hn"])]: () => j("year"),
    };
}
let U = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
    G = "\\d{4}",
    Z = "([0-9]{4})-([0-9]{1,2})",
    F = "([^\\d\\s]+)",
    B = RegExp("(?:\\s*(".concat(U, "|").concat(Z, "|").concat(G, "|").concat(F, "))"), "i"),
    V = RegExp("\\s*(true|false)", "i");
function H(e) {
    return "".concat(e, ":");
}
function Y(e) {
    return RegExp(H(e), "i");
}
function W(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return (
        null !=
            (t = T.Xyh.test(n)
                ? n
                : r(
                      n === T.ME
                          ? m.default.getCurrentUser()
                          : null != e.getMatch(4)
                            ? m.default.findByTag(e.getMatch(4))
                            : m.default.findByTag(e.getMatch(2), e.getMatch(3)),
                  )) && (e.setData("userId", t), !0)
    );
}
function K(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        a = k()[i];
    return (
        null != a
            ? ([n, r] = a())
            : R().has(i)
              ? ([n, r] = M(i, "MMMM", "month"))
              : D().has(i)
                ? ([n, r] = M(i, "dddd", "day"))
                : x().has(i)
                  ? ([n, r] = M(i, "YYYY", "year"))
                  : ([n, r] = M(i, T.b2L, "day")),
        !!(n.isValid() && r.isValid()) &&
            ("before" === t ? ((r = n), (n = null)) : "after" === t && ((n = r), (r = null)),
            e.setData("start", n),
            e.setData("end", r),
            !0)
    );
}
function z(e, t, n) {
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
function q(e, t) {
    let n = Object.values(d.Z.getMutablePrivateChannels()).filter((e) => {
        if (e.isGroupDM() && t === (0, u.F6)(e, m.default, p.Z)) return !0;
        if (e.isDM()) {
            let n = e.getRecipientId(),
                r = m.default.getUser(n);
            return null != r && t === b.ZP.getUserTag(r);
        }
        return !1;
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
function Q(e, t) {
    let n = e.getMatch(1);
    return T.Xyh.test(n)
        ? (e.setData("channelIds", [n]), !0)
        : (n.startsWith('"') && n.endsWith('"') && (n = n.substring(1, n.length - 1).replaceAll(/\\(.)/g, (e, t) => t)),
            (0, v.b7)(t))
          ? z(e, n, t.guildId)
          : t.type === T.aib.DMS && !h.Z.hidePersonalInformation && q(e, n);
}
function X(e) {
    let t = {
        [C.intl.string(C.t.ZNR2fi)]: "link",
        [C.intl.string(C.t["20uQR3"])]: "embed",
        [C.intl.string(C.t.L4lxyE)]: "poll",
        [C.intl.string(C.t.nrpA5E)]: "snapshot",
        [C.intl.string(C.t["AV/v6i"])]: "file",
        [C.intl.string(C.t.XM9XGP)]: "video",
        [C.intl.string(C.t.TNLcpx)]: "image",
        [C.intl.string(C.t.F8Wf0e)]: "sound",
        [C.intl.string(C.t.PJgX2h)]: "sticker",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("has", t), !0);
}
function J(e) {
    let t = {
        [C.intl.string(C.t.tPZo4p)]: "user",
        [C.intl.string(C.t.JL7sRS)]: "bot",
        [C.intl.string(C.t.WjkIKU)]: "webhook",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("author_type", t), !0);
}
function $() {
    return [...Array.from(R()), ...Array.from(D()), ...Array.from(x()), ...Object.keys(k())];
}
function ee(e, t, n) {
    return et(e, t, $()).map((e) =>
        w(N({}, e), {
            group: n,
            key: "".concat(n, "-").concat(e.text),
        }),
    );
}
function et(e, t, n) {
    let r = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function en(e) {
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
                    r(m.default.getUser(e));
                } else
                    t.isGroupDM() &&
                        t.recipients.forEach((e) => {
                            r(m.default.getUser(e));
                        });
        }),
        i
    );
}
function er(e) {
    let { query: t, searchContext: n, maxResults: r = 10, tokens: i } = e,
        a = {
            query: (t = t.trim().split("#")[0]),
            limit: r,
            request: !1,
            boosters: (0, g.Cq)(c.h8.USER),
        },
        o = [];
    switch (n.type) {
        case T.aib.GUILD:
        case T.aib.GUILD_CHANNEL:
        case T.aib.THREAD:
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
                    O.Z.getRecentMessageAuthorIds(n.guildId).forEach((e) => i(m.default.getUser(e))),
                    e.slice(0, r)
                );
            }
            o = g.ZP.queryGuildUsers(w(N({}, a), { guildId: n.guildId }));
            break;
        case T.aib.CHANNEL:
            o = g.ZP.queryChannelUsers(w(N({}, a), { channelId: n.channelId }));
            break;
        case T.aib.DMS:
            let s = en(null != i ? i : []);
            if (null != s && s.length > 0) {
                let e = m.default.getCurrentUser();
                null != e && s.push(e),
                    (o = g.ZP.queryUsers(
                        w(N({}, a), {
                            users: s,
                            boosters: (0, g.Cq)(c.h8.USER),
                        }),
                    ));
            } else o = g.ZP.queryAllUsers(w(N({}, a), { boosters: (0, g.Cq)(c.h8.USER) }));
            break;
        default:
            return [];
    }
    let l = m.default.getCurrentUser(),
        u = t.toLowerCase().replace(/^@/, ""),
        d = null != l && t.length > 0 && (C.intl.string(C.t.Qf3ptv).startsWith(u) || T.ME.substr(1).startsWith(u)),
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
                text: T.ME,
                user: l,
            }),
        f
    );
}
function ei() {
    return !h.Z.hidePersonalInformation;
}
function ea(e, t, n) {
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
                let e = (0, u.F6)(t, m.default, p.Z);
                a.unshift({
                    text: e,
                    channel: t,
                    key: t.id,
                });
            } else if (t.isDM()) {
                let e = t.getRecipientId(),
                    n = m.default.getUser(e);
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
function eo(e, t, n) {
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
function es(e) {
    let { query: t, searchContext: n, maxResults: r } = e;
    return ((t = t.trim()).startsWith('"') && t.endsWith('"')
        ? (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
        : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
    "#" === t[0] && (t = t.substring(1)),
    (0, v.b7)(n))
        ? eo(t, n.guildId, r)
        : n.type !== T.aib.DMS || h.Z.hidePersonalInformation
          ? []
          : ea(t, r, !0);
}
let el = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ec = (function (e) {
    return (e.FILTER = "FILTER"), (e.ANSWER = "ANSWER"), e;
})({});
function eu(e) {
    let t = [C.intl.string(C.t.tPZo4p), C.intl.string(C.t.JL7sRS), C.intl.string(C.t.WjkIKU)],
        n = [
            C.intl.string(C.t.TNLcpx),
            C.intl.string(C.t.XM9XGP),
            C.intl.string(C.t.ZNR2fi),
            C.intl.string(C.t["AV/v6i"]),
            C.intl.string(C.t["20uQR3"]),
            C.intl.string(C.t.F8Wf0e),
            C.intl.string(C.t.L4lxyE),
            C.intl.string(C.t.PJgX2h),
            C.intl.string(C.t.nrpA5E),
        ];
    return {
        [T.dCx.FILTER_FROM]: {
            regex: Y(C.intl.string(C.t["1TUdFo"])),
            componentType: "FILTER",
            key: H(C.intl.string(C.t["1TUdFo"])),
            plainText: C.intl.string(C.t["1TUdFo"]),
            validator: ei,
            getAutocompletions: er,
        },
        [T.dCx.ANSWER_USERNAME_FROM]: {
            follows: [T.dCx.FILTER_FROM],
            regex: el,
            validator: W,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [T.dCx.FILTER_MENTIONS]: {
            regex: Y(C.intl.string(C.t["i96lO+"])),
            componentType: "FILTER",
            key: H(C.intl.string(C.t["i96lO+"])),
            plainText: C.intl.string(C.t["i96lO+"]),
            validator: ei,
            getAutocompletions: er,
        },
        [T.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [T.dCx.FILTER_MENTIONS],
            regex: el,
            validator: W,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [T.dCx.FILTER_HAS]: {
            regex: Y(C.intl.string(C.t.CqCvir)),
            componentType: "FILTER",
            key: H(C.intl.string(C.t.CqCvir)),
            plainText: C.intl.string(C.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: r } = e;
                return et(t, r, n);
            },
        },
        [T.dCx.ANSWER_HAS]: {
            regex: RegExp("(?:\\s*-?(".concat(n.map((e) => E.Z.escape(e)).join("|"), "))"), "i"),
            follows: [T.dCx.FILTER_HAS],
            validator: X,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [T.dCx.FILTER_FILE_TYPE]: {
            regex: Y(C.intl.string(C.t.TMNjFm)),
            key: H(C.intl.string(C.t.TMNjFm)),
            plainText: C.intl.string(C.t.TMNjFm),
            componentType: "FILTER",
        },
        [T.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [T.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extensions",
        },
        [T.dCx.FILTER_FILE_NAME]: {
            regex: Y(C.intl.string(C.t["5xtLRC"])),
            key: H(C.intl.string(C.t["5xtLRC"])),
            plainText: C.intl.string(C.t["5xtLRC"]),
            componentType: "FILTER",
        },
        [T.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [T.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [T.dCx.FILTER_BEFORE]: {
            regex: Y(C.intl.string(C.t["qZ+7BA"])),
            componentType: "FILTER",
            key: H(C.intl.string(C.t["qZ+7BA"])),
            plainText: C.intl.string(C.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return ee(t, n, T.dCx.FILTER_BEFORE);
            },
        },
        [T.dCx.FILTER_ON]: {
            regex: Y("(".concat(C.intl.string(C.t.tIxkOo), "|").concat(C.intl.string(C.t.h2NzSd), ")")),
            componentType: "FILTER",
            key: H(C.intl.string(C.t.h2NzSd)),
            plainText: C.intl.string(C.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return ee(t, n, T.dCx.FILTER_ON);
            },
        },
        [T.dCx.FILTER_AFTER]: {
            regex: Y(C.intl.string(C.t.KSDx7M)),
            componentType: "FILTER",
            key: H(C.intl.string(C.t.KSDx7M)),
            plainText: C.intl.string(C.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return ee(t, n, T.dCx.FILTER_AFTER);
            },
        },
        [T.dCx.ANSWER_BEFORE]: {
            regex: B,
            follows: [T.dCx.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => K(e, "before"),
        },
        [T.dCx.ANSWER_ON]: {
            regex: B,
            follows: [T.dCx.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => K(e, "on"),
        },
        [T.dCx.ANSWER_AFTER]: {
            regex: B,
            follows: [T.dCx.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => K(e, "after"),
        },
        [T.dCx.FILTER_IN]: {
            regex: Y(C.intl.string(C.t.WNpFHa)),
            componentType: "FILTER",
            key: H(C.intl.string(C.t.WNpFHa)),
            plainText: C.intl.string(C.t.WNpFHa),
            validator: () => {
                let t = null != e ? e : y.Z.getSelectedSearchContext();
                return null != t && (0, v.R6)(t);
            },
            getAutocompletions: es,
        },
        [T.dCx.ANSWER_IN]: {
            regex: I.e,
            mutable: !0,
            follows: [T.dCx.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = null != e ? e : y.Z.getSelectedSearchContext();
                return null != n && Q(t, n);
            },
            queryKey: "channel_id",
        },
        [T.dCx.FILTER_PINNED]: {
            regex: Y(C.intl.string(C.t["0B74eY"])),
            componentType: "FILTER",
            key: H(C.intl.string(C.t["0B74eY"])),
            plainText: C.intl.string(C.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [T.dCx.ANSWER_PINNED]: {
            regex: V,
            componentType: "ANSWER",
            follows: [T.dCx.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [T.dCx.FILTER_AUTHOR_TYPE]: {
            regex: Y(C.intl.string(C.t.us8IQi)),
            componentType: "FILTER",
            key: H(C.intl.string(C.t.us8IQi)),
            plainText: C.intl.string(C.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: r } = e;
                return et(n, r, t);
            },
        },
        [T.dCx.ANSWER_AUTHOR_TYPE]: {
            regex: RegExp("(?:\\s*-?(".concat(t.map((e) => E.Z.escape(e)).join("|"), "))"), "i"),
            follows: [T.dCx.FILTER_AUTHOR_TYPE],
            validator: J,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let ed = {};
function ef() {
    return eu({ type: T.aib.DMS });
}
function ep() {
    Object.assign(ed, eu());
}
function e_(e) {
    return T.TNx.test(e);
}
function eh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(ed).length,
        n = [];
    for (let r of Object.keys(ed)) {
        if (n.length >= t) break;
        let a = ed[r].key;
        e_(r) &&
            null != a &&
            i()(e.toLowerCase(), a) &&
            n.push({
                token: r,
                text: a,
            });
    }
    return n;
}
function em(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return C.intl.string(C.t.Qf3ptv).startsWith(t) || T.ME.substring(1).startsWith(t);
}
let eg = ed;
