l.d(t, {
    CT: () => X,
    H3: () => Z,
    Ht: () => z,
    KD: () => Q,
    Ky: () => K,
    TT: () => B,
    _2: () => V,
    dY: () => ee,
    ps: () => $,
    u2: () => q,
    vj: () => G,
    wf: () => J,
}),
    l(321073),
    l(667532);
var r = l(627968),
    n = l(64700),
    a = l(435558),
    u = l(989349),
    s = l.n(u),
    i = l(132500),
    o = l(17928),
    c = l(778712),
    f = l(173936),
    g = l(11023),
    h = l(642846),
    d = l(514042),
    E = l(428689),
    L = l(191023),
    p = l(7807),
    R = l(797285),
    T = l(292801),
    A = l(950305),
    _ = l(430392),
    b = l(39619),
    I = l(157559),
    S = l(713654),
    y = l(734057),
    k = l(287809),
    F = l(403362),
    N = l(562153),
    C = l(427262),
    W = l(256796),
    m = l(692986),
    v = l(822382),
    O = l(304578),
    M = l(674142),
    P = l(315059),
    D = l(742788),
    x = l(652215),
    j = l(375708);
function U(e) {
    let { searchContext: t, filter: l, queryString: r } = e,
        a = (0, o.bG)([m.A], () => m.A.getState(t), [t], o.My),
        u = n.useMemo(() => {
            let e = a.autocompletes[0];
            return null != e && e.group === l ? e.results : [];
        }, [a.autocompletes, l]),
        s = n.useMemo(() => {
            let e = O.Ay[l].key;
            return `${e} ${r}`;
        }, [l, r]),
        i = n.useCallback(() => {
            let e = (0, v._o)(s),
                l = (0, v.zZ)(e, s.length - 1, s.length - 1);
            W.A.updateAutocompleteQuery({ searchContext: t, tokens: e, cursorScope: l, queryString: s });
        }, [t, s]),
        c = n.useCallback(() => {
            i();
        }, [i]);
    return (
        n.useEffect(() => {
            r.trim().length > 0 && i();
        }, [s, t, i, r]),
        { filterAutocompleteResults: u, handleFocusFilter: c, autocompleteStoreState: a }
    );
}
function w(e) {
    let { user: t, guildId: l, channelId: r } = e,
        n = N.Ay.getName(l, r, t),
        a = t.getAvatarURL(l, (0, c.FT)(c._3.SIZE_24));
    return { value: t.id, label: n, key: t.id, id: t.id, leading: { type: "avatar", src: a }, trailing: t.username };
}
function $(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = n.useMemo(() => (0, v.mt)(e), [e]),
        a = n.useMemo(() => (0, v._b)(e), [e]),
        [u, s] = n.useState(l),
        [i, o] = n.useState(""),
        {
            filterAutocompleteResults: c,
            handleFocusFilter: f,
            autocompleteStoreState: g,
        } = U({ searchContext: e, filter: t, queryString: i }),
        h = n.useMemo(() => {
            let e = [],
                t = new Set();
            if (c.length > 0)
                c.forEach((l) => {
                    let n = l.user,
                        u = w({ user: n, guildId: r, channelId: a });
                    t.add(n.id), e.push(u);
                });
            else {
                let { tokens: l } = g,
                    n = l[l.length - 1];
                if (
                    null != n &&
                    (n.type === x.LWr.ANSWER_USERNAME_FROM || n.type === x.LWr.ANSWER_USERNAME_MENTIONS) &&
                    (0, O.sC)(n)
                ) {
                    let l = n.getData("userId"),
                        u = k.default.getUser(l);
                    if (null != u) {
                        let l = w({ user: u, guildId: r, channelId: a });
                        t.add(u.id), e.push(l);
                    }
                }
            }
            return (
                u.length > 0 &&
                    u.forEach((l) => {
                        if (t.has(l)) return;
                        let n = k.default.getUser(l);
                        if (null == n) return;
                        let u = w({ user: n, guildId: r, channelId: a });
                        t.add(l), e.unshift(u);
                    }),
                e
            );
        }, [g, c, u, r, a]),
        d = n.useCallback(() => {
            s([]), o("");
        }, []),
        E = n.useCallback(() => {
            o("");
        }, []),
        L = n.useCallback(
            (e) => {
                if (0 === u.length) return null;
                let t = O.Ay[e];
                return u
                    .map((e) => {
                        let l = k.default.getUser(e);
                        if (null == l) return null;
                        let r = C.Ay.getUserTag(l);
                        return "" === r ? null : `${t.key} ${r}`;
                    })
                    .filter(F.Vq)
                    .join(" ");
            },
            [u],
        );
    return {
        options: h,
        query: u,
        setQuery: s,
        setQueryString: o,
        handleClearFilter: d,
        getApplyQueryString: L,
        handleFocusFilter: f,
        handleBlurFilter: E,
    };
}
function H(e) {
    let t,
        { channel: l } = e;
    if (l.isDM()) {
        let e = l.getRecipientId(),
            r = k.default.getUser(e);
        null != r && (t = { type: "avatar", src: r.getAvatarURL(null, (0, c.FT)(c._3.SIZE_20)) });
    } else
        t = l.isGroupDM()
            ? (0, r.jsx)(P.A, { channel: l, avatarSize: c._3.SIZE_20, iconSize: "refresh_sm" })
            : (0, S.gU)(l);
    return { value: l.id, label: (0, v.E3)(l), key: l.id, id: l.id, leading: t };
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, r] = n.useState(t),
        [a, u] = n.useState(""),
        {
            filterAutocompleteResults: s,
            handleFocusFilter: i,
            autocompleteStoreState: o,
        } = U({ searchContext: e, filter: x.LWr.FILTER_IN, queryString: a }),
        c = n.useMemo(() => {
            let t = [],
                r = new Set();
            if (s.length > 0)
                s.forEach((e) => {
                    let l = e.channel,
                        n = H({ channel: l });
                    r.add(l.id), t.push(n);
                });
            else {
                let { tokens: l } = o,
                    n = l[l.length - 1];
                if (null != n && n.type === x.LWr.ANSWER_IN && (0, O.Yd)(n, e)) {
                    let e = n.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let l = y.A.getChannel(e);
                            if (null != l) {
                                let e = H({ channel: l });
                                r.add(l.id), t.push(e);
                            }
                        });
                }
            }
            return (
                l.length > 0 &&
                    l.forEach((e) => {
                        if (r.has(e)) return;
                        let l = y.A.getChannel(e);
                        if (null == l) return;
                        let n = H({ channel: l });
                        r.add(e), t.unshift(n);
                    }),
                t
            );
        }, [o, s, l, e]),
        f = n.useCallback(() => {
            r([]), u("");
        }, []),
        g = n.useCallback(() => {
            u("");
        }, []),
        h = n.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = O.Ay[e];
                return l
                    .map((e) => {
                        let l = y.A.getChannel(e);
                        if (null == l) return;
                        let r = (0, v.E3)(l),
                            n = (0, v.TZ)(r);
                        return `${t.key} ${n}`;
                    })
                    .join(" ");
            },
            [l],
        );
    return {
        options: c,
        query: l,
        setQuery: r,
        setQueryString: u,
        handleClearFilter: f,
        getApplyQueryString: h,
        handleFocusFilter: i,
        handleBlurFilter: g,
    };
}
function Q(e) {
    switch (e) {
        case j.intl.string(j.t.ZNR2fi):
            return f.q;
        case j.intl.string(j.t["20uQR3"]):
            return g.J;
        case j.intl.string(j.t.L4lxyE):
            return h.Y;
        case j.intl.string(j.t["AV/v6i"]):
            return d.o;
        case j.intl.string(j.t.XM9XGP):
            return E.n;
        case j.intl.string(j.t.TNLcpx):
            return L.x;
        case j.intl.string(j.t.F8Wf0e):
            return p.J;
        case j.intl.string(j.t.PJgX2h):
            return R.t;
        case j.intl.string(j.t.nrpA5E):
            return T.t;
        default:
            return null;
    }
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, r] = n.useState(t),
        { filterAutocompleteResults: a, handleFocusFilter: u } = U({
            searchContext: e,
            filter: x.LWr.FILTER_HAS,
            queryString: "",
        }),
        s = n.useMemo(() => {
            if (0 === a.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                l.length > 0 &&
                    l.forEach((l) => {
                        t.add(l), e.push({ value: l, label: l, key: l, id: l, leading: Q(l) });
                    }),
                a.length > 0 &&
                    a.forEach((l) => {
                        let { text: r } = l;
                        t.has(r) || (e.push({ value: r, label: r, key: r, id: r, leading: Q(r) }), t.add(r));
                    }),
                e
            );
        }, [a, l]),
        i = n.useCallback(() => {
            r([]);
        }, []),
        o = n.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = O.Ay[e];
                return l.map((e) => `${t.key} ${e}`).join(" ");
            },
            [l],
        );
    return { options: s, query: l, setQuery: r, handleClearFilter: i, getApplyQueryString: o, handleFocusFilter: u };
}
function Y() {
    return n.useMemo(() => {
        let e = O.Ay[x.LWr.FILTER_BEFORE],
            t = O.Ay[x.LWr.FILTER_AFTER],
            l = O.Ay[x.LWr.FILTER_ON];
        return {
            beforeFilter: e?.key ?? `${j.intl.string(j.t["qZ+7BA"])}:`,
            afterFilter: t?.key ?? `${j.intl.string(j.t.KSDx7M)}:`,
            duringFilter: l?.key ?? `${j.intl.string(j.t.h2NzSd)}:`,
        };
    }, []);
}
function K() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, l] = n.useState(e),
        r = n.useCallback(() => (0, i.A)(), []),
        a = n.useCallback((e) => e.date.isValid(), []),
        u = n.useMemo(() => t.filter(a), [t, a]),
        { beforeFilter: o, afterFilter: c, duringFilter: f } = Y(),
        g = n.useCallback(() => ({ query: o, date: s()(), id: r() }), [o, r]),
        h = n.useMemo(
            () => [
                { key: "Before", label: j.intl.string(j.t["ptL/DP"]), value: o },
                { key: "After", label: j.intl.string(j.t.waQeEV), value: c },
                { key: "During", label: j.intl.string(j.t.LT5TnZ), value: f },
            ],
            [o, c, f],
        ),
        d = n.useCallback((e) => {
            let { query: t, index: r } = e;
            l((e) => {
                let l = [...e];
                return (l[r] = { ...l[r], query: t }), l;
            });
        }, []),
        E = n.useCallback((e) => {
            let { date: t, index: r } = e;
            l((e) => {
                let l = [...e];
                return (l[r] = { ...l[r], date: t }), l;
            });
        }, []),
        L = n.useCallback(() => {
            l((e) => [...e, g()]);
        }, [g]),
        p = n.useCallback((e) => {
            l((t) => {
                let l = [...t];
                return l.splice(e, 1), l;
            });
        }, []),
        R = n.useCallback(() => {
            l([]);
        }, []),
        T = n.useCallback(
            () =>
                0 === u.length
                    ? null
                    : u
                          .map((e) => {
                              let { query: t, date: l } = e,
                                  r = l.format(x.ump);
                              return `${t} ${r}`;
                          })
                          .join(" "),
            [u],
        );
    return {
        options: h,
        dates: t,
        validDates: u,
        handleDateQueryChange: d,
        handleDateChange: E,
        handleAddDateFilter: L,
        handleRemoveDateFilter: p,
        handleClearDateFilter: R,
        getDateQueryString: T,
    };
}
function z(e) {
    switch (e) {
        case j.intl.string(j.t.tPZo4p):
            return A.n;
        case j.intl.string(j.t.JL7sRS):
            return _.C;
        case j.intl.string(j.t.WjkIKU):
            return b.X;
    }
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, r] = n.useState(t),
        { filterAutocompleteResults: a, handleFocusFilter: u } = U({
            searchContext: e,
            filter: x.LWr.FILTER_AUTHOR_TYPE,
            queryString: "",
        }),
        s = n.useMemo(() => {
            if (0 === a.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                l.length > 0 &&
                    l.forEach((l) => {
                        t.add(l), e.push({ value: l, label: l, key: l, id: l, leading: z(l) });
                    }),
                a.length > 0 &&
                    a.forEach((l) => {
                        let { text: r } = l;
                        t.has(r) || (e.push({ value: r, label: r, key: r, id: r, leading: z(r) }), t.add(r));
                    }),
                e
            );
        }, [a, l]),
        i = n.useCallback(() => {
            r([]);
        }, []),
        o = n.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = O.Ay[e];
                return l.map((e) => `${t.key} ${e}`).join(" ");
            },
            [l],
        );
    return { options: s, query: l, setQuery: r, handleClearFilter: i, getApplyQueryString: o, handleFocusFilter: u };
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [l, r] = n.useState(t),
        a = n.useMemo(() => {
            let t =
                O.Ay[x.LWr.FILTER_PINNED].getAutocompletions?.({ query: "", maxResults: 10, searchContext: e }) ?? [];
            if (0 === t.length && null === l) return [];
            let r = [];
            return (
                t.length > 0 &&
                    t.forEach((e) => {
                        let { text: t } = e;
                        r.push({ value: t, label: t, key: t });
                    }),
                r
            );
        }, [e, l]),
        u = n.useCallback(() => {
            r(null);
        }, []),
        s = n.useCallback(
            (e) => {
                if (null === l) return null;
                let t = O.Ay[e];
                return `${t.key} ${l}`;
            },
            [l],
        );
    return { options: a, query: l, setQuery: r, handleClearFilter: u, getApplyQueryString: s };
}
function G(e, t) {
    let { beforeFilter: l, afterFilter: r, duringFilter: a } = Y(),
        u = (0, M.o)(t);
    return n.useMemo(() => {
        let t = {
                [x.LWr.FILTER_FROM]: [],
                [x.LWr.FILTER_MENTIONS]: [],
                [x.LWr.FILTER_HAS]: [],
                [x.LWr.FILTER_IN]: [],
                [x.LWr.FILTER_ON]: [],
                [x.LWr.FILTER_BEFORE]: [],
                [x.LWr.FILTER_AFTER]: [],
                [x.LWr.FILTER_PINNED]: null,
                [x.LWr.FILTER_AUTHOR_TYPE]: [],
            },
            n = [],
            o = 0;
        e.forEach((e) => {
            if (x.T2E.test(e.type))
                switch (e.type) {
                    case x.LWr.ANSWER_USERNAME_FROM:
                        if (u.has(x.LWr.FILTER_FROM)) {
                            let l = t[x.LWr.FILTER_FROM],
                                r = e.getData("userId");
                            l.push(r), (o += 1);
                        }
                        break;
                    case x.LWr.ANSWER_USERNAME_MENTIONS:
                        if (u.has(x.LWr.FILTER_MENTIONS)) {
                            let l = t[x.LWr.FILTER_MENTIONS],
                                r = e.getData("userId");
                            l.push(r), (o += 1);
                        }
                        break;
                    case x.LWr.ANSWER_HAS:
                        let c = t[x.LWr.FILTER_HAS],
                            f = e.getData("has");
                        c.push((0, O.ok)(f)), (o += 1);
                        break;
                    case x.LWr.ANSWER_IN:
                        if (u.has(x.LWr.FILTER_IN)) {
                            let l = t[x.LWr.FILTER_IN],
                                r = e.getData("channelIds") ?? [];
                            l.push(...r), (o += 1);
                        }
                        break;
                    case x.LWr.ANSWER_BEFORE:
                        let g = t[x.LWr.FILTER_BEFORE],
                            h = e.getData("end"),
                            d = { query: l, date: s()(h), id: (0, i.A)() };
                        g.push(d), n.push(d), (o += 1);
                        break;
                    case x.LWr.ANSWER_ON:
                        let E = t[x.LWr.FILTER_ON],
                            L = e.getData("start"),
                            p = { query: a, date: s()(L), id: (0, i.A)() };
                        E.push(p), n.push(p), (o += 1);
                        break;
                    case x.LWr.ANSWER_AFTER:
                        let R = t[x.LWr.FILTER_AFTER],
                            T = e.getData("start"),
                            A = { query: r, date: s()(T).subtract(1, "day"), id: (0, i.A)() };
                        R.push(A), n.push(A), (o += 1);
                        break;
                    case x.LWr.ANSWER_PINNED:
                        let _ = t[x.LWr.FILTER_PINNED],
                            b = e.getData("pinned").toString();
                        null === _ ? (_ = b) : "true" !== _ && "true" === b && (_ = b),
                            (t[x.LWr.FILTER_PINNED] = _),
                            (o += 1);
                        break;
                    case x.LWr.ANSWER_AUTHOR_TYPE:
                        if (u.has(x.LWr.FILTER_AUTHOR_TYPE)) {
                            let l = t[x.LWr.FILTER_AUTHOR_TYPE],
                                r = e.getData("author_type");
                            l.push((0, O.lq)(r)), (o += 1);
                        }
                }
        });
        let c = {
            [x.LWr.FILTER_FROM]: t[x.LWr.FILTER_FROM],
            [x.LWr.FILTER_MENTIONS]: t[x.LWr.FILTER_MENTIONS],
            [x.LWr.FILTER_HAS]: t[x.LWr.FILTER_HAS],
            [x.LWr.FILTER_IN]: t[x.LWr.FILTER_IN],
            dateFilters: n,
            [x.LWr.FILTER_AUTHOR_TYPE]: t[x.LWr.FILTER_AUTHOR_TYPE],
            [x.LWr.FILTER_PINNED]: t[x.LWr.FILTER_PINNED],
        };
        return { allPrefilledSearchFilters: t, totalFilters: o, prefilledSearchFilters: c, eligibleFilterTokens: u };
    }, [e, l, r, a, u]);
}
function J(e, t) {
    return e === t || (0, a.isEqual)(e, t);
}
function V(e, t) {
    if (e.length !== t.length) return !1;
    let l = new Map();
    for (let t of e) {
        let e = `${t.query}:${t.date.valueOf()}`,
            r = l.get(e) ?? 0;
        l.set(e, r + 1);
    }
    for (let e of t) {
        let t = `${e.query}:${e.date.valueOf()}`,
            r = l.get(t) ?? 0;
        if (0 === r) return !1;
        l.set(t, r - 1);
    }
    for (let e of l.values()) if (0 !== e) return !1;
    return !0;
}
function ee(e) {
    let { nonFilterQueryString: t, filterQueryString: l } = e,
        r = +(l.length > 0),
        a = +(t.length > 0),
        u = D.E - t.length - a - r,
        s = n.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return l.length + t.length > u;
            },
            [l.length, u],
        ),
        i = n.useMemo(() => l.length + 18 > u, [l.length, u]),
        o = n.useCallback(() => {
            I.A.show({
                title: j.intl.string(j.t.nOqJcX),
                body: j.intl.string(j.t.zzAcsv),
                confirmText: j.intl.string(j.t["qcYY+/"]),
            });
        }, []);
    return {
        validateFilter: n.useCallback(
            (e, t) =>
                !s({
                    newFilterString: (function (e, t) {
                        let l,
                            r = O.Ay[e];
                        switch (e) {
                            case x.LWr.FILTER_FROM:
                            case x.LWr.FILTER_MENTIONS:
                                let n = k.default.getUser(t);
                                l = null == n ? t : `${n.username}`;
                                break;
                            case x.LWr.FILTER_IN:
                                let a = y.A.getChannel(t);
                                if (null == a) l = t;
                                else {
                                    let e = (0, v.E3)(a);
                                    l = (0, v.TZ)(e);
                                }
                                break;
                            case x.LWr.FILTER_HAS:
                            case x.LWr.FILTER_PINNED:
                            case x.LWr.FILTER_AUTHOR_TYPE:
                            default:
                                l = t;
                        }
                        return r.key + " " + l;
                    })(e, t),
                }) || (o(), !1),
            [s, o],
        ),
        validateDateFilter: n.useCallback(() => !i || (o(), !1), [i, o]),
    };
}
