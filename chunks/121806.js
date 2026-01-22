n.d(t, {
    CT: () => B,
    H3: () => F,
    Ht: () => V,
    KD: () => M,
    Ky: () => G,
    TT: () => j,
    _2: () => W,
    dY: () => z,
    ps: () => x,
    u2: () => k,
    vj: () => H,
    wf: () => Y,
}),
    n(733351),
    n(896048),
    n(321073),
    n(667532),
    n(747238);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(989349),
    o = n.n(s),
    l = n(835245),
    c = n(311907),
    u = n(397927),
    d = n(157559),
    f = n(713654),
    p = n(734057),
    _ = n(287809),
    h = n(403362),
    m = n(562153),
    g = n(427262),
    E = n(256796),
    b = n(692986),
    y = n(822382),
    O = n(893162),
    A = n(771650),
    v = n(907745),
    S = n(315059),
    I = n(652215),
    T = n(985018);

function C(e, t, n) {
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
                C(e, t, n[t]);
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

function P(e) {
    let { searchContext: t, filter: n, queryString: r } = e,
        a = (0, c.bG)([b.A], () => b.A.getState(t), [t], c.My),
        s = i.useMemo(() => {
            let e = a.autocompletes[0];
            return null != e && e.group === n ? e.results : [];
        }, [a.autocompletes, n]),
        o = i.useMemo(() => {
            let e = A.Ay[n].key;
            return "".concat(e, " ").concat(r);
        }, [n, r]),
        l = i.useCallback(() => {
            let e = (0, y._o)(o),
                n = (0, y.zZ)(e, o.length - 1, o.length - 1);
            E.A.updateAutocompleteQuery({
                searchContext: t,
                tokens: e,
                cursorScope: n,
                queryString: o,
            });
        }, [t, o]),
        u = i.useCallback(() => {
            l();
        }, [l]);
    return (
        i.useEffect(() => {
            r.trim().length > 0 && l();
        }, [o, t, l, r]),
        {
            filterAutocompleteResults: s,
            handleFocusFilter: u,
            autocompleteStoreState: a,
        }
    );
}

function D(e) {
    let { user: t, guildId: n, channelId: r } = e,
        i = m.Ay.getName(n, r, t),
        a = t.getAvatarURL(n, (0, u.FT9)(u._3J.SIZE_24));
    return {
        value: t.id,
        label: i,
        key: t.id,
        id: t.id,
        leading: {
            type: "avatar",
            src: a,
        },
        trailing: t.username,
    };
}

function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = i.useMemo(() => (0, y.mt)(e), [e]),
        a = i.useMemo(() => (0, y._b)(e), [e]),
        [s, o] = i.useState(n),
        [l, c] = i.useState(""),
        {
            filterAutocompleteResults: u,
            handleFocusFilter: d,
            autocompleteStoreState: f,
        } = P({
            searchContext: e,
            filter: t,
            queryString: l,
        }),
        p = i.useMemo(() => {
            let e = [],
                t = new Set();
            if (u.length > 0)
                u.forEach((n) => {
                    let i = n.user,
                        s = D({
                            user: i,
                            guildId: r,
                            channelId: a,
                        });
                    t.add(i.id), e.push(s);
                });
            else {
                let { tokens: n } = f,
                    i = n[n.length - 1];
                if (
                    null != i &&
                    (i.type === I.LWr.ANSWER_USERNAME_FROM || i.type === I.LWr.ANSWER_USERNAME_MENTIONS) &&
                    (0, A.sC)(i)
                ) {
                    let n = i.getData("userId"),
                        s = _.default.getUser(n);
                    if (null != s) {
                        let n = D({
                            user: s,
                            guildId: r,
                            channelId: a,
                        });
                        t.add(s.id), e.push(n);
                    }
                }
            }
            return (
                s.length > 0 &&
                    s.forEach((n) => {
                        if (t.has(n)) return;
                        let i = _.default.getUser(n);
                        if (null == i) return;
                        let s = D({
                            user: i,
                            guildId: r,
                            channelId: a,
                        });
                        t.add(n), e.unshift(s);
                    }),
                e
            );
        }, [f, u, s, r, a]),
        m = i.useCallback(() => {
            o([]), c("");
        }, []),
        E = i.useCallback(() => {
            c("");
        }, []),
        b = i.useCallback(
            (e) => {
                if (0 === s.length) return null;
                let t = A.Ay[e];
                return s
                    .map((e) => {
                        let n = _.default.getUser(e);
                        if (null == n) return null;
                        let r = g.Ay.getUserTag(n);
                        return "" === r ? null : "".concat(t.key, " ").concat(r);
                    })
                    .filter(h.Vq)
                    .join(" ");
            },
            [s],
        );
    return {
        options: p,
        query: s,
        setQuery: o,
        setQueryString: c,
        handleClearFilter: m,
        getApplyQueryString: b,
        handleFocusFilter: d,
        handleBlurFilter: E,
    };
}

function L(e) {
    let t,
        { channel: n } = e;
    if (n.isDM()) {
        let e = n.getRecipientId(),
            r = _.default.getUser(e);
        null != r &&
            (t = {
                type: "avatar",
                src: r.getAvatarURL(null, (0, u.FT9)(u._3J.SIZE_20)),
            });
    } else
        t = n.isGroupDM()
            ? (0, r.jsx)(S.A, {
                  channel: n,
                  avatarSize: u._3J.SIZE_20,
                  iconSize: "refresh_sm",
              })
            : (0, f.gU)(n);
    return {
        value: n.id,
        label: (0, y.E3)(n),
        key: n.id,
        id: n.id,
        leading: t,
    };
}

function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        [a, s] = i.useState(""),
        {
            filterAutocompleteResults: o,
            handleFocusFilter: l,
            autocompleteStoreState: c,
        } = P({
            searchContext: e,
            filter: I.LWr.FILTER_IN,
            queryString: a,
        }),
        u = i.useMemo(() => {
            let t = [],
                r = new Set();
            if (o.length > 0)
                o.forEach((e) => {
                    let n = e.channel,
                        i = L({
                            channel: n,
                        });
                    r.add(n.id), t.push(i);
                });
            else {
                let { tokens: n } = c,
                    i = n[n.length - 1];
                if (null != i && i.type === I.LWr.ANSWER_IN && (0, A.Yd)(i, e)) {
                    let e = i.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let n = p.A.getChannel(e);
                            if (null != n) {
                                let e = L({
                                    channel: n,
                                });
                                r.add(n.id), t.push(e);
                            }
                        });
                }
            }
            return (
                n.length > 0 &&
                    n.forEach((e) => {
                        if (r.has(e)) return;
                        let n = p.A.getChannel(e);
                        if (null == n) return;
                        let i = L({
                            channel: n,
                        });
                        r.add(e), t.unshift(i);
                    }),
                t
            );
        }, [c, o, n, e]),
        d = i.useCallback(() => {
            r([]), s("");
        }, []),
        f = i.useCallback(() => {
            s("");
        }, []),
        _ = i.useCallback(
            (e) => {
                if (0 === n.length) return null;
                let t = A.Ay[e];
                return n
                    .map((e) => {
                        let n = p.A.getChannel(e);
                        if (null == n) return;
                        let r = (0, y.E3)(n),
                            i = (0, y.TZ)(r);
                        return "".concat(t.key, " ").concat(i);
                    })
                    .join(" ");
            },
            [n],
        );
    return {
        options: u,
        query: n,
        setQuery: r,
        setQueryString: s,
        handleClearFilter: d,
        getApplyQueryString: _,
        handleFocusFilter: l,
        handleBlurFilter: f,
    };
}

function M(e) {
    switch (e) {
        case T.intl.string(T.t.ZNR2fi):
            return u.qYV;
        case T.intl.string(T.t["20uQR3"]):
            return u.JD7;
        case T.intl.string(T.t.L4lxyE):
            return u.YRe;
        case T.intl.string(T.t["AV/v6i"]):
            return u.oSV;
        case T.intl.string(T.t.XM9XGP):
            return u.npA;
        case T.intl.string(T.t.TNLcpx):
            return u.xfq;
        case T.intl.string(T.t.F8Wf0e):
            return u.JMI;
        case T.intl.string(T.t.PJgX2h):
            return u.tEP;
        case T.intl.string(T.t.nrpA5E):
            return u.tuI;
        default:
            return null;
    }
}

function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        { filterAutocompleteResults: a, handleFocusFilter: s } = P({
            searchContext: e,
            filter: I.LWr.FILTER_HAS,
            queryString: "",
        }),
        o = i.useMemo(() => {
            if (0 === a.length && 0 === n.length) return [];
            let e = [],
                t = new Set();
            return (
                n.length > 0 &&
                    n.forEach((n) => {
                        t.add(n),
                            e.push({
                                value: n,
                                label: n,
                                key: n,
                                id: n,
                                leading: M(n),
                            });
                    }),
                a.length > 0 &&
                    a.forEach((n) => {
                        let { text: r } = n;
                        t.has(r) ||
                            (e.push({
                                value: r,
                                label: r,
                                key: r,
                                id: r,
                                leading: M(r),
                            }),
                            t.add(r));
                    }),
                e
            );
        }, [a, n]),
        l = i.useCallback(() => {
            r([]);
        }, []),
        c = i.useCallback(
            (e) => {
                if (0 === n.length) return null;
                let t = A.Ay[e];
                return n.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [n],
        );
    return {
        options: o,
        query: n,
        setQuery: r,
        handleClearFilter: l,
        getApplyQueryString: c,
        handleFocusFilter: s,
    };
}
let U = () =>
    i.useMemo(() => {
        var e, t, n;
        let r = A.Ay[I.LWr.FILTER_BEFORE],
            i = A.Ay[I.LWr.FILTER_AFTER],
            a = A.Ay[I.LWr.FILTER_ON];
        return {
            beforeFilter: null != (e = null == r ? void 0 : r.key) ? e : "".concat(T.intl.string(T.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == i ? void 0 : i.key) ? t : "".concat(T.intl.string(T.t.KSDx7M), ":"),
            duringFilter: null != (n = null == a ? void 0 : a.key) ? n : "".concat(T.intl.string(T.t.h2NzSd), ":"),
        };
    }, []);

function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, n] = i.useState(e),
        r = i.useCallback(() => (0, l.A)(), []),
        a = i.useCallback((e) => e.date.isValid(), []),
        s = i.useMemo(() => t.filter(a), [t, a]),
        { beforeFilter: c, afterFilter: u, duringFilter: d } = U(),
        f = i.useCallback(
            () => ({
                query: c,
                date: o()(),
                id: r(),
            }),
            [c, r],
        ),
        p = i.useMemo(
            () => [
                {
                    key: "Before",
                    label: T.intl.string(T.t["ptL/DP"]),
                    value: c,
                },
                {
                    key: "After",
                    label: T.intl.string(T.t.waQeEV),
                    value: u,
                },
                {
                    key: "During",
                    label: T.intl.string(T.t.LT5TnZ),
                    value: d,
                },
            ],
            [c, u, d],
        ),
        _ = i.useCallback((e) => {
            let { query: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (
                    (n[r] = w(N({}, n[r]), {
                        query: t,
                    })),
                    n
                );
            });
        }, []),
        h = i.useCallback((e) => {
            let { date: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (
                    (n[r] = w(N({}, n[r]), {
                        date: t,
                    })),
                    n
                );
            });
        }, []),
        m = i.useCallback(() => {
            n((e) => [...e, f()]);
        }, [f]),
        g = i.useCallback((e) => {
            n((t) => {
                let n = [...t];
                return n.splice(e, 1), n;
            });
        }, []),
        E = i.useCallback(() => {
            n([]);
        }, []),
        b = i.useCallback(
            () =>
                0 === s.length
                    ? null
                    : s
                          .map((e) => {
                              let { query: t, date: n } = e,
                                  r = n.format(I.ump);
                              return "".concat(t, " ").concat(r);
                          })
                          .join(" "),
            [s],
        );
    return {
        options: p,
        dates: t,
        validDates: s,
        handleDateQueryChange: _,
        handleDateChange: h,
        handleAddDateFilter: m,
        handleRemoveDateFilter: g,
        handleClearDateFilter: E,
        getDateQueryString: b,
    };
}

function V(e) {
    switch (e) {
        case T.intl.string(T.t.tPZo4p):
            return u.nys;
        case T.intl.string(T.t.JL7sRS):
            return u.CnV;
        case T.intl.string(T.t.WjkIKU):
            return u.XC7;
    }
}

function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        { filterAutocompleteResults: a, handleFocusFilter: s } = P({
            searchContext: e,
            filter: I.LWr.FILTER_AUTHOR_TYPE,
            queryString: "",
        }),
        o = i.useMemo(() => {
            if (0 === a.length && 0 === n.length) return [];
            let e = [],
                t = new Set();
            return (
                n.length > 0 &&
                    n.forEach((n) => {
                        t.add(n),
                            e.push({
                                value: n,
                                label: n,
                                key: n,
                                id: n,
                                leading: V(n),
                            });
                    }),
                a.length > 0 &&
                    a.forEach((n) => {
                        let { text: r } = n;
                        t.has(r) ||
                            (e.push({
                                value: r,
                                label: r,
                                key: r,
                                id: r,
                                leading: V(r),
                            }),
                            t.add(r));
                    }),
                e
            );
        }, [a, n]),
        l = i.useCallback(() => {
            r([]);
        }, []),
        c = i.useCallback(
            (e) => {
                if (0 === n.length) return null;
                let t = A.Ay[e];
                return n.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [n],
        );
    return {
        options: o,
        query: n,
        setQuery: r,
        handleClearFilter: l,
        getApplyQueryString: c,
        handleFocusFilter: s,
    };
}

function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [n, r] = i.useState(t),
        a = i.useMemo(() => {
            var t, r, i;
            let a =
                null !=
                (t =
                    null == (r = (i = A.Ay[I.LWr.FILTER_PINNED]).getAutocompletions)
                        ? void 0
                        : r.call(i, {
                              query: "",
                              maxResults: 10,
                              searchContext: e,
                          }))
                    ? t
                    : [];
            if (0 === a.length && null === n) return [];
            let s = [];
            return (
                a.length > 0 &&
                    a.forEach((e) => {
                        let { text: t } = e;
                        s.push({
                            value: t,
                            label: t,
                            key: t,
                        });
                    }),
                s
            );
        }, [e, n]),
        s = i.useCallback(() => {
            r(null);
        }, []),
        o = i.useCallback(
            (e) => {
                if (null === n) return null;
                let t = A.Ay[e];
                return "".concat(t.key, " ").concat(n);
            },
            [n],
        );
    return {
        options: a,
        query: n,
        setQuery: r,
        handleClearFilter: s,
        getApplyQueryString: o,
    };
}

function H(e, t) {
    let { beforeFilter: n, afterFilter: r, duringFilter: a } = U(),
        s = (0, O.R)(t);
    return i.useMemo(() => {
        let t = {
                [I.LWr.FILTER_FROM]: [],
                [I.LWr.FILTER_MENTIONS]: [],
                [I.LWr.FILTER_HAS]: [],
                [I.LWr.FILTER_IN]: [],
                [I.LWr.FILTER_ON]: [],
                [I.LWr.FILTER_BEFORE]: [],
                [I.LWr.FILTER_AFTER]: [],
                [I.LWr.FILTER_PINNED]: null,
                [I.LWr.FILTER_AUTHOR_TYPE]: [],
            },
            i = [],
            c = 0;
        e.forEach((e) => {
            if (I.T2E.test(e.type))
                switch (e.type) {
                    case I.LWr.ANSWER_USERNAME_FROM:
                        if (s.has(I.LWr.FILTER_FROM)) {
                            let n = t[I.LWr.FILTER_FROM],
                                r = e.getData("userId");
                            n.push(r), (c += 1);
                        }
                        break;
                    case I.LWr.ANSWER_USERNAME_MENTIONS:
                        if (s.has(I.LWr.FILTER_MENTIONS)) {
                            let n = t[I.LWr.FILTER_MENTIONS],
                                r = e.getData("userId");
                            n.push(r), (c += 1);
                        }
                        break;
                    case I.LWr.ANSWER_HAS:
                        let u = t[I.LWr.FILTER_HAS],
                            d = e.getData("has");
                        u.push(d), (c += 1);
                        break;
                    case I.LWr.ANSWER_IN:
                        if (s.has(I.LWr.FILTER_IN)) {
                            var f;
                            let n = t[I.LWr.FILTER_IN],
                                r = null != (f = e.getData("channelIds")) ? f : [];
                            n.push(...r), (c += 1);
                        }
                        break;
                    case I.LWr.ANSWER_BEFORE:
                        let p = t[I.LWr.FILTER_BEFORE],
                            _ = e.getData("end"),
                            h = {
                                query: n,
                                date: o()(_),
                                id: (0, l.A)(),
                            };
                        p.push(h), i.push(h), (c += 1);
                        break;
                    case I.LWr.ANSWER_ON:
                        let m = t[I.LWr.FILTER_ON],
                            g = e.getData("start"),
                            E = {
                                query: a,
                                date: o()(g),
                                id: (0, l.A)(),
                            };
                        m.push(E), i.push(E), (c += 1);
                        break;
                    case I.LWr.ANSWER_AFTER:
                        let b = t[I.LWr.FILTER_AFTER],
                            y = e.getData("start"),
                            O = {
                                query: r,
                                date: o()(y),
                                id: (0, l.A)(),
                            };
                        b.push(O), i.push(O), (c += 1);
                        break;
                    case I.LWr.ANSWER_PINNED:
                        let A = t[I.LWr.FILTER_PINNED],
                            v = e.getData("pinned").toString();
                        null === A ? (A = v) : "true" !== A && "true" === v && (A = v),
                            (t[I.LWr.FILTER_PINNED] = A),
                            (c += 1);
                        break;
                    case I.LWr.ANSWER_AUTHOR_TYPE:
                        if (s.has(I.LWr.FILTER_AUTHOR_TYPE)) {
                            let n = t[I.LWr.FILTER_AUTHOR_TYPE],
                                r = e.getData("author_type");
                            n.push(r), (c += 1);
                        }
                }
        });
        let u = {
            [I.LWr.FILTER_FROM]: t[I.LWr.FILTER_FROM],
            [I.LWr.FILTER_MENTIONS]: t[I.LWr.FILTER_MENTIONS],
            [I.LWr.FILTER_HAS]: t[I.LWr.FILTER_HAS],
            [I.LWr.FILTER_IN]: t[I.LWr.FILTER_IN],
            dateFilters: i,
            [I.LWr.FILTER_AUTHOR_TYPE]: t[I.LWr.FILTER_AUTHOR_TYPE],
            [I.LWr.FILTER_PINNED]: t[I.LWr.FILTER_PINNED],
        };
        return {
            allPrefilledSearchFilters: t,
            totalFilters: c,
            prefilledSearchFilters: u,
            eligibleFilterTokens: s,
        };
    }, [e, n, r, a, s]);
}

function Y(e, t) {
    return e === t || (0, a.isEqual)(e, t);
}

function W(e, t) {
    var n, r;
    if (e.length !== t.length) return !1;
    let i = new Map();
    for (let t of e) {
        let e = "".concat(t.query, ":").concat(t.date.valueOf()),
            r = null != (n = i.get(e)) ? n : 0;
        i.set(e, r + 1);
    }
    for (let e of t) {
        let t = "".concat(e.query, ":").concat(e.date.valueOf()),
            n = null != (r = i.get(t)) ? r : 0;
        if (0 === n) return !1;
        i.set(t, n - 1);
    }
    for (let e of i.values()) if (0 !== e) return !1;
    return !0;
}

function K(e, t) {
    let n,
        r = A.Ay[e];
    switch (e) {
        case I.LWr.FILTER_FROM:
        case I.LWr.FILTER_MENTIONS:
            let i = _.default.getUser(t);
            n = null == i ? t : "".concat(i.username);
            break;
        case I.LWr.FILTER_IN:
            let a = p.A.getChannel(t);
            if (null == a) n = t;
            else {
                let e = (0, y.E3)(a);
                n = (0, y.TZ)(e);
            }
            break;
        case I.LWr.FILTER_HAS:
        case I.LWr.FILTER_PINNED:
        case I.LWr.FILTER_AUTHOR_TYPE:
        default:
            n = t;
    }
    return r.key + " " + n;
}

function z(e) {
    let { nonFilterQueryString: t, filterQueryString: n } = e,
        r = +(n.length > 0),
        a = +(t.length > 0),
        s = v.E2 - t.length - a - r,
        o = i.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return n.length + t.length > s;
            },
            [n.length, s],
        ),
        l = i.useMemo(() => {
            let e = 18;
            return n.length + e > s;
        }, [n.length, s]),
        c = i.useCallback(() => {
            d.A.show({
                title: T.intl.string(T.t.nOqJcX),
                body: T.intl.string(T.t.zzAcsv),
                confirmText: T.intl.string(T.t["qcYY+/"]),
            });
        }, []);
    return {
        validateFilter: i.useCallback(
            (e, t) =>
                !o({
                    newFilterString: K(e, t),
                }) || (c(), !1),
            [o, c],
        ),
        validateDateFilter: i.useCallback(() => !l || (c(), !1), [l, c]),
    };
}
