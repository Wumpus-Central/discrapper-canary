"use strict";
n.d(t, { _: () => s }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var r = n(627968),
    i = n(64700),
    a = n(158954);
function s(e) {
    let { src: t, dynamicDataBinding: n, ...s } = e,
        { status: o, buffer: l } = (0, a.CEU)(t),
        u = i.useMemo(
            () =>
                "string" == typeof t
                    ? t
                    : String(t.byteLength) +
                      "-" +
                      Array.from(new Uint8Array(t.slice(0, 64)))
                          .map((e) => e.toString(16).padStart(2, "0"))
                          .join(""),
            [t],
        );
    return o === a.BWP.Loading
        ? null
        : (0, r.jsx)(a.wbv, { buffer: l, artboardProperties: {}, dynamicDataBinding: n, ...s }, u);
}
