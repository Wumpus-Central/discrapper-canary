n.d(t, {
    H: function () {
        return c;
    },
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(995295),
    o = n(772848),
    C = n(110924),
    d = n(626325);
let u = (0, o.Z)();
function c() {
    return (0, i.jsx)('div', {
        id: u,
        className: d.noticeBar
    });
}
function p(e) {
    let { show: t, children: n } = e,
        [i, s] = l.useState(!1),
        [o, c] = l.useState(!1),
        p = (0, C.Z)(t);
    !t || !1 !== p || i || o ? !t && p && !o && !i && (c(!0), setTimeout(() => c(!1), 500)) : (s(!0), setTimeout(() => s(!1), 500));
    let x = window.document.getElementById(u);
    return null != n && l.isValidElement(n) && null != x && (t || i || o)
        ? a.createPortal(
              l.cloneElement(n, {
                  className: r()({
                      [d.slideIn]: i,
                      [d.slideOut]: o
                  })
              }),
              x
          )
        : null;
}
