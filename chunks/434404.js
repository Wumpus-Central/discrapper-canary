n.d(t, { F: () => f });
var i = n(419954),
    l = n(780964),
    s = n(477900),
    r = n(582128),
    a = n(17928),
    o = n(192308),
    u = n(890497),
    d = n(817281),
    c = n(773669),
    g = n(766075),
    m = n(375708),
    A = n(536854),
    h = n(72290);
function E() {
    let e = (0, a.bG)([c.default], () => c.default.locale),
        [t, i] = r.useState(e),
        E = r.useMemo(
            () =>
                (0, m.getAvailableLocales)().map((e) => {
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
                        leading: (0, s.jsx)("div", {
                            className: A.Jt,
                            "aria-hidden": !0,
                            children: (0, s.jsx)("img", { alt: "", src: t, className: A.Eb }),
                        }),
                        trailing: (0, s.jsx)("span", { className: A.hI, children: m.intl.string(e.localizedName) }),
                    };
                }),
            [],
        ),
        S = r.useCallback((e) => {
            i(e),
                h.nextTick(() => {
                    d.Ay.updateLocale(e),
                        (0, o.closeModal)(g.USER_SETTINGS_MODAL_KEY) &&
                            (0, g.openUserSettings)(l.X.LANGUAGE_AND_TIME_PANEL);
                });
        }, []);
    return (0, s.jsx)(u.Z, {
        selectionMode: "single",
        label: m.intl.string(m.t["mx+sp7"]),
        description: m.intl.string(m.t.rTPlcq),
        value: t,
        options: E,
        onSelectionChange: S,
    });
}
let S = (0, i.E2)(l.X.LANGUAGE_SELECT_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.IHMsPn)],
    Component: () => (0, s.jsx)(E, {}),
});
var p = n(873298),
    x = n(885386);
let T = (0, i.Qx)(l.X.TIME_FORMAT_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.dyamEI), m.intl.string(m.t.p8NOwi), m.intl.string(m.t["+o/sOo"])],
        useTitle: () => m.intl.string(m.t.dyamEI),
        useValue: () => x.PZ.useSetting(),
        setValue: (e) => x.PZ.updateSetting(e),
        useOptions: function () {
            return [
                { name: m.intl.string(m.t.FMWYvb), value: p.PZ.AUTO },
                { name: m.intl.string(m.t.p8NOwi), value: p.PZ.H12 },
                { name: m.intl.string(m.t["+o/sOo"]), value: p.PZ.H23 },
            ];
        },
    }),
    f = (0, i.zZ)(l.X.LANGUAGE_AND_TIME_CATEGORY, { buildLayout: () => [S, T] });
