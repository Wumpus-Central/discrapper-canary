t.d(e, { v: () => r });
var a = t(839006);
function r(n) {
    let e;
    (0, a.V1)(n === n.toLowerCase(), "Expected extension to be lowercase"),
        (0, a.V1)("-u-" === n.slice(0, 3), "Expected extension to be a Unicode locale extension");
    let t = [],
        r = [],
        i = n.length,
        s = 3;
    for (; s < i; ) {
        let u,
            o = n.indexOf("-", s);
        u = -1 === o ? i - s : o - s;
        let d = n.slice(s, s + u);
        (0, a.V1)(u >= 2, "Expected a subtag to have at least 2 characters"),
            void 0 === e && 2 != u
                ? -1 === t.indexOf(d) && t.push(d)
                : 2 === u
                  ? ((e = { key: d, value: "" }), void 0 === r.find((n) => n.key === e?.key) && r.push(e))
                  : e?.value === ""
                    ? (e.value = d)
                    : ((0, a.V1)(void 0 !== e, "Expected keyword to be defined"), (e.value += "-" + d)),
            (s += u + 1);
    }
    return { attributes: t, keywords: r };
}
