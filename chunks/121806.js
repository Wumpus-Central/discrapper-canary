r.d(t, {
    CT: () => Z,
    H3: () => K,
    Ht: () => Y,
    KD: () => q,
    Ky: () => B,
    TT: () => U,
    _2: () => J,
    dY: () => ee,
    ps: () => $,
    u2: () => G,
    vj: () => V,
    wf: () => X,
}),
    r(321073),
    r(667532);
var l = r(627968),
    n = r(64700),
    s = r(735438),
    a = r(989349),
    i = r.n(a),
    u = r(132500),
    o = r(17928),
    c = r(778712),
    h = r(173936),
    d = r(11023),
    p = r(642846),
    f = r(514042),
    E = r(428689),
    g = r(191023),
    S = r(7807),
    m = r(797285),
    A = r(292801),
    R = r(950305),
    I = r(430392),
    x = r(39619),
    L = r(157559),
    _ = r(713654),
    y = r(734057),
    T = r(287809),
    b = r(403362),
    N = r(562153),
    F = r(427262),
    v = r(256796),
    C = r(692986),
    j = r(822382),
    k = r(304578),
    W = r(674142),
    O = r(381687),
    M = r(315059),
    P = r(652215),
    D = r(985018);
function w(e) {
    let { searchContext: t, filter: r, queryString: l } = e,
        s = (0, o.bG)([C.A], () => C.A.getState(t), [t], o.My),
        a = n.useMemo(() => {
            let e = s.autocompletes[0];
            return null != e && e.group === r ? e.results : [];
        }, [s.autocompletes, r]),
        i = n.useMemo(() => {
            let e = k.Ay[r].key;
            return `${e} ${l}`;
        }, [r, l]),
        u = n.useCallback(() => {
            let e = (0, j._o)(i),
                r = (0, j.zZ)(e, i.length - 1, i.length - 1);
            v.A.updateAutocompleteQuery({ searchContext: t, tokens: e, cursorScope: r, queryString: i });
        }, [t, i]),
        c = n.useCallback(() => {
            u();
        }, [u]);
    return (
        n.useEffect(() => {
            l.trim().length > 0 && u();
        }, [i, t, u, l]),
        { filterAutocompleteResults: a, handleFocusFilter: c, autocompleteStoreState: s }
    );
}
function H(e) {
    let { user: t, guildId: r, channelId: l } = e,
        n = N.Ay.getName(r, l, t),
        s = t.getAvatarURL(r, (0, c.FT)(c._3.SIZE_24));
    return { value: t.id, label: n, key: t.id, id: t.id, leading: { type: "avatar", src: s }, trailing: t.username };
}
function $(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        l = n.useMemo(() => (0, j.mt)(e), [e]),
        s = n.useMemo(() => (0, j._b)(e), [e]),
        [a, i] = n.useState(r),
        [u, o] = n.useState(""),
        {
            filterAutocompleteResults: c,
            handleFocusFilter: h,
            autocompleteStoreState: d,
        } = w({ searchContext: e, filter: t, queryString: u }),
        p = n.useMemo(() => {
            let e = [],
                t = new Set();
            if (c.length > 0)
                c.forEach((r) => {
                    let n = r.user,
                        a = H({ user: n, guildId: l, channelId: s });
                    t.add(n.id), e.push(a);
                });
            else {
                let { tokens: r } = d,
                    n = r[r.length - 1];
                if (
                    null != n &&
                    (n.type === P.LWr.ANSWER_USERNAME_FROM || n.type === P.LWr.ANSWER_USERNAME_MENTIONS) &&
                    (0, k.sC)(n)
                ) {
                    let r = n.getData("userId"),
                        a = T.default.getUser(r);
                    if (null != a) {
                        let r = H({ user: a, guildId: l, channelId: s });
                        t.add(a.id), e.push(r);
                    }
                }
            }
            return (
                a.length > 0 &&
                    a.forEach((r) => {
                        if (t.has(r)) return;
                        let n = T.default.getUser(r);
                        if (null == n) return;
                        let a = H({ user: n, guildId: l, channelId: s });
                        t.add(r), e.unshift(a);
                    }),
                e
            );
        }, [d, c, a, l, s]),
        f = n.useCallback(() => {
            i([]), o("");
        }, []),
        E = n.useCallback(() => {
            o("");
        }, []),
        g = n.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = k.Ay[e];
                return a
                    .map((e) => {
                        let r = T.default.getUser(e);
                        if (null == r) return null;
                        let l = F.Ay.getUserTag(r);
                        return "" === l ? null : `${t.key} ${l}`;
                    })
                    .filter(b.Vq)
                    .join(" ");
            },
            [a],
        );
    return {
        options: p,
        query: a,
        setQuery: i,
        setQueryString: o,
        handleClearFilter: f,
        getApplyQueryString: g,
        handleFocusFilter: h,
        handleBlurFilter: E,
    };
}
function z(e) {
    let t,
        { channel: r } = e;
    if (r.isDM()) {
        let e = r.getRecipientId(),
            l = T.default.getUser(e);
        null != l && (t = { type: "avatar", src: l.getAvatarURL(null, (0, c.FT)(c._3.SIZE_20)) });
    } else
        t = r.isGroupDM()
            ? (0, l.jsx)(M.A, { channel: r, avatarSize: c._3.SIZE_20, iconSize: "refresh_sm" })
            : (0, _.gU)(r);
    return { value: r.id, label: (0, j.E3)(r), key: r.id, id: r.id, leading: t };
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, l] = n.useState(t),
        [s, a] = n.useState(""),
        {
            filterAutocompleteResults: i,
            handleFocusFilter: u,
            autocompleteStoreState: o,
        } = w({ searchContext: e, filter: P.LWr.FILTER_IN, queryString: s }),
        c = n.useMemo(() => {
            let t = [],
                l = new Set();
            if (i.length > 0)
                i.forEach((e) => {
                    let r = e.channel,
                        n = z({ channel: r });
                    l.add(r.id), t.push(n);
                });
            else {
                let { tokens: r } = o,
                    n = r[r.length - 1];
                if (null != n && n.type === P.LWr.ANSWER_IN && (0, k.Yd)(n, e)) {
                    let e = n.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let r = y.A.getChannel(e);
                            if (null != r) {
                                let e = z({ channel: r });
                                l.add(r.id), t.push(e);
                            }
                        });
                }
            }
            return (
                r.length > 0 &&
                    r.forEach((e) => {
                        if (l.has(e)) return;
                        let r = y.A.getChannel(e);
                        if (null == r) return;
                        let n = z({ channel: r });
                        l.add(e), t.unshift(n);
                    }),
                t
            );
        }, [o, i, r, e]),
        h = n.useCallback(() => {
            l([]), a("");
        }, []),
        d = n.useCallback(() => {
            a("");
        }, []),
        p = n.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = k.Ay[e];
                return r
                    .map((e) => {
                        let r = y.A.getChannel(e);
                        if (null == r) return;
                        let l = (0, j.E3)(r),
                            n = (0, j.TZ)(l);
                        return `${t.key} ${n}`;
                    })
                    .join(" ");
            },
            [r],
        );
    return {
        options: c,
        query: r,
        setQuery: l,
        setQueryString: a,
        handleClearFilter: h,
        getApplyQueryString: p,
        handleFocusFilter: u,
        handleBlurFilter: d,
    };
}
function q(e) {
    switch (e) {
        case D.intl.string(D.t.ZNR2fi):
            return h.q;
        case D.intl.string(D.t["20uQR3"]):
            return d.J;
        case D.intl.string(D.t.L4lxyE):
            return p.Y;
        case D.intl.string(D.t["AV/v6i"]):
            return f.o;
        case D.intl.string(D.t.XM9XGP):
            return E.n;
        case D.intl.string(D.t.TNLcpx):
            return g.x;
        case D.intl.string(D.t.F8Wf0e):
            return S.J;
        case D.intl.string(D.t.PJgX2h):
            return m.t;
        case D.intl.string(D.t.nrpA5E):
            return A.t;
        default:
            return null;
    }
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, l] = n.useState(t),
        { filterAutocompleteResults: s, handleFocusFilter: a } = w({
            searchContext: e,
            filter: P.LWr.FILTER_HAS,
            queryString: "",
        }),
        i = n.useMemo(() => {
            if (0 === s.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((r) => {
                        t.add(r), e.push({ value: r, label: r, key: r, id: r, leading: q(r) });
                    }),
                s.length > 0 &&
                    s.forEach((r) => {
                        let { text: l } = r;
                        t.has(l) || (e.push({ value: l, label: l, key: l, id: l, leading: q(l) }), t.add(l));
                    }),
                e
            );
        }, [s, r]),
        u = n.useCallback(() => {
            l([]);
        }, []),
        o = n.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = k.Ay[e];
                return r.map((e) => `${t.key} ${e}`).join(" ");
            },
            [r],
        );
    return { options: i, query: r, setQuery: l, handleClearFilter: u, getApplyQueryString: o, handleFocusFilter: a };
}
let Q = () =>
    n.useMemo(() => {
        let e = k.Ay[P.LWr.FILTER_BEFORE],
            t = k.Ay[P.LWr.FILTER_AFTER],
            r = k.Ay[P.LWr.FILTER_ON];
        return {
            beforeFilter: e?.key ?? `${D.intl.string(D.t["qZ+7BA"])}:`,
            afterFilter: t?.key ?? `${D.intl.string(D.t.KSDx7M)}:`,
            duringFilter: r?.key ?? `${D.intl.string(D.t.h2NzSd)}:`,
        };
    }, []);
function B() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, r] = n.useState(e),
        l = n.useCallback(() => (0, u.A)(), []),
        s = n.useCallback((e) => e.date.isValid(), []),
        a = n.useMemo(() => t.filter(s), [t, s]),
        { beforeFilter: o, afterFilter: c, duringFilter: h } = Q(),
        d = n.useCallback(() => ({ query: o, date: i()(), id: l() }), [o, l]),
        p = n.useMemo(
            () => [
                { key: "Before", label: D.intl.string(D.t["ptL/DP"]), value: o },
                { key: "After", label: D.intl.string(D.t.waQeEV), value: c },
                { key: "During", label: D.intl.string(D.t.LT5TnZ), value: h },
            ],
            [o, c, h],
        ),
        f = n.useCallback((e) => {
            let { query: t, index: l } = e;
            r((e) => {
                let r = [...e];
                return (r[l] = { ...r[l], query: t }), r;
            });
        }, []),
        E = n.useCallback((e) => {
            let { date: t, index: l } = e;
            r((e) => {
                let r = [...e];
                return (r[l] = { ...r[l], date: t }), r;
            });
        }, []),
        g = n.useCallback(() => {
            r((e) => [...e, d()]);
        }, [d]),
        S = n.useCallback((e) => {
            r((t) => {
                let r = [...t];
                return r.splice(e, 1), r;
            });
        }, []),
        m = n.useCallback(() => {
            r([]);
        }, []),
        A = n.useCallback(
            () =>
                0 === a.length
                    ? null
                    : a
                          .map((e) => {
                              let { query: t, date: r } = e,
                                  l = r.format(P.ump);
                              return `${t} ${l}`;
                          })
                          .join(" "),
            [a],
        );
    return {
        options: p,
        dates: t,
        validDates: a,
        handleDateQueryChange: f,
        handleDateChange: E,
        handleAddDateFilter: g,
        handleRemoveDateFilter: S,
        handleClearDateFilter: m,
        getDateQueryString: A,
    };
}
function Y(e) {
    switch (e) {
        case D.intl.string(D.t.tPZo4p):
            return R.n;
        case D.intl.string(D.t.JL7sRS):
            return I.C;
        case D.intl.string(D.t.WjkIKU):
            return x.X;
    }
}
function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, l] = n.useState(t),
        { filterAutocompleteResults: s, handleFocusFilter: a } = w({
            searchContext: e,
            filter: P.LWr.FILTER_AUTHOR_TYPE,
            queryString: "",
        }),
        i = n.useMemo(() => {
            if (0 === s.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((r) => {
                        t.add(r), e.push({ value: r, label: r, key: r, id: r, leading: Y(r) });
                    }),
                s.length > 0 &&
                    s.forEach((r) => {
                        let { text: l } = r;
                        t.has(l) || (e.push({ value: l, label: l, key: l, id: l, leading: Y(l) }), t.add(l));
                    }),
                e
            );
        }, [s, r]),
        u = n.useCallback(() => {
            l([]);
        }, []),
        o = n.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = k.Ay[e];
                return r.map((e) => `${t.key} ${e}`).join(" ");
            },
            [r],
        );
    return { options: i, query: r, setQuery: l, handleClearFilter: u, getApplyQueryString: o, handleFocusFilter: a };
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [r, l] = n.useState(t),
        s = n.useMemo(() => {
            let t =
                k.Ay[P.LWr.FILTER_PINNED].getAutocompletions?.({ query: "", maxResults: 10, searchContext: e }) ?? [];
            if (0 === t.length && null === r) return [];
            let l = [];
            return (
                t.length > 0 &&
                    t.forEach((e) => {
                        let { text: t } = e;
                        l.push({ value: t, label: t, key: t });
                    }),
                l
            );
        }, [e, r]),
        a = n.useCallback(() => {
            l(null);
        }, []),
        i = n.useCallback(
            (e) => {
                if (null === r) return null;
                let t = k.Ay[e];
                return `${t.key} ${r}`;
            },
            [r],
        );
    return { options: s, query: r, setQuery: l, handleClearFilter: a, getApplyQueryString: i };
}
function V(e, t) {
    let { beforeFilter: r, afterFilter: l, duringFilter: s } = Q(),
        a = (0, W.o)(t);
    return n.useMemo(() => {
        let t = {
                [P.LWr.FILTER_FROM]: [],
                [P.LWr.FILTER_MENTIONS]: [],
                [P.LWr.FILTER_HAS]: [],
                [P.LWr.FILTER_IN]: [],
                [P.LWr.FILTER_ON]: [],
                [P.LWr.FILTER_BEFORE]: [],
                [P.LWr.FILTER_AFTER]: [],
                [P.LWr.FILTER_PINNED]: null,
                [P.LWr.FILTER_AUTHOR_TYPE]: [],
            },
            n = [],
            o = 0;
        e.forEach((e) => {
            if (P.T2E.test(e.type))
                switch (e.type) {
                    case P.LWr.ANSWER_USERNAME_FROM:
                        if (a.has(P.LWr.FILTER_FROM)) {
                            let r = t[P.LWr.FILTER_FROM],
                                l = e.getData("userId");
                            r.push(l), (o += 1);
                        }
                        break;
                    case P.LWr.ANSWER_USERNAME_MENTIONS:
                        if (a.has(P.LWr.FILTER_MENTIONS)) {
                            let r = t[P.LWr.FILTER_MENTIONS],
                                l = e.getData("userId");
                            r.push(l), (o += 1);
                        }
                        break;
                    case P.LWr.ANSWER_HAS:
                        let c = t[P.LWr.FILTER_HAS],
                            h = e.getData("has");
                        c.push((0, k.ok)(h)), (o += 1);
                        break;
                    case P.LWr.ANSWER_IN:
                        if (a.has(P.LWr.FILTER_IN)) {
                            let r = t[P.LWr.FILTER_IN],
                                l = e.getData("channelIds") ?? [];
                            r.push(...l), (o += 1);
                        }
                        break;
                    case P.LWr.ANSWER_BEFORE:
                        let d = t[P.LWr.FILTER_BEFORE],
                            p = e.getData("end"),
                            f = { query: r, date: i()(p), id: (0, u.A)() };
                        d.push(f), n.push(f), (o += 1);
                        break;
                    case P.LWr.ANSWER_ON:
                        let E = t[P.LWr.FILTER_ON],
                            g = e.getData("start"),
                            S = { query: s, date: i()(g), id: (0, u.A)() };
                        E.push(S), n.push(S), (o += 1);
                        break;
                    case P.LWr.ANSWER_AFTER:
                        let m = t[P.LWr.FILTER_AFTER],
                            A = e.getData("start"),
                            R = { query: l, date: i()(A), id: (0, u.A)() };
                        m.push(R), n.push(R), (o += 1);
                        break;
                    case P.LWr.ANSWER_PINNED:
                        let I = t[P.LWr.FILTER_PINNED],
                            x = e.getData("pinned").toString();
                        null === I ? (I = x) : "true" !== I && "true" === x && (I = x),
                            (t[P.LWr.FILTER_PINNED] = I),
                            (o += 1);
                        break;
                    case P.LWr.ANSWER_AUTHOR_TYPE:
                        if (a.has(P.LWr.FILTER_AUTHOR_TYPE)) {
                            let r = t[P.LWr.FILTER_AUTHOR_TYPE],
                                l = e.getData("author_type");
                            r.push((0, k.lq)(l)), (o += 1);
                        }
                }
        });
        let c = {
            [P.LWr.FILTER_FROM]: t[P.LWr.FILTER_FROM],
            [P.LWr.FILTER_MENTIONS]: t[P.LWr.FILTER_MENTIONS],
            [P.LWr.FILTER_HAS]: t[P.LWr.FILTER_HAS],
            [P.LWr.FILTER_IN]: t[P.LWr.FILTER_IN],
            dateFilters: n,
            [P.LWr.FILTER_AUTHOR_TYPE]: t[P.LWr.FILTER_AUTHOR_TYPE],
            [P.LWr.FILTER_PINNED]: t[P.LWr.FILTER_PINNED],
        };
        return { allPrefilledSearchFilters: t, totalFilters: o, prefilledSearchFilters: c, eligibleFilterTokens: a };
    }, [e, r, l, s, a]);
}
function X(e, t) {
    return e === t || (0, s.isEqual)(e, t);
}
function J(e, t) {
    if (e.length !== t.length) return !1;
    let r = new Map();
    for (let t of e) {
        let e = `${t.query}:${t.date.valueOf()}`,
            l = r.get(e) ?? 0;
        r.set(e, l + 1);
    }
    for (let e of t) {
        let t = `${e.query}:${e.date.valueOf()}`,
            l = r.get(t) ?? 0;
        if (0 === l) return !1;
        r.set(t, l - 1);
    }
    for (let e of r.values()) if (0 !== e) return !1;
    return !0;
}
function ee(e) {
    let { nonFilterQueryString: t, filterQueryString: r } = e,
        l = +(r.length > 0),
        s = +(t.length > 0),
        a = O.MAX_LENGTH - t.length - s - l,
        i = n.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return r.length + t.length > a;
            },
            [r.length, a],
        ),
        u = n.useMemo(() => r.length + 18 > a, [r.length, a]),
        o = n.useCallback(() => {
            L.A.show({
                title: D.intl.string(D.t.nOqJcX),
                body: D.intl.string(D.t.zzAcsv),
                confirmText: D.intl.string(D.t["qcYY+/"]),
            });
        }, []);
    return {
        validateFilter: n.useCallback(
            (e, t) =>
                !i({
                    newFilterString: (function (e, t) {
                        let r,
                            l = k.Ay[e];
                        switch (e) {
                            case P.LWr.FILTER_FROM:
                            case P.LWr.FILTER_MENTIONS:
                                let n = T.default.getUser(t);
                                r = null == n ? t : `${n.username}`;
                                break;
                            case P.LWr.FILTER_IN:
                                let s = y.A.getChannel(t);
                                if (null == s) r = t;
                                else {
                                    let e = (0, j.E3)(s);
                                    r = (0, j.TZ)(e);
                                }
                                break;
                            case P.LWr.FILTER_HAS:
                            case P.LWr.FILTER_PINNED:
                            case P.LWr.FILTER_AUTHOR_TYPE:
                            default:
                                r = t;
                        }
                        return l.key + " " + r;
                    })(e, t),
                }) || (o(), !1),
            [i, o],
        ),
        validateDateFilter: n.useCallback(() => !u || (o(), !1), [u, o]),
    };
}
