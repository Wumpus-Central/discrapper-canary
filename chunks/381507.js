n.d(t, { Z: () => h });
var l = n(255367);
n(73800);
var i = n(780384),
    s = n(481060),
    r = n(410030),
    a = n(518950),
    o = n(51144),
    C = n(105759),
    d = n(898969),
    c = n(703614),
    u = n(182294),
    p = n(388032),
    x = n(332546);
let h = () => {
    let e = (0, C.Z)(),
        { avatarSrc: t, eventHandlers: n } = (0, a.Z)({
            user: e,
            size: u.EF.SIZE_32,
            animateOnHover: !0
        }),
        h = (0, r.Fg)(),
        f = (0, i.ap)(h),
        j = o.ZP.getName(e),
        _ = f ? d.Z : c.Z;
    return null == e
        ? null
        : (0, l.jsxs)('div', {
              className: x.attributionBannerContainer,
              children: [
                  (0, l.jsx)('div', {
                      className: x.avatarContainer,
                      children: (0, l.jsx)(
                          s.qEK,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      l = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (l = l.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      l.forEach(function (t) {
                                          var l;
                                          (l = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: l,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = l);
                                      });
                              }
                              return e;
                          })(
                              {
                                  src: t,
                                  'aria-label': e.username,
                                  size: u.EF.SIZE_32
                              },
                              n
                          )
                      )
                  }),
                  (0, l.jsx)(s.Text, {
                      variant: 'text-xs/bold',
                      className: x.bannerHeader,
                      children: p.intl.format(p.t.oxhCOj, { userName: j })
                  }),
                  (0, l.jsx)(_, { className: x.bannerIcon })
              ]
          });
};
