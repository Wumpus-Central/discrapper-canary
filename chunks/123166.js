var n,
    o,
    i = e(860511),
    a = e(65978),
    u = i.process,
    c = i.Deno,
    f = (u && u.versions) || (c && c.version),
    p = f && f.v8;
p && (o = (n = p.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
    !o && a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (o = +n[1]),
    (r.exports = o);
