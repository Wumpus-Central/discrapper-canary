n.d(e, { default: () => m });
var i = n(627968),
    l = n(64700),
    r = n(158954),
    a = n(311907),
    u = n(397927),
    d = n(832712),
    s = n(995102),
    o = n(543465),
    c = n(477427),
    g = n(985018);
let m = (t) => {
    let { onClose: e, channelId: n, applicationId: m, transitionState: p } = t,
        h = (0, a.bG)([o.Ay], () => o.Ay.getChannelMuteConfig(null, n)),
        A = l.useMemo(
            () =>
                (0, s.gv)().map((t) => {
                    let { label: e, value: n } = t;
                    return { name: e, value: n };
                }),
            [],
        );
    return (0, i.jsx)(r.Modal, {
        transitionState: p,
        onClose: e,
        title: g.intl.string(g.t.NkwaBs),
        actions: [{ variant: "primary", text: g.intl.string(g.t.cpT0Cq), onClick: e }],
        children: (0, i.jsx)(u.z6M, {
            options: A,
            onChange: (t) => {
                d.A.updateAppDMOverrideSettings(null, n, m, (0, s.pB)(t), c.fd.Muted);
            },
            value: h?.selected_time_window ?? void 0,
        }),
    });
};
