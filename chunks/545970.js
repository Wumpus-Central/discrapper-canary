l.d(t, {
    Ek: () => M,
    HJ: () => _,
    LE: () => A,
    Z2: () => y,
    Zc: () => k,
    fI: () => m,
    p4: () => v,
    ur: () => L,
}),
    l(781311),
    l(388685),
    l(539854),
    l(290780),
    l(35282);
var n = l(951288),
    r = l(647438),
    u = l(392711),
    a = l(913527),
    s = l.n(a),
    o = l(772848),
    i = l(442837),
    c = l(481060),
    d = l(592125),
    f = l(594174),
    E = l(5192),
    h = l(748610),
    p = l(738018),
    C = l(607802),
    R = l(247902),
    g = l(532428),
    I = l(981631),
    F = l(388032);
function b(e) {
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
function T(e, t) {
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
function x(e) {
    let { searchContext: t, filter: l, queryString: n } = e,
        u = (0, i.e7)([p.Z], () => p.Z.getState(t)),
        a = r.useMemo(() => {
            let e = u.autocompletes[0];
            return null != e && e.group === l ? e.results : [];
        }, [u.autocompletes, l]),
        s = r.useMemo(() => {
            let e = g.ZP[l].key;
            return "".concat(e, " ").concat(n);
        }, [l, n]),
        o = r.useCallback(() => {
            let e = (0, C.kG)(s),
                l = (0, C.g9)(e, s.length - 1, s.length - 1);
            h.Z.updateAutocompleteQuery(t, e, l);
        }, [t, s]),
        c = r.useCallback(() => {
            o();
        }, [o]);
    return (
        r.useEffect(() => {
            n.trim().length > 0 && o();
        }, [s, t, o, n]),
        {
            filterAutocompleteResults: a,
            handleFocusFilter: c,
        }
    );
}
function O(e) {
    let { user: t, guildId: l, channelId: n } = e,
        r = E.ZP.getName(l, n, t);
    return {
        value: t.id,
        label: r,
        key: t.id,
    };
}
function _(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = r.useMemo(() => (0, C.s5)(e), [e]),
        u = r.useMemo(() => (0, C.AH)(e), [e]),
        [a, s] = r.useState(l),
        [o, i] = r.useState(""),
        { filterAutocompleteResults: c, handleFocusFilter: d } = x({
            searchContext: e,
            filter: t,
            queryString: o,
        }),
        E = r.useMemo(() => {
            if (0 === c.length && 0 === a.length) return [];
            let e = [],
                t = new Set();
            return (
                c.length > 0 &&
                    c.forEach((l) => {
                        let r = l.user,
                            a = O({
                                user: r,
                                guildId: n,
                                channelId: u,
                            });
                        t.add(r.id), e.push(a);
                    }),
                a.length > 0 &&
                    a.forEach((l) => {
                        if (t.has(l)) return;
                        let r = f.default.getUser(l);
                        if (null == r) return;
                        let a = O({
                            user: r,
                            guildId: n,
                            channelId: u,
                        });
                        t.add(l), e.unshift(a);
                    }),
                e
            );
        }, [c, a, n, u]),
        h = r.useCallback(() => {
            s([]), i("");
        }, []),
        p = r.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = g.ZP[e];
                return a
                    .map((e) => {
                        let l = f.default.getUser(e);
                        return "".concat(t.key, " ").concat(null == l ? void 0 : l.username);
                    })
                    .join(" ");
            },
            [a],
        );
    return {
        options: E,
        query: a,
        setQuery: s,
        setQueryString: i,
        handleClearFilter: h,
        getApplyQueryString: p,
        handleFocusFilter: d,
    };
}
function k(e) {
    return {
        filter: !1,
        closeOnSelect: !1,
        renderOptionPrefix: r.useCallback(
            (t) => {
                var l;
                if (null == t) return;
                let r = f.default.getUser(t.value);
                if (null == r) return;
                let u = null != (l = r.getAvatarURL(e, 80)) ? l : r.avatar;
                return (0, n.jsx)(c.qEK, {
                    src: u,
                    size: c.EFr.SIZE_16,
                    "aria-hidden": !0,
                });
            },
            [e],
        ),
        renderOptionSuffix: r.useCallback((e) => {
            if (null == e) return;
            let t = f.default.getUser(e.value);
            if (null != t)
                return (0, n.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: t.username,
                });
        }, []),
    };
}
function S(e) {
    let { channel: t } = e;
    return {
        value: t.id,
        label: (0, C.nl)(t),
        key: t.id,
    };
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        [u, a] = r.useState(""),
        { filterAutocompleteResults: s, handleFocusFilter: o } = x({
            searchContext: e,
            filter: I.dCx.FILTER_IN,
            queryString: u,
        }),
        i = r.useMemo(() => {
            if (0 === s.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                s.length > 0 &&
                    s.forEach((l) => {
                        let n = l.channel,
                            r = S({ channel: n });
                        t.add(n.id), e.push(r);
                    }),
                l.length > 0 &&
                    l.forEach((l) => {
                        if (t.has(l)) return;
                        let n = d.Z.getChannel(l);
                        if (null == n) return;
                        let r = S({ channel: n });
                        t.add(l), e.unshift(r);
                    }),
                e
            );
        }, [s, l]),
        c = r.useCallback(() => {
            n([]), a("");
        }, []),
        f = r.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = g.ZP[e];
                return l
                    .map((e) => {
                        let l = d.Z.getChannel(e);
                        if (null == l) return;
                        let n = (0, C.nl)(l),
                            r = (0, C.Jl)(n);
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
        setQueryString: a,
        handleClearFilter: c,
        getApplyQueryString: f,
        handleFocusFilter: o,
    };
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        { filterAutocompleteResults: u, handleFocusFilter: a } = x({
            searchContext: e,
            filter: I.dCx.FILTER_HAS,
            queryString: "",
        }),
        s = r.useMemo(() => {
            if (0 === u.length && 0 === l.length) return [];
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
                u.length > 0 &&
                    u.forEach((l) => {
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
        }, [u, l]),
        o = r.useCallback(() => {
            n([]);
        }, []),
        i = r.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = g.ZP[e];
                return l.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [l],
        );
    return {
        options: s,
        query: l,
        setQuery: n,
        handleClearFilter: o,
        getApplyQueryString: i,
        handleFocusFilter: a,
    };
}
let N = () =>
    r.useMemo(() => {
        var e, t, l;
        let n = g.ZP[I.dCx.FILTER_BEFORE],
            r = g.ZP[I.dCx.FILTER_AFTER],
            u = g.ZP[I.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == n ? void 0 : n.key) ? e : "".concat(F.intl.string(F.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == r ? void 0 : r.key) ? t : "".concat(F.intl.string(F.t.KSDx7O), ":"),
            duringFilter: null != (l = null == u ? void 0 : u.key) ? l : "".concat(F.intl.string(F.t.h2NzSU), ":"),
        };
    }, []);
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, l] = r.useState(e),
        n = r.useCallback(() => (0, o.Z)(), []),
        u = r.useCallback((e) => e.date.isValid(), []),
        a = r.useMemo(() => t.filter(u), [t, u]),
        { beforeFilter: i, afterFilter: c, duringFilter: d } = N(),
        f = r.useCallback(
            () => ({
                query: i,
                date: s()(),
                id: n(),
            }),
            [i, n],
        ),
        E = r.useMemo(
            () => [
                {
                    key: "Before",
                    label: F.intl.string(F.t["ptL/DA"]),
                    value: i,
                },
                {
                    key: "After",
                    label: F.intl.string(F.t.waQeER),
                    value: c,
                },
                {
                    key: "During",
                    label: F.intl.string(F.t.LT5TnZ),
                    value: d,
                },
            ],
            [i, c, d],
        ),
        h = r.useCallback((e) => {
            let { query: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = T(b({}, l[n]), { query: t })), l;
            });
        }, []),
        p = r.useCallback((e) => {
            let { date: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = T(b({}, l[n]), { date: t })), l;
            });
        }, []),
        C = r.useCallback(() => {
            l((e) => [...e, f()]);
        }, [f]),
        R = r.useCallback((e) => {
            l((t) => {
                let l = [...t];
                return l.splice(e, 1), l;
            });
        }, []),
        g = r.useCallback(() => {
            l([]);
        }, []),
        x = r.useCallback(
            () =>
                0 === a.length
                    ? null
                    : a
                          .map((e) => {
                              let { query: t, date: l } = e,
                                  n = l.format(I.b2L);
                              return "".concat(t, " ").concat(n);
                          })
                          .join(" "),
            [a],
        );
    return {
        options: E,
        dates: t,
        validDates: a,
        handleDateQueryChange: h,
        handleDateChange: p,
        handleAddDateFilter: C,
        handleRemoveDateFilter: R,
        handleClearDateFilter: g,
        getDateQueryString: x,
    };
}
function v(e, t) {
    let { beforeFilter: l, afterFilter: n, duringFilter: u } = N(),
        a = (0, R.N)(t);
    return r.useMemo(() => {
        let t = {
                [I.dCx.FILTER_FROM]: [],
                [I.dCx.FILTER_MENTIONS]: [],
                [I.dCx.FILTER_HAS]: [],
                [I.dCx.FILTER_IN]: [],
                [I.dCx.FILTER_ON]: [],
                [I.dCx.FILTER_BEFORE]: [],
                [I.dCx.FILTER_AFTER]: [],
            },
            r = [],
            i = 0;
        e.forEach((e) => {
            if (I.KA4.test(e.type))
                switch (e.type) {
                    case I.dCx.ANSWER_USERNAME_FROM:
                        if (a.has(I.dCx.FILTER_FROM)) {
                            let l = t[I.dCx.FILTER_FROM],
                                n = e.getData("userId");
                            l.push(n), (i += 1);
                        }
                        break;
                    case I.dCx.ANSWER_USERNAME_MENTIONS:
                        if (a.has(I.dCx.FILTER_MENTIONS)) {
                            let l = t[I.dCx.FILTER_MENTIONS],
                                n = e.getData("userId");
                            l.push(n), (i += 1);
                        }
                        break;
                    case I.dCx.ANSWER_HAS:
                        let c = t[I.dCx.FILTER_HAS],
                            d = e.getData("has");
                        c.push(d), (i += 1);
                        break;
                    case I.dCx.ANSWER_IN:
                        if (a.has(I.dCx.FILTER_IN)) {
                            var f;
                            let l = t[I.dCx.FILTER_IN],
                                n = null != (f = e.getData("channelIds")) ? f : [];
                            l.push(...n), (i += 1);
                        }
                        break;
                    case I.dCx.ANSWER_BEFORE:
                        let E = t[I.dCx.FILTER_BEFORE],
                            h = e.getData("end"),
                            p = {
                                query: l,
                                date: s()(h),
                                id: (0, o.Z)(),
                            };
                        E.push(p), r.push(p), (i += 1);
                        break;
                    case I.dCx.ANSWER_ON:
                        let C = t[I.dCx.FILTER_ON],
                            R = e.getData("start"),
                            g = {
                                query: u,
                                date: s()(R),
                                id: (0, o.Z)(),
                            };
                        C.push(g), r.push(g), (i += 1);
                        break;
                    case I.dCx.ANSWER_AFTER:
                        let F = t[I.dCx.FILTER_AFTER],
                            b = e.getData("start"),
                            T = {
                                query: n,
                                date: s()(b),
                                id: (0, o.Z)(),
                            };
                        F.push(T), r.push(T), (i += 1);
                }
        });
        let c = {
            [I.dCx.FILTER_FROM]: t[I.dCx.FILTER_FROM],
            [I.dCx.FILTER_MENTIONS]: t[I.dCx.FILTER_MENTIONS],
            [I.dCx.FILTER_HAS]: t[I.dCx.FILTER_HAS],
            [I.dCx.FILTER_IN]: t[I.dCx.FILTER_IN],
            dateFilters: r,
        };
        return {
            allPrefilledSearchFilters: t,
            totalFilters: i,
            prefilledSearchFilters: c,
            eligibleFilterTokens: a,
        };
    }, [e, l, n, u, a]);
}
function M(e, t) {
    return e === t || (0, u.isEqual)(e, t);
}
function A(e, t) {
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
