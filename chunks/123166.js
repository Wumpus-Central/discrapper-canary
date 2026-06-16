"use strict";
var i,
    r,
    s = n(860511),
    a = n(65978),
    o = s.process,
    l = s.Deno,
    u = (o && o.versions) || (l && l.version),
    c = u && u.v8;
c && (r = (i = c.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
    !r && a && (!(i = a.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = a.match(/Chrome\/(\d+)/)) && (r = +i[1]),
    (e.exports = r);
