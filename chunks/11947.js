"use strict";
n.d(t, { CT: () => a, M0: () => s, tS: () => i, uk: () => r });
let r = { 零: 0, 〇: 0, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 },
    i = { 天: 0, 日: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 };
function a(e) {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        "十" === i ? (t = 0 === t ? r[i] : t * r[i]) : (t += r[i]);
    }
    return t;
}
function s(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) t += r[e[n]];
    return parseInt(t);
}
