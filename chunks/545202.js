n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(827343),
    l = n(688810),
    c = n(430452),
    u = n(77735),
    d = n(509381),
    f = n(985018),
    p = n(473169);
function _() {
    let { analyticsLocations: e } = (0, l.Ay)(),
        t = (0, a.bG)([c.A], () => c.A.getActiveInputProfile()),
        { enabledInputProfiles: n } = (0, u.d)({ location: "UserSettingsInputProfile" }),
        _ = i.useCallback(
            (t) => {
                let { value: n } = t;
                o.A.setActiveInputProfile(n, { analyticsLocations: e });
            },
            [e],
        ),
        h = [
            {
                value: d.my.VOICE_ISOLATION,
                name: f.intl.string(f.t.cjPbpT),
                desc: f.intl.string(f.t.CzhvnE),
            },
            {
                value: d.my.STUDIO,
                name: f.intl.string(f.t.VZPR0R),
                desc: f.intl.string(f.t.ZaJksS),
            },
            {
                value: d.my.CUSTOM,
                name: f.intl.string(f.t["N/PQjv"]),
                desc: f.intl.string(f.t.SnBmuY),
            },
        ].filter((e) => {
            let { value: t } = e;
            return n.includes(t);
        });
    return (0, r.jsx)("div", {
        className: p.SX,
        children: (0, r.jsx)(s.z6M, {
            label: f.intl.string(f.t.LM3U3k),
            onChange: (e) => _({ value: e }),
            options: h,
            value: null != t ? t : d.my.CUSTOM,
        }),
    });
}
