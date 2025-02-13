n.d(t, { Z: () => I }), n(47120), n(773603);
var i = n(200651),
    s = n(192379),
    l = n(913527),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(668781),
    d = n(594174),
    u = n(63063),
    h = n(88658),
    m = n(398826),
    g = n(575356),
    x = n(838436),
    _ = n(726985),
    p = n(981631),
    E = n(388032),
    C = n(202356);
let N = (e) => {
    (0, o.ZDy)(async () => {
        let { default: t } = await n.e('25120').then(n.bind(n, 926281));
        return (n) =>
            (0, i.jsx)(t, {
                modalProps: n,
                settings: e
            });
    });
};
function I() {
    let e = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, a.cj)([g.Z], () => ({
            currentHarvestType: g.Z.harvestType,
            awaitingInitialRequest: g.Z.requestingHarvest
        })),
        [l, I] = s.useState(!1);
    if (null == e) return null;
    let f = (0, h.$6)(t, e) || n,
        T = null != t && r()().diff(r()(t.created_at), 'days') < p.eBq,
        S = f && T,
        j = () => {
            N({
                header: E.intl.string(E.t.jxXMEx),
                body: E.intl.format(E.t.fSv59f, { helpdeskArticle: u.Z.getArticleURL(p.BhN.GDPR_PACKAGE_CONTENTS) }),
                confirmText: E.intl.string(E.t.NYgNg4),
                cancelText: E.intl.string(E.t.jpVjsr),
                confirmButtonColor: o.zxk.Colors.BRAND,
                onConfirm: (e) => {
                    I(!0),
                        (0, m.h)(e)
                            .then(
                                (e) => {
                                    null != e && null != e.body
                                        ? c.Z.show({ body: E.intl.string(E.t['6Nmv4u']) })
                                        : c.Z.show({
                                              title: E.intl.string(E.t.OjbtDg),
                                              body: E.intl.string(E.t['0F5Jys'])
                                          });
                                },
                                () =>
                                    c.Z.show({
                                        title: E.intl.string(E.t.OjbtDg),
                                        body: E.intl.string(E.t['0F5Jys'])
                                    })
                            )
                            .finally(() => I(!1));
                }
            });
        };
    return (0, i.jsxs)(x.U, {
        setting: _.s6.PRIVACY_DATA_REQUEST_V2,
        children: [
            (0, i.jsx)(x.H, {
                header: E.intl.string(E.t.XAHCgI),
                description: E.intl.format(E.t.P3kNfn, { helpdeskArticle: u.Z.getArticleURL(p.BhN.GDPR_REQUEST_DATA) })
            }),
            S
                ? (0, i.jsx)(o.Zbd, {
                      className: C.card,
                      children: (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: E.intl.format(E.t.RNDlV1, { date: r()(t.created_at).add(p.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, i.jsx)('div', {
                      className: C.button,
                      children: (0, i.jsx)(o.ua7, {
                          text: e.isStaff() ? E.intl.string(E.t.ZPQLHx) : e.verified ? null : E.intl.string(E.t['c1f88/']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: s } = e;
                              return (0, i.jsx)(o.zxk, {
                                  disabled: f,
                                  onClick: j,
                                  onMouseEnter: t,
                                  onMouseLeave: s,
                                  look: o.zxk.Looks.FILLED,
                                  color: o.zxk.Colors.BRAND,
                                  submitting: l || n,
                                  children: E.intl.string(E.t.dmBSKi)
                              });
                          }
                      })
                  })
        ]
    });
}
