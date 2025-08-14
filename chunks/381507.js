n.d(r, { Z: () => x });
var t = n(255367);
n(73800);
var i = n(780384),
    o = n(481060),
    a = n(410030),
    l = n(518950),
    s = n(51144),
    C = n(105759),
    d = n(898969),
    c = n(703614),
    p = n(182294),
    u = n(388032),
    _ = n(908780);
let x = () => {
    let e = (0, C.Z)(),
        { avatarSrc: r, eventHandlers: n } = (0, l.Z)({
            userId: null == e ? void 0 : e.id,
            size: p.EF.SIZE_32,
            animateOnHover: !0,
        }),
        x = (0, a.Fg)(),
        f = (0, i.ap)(x),
        m = s.ZP.getName(e),
        h = f ? d.Z : c.Z;
    return null == e
        ? null
        : (0, t.jsxs)("div", {
              className: _.attributionBannerContainer,
              children: [
                  (0, t.jsx)("div", {
                      className: _.avatarContainer,
                      children: (0, t.jsx)(
                          o.qEK,
                          (function (e) {
                              for (var r = 1; r < arguments.length; r++) {
                                  var n = null != arguments[r] ? arguments[r] : {},
                                      t = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (t = t.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      t.forEach(function (r) {
                                          var t;
                                          (t = n[r]),
                                              r in e
                                                  ? Object.defineProperty(e, r, {
                                                        value: t,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[r] = t);
                                      });
                              }
                              return e;
                          })(
                              {
                                  src: r,
                                  "aria-label": e.username,
                                  size: p.EF.SIZE_32,
                              },
                              n,
                          ),
                      ),
                  }),
                  (0, t.jsx)(o.Text, {
                      variant: "text-xs/bold",
                      className: _.bannerHeader,
                      children: u.intl.format(u.t.oxhCOj, { userName: m }),
                  }),
                  (0, t.jsx)(h, { className: _.bannerIcon }),
              ],
          });
};
