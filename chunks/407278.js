i.d(t, { A: () => C, L: () => f });
var n = i(477900),
    s = i(196765),
    l = i(17928),
    a = i(506774),
    r = i(834730),
    d = i(434831),
    o = i(47167),
    u = i(976860),
    c = i(734057),
    m = i(652215),
    h = i(689125),
    p = i(105292),
    A = i(720722);
let g = "legacyGameInviteChannelChatBannerDismissed",
    I = new Set([
        "1433122113031639161",
        "1433122091707924543",
        "1433122057616490537",
        "1433122142479847514",
        "1433122166102163598",
    ]),
    v = "1526555294518349946",
    x = (0, s.v)(() => ({
        dismissedChannelIds: a.w.get(g) ?? [],
        dismissChannel: (e) => {
            x.setState((t) => {
                let i = [...t.dismissedChannelIds, e];
                return (a.w.set(g, i), { dismissedChannelIds: i });
            });
        },
    }));
function f(e) {
    let { dismissedChannelIds: t } = x(),
        i = t?.includes(v);
    return null != (0, l.bG)([c.A], () => c.A.getChannel(v)) && I.has(e) && !i;
}
function C() {
    let e = (0, l.bG)([c.A], () => c.A.getChannel(v)),
        t = (0, o.Ay)(e);
    function i() {
        x.getState().dismissChannel(v);
    }
    return null == e || null == t
        ? null
        : (0, n.jsx)(r.E, {
              variant: "body-sm/medium",
              color: "text-muted",
              className: A.v,
              children: p.intl.format(h.default["5jIPgz"], {
                  channelIconHook: () => (0, n.jsx)(d.t, { size: "xs", color: "currentColor" }),
                  channelName: t,
                  onChannelClick: () => {
                      ((0, u.pX)(m.BVt.CHANNEL(e.guild_id, e.id)), i());
                  },
                  onDismissClick: () => i(),
              }),
          });
}
