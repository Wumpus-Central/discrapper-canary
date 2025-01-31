n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    a = n(780384),
    o = n(481060),
    s = n(410030),
    r = n(782568),
    c = n(63063),
    d = n(827498),
    u = n(888617),
    m = n(981631),
    p = n(388032),
    h = n(860156),
    v = n(983008),
    x = n(478408);
function f(e) {
    let { showImage: t = !0, padding: n = !1 } = e,
        f = (0, s.ZP)(),
        N = (0, a.ap)(f) ? x : v,
        C = l.useCallback(() => {
            (0, r.Z)(c.Z.getAppsSupportURL(m.BhN.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: E } = (0, u.Z)({
            sectionName: d.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1
        });
    return (0, i.jsx)('div', {
        className: n ? h.containerPadding : void 0,
        children: (0, i.jsxs)('div', {
            ref: (e) => (E.current = e),
            className: h.container,
            children: [
                t &&
                    (0, i.jsx)('img', {
                        className: h.image,
                        src: N,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, i.jsxs)('div', {
                    className: h.body,
                    children: [
                        (0, i.jsx)(o.X6q, {
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
                (0, i.jsx)(o.zxk, {
                    size: o.zxk.Sizes.MEDIUM,
                    'aria-label': p.intl.formatToPlainString(p.t.xx5Sur, {
                        sectionTitle: p.intl.string(p.t['kw8/ER']),
                        sectionBody: p.intl.string(p.t.GZoV1N)
                    }),
                    onClick: C,
                    children: p.intl.string(p.t.Ye51oa)
                })
            ]
        })
    });
}
