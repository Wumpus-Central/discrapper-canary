n.d(t, {
    IU: () => f,
    Ov: () => _,
    eD: () => u,
    sx: () => c,
    up: () => d,
    vB: () => h,
    vV: () => p,
});
var r = n(381499),
    i = n(497060),
    a = n(592792),
    o = n(695346),
    s = n(973005),
    l = n(981631);
let c = (0, a.c)("textAndImages", "explicitContentSettings", o.lk, o.nh),
    u = (0, a.c)(
        "textAndImages",
        "explicitContentFilter",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : s.TI.NON_FRIENDS;
        },
        (e) => r.yC.create({ value: e }),
    ),
    d = (0, a.c)("textAndImages", "goreContentSettings", o.Eo, o.uh),
    f = (0, a.c)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => (null == e ? void 0 : e.value),
        (e) => r.D5.create({ value: e }),
    ),
    _ = (0, a.c)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => null != e && e,
        (e) => e,
    ),
    p = (0, a.c)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => r.D5.create({ value: e }),
    ),
    h = (0, a.N)({
        baseSetting: (0, a.c)(
            "privacy",
            "friendSourceFlags",
            (e) => (null == e ? void 0 : e.value),
            (e) => r.yC.create({ value: e }),
        ),
        isEligible: () => (0, i.k6)("user_settings"),
        useIsEligible: () => (0, i.kH)("user_settings"),
        ineligibleDefault: l.HGf,
        eligibleDefault: () => l.O8q,
    });
