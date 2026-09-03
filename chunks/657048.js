n.d(t, { A: () => h });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(259678),
    o = n(939249),
    u = n(866665),
    c = n(375708),
    d = n(408968);
let h = i.forwardRef(function (e, t) {
    let n,
        {
            className: i,
            src: s,
            unicodeEmoji: h,
            name: m,
            size: f = 20,
            enableTooltip: p = !0,
            enableHeight: g = !0,
            onClick: x,
        } = e;
    return null == s && null == h
        ? null
        : (0, l.jsx)(u.m, {
              asContainer: !0,
              text: m,
              "aria-label": !1,
              shouldShow: p,
              tag: "span",
              children:
                  ((n = (0, l.jsx)("img", {
                      ref: t,
                      alt: c.intl.formatToPlainString(c.t["9+YWrE"], { name: m }),
                      className: r()(d.U, i, { [d.v]: null != x }),
                      height: g ? f : void 0,
                      src: s,
                      width: f,
                  })),
                  (null != h &&
                      (n = (0, l.jsx)("img", {
                          ref: t,
                          alt: h.allNamesString,
                          className: r()(d.U, i, { [d.v]: null != x }),
                          height: g ? f : void 0,
                          src: h.url,
                          width: f,
                      })),
                  null == x)
                      ? (0, l.jsx)(a.vN, { offset: { left: 5 }, children: n })
                      : (0, l.jsx)(o.D, { onClick: x, tag: "span", focusProps: { offset: { left: 5 } }, children: n })),
          });
});
