n.d(t, { default: () => g });
var i = n(200651);
n(192379);
var a = n(442837),
    l = n(481060),
    r = n(87051),
    u = n(776568),
    c = n(9156),
    s = n(621600),
    o = n(388032),
    d = n(908023);
let g = (e) => {
    let { onClose: t, channelId: n, transitionState: g } = e,
        f = (0, a.e7)([c.ZP], () => c.ZP.getChannelMuteConfig(null, n)),
        _ = (e) => {
            r.Z.updateChannelOverrideSettings(null, n, (0, u.u9)(e), s.ZB.Muted);
        };
    return (0, i.jsxs)(l.Y0X, {
        transitionState: g,
        size: l.CgR.SMALL,
        'aria-label': o.NW.string(o.t.uAmAiI),
        children: [
            (0, i.jsx)(l.hzk, {
                className: d.content,
                children: (0, i.jsx)(l.xJW, {
                    title: o.NW.string(o.t.NkwaBg),
                    tag: 'h1',
                    children: (0, i.jsx)(l.FXm, {
                        options: (0, u.k)().map((e) => {
                            let { label: t, value: n } = e;
                            return {
                                name: t,
                                value: n
                            };
                        }),
                        onChange: (e) => _(e.value),
                        value: null == f ? void 0 : f.selected_time_window
                    })
                })
            }),
            (0, i.jsx)(l.olH, {
                className: d.closeButton,
                onClick: t
            }),
            (0, i.jsx)(l.mzw, {
                children: (0, i.jsx)(l.zxk, {
                    type: 'button',
                    color: l.zxk.Colors.PRIMARY,
                    onClick: t,
                    children: o.NW.string(o.t.cpT0Cg)
                })
            })
        ]
    });
};
