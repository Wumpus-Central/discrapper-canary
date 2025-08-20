n.d(t, { Z: () => O });
var r = n(951288),
    l = n(647438),
    s = n(442837),
    i = n(481060),
    a = n(19780),
    o = n(571826),
    c = n(630759),
    u = n(301107),
    d = n(785792),
    h = n(190054),
    f = n(760373),
    g = n(388032),
    p = n(506317);
function O(e) {
    let { channelId: t } = e,
        n = (0, s.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getSecureFramesState()) ? void 0 : e.epochAuthenticator;
        }),
        O = (0, u.W)({
            fingerprintBase64: n,
            chunkSize: f.y6,
            desiredLength: f.YP,
        }),
        y = l.useCallback(() => {
            (0, o.PM)({ channelId: t });
        }, [t]);
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            (0, r.jsxs)("div", {
                className: p.tag,
                children: [
                    (0, r.jsx)(i.mBM, {
                        size: "xxs",
                        color: i.TVs.colors.TEXT_FEEDBACK_POSITIVE,
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: g.intl.string(g.t["3BogKS"]),
                    }),
                ],
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: g.intl.string(g.t.B9JNsr),
            }),
            (0, r.jsxs)("div", {
                className: p.header,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: "text-sm/bold",
                        color: "header-primary",
                        children: g.intl.string(g.t.cTQI5u),
                    }),
                    null != O &&
                        (0, r.jsx)(h.H, {
                            chunks: O,
                            color: i.TVs.colors.INTERACTIVE_NORMAL.css,
                            onCopy: y,
                        }),
                ],
            }),
            (0, r.jsx)(d.b, {
                className: p.code,
                chunks: O,
                columns: f.WK,
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: g.intl.format(g.t.wKxADQ, { helpArticle: (0, c.uV)() }),
            }),
        ],
    });
}
