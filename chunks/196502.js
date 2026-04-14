"use strict";
n.d(t, { A: () => S, h: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(554146),
    l = n(873298),
    u = n(397927),
    c = n(932001),
    d = n(840387),
    _ = n(253932),
    f = n(780964),
    h = n(858897),
    p = n(890164),
    m = n(49999),
    E = n(985018),
    g = n(675731);
function A(e) {
    switch (e) {
        case l.KP.FRIENDS_ONLY:
            return E.t["0UBDvq"];
        case l.KP.FRIENDS_AND_SMALL_GUILDS:
            return E.t["9AvQO/"];
        case l.KP.FRIENDS_AND_ALL_GUILDS:
        default:
            return E.t.dqQ7AN;
    }
}
function I() {
    let e = (0, p.lX)("UserProfilePrivacyNotice"),
        t = (0, d.Z)(),
        n = _.KP.useSetting();
    return i.useMemo(
        () => (e && t && n !== l.KP.FRIENDS_AND_ALL_GUILDS ? [o.M.PRIVATE_PROFILE_INLINE_NOTICE] : []),
        [e, t, n],
    );
}
function T() {
    let e = I(),
        [t] = (0, c.kn)(e);
    return t === o.M.PRIVATE_PROFILE_INLINE_NOTICE;
}
function S(e) {
    let { className: t } = e,
        n = I(),
        [i, s] = (0, c.kn)(n),
        l = _.KP.useSetting();
    if (i !== o.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let d = A(l);
    return (0, r.jsxs)("div", {
        className: a()(g.kL, t),
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                className: g.Qq,
                children: E.intl.format(d, {
                    privacySettingsLink: (e, t) =>
                        (0, r.jsx)(
                            u.MzZ,
                            { onClick: () => (0, h.openUserSettings)(f.X.PROFILE_PRIVACY_CATEGORY), children: e },
                            t,
                        ),
                }),
            }),
            (0, r.jsx)(u.DUT, {
                "aria-label": E.intl.string(E.t.WAI6xu),
                onClick: () => s(m.i.USER_DISMISS),
                className: g.b,
                children: (0, r.jsx)(u.PGe, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
