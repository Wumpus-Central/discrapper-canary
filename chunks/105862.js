t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(200651),
    l = t(192379),
    a = t(780384),
    o = t(481060),
    r = t(410030),
    s = t(782568),
    c = t(63063),
    d = t(827498),
    u = t(888617),
    m = t(981631),
    p = t(388032),
    h = t(860156),
    f = t(983008),
    C = t(478408);
function v(e) {
    let { showImage: n = !0, padding: t = !1 } = e,
        v = (0, r.ZP)(),
        x = (0, a.ap)(v) ? C : f,
        _ = l.useCallback(() => {
            (0, s.Z)(c.Z.getAppsSupportURL(m.BhN.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: N } = (0, u.Z)({
            sectionName: d.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1
        });
    return (0, i.jsx)('div', {
        className: t ? h.containerPadding : void 0,
        children: (0, i.jsxs)('div', {
            ref: (e) => (N.current = e),
            className: h.container,
            children: [
                n &&
                    (0, i.jsx)('img', {
                        className: h.image,
                        src: x,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, i.jsxs)('div', {
                    className: h.body,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            children: p.intl.string(p.t['kw8/ER'])
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-normal',
                            children: p.intl.string(p.t.GZoV1N)
                        })
                    ]
                }),
                (0, i.jsx)(o.Button, {
                    size: o.Button.Sizes.MEDIUM,
                    'aria-label': p.intl.formatToPlainString(p.t.xx5Sur, {
                        sectionTitle: p.intl.string(p.t['kw8/ER']),
                        sectionBody: p.intl.string(p.t.GZoV1N)
                    }),
                    onClick: _,
                    children: p.intl.string(p.t.Ye51oa)
                })
            ]
        })
    });
}
