n.d(t, { Z: () => E });
var l = n(54381),
    i = n(473749),
    r = n(442837),
    a = n(481060),
    o = n(19780),
    s = n(571826),
    u = n(630759),
    c = n(301107),
    d = n(785792),
    f = n(190054),
    g = n(760373),
    h = n(388032),
    p = n(948014);
function E(e) {
    let { channelId: t } = e,
        n = (0, r.e7)([o.Z], () => {
            var e;
            return null == (e = o.Z.getSecureFramesState()) ? void 0 : e.epochAuthenticator;
        }),
        E = (0, c.W)({
            fingerprintBase64: n,
            chunkSize: g.y6,
            desiredLength: g.YP,
        }),
        N = i.useCallback(() => {
            (0, s.PM)({ channelId: t });
        }, [t]);
    return (0, l.jsxs)("div", {
        className: p.container,
        children: [
            (0, l.jsxs)("div", {
                className: p.tag,
                children: [
                    (0, l.jsx)(a.mBM, {
                        size: "xxs",
                        color: a.TVs.colors.TEXT_FEEDBACK_POSITIVE,
                    }),
                    (0, l.jsx)(a.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: h.intl.string(h.t["3BogKe"]),
                    }),
                ],
            }),
            (0, l.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: h.intl.string(h.t.B9JNsl),
            }),
            (0, l.jsxs)("div", {
                className: p.header,
                children: [
                    (0, l.jsx)(a.Heading, {
                        variant: "text-sm/bold",
                        color: "header-primary",
                        children: h.intl.string(h.t.cTQI5t),
                    }),
                    null != E &&
                        (0, l.jsx)(f.H, {
                            chunks: E,
                            color: a.TVs.colors.INTERACTIVE_NORMAL.css,
                            onCopy: N,
                        }),
                ],
            }),
            (0, l.jsx)(d.b, {
                className: p.code,
                chunks: E,
                columns: g.WK,
            }),
            (0, l.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: h.intl.format(h.t.wKxADe, { helpArticle: (0, u.uV)() }),
            }),
        ],
    });
}
