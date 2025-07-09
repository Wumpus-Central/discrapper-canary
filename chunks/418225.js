(s.d(e, { default: () => h }), s(388685));
var r = s(255367);
s(73800);
var i = s(755721),
    n = s(481060),
    a = s(935369),
    l = s(53365),
    o = s(388032),
    c = s(374762),
    d = s(490962),
    x = s(221870);
function m(t) {
    let { header: e, body: s } = t;
    return (0, r.jsxs)('div', {
        className: c.bulletItem,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: c.bulletImage,
                src: d
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(n.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-default',
                        children: e
                    }),
                    (0, r.jsx)(n.LZC, { size: 4 }),
                    (0, r.jsx)(n.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: s
                    })
                ]
            })
        ]
    });
}
function h(t) {
    let { guildId: e, demonetized: s, transitionState: d, onClose: h } = t,
        [u, { loading: j, error: g }] = (0, a.Z)(s ? l.$J : l.hY),
        C = async () => {
            try {
                let t = await u(e);
                null != t && (null == h || h());
            } catch (t) {}
        };
    return (0, r.jsxs)(n.Y0X, {
        className: c.__invalid_container,
        size: n.CgR.SMALL,
        transitionState: d,
        'aria-label': o.intl.string(o.t.TP4GSk),
        parentComponent: 'CreatorMonetizationAcceptNewTermsModal',
        children: [
            (0, r.jsx)(n.xBx, {
                separator: !1,
                className: c.header,
                children: (0, r.jsx)('div', {
                    className: c.imageContainer,
                    children: (0, r.jsx)('img', {
                        alt: '',
                        className: c.__invalid_image,
                        src: x
                    })
                })
            }),
            (0, r.jsx)(n.hzk, {
                children: (0, r.jsxs)('div', {
                    className: c.content,
                    children: [
                        (0, r.jsx)(n.X6q, {
                            variant: 'heading-xl/medium',
                            color: 'header-primary',
                            children: o.intl.string(o.t.TP4GSk)
                        }),
                        (0, r.jsx)(n.LZC, { size: 12 }),
                        (0, r.jsx)(n.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: o.intl.format(o.t.c0IsOD, { termsURL: 'https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms' })
                        }),
                        (0, r.jsx)(n.LZC, { size: 24 }),
                        (0, r.jsx)(m, {
                            header: o.intl.string(o.t.UzDaWF),
                            body: o.intl.string(o.t.IDk8Fx)
                        }),
                        (0, r.jsx)(n.LZC, { size: 16 }),
                        (0, r.jsx)(m, {
                            header: o.intl.string(o.t['36/RiY']),
                            body: o.intl.string(o.t.CBzNtr)
                        })
                    ]
                })
            }),
            (0, r.jsx)(n.mzw, {
                children: (0, r.jsxs)('div', {
                    className: c.footer,
                    children: [
                        (0, r.jsx)(n.zxk, {
                            variant: 'primary',
                            text: o.intl.string(o.t['pC/ozM']),
                            fullWidth: !0,
                            onClick: C,
                            loading: j
                        }),
                        (0, r.jsx)(n.LZC, { size: 4 }),
                        (0, r.jsx)(i.zx, {
                            color: i.zx.Colors.CUSTOM,
                            innerClassName: c.remindMeLater,
                            look: i.zx.Looks.LINK,
                            fullWidth: !0,
                            onClick: h,
                            children: o.intl.string(o.t.Jj8nUF)
                        }),
                        null == g
                            ? null
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(n.LZC, { size: 8 }),
                                      (0, r.jsxs)(n.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'status-danger',
                                          children: ['Error: ', g.message]
                                      })
                                  ]
                              }),
                        (0, r.jsx)(n.LZC, { size: 10 }),
                        (0, r.jsx)(n.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: o.intl.format(o.t['+oNl6+'], { termsURL: 'https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms' })
                        })
                    ]
                })
            })
        ]
    });
}
