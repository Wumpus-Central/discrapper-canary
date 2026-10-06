(l.d(t, {
    CT: () => Q,
    H3: () => B,
    Ht: () => X,
    KD: () => Y,
    Ky: () => Z,
    TT: () => x,
    _2: () => V,
    dY: () => K,
    ps: () => H,
    u2: () => j,
    vj: () => G,
    wf: () => J,
}),
    l(321073),
    l(667532));
var r = l(477900),
    n = l(582128),
    u = l(435558),
    a = l(536637),
    s = l.n(a),
    i = l(132500),
    o = l(17928),
    c = l(778712),
    E = l(173936),
    L = l(11023),
    f = l(642846),
    g = l(514042),
    h = l(428689),
    d = l(191023),
    R = l(7807),
    T = l(797285),
    I = l(292801),
    _ = l(950305),
    A = l(430392),
    F = l(39619),
    p = l(157559),
    N = l(713654),
    S = l(734057),
    W = l(287809),
    k = l(403362),
    y = l(562153),
    b = l(427262),
    m = l(256796),
    M = l(692986),
    C = l(822382),
    O = l(304578),
    v = l(674142),
    U = l(315059);
l(76497);
var D = l(652215),
    $ = l(375708);
function q(e) {
    let { searchContext: t, filter: l, queryString: r } = e,
        u = (0, o.bG)([M.A], () => M.A.getState(t), [t], o.My),
        a = n.useMemo(() => {
            let e = u.autocompletes[0];
            return null != e && e.group === l ? e.results : [];
        }, [u.autocompletes, l]),
        s = n.useMemo(() => {
            let e = O.Ay[l].key;
            return `${e} ${r}`;
        }, [l, r]),
        i = n.useCallback(() => {
            let e = (0, C._o)(s),
                l = (0, C.zZ)(e, s.length - 1, s.length - 1);
            m.A.updateAutocompleteQuery({ searchContext: t, tokens: e, cursorScope: l, queryString: s });
        }, [t, s]),
        c = n.useCallback(() => {
            i();
        }, [i]);
    return (
        n.useEffect(() => {
            r.trim().length > 0 && i();
        }, [s, t, i, r]),
        { filterAutocompleteResults: a, handleFocusFilter: c, autocompleteStoreState: u }
    );
}
function P(e) {
    let { user: t, guildId: l, channelId: r } = e,
        n = y.Ay.getName(l, r, t),
        u = t.getAvatarURL(l, (0, c.FT)(c._3.SIZE_24));
    return { value: t.id, label: n, key: t.id, id: t.id, leading: { type: "avatar", src: u }, trailing: t.username };
}
function H(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = n.useMemo(() => (0, C.mt)(e), [e]),
        u = n.useMemo(() => (0, C._b)(e), [e]),
        [a, s] = n.useState(l),
        [i, o] = n.useState(""),
        {
            filterAutocompleteResults: c,
            handleFocusFilter: E,
            autocompleteStoreState: L,
        } = q({ searchContext: e, filter: t, queryString: i }),
        f = n.useMemo(() => {
            let e = [],
                t = new Set();
            if (c.length > 0)
                c.forEach((l) => {
                    let n = l.user,
                        a = P({ user: n, guildId: r, channelId: u });
                    (t.add(n.id), e.push(a));
                });
            else {
                let { tokens: l } = L,
                    n = l[l.length - 1];
                if (
                    null != n &&
                    (n.type === D.LWr.ANSWER_USERNAME_FROM || n.type === D.LWr.ANSWER_USERNAME_MENTIONS) &&
                    (0, O.sC)(n)
                ) {
                    let l = n.getData("userId"),
                        a = W.default.getUser(l);
                    if (null != a) {
                        let l = P({ user: a, guildId: r, channelId: u });
                        (t.add(a.id), e.push(l));
                    }
                }
            }
            return (
                a.length > 0 &&
                    a.forEach((l) => {
                        if (t.has(l)) return;
                        let n = W.default.getUser(l);
                        if (null == n) return;
                        let a = P({ user: n, guildId: r, channelId: u });
                        (t.add(l), e.unshift(a));
                    }),
                e
            );
        }, [L, c, a, r, u]),
        g = n.useCallback(() => {
            (s([]), o(""));
        }, []),
        h = n.useCallback(() => {
            o("");
        }, []),
        d = n.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = O.Ay[e];
                return a
                    .map((e) => {
                        let l = W.default.getUser(e);
                        if (null == l) return null;
                        let r = b.Ay.getUserTag(l);
                        return "" === r ? null : `${t.key} ${r}`;
                    })
                    .filter(k.Vq)
                    .join(" ");
            },
            [a],
        );
    return {
        options: f,
        query: a,
        setQuery: s,
        setQueryString: o,
        handleClearFilter: g,
        getApplyQueryString: d,
        handleFocusFilter: E,
        handleBlurFilter: h,
    };
}
function w(e) {
    let t,
        { channel: l } = e;
    if (l.isDM()) {
        let e = l.getRecipientId(),
            r = W.default.getUser(e);
        null != r && (t = { type: "avatar", src: r.getAvatarURL(null, (0, c.FT)(c._3.SIZE_20)) });
    } else
        t = l.isGroupDM()
            ? (0, r.jsx)(U.A, { channel: l, avatarSize: c._3.SIZE_20, iconSize: "refresh_sm" })
            : (0, N.gU)(l);
    return { value: l.id, label: (0, C.E3)(l), key: l.id, id: l.id, leading: t };
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, r] = n.useState(t),
        [u, a] = n.useState(""),
        {
            filterAutocompleteResults: s,
            handleFocusFilter: i,
            autocompleteStoreState: o,
        } = q({ searchContext: e, filter: D.LWr.FILTER_IN, queryString: u }),
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
                let { tokens: l } = o,
                    n = l[l.length - 1];
                if (null != n && n.type === D.LWr.ANSWER_IN && (0, O.Yd)(n, e)) {
                    let e = n.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let l = S.A.getChannel(e);
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
                        let l = S.A.getChannel(e);
                        if (null == l) return;
                        let n = w({ channel: l });
                        (r.add(e), t.unshift(n));
                    }),
                t
            );
        }, [o, s, l, e]),
        E = n.useCallback(() => {
            (r([]), a(""));
        }, []),
        L = n.useCallback(() => {
            a("");
        }, []),
        f = n.useCallback(
            (e) => {
                if (0 === l.length) return null;
                let t = O.Ay[e];
                return l
                    .map((e) => {
                        let l = S.A.getChannel(e);
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
        setQueryString: a,
        handleClearFilter: E,
        getApplyQueryString: f,
        handleFocusFilter: i,
        handleBlurFilter: L,
    };
}
function Y(e) {
    switch (e) {
        case $.intl.string($.t.ZNR2fi):
            return E.LinkIcon;
        case $.intl.string($.t["20uQR3"]):
            return L.J;
        case $.intl.string($.t.L4lxyE):
            return f.Y;
        case $.intl.string($.t["AV/v6i"]):
            return g.FileIcon;
        case $.intl.string($.t.XM9XGP):
            return h.VideoIcon;
        case $.intl.string($.t.TNLcpx):
            return d.ImageIcon;
        case $.intl.string($.t.F8Wf0e):
            return R.J;
        case $.intl.string($.t.PJgX2h):
            return T.t;
        case $.intl.string($.t.nrpA5E):
            return I.t;
        default:
            return null;
    }
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, r] = n.useState(t),
        { filterAutocompleteResults: u, handleFocusFilter: a } = q({
            searchContext: e,
            filter: D.LWr.FILTER_HAS,
            queryString: "",
        }),
        s = n.useMemo(() => {
            if (0 === u.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                l.length > 0 &&
                    l.forEach((l) => {
                        (t.add(l), e.push({ value: l, label: l, key: l, id: l, leading: Y(l) }));
                    }),
                u.length > 0 &&
                    u.forEach((l) => {
                        let { text: r } = l;
                        t.has(r) || (e.push({ value: r, label: r, key: r, id: r, leading: Y(r) }), t.add(r));
                    }),
                e
            );
        }, [u, l]),
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
    return { options: s, query: l, setQuery: r, handleClearFilter: i, getApplyQueryString: o, handleFocusFilter: a };
}
function z() {
    return n.useMemo(() => {
        let e = O.Ay[D.LWr.FILTER_BEFORE],
            t = O.Ay[D.LWr.FILTER_AFTER],
            l = O.Ay[D.LWr.FILTER_ON];
        return {
            beforeFilter: e?.key ?? `${$.intl.string($.t["qZ+7BA"])}:`,
            afterFilter: t?.key ?? `${$.intl.string($.t.KSDx7M)}:`,
            duringFilter: l?.key ?? `${$.intl.string($.t.h2NzSd)}:`,
        };
    }, []);
}
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, l] = n.useState(e),
        r = n.useCallback(() => (0, i.A)(), []),
        u = n.useCallback((e) => e.date.isValid(), []),
        a = n.useMemo(() => t.filter(u), [t, u]),
        { beforeFilter: o, afterFilter: c, duringFilter: E } = z(),
        L = n.useCallback(() => ({ query: o, date: s()(), id: r() }), [o, r]),
        f = n.useMemo(
            () => [
                { key: "Before", label: $.intl.string($.t["ptL/DP"]), value: o },
                { key: "After", label: $.intl.string($.t.waQeEV), value: c },
                { key: "During", label: $.intl.string($.t.LT5TnZ), value: E },
            ],
            [o, c, E],
        ),
        g = n.useCallback((e) => {
            let { query: t, index: r } = e;
            l((e) => {
                let l = [...e];
                return ((l[r] = { ...l[r], query: t }), l);
            });
        }, []),
        h = n.useCallback((e) => {
            let { date: t, index: r } = e;
            l((e) => {
                let l = [...e];
                return ((l[r] = { ...l[r], date: t }), l);
            });
        }, []),
        d = n.useCallback(() => {
            l((e) => [...e, L()]);
        }, [L]),
        R = n.useCallback((e) => {
            l((t) => {
                let l = [...t];
                return (l.splice(e, 1), l);
            });
        }, []),
        T = n.useCallback(() => {
            l([]);
        }, []),
        I = n.useCallback(
            () =>
                0 === a.length
                    ? null
                    : a
                          .map((e) => {
                              let { query: t, date: l } = e,
                                  r = l.format(D.ump);
                              return `${t} ${r}`;
                          })
                          .join(" "),
            [a],
        );
    return {
        options: f,
        dates: t,
        validDates: a,
        handleDateQueryChange: g,
        handleDateChange: h,
        handleAddDateFilter: d,
        handleRemoveDateFilter: R,
        handleClearDateFilter: T,
        getDateQueryString: I,
    };
}
function X(e) {
    switch (e) {
        case $.intl.string($.t.tPZo4p):
            return _.UserIcon;
        case $.intl.string($.t.JL7sRS):
            return A.RobotIcon;
        case $.intl.string($.t.WjkIKU):
            return F.X;
    }
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [l, r] = n.useState(t),
        { filterAutocompleteResults: u, handleFocusFilter: a } = q({
            searchContext: e,
            filter: D.LWr.FILTER_AUTHOR_TYPE,
            queryString: "",
        }),
        s = n.useMemo(() => {
            if (0 === u.length && 0 === l.length) return [];
            let e = [],
                t = new Set();
            return (
                l.length > 0 &&
                    l.forEach((l) => {
                        (t.add(l), e.push({ value: l, label: l, key: l, id: l, leading: X(l) }));
                    }),
                u.length > 0 &&
                    u.forEach((l) => {
                        let { text: r } = l;
                        t.has(r) || (e.push({ value: r, label: r, key: r, id: r, leading: X(r) }), t.add(r));
                    }),
                e
            );
        }, [u, l]),
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
    return { options: s, query: l, setQuery: r, handleClearFilter: i, getApplyQueryString: o, handleFocusFilter: a };
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [l, r] = n.useState(t),
        u = n.useMemo(() => {
            let t =
                O.Ay[D.LWr.FILTER_PINNED].getAutocompletions?.({ query: "", maxResults: 10, searchContext: e }) ?? [];
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
        a = n.useCallback(() => {
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
    return { options: u, query: l, setQuery: r, handleClearFilter: a, getApplyQueryString: s };
}
function G(e, t) {
    let { beforeFilter: l, afterFilter: r, duringFilter: u } = z(),
        a = (0, v.o)(t);
    return n.useMemo(() => {
        let t = {
                [D.LWr.FILTER_FROM]: [],
                [D.LWr.FILTER_MENTIONS]: [],
                [D.LWr.FILTER_HAS]: [],
                [D.LWr.FILTER_IN]: [],
                [D.LWr.FILTER_ON]: [],
                [D.LWr.FILTER_BEFORE]: [],
                [D.LWr.FILTER_AFTER]: [],
                [D.LWr.FILTER_PINNED]: null,
                [D.LWr.FILTER_AUTHOR_TYPE]: [],
            },
            n = [],
            o = 0;
        e.forEach((e) => {
            if (D.T2E.test(e.type))
                switch (e.type) {
                    case D.LWr.ANSWER_USERNAME_FROM:
                        if (a.has(D.LWr.FILTER_FROM)) {
                            let l = t[D.LWr.FILTER_FROM],
                                r = e.getData("userId");
                            (l.push(r), (o += 1));
                        }
                        break;
                    case D.LWr.ANSWER_USERNAME_MENTIONS:
                        if (a.has(D.LWr.FILTER_MENTIONS)) {
                            let l = t[D.LWr.FILTER_MENTIONS],
                                r = e.getData("userId");
                            (l.push(r), (o += 1));
                        }
                        break;
                    case D.LWr.ANSWER_HAS:
                        let c = t[D.LWr.FILTER_HAS],
                            E = e.getData("has");
                        (c.push((0, O.ok)(E)), (o += 1));
                        break;
                    case D.LWr.ANSWER_IN:
                        if (a.has(D.LWr.FILTER_IN)) {
                            let l = t[D.LWr.FILTER_IN],
                                r = e.getData("channelIds") ?? [];
                            (l.push(...r), (o += 1));
                        }
                        break;
                    case D.LWr.ANSWER_BEFORE:
                        let L = t[D.LWr.FILTER_BEFORE],
                            f = e.getData("end"),
                            g = { query: l, date: s()(f), id: (0, i.A)() };
                        (L.push(g), n.push(g), (o += 1));
                        break;
                    case D.LWr.ANSWER_ON:
                        let h = t[D.LWr.FILTER_ON],
                            d = e.getData("start"),
                            R = { query: u, date: s()(d), id: (0, i.A)() };
                        (h.push(R), n.push(R), (o += 1));
                        break;
                    case D.LWr.ANSWER_AFTER:
                        let T = t[D.LWr.FILTER_AFTER],
                            I = e.getData("start"),
                            _ = { query: r, date: s()(I).subtract(1, "day"), id: (0, i.A)() };
                        (T.push(_), n.push(_), (o += 1));
                        break;
                    case D.LWr.ANSWER_PINNED:
                        let A = t[D.LWr.FILTER_PINNED],
                            F = e.getData("pinned").toString();
                        (null === A ? (A = F) : "true" !== A && "true" === F && (A = F),
                            (t[D.LWr.FILTER_PINNED] = A),
                            (o += 1));
                        break;
                    case D.LWr.ANSWER_AUTHOR_TYPE:
                        if (a.has(D.LWr.FILTER_AUTHOR_TYPE)) {
                            let l = t[D.LWr.FILTER_AUTHOR_TYPE],
                                r = e.getData("author_type");
                            (l.push((0, O.lq)(r)), (o += 1));
                        }
                }
        });
        let c = {
            [D.LWr.FILTER_FROM]: t[D.LWr.FILTER_FROM],
            [D.LWr.FILTER_MENTIONS]: t[D.LWr.FILTER_MENTIONS],
            [D.LWr.FILTER_HAS]: t[D.LWr.FILTER_HAS],
            [D.LWr.FILTER_IN]: t[D.LWr.FILTER_IN],
            dateFilters: n,
            [D.LWr.FILTER_AUTHOR_TYPE]: t[D.LWr.FILTER_AUTHOR_TYPE],
            [D.LWr.FILTER_PINNED]: t[D.LWr.FILTER_PINNED],
        };
        return { allPrefilledSearchFilters: t, totalFilters: o, prefilledSearchFilters: c, eligibleFilterTokens: a };
    }, [e, l, r, u, a]);
}
function J(e, t) {
    return e === t || (0, u.isEqual)(e, t);
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
function K(e) {
    let { nonFilterQueryString: t, filterQueryString: l } = e,
        r = +(l.length > 0),
        u = +(t.length > 0),
        a = 512 - t.length - u - r,
        s = n.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return l.length + t.length > a;
            },
            [l.length, a],
        ),
        i = n.useMemo(() => l.length + 18 > a, [l.length, a]),
        o = n.useCallback(() => {
            p.A.show({
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
                            r = O.Ay[e];
                        switch (e) {
                            case D.LWr.FILTER_FROM:
                            case D.LWr.FILTER_MENTIONS:
                                let n = W.default.getUser(t);
                                l = null == n ? t : `${n.username}`;
                                break;
                            case D.LWr.FILTER_IN:
                                let u = S.A.getChannel(t);
                                if (null == u) l = t;
                                else {
                                    let e = (0, C.E3)(u);
                                    l = (0, C.TZ)(e);
                                }
                                break;
                            case D.LWr.FILTER_HAS:
                            case D.LWr.FILTER_PINNED:
                            case D.LWr.FILTER_AUTHOR_TYPE:
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
