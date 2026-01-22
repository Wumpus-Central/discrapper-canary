n.d(t, { A: () => f }), n(896048);
var a = n(627968);
n(64700);
var l = n(989349),
    i = n.n(l),
    r = n(311907),
    s = n(554146),
    o = n(105565),
    c = n(771781),
    d = n(303054),
    u = n(957196);
let m = (e) => {
        switch (e) {
            case o.r.DC_DISMISSED:
                return "DISMISS:";
            case o.r.DC_SHOWN:
                return "SHOW:";
            case o.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    p = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: n } = e;
                return "".concat(t, " ").concat(s.M[n]);
            },
        },
    ],
    h = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return "".concat(s.M[t]);
            },
        },
    ];
function f() {
    let e = (0, r.bG)([o.A], () => o.A.getDCFEvents()),
        t = (0, c.Ay)((e) => e.candidates),
        n = (0, c.Ay)((e) => e.lastWinnerTime),
        l = 0 !== n ? i()(n).fromNow() : "n/a",
        f = (0, c.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        x = e.map((e) => {
            let { eventType: t, dismissibleContent: n } = e;
            return {
                key: m(t) + n.toString(),
                event: m(t),
                dismissibleContent: n,
            };
        }),
        b = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e,
        }));
    return (0, a.jsxs)("div", {
        className: u.KE,
        children: [
            (0, a.jsxs)("div", {
                className: u.pq,
                children: ["Last winner time: ", l],
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsxs)("div", {
                className: u.pq,
                children: ["Last winner: ", null != f ? s.M[f] : "None"],
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("div", {
                className: u.uI,
                children: (0, a.jsx)(d.A, {
                    className: u.Th,
                    columns: h,
                    data: b,
                }),
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)(d.A, {
                columns: p,
                data: x,
            }),
        ],
    });
}
