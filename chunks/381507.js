n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(780384),
    a = n(481060),
    l = n(410030),
    s = n(518950),
    o = n(51144),
    d = n(105759),
    c = n(898969),
    C = n(703614),
    u = n(268685),
    p = n(388032),
    h = n(908780);
let _ = () => {
    let e = (0, d.Z)(),
        { avatarSrc: t, eventHandlers: n } = (0, s.Z)({
            userId: null == e ? void 0 : e.id,
            size: u.EF.SIZE_32,
            animateOnHover: !0,
        }),
        _ = (0, l.Fg)(),
        m = (0, i.ap)(_),
        f = o.ZP.getName(e),
        x = m ? c.Z : C.Z;
    return null == e
        ? null
        : (0, r.jsxs)("div", {
              className: h.attributionBannerContainer,
              children: [
                  (0, r.jsx)("div", {
                      className: h.avatarContainer,
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
                      className: h.bannerHeader,
                      children: p.intl.format(p.t.oxhCOj, { userName: f }),
                  }),
                  (0, r.jsx)(x, { className: h.bannerIcon }),
              ],
          });
};
