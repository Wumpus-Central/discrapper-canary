n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(399606),
    a = n(755721),
    o = n(481060),
    s = n(367907),
    c = n(592125),
    u = n(934415),
    d = n(572004),
    p = n(63063),
    h = n(158222),
    f = n(523900),
    m = n(981631),
    g = n(388032),
    b = n(684885);
function _(e) {
    let { threadId: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.getChannel(t)),
        _ = (0, l.e7)([c.Z], () => c.Z.getChannel(null == n ? void 0 : n.parent_id)),
        y = i.useCallback(() => {
            null != n && null != _ && ((0, s.yw)(m.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }), (0, d.JG)((0, u.EO)(n, _)));
        }, [n, _]);
    return (0, r.jsxs)('div', {
        className: b.sharePromptContainer,
        children: [
            (0, r.jsx)(f.Z, {}),
            (0, r.jsxs)('div', {
                className: b.sharePromptContent,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: g.intl.string(g.t['5uAO7e'])
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-default',
                        children: g.intl.format(g.t.WnfPV1, { helpArticleUrl: p.Z.getCreatorSupportArticleURL(m.BhN.MEDIA_CHANNEL) })
                    }),
                    (0, r.jsx)(o.LZC, { size: 4 }),
                    (0, r.jsxs)(a.zx, {
                        className: b.sharePromptCta,
                        innerClassName: b.ctaContent,
                        onClick: y,
                        children: [
                            (0, r.jsx)(o.xPt, {
                                color: 'currentColor',
                                size: 'xs'
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: g.intl.string(g.t.C5UQCw)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(o.P3F, {
                className: b.closeButton,
                onClick: () => {
                    (0, h.fn)(t);
                },
                'aria-label': g.intl.string(g.t['0+xZHx']),
                children: (0, r.jsx)(o.Dio, {
                    color: 'currentColor',
                    size: 'xs'
                })
            })
        ]
    });
}
