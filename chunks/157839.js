n.d(t, {
    A: () => O,
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
    m = n(180022),
    g = n(513570),
    A = n(975662),
    f = n(322631),
    b = n(17307),
    h = n(609195);
let E = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: i, headerClassname: l } = e,
            s = (0, r.jsx)(o.Heading, {
                variant: "heading-xxl/extrabold",
                color: "text-strong",
                className: null != l ? l : h.R_,
                children: i,
            });
        return null == t
            ? s
            : n
              ? (0, r.jsxs)("div", {
                    className: h.bV,
                    children: [
                        s,
                        null != t &&
                            (0, r.jsx)("div", {
                                className: h.W0,
                                children: t,
                            }),
                    ],
                })
              : (0, r.jsx)("div", {
                    className: h.kL,
                    children: (0, r.jsx)("div", {
                        className: h.pr,
                        children: s,
                    }),
                });
    },
    O = (e) => {
        let {
                className: t,
                variant: n,
                noBackground: l = !1,
                leftAlignHeaders: O = !1,
                showAllPerksButton: x,
                headerClassname: C,
            } = e,
            S = i.useRef(null),
            T = n === f.cJ.WHATS_NEW,
            I = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
            N = (0, g.E)();
        i.useEffect(() => {
            T && N();
        }, [N, T]);
        let j = (0, b.G4)(T),
            y = (0, A.A)(),
            v = (0, b.LQ)(),
            { fractionalState: P } = (0, c.A)(),
            R = (0, u.d)(),
            D = _.A.useExperiment({
                location: "PremiumPerks",
            }).enabled,
            L = (0, p.O9)(),
            w = (0, b.vx)({
                perksCards: y,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: v,
                fractionalState: P,
                isInReverseTrial: R,
                recurring3PPromotionExperiment: D,
                showPremiumGroup: L,
                isPremiumGroupMember: null == I ? void 0 : I.isPremiumGroupMember(),
            }),
            M = w.some((e) => null != e.pillText);
        return (0, r.jsxs)("div", {
            ref: S,
            className: s()(
                h.uW,
                {
                    [h.qO]: !O,
                    [h.Uv]: O,
                },
                t,
            ),
            children: [
                (0, r.jsx)(E, {
                    showAllPerksButton: x,
                    leftAlignHeaders: O,
                    title: j.title,
                    headerClassname: C,
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: s()(h.VA, {
                        [h.VA]: null == x || O,
                        [h.Xx]: null != x && !O,
                        [h.Ij]: T || O,
                        [h.Ob]: M,
                        [h.dO]: O,
                        [h.br]: !O,
                    }),
                    children: j.subtitle,
                }),
                !O &&
                    null != x &&
                    (0, r.jsx)("div", {
                        className: h.xk,
                        children: x,
                    }),
                (0, r.jsx)("div", {
                    className: h.Ui,
                    children: w.map((e, t) => {
                        var n, i;
                        return (0, r.jsx)(
                            m.A,
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
