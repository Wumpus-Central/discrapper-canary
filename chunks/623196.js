n.d(t, { Z: () => T }), n(47120), n(773603);
var i = n(200651),
    s = n(192379),
    r = n(913527),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(668781),
    d = n(594174),
    u = n(63063),
    m = n(88658),
    g = n(398826),
    h = n(575356),
    x = n(838436),
    _ = n(726985),
    p = n(981631),
    E = n(388032),
    C = n(359579);
let f = (e) => {
    (0, o.ZDy)(async () => {
        let { default: t } = await n.e('25120').then(n.bind(n, 926281));
        return (n) =>
            (0, i.jsx)(t, {
                modalProps: n,
                settings: e
            });
    });
};
function T() {
    let e = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, a.cj)([h.Z], () => ({
            currentHarvestType: h.Z.harvestType,
            awaitingInitialRequest: h.Z.requestingHarvest
        })),
        [r, T] = s.useState(!1);
    if (null == e) return null;
    let N = (0, m.$6)(t, e) || n,
        S = null != t && l()().diff(l()(t.created_at), 'days') < p.eBq,
        I = N && S,
        b = () => {
            f({
                header: E.intl.string(E.t.jxXMEx),
                body: E.intl.format(E.t.fSv59f, { helpdeskArticle: u.Z.getArticleURL(p.BhN.GDPR_PACKAGE_CONTENTS) }),
                confirmText: E.intl.string(E.t.NYgNg4),
                cancelText: E.intl.string(E.t.jpVjsr),
                confirmButtonColor: o.zxk.Colors.BRAND,
                onConfirm: (e) => {
                    T(!0),
                        (0, g.h)(e)
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
                            .finally(() => T(!1));
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
            I
                ? (0, i.jsx)(o.Zbd, {
                      className: C.card,
                      children: (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: E.intl.format(E.t.RNDlV1, { date: l()(t.created_at).add(p.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, i.jsx)('div', {
                      className: C.button,
                      children: (0, i.jsx)(o.ua7, {
                          text: e.isStaff() ? E.intl.string(E.t.ZPQLHx) : e.verified ? null : E.intl.string(E.t['c1f88/']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: s } = e;
                              return (0, i.jsx)(o.zxk, {
                                  disabled: N,
                                  onClick: b,
                                  onMouseEnter: t,
                                  onMouseLeave: s,
                                  look: o.zxk.Looks.FILLED,
                                  color: o.zxk.Colors.BRAND,
                                  submitting: r || n,
                                  children: E.intl.string(E.t.dmBSKi)
                              });
                          }
                      })
                  })
        ]
    });
}
