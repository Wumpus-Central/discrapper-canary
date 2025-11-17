l.d(t, {
    Ek: () => D,
    HJ: () => O,
    LE: () => j,
    YL: () => w,
    Z2: () => v,
    Zc: () => S,
    fI: () => P,
    fJ: () => m,
    p4: () => Z,
    ur: () => L,
    zL: () => M,
}),
    l(781311),
    l(388685),
    l(539854),
    l(290780),
    l(35282);
var n = l(54381),
    r = l(473749),
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
    I = l(247902),
    T = l(532428),
    p = l(208450),
    _ = l(981631),
    b = l(388032);
function F(e) {
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
            let e = T.ZP[l].key;
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
            autocompleteStoreState: a,
        }
    );
}
function N(e) {
    let { user: t, guildId: l, channelId: n } = e,
        r = h.ZP.getName(l, n, t);
    return {
        value: t.id,
        label: r,
        key: t.id,
    };
}
function O(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = r.useMemo(() => (0, R.s5)(e), [e]),
        a = r.useMemo(() => (0, R.AH)(e), [e]),
        [u, s] = r.useState(l),
        [c, i] = r.useState(""),
        {
            filterAutocompleteResults: o,
            handleFocusFilter: d,
            autocompleteStoreState: E,
        } = k({
            searchContext: e,
            filter: t,
            queryString: c,
        }),
        h = r.useMemo(() => {
            let e = [],
                t = new Set();
            if (o.length > 0)
                o.forEach((l) => {
                    let r = l.user,
                        u = N({
                            user: r,
                            guildId: n,
                            channelId: a,
                        });
                    t.add(r.id), e.push(u);
                });
            else {
                let { tokens: l } = E,
                    r = l[l.length - 1];
                if (
                    null != r &&
                    (r.type === _.dCx.ANSWER_USERNAME_FROM || r.type === _.dCx.ANSWER_USERNAME_MENTIONS) &&
                    (0, T.fx)(r)
                ) {
                    let l = r.getData("userId"),
                        u = f.default.getUser(l);
                    if (null != u) {
                        let l = N({
                            user: u,
                            guildId: n,
                            channelId: a,
                        });
                        t.add(u.id), e.push(l);
                    }
                }
            }
            return (
                u.length > 0 &&
                    u.forEach((l) => {
                        if (t.has(l)) return;
                        let r = f.default.getUser(l);
                        if (null == r) return;
                        let u = N({
                            user: r,
                            guildId: n,
                            channelId: a,
                        });
                        t.add(l), e.unshift(u);
                    }),
                e
            );
        }, [E, o, u, n, a]),
        g = r.useCallback(() => {
            s([]), i("");
        }, []),
        C = r.useCallback(
            (e) => {
                if (0 === u.length) return null;
                let t = T.ZP[e];
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
        options: h,
        query: u,
        setQuery: s,
        setQueryString: i,
        handleClearFilter: g,
        getApplyQueryString: C,
        handleFocusFilter: d,
    };
}
function S(e) {
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
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        [a, u] = r.useState(""),
        {
            filterAutocompleteResults: s,
            handleFocusFilter: c,
            autocompleteStoreState: i,
        } = k({
            searchContext: e,
            filter: _.dCx.FILTER_IN,
            queryString: a,
        }),
        o = r.useMemo(() => {
            let t = [],
                n = new Set();
            if (s.length > 0)
                s.forEach((e) => {
                    let l = e.channel,
                        r = y({ channel: l });
                    n.add(l.id), t.push(r);
                });
            else {
                let { tokens: l } = i,
                    r = l[l.length - 1];
                if (null != r && r.type === _.dCx.ANSWER_IN && (0, T.Ni)(r, e)) {
                    let e = r.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let l = E.Z.getChannel(e);
                            if (null != l) {
                                let e = y({ channel: l });
                                n.add(l.id), t.push(e);
                            }
                        });
                }
            }
            return (
                l.length > 0 &&
                    l.forEach((e) => {
                        if (n.has(e)) return;
                        let l = E.Z.getChannel(e);
                        if (null == l) return;
                        let r = y({ channel: l });
                        n.add(e), t.unshift(r);
                    }),
                t
            );
        }, [i, s, l, e]),
        d = r.useCallback(() => {
            n([]), u("");
        }, []),
        f = r.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = T.ZP[e];
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
        options: o,
        query: l,
        setQuery: n,
        setQueryString: u,
        handleClearFilter: d,
        getApplyQueryString: f,
        handleFocusFilter: c,
    };
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        { filterAutocompleteResults: a, handleFocusFilter: u } = k({
            searchContext: e,
            filter: _.dCx.FILTER_HAS,
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
                let t = T.ZP[e];
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
let A = () =>
    r.useMemo(() => {
        var e, t, l;
        let n = T.ZP[_.dCx.FILTER_BEFORE],
            r = T.ZP[_.dCx.FILTER_AFTER],
            a = T.ZP[_.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == n ? void 0 : n.key) ? e : "".concat(b.intl.string(b.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == r ? void 0 : r.key) ? t : "".concat(b.intl.string(b.t.KSDx7M), ":"),
            duringFilter: null != (l = null == a ? void 0 : a.key) ? l : "".concat(b.intl.string(b.t.h2NzSd), ":"),
        };
    }, []);
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, l] = r.useState(e),
        n = r.useCallback(() => (0, c.Z)(), []),
        a = r.useCallback((e) => e.date.isValid(), []),
        u = r.useMemo(() => t.filter(a), [t, a]),
        { beforeFilter: i, afterFilter: o, duringFilter: d } = A(),
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
                    label: b.intl.string(b.t["ptL/DP"]),
                    value: i,
                },
                {
                    key: "After",
                    label: b.intl.string(b.t.waQeEV),
                    value: o,
                },
                {
                    key: "During",
                    label: b.intl.string(b.t.LT5TnZ),
                    value: d,
                },
            ],
            [i, o, d],
        ),
        h = r.useCallback((e) => {
            let { query: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = x(F({}, l[n]), { query: t })), l;
            });
        }, []),
        g = r.useCallback((e) => {
            let { date: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = x(F({}, l[n]), { date: t })), l;
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
        I = r.useCallback(() => {
            l([]);
        }, []),
        T = r.useCallback(
            () =>
                0 === u.length
                    ? null
                    : u
                          .map((e) => {
                              let { query: t, date: l } = e,
                                  n = l.format(_.b2L);
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
        handleClearDateFilter: I,
        getDateQueryString: T,
    };
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        { filterAutocompleteResults: a, handleFocusFilter: u } = k({
            searchContext: e,
            filter: _.dCx.FILTER_AUTHOR_TYPE,
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
                let t = T.ZP[e];
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
                    null == (t = (n = T.ZP[_.dCx.FILTER_PINNED]).getAutocompletions)
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
                let t = T.ZP[e];
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
    let { beforeFilter: l, afterFilter: n, duringFilter: a } = A(),
        u = (0, I.N)(t);
    return r.useMemo(() => {
        let t = {
                [_.dCx.FILTER_FROM]: [],
                [_.dCx.FILTER_MENTIONS]: [],
                [_.dCx.FILTER_HAS]: [],
                [_.dCx.FILTER_IN]: [],
                [_.dCx.FILTER_ON]: [],
                [_.dCx.FILTER_BEFORE]: [],
                [_.dCx.FILTER_AFTER]: [],
                [_.dCx.FILTER_PINNED]: null,
                [_.dCx.FILTER_AUTHOR_TYPE]: [],
            },
            r = [],
            i = 0;
        e.forEach((e) => {
            if (_.KA4.test(e.type))
                switch (e.type) {
                    case _.dCx.ANSWER_USERNAME_FROM:
                        if (u.has(_.dCx.FILTER_FROM)) {
                            let l = t[_.dCx.FILTER_FROM],
                                n = e.getData("userId");
                            l.push(n), (i += 1);
                        }
                        break;
                    case _.dCx.ANSWER_USERNAME_MENTIONS:
                        if (u.has(_.dCx.FILTER_MENTIONS)) {
                            let l = t[_.dCx.FILTER_MENTIONS],
                                n = e.getData("userId");
                            l.push(n), (i += 1);
                        }
                        break;
                    case _.dCx.ANSWER_HAS:
                        let o = t[_.dCx.FILTER_HAS],
                            d = e.getData("has");
                        o.push(d), (i += 1);
                        break;
                    case _.dCx.ANSWER_IN:
                        if (u.has(_.dCx.FILTER_IN)) {
                            var E;
                            let l = t[_.dCx.FILTER_IN],
                                n = null != (E = e.getData("channelIds")) ? E : [];
                            l.push(...n), (i += 1);
                        }
                        break;
                    case _.dCx.ANSWER_BEFORE:
                        let f = t[_.dCx.FILTER_BEFORE],
                            h = e.getData("end"),
                            g = {
                                query: l,
                                date: s()(h),
                                id: (0, c.Z)(),
                            };
                        f.push(g), r.push(g), (i += 1);
                        break;
                    case _.dCx.ANSWER_ON:
                        let C = t[_.dCx.FILTER_ON],
                            R = e.getData("start"),
                            I = {
                                query: a,
                                date: s()(R),
                                id: (0, c.Z)(),
                            };
                        C.push(I), r.push(I), (i += 1);
                        break;
                    case _.dCx.ANSWER_AFTER:
                        let T = t[_.dCx.FILTER_AFTER],
                            p = e.getData("start"),
                            b = {
                                query: n,
                                date: s()(p),
                                id: (0, c.Z)(),
                            };
                        T.push(b), r.push(b), (i += 1);
                        break;
                    case _.dCx.ANSWER_PINNED:
                        let F = t[_.dCx.FILTER_PINNED],
                            x = e.getData("pinned").toString();
                        null === F ? (F = x) : "true" !== F && "true" === x && (F = x),
                            (t[_.dCx.FILTER_PINNED] = F),
                            (i += 1);
                        break;
                    case _.dCx.ANSWER_AUTHOR_TYPE:
                        if (u.has(_.dCx.FILTER_AUTHOR_TYPE)) {
                            let l = t[_.dCx.FILTER_AUTHOR_TYPE],
                                n = e.getData("author_type");
                            l.push(n), (i += 1);
                        }
                }
        });
        let o = {
            [_.dCx.FILTER_FROM]: t[_.dCx.FILTER_FROM],
            [_.dCx.FILTER_MENTIONS]: t[_.dCx.FILTER_MENTIONS],
            [_.dCx.FILTER_HAS]: t[_.dCx.FILTER_HAS],
            [_.dCx.FILTER_IN]: t[_.dCx.FILTER_IN],
            dateFilters: r,
            [_.dCx.FILTER_AUTHOR_TYPE]: t[_.dCx.FILTER_AUTHOR_TYPE],
            [_.dCx.FILTER_PINNED]: t[_.dCx.FILTER_PINNED],
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
        u = p.uh - t.length - a - n,
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
                title: b.intl.string(b.t.nOqJcX),
                body: b.intl.string(b.t.zzAcsv),
                confirmText: b.intl.string(b.t["qcYY+/"]),
            });
        }, []);
    return {
        validateFilter: r.useCallback(
            (e, t) =>
                !s({
                    newFilterString: (function (e, t) {
                        let l,
                            n = T.ZP[e];
                        switch (e) {
                            case _.dCx.FILTER_FROM:
                            case _.dCx.FILTER_MENTIONS:
                                let r = f.default.getUser(t);
                                l = null == r ? t : "".concat(r.username);
                                break;
                            case _.dCx.FILTER_IN:
                                let a = E.Z.getChannel(t);
                                if (null == a) l = t;
                                else {
                                    let e = (0, R.nl)(a);
                                    l = (0, R.Jl)(e);
                                }
                                break;
                            case _.dCx.FILTER_HAS:
                            case _.dCx.FILTER_PINNED:
                            case _.dCx.FILTER_AUTHOR_TYPE:
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
