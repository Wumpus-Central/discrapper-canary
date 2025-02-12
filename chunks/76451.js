n.d(t, {
    Z: () => E,
    _: () => w
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    s = n(642128),
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
    v = n(585483),
    C = n(127654),
    _ = n(228392),
    b = n(981631),
    j = n(763890);
let N = {
        scale: 0.95,
        opacity: 0
    },
    T = {
        scale: 1,
        opacity: 1
    },
    I = {
        scale: 1,
        opacity: 1
    },
    S = {
        tension: 2400,
        friction: 52
    };
function w(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: s } = e,
        u = r.useRef(null),
        m = (0, o.e7)([x.Z], () => x.Z.getChannel(t), [t]);
    return (
        a()(null != m, 'Forum Channel is null'),
        (0, i.jsxs)(c.P3F, {
            className: j.uploadInput,
            onMouseEnter: s,
            onClick: () => {
                (0, _.N3)({ isMobile: !1 }), null == n || n();
            },
            onKeyPress: (e) => {
                if ('Enter' === e.key) {
                    var t;
                    null === (t = u.current) || void 0 === t || t.activateUploadDialogue(), (0, _.N3)({ isMobile: !1 });
                }
            },
            children: [
                (0, i.jsx)(d.Z, {
                    className: j.fileInput,
                    ref: u,
                    onChange: (e) => {
                        null == l || l(), (0, C.d)(e.currentTarget.files, m, f.d.FirstThreadMessage, { requireConfirm: !0 }), v.S.dispatch(b.CkL.TEXTAREA_FOCUS), (e.currentTarget.value = null);
                    },
                    multiple: m.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                }),
                (0, i.jsx)(c.FmF, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 28,
                    height: 28,
                    className: j.uploadIcon
                })
            ]
        })
    );
}
function y(e) {
    let { channelId: t, closePopout: n } = e,
        [l, a] = r.useState(!1),
        { reducedMotion: d } = r.useContext(c.Sfi),
        x = (0, c.q_F)(
            {
                from: d.enabled ? T : N,
                to: I,
                config: S
            },
            'animate-always'
        ),
        f = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
        v = (0, o.e7)([p.Z], () => p.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type));
    return (0, i.jsx)(s.animated.div, {
        className: j.popoutContainer,
        onMouseLeave: () => {
            l || n();
        },
        style: x,
        children: (0, i.jsxs)(c.zJl, {
            orientation: 'horizontal',
            className: j.popout,
            paddingFix: !1,
            fade: !0,
            children: [
                (0, i.jsx)(w, {
                    channelId: t,
                    onClick: () => {
                        a(!0);
                    },
                    onClose: () => {
                        a(!1), n();
                    }
                }),
                (0, i.jsx)('div', {
                    className: j.uploads,
                    children: v.map((e) =>
                        (0, i.jsx)(
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
        [n, l] = r.useState(!1),
        a = (0, o.e7)([p.Z], () => p.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type)),
        s = a.length,
        c = s > 0;
    r.useEffect(() => {
        n && !c && l(!1);
    }, [n, c]);
    let d = () => {
        c && l(!0);
    };
    return (0, i.jsxs)('div', {
        className: j.container,
        children: [
            c
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.r, {
                              upload: a[0],
                              size: h.q.SMALL,
                              onMouseEnter: d
                          }),
                          !n &&
                              (0, i.jsx)('div', {
                                  className: j.badge,
                                  children: s
                              })
                      ]
                  })
                : (0, i.jsx)(w, {
                      onMouseEnter: d,
                      channelId: t
                  }),
            n &&
                (0, i.jsx)(y, {
                    channelId: t,
                    closePopout: () => {
                        l(!1);
                    }
                })
        ]
    });
}
