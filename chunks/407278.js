i.d(t, { A: () => v, L: () => f });
var n = i(477900),
    s = i(196765),
    l = i(834730),
    a = i(434831),
    r = i(17928),
    d = i(506774),
    o = i(47167),
    u = i(976860),
    c = i(734057),
    h = i(652215),
    m = i(670064),
    p = i(375708),
    A = i(720722);
let g = "legacyGameInviteChannelChatBannerDismissed",
    I = new Set([
        "1433122113031639161",
        "1433122091707924543",
        "1433122057616490537",
        "1433122142479847514",
        "1433122166102163598",
    ]),
    E = "1526555294518349946",
    x = (0, s.v)(() => ({
        dismissedChannelIds: d.w.get(g) ?? [],
        dismissChannel: (e) => {
            x.setState((t) => {
                let i = [...t.dismissedChannelIds, e];
                return d.w.set(g, i), { dismissedChannelIds: i };
            });
        },
    }));
function f(e) {
    let { dismissedChannelIds: t } = x(),
        i = t?.includes(E);
    return null != (0, r.bG)([c.A], () => c.A.getChannel(E)) && I.has(e) && !i;
}
function v() {
    let e = (0, r.bG)([c.A], () => c.A.getChannel(E)),
        t = (0, o.Ay)(e);
    function i() {
        x.getState().dismissChannel(E);
    }
    return null == e || null == t
        ? null
        : (0, n.jsx)(l.E, {
              variant: "text-sm/medium",
              color: "text-muted",
              className: A.v,
              children: p.intl.format(m.default["5jIPgz"], {
                  channelIconHook: () => (0, n.jsx)(a.t, { size: "xs", color: "currentColor" }),
                  channelName: t,
                  onChannelClick: () => {
                      (0, u.pX)(h.BVt.CHANNEL(e.guild_id, e.id)), i();
                  },
                  onDismissClick: () => i(),
              }),
          });
}
