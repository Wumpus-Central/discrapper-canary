var a = r(873298),
    i = r(406935),
    u = r(52133),
    c = r(361157),
    n = r(253932),
    s = r(408418),
    l = r(750714);
r(652215);
let p = (0, s.r)("textAndImages", "explicitContentSettings", n.Iv, n.Vv, { comparator: u.A }),
    d = (0, s.r)(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? l.Je.NON_FRIENDS,
        (e) => i.ZQ.create({ value: e }),
    ),
    o = (0, s.r)("textAndImages", "goreContentSettings", n.NF, n._8, { comparator: u.A }),
    m = (0, s.r)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => i._t.create({ value: e }),
    ),
    v = (0, s.r)(
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
    y = (0, s.r)(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? 14,
        (e) => i.ZQ.create({ value: e }),
    ),
    f = (0, s.r)(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => i._t.create({ value: e }),
    ),
    S = (0, s.r)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => i._t.create({ value: e }),
    ),
    _ = (0, s.r)(
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
r.d(t, {}, { ES: m, fD: _, kf: f, oQ: o, p7: p, qz: v, sM: d, up: y, yH: S, yr: g });
