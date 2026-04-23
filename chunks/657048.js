"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(187322),
    u = n(939249),
    c = n(985018),
    d = n(877217);
let _ = i.forwardRef(function (e, t) {
    let n,
        {
            className: i,
            src: s,
            unicodeEmoji: _,
            name: f,
            size: p = 20,
            enableTooltip: h = !0,
            enableHeight: E = !0,
            onClick: m,
        } = e;
    return null == s && null == _
        ? null
        : (0, r.jsx)(o.m, {
              asContainer: !0,
              text: f,
              "aria-label": !1,
              shouldShow: h,
              tag: "span",
              children:
                  ((n = (0, r.jsx)("img", {
                      ref: t,
                      alt: c.intl.formatToPlainString(c.t["9+YWrE"], { name: f }),
                      className: a()(d.U, i, { [d.v]: null != m }),
                      height: E ? p : void 0,
                      src: s,
                      width: p,
                  })),
                  (null != _ &&
                      (n = (0, r.jsx)("img", {
                          ref: t,
                          alt: _.allNamesString,
                          className: a()(d.U, i, { [d.v]: null != m }),
                          height: E ? p : void 0,
                          src: _.url,
                          width: p,
                      })),
                  null == m)
                      ? (0, r.jsx)(l.vN, { offset: { left: 5 }, children: n })
                      : (0, r.jsx)(u.D, { onClick: m, tag: "span", focusProps: { offset: { left: 5 } }, children: n })),
          });
});
