n.d(t, {
    Z: function () {
        return E;
    },
    _: function () {
        return w;
    }
}),
    n(47120);
var a = n(200651),
    i = n(192379),
    r = n(512722),
    l = n.n(r),
    s = n(666912),
    o = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(607070),
    m = n(541716),
    h = n(859235),
    g = n(898463),
    x = n(592125),
    f = n(703558),
    p = n(117530),
    C = n(585483),
    v = n(127654),
    b = n(228392),
    j = n(981631),
    _ = n(933907);
let I = {
        scale: 0.95,
        opacity: 0
    },
    T = {
        scale: 1,
        opacity: 1
    },
    N = {
        scale: 1,
        opacity: 1
    },
    S = {
        tension: 2400,
        friction: 52
    };
function w(e) {
    let { channelId: t, onClick: n, onClose: r, onMouseEnter: s } = e,
        u = i.useRef(null),
        m = (0, o.e7)([x.Z], () => x.Z.getChannel(t), [t]);
    return (
        l()(null != m, 'Forum Channel is null'),
        (0, a.jsxs)(c.Clickable, {
            className: _.uploadInput,
            onMouseEnter: s,
            onClick: () => {
                (0, b.N3)({ isMobile: !1 }), null == n || n();
            },
            onKeyPress: (e) => {
                if ('Enter' === e.key) {
                    var t;
                    null === (t = u.current) || void 0 === t || t.activateUploadDialogue(), (0, b.N3)({ isMobile: !1 });
                }
            },
            children: [
                (0, a.jsx)(d.Z, {
                    className: _.fileInput,
                    ref: u,
                    onChange: (e) => {
                        null == r || r(), (0, v.d)(e.currentTarget.files, m, f.d.FirstThreadMessage, { requireConfirm: !0 }), C.S.dispatch(j.CkL.TEXTAREA_FOCUS), (e.currentTarget.value = null);
                    },
                    multiple: m.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                }),
                (0, a.jsx)(c.ImagePlusIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 28,
                    height: 28,
                    className: _.uploadIcon
                })
            ]
        })
    );
}
function y(e) {
    let { channelId: t, closePopout: n } = e,
        [r, l] = i.useState(!1),
        { reducedMotion: d } = i.useContext(c.AccessibilityPreferencesContext),
        x = (0, c.useSpring)(
            {
                from: d.enabled ? T : I,
                to: N,
                config: S
            },
            'animate-always'
        ),
        f = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
        C = (0, o.e7)([p.Z], () => p.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type));
    return (0, a.jsx)(s.animated.div, {
        className: _.popoutContainer,
        onMouseLeave: () => {
            !r && n();
        },
        style: x,
        children: (0, a.jsxs)(c.ScrollerThin, {
            orientation: 'horizontal',
            className: _.popout,
            paddingFix: !1,
            fade: !0,
            children: [
                (0, a.jsx)(w, {
                    channelId: t,
                    onClick: () => {
                        l(!0);
                    },
                    onClose: () => {
                        l(!1), n();
                    }
                }),
                (0, a.jsx)('div', {
                    className: _.uploads,
                    children: C.map((e) =>
                        (0, a.jsx)(
                            g.Z,
                            {
                                channelId: t,
                                draftType: m.Ie.CREATE_FORUM_POST.drafts.type,
                                upload: e,
                                keyboardModeEnabled: f,
                                hideFileName: !0,
                                size: h.q.SMALL
                            },
                            e.id
                        )
                    )
                })
            ]
        })
    });
}
function E(e) {
    let { channelId: t } = e,
        [n, r] = i.useState(!1),
        l = (0, o.e7)([p.Z], () => p.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type)),
        s = l.length,
        c = s > 0;
    i.useEffect(() => {
        n && !c && r(!1);
    }, [n, c]);
    let d = () => {
        c && r(!0);
    };
    return (0, a.jsxs)('div', {
        className: _.container,
        children: [
            c
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(g.r, {
                              upload: l[0],
                              size: h.q.SMALL,
                              onMouseEnter: d
                          }),
                          !n &&
                              (0, a.jsx)('div', {
                                  className: _.badge,
                                  children: s
                              })
                      ]
                  })
                : (0, a.jsx)(w, {
                      onMouseEnter: d,
                      channelId: t
                  }),
            n &&
                (0, a.jsx)(y, {
                    channelId: t,
                    closePopout: () => {
                        r(!1);
                    }
                })
        ]
    });
}
