n.d(t, { A: () => G }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(735438),
    r = n.n(l),
    s = n(311907),
    o = n(397927),
    d = n(711950),
    c = n(49229),
    u = n(820284),
    A = n(793574),
    h = n(688810),
    _ = n(429913),
    m = n(70730),
    g = n(45787),
    p = n(275759),
    E = n(21119),
    I = n(994500),
    f = n(595623),
    C = n(531685),
    T = n(98165),
    N = n(174279),
    S = n(278066),
    x = n(594968),
    v = n(979282),
    b = n(575474),
    y = n(535266),
    O = n(787331);
n(646363);
var L = n(652215),
    R = n(788868),
    P = n(985018),
    D = n(998838);
let j = [];
function M() {
    d.A.transitionToSection(L.m3P.ADD_FRIEND, { explicit: !0 });
}
function w() {
    (0, o.mMO)(async () => {
        let { default: e } = await n.e("73152").then(n.bind(n, 516259));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function U(e) {
    let { section: t, showSpamCta: n } = e,
        l = a.useMemo(() => (n ? w : t !== L.m3P.PENDING ? M : void 0), [n, t]);
    return (0, i.jsx)("div", { className: D.y7, children: (0, i.jsx)(S.A, { type: t, onClick: l }, t) });
}
let G = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, h.Ay)(A.A.FRIENDS_LIST),
        { rows: l, section: d } = (0, s.cf)([f.Ay], () => f.Ay.getState()),
        M = (0, s.bG)([C.A], () => C.A.isFocused()),
        { relationshipCount: G, hasBlockedOrIgnored: k } = (0, s.cf)([I.A], () => ({
            relationshipCount: I.A.getRelationshipCount(),
            hasBlockedOrIgnored: I.A.getBlockedOrIgnoredIDs().length > 0,
        })),
        { enabled: V } = T.A.useConfig({ location: "PeopleList" }),
        [B, H] = a.useState([]),
        F = a.useCallback((e) => {
            let { enabled: t } = T.A.getConfig({ location: "Friend Request Accept" });
            t && H((t) => [...t, e]);
        }, []);
    d !== L.m3P.PENDING && B.length > 0 && H([]);
    let [Y, W] = a.useState(() => {
            let e = {};
            for (let t of Object.values(L.m3P)) e[t] = "";
            return e;
        }),
        K = (0, m.p)(A.A.FRIENDS_LIST),
        [q, z] = a.useState(!1),
        $ = a.useCallback(
            (e, t) => {
                let { key: a, ...l } = e;
                switch (d) {
                    case L.m3P.PENDING:
                        return (0, i.jsx)(x.A, { ...l, isFocused: M, onAcceptFriendRequest: () => F(e) }, a);
                    case L.m3P.SUGGESTIONS:
                        return (0, i.jsx)(O.A, { ...l, isFocused: M }, a);
                    case L.m3P.ALL:
                        return (0, i.jsx)(
                            N.A,
                            {
                                ...l,
                                isFocused: M,
                                analyticsLocations: n,
                                sectionIndex: t,
                                hasFriendAnniversarySection: K,
                            },
                            `${t}-${a}`,
                        );
                    case L.m3P.ONLINE:
                    default:
                        return (0, i.jsx)(N.A, { ...l, isFocused: M, analyticsLocations: n }, a);
                }
            },
            [d, M, n, K, F],
        ),
        X = a.useCallback(
            (e) => {
                W({ ...Y, [d]: e });
            },
            [Y, d],
        ),
        Q = a.useCallback(() => {
            W({ ...Y, [d]: "" });
        }, [Y, d]),
        Z = a.useMemo(
            () =>
                d === L.m3P.PENDING && (l.filter(L.m3P.SPAM).length > 0 || l.filter(L.m3P.PENDING_IGNORED).length > 0),
            [l, d],
        ),
        J = a.useMemo(() => {
            let e = l.filter(d, Y[d]);
            return (
                V &&
                    d === L.m3P.PENDING &&
                    "" === Y[d] &&
                    (e = r()([...e, ...B])
                        .uniqBy("key")
                        .sortBy(
                            (e) => e.nickname?.toLowerCase() ?? e.user?.globalName?.toLowerCase() ?? e.usernameLower,
                        )
                        .value()),
                e
            );
        }, [B, V, l, Y, d]),
        ee = d === L.m3P.PENDING,
        et = a.useMemo(() => {
            if (!ee) return j;
            let e = [];
            return (
                J.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [ee, J]);
    (0, _.A)(et, ee);
    let en = a.useMemo(
            () =>
                d === L.m3P.ALL && K && J.some((e) => e.giftIntentType === R.np.FRIEND_ANNIVERSARY)
                    ? J.filter((e) => e.giftIntentType === R.np.FRIEND_ANNIVERSARY).length
                    : 0,
            [J, d, K],
        ),
        ei = a.useMemo(() => {
            switch (d) {
                case L.m3P.PENDING:
                    let e = [],
                        t = [];
                    return (
                        J.forEach((n) => {
                            n.type === L.eA$.PENDING_INCOMING
                                ? e.push(n)
                                : n.type === L.eA$.PENDING_OUTGOING && t.push(n);
                        }),
                        [e, t]
                    );
                case L.m3P.ALL:
                    if (!(K && J.some((e) => e.giftIntentType === R.np.FRIEND_ANNIVERSARY))) return [J];
                    {
                        let e = [];
                        return (
                            J.forEach((t) => {
                                t.giftIntentType === R.np.FRIEND_ANNIVERSARY && e.push(t);
                            }),
                            e.sort((e, t) => E.A.compareByDmProbability(e.userId, t.userId)),
                            [q ? e : e.slice(0, p.ZD), J]
                        );
                    }
                default:
                    return [J];
            }
        }, [J, d, q, K]),
        ea = a.useMemo(() => J.filter((e) => e.type === L.eA$.PENDING_INCOMING).length, [J]),
        el = d === L.m3P.PENDING && ea > 0 && ea >= 5,
        er = a.useCallback(
            (e) => {
                e.stopPropagation(), c.A.confirmClearPendingRelationships(ea);
            },
            [ea],
        ),
        es = a.useCallback(() => {
            z((e) => !e);
        }, []),
        eo = a.useCallback(
            (e) => {
                let n = ei[e],
                    a = (function (e, t, n, i) {
                        switch (e) {
                            case L.m3P.ONLINE:
                                return P.intl.formatToPlainString(P.t.BagU2U, { online: t.toString() });
                            case L.m3P.PENDING:
                                if (0 === n) return P.intl.formatToPlainString(P.t["g+3FIa"], { count: t.toString() });
                                if (1 === n) return P.intl.formatToPlainString(P.t.npJsRl, { count: t.toString() });
                                throw Error(`Unexpected pending friend requests section index: ${n}`);
                            case L.m3P.SUGGESTIONS:
                                return P.intl.formatToPlainString(P.t["DYMZ/p"], { count: t.toString() });
                            default:
                                if ((0, m.p)(A.A.FRIENDS_LIST) && i)
                                    if (0 === n) return P.intl.formatToPlainString(P.t.rrZTqK, { count: t.toString() });
                                    else if (1 === n);
                                    else throw Error(`Unexpected friends all section index: ${n}`);
                                return P.intl.formatToPlainString(P.t.rHRrhC, { count: t.toString() });
                        }
                    })(
                        d,
                        n.length,
                        e,
                        n.some((e) => e.giftIntentType === R.np.FRIEND_ANNIVERSARY),
                    );
                return d === L.m3P.PENDING && 0 === e
                    ? (0, i.jsxs)(
                          "div",
                          {
                              className: D.Gf,
                              children: [
                                  (0, i.jsx)(y.A, { id: t, title: a }),
                                  el &&
                                      (0, i.jsx)("div", {
                                          className: D.mt,
                                          children: (0, i.jsx)(o.QWc, {
                                              text: P.intl.string(P.t.O8k7O4),
                                              onClick: er,
                                              "aria-label": P.intl.string(P.t.O8k7O4),
                                              textVariant: "text-sm/medium",
                                          }),
                                      }),
                              ],
                          },
                          a,
                      )
                    : (0, i.jsx)("div", { className: D.Gf, children: (0, i.jsx)(y.A, { id: t, title: a }) }, a);
            },
            [ei, d, t, el, er],
        ),
        ed = a.useCallback(
            (e) =>
                d === L.m3P.ALL && 0 === e && K && en > p.ZD
                    ? (0, i.jsx)("div", {
                          className: D.Nf,
                          children: (0, i.jsx)(o.Button, {
                              icon: q ? o.tN5 : o.abt,
                              variant: "secondary",
                              size: "sm",
                              text: P.intl.string(q ? P.t["6MwJo/"] : P.t["37C26f"]),
                              onClick: es,
                              "aria-label": P.intl.string(q ? P.t["6MwJo/"] : P.t["37C26f"]),
                          }),
                      })
                    : null,
            [d, en, q, es, K],
        );
    if (
        (a.useEffect(() => {
            d === L.m3P.ALL && (0, g.Ad)();
        }, [d]),
        a.useEffect(() => {
            z(!1);
        }, [d, en]),
        0 === J.length && "" === Y[d])
    )
        return (0, i.jsx)(U, { section: d, showSpamCta: Z });
    let ec = "" !== Y[d],
        eu = 0 === J.length && ec;
    return (0, i.jsx)(h.f5, {
        value: n,
        children: (0, i.jsxs)(u.A, {
            section: L.JJy.FRIENDS_LIST,
            children: [
                k && (0, i.jsx)(b.g, {}),
                (0, i.jsx)("div", {
                    className: D.ON,
                    children: (0, i.jsx)(o.IWV, { query: Y[d], onChange: X, onClear: Q }),
                }),
                (0, i.jsx)(v.A, {
                    rows: ei,
                    renderRow: $,
                    renderSection: eo,
                    sectionFilter: d,
                    isVirtualizedList: G >= 64,
                    hasSearchQuery: ec,
                    renderSectionFooter: ed,
                    footer:
                        Z && !eu
                            ? (0, i.jsx)("div", {
                                  className: D.RE,
                                  children: (0, i.jsx)(o.QWc, {
                                      text: P.intl.string(P.t.R40bU2),
                                      onClick: w,
                                      textVariant: "text-xs/medium",
                                      variant: "secondary",
                                  }),
                              })
                            : null,
                }),
                eu &&
                    (0, i.jsx)("div", {
                        className: D.y7,
                        children: (0, i.jsx)(S.A, { type: S.a.SECTION_NO_RESULTS }, d),
                    }),
            ],
        }),
    });
};
