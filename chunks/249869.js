((t.WEEKDAY_OFFSET = t.NUMBER = void 0),
    (t.zhStringToNumber = function (e) {
        let r = 0;
        for (let n = 0; n < e.length; n++) {
            let a = e[n];
            "\u5341" === a ? (r = 0 === r ? t.NUMBER[a] : r * t.NUMBER[a]) : (r += t.NUMBER[a]);
        }
        return r;
    }),
    (t.zhStringToYear = function (e) {
        let r = "";
        for (let n = 0; n < e.length; n++) {
            let a = e[n];
            r += t.NUMBER[a];
        }
        return parseInt(r);
    }),
    (t.NUMBER = {
        零: 0,
        一: 1,
        二: 2,
        兩: 2,
        三: 3,
        四: 4,
        五: 5,
        六: 6,
        七: 7,
        八: 8,
        九: 9,
        十: 10,
        廿: 20,
        卅: 30,
    }),
    (t.WEEKDAY_OFFSET = { 天: 0, 日: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 }));
