n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(780384),
    l = n(481060),
    a = n(410030),
    s = n(518950),
    o = n(51144),
    C = n(105759),
    d = n(898969),
    c = n(703614),
    p = n(268685),
    u = n(388032),
    x = n(908780);
let f = () => {
    let e = (0, C.Z)(),
        { avatarSrc: t, eventHandlers: n } = (0, s.Z)({
            userId: null == e ? void 0 : e.id,
            size: p.EF.SIZE_32,
            animateOnHover: !0,
        }),
        f = (0, a.Fg)(),
        h = (0, i.ap)(f),
        _ = o.ZP.getName(e),
        j = h ? d.Z : c.Z;
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
                      children: u.intl.format(u.t.oxhCOj, { userName: _ }),
                  }),
                  (0, r.jsx)(j, { className: x.bannerIcon }),
              ],
          });
};
