n.d(e, { default: () => m });
var i = n(951288),
    l = n(647438),
    a = n(793030),
    d = n(442837),
    r = n(481060),
    u = n(87051),
    s = n(776568),
    o = n(9156),
    g = n(621600),
    c = n(388032);
let m = (t) => {
    var e;
    let { onClose: n, channelId: m, applicationId: _, transitionState: h } = t,
        p = (0, d.e7)([o.ZP], () => o.ZP.getChannelMuteConfig(null, m)),
        O = l.useMemo(
            () =>
                (0, s.k)().map((t) => {
                    let { label: e, value: n } = t;
                    return {
                        name: e,
                        value: n,
                    };
                }),
            [],
        );
    return (0, i.jsx)(a.Modal, {
        transitionState: h,
        onClose: n,
        title: c.intl.string(c.t.NkwaBg),
        actions: [
            {
                variant: "primary",
                text: c.intl.string(c.t.cpT0Cg),
                onClick: n,
            },
        ],
        children: (0, i.jsx)(r.FXm, {
            options: O,
            onChange: (t) => {
                u.Z.updateAppDMOverrideSettings(null, m, _, (0, s.u9)(t), g.ZB.Muted);
            },
            value: null != (e = null == p ? void 0 : p.selected_time_window) ? e : void 0,
        }),
    });
};
