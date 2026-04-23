n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(990078),
    l = n(187322),
    o = n(939249),
    E = n(985018),
    d = n(877217);
let c = r.forwardRef(function (e, t) {
    let n,
        {
            className: r,
            src: a,
            unicodeEmoji: c,
            name: u,
            size: I = 20,
            enableTooltip: A = !0,
            enableHeight: T = !0,
            onClick: S,
        } = e;
    return null == a && null == c
        ? null
        : (0, i.jsx)(_.m, {
              asContainer: !0,
              text: u,
              "aria-label": !1,
              shouldShow: A,
              tag: "span",
              children:
                  ((n = (0, i.jsx)("img", {
                      ref: t,
                      alt: E.intl.formatToPlainString(E.t["9+YWrE"], { name: u }),
                      className: s()(d.U, r, { [d.v]: null != S }),
                      height: T ? I : void 0,
                      src: a,
                      width: I,
                  })),
                  (null != c &&
                      (n = (0, i.jsx)("img", {
                          ref: t,
                          alt: c.allNamesString,
                          className: s()(d.U, r, { [d.v]: null != S }),
                          height: T ? I : void 0,
                          src: c.url,
                          width: I,
                      })),
                  null == S)
                      ? (0, i.jsx)(l.vN, { offset: { left: 5 }, children: n })
                      : (0, i.jsx)(o.D, { onClick: S, tag: "span", focusProps: { offset: { left: 5 } }, children: n })),
          });
});
