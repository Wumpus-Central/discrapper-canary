n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    l = n(852229),
    o = n(399606),
    a = n(481060),
    s = n(367907),
    c = n(592125),
    u = n(934415),
    d = n(63063),
    p = n(158222),
    h = n(410992),
    f = n(981631),
    m = n(388032),
    g = n(684885);
function b(e) {
    let { threadId: t } = e,
        n = (0, o.e7)([c.Z], () => c.Z.getChannel(t)),
        b = (0, o.e7)([c.Z], () => c.Z.getChannel(null == n ? void 0 : n.parent_id)),
        _ = i.useCallback(() => {
            null != n && null != b && ((0, s.yw)(f.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }), (0, l.J)((0, u.EO)(n, b)));
        }, [n, b]);
    return (0, r.jsxs)('div', {
        className: g.sharePromptContainer,
        children: [
            (0, r.jsx)(h.Z, {}),
            (0, r.jsxs)('div', {
                className: g.sharePromptContent,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: m.NW.string(m.t['5uAO7e'])
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: m.NW.format(m.t.WnfPV1, { helpArticleUrl: d.Z.getCreatorSupportArticleURL(f.BhN.MEDIA_CHANNEL) })
                    }),
                    (0, r.jsx)(a.LZC, { size: 4 }),
                    (0, r.jsxs)(a.zxk, {
                        className: g.sharePromptCta,
                        innerClassName: g.ctaContent,
                        onClick: _,
                        children: [
                            (0, r.jsx)(a.xPt, {
                                color: 'currentColor',
                                size: 'xs'
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: m.NW.string(m.t.C5UQCw)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(a.P3F, {
                className: g.closeButton,
                onClick: () => {
                    (0, p.fn)(t);
                },
                'aria-label': m.NW.string(m.t['0+xZHx']),
                children: (0, r.jsx)(a.Dio, {
                    color: 'currentColor',
                    size: 'xs'
                })
            })
        ]
    });
}
