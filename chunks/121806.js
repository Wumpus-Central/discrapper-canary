r.d(t, {
    CT: () => H,
    H3: () => D,
    Ht: () => W,
    KD: () => P,
    Ky: () => M,
    TT: () => w,
    _2: () => z,
    dY: () => G,
    ps: () => N,
    u2: () => F,
    vj: () => U,
    wf: () => q,
}),
    r(733351),
    r(896048),
    r(321073),
    r(667532),
    r(747238);
var n = r(627968),
    l = r(64700),
    s = r(735438),
    a = r(989349),
    i = r.n(a),
    o = r(835245),
    c = r(311907),
    u = r(397927),
    d = r(157559),
    h = r(713654),
    p = r(734057),
    f = r(287809),
    g = r(403362),
    S = r(562153),
    E = r(427262),
    y = r(256796),
    _ = r(692986),
    m = r(822382),
    A = r(893162),
    b = r(771650),
    O = r(907745),
    R = r(315059),
    v = r(652215),
    x = r(985018);

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
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

function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}

function j(e) {
    let { searchContext: t, filter: r, queryString: n } = e,
        s = (0, c.bG)([_.A], () => _.A.getState(t), [t], c.My),
        a = l.useMemo(() => {
            let e = s.autocompletes[0];
            return null != e && e.group === r ? e.results : [];
        }, [s.autocompletes, r]),
        i = l.useMemo(() => {
            let e = b.Ay[r].key;
            return "".concat(e, " ").concat(n);
        }, [r, n]),
        o = l.useCallback(() => {
            let e = (0, m._o)(i),
                r = (0, m.zZ)(e, i.length - 1, i.length - 1);
            y.A.updateAutocompleteQuery({
                searchContext: t,
                tokens: e,
                cursorScope: r,
                queryString: i,
            });
        }, [t, i]),
        u = l.useCallback(() => {
            o();
        }, [o]);
    return (
        l.useEffect(() => {
            n.trim().length > 0 && o();
        }, [i, t, o, n]),
        {
            filterAutocompleteResults: a,
            handleFocusFilter: u,
            autocompleteStoreState: s,
        }
    );
}

function L(e) {
    let { user: t, guildId: r, channelId: n } = e,
        l = S.Ay.getName(r, n, t),
        s = t.getAvatarURL(r, (0, u.FT9)(u._3J.SIZE_24));
    return {
        value: t.id,
        label: l,
        key: t.id,
        id: t.id,
        leading: {
            type: "avatar",
            src: s,
        },
        trailing: t.username,
    };
}

function N(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = l.useMemo(() => (0, m.mt)(e), [e]),
        s = l.useMemo(() => (0, m._b)(e), [e]),
        [a, i] = l.useState(r),
        [o, c] = l.useState(""),
        {
            filterAutocompleteResults: u,
            handleFocusFilter: d,
            autocompleteStoreState: h,
        } = j({
            searchContext: e,
            filter: t,
            queryString: o,
        }),
        p = l.useMemo(() => {
            let e = [],
                t = new Set();
            if (u.length > 0)
                u.forEach((r) => {
                    let l = r.user,
                        a = L({
                            user: l,
                            guildId: n,
                            channelId: s,
                        });
                    t.add(l.id), e.push(a);
                });
            else {
                let { tokens: r } = h,
                    l = r[r.length - 1];
                if (
                    null != l &&
                    (l.type === v.LWr.ANSWER_USERNAME_FROM || l.type === v.LWr.ANSWER_USERNAME_MENTIONS) &&
                    (0, b.sC)(l)
                ) {
                    let r = l.getData("userId"),
                        a = f.default.getUser(r);
                    if (null != a) {
                        let r = L({
                            user: a,
                            guildId: n,
                            channelId: s,
                        });
                        t.add(a.id), e.push(r);
                    }
                }
            }
            return (
                a.length > 0 &&
                    a.forEach((r) => {
                        if (t.has(r)) return;
                        let l = f.default.getUser(r);
                        if (null == l) return;
                        let a = L({
                            user: l,
                            guildId: n,
                            channelId: s,
                        });
                        t.add(r), e.unshift(a);
                    }),
                e
            );
        }, [h, u, a, n, s]),
        S = l.useCallback(() => {
            i([]), c("");
        }, []),
        y = l.useCallback(() => {
            c("");
        }, []),
        _ = l.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = b.Ay[e];
                return a
                    .map((e) => {
                        let r = f.default.getUser(e);
                        if (null == r) return null;
                        let n = E.Ay.getUserTag(r);
                        return "" === n ? null : "".concat(t.key, " ").concat(n);
                    })
                    .filter(g.Vq)
                    .join(" ");
            },
            [a],
        );
    return {
        options: p,
        query: a,
        setQuery: i,
        setQueryString: c,
        handleClearFilter: S,
        getApplyQueryString: _,
        handleFocusFilter: d,
        handleBlurFilter: y,
    };
}

function C(e) {
    let t,
        { channel: r } = e;
    if (r.isDM()) {
        let e = r.getRecipientId(),
            n = f.default.getUser(e);
        null != n &&
            (t = {
                type: "avatar",
                src: n.getAvatarURL(null, (0, u.FT9)(u._3J.SIZE_20)),
            });
    } else
        t = r.isGroupDM()
            ? (0, n.jsx)(R.A, {
                  channel: r,
                  avatarSize: u._3J.SIZE_20,
                  iconSize: "refresh_sm",
              })
            : (0, h.gU)(r);
    return {
        value: r.id,
        label: (0, m.E3)(r),
        key: r.id,
        id: r.id,
        leading: t,
    };
}

function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = l.useState(t),
        [s, a] = l.useState(""),
        {
            filterAutocompleteResults: i,
            handleFocusFilter: o,
            autocompleteStoreState: c,
        } = j({
            searchContext: e,
            filter: v.LWr.FILTER_IN,
            queryString: s,
        }),
        u = l.useMemo(() => {
            let t = [],
                n = new Set();
            if (i.length > 0)
                i.forEach((e) => {
                    let r = e.channel,
                        l = C({
                            channel: r,
                        });
                    n.add(r.id), t.push(l);
                });
            else {
                let { tokens: r } = c,
                    l = r[r.length - 1];
                if (null != l && l.type === v.LWr.ANSWER_IN && (0, b.Yd)(l, e)) {
                    let e = l.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let r = p.A.getChannel(e);
                            if (null != r) {
                                let e = C({
                                    channel: r,
                                });
                                n.add(r.id), t.push(e);
                            }
                        });
                }
            }
            return (
                r.length > 0 &&
                    r.forEach((e) => {
                        if (n.has(e)) return;
                        let r = p.A.getChannel(e);
                        if (null == r) return;
                        let l = C({
                            channel: r,
                        });
                        n.add(e), t.unshift(l);
                    }),
                t
            );
        }, [c, i, r, e]),
        d = l.useCallback(() => {
            n([]), a("");
        }, []),
        h = l.useCallback(() => {
            a("");
        }, []),
        f = l.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = b.Ay[e];
                return r
                    .map((e) => {
                        let r = p.A.getChannel(e);
                        if (null == r) return;
                        let n = (0, m.E3)(r),
                            l = (0, m.TZ)(n);
                        return "".concat(t.key, " ").concat(l);
                    })
                    .join(" ");
            },
            [r],
        );
    return {
        options: u,
        query: r,
        setQuery: n,
        setQueryString: a,
        handleClearFilter: d,
        getApplyQueryString: f,
        handleFocusFilter: o,
        handleBlurFilter: h,
    };
}

function P(e) {
    switch (e) {
        case x.intl.string(x.t.ZNR2fi):
            return u.qYV;
        case x.intl.string(x.t["20uQR3"]):
            return u.JD7;
        case x.intl.string(x.t.L4lxyE):
            return u.YRe;
        case x.intl.string(x.t["AV/v6i"]):
            return u.oSV;
        case x.intl.string(x.t.XM9XGP):
            return u.npA;
        case x.intl.string(x.t.TNLcpx):
            return u.xfq;
        case x.intl.string(x.t.F8Wf0e):
            return u.JMI;
        case x.intl.string(x.t.PJgX2h):
            return u.tEP;
        case x.intl.string(x.t.nrpA5E):
            return u.tuI;
        default:
            return null;
    }
}

function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = l.useState(t),
        { filterAutocompleteResults: s, handleFocusFilter: a } = j({
            searchContext: e,
            filter: v.LWr.FILTER_HAS,
            queryString: "",
        }),
        i = l.useMemo(() => {
            if (0 === s.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((r) => {
                        t.add(r),
                            e.push({
                                value: r,
                                label: r,
                                key: r,
                                id: r,
                                leading: P(r),
                            });
                    }),
                s.length > 0 &&
                    s.forEach((r) => {
                        let { text: n } = r;
                        t.has(n) ||
                            (e.push({
                                value: n,
                                label: n,
                                key: n,
                                id: n,
                                leading: P(n),
                            }),
                            t.add(n));
                    }),
                e
            );
        }, [s, r]),
        o = l.useCallback(() => {
            n([]);
        }, []),
        c = l.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = b.Ay[e];
                return r.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [r],
        );
    return {
        options: i,
        query: r,
        setQuery: n,
        handleClearFilter: o,
        getApplyQueryString: c,
        handleFocusFilter: a,
    };
}
let k = () =>
    l.useMemo(() => {
        var e, t, r;
        let n = b.Ay[v.LWr.FILTER_BEFORE],
            l = b.Ay[v.LWr.FILTER_AFTER],
            s = b.Ay[v.LWr.FILTER_ON];
        return {
            beforeFilter: null != (e = null == n ? void 0 : n.key) ? e : "".concat(x.intl.string(x.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == l ? void 0 : l.key) ? t : "".concat(x.intl.string(x.t.KSDx7M), ":"),
            duringFilter: null != (r = null == s ? void 0 : s.key) ? r : "".concat(x.intl.string(x.t.h2NzSd), ":"),
        };
    }, []);

function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, r] = l.useState(e),
        n = l.useCallback(() => (0, o.A)(), []),
        s = l.useCallback((e) => e.date.isValid(), []),
        a = l.useMemo(() => t.filter(s), [t, s]),
        { beforeFilter: c, afterFilter: u, duringFilter: d } = k(),
        h = l.useCallback(
            () => ({
                query: c,
                date: i()(),
                id: n(),
            }),
            [c, n],
        ),
        p = l.useMemo(
            () => [
                {
                    key: "Before",
                    label: x.intl.string(x.t["ptL/DP"]),
                    value: c,
                },
                {
                    key: "After",
                    label: x.intl.string(x.t.waQeEV),
                    value: u,
                },
                {
                    key: "During",
                    label: x.intl.string(x.t.LT5TnZ),
                    value: d,
                },
            ],
            [c, u, d],
        ),
        f = l.useCallback((e) => {
            let { query: t, index: n } = e;
            r((e) => {
                let r = [...e];
                return (
                    (r[n] = I(T({}, r[n]), {
                        query: t,
                    })),
                    r
                );
            });
        }, []),
        g = l.useCallback((e) => {
            let { date: t, index: n } = e;
            r((e) => {
                let r = [...e];
                return (
                    (r[n] = I(T({}, r[n]), {
                        date: t,
                    })),
                    r
                );
            });
        }, []),
        S = l.useCallback(() => {
            r((e) => [...e, h()]);
        }, [h]),
        E = l.useCallback((e) => {
            r((t) => {
                let r = [...t];
                return r.splice(e, 1), r;
            });
        }, []),
        y = l.useCallback(() => {
            r([]);
        }, []),
        _ = l.useCallback(
            () =>
                0 === a.length
                    ? null
                    : a
                          .map((e) => {
                              let { query: t, date: r } = e,
                                  n = r.format(v.ump);
                              return "".concat(t, " ").concat(n);
                          })
                          .join(" "),
            [a],
        );
    return {
        options: p,
        dates: t,
        validDates: a,
        handleDateQueryChange: f,
        handleDateChange: g,
        handleAddDateFilter: S,
        handleRemoveDateFilter: E,
        handleClearDateFilter: y,
        getDateQueryString: _,
    };
}

function W(e) {
    switch (e) {
        case x.intl.string(x.t.tPZo4p):
            return u.nys;
        case x.intl.string(x.t.JL7sRS):
            return u.CnV;
        case x.intl.string(x.t.WjkIKU):
            return u.XC7;
    }
}

function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = l.useState(t),
        { filterAutocompleteResults: s, handleFocusFilter: a } = j({
            searchContext: e,
            filter: v.LWr.FILTER_AUTHOR_TYPE,
            queryString: "",
        }),
        i = l.useMemo(() => {
            if (0 === s.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((r) => {
                        t.add(r),
                            e.push({
                                value: r,
                                label: r,
                                key: r,
                                id: r,
                                leading: W(r),
                            });
                    }),
                s.length > 0 &&
                    s.forEach((r) => {
                        let { text: n } = r;
                        t.has(n) ||
                            (e.push({
                                value: n,
                                label: n,
                                key: n,
                                id: n,
                                leading: W(n),
                            }),
                            t.add(n));
                    }),
                e
            );
        }, [s, r]),
        o = l.useCallback(() => {
            n([]);
        }, []),
        c = l.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = b.Ay[e];
                return r.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [r],
        );
    return {
        options: i,
        query: r,
        setQuery: n,
        handleClearFilter: o,
        getApplyQueryString: c,
        handleFocusFilter: a,
    };
}

function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [r, n] = l.useState(t),
        s = l.useMemo(() => {
            var t, n, l;
            let s =
                null !=
                (t =
                    null == (n = (l = b.Ay[v.LWr.FILTER_PINNED]).getAutocompletions)
                        ? void 0
                        : n.call(l, {
                              query: "",
                              maxResults: 10,
                              searchContext: e,
                          }))
                    ? t
                    : [];
            if (0 === s.length && null === r) return [];
            let a = [];
            return (
                s.length > 0 &&
                    s.forEach((e) => {
                        let { text: t } = e;
                        a.push({
                            value: t,
                            label: t,
                            key: t,
                        });
                    }),
                a
            );
        }, [e, r]),
        a = l.useCallback(() => {
            n(null);
        }, []),
        i = l.useCallback(
            (e) => {
                if (null === r) return null;
                let t = b.Ay[e];
                return "".concat(t.key, " ").concat(r);
            },
            [r],
        );
    return {
        options: s,
        query: r,
        setQuery: n,
        handleClearFilter: a,
        getApplyQueryString: i,
    };
}

function U(e, t) {
    let { beforeFilter: r, afterFilter: n, duringFilter: s } = k(),
        a = (0, A.R)(t);
    return l.useMemo(() => {
        let t = {
                [v.LWr.FILTER_FROM]: [],
                [v.LWr.FILTER_MENTIONS]: [],
                [v.LWr.FILTER_HAS]: [],
                [v.LWr.FILTER_IN]: [],
                [v.LWr.FILTER_ON]: [],
                [v.LWr.FILTER_BEFORE]: [],
                [v.LWr.FILTER_AFTER]: [],
                [v.LWr.FILTER_PINNED]: null,
                [v.LWr.FILTER_AUTHOR_TYPE]: [],
            },
            l = [],
            c = 0;
        e.forEach((e) => {
            if (v.T2E.test(e.type))
                switch (e.type) {
                    case v.LWr.ANSWER_USERNAME_FROM:
                        if (a.has(v.LWr.FILTER_FROM)) {
                            let r = t[v.LWr.FILTER_FROM],
                                n = e.getData("userId");
                            r.push(n), (c += 1);
                        }
                        break;
                    case v.LWr.ANSWER_USERNAME_MENTIONS:
                        if (a.has(v.LWr.FILTER_MENTIONS)) {
                            let r = t[v.LWr.FILTER_MENTIONS],
                                n = e.getData("userId");
                            r.push(n), (c += 1);
                        }
                        break;
                    case v.LWr.ANSWER_HAS:
                        let u = t[v.LWr.FILTER_HAS],
                            d = e.getData("has");
                        u.push(d), (c += 1);
                        break;
                    case v.LWr.ANSWER_IN:
                        if (a.has(v.LWr.FILTER_IN)) {
                            var h;
                            let r = t[v.LWr.FILTER_IN],
                                n = null != (h = e.getData("channelIds")) ? h : [];
                            r.push(...n), (c += 1);
                        }
                        break;
                    case v.LWr.ANSWER_BEFORE:
                        let p = t[v.LWr.FILTER_BEFORE],
                            f = e.getData("end"),
                            g = {
                                query: r,
                                date: i()(f),
                                id: (0, o.A)(),
                            };
                        p.push(g), l.push(g), (c += 1);
                        break;
                    case v.LWr.ANSWER_ON:
                        let S = t[v.LWr.FILTER_ON],
                            E = e.getData("start"),
                            y = {
                                query: s,
                                date: i()(E),
                                id: (0, o.A)(),
                            };
                        S.push(y), l.push(y), (c += 1);
                        break;
                    case v.LWr.ANSWER_AFTER:
                        let _ = t[v.LWr.FILTER_AFTER],
                            m = e.getData("start"),
                            A = {
                                query: n,
                                date: i()(m),
                                id: (0, o.A)(),
                            };
                        _.push(A), l.push(A), (c += 1);
                        break;
                    case v.LWr.ANSWER_PINNED:
                        let b = t[v.LWr.FILTER_PINNED],
                            O = e.getData("pinned").toString();
                        null === b ? (b = O) : "true" !== b && "true" === O && (b = O),
                            (t[v.LWr.FILTER_PINNED] = b),
                            (c += 1);
                        break;
                    case v.LWr.ANSWER_AUTHOR_TYPE:
                        if (a.has(v.LWr.FILTER_AUTHOR_TYPE)) {
                            let r = t[v.LWr.FILTER_AUTHOR_TYPE],
                                n = e.getData("author_type");
                            r.push(n), (c += 1);
                        }
                }
        });
        let u = {
            [v.LWr.FILTER_FROM]: t[v.LWr.FILTER_FROM],
            [v.LWr.FILTER_MENTIONS]: t[v.LWr.FILTER_MENTIONS],
            [v.LWr.FILTER_HAS]: t[v.LWr.FILTER_HAS],
            [v.LWr.FILTER_IN]: t[v.LWr.FILTER_IN],
            dateFilters: l,
            [v.LWr.FILTER_AUTHOR_TYPE]: t[v.LWr.FILTER_AUTHOR_TYPE],
            [v.LWr.FILTER_PINNED]: t[v.LWr.FILTER_PINNED],
        };
        return {
            allPrefilledSearchFilters: t,
            totalFilters: c,
            prefilledSearchFilters: u,
            eligibleFilterTokens: a,
        };
    }, [e, r, n, s, a]);
}

function q(e, t) {
    return e === t || (0, s.isEqual)(e, t);
}

function z(e, t) {
    var r, n;
    if (e.length !== t.length) return !1;
    let l = new Map();
    for (let t of e) {
        let e = "".concat(t.query, ":").concat(t.date.valueOf()),
            n = null != (r = l.get(e)) ? r : 0;
        l.set(e, n + 1);
    }
    for (let e of t) {
        let t = "".concat(e.query, ":").concat(e.date.valueOf()),
            r = null != (n = l.get(t)) ? n : 0;
        if (0 === r) return !1;
        l.set(t, r - 1);
    }
    for (let e of l.values()) if (0 !== e) return !1;
    return !0;
}

function G(e) {
    let { nonFilterQueryString: t, filterQueryString: r } = e,
        n = +(r.length > 0),
        s = +(t.length > 0),
        a = O.E2 - t.length - s - n,
        i = l.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return r.length + t.length > a;
            },
            [r.length, a],
        ),
        o = l.useMemo(() => r.length + 18 > a, [r.length, a]),
        c = l.useCallback(() => {
            d.A.show({
                title: x.intl.string(x.t.nOqJcX),
                body: x.intl.string(x.t.zzAcsv),
                confirmText: x.intl.string(x.t["qcYY+/"]),
            });
        }, []);
    return {
        validateFilter: l.useCallback(
            (e, t) =>
                !i({
                    newFilterString: (function (e, t) {
                        let r,
                            n = b.Ay[e];
                        switch (e) {
                            case v.LWr.FILTER_FROM:
                            case v.LWr.FILTER_MENTIONS:
                                let l = f.default.getUser(t);
                                r = null == l ? t : "".concat(l.username);
                                break;
                            case v.LWr.FILTER_IN:
                                let s = p.A.getChannel(t);
                                if (null == s) r = t;
                                else {
                                    let e = (0, m.E3)(s);
                                    r = (0, m.TZ)(e);
                                }
                                break;
                            case v.LWr.FILTER_HAS:
                            case v.LWr.FILTER_PINNED:
                            case v.LWr.FILTER_AUTHOR_TYPE:
                            default:
                                r = t;
                        }
                        return n.key + " " + r;
                    })(e, t),
                }) || (c(), !1),
            [i, c],
        ),
        validateDateFilter: l.useCallback(() => !o || (c(), !1), [o, c]),
    };
}
