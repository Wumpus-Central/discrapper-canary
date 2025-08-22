n.d(t, { Z: () => b }), n(388685);
var a = n(951288);
n(647438);
var r = n(913527),
    l = n.n(r),
    i = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(713284),
    d = n(883904),
    u = n(211644),
    m = n(675478),
    x = n(681619),
    h = n(882754);
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
    f = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: n } = e;
                return "".concat(t, " ").concat(s.z[n]);
            },
        },
    ],
    v = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return "".concat(s.z[t]);
            },
        },
    ];
function b() {
    let e = (0, i.e7)([c.Z], () => c.Z.getDCFEvents()),
        t = (0, u.ZP)((e) => e.candidates),
        n = (0, u.ZP)((e) => e.lastWinnerTime),
        r = 0 !== n ? l()(n).fromNow() : "n/a",
        b = (0, u.ZP)((e) => e.recentlyShown[0]),
        j = e.map((e) => {
            let { eventType: t, dismissibleContent: n } = e;
            return {
                key: p(t) + n.toString(),
                event: p(t),
                dismissibleContent: n,
            };
        }),
        g = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e,
        }));
    return (0, a.jsxs)("div", {
        className: h.panelContainer,
        children: [
            (0, a.jsxs)("div", {
                className: h.buttonContainer,
                children: [
                    (0, a.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: h.button,
                        children: (0, a.jsx)(o.zxk, {
                            variant: "primary",
                            text: "Reset Daily Cap",
                            onClick: () => (0, d.EG)(),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: h.button,
                        children: (0, a.jsx)(o.zxk, {
                            variant: "primary",
                            text: "Clear All Dismissed Contents",
                            onClick: m.sr,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: h.button,
                        children: (0, a.jsx)(o.zxk, {
                            variant: "primary",
                            text: "Check All Dismissed Contents",
                            onClick: m.bE,
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsxs)("div", {
                className: h.info,
                children: ["Last winner time: ", r],
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsxs)("div", {
                className: h.info,
                children: ["Last winner: ", null != b ? s.z[b] : "None"],
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("div", {
                className: h.candidatesTableContainer,
                children: (0, a.jsx)(x.Z, {
                    className: h.candidatesTable,
                    columns: v,
                    data: g,
                }),
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)(x.Z, {
                columns: f,
                data: j,
            }),
        ],
    });
}
