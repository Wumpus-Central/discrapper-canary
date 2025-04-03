n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var a = n(442837),
    l = n(814443),
    i = n(594174),
    o = n(681619),
    s = n(534514),
    c = n(616257);
let d = [
    {
        key: 'user',
        cellClassName: s.userCell,
        render(e) {
            var t;
            let { user: n, key: r } = e;
            return null != (t = null == n ? void 0 : n.username) ? t : r;
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
    let e = (0, a.Wu)([l.Z, i.default], () =>
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
        : (0, r.jsx)(o.Z, {
              className: c.panel,
              columns: d,
              rowClassName: s.row,
              data: e
          });
}
