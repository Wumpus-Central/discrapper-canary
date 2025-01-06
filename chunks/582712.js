n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    });
var a = n(200651),
    l = n(192379),
    i = n(286379),
    r = n(442837),
    s = n(481060),
    o = n(565138),
    u = n(797614),
    d = n(769654),
    c = n(695346),
    f = n(430824),
    g = n(88658),
    m = n(401416),
    S = n(920133),
    h = n(388032),
    D = n(215084),
    _ = n(444812);
function x(e) {
    let { transitionState: t, guildId: x, onClose: I } = e,
        b = (0, r.e7)([f.Z], () => f.Z.getGuild(x));
    return (l.useEffect(() => {
        (0, m.Y)(x), (0, S.L)(S.Q.MODAL_VIEWED, x), u.Z.increment({ name: i.V.DM_SETTINGS_UPSELL_VIEW });
    }, [x]),
    null == b)
        ? null
        : (0, a.jsx)(s.ModalRoot, {
              transitionState: t,
              className: D.modal,
              children: (0, a.jsxs)('form', {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let t = (0, g.YK)();
                      t.add(x), c.h2.updateSetting(Array.from(t)).then(() => (0, s.showToast)((0, s.createToast)(h.intl.string(h.t.rlYD1d), s.ToastType.SUCCESS))), I(), (0, S.L)(S.Q.MODAL_DISABLED_DMS, x);
                  },
                  children: [
                      (0, a.jsx)('img', {
                          alt: '',
                          className: D.headerImage,
                          src: _
                      }),
                      (0, a.jsxs)(s.ModalHeader, {
                          separator: !1,
                          className: D.header,
                          children: [
                              (0, a.jsx)(s.Heading, {
                                  variant: 'heading-lg/bold',
                                  className: D.title,
                                  children: h.intl.string(h.t.w2BvnJ)
                              }),
                              (0, a.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  className: D.body,
                                  children: h.intl.format(h.t.Depjkp, { guild_name: b.name })
                              })
                          ]
                      }),
                      (0, a.jsxs)(s.ModalContent, {
                          children: [
                              (0, a.jsx)(s.Text, {
                                  variant: 'eyebrow',
                                  color: 'header-secondary',
                                  className: D.subtitle,
                                  children: h.intl.string(h.t.KPB2i4)
                              }),
                              (0, a.jsx)('div', {
                                  className: D.guildContainer,
                                  children: (0, a.jsxs)('div', {
                                      className: D.guildInfo,
                                      children: [
                                          (0, a.jsx)(o.Z, {
                                              guild: b,
                                              size: o.Z.Sizes.SMALL
                                          }),
                                          (0, a.jsx)(s.Text, {
                                              className: D.guildName,
                                              variant: 'text-md/semibold',
                                              children: b.name
                                          })
                                      ]
                                  })
                              }),
                              (0, a.jsxs)('div', {
                                  className: D.content,
                                  children: [
                                      (0, a.jsx)(s.Button, {
                                          className: D.button,
                                          type: 'submit',
                                          color: s.Button.Colors.BRAND,
                                          size: s.Button.Sizes.MEDIUM,
                                          children: h.intl.string(h.t.TD7iU1)
                                      }),
                                      (0, a.jsx)(s.Button, {
                                          className: D.button,
                                          color: s.Button.Colors.PRIMARY,
                                          onClick: () => {
                                              I(), (0, S.L)(S.Q.MODAL_DISMISSED, x);
                                          },
                                          children: h.intl.string(h.t.PsWbcn)
                                      }),
                                      (0, a.jsx)(s.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'header-secondary',
                                          className: D.footer,
                                          children: h.intl.format(h.t.IzZxXV, {
                                              onClick: () => {
                                                  I(),
                                                      (0, d.X)(x),
                                                      (0, s.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('77298'), n.e('23357'), n.e('50506'), n.e('96211'), n.e('23217'), n.e('84605'), n.e('33053'), n.e('12013'), n.e('73503'), n.e('8016'), n.e('52249'), n.e('68956'), n.e('6380'), n.e('72181'), n.e('15669'), n.e('26182'), n.e('56630'), n.e('18543'), n.e('95900'), n.e('51269'), n.e('32776'), n.e('66711'), n.e('90508'), n.e('13351'), n.e('76540'), n.e('86282'), n.e('17938'), n.e('65840'), n.e('21628'), n.e('95393'), n.e('87624'), n.e('74421'), n.e('18101'), n.e('24207'), n.e('25788'), n.e('46097'), n.e('22646'), n.e('8739'), n.e('58059'), n.e('3940'), n.e('18895'), n.e('89029'), n.e('24391'), n.e('57674'), n.e('99393'), n.e('48923'), n.e('30419'), n.e('99008'), n.e('8821'), n.e('39701'), n.e('18824'), n.e('80284'), n.e('38175'), n.e('34935'), n.e('12870'), n.e('37229'), n.e('69174'), n.e('25183'), n.e('28044'), n.e('92729'), n.e('57085'), n.e('4587')]).then(n.bind(n, 241420));
                                                          return (t) =>
                                                              (0, a.jsx)(e, {
                                                                  ...t,
                                                                  guild: b
                                                              });
                                                      }),
                                                      (0, S.L)(S.Q.MODAL_GUILD_SETTINGS_CLICKED, x);
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
