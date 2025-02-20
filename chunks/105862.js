n.d(t, { Z: () => N });
var i = n(200651),
    l = n(192379),
    r = n(780384),
    o = n(481060),
    a = n(410030),
    s = n(782568),
    c = n(63063),
    u = n(827498),
    d = n(888617),
    m = n(981631),
    p = n(388032),
    h = n(609152),
    f = n(983008),
    v = n(478408);
function N(e) {
    let { showImage: t = !0, padding: n = !1 } = e,
        N = (0, a.ZP)(),
        x = (0, r.ap)(N) ? v : f,
        y = l.useCallback(() => {
            (0, s.Z)(c.Z.getAppsSupportURL(m.BhN.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: b } = (0, d.Z)({
            sectionName: u.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1
        });
    return (0, i.jsx)('div', {
        className: n ? h.containerPadding : void 0,
        children: (0, i.jsxs)('div', {
            ref: (e) => (b.current = e),
            className: h.container,
            children: [
                t &&
                    (0, i.jsx)('img', {
                        className: h.image,
                        src: x,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, i.jsxs)('div', {
                    className: h.body,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            children: p.NW.string(p.t['kw8/ER'])
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-normal',
                            children: p.NW.string(p.t.GZoV1N)
                        })
                    ]
                }),
                (0, i.jsx)(o.zxk, {
                    size: o.zxk.Sizes.MEDIUM,
                    'aria-label': p.NW.formatToPlainString(p.t.xx5Sur, {
                        sectionTitle: p.NW.string(p.t['kw8/ER']),
                        sectionBody: p.NW.string(p.t.GZoV1N)
                    }),
                    onClick: y,
                    children: p.NW.string(p.t.Ye51oa)
                })
            ]
        })
    });
}
