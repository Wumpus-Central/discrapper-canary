n.d(t, { Z: () => m });
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(230711),
    s = n(883904),
    o = n(227157),
    c = n(775195),
    d = n(981631),
    u = n(393146);
function m() {
    let e = r.useCallback(() => {
        i.Z.open(d.oAB.DISMISSIBLE_CONTENT_OPTIONS);
    }, []);
    return (0, a.jsxs)(l.Ttm, {
        className: u.panelContainer,
        children: [
            (0, a.jsxs)("p", {
                className: u.settings,
                children: [
                    "For more options, see the ",
                    (0, a.jsx)(l.eee, {
                        onClick: e,
                        children: "settings page",
                    }),
                    ".",
                ],
            }),
            (0, a.jsx)("div", {
                className: u.buttonContainer,
                children: (0, a.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: u.button,
                    children: (0, a.jsx)(l.zxk, {
                        variant: "primary",
                        text: "Reset Daily Cap",
                        onClick: () => (0, s.EG)(),
                    }),
                }),
            }),
            (0, a.jsxs)("div", {
                className: u.recent,
                children: [(0, a.jsx)(c.Z, {}), (0, a.jsx)(o.Z, {})],
            }),
        ],
    });
}
