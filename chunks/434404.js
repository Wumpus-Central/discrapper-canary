n.d(t, { F: () => _ });
var i = n(419954),
    s = n(780964),
    l = n(477900),
    r = n(582128),
    a = n(17928),
    o = n(192308),
    u = n(890497),
    d = n(817281),
    c = n(773669),
    g = n(766075),
    m = n(941933),
    A = n(375708),
    h = n(536854),
    E = n(72290);
function S() {
    let e = (0, a.bG)([c.default], () => c.default.locale),
        [t, i] = r.useState(e),
        S = r.useMemo(
            () =>
                (0, A.getAvailableLocales)().map((e) => {
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
                        leading: (0, l.jsx)("div", {
                            className: h.Jt,
                            "aria-hidden": !0,
                            children: (0, l.jsx)("img", { alt: "", src: t, className: h.Eb }),
                        }),
                        trailing: (0, l.jsx)("span", { className: h.hI, children: A.intl.string(e.localizedName) }),
                    };
                }),
            [],
        ),
        x = r.useCallback((e) => {
            (i(e),
                E.nextTick(() => {
                    (d.Ay.updateLocale(e),
                        (0, o.closeModal)(m.y) && (0, g.openUserSettings)(s.X.LANGUAGE_AND_TIME_PANEL));
                }));
        }, []);
    return (0, l.jsx)(u.Z, {
        selectionMode: "single",
        label: A.intl.string(A.t["mx+sp7"]),
        description: A.intl.string(A.t.rTPlcq),
        value: t,
        options: S,
        onSelectionChange: x,
    });
}
let x = (0, i.E2)(s.X.LANGUAGE_SELECT_SETTING, {
    useSearchTerms: () => [A.intl.string(A.t.IHMsPn)],
    Component: () => (0, l.jsx)(S, {}),
});
var p = n(873298),
    T = n(885386);
let f = (0, i.Qx)(s.X.TIME_FORMAT_SETTING, {
        useSearchTerms: () => [A.intl.string(A.t.dyamEI), A.intl.string(A.t.p8NOwi), A.intl.string(A.t["+o/sOo"])],
        useTitle: () => A.intl.string(A.t.dyamEI),
        useValue: () => T.PZ.useSetting(),
        setValue: (e) => T.PZ.updateSetting(e),
        useOptions: function () {
            return [
                { name: A.intl.string(A.t.FMWYvb), value: p.PZ.AUTO },
                { name: A.intl.string(A.t.p8NOwi), value: p.PZ.H12 },
                { name: A.intl.string(A.t["+o/sOo"]), value: p.PZ.H23 },
            ];
        },
    }),
    _ = (0, i.zZ)(s.X.LANGUAGE_AND_TIME_CATEGORY, { buildLayout: () => [x, f] });
