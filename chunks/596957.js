n.d(t, { Z: () => k }), n(415506), n(388685), n(539854), n(642613);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(529103),
    s = n(194359),
    c = n(410575),
    u = n(100527),
    d = n(906732),
    p = n(835473),
    f = n(522558),
    g = n(795448),
    h = n(441623),
    m = n(752048),
    b = n(699516),
    _ = n(974042),
    E = n(451478),
    O = n(701861),
    v = n(437314),
    y = n(696577),
    I = n(163417),
    C = n(830880),
    S = n(492347),
    T = n(42575),
    N = n(617015),
    j = n(981631),
    P = n(474936),
    x = n(388032),
    A = n(535881);
function Z(e) {
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
function w(e, t) {
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
let L = [];
function R() {
    o.Z.transitionToSection(j.pJs.ADD_FRIEND, { explicit: !0 });
}
function D() {
    (0, a.ZDy)(async () => {
        let { default: e } = await n.e("36312").then(n.bind(n, 153932));
        return (t) => (0, r.jsx)(e, Z({}, t));
    });
}
function M(e) {
    let { section: t, showSpamCta: n } = e,
        l = i.useMemo(() => (n ? D : t !== j.pJs.PENDING ? R : void 0), [n, t]);
    return (0, r.jsx)("div", {
        className: A.emptyStateContainer,
        children: (0, r.jsx)(
            v.Z,
            {
                type: t,
                onClick: l,
            },
            t,
        ),
    });
}
let k = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, d.ZP)(u.Z.FRIENDS_LIST),
        { rows: o, section: R } = (0, l.cj)([_.ZP], () => _.ZP.getState()),
        k = (0, l.e7)([E.Z], () => E.Z.isFocused()),
        { relationshipCount: U, hasBlockedOrIgnored: G } = (0, l.cj)([b.Z], () => ({
            relationshipCount: b.Z.getRelationshipCount(),
            hasBlockedOrIgnored: b.Z.getBlockedOrIgnoredIDs().length > 0,
        })),
        [H, B] = i.useState(() => {
            let e = {};
            for (let t of Object.values(j.pJs)) e[t] = "";
            return e;
        }),
        V = (0, f.i)(u.Z.FRIENDS_LIST),
        [F, z] = i.useState(!1),
        Y = i.useCallback(
            (e, t) => {
                let { key: n } = e,
                    i = (function (e, t) {
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
                switch (R) {
                    case j.pJs.PENDING:
                        return (0, r.jsx)(y.Z, w(Z({}, i), { isFocused: k }), n);
                    case j.pJs.SUGGESTIONS:
                        return (0, r.jsx)(T.Z, w(Z({}, i), { isFocused: k }), n);
                    case j.pJs.ALL:
                        return (0, r.jsx)(
                            O.Z,
                            w(Z({}, i), {
                                isFocused: k,
                                sectionIndex: t,
                                hasFriendAnniversarySection: V,
                            }),
                            "".concat(t, "-").concat(n),
                        );
                    case j.pJs.ONLINE:
                    default:
                        return (0, r.jsx)(O.Z, w(Z({}, i), { isFocused: k }), n);
                }
            },
            [k, R, V],
        ),
        W = i.useCallback(
            (e) => {
                B(w(Z({}, H), { [R]: e }));
            },
            [H, R],
        ),
        q = i.useCallback(() => {
            B(w(Z({}, H), { [R]: "" }));
        }, [H, R]),
        K = i.useMemo(
            () =>
                R === j.pJs.PENDING && (o.filter(j.pJs.SPAM).length > 0 || o.filter(j.pJs.PENDING_IGNORED).length > 0),
            [o, R],
        ),
        Q = i.useMemo(() => o.filter(R, H[R]), [o, H, R]),
        J = R === j.pJs.PENDING,
        X = i.useMemo(() => {
            if (!J) return L;
            let e = [];
            return (
                Q.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [J, Q]);
    (0, p.Z)(X, J);
    let $ = i.useMemo(
            () =>
                R === j.pJs.ALL && V && Q.some((e) => e.giftIntentType === P.hX.FRIEND_ANNIVERSARY)
                    ? Q.filter((e) => e.giftIntentType === P.hX.FRIEND_ANNIVERSARY).length
                    : 0,
            [Q, R, V],
        ),
        ee = i.useMemo(() => {
            switch (R) {
                case j.pJs.PENDING:
                    let e = [],
                        t = [];
                    return (
                        Q.forEach((n) => {
                            n.type === j.OGo.PENDING_INCOMING
                                ? e.push(n)
                                : n.type === j.OGo.PENDING_OUTGOING && t.push(n);
                        }),
                        [e, t]
                    );
                case j.pJs.ALL:
                    if (!(V && Q.some((e) => e.giftIntentType === P.hX.FRIEND_ANNIVERSARY))) return [Q];
                    {
                        let e = [];
                        return (
                            Q.forEach((t) => {
                                t.giftIntentType === P.hX.FRIEND_ANNIVERSARY && e.push(t);
                            }),
                            e.sort((e, t) => m.Z.compareByDmProbability(e.userId, t.userId)),
                            [F ? e : e.slice(0, h.nN), Q]
                        );
                    }
                default:
                    return [Q];
            }
        }, [Q, R, F, V]),
        et = i.useMemo(() => Q.filter((e) => e.type === j.OGo.PENDING_INCOMING).length, [Q]),
        en = R === j.pJs.PENDING && et > 0 && et >= N.yf,
        er = i.useCallback(
            (e) => {
                e.stopPropagation(), s.Z.confirmClearPendingRelationships(et);
            },
            [et],
        ),
        ei = i.useCallback(() => {
            z((e) => !e);
        }, []),
        el = i.useCallback(
            (e) => {
                let n = ee[e],
                    i = (function (e, t, n, r) {
                        switch (e) {
                            case j.pJs.ONLINE:
                                return x.intl.formatToPlainString(x.t.BagU2U, { online: t.toString() });
                            case j.pJs.PENDING:
                                if (0 === n) return x.intl.formatToPlainString(x.t["g+3FIa"], { count: t.toString() });
                                if (1 === n) return x.intl.formatToPlainString(x.t.npJsRl, { count: t.toString() });
                                throw Error("Unexpected pending friend requests section index: ".concat(n));
                            case j.pJs.SUGGESTIONS:
                                return x.intl.formatToPlainString(x.t["DYMZ/p"], { count: t.toString() });
                            default:
                                if ((0, f.i)(u.Z.FRIENDS_LIST) && r)
                                    if (0 === n) return x.intl.formatToPlainString(x.t.rrZTqK, { count: t.toString() });
                                    else if (1 === n);
                                    else throw Error("Unexpected friends all section index: ".concat(n));
                                return x.intl.formatToPlainString(x.t.rHRrhC, { count: t.toString() });
                        }
                    })(
                        R,
                        n.length,
                        e,
                        n.some((e) => e.giftIntentType === P.hX.FRIEND_ANNIVERSARY),
                    );
                return R === j.pJs.PENDING && 0 === e
                    ? (0, r.jsxs)(
                          "div",
                          {
                              className: A.sectionTitle,
                              children: [
                                  (0, r.jsx)(S.Z, {
                                      id: t,
                                      title: i,
                                  }),
                                  en &&
                                      (0, r.jsx)("div", {
                                          className: A.clearButton,
                                          children: (0, r.jsx)(a.Avr, {
                                              text: x.intl.string(x.t.O8k7O4),
                                              onClick: er,
                                              "aria-label": x.intl.string(x.t.O8k7O4),
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
                              className: A.sectionTitle,
                              children: (0, r.jsx)(S.Z, {
                                  id: t,
                                  title: i,
                              }),
                          },
                          i,
                      );
            },
            [ee, R, t, en, er],
        ),
        ea = i.useCallback(
            (e) =>
                R === j.pJs.ALL && 0 === e && V && $ > h.nN
                    ? (0, r.jsx)("div", {
                          className: A.sectionFooter,
                          children: (0, r.jsx)(a.Button, {
                              icon: F ? a.u04 : a.CJ0,
                              variant: "secondary",
                              size: "sm",
                              text: x.intl.string(F ? x.t["6MwJo/"] : x.t["37C26f"]),
                              onClick: ei,
                              "aria-label": x.intl.string(F ? x.t["6MwJo/"] : x.t["37C26f"]),
                          }),
                      })
                    : null,
            [R, $, F, ei, V],
        );
    if (
        (i.useEffect(() => {
            R === j.pJs.ALL && (0, g.d$)();
        }, [R]),
        i.useEffect(() => {
            z(!1);
        }, [R, $]),
        0 === Q.length && "" === H[R])
    )
        return (0, r.jsx)(M, {
            section: R,
            showSpamCta: K,
        });
    let eo = "" !== H[R],
        es = 0 === Q.length && eo;
    return (0, r.jsx)(d.Gt, {
        value: n,
        children: (0, r.jsxs)(c.Z, {
            section: j.jXE.FRIENDS_LIST,
            children: [
                G && (0, r.jsx)(C.R, {}),
                (0, r.jsx)("div", {
                    className: A.searchBar,
                    children: (0, r.jsx)(a.E1j, {
                        query: H[R],
                        onChange: W,
                        onClear: q,
                    }),
                }),
                (0, r.jsx)(I.Z, {
                    rows: ee,
                    renderRow: Y,
                    renderSection: el,
                    sectionFilter: R,
                    isVirtualizedList: U >= N.nG,
                    hasSearchQuery: eo,
                    renderSectionFooter: ea,
                    footer:
                        K && !es
                            ? (0, r.jsx)("div", {
                                  className: A.viewSpamButton,
                                  children: (0, r.jsx)(a.Avr, {
                                      text: x.intl.string(x.t.R40bU2),
                                      onClick: D,
                                      textVariant: "text-xs/medium",
                                      variant: "secondary",
                                  }),
                              })
                            : null,
                }),
                es &&
                    (0, r.jsx)("div", {
                        className: A.emptyStateContainer,
                        children: (0, r.jsx)(v.Z, { type: v.j.SECTION_NO_RESULTS }, R),
                    }),
            ],
        }),
    });
};
