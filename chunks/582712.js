l.d(t, { default: () => _ });
var n = l(200651),
    a = l(192379),
    i = l(286379),
    r = l(442837),
    s = l(481060),
    o = l(565138),
    d = l(797614),
    c = l(769654),
    u = l(695346),
    m = l(430824),
    g = l(88658),
    b = l(401416),
    S = l(920133),
    f = l(388032),
    h = l(215084),
    x = l(444812);
function _(e) {
    let { transitionState: t, guildId: _, onClose: D } = e,
        I = (0, r.e7)([m.Z], () => m.Z.getGuild(_));
    return (a.useEffect(() => {
        (0, b.Y)(_), (0, S.L)(S.Q.MODAL_VIEWED, _), d.Z.increment({ name: i.V.DM_SETTINGS_UPSELL_VIEW });
    }, [_]),
    null == I)
        ? null
        : (0, n.jsx)(s.Y0X, {
              transitionState: t,
              className: h.modal,
              children: (0, n.jsxs)('form', {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let t = (0, g.YK)();
                      t.add(_), u.h2.updateSetting(Array.from(t)).then(() => (0, s.showToast)((0, s.createToast)(f.intl.string(f.t.rlYD1d), s.ToastType.SUCCESS))), D(), (0, S.L)(S.Q.MODAL_DISABLED_DMS, _);
                  },
                  children: [
                      (0, n.jsx)('img', {
                          alt: '',
                          className: h.headerImage,
                          src: x
                      }),
                      (0, n.jsxs)(s.xBx, {
                          separator: !1,
                          className: h.header,
                          children: [
                              (0, n.jsx)(s.X6q, {
                                  variant: 'heading-lg/bold',
                                  className: h.title,
                                  children: f.intl.string(f.t.w2BvnJ)
                              }),
                              (0, n.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  className: h.body,
                                  children: f.intl.format(f.t.Depjkp, { guild_name: I.name })
                              })
                          ]
                      }),
                      (0, n.jsxs)(s.hzk, {
                          children: [
                              (0, n.jsx)(s.Text, {
                                  variant: 'eyebrow',
                                  color: 'header-secondary',
                                  className: h.subtitle,
                                  children: f.intl.string(f.t.KPB2i4)
                              }),
                              (0, n.jsx)('div', {
                                  className: h.guildContainer,
                                  children: (0, n.jsxs)('div', {
                                      className: h.guildInfo,
                                      children: [
                                          (0, n.jsx)(o.Z, {
                                              guild: I,
                                              size: o.Z.Sizes.SMALL
                                          }),
                                          (0, n.jsx)(s.Text, {
                                              className: h.guildName,
                                              variant: 'text-md/semibold',
                                              children: I.name
                                          })
                                      ]
                                  })
                              }),
                              (0, n.jsxs)('div', {
                                  className: h.content,
                                  children: [
                                      (0, n.jsx)(s.zxk, {
                                          className: h.button,
                                          type: 'submit',
                                          color: s.zxk.Colors.BRAND,
                                          size: s.zxk.Sizes.MEDIUM,
                                          children: f.intl.string(f.t.TD7iU1)
                                      }),
                                      (0, n.jsx)(s.zxk, {
                                          className: h.button,
                                          color: s.zxk.Colors.PRIMARY,
                                          onClick: () => {
                                              D(), (0, S.L)(S.Q.MODAL_DISMISSED, _);
                                          },
                                          children: f.intl.string(f.t.PsWbcn)
                                      }),
                                      (0, n.jsx)(s.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'header-secondary',
                                          className: h.footer,
                                          children: f.intl.format(f.t.IzZxXV, {
                                              onClick: () => {
                                                  D(),
                                                      (0, c.X)(_),
                                                      (0, s.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([l.e('50506'), l.e('68880'), l.e('23217'), l.e('84605'), l.e('51269'), l.e('8016'), l.e('22878'), l.e('90508'), l.e('13351'), l.e('66711'), l.e('17938'), l.e('53937'), l.e('6380'), l.e('46097'), l.e('76540'), l.e('8739'), l.e('58059'), l.e('86282'), l.e('18543'), l.e('18895'), l.e('68445'), l.e('30243'), l.e('99393'), l.e('49508'), l.e('22646'), l.e('68241'), l.e('3940'), l.e('25183'), l.e('80284'), l.e('51092'), l.e('54515'), l.e('48923'), l.e('30419'), l.e('18824'), l.e('60691'), l.e('45161'), l.e('70298'), l.e('84466'), l.e('86133'), l.e('28986'), l.e('69496')]).then(l.bind(l, 241420));
                                                          return (t) =>
                                                              (0, n.jsx)(e, {
                                                                  ...t,
                                                                  guild: I
                                                              });
                                                      }),
                                                      (0, S.L)(S.Q.MODAL_GUILD_SETTINGS_CLICKED, _);
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
