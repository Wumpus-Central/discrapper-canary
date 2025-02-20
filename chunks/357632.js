i.d(t, { default: () => a });
var n = i(200651);
i(192379);
var o = i(106351),
    s = i(481060),
    e = i(933557),
    l = i(388032);
let a = (r) => {
    let { channel: t, onClose: i, onConfirm: a, transitionState: c } = r,
        {
            title: d,
            body: h,
            confirm: x
        } = (function (r) {
            let t = (0, e.ZP)(r, !0);
            return r.type === o.d.GUILD_CATEGORY
                ? {
                      title: l.NW.string(l.t['4VpUw8']),
                      body: l.NW.format(l.t.GuhMa2, { channelName: t }),
                      confirm: l.NW.string(l.t.xOscRk)
                  }
                : {
                      title: l.NW.string(l.t['4VpUw8']),
                      body: l.NW.format(l.t['2z/hBg'], { channelName: t }),
                      confirm: l.NW.string(l.t.gGs6TU)
                  };
        })(t);
    return (0, n.jsxs)(s.Y0X, {
        transitionState: c,
        'aria-label': d,
        children: [
            (0, n.jsx)(s.xBx, {
                separator: !1,
                children: (0, n.jsx)(s.X6q, {
                    variant: 'heading-lg/semibold',
                    children: d
                })
            }),
            (0, n.jsx)(s.hzk, {
                children: (0, n.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    color: 'header-primary',
                    children: h
                })
            }),
            (0, n.jsxs)(s.mzw, {
                children: [
                    (0, n.jsx)(s.zxk, {
                        onClick: a,
                        color: s.zxk.Colors.RED,
                        children: x
                    }),
                    (0, n.jsx)(s.zxk, {
                        onClick: i,
                        look: s.zxk.Looks.LINK,
                        color: s.zxk.Colors.PRIMARY,
                        children: l.NW.string(l.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
