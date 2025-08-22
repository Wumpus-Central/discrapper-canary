n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(780384),
    l = n(481060),
    s = n(410030),
    a = n(518950),
    o = n(51144),
    C = n(105759),
    d = n(898969),
    c = n(703614),
    p = n(268685),
    u = n(388032),
    x = n(908780);
let h = () => {
    let e = (0, C.Z)(),
        { avatarSrc: t, eventHandlers: n } = (0, a.Z)({
            userId: null == e ? void 0 : e.id,
            size: p.EF.SIZE_32,
            animateOnHover: !0,
        }),
        h = (0, s.Fg)(),
        _ = (0, i.ap)(h),
        f = o.ZP.getName(e),
        j = _ ? d.Z : c.Z;
    return null == e
        ? null
        : (0, r.jsxs)("div", {
              className: x.attributionBannerContainer,
              children: [
                  (0, r.jsx)("div", {
                      className: x.avatarContainer,
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
                                  size: p.EF.SIZE_32,
                              },
                              n,
                          ),
                      ),
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-xs/bold",
                      className: x.bannerHeader,
                      children: u.intl.format(u.t.oxhCOj, { userName: f }),
                  }),
                  (0, r.jsx)(j, { className: x.bannerIcon }),
              ],
          });
};
