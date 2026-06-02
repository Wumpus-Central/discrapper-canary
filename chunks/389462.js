r.d(t, {
    ES: () => v,
    fD: () => h,
    kf: () => S,
    oQ: () => m,
    p7: () => d,
    qz: () => y,
    sM: () => o,
    up: () => f,
    yH: () => _,
    yr: () => g,
});
var a = r(873298),
    i = r(406935),
    u = r(52133),
    c = r(583538),
    n = r(885386),
    s = r(408418),
    l = r(750714),
    p = r(652215);
let d = (0, s.r)("textAndImages", "explicitContentSettings", n.Iv, n.Vv, { comparator: u.A }),
    o = (0, s.r)(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? l.Je.NON_FRIENDS,
        (e) => i.ZQ.create({ value: e }),
    ),
    m = (0, s.r)("textAndImages", "goreContentSettings", n.NF, n._8, { comparator: u.A }),
    v = (0, s.r)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => i._t.create({ value: e }),
    ),
    y = (0, s.r)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    g = (0, s.r)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => i._t.create({ value: e }),
    ),
    f = (0, s.r)(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? p.yKI,
        (e) => i.ZQ.create({ value: e }),
    ),
    S = (0, s.r)(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => i._t.create({ value: e }),
    ),
    _ = (0, s.r)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => i._t.create({ value: e }),
    ),
    h = (0, s.r)(
        "safetySettings",
        "spendingLimitSettings",
        (e) => {
            let t = e?.oneTimePurchaseLimit;
            return null == t ? null : { amount: Number(t.amount), currency: t.currency };
        },
        (e) => {
            if (null == e) return a.te.create({});
            let { amount: t, currency: r } = e;
            return a.te.create({ oneTimePurchaseLimit: a.uK.create({ amount: String(t), currency: r }) });
        },
        { comparator: c.Ky },
    );
