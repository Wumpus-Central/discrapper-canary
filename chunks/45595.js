n.d(t, {
    H: () => u,
    Z: () => p
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(995295),
    o = n(772848),
    C = n(110924),
    d = n(139162);
let c = (0, o.Z)();
function u() {
    return (0, l.jsx)('div', {
        id: c,
        className: d.noticeBar
    });
}
function p(e) {
    let { show: t, children: n } = e,
        [l, s] = i.useState(!1),
        [o, u] = i.useState(!1),
        p = (0, C.Z)(t);
    !t || !1 !== p || l || o ? t || !p || o || l || (u(!0), setTimeout(() => u(!1), 500)) : (s(!0), setTimeout(() => s(!1), 500));
    let x = window.document.getElementById(c);
    return null != n && i.isValidElement(n) && null != x && (t || l || o)
        ? a.createPortal(
              i.cloneElement(n, {
                  className: r()({
                      [d.slideIn]: l,
                      [d.slideOut]: o
                  })
              }),
              x
          )
        : null;
}
