n.d(t, { F: () => x });
var i = n(419954),
    l = n(780964),
    s = n(627968),
    a = n(64700),
    r = n(17928),
    o = n(192308),
    d = n(783878),
    u = n(817281),
    c = n(773669),
    g = n(858897),
    _ = n(985018),
    m = n(550823),
    h = n(72290);
function A() {
    let e = (0, r.bG)([c.default], () => c.default.locale),
        [t, i] = a.useState(e),
        A = a.useMemo(
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
                        leading: (0, s.jsx)("div", {
                            className: m.Jt,
                            "aria-hidden": !0,
                            children: (0, s.jsx)("img", { alt: "", src: t, className: m.Eb }),
                        }),
                        trailing: (0, s.jsx)("span", { className: m.hI, children: _.intl.string(e.localizedName) }),
                    };
                }),
            [],
        ),
        p = a.useCallback((e) => {
            i(e),
                h.nextTick(() => {
                    u.Ay.updateLocale(e),
                        (0, o.closeModal)(g.USER_SETTINGS_MODAL_KEY) &&
                            (0, g.openUserSettings)(l.X.LANGUAGE_AND_TIME_PANEL);
                });
        }, []);
    return (0, s.jsx)(d.Z, {
        selectionMode: "single",
        label: _.intl.string(_.t["mx+sp7"]),
        description: _.intl.string(_.t.rTPlcq),
        value: t,
        options: A,
        onSelectionChange: p,
    });
}
let p = (0, i.E2)(l.X.LANGUAGE_SELECT_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.IHMsPn)],
    Component: () => (0, s.jsx)(A, {}),
});
var E = n(873298),
    T = n(253932);
let S = (0, i.Qx)(l.X.TIME_FORMAT_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t.dyamEI), _.intl.string(_.t.p8NOwi), _.intl.string(_.t["+o/sOo"])],
        useTitle: () => _.intl.string(_.t.dyamEI),
        useValue: () => T.PZ.useSetting(),
        setValue: (e) => T.PZ.updateSetting(e),
        useOptions: () => [
            { name: _.intl.string(_.t.FMWYvb), value: E.PZ.AUTO },
            { name: _.intl.string(_.t.p8NOwi), value: E.PZ.H12 },
            { name: _.intl.string(_.t["+o/sOo"]), value: E.PZ.H23 },
        ],
    }),
    x = (0, i.zZ)(l.X.LANGUAGE_AND_TIME_CATEGORY, { buildLayout: () => [p, S] });
