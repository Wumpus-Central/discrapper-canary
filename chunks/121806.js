r.d(t, {
    CT: () => w,
    H3: () => D,
    Ht: () => M,
    KD: () => O,
    Ky: () => W,
    TT: () => F,
    _2: () => U,
    dY: () => q,
    ps: () => v,
    u2: () => j,
    vj: () => H,
    wf: () => P,
}),
    r(321073),
    r(667532);
var s = r(627968),
    n = r(64700),
    l = r(735438),
    a = r(989349),
    i = r.n(a),
    o = r(835245),
    u = r(311907),
    c = r(397927),
    d = r(157559),
    h = r(713654),
    _ = r(734057),
    S = r(287809),
    E = r(403362),
    g = r(562153),
    p = r(427262),
    f = r(256796),
    A = r(692986),
    m = r(822382),
    R = r(893162),
    y = r(771650),
    T = r(907745),
    x = r(315059),
    I = r(652215),
    L = r(985018);
function b(e) {
    let { searchContext: t, filter: r, queryString: s } = e,
        l = (0, u.bG)([A.A], () => A.A.getState(t), [t], u.My),
        a = n.useMemo(() => {
            let e = l.autocompletes[0];
            return null != e && e.group === r ? e.results : [];
        }, [l.autocompletes, r]),
        i = n.useMemo(() => {
            let e = y.Ay[r].key;
            return `${e} ${s}`;
        }, [r, s]),
        o = n.useCallback(() => {
            let e = (0, m._o)(i),
                r = (0, m.zZ)(e, i.length - 1, i.length - 1);
            f.A.updateAutocompleteQuery({ searchContext: t, tokens: e, cursorScope: r, queryString: i });
        }, [t, i]),
        c = n.useCallback(() => {
            o();
        }, [o]);
    return (
        n.useEffect(() => {
            s.trim().length > 0 && o();
        }, [i, t, o, s]),
        { filterAutocompleteResults: a, handleFocusFilter: c, autocompleteStoreState: l }
    );
}
function N(e) {
    let { user: t, guildId: r, channelId: s } = e,
        n = g.Ay.getName(r, s, t),
        l = t.getAvatarURL(r, (0, c.FT9)(c._3J.SIZE_24));
    return { value: t.id, label: n, key: t.id, id: t.id, leading: { type: "avatar", src: l }, trailing: t.username };
}
function v(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        s = n.useMemo(() => (0, m.mt)(e), [e]),
        l = n.useMemo(() => (0, m._b)(e), [e]),
        [a, i] = n.useState(r),
        [o, u] = n.useState(""),
        {
            filterAutocompleteResults: c,
            handleFocusFilter: d,
            autocompleteStoreState: h,
        } = b({ searchContext: e, filter: t, queryString: o }),
        _ = n.useMemo(() => {
            let e = [],
                t = new Set();
            if (c.length > 0)
                c.forEach((r) => {
                    let n = r.user,
                        a = N({ user: n, guildId: s, channelId: l });
                    t.add(n.id), e.push(a);
                });
            else {
                let { tokens: r } = h,
                    n = r[r.length - 1];
                if (
                    null != n &&
                    (n.type === I.LWr.ANSWER_USERNAME_FROM || n.type === I.LWr.ANSWER_USERNAME_MENTIONS) &&
                    (0, y.sC)(n)
                ) {
                    let r = n.getData("userId"),
                        a = S.default.getUser(r);
                    if (null != a) {
                        let r = N({ user: a, guildId: s, channelId: l });
                        t.add(a.id), e.push(r);
                    }
                }
            }
            return (
                a.length > 0 &&
                    a.forEach((r) => {
                        if (t.has(r)) return;
                        let n = S.default.getUser(r);
                        if (null == n) return;
                        let a = N({ user: n, guildId: s, channelId: l });
                        t.add(r), e.unshift(a);
                    }),
                e
            );
        }, [h, c, a, s, l]),
        g = n.useCallback(() => {
            i([]), u("");
        }, []),
        f = n.useCallback(() => {
            u("");
        }, []),
        A = n.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = y.Ay[e];
                return a
                    .map((e) => {
                        let r = S.default.getUser(e);
                        if (null == r) return null;
                        let s = p.Ay.getUserTag(r);
                        return "" === s ? null : `${t.key} ${s}`;
                    })
                    .filter(E.Vq)
                    .join(" ");
            },
            [a],
        );
    return {
        options: _,
        query: a,
        setQuery: i,
        setQueryString: u,
        handleClearFilter: g,
        getApplyQueryString: A,
        handleFocusFilter: d,
        handleBlurFilter: f,
    };
}
function C(e) {
    let t,
        { channel: r } = e;
    if (r.isDM()) {
        let e = r.getRecipientId(),
            s = S.default.getUser(e);
        null != s && (t = { type: "avatar", src: s.getAvatarURL(null, (0, c.FT9)(c._3J.SIZE_20)) });
    } else
        t = r.isGroupDM()
            ? (0, s.jsx)(x.A, { channel: r, avatarSize: c._3J.SIZE_20, iconSize: "refresh_sm" })
            : (0, h.gU)(r);
    return { value: r.id, label: (0, m.E3)(r), key: r.id, id: r.id, leading: t };
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, s] = n.useState(t),
        [l, a] = n.useState(""),
        {
            filterAutocompleteResults: i,
            handleFocusFilter: o,
            autocompleteStoreState: u,
        } = b({ searchContext: e, filter: I.LWr.FILTER_IN, queryString: l }),
        c = n.useMemo(() => {
            let t = [],
                s = new Set();
            if (i.length > 0)
                i.forEach((e) => {
                    let r = e.channel,
                        n = C({ channel: r });
                    s.add(r.id), t.push(n);
                });
            else {
                let { tokens: r } = u,
                    n = r[r.length - 1];
                if (null != n && n.type === I.LWr.ANSWER_IN && (0, y.Yd)(n, e)) {
                    let e = n.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let r = _.A.getChannel(e);
                            if (null != r) {
                                let e = C({ channel: r });
                                s.add(r.id), t.push(e);
                            }
                        });
                }
            }
            return (
                r.length > 0 &&
                    r.forEach((e) => {
                        if (s.has(e)) return;
                        let r = _.A.getChannel(e);
                        if (null == r) return;
                        let n = C({ channel: r });
                        s.add(e), t.unshift(n);
                    }),
                t
            );
        }, [u, i, r, e]),
        d = n.useCallback(() => {
            s([]), a("");
        }, []),
        h = n.useCallback(() => {
            a("");
        }, []),
        S = n.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = y.Ay[e];
                return r
                    .map((e) => {
                        let r = _.A.getChannel(e);
                        if (null == r) return;
                        let s = (0, m.E3)(r),
                            n = (0, m.TZ)(s);
                        return `${t.key} ${n}`;
                    })
                    .join(" ");
            },
            [r],
        );
    return {
        options: c,
        query: r,
        setQuery: s,
        setQueryString: a,
        handleClearFilter: d,
        getApplyQueryString: S,
        handleFocusFilter: o,
        handleBlurFilter: h,
    };
}
function O(e) {
    switch (e) {
        case L.intl.string(L.t.ZNR2fi):
            return c.qYV;
        case L.intl.string(L.t["20uQR3"]):
            return c.JD7;
        case L.intl.string(L.t.L4lxyE):
            return c.YRe;
        case L.intl.string(L.t["AV/v6i"]):
            return c.oSV;
        case L.intl.string(L.t.XM9XGP):
            return c.npA;
        case L.intl.string(L.t.TNLcpx):
            return c.xfq;
        case L.intl.string(L.t.F8Wf0e):
            return c.JMI;
        case L.intl.string(L.t.PJgX2h):
            return c.tEP;
        case L.intl.string(L.t.nrpA5E):
            return c.tuI;
        default:
            return null;
    }
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, s] = n.useState(t),
        { filterAutocompleteResults: l, handleFocusFilter: a } = b({
            searchContext: e,
            filter: I.LWr.FILTER_HAS,
            queryString: "",
        }),
        i = n.useMemo(() => {
            if (0 === l.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((r) => {
                        t.add(r), e.push({ value: r, label: r, key: r, id: r, leading: O(r) });
                    }),
                l.length > 0 &&
                    l.forEach((r) => {
                        let { text: s } = r;
                        t.has(s) || (e.push({ value: s, label: s, key: s, id: s, leading: O(s) }), t.add(s));
                    }),
                e
            );
        }, [l, r]),
        o = n.useCallback(() => {
            s([]);
        }, []),
        u = n.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = y.Ay[e];
                return r.map((e) => `${t.key} ${e}`).join(" ");
            },
            [r],
        );
    return { options: i, query: r, setQuery: s, handleClearFilter: o, getApplyQueryString: u, handleFocusFilter: a };
}
let k = () =>
    n.useMemo(() => {
        let e = y.Ay[I.LWr.FILTER_BEFORE],
            t = y.Ay[I.LWr.FILTER_AFTER],
            r = y.Ay[I.LWr.FILTER_ON];
        return {
            beforeFilter: e?.key ?? `${L.intl.string(L.t["qZ+7BA"])}:`,
            afterFilter: t?.key ?? `${L.intl.string(L.t.KSDx7M)}:`,
            duringFilter: r?.key ?? `${L.intl.string(L.t.h2NzSd)}:`,
        };
    }, []);
function W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, r] = n.useState(e),
        s = n.useCallback(() => (0, o.A)(), []),
        l = n.useCallback((e) => e.date.isValid(), []),
        a = n.useMemo(() => t.filter(l), [t, l]),
        { beforeFilter: u, afterFilter: c, duringFilter: d } = k(),
        h = n.useCallback(() => ({ query: u, date: i()(), id: s() }), [u, s]),
        _ = n.useMemo(
            () => [
                { key: "Before", label: L.intl.string(L.t["ptL/DP"]), value: u },
                { key: "After", label: L.intl.string(L.t.waQeEV), value: c },
                { key: "During", label: L.intl.string(L.t.LT5TnZ), value: d },
            ],
            [u, c, d],
        ),
        S = n.useCallback((e) => {
            let { query: t, index: s } = e;
            r((e) => {
                let r = [...e];
                return (r[s] = { ...r[s], query: t }), r;
            });
        }, []),
        E = n.useCallback((e) => {
            let { date: t, index: s } = e;
            r((e) => {
                let r = [...e];
                return (r[s] = { ...r[s], date: t }), r;
            });
        }, []),
        g = n.useCallback(() => {
            r((e) => [...e, h()]);
        }, [h]),
        p = n.useCallback((e) => {
            r((t) => {
                let r = [...t];
                return r.splice(e, 1), r;
            });
        }, []),
        f = n.useCallback(() => {
            r([]);
        }, []),
        A = n.useCallback(
            () =>
                0 === a.length
                    ? null
                    : a
                          .map((e) => {
                              let { query: t, date: r } = e,
                                  s = r.format(I.ump);
                              return `${t} ${s}`;
                          })
                          .join(" "),
            [a],
        );
    return {
        options: _,
        dates: t,
        validDates: a,
        handleDateQueryChange: S,
        handleDateChange: E,
        handleAddDateFilter: g,
        handleRemoveDateFilter: p,
        handleClearDateFilter: f,
        getDateQueryString: A,
    };
}
function M(e) {
    switch (e) {
        case L.intl.string(L.t.tPZo4p):
            return c.nys;
        case L.intl.string(L.t.JL7sRS):
            return c.CnV;
        case L.intl.string(L.t.WjkIKU):
            return c.XC7;
    }
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, s] = n.useState(t),
        { filterAutocompleteResults: l, handleFocusFilter: a } = b({
            searchContext: e,
            filter: I.LWr.FILTER_AUTHOR_TYPE,
            queryString: "",
        }),
        i = n.useMemo(() => {
            if (0 === l.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((r) => {
                        t.add(r), e.push({ value: r, label: r, key: r, id: r, leading: M(r) });
                    }),
                l.length > 0 &&
                    l.forEach((r) => {
                        let { text: s } = r;
                        t.has(s) || (e.push({ value: s, label: s, key: s, id: s, leading: M(s) }), t.add(s));
                    }),
                e
            );
        }, [l, r]),
        o = n.useCallback(() => {
            s([]);
        }, []),
        u = n.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = y.Ay[e];
                return r.map((e) => `${t.key} ${e}`).join(" ");
            },
            [r],
        );
    return { options: i, query: r, setQuery: s, handleClearFilter: o, getApplyQueryString: u, handleFocusFilter: a };
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [r, s] = n.useState(t),
        l = n.useMemo(() => {
            let t =
                y.Ay[I.LWr.FILTER_PINNED].getAutocompletions?.({ query: "", maxResults: 10, searchContext: e }) ?? [];
            if (0 === t.length && null === r) return [];
            let s = [];
            return (
                t.length > 0 &&
                    t.forEach((e) => {
                        let { text: t } = e;
                        s.push({ value: t, label: t, key: t });
                    }),
                s
            );
        }, [e, r]),
        a = n.useCallback(() => {
            s(null);
        }, []),
        i = n.useCallback(
            (e) => {
                if (null === r) return null;
                let t = y.Ay[e];
                return `${t.key} ${r}`;
            },
            [r],
        );
    return { options: l, query: r, setQuery: s, handleClearFilter: a, getApplyQueryString: i };
}
function H(e, t) {
    let { beforeFilter: r, afterFilter: s, duringFilter: l } = k(),
        a = (0, R.R)(t);
    return n.useMemo(() => {
        let t = {
                [I.LWr.FILTER_FROM]: [],
                [I.LWr.FILTER_MENTIONS]: [],
                [I.LWr.FILTER_HAS]: [],
                [I.LWr.FILTER_IN]: [],
                [I.LWr.FILTER_ON]: [],
                [I.LWr.FILTER_BEFORE]: [],
                [I.LWr.FILTER_AFTER]: [],
                [I.LWr.FILTER_PINNED]: null,
                [I.LWr.FILTER_AUTHOR_TYPE]: [],
            },
            n = [],
            u = 0;
        e.forEach((e) => {
            if (I.T2E.test(e.type))
                switch (e.type) {
                    case I.LWr.ANSWER_USERNAME_FROM:
                        if (a.has(I.LWr.FILTER_FROM)) {
                            let r = t[I.LWr.FILTER_FROM],
                                s = e.getData("userId");
                            r.push(s), (u += 1);
                        }
                        break;
                    case I.LWr.ANSWER_USERNAME_MENTIONS:
                        if (a.has(I.LWr.FILTER_MENTIONS)) {
                            let r = t[I.LWr.FILTER_MENTIONS],
                                s = e.getData("userId");
                            r.push(s), (u += 1);
                        }
                        break;
                    case I.LWr.ANSWER_HAS:
                        let c = t[I.LWr.FILTER_HAS],
                            d = e.getData("has");
                        c.push(d), (u += 1);
                        break;
                    case I.LWr.ANSWER_IN:
                        if (a.has(I.LWr.FILTER_IN)) {
                            let r = t[I.LWr.FILTER_IN],
                                s = e.getData("channelIds") ?? [];
                            r.push(...s), (u += 1);
                        }
                        break;
                    case I.LWr.ANSWER_BEFORE:
                        let h = t[I.LWr.FILTER_BEFORE],
                            _ = e.getData("end"),
                            S = { query: r, date: i()(_), id: (0, o.A)() };
                        h.push(S), n.push(S), (u += 1);
                        break;
                    case I.LWr.ANSWER_ON:
                        let E = t[I.LWr.FILTER_ON],
                            g = e.getData("start"),
                            p = { query: l, date: i()(g), id: (0, o.A)() };
                        E.push(p), n.push(p), (u += 1);
                        break;
                    case I.LWr.ANSWER_AFTER:
                        let f = t[I.LWr.FILTER_AFTER],
                            A = e.getData("start"),
                            m = { query: s, date: i()(A), id: (0, o.A)() };
                        f.push(m), n.push(m), (u += 1);
                        break;
                    case I.LWr.ANSWER_PINNED:
                        let R = t[I.LWr.FILTER_PINNED],
                            y = e.getData("pinned").toString();
                        null === R ? (R = y) : "true" !== R && "true" === y && (R = y),
                            (t[I.LWr.FILTER_PINNED] = R),
                            (u += 1);
                        break;
                    case I.LWr.ANSWER_AUTHOR_TYPE:
                        if (a.has(I.LWr.FILTER_AUTHOR_TYPE)) {
                            let r = t[I.LWr.FILTER_AUTHOR_TYPE],
                                s = e.getData("author_type");
                            r.push(s), (u += 1);
                        }
                }
        });
        let c = {
            [I.LWr.FILTER_FROM]: t[I.LWr.FILTER_FROM],
            [I.LWr.FILTER_MENTIONS]: t[I.LWr.FILTER_MENTIONS],
            [I.LWr.FILTER_HAS]: t[I.LWr.FILTER_HAS],
            [I.LWr.FILTER_IN]: t[I.LWr.FILTER_IN],
            dateFilters: n,
            [I.LWr.FILTER_AUTHOR_TYPE]: t[I.LWr.FILTER_AUTHOR_TYPE],
            [I.LWr.FILTER_PINNED]: t[I.LWr.FILTER_PINNED],
        };
        return { allPrefilledSearchFilters: t, totalFilters: u, prefilledSearchFilters: c, eligibleFilterTokens: a };
    }, [e, r, s, l, a]);
}
function P(e, t) {
    return e === t || (0, l.isEqual)(e, t);
}
function U(e, t) {
    if (e.length !== t.length) return !1;
    let r = new Map();
    for (let t of e) {
        let e = `${t.query}:${t.date.valueOf()}`,
            s = r.get(e) ?? 0;
        r.set(e, s + 1);
    }
    for (let e of t) {
        let t = `${e.query}:${e.date.valueOf()}`,
            s = r.get(t) ?? 0;
        if (0 === s) return !1;
        r.set(t, s - 1);
    }
    for (let e of r.values()) if (0 !== e) return !1;
    return !0;
}
function q(e) {
    let { nonFilterQueryString: t, filterQueryString: r } = e,
        s = +(r.length > 0),
        l = +(t.length > 0),
        a = T.E2 - t.length - l - s,
        i = n.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return r.length + t.length > a;
            },
            [r.length, a],
        ),
        o = n.useMemo(() => r.length + 18 > a, [r.length, a]),
        u = n.useCallback(() => {
            d.A.show({
                title: L.intl.string(L.t.nOqJcX),
                body: L.intl.string(L.t.zzAcsv),
                confirmText: L.intl.string(L.t["qcYY+/"]),
            });
        }, []);
    return {
        validateFilter: n.useCallback(
            (e, t) =>
                !i({
                    newFilterString: (function (e, t) {
                        let r,
                            s = y.Ay[e];
                        switch (e) {
                            case I.LWr.FILTER_FROM:
                            case I.LWr.FILTER_MENTIONS:
                                let n = S.default.getUser(t);
                                r = null == n ? t : `${n.username}`;
                                break;
                            case I.LWr.FILTER_IN:
                                let l = _.A.getChannel(t);
                                if (null == l) r = t;
                                else {
                                    let e = (0, m.E3)(l);
                                    r = (0, m.TZ)(e);
                                }
                                break;
                            case I.LWr.FILTER_HAS:
                            case I.LWr.FILTER_PINNED:
                            case I.LWr.FILTER_AUTHOR_TYPE:
                            default:
                                r = t;
                        }
                        return s.key + " " + r;
                    })(e, t),
                }) || (u(), !1),
            [i, u],
        ),
        validateDateFilter: n.useCallback(() => !o || (u(), !1), [o, u]),
    };
}
