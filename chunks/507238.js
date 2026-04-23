n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var i = n(989349),
    s = n.n(i),
    a = n(17928),
    r = n(477782),
    o = n(832712),
    c = n(995102),
    d = n(145408),
    u = n(543465),
    h = n(477427),
    g = n(985018);
function m(e, t) {
    let n = e?.id,
        { muted: i, muteConfig: m } = (0, a.cf)(
            [u.Ay],
            () => ({
                muted: null != n ? u.Ay.isMuted(n) : void 0,
                muteConfig: null != n ? u.Ay.getMuteConfig(n) : void 0,
            }),
            [n],
        ),
        A = (0, d.M)(m);
    return null == n
        ? null
        : i
          ? (0, l.jsx)(r.Dr, {
                id: "unmute-guild",
                label: g.intl.string(g.t.De0BTC),
                subtext: A,
                action: () => o.A.updateGuildNotificationSettings(n, { muted: !1 }, h.fd.Unmuted),
            })
          : (0, l.jsx)(r.Dr, {
                id: "mute-guild",
                label: g.intl.string(g.t.vRzp7P),
                action: () => o.A.updateGuildNotificationSettings(n, { muted: !0 }, h.fd.Muted),
                children: (0, c.g)().map((e) => {
                    let { value: i, label: a } = e;
                    return (0, l.jsx)(
                        r.Dr,
                        {
                            id: `${i}`,
                            label: a,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let l = e > 0 ? s()().add(e, "second").toISOString() : null;
                                    o.A.updateGuildNotificationSettings(
                                        n,
                                        { muted: !0, mute_config: { selected_time_window: e, end_time: l } },
                                        h.fd.Muted,
                                        t,
                                    );
                                })(i),
                        },
                        i,
                    );
                }),
            });
}
