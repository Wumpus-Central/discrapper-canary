n.d(e, { f: () => N });
var i = n(54381),
    l = n(473749),
    s = n(818710),
    u = n(793030),
    r = n(442837),
    a = n(579806),
    o = n(972959),
    T = n(509613),
    S = n(131951),
    c = n(313789),
    E = n(710808),
    d = n(65154),
    _ = n(388032);
let g = (0, o.H)(() => ({
    isUploading: !1,
    isDisabled: !1,
}));
async function I() {
    await (0, E.xI)({
        onUploadStart: () => g.setState({ isUploading: !0 }),
        onUploadFinish: () =>
            g.setState({
                isUploading: !1,
                isDisabled: !0,
            }),
    });
}
let N = (0, T.ON)(c.n.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [_.intl.string(_.t["726JHL"]), _.intl.string(_.t.EbwFfR), _.intl.string(_.t.nuPtYi)],
    usePredicate: function () {
        let t = (0, r.e7)([S.Z], () => S.Z.supports(d.AN.DEBUG_LOGGING));
        return s.FB && t && null != a.Z.fileManager.readLogFiles;
    },
    Component: function () {
        let t = (0, r.e7)([S.Z], () => S.Z.getDebugLogging()),
            e = g.useField("isUploading"),
            n = g.useField("isDisabled"),
            s = l.useId();
        return (0, i.jsxs)("fieldset", {
            children: [
                (0, i.jsx)(u.nn4, {
                    tag: "legend",
                    id: s,
                    children: _.intl.string(_.t["FjN+et"]),
                }),
                (0, i.jsxs)(u.Kqy, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(u.rsf, {
                            label: _.intl.string(_.t["726JHL"]),
                            description: _.intl.string(_.t["/7ak9Q"]),
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
                                        text: _.intl.string(_.t.EbwFfR),
                                        onClick: I,
                                        loading: e,
                                        disabled: n,
                                        "aria-label": _.intl.string(_.t.aY1OH2),
                                    }),
                                    (0, i.jsx)(u.zxk, {
                                        variant: "secondary",
                                        text: _.intl.string(_.t.nuPtYi),
                                        onClick: E.W2,
                                        "aria-label": _.intl.string(_.t["L/hFOe"]),
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
