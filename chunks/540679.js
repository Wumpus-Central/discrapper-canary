n.d(e, { default: () => _ });
var i = n(951288),
    l = n(647438),
    a = n(793030),
    d = n(442837),
    r = n(538534),
    u = n(481060),
    s = n(87051),
    o = n(776568),
    c = n(9156),
    g = n(621600),
    h = n(388032);
let _ = (t) => {
    var e;
    let { onClose: n, channelId: _, applicationId: m, transitionState: p } = t,
        O = (0, d.e7)([c.ZP], () => c.ZP.getChannelMuteConfig(null, _)),
        v = l.useMemo(
            () =>
                (0, o.k)().map((t) => {
                    let { label: e, value: n } = t;
                    return {
                        name: e,
                        value: n,
                    };
                }),
            [],
        );
    return (0, i.jsx)(a.Modal, {
        transitionState: p,
        onClose: n,
        title: h.intl.string(h.t.NkwaBg),
        actions: [
            {
                variant: "primary",
                text: h.intl.string(h.t.cpT0Cg),
                onClick: n,
            },
        ],
        children: (0, i.jsx)(u.xJW, {
            children: (0, i.jsx)(r.E, {
                options: v,
                onChange: (t) => {
                    s.Z.updateAppDMOverrideSettings(null, _, m, (0, o.u9)(t), g.ZB.Muted);
                },
                value: null != (e = null == O ? void 0 : O.selected_time_window) ? e : void 0,
            }),
        }),
    });
};
