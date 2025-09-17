n.d(t, { Z: () => h });
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(230711),
    s = n(883904),
    o = n(686534),
    c = n(227157),
    d = n(775195),
    u = n(981631),
    m = n(393146);
function h() {
    let e = r.useCallback(() => {
        i.Z.open(u.oAB.DISMISSIBLE_CONTENT_OPTIONS);
    }, []);
    return (0, a.jsxs)(l.Ttm, {
        className: m.panelContainer,
        children: [
            (0, a.jsxs)("p", {
                className: m.settings,
                children: [
                    "For more options, see the ",
                    (0, a.jsx)(l.eee, {
                        onClick: e,
                        children: "settings page",
                    }),
                    ".",
                ],
            }),
            (0, a.jsxs)("div", {
                className: m.dailyCapContainer,
                children: [
                    (0, a.jsx)(o.Z, { hideBorder: !0 }),
                    (0, a.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: m.button,
                        children: (0, a.jsx)(l.zxk, {
                            variant: "primary",
                            text: "Reset Daily Cap",
                            onClick: () => (0, s.EG)(),
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: m.recent,
                children: [(0, a.jsx)(d.Z, {}), (0, a.jsx)(c.Z, {})],
            }),
        ],
    });
}
