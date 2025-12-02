n.d(e, { Z: () => N });
var i = n(54381),
    r = n(473749),
    l = n(818710),
    s = n(793030),
    u = n(442837),
    a = n(579806),
    o = n(972959),
    c = n(509613),
    d = n(131951),
    E = n(313789),
    S = n(710808),
    T = n(65154),
    I = n(388032);
let g = (0, o.H)(() => ({
    isUploading: !1,
    isDisabled: !1,
}));
async function O() {
    await (0, S.xI)({
        onUploadStart: () => g.setState({ isUploading: !0 }),
        onUploadFinish: () =>
            g.setState({
                isUploading: !1,
                isDisabled: !0,
            }),
    });
}
function _() {
    let t = (0, u.e7)([d.Z], () => d.Z.getDebugLogging()),
        e = g.useField("isUploading"),
        n = g.useField("isDisabled"),
        l = r.useId();
    return (0, i.jsxs)("fieldset", {
        children: [
            (0, i.jsx)(s.nn4, {
                tag: "legend",
                id: l,
                children: I.intl.string(I.t["FjN+et"]),
            }),
            (0, i.jsxs)(s.Kqy, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, i.jsx)(s.rsf, {
                        label: I.intl.string(I.t["726JHL"]),
                        description: I.intl.string(I.t["/7ak9Q"]),
                        checked: t,
                        onChange: S.rT,
                    }),
                    (0, i.jsx)("div", {
                        role: "group",
                        "aria-labelledby": l,
                        children: (0, i.jsxs)(s.hE2, {
                            children: [
                                (0, i.jsx)(s.zxk, {
                                    variant: "secondary",
                                    text: I.intl.string(I.t.EbwFfR),
                                    onClick: O,
                                    loading: e,
                                    disabled: n,
                                    "aria-label": I.intl.string(I.t.aY1OH2),
                                }),
                                (0, i.jsx)(s.zxk, {
                                    variant: "secondary",
                                    text: I.intl.string(I.t.nuPtYi),
                                    onClick: S.W2,
                                    "aria-label": I.intl.string(I.t["L/hFOe"]),
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
    useSearchTerms: () => [I.intl.string(I.t["726JHL"]), I.intl.string(I.t.EbwFfR), I.intl.string(I.t.nuPtYi)],
    usePredicate: function () {
        let t = (0, u.e7)([d.Z], () => d.Z.supports(T.AN.DEBUG_LOGGING));
        return l.FB && t && null != a.Z.fileManager.readLogFiles;
    },
    render: () => (0, i.jsx)(_, {}),
});
