n.d(e, { default: () => g });
var i = n(951288);
n(647438);
var l = n(442837),
    a = n(82659),
    r = n(481060),
    d = n(87051),
    u = n(776568),
    s = n(9156),
    o = n(621600),
    c = n(388032);
let g = (t) => {
    let { onClose: e, channelId: n, applicationId: g, transitionState: h } = t,
        _ = (0, l.e7)([s.ZP], () => s.ZP.getChannelMuteConfig(null, n));
    return (0, i.jsx)(a.Modal, {
        transitionState: h,
        onClose: e,
        title: c.intl.string(c.t.NkwaBg),
        actions: [
            {
                variant: "primary",
                text: c.intl.string(c.t.cpT0Cg),
                onClick: e,
            },
        ],
        children: (0, i.jsx)(r.xJW, {
            children: (0, i.jsx)(r.FXm, {
                options: (0, u.k)().map((t) => {
                    let { label: e, value: n } = t;
                    return {
                        name: e,
                        value: n,
                    };
                }),
                onChange: (t) => {
                    var e;
                    return (e = t.value), void d.Z.updateAppDMOverrideSettings(null, n, g, (0, u.u9)(e), o.ZB.Muted);
                },
                value: null == _ ? void 0 : _.selected_time_window,
            }),
        }),
    });
};
