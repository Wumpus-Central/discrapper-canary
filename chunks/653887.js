i.d(t, { _: () => o }), i(393431), i(532706), i(42231), i(232424), i(949626), i(767709), i(65162);
var n = i(477900),
    a = i(582128),
    e = i(799226),
    s = i(502377);
function o(r) {
    let { src: t, dynamicDataBinding: i, ...o } = r,
        { status: p, buffer: d } = (0, e.CE)(t),
        u = a.useMemo(
            () =>
                "string" == typeof t
                    ? t
                    : String(t.byteLength) +
                      "-" +
                      Array.from(new Uint8Array(t.slice(0, 64)))
                          .map((r) => r.toString(16).padStart(2, "0"))
                          .join(""),
            [t],
        );
    return p === e.BW.Loading
        ? null
        : (0, n.jsx)(s.w, { buffer: d, artboardProperties: {}, dynamicDataBinding: i, ...o }, u);
}
