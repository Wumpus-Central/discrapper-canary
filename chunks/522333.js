n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(975807),
    s = n(486503),
    o = n(253932),
    d = n(957565),
    c = n(723702),
    u = n(985018);
function g(e) {
    let { messageId: t, itemId: n, type: g, imageSrc: A } = e,
        p = o.Q_.useSetting(),
        { tidaWebformEnabled: m } = s.A.useExperiment({ location: "useMessageDetailsItem" }, { autoTrackExposure: !1 }),
        f = l.useCallback(() => {
            (0, d.C)(t);
        }, [t]),
        y = l.useCallback(() => {
            null != n && (0, d.C)(n);
        }, [n]),
        h = l.useCallback(() => {
            null != A && (0, d.C)(A);
        }, [A]),
        E = l.useCallback(() => {
            null != A && (0, r.A)(A);
        }, [A]),
        S = "sticker" === g;
    if (!p || !d.p5 || !m || ("emoji" !== g && !S) || null == n) return null;
    let _ = S ? u.intl.string(u.t.SJ3249) : u.intl.string(u.t.Ap2oVy);
    return (0, i.jsxs)(a.Drp, {
        id: "message-details",
        label: u.intl.string(u.t.IqqJNI),
        children: [
            (0, i.jsx)(a.Drp, {
                id: "copy-message-id",
                label: u.intl.string(u.t.zBoHlf),
                action: f,
                leadingAccessory: { type: "icon", icon: a.L9S },
                icon: a.L9S,
            }),
            (0, i.jsx)(a.Drp, {
                id: "copy-item-id",
                label: _,
                action: y,
                leadingAccessory: { type: "icon", icon: a.L9S },
                icon: a.L9S,
            }),
            null != A &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(a.Drp, {
                            id: "copy-image-link",
                            label: u.intl.string(u.t["8xHmxo"]),
                            action: h,
                            leadingAccessory: { type: "icon", icon: a.qYV },
                            icon: a.qYV,
                        }),
                        c.isPlatformEmbedded &&
                            (0, i.jsx)(a.Drp, {
                                id: "open-image-link",
                                label: u.intl.string(u.t.w8ldGK),
                                action: E,
                                leadingAccessory: { type: "icon", icon: a.qYV },
                                icon: a.qYV,
                            }),
                    ],
                }),
        ],
    });
}
