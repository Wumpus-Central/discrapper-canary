n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(780384),
    a = n(481060),
    o = n(410030),
    s = n(518950),
    l = n(51144),
    c = n(105759),
    u = n(898969),
    d = n(703614),
    f = n(268685),
    p = n(388032),
    _ = n(908780);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
let g = () => {
    let e = (0, c.Z)(),
        { avatarSrc: t, eventHandlers: n } = (0, s.Z)({
            userId: null == e ? void 0 : e.id,
            size: f.EF.SIZE_32,
            animateOnHover: !0,
        }),
        m = (0, o.Fg)(),
        g = (0, i.ap)(m),
        E = l.ZP.getName(e),
        b = g ? u.Z : d.Z;
    return null == e
        ? null
        : (0, r.jsxs)("div", {
              className: _.attributionBannerContainer,
              children: [
                  (0, r.jsx)("div", {
                      className: _.avatarContainer,
                      children: (0, r.jsx)(
                          a.qEK,
                          h(
                              {
                                  src: t,
                                  "aria-label": e.username,
                                  size: f.EF.SIZE_32,
                              },
                              n,
                          ),
                      ),
                  }),
                  (0, r.jsx)(a.Text, {
                      variant: "text-xs/bold",
                      className: _.bannerHeader,
                      children: p.intl.format(p.t.oxhCOl, { userName: E }),
                  }),
                  (0, r.jsx)(b, { className: _.bannerIcon }),
              ],
          });
};
