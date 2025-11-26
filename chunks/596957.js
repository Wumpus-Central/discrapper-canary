n.d(t, { Z: () => M }), n(415506), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(529103),
    o = n(194359),
    c = n(410575),
    u = n(100527),
    d = n(906732),
    p = n(835473),
    f = n(522558),
    h = n(795448),
    g = n(441623),
    m = n(699516),
    _ = n(974042),
    b = n(451478),
    E = n(701861),
    O = n(437314),
    y = n(696577),
    v = n(163417),
    I = n(830880),
    C = n(492347),
    S = n(42575),
    T = n(617015),
    N = n(981631),
    j = n(474936),
    P = n(388032),
    x = n(983703);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = [];
function L() {
    s.Z.transitionToSection(N.pJs.ADD_FRIEND, { explicit: !0 });
}
function R() {
    (0, a.ZDy)(async () => {
        let { default: e } = await n.e("36312").then(n.bind(n, 153932));
        return (t) => (0, r.jsx)(e, A({}, t));
    });
}
function D(e) {
    let { section: t, showSpamCta: n } = e,
        l = i.useMemo(() => (n ? R : t !== N.pJs.PENDING ? L : void 0), [n, t]);
    return (0, r.jsx)("div", {
        className: x.emptyStateContainer,
        children: (0, r.jsx)(
            O.Z,
            {
                type: t,
                onClick: l,
            },
            t,
        ),
    });
}
let M = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, d.ZP)(u.Z.FRIENDS_LIST),
        { rows: s, section: L } = (0, l.cj)([_.ZP], () => _.ZP.getState()),
        M = (0, l.e7)([b.Z], () => b.Z.isFocused()),
        { relationshipCount: k, hasBlockedOrIgnored: U } = (0, l.cj)([m.Z], () => ({
            relationshipCount: m.Z.getRelationshipCount(),
            hasBlockedOrIgnored: m.Z.getBlockedOrIgnoredIDs().length > 0,
        })),
        [G, B] = i.useState(() => {
            let e = {};
            for (let t of Object.values(N.pJs)) e[t] = "";
            return e;
        }),
        H = (0, f.i)(u.Z.FRIENDS_LIST),
        [V, F] = i.useState(!1),
        z = i.useCallback(
            (e) => {
                let { key: t } = e,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                        }
                        return i;
                    })(e, ["key"]);
                switch (L) {
                    case N.pJs.PENDING:
                        return (0, r.jsx)(y.Z, Z(A({}, n), { isFocused: M }), t);
                    case N.pJs.SUGGESTIONS:
                        return (0, r.jsx)(S.Z, Z(A({}, n), { isFocused: M }), t);
                    case N.pJs.ALL:
                        return (0, r.jsx)(
                            E.Z,
                            Z(A({}, n), {
                                isFocused: M,
                                hasFriendAnniversarySection: H,
                            }),
                            t,
                        );
                    case N.pJs.ONLINE:
                    default:
                        return (0, r.jsx)(E.Z, Z(A({}, n), { isFocused: M }), t);
                }
            },
            [M, L, H],
        ),
        Y = i.useCallback(
            (e) => {
                B(Z(A({}, G), { [L]: e }));
            },
            [G, L],
        ),
        W = i.useCallback(() => {
            B(Z(A({}, G), { [L]: "" }));
        }, [G, L]),
        q = i.useMemo(
            () =>
                L === N.pJs.PENDING && (s.filter(N.pJs.SPAM).length > 0 || s.filter(N.pJs.PENDING_IGNORED).length > 0),
            [s, L],
        ),
        K = i.useMemo(() => s.filter(L, G[L]), [s, G, L]),
        Q = L === N.pJs.PENDING,
        J = i.useMemo(() => {
            if (!Q) return w;
            let e = [];
            return (
                K.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [Q, K]);
    (0, p.Z)(J, Q);
    let X = i.useMemo(
            () =>
                L === N.pJs.ALL && H && K.some((e) => e.giftIntentType === j.hX.FRIEND_ANNIVERSARY)
                    ? K.filter((e) => e.giftIntentType === j.hX.FRIEND_ANNIVERSARY).length
                    : 0,
            [K, L, H],
        ),
        $ = i.useMemo(() => {
            switch (L) {
                case N.pJs.PENDING:
                    let e = [],
                        t = [];
                    return (
                        K.forEach((n) => {
                            n.type === N.OGo.PENDING_INCOMING
                                ? e.push(n)
                                : n.type === N.OGo.PENDING_OUTGOING && t.push(n);
                        }),
                        [e, t]
                    );
                case N.pJs.ALL:
                    if (!(H && K.some((e) => e.giftIntentType === j.hX.FRIEND_ANNIVERSARY))) return [K];
                    {
                        let e = [],
                            t = [];
                        return (
                            K.forEach((n) => {
                                n.giftIntentType === j.hX.FRIEND_ANNIVERSARY ? e.push(n) : t.push(n);
                            }),
                            [V ? e : e.slice(0, g.zj), t]
                        );
                    }
                default:
                    return [K];
            }
        }, [K, L, V, H]),
        ee = i.useMemo(() => K.filter((e) => e.type === N.OGo.PENDING_INCOMING).length, [K]),
        et = L === N.pJs.PENDING && ee > 0 && ee >= T.yf,
        en = i.useCallback(
            (e) => {
                e.stopPropagation(), o.Z.confirmClearPendingRelationships(ee);
            },
            [ee],
        ),
        er = i.useCallback(() => {
            F((e) => !e);
        }, []),
        ei = i.useCallback(
            (e) => {
                let n = $[e],
                    i = (function (e, t, n, r) {
                        switch (e) {
                            case N.pJs.ONLINE:
                                return P.intl.formatToPlainString(P.t.BagU2U, { online: t.toString() });
                            case N.pJs.PENDING:
                                if (0 === n) return P.intl.formatToPlainString(P.t["g+3FIa"], { count: t.toString() });
                                if (1 === n) return P.intl.formatToPlainString(P.t.npJsRl, { count: t.toString() });
                                throw Error("Unexpected pending friend requests section index: ".concat(n));
                            case N.pJs.SUGGESTIONS:
                                return P.intl.formatToPlainString(P.t["DYMZ/p"], { count: t.toString() });
                            default:
                                if ((0, f.i)(u.Z.FRIENDS_LIST) && r)
                                    if (0 === n) return P.intl.string(P.t.Thb5MO);
                                    else if (1 === n);
                                    else throw Error("Unexpected friends all section index: ".concat(n));
                                return P.intl.formatToPlainString(P.t.rHRrhC, { count: t.toString() });
                        }
                    })(
                        L,
                        n.length,
                        e,
                        n.some((e) => e.giftIntentType === j.hX.FRIEND_ANNIVERSARY),
                    );
                return L === N.pJs.PENDING && 0 === e
                    ? (0, r.jsxs)(
                          "div",
                          {
                              className: x.sectionTitle,
                              children: [
                                  (0, r.jsx)(C.Z, {
                                      id: t,
                                      title: i,
                                  }),
                                  et &&
                                      (0, r.jsx)("div", {
                                          className: x.clearButton,
                                          children: (0, r.jsx)(a.Avr, {
                                              text: P.intl.string(P.t.O8k7O4),
                                              onClick: en,
                                              "aria-label": P.intl.string(P.t.O8k7O4),
                                              textVariant: "text-sm/medium",
                                          }),
                                      }),
                              ],
                          },
                          i,
                      )
                    : (0, r.jsx)(
                          "div",
                          {
                              className: x.sectionTitle,
                              children: (0, r.jsx)(C.Z, {
                                  id: t,
                                  title: i,
                              }),
                          },
                          i,
                      );
            },
            [$, L, t, et, en],
        ),
        el = i.useCallback(
            (e) =>
                L === N.pJs.ALL && 0 === e && H && X > g.zj
                    ? (0, r.jsx)("div", {
                          className: x.sectionFooter,
                          children: (0, r.jsx)(a.Button, {
                              icon: V ? a.u04 : a.CJ0,
                              variant: "secondary",
                              size: "sm",
                              text: P.intl.string(V ? P.t["6MwJo/"] : P.t["37C26f"]),
                              onClick: er,
                              "aria-label": P.intl.string(V ? P.t["6MwJo/"] : P.t["37C26f"]),
                          }),
                      })
                    : null,
            [L, X, V, er, H],
        );
    if (
        (i.useEffect(() => {
            L === N.pJs.ALL && (0, h.d$)();
        }, [L]),
        i.useEffect(() => {
            F(!1);
        }, [L, X]),
        0 === K.length && "" === G[L])
    )
        return (0, r.jsx)(D, {
            section: L,
            showSpamCta: q,
        });
    let ea = "" !== G[L],
        es = 0 === K.length && ea;
    return (0, r.jsx)(d.Gt, {
        value: n,
        children: (0, r.jsxs)(c.Z, {
            section: N.jXE.FRIENDS_LIST,
            children: [
                U && (0, r.jsx)(I.R, {}),
                (0, r.jsx)("div", {
                    className: x.searchBar,
                    children: (0, r.jsx)(a.E1j, {
                        query: G[L],
                        onChange: Y,
                        onClear: W,
                    }),
                }),
                (0, r.jsx)(v.Z, {
                    rows: $,
                    renderRow: z,
                    renderSection: ei,
                    sectionFilter: L,
                    isVirtualizedList: k >= T.nG,
                    hasSearchQuery: ea,
                    renderSectionFooter: el,
                    footer:
                        q && !es
                            ? (0, r.jsx)("div", {
                                  className: x.viewSpamButton,
                                  children: (0, r.jsx)(a.Avr, {
                                      text: P.intl.string(P.t.R40bU2),
                                      onClick: R,
                                      textVariant: "text-xs/medium",
                                      variant: "secondary",
                                  }),
                              })
                            : null,
                }),
                es &&
                    (0, r.jsx)("div", {
                        className: x.emptyStateContainer,
                        children: (0, r.jsx)(O.Z, { type: O.j.SECTION_NO_RESULTS }, L),
                    }),
            ],
        }),
    });
};
