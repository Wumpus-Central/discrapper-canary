n.d(e, { default: () => f });
var i = n(255367);
n(73800);
var l = n(442837),
    a = n(481060),
    r = n(87051),
    u = n(776568),
    c = n(9156),
    s = n(621600),
    o = n(388032),
    d = n(908023);
let f = (t) => {
    let { onClose: e, channelId: n, applicationId: f, transitionState: g } = t,
        p = (0, l.e7)([c.ZP], () => c.ZP.getChannelMuteConfig(null, n)),
        b = (t) => {
            r.Z.updateAppDMOverrideSettings(null, n, f, (0, u.u9)(t), s.ZB.Muted);
        };
    return (0, i.jsxs)(a.Y0X, {
        transitionState: g,
        size: a.CgR.SMALL,
        'aria-label': o.intl.string(o.t.uAmAiI),
        parentComponent: 'MuteAppNotificationsModalV2',
        children: [
            (0, i.jsx)(a.hzk, {
                className: d.content,
                children: (0, i.jsx)(a.xJW, {
                    title: o.intl.string(o.t.NkwaBg),
                    tag: 'h1',
                    children: (0, i.jsx)(a.FXm, {
                        options: (0, u.k)().map((t) => {
                            let { label: e, value: n } = t;
                            return {
                                name: e,
                                value: n
                            };
                        }),
                        onChange: (t) => b(t.value),
                        value: null == p ? void 0 : p.selected_time_window
                    })
                })
            }),
            (0, i.jsx)(a.olH, {
                className: d.closeButton,
                onClick: e
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsx)(a.zxk, {
                    variant: 'secondary',
                    text: o.intl.string(o.t.cpT0Cg),
                    type: 'button',
                    onClick: e
                })
            })
        ]
    });
};
