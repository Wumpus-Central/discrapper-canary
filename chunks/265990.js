n.d(t, { A: () => k }), n(65821), n(896048), n(321073), n(638769);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(711950),
    o = n(49229),
    c = n(820284),
    u = n(793574),
    d = n(688810),
    p = n(429913),
    f = n(70730),
    h = n(45787),
    A = n(275759),
    g = n(21119),
    m = n(994500),
    b = n(595623),
    _ = n(531685),
    E = n(174279),
    O = n(278066),
    y = n(594968),
    I = n(979282),
    v = n(575474),
    S = n(535266),
    C = n(787331);
n(646363);
var N = n(652215),
    T = n(788868),
    j = n(985018),
    x = n(520936);
function P(e) {
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
    s.A.transitionToSection(N.m3P.ADD_FRIEND, { explicit: !0 });
}
function D() {
    (0, a.mMO)(async () => {
        let { default: e } = await n.e("73152").then(n.bind(n, 516259));
        return (t) => (0, r.jsx)(e, P({}, t));
    });
}
function M(e) {
    let { section: t, showSpamCta: n } = e,
        l = i.useMemo(() => (n ? D : t !== N.m3P.PENDING ? R : void 0), [n, t]);
    return (0, r.jsx)("div", {
        className: x.y7,
        children: (0, r.jsx)(
            O.A,
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
        { analyticsLocations: n } = (0, d.Ay)(u.A.FRIENDS_LIST),
        { rows: s, section: R } = (0, l.cf)([b.Ay], () => b.Ay.getState()),
        k = (0, l.bG)([_.A], () => _.A.isFocused()),
        { relationshipCount: U, hasBlockedOrIgnored: G } = (0, l.cf)([m.A], () => ({
            relationshipCount: m.A.getRelationshipCount(),
            hasBlockedOrIgnored: m.A.getBlockedOrIgnoredIDs().length > 0,
        })),
        [V, B] = i.useState(() => {
            let e = {};
            for (let t of Object.values(N.m3P)) e[t] = "";
            return e;
        }),
        H = (0, f.p)(u.A.FRIENDS_LIST),
        [F, Y] = i.useState(!1),
        K = i.useCallback(
            (e, t) => {
                let { key: n } = e,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i,
                            l = {};
                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                                (r = n[i]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (l[r] = e[r]);
                            return l;
                        }
                        if (
                            ((l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.getOwnPropertyNames(e);
                                for (r = 0; r < l.length; r++)
                                    (n = l[r]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (i[n] = e[n]);
                                return i;
                            })(e, t)),
                            Object.getOwnPropertySymbols)
                        )
                            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                (r = n[i]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (l[r] = e[r]);
                        return l;
                    })(e, ["key"]);
                switch (R) {
                    case N.m3P.PENDING:
                        return (0, r.jsx)(y.A, w(P({}, i), { isFocused: k }), n);
                    case N.m3P.SUGGESTIONS:
                        return (0, r.jsx)(C.A, w(P({}, i), { isFocused: k }), n);
                    case N.m3P.ALL:
                        return (0, r.jsx)(
                            E.A,
                            w(P({}, i), {
                                isFocused: k,
                                sectionIndex: t,
                                hasFriendAnniversarySection: H,
                            }),
                            "".concat(t, "-").concat(n),
                        );
                    case N.m3P.ONLINE:
                    default:
                        return (0, r.jsx)(E.A, w(P({}, i), { isFocused: k }), n);
                }
            },
            [k, R, H],
        ),
        z = i.useCallback(
            (e) => {
                B(w(P({}, V), { [R]: e }));
            },
            [V, R],
        ),
        W = i.useCallback(() => {
            B(w(P({}, V), { [R]: "" }));
        }, [V, R]),
        q = i.useMemo(
            () =>
                R === N.m3P.PENDING && (s.filter(N.m3P.SPAM).length > 0 || s.filter(N.m3P.PENDING_IGNORED).length > 0),
            [s, R],
        ),
        Q = i.useMemo(() => s.filter(R, V[R]), [s, V, R]),
        X = R === N.m3P.PENDING,
        Z = i.useMemo(() => {
            if (!X) return L;
            let e = [];
            return (
                Q.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [X, Q]);
    (0, p.A)(Z, X);
    let J = i.useMemo(
            () =>
                R === N.m3P.ALL && H && Q.some((e) => e.giftIntentType === T.np.FRIEND_ANNIVERSARY)
                    ? Q.filter((e) => e.giftIntentType === T.np.FRIEND_ANNIVERSARY).length
                    : 0,
            [Q, R, H],
        ),
        $ = i.useMemo(() => {
            switch (R) {
                case N.m3P.PENDING:
                    let e = [],
                        t = [];
                    return (
                        Q.forEach((n) => {
                            n.type === N.eA$.PENDING_INCOMING
                                ? e.push(n)
                                : n.type === N.eA$.PENDING_OUTGOING && t.push(n);
                        }),
                        [e, t]
                    );
                case N.m3P.ALL:
                    if (!(H && Q.some((e) => e.giftIntentType === T.np.FRIEND_ANNIVERSARY))) return [Q];
                    {
                        let e = [];
                        return (
                            Q.forEach((t) => {
                                t.giftIntentType === T.np.FRIEND_ANNIVERSARY && e.push(t);
                            }),
                            e.sort((e, t) => g.A.compareByDmProbability(e.userId, t.userId)),
                            [F ? e : e.slice(0, A.ZD), Q]
                        );
                    }
                default:
                    return [Q];
            }
        }, [Q, R, F, H]),
        ee = i.useMemo(() => Q.filter((e) => e.type === N.eA$.PENDING_INCOMING).length, [Q]),
        et = R === N.m3P.PENDING && ee > 0 && ee >= 5,
        en = i.useCallback(
            (e) => {
                e.stopPropagation(), o.A.confirmClearPendingRelationships(ee);
            },
            [ee],
        ),
        er = i.useCallback(() => {
            Y((e) => !e);
        }, []),
        ei = i.useCallback(
            (e) => {
                let n = $[e],
                    i = (function (e, t, n, r) {
                        switch (e) {
                            case N.m3P.ONLINE:
                                return j.intl.formatToPlainString(j.t.BagU2U, { online: t.toString() });
                            case N.m3P.PENDING:
                                if (0 === n) return j.intl.formatToPlainString(j.t["g+3FIa"], { count: t.toString() });
                                if (1 === n) return j.intl.formatToPlainString(j.t.npJsRl, { count: t.toString() });
                                throw Error("Unexpected pending friend requests section index: ".concat(n));
                            case N.m3P.SUGGESTIONS:
                                return j.intl.formatToPlainString(j.t["DYMZ/p"], { count: t.toString() });
                            default:
                                if ((0, f.p)(u.A.FRIENDS_LIST) && r)
                                    if (0 === n) return j.intl.formatToPlainString(j.t.rrZTqK, { count: t.toString() });
                                    else if (1 === n);
                                    else throw Error("Unexpected friends all section index: ".concat(n));
                                return j.intl.formatToPlainString(j.t.rHRrhC, { count: t.toString() });
                        }
                    })(
                        R,
                        n.length,
                        e,
                        n.some((e) => e.giftIntentType === T.np.FRIEND_ANNIVERSARY),
                    );
                return R === N.m3P.PENDING && 0 === e
                    ? (0, r.jsxs)(
                          "div",
                          {
                              className: x.Gf,
                              children: [
                                  (0, r.jsx)(S.A, {
                                      id: t,
                                      title: i,
                                  }),
                                  et &&
                                      (0, r.jsx)("div", {
                                          className: x.mt,
                                          children: (0, r.jsx)(a.QWc, {
                                              text: j.intl.string(j.t.O8k7O4),
                                              onClick: en,
                                              "aria-label": j.intl.string(j.t.O8k7O4),
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
                              className: x.Gf,
                              children: (0, r.jsx)(S.A, {
                                  id: t,
                                  title: i,
                              }),
                          },
                          i,
                      );
            },
            [$, R, t, et, en],
        ),
        el = i.useCallback(
            (e) =>
                R === N.m3P.ALL && 0 === e && H && J > A.ZD
                    ? (0, r.jsx)("div", {
                          className: x.Nf,
                          children: (0, r.jsx)(a.Button, {
                              icon: F ? a.tN5 : a.abt,
                              variant: "secondary",
                              size: "sm",
                              text: j.intl.string(F ? j.t["6MwJo/"] : j.t["37C26f"]),
                              onClick: er,
                              "aria-label": j.intl.string(F ? j.t["6MwJo/"] : j.t["37C26f"]),
                          }),
                      })
                    : null,
            [R, J, F, er, H],
        );
    if (
        (i.useEffect(() => {
            R === N.m3P.ALL && (0, h.Ad)();
        }, [R]),
        i.useEffect(() => {
            Y(!1);
        }, [R, J]),
        0 === Q.length && "" === V[R])
    )
        return (0, r.jsx)(M, {
            section: R,
            showSpamCta: q,
        });
    let ea = "" !== V[R],
        es = 0 === Q.length && ea;
    return (0, r.jsx)(d.f5, {
        value: n,
        children: (0, r.jsxs)(c.A, {
            section: N.JJy.FRIENDS_LIST,
            children: [
                G && (0, r.jsx)(v.g, {}),
                (0, r.jsx)("div", {
                    className: x.ON,
                    children: (0, r.jsx)(a.IWV, {
                        query: V[R],
                        onChange: z,
                        onClear: W,
                    }),
                }),
                (0, r.jsx)(I.A, {
                    rows: $,
                    renderRow: K,
                    renderSection: ei,
                    sectionFilter: R,
                    isVirtualizedList: U >= 64,
                    hasSearchQuery: ea,
                    renderSectionFooter: el,
                    footer:
                        q && !es
                            ? (0, r.jsx)("div", {
                                  className: x.RE,
                                  children: (0, r.jsx)(a.QWc, {
                                      text: j.intl.string(j.t.R40bU2),
                                      onClick: D,
                                      textVariant: "text-xs/medium",
                                      variant: "secondary",
                                  }),
                              })
                            : null,
                }),
                es &&
                    (0, r.jsx)("div", {
                        className: x.y7,
                        children: (0, r.jsx)(O.A, { type: O.a.SECTION_NO_RESULTS }, R),
                    }),
            ],
        }),
    });
};
