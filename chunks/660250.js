t.r(n);
var o = t(200651),
    i = t(192379),
    r = t(442837),
    c = t(481060),
    l = t(959457),
    s = t(571826),
    a = t(630759),
    d = t(301107),
    u = t(785792),
    h = t(190054),
    f = t(245581),
    x = t(760373),
    m = t(388032),
    p = t(822466);
n.default = function (e) {
    let { transitionState: n, streamKey: t, channelId: v } = e,
        _ = (0, r.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.getSecureFramesState(t)) || void 0 === e ? void 0 : e.epochAuthenticator;
        }),
        j = (0, d.W)({
            fingerprintBase64: _,
            chunkSize: x.y6,
            desiredLength: x.YP
        }),
        g = i.useCallback(() => {
            (0, s.ih)({ channelId: v });
        }, [v]);
    return (0, o.jsxs)(f.Z, {
        transitionState: n,
        title: m.intl.string(m.t.QogHlZ),
        subtitle: m.intl.string(m.t.qODBkZ),
        children: [
            (0, o.jsxs)('div', {
                className: p.verification,
                children: [
                    (0, o.jsxs)('div', {
                        className: p.header,
                        children: [
                            (0, o.jsx)(c.Heading, {
                                variant: 'text-sm/bold',
                                color: 'header-primary',
                                children: m.intl.string(m.t.cgBTyM)
                            }),
                            null != j &&
                                (0, o.jsx)(h.H, {
                                    className: p.copyIcon,
                                    chunks: j,
                                    color: c.tokens.colors.INTERACTIVE_NORMAL,
                                    onCopy: g
                                })
                        ]
                    }),
                    (0, o.jsx)(u.b, {
                        className: p.code,
                        chunks: j,
                        columns: x.WK
                    })
                ]
            }),
            (0, o.jsx)(c.Text, {
                className: p.footer,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: m.intl.format(m.t['H3+ktr'], { helpArticle: (0, a.uV)() })
            })
        ]
    });
};
