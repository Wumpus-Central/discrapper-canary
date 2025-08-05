e.d(n, { default: () => g });
var i = e(255367);
e(73800);
var l = e(442837),
    a = e(481060),
    s = e(87051),
    u = e(776568),
    d = e(9156),
    c = e(621600),
    r = e(388032),
    o = e(908023);
let g = (t) => {
    let { onClose: n, channelId: e, applicationId: g, transitionState: p } = t,
        _ = (0, l.e7)([d.ZP], () => d.ZP.getChannelMuteConfig(null, e)),
        h = (t) => {
            s.Z.updateAppDMOverrideSettings(null, e, g, (0, u.u9)(t), c.ZB.Muted);
        };
    return (0, i.jsxs)(a.Y0X, {
        transitionState: p,
        size: a.CgR.SMALL,
        'aria-label': r.intl.string(r.t.uAmAiI),
        parentComponent: 'MuteAppNotificationsModalV2',
        children: [
            (0, i.jsx)(a.hzk, {
                className: o.content,
                children: (0, i.jsx)(a.xJW, {
                    title: r.intl.string(r.t.NkwaBg),
                    tag: 'h1',
                    children: (0, i.jsx)(a.FXm, {
                        options: (0, u.k)().map((t) => {
                            let { label: n, value: e } = t;
                            return {
                                name: n,
                                value: e
                            };
                        }),
                        onChange: (t) => h(t.value),
                        value: null == _ ? void 0 : _.selected_time_window
                    })
                })
            }),
            (0, i.jsx)(a.olH, {
                className: o.closeButton,
                onClick: n
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsx)(a.zxk, {
                    variant: 'secondary',
                    text: r.intl.string(r.t.cpT0Cg),
                    type: 'button',
                    onClick: n
                })
            })
        ]
    });
};
