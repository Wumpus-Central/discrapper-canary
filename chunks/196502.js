"use strict";
n.d(t, { A: () => S, h: () => T }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(554146),
    l = n(873298),
    u = n(397927),
    c = n(826673),
    d = n(932001),
    _ = n(253932),
    f = n(780964),
    p = n(840065),
    h = n(890164),
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
    let e = (0, h.lX)("UserProfilePrivacyNotice");
    return i.useMemo(() => {
        let t = [];
        return e && t.push(o.M.PRIVATE_PROFILE_INLINE_NOTICE), t;
    }, [e]);
}
function T() {
    let e = (0, h.lX)("UserProfilePrivacyNotice"),
        t = (0, c.JZ)(o.M.PRIVATE_PROFILE_INLINE_NOTICE);
    return e && !t;
}
function S(e) {
    let { className: t } = e,
        n = I(),
        [i, s] = (0, d.kn)(n),
        l = _.KP.useSetting();
    if (i !== o.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let c = A(l);
    return (0, r.jsxs)("div", {
        className: a()(g.kL, t),
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                className: g.Qq,
                children: E.intl.format(c, {
                    privacySettingsLink: (e, t) =>
                        (0, r.jsx)(
                            u.MzZ,
                            { onClick: () => (0, p.openUserSettings)(f.X.PROFILE_PRIVACY_CATEGORY), children: e },
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
