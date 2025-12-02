n.d(e, { Z: () => N });
var i = n(54381),
    l = n(473749),
    s = n(818710),
    r = n(793030),
    u = n(442837),
    a = n(579806),
    o = n(972959),
    c = n(509613),
    d = n(131951),
    E = n(313789),
    S = n(710808),
    I = n(65154),
    T = n(388032);
let g = (0, o.H)(() => ({
    isUploading: !1,
    isDisabled: !1,
}));
async function _() {
    await (0, S.xI)({
        onUploadStart: () => g.setState({ isUploading: !0 }),
        onUploadFinish: () =>
            g.setState({
                isUploading: !1,
                isDisabled: !0,
            }),
    });
}
function O() {
    let t = (0, u.e7)([d.Z], () => d.Z.getDebugLogging()),
        e = g.useField("isUploading"),
        n = g.useField("isDisabled"),
        s = l.useId();
    return (0, i.jsxs)("fieldset", {
        children: [
            (0, i.jsx)(r.nn4, {
                tag: "legend",
                id: s,
                children: T.intl.string(T.t["FjN+et"]),
            }),
            (0, i.jsxs)(r.Kqy, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, i.jsx)(r.rsf, {
                        label: T.intl.string(T.t["726JHL"]),
                        description: T.intl.string(T.t["/7ak9Q"]),
                        checked: t,
                        onChange: S.rT,
                    }),
                    (0, i.jsx)("div", {
                        role: "group",
                        "aria-labelledby": s,
                        children: (0, i.jsxs)(r.hE2, {
                            children: [
                                (0, i.jsx)(r.zxk, {
                                    variant: "secondary",
                                    text: T.intl.string(T.t.EbwFfR),
                                    onClick: _,
                                    loading: e,
                                    disabled: n,
                                    "aria-label": T.intl.string(T.t.aY1OH2),
                                }),
                                (0, i.jsx)(r.zxk, {
                                    variant: "secondary",
                                    text: T.intl.string(T.t.nuPtYi),
                                    onClick: S.W2,
                                    "aria-label": T.intl.string(T.t["L/hFOe"]),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let N = (0, c.ON)(E.n.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [T.intl.string(T.t["726JHL"]), T.intl.string(T.t.EbwFfR), T.intl.string(T.t.nuPtYi)],
    usePredicate: function () {
        let t = (0, u.e7)([d.Z], () => d.Z.supports(I.AN.DEBUG_LOGGING));
        return s.FB && t && null != a.Z.fileManager.readLogFiles;
    },
    render: () => (0, i.jsx)(O, {}),
});
