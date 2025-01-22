(function () {
    var r = this,
        i = r.humanize,
        a = {};
    e.exports && (n = e.exports = a),
        (n.humanize = a),
        (a.noConflict = function () {
            return (r.humanize = i), this;
        }),
        (a.pad = function (e, n, r, i) {
            if (((e += ''), r ? r.length > 1 && (r = r.charAt(0)) : (r = ' '), 'right' == (i = void 0 === i ? 'left' : 'right'))) for (; e.length < n; ) e += r;
            else for (; e.length < n; ) e = r + e;
            return e;
        }),
        (a.time = function () {
            return new Date().getTime() / 1000;
        });
    var o = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        s = [0, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    (a.date = function (e, n) {
        var r = void 0 === n ? new Date() : new Date(n instanceof Date ? n : 1000 * n),
            i = /\\?([a-z])/gi,
            l = function (e, n) {
                return d[e] ? d[e]() : n;
            },
            u = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            c = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            d = {
                d: function () {
                    return a.pad(d.j(), 2, '0');
                },
                D: function () {
                    return d.l().slice(0, 3);
                },
                j: function () {
                    return r.getDate();
                },
                l: function () {
                    return u[d.w()];
                },
                N: function () {
                    return d.w() || 7;
                },
                S: function () {
                    var e = d.j();
                    return e > 4 && e < 21
                        ? 'th'
                        : {
                              1: 'st',
                              2: 'nd',
                              3: 'rd'
                          }[e % 10] || 'th';
                },
                w: function () {
                    return r.getDay();
                },
                z: function () {
                    return (d.L() ? s[d.n()] : o[d.n()]) + d.j() - 1;
                },
                W: function () {
                    var e = d.z() - d.N() + 1.5;
                    return a.pad(1 + Math.floor(Math.abs(e) / 7) + (e % 7 > 3.5 ? 1 : 0), 2, '0');
                },
                F: function () {
                    return c[r.getMonth()];
                },
                m: function () {
                    return a.pad(d.n(), 2, '0');
                },
                M: function () {
                    return d.F().slice(0, 3);
                },
                n: function () {
                    return r.getMonth() + 1;
                },
                t: function () {
                    return new Date(d.Y(), d.n(), 0).getDate();
                },
                L: function () {
                    return 1 === new Date(d.Y(), 1, 29).getMonth() ? 1 : 0;
                },
                o: function () {
                    var e = d.n(),
                        n = d.W();
                    return d.Y() + (12 === e && n < 9 ? -1 : 1 === e && n > 9);
                },
                Y: function () {
                    return r.getFullYear();
                },
                y: function () {
                    return String(d.Y()).slice(-2);
                },
                a: function () {
                    return r.getHours() > 11 ? 'pm' : 'am';
                },
                A: function () {
                    return d.a().toUpperCase();
                },
                B: function () {
                    var e = r.getTime() / 1000,
                        n = (e % 86400) + 3600;
                    n < 0 && (n += 86400);
                    var i = (n / 86.4) % 1000;
                    return e < 0 ? Math.ceil(i) : Math.floor(i);
                },
                g: function () {
                    return d.G() % 12 || 12;
                },
                G: function () {
                    return r.getHours();
                },
                h: function () {
                    return a.pad(d.g(), 2, '0');
                },
                H: function () {
                    return a.pad(d.G(), 2, '0');
                },
                i: function () {
                    return a.pad(r.getMinutes(), 2, '0');
                },
                s: function () {
                    return a.pad(r.getSeconds(), 2, '0');
                },
                u: function () {
                    return a.pad(1000 * r.getMilliseconds(), 6, '0');
                },
                O: function () {
                    var e = r.getTimezoneOffset(),
                        n = Math.abs(e);
                    return (e > 0 ? '-' : '+') + a.pad(100 * Math.floor(n / 60) + (n % 60), 4, '0');
                },
                P: function () {
                    var e = d.O();
                    return e.substr(0, 3) + ':' + e.substr(3, 2);
                },
                Z: function () {
                    return -(60 * r.getTimezoneOffset());
                },
                c: function () {
                    return 'Y-m-d\\TH:i:sP'.replace(i, l);
                },
                r: function () {
                    return 'D, d M Y H:i:s O'.replace(i, l);
                },
                U: function () {
                    return r.getTime() / 1000 || 0;
                }
            };
        return e.replace(i, l);
    }),
        (a.numberFormat = function (e, n, r, i) {
            (n = isNaN(n) ? 2 : Math.abs(n)), (r = void 0 === r ? '.' : r), (i = void 0 === i ? ',' : i);
            var a = e < 0 ? '-' : '',
                o = parseInt((e = Math.abs(+e || 0)).toFixed(n), 10) + '',
                s = o.length > 3 ? o.length % 3 : 0;
            return (
                a +
                (s ? o.substr(0, s) + i : '') +
                o.substr(s).replace(/(\d{3})(?=\d)/g, '$1' + i) +
                (n
                    ? r +
                      Math.abs(e - o)
                          .toFixed(n)
                          .slice(2)
                    : '')
            );
        }),
        (a.naturalDay = function (e, n) {
            (e = void 0 === e ? a.time() : e), (n = void 0 === n ? 'Y-m-d' : n);
            var r = 86400,
                i = new Date(),
                o = new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime() / 1000;
            if (e < o && e >= o - r) return 'yesterday';
            if (e >= o && e < o + r) return 'today';
            if (e >= o + r && e < o + 2 * r) return 'tomorrow';
            return a.date(n, e);
        }),
        (a.relativeTime = function (e) {
            e = void 0 === e ? a.time() : e;
            var n = a.time(),
                r = n - e;
            if (r < 2 && r > -2) return (r >= 0 ? 'just ' : '') + 'now';
            if (r < 60 && r > -60) return r >= 0 ? Math.floor(r) + ' seconds ago' : 'in ' + Math.floor(-r) + ' seconds';
            if (r < 120 && r > -120) return r >= 0 ? 'about a minute ago' : 'in about a minute';
            if (r < 3600 && r > -3600) return r >= 0 ? Math.floor(r / 60) + ' minutes ago' : 'in ' + Math.floor(-r / 60) + ' minutes';
            if (r < 7200 && r > -7200) return r >= 0 ? 'about an hour ago' : 'in about an hour';
            if (r < 86400 && r > -86400) return r >= 0 ? Math.floor(r / 3600) + ' hours ago' : 'in ' + Math.floor(-r / 3600) + ' hours';
            var i = 172800;
            if (r < 172800 && r > -i) return r >= 0 ? '1 day ago' : 'in 1 day';
            var o = 2505600;
            if (r < 2505600 && r > -o) return r >= 0 ? Math.floor(r / 86400) + ' days ago' : 'in ' + Math.floor(-r / 86400) + ' days';
            var s = 5184000;
            if (r < 5184000 && r > -s) return r >= 0 ? 'about a month ago' : 'in about a month';
            var l = parseInt(a.date('Y', n), 10),
                u = parseInt(a.date('Y', e), 10),
                c = 12 * l + parseInt(a.date('n', n), 10) - (12 * u + parseInt(a.date('n', e), 10));
            if (c < 12 && c > -12) return c >= 0 ? c + ' months ago' : 'in ' + -c + ' months';
            var d = l - u;
            return d < 2 && d > -2 ? (d >= 0 ? 'a year ago' : 'in a year') : d >= 0 ? d + ' years ago' : 'in ' + -d + ' years';
        }),
        (a.ordinal = function (e) {
            var n = (e = isNaN((e = parseInt(e, 10))) ? 0 : e) < 0 ? '-' : '',
                r = (e = Math.abs(e)) % 100;
            return (
                n +
                e +
                (r > 4 && r < 21
                    ? 'th'
                    : {
                          1: 'st',
                          2: 'nd',
                          3: 'rd'
                      }[e % 10] || 'th')
            );
        }),
        (a.filesize = function (e, n, r, i, o, s) {
            return ((n = void 0 === n ? 1024 : n), e <= 0) ? '0 bytes' : (e < n && void 0 === r && (r = 0), void 0 === s && (s = ' '), a.intword(e, ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'], n, r, i, o, s));
        }),
        (a.intword = function (e, n, r, i, o, s, l) {
            (c = (n = n || ['', 'K', 'M', 'B', 'T']).length - 1), (r = r || 1000), (i = isNaN(i) ? 2 : Math.abs(i)), (o = o || '.'), (s = s || ','), (l = l || '');
            for (var u, c, d = 0; d < n.length; d++)
                if (e < Math.pow(r, d + 1)) {
                    c = d;
                    break;
                }
            u = e / Math.pow(r, c);
            var f = n[c] ? l + n[c] : '';
            return a.numberFormat(u, i, o, s) + f;
        }),
        (a.linebreaks = function (e) {
            return '<p>' + (e = (e = (e = (e = (e = e.replace(/^([\n|\r]*)/, '')).replace(/([\n|\r]*)$/, '')).replace(/(\r\n|\n|\r)/g, '\n')).replace(/(\n{2,})/g, '</p><p>')).replace(/\n/g, '<br />')) + '</p>';
        }),
        (a.nl2br = function (e) {
            return e.replace(/(\r\n|\n|\r)/g, '<br />');
        }),
        (a.truncatechars = function (e, n) {
            return e.length <= n ? e : e.substr(0, n) + '\u2026';
        }),
        (a.truncatewords = function (e, n) {
            var r = e.split(' ');
            return r.length < n ? e : r.slice(0, n).join(' ') + '\u2026';
        });
}).call(this);
