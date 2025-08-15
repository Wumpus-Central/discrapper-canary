n.d(e, { default: () => g });
var i = n(255367);
n(73800);
var l = n(442837),
    a = n(481060),
    r = n(87051),
    u = n(776568),
    s = n(9156),
    c = n(621600),
    o = n(388032),
    d = n(444766);
let g = (t) => {
    let { onClose: e, channelId: n, applicationId: g, transitionState: f } = t,
        p = (0, l.e7)([s.ZP], () => s.ZP.getChannelMuteConfig(null, n));
    return (0, i.jsxs)(a.Y0X, {
        transitionState: f,
        size: a.CgR.SMALL,
        "aria-label": o.intl.string(o.t.uAmAiI),
        parentComponent: "MuteAppNotificationsModalV2",
        children: [
            (0, i.jsx)(a.hzk, {
                className: d.content,
                children: (0, i.jsx)(a.xJW, {
                    title: o.intl.string(o.t.NkwaBg),
                    tag: "h1",
                    children: (0, i.jsx)(a.FXm, {
                        options: (0, u.k)().map((t) => {
                            let { label: e, value: n } = t;
                            return {
                                name: e,
                                value: n,
                            };
                        }),
                        onChange: (t) => {
                            var e;
                            return (
                                (e = t.value),
                                void r.Z.updateAppDMOverrideSettings(null, n, g, (0, u.u9)(e), c.ZB.Muted)
                            );
                        },
                        value: null == p ? void 0 : p.selected_time_window,
                    }),
                }),
            }),
            (0, i.jsx)(a.olH, {
                className: d.closeButton,
                onClick: e,
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsx)(a.zxk, {
                    variant: "secondary",
                    text: o.intl.string(o.t.cpT0Cg),
                    type: "button",
                    onClick: e,
                }),
            }),
        ],
    });
};
