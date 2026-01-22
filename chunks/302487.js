n.d(t, {
    A: () => T,
    h: () => E,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(284009),
    i = n.n(a),
    s = n(108531),
    c = n(311907),
    o = n(397927),
    d = n(817363),
    u = n(775602),
    m = n(355622),
    h = n(349688),
    f = n(914905),
    g = n(734057),
    x = n(31717),
    b = n(522602),
    p = n(203982),
    j = n(518960),
    v = n(853742),
    y = n(652215),
    A = n(149707);
let C = {
        scale: 0.95,
        opacity: 0,
    },
    O = {
        scale: 1,
        opacity: 1,
    },
    N = {
        scale: 1,
        opacity: 1,
    },
    S = {
        tension: 2400,
        friction: 52,
    };

function T(e) {
    let { channelId: t, onClick: n, onClose: a, onMouseEnter: s } = e,
        u = r.useRef(null),
        m = (0, c.bG)([g.A], () => g.A.getChannel(t), [t]);
    return (
        i()(null != m, "Forum Channel is null"),
        (0, l.jsxs)(o.DUT, {
            className: A.EJ,
            onMouseEnter: s,
            onClick: () => {
                (0, v.ri)({
                    isMobile: !1,
                }),
                    null == n || n();
            },
            onKeyPress: (e) => {
                if ("Enter" === e.key) {
                    var t;
                    null == (t = u.current) || t.activateUploadDialogue(),
                        (0, v.ri)({
                            isMobile: !1,
                        });
                }
            },
            children: [
                (0, l.jsx)(d.A, {
                    className: A.Fg,
                    ref: u,
                    onChange: (e) => {
                        null == a || a(),
                            (0, j.R)(e.currentTarget.files, m, x.C.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            p._.dispatch(y.jej.TEXTAREA_FOCUS),
                            (e.currentTarget.value = null);
                    },
                    multiple: m.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(o.XGR, {
                    size: "custom",
                    color: "currentColor",
                    width: 28,
                    height: 28,
                    className: A.T3,
                }),
            ],
        })
    );
}

function _(e) {
    let { channelId: t, closePopout: n } = e,
        [a, i] = r.useState(!1),
        { reducedMotion: d } = r.useContext(o.CZY),
        g = (0, o.zhh)(
            {
                from: d.enabled ? O : C,
                to: N,
                config: S,
            },
            "animate-always",
        ),
        x = (0, c.bG)([u.A], () => u.A.keyboardModeEnabled),
        p = (0, c.bG)([b.A], () => b.A.getUploads(t, m.oU.CREATE_FORUM_POST.drafts.type));
    return (0, l.jsx)(s.animated.div, {
        className: A.jC,
        onMouseLeave: () => {
            a || n();
        },
        style: g,
        children: (0, l.jsxs)(o.IpV, {
            orientation: "horizontal",
            className: A.SW,
            paddingFix: !1,
            fade: !0,
            children: [
                (0, l.jsx)(T, {
                    channelId: t,
                    onClick: () => {
                        i(!0);
                    },
                    onClose: () => {
                        i(!1), n();
                    },
                }),
                (0, l.jsx)("div", {
                    className: A.p8,
                    children: p.map((e) =>
                        (0, l.jsx)(
                            f.A,
                            {
                                channelId: t,
                                draftType: m.oU.CREATE_FORUM_POST.drafts.type,
                                upload: e,
                                keyboardModeEnabled: x,
                                hideFileName: !0,
                                size: h.L.SMALL,
                            },
                            e.id,
                        ),
                    ),
                }),
            ],
        }),
    });
}

function E(e) {
    let { channelId: t } = e,
        [n, a] = r.useState(!1),
        i = (0, c.bG)([b.A], () => b.A.getUploads(t, m.oU.CREATE_FORUM_POST.drafts.type)),
        s = i.length,
        o = s > 0;
    r.useEffect(() => {
        n && !o && a(!1);
    }, [n, o]);
    let d = () => {
        o && a(!0);
    };
    return (0, l.jsxs)("div", {
        className: A.kL,
        children: [
            o
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(f.J, {
                              upload: i[0],
                              size: h.L.SMALL,
                              onMouseEnter: d,
                          }),
                          !n &&
                              (0, l.jsx)("div", {
                                  className: A.qS,
                                  children: s,
                              }),
                      ],
                  })
                : (0, l.jsx)(T, {
                      onMouseEnter: d,
                      channelId: t,
                  }),
            n &&
                (0, l.jsx)(_, {
                    channelId: t,
                    closePopout: () => {
                        a(!1);
                    },
                }),
        ],
    });
}
