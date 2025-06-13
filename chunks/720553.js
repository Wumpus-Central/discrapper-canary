n.d(t, { default: () => b }), n(704826), n(35282);
var r = n(255367);
n(73800);
var l = n(990547),
    i = n(82659),
    a = n(481060),
    o = n(213609),
    c = n(313201),
    s = n(724723),
    d = n(626135),
    u = n(988158),
    h = n(981631),
    x = n(388032),
    m = n(946555);
function b(e) {
    let { url: t, trustUrl: n, isProtocol: b, onConfirm: p, onCancel: f, onClose: g, transitionState: j } = e,
        v = (0, c.Dt)(),
        y = (0, s.q)('MaskedLinkModal'),
        {
            protocol: O,
            authorityPrefix: C,
            hostname: k,
            theRestOfTheUrl: N,
            shouldTrustUrl: S,
            setShouldTrustUrl: w,
            handleConfirm: M,
            handleCancel: T
        } = (0, u.X)({
            url: t,
            trustUrl: n,
            onConfirm: p,
            onCancel: f,
            onClose: g
        }),
        D = () => {
            M(),
                d.default.track(h.rMx.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: S,
                    action_type: 'confirm'
                });
        },
        L = () => {
            T(),
                d.default.track(h.rMx.MASKED_LINK_MODAL_CLICKED, {
                    is_trust_url_selected: S,
                    action_type: 'cancel'
                });
        };
    return (
        (0, o.Z)({
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.MASKED_LINK_MODAL
        }),
        y
            ? (0, r.jsxs)(i.u, {
                  size: 'md',
                  transitionState: j,
                  onClose: g,
                  title: x.intl.string(x.t['3w1QGh']),
                  headerBody: b ? x.intl.format(x.t.aCYv19, {}) : x.intl.string(x.t.soRxRU),
                  actions: [
                      {
                          text: x.intl.string(x.t['/g10LC']),
                          onClick: L,
                          variant: 'secondary'
                      },
                      {
                          text: b ? x.intl.string(x.t.COq6kp) : x.intl.string(x.t.NcJfJC),
                          onClick: D,
                          variant: 'primary'
                      }
                  ],
                  children: [
                      (0, r.jsxs)(a.Ttm, {
                          className: m.linkCalloutContainer,
                          children: [
                              (0, r.jsxs)(a.Text, {
                                  tag: 'span',
                                  variant: b ? 'text-md/semibold' : 'text-md/normal',
                                  color: b ? 'text-normal' : 'text-muted',
                                  children: [O, C]
                              }),
                              (0, r.jsx)(a.Text, {
                                  tag: 'span',
                                  variant: b ? 'text-md/normal' : 'text-md/semibold',
                                  color: b ? 'text-muted' : 'text-normal',
                                  children: k
                              }),
                              (0, r.jsx)(a.Text, {
                                  tag: 'span',
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: N
                              })
                          ]
                      }),
                      (0, r.jsx)(a.XZJ, {
                          className: m.checkboxMana,
                          type: a.XZJ.Types.INVERTED,
                          value: S,
                          onChange: (e, t) => w(t),
                          children: (0, r.jsx)(a.Text, {
                              variant: 'text-sm/normal',
                              children: b ? x.intl.format(x.t['haA+X1'], { protocol: O.replace(':', '') }) : x.intl.format(x.t.ZgXDsL, { domain: k })
                          })
                      })
                  ]
              })
            : (0, r.jsxs)(a.Y0X, {
                  size: a.CgR.DYNAMIC,
                  transitionState: j,
                  'aria-labelledby': v,
                  parentComponent: 'MaskedLinkModal',
                  children: [
                      (0, r.jsxs)(a.hzk, {
                          children: [
                              (0, r.jsx)(a.X6q, {
                                  id: v,
                                  variant: 'heading-xl/bold',
                                  className: m.title,
                                  children: x.intl.string(x.t['3w1QGh'])
                              }),
                              (0, r.jsx)(a.Text, {
                                  className: m.warningText,
                                  variant: 'text-md/normal',
                                  children: b ? x.intl.format(x.t.aCYv19, {}) : x.intl.string(x.t.soRxRU)
                              }),
                              (0, r.jsxs)(a.Ttm, {
                                  className: m.linkCalloutContainer,
                                  children: [
                                      (0, r.jsxs)(a.Text, {
                                          tag: 'span',
                                          variant: b ? 'text-md/semibold' : 'text-md/normal',
                                          color: b ? 'text-normal' : 'text-muted',
                                          children: [O, C]
                                      }),
                                      (0, r.jsx)(a.Text, {
                                          tag: 'span',
                                          variant: b ? 'text-md/normal' : 'text-md/semibold',
                                          color: b ? 'text-muted' : 'text-normal',
                                          children: k
                                      }),
                                      (0, r.jsx)(a.Text, {
                                          tag: 'span',
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: N
                                      })
                                  ]
                              }),
                              (0, r.jsx)(a.XZJ, {
                                  className: m.checkbox,
                                  type: a.XZJ.Types.INVERTED,
                                  value: S,
                                  onChange: (e, t) => w(t),
                                  children: (0, r.jsx)(a.Text, {
                                      variant: 'text-sm/normal',
                                      children: b ? x.intl.format(x.t['haA+X1'], { protocol: O.replace(':', '') }) : x.intl.format(x.t.ZgXDsL, { domain: k })
                                  })
                              })
                          ]
                      }),
                      (0, r.jsxs)(a.mzw, {
                          children: [
                              (0, r.jsx)(a.zxk, {
                                  type: 'button',
                                  size: a.zxk.Sizes.MEDIUM,
                                  color: a.zxk.Colors.BRAND,
                                  onClick: D,
                                  children: b ? x.intl.string(x.t.COq6kp) : x.intl.string(x.t.NcJfJC)
                              }),
                              (0, r.jsx)(a.zxk, {
                                  type: 'button',
                                  size: a.zxk.Sizes.MEDIUM,
                                  color: a.zxk.Colors.PRIMARY,
                                  onClick: L,
                                  look: a.iLD.LINK,
                                  children: x.intl.string(x.t['/g10LC'])
                              })
                          ]
                      })
                  ]
              })
    );
}
