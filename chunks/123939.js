n.d(e, {
    default: () => m,
});
var i = n(627968),
    l = n(64700),
    r = n(158954),
    a = n(311907),
    u = n(397927),
    d = n(832712),
    s = n(995102),
    o = n(543465),
    g = n(477427),
    c = n(985018);
let m = (t) => {
    var e;
    let { onClose: n, channelId: m, applicationId: v, transitionState: p } = t,
        b = (0, a.bG)([o.Ay], () => o.Ay.getChannelMuteConfig(null, m)),
        _ = l.useMemo(
            () =>
                (0, s.gv)().map((t) => {
                    let { label: e, value: n } = t;
                    return {
                        name: e,
                        value: n,
                    };
                }),
            [],
        );
    return (0, i.jsx)(r.Modal, {
        transitionState: p,
        onClose: n,
        title: c.intl.string(c.t.NkwaBs),
        actions: [
            {
                variant: "primary",
                text: c.intl.string(c.t.cpT0Cq),
                onClick: n,
            },
        ],
        children: (0, i.jsx)(u.z6M, {
            options: _,
            onChange: (t) => {
                d.A.updateAppDMOverrideSettings(null, m, v, (0, s.pB)(t), g.fd.Muted);
            },
            value: null != (e = null == b ? void 0 : b.selected_time_window) ? e : void 0,
        }),
    });
};
