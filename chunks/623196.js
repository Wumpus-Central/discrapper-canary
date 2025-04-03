n.d(t, { Z: () => E }), n(47120), n(773603);
var r = n(200651),
    i = n(192379),
    s = n(913527),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(668781),
    d = n(594174),
    u = n(63063),
    m = n(88658),
    g = n(398826),
    p = n(575356),
    h = n(838436),
    f = n(726985),
    b = n(981631),
    N = n(388032),
    x = n(891170);
let _ = (e) => {
    (0, o.ZDy)(async () => {
        let { default: t } = await n.e('25120').then(n.bind(n, 926281));
        return (n) =>
            (0, r.jsx)(t, {
                modalProps: n,
                settings: e
            });
    });
};
function E() {
    let e = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, l.cj)([p.Z], () => ({
            currentHarvestType: p.Z.harvestType,
            awaitingInitialRequest: p.Z.requestingHarvest
        })),
        [s, E] = i.useState(!1);
    if (null == e) return null;
    let j = (0, m.$6)(t, e) || n,
        O = null != t && a()().diff(a()(t.created_at), 'days') < b.eBq,
        C = j && O,
        S = () => {
            _({
                header: N.NW.string(N.t.jxXMEx),
                body: N.NW.format(N.t.fSv59f, { helpdeskArticle: u.Z.getArticleURL(b.BhN.GDPR_PACKAGE_CONTENTS) }),
                confirmText: N.NW.string(N.t.NYgNg4),
                cancelText: N.NW.string(N.t.jpVjsr),
                confirmButtonColor: o.zxk.Colors.BRAND,
                onConfirm: (e) => {
                    E(!0),
                        (0, g.h)(e)
                            .then(
                                (e) => {
                                    null != e && null != e.body
                                        ? c.Z.show({ body: N.NW.string(N.t['6Nmv4u']) })
                                        : c.Z.show({
                                              title: N.NW.string(N.t.OjbtDg),
                                              body: N.NW.string(N.t['0F5Jys'])
                                          });
                                },
                                () =>
                                    c.Z.show({
                                        title: N.NW.string(N.t.OjbtDg),
                                        body: N.NW.string(N.t['0F5Jys'])
                                    })
                            )
                            .finally(() => E(!1));
                }
            });
        };
    return (0, r.jsxs)(h.U, {
        setting: f.s6.PRIVACY_DATA_REQUEST_V2,
        children: [
            (0, r.jsx)(h.H, {
                header: N.NW.string(N.t.XAHCgI),
                description: N.NW.format(N.t.P3kNfn, { helpdeskArticle: u.Z.getArticleURL(b.BhN.GDPR_REQUEST_DATA) })
            }),
            C
                ? (0, r.jsx)(o.Zbd, {
                      className: x.card,
                      children: (0, r.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: N.NW.format(N.t.RNDlV1, { date: a()(t.created_at).add(b.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, r.jsx)('div', {
                      className: x.button,
                      children: (0, r.jsx)(o.ua7, {
                          text: e.isStaff() ? N.NW.string(N.t.ZPQLHx) : e.verified ? null : N.NW.string(N.t['c1f88/']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: i } = e;
                              return (0, r.jsx)(o.zxk, {
                                  disabled: j,
                                  onClick: S,
                                  onMouseEnter: t,
                                  onMouseLeave: i,
                                  look: o.zxk.Looks.FILLED,
                                  color: o.zxk.Colors.BRAND,
                                  submitting: s || n,
                                  children: N.NW.string(N.t.dmBSKi)
                              });
                          }
                      })
                  })
        ]
    });
}
