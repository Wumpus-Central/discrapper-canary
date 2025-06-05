i.d(r, { default: () => a });
var n = i(255367);
i(73800);
var o = i(106351),
    l = i(481060),
    e = i(933557),
    s = i(388032);
let a = (t) => {
    let { channel: r, onClose: i, onConfirm: a, transitionState: c } = t,
        {
            title: d,
            body: h,
            confirm: x
        } = (function (t) {
            let r = (0, e.ZP)(t, !0);
            return t.type === o.d.GUILD_CATEGORY
                ? {
                      title: s.intl.string(s.t['4VpUw8']),
                      body: s.intl.format(s.t.GuhMa2, { channelName: r }),
                      confirm: s.intl.string(s.t.xOscRk)
                  }
                : {
                      title: s.intl.string(s.t['4VpUw8']),
                      body: s.intl.format(s.t['2z/hBg'], { channelName: r }),
                      confirm: s.intl.string(s.t.gGs6TU)
                  };
        })(r);
    return (0, n.jsxs)(l.Y0X, {
        transitionState: c,
        'aria-label': d,
        parentComponent: 'RemoveFromFavoritesModal',
        children: [
            (0, n.jsx)(l.xBx, {
                separator: !1,
                children: (0, n.jsx)(l.X6q, {
                    variant: 'heading-lg/semibold',
                    children: d
                })
            }),
            (0, n.jsx)(l.hzk, {
                children: (0, n.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    color: 'header-primary',
                    children: h
                })
            }),
            (0, n.jsxs)(l.mzw, {
                children: [
                    (0, n.jsx)(l.zxk, {
                        onClick: a,
                        color: l.zxk.Colors.RED,
                        children: x
                    }),
                    (0, n.jsx)(l.zxk, {
                        onClick: i,
                        look: l.zxk.Looks.LINK,
                        color: l.zxk.Colors.PRIMARY,
                        children: s.intl.string(s.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
