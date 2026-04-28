e.d(i, { A: () => m });
var n = e(627968);
e(64700);
var u = e(989349),
    d = e.n(u),
    l = e(17928),
    a = e(477782),
    o = e(832712),
    s = e(995102),
    c = e(145408),
    r = e(543465),
    f = e(477427),
    g = e(985018);
function m(t, i) {
    let e = t?.id,
        { muted: u, muteConfig: m } = (0, l.cf)(
            [r.Ay],
            () => ({
                muted: null != e ? r.Ay.isMuted(e) : void 0,
                muteConfig: null != e ? r.Ay.getMuteConfig(e) : void 0,
            }),
            [e],
        ),
        p = (0, c.M)(m);
    return null == e
        ? null
        : u
          ? (0, n.jsx)(a.Dr, {
                id: "unmute-guild",
                label: g.intl.string(g.t.De0BTC),
                subtext: p,
                action: () => o.A.updateGuildNotificationSettings(e, { muted: !1 }, f.fd.Unmuted),
            })
          : (0, n.jsx)(a.Dr, {
                id: "mute-guild",
                label: g.intl.string(g.t.vRzp7P),
                action: () => o.A.updateGuildNotificationSettings(e, { muted: !0 }, f.fd.Muted),
                children: (0, s.g)().map((t) => {
                    let { value: u, label: l } = t;
                    return (0, n.jsx)(
                        a.Dr,
                        {
                            id: `${u}`,
                            label: l,
                            action: () =>
                                (function (t) {
                                    if (null == e) return;
                                    let n = t > 0 ? d()().add(t, "second").toISOString() : null;
                                    o.A.updateGuildNotificationSettings(
                                        e,
                                        { muted: !0, mute_config: { selected_time_window: t, end_time: n } },
                                        f.fd.Muted,
                                        i,
                                    );
                                })(u),
                        },
                        u,
                    );
                }),
            });
}
