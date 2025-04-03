n.d(t, { Z: () => x });
var r = n(200651);
n(192379);
var i = n(780384),
    l = n(481060),
    s = n(410030),
    o = n(518950),
    a = n(51144),
    C = n(105759),
    d = n(898969),
    c = n(703614),
    u = n(182294),
    p = n(388032),
    _ = n(332546);
let x = () => {
    let e = (0, C.Z)(),
        { avatarSrc: t, eventHandlers: n } = (0, o.Z)({
            user: e,
            size: u.EF.SIZE_32,
            animateOnHover: !0
        }),
        x = (0, s.Fg)(),
        f = (0, i.ap)(x),
        h = a.ZP.getName(e),
        m = f ? d.Z : c.Z;
    return null == e
        ? null
        : (0, r.jsxs)('div', {
              className: _.attributionBannerContainer,
              children: [
                  (0, r.jsx)('div', {
                      className: _.avatarContainer,
                      children: (0, r.jsx)(
                          l.qEK,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r);
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
                  (0, r.jsx)(l.Text, {
                      variant: 'text-xs/bold',
                      className: _.bannerHeader,
                      children: p.NW.format(p.t.oxhCOj, { userName: h })
                  }),
                  (0, r.jsx)(m, { className: _.bannerIcon })
              ]
          });
};
