var n = i(477900),
    l = i(196765),
    a = i(855986),
    s = i(506774),
    d = i(834730),
    r = i(434831),
    u = i(47167),
    o = i(976860),
    c = i(734057),
    m = i(652215),
    g = i(354817),
    I = i(792996),
    A = i(720722);
let f = "legacyGameInviteChannelChatBannerDismissed",
    h = new Set([
        "1433122113031639161",
        "1433122091707924543",
        "1433122057616490537",
        "1433122142479847514",
        "1433122166102163598",
    ]),
    N = "1526555294518349946",
    E = (0, l.v)(() => ({
        dismissedChannelIds: s.w.get(f) ?? [],
        dismissChannel: (e) => {
            E.setState((t) => {
                let i = [...t.dismissedChannelIds, e];
                return (s.w.set(f, i), { dismissedChannelIds: i });
            });
        },
    }));
i.d(
    t,
    {},
    {
        A: function () {
            let e = (0, a.bG)([c.A], () => c.A.getChannel(N)),
                t = (0, u.Ay)(e);
            function i() {
                E.getState().dismissChannel(N);
            }
            return null == e || null == t
                ? null
                : (0, n.jsx)(d.E, {
                      variant: "body-sm/medium",
                      color: "text-muted",
                      className: A.v,
                      children: I.intl.format(g.default["5jIPgz"], {
                          channelIconHook: () =>
                              (0, n.jsx)(r.ExperimentalLfgIcon, { size: "xs", color: "currentColor" }),
                          channelName: t,
                          onChannelClick: () => {
                              ((0, o.pX)(m.BVt.CHANNEL(e.guild_id, e.id)), i());
                          },
                          onDismissClick: () => i(),
                      }),
                  });
        },
        L: function (e) {
            let { dismissedChannelIds: t } = E(),
                i = t?.includes(N);
            return null != (0, a.bG)([c.A], () => c.A.getChannel(N)) && h.has(e) && !i;
        },
    },
);
