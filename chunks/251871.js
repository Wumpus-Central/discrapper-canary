e.r(n),
    e.d(n, {
        default: function () {
            return M;
        }
    }),
    e(47120);
var i = e(200651),
    r = e(192379),
    l = e(399606),
    o = e(481060),
    a = e(493773),
    s = e(100527),
    u = e(906732),
    d = e(565138),
    c = e(314897),
    f = e(271383),
    g = e(430824),
    h = e(626135),
    I = e(715903),
    N = e(295474),
    _ = e(273504),
    C = e(981631),
    Z = e(372897),
    A = e(388032),
    E = e(295831);
function M(t) {
    var n;
    let { onClose: e, transitionState: M, guildId: k } = t,
        R = (0, l.e7)([c.default], () => c.default.getId()),
        m = (0, l.e7)([f.ZP], () => f.ZP.getMember(k, R), [k, R]),
        x = (0, l.e7)([g.Z], () => g.Z.getGuild(k), [k]),
        O = null !== (n = null == x ? void 0 : x.name) && void 0 !== n ? n : '',
        p = (0, I.no)(m),
        { analyticsLocations: v } = (0, u.ZP)(s.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [L, P] = (0, N.ww)({
            guildId: k,
            analyticsLocations: v,
            openWithoutBackstack: !0
        }),
        U = p.has(Z.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? A.intl.string(A.t.SpDXIy) : A.intl.string(A.t['QRN+Sk']);
    !P && (U = A.intl.string(A.t.FFj5Dg));
    let j = P ? A.intl.string(A.t['/PGQf3']) : A.intl.string(A.t.WikgZ2);
    return ((0, a.Z)(() => {
        h.default.track(C.rMx.OPEN_MODAL, {
            type: _.dc,
            guild_id: k,
            other_user_id: R
        });
    }),
    r.useEffect(() => {
        if (null == x) {
            e();
            return;
        }
    }, [x, e]),
    null == x)
        ? null
        : (0, i.jsxs)(o.ModalRoot, {
              transitionState: M,
              size: o.ModalSize.SMALL,
              children: [
                  (0, i.jsx)(o.ModalHeader, {
                      separator: !1,
                      children: (0, i.jsxs)('div', {
                          className: E.headerContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: E.guildIconContainer,
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          guild: x,
                                          size: d.Z.Sizes.LARGER
                                      }),
                                      (0, i.jsx)('div', {
                                          className: E.statusContainer,
                                          children: (0, i.jsx)(o.ChatXIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: E.statusIcon
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(o.Heading, {
                                  color: 'header-primary',
                                  variant: 'heading-md/semibold',
                                  children: A.intl.format(A.t.kcYdTk, { guildName: O })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(o.ModalContent, {
                      children: (0, i.jsx)('div', {
                          className: E.descriptionContainer,
                          children: (0, i.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: U
                          })
                      })
                  }),
                  (0, i.jsxs)(o.ModalFooter, {
                      children: [
                          (0, i.jsx)(o.Button, {
                              onClick: () => {
                                  L(), e();
                              },
                              color: o.Button.Colors.BRAND,
                              look: o.Button.Looks.FILLED,
                              children: j
                          }),
                          (0, i.jsx)(o.Button, {
                              onClick: e,
                              color: o.Button.Colors.PRIMARY,
                              look: o.Button.Looks.LINK,
                              children: A.intl.string(A.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
