var r = n(895829),
    i = /%[sdv%]/g,
    o = function (e) {
        var t = 1,
            n = arguments,
            r = n.length;
        return e.replace(i, function (e) {
            if (t >= r) return e;
            var i = n[t];
            switch (((t += 1), e)) {
                case '%%':
                    return '%';
                case '%s':
                    return String(i);
                case '%d':
                    return Number(i);
                case '%v':
                    return '';
            }
        });
    },
    a = function (e, t, n) {
        var r = [e + '=' + (t.format instanceof Function ? t.format(t.push ? n : n[t.name]) : t.format)];
        if (t.names)
            for (var i = 0; i < t.names.length; i += 1) {
                var a = t.names[i];
                t.name ? r.push(n[t.name][a]) : r.push(n[t.names[i]]);
            }
        else r.push(n[t.name]);
        return o.apply(null, r);
    },
    s = ['v', 'o', 's', 'i', 'u', 'e', 'p', 'c', 'b', 't', 'r', 'z', 'a'],
    l = ['i', 'c', 'b', 'a'];
e.exports = function (e, t) {
    (t = t || {}),
        null == e.version && (e.version = 0),
        null == e.name && (e.name = ' '),
        e.media.forEach(function (e) {
            null == e.payloads && (e.payloads = '');
        });
    var n = t.outerOrder || s,
        i = t.innerOrder || l,
        o = [];
    return (
        n.forEach(function (t) {
            r[t].forEach(function (n) {
                n.name in e && null != e[n.name]
                    ? o.push(a(t, n, e))
                    : n.push in e &&
                      null != e[n.push] &&
                      e[n.push].forEach(function (e) {
                          o.push(a(t, n, e));
                      });
            });
        }),
        e.media.forEach(function (e) {
            o.push(a('m', r.m[0], e)),
                i.forEach(function (t) {
                    r[t].forEach(function (n) {
                        n.name in e && null != e[n.name]
                            ? o.push(a(t, n, e))
                            : n.push in e &&
                              null != e[n.push] &&
                              e[n.push].forEach(function (e) {
                                  o.push(a(t, n, e));
                              });
                    });
                });
        }),
        o.join('\r\n') + '\r\n'
    );
};
