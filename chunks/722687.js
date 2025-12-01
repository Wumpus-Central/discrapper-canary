n.d(t, {
    IU: () => f,
    J7: () => g,
    O8: () => h,
    Ov: () => p,
    eD: () => u,
    sx: () => c,
    up: () => d,
    vB: () => m,
    vV: () => _,
});
var r = n(381499),
    i = n(902704),
    a = n(592792),
    o = n(695346),
    s = n(973005),
    l = n(981631);
let c = (0, a.c)("textAndImages", "explicitContentSettings", o.lk, o.nh, { comparator: i.Z }),
    u = (0, a.c)(
        "textAndImages",
        "explicitContentFilter",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : s.TI.NON_FRIENDS;
        },
        (e) => r.yC.create({ value: e }),
    ),
    d = (0, a.c)("textAndImages", "goreContentSettings", o.Eo, o.uh, { comparator: i.Z }),
    f = (0, a.c)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => (null == e ? void 0 : e.value),
        (e) => r.D5.create({ value: e }),
    ),
    p = (0, a.c)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => null != e && e,
        (e) => e,
    ),
    _ = (0, a.c)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => r.D5.create({ value: e }),
    ),
    m = (0, a.c)(
        "privacy",
        "friendSourceFlags",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : l.HGf;
        },
        (e) => r.yC.create({ value: e }),
    ),
    h = (0, a.c)(
        "privacy",
        "dropsOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => r.D5.create({ value: e }),
    ),
    g = (0, a.c)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => r.D5.create({ value: e }),
    );
