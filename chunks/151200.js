l.d(n, { Z: () => g });
var t = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(481060),
    s = l(328731),
    o = l(442550),
    u = l(435439),
    c = l(206295),
    d = l(297781),
    m = l(313201),
    h = l(231338),
    p = l(388032),
    x = l(760075),
    v = l(615983);
function f(e) {
    let { className: n, clickableClassName: l, clickable: i, children: s } = e,
        o = (0, m.Dt)();
    if (null != i && 'href' in i) {
        let { ariaDescription: e, href: u } = i;
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(a.nn4, {
                    id: o,
                    children: e
                }),
                (0, t.jsx)(a.eee, {
                    className: r()(n, l),
                    href: u,
                    'aria-describedby': o,
                    children: s
                })
            ]
        });
    }
    let { onClick: u, ariaDescription: c } = null != i ? i : {};
    return (0, t.jsxs)(a.g$b.Provider, {
        value: null == u,
        children: [
            null != u &&
                null != c &&
                (0, t.jsx)(a.nn4, {
                    id: o,
                    children: c
                }),
            (0, t.jsx)(a.P3F, {
                onClick: u,
                'aria-describedby': null == u ? void 0 : o,
                className: r()(n, null != u && l),
                children: s
            })
        ]
    });
}
function C(e) {
    let { clickable: n, ...l } = e;
    return (0, t.jsx)(f, {
        ...l,
        clickable: {
            ...n,
            ariaDescription: ''
        },
        clickableClassName: v.clickable
    });
}
function g(e) {
    let { entry: n, channel: l, title: i, subtitle: v, thumbnailUrl: g, titleClickable: j, subtitleClickable: N, thumbnailClickable: S, providerIconProps: E, style: I = {} } = e,
        Z = (0, m.Dt)(),
        { primaryColor: T, secondaryColor: b } = (0, c.Z)(g);
    return (
        null != g && (I.background = 'linear-gradient(45deg, '.concat(T, ', ').concat(b, ')')),
        (0, t.jsx)(a.f6W, {
            theme: h.BR.DARK,
            children: (e) =>
                (0, t.jsxs)('figure', {
                    'aria-roledescription': p.intl.string(p.t.zFfUhI),
                    'aria-labelledby': Z,
                    'data-disable-adaptive-theme': !0,
                    className: r()(x.container, e),
                    style: I,
                    children: [
                        (0, t.jsx)(f, {
                            className: x.thumbnailContainer,
                            clickableClassName: x.clickable,
                            clickable: S,
                            children: (0, t.jsx)(o.f, {
                                src: g,
                                constrain: 'width',
                                size: 64,
                                'aria-hidden': !0
                            })
                        }),
                        (0, t.jsxs)('div', {
                            className: x.infoContainer,
                            children: [
                                (0, t.jsx)(s.Z, {
                                    channel: l,
                                    entry: n,
                                    className: x.users
                                }),
                                (0, t.jsx)(a.LZC, { size: 2 }),
                                (0, t.jsx)(C, {
                                    clickable: j,
                                    className: x.clickableText,
                                    children: (0, t.jsx)(a.X6q, {
                                        id: Z,
                                        variant: 'heading-md/medium',
                                        lineClamp: 1,
                                        className: r()(x.textPrimary, x.truncatedText),
                                        scaleFontToUserSetting: !0,
                                        children: i
                                    })
                                }),
                                null != v
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)(a.LZC, { size: 2 }),
                                              (0, t.jsx)(C, {
                                                  clickable: N,
                                                  className: x.clickableText,
                                                  children: (0, t.jsx)(a.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: r()(x.textSecondary, x.truncatedText),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: v
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, t.jsx)(d.PZ, {
                                    className: x.badges,
                                    entry: n,
                                    location: d.Gt.EMBED
                                })
                            ]
                        }),
                        (0, t.jsx)('div', {
                            className: x.headerIcons,
                            children: null != E ? (0, t.jsx)(u.Z, { ...E }) : null
                        })
                    ]
                })
        })
    );
}
