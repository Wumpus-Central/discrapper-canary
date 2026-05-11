i.d(t, { F: () => N });
var n = i(419954),
    s = i(780964),
    l = i(627968),
    r = i(64700),
    a = i(17928),
    o = i(192308),
    u = i(783878),
    d = i(817281),
    c = i(773669),
    g = i(766075),
    m = i(375708),
    A = i(616363),
    h = i(72290);
function E() {
    let e = (0, a.bG)([c.default], () => c.default.locale),
        [t, n] = r.useState(e),
        E = r.useMemo(
            () =>
                (0, m.getAvailableLocales)().map((e) => {
                    let t;
                    try {
                        t = i(579832)(`./${e.value}.png`);
                    } catch (e) {
                        t = i(432706);
                    }
                    return {
                        id: e.value,
                        value: e.value,
                        label: e.name,
                        leading: (0, l.jsx)("div", {
                            className: A.Jt,
                            "aria-hidden": !0,
                            children: (0, l.jsx)("img", { alt: "", src: t, className: A.Eb }),
                        }),
                        trailing: (0, l.jsx)("span", { className: A.hI, children: m.intl.string(e.localizedName) }),
                    };
                }),
            [],
        ),
        T = r.useCallback((e) => {
            n(e),
                h.nextTick(() => {
                    d.Ay.updateLocale(e),
                        (0, o.closeModal)(g.USER_SETTINGS_MODAL_KEY) &&
                            (0, g.openUserSettings)(s.X.LANGUAGE_AND_TIME_PANEL);
                });
        }, []);
    return (0, l.jsx)(u.Z, {
        selectionMode: "single",
        label: m.intl.string(m.t["mx+sp7"]),
        description: m.intl.string(m.t.rTPlcq),
        value: t,
        options: E,
        onSelectionChange: T,
    });
}
let T = (0, n.E2)(s.X.LANGUAGE_SELECT_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.IHMsPn)],
    Component: () => (0, l.jsx)(E, {}),
});
var x = i(873298),
    S = i(885386);
let p = (0, n.Qx)(s.X.TIME_FORMAT_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.dyamEI), m.intl.string(m.t.p8NOwi), m.intl.string(m.t["+o/sOo"])],
        useTitle: () => m.intl.string(m.t.dyamEI),
        useValue: () => S.PZ.useSetting(),
        setValue: (e) => S.PZ.updateSetting(e),
        useOptions: () => [
            { name: m.intl.string(m.t.FMWYvb), value: x.PZ.AUTO },
            { name: m.intl.string(m.t.p8NOwi), value: x.PZ.H12 },
            { name: m.intl.string(m.t["+o/sOo"]), value: x.PZ.H23 },
        ],
    }),
    N = (0, n.zZ)(s.X.LANGUAGE_AND_TIME_CATEGORY, { buildLayout: () => [T, p] });
