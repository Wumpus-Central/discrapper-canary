n.d(t, { L: () => j });
var i = n(627968),
    s = n(64700),
    l = n(574381),
    a = n(311907),
    r = n(139033),
    o = n(314116),
    d = n(421380),
    c = n(397927),
    u = n(827343),
    m = n(77729),
    g = n(839214),
    _ = n(98919),
    x = n(487329),
    A = n(419954),
    h = n(430452),
    p = n(353835),
    T = n(780964),
    f = n(652215),
    S = n(731854),
    E = n(985018);
let b = (0, g.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function C() {
    let e = await m.A.fileManager.getLogPath();
    m.A.fileManager.showItemInFolder(e);
}
function N(e) {
    (0, o.A)({
        title: E.intl.string(E.t["7UXEF2"]),
        subtitle: E.intl.string(E.t.IYPrRl),
        confirmText: E.intl.string(E.t.BddRzS),
        onConfirm: () => u.A.setDebugLogging(e),
    });
}
async function v(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        await h.Ay.getMediaEngine().writeAudioDebugState(),
            await p.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, _.a)(f.Umv.RTC),
            (e = E.intl.string(E.t["fKBB8+"])),
            (t = E.intl.string(E.t.BvyxE7)),
            (0, r.A)({ title: e, subtitle: t });
    } catch (a) {
        var s;
        let e, t, n, l;
        (s = a.displayMessage),
            (e = E.intl.string(E.t.QZg0J7)),
            (t = s ?? E.intl.string(E.t.VzHcSm)),
            (n = (0, x.B1)(x.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = E.intl.formatToPlainString(E.t.ejOT95, { errorCode: n })),
            (0, c.qfG)((n) =>
                (0, i.jsx)(c.VoidConfirmModal, {
                    header: e,
                    confirmButtonColor: d.$n.Colors.BRAND,
                    confirmText: E.intl.string(E.t.BddRzS),
                    ...n,
                    children: (0, i.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, i.jsx)(c.Text, { variant: "text-md/normal", children: t }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: l,
                            }),
                        ],
                    }),
                }),
            );
    } finally {
        n?.();
    }
}
async function I() {
    await v({
        onUploadStart: () => b.setState({ isUploading: !0 }),
        onUploadFinish: () => b.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let j = (0, A.E2)(T.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [E.intl.string(E.t["726JHL"]), E.intl.string(E.t.EbwFfR), E.intl.string(E.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, a.bG)([h.Ay], () => h.Ay.supports(S.O5.DEBUG_LOGGING));
        return l.Av && e && null != m.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, a.bG)([h.Ay], () => h.Ay.getDebugLogging()),
            t = b.useField("isUploading"),
            n = b.useField("isDisabled"),
            l = s.useId();
        return (0, i.jsxs)("fieldset", {
            children: [
                (0, i.jsx)(c.AC4, { tag: "legend", id: l, children: E.intl.string(E.t["FjN+et"]) }),
                (0, i.jsxs)(c.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(c.dOG, {
                            label: E.intl.string(E.t["726JHL"]),
                            description: E.intl.string(E.t["/7ak9Q"]),
                            checked: e,
                            onChange: N,
                        }),
                        (0, i.jsx)("div", {
                            role: "group",
                            "aria-labelledby": l,
                            children: (0, i.jsxs)(c.ButtonGroup, {
                                children: [
                                    (0, i.jsx)(c.Button, {
                                        variant: "secondary",
                                        text: E.intl.string(E.t.EbwFfR),
                                        onClick: I,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": E.intl.string(E.t.aY1OH2),
                                    }),
                                    (0, i.jsx)(c.Button, {
                                        variant: "secondary",
                                        text: E.intl.string(E.t.nuPtYi),
                                        onClick: C,
                                        "aria-label": E.intl.string(E.t["L/hFOe"]),
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
