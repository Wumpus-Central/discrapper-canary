r.d(t, { CT: () => a, M0: () => i, tS: () => s, uk: () => n });
let n = { 零: 0, 〇: 0, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 },
    s = { 天: 0, 日: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 };
function a(e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
        let s = e[r];
        "十" === s ? (t = 0 === t ? n[s] : t * n[s]) : (t += n[s]);
    }
    return t;
}
function i(e) {
    let t = "";
    for (let r = 0; r < e.length; r++) t += n[e[r]];
    return parseInt(t);
}
