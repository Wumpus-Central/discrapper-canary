n.d(t, { Z: () => p }), n(388685);
var a = n(54381),
    l = n(473749),
    i = n(481060),
    r = n(570140),
    s = n(750180),
    o = n(358820),
    c = n(585483),
    d = n(981631),
    u = n(451429),
    m = n(877600);
function p() {
    let [e, t] = l.useState(30),
        n = l.useCallback(() => {
            r.Z.dispatch({
                type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
                state: s.O.LOADING,
            });
        }, []);
    return (0, a.jsx)(i.zJl, {
        className: u.panel,
        children: (0, a.jsxs)("div", {
            className: m.panelInner,
            children: [
                (0, a.jsx)(i.Text, {
                    className: m.panelHeader,
                    variant: "text-lg/bold",
                    children: "Voice Filters",
                }),
                (0, a.jsxs)("div", {
                    className: m.panelRow,
                    children: [
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: "Set number of seconds remaining in countdown",
                        }),
                        (0, a.jsx)(i.oil, {
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
                                void r.Z.dispatch({
                                    type: "VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME",
                                    timeInSeconds: e,
                                }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: m.panelRow,
                    children: [
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: "Reset to API values",
                        }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: () => {
                                (0, o.wV)();
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: m.panelRow,
                    children: [
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children:
                                "Pretend the native module is loading so when you close your app it'll look as if it crashed on load",
                        }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Pretend",
                            onClick: n,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: m.panelRow,
                    children: (0, a.jsx)(i.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "Open voice filters panel",
                        onClick: () => {
                            c.S.dispatch(d.CkL.OPEN_VOICE_FILTER_POPOUT);
                        },
                    }),
                }),
            ],
        }),
    });
}
