var a = t(410323),
    n = t(639438),
    o = t(139257),
    c = o.Set,
    s = o.proto,
    i = a(s.forEach),
    f = a(s.keys),
    u = f(new c()).next;
e.exports = function (e, r, t) {
    return t ? n({ iterator: f(e), next: u }, r) : i(e, r);
};
