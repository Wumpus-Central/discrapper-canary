t.d(e, { A: () => M, h: () => C });
var n = t(627968),
    i = t(64700),
    a = t(503698),
    E = t.n(a),
    _ = t(554146),
    s = t(873298),
    I = t(834730),
    r = t(349288),
    N = t(939249),
    A = t(789645),
    O = t(932001),
    S = t(840387),
    T = t(253932),
    R = t(780964),
    u = t(858897),
    c = t(890164),
    D = t(49999),
    L = t(985018),
    d = t(737923);
function o() {
    let l = (0, c.lX)("UserProfilePrivacyNotice"),
        e = (0, S.Z)(),
        t = T.KP.useSetting();
    return i.useMemo(
        () => (l && e && t !== s.KP.FRIENDS_AND_ALL_GUILDS ? [_.M.PRIVATE_PROFILE_INLINE_NOTICE] : []),
        [l, e, t],
    );
}
function C() {
    let l = o(),
        [e] = (0, O.kn)(l);
    return e === _.M.PRIVATE_PROFILE_INLINE_NOTICE;
}
function M(l) {
    let { className: e } = l,
        t = o(),
        [i, a] = (0, O.kn)(t),
        S = T.KP.useSetting();
    if (i !== _.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let c = (function (l) {
        switch (l) {
            case s.KP.FRIENDS_ONLY:
                return L.t["0UBDvq"];
            case s.KP.FRIENDS_AND_SMALL_GUILDS:
                return L.t["9AvQO/"];
            case s.KP.FRIENDS_AND_ALL_GUILDS:
            default:
                return L.t.dqQ7AN;
        }
    })(S);
    return (0, n.jsxs)("div", {
        className: E()(d.kL, e),
        children: [
            (0, n.jsx)(I.E, {
                variant: "text-sm/normal",
                className: d.Qq,
                children: L.intl.format(c, {
                    privacySettingsLink: (l, e) =>
                        (0, n.jsx)(
                            r.Anchor,
                            { onClick: () => (0, u.openUserSettings)(R.X.PROFILE_PRIVACY_CATEGORY), children: l },
                            e,
                        ),
                }),
            }),
            (0, n.jsx)(N.D, {
                "aria-label": L.intl.string(L.t.WAI6xu),
                onClick: () => a(D.i.USER_DISMISS),
                className: d.b,
                children: (0, n.jsx)(A.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
