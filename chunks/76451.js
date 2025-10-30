n.d(t, {
    Z: () => P,
    _: () => N,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    l = n.n(a),
    s = n(13941),
    o = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(607070),
    m = n(541716),
    h = n(859235),
    g = n(898463),
    f = n(592125),
    x = n(703558),
    p = n(117530),
    b = n(585483),
    j = n(127654),
    v = n(228392),
    _ = n(981631),
    C = n(20576);
let y = {
        scale: 0.95,
        opacity: 0,
    },
    T = {
        scale: 1,
        opacity: 1,
    },
    w = {
        scale: 1,
        opacity: 1,
    },
    S = {
        tension: 2400,
        friction: 52,
    };
function N(e) {
    let { channelId: t, onClick: n, onClose: a, onMouseEnter: s } = e,
        u = i.useRef(null),
        m = (0, o.e7)([f.Z], () => f.Z.getChannel(t), [t]);
    return (
        l()(null != m, "Forum Channel is null"),
        (0, r.jsxs)(c.P3F, {
            className: C.uploadInput,
            onMouseEnter: s,
            onClick: () => {
                (0, v.N3)({ isMobile: !1 }), null == n || n();
            },
            onKeyPress: (e) => {
                if ("Enter" === e.key) {
                    var t;
                    null == (t = u.current) || t.activateUploadDialogue(), (0, v.N3)({ isMobile: !1 });
                }
            },
            children: [
                (0, r.jsx)(d.Z, {
                    className: C.fileInput,
                    ref: u,
                    onChange: (e) => {
                        null == a || a(),
                            (0, j.d)(e.currentTarget.files, m, x.d.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            b.S.dispatch(_.CkL.TEXTAREA_FOCUS),
                            (e.currentTarget.value = null);
                    },
                    multiple: m.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, r.jsx)(c.FmF, {
                    size: "custom",
                    color: "currentColor",
                    width: 28,
                    height: 28,
                    className: C.uploadIcon,
                }),
            ],
        })
    );
}
function O(e) {
    let { channelId: t, closePopout: n } = e,
        [a, l] = i.useState(!1),
        { reducedMotion: d } = i.useContext(c.Sfi),
        f = (0, c.q_F)(
            {
                from: d.enabled ? T : y,
                to: w,
                config: S,
            },
            "animate-always",
        ),
        x = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
        b = (0, o.e7)([p.Z], () => p.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type));
    return (0, r.jsx)(s.animated.div, {
        className: C.popoutContainer,
        onMouseLeave: () => {
            a || n();
        },
        style: f,
        children: (0, r.jsxs)(c.zJl, {
            orientation: "horizontal",
            className: C.popout,
            paddingFix: !1,
            fade: !0,
            children: [
                (0, r.jsx)(N, {
                    channelId: t,
                    onClick: () => {
                        l(!0);
                    },
                    onClose: () => {
                        l(!1), n();
                    },
                }),
                (0, r.jsx)("div", {
                    className: C.uploads,
                    children: b.map((e) =>
                        (0, r.jsx)(
                            g.Z,
                            {
                                channelId: t,
                                draftType: m.Ie.CREATE_FORUM_POST.drafts.type,
                                upload: e,
                                keyboardModeEnabled: x,
                                hideFileName: !0,
                                size: h.q.SMALL,
                            },
                            e.id,
                        ),
                    ),
                }),
            ],
        }),
    });
}
function P(e) {
    let { channelId: t } = e,
        [n, a] = i.useState(!1),
        l = (0, o.e7)([p.Z], () => p.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type)),
        s = l.length,
        c = s > 0;
    i.useEffect(() => {
        n && !c && a(!1);
    }, [n, c]);
    let d = () => {
        c && a(!0);
    };
    return (0, r.jsxs)("div", {
        className: C.container,
        children: [
            c
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.r, {
                              upload: l[0],
                              size: h.q.SMALL,
                              onMouseEnter: d,
                          }),
                          !n &&
                              (0, r.jsx)("div", {
                                  className: C.badge,
                                  children: s,
                              }),
                      ],
                  })
                : (0, r.jsx)(N, {
                      onMouseEnter: d,
                      channelId: t,
                  }),
            n &&
                (0, r.jsx)(O, {
                    channelId: t,
                    closePopout: () => {
                        a(!1);
                    },
                }),
        ],
    });
}
