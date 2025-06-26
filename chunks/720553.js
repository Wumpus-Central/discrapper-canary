n.d(e, { default: () => p }), n(704826), n(35282);
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
    h = n(388032),
    u = n(946555);
function p(t) {
    let { url: e, trustUrl: n, isProtocol: p, onConfirm: C, onCancel: k, onClose: g, transitionState: f } = t,
        M = (0, o.Dt)(),
        _ = (0, c.q)('MaskedLinkModal'),
        {
            protocol: b,
            authorityPrefix: j,
            hostname: T,
            theRestOfTheUrl: v,
            shouldTrustUrl: D,
            setShouldTrustUrl: L,
            handleConfirm: N,
            handleCancel: y
        } = (0, x.X)({
            url: e,
            trustUrl: n,
            onConfirm: C,
            onCancel: k,
            onClose: g
        }),
        z = () => {
            N(),
                d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: D,
                    action_type: 'confirm'
                });
        },
        I = () => {
            y(),
                d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: D,
                    action_type: 'cancel'
                });
        };
    return (
        (0, s.Z)({
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.MASKED_LINK_MODAL
        }),
        _
            ? (0, a.jsxs)(i.u, {
                  size: 'md',
                  transitionState: f,
                  onClose: g,
                  title: h.intl.string(h.t['3w1QGh']),
                  headerBody: p ? h.intl.format(h.t.aCYv19, {}) : h.intl.string(h.t.soRxRU),
                  actions: [
                      {
                          text: h.intl.string(h.t['/g10LC']),
                          onClick: I,
                          variant: 'secondary'
                      },
                      {
                          text: p ? h.intl.string(h.t.COq6kp) : h.intl.string(h.t.NcJfJC),
                          onClick: z,
                          variant: 'primary'
                      }
                  ],
                  children: [
                      (0, a.jsxs)(r.Ttm, {
                          className: u.linkCalloutContainer,
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
                                  children: v
                              })
                          ]
                      }),
                      (0, a.jsx)(r.XZJ, {
                          className: u.checkboxMana,
                          type: r.XZJ.Types.INVERTED,
                          value: D,
                          onChange: (t, e) => L(e),
                          children: (0, a.jsx)(r.Text, {
                              variant: 'text-sm/normal',
                              children: p ? h.intl.format(h.t['haA+X1'], { protocol: b.replace(':', '') }) : h.intl.format(h.t.ZgXDsL, { domain: T })
                          })
                      })
                  ]
              })
            : (0, a.jsxs)(r.Y0X, {
                  size: r.CgR.DYNAMIC,
                  transitionState: f,
                  'aria-labelledby': M,
                  parentComponent: 'MaskedLinkModal',
                  children: [
                      (0, a.jsxs)(r.hzk, {
                          children: [
                              (0, a.jsx)(r.X6q, {
                                  id: M,
                                  variant: 'heading-xl/bold',
                                  className: u.title,
                                  children: h.intl.string(h.t['3w1QGh'])
                              }),
                              (0, a.jsx)(r.Text, {
                                  className: u.warningText,
                                  variant: 'text-md/normal',
                                  children: p ? h.intl.format(h.t.aCYv19, {}) : h.intl.string(h.t.soRxRU)
                              }),
                              (0, a.jsxs)(r.Ttm, {
                                  className: u.linkCalloutContainer,
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
                                          children: v
                                      })
                                  ]
                              }),
                              (0, a.jsx)(r.XZJ, {
                                  className: u.checkbox,
                                  type: r.XZJ.Types.INVERTED,
                                  value: D,
                                  onChange: (t, e) => L(e),
                                  children: (0, a.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: p ? h.intl.format(h.t['haA+X1'], { protocol: b.replace(':', '') }) : h.intl.format(h.t.ZgXDsL, { domain: T })
                                  })
                              })
                          ]
                      }),
                      (0, a.jsxs)(r.mzw, {
                          children: [
                              (0, a.jsx)(r.zxk, {
                                  type: 'button',
                                  size: r.zxk.Sizes.MEDIUM,
                                  color: r.zxk.Colors.BRAND,
                                  onClick: z,
                                  children: p ? h.intl.string(h.t.COq6kp) : h.intl.string(h.t.NcJfJC)
                              }),
                              (0, a.jsx)(r.zxk, {
                                  type: 'button',
                                  size: r.zxk.Sizes.MEDIUM,
                                  color: r.zxk.Colors.PRIMARY,
                                  onClick: I,
                                  look: r.iLD.LINK,
                                  children: h.intl.string(h.t['/g10LC'])
                              })
                          ]
                      })
                  ]
              })
    );
}
