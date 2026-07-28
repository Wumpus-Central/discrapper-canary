"use strict";
n.d(t, { A: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(259678),
    o = n(939249),
    d = n(866665),
    c = n(375708),
    u = n(23481);
let _ = r.forwardRef(function (e, t) {
    let n,
        {
            className: r,
            src: a,
            unicodeEmoji: _,
            name: E,
            size: A = 20,
            enableTooltip: h = !0,
            enableHeight: I = !0,
            onClick: f,
        } = e;
    return null == a && null == _
        ? null
        : (0, i.jsx)(d.m, {
              asContainer: !0,
              text: E,
              "aria-label": !1,
              shouldShow: h,
              tag: "span",
              children:
                  ((n = (0, i.jsx)("img", {
                      ref: t,
                      alt: c.intl.formatToPlainString(c.t["9+YWrE"], { name: E }),
                      className: s()(u.U, r, { [u.v]: null != f }),
                      height: I ? A : void 0,
                      src: a,
                      width: A,
                  })),
                  (null != _ &&
                      (n = (0, i.jsx)("img", {
                          ref: t,
                          alt: _.allNamesString,
                          className: s()(u.U, r, { [u.v]: null != f }),
                          height: I ? A : void 0,
                          src: _.url,
                          width: A,
                      })),
                  null == f)
                      ? (0, i.jsx)(l.vN, { offset: { left: 5 }, children: n })
                      : (0, i.jsx)(o.D, { onClick: f, tag: "span", focusProps: { offset: { left: 5 } }, children: n })),
          });
});
