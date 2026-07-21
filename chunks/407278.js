i.d(t, { A: () => x, L: () => C });
var n = i(627968),
    l = i(353640),
    s = i(834730),
    a = i(434831),
    r = i(17928),
    d = i(506774),
    o = i(47167),
    u = i(976860),
    c = i(734057),
    h = i(652215),
    m = i(559965),
    p = i(375708),
    A = i(785415);
let g = "legacyGameInviteChannelChatBannerDismissed",
    I = new Set([
        "1433122113031639161",
        "1433122091707924543",
        "1433122057616490537",
        "1433122142479847514",
        "1433122166102163598",
    ]),
    f = "1526555294518349946",
    v = (0, l.v)(() => ({
        dismissedChannelIds: d.w.get(g) ?? [],
        dismissChannel: (e) => {
            v.setState((t) => {
                let i = [...t.dismissedChannelIds, e];
                return d.w.set(g, i), { dismissedChannelIds: i };
            });
        },
    }));
function C(e) {
    let { dismissedChannelIds: t } = v(),
        i = t?.includes(f);
    return null != (0, r.bG)([c.A], () => c.A.getChannel(f)) && I.has(e) && !i;
}
function x() {
    let e = (0, r.bG)([c.A], () => c.A.getChannel(f)),
        t = (0, o.Ay)(e),
        i = () => {
            v.getState().dismissChannel(f);
        };
    return null == e || null == t
        ? null
        : (0, n.jsx)(s.E, {
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
