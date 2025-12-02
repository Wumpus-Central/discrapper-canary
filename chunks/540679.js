n.d(e, { default: () => m });
var i = n(54381),
    l = n(473749),
    a = n(793030),
    r = n(442837),
    u = n(481060),
    d = n(87051),
    s = n(776568),
    o = n(9156),
    c = n(621600),
    g = n(388032);
let m = (t) => {
    var e;
    let { onClose: n, channelId: m, applicationId: h, transitionState: v } = t,
        O = (0, r.e7)([o.ZP], () => o.ZP.getChannelMuteConfig(null, m)),
        _ = l.useMemo(
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
        transitionState: v,
        onClose: n,
        title: g.intl.string(g.t.NkwaBs),
        actions: [
            {
                variant: "primary",
                text: g.intl.string(g.t.cpT0Cq),
                onClick: n,
            },
        ],
        children: (0, i.jsx)(u.FXm, {
            options: _,
            onChange: (t) => {
                d.Z.updateAppDMOverrideSettings(null, m, h, (0, s.u9)(t), c.ZB.Muted);
            },
            value: null != (e = null == O ? void 0 : O.selected_time_window) ? e : void 0,
        }),
    });
};
