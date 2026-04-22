"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(187322),
    c = n(939249),
    u = n(985018),
    d = n(877217);
let h = l.forwardRef(function (e, t) {
    let n,
        {
            className: l,
            src: s,
            unicodeEmoji: h,
            name: m,
            size: p = 20,
            enableTooltip: f = !0,
            enableHeight: g = !0,
            onClick: _,
        } = e;
    return null == s && null == h
        ? null
        : (0, i.jsx)(a.m, {
              asContainer: !0,
              text: m,
              "aria-label": !1,
              shouldShow: f,
              tag: "span",
              children:
                  ((n = (0, i.jsx)("img", {
                      ref: t,
                      alt: u.intl.formatToPlainString(u.t["9+YWrE"], { name: m }),
                      className: r()(d.U, l, { [d.v]: null != _ }),
                      height: g ? p : void 0,
                      src: s,
                      width: p,
                  })),
                  (null != h &&
                      (n = (0, i.jsx)("img", {
                          ref: t,
                          alt: h.allNamesString,
                          className: r()(d.U, l, { [d.v]: null != _ }),
                          height: g ? p : void 0,
                          src: h.url,
                          width: p,
                      })),
                  null == _)
                      ? (0, i.jsx)(o.vN, { offset: { left: 5 }, children: n })
                      : (0, i.jsx)(c.D, { onClick: _, tag: "span", focusProps: { offset: { left: 5 } }, children: n })),
          });
});
