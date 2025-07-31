(n.d(t, { Z: () => O }), n(388685), n(457542));
var i = n(255367),
    r = n(73800),
    s = n(913527),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(668781),
    d = n(594174),
    u = n(63063),
    m = n(88658),
    p = n(398826),
    g = n(575356),
    h = n(838436),
    f = n(726985),
    b = n(981631),
    x = n(388032),
    _ = n(891170);
let j = (e) => {
    let { onConfirm: t } = e;
    (0, o.ZDy)(async () => {
        let { default: e } = await n.e('25120').then(n.bind(n, 926281));
        return (n) =>
            (0, i.jsx)(e, {
                modalProps: n,
                onConfirm: t
            });
    });
};
function O() {
    let e = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, l.cj)([g.Z], () => ({
            currentHarvestType: g.Z.harvestType,
            awaitingInitialRequest: g.Z.requestingHarvest
        })),
        [s, O] = r.useState(!1);
    if (null == e) return null;
    let E = (0, m.$6)(t, e) || n,
        C = null != t && a()().diff(a()(t.created_at), 'days') < b.eBq,
        v = E && C,
        S = () => {
            j({
                onConfirm: (e) => {
                    (O(!0),
                        (0, p.h)(e)
                            .then(
                                (e) => {
                                    null != e && null != e.body
                                        ? c.Z.show({ body: x.intl.string(x.t['6Nmv4u']) })
                                        : c.Z.show({
                                              title: x.intl.string(x.t.OjbtDg),
                                              body: x.intl.string(x.t['0F5Jys'])
                                          });
                                },
                                (e) => {
                                    var t;
                                    let n = (null == e ? void 0 : e.message) || (null == e || null == (t = e.body) ? void 0 : t.message) || x.intl.string(x.t['0F5Jys']);
                                    c.Z.show({
                                        title: x.intl.string(x.t.OjbtDg),
                                        body: n
                                    });
                                }
                            )
                            .finally(() => O(!1)));
                }
            });
        };
    return (0, i.jsxs)(h.U, {
        setting: f.s6.PRIVACY_DATA_REQUEST_V2,
        children: [
            (0, i.jsx)(h.H, {
                header: x.intl.string(x.t.XAHCgI),
                description: x.intl.format(x.t.P3kNfn, { helpdeskArticle: u.Z.getArticleURL(b.BhN.GDPR_REQUEST_DATA) })
            }),
            v
                ? (0, i.jsx)(o.Zbd, {
                      className: _.card,
                      children: (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: x.intl.format(x.t.RNDlV1, { date: a()(t.created_at).add(b.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, i.jsx)('div', {
                      className: _.button,
                      children: (0, i.jsx)(o.ua7, {
                          text: e.isStaff() ? x.intl.string(x.t.ZPQLHx) : e.verified ? null : x.intl.string(x.t['c1f88/']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: r } = e;
                              return (0, i.jsx)(o.zxk, {
                                  variant: 'primary',
                                  text: x.intl.string(x.t.dmBSKi),
                                  disabled: E,
                                  onClick: S,
                                  onMouseEnter: t,
                                  onMouseLeave: r,
                                  loading: s || n
                              });
                          }
                      })
                  })
        ]
    });
}
