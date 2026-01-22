n.d(t, {
    h: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(827343),
    l = n(985018);

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
                            t && o.A.setSilenceWarning(!1), e.onClose();
                        },
                        variant: "primary",
                    },
                ],
                actionBarInput: (0, r.jsx)(a.Sc0, {
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
    (0, s.qfG)((e) => (0, r.jsx)(d, u({}, e)));
}
