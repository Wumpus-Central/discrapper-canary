n.d(t, { p: () => h }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(817281),
    l = n(773669),
    c = n(780964),
    u = n(840065),
    d = n(652215),
    f = n(985018),
    p = n(58477),
    _ = n(72290);
function h() {
    let e = (0, a.bG)([l.default], () => l.default.locale),
        [t, h] = i.useState(e),
        m = i.useMemo(
            () =>
                (0, f.getAvailableLocales)().map((e) => {
                    let t;
                    try {
                        t = n(579832)("./".concat(e.value, ".png"));
                    } catch (e) {
                        t = n(432706);
                    }
                    return {
                        id: e.value,
                        value: e.value,
                        label: e.name,
                        leading: (0, r.jsx)("div", {
                            className: p.Jt,
                            "aria-hidden": !0,
                            children: (0, r.jsx)("img", {
                                alt: "",
                                src: t,
                                className: p.Eb,
                            }),
                        }),
                        trailing: (0, r.jsx)("span", {
                            className: p.hI,
                            children: f.intl.string(e.localizedName),
                        }),
                    };
                }),
            [],
        ),
        g = i.useCallback((e) => {
            h(e),
                _.nextTick(() => {
                    o.Ay.updateLocale(e),
                        (0, s.OoC)(u.USER_SETTINGS_MODAL_KEY) &&
                            (0, u.openUserSettings)(c.X.LANGUAGE_AND_TIME_PANEL, { section: d.nc_.LANGUAGE });
                });
        }, []);
    return (0, r.jsx)(s.ZiE, {
        selectionMode: "single",
        label: f.intl.string(f.t["mx+sp7"]),
        description: f.intl.string(f.t.rTPlcq),
        value: t,
        options: m,
        onSelectionChange: g,
    });
}
