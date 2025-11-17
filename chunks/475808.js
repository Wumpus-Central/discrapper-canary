n.d(t, { b: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(481060),
    s = n(846027),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e) {
    let [t, n] = i.useState(!1);
    return (0, r.jsx)(
        a.Modal,
        u(
            {
                size: "md",
                title: l.intl.string(l.t["zQ1+Jw"]),
                subtitle: l.intl.string(l.t.K1gWXn),
                actions: [
                    {
                        text: l.intl.string(l.t.BddRzS),
                        onClick: () => {
                            t && s.Z.setSilenceWarning(!1), e.onClose();
                        },
                        variant: "primary",
                    },
                ],
                actionBarInput: (0, r.jsx)(a.XZJ, {
                    checked: t,
                    onChange: (e) => n(e),
                    label: l.intl.string(l.t.XAiAgD),
                    labelType: "secondary",
                }),
            },
            e,
        ),
    );
}
function f() {
    (0, o.h7j)((e) => (0, r.jsx)(d, u({}, e)));
}
