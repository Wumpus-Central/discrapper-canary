(n.d(t, { Z: () => O }), n(388685), n(457542));
var i = n(255367),
    r = n(73800),
    s = n(913527),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(668781),
    u = n(594174),
    m = n(63063),
    p = n(88658),
    g = n(398826),
    h = n(575356),
    f = n(838436),
    b = n(726985),
    x = n(981631),
    _ = n(388032),
    j = n(891170);
let E = (e) => {
    (0, c.ZDy)(async () => {
        let { default: t } = await n.e('25120').then(n.bind(n, 926281));
        return (n) =>
            (0, i.jsx)(t, {
                modalProps: n,
                settings: e
            });
    });
};
function O() {
    let e = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, l.cj)([h.Z], () => ({
            currentHarvestType: h.Z.harvestType,
            awaitingInitialRequest: h.Z.requestingHarvest
        })),
        [s, O] = r.useState(!1);
    if (null == e) return null;
    let C = (0, p.$6)(t, e) || n,
        v = null != t && a()().diff(a()(t.created_at), 'days') < x.eBq,
        S = C && v,
        T = () => {
            E({
                header: _.intl.string(_.t.jxXMEx),
                body: _.intl.format(_.t.fSv59f, { helpdeskArticle: m.Z.getArticleURL(x.BhN.GDPR_PACKAGE_CONTENTS) }),
                confirmText: _.intl.string(_.t.NYgNg4),
                cancelText: _.intl.string(_.t.jpVjsr),
                confirmButtonColor: o.zx.Colors.BRAND,
                onConfirm: (e) => {
                    (O(!0),
                        (0, g.h)(e)
                            .then(
                                (e) => {
                                    null != e && null != e.body
                                        ? d.Z.show({ body: _.intl.string(_.t['6Nmv4u']) })
                                        : d.Z.show({
                                              title: _.intl.string(_.t.OjbtDg),
                                              body: _.intl.string(_.t['0F5Jys'])
                                          });
                                },
                                (e) => {
                                    var t;
                                    let n = (null == e ? void 0 : e.message) || (null == e || null == (t = e.body) ? void 0 : t.message) || _.intl.string(_.t['0F5Jys']);
                                    d.Z.show({
                                        title: _.intl.string(_.t.OjbtDg),
                                        body: n
                                    });
                                }
                            )
                            .finally(() => O(!1)));
                }
            });
        };
    return (0, i.jsxs)(f.U, {
        setting: b.s6.PRIVACY_DATA_REQUEST_V2,
        children: [
            (0, i.jsx)(f.H, {
                header: _.intl.string(_.t.XAHCgI),
                description: _.intl.format(_.t.P3kNfn, { helpdeskArticle: m.Z.getArticleURL(x.BhN.GDPR_REQUEST_DATA) })
            }),
            S
                ? (0, i.jsx)(c.Zbd, {
                      className: j.card,
                      children: (0, i.jsx)(c.Text, {
                          variant: 'text-md/normal',
                          children: _.intl.format(_.t.RNDlV1, { date: a()(t.created_at).add(x.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, i.jsx)('div', {
                      className: j.button,
                      children: (0, i.jsx)(c.ua7, {
                          text: e.isStaff() ? _.intl.string(_.t.ZPQLHx) : e.verified ? null : _.intl.string(_.t['c1f88/']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: r } = e;
                              return (0, i.jsx)(c.zxk, {
                                  variant: 'primary',
                                  text: _.intl.string(_.t.dmBSKi),
                                  disabled: C,
                                  onClick: T,
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
