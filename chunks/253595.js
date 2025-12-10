n.d(e, { f: () => O });
var i = n(54381),
    l = n(473749),
    s = n(818710),
    u = n(793030),
    r = n(442837),
    a = n(579806),
    o = n(972959),
    c = n(509613),
    d = n(131951),
    S = n(313789),
    T = n(710808),
    E = n(65154),
    g = n(388032);
let I = (0, o.H)(() => ({
    isUploading: !1,
    isDisabled: !1,
}));
async function _() {
    await (0, T.xI)({
        onUploadStart: () => I.setState({ isUploading: !0 }),
        onUploadFinish: () =>
            I.setState({
                isUploading: !1,
                isDisabled: !0,
            }),
    });
}
let O = (0, c.ON)(S.n.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [g.intl.string(g.t["726JHL"]), g.intl.string(g.t.EbwFfR), g.intl.string(g.t.nuPtYi)],
    usePredicate: function () {
        let t = (0, r.e7)([d.Z], () => d.Z.supports(E.AN.DEBUG_LOGGING));
        return s.FB && t && null != a.Z.fileManager.readLogFiles;
    },
    Component: function () {
        let t = (0, r.e7)([d.Z], () => d.Z.getDebugLogging()),
            e = I.useField("isUploading"),
            n = I.useField("isDisabled"),
            s = l.useId();
        return (0, i.jsxs)("fieldset", {
            children: [
                (0, i.jsx)(u.nn4, {
                    tag: "legend",
                    id: s,
                    children: g.intl.string(g.t["FjN+et"]),
                }),
                (0, i.jsxs)(u.Kqy, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(u.rsf, {
                            label: g.intl.string(g.t["726JHL"]),
                            description: g.intl.string(g.t["/7ak9Q"]),
                            checked: t,
                            onChange: T.rT,
                        }),
                        (0, i.jsx)("div", {
                            role: "group",
                            "aria-labelledby": s,
                            children: (0, i.jsxs)(u.hE2, {
                                children: [
                                    (0, i.jsx)(u.zxk, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.EbwFfR),
                                        onClick: _,
                                        loading: e,
                                        disabled: n,
                                        "aria-label": g.intl.string(g.t.aY1OH2),
                                    }),
                                    (0, i.jsx)(u.zxk, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.nuPtYi),
                                        onClick: T.W2,
                                        "aria-label": g.intl.string(g.t["L/hFOe"]),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
});
