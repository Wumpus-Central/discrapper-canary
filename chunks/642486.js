n.d(t, { S: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(153867),
    l = n(706454),
    c = n(313789),
    u = n(518596),
    d = n(981631),
    f = n(388032),
    p = n(151126),
    _ = n(444675);
function m() {
    let e = (0, a.e7)([l.default], () => l.default.locale),
        [t, m] = i.useState(e),
        h = i.useMemo(
            () =>
                (0, f.getAvailableLocales)().map((e) => ({
                    value: e.value,
                    label: e.name,
                    localizedName: f.intl.string(e.localizedName),
                })),
            [],
        ),
        g = i.useCallback((e) => {
            let t,
                i = null == e ? void 0 : e.value;
            if (null == i) return null;
            try {
                t = n(621287)("./".concat(i, ".png"));
            } catch (e) {
                t = n(1474);
            }
            return (0, r.jsx)("div", {
                className: p.flag,
                "aria-hidden": !0,
                children: (0, r.jsx)("img", {
                    alt: "",
                    src: t,
                    className: p.flagImage,
                }),
            });
        }, []),
        E = i.useCallback((e) => {
            m(e),
                _.nextTick(() => {
                    s.ZP.updateLocale(e),
                        (0, o.Mr3)(u.USER_SETTINGS_MODAL_KEY) &&
                            (0, u.openUserSettings)(c.n.LANGUAGE_AND_TIME_PANEL, { section: d.oAB.LOCALE });
                });
        }, []);
    return (0, r.jsx)(o.VcW, {
        label: f.intl.string(f.t["mx+sp7"]),
        description: f.intl.string(f.t.rTPlcq),
        value: t,
        options: h,
        onChange: E,
        renderOptionPrefix: g,
        renderOptionSuffix: (e) =>
            (0, r.jsx)("span", {
                className: p.localizedName,
                children: null == e ? void 0 : e.localizedName,
            }),
    });
}
