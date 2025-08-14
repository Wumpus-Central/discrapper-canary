e.d(n, { default: () => g });
var i = e(255367);
e(73800);
var l = e(442837),
    a = e(481060),
    s = e(87051),
    u = e(776568),
    d = e(9156),
    r = e(621600),
    c = e(388032),
    o = e(444766);
let g = (t) => {
    let { onClose: n, channelId: e, applicationId: g, transitionState: p } = t,
        h = (0, l.e7)([d.ZP], () => d.ZP.getChannelMuteConfig(null, e));
    return (0, i.jsxs)(a.Y0X, {
        transitionState: p,
        size: a.CgR.SMALL,
        "aria-label": c.intl.string(c.t.uAmAiI),
        parentComponent: "MuteAppNotificationsModalV2",
        children: [
            (0, i.jsx)(a.hzk, {
                className: o.content,
                children: (0, i.jsx)(a.xJW, {
                    title: c.intl.string(c.t.NkwaBg),
                    tag: "h1",
                    children: (0, i.jsx)(a.FXm, {
                        options: (0, u.k)().map((t) => {
                            let { label: n, value: e } = t;
                            return {
                                name: n,
                                value: e,
                            };
                        }),
                        onChange: (t) => {
                            var n;
                            return (
                                (n = t.value),
                                void s.Z.updateAppDMOverrideSettings(null, e, g, (0, u.u9)(n), r.ZB.Muted)
                            );
                        },
                        value: null == h ? void 0 : h.selected_time_window,
                    }),
                }),
            }),
            (0, i.jsx)(a.olH, {
                className: o.closeButton,
                onClick: n,
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsx)(a.zxk, {
                    variant: "secondary",
                    text: c.intl.string(c.t.cpT0Cg),
                    type: "button",
                    onClick: n,
                }),
            }),
        ],
    });
};
