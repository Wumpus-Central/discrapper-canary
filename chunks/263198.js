n.d(t, { C: () => u });
var r = n(688619),
    i = n.n(r),
    a = n(803038);
let o = [
        "#94E0CF",
        "#9AF0B1",
        "#9A90FF",
        "#9A53FF",
        "#FDA6E4",
        "#FFE6C0",
        "#EFB4AA",
        "#56B69F",
        "#29C566",
        "#5348CA",
        "#6D24D4",
        "#CA48C8",
        "#F0AE29",
        "#DF4232",
    ],
    s = [0, 45, 90, 135, 180, 225, 270, 315],
    l = [20, 40, 60, 80],
    c = ["analogous", "complementary", "split-complementary", "triadic"];
function u() {
    let e = a.Mc.getCurrentConfig({ location: "generateRandomColorOptions" }).v2EditorEnabled,
        t = l[Math.floor(Math.random() * l.length)];
    if (!(e || 0.8 > Math.random()))
        return {
            type: "solid",
            colors: [o[Math.floor(Math.random() * o.length)]],
            intensity: t,
        };
    let n = s[Math.floor(Math.random() * s.length)];
    if ("path1" == (0.2 > Math.random() ? "path1" : "path2")) {
        let e = Math.floor(Math.random() * o.length),
            r = Math.floor(Math.random() * o.length);
        for (; r === e; ) r = Math.floor(Math.random() * o.length);
        return {
            type: "gradient",
            colors: [o[e], o[r]],
            angle: n,
            intensity: t,
            gradientType: "two-color",
        };
    }
    {
        let e = o[Math.floor(Math.random() * o.length)],
            r = c[Math.floor(Math.random() * c.length)];
        return {
            type: "gradient",
            colors: m(e, r),
            angle: n,
            intensity: t,
            gradientType: r,
        };
    }
}
function d(e, t, n, r) {
    return [
        i()
            .hsl(r - 30, t, n)
            .hex(),
        e,
        i()
            .hsl(r + 30, t, n)
            .hex(),
    ];
}
function f(e, t, n, r) {
    let a = (r + 180) % 360,
        o = i().hsl(a, t, n).hex();
    return [e, i().mix(e, o, 0.5).hex(), o];
}
function p(e, t, n, r) {
    let a = (r + 150) % 360,
        o = (r + 210) % 360;
    return [e, i().hsl(a, t, n).hex(), i().hsl(o, t, n).hex()];
}
function _(e, t, n, r) {
    let a = (r + 120) % 360,
        o = (r + 240) % 360;
    return [e, i().hsl(a, t, n).hex(), i().hsl(o, t, n).hex()];
}
function m(e, t) {
    try {
        let n = i()(e),
            r = n.get("hsl.h"),
            a = n.get("hsl.s"),
            o = n.get("hsl.l");
        switch (t) {
            case "analogous":
                return d(e, a, o, r);
            case "complementary":
                return f(e, a, o, r);
            case "split-complementary":
                return p(e, a, o, r);
            case "triadic":
                return _(e, a, o, r);
            default:
                return [e];
        }
    } catch (t) {
        return [e];
    }
}
