n.d(t, { A: () => m });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(559106),
    o = n(939249),
    u = n(866665),
    c = n(375708),
    d = n(408968);
let m = i.forwardRef(function (e, t) {
    let n,
        {
            className: i,
            src: s,
            unicodeEmoji: m,
            name: h,
            size: p = 20,
            enableTooltip: f = !0,
            enableHeight: g = !0,
            onClick: x,
        } = e;
    return null == s && null == m
        ? null
        : (0, l.jsx)(u.m, {
              asContainer: !0,
              text: h,
              "aria-label": !1,
              shouldShow: f,
              tag: "span",
              children:
                  ((n = (0, l.jsx)("img", {
                      ref: t,
                      alt: c.intl.formatToPlainString(c.t["9+YWrE"], { name: h }),
                      className: r()(d.U, i, { [d.v]: null != x }),
                      height: g ? p : void 0,
                      src: s,
                      width: p,
                  })),
                  (null != m &&
                      (n = (0, l.jsx)("img", {
                          ref: t,
                          alt: m.allNamesString,
                          className: r()(d.U, i, { [d.v]: null != x }),
                          height: g ? p : void 0,
                          src: m.url,
                          width: p,
                      })),
                  null == x)
                      ? (0, l.jsx)(a.vN, { offset: { left: 5 }, children: n })
                      : (0, l.jsx)(o.D, { onClick: x, tag: "span", focusProps: { offset: { left: 5 } }, children: n })),
          });
});
