var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(540059),
    c = r(443603),
    d = r(957825),
    f = r(388032),
    _ = r(553796);
function h(e, n) {
    let { disabled: r } = e,
        a = (0, u.Q3)('ChannelMessageConfettiButton');
    return r
        ? null
        : (0, i.jsx)('div', {
              className: o()(d.CT, _.buttonContainer),
              ref: n,
              children: (0, i.jsx)(c.Z, {
                  innerClassName: o()(_.button, _.messageConfettiButton),
                  onClick: () => {},
                  isActive: !1,
                  'aria-label': f.intl.string(f.t.yvN8bG),
                  'aria-haspopup': 'false',
                  children: (0, i.jsx)(l.ExperimentalConfettiIcon, {
                      size: a ? 'refresh_sm' : void 0,
                      color: 'currentColor'
                  })
              })
          });
}
n.Z = a.memo(a.forwardRef(h));
