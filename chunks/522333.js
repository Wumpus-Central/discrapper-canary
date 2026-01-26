n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(975807),
    o = n(486503),
    c = n(253932),
    s = n(957565),
    d = n(723702),
    u = n(985018);

function g(e) {
    let { messageId: t, itemId: n, type: g, imageSrc: p } = e,
        f = c.Q_.useSetting(),
        { tidaWebformEnabled: y } = o.A.useExperiment(
            {
                location: "useMessageDetailsItem",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        b = i.useCallback(() => {
            (0, s.C)(t);
        }, [t]),
        A = i.useCallback(() => {
            null != n && (0, s.C)(n);
        }, [n]),
        m = i.useCallback(() => {
            null != p && (0, s.C)(p);
        }, [p]),
        O = i.useCallback(() => {
            null != p && (0, a.A)(p);
        }, [p]),
        v = "sticker" === g;
    if (!f || !s.p5 || !y || ("emoji" !== g && !v) || null == n) return null;
    let j = v ? u.intl.string(u.t.SJ3249) : u.intl.string(u.t.Ap2oVy);
    return (0, r.jsxs)(l.Drp, {
        id: "message-details",
        label: u.intl.string(u.t.IqqJNI),
        children: [
            (0, r.jsx)(l.Drp, {
                id: "copy-message-id",
                label: u.intl.string(u.t.zBoHlf),
                action: b,
                leadingAccessory: {
                    type: "icon",
                    icon: l.L9S,
                },
                icon: l.L9S,
            }),
            (0, r.jsx)(l.Drp, {
                id: "copy-item-id",
                label: j,
                action: A,
                leadingAccessory: {
                    type: "icon",
                    icon: l.L9S,
                },
                icon: l.L9S,
            }),
            null != p &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Drp, {
                            id: "copy-image-link",
                            label: u.intl.string(u.t["8xHmxo"]),
                            action: m,
                            leadingAccessory: {
                                type: "icon",
                                icon: l.qYV,
                            },
                            icon: l.qYV,
                        }),
                        d.isPlatformEmbedded &&
                            (0, r.jsx)(l.Drp, {
                                id: "open-image-link",
                                label: u.intl.string(u.t.w8ldGK),
                                action: O,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: l.qYV,
                                },
                                icon: l.qYV,
                            }),
                    ],
                }),
        ],
    });
}
