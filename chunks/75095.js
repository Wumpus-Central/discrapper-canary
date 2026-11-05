var e = i(477900),
    a = i(582128),
    r = i(821609),
    o = i(172799),
    s = i(792996);
i.d(
    n,
    {},
    {
        A: function (t) {
            let { sendState: n, onInvite: i, nameId: c } = t,
                d = a.useId();
            return (0, e.jsx)(r.$, {
                id: d,
                variant: "secondary",
                size: "sm",
                text: (function (t) {
                    switch (t) {
                        case o.iu.SENT:
                            return s.intl.string(s.t.dVT149);
                        case o.iu.ERROR:
                            return s.intl.string(s.t.wNcfpX);
                        default:
                            return s.intl.string(s.t.jYnGPG);
                    }
                })(n),
                "aria-labelledby": `${d} ${c}`,
                loading: n === o.iu.SENDING,
                disabled: n === o.iu.SENT,
                onClick: i,
            });
        },
    },
);
