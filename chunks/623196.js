n.d(t, { Z: () => C }), n(388685), n(457542);
var i = n(200651),
    r = n(192379),
    s = n(913527),
    l = n.n(s),
    a = n(442837),
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
    _ = n(388032),
    x = n(891170);
let E = (e) => {
    (0, o.ZDy)(async () => {
        let { default: t } = await n.e('25120').then(n.bind(n, 926281));
        return (n) =>
            (0, i.jsx)(t, {
                modalProps: n,
                settings: e
            });
    });
};
function C() {
    let e = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, a.cj)([g.Z], () => ({
            currentHarvestType: g.Z.harvestType,
            awaitingInitialRequest: g.Z.requestingHarvest
        })),
        [s, C] = r.useState(!1);
    if (null == e) return null;
    let j = (0, m.$6)(t, e) || n,
        O = null != t && l()().diff(l()(t.created_at), 'days') < b.eBq,
        S = j && O,
        v = () => {
            E({
                header: _.intl.string(_.t.jxXMEx),
                body: _.intl.format(_.t.fSv59f, { helpdeskArticle: u.Z.getArticleURL(b.BhN.GDPR_PACKAGE_CONTENTS) }),
                confirmText: _.intl.string(_.t.NYgNg4),
                cancelText: _.intl.string(_.t.jpVjsr),
                confirmButtonColor: o.zxk.Colors.BRAND,
                onConfirm: (e) => {
                    C(!0),
                        (0, p.h)(e)
                            .then(
                                (e) => {
                                    null != e && null != e.body
                                        ? c.Z.show({ body: _.intl.string(_.t['6Nmv4u']) })
                                        : c.Z.show({
                                              title: _.intl.string(_.t.OjbtDg),
                                              body: _.intl.string(_.t['0F5Jys'])
                                          });
                                },
                                () =>
                                    c.Z.show({
                                        title: _.intl.string(_.t.OjbtDg),
                                        body: _.intl.string(_.t['0F5Jys'])
                                    })
                            )
                            .finally(() => C(!1));
                }
            });
        };
    return (0, i.jsxs)(h.U, {
        setting: f.s6.PRIVACY_DATA_REQUEST_V2,
        children: [
            (0, i.jsx)(h.H, {
                header: _.intl.string(_.t.XAHCgI),
                description: _.intl.format(_.t.P3kNfn, { helpdeskArticle: u.Z.getArticleURL(b.BhN.GDPR_REQUEST_DATA) })
            }),
            S
                ? (0, i.jsx)(o.Zbd, {
                      className: x.card,
                      children: (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: _.intl.format(_.t.RNDlV1, { date: l()(t.created_at).add(b.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, i.jsx)('div', {
                      className: x.button,
                      children: (0, i.jsx)(o.ua7, {
                          text: e.isStaff() ? _.intl.string(_.t.ZPQLHx) : e.verified ? null : _.intl.string(_.t['c1f88/']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: r } = e;
                              return (0, i.jsx)(o.zxk, {
                                  disabled: j,
                                  onClick: v,
                                  onMouseEnter: t,
                                  onMouseLeave: r,
                                  look: o.zxk.Looks.FILLED,
                                  color: o.zxk.Colors.BRAND,
                                  submitting: s || n,
                                  children: _.intl.string(_.t.dmBSKi)
                              });
                          }
                      })
                  })
        ]
    });
}
