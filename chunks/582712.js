n.d(t, { default: () => j });
var r = n(255367),
    l = n(73800),
    a = n(286379),
    i = n(442837),
    s = n(755721),
    o = n(481060),
    c = n(565138),
    u = n(797614),
    d = n(769654),
    b = n(695346),
    m = n(430824),
    f = n(88658),
    g = n(401416),
    S = n(920133),
    h = n(388032),
    p = n(227267),
    x = n(444812);
function j(e) {
    let { transitionState: t, guildId: j, onClose: D } = e,
        _ = (0, i.e7)([m.Z], () => m.Z.getGuild(j));
    return (l.useEffect(() => {
        ((0, g.Y)(j), (0, S.L)(S.Q.MODAL_VIEWED, j), u.Z.increment({ name: a.V.DM_SETTINGS_UPSELL_VIEW }));
    }, [j]),
    null == _)
        ? null
        : (0, r.jsx)(o.Y0X, {
              transitionState: t,
              className: p.modal,
              parentComponent: 'DmSettingsUpsellModal',
              children: (0, r.jsxs)('form', {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let t = (0, f.YK)();
                      (t.add(j), b.h2.updateSetting(Array.from(t)).then(() => (0, o.showToast)((0, o.createToast)(h.intl.string(h.t.rlYD1d), o.ToastType.SUCCESS))), D(), (0, S.L)(S.Q.MODAL_DISABLED_DMS, j));
                  },
                  children: [
                      (0, r.jsx)('img', {
                          alt: '',
                          className: p.headerImage,
                          src: x
                      }),
                      (0, r.jsxs)(o.xBx, {
                          separator: !1,
                          className: p.header,
                          children: [
                              (0, r.jsx)(o.X6q, {
                                  variant: 'heading-lg/bold',
                                  className: p.title,
                                  children: h.intl.string(h.t.w2BvnJ)
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  className: p.body,
                                  children: h.intl.format(h.t.Depjkp, { guild_name: _.name })
                              })
                          ]
                      }),
                      (0, r.jsxs)(o.hzk, {
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: 'eyebrow',
                                  color: 'header-secondary',
                                  className: p.subtitle,
                                  children: h.intl.string(h.t.KPB2i4)
                              }),
                              (0, r.jsx)('div', {
                                  className: p.guildContainer,
                                  children: (0, r.jsxs)('div', {
                                      className: p.guildInfo,
                                      children: [
                                          (0, r.jsx)(c.Z, {
                                              guild: _,
                                              size: c.Z.Sizes.SMALL
                                          }),
                                          (0, r.jsx)(o.Text, {
                                              className: p.guildName,
                                              variant: 'text-md/semibold',
                                              children: _.name
                                          })
                                      ]
                                  })
                              }),
                              (0, r.jsxs)('div', {
                                  className: p.content,
                                  children: [
                                      (0, r.jsx)(s.zx, {
                                          className: p.button,
                                          type: 'submit',
                                          color: s.zx.Colors.BRAND,
                                          size: s.zx.Sizes.MEDIUM,
                                          children: h.intl.string(h.t.TD7iU1)
                                      }),
                                      (0, r.jsx)(s.zx, {
                                          className: p.button,
                                          color: s.zx.Colors.PRIMARY,
                                          onClick: () => {
                                              (D(), (0, S.L)(S.Q.MODAL_DISMISSED, j));
                                          },
                                          children: h.intl.string(h.t.PsWbcn)
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'header-secondary',
                                          className: p.footer,
                                          children: h.intl.format(h.t.IzZxXV, {
                                              onClick: () => {
                                                  (D(),
                                                      (0, d.X)(j),
                                                      (0, o.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('14006'), n.e('66549'), n.e('8381'), n.e('95355'), n.e('8895'), n.e('70791'), n.e('70274'), n.e('25292'), n.e('8016'), n.e('80417'), n.e('31978'), n.e('22878'), n.e('74891'), n.e('85372'), n.e('6380'), n.e('28467'), n.e('8739'), n.e('16766'), n.e('86282'), n.e('24037'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('44421'), n.e('30424'), n.e('76540'), n.e('40694'), n.e('94313'), n.e('66005'), n.e('24022'), n.e('94136'), n.e('49508'), n.e('22646'), n.e('64838'), n.e('25183'), n.e('3940'), n.e('27458'), n.e('17218'), n.e('67501'), n.e('83075'), n.e('88712'), n.e('30419'), n.e('66317'), n.e('89001'), n.e('18824'), n.e('22243'), n.e('58636'), n.e('12769'), n.e('81409'), n.e('71881')]).then(n.bind(n, 241420));
                                                          return (t) => {
                                                              var n, l;
                                                              return (0, r.jsx)(
                                                                  e,
                                                                  ((n = (function (e) {
                                                                      for (var t = 1; t < arguments.length; t++) {
                                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                                              r = Object.keys(n);
                                                                          ('function' == typeof Object.getOwnPropertySymbols &&
                                                                              (r = r.concat(
                                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                                  })
                                                                              )),
                                                                              r.forEach(function (t) {
                                                                                  var r;
                                                                                  ((r = n[t]),
                                                                                      t in e
                                                                                          ? Object.defineProperty(e, t, {
                                                                                                value: r,
                                                                                                enumerable: !0,
                                                                                                configurable: !0,
                                                                                                writable: !0
                                                                                            })
                                                                                          : (e[t] = r));
                                                                              }));
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
                                                      (0, S.L)(S.Q.MODAL_GUILD_SETTINGS_CLICKED, j));
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
