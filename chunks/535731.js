n.d(t, { y: () => g });
var a = n(627968),
    s = n(64700),
    i = n(517846),
    l = n(342494),
    r = n(757036),
    o = n(236698),
    d = n(780964),
    c = n(840065),
    u = n(652215),
    m = n(49999),
    h = n(895431),
    x = n(985018),
    p = n(446115);
let g = (e) => {
    let { targetElementRef: t, markAsDismissed: n } = e,
        g = (0, r.L)(),
        _ = (0, s.useCallback)(() => {
            (0, c.openUserSettings)(d.X.PRIVATE_BROWSING_PANEL, { section: u.nc_.PRIVATE_BROWSING });
        }, []);
    return (0, a.jsx)(l.AM, {
        badge: { type: "beta", variant: "expressive" },
        graphic: { type: "image", src: p },
        caretConfig: { align: "start" },
        align: "left",
        position: "top",
        size: "lg",
        gradientColor: "nitro-pink",
        title: x.intl.string(h.default.AafjNy),
        body: x.intl.string(h.default.wQwQF0),
        targetElementRef: t,
        onRequestClose: () => {
            o.Ay.fireSurveyAction(
                g ? i.w.WARP_VPN_COACHMARK_DISMISSED_NITRO : i.w.WARP_VPN_COACHMARK_DISMISSED_NON_NITRO,
            ),
                n(m.i.USER_DISMISS);
        },
        actions: [
            {
                variant: "primary",
                text: x.intl.string(x.t.RzWDqY),
                onClick: () => {
                    n(m.i.TAKE_ACTION), _();
                },
            },
        ],
    });
};
