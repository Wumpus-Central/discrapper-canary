n.d(t, { Z: () => C });
var i = n(200651),
    r = n(192379),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(782568),
    s = n(63063),
    u = n(827498),
    d = n(888617),
    p = n(981631),
    m = n(388032),
    f = n(434666),
    h = n(983008),
    b = n(478408);
function C(e) {
    let { showImage: t = !0, padding: n = !1 } = e,
        C = (0, o.ZP)(),
        _ = (0, l.ap)(C) ? b : h,
        x = r.useCallback(() => {
            (0, c.Z)(s.Z.getAppsSupportURL(p.BhN.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: v } = (0, d.Z)({
            sectionName: u.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1
        });
    return (0, i.jsx)('div', {
        className: n ? f.containerPadding : void 0,
        children: (0, i.jsxs)('div', {
            ref: (e) => (v.current = e),
            className: f.container,
            children: [
                t &&
                    (0, i.jsx)('img', {
                        className: f.image,
                        src: _,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, i.jsxs)('div', {
                    className: f.body,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            children: m.NW.string(m.t['kw8/ER'])
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-normal',
                            children: m.NW.string(m.t.GZoV1N)
                        })
                    ]
                }),
                (0, i.jsx)(a.zxk, {
                    size: a.zxk.Sizes.MEDIUM,
                    'aria-label': m.NW.formatToPlainString(m.t.xx5Sur, {
                        sectionTitle: m.NW.string(m.t['kw8/ER']),
                        sectionBody: m.NW.string(m.t.GZoV1N)
                    }),
                    onClick: x,
                    children: m.NW.string(m.t.Ye51oa)
                })
            ]
        })
    });
}
