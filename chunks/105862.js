n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(780384),
    o = n(481060),
    s = n(410030),
    c = n(782568),
    l = n(63063),
    u = n(827498),
    d = n(888617),
    p = n(981631),
    f = n(388032),
    _ = n(150217),
    m = n(983008),
    I = n(478408);
function h(e) {
    let { showImage: t = !0, padding: n = !1 } = e,
        h = (0, s.ZP)(),
        S = (0, a.ap)(h) ? I : m,
        b = r.useCallback(() => {
            (0, c.Z)(l.Z.getAppsSupportURL(p.BhN.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: g } = (0, d.Z)({
            sectionName: u.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1
        });
    return (0, i.jsx)('div', {
        className: n ? _.containerPadding : void 0,
        children: (0, i.jsxs)('div', {
            ref: (e) => (g.current = e),
            className: _.container,
            children: [
                t &&
                    (0, i.jsx)('img', {
                        className: _.image,
                        src: S,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, i.jsxs)('div', {
                    className: _.body,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            children: f.intl.string(f.t['kw8/ER'])
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-normal',
                            children: f.intl.string(f.t.GZoV1N)
                        })
                    ]
                }),
                (0, i.jsx)(o.Button, {
                    size: o.Button.Sizes.MEDIUM,
                    'aria-label': f.intl.formatToPlainString(f.t.xx5Sur, {
                        sectionTitle: f.intl.string(f.t['kw8/ER']),
                        sectionBody: f.intl.string(f.t.GZoV1N)
                    }),
                    onClick: b,
                    children: f.intl.string(f.t.Ye51oa)
                })
            ]
        })
    });
}
