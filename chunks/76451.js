n.d(t, {
    Z: () => I,
    _: () => O,
}),
    n(388685);
var r = n(54381),
    a = n(473749),
    i = n(512722),
    l = n.n(i),
    s = n(81239),
    o = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(607070),
    m = n(541716),
    h = n(859235),
    f = n(898463),
    g = n(592125),
    x = n(703558),
    b = n(117530),
    p = n(585483),
    j = n(127654),
    v = n(228392),
    C = n(981631),
    y = n(736897);
let T = {
        scale: 0.95,
        opacity: 0,
    },
    S = {
        scale: 1,
        opacity: 1,
    },
    N = {
        scale: 1,
        opacity: 1,
    },
    w = {
        tension: 2400,
        friction: 52,
    };
function O(e) {
    let { channelId: t, onClick: n, onClose: i, onMouseEnter: s } = e,
        u = a.useRef(null),
        m = (0, o.e7)([g.Z], () => g.Z.getChannel(t), [t]);
    return (
        l()(null != m, "Forum Channel is null"),
        (0, r.jsxs)(c.P3F, {
            className: y.uploadInput,
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
                    className: y.fileInput,
                    ref: u,
                    onChange: (e) => {
                        null == i || i(),
                            (0, j.d)(e.currentTarget.files, m, x.d.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            p.S.dispatch(C.CkL.TEXTAREA_FOCUS),
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
                    className: y.uploadIcon,
                }),
            ],
        })
    );
}
function P(e) {
    let { channelId: t, closePopout: n } = e,
        [i, l] = a.useState(!1),
        { reducedMotion: d } = a.useContext(c.Sfi),
        g = (0, c.q_F)(
            {
                from: d.enabled ? S : T,
                to: N,
                config: w,
            },
            "animate-always",
        ),
        x = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
        p = (0, o.e7)([b.Z], () => b.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type));
    return (0, r.jsx)(s.animated.div, {
        className: y.popoutContainer,
        onMouseLeave: () => {
            i || n();
        },
        style: g,
        children: (0, r.jsxs)(c.zJl, {
            orientation: "horizontal",
            className: y.popout,
            paddingFix: !1,
            fade: !0,
            children: [
                (0, r.jsx)(O, {
                    channelId: t,
                    onClick: () => {
                        l(!0);
                    },
                    onClose: () => {
                        l(!1), n();
                    },
                }),
                (0, r.jsx)("div", {
                    className: y.uploads,
                    children: p.map((e) =>
                        (0, r.jsx)(
                            f.Z,
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
function I(e) {
    let { channelId: t } = e,
        [n, i] = a.useState(!1),
        l = (0, o.e7)([b.Z], () => b.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type)),
        s = l.length,
        c = s > 0;
    a.useEffect(() => {
        n && !c && i(!1);
    }, [n, c]);
    let d = () => {
        c && i(!0);
    };
    return (0, r.jsxs)("div", {
        className: y.container,
        children: [
            c
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(f.r, {
                              upload: l[0],
                              size: h.q.SMALL,
                              onMouseEnter: d,
                          }),
                          !n &&
                              (0, r.jsx)("div", {
                                  className: y.badge,
                                  children: s,
                              }),
                      ],
                  })
                : (0, r.jsx)(O, {
                      onMouseEnter: d,
                      channelId: t,
                  }),
            n &&
                (0, r.jsx)(P, {
                    channelId: t,
                    closePopout: () => {
                        i(!1);
                    },
                }),
        ],
    });
}
