n.d(t, { default: () => x });
var r = n(200651),
    l = n(192379),
    a = n(286379),
    i = n(442837),
    s = n(481060),
    o = n(565138),
    c = n(797614),
    u = n(769654),
    d = n(695346),
    b = n(430824),
    f = n(88658),
    m = n(401416),
    g = n(920133),
    S = n(388032),
    h = n(593885),
    p = n(444812);
function x(e) {
    let { transitionState: t, guildId: x, onClose: j } = e,
        _ = (0, i.e7)([b.Z], () => b.Z.getGuild(x));
    return (l.useEffect(() => {
        (0, m.Y)(x), (0, g.L)(g.Q.MODAL_VIEWED, x), c.Z.increment({ name: a.V.DM_SETTINGS_UPSELL_VIEW });
    }, [x]),
    null == _)
        ? null
        : (0, r.jsx)(s.Y0X, {
              transitionState: t,
              className: h.modal,
              children: (0, r.jsxs)('form', {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let t = (0, f.YK)();
                      t.add(x), d.h2.updateSetting(Array.from(t)).then(() => (0, s.showToast)((0, s.createToast)(S.NW.string(S.t.rlYD1d), s.ToastType.SUCCESS))), j(), (0, g.L)(g.Q.MODAL_DISABLED_DMS, x);
                  },
                  children: [
                      (0, r.jsx)('img', {
                          alt: '',
                          className: h.headerImage,
                          src: p
                      }),
                      (0, r.jsxs)(s.xBx, {
                          separator: !1,
                          className: h.header,
                          children: [
                              (0, r.jsx)(s.X6q, {
                                  variant: 'heading-lg/bold',
                                  className: h.title,
                                  children: S.NW.string(S.t.w2BvnJ)
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  className: h.body,
                                  children: S.NW.format(S.t.Depjkp, { guild_name: _.name })
                              })
                          ]
                      }),
                      (0, r.jsxs)(s.hzk, {
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: 'eyebrow',
                                  color: 'header-secondary',
                                  className: h.subtitle,
                                  children: S.NW.string(S.t.KPB2i4)
                              }),
                              (0, r.jsx)('div', {
                                  className: h.guildContainer,
                                  children: (0, r.jsxs)('div', {
                                      className: h.guildInfo,
                                      children: [
                                          (0, r.jsx)(o.Z, {
                                              guild: _,
                                              size: o.Z.Sizes.SMALL
                                          }),
                                          (0, r.jsx)(s.Text, {
                                              className: h.guildName,
                                              variant: 'text-md/semibold',
                                              children: _.name
                                          })
                                      ]
                                  })
                              }),
                              (0, r.jsxs)('div', {
                                  className: h.content,
                                  children: [
                                      (0, r.jsx)(s.zxk, {
                                          className: h.button,
                                          type: 'submit',
                                          color: s.zxk.Colors.BRAND,
                                          size: s.zxk.Sizes.MEDIUM,
                                          children: S.NW.string(S.t.TD7iU1)
                                      }),
                                      (0, r.jsx)(s.zxk, {
                                          className: h.button,
                                          color: s.zxk.Colors.PRIMARY,
                                          onClick: () => {
                                              j(), (0, g.L)(g.Q.MODAL_DISMISSED, x);
                                          },
                                          children: S.NW.string(S.t.PsWbcn)
                                      }),
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'header-secondary',
                                          className: h.footer,
                                          children: S.NW.format(S.t.IzZxXV, {
                                              onClick: () => {
                                                  j(),
                                                      (0, u.X)(x),
                                                      (0, s.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('50506'), n.e('68880'), n.e('23217'), n.e('84605'), n.e('25292'), n.e('51269'), n.e('8016'), n.e('22878'), n.e('90508'), n.e('13351'), n.e('95477'), n.e('11212'), n.e('66711'), n.e('78447'), n.e('97349'), n.e('55186'), n.e('17938'), n.e('53937'), n.e('83366'), n.e('6380'), n.e('46097'), n.e('76540'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('84335'), n.e('28467'), n.e('22173'), n.e('68445'), n.e('46906'), n.e('30243'), n.e('99393'), n.e('68241'), n.e('49508'), n.e('22646'), n.e('3940'), n.e('25183'), n.e('80284'), n.e('85574'), n.e('38599'), n.e('67671'), n.e('48923'), n.e('30419'), n.e('99839'), n.e('18824'), n.e('60691'), n.e('624'), n.e('17961'), n.e('84466'), n.e('71864'), n.e('27805'), n.e('41749')]).then(n.bind(n, 241420));
                                                          return (t) => {
                                                              var n, l;
                                                              return (0, r.jsx)(
                                                                  e,
                                                                  ((n = (function (e) {
                                                                      for (var t = 1; t < arguments.length; t++) {
                                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                                              r = Object.keys(n);
                                                                          'function' == typeof Object.getOwnPropertySymbols &&
                                                                              (r = r.concat(
                                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                                  })
                                                                              )),
                                                                              r.forEach(function (t) {
                                                                                  var r;
                                                                                  (r = n[t]),
                                                                                      t in e
                                                                                          ? Object.defineProperty(e, t, {
                                                                                                value: r,
                                                                                                enumerable: !0,
                                                                                                configurable: !0,
                                                                                                writable: !0
                                                                                            })
                                                                                          : (e[t] = r);
                                                                              });
                                                                      }
                                                                      return e;
                                                                  })({}, t)),
                                                                  (l = l = { guild: _ }),
                                                                  Object.getOwnPropertyDescriptors
                                                                      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                                                      : (function (e, t) {
                                                                            var n = Object.keys(e);
                                                                            if (Object.getOwnPropertySymbols) {
                                                                                var r = Object.getOwnPropertySymbols(e);
                                                                                n.push.apply(n, r);
                                                                            }
                                                                            return n;
                                                                        })(Object(l)).forEach(function (e) {
                                                                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                                                        }),
                                                                  n)
                                                              );
                                                          };
                                                      }),
                                                      (0, g.L)(g.Q.MODAL_GUILD_SETTINGS_CLICKED, x);
                                              }
                                          })
                                      })
                                  ]
                              })
                          ]
                      })
                  ]
              })
          });
}
