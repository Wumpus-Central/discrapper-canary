n.d(t, {
    Vb: () => u,
    hf: () => l,
    uf: () => c
});
var r = n(73800),
    i = n(906732),
    a = n(626135),
    o = n(981631),
    s = n(474936);
let l = (e, t) => {
        let { analyticsLocations: n } = (0, i.ZP)(t);
        r.useEffect(() => {
            e ||
                a.default.track(o.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: s.cd.CUSTOM_THEMES_UPSELL,
                    location_stack: n
                });
        }, [e, n]);
    },
    c = () => {
        a.default.track(o.rMx.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
    },
    u = () => {
        a.default.track(o.rMx.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
    };
