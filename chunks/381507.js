n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(780384),
    a = n(481060),
    l = n(410030),
    o = n(518950),
    s = n(51144),
    d = n(105759),
    c = n(898969),
    C = n(703614),
    u = n(268685),
    p = n(388032),
    _ = n(908780);
let h = () => {
    let e = (0, d.Z)(),
        { avatarSrc: t, eventHandlers: n } = (0, o.Z)({
            userId: null == e ? void 0 : e.id,
            size: u.EF.SIZE_32,
            animateOnHover: !0,
        }),
        h = (0, l.Fg)(),
        f = (0, i.ap)(h),
        m = s.ZP.getName(e),
        x = f ? c.Z : C.Z;
    return null == e
        ? null
        : (0, r.jsxs)("div", {
              className: _.attributionBannerContainer,
              children: [
                  (0, r.jsx)("div", {
                      className: _.avatarContainer,
                      children: (0, r.jsx)(
                          a.qEK,
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
                  (0, r.jsx)(a.Text, {
                      variant: "text-xs/bold",
                      className: _.bannerHeader,
                      children: p.intl.format(p.t.oxhCOj, { userName: m }),
                  }),
                  (0, r.jsx)(x, { className: _.bannerIcon }),
              ],
          });
};
