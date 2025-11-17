n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(681715),
    l = n(481060),
    c = n(388032),
    u = n(689730);
let d = i.forwardRef(function (e, t) {
    let {
        className: n,
        src: i,
        unicodeEmoji: a,
        name: d,
        size: f = 20,
        enableTooltip: _ = !0,
        enableHeight: p = !0,
        onClick: h,
    } = e;
    if (null == i && null == a) return null;
    let m = () => {
        let e = (0, r.jsx)("img", {
            ref: t,
            alt: "",
            "aria-label": c.intl.formatToPlainString(c.t["9+YWrE"], { name: d }),
            className: o()(u.roleIcon, n, { [u.clickable]: null != h }),
            height: p ? f : void 0,
            src: i,
            width: f,
        });
        return (null != a &&
            (e = (0, r.jsx)("img", {
                ref: t,
                alt: "",
                "aria-label": a.allNamesString,
                className: o()(u.roleIcon, n, { [u.clickable]: null != h }),
                height: p ? f : void 0,
                src: a.url,
                width: f,
            })),
        null == h)
            ? (0, r.jsx)(l.tEY, {
                  offset: { left: 5 },
                  children: e,
              })
            : (0, r.jsx)(l.P3F, {
                  onClick: h,
                  tag: "span",
                  focusProps: { offset: { left: 5 } },
                  children: e,
              });
    };
    return (0, r.jsx)(s.u, {
        asContainer: !0,
        text: d,
        "aria-label": !1,
        shouldShow: _,
        tag: "span",
        children: m(),
    });
});
