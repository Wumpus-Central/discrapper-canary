n.d(t, { e: () => E });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(264418),
    s = n(230711),
    l = n(906732),
    c = n(710845),
    u = n(451478),
    d = n(829716),
    f = n(981631),
    _ = n(921944),
    p = n(693450),
    h = n(388032),
    m = n(374104);
let g = new c.Z("DisplayNameStylesCoachmark");
function E(e) {
    let { markAsDismissed: t, targetElementRef: n, children: c } = e,
        { analyticsLocations: E } = (0, l.ZP)(),
        b = (0, i.useRef)(null),
        y = (0, a.e7)([u.Z], () => u.Z.isFocused()),
        O = (0, i.useCallback)(() => {
            t(_.L.TAKE_ACTION),
                s.Z.open(f.oAB.PROFILE_CUSTOMIZATION, null, { analyticsLocations: E }),
                (0, d.I)({ analyticsLocations: E });
        }, [t, E]),
        v = (0, i.useCallback)(() => {
            t(_.L.USER_DISMISS);
        }, [t]);
    return (
        (0, i.useEffect)(() => {
            var e, t, n;
            y && (null == (e = b.current) ? void 0 : e.paused)
                ? null == (t = b.current) || t.play().catch(g.error)
                : y || null == (n = b.current) || n.pause();
        }, [y]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                c,
                (0, r.jsx)(o.J, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: v,
                    align: "right",
                    position: "top",
                    caretConfig: {
                        position: "bottom",
                        align: "center",
                    },
                    gradientColor: "nitro-pink",
                    graphic: {
                        type: "video",
                        ref: b,
                        src: m.Z,
                        aspectRatio: "21/9",
                        loop: !0,
                    },
                    size: "lg",
                    badge: {
                        type: "beta",
                        variant: "expressive",
                    },
                    title: h.intl.string(p.default["1AE46+"]),
                    body: [h.intl.string(p.default.cNc1g4), h.intl.string(h.t["4JNXHB"])],
                    actions: [
                        {
                            text: h.intl.string(h.t.uw9zIy),
                            variant: "primary",
                            onClick: O,
                        },
                    ],
                }),
            ],
        })
    );
}
