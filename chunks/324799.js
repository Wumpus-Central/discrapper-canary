n.d(t, { X: () => o });
var i = n(627968),
    l = n(311907),
    a = n(397927),
    s = n(543465),
    r = n(985018);
let o = (e) => {
    let { channel: t, user: o } = e,
        c = (0, l.bG)([s.Ay], () => s.Ay.isChannelMuted(null, t.id));
    return o.bot
        ? (0, i.jsx)(a.Button, {
              variant: c ? "secondary" : "critical-primary",
              size: "sm",
              text: c ? r.intl.string(r.t.YqAjXy) : r.intl.string(r.t.w4m945),
              onClick: function () {
                  (0, a.mMO)(async () => {
                      let { default: e } = await n.e("99312").then(n.bind(n, 259763));
                      return (n) => (0, i.jsx)(e, { channelId: t.id, ...n });
                  });
              },
          })
        : null;
};
