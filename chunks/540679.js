n.d(e, { default: () => g });
var i = n(951288);
n(647438);
var l = n(442837),
    a = n(82659),
    r = n(481060),
    u = n(87051),
    d = n(776568),
    c = n(9156),
    s = n(621600),
    o = n(388032);
let g = (t) => {
    let { onClose: e, channelId: n, applicationId: g, transitionState: f } = t,
        p = (0, l.e7)([c.ZP], () => c.ZP.getChannelMuteConfig(null, n));
    return (0, i.jsx)(a.Modal, {
        transitionState: f,
        onClose: e,
        title: o.intl.string(o.t.NkwaBg),
        actions: [
            {
                variant: "primary",
                text: o.intl.string(o.t.cpT0Cg),
                onClick: e,
            },
        ],
        children: (0, i.jsx)(r.xJW, {
            children: (0, i.jsx)(r.FXm, {
                options: (0, d.k)().map((t) => {
                    let { label: e, value: n } = t;
                    return {
                        name: e,
                        value: n,
                    };
                }),
                onChange: (t) => {
                    var e;
                    return (e = t.value), void u.Z.updateAppDMOverrideSettings(null, n, g, (0, d.u9)(e), s.ZB.Muted);
                },
                value: null == p ? void 0 : p.selected_time_window,
            }),
        }),
    });
};
