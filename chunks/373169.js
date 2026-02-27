n.d(t, { p: () => g });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(817281),
    o = n(773669),
    c = n(780964),
    d = n(840065),
    u = n(652215),
    _ = n(985018),
    m = n(58477),
    A = n(72290);
function g() {
    let e = (0, a.bG)([o.default], () => o.default.locale),
        [t, g] = s.useState(e),
        h = s.useMemo(
            () =>
                (0, _.getAvailableLocales)().map((e) => {
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
                        trailing: (0, i.jsx)("span", { className: m.hI, children: _.intl.string(e.localizedName) }),
                    };
                }),
            [],
        ),
        x = s.useCallback((e) => {
            g(e),
                A.nextTick(() => {
                    r.Ay.updateLocale(e),
                        (0, l.OoC)(d.USER_SETTINGS_MODAL_KEY) &&
                            (0, d.openUserSettings)(c.X.LANGUAGE_AND_TIME_PANEL, { section: u.nc_.LANGUAGE });
                });
        }, []);
    return (0, i.jsx)(l.ZiE, {
        selectionMode: "single",
        label: _.intl.string(_.t["mx+sp7"]),
        description: _.intl.string(_.t.rTPlcq),
        value: t,
        options: h,
        onSelectionChange: x,
    });
}
