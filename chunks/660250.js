n.r(t), n.d(t, { default: () => v });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    o = n(959457),
    c = n(571826),
    a = n(630759),
    d = n(301107),
    u = n(785792),
    h = n(190054),
    x = n(245581),
    m = n(760373),
    f = n(388032),
    _ = n(452576);
let v = function (e) {
    let { transitionState: t, streamKey: n, channelId: v } = e,
        p = (0, l.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getSecureFramesState(n)) || void 0 === e ? void 0 : e.epochAuthenticator;
        }),
        j = (0, d.W)({
            fingerprintBase64: p,
            chunkSize: m.y6,
            desiredLength: m.YP
        }),
        N = r.useCallback(() => {
            (0, c.ih)({ channelId: v });
        }, [v]);
    return (0, i.jsxs)(x.Z, {
        transitionState: t,
        title: f.intl.string(f.t.QogHlZ),
        subtitle: f.intl.string(f.t.qODBkZ),
        children: [
            (0, i.jsxs)('div', {
                className: _.verification,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.header,
                        children: [
                            (0, i.jsx)(s.X6q, {
                                variant: 'text-sm/bold',
                                color: 'header-primary',
                                children: f.intl.string(f.t.cgBTyM)
                            }),
                            null != j &&
                                (0, i.jsx)(h.H, {
                                    className: _.copyIcon,
                                    chunks: j,
                                    color: s.TVs.colors.INTERACTIVE_NORMAL,
                                    onCopy: N
                                })
                        ]
                    }),
                    (0, i.jsx)(u.b, {
                        className: _.code,
                        chunks: j,
                        columns: m.WK
                    })
                ]
            }),
            (0, i.jsx)(s.Text, {
                className: _.footer,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: f.intl.format(f.t['H3+ktr'], { helpArticle: (0, a.uV)() })
            })
        ]
    });
};
