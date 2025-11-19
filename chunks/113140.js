e.d(n, { default: () => p });
var i = e(54381);
e(473749);
var r = e(793030),
    a = e(481060),
    s = e(168107),
    o = e(480916),
    c = e(471253),
    l = e(430104),
    h = e(388032),
    u = e(374378),
    d = e(768982);
function p(t) {
    let { transitionState: n, onClose: e, channel: p } = t,
        f = (t) => {
            if (!t && (0, l.u1)()) {
                s.Z.showAgeVerificationGetStartedModal({ entryPoint: o.cU.STAGE_CHANNEL_RAISE_HAND }), e();
                return;
            }
            (0, c.RK)(p, t), e();
        };
    return (0, i.jsx)(r.ExpressiveModal, {
        transitionState: n,
        graphic: {
            type: "image",
            src: d.Z,
        },
        title: h.intl.string(h.t.Ul1RJQ),
        subtitle: h.intl.format(h.t["Z+3bWy"], {
            stageChannelHook: () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(a.ewx, {
                            size: "custom",
                            color: "currentColor",
                            height: 14,
                            width: 14,
                            className: u.channelIcon,
                        }),
                        p.name,
                    ],
                }),
        }),
        onClose: () => (f(!0), Promise.resolve()),
        actions: [
            {
                text: h.intl.string(h.t.L5eIZ2),
                onClick: () => e(),
                variant: "secondary",
            },
            {
                text: h.intl.string(h.t.MMlhsr),
                onClick: () => f(!1),
                variant: "active",
            },
        ],
    });
}
