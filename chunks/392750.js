n.d(t, { Z: () => m });
var a = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    r = n(752048),
    s = n(594174),
    o = n(681619),
    c = n(996279),
    d = n(451429);
let u = [
    {
        key: "user",
        cellClassName: c.userCell,
        render(e) {
            var t;
            let { user: n, key: a } = e;
            return null != (t = null == n ? void 0 : n.username) ? t : a;
        },
    },
    {
        key: "affinity",
        renderHeader: () =>
            (0, a.jsx)(l.Text, {
                variant: "text-sm/semibold",
                children: "COMMUNICATION AFFINITY",
            }),
        cellClassName: c.affinityCell,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () =>
            (0, a.jsx)(l.Text, {
                variant: "text-sm/semibold",
                children: "VOICE AFFINITY",
            }),
        cellClassName: c.affinityCell,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
];
function m() {
    let e = (0, i.Wu)([r.Z, s.default], () =>
        r.Z.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: n, vcProbability: a } = e;
            return {
                user: s.default.getUser(t),
                affinity: n,
                vcProbability: a,
                key: t,
            };
        }),
    );
    return 0 === e.length
        ? null
        : (0, a.jsx)(o.Z, {
              className: d.panel,
              columns: u,
              rowClassName: c.row,
              data: e,
          });
}
