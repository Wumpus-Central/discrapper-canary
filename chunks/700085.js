var s = n(477900),
    r = n(189213),
    a = n(834730),
    e = n(780964),
    o = n(766075),
    d = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { transitionState: i, onClose: n } = t;
            return (0, s.jsx)(r.a, {
                size: "sm",
                transitionState: i,
                onClose: n,
                title: d.intl.string(d.t.WfwodX),
                actions: [
                    {
                        variant: "primary",
                        onClick: () => {
                            (n(), (0, o.openUserSettings)(e.X.ACCOUNT_STANDING_PANEL));
                        },
                        text: d.intl.string(d.t.hvVgAZ),
                    },
                ],
                children: (0, s.jsx)(a.E, { variant: "body-md/normal", children: d.intl.string(d.t.I27WXW) }),
            });
        },
    },
);
