n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(582754),
    a = n(397927),
    s = n(736653),
    o = n(854627),
    l = n(427262),
    c = n(236834),
    u = n(243809),
    d = n(165856),
    f = n(778712),
    p = n(985018),
    _ = n(617705);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = () => {
    let e = (0, c.A)(),
        { avatarSrc: t, eventHandlers: n } = (0, o.A)({
            userId: null == e ? void 0 : e.id,
            size: f._3.SIZE_32,
            animateOnHover: !0,
        }),
        h = (0, s.DP)(),
        g = (0, i.qB)(h),
        E = l.Ay.getName(e),
        b = g ? u.A : d.A;
    return null == e
        ? null
        : (0, r.jsxs)("div", {
              className: _.$6,
              children: [
                  (0, r.jsx)("div", {
                      className: _.H,
                      children: (0, r.jsx)(
                          a.euF,
                          m(
                              {
                                  src: t,
                                  "aria-label": e.username,
                                  size: f._3.SIZE_32,
                              },
                              n,
                          ),
                      ),
                  }),
                  (0, r.jsx)(a.Text, {
                      variant: "text-xs/bold",
                      className: _.U_,
                      children: p.intl.format(p.t.oxhCOl, { userName: E }),
                  }),
                  (0, r.jsx)(b, { className: _.q3 }),
              ],
          });
};
