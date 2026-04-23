a.d(t, { A: () => x });
var n = a(627968);
a(64700);
var l = a(989349),
    i = a.n(l),
    s = a(311907),
    r = a(554146),
    o = a(105565),
    d = a(771781),
    c = a(303054),
    u = a(193337);
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
    h = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${r.M[a]}`;
            },
        },
    ],
    p = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${r.M[t]}`;
            },
        },
    ];
function x() {
    let e = (0, s.bG)([o.A], () => o.A.getDCFEvents()),
        t = (0, d.Ay)((e) => e.candidates),
        a = (0, d.Ay)((e) => e.lastWinnerTime),
        l = 0 !== a ? i()(a).fromNow() : "n/a",
        x = (0, d.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        g = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: m(t) + a.toString(), event: m(t), dismissibleContent: a };
        }),
        v = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, n.jsxs)("div", {
        className: u.KE,
        children: [
            (0, n.jsxs)("div", { className: u.pq, children: ["Last winner time: ", l] }),
            (0, n.jsx)("br", {}),
            (0, n.jsxs)("div", { className: u.pq, children: ["Last winner: ", null != x ? r.M[x] : "None"] }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("div", { className: u.uI, children: (0, n.jsx)(c.A, { className: u.Th, columns: p, data: v }) }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)(c.A, { columns: h, data: g }),
        ],
    });
}
