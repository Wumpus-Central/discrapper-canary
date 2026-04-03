n.d(t, {
    $Y: () => f,
    Dp: () => u,
    EP: () => S,
    F$: () => C,
    GA: () => T,
    ID: () => p,
    KC: () => E,
    ME: () => d,
    OT: () => _,
    QN: () => y,
    Sf: () => h,
    UH: () => j,
    VU: () => m,
    _V: () => c,
    eg: () => b,
    iW: () => N,
    ji: () => v,
    qR: () => A,
    w2: () => x,
    wn: () => g,
});
var a = n(627968);
n(64700);
var i = n(158954),
    s = n(827734),
    l = n(297296),
    r = n(652215),
    o = n(222094);
let d = [0, 0.5, 1],
    c = ["Center", "Inner ring", "Outer ring"],
    u = d.length,
    m = 0.5,
    h = 4.5,
    x = "TEXT_DEFAULT",
    p = "INTERACTIVE_BACKGROUND_HOVER",
    g = "BACKGROUND_BASE_LOWEST",
    f = "ILLO_BLUE",
    _ = "ILLO_BLUE_40",
    v = Array.from({ length: u }, () => _),
    b = Array.from({ length: u }, () => f),
    j = ["1", "0.5", "0"],
    A = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    C = [
        { label: "Light", value: r.NJ8.LIGHT, id: r.NJ8.LIGHT },
        { label: "Dark", value: r.NJ8.DARK, id: r.NJ8.DARK },
        { label: "Darker", value: r.NJ8.DARKER, id: r.NJ8.DARKER },
        { label: "Midnight", value: r.NJ8.MIDNIGHT, id: r.NJ8.MIDNIGHT },
    ],
    y = { [r.NJ8.MIDNIGHT]: r.NJ8.DARKER, [r.NJ8.DARKER]: r.NJ8.DARK },
    E = { [r.NJ8.LIGHT]: "light", [r.NJ8.DARK]: "ash", [r.NJ8.DARKER]: "dark", [r.NJ8.MIDNIGHT]: "onyx" },
    S = [
        { id: "friends", icon: i.$yI, text: "Friends" },
        { id: "nitro", icon: i.tvc, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: i.U1X, text: "Shop", useCustomGradient: !0 },
    ],
    T = l.p.map((e) => ({ label: e, value: e, id: e })),
    N = Object.fromEntries(
        l.p.map((e) => [
            e,
            Object.keys(s.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [n, i, l] = s.A.unsafe_rawColors[e].resolve().rgba(),
                        r =
                            (0.299 * n + 0.587 * i + 0.114 * l) / 255 > 0.5
                                ? s.A.unsafe_rawColors.OPACITY_BLACK_28
                                : s.A.unsafe_rawColors.OPACITY_WHITE_28,
                        d = (0, a.jsx)("span", {
                            className: o.oP,
                            style: { background: `rgb(${n}, ${i}, ${l})`, border: `1px solid ${r.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: d };
                }),
        ]),
    );
