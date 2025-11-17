n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(28664),
    a = n(916752),
    o = n(430864);
function s(e) {
    let { node: t, showTooltip: n = !0 } = e,
        s = (0, a.Z)(t),
        l = (0, r.jsx)("span", {
            className: o.timestamp,
            children: s,
        });
    return !0 !== n
        ? l
        : (0, r.jsx)(i.u, {
              __unsupportedReactNodeAsText: t.full,
              ariaHidden: !0,
              children: l,
          });
}
