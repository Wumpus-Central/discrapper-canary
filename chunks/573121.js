n.d(t, { A: () => h });
var a = n(627968),
    s = n(64700),
    i = n(397927),
    l = n(73153),
    r = n(736666),
    o = n(342887),
    d = n(203982),
    c = n(652215),
    u = n(661251),
    m = n(843077);
function h() {
    let [e, t] = s.useState(30),
        n = s.useCallback(() => {
            l.h.dispatch({ type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE", state: r.R.LOADING });
        }, []);
    return (0, a.jsx)(i.IpV, {
        className: u.nd,
        children: (0, a.jsxs)("div", {
            className: m.l$,
            children: [
                (0, a.jsx)(i.Text, { className: m.Iv, variant: "text-lg/bold", children: "Voice Filters" }),
                (0, a.jsxs)("div", {
                    className: m.Pm,
                    children: [
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: "Set number of seconds remaining in countdown",
                        }),
                        (0, a.jsx)(i.ksK, {
                            defaultValue: 30,
                            onChange: (e) => {
                                t(parseInt(e));
                            },
                        }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Set",
                            onClick: () =>
                                void l.h.dispatch({ type: "VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME", timeInSeconds: e }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: m.Pm,
                    children: [
                        (0, a.jsx)(i.Text, { variant: "text-md/normal", children: "Reset to API values" }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: () => {
                                (0, o.st)();
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: m.Pm,
                    children: [
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children:
                                "Pretend the native module is loading so when you close your app it'll look as if it crashed on load",
                        }),
                        (0, a.jsx)(i.Button, { variant: "primary", size: "sm", text: "Pretend", onClick: n }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: m.Pm,
                    children: (0, a.jsx)(i.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "Open voice filters panel",
                        onClick: () => {
                            d._.dispatch(c.jej.OPEN_VOICE_FILTER_POPOUT);
                        },
                    }),
                }),
            ],
        }),
    });
}
