var r,
    n,
    o = a(161581),
    _ = a(626544),
    i = o.process,
    c = o.Deno,
    s = (i && i.versions) || (c && c.version),
    E = s && s.v8;
E && (n = (r = E.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !n && _ && (!(r = _.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = _.match(/Chrome\/(\d+)/)) && (n = +r[1]), (t.exports = n);
