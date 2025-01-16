n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(153867),
    o = n(706454),
    c = n(388032),
    d = n(808463),
    u = n(444675);
function m() {
    let e = (0, s.e7)([o.default], () => o.default.locale),
        [t, m] = r.useState(e),
        [g] = r.useState(() =>
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
        h = r.useCallback((e) => {
            let { value: t } = e;
            m(t), u.nextTick(() => l.ZP.updateLocale(t));
        }, []);
    return (0, i.jsx)(a.FormSection, {
        tag: a.FormTitleTags.H1,
        title: c.intl.string(c.t.IHMsPj),
        children: (0, i.jsx)(a.FormSection, {
            children: (0, i.jsx)(a.FormItem, {
                title: c.intl.string(c.t['mx+sp6']),
                children: (0, i.jsx)(a.RadioGroup, {
                    onChange: h,
                    options: g,
                    value: t
                })
            })
        })
    });
}
