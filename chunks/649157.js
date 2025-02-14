n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(153867),
    o = n(706454),
    c = n(388032),
    d = n(862075),
    u = n(444675);
function m() {
    let e = (0, r.e7)([o.default], () => o.default.locale),
        [t, m] = s.useState(e),
        [h] = s.useState(() =>
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
            m(t), u.nextTick(() => a.ZP.updateLocale(t));
        }, []);
    return (0, i.jsx)(l.hjN, {
        tag: l.RB0.H1,
        title: c.intl.string(c.t.IHMsPj),
        children: (0, i.jsx)(l.hjN, {
            children: (0, i.jsx)(l.xJW, {
                title: c.intl.string(c.t['mx+sp6']),
                children: (0, i.jsx)(l.FXm, {
                    onChange: g,
                    options: h,
                    value: t
                })
            })
        })
    });
}
