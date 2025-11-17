n.d(i, { default: () => o });
var r = n(54381);
n(473749);
var a = n(106351),
    l = n(159691),
    s = n(933557),
    e = n(388032);
let o = (t) => {
    let { channel: i, onClose: n, onConfirm: o, transitionState: c } = t,
        {
            title: u,
            body: p,
            confirm: d,
        } = (function (t) {
            let i = (0, s.ZP)(t, !0);
            return t.type === a.d.GUILD_CATEGORY
                ? {
                      title: e.intl.string(e.t["4VpUw8"]),
                      body: e.intl.format(e.t.GuhMa5, { channelName: i }),
                      confirm: e.intl.string(e.t.xOscRh),
                  }
                : {
                      title: e.intl.string(e.t["4VpUw8"]),
                      body: e.intl.format(e.t["2z/hBg"], { channelName: i }),
                      confirm: e.intl.string(e.t.gGs6TT),
                  };
        })(i);
    return (0, r.jsx)(l.u_l, {
        title: u,
        subtitle: p,
        actions: [
            {
                text: e.intl.string(e.t["ETE/oC"]),
                onClick: n,
                variant: "secondary",
            },
            {
                text: d,
                onClick: o,
                variant: "critical-primary",
            },
        ],
        onClose: n,
        transitionState: c,
    });
};
