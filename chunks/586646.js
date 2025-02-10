n.d(t, { Z: () => x });
var i = n(200651),
    l = n(192379),
    o = n(442837),
    s = n(481060),
    a = n(19780),
    r = n(571826),
    c = n(630759),
    u = n(301107),
    d = n(785792),
    h = n(190054),
    f = n(760373),
    N = n(388032),
    g = n(571545);
function x(e) {
    let { channelId: t } = e,
        n = (0, o.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator;
        }),
        x = (0, u.W)({
            fingerprintBase64: n,
            chunkSize: f.y6,
            desiredLength: f.YP
        }),
        p = l.useCallback(() => {
            (0, r.PM)({ channelId: t });
        }, [t]);
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            (0, i.jsxs)('div', {
                className: g.tag,
                children: [
                    (0, i.jsx)(s.mBM, {
                        size: 'xxs',
                        color: s.TVs.colors.TEXT_POSITIVE
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-positive',
                        children: N.intl.string(N.t['3BogKS'])
                    })
                ]
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: N.intl.string(N.t.B9JNsr)
            }),
            (0, i.jsxs)('div', {
                className: g.header,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: N.intl.string(N.t.cTQI5u)
                    }),
                    null != x &&
                        (0, i.jsx)(h.H, {
                            chunks: x,
                            color: s.TVs.colors.INTERACTIVE_NORMAL.css,
                            onCopy: p
                        })
                ]
            }),
            (0, i.jsx)(d.b, {
                className: g.code,
                chunks: x,
                columns: f.WK
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: N.intl.format(N.t.wKxADQ, { helpArticle: (0, c.uV)() })
            })
        ]
    });
}
