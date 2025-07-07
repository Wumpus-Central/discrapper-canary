(n.d(t, { Z: () => j }), n(388685), n(457542));
var i = n(255367),
    r = n(73800),
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
    x = n(388032),
    _ = n(891170);
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
function j() {
    let e = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, a.cj)([g.Z], () => ({
            currentHarvestType: g.Z.harvestType,
            awaitingInitialRequest: g.Z.requestingHarvest
        })),
        [s, j] = r.useState(!1);
    if (null == e) return null;
    let O = (0, m.$6)(t, e) || n,
        C = null != t && l()().diff(l()(t.created_at), 'days') < b.eBq,
        S = O && C,
        v = () => {
            E({
                header: x.intl.string(x.t.jxXMEx),
                body: x.intl.format(x.t.fSv59f, { helpdeskArticle: u.Z.getArticleURL(b.BhN.GDPR_PACKAGE_CONTENTS) }),
                confirmText: x.intl.string(x.t.NYgNg4),
                cancelText: x.intl.string(x.t.jpVjsr),
                confirmButtonColor: o.zxk.Colors.BRAND,
                onConfirm: (e) => {
                    (j(!0),
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
                            .finally(() => j(!1)));
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
            S
                ? (0, i.jsx)(o.Zbd, {
                      className: _.card,
                      children: (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: x.intl.format(x.t.RNDlV1, { date: l()(t.created_at).add(b.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, i.jsx)('div', {
                      className: _.button,
                      children: (0, i.jsx)(o.ua7, {
                          text: e.isStaff() ? x.intl.string(x.t.ZPQLHx) : e.verified ? null : x.intl.string(x.t['c1f88/']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: r } = e;
                              return (0, i.jsx)(o.zxk, {
                                  disabled: O,
                                  onClick: v,
                                  onMouseEnter: t,
                                  onMouseLeave: r,
                                  look: o.zxk.Looks.FILLED,
                                  color: o.zxk.Colors.BRAND,
                                  submitting: s || n,
                                  children: x.intl.string(x.t.dmBSKi)
                              });
                          }
                      })
                  })
        ]
    });
}
