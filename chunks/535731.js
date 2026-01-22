n.d(t, {
    y: () => x,
});
var a = n(627968),
    l = n(64700),
    i = n(517846),
    r = n(342494),
    s = n(757036),
    o = n(236698),
    c = n(780964),
    d = n(840065),
    u = n(652215),
    m = n(49999),
    p = n(895431),
    h = n(985018),
    f = n(446115);
let x = (e) => {
    let { targetElementRef: t, markAsDismissed: n } = e,
        x = (0, s.L)(),
        b = (0, l.useCallback)(() => {
            (0, d.openUserSettings)(c.X.PRIVATE_BROWSING_PANEL, {
                section: u.nc_.PRIVATE_BROWSING,
            });
        }, []);
    return (0, a.jsx)(r.AM, {
        badge: {
            type: "beta",
            variant: "expressive",
        },
        graphic: {
            type: "image",
            src: f,
        },
        caretConfig: {
            align: "start",
        },
        align: "left",
        position: "top",
        size: "lg",
        gradientColor: "nitro-pink",
        title: h.intl.string(p.default.AafjNy),
        body: h.intl.string(p.default.wQwQF0),
        targetElementRef: t,
        onRequestClose: () => {
            o.Ay.fireSurveyAction(
                x ? i.w.WARP_VPN_COACHMARK_DISMISSED_NITRO : i.w.WARP_VPN_COACHMARK_DISMISSED_NON_NITRO,
            ),
                n(m.i.USER_DISMISS);
        },
        actions: [
            {
                variant: "primary",
                text: h.intl.string(h.t.RzWDqY),
                onClick: () => {
                    n(m.i.TAKE_ACTION), b();
                },
            },
        ],
    });
};
