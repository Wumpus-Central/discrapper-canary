i.d(t, { default: () => h }), i(321073);
var a = i(627968),
    l = i(64700),
    o = i(158954),
    n = i(397927),
    s = i(935649),
    r = i(847599),
    c = i(620174),
    d = i(40449);
let u = Object.values(d.VF)
    .filter((e) => "number" != typeof e)
    .map((e) => ({ id: e, value: d.VF[e], label: d.VF[d.VF[e]] }));
u.push({ id: "undefined", value: void 0, label: "undefined" });
let h = function (e) {
    let { onClose: t, transitionState: i } = e,
        [d, h] = l.useState(""),
        [b, f] = l.useState(!1),
        [p, v] = l.useState(void 0),
        S = l.useCallback(() => {
            console.log("Scan complete");
        }, []),
        V = async () => {
            f(!0), h("");
            try {
                let e = await (0, c.V)(p);
                s.A.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: S,
                    onClose: t,
                    entryPoint: r.q1.DEV_TOOLS_QUICK_ACTIONS,
                });
            } catch (e) {
                h(e.message);
            } finally {
                f(!1);
            }
        };
    return (0, a.jsxs)(o.Modal, {
        transitionState: i,
        onClose: t,
        title: "Age Verification Test Tool",
        actions: [{ text: "Trigger Age Verification Test", onClick: V, loading: b }],
        children: [
            (0, a.jsx)(n.l6P, {
                label: "Method",
                hideLabel: !0,
                onSelectionChange: (e) => v(e ?? void 0),
                value: p,
                options: u,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, a.jsx)("div", { children: "" !== d && (0, a.jsx)(n.dzK, { error: d }) }),
        ],
    });
};
