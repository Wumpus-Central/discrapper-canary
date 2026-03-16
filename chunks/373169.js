n.d(t, { p: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(817281),
    o = n(773669),
    d = n(780964),
    c = n(840065),
    u = n(652215),
    _ = n(985018),
    m = n(58477),
    g = n(72290);
function A() {
    let e = (0, l.bG)([o.default], () => o.default.locale),
        [t, A] = s.useState(e),
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
            A(e),
                g.nextTick(() => {
                    a.Ay.updateLocale(e),
                        (0, r.OoC)(c.USER_SETTINGS_MODAL_KEY) &&
                            (0, c.openUserSettings)(d.X.LANGUAGE_AND_TIME_PANEL, { section: u.nc_.LANGUAGE });
                });
        }, []);
    return (0, i.jsx)(r.ZiE, {
        selectionMode: "single",
        label: _.intl.string(_.t["mx+sp7"]),
        description: _.intl.string(_.t.rTPlcq),
        value: t,
        options: h,
        onSelectionChange: x,
    });
}
