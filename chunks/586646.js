n.d(t, { Z: () => y });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    o = n(481060),
    a = n(19780),
    s = n(571826),
    u = n(630759),
    c = n(301107),
    d = n(785792),
    h = n(190054),
    f = n(760373),
    p = n(388032),
    g = n(764229);
function y(e) {
    let { channelId: t } = e,
        n = (0, i.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getSecureFramesState()) ? void 0 : e.epochAuthenticator;
        }),
        y = (0, c.W)({
            fingerprintBase64: n,
            chunkSize: f.y6,
            desiredLength: f.YP
        }),
        O = l.useCallback(() => {
            (0, s.PM)({ channelId: t });
        }, [t]);
    return (0, r.jsxs)('div', {
        className: g.container,
        children: [
            (0, r.jsxs)('div', {
                className: g.tag,
                children: [
                    (0, r.jsx)(o.mBM, {
                        size: 'xxs',
                        color: o.TVs.colors.TEXT_POSITIVE
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-positive',
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
                    null != y &&
                        (0, r.jsx)(h.H, {
                            chunks: y,
                            color: o.TVs.colors.INTERACTIVE_NORMAL.css,
                            onCopy: O
                        })
                ]
            }),
            (0, r.jsx)(d.b, {
                className: g.code,
                chunks: y,
                columns: f.WK
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: p.intl.format(p.t.wKxADQ, { helpArticle: (0, u.uV)() })
            })
        ]
    });
}
