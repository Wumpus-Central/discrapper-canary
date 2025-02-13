n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(153867),
    o = n(706454),
    c = n(388032),
    d = n(862075),
    u = n(444675);
function h() {
    let e = (0, l.e7)([o.default], () => o.default.locale),
        [t, h] = s.useState(e),
        [m] = s.useState(() =>
            (0, c.getAvailableLocales)().map((e) => {
                let t;
                try {
                    t = n(621287)('./'.concat(e.value, '.png'));
                } catch (e) {
                    t = n(1474);
                }
                return {
                    ...e,
                    name: (0, i.jsxs)('div', {
                        className: d.option,
                        children: [
                            (0, i.jsx)('span', {
                                className: d.localeName,
                                children: e.name
                            }),
                            (0, i.jsx)('span', {
                                className: d.localizedName,
                                children: c.intl.string(e.localizedName)
                            }),
                            (0, i.jsx)('div', {
                                className: d.flag,
                                'aria-hidden': !0,
                                children: (0, i.jsx)('img', {
                                    alt: '',
                                    src: t,
                                    className: d.flagImage
                                })
                            })
                        ]
                    })
                };
            })
        ),
        g = s.useCallback((e) => {
            let { value: t } = e;
            h(t), u.nextTick(() => a.ZP.updateLocale(t));
        }, []);
    return (0, i.jsx)(r.hjN, {
        tag: r.RB0.H1,
        title: c.intl.string(c.t.IHMsPj),
        children: (0, i.jsx)(r.hjN, {
            children: (0, i.jsx)(r.xJW, {
                title: c.intl.string(c.t['mx+sp6']),
                children: (0, i.jsx)(r.FXm, {
                    onChange: g,
                    options: m,
                    value: t
                })
            })
        })
    });
}
