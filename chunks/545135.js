t.r(n),
    t.d(n, {
        default: function () {
            return P;
        }
    });
var i = t(200651);
t(192379);
var l = t(512722),
    a = t.n(l),
    s = t(442837),
    r = t(481060),
    u = t(239091),
    o = t(100527),
    d = t(906732),
    c = t(299206),
    g = t(894059),
    E = t(423589),
    h = t(837949),
    M = t(122074),
    f = t(314897),
    _ = t(984933),
    N = t(594174),
    S = t(241851),
    I = t(94953),
    p = t(976192),
    m = t(904483),
    x = t(429824),
    L = t(919815),
    A = t(858822),
    b = t(993356),
    Z = t(58338),
    v = t(422525),
    G = t(522762),
    C = t(466330),
    j = t(981631),
    T = t(388032);
function O(e) {
    let { guild: n, onSelect: l, hideSettings: o } = e,
        d = n.id,
        O = _.ZP.getDefaultChannel(d),
        P = (0, s.e7)(
            [N.default],
            () => {
                let e = N.default.getCurrentUser();
                return a()(null != e, 'GuildContextMenu: user cannot be undefined'), n.isOwner(e);
            },
            [n]
        ),
        y = (0, C.Z)({
            guild: n,
            source: j.t4x.GUILD_CONTEXT_MENU,
            channel: O
        }),
        U = (0, G.Z)(d),
        D = (0, A.Z)(n),
        R = (0, b.Z)(n),
        k = (0, v.Z)(n),
        w = (0, p.Z)({
            guildId: n.id,
            userId: f.default.getId(),
            analyticsLocation: {
                page: j.ZY5.GUILD_CHANNEL,
                section: j.jXE.CHAT_USERNAME,
                object: j.qAy.CONTEXT_MENU_ITEM
            }
        }),
        B = (0, I.Z)({
            guildId: n.id,
            userId: f.default.getId(),
            analyticsLocation: {
                page: j.ZY5.GUILD_CHANNEL,
                section: j.jXE.CHAT_USERNAME,
                object: j.qAy.CONTEXT_MENU_ITEM
            }
        }),
        F = (0, m.Z)(n),
        H = (0, g.Z)(n.id),
        Y = (0, c.Z)({
            id: n.id,
            label: T.intl.string(T.t['94lLDw'])
        }),
        z = (0, L.Z)(n, { section: j.jXE.GUILD_LIST }),
        V = (0, h.Z)(n.id),
        q = (0, Z.Z)(n.id),
        K = (0, M.ng)(n.id, !1),
        X = (0, x.Z)(n),
        W = (0, E.Mn)('GuildContextMenu');
    function Q() {
        (0, r.openModal)((e) =>
            (0, i.jsx)(S.g, {
                ...e,
                guild: n
            })
        );
    }
    return n.hasFeature(j.oNc.HUB)
        ? (0, i.jsxs)(r.Menu, {
              navId: 'guild-context',
              onClose: u.Zy,
              'aria-label': T.intl.string(T.t.HpQykZ),
              onSelect: l,
              children: [
                  (0, i.jsxs)(r.MenuGroup, {
                      children: [
                          y,
                          (0, i.jsx)(r.MenuItem, {
                              id: 'privacy',
                              label: T.intl.string(T.t.IlFwwc),
                              action: () =>
                                  (0, r.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e('77298'), t.e('23357'), t.e('50506'), t.e('96211'), t.e('23217'), t.e('84605'), t.e('12013'), t.e('73503'), t.e('8016'), t.e('52249'), t.e('68956'), t.e('6380'), t.e('72181'), t.e('26182'), t.e('18543'), t.e('95900'), t.e('51269'), t.e('32776'), t.e('66711'), t.e('13351'), t.e('76540'), t.e('86282'), t.e('17938'), t.e('21628'), t.e('95393'), t.e('87624'), t.e('74421'), t.e('18101'), t.e('24207'), t.e('25788'), t.e('46097'), t.e('22646'), t.e('8739'), t.e('58059'), t.e('3940'), t.e('18895'), t.e('24391'), t.e('57674'), t.e('99393'), t.e('48923'), t.e('30419'), t.e('99008'), t.e('8821'), t.e('39701'), t.e('18824'), t.e('38175'), t.e('34935'), t.e('37229'), t.e('25183'), t.e('28044'), t.e('48542'), t.e('57085'), t.e('80566')]).then(t.bind(t, 241420));
                                      return (t) =>
                                          (0, i.jsx)(e, {
                                              ...t,
                                              guild: n
                                          });
                                  })
                          }),
                          w
                      ]
                  }),
                  P
                      ? null
                      : (0, i.jsx)(r.MenuGroup, {
                            children: (0, i.jsx)(r.MenuItem, {
                                id: 'leave-guild',
                                label: T.intl.string(T.t.Dv8gFR),
                                action: Q,
                                color: 'danger'
                            })
                        }),
                  (0, i.jsx)(r.MenuGroup, { children: Y })
              ]
          })
        : (0, i.jsxs)(r.Menu, {
              navId: 'guild-context',
              onClose: u.Zy,
              'aria-label': T.intl.string(T.t.HpQykZ),
              onSelect: l,
              children: [
                  (0, i.jsx)(r.MenuGroup, { children: z }),
                  (0, i.jsx)(r.MenuGroup, { children: y }),
                  (0, i.jsxs)(r.MenuGroup, {
                      children: [D, W || __OVERLAY__ ? null : R, W && !__OVERLAY__ ? q : null, K, U, V]
                  }),
                  (0, i.jsxs)(r.MenuGroup, {
                      children: [
                          o ? null : k,
                          __OVERLAY__
                              ? null
                              : (0, i.jsx)(r.MenuItem, {
                                    id: 'privacy',
                                    label: T.intl.string(T.t.BayiAg),
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([t.e('77298'), t.e('23357'), t.e('50506'), t.e('96211'), t.e('23217'), t.e('84605'), t.e('12013'), t.e('73503'), t.e('8016'), t.e('52249'), t.e('68956'), t.e('6380'), t.e('72181'), t.e('26182'), t.e('18543'), t.e('95900'), t.e('51269'), t.e('32776'), t.e('66711'), t.e('13351'), t.e('76540'), t.e('86282'), t.e('17938'), t.e('21628'), t.e('95393'), t.e('87624'), t.e('74421'), t.e('18101'), t.e('24207'), t.e('25788'), t.e('46097'), t.e('22646'), t.e('8739'), t.e('58059'), t.e('3940'), t.e('18895'), t.e('24391'), t.e('57674'), t.e('99393'), t.e('48923'), t.e('30419'), t.e('99008'), t.e('8821'), t.e('39701'), t.e('18824'), t.e('38175'), t.e('34935'), t.e('37229'), t.e('25183'), t.e('28044'), t.e('48542'), t.e('57085'), t.e('80566')]).then(t.bind(t, 241420));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    guild: n
                                                });
                                        })
                                }),
                          w,
                          B
                      ]
                  }),
                  (0, i.jsxs)(r.MenuGroup, {
                      children: [F, H]
                  }),
                  (0, i.jsxs)(r.MenuGroup, {
                      children: [
                          X,
                          !P &&
                              (0, i.jsx)(r.MenuItem, {
                                  id: 'leave-guild',
                                  label: T.intl.string(T.t.J2TBi4),
                                  action: Q,
                                  color: 'danger'
                              })
                      ]
                  }),
                  (0, i.jsx)(r.MenuGroup, { children: Y })
              ]
          });
}
function P(e) {
    let { analyticsLocations: n } = (0, d.ZP)(o.Z.CONTEXT_MENU);
    return (0, i.jsx)(d.Gt, {
        value: n,
        children: (0, i.jsx)(O, { ...e })
    });
}
