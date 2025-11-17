l.d(t, {
    Ek: () => U,
    HJ: () => S,
    LE: () => H,
    Tt: () => y,
    YL: () => q,
    Z2: () => m,
    Zc: () => v,
    fI: () => Z,
    fJ: () => D,
    p4: () => w,
    t: () => L,
    ur: () => P,
    zL: () => j,
}),
    l(781311),
    l(388685),
    l(539854),
    l(290780),
    l(35282);
var n = l(54381),
    r = l(473749),
    u = l(392711),
    a = l(913527),
    s = l.n(a),
    i = l(772848),
    c = l(442837),
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
    p = l(208450),
    x = l(637879),
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
function k(e, t) {
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
function N(e) {
    let { searchContext: t, filter: l, queryString: n } = e,
        u = (0, c.e7)([C.Z], () => C.Z.getState(t), [t], c.pF),
        a = r.useMemo(() => {
            let e = u.autocompletes[0];
            return null != e && e.group === l ? e.results : [];
        }, [u.autocompletes, l]),
        s = r.useMemo(() => {
            let e = I.ZP[l].key;
            return "".concat(e, " ").concat(n);
        }, [l, n]),
        i = r.useCallback(() => {
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
            i();
        }, [i]);
    return (
        r.useEffect(() => {
            n.trim().length > 0 && i();
        }, [s, t, i, n]),
        {
            filterAutocompleteResults: a,
            handleFocusFilter: o,
            autocompleteStoreState: u,
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
function S(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = r.useMemo(() => (0, R.s5)(e), [e]),
        u = r.useMemo(() => (0, R.AH)(e), [e]),
        [a, s] = r.useState(l),
        [i, c] = r.useState(""),
        {
            filterAutocompleteResults: o,
            handleFocusFilter: d,
            autocompleteStoreState: E,
        } = N({
            searchContext: e,
            filter: t,
            queryString: i,
        }),
        h = r.useMemo(() => {
            let e = [],
                t = new Set();
            if (o.length > 0)
                o.forEach((l) => {
                    let r = l.user,
                        a = O({
                            user: r,
                            guildId: n,
                            channelId: u,
                        });
                    t.add(r.id), e.push(a);
                });
            else {
                let { tokens: l } = E,
                    r = l[l.length - 1];
                if (
                    null != r &&
                    (r.type === _.dCx.ANSWER_USERNAME_FROM || r.type === _.dCx.ANSWER_USERNAME_MENTIONS) &&
                    (0, I.fx)(r)
                ) {
                    let l = r.getData("userId"),
                        a = f.default.getUser(l);
                    if (null != a) {
                        let l = O({
                            user: a,
                            guildId: n,
                            channelId: u,
                        });
                        t.add(a.id), e.push(l);
                    }
                }
            }
            return (
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
        }, [E, o, a, n, u]),
        g = r.useCallback(() => {
            s([]), c("");
        }, []),
        C = r.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = I.ZP[e];
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
        options: h,
        query: a,
        setQuery: s,
        setQueryString: c,
        handleClearFilter: g,
        getApplyQueryString: C,
        handleFocusFilter: d,
    };
}
function y(e) {
    if (null == e) return;
    let t = e.value;
    return (0, n.jsx)(x.pb, {
        text: t,
        size: "xs",
    });
}
function L(e) {
    if (null == e) return;
    let t = e.value;
    return (0, n.jsx)(x.YQ, {
        text: t,
        size: "xs",
    });
}
function v(e) {
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
function A(e) {
    let { channel: t } = e;
    return {
        value: t.id,
        label: (0, R.nl)(t),
        key: t.id,
    };
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        [u, a] = r.useState(""),
        {
            filterAutocompleteResults: s,
            handleFocusFilter: i,
            autocompleteStoreState: c,
        } = N({
            searchContext: e,
            filter: _.dCx.FILTER_IN,
            queryString: u,
        }),
        o = r.useMemo(() => {
            let t = [],
                n = new Set();
            if (s.length > 0)
                s.forEach((e) => {
                    let l = e.channel,
                        r = A({ channel: l });
                    n.add(l.id), t.push(r);
                });
            else {
                let { tokens: l } = c,
                    r = l[l.length - 1];
                if (null != r && r.type === _.dCx.ANSWER_IN && (0, I.Ni)(r, e)) {
                    let e = r.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let l = E.Z.getChannel(e);
                            if (null != l) {
                                let e = A({ channel: l });
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
                        let r = A({ channel: l });
                        n.add(e), t.unshift(r);
                    }),
                t
            );
        }, [c, s, l, e]),
        d = r.useCallback(() => {
            n([]), a("");
        }, []),
        f = r.useCallback(
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
        options: o,
        query: l,
        setQuery: n,
        setQueryString: a,
        handleClearFilter: d,
        getApplyQueryString: f,
        handleFocusFilter: i,
    };
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        { filterAutocompleteResults: u, handleFocusFilter: a } = N({
            searchContext: e,
            filter: _.dCx.FILTER_HAS,
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
        i = r.useCallback(() => {
            n([]);
        }, []),
        c = r.useCallback(
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
        handleClearFilter: i,
        getApplyQueryString: c,
        handleFocusFilter: a,
    };
}
let M = () =>
    r.useMemo(() => {
        var e, t, l;
        let n = I.ZP[_.dCx.FILTER_BEFORE],
            r = I.ZP[_.dCx.FILTER_AFTER],
            u = I.ZP[_.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == n ? void 0 : n.key) ? e : "".concat(b.intl.string(b.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == r ? void 0 : r.key) ? t : "".concat(b.intl.string(b.t.KSDx7M), ":"),
            duringFilter: null != (l = null == u ? void 0 : u.key) ? l : "".concat(b.intl.string(b.t.h2NzSd), ":"),
        };
    }, []);
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, l] = r.useState(e),
        n = r.useCallback(() => (0, i.Z)(), []),
        u = r.useCallback((e) => e.date.isValid(), []),
        a = r.useMemo(() => t.filter(u), [t, u]),
        { beforeFilter: c, afterFilter: o, duringFilter: d } = M(),
        E = r.useCallback(
            () => ({
                query: c,
                date: s()(),
                id: n(),
            }),
            [c, n],
        ),
        f = r.useMemo(
            () => [
                {
                    key: "Before",
                    label: b.intl.string(b.t["ptL/DP"]),
                    value: c,
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
            [c, o, d],
        ),
        h = r.useCallback((e) => {
            let { query: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = k(F({}, l[n]), { query: t })), l;
            });
        }, []),
        g = r.useCallback((e) => {
            let { date: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = k(F({}, l[n]), { date: t })), l;
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
                0 === a.length
                    ? null
                    : a
                          .map((e) => {
                              let { query: t, date: l } = e,
                                  n = l.format(_.b2L);
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
        handleClearDateFilter: T,
        getDateQueryString: I,
    };
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = r.useState(t),
        { filterAutocompleteResults: u, handleFocusFilter: a } = N({
            searchContext: e,
            filter: _.dCx.FILTER_AUTHOR_TYPE,
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
        i = r.useCallback(() => {
            n([]);
        }, []),
        c = r.useCallback(
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
        handleClearFilter: i,
        getApplyQueryString: c,
        handleFocusFilter: a,
    };
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [l, n] = r.useState(t),
        u = r.useMemo(() => {
            var t, n, r;
            let u =
                null !=
                (r =
                    null == (t = (n = I.ZP[_.dCx.FILTER_PINNED]).getAutocompletions)
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
        s = r.useCallback(
            (e) => {
                if (null === l) return null;
                let t = I.ZP[e];
                return "".concat(t.key, " ").concat(l);
            },
            [l],
        );
    return {
        options: u,
        query: l,
        setQuery: n,
        handleClearFilter: a,
        getApplyQueryString: s,
    };
}
function w(e, t) {
    let { beforeFilter: l, afterFilter: n, duringFilter: u } = M(),
        a = (0, T.N)(t);
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
            c = 0;
        e.forEach((e) => {
            if (_.KA4.test(e.type))
                switch (e.type) {
                    case _.dCx.ANSWER_USERNAME_FROM:
                        if (a.has(_.dCx.FILTER_FROM)) {
                            let l = t[_.dCx.FILTER_FROM],
                                n = e.getData("userId");
                            l.push(n), (c += 1);
                        }
                        break;
                    case _.dCx.ANSWER_USERNAME_MENTIONS:
                        if (a.has(_.dCx.FILTER_MENTIONS)) {
                            let l = t[_.dCx.FILTER_MENTIONS],
                                n = e.getData("userId");
                            l.push(n), (c += 1);
                        }
                        break;
                    case _.dCx.ANSWER_HAS:
                        let o = t[_.dCx.FILTER_HAS],
                            d = e.getData("has");
                        o.push(d), (c += 1);
                        break;
                    case _.dCx.ANSWER_IN:
                        if (a.has(_.dCx.FILTER_IN)) {
                            var E;
                            let l = t[_.dCx.FILTER_IN],
                                n = null != (E = e.getData("channelIds")) ? E : [];
                            l.push(...n), (c += 1);
                        }
                        break;
                    case _.dCx.ANSWER_BEFORE:
                        let f = t[_.dCx.FILTER_BEFORE],
                            h = e.getData("end"),
                            g = {
                                query: l,
                                date: s()(h),
                                id: (0, i.Z)(),
                            };
                        f.push(g), r.push(g), (c += 1);
                        break;
                    case _.dCx.ANSWER_ON:
                        let C = t[_.dCx.FILTER_ON],
                            R = e.getData("start"),
                            T = {
                                query: u,
                                date: s()(R),
                                id: (0, i.Z)(),
                            };
                        C.push(T), r.push(T), (c += 1);
                        break;
                    case _.dCx.ANSWER_AFTER:
                        let I = t[_.dCx.FILTER_AFTER],
                            p = e.getData("start"),
                            x = {
                                query: n,
                                date: s()(p),
                                id: (0, i.Z)(),
                            };
                        I.push(x), r.push(x), (c += 1);
                        break;
                    case _.dCx.ANSWER_PINNED:
                        let b = t[_.dCx.FILTER_PINNED],
                            F = e.getData("pinned").toString();
                        null === b ? (b = F) : "true" !== b && "true" === F && (b = F),
                            (t[_.dCx.FILTER_PINNED] = b),
                            (c += 1);
                        break;
                    case _.dCx.ANSWER_AUTHOR_TYPE:
                        if (a.has(_.dCx.FILTER_AUTHOR_TYPE)) {
                            let l = t[_.dCx.FILTER_AUTHOR_TYPE],
                                n = e.getData("author_type");
                            l.push(n), (c += 1);
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
            totalFilters: c,
            prefilledSearchFilters: o,
            eligibleFilterTokens: a,
        };
    }, [e, l, n, u, a]);
}
function U(e, t) {
    return e === t || (0, u.isEqual)(e, t);
}
function H(e, t) {
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
function q(e) {
    let { nonFilterQueryString: t, filterQueryString: l } = e,
        n = +(l.length > 0),
        u = +(t.length > 0),
        a = p.uh - t.length - u - n,
        s = r.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return l.length + t.length > a;
            },
            [l.length, a],
        ),
        i = r.useMemo(() => l.length + 18 > a, [l.length, a]),
        c = r.useCallback(() => {
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
                            n = I.ZP[e];
                        switch (e) {
                            case _.dCx.FILTER_FROM:
                            case _.dCx.FILTER_MENTIONS:
                                let r = f.default.getUser(t);
                                l = null == r ? t : "".concat(r.username);
                                break;
                            case _.dCx.FILTER_IN:
                                let u = E.Z.getChannel(t);
                                if (null == u) l = t;
                                else {
                                    let e = (0, R.nl)(u);
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
                }) || (c(), !1),
            [s, c],
        ),
        validateDateFilter: r.useCallback(() => !i || (c(), !1), [i, c]),
    };
}
