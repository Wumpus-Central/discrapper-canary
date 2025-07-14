n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(257465),
    l = n(369585),
    a = n(103866),
    o = n(481060),
    s = n(313201),
    c = n(724723),
    u = n(388032),
    d = n(802867);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = () =>
        n
            .e('49812')
            .then(n.t.bind(n, 48603, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    m = (e) => {
        let t = (0, s.Dt)(),
            n = (0, c.q)('MemberVerificationSuccessModal'),
            m = () => {
                (e.onAccept(), e.onClose());
            };
        return n
            ? (0, r.jsxs)(
                  i.IX,
                  h(p({}, e), {
                      size: 'sm',
                      children: [
                          (0, r.jsx)('div', {
                              className: d.animationContainer,
                              children: (0, r.jsx)(o.Fmz, {
                                  importData: f,
                                  className: d.animationMiddle
                              })
                          }),
                          (0, r.jsx)(a.f, {
                              children: (0, r.jsxs)('div', {
                                  className: d.manaContainer,
                                  children: [
                                      (0, r.jsx)(o.X6q, {
                                          variant: 'heading-lg/semibold',
                                          className: d.header,
                                          id: t,
                                          children: u.intl.format(u.t.z9qozM, { guildName: e.guildName })
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'header-secondary',
                                          children: u.intl.string(u.t.nwpqyc)
                                      })
                                  ]
                              })
                          }),
                          (0, r.jsx)(l.G, {
                              actions: [
                                  {
                                      variant: 'primary',
                                      onClick: m,
                                      text: u.intl.string(u.t.NuzmOD)
                                  }
                              ],
                              actionsFullWidth: !0
                          })
                      ]
                  })
              )
            : (0, r.jsxs)(
                  o.Y0X,
                  h(p({}, e), {
                      size: o.CgR.SMALL,
                      transitionState: e.transitionState,
                      'aria-labelledby': t,
                      className: d.modal,
                      parentComponent: 'MemberVerificationSuccessModal',
                      children: [
                          (0, r.jsx)('div', {
                              className: d.animationContainer,
                              children: (0, r.jsx)(o.Fmz, {
                                  importData: f,
                                  className: d.animationMiddle
                              })
                          }),
                          (0, r.jsx)(o.hzk, {
                              children: (0, r.jsxs)('div', {
                                  className: d.container,
                                  children: [
                                      (0, r.jsx)(o.X6q, {
                                          variant: 'heading-lg/semibold',
                                          className: d.header,
                                          id: t,
                                          children: u.intl.format(u.t.z9qozM, { guildName: e.guildName })
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'header-secondary',
                                          children: u.intl.string(u.t.nwpqyc)
                                      }),
                                      (0, r.jsx)('div', {
                                          className: d.buttonContainer,
                                          children: (0, r.jsx)(o.zxk, {
                                              variant: 'primary',
                                              onClick: m,
                                              text: u.intl.string(u.t.NuzmOD),
                                              fullWidth: !0
                                          })
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              );
    };
