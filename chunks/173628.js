n.d(t, { A: () => m });
var a = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    r = n(21119),
    s = n(287809),
    o = n(303054),
    c = n(987986),
    d = n(661251);
let u = [
    {
        key: "user",
        cellClassName: c.iL,
        render(e) {
            var t;
            let { user: n, key: a } = e;
            return null != (t = null == n ? void 0 : n.username) ? t : a;
        },
    },
    {
        key: "affinity",
        renderHeader: () =>
            (0, a.jsx)(i.Text, {
                variant: "text-sm/semibold",
                children: "COMMUNICATION AFFINITY",
            }),
        cellClassName: c.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () =>
            (0, a.jsx)(i.Text, {
                variant: "text-sm/semibold",
                children: "VOICE AFFINITY",
            }),
        cellClassName: c.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () =>
            (0, a.jsx)(i.Text, {
                variant: "text-sm/semibold",
                children: "IS FRIEND",
            }),
        cellClassName: c.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function m() {
    let e = (0, l.yK)([r.A, s.default], () =>
        r.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: n, vcProbability: a, isFriend: l } = e;
            return {
                user: s.default.getUser(t),
                affinity: n,
                vcProbability: a,
                isFriend: l,
                key: t,
            };
        }),
    );
    return 0 === e.length
        ? null
        : (0, a.jsx)(o.A, {
              className: d.nd,
              columns: u,
              rowClassName: c.nM,
              data: e,
          });
}
