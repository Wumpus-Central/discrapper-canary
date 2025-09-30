n.d(t, {
    IU: () => d,
    Ov: () => f,
    eD: () => c,
    sx: () => l,
    up: () => u,
    vB: () => p,
    vV: () => _,
});
var r = n(381499),
    i = n(592792),
    a = n(695346),
    o = n(973005),
    s = n(981631);
let l = (0, i.c)("textAndImages", "explicitContentSettings", a.lk, a.nh),
    c = (0, i.c)(
        "textAndImages",
        "explicitContentFilter",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : o.TI.NON_FRIENDS;
        },
        (e) => r.yC.create({ value: e }),
    ),
    u = (0, i.c)("textAndImages", "goreContentSettings", a.Eo, a.uh),
    d = (0, i.c)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => (null == e ? void 0 : e.value),
        (e) => r.D5.create({ value: e }),
    ),
    f = (0, i.c)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => null != e && e,
        (e) => e,
    ),
    _ = (0, i.c)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => r.D5.create({ value: e }),
    ),
    p = (0, i.c)(
        "privacy",
        "friendSourceFlags",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : s.HGf;
        },
        (e) => r.yC.create({ value: e }),
    );
