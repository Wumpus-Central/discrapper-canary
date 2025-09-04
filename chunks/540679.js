n.d(e, { default: () => h });
var i = n(951288);
n(647438);
var l = n(442837),
    a = n(82659),
    r = n(755721),
    d = n(481060),
    u = n(87051),
    s = n(776568),
    o = n(9156),
    c = n(621600),
    g = n(388032);
let h = (t) => {
    let { onClose: e, channelId: n, applicationId: h, transitionState: _ } = t,
        p = (0, l.e7)([o.ZP], () => o.ZP.getChannelMuteConfig(null, n));
    return (0, i.jsx)(a.Modal, {
        transitionState: _,
        onClose: e,
        title: g.intl.string(g.t.NkwaBg),
        actions: [
            {
                variant: "primary",
                text: g.intl.string(g.t.cpT0Cg),
                onClick: e,
            },
        ],
        children: (0, i.jsx)(d.xJW, {
            children: (0, i.jsx)(r.Gu, {
                options: (0, s.k)().map((t) => {
                    let { label: e, value: n } = t;
                    return {
                        name: e,
                        value: n,
                    };
                }),
                onChange: (t) => {
                    var e;
                    return (e = t.value), void u.Z.updateAppDMOverrideSettings(null, n, h, (0, s.u9)(e), c.ZB.Muted);
                },
                value: null == p ? void 0 : p.selected_time_window,
            }),
        }),
    });
};
