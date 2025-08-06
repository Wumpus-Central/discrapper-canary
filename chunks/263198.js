n.d(t, { C: () => c });
var r = n(688619),
    i = n.n(r);
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
    a = [0, 45, 90, 135, 180, 225, 270, 315],
    s = [20, 40, 60, 80],
    l = ["analogous", "complementary", "split-complementary", "triadic"];
function c() {
    let e = s[Math.floor(Math.random() * s.length)];
    if (!(0.8 > Math.random()))
        return {
            type: "solid",
            colors: [o[Math.floor(Math.random() * o.length)]],
            intensity: e,
        };
    let t = a[Math.floor(Math.random() * a.length)];
    if ("path1" == (0.2 > Math.random() ? "path1" : "path2")) {
        let n = Math.floor(Math.random() * o.length),
            r = Math.floor(Math.random() * o.length);
        for (; r === n; ) r = Math.floor(Math.random() * o.length);
        return {
            type: "gradient",
            colors: [o[n], o[r]],
            angle: t,
            intensity: e,
            gradientType: "two-color",
        };
    }
    {
        let n = o[Math.floor(Math.random() * o.length)],
            r = l[Math.floor(Math.random() * l.length)];
        return {
            type: "gradient",
            colors: p(n, r),
            angle: t,
            intensity: e,
            gradientType: r,
        };
    }
}
function u(e, t, n, r) {
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
function d(e, t, n, r) {
    let o = (r + 180) % 360,
        a = i().hsl(o, t, n).hex();
    return [e, i().mix(e, a, 0.5).hex(), a];
}
function f(e, t, n, r) {
    let o = (r + 150) % 360,
        a = (r + 210) % 360;
    return [e, i().hsl(o, t, n).hex(), i().hsl(a, t, n).hex()];
}
function _(e, t, n, r) {
    let o = (r + 120) % 360,
        a = (r + 240) % 360;
    return [e, i().hsl(o, t, n).hex(), i().hsl(a, t, n).hex()];
}
function p(e, t) {
    try {
        let n = i()(e),
            r = n.get("hsl.h"),
            o = n.get("hsl.s"),
            a = n.get("hsl.l");
        switch (t) {
            case "analogous":
                return u(e, o, a, r);
            case "complementary":
                return d(e, o, a, r);
            case "split-complementary":
                return f(e, o, a, r);
            case "triadic":
                return _(e, o, a, r);
            default:
                return [e];
        }
    } catch (t) {
        return [e];
    }
}
