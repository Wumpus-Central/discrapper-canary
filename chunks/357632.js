r.d(i, { default: () => a });
var n = r(200651);
r(192379);
var l = r(106351),
    o = r(481060),
    s = r(933557),
    e = r(388032);
let a = (t) => {
    let { channel: i, onClose: r, onConfirm: a, transitionState: c } = t,
        {
            title: d,
            body: h,
            confirm: x
        } = (function (t) {
            let i = (0, s.ZP)(t, !0);
            return t.type === l.d.GUILD_CATEGORY
                ? {
                      title: e.intl.string(e.t['4VpUw8']),
                      body: e.intl.format(e.t.GuhMa2, { channelName: i }),
                      confirm: e.intl.string(e.t.xOscRk)
                  }
                : {
                      title: e.intl.string(e.t['4VpUw8']),
                      body: e.intl.format(e.t['2z/hBg'], { channelName: i }),
                      confirm: e.intl.string(e.t.gGs6TU)
                  };
        })(i);
    return (0, n.jsxs)(o.Y0X, {
        transitionState: c,
        'aria-label': d,
        children: [
            (0, n.jsx)(o.xBx, {
                separator: !1,
                children: (0, n.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    children: d
                })
            }),
            (0, n.jsx)(o.hzk, {
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'header-primary',
                    children: h
                })
            }),
            (0, n.jsxs)(o.mzw, {
                children: [
                    (0, n.jsx)(o.zxk, {
                        onClick: a,
                        color: o.zxk.Colors.RED,
                        children: x
                    }),
                    (0, n.jsx)(o.zxk, {
                        onClick: r,
                        look: o.zxk.Looks.LINK,
                        color: o.zxk.Colors.PRIMARY,
                        children: e.intl.string(e.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
