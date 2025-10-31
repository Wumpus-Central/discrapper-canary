n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(780384),
    l = n(481060),
    a = n(410030),
    s = n(518950),
    o = n(51144),
    d = n(105759),
    c = n(898969),
    C = n(703614),
    u = n(268685),
    p = n(388032),
    h = n(908780);
let m = () => {
    let e = (0, d.Z)(),
        { avatarSrc: t, eventHandlers: n } = (0, s.Z)({
            userId: null == e ? void 0 : e.id,
            size: u.EF.SIZE_32,
            animateOnHover: !0,
        }),
        m = (0, a.Fg)(),
        _ = (0, i.ap)(m),
        f = o.ZP.getName(e),
        x = _ ? c.Z : C.Z;
    return null == e
        ? null
        : (0, r.jsxs)("div", {
              className: h.attributionBannerContainer,
              children: [
                  (0, r.jsx)("div", {
                      className: h.avatarContainer,
                      children: (0, r.jsx)(
                          l.qEK,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })(
                              {
                                  src: t,
                                  "aria-label": e.username,
                                  size: u.EF.SIZE_32,
                              },
                              n,
                          ),
                      ),
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-xs/bold",
                      className: h.bannerHeader,
                      children: p.intl.format(p.t.oxhCOl, { userName: f }),
                  }),
                  (0, r.jsx)(x, { className: h.bannerIcon }),
              ],
          });
};
