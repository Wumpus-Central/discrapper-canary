e.d(n, { default: () => h });
var i = e(951288);
e(647438);
var s = e(793030),
    a = e(481060),
    r = e(471253),
    c = e(388032),
    o = e(981038),
    l = e(768982);
function h(t) {
    let { transitionState: n, onClose: e, channel: h } = t,
        u = (t) => {
            (0, r.RK)(h, t), e();
        };
    return (0, i.jsx)(s.ExpressiveModal, {
        transitionState: n,
        graphic: {
            type: "image",
            src: l.Z,
        },
        title: c.intl.string(c.t.Ul1RJS),
        subtitle: c.intl.format(c.t["Z+3bW1"], {
            stageChannelHook: () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(a.ewx, {
                            size: "custom",
                            color: "currentColor",
                            height: 14,
                            width: 14,
                            className: o.channelIcon,
                        }),
                        h.name,
                    ],
                }),
        }),
        onClose: () => (u(!0), Promise.resolve()),
        actions: [
            {
                text: c.intl.string(c.t.L5eIZ2),
                onClick: () => e(),
                variant: "secondary",
            },
            {
                text: c.intl.string(c.t.MMlhsr),
                onClick: () => u(!1),
                variant: "active",
            },
        ],
    });
}
