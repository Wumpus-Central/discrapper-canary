n.d(t, { Z: () => N });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    s = n(481060),
    a = n(19780),
    o = n(571826),
    c = n(630759),
    u = n(301107),
    d = n(785792),
    h = n(190054),
    f = n(760373),
    g = n(388032),
    p = n(764229);
function N(e) {
    let { channelId: t } = e,
        n = (0, i.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getSecureFramesState()) ? void 0 : e.epochAuthenticator;
        }),
        N = (0, u.W)({
            fingerprintBase64: n,
            chunkSize: f.y6,
            desiredLength: f.YP
        }),
        O = l.useCallback(() => {
            (0, o.PM)({ channelId: t });
        }, [t]);
    return (0, r.jsxs)('div', {
        className: p.container,
        children: [
            (0, r.jsxs)('div', {
                className: p.tag,
                children: [
                    (0, r.jsx)(s.mBM, {
                        size: 'xxs',
                        color: s.TVs.colors.TEXT_FEEDBACK_POSITIVE
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-feedback-positive',
                        children: g.intl.string(g.t['3BogKS'])
                    })
                ]
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: g.intl.string(g.t.B9JNsr)
            }),
            (0, r.jsxs)('div', {
                className: p.header,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: g.intl.string(g.t.cTQI5u)
                    }),
                    null != N &&
                        (0, r.jsx)(h.H, {
                            chunks: N,
                            color: s.TVs.colors.INTERACTIVE_NORMAL.css,
                            onCopy: O
                        })
                ]
            }),
            (0, r.jsx)(d.b, {
                className: p.code,
                chunks: N,
                columns: f.WK
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: g.intl.format(g.t.wKxADQ, { helpArticle: (0, c.uV)() })
            })
        ]
    });
}
