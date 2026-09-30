(l.d(t, {
    CT: () => X,
    H3: () => G,
    Ht: () => B,
    KD: () => j,
    Ky: () => x,
    TT: () => Y,
    _2: () => K,
    dY: () => Q,
    ps: () => q,
    u2: () => z,
    vj: () => J,
    wf: () => V,
}),
    l(321073),
    l(667532));
var r = l(477900),
    n = l(582128),
    a = l(435558),
    u = l(536637),
    s = l.n(u),
    i = l(132500),
    E = l(17928),
    c = l(778712),
    L = l(173936),
    g = l(11023),
    o = l(642846),
    h = l(514042),
    d = l(428689),
    f = l(191023),
    R = l(7807),
    I = l(797285),
    T = l(292801),
    _ = l(950305),
    A = l(430392),
    F = l(39619),
    W = l(157559),
    N = l(713654),
    p = l(734057),
    k = l(287809),
    y = l(403362),
    S = l(562153),
    b = l(427262),
    M = l(256796),
    m = l(692986),
    C = l(822382),
    v = l(304578),
    O = l(674142),
    D = l(315059);
l(76497);
var U = l(652215),
    $ = l(375708);
function P(e) {
    let { searchContext: t, filter: l, queryString: r } = e,
        a = (0, E.bG)([m.A], () => m.A.getState(t), [t], E.My),
        u = n.useMemo(() => {
            let e = a.autocompletes[0];
            return null != e && e.group === l ? e.results : [];
        }, [a.autocompletes, l]),
        s = n.useMemo(() => {
            let e = v.Ay[l].key;
            return `${e} ${r}`;
        }, [l, r]),
        i = n.useCallback(() => {
            let e = (0, C._o)(s),
                l = (0, C.zZ)(e, s.length - 1, s.length - 1);
            M.A.updateAutocompleteQuery({ searchContext: t, tokens: e, cursorScope: l, queryString: s });
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
function H(e) {
    let { user: t, guildId: l, channelId: r } = e,
        n = S.Ay.getName(l, r, t),
        a = t.getAvatarURL(l, (0, c.FT)(c._3.SIZE_24));
    return { value: t.id, label: n, key: t.id, id: t.id, leading: { type: "avatar", src: a }, trailing: t.username };
}
function q(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = n.useMemo(() => (0, C.mt)(e), [e]),
        a = n.useMemo(() => (0, C._b)(e), [e]),
        [u, s] = n.useState(l),
        [i, E] = n.useState(""),
        {
            filterAutocompleteResults: c,
            handleFocusFilter: L,
            autocompleteStoreState: g,
        } = P({ searchContext: e, filter: t, queryString: i }),
        o = n.useMemo(() => {
            let e = [],
                t = new Set();
            if (c.length > 0)
                c.forEach((l) => {
                    let n = l.user,
                        u = H({ user: n, guildId: r, channelId: a });
                    (t.add(n.id), e.push(u));
                });
            else {
                let { tokens: l } = g,
                    n = l[l.length - 1];
                if (
                    null != n &&
                    (n.type === U.LWr.ANSWER_USERNAME_FROM || n.type === U.LWr.ANSWER_USERNAME_MENTIONS) &&
                    (0, v.sC)(n)
                ) {
                    let l = n.getData("userId"),
                        u = k.default.getUser(l);
                    if (null != u) {
                        let l = H({ user: u, guildId: r, channelId: a });
                        (t.add(u.id), e.push(l));
                    }
                }
            }
            return (
                u.length > 0 &&
                    u.forEach((l) => {
                        if (t.has(l)) return;
                        let n = k.default.getUser(l);
                        if (null == n) return;
                        let u = H({ user: n, guildId: r, channelId: a });
                        (t.add(l), e.unshift(u));
                    }),
                e
            );
        }, [g, c, u, r, a]),
        h = n.useCallback(() => {
            (s([]), E(""));
        }, []),
        d = n.useCallback(() => {
            E("");
        }, []),
        f = n.useCallback(
            (e) => {
                if (0 === u.length) return null;
                let t = v.Ay[e];
                return u
                    .map((e) => {
                        let l = k.default.getUser(e);
                        if (null == l) return null;
                        let r = b.Ay.getUserTag(l);
                        return "" === r ? null : `${t.key} ${r}`;
                    })
                    .filter(y.Vq)
                    .join(" ");
            },
            [u],
        );
    return {
        options: o,
        query: u,
        setQuery: s,
        setQueryString: E,
        handleClearFilter: h,
        getApplyQueryString: f,
        handleFocusFilter: L,
        handleBlurFilter: d,
    };
}
function w(e) {
    let t,
        { channel: l } = e;
    if (l.isDM()) {
        let e = l.getRecipientId(),
            r = k.default.getUser(e);
        null != r && (t = { type: "avatar", src: r.getAvatarURL(null, (0, c.FT)(c._3.SIZE_20)) });
    } else
        t = l.isGroupDM()
            ? (0, r.jsx)(D.A, { channel: l, avatarSize: c._3.SIZE_20, iconSize: "refresh_sm" })
            : (0, N.gU)(l);
    return { value: l.id, label: (0, C.E3)(l), key: l.id, id: l.id, leading: t };
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, r] = n.useState(t),
        [a, u] = n.useState(""),
        {
            filterAutocompleteResults: s,
            handleFocusFilter: i,
            autocompleteStoreState: E,
        } = P({ searchContext: e, filter: U.LWr.FILTER_IN, queryString: a }),
        c = n.useMemo(() => {
            let t = [],
                r = new Set();
            if (s.length > 0)
                s.forEach((e) => {
                    let l = e.channel,
                        n = w({ channel: l });
                    (r.add(l.id), t.push(n));
                });
            else {
                let { tokens: l } = E,
                    n = l[l.length - 1];
                if (null != n && n.type === U.LWr.ANSWER_IN && (0, v.Yd)(n, e)) {
                    let e = n.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let l = p.A.getChannel(e);
                            if (null != l) {
                                let e = w({ channel: l });
                                (r.add(l.id), t.push(e));
                            }
                        });
                }
            }
            return (
                l.length > 0 &&
                    l.forEach((e) => {
                        if (r.has(e)) return;
                        let l = p.A.getChannel(e);
                        if (null == l) return;
                        let n = w({ channel: l });
                        (r.add(e), t.unshift(n));
                    }),
                t
            );
        }, [E, s, l, e]),
        L = n.useCallback(() => {
            (r([]), u(""));
        }, []),
        g = n.useCallback(() => {
            u("");
        }, []),
        o = n.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = v.Ay[e];
                return l
                    .map((e) => {
                        let l = p.A.getChannel(e);
                        if (null == l) return;
                        let r = (0, C.E3)(l),
                            n = (0, C.TZ)(r);
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
        handleClearFilter: L,
        getApplyQueryString: o,
        handleFocusFilter: i,
        handleBlurFilter: g,
    };
}
function j(e) {
    switch (e) {
        case $.intl.string($.t.ZNR2fi):
            return L.LinkIcon;
        case $.intl.string($.t["20uQR3"]):
            return g.J;
        case $.intl.string($.t.L4lxyE):
            return o.Y;
        case $.intl.string($.t["AV/v6i"]):
            return h.FileIcon;
        case $.intl.string($.t.XM9XGP):
            return d.VideoIcon;
        case $.intl.string($.t.TNLcpx):
            return f.ImageIcon;
        case $.intl.string($.t.F8Wf0e):
            return R.J;
        case $.intl.string($.t.PJgX2h):
            return I.t;
        case $.intl.string($.t.nrpA5E):
            return T.t;
        default:
            return null;
    }
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, r] = n.useState(t),
        { filterAutocompleteResults: a, handleFocusFilter: u } = P({
            searchContext: e,
            filter: U.LWr.FILTER_HAS,
            queryString: "",
        }),
        s = n.useMemo(() => {
            if (0 === a.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                l.length > 0 &&
                    l.forEach((l) => {
                        (t.add(l), e.push({ value: l, label: l, key: l, id: l, leading: j(l) }));
                    }),
                a.length > 0 &&
                    a.forEach((l) => {
                        let { text: r } = l;
                        t.has(r) || (e.push({ value: r, label: r, key: r, id: r, leading: j(r) }), t.add(r));
                    }),
                e
            );
        }, [a, l]),
        i = n.useCallback(() => {
            r([]);
        }, []),
        E = n.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = v.Ay[e];
                return l.map((e) => `${t.key} ${e}`).join(" ");
            },
            [l],
        );
    return { options: s, query: l, setQuery: r, handleClearFilter: i, getApplyQueryString: E, handleFocusFilter: u };
}
function Z() {
    return n.useMemo(() => {
        let e = v.Ay[U.LWr.FILTER_BEFORE],
            t = v.Ay[U.LWr.FILTER_AFTER],
            l = v.Ay[U.LWr.FILTER_ON];
        return {
            beforeFilter: e?.key ?? `${$.intl.string($.t["qZ+7BA"])}:`,
            afterFilter: t?.key ?? `${$.intl.string($.t.KSDx7M)}:`,
            duringFilter: l?.key ?? `${$.intl.string($.t.h2NzSd)}:`,
        };
    }, []);
}
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, l] = n.useState(e),
        r = n.useCallback(() => (0, i.A)(), []),
        a = n.useCallback((e) => e.date.isValid(), []),
        u = n.useMemo(() => t.filter(a), [t, a]),
        { beforeFilter: E, afterFilter: c, duringFilter: L } = Z(),
        g = n.useCallback(() => ({ query: E, date: s()(), id: r() }), [E, r]),
        o = n.useMemo(
            () => [
                { key: "Before", label: $.intl.string($.t["ptL/DP"]), value: E },
                { key: "After", label: $.intl.string($.t.waQeEV), value: c },
                { key: "During", label: $.intl.string($.t.LT5TnZ), value: L },
            ],
            [E, c, L],
        ),
        h = n.useCallback((e) => {
            let { query: t, index: r } = e;
            l((e) => {
                let l = [...e];
                return ((l[r] = { ...l[r], query: t }), l);
            });
        }, []),
        d = n.useCallback((e) => {
            let { date: t, index: r } = e;
            l((e) => {
                let l = [...e];
                return ((l[r] = { ...l[r], date: t }), l);
            });
        }, []),
        f = n.useCallback(() => {
            l((e) => [...e, g()]);
        }, [g]),
        R = n.useCallback((e) => {
            l((t) => {
                let l = [...t];
                return (l.splice(e, 1), l);
            });
        }, []),
        I = n.useCallback(() => {
            l([]);
        }, []),
        T = n.useCallback(
            () =>
                0 === u.length
                    ? null
                    : u
                          .map((e) => {
                              let { query: t, date: l } = e,
                                  r = l.format(U.ump);
                              return `${t} ${r}`;
                          })
                          .join(" "),
            [u],
        );
    return {
        options: o,
        dates: t,
        validDates: u,
        handleDateQueryChange: h,
        handleDateChange: d,
        handleAddDateFilter: f,
        handleRemoveDateFilter: R,
        handleClearDateFilter: I,
        getDateQueryString: T,
    };
}
function B(e) {
    switch (e) {
        case $.intl.string($.t.tPZo4p):
            return _.UserIcon;
        case $.intl.string($.t.JL7sRS):
            return A.RobotIcon;
        case $.intl.string($.t.WjkIKU):
            return F.X;
    }
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, r] = n.useState(t),
        { filterAutocompleteResults: a, handleFocusFilter: u } = P({
            searchContext: e,
            filter: U.LWr.FILTER_AUTHOR_TYPE,
            queryString: "",
        }),
        s = n.useMemo(() => {
            if (0 === a.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                l.length > 0 &&
                    l.forEach((l) => {
                        (t.add(l), e.push({ value: l, label: l, key: l, id: l, leading: B(l) }));
                    }),
                a.length > 0 &&
                    a.forEach((l) => {
                        let { text: r } = l;
                        t.has(r) || (e.push({ value: r, label: r, key: r, id: r, leading: B(r) }), t.add(r));
                    }),
                e
            );
        }, [a, l]),
        i = n.useCallback(() => {
            r([]);
        }, []),
        E = n.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = v.Ay[e];
                return l.map((e) => `${t.key} ${e}`).join(" ");
            },
            [l],
        );
    return { options: s, query: l, setQuery: r, handleClearFilter: i, getApplyQueryString: E, handleFocusFilter: u };
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [l, r] = n.useState(t),
        a = n.useMemo(() => {
            let t =
                v.Ay[U.LWr.FILTER_PINNED].getAutocompletions?.({ query: "", maxResults: 10, searchContext: e }) ?? [];
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
                let t = v.Ay[e];
                return `${t.key} ${l}`;
            },
            [l],
        );
    return { options: a, query: l, setQuery: r, handleClearFilter: u, getApplyQueryString: s };
}
function J(e, t) {
    let { beforeFilter: l, afterFilter: r, duringFilter: a } = Z(),
        u = (0, O.o)(t);
    return n.useMemo(() => {
        let t = {
                [U.LWr.FILTER_FROM]: [],
                [U.LWr.FILTER_MENTIONS]: [],
                [U.LWr.FILTER_HAS]: [],
                [U.LWr.FILTER_IN]: [],
                [U.LWr.FILTER_ON]: [],
                [U.LWr.FILTER_BEFORE]: [],
                [U.LWr.FILTER_AFTER]: [],
                [U.LWr.FILTER_PINNED]: null,
                [U.LWr.FILTER_AUTHOR_TYPE]: [],
            },
            n = [],
            E = 0;
        e.forEach((e) => {
            if (U.T2E.test(e.type))
                switch (e.type) {
                    case U.LWr.ANSWER_USERNAME_FROM:
                        if (u.has(U.LWr.FILTER_FROM)) {
                            let l = t[U.LWr.FILTER_FROM],
                                r = e.getData("userId");
                            (l.push(r), (E += 1));
                        }
                        break;
                    case U.LWr.ANSWER_USERNAME_MENTIONS:
                        if (u.has(U.LWr.FILTER_MENTIONS)) {
                            let l = t[U.LWr.FILTER_MENTIONS],
                                r = e.getData("userId");
                            (l.push(r), (E += 1));
                        }
                        break;
                    case U.LWr.ANSWER_HAS:
                        let c = t[U.LWr.FILTER_HAS],
                            L = e.getData("has");
                        (c.push((0, v.ok)(L)), (E += 1));
                        break;
                    case U.LWr.ANSWER_IN:
                        if (u.has(U.LWr.FILTER_IN)) {
                            let l = t[U.LWr.FILTER_IN],
                                r = e.getData("channelIds") ?? [];
                            (l.push(...r), (E += 1));
                        }
                        break;
                    case U.LWr.ANSWER_BEFORE:
                        let g = t[U.LWr.FILTER_BEFORE],
                            o = e.getData("end"),
                            h = { query: l, date: s()(o), id: (0, i.A)() };
                        (g.push(h), n.push(h), (E += 1));
                        break;
                    case U.LWr.ANSWER_ON:
                        let d = t[U.LWr.FILTER_ON],
                            f = e.getData("start"),
                            R = { query: a, date: s()(f), id: (0, i.A)() };
                        (d.push(R), n.push(R), (E += 1));
                        break;
                    case U.LWr.ANSWER_AFTER:
                        let I = t[U.LWr.FILTER_AFTER],
                            T = e.getData("start"),
                            _ = { query: r, date: s()(T).subtract(1, "day"), id: (0, i.A)() };
                        (I.push(_), n.push(_), (E += 1));
                        break;
                    case U.LWr.ANSWER_PINNED:
                        let A = t[U.LWr.FILTER_PINNED],
                            F = e.getData("pinned").toString();
                        (null === A ? (A = F) : "true" !== A && "true" === F && (A = F),
                            (t[U.LWr.FILTER_PINNED] = A),
                            (E += 1));
                        break;
                    case U.LWr.ANSWER_AUTHOR_TYPE:
                        if (u.has(U.LWr.FILTER_AUTHOR_TYPE)) {
                            let l = t[U.LWr.FILTER_AUTHOR_TYPE],
                                r = e.getData("author_type");
                            (l.push((0, v.lq)(r)), (E += 1));
                        }
                }
        });
        let c = {
            [U.LWr.FILTER_FROM]: t[U.LWr.FILTER_FROM],
            [U.LWr.FILTER_MENTIONS]: t[U.LWr.FILTER_MENTIONS],
            [U.LWr.FILTER_HAS]: t[U.LWr.FILTER_HAS],
            [U.LWr.FILTER_IN]: t[U.LWr.FILTER_IN],
            dateFilters: n,
            [U.LWr.FILTER_AUTHOR_TYPE]: t[U.LWr.FILTER_AUTHOR_TYPE],
            [U.LWr.FILTER_PINNED]: t[U.LWr.FILTER_PINNED],
        };
        return { allPrefilledSearchFilters: t, totalFilters: E, prefilledSearchFilters: c, eligibleFilterTokens: u };
    }, [e, l, r, a, u]);
}
function V(e, t) {
    return e === t || (0, a.isEqual)(e, t);
}
function K(e, t) {
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
function Q(e) {
    let { nonFilterQueryString: t, filterQueryString: l } = e,
        r = +(l.length > 0),
        a = +(t.length > 0),
        u = 512 - t.length - a - r,
        s = n.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return l.length + t.length > u;
            },
            [l.length, u],
        ),
        i = n.useMemo(() => l.length + 18 > u, [l.length, u]),
        E = n.useCallback(() => {
            W.A.show({
                title: $.intl.string($.t.nOqJcX),
                body: $.intl.string($.t.zzAcsv),
                confirmText: $.intl.string($.t["qcYY+/"]),
            });
        }, []);
    return {
        validateFilter: n.useCallback(
            (e, t) =>
                !s({
                    newFilterString: (function (e, t) {
                        let l,
                            r = v.Ay[e];
                        switch (e) {
                            case U.LWr.FILTER_FROM:
                            case U.LWr.FILTER_MENTIONS:
                                let n = k.default.getUser(t);
                                l = null == n ? t : `${n.username}`;
                                break;
                            case U.LWr.FILTER_IN:
                                let a = p.A.getChannel(t);
                                if (null == a) l = t;
                                else {
                                    let e = (0, C.E3)(a);
                                    l = (0, C.TZ)(e);
                                }
                                break;
                            case U.LWr.FILTER_HAS:
                            case U.LWr.FILTER_PINNED:
                            case U.LWr.FILTER_AUTHOR_TYPE:
                            default:
                                l = t;
                        }
                        return r.key + " " + l;
                    })(e, t),
                }) || (E(), !1),
            [s, E],
        ),
        validateDateFilter: n.useCallback(() => !i || (E(), !1), [i, E]),
    };
}
