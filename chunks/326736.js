n.d(t, {
    A: () => x,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(531260),
    d = n(287809),
    u = n(637073),
    _ = n(398523),
    p = n(612669),
    m = n(513570),
    g = n(975662),
    A = n(322631),
    f = n(17307),
    h = n(180022),
    b = n(128906);
let E = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: i, headerClassname: l } = e,
            s = (0, r.jsx)(o.Heading, {
                variant: "heading-xxl/extrabold",
                color: "text-strong",
                className: null != l ? l : b.R_,
                children: i,
            });
        return null == t
            ? s
            : n
              ? (0, r.jsxs)("div", {
                    className: b.bV,
                    children: [
                        s,
                        null != t &&
                            (0, r.jsx)("div", {
                                className: b.W0,
                                children: t,
                            }),
                    ],
                })
              : (0, r.jsx)("div", {
                    className: b.kL,
                    children: (0, r.jsx)("div", {
                        className: b.pr,
                        children: s,
                    }),
                });
    },
    x = (e) => {
        let {
                className: t,
                variant: n,
                noBackground: l = !1,
                leftAlignHeaders: x = !1,
                showAllPerksButton: O,
                headerClassname: C,
            } = e,
            I = i.useRef(null),
            T = n === A.cJ.WHATS_NEW,
            S = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
            j = (0, m.E)();
        i.useEffect(() => {
            T && j();
        }, [j, T]);
        let v = (0, f.G4)(T),
            N = (0, g.A)(),
            y = (0, f.LQ)(),
            { fractionalState: P } = (0, c.A)(),
            R = (0, u.d)(),
            D = _.A.useExperiment({
                location: "PremiumPerks",
            }).enabled,
            w = (0, p.O9)(),
            L = (0, f.vx)({
                perksCards: N,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: y,
                fractionalState: P,
                isInReverseTrial: R,
                recurring3PPromotionExperiment: D,
                showPremiumGroup: w,
                isPremiumGroupMember: null == S ? void 0 : S.isPremiumGroupMember(),
            }),
            M = L.some((e) => null != e.pillText);
        return (0, r.jsxs)("div", {
            ref: I,
            className: s()(
                b.uW,
                {
                    [b.qO]: !x,
                    [b.Uv]: x,
                },
                t,
            ),
            children: [
                (0, r.jsx)(E, {
                    showAllPerksButton: O,
                    leftAlignHeaders: x,
                    title: v.title,
                    headerClassname: C,
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: s()(b.VA, {
                        [b.VA]: null == O || x,
                        [b.Xx]: null != O && !x,
                        [b.Ij]: T || x,
                        [b.Ob]: M,
                        [b.dO]: x,
                        [b.br]: !x,
                    }),
                    children: v.subtitle,
                }),
                !x &&
                    null != O &&
                    (0, r.jsx)("div", {
                        className: b.xk,
                        children: O,
                    }),
                (0, r.jsx)("div", {
                    className: b.Ui,
                    children: L.map((e, t) => {
                        var n, i;
                        return (0, r.jsx)(
                            h.A,
                            ((n = (function (e) {
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
                            })({}, e)),
                            (i = i =
                                {
                                    forceShadow: l,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n),
                            "".concat(e.name, "_").concat(t),
                        );
                    }),
                }),
            ],
        });
    };
