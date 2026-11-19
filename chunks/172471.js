n.d(t, { F: () => I });
var i = n(419954),
    l = n(780964),
    s = n(477900),
    r = n(582128),
    a = n(855986),
    o = n(192308),
    u = n(890497),
    c = n(817281),
    d = n(773669),
    m = n(766075),
    g = n(941933),
    A = n(792996),
    E = n(536854),
    h = n(72290);
function f() {
    let e = (0, a.bG)([d.default], () => d.default.locale),
        [t, i] = r.useState(e),
        f = r.useMemo(
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
        p = r.useCallback((e) => {
            (i(e),
                h.nextTick(() => {
                    (c.Ay.updateLocale(e), (0, o.Oo)(g.y) && (0, m.openUserSettings)(l.X.LANGUAGE_AND_TIME_PANEL));
                }));
        }, []);
    return (0, s.jsx)(u.Z, {
        selectionMode: "single",
        label: A.intl.string(A.t["mx+sp7"]),
        description: A.intl.string(A.t.rTPlcq),
        value: t,
        options: f,
        onSelectionChange: p,
    });
}
let p = (0, i.E2)(l.X.LANGUAGE_SELECT_SETTING, {
    useSearchTerms: () => [A.intl.string(A.t.IHMsPn)],
    Component: () => (0, s.jsx)(f, {}),
});
var S = n(873298),
    T = n(253932);
let x = (0, i.Qx)(l.X.TIME_FORMAT_SETTING, {
        useSearchTerms: () => [A.intl.string(A.t.dyamEI), A.intl.string(A.t.p8NOwi), A.intl.string(A.t["+o/sOo"])],
        useTitle: () => A.intl.string(A.t.dyamEI),
        useValue: () => T.PZ.useSetting(),
        setValue: (e) => T.PZ.updateSetting(e),
        useOptions: function () {
            return [
                { name: A.intl.string(A.t.FMWYvb), value: S.PZ.AUTO },
                { name: A.intl.string(A.t.p8NOwi), value: S.PZ.H12 },
                { name: A.intl.string(A.t["+o/sOo"]), value: S.PZ.H23 },
            ];
        },
    }),
    I = (0, i.zZ)(l.X.LANGUAGE_AND_TIME_CATEGORY, { buildLayout: () => [p, x] });
