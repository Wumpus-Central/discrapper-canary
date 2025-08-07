t.d(r, { Z: () => f });
var n = t(255367);
t(73800);
var i = t(780384),
    o = t(481060),
    a = t(410030),
    l = t(518950),
    s = t(51144),
    d = t(105759),
    C = t(898969),
    c = t(703614),
    u = t(182294),
    p = t(388032),
    _ = t(332546);
let f = () => {
    let e = (0, d.Z)(),
        { avatarSrc: r, eventHandlers: t } = (0, l.Z)({
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
                              for (var r = 1; r < arguments.length; r++) {
                                  var t = null != arguments[r] ? arguments[r] : {},
                                      n = Object.keys(t);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (n = n.concat(
                                          Object.getOwnPropertySymbols(t).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                          }),
                                      )),
                                      n.forEach(function (r) {
                                          var n;
                                          (n = t[r]),
                                              r in e
                                                  ? Object.defineProperty(e, r, {
                                                        value: n,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[r] = n);
                                      });
                              }
                              return e;
                          })(
                              {
                                  src: r,
                                  "aria-label": e.username,
                                  size: u.EF.SIZE_32,
                              },
                              t,
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
