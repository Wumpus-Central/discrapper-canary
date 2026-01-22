n.d(t, {
    A: () => f,
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    o = n(975807),
    a = n(486503),
    c = n(253932),
    s = n(957565),
    d = n(723702),
    u = n(985018);

function f(e) {
    let { messageId: t, itemId: n, type: f, imageSrc: g } = e,
        p = c.Q_.useSetting(),
        { tidaWebformEnabled: b } = a.A.useExperiment(
            {
                location: "useMessageDetailsItem",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        m = l.useCallback(() => {
            (0, s.C)(t);
        }, [t]),
        y = l.useCallback(() => {
            null != n && (0, s.C)(n);
        }, [n]),
        O = l.useCallback(() => {
            null != g && (0, s.C)(g);
        }, [g]),
        A = l.useCallback(() => {
            null != g && (0, o.A)(g);
        }, [g]),
        v = "sticker" === f;
    if (!p || !s.p5 || !b || ("emoji" !== f && !v) || null == n) return null;
    let j = v ? u.intl.string(u.t.SJ3249) : u.intl.string(u.t.Ap2oVy);
    return (0, r.jsxs)(i.Drp, {
        id: "message-details",
        label: u.intl.string(u.t.IqqJNI),
        children: [
            (0, r.jsx)(i.Drp, {
                id: "copy-message-id",
                label: u.intl.string(u.t.zBoHlf),
                action: m,
                icon: i.L9S,
            }),
            (0, r.jsx)(i.Drp, {
                id: "copy-item-id",
                label: j,
                action: y,
                icon: i.L9S,
            }),
            null != g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(i.Drp, {
                            id: "copy-image-link",
                            label: u.intl.string(u.t["8xHmxo"]),
                            action: O,
                            icon: i.qYV,
                        }),
                        d.isPlatformEmbedded &&
                            (0, r.jsx)(i.Drp, {
                                id: "open-image-link",
                                label: u.intl.string(u.t.w8ldGK),
                                action: A,
                                icon: i.qYV,
                            }),
                    ],
                }),
        ],
    });
}
