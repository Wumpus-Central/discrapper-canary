i.d(t, { default: () => p }), i(321073);
var a = i(627968),
    l = i(64700),
    o = i(189213),
    n = i(691885),
    s = i(511274),
    r = i(139716),
    c = i(847599),
    d = i(636537),
    u = i(652215);
async function h(e) {
    return (await d.Bo.post({ url: u.Rsh.AGE_ASSURANCE_TEST, body: { method: e }, rejectWithError: !1 })).body;
}
var b = i(40449);
let f = Object.values(b.VF)
    .filter((e) => "number" != typeof e)
    .map((e) => ({ id: e, value: b.VF[e], label: b.VF[b.VF[e]] }));
f.push({ id: "undefined", value: void 0, label: "undefined" });
let p = function (e) {
    let { onClose: t, transitionState: i } = e,
        [d, u] = l.useState(""),
        [b, p] = l.useState(!1),
        [v, S] = l.useState(void 0),
        g = l.useCallback(() => {
            console.log("Scan complete");
        }, []),
        w = async () => {
            p(!0), u("");
            try {
                let e = await h(v);
                r.A.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: g,
                    onClose: t,
                    entryPoint: c.q1.DEV_TOOLS_QUICK_ACTIONS,
                });
            } catch (e) {
                u(e.message);
            } finally {
                p(!1);
            }
        };
    return (0, a.jsxs)(o.Modal, {
        transitionState: i,
        onClose: t,
        title: "Age Verification Test Tool",
        actions: [{ text: "Trigger Age Verification Test", onClick: w, loading: b }],
        children: [
            (0, a.jsx)(n.l, {
                label: "Method",
                hideLabel: !0,
                onSelectionChange: (e) => S(e ?? void 0),
                value: v,
                options: f,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, a.jsx)("div", { children: "" !== d && (0, a.jsx)(s.U, { error: d }) }),
        ],
    });
};
