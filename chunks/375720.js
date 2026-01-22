n.d(t, { a: () => b });
var a = n(54381),
    r = n(473749),
    i = n(547943),
    l = n(907862),
    s = n(612659),
    o = n(588529),
    c = n(313789),
    d = n(518596),
    u = n(981631),
    m = n(921944),
    p = n(472057),
    h = n(388032),
    f = n(932889);
let b = (e) => {
    let { targetElementRef: t, markAsDismissed: n } = e,
        b = (0, s.m)(),
        x = (0, r.useCallback)(() => {
            (0, d.openUserSettings)(c.n.PRIVATE_BROWSING_PANEL, { section: u.oAB.PRIVATE_BROWSING });
        }, []);
    return (0, a.jsx)(l.J2, {
        badge: {
            type: "beta",
            variant: "expressive",
        },
        graphic: {
            type: "image",
            src: f,
        },
        caretConfig: { align: "start" },
        align: "left",
        position: "top",
        size: "lg",
        gradientColor: "nitro-pink",
        title: h.intl.string(p.default.AafjNy),
        body: h.intl.string(p.default.wQwQF0),
        targetElementRef: t,
        onRequestClose: () => {
            o.ZP.fireSurveyAction(
                b ? i.Y.WARP_VPN_COACHMARK_DISMISSED_NITRO : i.Y.WARP_VPN_COACHMARK_DISMISSED_NON_NITRO,
            ),
                n(m.L.USER_DISMISS);
        },
        actions: [
            {
                variant: "primary",
                text: h.intl.string(h.t.RzWDqY),
                onClick: () => {
                    n(m.L.TAKE_ACTION), x();
                },
            },
        ],
    });
};
