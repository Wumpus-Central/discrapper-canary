(n.d(e, { default: () => k }), n(704826), n(35282));
var a = n(255367);
n(73800);
var i = n(990547),
    r = n(704215),
    l = n(82659),
    s = n(481060),
    o = n(213609),
    c = n(313201),
    d = n(724723),
    x = n(243778),
    m = n(993440),
    u = n(201798),
    h = n(626135),
    C = n(988158),
    g = n(981631),
    p = n(921944),
    _ = n(388032),
    v = n(946555);
function k(t) {
    let { url: e, trustUrl: n, isProtocol: k, onConfirm: f, onCancel: b, onClose: j, transitionState: N } = t,
        y = (0, c.Dt)(),
        T = (0, d.q)('MaskedLinkModal'),
        {
            protocol: E,
            authorityPrefix: I,
            hostname: M,
            theRestOfTheUrl: R,
            shouldTrustUrl: A,
            setShouldTrustUrl: O,
            handleConfirm: D,
            handleCancel: L
        } = (0, C.X)({
            url: e,
            trustUrl: n,
            onConfirm: f,
            onCancel: b,
            onClose: j
        }),
        S = () => {
            (D(),
                h.default.track(g.rMx.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: A,
                    action_type: 'confirm'
                }));
        },
        X = () => {
            (L(),
                h.default.track(g.rMx.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: A,
                    action_type: 'cancel'
                }));
        };
    (0, o.Z)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.MASKED_LINK_MODAL
    });
    let { enabled: P } = (0, m.p)({ location: 'Masked Link Modal' }),
        z = P
            ? (0, a.jsx)(x.ZP, {
                  contentTypes: [r.z.NITRO_PRIVATE_BROWSING_SURVEY],
                  children: (t) => {
                      let { visibleContent: e, markAsDismissed: n } = t;
                      return e === r.z.NITRO_PRIVATE_BROWSING_SURVEY ? (0, a.jsx)(u.f, { onClose: () => n(p.L.TAKE_ACTION) }) : null;
                  }
              })
            : null;
    return T
        ? (0, a.jsxs)(l.Modal, {
              size: 'md',
              transitionState: N,
              onClose: j,
              title: _.intl.string(_.t['3w1QGh']),
              subtitle: k ? _.intl.format(_.t.aCYv19, {}) : _.intl.string(_.t.soRxRU),
              actions: [
                  {
                      text: _.intl.string(_.t['/g10LC']),
                      onClick: X,
                      variant: 'secondary'
                  },
                  {
                      text: k ? _.intl.string(_.t.COq6kp) : _.intl.string(_.t.NcJfJC),
                      onClick: S,
                      variant: 'primary'
                  }
              ],
              children: [
                  (0, a.jsxs)(s.Ttm, {
                      className: v.linkCalloutContainer,
                      children: [
                          (0, a.jsxs)(s.Text, {
                              tag: 'span',
                              variant: k ? 'text-md/semibold' : 'text-md/normal',
                              color: k ? 'text-default' : 'text-muted',
                              children: [E, I]
                          }),
                          (0, a.jsx)(s.Text, {
                              tag: 'span',
                              variant: k ? 'text-md/normal' : 'text-md/semibold',
                              color: k ? 'text-muted' : 'text-default',
                              children: M
                          }),
                          (0, a.jsx)(s.Text, {
                              tag: 'span',
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: R
                          })
                      ]
                  }),
                  (0, a.jsx)(s.XZJ, {
                      className: v.checkboxMana,
                      type: s.XZJ.Types.INVERTED,
                      value: A,
                      onChange: (t, e) => O(e),
                      children: (0, a.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          children: k ? _.intl.format(_.t['haA+X1'], { protocol: E.replace(':', '') }) : _.intl.format(_.t.ZgXDsL, { domain: M })
                      })
                  }),
                  z
              ]
          })
        : (0, a.jsxs)(s.Y0X, {
              size: s.CgR.DYNAMIC,
              transitionState: N,
              'aria-labelledby': y,
              parentComponent: 'MaskedLinkModal',
              children: [
                  (0, a.jsxs)(s.hzk, {
                      children: [
                          (0, a.jsx)(s.X6q, {
                              id: y,
                              variant: 'heading-xl/bold',
                              className: v.title,
                              children: _.intl.string(_.t['3w1QGh'])
                          }),
                          (0, a.jsx)(s.Text, {
                              className: v.warningText,
                              variant: 'text-md/normal',
                              children: k ? _.intl.format(_.t.aCYv19, {}) : _.intl.string(_.t.soRxRU)
                          }),
                          (0, a.jsxs)(s.Ttm, {
                              className: v.linkCalloutContainer,
                              children: [
                                  (0, a.jsxs)(s.Text, {
                                      tag: 'span',
                                      variant: k ? 'text-md/semibold' : 'text-md/normal',
                                      color: k ? 'text-default' : 'text-muted',
                                      children: [E, I]
                                  }),
                                  (0, a.jsx)(s.Text, {
                                      tag: 'span',
                                      variant: k ? 'text-md/normal' : 'text-md/semibold',
                                      color: k ? 'text-muted' : 'text-default',
                                      children: M
                                  }),
                                  (0, a.jsx)(s.Text, {
                                      tag: 'span',
                                      variant: 'text-md/normal',
                                      color: 'text-muted',
                                      children: R
                                  })
                              ]
                          }),
                          (0, a.jsx)(s.XZJ, {
                              className: v.checkbox,
                              type: s.XZJ.Types.INVERTED,
                              value: A,
                              onChange: (t, e) => O(e),
                              children: (0, a.jsx)(s.Text, {
                                  variant: 'text-sm/normal',
                                  children: k ? _.intl.format(_.t['haA+X1'], { protocol: E.replace(':', '') }) : _.intl.format(_.t.ZgXDsL, { domain: M })
                              })
                          }),
                          z
                      ]
                  }),
                  (0, a.jsx)(s.mzw, {
                      children: (0, a.jsxs)(s.hE2, {
                          direction: 'horizontal-reverse',
                          children: [
                              (0, a.jsx)(s.zxk, {
                                  variant: 'primary',
                                  text: k ? _.intl.string(_.t.COq6kp) : _.intl.string(_.t.NcJfJC),
                                  type: 'button',
                                  onClick: S
                              }),
                              (0, a.jsx)(s.zxk, {
                                  variant: 'secondary',
                                  text: _.intl.string(_.t['/g10LC']),
                                  type: 'button',
                                  onClick: X
                              })
                          ]
                      })
                  })
              ]
          });
}
