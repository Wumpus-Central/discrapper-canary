s.d(e, { default: () => m }), s(47120);
var r = s(200651);
s(192379);
var i = s(481060),
    n = s(935369),
    l = s(53365),
    a = s(388032),
    o = s(647740),
    c = s(490962),
    d = s(221870);
function x(t) {
    let { header: e, body: s } = t;
    return (0, r.jsxs)('div', {
        className: o.bulletItem,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: o.bulletImage,
                src: c
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: e
                    }),
                    (0, r.jsx)(i.LZC, { size: 4 }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: s
                    })
                ]
            })
        ]
    });
}
function m(t) {
    let { guildId: e, demonetized: s, transitionState: c, onClose: m } = t,
        [h, { loading: u, error: j }] = (0, n.Z)(s ? l.$J : l.hY),
        g = async () => {
            try {
                let t = await h(e);
                null != t && (null == m || m());
            } catch (t) {}
        };
    return (0, r.jsxs)(i.Y0X, {
        className: o.__invalid_container,
        size: i.CgR.SMALL,
        transitionState: c,
        'aria-label': a.intl.string(a.t.TP4GSk),
        children: [
            (0, r.jsx)(i.xBx, {
                separator: !1,
                className: o.header,
                children: (0, r.jsx)('div', {
                    className: o.imageContainer,
                    children: (0, r.jsx)('img', {
                        alt: '',
                        className: o.__invalid_image,
                        src: d
                    })
                })
            }),
            (0, r.jsx)(i.hzk, {
                children: (0, r.jsxs)('div', {
                    className: o.content,
                    children: [
                        (0, r.jsx)(i.X6q, {
                            variant: 'heading-xl/medium',
                            color: 'header-primary',
                            children: a.intl.string(a.t.TP4GSk)
                        }),
                        (0, r.jsx)(i.LZC, { size: 12 }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: a.intl.format(a.t.c0IsOD, { termsURL: 'https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms' })
                        }),
                        (0, r.jsx)(i.LZC, { size: 24 }),
                        (0, r.jsx)(x, {
                            header: a.intl.string(a.t.UzDaWF),
                            body: a.intl.string(a.t.IDk8Fx)
                        }),
                        (0, r.jsx)(i.LZC, { size: 16 }),
                        (0, r.jsx)(x, {
                            header: a.intl.string(a.t['36/RiY']),
                            body: a.intl.string(a.t.CBzNtr)
                        })
                    ]
                })
            }),
            (0, r.jsx)(i.mzw, {
                children: (0, r.jsxs)('div', {
                    className: o.footer,
                    children: [
                        (0, r.jsx)(i.zxk, {
                            fullWidth: !0,
                            onClick: g,
                            submitting: u,
                            children: a.intl.string(a.t['pC/ozM'])
                        }),
                        (0, r.jsx)(i.LZC, { size: 4 }),
                        (0, r.jsx)(i.zxk, {
                            color: i.zxk.Colors.CUSTOM,
                            innerClassName: o.remindMeLater,
                            look: i.zxk.Looks.LINK,
                            fullWidth: !0,
                            onClick: m,
                            children: a.intl.string(a.t.Jj8nUF)
                        }),
                        null == j
                            ? null
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(i.LZC, { size: 8 }),
                                      (0, r.jsxs)(i.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'status-danger',
                                          children: ['Error: ', j.message]
                                      })
                                  ]
                              }),
                        (0, r.jsx)(i.LZC, { size: 10 }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: a.intl.format(a.t['+oNl6+'], { termsURL: 'https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms' })
                        })
                    ]
                })
            })
        ]
    });
}
