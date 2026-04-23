n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(477782),
    r = n(885574),
    s = n(473935),
    o = n(173936),
    d = n(93688),
    c = n(509434),
    u = n(975807),
    g = n(486503),
    A = n(253932),
    h = n(957565),
    m = n(985018);
function f(e) {
    let { messageId: t, itemId: n, type: f, imageSrc: p } = e,
        E = A.Q_.useSetting(),
        { tidaWebformEnabled: y } = g.A.useExperiment({ location: "useMessageDetailsItem" }, { autoTrackExposure: !1 }),
        v = l.useCallback(() => {
            (0, h.C)(t);
        }, [t]),
        _ = l.useCallback(() => {
            null != n && (0, h.C)(n);
        }, [n]),
        S = l.useCallback(() => {
            null != p && (0, h.C)(p);
        }, [p]),
        I = l.useCallback(() => {
            null != p && (0, u.A)(p);
        }, [p]),
        x = "sticker" === f;
    if (!E || !h.p5 || !y || ("emoji" !== f && !x) || null == n) return null;
    let b = x ? m.intl.string(m.t.SJ3249) : m.intl.string(m.t.Ap2oVy),
        T = x ? m.intl.string(m.t.B1ubHx) : m.intl.string(m.t.cIoudn),
        M = x ? m.intl.string(m.t["qAEi+C"]) : m.intl.string(m.t.gDAM2n);
    return (0, i.jsxs)(a.Dr, {
        id: "message-details",
        label: m.intl.string(m.t.IqqJNI),
        leadingAccessory: { type: "icon", icon: r.m },
        children: [
            (0, i.jsx)(a.Dr, {
                id: "copy-message-id",
                label: m.intl.string(m.t.zBoHlf),
                action: v,
                leadingAccessory: { type: "icon", icon: s.L },
            }),
            (0, i.jsx)(a.Dr, {
                id: "copy-item-id",
                label: b,
                action: _,
                leadingAccessory: { type: "icon", icon: s.L },
            }),
            null != p &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(a.Dr, {
                            id: "copy-image-link",
                            label: T,
                            action: S,
                            leadingAccessory: { type: "icon", icon: o.q },
                        }),
                        (0, i.jsx)(a.Dr, {
                            id: "open-image-link",
                            label: M,
                            action: I,
                            leadingAccessory: { type: "icon", icon: d.W },
                            trailingIndicator: { type: "icon", icon: c.I },
                        }),
                    ],
                }),
        ],
    });
}
