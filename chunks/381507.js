r.d(t, { Z: () => f });
var n = r(255367);
r(73800);
var i = r(780384),
    o = r(481060),
    a = r(410030),
    l = r(518950),
    s = r(51144),
    d = r(105759),
    C = r(898969),
    c = r(703614),
    u = r(182294),
    p = r(388032),
    _ = r(332546);
let f = () => {
    let e = (0, d.Z)(),
        { avatarSrc: t, eventHandlers: r } = (0, l.Z)({
            userId: null == e ? void 0 : e.id,
            size: u.EF.SIZE_32,
            animateOnHover: !0,
        }),
        f = (0, a.Fg)(),
        m = (0, i.ap)(f),
        x = s.ZP.getName(e),
        h = m ? C.Z : c.Z;
    return null == e
        ? null
        : (0, n.jsxs)("div", {
              className: _.attributionBannerContainer,
              children: [
                  (0, n.jsx)("div", {
                      className: _.avatarContainer,
                      children: (0, n.jsx)(
                          o.qEK,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = null != arguments[t] ? arguments[t] : {},
                                      n = Object.keys(r);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (n = n.concat(
                                          Object.getOwnPropertySymbols(r).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                          }),
                                      )),
                                      n.forEach(function (t) {
                                          var n;
                                          (n = r[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: n,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = n);
                                      });
                              }
                              return e;
                          })(
                              {
                                  src: t,
                                  "aria-label": e.username,
                                  size: u.EF.SIZE_32,
                              },
                              r,
                          ),
                      ),
                  }),
                  (0, n.jsx)(o.Text, {
                      variant: "text-xs/bold",
                      className: _.bannerHeader,
                      children: p.intl.format(p.t.oxhCOj, { userName: x }),
                  }),
                  (0, n.jsx)(h, { className: _.bannerIcon }),
              ],
          });
};
