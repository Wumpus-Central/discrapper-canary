n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(187322),
    u = n(939249),
    d = n(985018),
    c = n(877217);
let h = l.forwardRef(function (e, t) {
    let n,
        {
            className: l,
            src: r,
            unicodeEmoji: h,
            name: p,
            size: m = 20,
            enableTooltip: f = !0,
            enableHeight: E = !0,
            onClick: g,
        } = e;
    return null == r && null == h
        ? null
        : (0, i.jsx)(a.m, {
              asContainer: !0,
              text: p,
              "aria-label": !1,
              shouldShow: f,
              tag: "span",
              children:
                  ((n = (0, i.jsx)("img", {
                      ref: t,
                      alt: d.intl.formatToPlainString(d.t["9+YWrE"], { name: p }),
                      className: s()(c.U, l, { [c.v]: null != g }),
                      height: E ? m : void 0,
                      src: r,
                      width: m,
                  })),
                  (null != h &&
                      (n = (0, i.jsx)("img", {
                          ref: t,
                          alt: h.allNamesString,
                          className: s()(c.U, l, { [c.v]: null != g }),
                          height: E ? m : void 0,
                          src: h.url,
                          width: m,
                      })),
                  null == g)
                      ? (0, i.jsx)(o.vN, { offset: { left: 5 }, children: n })
                      : (0, i.jsx)(u.D, { onClick: g, tag: "span", focusProps: { offset: { left: 5 } }, children: n })),
          });
});
