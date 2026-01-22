n.d(t, { E: () => b });
var r = n(627968),
    i = n(64700),
    a = n(235986),
    s = n(156312),
    o = n(166532),
    l = n(482132),
    c = n(866485),
    u = n(981036),
    d = n(985018),
    f = n(34873);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e) => (0, r.jsx)(E, _({}, e)),
    E = (e) => {
        let {
                paymentModalStepProps: { handleStepChange: t },
                unifiedStepProps: n,
            } = e,
            {
                layout: c,
                renderStepBody: p,
                renderLeftColumn: h,
                renderRightColumn: g,
                primaryCTAButtonProps: E,
                onBackClick: b,
            } = n,
            { hasPaymentSources: y } = (0, s.P5)(),
            O = y ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
            A = i.useCallback(() => t(O), [t, O]),
            v = i.useMemo(
                () =>
                    "custom-step-body" === c
                        ? p()
                        : "two-column" === c
                          ? (0, r.jsxs)("div", {
                                className: f.D,
                                children: [h(), g()],
                            })
                          : null,
                [c, p, h, g],
            ),
            S = i.useMemo(
                () =>
                    m(_({}, E), {
                        onClick: A,
                        text: d.intl.string(d.t.XiOHRX),
                    }),
                [E, A],
            );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.dZ, { children: v }),
                (0, r.jsx)(l.UX, {
                    children: (0, r.jsx)(u.cy, {
                        onBackClick: b,
                        primaryCTAButtonProps: S,
                        align: a.A.Align.CENTER,
                    }),
                }),
            ],
        });
    },
    b = (0, c.R)({
        step: o.pn.GIFT_CUSTOMIZATION,
        renderStep: g,
        DirectStepComponent: E,
    });
