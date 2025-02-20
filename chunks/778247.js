var r = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
    i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
    o = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
    a = n(245413),
    s = n(780177),
    l = n(957578).Buffer;
e.exports = function (e, t) {
    var n,
        c = e.toString(),
        u = c.match(r);
    if (u) {
        var d = 'aes' + u[1],
            f = l.from(u[2], 'hex'),
            p = l.from(u[3].replace(/[\r\n]/g, ''), 'base64'),
            _ = a(t, f.slice(0, 8), parseInt(u[1], 10)).key,
            h = [],
            m = s.createDecipheriv(d, _, f);
        h.push(m.update(p)), h.push(m.final()), (n = l.concat(h));
    } else {
        var g = c.match(o);
        n = l.from(g[2].replace(/[\r\n]/g, ''), 'base64');
    }
    return {
        tag: c.match(i)[1],
        data: n
    };
};
