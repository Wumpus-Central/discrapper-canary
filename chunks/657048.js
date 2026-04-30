"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(187322),
    u = n(939249),
    c = n(375708),
    d = n(877217);
let _ = r.forwardRef(function (e, t) {
    let n,
        {
            className: r,
            src: s,
            unicodeEmoji: _,
            name: f,
            size: h = 20,
            enableTooltip: p = !0,
            enableHeight: E = !0,
            onClick: m,
        } = e;
    return null == s && null == _
        ? null
        : (0, i.jsx)(o.m, {
              asContainer: !0,
              text: f,
              "aria-label": !1,
              shouldShow: p,
              tag: "span",
              children:
                  ((n = (0, i.jsx)("img", {
                      ref: t,
                      alt: c.intl.formatToPlainString(c.t["9+YWrE"], { name: f }),
                      className: a()(d.U, r, { [d.v]: null != m }),
                      height: E ? h : void 0,
                      src: s,
                      width: h,
                  })),
                  (null != _ &&
                      (n = (0, i.jsx)("img", {
                          ref: t,
                          alt: _.allNamesString,
                          className: a()(d.U, r, { [d.v]: null != m }),
                          height: E ? h : void 0,
                          src: _.url,
                          width: h,
                      })),
                  null == m)
                      ? (0, i.jsx)(l.vN, { offset: { left: 5 }, children: n })
                      : (0, i.jsx)(u.D, { onClick: m, tag: "span", focusProps: { offset: { left: 5 } }, children: n })),
          });
});
