"use strict";
n.d(t, { E1: () => c, Tw: () => a, Uf: () => s, YP: () => u, kC: () => l, w6: () => o }), n(321073);
var r = n(659416),
    i = n(926966);
function a(e) {
    switch (e) {
        case r.H9.TIMED:
            return i.default.QWtuVg;
        case r.H9.GAME:
            return i.default.O25YR6;
        case r.H9.VOCAL:
            return i.default.H3duTc;
        case r.H9.STREAM:
            return i.default["42HYbe"];
        case r.H9.VIDEO:
            return i.default.JL7P6v;
        case r.H9.CHAT:
            return i.default.fL6KvR;
    }
}
function s(e) {
    switch (e) {
        case r.sb.MILD:
            return i.default.gdD8VB;
        case r.sb.SPICY:
            return i.default.Roh4Oo;
        case r.sb.UNHINGED:
            return i.default["7ztkBW"];
    }
}
function o(e) {
    switch (e) {
        case r.sb.MILD:
            return i.default.RxsXLw;
        case r.sb.SPICY:
            return i.default.Ui44nR;
        case r.sb.UNHINGED:
            return i.default.g5zcuA;
    }
}
function l(e) {
    switch (e) {
        case r.Ob.RUNNING:
            return i.default["g/dWKm"];
        case r.Ob.COMPLETED:
            return i.default.KJRlee;
        case r.Ob.FAILED:
            return i.default.C90rf6;
        case r.Ob.CANCELLED:
            return i.default["8/B/Tw"];
        case r.Ob.OFFERED:
        case r.Ob.ACCEPTED:
            return i.default["g/dWKm"];
    }
}
function u(e) {
    switch (e) {
        case r.H9.TIMED:
            return i.default["YnHr/8"];
        case r.H9.GAME:
            return i.default.Ej66dC;
        case r.H9.VOCAL:
            return i.default.F8f4Tg;
        case r.H9.STREAM:
            return i.default.UG7Hxz;
        case r.H9.VIDEO:
            return i.default["3fsMwn"];
        case r.H9.CHAT:
            return i.default["PT+BQ3"];
    }
}
function c(e) {
    let t = Math.floor(e / 3600),
        n = Math.floor((e % 3600) / 60),
        r = e % 60,
        i = [];
    return (
        t > 0 && i.push(`${t}h`),
        n > 0 && i.push(`${n}m`),
        0 === t && (0 === n || (r > 0 && n < 10)) && (r > 0 || 0 === i.length) && i.push(`${r}s`),
        i.join(" ")
    );
}
