a.d(t, { _: () => r }), a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162);
var n = a(627968),
    l = a(64700),
    i = a(799226),
    s = a(786558);
function r(e) {
    let { src: t, dynamicDataBinding: a, ...r } = e,
        { status: o, buffer: d } = (0, i.CE)(t),
        c = l.useMemo(
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
    return o === i.BW.Loading
        ? null
        : (0, n.jsx)(s.w, { buffer: d, artboardProperties: {}, dynamicDataBinding: a, ...r }, c);
}
