n.d(t, { A: () => m });
var a = n(627968);
n(64700);
var s = n(311907),
    i = n(397927),
    l = n(21119),
    r = n(287809),
    o = n(303054),
    d = n(987986),
    c = n(661251);
let u = [
    {
        key: "user",
        cellClassName: d.iL,
        render(e) {
            let { user: t, key: n } = e;
            return t?.username ?? n;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, a.jsx)(i.Text, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: d.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, a.jsx)(i.Text, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: d.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, a.jsx)(i.Text, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: d.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function m() {
    let e = (0, s.yK)([l.A, r.default], () =>
        l.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: n, vcProbability: a, isFriend: s } = e;
            return { user: r.default.getUser(t), affinity: n, vcProbability: a, isFriend: s, key: t };
        }),
    );
    return 0 === e.length ? null : (0, a.jsx)(o.A, { className: c.nd, columns: u, rowClassName: d.nM, data: e });
}
