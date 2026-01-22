n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(531260),
    u = n(287809),
    d = n(637073),
    f = n(398523),
    p = n(612669),
    _ = n(513570),
    h = n(975662),
    m = n(322631),
    g = n(17307),
    E = n(180022),
    b = n(128906);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: i, headerClassname: a } = e,
            s = (0, r.jsx)(l.Heading, {
                variant: "heading-xxl/extrabold",
                color: "text-strong",
                className: null != a ? a : b.R_,
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
    I = (e) => {
        let {
                className: t,
                variant: n,
                noBackground: a = !1,
                leftAlignHeaders: y = !1,
                showAllPerksButton: A,
                headerClassname: I,
            } = e,
            T = i.useRef(null),
            C = n === m.cJ.WHATS_NEW,
            N = (0, o.bG)([u.default], () => u.default.getCurrentUser()),
            R = (0, _.E)();
        i.useEffect(() => {
            C && R();
        }, [R, C]);
        let w = (0, g.G4)(C),
            P = (0, h.A)(),
            D = (0, g.LQ)(),
            { fractionalState: x } = (0, c.A)(),
            L = (0, d.d)(),
            j = f.A.useExperiment({ location: "PremiumPerks" }).enabled,
            M = (0, p.O9)(),
            k = (0, g.vx)({
                perksCards: P,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: D,
                fractionalState: x,
                isInReverseTrial: L,
                recurring3PPromotionExperiment: j,
                showPremiumGroup: M,
                isPremiumGroupMember: null == N ? void 0 : N.isPremiumGroupMember(),
            }),
            U = k.some((e) => null != e.pillText);
        return (0, r.jsxs)("div", {
            ref: T,
            className: s()(
                b.uW,
                {
                    [b.qO]: !y,
                    [b.Uv]: y,
                },
                t,
            ),
            children: [
                (0, r.jsx)(S, {
                    showAllPerksButton: A,
                    leftAlignHeaders: y,
                    title: w.title,
                    headerClassname: I,
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: s()(b.VA, {
                        [b.VA]: null == A || y,
                        [b.Xx]: null != A && !y,
                        [b.Ij]: C || y,
                        [b.Ob]: U,
                        [b.dO]: y,
                        [b.br]: !y,
                    }),
                    children: w.subtitle,
                }),
                !y &&
                    null != A &&
                    (0, r.jsx)("div", {
                        className: b.xk,
                        children: A,
                    }),
                (0, r.jsx)("div", {
                    className: b.Ui,
                    children: k.map((e, t) =>
                        (0, r.jsx)(E.A, v(O({}, e), { forceShadow: a }), "".concat(e.name, "_").concat(t)),
                    ),
                }),
            ],
        });
    };
