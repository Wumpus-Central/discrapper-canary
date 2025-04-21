n.d(t, { Z: () => _ });
var i = n(200651),
    r = n(192379),
    l = n(780384),
    o = n(481060),
    a = n(410030),
    s = n(782568),
    c = n(63063),
    u = n(827498),
    d = n(888617),
    p = n(981631),
    m = n(388032),
    f = n(434666),
    h = n(983008),
    b = n(478408);
function _(e) {
    let { showImage: t = !0, padding: n = !1 } = e,
        _ = (0, a.ZP)(),
        y = (0, l.ap)(_) ? b : h,
        x = r.useCallback(() => {
            (0, s.Z)(c.Z.getAppsSupportURL(p.BhN.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: v } = (0, d.Z)({
            sectionName: u.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1
        });
    return (0, i.jsx)('div', {
        className: n ? f.containerPadding : void 0,
        children: (0, i.jsxs)('div', {
            ref: (e) => {
                v.current = e;
            },
            className: f.container,
            children: [
                t &&
                    (0, i.jsx)('img', {
                        className: f.image,
                        src: y,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, i.jsxs)('div', {
                    className: f.body,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            children: m.intl.string(m.t['kw8/ER'])
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-normal',
                            children: m.intl.string(m.t.GZoV1N)
                        })
                    ]
                }),
                (0, i.jsx)(o.zxk, {
                    size: o.zxk.Sizes.MEDIUM,
                    'aria-label': m.intl.formatToPlainString(m.t.xx5Sur, {
                        sectionTitle: m.intl.string(m.t['kw8/ER']),
                        sectionBody: m.intl.string(m.t.GZoV1N)
                    }),
                    onClick: x,
                    children: m.intl.string(m.t.Ye51oa)
                })
            ]
        })
    });
}
