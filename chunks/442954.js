a.d(t, { Z: () => b }), a(642613), a(388685);
var n = a(255367),
    r = a(73800),
    l = a(990547),
    i = a(481060),
    s = a(138464),
    o = a(585483),
    c = a(246992),
    d = a(981631),
    u = a(388032),
    m = a(546147),
    x = a(616257);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
let f = {
    CollectiblesExpiryModal: async () => {
        let { default: e } = await a.e("77370").then(a.bind(a, 83950));
        return (t) => (0, n.jsx)(e, p({}, t));
    },
    EmailEnterModal: async () => {
        let { default: e } = await a.e("93288").then(a.bind(a, 396410));
        return (t) =>
            (0, n.jsx)(
                e,
                h(p({}, t), {
                    headerText: u.intl.string(u.t.ZLRYGR),
                    confirmButtonText: u.intl.string(u.t.PDTjLC),
                    confirmButtonVariant: "primary",
                }),
            );
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("94566").then(a.bind(a, 965072));
        return (t) =>
            (0, n.jsx)(
                e,
                h(p({}, t), {
                    headerText: u.intl.string(u.t.H3Q7U1),
                    onFormSubmit: () => {},
                    onResend: () => {},
                    onSuccess: () => {},
                    confirmButtonText: u.intl.string(u.t["13ofGh"]),
                    impression: { impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                }),
            );
    },
};
function b() {
    let e = r.useMemo(
            () =>
                Object.keys(f)
                    .map((e) => ({
                        label: e,
                        value: e,
                    }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = r.useState(e[0].value);
    return (0, n.jsx)(i.zJl, {
        className: x.panel,
        children: (0, n.jsxs)("div", {
            className: m.panelInner,
            children: [
                (0, n.jsxs)("section", {
                    className: m.section,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: "heading-md/semibold",
                            children: "Open a Modal",
                        }),
                        (0, n.jsxs)("div", {
                            className: m.inputRow,
                            children: [
                                (0, n.jsx)(i.PhF, {
                                    className: m.input,
                                    options: e,
                                    isSelected: (e) => t === e,
                                    serialize: (e) => e,
                                    select: (e) => a(e),
                                    popoutLayerContext: c.O$,
                                }),
                                (0, n.jsx)(i.zxk, {
                                    variant: "primary",
                                    text: "Open",
                                    onClick: () => (0, i.ZDy)(f[t]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("section", {
                    className: m.section,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: "heading-md/semibold",
                            children: "Wow moment",
                        }),
                        (0, n.jsx)("div", {
                            className: m.inputRow,
                            children: (0, n.jsx)(i.zxk, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, s.H)(!0), o.S.dispatch(d.CkL.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
