e.d(n, { default: () => d });
var c = e(951288);
e(647438);
var a = e(667202),
    s = e(481060),
    i = e(471253),
    o = e(388032),
    r = e(981038),
    l = e(768982);
function d(t) {
    let { transitionState: n, onClose: e, channel: d } = t,
        h = (t) => {
            (0, i.RK)(d, t), e();
        };
    return (0, c.jsx)(a.I, {
        transitionState: n,
        graphic: {
            type: "image",
            src: l.Z,
        },
        title: o.intl.string(o.t.Ul1RJS),
        subtitle: o.intl.format(o.t["Z+3bW1"], {
            stageChannelHook: () =>
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)(s.ewx, {
                            size: "custom",
                            color: "currentColor",
                            height: 14,
                            width: 14,
                            className: r.channelIcon,
                        }),
                        d.name,
                    ],
                }),
        }),
        onClose: () => (h(!0), Promise.resolve()),
        actions: [
            {
                text: o.intl.string(o.t.L5eIZ2),
                onClick: () => e(),
                variant: "secondary",
            },
            {
                text: o.intl.string(o.t.MMlhsr),
                onClick: () => h(!1),
                variant: "active",
            },
        ],
    });
}
