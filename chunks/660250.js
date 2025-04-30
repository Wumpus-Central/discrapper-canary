n.r(t), n.d(t, { default: () => j });
var r = n(200651),
    o = n(192379),
    c = n(442837),
    i = n(481060),
    l = n(959457),
    s = n(571826),
    a = n(630759),
    d = n(301107),
    u = n(785792),
    h = n(190054),
    f = n(245581),
    p = n(760373),
    m = n(388032),
    b = n(268999);
let j = function (e) {
    let { transitionState: t, streamKey: n, channelId: j } = e,
        x = (0, c.e7)([l.Z], () => {
            var e;
            return null == (e = l.Z.getSecureFramesState(n)) ? void 0 : e.epochAuthenticator;
        }),
        y = (0, d.W)({
            fingerprintBase64: x,
            chunkSize: p.y6,
            desiredLength: p.YP
        }),
        v = o.useCallback(() => {
            (0, s.ih)({ channelId: j });
        }, [j]);
    return (0, r.jsxs)(f.Z, {
        transitionState: t,
        title: m.intl.string(m.t.QogHlZ),
        subtitle: m.intl.string(m.t.qODBkZ),
        children: [
            (0, r.jsxs)('div', {
                className: b.verification,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.header,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: 'text-sm/bold',
                                color: 'header-primary',
                                children: m.intl.string(m.t.cgBTyM)
                            }),
                            null != y &&
                                (0, r.jsx)(h.H, {
                                    className: b.copyIcon,
                                    chunks: y,
                                    color: i.TVs.colors.INTERACTIVE_NORMAL,
                                    onCopy: v
                                })
                        ]
                    }),
                    (0, r.jsx)(u.b, {
                        className: b.code,
                        chunks: y,
                        columns: p.WK
                    })
                ]
            }),
            (0, r.jsx)(i.Text, {
                className: b.footer,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: m.intl.format(m.t['H3+ktr'], { helpArticle: (0, a.uV)() })
            })
        ]
    });
};
