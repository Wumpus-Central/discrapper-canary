n.d(i, { default: () => o });
var r = n(477900);
n(582128);
var a = n(478437),
    s = n(189213),
    l = n(47167),
    e = n(375708);
let o = function (t) {
    let i,
        { channel: n, onClose: o, onConfirm: c, transitionState: p } = t,
        {
            title: d,
            body: u,
            confirm: h,
        } = ((i = (0, l.Ay)(n, !0)),
        n.type === a.r.GUILD_CATEGORY
            ? {
                  title: e.intl.string(e.t["4VpUw8"]),
                  body: e.intl.format(e.t.GuhMa5, { channelName: i }),
                  confirm: e.intl.string(e.t.xOscRh),
              }
            : {
                  title: e.intl.string(e.t["4VpUw8"]),
                  body: e.intl.format(e.t["2z/hBg"], { channelName: i }),
                  confirm: e.intl.string(e.t.gGs6TT),
              });
    return (0, r.jsx)(s.a, {
        title: d,
        subtitle: u,
        actions: [
            { text: e.intl.string(e.t["ETE/oC"]), onClick: o, variant: "secondary" },
            { text: h, onClick: c, variant: "critical-primary" },
        ],
        onClose: o,
        transitionState: p,
    });
};
