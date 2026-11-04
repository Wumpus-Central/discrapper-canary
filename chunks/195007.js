var i = n(477900);
n(582128);
var l = n(855986),
    a = n(834730),
    s = n(95362),
    r = n(588224),
    o = n(607567),
    d = n(792996),
    c = n(13117);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channel: t } = e,
                n = (0, l.bG)([o.Ay], () => o.Ay.getVoiceStatesForChannel(t));
            return (0, i.jsxs)("div", {
                className: c.zr,
                children: [
                    (0, i.jsx)(a.E, {
                        variant: "body-xs/semibold",
                        className: c.wx,
                        children: d.intl.format(d.t.e95u3C, { count: n.length }),
                    }),
                    (0, i.jsx)(s.Ip, {
                        className: c.XG,
                        children: (0, i.jsx)(r.A, {
                            allowDragging: !1,
                            allowPreviews: !1,
                            className: c.Xk,
                            channel: t,
                            voiceStates: n,
                            collapsed: !1,
                        }),
                    }),
                ],
            });
        },
    },
);
