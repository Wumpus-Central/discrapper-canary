a.d(t, {
    $Y: () => _,
    Dp: () => h,
    EP: () => k,
    F$: () => E,
    GA: () => I,
    ID: () => v,
    KC: () => N,
    ME: () => u,
    OT: () => f,
    QN: () => S,
    Sf: () => x,
    UH: () => y,
    VU: () => p,
    _V: () => m,
    eg: () => A,
    iW: () => D,
    ji: () => j,
    qR: () => C,
    w2: () => g,
    wn: () => b,
});
var n = a(627968);
a(64700);
var l = a(214947),
    i = a(403581),
    s = a(34188),
    r = a(827734),
    o = a(297296),
    d = a(652215),
    c = a(545406);
let u = [0, 0.5, 1],
    m = ["Center", "Inner ring", "Outer ring"],
    h = u.length,
    p = 0.5,
    x = 4.5,
    g = "TEXT_DEFAULT",
    v = "INTERACTIVE_BACKGROUND_HOVER",
    b = "BACKGROUND_BASE_LOWEST",
    _ = "ILLO_BLUE",
    f = "ILLO_BLUE_40",
    j = Array.from({ length: h }, () => f),
    A = Array.from({ length: h }, () => _),
    y = ["1", "0.5", "0"],
    C = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    E = [
        { label: "Light", value: d.NJ8.LIGHT, id: d.NJ8.LIGHT },
        { label: "Dark", value: d.NJ8.DARK, id: d.NJ8.DARK },
        { label: "Darker", value: d.NJ8.DARKER, id: d.NJ8.DARKER },
        { label: "Midnight", value: d.NJ8.MIDNIGHT, id: d.NJ8.MIDNIGHT },
    ],
    S = { [d.NJ8.MIDNIGHT]: d.NJ8.DARKER, [d.NJ8.DARKER]: d.NJ8.DARK, [d.NJ8.LIGHT]: d.NJ8.DARK },
    N = { [d.NJ8.LIGHT]: "light", [d.NJ8.DARK]: "ash", [d.NJ8.DARKER]: "dark", [d.NJ8.MIDNIGHT]: "onyx" },
    k = [
        { id: "friends", icon: l.$, text: "Friends" },
        { id: "nitro", icon: i.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: s.U, text: "Shop", useCustomGradient: !0 },
    ],
    I = o.p.map((e) => ({ label: e, value: e, id: e })),
    D = Object.fromEntries(
        o.p.map((e) => [
            e,
            Object.keys(r.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, l, i] = r.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * l + 0.114 * i) / 255 > 0.5
                                ? r.A.unsafe_rawColors.OPACITY_BLACK_28
                                : r.A.unsafe_rawColors.OPACITY_WHITE_28,
                        o = (0, n.jsx)("span", {
                            className: c.oP,
                            style: { background: `rgb(${a}, ${l}, ${i})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: o };
                }),
        ]),
    );
