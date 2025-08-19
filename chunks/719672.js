a.d(t, { Z: () => f }), a(388685);
var n = a(951288);
a(647438);
var r = a(913527),
    l = a.n(r),
    i = a(442837),
    s = a(704215),
    o = a(481060),
    c = a(713284),
    d = a(883904),
    u = a(211644),
    m = a(675478),
    x = a(681619),
    h = a(882754);
let p = (e) => {
        switch (e) {
            case c.D.DC_DISMISSED:
                return "DISMISS:";
            case c.D.DC_SHOWN:
                return "SHOW:";
            case c.D.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    v = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return "".concat(t, " ").concat(s.z[a]);
            },
        },
    ],
    b = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return "".concat(s.z[t]);
            },
        },
    ];
function f() {
    let e = (0, i.e7)([c.Z], () => c.Z.getDCFEvents()),
        t = (0, u.ZP)((e) => e.candidates),
        a = (0, u.ZP)((e) => e.lastWinnerTime),
        r = 0 !== a ? l()(a).fromNow() : "n/a",
        f = (0, u.ZP)((e) => e.recentlyShown[0]),
        g = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return {
                key: p(t) + a.toString(),
                event: p(t),
                dismissibleContent: a,
            };
        }),
        j = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e,
        }));
    return (0, n.jsxs)("div", {
        className: h.panelContainer,
        children: [
            (0, n.jsxs)("div", {
                className: h.buttonContainer,
                children: [
                    (0, n.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: h.button,
                        children: (0, n.jsx)(o.zxk, {
                            variant: "primary",
                            text: "Reset Daily Cap",
                            onClick: () => (0, d.EG)(),
                        }),
                    }),
                    (0, n.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: h.button,
                        children: (0, n.jsx)(o.zxk, {
                            variant: "primary",
                            text: "Clear All Dismissed Contents",
                            onClick: m.sr,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: h.button,
                        children: (0, n.jsx)(o.zxk, {
                            variant: "primary",
                            text: "Check All Dismissed Contents",
                            onClick: m.bE,
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsxs)("div", {
                className: h.info,
                children: ["Last winner time: ", r],
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsxs)("div", {
                className: h.info,
                children: ["Last winner: ", null != f ? s.z[f] : "None"],
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("div", {
                className: h.candidatesTableContainer,
                children: (0, n.jsx)(x.Z, {
                    className: h.candidatesTable,
                    columns: b,
                    data: j,
                }),
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)(x.Z, {
                columns: v,
                data: g,
            }),
        ],
    });
}
