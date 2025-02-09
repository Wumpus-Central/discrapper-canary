n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    a = n(852229),
    r = n(399606),
    s = n(481060),
    o = n(367907),
    c = n(592125),
    d = n(934415),
    u = n(63063),
    h = n(158222),
    p = n(410992),
    m = n(981631),
    f = n(388032),
    g = n(334722);
function _(e) {
    let { threadId: t } = e,
        n = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
        _ = (0, r.e7)([c.Z], () => c.Z.getChannel(null == n ? void 0 : n.parent_id)),
        C = l.useCallback(() => {
            null != n && null != _ && ((0, o.yw)(m.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }), (0, a.J)((0, d.EO)(n, _)));
        }, [n, _]);
    return (0, i.jsxs)('div', {
        className: g.sharePromptContainer,
        children: [
            (0, i.jsx)(p.Z, {}),
            (0, i.jsxs)('div', {
                className: g.sharePromptContent,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: f.intl.string(f.t['5uAO7e'])
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: f.intl.format(f.t.WnfPV1, { helpArticleUrl: u.Z.getCreatorSupportArticleURL(m.BhN.MEDIA_CHANNEL) })
                    }),
                    (0, i.jsx)(s.LZC, { size: 4 }),
                    (0, i.jsxs)(s.zxk, {
                        className: g.sharePromptCta,
                        innerClassName: g.ctaContent,
                        onClick: C,
                        children: [
                            (0, i.jsx)(s.xPt, {
                                color: 'currentColor',
                                size: 'xs'
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: f.intl.string(f.t.C5UQCw)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(s.P3F, {
                className: g.closeButton,
                onClick: () => {
                    (0, h.fn)(t);
                },
                'aria-label': f.intl.string(f.t['0+xZHx']),
                children: (0, i.jsx)(s.Dio, {
                    color: 'currentColor',
                    size: 'xs'
                })
            })
        ]
    });
}
