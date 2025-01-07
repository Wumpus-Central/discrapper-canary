n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120),
    n(773603);
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
    h = n(398826),
    g = n(575356),
    p = n(838436),
    x = n(726985),
    S = n(981631),
    T = n(388032),
    E = n(565696);
let C = (e) => {
    (0, o.openModalLazy)(async () => {
        let { default: t } = await n.e('25120').then(n.bind(n, 926281));
        return (n) =>
            (0, i.jsx)(t, {
                modalProps: n,
                settings: e
            });
    });
};
function _() {
    let e = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, a.cj)([g.Z], () => ({
            currentHarvestType: g.Z.harvestType,
            awaitingInitialRequest: g.Z.requestingHarvest
        })),
        [r, _] = s.useState(!1);
    if (null == e) return null;
    let f = (0, m.$6)(t, e) || n,
        I = null != t && l()().diff(l()(t.created_at), 'days') < S.eBq,
        N = f && I,
        A = () => {
            C({
                header: T.intl.string(T.t.jxXMEx),
                body: T.intl.format(T.t.fSv59f, { helpdeskArticle: u.Z.getArticleURL(S.BhN.GDPR_PACKAGE_CONTENTS) }),
                confirmText: T.intl.string(T.t.NYgNg4),
                cancelText: T.intl.string(T.t.jpVjsr),
                confirmButtonColor: o.Button.Colors.BRAND,
                onConfirm: (e) => {
                    _(!0),
                        (0, h.h)(e)
                            .then(
                                (e) => {
                                    null != e && null != e.body
                                        ? c.Z.show({ body: T.intl.string(T.t['6Nmv4u']) })
                                        : c.Z.show({
                                              title: T.intl.string(T.t.OjbtDg),
                                              body: T.intl.string(T.t['0F5Jys'])
                                          });
                                },
                                () =>
                                    c.Z.show({
                                        title: T.intl.string(T.t.OjbtDg),
                                        body: T.intl.string(T.t['0F5Jys'])
                                    })
                            )
                            .finally(() => _(!1));
                }
            });
        };
    return (0, i.jsxs)(p.U, {
        setting: x.s6.PRIVACY_DATA_REQUEST,
        children: [
            (0, i.jsx)(p.H, {
                header: T.intl.string(T.t.XAHCgI),
                description: T.intl.format(T.t.P3kNfn, { helpdeskArticle: u.Z.getArticleURL(S.BhN.GDPR_REQUEST_DATA) })
            }),
            N
                ? (0, i.jsx)(o.Card, {
                      className: E.card,
                      children: (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: T.intl.format(T.t.RNDlV1, { date: l()(t.created_at).add(S.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, i.jsx)('div', {
                      className: E.button,
                      children: (0, i.jsx)(o.Tooltip, {
                          text: e.isStaff() ? T.intl.string(T.t.ZPQLHx) : e.verified ? null : T.intl.string(T.t['c1f88/']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: s } = e;
                              return (0, i.jsx)(o.Button, {
                                  disabled: f,
                                  onClick: A,
                                  onMouseEnter: t,
                                  onMouseLeave: s,
                                  look: o.Button.Looks.FILLED,
                                  color: o.Button.Colors.BRAND,
                                  submitting: r || n,
                                  children: T.intl.string(T.t.dmBSKi)
                              });
                          }
                      })
                  })
        ]
    });
}
