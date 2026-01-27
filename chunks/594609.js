n.d(t, {
    h: () => E,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    o = n(397927),
    a = n(827343),
    s = n(985018);

function c(e) {
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

function u(e) {
    let [t, n] = i.useState(!1);
    return (0, r.jsx)(
        l.Modal,
        c(
            {
                size: "md",
                title: s.intl.string(s.t["zQ1+Jw"]),
                subtitle: s.intl.string(s.t.K1gWXn),
                actions: [
                    {
                        text: s.intl.string(s.t.BddRzS),
                        onClick: () => {
                            t && a.A.setSilenceWarning(!1), e.onClose();
                        },
                        variant: "primary",
                    },
                ],
                actionBarInput: (0, r.jsx)(l.Sc0, {
                    checked: t,
                    onChange: (e) => n(e),
                    label: s.intl.string(s.t.XAiAgD),
                    labelType: "secondary",
                }),
            },
            e,
        ),
    );
}

function E() {
    (0, o.qfG)((e) => (0, r.jsx)(u, c({}, e)));
}
