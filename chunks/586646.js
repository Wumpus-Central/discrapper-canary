n.d(t, { Z: () => O });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    o = n(481060),
    s = n(19780),
    a = n(571826),
    c = n(630759),
    u = n(301107),
    d = n(785792),
    f = n(190054),
    h = n(760373),
    p = n(388032),
    g = n(764229);
function O(e) {
    let { channelId: t } = e,
        n = (0, i.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.getSecureFramesState()) ? void 0 : e.epochAuthenticator;
        }),
        O = (0, u.W)({
            fingerprintBase64: n,
            chunkSize: h.y6,
            desiredLength: h.YP
        }),
        N = l.useCallback(() => {
            (0, a.PM)({ channelId: t });
        }, [t]);
    return (0, r.jsxs)('div', {
        className: g.container,
        children: [
            (0, r.jsxs)('div', {
                className: g.tag,
                children: [
                    (0, r.jsx)(o.mBM, {
                        size: 'xxs',
                        color: o.TVs.colors.TEXT_FEEDBACK_POSITIVE
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-feedback-positive',
                        children: p.intl.string(p.t['3BogKS'])
                    })
                ]
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: p.intl.string(p.t.B9JNsr)
            }),
            (0, r.jsxs)('div', {
                className: g.header,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: p.intl.string(p.t.cTQI5u)
                    }),
                    null != O &&
                        (0, r.jsx)(f.H, {
                            chunks: O,
                            color: o.TVs.colors.INTERACTIVE_NORMAL.css,
                            onCopy: N
                        })
                ]
            }),
            (0, r.jsx)(d.b, {
                className: g.code,
                chunks: O,
                columns: h.WK
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: p.intl.format(p.t.wKxADQ, { helpArticle: (0, c.uV)() })
            })
        ]
    });
}
