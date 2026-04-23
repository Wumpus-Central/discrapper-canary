var n,
    o,
    i = e(860511),
    u = e(65978),
    a = i.process,
    c = i.Deno,
    f = (a && a.versions) || (c && c.version),
    s = f && f.v8;
s && (o = (n = s.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
    !o && u && (!(n = u.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = u.match(/Chrome\/(\d+)/)) && (o = +n[1]),
    (r.exports = o);
