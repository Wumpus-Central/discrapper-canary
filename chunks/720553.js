(n.d(e, { default: () => p }), n(704826), n(35282));
var a = n(255367);
n(73800);
var l = n(990547),
    i = n(82659),
    r = n(481060),
    s = n(213609),
    o = n(313201),
    c = n(724723),
    d = n(626135),
    x = n(988158),
    m = n(981631),
    u = n(388032),
    h = n(946555);
function p(t) {
    let { url: e, trustUrl: n, isProtocol: p, onConfirm: C, onCancel: k, onClose: g, transitionState: f } = t,
        _ = (0, o.Dt)(),
        v = (0, c.q)('MaskedLinkModal'),
        {
            protocol: b,
            authorityPrefix: j,
            hostname: T,
            theRestOfTheUrl: M,
            shouldTrustUrl: y,
            setShouldTrustUrl: D,
            handleConfirm: L,
            handleCancel: N
        } = (0, x.X)({
            url: e,
            trustUrl: n,
            onConfirm: C,
            onCancel: k,
            onClose: g
        }),
        X = () => {
            (L(),
                d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: y,
                    action_type: 'confirm'
                }));
        },
        E = () => {
            (N(),
                d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: y,
                    action_type: 'cancel'
                }));
        };
    return (
        (0, s.Z)({
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.MASKED_LINK_MODAL
        }),
        v
            ? (0, a.jsxs)(i.u, {
                  size: 'md',
                  transitionState: f,
                  onClose: g,
                  title: u.intl.string(u.t['3w1QGh']),
                  subtitle: p ? u.intl.format(u.t.aCYv19, {}) : u.intl.string(u.t.soRxRU),
                  actions: [
                      {
                          text: u.intl.string(u.t['/g10LC']),
                          onClick: E,
                          variant: 'secondary'
                      },
                      {
                          text: p ? u.intl.string(u.t.COq6kp) : u.intl.string(u.t.NcJfJC),
                          onClick: X,
                          variant: 'primary'
                      }
                  ],
                  children: [
                      (0, a.jsxs)(r.Ttm, {
                          className: h.linkCalloutContainer,
                          children: [
                              (0, a.jsxs)(r.Text, {
                                  tag: 'span',
                                  variant: p ? 'text-md/semibold' : 'text-md/normal',
                                  color: p ? 'text-default' : 'text-muted',
                                  children: [b, j]
                              }),
                              (0, a.jsx)(r.Text, {
                                  tag: 'span',
                                  variant: p ? 'text-md/normal' : 'text-md/semibold',
                                  color: p ? 'text-muted' : 'text-default',
                                  children: T
                              }),
                              (0, a.jsx)(r.Text, {
                                  tag: 'span',
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: M
                              })
                          ]
                      }),
                      (0, a.jsx)(r.XZJ, {
                          className: h.checkboxMana,
                          type: r.XZJ.Types.INVERTED,
                          value: y,
                          onChange: (t, e) => D(e),
                          children: (0, a.jsx)(r.Text, {
                              variant: 'text-sm/normal',
                              children: p ? u.intl.format(u.t['haA+X1'], { protocol: b.replace(':', '') }) : u.intl.format(u.t.ZgXDsL, { domain: T })
                          })
                      })
                  ]
              })
            : (0, a.jsxs)(r.Y0X, {
                  size: r.CgR.DYNAMIC,
                  transitionState: f,
                  'aria-labelledby': _,
                  parentComponent: 'MaskedLinkModal',
                  children: [
                      (0, a.jsxs)(r.hzk, {
                          children: [
                              (0, a.jsx)(r.X6q, {
                                  id: _,
                                  variant: 'heading-xl/bold',
                                  className: h.title,
                                  children: u.intl.string(u.t['3w1QGh'])
                              }),
                              (0, a.jsx)(r.Text, {
                                  className: h.warningText,
                                  variant: 'text-md/normal',
                                  children: p ? u.intl.format(u.t.aCYv19, {}) : u.intl.string(u.t.soRxRU)
                              }),
                              (0, a.jsxs)(r.Ttm, {
                                  className: h.linkCalloutContainer,
                                  children: [
                                      (0, a.jsxs)(r.Text, {
                                          tag: 'span',
                                          variant: p ? 'text-md/semibold' : 'text-md/normal',
                                          color: p ? 'text-default' : 'text-muted',
                                          children: [b, j]
                                      }),
                                      (0, a.jsx)(r.Text, {
                                          tag: 'span',
                                          variant: p ? 'text-md/normal' : 'text-md/semibold',
                                          color: p ? 'text-muted' : 'text-default',
                                          children: T
                                      }),
                                      (0, a.jsx)(r.Text, {
                                          tag: 'span',
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: M
                                      })
                                  ]
                              }),
                              (0, a.jsx)(r.XZJ, {
                                  className: h.checkbox,
                                  type: r.XZJ.Types.INVERTED,
                                  value: y,
                                  onChange: (t, e) => D(e),
                                  children: (0, a.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: p ? u.intl.format(u.t['haA+X1'], { protocol: b.replace(':', '') }) : u.intl.format(u.t.ZgXDsL, { domain: T })
                                  })
                              })
                          ]
                      }),
                      (0, a.jsx)(r.mzw, {
                          children: (0, a.jsxs)(r.hE2, {
                              direction: 'horizontal-reverse',
                              children: [
                                  (0, a.jsx)(r.zxk, {
                                      variant: 'primary',
                                      text: p ? u.intl.string(u.t.COq6kp) : u.intl.string(u.t.NcJfJC),
                                      type: 'button',
                                      onClick: X
                                  }),
                                  (0, a.jsx)(r.zxk, {
                                      variant: 'secondary',
                                      text: u.intl.string(u.t['/g10LC']),
                                      type: 'button',
                                      onClick: E
                                  })
                              ]
                          })
                      })
                  ]
              })
    );
}
