n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    a = n(158954),
    l = n(873298),
    r = n(253932),
    o = n(871930),
    c = n(531525),
    d = n(985018);
function u() {
    let e = r.KP.useSetting(),
        t = s.useMemo(
            () => [
                {
                    name: d.intl.string(d.t.Boxc8R),
                    desc: d.intl.string(d.t["nLj+nc"]),
                    value: l.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: d.intl.string(d.t.YOIKBt),
                    desc: d.intl.string(d.t.y0JZ4s),
                    value: l.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: d.intl.string(d.t.u0nlJv), desc: d.intl.string(d.t["4jnKHu"]), value: l.KP.FRIENDS_ONLY },
            ],
            [],
        ),
        n = s.useCallback((e) => {
            r.KP.updateSetting(e);
        }, []);
    return (0, i.jsxs)(o.h, {
        setting: c.H.PRIVACY_PROFILE_VISIBILITY,
        children: [
            (0, i.jsx)(o._, { header: d.intl.string(d.t.Qnf32C) }),
            (0, i.jsx)(a.z6M, { value: e, options: t, onChange: n }),
        ],
    });
}
