n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var l = n(989349),
    i = n.n(l),
    a = n(311907),
    s = n(397927),
    o = n(832712),
    c = n(995102),
    u = n(392567),
    d = n(543465),
    f = n(477427),
    p = n(985018);
function h(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: l, muteConfig: h } = (0, a.cf)(
            [d.Ay],
            () => ({
                muted: null != n ? d.Ay.isMuted(n) : void 0,
                muteConfig: null != n ? d.Ay.getMuteConfig(n) : void 0,
            }),
            [n],
        ),
        b = (0, u.M)(h);
    return null == n
        ? null
        : l
          ? (0, r.jsx)(s.Drp, {
                id: "unmute-guild",
                label: p.intl.string(p.t.De0BTC),
                subtext: b,
                action: () => o.A.updateGuildNotificationSettings(n, { muted: !1 }, f.fd.Unmuted),
            })
          : (0, r.jsx)(s.Drp, {
                id: "mute-guild",
                label: p.intl.string(p.t.vRzp7P),
                action: () => o.A.updateGuildNotificationSettings(n, { muted: !0 }, f.fd.Muted),
                children: (0, c.gv)().map((e) => {
                    let { value: l, label: a } = e;
                    return (0, r.jsx)(
                        s.Drp,
                        {
                            id: "".concat(l),
                            label: a,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let r = e > 0 ? i()().add(e, "second").toISOString() : null;
                                    o.A.updateGuildNotificationSettings(
                                        n,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: e,
                                                end_time: r,
                                            },
                                        },
                                        f.fd.Muted,
                                        t,
                                    );
                                })(l),
                        },
                        l,
                    );
                }),
            });
}
