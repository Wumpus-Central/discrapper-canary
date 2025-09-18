l.d(t, {
    Ek: () => A,
    HJ: () => y,
    LE: () => M,
    Z2: () => L,
    Zc: () => T,
    fI: () => v,
    p4: () => m,
    ur: () => _,
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
    c = l.n(a),
    s = l(772848),
    i = l(442837),
    o = l(481060),
    d = l(592125),
    f = l(594174),
    E = l(5192),
    h = l(748610),
    g = l(738018),
    p = l(607802),
    C = l(247902),
    b = l(532428),
    R = l(981631),
    F = l(388032);
function I(e) {
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
function O(e, t) {
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
        u = (0, i.e7)([g.Z], () => g.Z.getState(t)),
        a = r.useMemo(() => {
            let e = u.autocompletes[0];
            return null != e && e.group === l ? e.results : [];
        }, [u.autocompletes, l]),
        c = r.useMemo(() => {
            let e = b.ZP[l].key;
            return "".concat(e, " ").concat(n);
        }, [l, n]),
        s = r.useCallback(() => {
            let e = (0, p.kG)(c),
                l = (0, p.g9)(e, c.length - 1, c.length - 1);
            h.Z.updateAutocompleteQuery({
                searchContext: t,
                tokens: e,
                cursorScope: l,
                queryString: c,
            });
        }, [t, c]),
        o = r.useCallback(() => {
            s();
        }, [s]);
    return (
        r.useEffect(() => {
            n.trim().length > 0 && s();
        }, [c, t, s, n]),
        {
            filterAutocompleteResults: a,
            handleFocusFilter: o,
        }
    );
}
function x(e) {
    let { user: t, guildId: l, channelId: n } = e,
        r = E.ZP.getName(l, n, t);
    return {
        value: t.id,
        label: r,
        key: t.id,
    };
}
function y(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = r.useMemo(() => (0, p.s5)(e), [e]),
        u = r.useMemo(() => (0, p.AH)(e), [e]),
        [a, c] = r.useState(l),
        [s, i] = r.useState(""),
        { filterAutocompleteResults: o, handleFocusFilter: d } = k({
            searchContext: e,
            filter: t,
            queryString: s,
        }),
        E = r.useMemo(() => {
            if (0 === o.length && 0 === a.length) return [];
            let e = [],
                t = new Set();
            return (
                o.length > 0 &&
                    o.forEach((l) => {
                        let r = l.user,
                            a = x({
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
                        let a = x({
                            user: r,
                            guildId: n,
                            channelId: u,
                        });
                        t.add(l), e.unshift(a);
                    }),
                e
            );
        }, [o, a, n, u]),
        h = r.useCallback(() => {
            c([]), i("");
        }, []),
        g = r.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = b.ZP[e];
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
        setQuery: c,
        setQueryString: i,
        handleClearFilter: h,
        getApplyQueryString: g,
        handleFocusFilter: d,
    };
}
function T(e) {
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
                return (0, n.jsx)(o.qEK, {
                    src: u,
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
function S(e) {
    let { channel: t } = e;
    return {
        value: t.id,
        label: (0, p.nl)(t),
        key: t.id,
    };
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        [u, a] = r.useState(""),
        { filterAutocompleteResults: c, handleFocusFilter: s } = k({
            searchContext: e,
            filter: R.dCx.FILTER_IN,
            queryString: u,
        }),
        i = r.useMemo(() => {
            if (0 === c.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                c.length > 0 &&
                    c.forEach((l) => {
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
        }, [c, l]),
        o = r.useCallback(() => {
            n([]), a("");
        }, []),
        f = r.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = b.ZP[e];
                return l
                    .map((e) => {
                        let l = d.Z.getChannel(e);
                        if (null == l) return;
                        let n = (0, p.nl)(l),
                            r = (0, p.Jl)(n);
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
        handleClearFilter: o,
        getApplyQueryString: f,
        handleFocusFilter: s,
    };
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        { filterAutocompleteResults: u, handleFocusFilter: a } = k({
            searchContext: e,
            filter: R.dCx.FILTER_HAS,
            queryString: "",
        }),
        c = r.useMemo(() => {
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
        s = r.useCallback(() => {
            n([]);
        }, []),
        i = r.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = b.ZP[e];
                return l.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [l],
        );
    return {
        options: c,
        query: l,
        setQuery: n,
        handleClearFilter: s,
        getApplyQueryString: i,
        handleFocusFilter: a,
    };
}
let N = () =>
    r.useMemo(() => {
        var e, t, l;
        let n = b.ZP[R.dCx.FILTER_BEFORE],
            r = b.ZP[R.dCx.FILTER_AFTER],
            u = b.ZP[R.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == n ? void 0 : n.key) ? e : "".concat(F.intl.string(F.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == r ? void 0 : r.key) ? t : "".concat(F.intl.string(F.t.KSDx7O), ":"),
            duringFilter: null != (l = null == u ? void 0 : u.key) ? l : "".concat(F.intl.string(F.t.h2NzSU), ":"),
        };
    }, []);
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, l] = r.useState(e),
        n = r.useCallback(() => (0, s.Z)(), []),
        u = r.useCallback((e) => e.date.isValid(), []),
        a = r.useMemo(() => t.filter(u), [t, u]),
        { beforeFilter: i, afterFilter: o, duringFilter: d } = N(),
        f = r.useCallback(
            () => ({
                query: i,
                date: c()(),
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
                return (l[n] = O(I({}, l[n]), { query: t })), l;
            });
        }, []),
        g = r.useCallback((e) => {
            let { date: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = O(I({}, l[n]), { date: t })), l;
            });
        }, []),
        p = r.useCallback(() => {
            l((e) => [...e, f()]);
        }, [f]),
        C = r.useCallback((e) => {
            l((t) => {
                let l = [...t];
                return l.splice(e, 1), l;
            });
        }, []),
        b = r.useCallback(() => {
            l([]);
        }, []),
        k = r.useCallback(
            () =>
                0 === a.length
                    ? null
                    : a
                          .map((e) => {
                              let { query: t, date: l } = e,
                                  n = l.format(R.b2L);
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
        handleDateChange: g,
        handleAddDateFilter: p,
        handleRemoveDateFilter: C,
        handleClearDateFilter: b,
        getDateQueryString: k,
    };
}
function m(e, t) {
    let { beforeFilter: l, afterFilter: n, duringFilter: u } = N(),
        a = (0, C.N)(t);
    return r.useMemo(() => {
        let t = {
                [R.dCx.FILTER_FROM]: [],
                [R.dCx.FILTER_MENTIONS]: [],
                [R.dCx.FILTER_HAS]: [],
                [R.dCx.FILTER_IN]: [],
                [R.dCx.FILTER_ON]: [],
                [R.dCx.FILTER_BEFORE]: [],
                [R.dCx.FILTER_AFTER]: [],
            },
            r = [],
            i = 0;
        e.forEach((e) => {
            if (R.KA4.test(e.type))
                switch (e.type) {
                    case R.dCx.ANSWER_USERNAME_FROM:
                        if (a.has(R.dCx.FILTER_FROM)) {
                            let l = t[R.dCx.FILTER_FROM],
                                n = e.getData("userId");
                            l.push(n), (i += 1);
                        }
                        break;
                    case R.dCx.ANSWER_USERNAME_MENTIONS:
                        if (a.has(R.dCx.FILTER_MENTIONS)) {
                            let l = t[R.dCx.FILTER_MENTIONS],
                                n = e.getData("userId");
                            l.push(n), (i += 1);
                        }
                        break;
                    case R.dCx.ANSWER_HAS:
                        let o = t[R.dCx.FILTER_HAS],
                            d = e.getData("has");
                        o.push(d), (i += 1);
                        break;
                    case R.dCx.ANSWER_IN:
                        if (a.has(R.dCx.FILTER_IN)) {
                            var f;
                            let l = t[R.dCx.FILTER_IN],
                                n = null != (f = e.getData("channelIds")) ? f : [];
                            l.push(...n), (i += 1);
                        }
                        break;
                    case R.dCx.ANSWER_BEFORE:
                        let E = t[R.dCx.FILTER_BEFORE],
                            h = e.getData("end"),
                            g = {
                                query: l,
                                date: c()(h),
                                id: (0, s.Z)(),
                            };
                        E.push(g), r.push(g), (i += 1);
                        break;
                    case R.dCx.ANSWER_ON:
                        let p = t[R.dCx.FILTER_ON],
                            C = e.getData("start"),
                            b = {
                                query: u,
                                date: c()(C),
                                id: (0, s.Z)(),
                            };
                        p.push(b), r.push(b), (i += 1);
                        break;
                    case R.dCx.ANSWER_AFTER:
                        let F = t[R.dCx.FILTER_AFTER],
                            I = e.getData("start"),
                            O = {
                                query: n,
                                date: c()(I),
                                id: (0, s.Z)(),
                            };
                        F.push(O), r.push(O), (i += 1);
                }
        });
        let o = {
            [R.dCx.FILTER_FROM]: t[R.dCx.FILTER_FROM],
            [R.dCx.FILTER_MENTIONS]: t[R.dCx.FILTER_MENTIONS],
            [R.dCx.FILTER_HAS]: t[R.dCx.FILTER_HAS],
            [R.dCx.FILTER_IN]: t[R.dCx.FILTER_IN],
            dateFilters: r,
        };
        return {
            allPrefilledSearchFilters: t,
            totalFilters: i,
            prefilledSearchFilters: o,
            eligibleFilterTokens: a,
        };
    }, [e, l, n, u, a]);
}
function A(e, t) {
    return e === t || (0, u.isEqual)(e, t);
}
function M(e, t) {
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
