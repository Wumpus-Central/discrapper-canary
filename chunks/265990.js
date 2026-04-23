n.d(t, { A: () => $ }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(311907),
    o = n(192308),
    c = n(123292),
    d = n(821609),
    u = n(900797),
    m = n(847374),
    A = n(892547),
    h = n(711950),
    x = n(49229),
    p = n(820284),
    g = n(793574),
    N = n(688810),
    f = n(429913),
    _ = n(70730),
    I = n(45787),
    v = n(275759),
    j = n(21119),
    C = n(994500),
    y = n(595623),
    S = n(531685),
    E = n(98165),
    T = n(174279),
    b = n(278066),
    P = n(594968),
    L = n(756901),
    R = n(575474),
    D = n(535266),
    O = n(787331);
n(646363);
var k = n(652215),
    F = n(788868),
    w = n(985018),
    G = n(795733);
let M = [];
function U() {
    h.A.transitionToSection(k.m3P.ADD_FRIEND, { explicit: !0 });
}
function V() {
    (0, o.openModalLazy)(async () => {
        let { default: e } = await n.e("50771").then(n.bind(n, 516259));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function Y(e) {
    let { section: t, showSpamCta: n } = e,
        l = s.useMemo(() => (n ? V : t !== k.m3P.PENDING ? U : void 0), [n, t]);
    return (0, i.jsx)("div", { className: G.y7, children: (0, i.jsx)(b.A, { type: t, onClick: l }, t) });
}
let $ = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, N.Ay)(g.A.FRIENDS_LIST),
        { rows: l, section: o } = (0, r.cf)([y.Ay], () => y.Ay.getState()),
        h = (0, r.bG)([S.A], () => S.A.isFocused()),
        { relationshipCount: U, hasBlockedOrIgnored: $ } = (0, r.cf)([C.A], () => ({
            relationshipCount: C.A.getRelationshipCount(),
            hasBlockedOrIgnored: C.A.getBlockedOrIgnoredIDs().length > 0,
        })),
        { enabled: H } = E.A.useConfig({ location: "PeopleList" }),
        [W, z] = s.useState([]),
        q = s.useCallback((e) => {
            let { enabled: t } = E.A.getConfig({ location: "Friend Request Accept" });
            t && z((t) => [...t, e]);
        }, []);
    o !== k.m3P.PENDING && W.length > 0 && z([]);
    let [B, X] = s.useState(() => {
            let e = {};
            for (let t of Object.values(k.m3P)) e[t] = "";
            return e;
        }),
        Q = (0, _.p)(g.A.FRIENDS_LIST),
        [K, Z] = s.useState(!1),
        J = s.useCallback(
            (e, t) => {
                let { key: s, ...l } = e;
                switch (o) {
                    case k.m3P.PENDING:
                        return (0, i.jsx)(P.A, { ...l, isFocused: h, onAcceptFriendRequest: () => q(e) }, s);
                    case k.m3P.SUGGESTIONS:
                        return (0, i.jsx)(O.A, { ...l, isFocused: h }, s);
                    case k.m3P.ALL:
                        return (0, i.jsx)(
                            T.A,
                            {
                                ...l,
                                isFocused: h,
                                analyticsLocations: n,
                                sectionIndex: t,
                                hasFriendAnniversarySection: Q,
                            },
                            `${t}-${s}`,
                        );
                    case k.m3P.ONLINE:
                    default:
                        return (0, i.jsx)(T.A, { ...l, isFocused: h, analyticsLocations: n }, s);
                }
            },
            [o, h, n, Q, q],
        ),
        ee = s.useCallback(
            (e) => {
                X({ ...B, [o]: e });
            },
            [B, o],
        ),
        et = s.useCallback(() => {
            X({ ...B, [o]: "" });
        }, [B, o]),
        en = s.useMemo(
            () =>
                o === k.m3P.PENDING && (l.filter(k.m3P.SPAM).length > 0 || l.filter(k.m3P.PENDING_IGNORED).length > 0),
            [l, o],
        ),
        ei = s.useMemo(() => {
            let e = l.filter(o, B[o]);
            return (
                H &&
                    o === k.m3P.PENDING &&
                    "" === B[o] &&
                    (e = a()([...e, ...W])
                        .uniqBy("key")
                        .sortBy(
                            (e) => e.nickname?.toLowerCase() ?? e.user?.globalName?.toLowerCase() ?? e.usernameLower,
                        )
                        .value()),
                e
            );
        }, [W, H, l, B, o]),
        es = o === k.m3P.PENDING,
        el = s.useMemo(() => {
            if (!es) return M;
            let e = [];
            return (
                ei.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [es, ei]);
    (0, f.A)(el, es);
    let ea = s.useMemo(
            () =>
                o === k.m3P.ALL && Q && ei.some((e) => e.giftIntentType === F.np.FRIEND_ANNIVERSARY)
                    ? ei.filter((e) => e.giftIntentType === F.np.FRIEND_ANNIVERSARY).length
                    : 0,
            [ei, o, Q],
        ),
        er = s.useMemo(() => {
            switch (o) {
                case k.m3P.PENDING:
                    let e = [],
                        t = [];
                    return (
                        ei.forEach((n) => {
                            n.type === k.eA$.PENDING_INCOMING
                                ? e.push(n)
                                : n.type === k.eA$.PENDING_OUTGOING && t.push(n);
                        }),
                        [e, t]
                    );
                case k.m3P.ALL:
                    if (!(Q && ei.some((e) => e.giftIntentType === F.np.FRIEND_ANNIVERSARY))) return [ei];
                    {
                        let e = [];
                        return (
                            ei.forEach((t) => {
                                t.giftIntentType === F.np.FRIEND_ANNIVERSARY && e.push(t);
                            }),
                            e.sort((e, t) => j.A.compareByDmProbability(e.userId, t.userId)),
                            [K ? e : e.slice(0, v.ZD), ei]
                        );
                    }
                default:
                    return [ei];
            }
        }, [ei, o, K, Q]),
        eo = s.useMemo(() => ei.filter((e) => e.type === k.eA$.PENDING_INCOMING).length, [ei]),
        ec = o === k.m3P.PENDING && eo > 0 && eo >= 5,
        ed = s.useCallback(
            (e) => {
                e.stopPropagation(), x.A.confirmClearPendingRelationships(eo);
            },
            [eo],
        ),
        eu = s.useCallback(() => {
            Z((e) => !e);
        }, []),
        em = s.useCallback(
            (e) => {
                let n = er[e],
                    s = (function (e, t, n, i) {
                        switch (e) {
                            case k.m3P.ONLINE:
                                return w.intl.formatToPlainString(w.t.BagU2U, { online: t.toString() });
                            case k.m3P.PENDING:
                                if (0 === n) return w.intl.formatToPlainString(w.t["g+3FIa"], { count: t.toString() });
                                if (1 === n) return w.intl.formatToPlainString(w.t.npJsRl, { count: t.toString() });
                                throw Error(`Unexpected pending friend requests section index: ${n}`);
                            case k.m3P.SUGGESTIONS:
                                return w.intl.formatToPlainString(w.t["DYMZ/p"], { count: t.toString() });
                            default:
                                if ((0, _.p)(g.A.FRIENDS_LIST) && i)
                                    if (0 === n) return w.intl.formatToPlainString(w.t.rrZTqK, { count: t.toString() });
                                    else if (1 === n);
                                    else throw Error(`Unexpected friends all section index: ${n}`);
                                return w.intl.formatToPlainString(w.t.rHRrhC, { count: t.toString() });
                        }
                    })(
                        o,
                        n.length,
                        e,
                        n.some((e) => e.giftIntentType === F.np.FRIEND_ANNIVERSARY),
                    );
                return o === k.m3P.PENDING && 0 === e
                    ? (0, i.jsxs)(
                          "div",
                          {
                              className: G.Gf,
                              children: [
                                  (0, i.jsx)(D.A, { id: t, title: s }),
                                  ec &&
                                      (0, i.jsx)("div", {
                                          className: G.mt,
                                          children: (0, i.jsx)(c.Q, {
                                              text: w.intl.string(w.t.O8k7O4),
                                              onClick: ed,
                                              "aria-label": w.intl.string(w.t.O8k7O4),
                                              textVariant: "text-sm/medium",
                                          }),
                                      }),
                              ],
                          },
                          s,
                      )
                    : (0, i.jsx)("div", { className: G.Gf, children: (0, i.jsx)(D.A, { id: t, title: s }) }, s);
            },
            [er, o, t, ec, ed],
        ),
        eA = s.useCallback(
            (e) =>
                o === k.m3P.ALL && 0 === e && Q && ea > v.ZD
                    ? (0, i.jsx)("div", {
                          className: G.Nf,
                          children: (0, i.jsx)(d.$, {
                              icon: K ? u.t : m.a,
                              variant: "secondary",
                              size: "sm",
                              text: w.intl.string(K ? w.t["6MwJo/"] : w.t["37C26f"]),
                              onClick: eu,
                              "aria-label": w.intl.string(K ? w.t["6MwJo/"] : w.t["37C26f"]),
                          }),
                      })
                    : null,
            [o, ea, K, eu, Q],
        );
    if (
        (s.useEffect(() => {
            o === k.m3P.ALL && (0, I.Ad)();
        }, [o]),
        s.useEffect(() => {
            Z(!1);
        }, [o, ea]),
        0 === ei.length && "" === B[o])
    )
        return (0, i.jsx)(Y, { section: o, showSpamCta: en });
    let eh = "" !== B[o],
        ex = 0 === ei.length && eh;
    return (0, i.jsx)(N.f5, {
        value: n,
        children: (0, i.jsxs)(p.A, {
            section: k.JJy.FRIENDS_LIST,
            children: [
                $ && (0, i.jsx)(R.g, {}),
                (0, i.jsx)("div", {
                    className: G.ON,
                    children: (0, i.jsx)(A.I, { query: B[o], onChange: ee, onClear: et }),
                }),
                (0, i.jsx)(L.A, {
                    rows: er,
                    renderRow: J,
                    renderSection: em,
                    sectionFilter: o,
                    isVirtualizedList: U >= 64,
                    hasSearchQuery: eh,
                    renderSectionFooter: eA,
                    footer:
                        en && !ex
                            ? (0, i.jsx)("div", {
                                  className: G.RE,
                                  children: (0, i.jsx)(c.Q, {
                                      text: w.intl.string(w.t.R40bU2),
                                      onClick: V,
                                      textVariant: "text-xs/medium",
                                      variant: "secondary",
                                  }),
                              })
                            : null,
                }),
                ex &&
                    (0, i.jsx)("div", {
                        className: G.y7,
                        children: (0, i.jsx)(b.A, { type: b.a.SECTION_NO_RESULTS }, o),
                    }),
            ],
        }),
    });
};
