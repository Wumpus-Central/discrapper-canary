a.d(t, { Z: () => m });
var n = a(255367);
a(73800);
var r = a(442837),
    l = a(481060),
    i = a(752048),
    s = a(594174),
    o = a(681619),
    c = a(534514),
    d = a(616257);
let u = [
    {
        key: 'user',
        cellClassName: c.userCell,
        render(e) {
            var t;
            let { user: a, key: n } = e;
            return null != (t = null == a ? void 0 : a.username) ? t : n;
        }
    },
    {
        key: 'affinity',
        renderHeader: () =>
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/semibold',
                children: 'COMMUNICATION AFFINITY'
            }),
        cellClassName: c.affinityCell,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        }
    },
    {
        key: 'vcProbability',
        renderHeader: () =>
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/semibold',
                children: 'VOICE AFFINITY'
            }),
        cellClassName: c.affinityCell,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        }
    }
];
function m() {
    let e = (0, r.Wu)([i.Z, s.default], () =>
        i.Z.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: n } = e;
            return {
                user: s.default.getUser(t),
                affinity: a,
                vcProbability: n,
                key: t
            };
        })
    );
    return 0 === e.length
        ? null
        : (0, n.jsx)(o.Z, {
              className: d.panel,
              columns: u,
              rowClassName: c.row,
              data: e
          });
}
