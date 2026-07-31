r.d(e, { t: () => c });
let n = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
];
function c(t) {
    let e = t;
    if (
        (14 === e.length && (e = e.replace(/\./g, "").replace(/-/g, "")),
        11 !== e.length || !/^\d+$/.test(e) || n.includes(e))
    )
        return !1;
    let r = 0;
    for (let t = 0; t < 9; t++) r += Number.parseInt(e.charAt(t), 10) * (10 - t);
    let c = 11 - (r % 11);
    if ((c >= 10 && (c = 0), e.charAt(9) !== c.toString())) return !1;
    r = 0;
    for (let t = 0; t < 10; t++) r += Number.parseInt(e.charAt(t), 10) * (11 - t);
    let a = 11 - (r % 11);
    return a >= 10 && (a = 0), e.charAt(10) === a.toString();
}
