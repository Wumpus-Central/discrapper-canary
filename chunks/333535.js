n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    l = n(399606),
    o = n(481060),
    a = n(367907),
    s = n(592125),
    c = n(934415),
    u = n(572004),
    d = n(63063),
    p = n(158222),
    h = n(523900),
    f = n(981631),
    m = n(388032),
    g = n(684885);
function b(e) {
    let { threadId: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.getChannel(t)),
        b = (0, l.e7)([s.Z], () => s.Z.getChannel(null == n ? void 0 : n.parent_id)),
        _ = i.useCallback(() => {
            null != n && null != b && ((0, a.yw)(f.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }), (0, u.JG)((0, c.EO)(n, b)));
        }, [n, b]);
    return (0, r.jsxs)('div', {
        className: g.sharePromptContainer,
        children: [
            (0, r.jsx)(h.Z, {}),
            (0, r.jsxs)('div', {
                className: g.sharePromptContent,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: m.intl.string(m.t['5uAO7e'])
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: m.intl.format(m.t.WnfPV1, { helpArticleUrl: d.Z.getCreatorSupportArticleURL(f.BhN.MEDIA_CHANNEL) })
                    }),
                    (0, r.jsx)(o.LZC, { size: 4 }),
                    (0, r.jsxs)(o.zxk, {
                        className: g.sharePromptCta,
                        innerClassName: g.ctaContent,
                        onClick: _,
                        children: [
                            (0, r.jsx)(o.xPt, {
                                color: 'currentColor',
                                size: 'xs'
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: m.intl.string(m.t.C5UQCw)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(o.P3F, {
                className: g.closeButton,
                onClick: () => {
                    (0, p.fn)(t);
                },
                'aria-label': m.intl.string(m.t['0+xZHx']),
                children: (0, r.jsx)(o.Dio, {
                    color: 'currentColor',
                    size: 'xs'
                })
            })
        ]
    });
}
