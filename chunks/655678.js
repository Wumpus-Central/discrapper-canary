var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(540059),
    c = r(328908),
    d = r(443603),
    f = r(957825),
    p = r(388032),
    h = r(553796);
function _(e, n) {
    let { disabled: r, channelId: o } = e,
        _ = (0, u.Q3)('ChannelMessageConfettiButton'),
        m = (0, c.LN)(o),
        g = a.useCallback(() => {
            (0, c.Rg)(o);
        }, [o]);
    return r
        ? null
        : (0, i.jsx)('div', {
              className: s()(f.CT, h.buttonContainer),
              ref: n,
              children: (0, i.jsx)(d.Z, {
                  innerClassName: s()(h.button, h.messageConfettiButton),
                  onClick: g,
                  isActive: m,
                  'aria-label': p.intl.string(p.t.yvN8bG),
                  'aria-haspopup': 'false',
                  children: (0, i.jsx)(l.ExperimentalConfettiIcon, {
                      size: _ ? 'refresh_sm' : void 0,
                      color: 'currentColor'
                  })
              })
          });
}
n.Z = a.memo(a.forwardRef(_));
