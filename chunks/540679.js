n.d(e, { default: () => m });
var i = n(54381),
    l = n(473749),
    a = n(793030),
    d = n(442837),
    r = n(481060),
    u = n(87051),
    s = n(776568),
    o = n(9156),
    c = n(621600),
    g = n(388032);
let m = (t) => {
    var e;
    let { onClose: n, channelId: m, applicationId: O, transitionState: _ } = t,
        h = (0, d.e7)([o.ZP], () => o.ZP.getChannelMuteConfig(null, m)),
        p = l.useMemo(
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
        transitionState: _,
        onClose: n,
        title: g.intl.string(g.t.NkwaBs),
        actions: [
            {
                variant: "primary",
                text: g.intl.string(g.t.cpT0Cq),
                onClick: n,
            },
        ],
        children: (0, i.jsx)(r.FXm, {
            options: p,
            onChange: (t) => {
                u.Z.updateAppDMOverrideSettings(null, m, O, (0, s.u9)(t), c.ZB.Muted);
            },
            value: null != (e = null == h ? void 0 : h.selected_time_window) ? e : void 0,
        }),
    });
};
