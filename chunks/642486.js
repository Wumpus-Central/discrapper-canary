n.d(t, { S: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(668339),
    s = n(481060),
    l = n(153867),
    c = n(706454),
    u = n(313789),
    d = n(518596),
    f = n(981631),
    p = n(388032),
    _ = n(151126),
    m = n(444675);
function h() {
    let e = (0, a.e7)([c.default], () => c.default.locale),
        [t, h] = i.useState(e),
        g = i.useMemo(
            () =>
                (0, p.getAvailableLocales)().map((e) => ({
                    value: e.value,
                    label: e.name,
                    localizedName: p.intl.string(e.localizedName),
                })),
            [],
        ),
        E = i.useCallback((e) => {
            let t,
                i = null == e ? void 0 : e.value;
            if (null == i) return null;
            try {
                t = n(621287)("./".concat(i, ".png"));
            } catch (e) {
                t = n(1474);
            }
            return (0, r.jsx)("div", {
                className: _.flag,
                "aria-hidden": !0,
                children: (0, r.jsx)("img", {
                    alt: "",
                    src: t,
                    className: _.flagImage,
                }),
            });
        }, []),
        b = i.useCallback((e) => {
            h(e),
                m.nextTick(() => {
                    l.ZP.updateLocale(e),
                        (0, s.Mr3)(d.USER_SETTINGS_MODAL_KEY) &&
                            (0, d.openUserSettings)(u.n.LANGUAGE_AND_TIME_PANEL, { section: f.oAB.LOCALE });
                });
        }, []);
    return (0, r.jsx)(o.d, {
        label: p.intl.string(p.t["mx+sp7"]),
        description: p.intl.string(p.t.rTPlcq),
        value: t,
        options: g,
        onChange: b,
        renderOptionPrefix: E,
        renderOptionSuffix: (e) =>
            (0, r.jsx)("span", {
                className: _.localizedName,
                children: null == e ? void 0 : e.localizedName,
            }),
    });
}
