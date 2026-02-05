n.d(t, { A: () => p });
var a = n(627968);
n(64700);
var s = n(989349),
    i = n.n(s),
    l = n(311907),
    r = n(554146),
    o = n(105565),
    d = n(771781),
    c = n(303054),
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
    h = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: n } = e;
                return `${t} ${r.M[n]}`;
            },
        },
    ],
    x = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${r.M[t]}`;
            },
        },
    ];
function p() {
    let e = (0, l.bG)([o.A], () => o.A.getDCFEvents()),
        t = (0, d.Ay)((e) => e.candidates),
        n = (0, d.Ay)((e) => e.lastWinnerTime),
        s = 0 !== n ? i()(n).fromNow() : "n/a",
        p = (0, d.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        g = e.map((e) => {
            let { eventType: t, dismissibleContent: n } = e;
            return { key: m(t) + n.toString(), event: m(t), dismissibleContent: n };
        }),
        _ = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, a.jsxs)("div", {
        className: u.KE,
        children: [
            (0, a.jsxs)("div", { className: u.pq, children: ["Last winner time: ", s] }),
            (0, a.jsx)("br", {}),
            (0, a.jsxs)("div", { className: u.pq, children: ["Last winner: ", null != p ? r.M[p] : "None"] }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("div", { className: u.uI, children: (0, a.jsx)(c.A, { className: u.Th, columns: x, data: _ }) }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)(c.A, { columns: h, data: g }),
        ],
    });
}
