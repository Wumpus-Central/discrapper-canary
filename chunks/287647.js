n.d(t, { e: () => x });
var i = n(951288),
    r = n(647438),
    s = n(442837),
    a = n(264418),
    l = n(230711),
    o = n(906732),
    c = n(710845),
    d = n(451478),
    u = n(829716),
    m = n(981631),
    p = n(921944),
    g = n(693450),
    h = n(388032),
    f = n(374104);
let b = new c.Z("DisplayNameStylesCoachmark");
function x(e) {
    let { markAsDismissed: t, targetElementRef: n, children: c } = e,
        { analyticsLocations: x } = (0, o.ZP)(),
        _ = (0, r.useRef)(null),
        j = (0, s.e7)([d.Z], () => d.Z.isFocused()),
        E = (0, r.useCallback)(() => {
            t(p.L.TAKE_ACTION),
                l.Z.open(m.oAB.PROFILE_CUSTOMIZATION, null, { analyticsLocations: x }),
                (0, u.I)({ analyticsLocations: x });
        }, [t, x]),
        C = (0, r.useCallback)(() => {
            t(p.L.USER_DISMISS);
        }, [t]);
    return (
        (0, r.useEffect)(() => {
            var e, t, n;
            j && (null == (e = _.current) ? void 0 : e.paused)
                ? null == (t = _.current) || t.play().catch(b.error)
                : j || null == (n = _.current) || n.pause();
        }, [j]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                c,
                (0, i.jsx)(a.J, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: C,
                    align: "right",
                    position: "top",
                    caretConfig: {
                        position: "bottom",
                        align: "center",
                    },
                    gradientColor: "nitro-pink",
                    graphic: {
                        type: "video",
                        ref: _,
                        src: f.Z,
                        aspectRatio: "21/9",
                        loop: !0,
                    },
                    size: "lg",
                    badge: {
                        type: "beta",
                        variant: "expressive",
                    },
                    title: h.intl.string(g.default["1AE46+"]),
                    body: [h.intl.string(g.default.cNc1g4), h.intl.string(h.t["4JNXHB"])],
                    actions: [
                        {
                            text: h.intl.string(h.t.uw9zIy),
                            variant: "primary",
                            onClick: E,
                        },
                    ],
                }),
            ],
        })
    );
}
