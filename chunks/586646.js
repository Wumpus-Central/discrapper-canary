n.d(t, { Z: () => C });
var l = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(481060),
    i = n(19780),
    o = n(571826),
    c = n(630759),
    u = n(301107),
    d = n(785792),
    h = n(190054),
    x = n(760373),
    g = n(388032),
    N = n(539992);
function C(e) {
    let { channelId: t } = e,
        n = (0, r.e7)([i.Z], () => {
            var e;
            return null === (e = i.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator;
        }),
        C = (0, u.W)({
            fingerprintBase64: n,
            chunkSize: x.y6,
            desiredLength: x.YP
        }),
        f = s.useCallback(() => {
            (0, o.PM)({ channelId: t });
        }, [t]);
    return (0, l.jsxs)('div', {
        className: N.container,
        children: [
            (0, l.jsxs)('div', {
                className: N.tag,
                children: [
                    (0, l.jsx)(a.mBM, {
                        size: 'xxs',
                        color: a.TVs.colors.TEXT_POSITIVE
                    }),
                    (0, l.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-positive',
                        children: g.intl.string(g.t['3BogKS'])
                    })
                ]
            }),
            (0, l.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: g.intl.string(g.t.B9JNsr)
            }),
            (0, l.jsxs)('div', {
                className: N.header,
                children: [
                    (0, l.jsx)(a.X6q, {
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: g.intl.string(g.t.cTQI5u)
                    }),
                    null != C &&
                        (0, l.jsx)(h.H, {
                            chunks: C,
                            color: a.TVs.colors.INTERACTIVE_NORMAL.css,
                            onCopy: f
                        })
                ]
            }),
            (0, l.jsx)(d.b, {
                className: N.code,
                chunks: C,
                columns: x.WK
            }),
            (0, l.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: g.intl.format(g.t.wKxADQ, { helpArticle: (0, c.uV)() })
            })
        ]
    });
}
