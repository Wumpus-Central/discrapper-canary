n.d(t, { K: () => m });
var i = n(627968),
    s = n(64700),
    l = n(873298),
    a = n(265486),
    r = n(840387),
    o = n(253932),
    d = n(780964),
    c = n(858897),
    u = n(49999),
    p = n(985018),
    h = n(239158);
function m(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        m = (0, r.Z)(),
        _ = o.KP.useSetting(),
        A = m && _ !== l.KP.FRIENDS_AND_ALL_GUILDS,
        f = (0, s.useCallback)(() => {
            t(u.i.TAKE_ACTION), (0, c.openUserSettings)(d.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        g = (0, s.useCallback)(() => {
            t(u.i.USER_DISMISS);
        }, [t]),
        x = A
            ? _ === l.KP.FRIENDS_ONLY
                ? p.intl.string(p.t["/hogEy"])
                : p.intl.string(p.t["6hEfm1"])
            : p.intl.string(p.t.bnNxW1);
    return (0, i.jsx)(a.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: g,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: { type: "image", src: h.A },
        title: p.intl.string(p.t.Ve4nS1),
        body: x,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: p.intl.string(p.t.eOoTMX), variant: "primary", onClick: f }],
    });
}
