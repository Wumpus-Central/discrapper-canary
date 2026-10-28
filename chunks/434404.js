n.d(t, { F: () => _ });
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
    m = n(941933),
    A = n(105292),
    E = n(536854),
    h = n(72290);
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
                        leading: (0, s.jsx)("div", {
                            className: E.Jt,
                            "aria-hidden": !0,
                            children: (0, s.jsx)("img", { alt: "", src: t, className: E.Eb }),
                        }),
                        trailing: (0, s.jsx)("span", { className: E.hI, children: A.intl.string(e.localizedName) }),
                    };
                }),
            [],
        ),
        x = r.useCallback((e) => {
            (i(e),
                h.nextTick(() => {
                    (d.Ay.updateLocale(e),
                        (0, o.closeModal)(m.y) && (0, g.openUserSettings)(l.X.LANGUAGE_AND_TIME_PANEL));
                }));
        }, []);
    return (0, s.jsx)(u.Z, {
        selectionMode: "single",
        label: A.intl.string(A.t["mx+sp7"]),
        description: A.intl.string(A.t.rTPlcq),
        value: t,
        options: S,
        onSelectionChange: x,
    });
}
let x = (0, i.E2)(l.X.LANGUAGE_SELECT_SETTING, {
    useSearchTerms: () => [A.intl.string(A.t.IHMsPn)],
    Component: () => (0, s.jsx)(S, {}),
});
var T = n(873298),
    p = n(253932);
let f = (0, i.Qx)(l.X.TIME_FORMAT_SETTING, {
        useSearchTerms: () => [A.intl.string(A.t.dyamEI), A.intl.string(A.t.p8NOwi), A.intl.string(A.t["+o/sOo"])],
        useTitle: () => A.intl.string(A.t.dyamEI),
        useValue: () => p.PZ.useSetting(),
        setValue: (e) => p.PZ.updateSetting(e),
        useOptions: function () {
            return [
                { name: A.intl.string(A.t.FMWYvb), value: T.PZ.AUTO },
                { name: A.intl.string(A.t.p8NOwi), value: T.PZ.H12 },
                { name: A.intl.string(A.t["+o/sOo"]), value: T.PZ.H23 },
            ];
        },
    }),
    _ = (0, i.zZ)(l.X.LANGUAGE_AND_TIME_CATEGORY, { buildLayout: () => [x, f] });
