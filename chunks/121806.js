r.d(t, {
    CT: () => V,
    H3: () => Y,
    Ht: () => G,
    KD: () => Q,
    Ky: () => K,
    TT: () => q,
    _2: () => X,
    dY: () => ee,
    ps: () => U,
    u2: () => z,
    vj: () => Z,
    wf: () => J,
}),
    r(321073),
    r(667532);
var n = r(627968),
    s = r(64700),
    l = r(735438),
    a = r(989349),
    i = r.n(a),
    o = r(835245),
    u = r(311907),
    c = r(778712),
    h = r(173936),
    d = r(11023),
    _ = r(642846),
    E = r(514042),
    S = r(428689),
    f = r(191023),
    p = r(7807),
    g = r(797285),
    A = r(292801),
    y = r(950305),
    R = r(430392),
    m = r(39619),
    I = r(157559),
    T = r(713654),
    L = r(734057),
    x = r(287809),
    b = r(403362),
    N = r(562153),
    C = r(427262),
    F = r(256796),
    v = r(692986),
    O = r(822382),
    W = r(771650),
    k = r(674142),
    M = r(907745),
    w = r(315059),
    H = r(652215),
    j = r(985018);
function D(e) {
    let { searchContext: t, filter: r, queryString: n } = e,
        l = (0, u.bG)([v.A], () => v.A.getState(t), [t], u.My),
        a = s.useMemo(() => {
            let e = l.autocompletes[0];
            return null != e && e.group === r ? e.results : [];
        }, [l.autocompletes, r]),
        i = s.useMemo(() => {
            let e = W.Ay[r].key;
            return `${e} ${n}`;
        }, [r, n]),
        o = s.useCallback(() => {
            let e = (0, O._o)(i),
                r = (0, O.zZ)(e, i.length - 1, i.length - 1);
            F.A.updateAutocompleteQuery({ searchContext: t, tokens: e, cursorScope: r, queryString: i });
        }, [t, i]),
        c = s.useCallback(() => {
            o();
        }, [o]);
    return (
        s.useEffect(() => {
            n.trim().length > 0 && o();
        }, [i, t, o, n]),
        { filterAutocompleteResults: a, handleFocusFilter: c, autocompleteStoreState: l }
    );
}
function P(e) {
    let { user: t, guildId: r, channelId: n } = e,
        s = N.Ay.getName(r, n, t),
        l = t.getAvatarURL(r, (0, c.FT)(c._3.SIZE_24));
    return { value: t.id, label: s, key: t.id, id: t.id, leading: { type: "avatar", src: l }, trailing: t.username };
}
function U(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = s.useMemo(() => (0, O.mt)(e), [e]),
        l = s.useMemo(() => (0, O._b)(e), [e]),
        [a, i] = s.useState(r),
        [o, u] = s.useState(""),
        {
            filterAutocompleteResults: c,
            handleFocusFilter: h,
            autocompleteStoreState: d,
        } = D({ searchContext: e, filter: t, queryString: o }),
        _ = s.useMemo(() => {
            let e = [],
                t = new Set();
            if (c.length > 0)
                c.forEach((r) => {
                    let s = r.user,
                        a = P({ user: s, guildId: n, channelId: l });
                    t.add(s.id), e.push(a);
                });
            else {
                let { tokens: r } = d,
                    s = r[r.length - 1];
                if (
                    null != s &&
                    (s.type === H.LWr.ANSWER_USERNAME_FROM || s.type === H.LWr.ANSWER_USERNAME_MENTIONS) &&
                    (0, W.sC)(s)
                ) {
                    let r = s.getData("userId"),
                        a = x.default.getUser(r);
                    if (null != a) {
                        let r = P({ user: a, guildId: n, channelId: l });
                        t.add(a.id), e.push(r);
                    }
                }
            }
            return (
                a.length > 0 &&
                    a.forEach((r) => {
                        if (t.has(r)) return;
                        let s = x.default.getUser(r);
                        if (null == s) return;
                        let a = P({ user: s, guildId: n, channelId: l });
                        t.add(r), e.unshift(a);
                    }),
                e
            );
        }, [d, c, a, n, l]),
        E = s.useCallback(() => {
            i([]), u("");
        }, []),
        S = s.useCallback(() => {
            u("");
        }, []),
        f = s.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = W.Ay[e];
                return a
                    .map((e) => {
                        let r = x.default.getUser(e);
                        if (null == r) return null;
                        let n = C.Ay.getUserTag(r);
                        return "" === n ? null : `${t.key} ${n}`;
                    })
                    .filter(b.Vq)
                    .join(" ");
            },
            [a],
        );
    return {
        options: _,
        query: a,
        setQuery: i,
        setQueryString: u,
        handleClearFilter: E,
        getApplyQueryString: f,
        handleFocusFilter: h,
        handleBlurFilter: S,
    };
}
function $(e) {
    let t,
        { channel: r } = e;
    if (r.isDM()) {
        let e = r.getRecipientId(),
            n = x.default.getUser(e);
        null != n && (t = { type: "avatar", src: n.getAvatarURL(null, (0, c.FT)(c._3.SIZE_20)) });
    } else
        t = r.isGroupDM()
            ? (0, n.jsx)(w.A, { channel: r, avatarSize: c._3.SIZE_20, iconSize: "refresh_sm" })
            : (0, T.gU)(r);
    return { value: r.id, label: (0, O.E3)(r), key: r.id, id: r.id, leading: t };
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = s.useState(t),
        [l, a] = s.useState(""),
        {
            filterAutocompleteResults: i,
            handleFocusFilter: o,
            autocompleteStoreState: u,
        } = D({ searchContext: e, filter: H.LWr.FILTER_IN, queryString: l }),
        c = s.useMemo(() => {
            let t = [],
                n = new Set();
            if (i.length > 0)
                i.forEach((e) => {
                    let r = e.channel,
                        s = $({ channel: r });
                    n.add(r.id), t.push(s);
                });
            else {
                let { tokens: r } = u,
                    s = r[r.length - 1];
                if (null != s && s.type === H.LWr.ANSWER_IN && (0, W.Yd)(s, e)) {
                    let e = s.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let r = L.A.getChannel(e);
                            if (null != r) {
                                let e = $({ channel: r });
                                n.add(r.id), t.push(e);
                            }
                        });
                }
            }
            return (
                r.length > 0 &&
                    r.forEach((e) => {
                        if (n.has(e)) return;
                        let r = L.A.getChannel(e);
                        if (null == r) return;
                        let s = $({ channel: r });
                        n.add(e), t.unshift(s);
                    }),
                t
            );
        }, [u, i, r, e]),
        h = s.useCallback(() => {
            n([]), a("");
        }, []),
        d = s.useCallback(() => {
            a("");
        }, []),
        _ = s.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = W.Ay[e];
                return r
                    .map((e) => {
                        let r = L.A.getChannel(e);
                        if (null == r) return;
                        let n = (0, O.E3)(r),
                            s = (0, O.TZ)(n);
                        return `${t.key} ${s}`;
                    })
                    .join(" ");
            },
            [r],
        );
    return {
        options: c,
        query: r,
        setQuery: n,
        setQueryString: a,
        handleClearFilter: h,
        getApplyQueryString: _,
        handleFocusFilter: o,
        handleBlurFilter: d,
    };
}
function Q(e) {
    switch (e) {
        case j.intl.string(j.t.ZNR2fi):
            return h.q;
        case j.intl.string(j.t["20uQR3"]):
            return d.J;
        case j.intl.string(j.t.L4lxyE):
            return _.Y;
        case j.intl.string(j.t["AV/v6i"]):
            return E.o;
        case j.intl.string(j.t.XM9XGP):
            return S.n;
        case j.intl.string(j.t.TNLcpx):
            return f.x;
        case j.intl.string(j.t.F8Wf0e):
            return p.J;
        case j.intl.string(j.t.PJgX2h):
            return g.t;
        case j.intl.string(j.t.nrpA5E):
            return A.t;
        default:
            return null;
    }
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = s.useState(t),
        { filterAutocompleteResults: l, handleFocusFilter: a } = D({
            searchContext: e,
            filter: H.LWr.FILTER_HAS,
            queryString: "",
        }),
        i = s.useMemo(() => {
            if (0 === l.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((r) => {
                        t.add(r), e.push({ value: r, label: r, key: r, id: r, leading: Q(r) });
                    }),
                l.length > 0 &&
                    l.forEach((r) => {
                        let { text: n } = r;
                        t.has(n) || (e.push({ value: n, label: n, key: n, id: n, leading: Q(n) }), t.add(n));
                    }),
                e
            );
        }, [l, r]),
        o = s.useCallback(() => {
            n([]);
        }, []),
        u = s.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = W.Ay[e];
                return r.map((e) => `${t.key} ${e}`).join(" ");
            },
            [r],
        );
    return { options: i, query: r, setQuery: n, handleClearFilter: o, getApplyQueryString: u, handleFocusFilter: a };
}
let B = () =>
    s.useMemo(() => {
        let e = W.Ay[H.LWr.FILTER_BEFORE],
            t = W.Ay[H.LWr.FILTER_AFTER],
            r = W.Ay[H.LWr.FILTER_ON];
        return {
            beforeFilter: e?.key ?? `${j.intl.string(j.t["qZ+7BA"])}:`,
            afterFilter: t?.key ?? `${j.intl.string(j.t.KSDx7M)}:`,
            duringFilter: r?.key ?? `${j.intl.string(j.t.h2NzSd)}:`,
        };
    }, []);
function K() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, r] = s.useState(e),
        n = s.useCallback(() => (0, o.A)(), []),
        l = s.useCallback((e) => e.date.isValid(), []),
        a = s.useMemo(() => t.filter(l), [t, l]),
        { beforeFilter: u, afterFilter: c, duringFilter: h } = B(),
        d = s.useCallback(() => ({ query: u, date: i()(), id: n() }), [u, n]),
        _ = s.useMemo(
            () => [
                { key: "Before", label: j.intl.string(j.t["ptL/DP"]), value: u },
                { key: "After", label: j.intl.string(j.t.waQeEV), value: c },
                { key: "During", label: j.intl.string(j.t.LT5TnZ), value: h },
            ],
            [u, c, h],
        ),
        E = s.useCallback((e) => {
            let { query: t, index: n } = e;
            r((e) => {
                let r = [...e];
                return (r[n] = { ...r[n], query: t }), r;
            });
        }, []),
        S = s.useCallback((e) => {
            let { date: t, index: n } = e;
            r((e) => {
                let r = [...e];
                return (r[n] = { ...r[n], date: t }), r;
            });
        }, []),
        f = s.useCallback(() => {
            r((e) => [...e, d()]);
        }, [d]),
        p = s.useCallback((e) => {
            r((t) => {
                let r = [...t];
                return r.splice(e, 1), r;
            });
        }, []),
        g = s.useCallback(() => {
            r([]);
        }, []),
        A = s.useCallback(
            () =>
                0 === a.length
                    ? null
                    : a
                          .map((e) => {
                              let { query: t, date: r } = e,
                                  n = r.format(H.ump);
                              return `${t} ${n}`;
                          })
                          .join(" "),
            [a],
        );
    return {
        options: _,
        dates: t,
        validDates: a,
        handleDateQueryChange: E,
        handleDateChange: S,
        handleAddDateFilter: f,
        handleRemoveDateFilter: p,
        handleClearDateFilter: g,
        getDateQueryString: A,
    };
}
function G(e) {
    switch (e) {
        case j.intl.string(j.t.tPZo4p):
            return y.n;
        case j.intl.string(j.t.JL7sRS):
            return R.C;
        case j.intl.string(j.t.WjkIKU):
            return m.X;
    }
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = s.useState(t),
        { filterAutocompleteResults: l, handleFocusFilter: a } = D({
            searchContext: e,
            filter: H.LWr.FILTER_AUTHOR_TYPE,
            queryString: "",
        }),
        i = s.useMemo(() => {
            if (0 === l.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((r) => {
                        t.add(r), e.push({ value: r, label: r, key: r, id: r, leading: G(r) });
                    }),
                l.length > 0 &&
                    l.forEach((r) => {
                        let { text: n } = r;
                        t.has(n) || (e.push({ value: n, label: n, key: n, id: n, leading: G(n) }), t.add(n));
                    }),
                e
            );
        }, [l, r]),
        o = s.useCallback(() => {
            n([]);
        }, []),
        u = s.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = W.Ay[e];
                return r.map((e) => `${t.key} ${e}`).join(" ");
            },
            [r],
        );
    return { options: i, query: r, setQuery: n, handleClearFilter: o, getApplyQueryString: u, handleFocusFilter: a };
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [r, n] = s.useState(t),
        l = s.useMemo(() => {
            let t =
                W.Ay[H.LWr.FILTER_PINNED].getAutocompletions?.({ query: "", maxResults: 10, searchContext: e }) ?? [];
            if (0 === t.length && null === r) return [];
            let n = [];
            return (
                t.length > 0 &&
                    t.forEach((e) => {
                        let { text: t } = e;
                        n.push({ value: t, label: t, key: t });
                    }),
                n
            );
        }, [e, r]),
        a = s.useCallback(() => {
            n(null);
        }, []),
        i = s.useCallback(
            (e) => {
                if (null === r) return null;
                let t = W.Ay[e];
                return `${t.key} ${r}`;
            },
            [r],
        );
    return { options: l, query: r, setQuery: n, handleClearFilter: a, getApplyQueryString: i };
}
function Z(e, t) {
    let { beforeFilter: r, afterFilter: n, duringFilter: l } = B(),
        a = (0, k.o)(t);
    return s.useMemo(() => {
        let t = {
                [H.LWr.FILTER_FROM]: [],
                [H.LWr.FILTER_MENTIONS]: [],
                [H.LWr.FILTER_HAS]: [],
                [H.LWr.FILTER_IN]: [],
                [H.LWr.FILTER_ON]: [],
                [H.LWr.FILTER_BEFORE]: [],
                [H.LWr.FILTER_AFTER]: [],
                [H.LWr.FILTER_PINNED]: null,
                [H.LWr.FILTER_AUTHOR_TYPE]: [],
            },
            s = [],
            u = 0;
        e.forEach((e) => {
            if (H.T2E.test(e.type))
                switch (e.type) {
                    case H.LWr.ANSWER_USERNAME_FROM:
                        if (a.has(H.LWr.FILTER_FROM)) {
                            let r = t[H.LWr.FILTER_FROM],
                                n = e.getData("userId");
                            r.push(n), (u += 1);
                        }
                        break;
                    case H.LWr.ANSWER_USERNAME_MENTIONS:
                        if (a.has(H.LWr.FILTER_MENTIONS)) {
                            let r = t[H.LWr.FILTER_MENTIONS],
                                n = e.getData("userId");
                            r.push(n), (u += 1);
                        }
                        break;
                    case H.LWr.ANSWER_HAS:
                        let c = t[H.LWr.FILTER_HAS],
                            h = e.getData("has");
                        c.push(h), (u += 1);
                        break;
                    case H.LWr.ANSWER_IN:
                        if (a.has(H.LWr.FILTER_IN)) {
                            let r = t[H.LWr.FILTER_IN],
                                n = e.getData("channelIds") ?? [];
                            r.push(...n), (u += 1);
                        }
                        break;
                    case H.LWr.ANSWER_BEFORE:
                        let d = t[H.LWr.FILTER_BEFORE],
                            _ = e.getData("end"),
                            E = { query: r, date: i()(_), id: (0, o.A)() };
                        d.push(E), s.push(E), (u += 1);
                        break;
                    case H.LWr.ANSWER_ON:
                        let S = t[H.LWr.FILTER_ON],
                            f = e.getData("start"),
                            p = { query: l, date: i()(f), id: (0, o.A)() };
                        S.push(p), s.push(p), (u += 1);
                        break;
                    case H.LWr.ANSWER_AFTER:
                        let g = t[H.LWr.FILTER_AFTER],
                            A = e.getData("start"),
                            y = { query: n, date: i()(A), id: (0, o.A)() };
                        g.push(y), s.push(y), (u += 1);
                        break;
                    case H.LWr.ANSWER_PINNED:
                        let R = t[H.LWr.FILTER_PINNED],
                            m = e.getData("pinned").toString();
                        null === R ? (R = m) : "true" !== R && "true" === m && (R = m),
                            (t[H.LWr.FILTER_PINNED] = R),
                            (u += 1);
                        break;
                    case H.LWr.ANSWER_AUTHOR_TYPE:
                        if (a.has(H.LWr.FILTER_AUTHOR_TYPE)) {
                            let r = t[H.LWr.FILTER_AUTHOR_TYPE],
                                n = e.getData("author_type");
                            r.push(n), (u += 1);
                        }
                }
        });
        let c = {
            [H.LWr.FILTER_FROM]: t[H.LWr.FILTER_FROM],
            [H.LWr.FILTER_MENTIONS]: t[H.LWr.FILTER_MENTIONS],
            [H.LWr.FILTER_HAS]: t[H.LWr.FILTER_HAS],
            [H.LWr.FILTER_IN]: t[H.LWr.FILTER_IN],
            dateFilters: s,
            [H.LWr.FILTER_AUTHOR_TYPE]: t[H.LWr.FILTER_AUTHOR_TYPE],
            [H.LWr.FILTER_PINNED]: t[H.LWr.FILTER_PINNED],
        };
        return { allPrefilledSearchFilters: t, totalFilters: u, prefilledSearchFilters: c, eligibleFilterTokens: a };
    }, [e, r, n, l, a]);
}
function J(e, t) {
    return e === t || (0, l.isEqual)(e, t);
}
function X(e, t) {
    if (e.length !== t.length) return !1;
    let r = new Map();
    for (let t of e) {
        let e = `${t.query}:${t.date.valueOf()}`,
            n = r.get(e) ?? 0;
        r.set(e, n + 1);
    }
    for (let e of t) {
        let t = `${e.query}:${e.date.valueOf()}`,
            n = r.get(t) ?? 0;
        if (0 === n) return !1;
        r.set(t, n - 1);
    }
    for (let e of r.values()) if (0 !== e) return !1;
    return !0;
}
function ee(e) {
    let { nonFilterQueryString: t, filterQueryString: r } = e,
        n = +(r.length > 0),
        l = +(t.length > 0),
        a = M.E2 - t.length - l - n,
        i = s.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return r.length + t.length > a;
            },
            [r.length, a],
        ),
        o = s.useMemo(() => r.length + 18 > a, [r.length, a]),
        u = s.useCallback(() => {
            I.A.show({
                title: j.intl.string(j.t.nOqJcX),
                body: j.intl.string(j.t.zzAcsv),
                confirmText: j.intl.string(j.t["qcYY+/"]),
            });
        }, []);
    return {
        validateFilter: s.useCallback(
            (e, t) =>
                !i({
                    newFilterString: (function (e, t) {
                        let r,
                            n = W.Ay[e];
                        switch (e) {
                            case H.LWr.FILTER_FROM:
                            case H.LWr.FILTER_MENTIONS:
                                let s = x.default.getUser(t);
                                r = null == s ? t : `${s.username}`;
                                break;
                            case H.LWr.FILTER_IN:
                                let l = L.A.getChannel(t);
                                if (null == l) r = t;
                                else {
                                    let e = (0, O.E3)(l);
                                    r = (0, O.TZ)(e);
                                }
                                break;
                            case H.LWr.FILTER_HAS:
                            case H.LWr.FILTER_PINNED:
                            case H.LWr.FILTER_AUTHOR_TYPE:
                            default:
                                r = t;
                        }
                        return n.key + " " + r;
                    })(e, t),
                }) || (u(), !1),
            [i, u],
        ),
        validateDateFilter: s.useCallback(() => !o || (u(), !1), [o, u]),
    };
}
