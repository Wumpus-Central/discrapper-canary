n.d(t, {
    Ej: () => eE,
    Ni: () => X,
    Pr: () => et,
    Qe: () => ed,
    WK: () => eh,
    ZP: () => ey,
    _m: () => eg,
    co: () => eb,
    fx: () => K,
    mh: () => em,
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
    o = n(392711),
    a = n.n(o),
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
    I = n(28964),
    T = n(129301),
    C = n(981631),
    A = n(388032);
function N(e, t, n) {
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
function P(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase()),
    );
}
function x() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase()),
    );
}
function L() {
    let e = new Date().getFullYear();
    return new Set(
        a()
            .range(2015, e + 1)
            .map((e) => e.toString()),
    );
}
function j(e, t) {
    return [e, e.clone().add(1, t)];
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return j(l()().startOf(e).add(t, e), e);
}
function k(e, t, n) {
    return j(l()(e, t).local(), n);
}
function U() {
    return {
        [A.intl.string(A.t.HYiVEQ)]: () => M("day"),
        [A.intl.string(A.t.cu86KC)]: () => M("day", -1),
        [A.intl.string(A.t["FvBj/6"])]: () => M("week"),
        [A.intl.string(A.t["20uWCw"])]: () => M("month"),
        [A.intl.string(A.t["dXC/hn"])]: () => M("year"),
    };
}
let G = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
    Z = "\\d{4}",
    F = "([0-9]{4})-([0-9]{1,2})",
    B = "([^\\d\\s]+)",
    V = RegExp("(?:\\s*(".concat(G, "|").concat(F, "|").concat(Z, "|").concat(B, "))"), "i"),
    H = RegExp("\\s*(true|false)", "i");
function Y(e) {
    return "".concat(e, ":");
}
function W(e) {
    return RegExp(Y(e), "i");
}
function K(e) {
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
function z(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        o = U()[i];
    return (
        null != o
            ? ([n, r] = o())
            : D().has(i)
              ? ([n, r] = k(i, "MMMM", "month"))
              : x().has(i)
                ? ([n, r] = k(i, "dddd", "day"))
                : L().has(i)
                  ? ([n, r] = k(i, "YYYY", "year"))
                  : ([n, r] = k(i, C.b2L, "day")),
        !!(n.isValid() && r.isValid()) &&
            ("before" === t ? ((r = n), (n = null)) : "after" === t && ((n = r), (r = null)),
            e.setData("start", n),
            e.setData("end", r),
            !0)
    );
}
function q(e, t, n) {
    let r = f.ZP.getChannels(n)[f.sH].concat(f.ZP.getChannels(n)[f.Zb]),
        i = f.ZP.getTextChannelNameDisambiguations(n),
        o = S.Z.getCurrentConfig({ location: "guildChannelValidator" }).enabled,
        s = a()
            .chain(r)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .concat(o && null != n ? d.Z.getAllThreadsForGuild(n) : [])
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
        if (e.isGroupDM() && t === (0, u.F6)(e, h.default, p.Z)) return !0;
        if (e.isDM()) {
            let n = e.getRecipientId(),
                r = h.default.getUser(n);
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
function X(e, t) {
    let n = e.getMatch(1);
    return C.Xyh.test(n)
        ? (e.setData("channelIds", [n]), !0)
        : (n.startsWith('"') && n.endsWith('"') && (n = n.substring(1, n.length - 1).replaceAll(/\\(.)/g, (e, t) => t)),
            (0, v.b7)(t))
          ? q(e, n, t.guildId)
          : t.type === C.aib.DMS && !m.Z.hidePersonalInformation && Q(e, n);
}
function J(e) {
    let t = {
        [A.intl.string(A.t.ZNR2fi)]: "link",
        [A.intl.string(A.t["20uQR3"])]: "embed",
        [A.intl.string(A.t.L4lxyE)]: "poll",
        [A.intl.string(A.t.nrpA5E)]: "snapshot",
        [A.intl.string(A.t["AV/v6i"])]: "file",
        [A.intl.string(A.t.XM9XGP)]: "video",
        [A.intl.string(A.t.TNLcpx)]: "image",
        [A.intl.string(A.t.F8Wf0e)]: "sound",
        [A.intl.string(A.t.PJgX2h)]: "sticker",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("has", t), !0);
}
function $(e) {
    let t = {
        [A.intl.string(A.t.tPZo4p)]: "user",
        [A.intl.string(A.t.JL7sRS)]: "bot",
        [A.intl.string(A.t.WjkIKU)]: "webhook",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("author_type", t), !0);
}
function ee() {
    return [...Array.from(D()), ...Array.from(x()), ...Array.from(L()), ...Object.keys(U())];
}
function et() {
    return a().sample(ee());
}
function en(e, t, n) {
    return er(e, t, ee()).map((e) =>
        w(P({}, e), {
            group: n,
            key: "".concat(n, "-").concat(e.text),
        }),
    );
}
function er(e, t, n) {
    let r = e.toLocaleLowerCase();
    return a()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function ei(e) {
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
        o = {
            query: (t = t.trim().split("#")[0]),
            limit: r,
            request: !1,
            boosters: (0, g.Cq)(c.h8.USER),
        },
        a = [];
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
                    o = _.Z.getCurrentlySelectedChannelId(n.guildId);
                return (
                    g.ZP.getRecentlyTalked(o, r).forEach((e) => {
                        let { record: t } = e;
                        return i(t);
                    }),
                    O.Z.getRecentMessageAuthorIds(n.guildId).forEach((e) => i(h.default.getUser(e))),
                    e.slice(0, r)
                );
            }
            a = g.ZP.queryGuildUsers(w(P({}, o), { guildId: n.guildId }));
            break;
        case C.aib.CHANNEL:
            a = g.ZP.queryChannelUsers(w(P({}, o), { channelId: n.channelId }));
            break;
        case C.aib.DMS:
            let s = ei(null != i ? i : []);
            if (null != s && s.length > 0) {
                let e = h.default.getCurrentUser();
                null != e && s.push(e),
                    (a = g.ZP.queryUsers(
                        w(P({}, o), {
                            users: s,
                            boosters: (0, g.Cq)(c.h8.USER),
                        }),
                    ));
            } else a = g.ZP.queryAllUsers(w(P({}, o), { boosters: (0, g.Cq)(c.h8.USER) }));
            break;
        default:
            return [];
    }
    let l = h.default.getCurrentUser(),
        u = t.toLowerCase().replace(/^@/, ""),
        d = null != l && t.length > 0 && (A.intl.string(A.t.Qf3ptv).startsWith(u) || C.ME.substr(1).startsWith(u)),
        f = a
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
function ea() {
    return !m.Z.hidePersonalInformation;
}
function es(e, t, n) {
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
        o = a()(r.concat(i))
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
            let n = o.findIndex((t) => {
                let { channel: n } = t;
                return n.id === e;
            });
            if (-1 !== n) {
                let e = o[n];
                o.splice(n, 1), o.unshift(e);
            } else if (t.isGroupDM()) {
                let e = (0, u.F6)(t, h.default, p.Z);
                o.unshift({
                    text: e,
                    channel: t,
                    key: t.id,
                });
            } else if (t.isDM()) {
                let e = t.getRecipientId(),
                    n = h.default.getUser(e);
                if (null != n) {
                    let e = b.ZP.getUserTag(n);
                    o.unshift({
                        text: e,
                        channel: t,
                        key: t.id,
                    });
                }
            }
        }
    }
    return o.slice(0, t);
}
function el(e, t, n) {
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
    let o = f.ZP.getTextChannelNameDisambiguations(t);
    return a()(i)
        .take(n)
        .map((e) => {
            var t, n;
            return {
                text: "".concat(null != (n = null == (t = o[e.id]) ? void 0 : t.name) ? n : e.name),
                channel: e,
                key: e.id,
            };
        })
        .value();
}
function ec(e) {
    let { query: t, searchContext: n, maxResults: r } = e;
    return ((t = t.trim()).startsWith('"') && t.endsWith('"')
        ? (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
        : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
    "#" === t[0] && (t = t.substring(1)),
    (0, v.b7)(n))
        ? el(t, n.guildId, r)
        : n.type !== C.aib.DMS || m.Z.hidePersonalInformation
          ? []
          : es(t, r, !0);
}
let eu = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ed = (function (e) {
    return (e.FILTER = "FILTER"), (e.ANSWER = "ANSWER"), e;
})({});
function ef() {
    return (0, I.q$)({ location: "getHasOptions" })
        ? [
              A.intl.string(A.t.TNLcpx),
              A.intl.string(A.t.XM9XGP),
              A.intl.string(A.t.ZNR2fi),
              A.intl.string(A.t["AV/v6i"]),
              A.intl.string(A.t["20uQR3"]),
              A.intl.string(A.t.F8Wf0e),
              A.intl.string(A.t.L4lxyE),
              A.intl.string(A.t.PJgX2h),
              A.intl.string(A.t.nrpA5E),
          ]
        : [
              A.intl.string(A.t.ZNR2fi),
              A.intl.string(A.t["20uQR3"]),
              A.intl.string(A.t.L4lxyE),
              A.intl.string(A.t["AV/v6i"]),
              A.intl.string(A.t.XM9XGP),
              A.intl.string(A.t.TNLcpx),
              A.intl.string(A.t.F8Wf0e),
              A.intl.string(A.t.PJgX2h),
              A.intl.string(A.t.nrpA5E),
          ];
}
function ep(e) {
    let t = [A.intl.string(A.t.tPZo4p), A.intl.string(A.t.JL7sRS), A.intl.string(A.t.WjkIKU)],
        n = [
            A.intl.string(A.t.ZNR2fi),
            A.intl.string(A.t["20uQR3"]),
            A.intl.string(A.t.L4lxyE),
            A.intl.string(A.t["AV/v6i"]),
            A.intl.string(A.t.XM9XGP),
            A.intl.string(A.t.TNLcpx),
            A.intl.string(A.t.F8Wf0e),
            A.intl.string(A.t.PJgX2h),
            A.intl.string(A.t.nrpA5E),
        ];
    return {
        [C.dCx.FILTER_FROM]: {
            regex: W(A.intl.string(A.t["1TUdFo"])),
            componentType: "FILTER",
            key: Y(A.intl.string(A.t["1TUdFo"])),
            plainText: A.intl.string(A.t["1TUdFo"]),
            validator: ea,
            getAutocompletions: eo,
        },
        [C.dCx.ANSWER_USERNAME_FROM]: {
            follows: [C.dCx.FILTER_FROM],
            regex: eu,
            validator: K,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [C.dCx.FILTER_MENTIONS]: {
            regex: W(A.intl.string(A.t["i96lO+"])),
            componentType: "FILTER",
            key: Y(A.intl.string(A.t["i96lO+"])),
            plainText: A.intl.string(A.t["i96lO+"]),
            validator: ea,
            getAutocompletions: eo,
        },
        [C.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [C.dCx.FILTER_MENTIONS],
            regex: eu,
            validator: K,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [C.dCx.FILTER_HAS]: {
            regex: W(A.intl.string(A.t.CqCvir)),
            componentType: "FILTER",
            key: Y(A.intl.string(A.t.CqCvir)),
            plainText: A.intl.string(A.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return er(t, n, ef());
            },
        },
        [C.dCx.ANSWER_HAS]: {
            regex: RegExp("(?:\\s*-?(".concat(n.map((e) => E.Z.escape(e)).join("|"), "))"), "i"),
            follows: [C.dCx.FILTER_HAS],
            validator: J,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [C.dCx.FILTER_FILE_TYPE]: {
            regex: W(A.intl.string(A.t.TMNjFm)),
            key: Y(A.intl.string(A.t.TMNjFm)),
            plainText: A.intl.string(A.t.TMNjFm),
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
            regex: W(A.intl.string(A.t["5xtLRC"])),
            key: Y(A.intl.string(A.t["5xtLRC"])),
            plainText: A.intl.string(A.t["5xtLRC"]),
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
            regex: W(A.intl.string(A.t["qZ+7BA"])),
            componentType: "FILTER",
            key: Y(A.intl.string(A.t["qZ+7BA"])),
            plainText: A.intl.string(A.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return en(t, n, C.dCx.FILTER_BEFORE);
            },
        },
        [C.dCx.FILTER_ON]: {
            regex: W("(".concat(A.intl.string(A.t.tIxkOo), "|").concat(A.intl.string(A.t.h2NzSd), ")")),
            componentType: "FILTER",
            key: Y(A.intl.string(A.t.h2NzSd)),
            plainText: A.intl.string(A.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return en(t, n, C.dCx.FILTER_ON);
            },
        },
        [C.dCx.FILTER_AFTER]: {
            regex: W(A.intl.string(A.t.KSDx7M)),
            componentType: "FILTER",
            key: Y(A.intl.string(A.t.KSDx7M)),
            plainText: A.intl.string(A.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return en(t, n, C.dCx.FILTER_AFTER);
            },
        },
        [C.dCx.ANSWER_BEFORE]: {
            regex: V,
            follows: [C.dCx.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => z(e, "before"),
        },
        [C.dCx.ANSWER_ON]: {
            regex: V,
            follows: [C.dCx.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => z(e, "on"),
        },
        [C.dCx.ANSWER_AFTER]: {
            regex: V,
            follows: [C.dCx.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => z(e, "after"),
        },
        [C.dCx.FILTER_IN]: {
            regex: W(A.intl.string(A.t.WNpFHa)),
            componentType: "FILTER",
            key: Y(A.intl.string(A.t.WNpFHa)),
            plainText: A.intl.string(A.t.WNpFHa),
            validator: () => {
                let t = null != e ? e : y.Z.getSelectedSearchContext();
                return null != t && (0, v.R6)(t);
            },
            getAutocompletions: ec,
        },
        [C.dCx.ANSWER_IN]: {
            regex: T.e,
            mutable: !0,
            follows: [C.dCx.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = null != e ? e : y.Z.getSelectedSearchContext();
                return null != n && X(t, n);
            },
            queryKey: "channel_id",
        },
        [C.dCx.FILTER_PINNED]: {
            regex: W(A.intl.string(A.t["0B74eY"])),
            componentType: "FILTER",
            key: Y(A.intl.string(A.t["0B74eY"])),
            plainText: A.intl.string(A.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [C.dCx.ANSWER_PINNED]: {
            regex: H,
            componentType: "ANSWER",
            follows: [C.dCx.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [C.dCx.FILTER_AUTHOR_TYPE]: {
            regex: W(A.intl.string(A.t.us8IQi)),
            componentType: "FILTER",
            key: Y(A.intl.string(A.t.us8IQi)),
            plainText: A.intl.string(A.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: r } = e;
                return er(n, r, t);
            },
        },
        [C.dCx.ANSWER_AUTHOR_TYPE]: {
            regex: RegExp("(?:\\s*-?(".concat(t.map((e) => E.Z.escape(e)).join("|"), "))"), "i"),
            follows: [C.dCx.FILTER_AUTHOR_TYPE],
            validator: $,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let e_ = {};
function em() {
    return ep({ type: C.aib.DMS });
}
function eh() {
    Object.assign(e_, ep());
}
function eg(e) {
    return C.TNx.test(e);
}
function eE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(e_).length,
        n = [];
    for (let r of Object.keys(e_)) {
        if (n.length >= t) break;
        let o = e_[r].key;
        eg(r) &&
            null != o &&
            i()(e.toLowerCase(), o) &&
            n.push({
                token: r,
                text: o,
            });
    }
    return n;
}
function eb(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return A.intl.string(A.t.Qf3ptv).startsWith(t) || C.ME.substring(1).startsWith(t);
}
let ey = e_;
