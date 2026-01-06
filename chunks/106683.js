n.d(t, { i: () => s }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(720312),
    o = n(564546);
function s(e) {
    let t = i.useRef(null),
        [n, s] = i.useState(null),
        l = (0, a.c)("MenuLabel");
    return (i.useLayoutEffect(() => {
        if (l && null != t.current) {
            let { scrollWidth: e, clientWidth: n } = t.current;
            e > n ? s(e - n) : s(null);
        }
    }, [l, e.children]),
    l)
        ? (0, r.jsx)("div", {
              className: o.marqueeContainer,
              "data-overflow": null != n ? "" : void 0,
              children: (0, r.jsx)("span", {
                  ref: t,
                  className: o.marqueeText,
                  style: null != n ? { "--custom-marquee-overflow": "".concat(n, "px") } : void 0,
                  children: e.children,
              }),
          })
        : e.children;
}
