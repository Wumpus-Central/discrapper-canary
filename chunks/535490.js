Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.WEEKDAY_OFFSET = t.NUMBER = void 0),
    (t.toHankaku = function (e) {
        return String(e)
            .replace(/\u2019/g, "'")
            .replace(/\u201D/g, '"')
            .replace(/\u3000/g, " ")
            .replace(/\uFFE5/g, "\xa5")
            .replace(
                /[\uFF01\uFF03-\uFF06\uFF08\uFF09\uFF0C-\uFF19\uFF1C-\uFF1F\uFF21-\uFF3B\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5E]/g,
                r,
            );
    }),
    (t.jaStringToNumber = function (e) {
        let r = 0;
        for (let n = 0; n < e.length; n++) {
            let a = e[n];
            "\u5341" === a ? (r = 0 === r ? t.NUMBER[a] : r * t.NUMBER[a]) : (r += t.NUMBER[a]);
        }
        return r;
    }),
    (t.NUMBER = {
        \u96F6: 0,
        \u3007: 0,
        \u4E00: 1,
        \u4E8C: 2,
        \u4E09: 3,
        \u56DB: 4,
        \u4E94: 5,
        \u516D: 6,
        \u4E03: 7,
        \u516B: 8,
        \u4E5D: 9,
        \u5341: 10,
    }),
    (t.WEEKDAY_OFFSET = { \u65E5: 0, \u6708: 1, \u706B: 2, \u6C34: 3, \u6728: 4, \u91D1: 5, \u571F: 6 });
function r(e) {
    return String.fromCharCode(e.charCodeAt(0) - 65248);
}
