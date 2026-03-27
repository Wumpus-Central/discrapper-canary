"use strict";
n.d(t, { A: () => T, h: () => I }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(554146),
    l = n(873298),
    u = n(397927),
    c = n(932001),
    d = n(253932),
    _ = n(780964),
    f = n(840065),
    p = n(890164),
    h = n(49999),
    m = n(985018),
    E = n(675731);
function g(e) {
    switch (e) {
        case l.KP.FRIENDS_ONLY:
            return m.t["0UBDvq"];
        case l.KP.FRIENDS_AND_SMALL_GUILDS:
            return m.t["9AvQO/"];
        case l.KP.FRIENDS_AND_ALL_GUILDS:
        default:
            return m.t.dqQ7AN;
    }
}
function A() {
    let e = (0, p.lX)("UserProfilePrivacyNotice");
    return i.useMemo(() => {
        let t = [];
        return e && t.push(o.M.PRIVATE_PROFILE_INLINE_NOTICE), t;
    }, [e]);
}
function I() {
    let e = A(),
        [t] = (0, c.kn)(e);
    return t === o.M.PRIVATE_PROFILE_INLINE_NOTICE;
}
function T(e) {
    let { className: t } = e,
        n = A(),
        [i, s] = (0, c.kn)(n),
        l = d.KP.useSetting();
    if (i !== o.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let p = g(l);
    return (0, r.jsxs)("div", {
        className: a()(E.kL, t),
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                className: E.Qq,
                children: m.intl.format(p, {
                    privacySettingsLink: (e, t) =>
                        (0, r.jsx)(
                            u.MzZ,
                            { onClick: () => (0, f.openUserSettings)(_.X.PROFILE_PRIVACY_CATEGORY), children: e },
                            t,
                        ),
                }),
            }),
            (0, r.jsx)(u.DUT, {
                "aria-label": m.intl.string(m.t.WAI6xu),
                onClick: () => s(h.i.USER_DISMISS),
                className: E.b,
                children: (0, r.jsx)(u.PGe, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
