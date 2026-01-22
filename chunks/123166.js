var r,
    i,
    a = n(860511),
    s = n(65978),
    o = a.process,
    l = a.Deno,
    c = (o && o.versions) || (l && l.version),
    u = c && c.v8;
u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
    !i && s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (i = +r[1]),
    (e.exports = i);
