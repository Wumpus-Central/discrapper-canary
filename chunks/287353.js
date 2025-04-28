var e,
    o,
    i = r(127849),
    u = r(476078),
    c = i.process,
    a = i.Deno,
    f = (c && c.versions) || (a && a.version),
    s = f && f.v8;
s && (o = (e = s.split('.'))[0] > 0 && e[0] < 4 ? 1 : +(e[0] + e[1])), !o && u && (!(e = u.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = u.match(/Chrome\/(\d+)/)) && (o = +e[1]), (t.exports = o);
