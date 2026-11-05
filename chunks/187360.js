var l = t(477900),
    i = t(582128),
    a = t(855986),
    s = t(265872),
    r = t(780338),
    o = t(782603),
    c = t(832712),
    u = t(543465),
    d = t(188567),
    h = t(477427),
    g = t(58736),
    m = t(461678),
    A = t(652215),
    p = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channel: n } = e,
                t = i.useRef(null),
                [j, f] = (0, a.yK)(
                    [u.Ay],
                    () => [u.Ay.isChannelMuted(n.getGuildId(), n.id), u.Ay.resolvedMessageNotifications(n)],
                    [n],
                ),
                [x, N] = i.useState(!1);
            function b(e) {
                e.shiftKey
                    ? c.A.updateChannelOverrideSettings({
                          guildId: n.guild_id,
                          channelId: n.id,
                          settings: { muted: !j },
                          label: h.G_.muted(!j),
                      })
                    : N((e) => !e);
            }
            i.useEffect(() => {
                function e() {
                    return N(!0);
                }
                return (
                    d._.subscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                    () => {
                        d._.unsubscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                    }
                );
            }, []);
            let C = p.intl.string(p.t.h850Ss);
            return (0, l.jsx)(s.Y, {
                targetElementRef: t,
                shouldShow: x,
                animation: s.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                autoInvert: !1,
                onRequestClose: () => N(!1),
                renderPopout: (e) =>
                    (0, l.jsx)(m.A, { ...e, channel: n, navId: "channel-context", label: p.intl.string(p.t.Xm41aV) }),
                clickTrap: !0,
                children: (e, n) => {
                    let { isShown: i } = n;
                    return (0, l.jsx)(g.Ay.Icon, {
                        ...e,
                        ref: t,
                        onClick: b,
                        tooltip: i ? null : C,
                        icon: j || f !== A.orn.ALL_MESSAGES ? r.BellSlashIcon : o.BellIcon,
                        "aria-label": C,
                        selected: i,
                    });
                },
            });
        },
    },
);
