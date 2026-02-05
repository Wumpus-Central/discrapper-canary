"use strict";
n.d(t, { V: () => o });
var r = n(627968),
    i = n(64700),
    a = n(298063),
    s = n(658122);
function o(e) {
    let t = i.useRef(null),
        [n, o] = i.useState(null),
        l = (0, a.Y)("MenuLabel");
    return (i.useLayoutEffect(() => {
        if (l && null != t.current) {
            let { scrollWidth: e, clientWidth: n } = t.current;
            e > n ? o(e - n) : o(null);
        }
    }, [l, e.children]),
    l)
        ? (0, r.jsx)("div", {
              className: s.marqueeContainer,
              "data-overflow": null != n ? "" : void 0,
              children: (0, r.jsx)("span", {
                  ref: t,
                  className: s.marqueeText,
                  style: null != n ? { "--custom-marquee-overflow": `${n}px` } : void 0,
                  children: e.children,
              }),
          })
        : e.children;
}
