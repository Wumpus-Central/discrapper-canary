n.d(e, { default: () => g });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(87051),
    u = n(776568),
    c = n(9156),
    s = n(621600),
    o = n(388032),
    d = n(908023);
let g = (t) => {
    let { onClose: e, channelId: n, transitionState: g } = t,
        f = (0, l.e7)([c.ZP], () => c.ZP.getChannelMuteConfig(null, n)),
        b = (t) => {
            r.Z.updateChannelOverrideSettings(null, n, (0, u.u9)(t), s.ZB.Muted);
        };
    return (0, i.jsxs)(a.Y0X, {
        transitionState: g,
        size: a.CgR.SMALL,
        'aria-label': o.intl.string(o.t.uAmAiI),
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
                        value: null == f ? void 0 : f.selected_time_window
                    })
                })
            }),
            (0, i.jsx)(a.olH, {
                className: d.closeButton,
                onClick: e
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsx)(a.zxk, {
                    type: 'button',
                    color: a.zxk.Colors.PRIMARY,
                    onClick: e,
                    children: o.intl.string(o.t.cpT0Cg)
                })
            })
        ]
    });
};
