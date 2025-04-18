n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(540059),
    c = n(328908),
    u = n(992970),
    d = n(443603),
    f = n(957825),
    _ = n(388032),
    p = n(302195);
function h(e, t) {
    let { disabled: n, channel: a } = e,
        h = (0, l.Q3)('ChannelMessageConfettiButton'),
        m = (0, c.LN)(a.id),
        g = i.useCallback(() => {
            (0, c.Rg)(a.id, u.MG.MessageComposerButtons);
        }, [a.id]);
    return n
        ? null
        : (0, r.jsx)('div', {
              className: o()(f.CT, p.buttonContainer),
              ref: t,
              children: (0, r.jsx)(d.Z, {
                  innerClassName: o()(p.button, p.messageConfettiButton),
                  childClassName: o()(p.messageConfettiIcon, { [p.active]: m }),
                  onClick: g,
                  isActive: m,
                  'aria-label': _.NW.string(_.t.yvN8bG),
                  'aria-haspopup': 'false',
                  children: (0, r.jsx)(s.l22, {
                      size: h ? 'refresh_sm' : void 0,
                      color: 'currentColor'
                  })
              })
          });
}
let m = i.memo(i.forwardRef(h));
