n.d(t, { p: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(817281),
    o = n(773669),
    d = n(780964),
    c = n(840065),
    u = n(985018),
    m = n(291756),
    _ = n(72290);
function g() {
    let e = (0, l.bG)([o.default], () => o.default.locale),
        [t, g] = s.useState(e),
        x = s.useMemo(
            () =>
                (0, u.getAvailableLocales)().map((e) => {
                    let t;
                    try {
                        t = n(579832)(`./${e.value}.png`);
                    } catch (e) {
                        t = n(432706);
                    }
                    return {
                        id: e.value,
                        value: e.value,
                        label: e.name,
                        leading: (0, i.jsx)("div", {
                            className: m.Jt,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { alt: "", src: t, className: m.Eb }),
                        }),
                        trailing: (0, i.jsx)("span", { className: m.hI, children: u.intl.string(e.localizedName) }),
                    };
                }),
            [],
        ),
        A = s.useCallback((e) => {
            g(e),
                _.nextTick(() => {
                    r.Ay.updateLocale(e),
                        (0, a.OoC)(c.USER_SETTINGS_MODAL_KEY) && (0, c.openUserSettings)(d.X.LANGUAGE_AND_TIME_PANEL);
                });
        }, []);
    return (0, i.jsx)(a.ZiE, {
        selectionMode: "single",
        label: u.intl.string(u.t["mx+sp7"]),
        description: u.intl.string(u.t.rTPlcq),
        value: t,
        options: x,
        onSelectionChange: A,
    });
}
