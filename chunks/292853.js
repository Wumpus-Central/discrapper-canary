n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(367907),
    c = n(626135),
    d = n(152376),
    u = n(981631),
    h = n(388032),
    p = n(730439);
function m(e) {
    let { channel: t, narrow: n } = e;
    return (
        l.useEffect(() => {
            c.default.track(u.rMx.CHANNEL_BANNER_VIEWED, {
                ...(0, o.hH)(t.getGuildId()),
                ...(0, o.v_)(t),
                banner_type: 'channel_opt_in'
            });
        }, [t]),
        (0, i.jsxs)('div', {
            className: r()(p.chatHeaderBar, { [p.narrow]: n }),
            children: [
                (0, i.jsx)(s.Text, {
                    className: p.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: h.intl.string(h.t.iOWmmJ)
                }),
                (0, i.jsxs)(s.zxk, {
                    size: s.zxk.Sizes.TINY,
                    className: p.chatHeaderBarButton,
                    innerClassName: p.chatHeaderBarButtonInner,
                    color: s.zxk.Colors.BRAND,
                    onClick: () => {
                        c.default.track(u.rMx.CHANNEL_BANNER_CTA_CLICKED, {
                            ...(0, o.hH)(t.getGuildId()),
                            ...(0, o.v_)(t),
                            banner_type: 'channel_opt_in',
                            cta_type: 'add channel'
                        }),
                            (0, d.XQ)(t.guild_id, t.id, !0, { section: u.jXE.CHANNEL });
                    },
                    children: [
                        (0, i.jsx)(s.qJs, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 14,
                            height: 14
                        }),
                        h.intl.string(h.t.ZtIlQk)
                    ]
                })
            ]
        })
    );
}
