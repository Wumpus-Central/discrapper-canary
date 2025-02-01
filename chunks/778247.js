var i = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
    r = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
    a = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
    s = n(245413),
    o = n(780177),
    l = n(957578).Buffer;
e.exports = function (e, t) {
    var n,
        u = e.toString(),
        c = u.match(i);
    if (c) {
        var d = 'aes' + c[1],
            f = l.from(c[2], 'hex'),
            _ = l.from(c[3].replace(/[\r\n]/g, ''), 'base64'),
            p = s(t, f.slice(0, 8), parseInt(c[1], 10)).key,
            h = [],
            m = o.createDecipheriv(d, p, f);
        h.push(m.update(_)), h.push(m.final()), (n = l.concat(h));
    } else {
        var g = u.match(a);
        n = l.from(g[2].replace(/[\r\n]/g, ''), 'base64');
    }
    return {
        tag: u.match(r)[1],
        data: n
    };
};
