t.d(n, { Z: () => h });
var l = t(255367);
t(73800);
var i = t(780384),
    r = t(481060),
    s = t(410030),
    a = t(518950),
    o = t(51144),
    C = t(105759),
    d = t(898969),
    c = t(703614),
    u = t(182294),
    p = t(388032),
    x = t(332546);
let h = () => {
    let e = (0, C.Z)(),
        { avatarSrc: n, eventHandlers: t } = (0, a.Z)({
            user: e,
            size: u.EF.SIZE_32,
            animateOnHover: !0
        }),
        h = (0, s.Fg)(),
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
                          r.qEK,
                          (function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = null != arguments[n] ? arguments[n] : {},
                                      l = Object.keys(t);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (l = l.concat(
                                          Object.getOwnPropertySymbols(t).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                          })
                                      )),
                                      l.forEach(function (n) {
                                          var l;
                                          (l = t[n]),
                                              n in e
                                                  ? Object.defineProperty(e, n, {
                                                        value: l,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[n] = l);
                                      });
                              }
                              return e;
                          })(
                              {
                                  src: n,
                                  'aria-label': e.username,
                                  size: u.EF.SIZE_32
                              },
                              t
                          )
                      )
                  }),
                  (0, l.jsx)(r.Text, {
                      variant: 'text-xs/bold',
                      className: x.bannerHeader,
                      children: p.intl.format(p.t.oxhCOj, { userName: j })
                  }),
                  (0, l.jsx)(_, { className: x.bannerIcon })
              ]
          });
};
