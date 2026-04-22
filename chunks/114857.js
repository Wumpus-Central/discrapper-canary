i.d(t, { default: () => b }), i(321073);
var a = i(627968),
    l = i(64700),
    o = i(189213),
    n = i(691885),
    s = i(511274),
    r = i(935649),
    c = i(847599),
    d = i(620174),
    u = i(40449);
let h = Object.values(u.VF)
    .filter((e) => "number" != typeof e)
    .map((e) => ({ id: e, value: u.VF[e], label: u.VF[u.VF[e]] }));
h.push({ id: "undefined", value: void 0, label: "undefined" });
let b = function (e) {
    let { onClose: t, transitionState: i } = e,
        [u, b] = l.useState(""),
        [f, p] = l.useState(!1),
        [v, S] = l.useState(void 0),
        V = l.useCallback(() => {
            console.log("Scan complete");
        }, []),
        g = async () => {
            p(!0), b("");
            try {
                let e = await (0, d.V)(v);
                r.A.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: V,
                    onClose: t,
                    entryPoint: c.q1.DEV_TOOLS_QUICK_ACTIONS,
                });
            } catch (e) {
                b(e.message);
            } finally {
                p(!1);
            }
        };
    return (0, a.jsxs)(o.Modal, {
        transitionState: i,
        onClose: t,
        title: "Age Verification Test Tool",
        actions: [{ text: "Trigger Age Verification Test", onClick: g, loading: f }],
        children: [
            (0, a.jsx)(n.l, {
                label: "Method",
                hideLabel: !0,
                onSelectionChange: (e) => S(e ?? void 0),
                value: v,
                options: h,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, a.jsx)("div", { children: "" !== u && (0, a.jsx)(s.U, { error: u }) }),
        ],
    });
};
