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
    let { onClose: n, channelId: m, applicationId: h, transitionState: _ } = t,
        v = (0, r.e7)([o.ZP], () => o.ZP.getChannelMuteConfig(null, m)),
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
        children: (0, i.jsx)(u.FXm, {
            options: O,
            onChange: (t) => {
                d.Z.updateAppDMOverrideSettings(null, m, h, (0, s.u9)(t), c.ZB.Muted);
            },
            value: null != (e = null == v ? void 0 : v.selected_time_window) ? e : void 0,
        }),
    });
};
