n.d(t, { Z: () => y });
var l = n(255367),
    i = n(73800),
    r = n(780384),
    a = n(481060),
    o = n(410030),
    s = n(782568),
    c = n(63063),
    u = n(827498),
    d = n(888617),
    p = n(981631),
    m = n(388032),
    f = n(434666),
    h = n(983008),
    v = n(478408);
function y(e) {
    let { showImage: t = !0, padding: n = !1 } = e,
        y = (0, o.ZP)(),
        x = (0, r.ap)(y) ? v : h,
        b = i.useCallback(() => {
            (0, s.Z)(c.Z.getAppsSupportURL(p.BhN.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: g } = (0, d.Z)({
            sectionName: u.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1
        });
    return (0, l.jsx)('div', {
        className: n ? f.containerPadding : void 0,
        children: (0, l.jsxs)('div', {
            ref: (e) => {
                g.current = e;
            },
            className: f.container,
            children: [
                t &&
                    (0, l.jsx)('img', {
                        className: f.image,
                        src: x,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, l.jsxs)('div', {
                    className: f.body,
                    children: [
                        (0, l.jsx)(a.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            children: m.intl.string(m.t['kw8/ER'])
                        }),
                        (0, l.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-default',
                            children: m.intl.string(m.t.GZoV1N)
                        })
                    ]
                }),
                (0, l.jsx)(a.zxk, {
                    variant: 'primary',
                    text: m.intl.string(m.t.Ye51oa),
                    'aria-label': m.intl.formatToPlainString(m.t.xx5Sur, {
                        sectionTitle: m.intl.string(m.t['kw8/ER']),
                        sectionBody: m.intl.string(m.t.GZoV1N)
                    }),
                    onClick: b
                })
            ]
        })
    });
}
