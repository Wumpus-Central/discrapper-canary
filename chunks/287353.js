var r,
    n,
    _ = a(127849),
    o = a(476078),
    i = _.process,
    c = _.Deno,
    s = (i && i.versions) || (c && c.version),
    E = s && s.v8;
E && (n = (r = E.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !n && o && (!(r = o.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = o.match(/Chrome\/(\d+)/)) && (n = +r[1]), (t.exports = n);
