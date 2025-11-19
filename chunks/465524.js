l.d(t, {
    Ek: () => Z,
    HJ: () => O,
    LE: () => j,
    YL: () => w,
    Z2: () => v,
    fI: () => P,
    fJ: () => m,
    p4: () => D,
    ur: () => L,
    zL: () => M,
}),
    l(781311),
    l(388685),
    l(539854),
    l(290780),
    l(35282);
var n = l(54381),
    a = l(473749),
    r = l(392711),
    u = l(913527),
    i = l.n(u),
    s = l(772848),
    c = l(442837),
    d = l(668781),
    o = l(471445),
    E = l(592125),
    h = l(594174),
    g = l(5192),
    f = l(748610),
    C = l(738018),
    R = l(607802),
    I = l(247902),
    T = l(532428),
    p = l(208450),
    b = l(637879),
    x = l(981631),
    _ = l(388032);
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
        r = (0, c.e7)([C.Z], () => C.Z.getState(t), [t], c.pF),
        u = a.useMemo(() => {
            let e = r.autocompletes[0];
            return null != e && e.group === l ? e.results : [];
        }, [r.autocompletes, l]),
        i = a.useMemo(() => {
            let e = T.ZP[l].key;
            return "".concat(e, " ").concat(n);
        }, [l, n]),
        s = a.useCallback(() => {
            let e = (0, R.kG)(i),
                l = (0, R.g9)(e, i.length - 1, i.length - 1);
            f.Z.updateAutocompleteQuery({
                searchContext: t,
                tokens: e,
                cursorScope: l,
                queryString: i,
            });
        }, [t, i]),
        d = a.useCallback(() => {
            s();
        }, [s]);
    return (
        a.useEffect(() => {
            n.trim().length > 0 && s();
        }, [i, t, s, n]),
        {
            filterAutocompleteResults: u,
            handleFocusFilter: d,
            autocompleteStoreState: r,
        }
    );
}
function y(e) {
    var t;
    let { user: l, guildId: n, channelId: a } = e,
        r = g.ZP.getName(n, a, l),
        u = null != (t = l.getAvatarURL(n, 80)) ? t : l.avatar;
    return {
        value: l.id,
        label: r,
        key: l.id,
        id: l.id,
        leading:
            null != u
                ? {
                      type: "avatar",
                      src: u,
                  }
                : void 0,
        trailing: l.username,
    };
}
function O(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = a.useMemo(() => (0, R.s5)(e), [e]),
        r = a.useMemo(() => (0, R.AH)(e), [e]),
        [u, i] = a.useState(l),
        [s, c] = a.useState(""),
        {
            filterAutocompleteResults: d,
            handleFocusFilter: o,
            autocompleteStoreState: E,
        } = N({
            searchContext: e,
            filter: t,
            queryString: s,
        }),
        g = a.useMemo(() => {
            let e = [],
                t = new Set();
            if (d.length > 0)
                d.forEach((l) => {
                    let a = l.user,
                        u = y({
                            user: a,
                            guildId: n,
                            channelId: r,
                        });
                    t.add(a.id), e.push(u);
                });
            else {
                let { tokens: l } = E,
                    a = l[l.length - 1];
                if (
                    null != a &&
                    (a.type === x.dCx.ANSWER_USERNAME_FROM || a.type === x.dCx.ANSWER_USERNAME_MENTIONS) &&
                    (0, T.fx)(a)
                ) {
                    let l = a.getData("userId"),
                        u = h.default.getUser(l);
                    if (null != u) {
                        let l = y({
                            user: u,
                            guildId: n,
                            channelId: r,
                        });
                        t.add(u.id), e.push(l);
                    }
                }
            }
            return (
                u.length > 0 &&
                    u.forEach((l) => {
                        if (t.has(l)) return;
                        let a = h.default.getUser(l);
                        if (null == a) return;
                        let u = y({
                            user: a,
                            guildId: n,
                            channelId: r,
                        });
                        t.add(l), e.unshift(u);
                    }),
                e
            );
        }, [E, d, u, n, r]),
        f = a.useCallback(() => {
            i([]), c("");
        }, []),
        C = a.useCallback(() => {
            c("");
        }, []),
        I = a.useCallback(
            (e) => {
                if (0 === u.length) return null;
                let t = T.ZP[e];
                return u
                    .map((e) => {
                        let l = h.default.getUser(e);
                        return "".concat(t.key, " ").concat(null == l ? void 0 : l.username);
                    })
                    .join(" ");
            },
            [u],
        );
    return {
        options: g,
        query: u,
        setQuery: i,
        setQueryString: c,
        handleClearFilter: f,
        getApplyQueryString: I,
        handleFocusFilter: o,
        handleBlurFilter: C,
    };
}
function S(e) {
    let { channel: t } = e,
        l = (0, o.KS)(t);
    return {
        value: t.id,
        label: (0, R.nl)(t),
        key: t.id,
        id: t.id,
        leading: null != l ? l : void 0,
    };
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, n] = a.useState(t),
        [r, u] = a.useState(""),
        {
            filterAutocompleteResults: i,
            handleFocusFilter: s,
            autocompleteStoreState: c,
        } = N({
            searchContext: e,
            filter: x.dCx.FILTER_IN,
            queryString: r,
        }),
        d = a.useMemo(() => {
            let t = [],
                n = new Set();
            if (i.length > 0)
                i.forEach((e) => {
                    let l = e.channel,
                        a = S({ channel: l });
                    n.add(l.id), t.push(a);
                });
            else {
                let { tokens: l } = c,
                    a = l[l.length - 1];
                if (null != a && a.type === x.dCx.ANSWER_IN && (0, T.Ni)(a, e)) {
                    let e = a.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let l = E.Z.getChannel(e);
                            if (null != l) {
                                let e = S({ channel: l });
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
                        let a = S({ channel: l });
                        n.add(e), t.unshift(a);
                    }),
                t
            );
        }, [c, i, l, e]),
        o = a.useCallback(() => {
            n([]), u("");
        }, []),
        h = a.useCallback(() => {
            u("");
        }, []),
        g = a.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = T.ZP[e];
                return l
                    .map((e) => {
                        let l = E.Z.getChannel(e);
                        if (null == l) return;
                        let n = (0, R.nl)(l),
                            a = (0, R.Jl)(n);
                        return "".concat(t.key, " ").concat(a);
                    })
                    .join(" ");
            },
            [l],
        );
    return {
        options: d,
        query: l,
        setQuery: n,
        setQueryString: u,
        handleClearFilter: o,
        getApplyQueryString: g,
        handleFocusFilter: s,
        handleBlurFilter: h,
    };
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        l = arguments.length > 2 ? arguments[2] : void 0,
        [r, u] = a.useState(t),
        { filterAutocompleteResults: i, handleFocusFilter: s } = N({
            searchContext: e,
            filter: x.dCx.FILTER_HAS,
            queryString: "",
        }),
        c = a.useMemo(() => {
            if (0 === i.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((a) => {
                        t.add(a),
                            e.push({
                                value: a,
                                label: a,
                                key: a,
                                id: a,
                                leading: l
                                    ? (0, n.jsx)(b.pb, {
                                          text: a,
                                          size: "xs",
                                      })
                                    : void 0,
                            });
                    }),
                i.length > 0 &&
                    i.forEach((a) => {
                        let { text: r } = a;
                        t.has(r) ||
                            (e.push({
                                value: r,
                                label: r,
                                key: r,
                                id: r,
                                leading: l
                                    ? (0, n.jsx)(b.pb, {
                                          text: r,
                                          size: "xs",
                                      })
                                    : void 0,
                            }),
                            t.add(r));
                    }),
                e
            );
        }, [i, r, l]),
        d = a.useCallback(() => {
            u([]);
        }, []),
        o = a.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = T.ZP[e];
                return r.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [r],
        );
    return {
        options: c,
        query: r,
        setQuery: u,
        handleClearFilter: d,
        getApplyQueryString: o,
        handleFocusFilter: s,
    };
}
let A = () =>
    a.useMemo(() => {
        var e, t, l;
        let n = T.ZP[x.dCx.FILTER_BEFORE],
            a = T.ZP[x.dCx.FILTER_AFTER],
            r = T.ZP[x.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == n ? void 0 : n.key) ? e : "".concat(_.intl.string(_.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == a ? void 0 : a.key) ? t : "".concat(_.intl.string(_.t.KSDx7M), ":"),
            duringFilter: null != (l = null == r ? void 0 : r.key) ? l : "".concat(_.intl.string(_.t.h2NzSd), ":"),
        };
    }, []);
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, l] = a.useState(e),
        n = a.useCallback(() => (0, s.Z)(), []),
        r = a.useCallback((e) => e.date.isValid(), []),
        u = a.useMemo(() => t.filter(r), [t, r]),
        { beforeFilter: c, afterFilter: d, duringFilter: o } = A(),
        E = a.useCallback(
            () => ({
                query: c,
                date: i()(),
                id: n(),
            }),
            [c, n],
        ),
        h = a.useMemo(
            () => [
                {
                    key: "Before",
                    label: _.intl.string(_.t["ptL/DP"]),
                    value: c,
                },
                {
                    key: "After",
                    label: _.intl.string(_.t.waQeEV),
                    value: d,
                },
                {
                    key: "During",
                    label: _.intl.string(_.t.LT5TnZ),
                    value: o,
                },
            ],
            [c, d, o],
        ),
        g = a.useCallback((e) => {
            let { query: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = k(F({}, l[n]), { query: t })), l;
            });
        }, []),
        f = a.useCallback((e) => {
            let { date: t, index: n } = e;
            l((e) => {
                let l = [...e];
                return (l[n] = k(F({}, l[n]), { date: t })), l;
            });
        }, []),
        C = a.useCallback(() => {
            l((e) => [...e, E()]);
        }, [E]),
        R = a.useCallback((e) => {
            l((t) => {
                let l = [...t];
                return l.splice(e, 1), l;
            });
        }, []),
        I = a.useCallback(() => {
            l([]);
        }, []),
        T = a.useCallback(
            () =>
                0 === u.length
                    ? null
                    : u
                          .map((e) => {
                              let { query: t, date: l } = e,
                                  n = l.format(x.b2L);
                              return "".concat(t, " ").concat(n);
                          })
                          .join(" "),
            [u],
        );
    return {
        options: h,
        dates: t,
        validDates: u,
        handleDateQueryChange: g,
        handleDateChange: f,
        handleAddDateFilter: C,
        handleRemoveDateFilter: R,
        handleClearDateFilter: I,
        getDateQueryString: T,
    };
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        l = arguments.length > 2 ? arguments[2] : void 0,
        [r, u] = a.useState(t),
        { filterAutocompleteResults: i, handleFocusFilter: s } = N({
            searchContext: e,
            filter: x.dCx.FILTER_AUTHOR_TYPE,
            queryString: "",
        }),
        c = a.useMemo(() => {
            if (0 === i.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((a) => {
                        t.add(a),
                            e.push({
                                value: a,
                                label: a,
                                key: a,
                                id: a,
                                leading: l
                                    ? (0, n.jsx)(b.YQ, {
                                          text: a,
                                          size: "xs",
                                      })
                                    : void 0,
                            });
                    }),
                i.length > 0 &&
                    i.forEach((a) => {
                        let { text: r } = a;
                        t.has(r) ||
                            (e.push({
                                value: r,
                                label: r,
                                key: r,
                                id: r,
                                leading: l
                                    ? (0, n.jsx)(b.YQ, {
                                          text: r,
                                          size: "xs",
                                      })
                                    : void 0,
                            }),
                            t.add(r));
                    }),
                e
            );
        }, [i, r, l]),
        d = a.useCallback(() => {
            u([]);
        }, []),
        o = a.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = T.ZP[e];
                return r.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [r],
        );
    return {
        options: c,
        query: r,
        setQuery: u,
        handleClearFilter: d,
        getApplyQueryString: o,
        handleFocusFilter: s,
    };
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [l, n] = a.useState(t),
        r = a.useMemo(() => {
            var t, n, a;
            let r =
                null !=
                (a =
                    null == (t = (n = T.ZP[x.dCx.FILTER_PINNED]).getAutocompletions)
                        ? void 0
                        : t.call(n, {
                              query: "",
                              maxResults: 10,
                              searchContext: e,
                          }))
                    ? a
                    : [];
            if (0 === r.length && null === l) return [];
            let u = [];
            return (
                r.length > 0 &&
                    r.forEach((e) => {
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
        u = a.useCallback(() => {
            n(null);
        }, []),
        i = a.useCallback(
            (e) => {
                if (null === l) return null;
                let t = T.ZP[e];
                return "".concat(t.key, " ").concat(l);
            },
            [l],
        );
    return {
        options: r,
        query: l,
        setQuery: n,
        handleClearFilter: u,
        getApplyQueryString: i,
    };
}
function D(e, t) {
    let { beforeFilter: l, afterFilter: n, duringFilter: r } = A(),
        u = (0, I.N)(t);
    return a.useMemo(() => {
        let t = {
                [x.dCx.FILTER_FROM]: [],
                [x.dCx.FILTER_MENTIONS]: [],
                [x.dCx.FILTER_HAS]: [],
                [x.dCx.FILTER_IN]: [],
                [x.dCx.FILTER_ON]: [],
                [x.dCx.FILTER_BEFORE]: [],
                [x.dCx.FILTER_AFTER]: [],
                [x.dCx.FILTER_PINNED]: null,
                [x.dCx.FILTER_AUTHOR_TYPE]: [],
            },
            a = [],
            c = 0;
        e.forEach((e) => {
            if (x.KA4.test(e.type))
                switch (e.type) {
                    case x.dCx.ANSWER_USERNAME_FROM:
                        if (u.has(x.dCx.FILTER_FROM)) {
                            let l = t[x.dCx.FILTER_FROM],
                                n = e.getData("userId");
                            l.push(n), (c += 1);
                        }
                        break;
                    case x.dCx.ANSWER_USERNAME_MENTIONS:
                        if (u.has(x.dCx.FILTER_MENTIONS)) {
                            let l = t[x.dCx.FILTER_MENTIONS],
                                n = e.getData("userId");
                            l.push(n), (c += 1);
                        }
                        break;
                    case x.dCx.ANSWER_HAS:
                        let d = t[x.dCx.FILTER_HAS],
                            o = e.getData("has");
                        d.push(o), (c += 1);
                        break;
                    case x.dCx.ANSWER_IN:
                        if (u.has(x.dCx.FILTER_IN)) {
                            var E;
                            let l = t[x.dCx.FILTER_IN],
                                n = null != (E = e.getData("channelIds")) ? E : [];
                            l.push(...n), (c += 1);
                        }
                        break;
                    case x.dCx.ANSWER_BEFORE:
                        let h = t[x.dCx.FILTER_BEFORE],
                            g = e.getData("end"),
                            f = {
                                query: l,
                                date: i()(g),
                                id: (0, s.Z)(),
                            };
                        h.push(f), a.push(f), (c += 1);
                        break;
                    case x.dCx.ANSWER_ON:
                        let C = t[x.dCx.FILTER_ON],
                            R = e.getData("start"),
                            I = {
                                query: r,
                                date: i()(R),
                                id: (0, s.Z)(),
                            };
                        C.push(I), a.push(I), (c += 1);
                        break;
                    case x.dCx.ANSWER_AFTER:
                        let T = t[x.dCx.FILTER_AFTER],
                            p = e.getData("start"),
                            b = {
                                query: n,
                                date: i()(p),
                                id: (0, s.Z)(),
                            };
                        T.push(b), a.push(b), (c += 1);
                        break;
                    case x.dCx.ANSWER_PINNED:
                        let _ = t[x.dCx.FILTER_PINNED],
                            F = e.getData("pinned").toString();
                        null === _ ? (_ = F) : "true" !== _ && "true" === F && (_ = F),
                            (t[x.dCx.FILTER_PINNED] = _),
                            (c += 1);
                        break;
                    case x.dCx.ANSWER_AUTHOR_TYPE:
                        if (u.has(x.dCx.FILTER_AUTHOR_TYPE)) {
                            let l = t[x.dCx.FILTER_AUTHOR_TYPE],
                                n = e.getData("author_type");
                            l.push(n), (c += 1);
                        }
                }
        });
        let d = {
            [x.dCx.FILTER_FROM]: t[x.dCx.FILTER_FROM],
            [x.dCx.FILTER_MENTIONS]: t[x.dCx.FILTER_MENTIONS],
            [x.dCx.FILTER_HAS]: t[x.dCx.FILTER_HAS],
            [x.dCx.FILTER_IN]: t[x.dCx.FILTER_IN],
            dateFilters: a,
            [x.dCx.FILTER_AUTHOR_TYPE]: t[x.dCx.FILTER_AUTHOR_TYPE],
            [x.dCx.FILTER_PINNED]: t[x.dCx.FILTER_PINNED],
        };
        return {
            allPrefilledSearchFilters: t,
            totalFilters: c,
            prefilledSearchFilters: d,
            eligibleFilterTokens: u,
        };
    }, [e, l, n, r, u]);
}
function Z(e, t) {
    return e === t || (0, r.isEqual)(e, t);
}
function j(e, t) {
    var l, n;
    if (e.length !== t.length) return !1;
    let a = new Map();
    for (let t of e) {
        let e = "".concat(t.query, ":").concat(t.date.valueOf()),
            n = null != (l = a.get(e)) ? l : 0;
        a.set(e, n + 1);
    }
    for (let e of t) {
        let t = "".concat(e.query, ":").concat(e.date.valueOf()),
            l = null != (n = a.get(t)) ? n : 0;
        if (0 === l) return !1;
        a.set(t, l - 1);
    }
    for (let e of a.values()) if (0 !== e) return !1;
    return !0;
}
function w(e) {
    let { nonFilterQueryString: t, filterQueryString: l } = e,
        n = +(l.length > 0),
        r = +(t.length > 0),
        u = p.uh - t.length - r - n,
        i = a.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return l.length + t.length > u;
            },
            [l.length, u],
        ),
        s = a.useMemo(() => l.length + 18 > u, [l.length, u]),
        c = a.useCallback(() => {
            d.Z.show({
                title: _.intl.string(_.t.nOqJcX),
                body: _.intl.string(_.t.zzAcsv),
                confirmText: _.intl.string(_.t["qcYY+/"]),
            });
        }, []);
    return {
        validateFilter: a.useCallback(
            (e, t) =>
                !i({
                    newFilterString: (function (e, t) {
                        let l,
                            n = T.ZP[e];
                        switch (e) {
                            case x.dCx.FILTER_FROM:
                            case x.dCx.FILTER_MENTIONS:
                                let a = h.default.getUser(t);
                                l = null == a ? t : "".concat(a.username);
                                break;
                            case x.dCx.FILTER_IN:
                                let r = E.Z.getChannel(t);
                                if (null == r) l = t;
                                else {
                                    let e = (0, R.nl)(r);
                                    l = (0, R.Jl)(e);
                                }
                                break;
                            case x.dCx.FILTER_HAS:
                            case x.dCx.FILTER_PINNED:
                            case x.dCx.FILTER_AUTHOR_TYPE:
                            default:
                                l = t;
                        }
                        return n.key + " " + l;
                    })(e, t),
                }) || (c(), !1),
            [i, c],
        ),
        validateDateFilter: a.useCallback(() => !s || (c(), !1), [s, c]),
    };
}
