s.d(t, { default: () => m }), s(47120);
var r = s(200651);
s(192379);
var i = s(481060),
    a = s(935369),
    n = s(53365),
    l = s(388032),
    o = s(374762),
    c = s(490962),
    d = s(221870);
function x(e) {
    let { header: t, body: s } = e;
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
                        children: t
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
function m(e) {
    let { guildId: t, demonetized: s, transitionState: c, onClose: m } = e,
        [h, { loading: u, error: j }] = (0, a.Z)(s ? n.$J : n.hY),
        g = async () => {
            try {
                let e = await h(t);
                null != e && (null == m || m());
            } catch (e) {}
        };
    return (0, r.jsxs)(i.Y0X, {
        className: o.__invalid_container,
        size: i.CgR.SMALL,
        transitionState: c,
        'aria-label': l.NW.string(l.t.TP4GSk),
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
                            children: l.NW.string(l.t.TP4GSk)
                        }),
                        (0, r.jsx)(i.LZC, { size: 12 }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: l.NW.format(l.t.c0IsOD, { termsURL: 'https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms' })
                        }),
                        (0, r.jsx)(i.LZC, { size: 24 }),
                        (0, r.jsx)(x, {
                            header: l.NW.string(l.t.UzDaWF),
                            body: l.NW.string(l.t.IDk8Fx)
                        }),
                        (0, r.jsx)(i.LZC, { size: 16 }),
                        (0, r.jsx)(x, {
                            header: l.NW.string(l.t['36/RiY']),
                            body: l.NW.string(l.t.CBzNtr)
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
                            children: l.NW.string(l.t['pC/ozM'])
                        }),
                        (0, r.jsx)(i.LZC, { size: 4 }),
                        (0, r.jsx)(i.zxk, {
                            color: i.zxk.Colors.CUSTOM,
                            innerClassName: o.remindMeLater,
                            look: i.zxk.Looks.LINK,
                            fullWidth: !0,
                            onClick: m,
                            children: l.NW.string(l.t.Jj8nUF)
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
                            children: l.NW.format(l.t['+oNl6+'], { termsURL: 'https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms' })
                        })
                    ]
                })
            })
        ]
    });
}
