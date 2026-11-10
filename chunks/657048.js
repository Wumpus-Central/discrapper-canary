var t = n(477900);
n(582128);
var a = n(503698),
    s = n.n(a),
    i = n(559106),
    r = n(939249),
    u = n(866665),
    o = n(792996),
    d = n(408968);
n.d(
    l,
    {},
    {
        A: function (e) {
            let l,
                {
                    className: n,
                    src: a,
                    unicodeEmoji: c,
                    name: m,
                    size: x = 20,
                    enableTooltip: h = !0,
                    enableHeight: f = !0,
                    onClick: A,
                    ref: g,
                } = e;
            return null == a && null == c
                ? null
                : (0, t.jsx)(u.m, {
                      asContainer: !0,
                      text: m,
                      "aria-label": !1,
                      shouldShow: h,
                      tag: "span",
                      children:
                          ((l = (0, t.jsx)("img", {
                              ref: g,
                              alt: o.intl.formatToPlainString(o.t["9+YWrE"], { name: m }),
                              className: s()(d.U, n, { [d.v]: null != A }),
                              height: f ? x : void 0,
                              src: a,
                              width: x,
                          })),
                          (null != c &&
                              (l = (0, t.jsx)("img", {
                                  ref: g,
                                  alt: c.allNamesString,
                                  className: s()(d.U, n, { [d.v]: null != A }),
                                  height: f ? x : void 0,
                                  src: c.url,
                                  width: x,
                              })),
                          null == A)
                              ? (0, t.jsx)(i.vN, { offset: { left: 5 }, children: l })
                              : (0, t.jsx)(r.D, {
                                    onClick: A,
                                    tag: "span",
                                    focusProps: { offset: { left: 5 } },
                                    children: l,
                                })),
                  });
        },
    },
);
