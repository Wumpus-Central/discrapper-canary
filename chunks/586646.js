n.d(t, { Z: () => y });
var l = n(200651),
    r = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(19780),
    s = n(571826),
    u = n(630759),
    c = n(301107),
    d = n(785792),
    f = n(190054),
    h = n(760373),
    g = n(388032),
    p = n(764229);
function y(e) {
    let { channelId: t } = e,
        n = (0, i.e7)([o.Z], () => {
            var e;
            return null == (e = o.Z.getSecureFramesState()) ? void 0 : e.epochAuthenticator;
        }),
        y = (0, c.W)({
            fingerprintBase64: n,
            chunkSize: h.y6,
            desiredLength: h.YP
        }),
        O = r.useCallback(() => {
            (0, s.PM)({ channelId: t });
        }, [t]);
    return (0, l.jsxs)('div', {
        className: p.container,
        children: [
            (0, l.jsxs)('div', {
                className: p.tag,
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
                className: p.header,
                children: [
                    (0, l.jsx)(a.X6q, {
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: g.intl.string(g.t.cTQI5u)
                    }),
                    null != y &&
                        (0, l.jsx)(f.H, {
                            chunks: y,
                            color: a.TVs.colors.INTERACTIVE_NORMAL.css,
                            onCopy: O
                        })
                ]
            }),
            (0, l.jsx)(d.b, {
                className: p.code,
                chunks: y,
                columns: h.WK
            }),
            (0, l.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: g.intl.format(g.t.wKxADQ, { helpArticle: (0, u.uV)() })
            })
        ]
    });
}
