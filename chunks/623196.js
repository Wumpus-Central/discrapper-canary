n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    s = n(192379),
    r = n(913527),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(668781),
    d = n(594174),
    u = n(63063),
    m = n(88658),
    g = n(398826),
    h = n(575356),
    p = n(838436),
    x = n(726985),
    f = n(981631),
    _ = n(388032),
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
function T() {
    let e = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, l.cj)([h.Z], () => ({
            currentHarvestType: h.Z.harvestType,
            awaitingInitialRequest: h.Z.requestingHarvest
        })),
        [r, T] = s.useState(!1);
    if (null == e) return null;
    let S = (0, m.$6)(t, e) || n,
        b = null != t && a()().diff(a()(t.created_at), 'days') < f.eBq,
        I = S && b,
        N = () => {
            C({
                header: _.intl.string(_.t.jxXMEx),
                body: _.intl.format(_.t.fSv59f, { helpdeskArticle: u.Z.getArticleURL(f.BhN.GDPR_PACKAGE_CONTENTS) }),
                confirmText: _.intl.string(_.t.NYgNg4),
                cancelText: _.intl.string(_.t.jpVjsr),
                confirmButtonColor: o.Button.Colors.BRAND,
                onConfirm: (e) => {
                    T(!0),
                        (0, g.h)(e)
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
                            .finally(() => T(!1));
                }
            });
        };
    return (0, i.jsxs)(p.U, {
        setting: x.s6.PRIVACY_DATA_REQUEST,
        children: [
            (0, i.jsx)(p.H, {
                header: _.intl.string(_.t.XAHCgI),
                description: _.intl.format(_.t.P3kNfn, { helpdeskArticle: u.Z.getArticleURL(f.BhN.GDPR_REQUEST_DATA) })
            }),
            I
                ? (0, i.jsx)(o.Card, {
                      className: E.card,
                      children: (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: _.intl.format(_.t.RNDlV1, { date: a()(t.created_at).add(f.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, i.jsx)('div', {
                      className: E.button,
                      children: (0, i.jsx)(o.Tooltip, {
                          text: e.isStaff() ? _.intl.string(_.t.ZPQLHx) : e.verified ? null : _.intl.string(_.t['c1f88/']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: s } = e;
                              return (0, i.jsx)(o.Button, {
                                  disabled: S,
                                  onClick: N,
                                  onMouseEnter: t,
                                  onMouseLeave: s,
                                  look: o.Button.Looks.FILLED,
                                  color: o.Button.Colors.BRAND,
                                  submitting: r || n,
                                  children: _.intl.string(_.t.dmBSKi)
                              });
                          }
                      })
                  })
        ]
    });
}
