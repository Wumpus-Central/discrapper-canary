i.d(e, { I: () => S });
var n = i(627968),
    l = i(873298),
    s = i(397927),
    r = i(546351),
    a = i(419954),
    u = i(890164),
    o = i(253932),
    d = i(780964),
    A = i(985018);
let T = {
        [l.KP.FRIENDS_AND_ALL_GUILDS]: () => A.intl.string(A.t.Boxc8R).toLowerCase(),
        [l.KP.FRIENDS_AND_SMALL_GUILDS]: () => A.intl.string(A.t.YOIKBt).toLowerCase(),
        [l.KP.FRIENDS_ONLY]: () => A.intl.string(A.t.u0nlJv).toLowerCase(),
    },
    S = (0, a.Qx)(d.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => A.intl.string(A.t.Qnf32C),
        useOptions: () => [
            { name: A.intl.string(A.t.Boxc8R), desc: A.intl.string(A.t["nLj+nc"]), value: l.KP.FRIENDS_AND_ALL_GUILDS },
            { name: A.intl.string(A.t.YOIKBt), desc: A.intl.string(A.t.y0JZ4s), value: l.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: A.intl.string(A.t.u0nlJv), desc: A.intl.string(A.t["4jnKHu"]), value: l.KP.FRIENDS_ONLY },
        ],
        useValue: o.KP.useSetting,
        setValue: function (t) {
            let e = o.KP.getSetting();
            if ((o.KP.updateSetting(t), !(0, u.W1)("ProfilePrivacySetting"))) return;
            let l = (0, r.aM)(t),
                a = o._Z.getSetting();
            if (a === l) return;
            let d = (0, r.aM)(e),
                A = (0, r.nm)(d) - (0, r.nm)(l),
                S = (0, r.nm)(a) - (0, r.nm)(l);
            if (0 === A || A > 0 != S > 0) return;
            let E = (0, r.g8)(a, l);
            if (null == E) return;
            let g = T[t]?.() ?? "";
            (0, s.mMO)(async () => {
                let { default: t } = await i.e("63786").then(i.bind(i, 413201));
                return (e) =>
                    (0, n.jsx)(t, {
                        ...e,
                        direction: E.direction,
                        affectedGuildIds: E.affectedGuildIds,
                        settingName: g,
                        mappedActivityValue: l,
                    });
            });
        },
        useSearchTerms: () => [A.intl.string(A.t.Qnf32C)],
    });
