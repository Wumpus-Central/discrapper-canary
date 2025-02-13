n.d(t, { Z: () => u });
var a = n(200651);
n(192379);
var r = n(442837),
    l = n(814443),
    i = n(594174),
    o = n(681619),
    s = n(609319),
    c = n(658951);
let d = [
    {
        key: 'user',
        cellClassName: s.userCell,
        render(e) {
            var t;
            let { user: n, key: a } = e;
            return null !== (t = null == n ? void 0 : n.username) && void 0 !== t ? t : a;
        }
    },
    {
        key: 'affinity',
        cellClassName: s.affinityCell,
        render(e) {
            let { affinity: t } = e;
            return ''.concat(t);
        }
    }
];
function u() {
    let e = (0, r.Wu)([l.Z, i.default], () =>
        l.Z.getUserAffinities().map((e) => {
            let { user_id: t, affinity: n } = e;
            return {
                user: i.default.getUser(t),
                affinity: n,
                key: t
            };
        })
    );
    return 0 === e.length
        ? null
        : (0, a.jsx)(o.Z, {
              className: c.panel,
              columns: d,
              rowClassName: s.row,
              data: e
          });
}
