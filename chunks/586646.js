n.d(t, { Z: () => N });
var l = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    o = n(19780),
    s = n(571826),
    c = n(630759),
    u = n(301107),
    d = n(785792),
    h = n(190054),
    f = n(760373),
    g = n(388032),
    p = n(35884);
function N(e) {
    let { channelId: t } = e,
        n = (0, a.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator;
        }),
        N = (0, u.W)({
            fingerprintBase64: n,
            chunkSize: f.y6,
            desiredLength: f.YP
        }),
        v = i.useCallback(() => {
            (0, s.PM)({ channelId: t });
        }, [t]);
    return (0, l.jsxs)('div', {
        className: p.container,
        children: [
            (0, l.jsxs)('div', {
                className: p.tag,
                children: [
                    (0, l.jsx)(r.mBM, {
                        size: 'xxs',
                        color: r.TVs.colors.TEXT_POSITIVE
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-positive',
                        children: g.intl.string(g.t['3BogKS'])
                    })
                ]
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: g.intl.string(g.t.B9JNsr)
            }),
            (0, l.jsxs)('div', {
                className: p.header,
                children: [
                    (0, l.jsx)(r.X6q, {
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: g.intl.string(g.t.cTQI5u)
                    }),
                    null != N &&
                        (0, l.jsx)(h.H, {
                            chunks: N,
                            color: r.TVs.colors.INTERACTIVE_NORMAL.css,
                            onCopy: v
                        })
                ]
            }),
            (0, l.jsx)(d.b, {
                className: p.code,
                chunks: N,
                columns: f.WK
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: g.intl.format(g.t.wKxADQ, { helpArticle: (0, c.uV)() })
            })
        ]
    });
}
