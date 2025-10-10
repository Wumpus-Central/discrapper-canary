n.d(t, { Z: () => L }), n(415506), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(529103),
    s = n(194359),
    c = n(410575),
    u = n(100527),
    d = n(906732),
    p = n(835473),
    f = n(795448),
    h = n(699516),
    g = n(974042),
    m = n(451478),
    b = n(701861),
    _ = n(437314),
    O = n(696577),
    E = n(163417),
    y = n(830880),
    v = n(492347),
    I = n(42575),
    S = n(617015),
    C = n(981631),
    T = n(388032),
    N = n(983703);
function j(e) {
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
function P(e, t) {
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
let x = [];
function A() {
    o.Z.transitionToSection(C.pJs.ADD_FRIEND, { explicit: !0 });
}
function Z() {
    (0, a.ZDy)(async () => {
        let { default: e } = await n.e("36312").then(n.bind(n, 153932));
        return (t) => (0, r.jsx)(e, j({}, t));
    });
}
function w(e) {
    let { section: t, showSpamCta: n } = e,
        l = i.useMemo(() => (n ? Z : t !== C.pJs.PENDING ? A : void 0), [n, t]);
    return (0, r.jsx)("div", {
        className: N.emptyStateContainer,
        children: (0, r.jsx)(
            _.Z,
            {
                type: t,
                onClick: l,
            },
            t,
        ),
    });
}
let L = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, d.ZP)(u.Z.FRIENDS_LIST),
        { rows: o, section: A } = (0, l.cj)([g.ZP], () => g.ZP.getState()),
        L = (0, l.e7)([m.Z], () => m.Z.isFocused()),
        { relationshipCount: R, hasBlockedOrIgnored: D } = (0, l.cj)([h.Z], () => ({
            relationshipCount: h.Z.getRelationshipCount(),
            hasBlockedOrIgnored: h.Z.getBlockedOrIgnoredIDs().length > 0,
        })),
        [k, M] = i.useState(() => {
            let e = {};
            for (let t of Object.values(C.pJs)) e[t] = "";
            return e;
        }),
        U = i.useCallback(
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
                switch (A) {
                    case C.pJs.PENDING:
                        return (0, r.jsx)(O.Z, P(j({}, n), { isFocused: L }), t);
                    case C.pJs.SUGGESTIONS:
                        return (0, r.jsx)(I.Z, P(j({}, n), { isFocused: L }), t);
                    case C.pJs.ONLINE:
                    case C.pJs.ALL:
                    default:
                        return (0, r.jsx)(b.Z, P(j({}, n), { isFocused: L }), t);
                }
            },
            [L, A],
        ),
        G = i.useCallback(
            (e) => {
                M(P(j({}, k), { [A]: e }));
            },
            [k, A],
        ),
        B = i.useCallback(() => {
            M(P(j({}, k), { [A]: "" }));
        }, [k, A]),
        H = i.useMemo(
            () =>
                A === C.pJs.PENDING && (o.filter(C.pJs.SPAM).length > 0 || o.filter(C.pJs.PENDING_IGNORED).length > 0),
            [o, A],
        ),
        V = i.useMemo(() => o.filter(A, k[A]), [o, k, A]),
        F = A === C.pJs.PENDING,
        z = i.useMemo(() => {
            if (!F) return x;
            let e = [];
            return (
                V.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [F, V]);
    (0, p.Z)(z, F);
    let W = i.useMemo(() => {
            if (A !== C.pJs.PENDING) return [V];
            {
                let e = [],
                    t = [];
                return (
                    V.forEach((n) => {
                        n.type === C.OGo.PENDING_INCOMING ? e.push(n) : n.type === C.OGo.PENDING_OUTGOING && t.push(n);
                    }),
                    [e, t]
                );
            }
        }, [V, A]),
        q = i.useMemo(() => V.filter((e) => e.type === C.OGo.PENDING_INCOMING).length, [V]),
        Y = A === C.pJs.PENDING && q > 0 && q >= S.yf,
        K = i.useCallback(
            (e) => {
                e.stopPropagation(), s.Z.confirmClearPendingRelationships(q);
            },
            [q],
        ),
        Q = i.useCallback(
            (e) => {
                let n = (function (e, t, n) {
                    switch (e) {
                        case C.pJs.ONLINE:
                            return T.intl.formatToPlainString(T.t.BagU2d, { online: t.toString() });
                        case C.pJs.PENDING:
                            if (0 === n) return T.intl.formatToPlainString(T.t["g+3FIS"], { count: t.toString() });
                            if (1 === n) return T.intl.formatToPlainString(T.t.npJsRk, { count: t.toString() });
                            throw Error("Unexpected pending friend requests section index: ".concat(n));
                        case C.pJs.SUGGESTIONS:
                            return T.intl.formatToPlainString(T.t["DYMZ/v"], { count: t.toString() });
                        default:
                            return T.intl.formatToPlainString(T.t.rHRrhI, { count: t.toString() });
                    }
                })(A, W[e].length, e);
                return A === C.pJs.PENDING && 0 === e
                    ? (0, r.jsxs)(
                          "div",
                          {
                              className: N.sectionTitle,
                              children: [
                                  (0, r.jsx)(v.Z, {
                                      id: t,
                                      title: n,
                                  }),
                                  Y &&
                                      (0, r.jsx)("div", {
                                          className: N.clearButton,
                                          children: (0, r.jsx)(a.Avr, {
                                              text: T.intl.string(T.t.O8k7Oz),
                                              onClick: K,
                                              "aria-label": T.intl.string(T.t.O8k7Oz),
                                              textVariant: "text-sm/medium",
                                          }),
                                      }),
                              ],
                          },
                          n,
                      )
                    : (0, r.jsx)(
                          "div",
                          {
                              className: N.sectionTitle,
                              children: (0, r.jsx)(v.Z, {
                                  id: t,
                                  title: n,
                              }),
                          },
                          n,
                      );
            },
            [W, A, t, Y, K],
        );
    if (
        (i.useEffect(() => {
            A === C.pJs.ALL && (0, f.d$)();
        }, [A]),
        0 === V.length && "" === k[A])
    )
        return (0, r.jsx)(w, {
            section: A,
            showSpamCta: H,
        });
    let X = "" !== k[A],
        J = 0 === V.length && X;
    return (0, r.jsx)(d.Gt, {
        value: n,
        children: (0, r.jsxs)(c.Z, {
            section: C.jXE.FRIENDS_LIST,
            children: [
                D && (0, r.jsx)(y.R, {}),
                (0, r.jsx)("div", {
                    className: N.searchBar,
                    children: (0, r.jsx)(a.E1j, {
                        query: k[A],
                        onChange: G,
                        onClear: B,
                    }),
                }),
                (0, r.jsx)(E.Z, {
                    rows: W,
                    renderRow: U,
                    renderSection: Q,
                    sectionFilter: A,
                    isVirtualizedList: R >= S.nG,
                    hasSearchQuery: X,
                    footer:
                        H && !J
                            ? (0, r.jsx)("div", {
                                  className: N.viewSpamButton,
                                  children: (0, r.jsx)(a.Avr, {
                                      text: T.intl.string(T.t.R40bU1),
                                      onClick: Z,
                                      textVariant: "text-xs/medium",
                                      variant: "secondary",
                                  }),
                              })
                            : null,
                }),
                J &&
                    (0, r.jsx)("div", {
                        className: N.emptyStateContainer,
                        children: (0, r.jsx)(_.Z, { type: _.j.SECTION_NO_RESULTS }, A),
                    }),
            ],
        }),
    });
};
