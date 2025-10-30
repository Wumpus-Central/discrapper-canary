n.d(t, {
    GR: () => i,
    Wu: () => r,
    dj: () => a,
    w9: () => s,
});
let r = {
        零: 0,
        〇: 0,
        一: 1,
        二: 2,
        三: 3,
        四: 4,
        五: 5,
        六: 6,
        七: 7,
        八: 8,
        九: 9,
        十: 10,
    },
    i = {
        日: 0,
        月: 1,
        火: 2,
        水: 3,
        木: 4,
        金: 5,
        土: 6,
    };
function a(e) {
    return String(e)
        .replace(/\u2019/g, "'")
        .replace(/\u201D/g, '"')
        .replace(/\u3000/g, " ")
        .replace(/\uFFE5/g, "\xA5")
        .replace(
            /[\uFF01\uFF03-\uFF06\uFF08\uFF09\uFF0C-\uFF19\uFF1C-\uFF1F\uFF21-\uFF3B\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5E]/g,
            o,
        );
}
function o(e) {
    return String.fromCharCode(e.charCodeAt(0) - 65248);
}
function s(e) {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        "十" === i ? (t = 0 === t ? r[i] : t * r[i]) : (t += r[i]);
    }
    return t;
}
