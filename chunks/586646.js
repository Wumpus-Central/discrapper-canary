n.d(t, { Z: () => x });
var l = n(200651),
    i = n(192379),
    s = n(442837),
    o = n(481060),
    a = n(19780),
    r = n(571826),
    c = n(630759),
    u = n(301107),
    d = n(785792),
    h = n(190054),
    N = n(760373),
    f = n(388032),
    g = n(539992);
function x(e) {
    let { channelId: t } = e,
        n = (0, s.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator;
        }),
        x = (0, u.W)({
            fingerprintBase64: n,
            chunkSize: N.y6,
            desiredLength: N.YP
        }),
        C = i.useCallback(() => {
            (0, r.PM)({ channelId: t });
        }, [t]);
    return (0, l.jsxs)('div', {
        className: g.container,
        children: [
            (0, l.jsxs)('div', {
                className: g.tag,
                children: [
                    (0, l.jsx)(o.mBM, {
                        size: 'xxs',
                        color: o.TVs.colors.TEXT_POSITIVE
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-positive',
                        children: f.intl.string(f.t['3BogKS'])
                    })
                ]
            }),
            (0, l.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: f.intl.string(f.t.B9JNsr)
            }),
            (0, l.jsxs)('div', {
                className: g.header,
                children: [
                    (0, l.jsx)(o.X6q, {
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: f.intl.string(f.t.cTQI5u)
                    }),
                    null != x &&
                        (0, l.jsx)(h.H, {
                            chunks: x,
                            color: o.TVs.colors.INTERACTIVE_NORMAL.css,
                            onCopy: C
                        })
                ]
            }),
            (0, l.jsx)(d.b, {
                className: g.code,
                chunks: x,
                columns: N.WK
            }),
            (0, l.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: f.intl.format(f.t.wKxADQ, { helpArticle: (0, c.uV)() })
            })
        ]
    });
}
