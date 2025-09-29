l.d(t, {
    Ek: () => D,
    HJ: () => N,
    LE: () => j,
    YL: () => w,
    Z2: () => v,
    Zc: () => L,
    fI: () => P,
    fJ: () => A,
    p4: () => Z,
    ur: () => S,
    zL: () => M,
}),
    l(781311),
    l(388685),
    l(539854),
    l(290780),
    l(35282);
var n = l(951288),
    r = l(647438),
    a = l(392711),
    u = l(913527),
    s = l.n(u),
    c = l(772848),
    i = l(442837),
    o = l(481060),
    d = l(668781),
    E = l(592125),
    f = l(594174),
    h = l(5192),
    g = l(748610),
    C = l(738018),
    R = l(607802),
    T = l(247902),
    I = l(532428),
    b = l(208450),
    p = l(981631),
    F = l(388032);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
function k(e) {
    let { searchContext: t, filter: l, queryString: n } = e,
        a = (0, i.e7)([C.Z], () => C.Z.getState(t), [t], i.pF),
        u = r.useMemo(() => {
            let e = a.autocompletes[0];
            return null != e && e.group === l ? e.results : [];
        }, [a.autocompletes, l]),
        s = r.useMemo(() => {
            let e = I.ZP[l].key;
            return "".concat(e, " ").concat(n);
        }, [l, n]),
        c = r.useCallback(() => {
            let e = (0, R.kG)(s),
                l = (0, R.g9)(e, s.length - 1, s.length - 1);
            g.Z.updateAutocompleteQuery({
                searchContext: t,
                tokens: e,
                cursorScope: l,
                queryString: s,
            });
        }, [t, s]),
        o = r.useCallback(() => {
            c();
        }, [c]);
    return (
        r.useEffect(() => {
            n.trim().length > 0 && c();
        }, [s, t, c, n]),
        {
            filterAutocompleteResults: u,
            handleFocusFilter: o,
        }
    );
}
function O(e) {
    let { user: t, guildId: l, channelId: n } = e,
        r = h.ZP.getName(l, n, t);
    return {
        value: t.id,
        label: r,
        key: t.id,
    };
}
function N(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = r.useMemo(() => (0, R.s5)(e), [e]),
        a = r.useMemo(() => (0, R.AH)(e), [e]),
        [u, s] = r.useState(l),
        [c, i] = r.useState(""),
        { filterAutocompleteResults: o, handleFocusFilter: d } = k({
            searchContext: e,
            filter: t,
            queryString: c,
        }),
        E = r.useMemo(() => {
            if (0 === o.length && 0 === u.length) return [];
            let e = [],
                t = new Set();
            return (
                o.length > 0 &&
                    o.forEach((l) => {
                        let r = l.user,
                            u = O({
                                user: r,
                                guildId: n,
                                channelId: a,
                            });
                        t.add(r.id), e.push(u);
                    }),
                u.length > 0 &&
                    u.forEach((l) => {
                        if (t.has(l)) return;
                        let r = f.default.getUser(l);
                        if (null == r) return;
                        let u = O({
                            user: r,
                            guildId: n,
                            channelId: a,
                        });
                        t.add(l), e.unshift(u);
                    }),
                e
            );
        }, [o, u, n, a]),
        h = r.useCallback(() => {
            s([]), i("");
        }, []),
        g = r.useCallback(
            (e) => {
                if (0 === u.length) return null;
                let t = I.ZP[e];
                return u
                    .map((e) => {
                        let l = f.default.getUser(e);
                        return "".concat(t.key, " ").concat(null == l ? void 0 : l.username);
                    })
                    .join(" ");
            },
            [u],
        );
    return {
        options: E,
        query: u,
        setQuery: s,
        setQueryString: i,
        handleClearFilter: h,
        getApplyQueryString: g,
        handleFocusFilter: d,
    };
}
function L(e) {
    return {
        filter: !1,
        closeOnSelect: !1,
        renderOptionPrefix: r.useCallback(
            (t) => {
                var l;
                if (null == t) return;
                let r = f.default.getUser(t.value);
                if (null == r) return;
                let a = null != (l = r.getAvatarURL(e, 80)) ? l : r.avatar;
                return (0, n.jsx)(o.qEK, {
                    src: a,
                    size: o.EFr.SIZE_16,
                    "aria-hidden": !0,
                });
            },
            [e],
        ),
        renderOptionSuffix: r.useCallback((e) => {
            if (null == e) return;
            let t = f.default.getUser(e.value);
            if (null != t)
                return (0, n.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: t.username,
                });
        }, []),
    };
}
function y(e) {
    let { channel: t } = e;
    return {
        value: t.id,
        label: (0, R.nl)(t),
        key: t.id,
    };
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        [a, u] = r.useState(""),
        { filterAutocompleteResults: s, handleFocusFilter: c } = k({
            searchContext: e,
            filter: p.dCx.FILTER_IN,
            queryString: a,
        }),
        i = r.useMemo(() => {
            if (0 === s.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                s.length > 0 &&
                    s.forEach((l) => {
                        let n = l.channel,
                            r = y({ channel: n });
                        t.add(n.id), e.push(r);
                    }),
                l.length > 0 &&
                    l.forEach((l) => {
                        if (t.has(l)) return;
                        let n = E.Z.getChannel(l);
                        if (null == n) return;
                        let r = y({ channel: n });
                        t.add(l), e.unshift(r);
                    }),
                e
            );
        }, [s, l]),
        o = r.useCallback(() => {
            n([]), u("");
        }, []),
        d = r.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = I.ZP[e];
                return l
                    .map((e) => {
                        let l = E.Z.getChannel(e);
                        if (null == l) return;
                        let n = (0, R.nl)(l),
                            r = (0, R.Jl)(n);
                        return "".concat(t.key, " ").concat(r);
                    })
                    .join(" ");
            },
            [l],
        );
    return {
        options: i,
        query: l,
        setQuery: n,
        setQueryString: u,
        handleClearFilter: o,
        getApplyQueryString: d,
        handleFocusFilter: c,
    };
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        { filterAutocompleteResults: a, handleFocusFilter: u } = k({
            searchContext: e,
            filter: p.dCx.FILTER_HAS,
            queryString: "",
        }),
        s = r.useMemo(() => {
            if (0 === a.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                l.length > 0 &&
                    l.forEach((l) => {
                        t.add(l),
                            e.push({
                                value: l,
                                label: l,
                                key: l,
                            });
                    }),
                a.length > 0 &&
                    a.forEach((l) => {
                        let { text: n } = l;
                        t.has(n) ||
                            (e.push({
                                value: n,
                                label: n,
                                key: n,
                            }),
                            t.add(n));
                    }),
                e
            );
        }, [a, l]),
        c = r.useCallback(() => {
            n([]);
        }, []),
        i = r.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = I.ZP[e];
                return l.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [l],
        );
    return {
        options: s,
        query: l,
        setQuery: n,
        handleClearFilter: c,
        getApplyQueryString: i,
        handleFocusFilter: u,
    };
}
let m = () =>
    r.useMemo(() => {
        var e, t, l;
        let n = I.ZP[p.dCx.FILTER_BEFORE],
            r = I.ZP[p.dCx.FILTER_AFTER],
            a = I.ZP[p.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == n ? void 0 : n.key) ? e : "".concat(F.intl.string(F.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == r ? void 0 : r.key) ? t : "".concat(F.intl.string(F.t.KSDx7O), ":"),
            duringFilter: null != (l = null == a ? void 0 : a.key) ? l : "".concat(F.intl.string(F.t.h2NzSU), ":"),
        };
    }, []);
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, l] = r.useState(e),
        n = r.useCallback(() => (0, c.Z)(), []),
        a = r.useCallback((e) => e.date.isValid(), []),
        u = r.useMemo(() => t.filter(a), [t, a]),
        { beforeFilter: i, afterFilter: o, duringFilter: d } = m(),
        E = r.useCallback(
            () => ({
                query: i,
                date: s()(),
                id: n(),
            }),
            [i, n],
        ),
        f = r.useMemo(
            () => [
                {
                    key: "Before",
                    label: F.intl.string(F.t["ptL/DA"]),
                    value: i,
                },
                {
                    key: "After",
                    label: F.intl.string(F.t.waQeER),
                    value: o,
                },
                {
                    key: "During",
                    label: F.intl.string(F.t.LT5TnZ),
                    value: d,
                },
            ],
            [i, o, d],
        ),
        h = r.useCallback((e) => {
            let { query: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = x(_({}, l[n]), { query: t })), l;
            });
        }, []),
        g = r.useCallback((e) => {
            let { date: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = x(_({}, l[n]), { date: t })), l;
            });
        }, []),
        C = r.useCallback(() => {
            l((e) => [...e, E()]);
        }, [E]),
        R = r.useCallback((e) => {
            l((t) => {
                let l = [...t];
                return l.splice(e, 1), l;
            });
        }, []),
        T = r.useCallback(() => {
            l([]);
        }, []),
        I = r.useCallback(
            () =>
                0 === u.length
                    ? null
                    : u
                          .map((e) => {
                              let { query: t, date: l } = e,
                                  n = l.format(p.b2L);
                              return "".concat(t, " ").concat(n);
                          })
                          .join(" "),
            [u],
        );
    return {
        options: f,
        dates: t,
        validDates: u,
        handleDateQueryChange: h,
        handleDateChange: g,
        handleAddDateFilter: C,
        handleRemoveDateFilter: R,
        handleClearDateFilter: T,
        getDateQueryString: I,
    };
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        { filterAutocompleteResults: a, handleFocusFilter: u } = k({
            searchContext: e,
            filter: p.dCx.FILTER_AUTHOR_TYPE,
            queryString: "",
        }),
        s = r.useMemo(() => {
            if (0 === a.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                l.length > 0 &&
                    l.forEach((l) => {
                        t.add(l),
                            e.push({
                                value: l,
                                label: l,
                                key: l,
                            });
                    }),
                a.length > 0 &&
                    a.forEach((l) => {
                        let { text: n } = l;
                        t.has(n) ||
                            (e.push({
                                value: n,
                                label: n,
                                key: n,
                            }),
                            t.add(n));
                    }),
                e
            );
        }, [a, l]),
        c = r.useCallback(() => {
            n([]);
        }, []),
        i = r.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = I.ZP[e];
                return l.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [l],
        );
    return {
        options: s,
        query: l,
        setQuery: n,
        handleClearFilter: c,
        getApplyQueryString: i,
        handleFocusFilter: u,
    };
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [l, n] = r.useState(t),
        a = r.useMemo(() => {
            var t, n, r;
            let a =
                null !=
                (r =
                    null == (t = (n = I.ZP[p.dCx.FILTER_PINNED]).getAutocompletions)
                        ? void 0
                        : t.call(n, {
                              query: "",
                              maxResults: 10,
                              searchContext: e,
                          }))
                    ? r
                    : [];
            if (0 === a.length && null === l) return [];
            let u = [];
            return (
                a.length > 0 &&
                    a.forEach((e) => {
                        let { text: t } = e;
                        u.push({
                            value: t,
                            label: t,
                            key: t,
                        });
                    }),
                u
            );
        }, [e, l]),
        u = r.useCallback(() => {
            n(null);
        }, []),
        s = r.useCallback(
            (e) => {
                if (null === l) return null;
                let t = I.ZP[e];
                return "".concat(t.key, " ").concat(l);
            },
            [l],
        );
    return {
        options: a,
        query: l,
        setQuery: n,
        handleClearFilter: u,
        getApplyQueryString: s,
    };
}
function Z(e, t) {
    let { beforeFilter: l, afterFilter: n, duringFilter: a } = m(),
        u = (0, T.N)(t);
    return r.useMemo(() => {
        let t = {
                [p.dCx.FILTER_FROM]: [],
                [p.dCx.FILTER_MENTIONS]: [],
                [p.dCx.FILTER_HAS]: [],
                [p.dCx.FILTER_IN]: [],
                [p.dCx.FILTER_ON]: [],
                [p.dCx.FILTER_BEFORE]: [],
                [p.dCx.FILTER_AFTER]: [],
                [p.dCx.FILTER_PINNED]: null,
                [p.dCx.FILTER_AUTHOR_TYPE]: [],
            },
            r = [],
            i = 0;
        e.forEach((e) => {
            if (p.KA4.test(e.type))
                switch (e.type) {
                    case p.dCx.ANSWER_USERNAME_FROM:
                        if (u.has(p.dCx.FILTER_FROM)) {
                            let l = t[p.dCx.FILTER_FROM],
                                n = e.getData("userId");
                            l.push(n), (i += 1);
                        }
                        break;
                    case p.dCx.ANSWER_USERNAME_MENTIONS:
                        if (u.has(p.dCx.FILTER_MENTIONS)) {
                            let l = t[p.dCx.FILTER_MENTIONS],
                                n = e.getData("userId");
                            l.push(n), (i += 1);
                        }
                        break;
                    case p.dCx.ANSWER_HAS:
                        let o = t[p.dCx.FILTER_HAS],
                            d = e.getData("has");
                        o.push(d), (i += 1);
                        break;
                    case p.dCx.ANSWER_IN:
                        if (u.has(p.dCx.FILTER_IN)) {
                            var E;
                            let l = t[p.dCx.FILTER_IN],
                                n = null != (E = e.getData("channelIds")) ? E : [];
                            l.push(...n), (i += 1);
                        }
                        break;
                    case p.dCx.ANSWER_BEFORE:
                        let f = t[p.dCx.FILTER_BEFORE],
                            h = e.getData("end"),
                            g = {
                                query: l,
                                date: s()(h),
                                id: (0, c.Z)(),
                            };
                        f.push(g), r.push(g), (i += 1);
                        break;
                    case p.dCx.ANSWER_ON:
                        let C = t[p.dCx.FILTER_ON],
                            R = e.getData("start"),
                            T = {
                                query: a,
                                date: s()(R),
                                id: (0, c.Z)(),
                            };
                        C.push(T), r.push(T), (i += 1);
                        break;
                    case p.dCx.ANSWER_AFTER:
                        let I = t[p.dCx.FILTER_AFTER],
                            b = e.getData("start"),
                            F = {
                                query: n,
                                date: s()(b),
                                id: (0, c.Z)(),
                            };
                        I.push(F), r.push(F), (i += 1);
                        break;
                    case p.dCx.ANSWER_PINNED:
                        let _ = t[p.dCx.FILTER_PINNED],
                            x = e.getData("pinned").toString();
                        null === _ ? (_ = x) : "true" !== _ && "true" === x && (_ = x),
                            (t[p.dCx.FILTER_PINNED] = _),
                            (i += 1);
                        break;
                    case p.dCx.ANSWER_AUTHOR_TYPE:
                        if (u.has(p.dCx.FILTER_AUTHOR_TYPE)) {
                            let l = t[p.dCx.FILTER_AUTHOR_TYPE],
                                n = e.getData("author_type");
                            l.push(n), (i += 1);
                        }
                }
        });
        let o = {
            [p.dCx.FILTER_FROM]: t[p.dCx.FILTER_FROM],
            [p.dCx.FILTER_MENTIONS]: t[p.dCx.FILTER_MENTIONS],
            [p.dCx.FILTER_HAS]: t[p.dCx.FILTER_HAS],
            [p.dCx.FILTER_IN]: t[p.dCx.FILTER_IN],
            dateFilters: r,
            [p.dCx.FILTER_AUTHOR_TYPE]: t[p.dCx.FILTER_AUTHOR_TYPE],
            [p.dCx.FILTER_PINNED]: t[p.dCx.FILTER_PINNED],
        };
        return {
            allPrefilledSearchFilters: t,
            totalFilters: i,
            prefilledSearchFilters: o,
            eligibleFilterTokens: u,
        };
    }, [e, l, n, a, u]);
}
function D(e, t) {
    return e === t || (0, a.isEqual)(e, t);
}
function j(e, t) {
    var l, n;
    if (e.length !== t.length) return !1;
    let r = new Map();
    for (let t of e) {
        let e = "".concat(t.query, ":").concat(t.date.valueOf()),
            n = null != (l = r.get(e)) ? l : 0;
        r.set(e, n + 1);
    }
    for (let e of t) {
        let t = "".concat(e.query, ":").concat(e.date.valueOf()),
            l = null != (n = r.get(t)) ? n : 0;
        if (0 === l) return !1;
        r.set(t, l - 1);
    }
    for (let e of r.values()) if (0 !== e) return !1;
    return !0;
}
function w(e) {
    let { nonFilterQueryString: t, filterQueryString: l } = e,
        n = +(l.length > 0),
        a = +(t.length > 0),
        u = b.uh - t.length - a - n,
        s = r.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return l.length + t.length > u;
            },
            [l.length, u],
        ),
        c = r.useMemo(() => l.length + 18 > u, [l.length, u]),
        i = r.useCallback(() => {
            d.Z.show({
                title: F.intl.string(F.t.nOqJcX),
                body: F.intl.string(F.t.zzAcsr),
                confirmText: F.intl.string(F.t["qcYY+/"]),
            });
        }, []);
    return {
        validateFilter: r.useCallback(
            (e, t) =>
                !s({
                    newFilterString: (function (e, t) {
                        let l,
                            n = I.ZP[e];
                        switch (e) {
                            case p.dCx.FILTER_FROM:
                            case p.dCx.FILTER_MENTIONS:
                                let r = f.default.getUser(t);
                                l = null == r ? t : "".concat(r.username);
                                break;
                            case p.dCx.FILTER_IN:
                                let a = E.Z.getChannel(t);
                                if (null == a) l = t;
                                else {
                                    let e = (0, R.nl)(a);
                                    l = (0, R.Jl)(e);
                                }
                                break;
                            case p.dCx.FILTER_HAS:
                            case p.dCx.FILTER_PINNED:
                            case p.dCx.FILTER_AUTHOR_TYPE:
                            default:
                                l = t;
                        }
                        return n.key + " " + l;
                    })(e, t),
                }) || (i(), !1),
            [s, i],
        ),
        validateDateFilter: r.useCallback(() => !c || (i(), !1), [c, i]),
    };
}
