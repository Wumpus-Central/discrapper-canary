"use strict";
var n,
    o,
    s = e(308227),
    i = e(13934),
    u = s.process,
    c = s.Deno,
    a = (u && u.versions) || (c && c.version),
    f = a && a.v8;
f && (o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
    !o && i && (!(n = i.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = i.match(/Chrome\/(\d+)/)) && (o = +n[1]),
    (t.exports = o);
