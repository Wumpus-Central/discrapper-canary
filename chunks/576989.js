n.d(t, { K: () => x });
var a = n(627968),
    i = n(64700),
    s = n(873298),
    l = n(265486),
    r = n(36149),
    o = n(253932),
    d = n(780964),
    c = n(840065),
    u = n(49999),
    m = n(985018),
    h = n(796343);
function x(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        x = (0, r.yM)(),
        p = o.KP.useSetting(),
        g = x && p !== s.KP.FRIENDS_AND_ALL_GUILDS,
        _ = (0, i.useCallback)(() => {
            t(u.i.TAKE_ACTION), (0, c.openUserSettings)(d.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        f = (0, i.useCallback)(() => {
            t(u.i.USER_DISMISS);
        }, [t]),
        v = g
            ? p === s.KP.FRIENDS_ONLY
                ? m.intl.string(m.t["/hogEy"])
                : m.intl.string(m.t["6hEfm1"])
            : m.intl.string(m.t.bnNxW1);
    return (0, a.jsx)(l.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: f,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: { type: "image", src: h.A },
        title: m.intl.string(m.t.Ve4nS1),
        body: v,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: m.intl.string(m.t.eOoTMX), variant: "primary", onClick: _ }],
    });
}
