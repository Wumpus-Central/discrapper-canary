n.d(e, { default: () => r });
var l = n(200651);
n(192379);
var s = n(481060),
    a = n(313201),
    d = n(430824),
    i = n(614812),
    o = n(388032),
    c = n(243011);
let r = (t) => {
    let { onClose: e, guildId: n } = t,
        r = (0, a.Dt)(),
        m = o.intl.format(o.t.ZqkXsL, { helpdeskArticle: i.z }),
        u = d.Z.getGuild(n);
    return (
        null != u &&
            (m = o.intl.format(o.t.jn0Xy8, {
                guildName: u.name,
                helpdeskArticle: i.z
            })),
        (0, l.jsxs)(s.Y0X, {
            ...t,
            'aria-labelledby': r,
            children: [
                (0, l.jsxs)(s.xBx, {
                    separator: !1,
                    className: c.modalHeader,
                    children: [
                        (0, l.jsx)(s.X6q, {
                            id: r,
                            variant: 'heading-xl/extrabold',
                            children: o.intl.string(o.t.kJwpBQ)
                        }),
                        (0, l.jsx)(s.olH, {
                            className: c.closeButton,
                            onClick: e
                        })
                    ]
                }),
                (0, l.jsx)(s.hzk, {
                    className: c.modalContent,
                    children: (0, l.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        className: c.contentText,
                        children: m
                    })
                }),
                (0, l.jsx)(s.mzw, {
                    children: (0, l.jsx)(s.zxk, {
                        className: c.button,
                        size: s.zxk.Sizes.MIN,
                        onClick: e,
                        children: o.intl.string(o.t.BddRzc)
                    })
                })
            ]
        })
    );
};
