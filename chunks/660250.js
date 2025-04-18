r.r(t), r.d(t, { default: () => j });
var n = r(200651),
    o = r(192379),
    c = r(442837),
    i = r(481060),
    s = r(959457),
    l = r(571826),
    a = r(630759),
    d = r(301107),
    u = r(785792),
    h = r(190054),
    f = r(245581),
    p = r(760373),
    m = r(388032),
    b = r(308877);
let j = function (e) {
    let { transitionState: t, streamKey: r, channelId: j } = e,
        x = (0, c.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.getSecureFramesState(r)) ? void 0 : e.epochAuthenticator;
        }),
        y = (0, d.W)({
            fingerprintBase64: x,
            chunkSize: p.y6,
            desiredLength: p.YP
        }),
        v = o.useCallback(() => {
            (0, l.ih)({ channelId: j });
        }, [j]);
    return (0, n.jsxs)(f.Z, {
        transitionState: t,
        title: m.NW.string(m.t.QogHlZ),
        subtitle: m.NW.string(m.t.qODBkZ),
        children: [
            (0, n.jsxs)('div', {
                className: b.verification,
                children: [
                    (0, n.jsxs)('div', {
                        className: b.header,
                        children: [
                            (0, n.jsx)(i.X6q, {
                                variant: 'text-sm/bold',
                                color: 'header-primary',
                                children: m.NW.string(m.t.cgBTyM)
                            }),
                            null != y &&
                                (0, n.jsx)(h.H, {
                                    className: b.copyIcon,
                                    chunks: y,
                                    color: i.TVs.colors.INTERACTIVE_NORMAL,
                                    onCopy: v
                                })
                        ]
                    }),
                    (0, n.jsx)(u.b, {
                        className: b.code,
                        chunks: y,
                        columns: p.WK
                    })
                ]
            }),
            (0, n.jsx)(i.Text, {
                className: b.footer,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: m.NW.format(m.t['H3+ktr'], { helpArticle: (0, a.uV)() })
            })
        ]
    });
};
