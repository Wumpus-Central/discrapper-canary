"use strict";
var r,
    i,
    s = n(860511),
    a = n(65978),
    o = s.process,
    l = s.Deno,
    u = (o && o.versions) || (l && l.version),
    c = u && u.v8;
c && (i = (r = c.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
    !i && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = +r[1]),
    (e.exports = i);
