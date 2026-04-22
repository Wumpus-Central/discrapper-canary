a.d(t, { A: () => m });
var n = a(627968);
a(64700);
var l = a(311907),
    i = a(834730),
    s = a(21119),
    r = a(287809),
    o = a(303054),
    d = a(465153),
    c = a(505206);
let u = [
    {
        key: "user",
        cellClassName: d.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, n.jsx)(i.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: d.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, n.jsx)(i.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: d.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, n.jsx)(i.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: d.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function m() {
    let e = (0, l.yK)([s.A, r.default], () =>
        s.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
            return { user: r.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
        }),
    );
    return 0 === e.length ? null : (0, n.jsx)(o.A, { className: c.nd, columns: u, rowClassName: d.nM, data: e });
}
