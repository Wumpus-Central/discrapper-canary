"use strict";
n.d(t, { _: () => a });
var r = n(627968),
    i = n(158954);
function a(e) {
    let { src: t, dynamicDataBinding: n, ...a } = e,
        { status: s, buffer: o } = (0, i.CEU)(t);
    return s === i.BWP.Loading
        ? null
        : (0, r.jsx)(i.wbv, { buffer: o, artboardProperties: {}, dynamicDataBinding: n, ...a }, t);
}
