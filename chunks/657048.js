n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(435371),
    l = n(397927),
    c = n(985018),
    u = n(915534);
let d = i.forwardRef(function (e, t) {
    let {
        className: n,
        src: i,
        unicodeEmoji: a,
        name: d,
        size: f = 20,
        enableTooltip: p = !0,
        enableHeight: _ = !0,
        onClick: h,
    } = e;
    if (null == i && null == a) return null;
    let m = () => {
        let e = (0, r.jsx)("img", {
            ref: t,
            alt: c.intl.formatToPlainString(c.t["9+YWrE"], {
                name: d,
            }),
            className: s()(u.U, n, {
                [u.v]: null != h,
            }),
            height: _ ? f : void 0,
            src: i,
            width: f,
        });
        return (null != a &&
            (e = (0, r.jsx)("img", {
                ref: t,
                alt: a.allNamesString,
                className: s()(u.U, n, {
                    [u.v]: null != h,
                }),
                height: _ ? f : void 0,
                src: a.url,
                width: f,
            })),
        null == h)
            ? (0, r.jsx)(l.vN3, {
                  offset: {
                      left: 5,
                  },
                  children: e,
              })
            : (0, r.jsx)(l.DUT, {
                  onClick: h,
                  tag: "span",
                  focusProps: {
                      offset: {
                          left: 5,
                      },
                  },
                  children: e,
              });
    };
    return (0, r.jsx)(o.m_, {
        asContainer: !0,
        text: d,
        "aria-label": !1,
        shouldShow: p,
        tag: "span",
        children: m(),
    });
});
