n.d(e, { f: () => N });
var i = n(54381),
    l = n(473749),
    s = n(818710),
    u = n(793030),
    r = n(442837),
    a = n(579806),
    o = n(972959),
    S = n(509613),
    T = n(131951),
    c = n(313789),
    E = n(710808),
    d = n(65154),
    g = n(388032);
let _ = (0, o.H)(() => ({
    isUploading: !1,
    isDisabled: !1,
}));
async function I() {
    await (0, E.xI)({
        onUploadStart: () => _.setState({ isUploading: !0 }),
        onUploadFinish: () =>
            _.setState({
                isUploading: !1,
                isDisabled: !0,
            }),
    });
}
let N = (0, S.ON)(c.n.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [g.intl.string(g.t["726JHL"]), g.intl.string(g.t.EbwFfR), g.intl.string(g.t.nuPtYi)],
    usePredicate: function () {
        let t = (0, r.e7)([T.Z], () => T.Z.supports(d.AN.DEBUG_LOGGING));
        return s.FB && t && null != a.Z.fileManager.readLogFiles;
    },
    Component: function () {
        let t = (0, r.e7)([T.Z], () => T.Z.getDebugLogging()),
            e = _.useField("isUploading"),
            n = _.useField("isDisabled"),
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
                            onChange: E.rT,
                        }),
                        (0, i.jsx)("div", {
                            role: "group",
                            "aria-labelledby": s,
                            children: (0, i.jsxs)(u.hE2, {
                                children: [
                                    (0, i.jsx)(u.zxk, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.EbwFfR),
                                        onClick: I,
                                        loading: e,
                                        disabled: n,
                                        "aria-label": g.intl.string(g.t.aY1OH2),
                                    }),
                                    (0, i.jsx)(u.zxk, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.nuPtYi),
                                        onClick: E.W2,
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
