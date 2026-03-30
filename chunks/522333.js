n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(975807),
    s = n(486503),
    o = n(253932),
    d = n(957565),
    c = n(985018);
function u(e) {
    let { messageId: t, itemId: n, type: u, imageSrc: g } = e,
        A = o.Q_.useSetting(),
        { tidaWebformEnabled: p } = s.A.useExperiment({ location: "useMessageDetailsItem" }, { autoTrackExposure: !1 }),
        m = l.useCallback(() => {
            (0, d.C)(t);
        }, [t]),
        f = l.useCallback(() => {
            null != n && (0, d.C)(n);
        }, [n]),
        h = l.useCallback(() => {
            null != g && (0, d.C)(g);
        }, [g]),
        y = l.useCallback(() => {
            null != g && (0, r.A)(g);
        }, [g]),
        E = "sticker" === u;
    if (!A || !d.p5 || !p || ("emoji" !== u && !E) || null == n) return null;
    let _ = E ? c.intl.string(c.t.SJ3249) : c.intl.string(c.t.Ap2oVy),
        S = E ? c.intl.string(c.t.B1ubHx) : c.intl.string(c.t.cIoudn),
        b = E ? c.intl.string(c.t["qAEi+C"]) : c.intl.string(c.t.gDAM2n);
    return (0, i.jsxs)(a.Drp, {
        id: "message-details",
        label: c.intl.string(c.t.IqqJNI),
        leadingAccessory: { type: "icon", icon: a.mir },
        children: [
            (0, i.jsx)(a.Drp, {
                id: "copy-message-id",
                label: c.intl.string(c.t.zBoHlf),
                action: m,
                leadingAccessory: { type: "icon", icon: a.L9S },
            }),
            (0, i.jsx)(a.Drp, {
                id: "copy-item-id",
                label: _,
                action: f,
                leadingAccessory: { type: "icon", icon: a.L9S },
            }),
            null != g &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(a.Drp, {
                            id: "copy-image-link",
                            label: S,
                            action: h,
                            leadingAccessory: { type: "icon", icon: a.qYV },
                        }),
                        (0, i.jsx)(a.Drp, {
                            id: "open-image-link",
                            label: b,
                            action: y,
                            leadingAccessory: { type: "icon", icon: a.WxK },
                            trailingIndicator: { type: "icon", icon: a.I9m },
                        }),
                    ],
                }),
        ],
    });
}
