n.d(t, { L: () => G });
var i = n(627968),
    s = n(64700),
    l = n(574381),
    a = n(311907),
    r = n(139033),
    o = n(314116),
    d = n(862482),
    u = n(192308),
    c = n(640238),
    g = n(834730),
    m = n(140735),
    _ = n(331322),
    A = n(243721),
    h = n(825484),
    p = n(821609),
    x = n(827343),
    E = n(77729),
    T = n(839214),
    S = n(98919),
    f = n(487329),
    b = n(419954),
    C = n(430452),
    v = n(353835),
    N = n(780964),
    I = n(652215),
    y = n(731854),
    j = n(985018);
let O = (0, T.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function R() {
    let e = await E.A.fileManager.getLogPath();
    E.A.fileManager.showItemInFolder(e);
}
function L(e) {
    (0, o.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => x.A.setDebugLogging(e),
    });
}
async function D(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        await C.Ay.getMediaEngine().writeAudioDebugState(),
            await v.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, S.a)(I.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, r.A)({ title: e, subtitle: t });
    } catch (a) {
        var s;
        let e, t, n, l;
        (s = a.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = s ?? j.intl.string(j.t.VzHcSm)),
            (n = (0, f.B1)(f.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: n })),
            (0, u.openModal)((n) =>
                (0, i.jsx)(c.a, {
                    header: e,
                    confirmButtonColor: d.$n.Colors.BRAND,
                    confirmText: j.intl.string(j.t.BddRzS),
                    ...n,
                    children: (0, i.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, i.jsx)(g.E, { variant: "text-md/normal", children: t }),
                            (0, i.jsx)(g.E, {
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
async function P() {
    await D({
        onUploadStart: () => O.setState({ isUploading: !0 }),
        onUploadFinish: () => O.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let G = (0, b.E2)(N.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, a.bG)([C.Ay], () => C.Ay.supports(y.O5.DEBUG_LOGGING));
        return l.Av && e && null != E.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, a.bG)([C.Ay], () => C.Ay.getDebugLogging()),
            t = O.useField("isUploading"),
            n = O.useField("isDisabled"),
            l = s.useId();
        return (0, i.jsxs)("fieldset", {
            children: [
                (0, i.jsx)(m.A, { tag: "legend", id: l, children: j.intl.string(j.t["FjN+et"]) }),
                (0, i.jsxs)(_.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(A.d, {
                            label: j.intl.string(j.t["726JHL"]),
                            description: j.intl.string(j.t["/7ak9Q"]),
                            checked: e,
                            onChange: L,
                        }),
                        (0, i.jsx)("div", {
                            role: "group",
                            "aria-labelledby": l,
                            children: (0, i.jsxs)(h.e, {
                                children: [
                                    (0, i.jsx)(p.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: P,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, i.jsx)(p.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: R,
                                        "aria-label": j.intl.string(j.t["L/hFOe"]),
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
