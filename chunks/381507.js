t.d(n, { Z: () => h });
var i = t(255367);
t(73800);
var r = t(780384),
    l = t(481060),
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
            userId: null == e ? void 0 : e.id,
            size: u.EF.SIZE_32,
            animateOnHover: !0
        }),
        h = (0, s.Fg)(),
        f = (0, r.ap)(h),
        j = o.ZP.getName(e),
        m = f ? d.Z : c.Z;
    return null == e
        ? null
        : (0, i.jsxs)('div', {
              className: x.attributionBannerContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: x.avatarContainer,
                      children: (0, i.jsx)(
                          l.qEK,
                          (function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = null != arguments[n] ? arguments[n] : {},
                                      i = Object.keys(t);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(t).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                          })
                                      )),
                                      i.forEach(function (n) {
                                          var i;
                                          ((i = t[n]),
                                              n in e
                                                  ? Object.defineProperty(e, n, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[n] = i));
                                      }));
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
                  (0, i.jsx)(l.Text, {
                      variant: 'text-xs/bold',
                      className: x.bannerHeader,
                      children: p.intl.format(p.t.oxhCOj, { userName: j })
                  }),
                  (0, i.jsx)(m, { className: x.bannerIcon })
              ]
          });
};
