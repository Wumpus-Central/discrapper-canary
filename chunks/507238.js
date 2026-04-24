"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(989349),
    l = n.n(i),
    a = n(17928),
    o = n(477782),
    s = n(832712),
    c = n(995102),
    _ = n(145408),
    u = n(543465),
    d = n(477427),
    f = n(985018);
function g(e, t) {
    let n = e?.id,
        { muted: i, muteConfig: g } = (0, a.cf)(
            [u.Ay],
            () => ({
                muted: null != n ? u.Ay.isMuted(n) : void 0,
                muteConfig: null != n ? u.Ay.getMuteConfig(n) : void 0,
            }),
            [n],
        ),
        m = (0, _.M)(g);
    return null == n
        ? null
        : i
          ? (0, r.jsx)(o.Dr, {
                id: "unmute-guild",
                label: f.intl.string(f.t.De0BTC),
                subtext: m,
                action: () => s.A.updateGuildNotificationSettings(n, { muted: !1 }, d.fd.Unmuted),
            })
          : (0, r.jsx)(o.Dr, {
                id: "mute-guild",
                label: f.intl.string(f.t.vRzp7P),
                action: () => s.A.updateGuildNotificationSettings(n, { muted: !0 }, d.fd.Muted),
                children: (0, c.g)().map((e) => {
                    let { value: i, label: a } = e;
                    return (0, r.jsx)(
                        o.Dr,
                        {
                            id: `${i}`,
                            label: a,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let r = e > 0 ? l()().add(e, "second").toISOString() : null;
                                    s.A.updateGuildNotificationSettings(
                                        n,
                                        { muted: !0, mute_config: { selected_time_window: e, end_time: r } },
                                        d.fd.Muted,
                                        t,
                                    );
                                })(i),
                        },
                        i,
                    );
                }),
            });
}
