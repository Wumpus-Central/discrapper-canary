n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(328908),
    c = n(992970),
    u = n(443603),
    d = n(957825),
    f = n(388032),
    _ = n(302195);
function p(e, t) {
    let { disabled: n, channel: a } = e,
        p = (0, l.LN)(a.id),
        h = i.useCallback(() => {
            (0, l.Rg)(a.id, c.MG.MessageComposerButtons);
        }, [a.id]);
    return n
        ? null
        : (0, r.jsx)('div', {
              className: o()(d.CT, _.buttonContainer),
              ref: t,
              children: (0, r.jsx)(u.Z, {
                  className: o()(_.button, _.messageConfettiButton),
                  childClassName: o()(_.messageConfettiIcon, { [_.active]: p }),
                  onClick: h,
                  isActive: p,
                  'aria-label': f.intl.string(f.t.yvN8bG),
                  'aria-haspopup': 'false',
                  children: (0, r.jsx)(s.l22, {
                      size: 'refresh_sm',
                      color: 'currentColor'
                  })
              })
          });
}
let h = i.memo(i.forwardRef(p));
