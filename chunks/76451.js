n.d(t, {
    Z: () => T,
    _: () => S
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    i = n(512722),
    l = n.n(i),
    s = n(642128),
    o = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(607070),
    m = n(541716),
    h = n(859235),
    g = n(898463),
    f = n(592125),
    p = n(703558),
    x = n(117530),
    b = n(585483),
    j = n(127654),
    v = n(228392),
    C = n(981631),
    _ = n(933897);
let y = {
        scale: 0.95,
        opacity: 0
    },
    N = {
        scale: 1,
        opacity: 1
    },
    O = {
        scale: 1,
        opacity: 1
    },
    w = {
        tension: 2400,
        friction: 52
    };
function S(e) {
    let { channelId: t, onClick: n, onClose: i, onMouseEnter: s } = e,
        u = a.useRef(null),
        m = (0, o.e7)([f.Z], () => f.Z.getChannel(t), [t]);
    return (
        l()(null != m, 'Forum Channel is null'),
        (0, r.jsxs)(c.P3F, {
            className: _.uploadInput,
            onMouseEnter: s,
            onClick: () => {
                (0, v.N3)({ isMobile: !1 }), null == n || n();
            },
            onKeyPress: (e) => {
                if ('Enter' === e.key) {
                    var t;
                    null == (t = u.current) || t.activateUploadDialogue(), (0, v.N3)({ isMobile: !1 });
                }
            },
            children: [
                (0, r.jsx)(d.Z, {
                    className: _.fileInput,
                    ref: u,
                    onChange: (e) => {
                        null == i || i(), (0, j.d)(e.currentTarget.files, m, p.d.FirstThreadMessage, { requireConfirm: !0 }), b.S.dispatch(C.CkL.TEXTAREA_FOCUS), (e.currentTarget.value = null);
                    },
                    multiple: m.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                }),
                (0, r.jsx)(c.FmF, {
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
function P(e) {
    let { channelId: t, closePopout: n } = e,
        [i, l] = a.useState(!1),
        { reducedMotion: d } = a.useContext(c.Sfi),
        f = (0, c.q_F)(
            {
                from: d.enabled ? N : y,
                to: O,
                config: w
            },
            'animate-always'
        ),
        p = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
        b = (0, o.e7)([x.Z], () => x.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type));
    return (0, r.jsx)(s.animated.div, {
        className: _.popoutContainer,
        onMouseLeave: () => {
            i || n();
        },
        style: f,
        children: (0, r.jsxs)(c.zJl, {
            orientation: 'horizontal',
            className: _.popout,
            paddingFix: !1,
            fade: !0,
            children: [
                (0, r.jsx)(S, {
                    channelId: t,
                    onClick: () => {
                        l(!0);
                    },
                    onClose: () => {
                        l(!1), n();
                    }
                }),
                (0, r.jsx)('div', {
                    className: _.uploads,
                    children: b.map((e) =>
                        (0, r.jsx)(
                            g.Z,
                            {
                                channelId: t,
                                draftType: m.Ie.CREATE_FORUM_POST.drafts.type,
                                upload: e,
                                keyboardModeEnabled: p,
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
function T(e) {
    let { channelId: t } = e,
        [n, i] = a.useState(!1),
        l = (0, o.e7)([x.Z], () => x.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type)),
        s = l.length,
        c = s > 0;
    a.useEffect(() => {
        n && !c && i(!1);
    }, [n, c]);
    let d = () => {
        c && i(!0);
    };
    return (0, r.jsxs)('div', {
        className: _.container,
        children: [
            c
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.r, {
                              upload: l[0],
                              size: h.q.SMALL,
                              onMouseEnter: d
                          }),
                          !n &&
                              (0, r.jsx)('div', {
                                  className: _.badge,
                                  children: s
                              })
                      ]
                  })
                : (0, r.jsx)(S, {
                      onMouseEnter: d,
                      channelId: t
                  }),
            n &&
                (0, r.jsx)(P, {
                    channelId: t,
                    closePopout: () => {
                        i(!1);
                    }
                })
        ]
    });
}
