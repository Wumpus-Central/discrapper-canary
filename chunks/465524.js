l.d(t, {
    Ek: () => M,
    HJ: () => k,
    LE: () => Z,
    Z2: () => S,
    Zc: () => O,
    fI: () => v,
    fJ: () => m,
    p4: () => A,
    ur: () => N,
    zL: () => P,
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
    o = l(442837),
    i = l(481060),
    d = l(592125),
    E = l(594174),
    f = l(5192),
    h = l(748610),
    g = l(738018),
    C = l(607802),
    R = l(247902),
    p = l(532428),
    T = l(981631),
    b = l(388032);
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
function _(e, t) {
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
function F(e) {
    let { searchContext: t, filter: l, queryString: n } = e,
        u = (0, o.e7)([g.Z], () => g.Z.getState(t), [t], o.pF),
        a = r.useMemo(() => {
            let e = u.autocompletes[0];
            return null != e && e.group === l ? e.results : [];
        }, [u.autocompletes, l]),
        c = r.useMemo(() => {
            let e = p.ZP[l].key;
            return "".concat(e, " ").concat(n);
        }, [l, n]),
        s = r.useCallback(() => {
            let e = (0, C.kG)(c),
                l = (0, C.g9)(e, c.length - 1, c.length - 1);
            h.Z.updateAutocompleteQuery({
                searchContext: t,
                tokens: e,
                cursorScope: l,
                queryString: c,
            });
        }, [t, c]),
        i = r.useCallback(() => {
            s();
        }, [s]);
    return (
        r.useEffect(() => {
            n.trim().length > 0 && s();
        }, [c, t, s, n]),
        {
            filterAutocompleteResults: a,
            handleFocusFilter: i,
        }
    );
}
function x(e) {
    let { user: t, guildId: l, channelId: n } = e,
        r = f.ZP.getName(l, n, t);
    return {
        value: t.id,
        label: r,
        key: t.id,
    };
}
function k(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = r.useMemo(() => (0, C.s5)(e), [e]),
        u = r.useMemo(() => (0, C.AH)(e), [e]),
        [a, c] = r.useState(l),
        [s, o] = r.useState(""),
        { filterAutocompleteResults: i, handleFocusFilter: d } = F({
            searchContext: e,
            filter: t,
            queryString: s,
        }),
        f = r.useMemo(() => {
            if (0 === i.length && 0 === a.length) return [];
            let e = [],
                t = new Set();
            return (
                i.length > 0 &&
                    i.forEach((l) => {
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
                        let r = E.default.getUser(l);
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
        }, [i, a, n, u]),
        h = r.useCallback(() => {
            c([]), o("");
        }, []),
        g = r.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = p.ZP[e];
                return a
                    .map((e) => {
                        let l = E.default.getUser(e);
                        return "".concat(t.key, " ").concat(null == l ? void 0 : l.username);
                    })
                    .join(" ");
            },
            [a],
        );
    return {
        options: f,
        query: a,
        setQuery: c,
        setQueryString: o,
        handleClearFilter: h,
        getApplyQueryString: g,
        handleFocusFilter: d,
    };
}
function O(e) {
    return {
        filter: !1,
        closeOnSelect: !1,
        renderOptionPrefix: r.useCallback(
            (t) => {
                var l;
                if (null == t) return;
                let r = E.default.getUser(t.value);
                if (null == r) return;
                let u = null != (l = r.getAvatarURL(e, 80)) ? l : r.avatar;
                return (0, n.jsx)(i.qEK, {
                    src: u,
                    size: i.EFr.SIZE_16,
                    "aria-hidden": !0,
                });
            },
            [e],
        ),
        renderOptionSuffix: r.useCallback((e) => {
            if (null == e) return;
            let t = E.default.getUser(e.value);
            if (null != t)
                return (0, n.jsx)(i.Text, {
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
        label: (0, C.nl)(t),
        key: t.id,
    };
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        [u, a] = r.useState(""),
        { filterAutocompleteResults: c, handleFocusFilter: s } = F({
            searchContext: e,
            filter: T.dCx.FILTER_IN,
            queryString: u,
        }),
        o = r.useMemo(() => {
            if (0 === c.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                c.length > 0 &&
                    c.forEach((l) => {
                        let n = l.channel,
                            r = y({ channel: n });
                        t.add(n.id), e.push(r);
                    }),
                l.length > 0 &&
                    l.forEach((l) => {
                        if (t.has(l)) return;
                        let n = d.Z.getChannel(l);
                        if (null == n) return;
                        let r = y({ channel: n });
                        t.add(l), e.unshift(r);
                    }),
                e
            );
        }, [c, l]),
        i = r.useCallback(() => {
            n([]), a("");
        }, []),
        E = r.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = p.ZP[e];
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
        options: o,
        query: l,
        setQuery: n,
        setQueryString: a,
        handleClearFilter: i,
        getApplyQueryString: E,
        handleFocusFilter: s,
    };
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        { filterAutocompleteResults: u, handleFocusFilter: a } = F({
            searchContext: e,
            filter: T.dCx.FILTER_HAS,
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
        o = r.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = p.ZP[e];
                return l.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [l],
        );
    return {
        options: c,
        query: l,
        setQuery: n,
        handleClearFilter: s,
        getApplyQueryString: o,
        handleFocusFilter: a,
    };
}
let L = () =>
    r.useMemo(() => {
        var e, t, l;
        let n = p.ZP[T.dCx.FILTER_BEFORE],
            r = p.ZP[T.dCx.FILTER_AFTER],
            u = p.ZP[T.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == n ? void 0 : n.key) ? e : "".concat(b.intl.string(b.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == r ? void 0 : r.key) ? t : "".concat(b.intl.string(b.t.KSDx7O), ":"),
            duringFilter: null != (l = null == u ? void 0 : u.key) ? l : "".concat(b.intl.string(b.t.h2NzSU), ":"),
        };
    }, []);
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, l] = r.useState(e),
        n = r.useCallback(() => (0, s.Z)(), []),
        u = r.useCallback((e) => e.date.isValid(), []),
        a = r.useMemo(() => t.filter(u), [t, u]),
        { beforeFilter: o, afterFilter: i, duringFilter: d } = L(),
        E = r.useCallback(
            () => ({
                query: o,
                date: c()(),
                id: n(),
            }),
            [o, n],
        ),
        f = r.useMemo(
            () => [
                {
                    key: "Before",
                    label: b.intl.string(b.t["ptL/DA"]),
                    value: o,
                },
                {
                    key: "After",
                    label: b.intl.string(b.t.waQeER),
                    value: i,
                },
                {
                    key: "During",
                    label: b.intl.string(b.t.LT5TnZ),
                    value: d,
                },
            ],
            [o, i, d],
        ),
        h = r.useCallback((e) => {
            let { query: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = _(I({}, l[n]), { query: t })), l;
            });
        }, []),
        g = r.useCallback((e) => {
            let { date: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = _(I({}, l[n]), { date: t })), l;
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
        p = r.useCallback(() => {
            l([]);
        }, []),
        F = r.useCallback(
            () =>
                0 === a.length
                    ? null
                    : a
                          .map((e) => {
                              let { query: t, date: l } = e,
                                  n = l.format(T.b2L);
                              return "".concat(t, " ").concat(n);
                          })
                          .join(" "),
            [a],
        );
    return {
        options: f,
        dates: t,
        validDates: a,
        handleDateQueryChange: h,
        handleDateChange: g,
        handleAddDateFilter: C,
        handleRemoveDateFilter: R,
        handleClearDateFilter: p,
        getDateQueryString: F,
    };
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        { filterAutocompleteResults: u, handleFocusFilter: a } = F({
            searchContext: e,
            filter: T.dCx.FILTER_AUTHOR_TYPE,
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
        o = r.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = p.ZP[e];
                return l.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [l],
        );
    return {
        options: c,
        query: l,
        setQuery: n,
        handleClearFilter: s,
        getApplyQueryString: o,
        handleFocusFilter: a,
    };
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [l, n] = r.useState(t),
        u = r.useMemo(() => {
            var t, n, r;
            let u =
                null !=
                (r =
                    null == (t = (n = p.ZP[T.dCx.FILTER_PINNED]).getAutocompletions)
                        ? void 0
                        : t.call(n, {
                              query: "",
                              maxResults: 10,
                              searchContext: e,
                          }))
                    ? r
                    : [];
            if (0 === u.length && null === l) return [];
            let a = [];
            return (
                u.length > 0 &&
                    u.forEach((e) => {
                        let { text: t } = e;
                        a.push({
                            value: t,
                            label: t,
                            key: t,
                        });
                    }),
                a
            );
        }, [e, l]),
        a = r.useCallback(() => {
            n(null);
        }, []),
        c = r.useCallback(
            (e) => {
                if (null === l) return null;
                let t = p.ZP[e];
                return "".concat(t.key, " ").concat(l);
            },
            [l],
        );
    return {
        options: u,
        query: l,
        setQuery: n,
        handleClearFilter: a,
        getApplyQueryString: c,
    };
}
function A(e, t) {
    let { beforeFilter: l, afterFilter: n, duringFilter: u } = L(),
        a = (0, R.N)(t);
    return r.useMemo(() => {
        let t = {
                [T.dCx.FILTER_FROM]: [],
                [T.dCx.FILTER_MENTIONS]: [],
                [T.dCx.FILTER_HAS]: [],
                [T.dCx.FILTER_IN]: [],
                [T.dCx.FILTER_ON]: [],
                [T.dCx.FILTER_BEFORE]: [],
                [T.dCx.FILTER_AFTER]: [],
                [T.dCx.FILTER_PINNED]: null,
                [T.dCx.FILTER_AUTHOR_TYPE]: [],
            },
            r = [],
            o = 0;
        e.forEach((e) => {
            if (T.KA4.test(e.type))
                switch (e.type) {
                    case T.dCx.ANSWER_USERNAME_FROM:
                        if (a.has(T.dCx.FILTER_FROM)) {
                            let l = t[T.dCx.FILTER_FROM],
                                n = e.getData("userId");
                            l.push(n), (o += 1);
                        }
                        break;
                    case T.dCx.ANSWER_USERNAME_MENTIONS:
                        if (a.has(T.dCx.FILTER_MENTIONS)) {
                            let l = t[T.dCx.FILTER_MENTIONS],
                                n = e.getData("userId");
                            l.push(n), (o += 1);
                        }
                        break;
                    case T.dCx.ANSWER_HAS:
                        let i = t[T.dCx.FILTER_HAS],
                            d = e.getData("has");
                        i.push(d), (o += 1);
                        break;
                    case T.dCx.ANSWER_IN:
                        if (a.has(T.dCx.FILTER_IN)) {
                            var E;
                            let l = t[T.dCx.FILTER_IN],
                                n = null != (E = e.getData("channelIds")) ? E : [];
                            l.push(...n), (o += 1);
                        }
                        break;
                    case T.dCx.ANSWER_BEFORE:
                        let f = t[T.dCx.FILTER_BEFORE],
                            h = e.getData("end"),
                            g = {
                                query: l,
                                date: c()(h),
                                id: (0, s.Z)(),
                            };
                        f.push(g), r.push(g), (o += 1);
                        break;
                    case T.dCx.ANSWER_ON:
                        let C = t[T.dCx.FILTER_ON],
                            R = e.getData("start"),
                            p = {
                                query: u,
                                date: c()(R),
                                id: (0, s.Z)(),
                            };
                        C.push(p), r.push(p), (o += 1);
                        break;
                    case T.dCx.ANSWER_AFTER:
                        let b = t[T.dCx.FILTER_AFTER],
                            I = e.getData("start"),
                            _ = {
                                query: n,
                                date: c()(I),
                                id: (0, s.Z)(),
                            };
                        b.push(_), r.push(_), (o += 1);
                        break;
                    case T.dCx.ANSWER_PINNED:
                        let F = t[T.dCx.FILTER_PINNED],
                            x = e.getData("pinned").toString();
                        null === F ? (F = x) : "true" !== F && "true" === x && (F = x),
                            (t[T.dCx.FILTER_PINNED] = F),
                            (o += 1);
                        break;
                    case T.dCx.ANSWER_AUTHOR_TYPE:
                        if (a.has(T.dCx.FILTER_AUTHOR_TYPE)) {
                            let l = t[T.dCx.FILTER_AUTHOR_TYPE],
                                n = e.getData("author_type");
                            l.push(n), (o += 1);
                        }
                }
        });
        let i = {
            [T.dCx.FILTER_FROM]: t[T.dCx.FILTER_FROM],
            [T.dCx.FILTER_MENTIONS]: t[T.dCx.FILTER_MENTIONS],
            [T.dCx.FILTER_HAS]: t[T.dCx.FILTER_HAS],
            [T.dCx.FILTER_IN]: t[T.dCx.FILTER_IN],
            dateFilters: r,
            [T.dCx.FILTER_AUTHOR_TYPE]: t[T.dCx.FILTER_AUTHOR_TYPE],
            [T.dCx.FILTER_PINNED]: t[T.dCx.FILTER_PINNED],
        };
        return {
            allPrefilledSearchFilters: t,
            totalFilters: o,
            prefilledSearchFilters: i,
            eligibleFilterTokens: a,
        };
    }, [e, l, n, u, a]);
}
function M(e, t) {
    return e === t || (0, u.isEqual)(e, t);
}
function Z(e, t) {
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
