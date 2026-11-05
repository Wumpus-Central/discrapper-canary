var n = i(477900),
    s = i(196765),
    l = i(855986),
    a = i(506774),
    r = i(834730),
    d = i(434831),
    o = i(47167),
    u = i(976860),
    c = i(734057),
    m = i(652215),
    h = i(354817),
    p = i(792996),
    A = i(720722);
let I = "legacyGameInviteChannelChatBannerDismissed",
    g = new Set([
        "1433122113031639161",
        "1433122091707924543",
        "1433122057616490537",
        "1433122142479847514",
        "1433122166102163598",
    ]),
    f = "1526555294518349946",
    v = (0, s.v)(() => ({
        dismissedChannelIds: a.w.get(I) ?? [],
        dismissChannel: (e) => {
            v.setState((t) => {
                let i = [...t.dismissedChannelIds, e];
                return (a.w.set(I, i), { dismissedChannelIds: i });
            });
        },
    }));
i.d(
    t,
    {},
    {
        A: function () {
            let e = (0, l.bG)([c.A], () => c.A.getChannel(f)),
                t = (0, o.Ay)(e);
            function i() {
                v.getState().dismissChannel(f);
            }
            return null == e || null == t
                ? null
                : (0, n.jsx)(r.E, {
                      variant: "body-sm/medium",
                      color: "text-muted",
                      className: A.v,
                      children: p.intl.format(h.default["5jIPgz"], {
                          channelIconHook: () =>
                              (0, n.jsx)(d.ExperimentalLfgIcon, { size: "xs", color: "currentColor" }),
                          channelName: t,
                          onChannelClick: () => {
                              ((0, u.pX)(m.BVt.CHANNEL(e.guild_id, e.id)), i());
                          },
                          onDismissClick: () => i(),
                      }),
                  });
        },
        L: function (e) {
            let { dismissedChannelIds: t } = v(),
                i = t?.includes(f);
            return null != (0, l.bG)([c.A], () => c.A.getChannel(f)) && g.has(e) && !i;
        },
    },
);
