t.d(n, { Z: () => _ });
var r = t(951288);
t(647438);
var i = t(780384),
    l = t(481060),
    s = t(410030),
    a = t(518950),
    o = t(51144),
    C = t(105759),
    d = t(898969),
    p = t(703614),
    c = t(268685),
    u = t(388032),
    x = t(908780);
let _ = () => {
    let e = (0, C.Z)(),
        { avatarSrc: n, eventHandlers: t } = (0, a.Z)({
            userId: null == e ? void 0 : e.id,
            size: c.EF.SIZE_32,
            animateOnHover: !0,
        }),
        _ = (0, s.Fg)(),
        f = (0, i.ap)(_),
        h = o.ZP.getName(e),
        j = f ? d.Z : p.Z;
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
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = null != arguments[n] ? arguments[n] : {},
                                      r = Object.keys(t);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(t).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                          }),
                                      )),
                                      r.forEach(function (n) {
                                          var r;
                                          (r = t[n]),
                                              n in e
                                                  ? Object.defineProperty(e, n, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[n] = r);
                                      });
                              }
                              return e;
                          })(
                              {
                                  src: n,
                                  "aria-label": e.username,
                                  size: c.EF.SIZE_32,
                              },
                              t,
                          ),
                      ),
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-xs/bold",
                      className: x.bannerHeader,
                      children: u.intl.format(u.t.oxhCOj, { userName: h }),
                  }),
                  (0, r.jsx)(j, { className: x.bannerIcon }),
              ],
          });
};
