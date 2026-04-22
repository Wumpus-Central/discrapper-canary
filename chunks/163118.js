n.d(t, { p: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(192308),
    r = n(783878),
    o = n(817281),
    d = n(773669),
    u = n(780964),
    c = n(858897),
    g = n(985018),
    m = n(550823),
    _ = n(72290);
function A() {
    let e = (0, l.bG)([d.default], () => d.default.locale),
        [t, A] = s.useState(e),
        h = s.useMemo(
            () =>
                (0, g.getAvailableLocales)().map((e) => {
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
                        trailing: (0, i.jsx)("span", { className: m.hI, children: g.intl.string(e.localizedName) }),
                    };
                }),
            [],
        ),
        p = s.useCallback((e) => {
            A(e),
                _.nextTick(() => {
                    o.Ay.updateLocale(e),
                        (0, a.closeModal)(c.USER_SETTINGS_MODAL_KEY) &&
                            (0, c.openUserSettings)(u.X.LANGUAGE_AND_TIME_PANEL);
                });
        }, []);
    return (0, i.jsx)(r.Z, {
        selectionMode: "single",
        label: g.intl.string(g.t["mx+sp7"]),
        description: g.intl.string(g.t.rTPlcq),
        value: t,
        options: h,
        onSelectionChange: p,
    });
}
