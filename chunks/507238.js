n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(989349),
    s = n.n(l),
    a = n(311907),
    r = n(397927),
    o = n(832712),
    c = n(995102),
    d = n(392567),
    u = n(543465),
    h = n(477427),
    m = n(985018);
function A(e, t) {
    let n = e?.id,
        { muted: l, muteConfig: A } = (0, a.cf)(
            [u.Ay],
            () => ({
                muted: null != n ? u.Ay.isMuted(n) : void 0,
                muteConfig: null != n ? u.Ay.getMuteConfig(n) : void 0,
            }),
            [n],
        ),
        g = (0, d.M)(A);
    return null == n
        ? null
        : l
          ? (0, i.jsx)(r.Drp, {
                id: "unmute-guild",
                label: m.intl.string(m.t.De0BTC),
                subtext: g,
                action: () => o.A.updateGuildNotificationSettings(n, { muted: !1 }, h.fd.Unmuted),
            })
          : (0, i.jsx)(r.Drp, {
                id: "mute-guild",
                label: m.intl.string(m.t.vRzp7P),
                action: () => o.A.updateGuildNotificationSettings(n, { muted: !0 }, h.fd.Muted),
                children: (0, c.gv)().map((e) => {
                    let { value: l, label: a } = e;
                    return (0, i.jsx)(
                        r.Drp,
                        {
                            id: `${l}`,
                            label: a,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let i = e > 0 ? s()().add(e, "second").toISOString() : null;
                                    o.A.updateGuildNotificationSettings(
                                        n,
                                        { muted: !0, mute_config: { selected_time_window: e, end_time: i } },
                                        h.fd.Muted,
                                        t,
                                    );
                                })(l),
                        },
                        l,
                    );
                }),
            });
}
