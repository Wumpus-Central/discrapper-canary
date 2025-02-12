n.d(t, {
    W: () => x,
    u: () => f
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(206295),
    m = n(70097),
    _ = n(572004),
    h = n(217702),
    p = n(388032),
    g = n(310764),
    f = (((i = {})[(i.BOT = 0)] = 'BOT'), (i[(i.ACTIVITY = 1)] = 'ACTIVITY'), i);
function x(e) {
    let { title: t, header: n, info: i, staticBannerSrc: r, videoBannerSrc: f, bannerAspectRatio: x = 0, iconSrc: C, embedUrl: v, actions: E = [] } = e,
        { primaryColor: I, secondaryColor: N } = (0, u.Z)(null != C ? C : r),
        S = 'linear-gradient(45deg, '.concat(I, ', ').concat(N, ')'),
        T = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        b =
            _.wS && null != v
                ? (0, l.jsx)(c.zxk, {
                      look: c.zxk.Looks.BLANK,
                      size: c.zxk.Sizes.ICON,
                      'aria-label': p.intl.string(p.t.WqhZsr),
                      className: g.linkIcon,
                      onClick: () => {
                          (0, _.JG)(v), (0, c.showToast)((0, c.createToast)(p.intl.string(p.t['L/PwZW']), c.ToastType.SUCCESS));
                      },
                      children: (0, l.jsx)(c.xPt, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
        A = null != r,
        j = null != f && !1 === T,
        y = A || j,
        Z = 0 === x ? g.bannerAspectRatioBot : g.bannerAspectRatioActivity,
        R = a.useRef(null),
        L = a.useCallback(() => {
            let e = R.current;
            null != e && ('hidden' === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        P = a.useMemo(() => !!j && new URL(f).pathname.endsWith('.gif'), [j, f]);
    return (0, l.jsxs)('div', {
        className: s()(g.embed, { [g.showVideoOnFocus]: j }),
        children: [
            y &&
                (0, l.jsxs)('div', {
                    className: s()(g.bannerWrapper, Z),
                    children: [
                        j &&
                            (P
                                ? (0, l.jsx)('div', {
                                      className: g.videoBanner,
                                      style: { backgroundImage: 'url('.concat(f, ')') }
                                  })
                                : (0, l.jsx)(m.Z, {
                                      ref: R,
                                      src: f,
                                      mediaLayoutType: h.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: g.videoBanner
                                  })),
                        A &&
                            (0, l.jsx)('div', {
                                className: g.staticBanner,
                                style: { backgroundImage: 'url('.concat(r, ')') },
                                onTransitionEnd: L
                            })
                    ]
                }),
            (0, l.jsxs)('div', {
                className: g.contentContainer,
                style: { background: S },
                children: [
                    null != n &&
                        (0, l.jsxs)('div', {
                            className: g.header,
                            children: [
                                (0, l.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'none',
                                    children: n
                                }),
                                b
                            ]
                        }),
                    (0, l.jsxs)('div', {
                        className: g.contentWrapper,
                        children: [
                            null != C &&
                                (0, l.jsx)('div', {
                                    className: g.img,
                                    style: { backgroundImage: 'url('.concat(C, ')') }
                                }),
                            (0, l.jsxs)('div', {
                                className: g.content,
                                children: [
                                    (0, l.jsx)(c.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'none',
                                        lineClamp: 1,
                                        children: t
                                    }),
                                    (0, l.jsx)('div', {
                                        className: g.contentInfo,
                                        children: i
                                    })
                                ]
                            }),
                            null == n && b
                        ]
                    }),
                    E.length > 0 &&
                        (0, l.jsx)('div', {
                            className: g.actionWrapper,
                            children: E.map((e, t) => {
                                let { label: n, onClick: i, disabledReason: a, submitting: r } = e,
                                    s = null != a,
                                    o = 0 === t,
                                    d = {
                                        color: o ? c.zxk.Colors.WHITE : c.zxk.Colors.TRANSPARENT,
                                        className: o ? g.primaryButton : g.alwaysWhiteText,
                                        onClick: i,
                                        disabled: s,
                                        submitting: r,
                                        children: n
                                    };
                                return s
                                    ? (0, l.jsx)(
                                          c.ua7,
                                          {
                                              text: a,
                                              children: (e) => {
                                                  let { ...t } = e;
                                                  return (0, l.jsx)(c.zxk, {
                                                      ...d,
                                                      ...t
                                                  });
                                              }
                                          },
                                          n
                                      )
                                    : (0, l.jsx)(c.zxk, { ...d }, n);
                            })
                        })
                ]
            })
        ]
    });
}
