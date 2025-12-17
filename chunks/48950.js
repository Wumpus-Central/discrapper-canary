n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(681715),
    l = n(481060),
    c = n(388032),
    u = n(486547);
let d = i.forwardRef(function (e, t) {
    let {
        className: n,
        src: i,
        unicodeEmoji: a,
        name: d,
        size: f = 20,
        enableTooltip: p = !0,
        enableHeight: _ = !0,
        onClick: m,
    } = e;
    if (null == i && null == a) return null;
    let h = () => {
        let e = (0, r.jsx)("img", {
            ref: t,
            alt: "",
            "aria-label": c.intl.formatToPlainString(c.t["9+YWrE"], { name: d }),
            className: o()(u.roleIcon, n, { [u.clickable]: null != m }),
            height: _ ? f : void 0,
            src: i,
            width: f,
        });
        return (null != a &&
            (e = (0, r.jsx)("img", {
                ref: t,
                alt: "",
                "aria-label": a.allNamesString,
                className: o()(u.roleIcon, n, { [u.clickable]: null != m }),
                height: _ ? f : void 0,
                src: a.url,
                width: f,
            })),
        null == m)
            ? (0, r.jsx)(l.tEY, {
                  offset: { left: 5 },
                  children: e,
              })
            : (0, r.jsx)(l.P3F, {
                  onClick: m,
                  tag: "span",
                  focusProps: { offset: { left: 5 } },
                  children: e,
              });
    };
    return (0, r.jsx)(s.u, {
        asContainer: !0,
        text: d,
        "aria-label": !1,
        shouldShow: p,
        tag: "span",
        children: h(),
    });
});
