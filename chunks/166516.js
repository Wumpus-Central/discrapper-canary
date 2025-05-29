!(function () {
    var t = function (e) {
        e = e || {};
        var t,
            n,
            r,
            o,
            i,
            a,
            c,
            s,
            d,
            l,
            p,
            u,
            h,
            f,
            y,
            g,
            w = {
                bgColor: '#d00',
                textColor: '#fff',
                fontFamily: 'sans-serif',
                fontStyle: 'bold',
                type: 'circle',
                position: 'down',
                animation: 'slide',
                elementId: !1,
                dataUrl: !1,
                win: window
            };
        ((h = {}).ff = 'undefined' != typeof InstallTrigger), (h.chrome = !!window.chrome), (h.opera = !!window.opera || navigator.userAgent.indexOf('Opera') >= 0), (h.ie = !1), (h.safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0), (h.supported = h.chrome || h.ff || h.opera);
        var m = [];
        (p = function () {}), (s = u = !1);
        var x = {};
        (x.ready = function () {
            (s = !0), x.reset(), p();
        }),
            (x.reset = function () {
                s && ((m = []), (d = !1), (l = !1), a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), E.setIcon(i), window.clearTimeout(f), window.clearTimeout(y));
            }),
            (x.start = function () {
                if (s && !l) {
                    var e = function () {
                        (d = m[0]), (l = !1), m.length > 0 && (m.shift(), x.start());
                    };
                    if (m.length > 0) {
                        l = !0;
                        var n = function () {
                            ['type', 'animation', 'bgColor', 'textColor', 'fontFamily', 'fontStyle'].forEach(function (e) {
                                e in m[0].options && (t[e] = m[0].options[e]);
                            }),
                                I.run(
                                    m[0].options,
                                    function () {
                                        e();
                                    },
                                    !1
                                );
                        };
                        d
                            ? I.run(
                                  d.options,
                                  function () {
                                      n();
                                  },
                                  !0
                              )
                            : n();
                    }
                }
            });
        var b = {},
            v = function (e) {
                return (e.n = 'number' == typeof e.n ? Math.abs(0 | e.n) : e.n), (e.x = o * e.x), (e.y = r * e.y), (e.w = o * e.w), (e.h = r * e.h), (e.len = ('' + e.n).length), e;
            };
        function C(e) {
            if (e.paused || e.ended || u) return !1;
            try {
                a.clearRect(0, 0, o, r), a.drawImage(e, 0, 0, o, r);
            } catch (e) {}
            (y = setTimeout(function () {
                C(e);
            }, I.duration)),
                E.setIcon(i);
        }
        (b.circle = function (e) {
            e = v(e);
            var n = !1;
            2 === e.len ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w), (n = !0)) : e.len >= 3 && ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w), (n = !0)), a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), a.beginPath(), (a.font = t.fontStyle + ' ' + Math.floor(e.h * (e.n > 99 ? 0.85 : 1)) + 'px ' + t.fontFamily), (a.textAlign = 'center'), n ? (a.moveTo(e.x + e.w / 2, e.y), a.lineTo(e.x + e.w - e.h / 2, e.y), a.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2), a.lineTo(e.x + e.w, e.y + e.h - e.h / 2), a.quadraticCurveTo(e.x + e.w, e.y + e.h, e.x + e.w - e.h / 2, e.y + e.h), a.lineTo(e.x + e.h / 2, e.y + e.h), a.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2), a.lineTo(e.x, e.y + e.h / 2), a.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y)) : a.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI), (a.fillStyle = 'rgba(' + t.bgColor.r + ',' + t.bgColor.g + ',' + t.bgColor.b + ',' + e.o + ')'), a.fill(), a.closePath(), a.beginPath(), a.stroke(), (a.fillStyle = 'rgba(' + t.textColor.r + ',' + t.textColor.g + ',' + t.textColor.b + ',' + e.o + ')'), 'number' == typeof e.n && e.n > 999 ? a.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1000)) + 'k+', Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.2 * e.h)) : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.15 * e.h)), a.closePath();
        }),
            (b.rectangle = function (e) {
                e = v(e);
                2 === e.len ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w)) : e.len >= 3 && ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w)), a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), a.beginPath(), (a.font = t.fontStyle + ' ' + Math.floor(e.h * (e.n > 99 ? 0.9 : 1)) + 'px ' + t.fontFamily), (a.textAlign = 'center'), (a.fillStyle = 'rgba(' + t.bgColor.r + ',' + t.bgColor.g + ',' + t.bgColor.b + ',' + e.o + ')'), a.fillRect(e.x, e.y, e.w, e.h), (a.fillStyle = 'rgba(' + t.textColor.r + ',' + t.textColor.g + ',' + t.textColor.b + ',' + e.o + ')'), 'number' == typeof e.n && e.n > 999 ? a.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1000)) + 'k+', Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.2 * e.h)) : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.15 * e.h)), a.closePath();
            });
        var E = {};
        function A(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, r) {
                return t + t + n + n + r + r;
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return (
                !!t && {
                    r: parseInt(t[1], 16),
                    g: parseInt(t[2], 16),
                    b: parseInt(t[3], 16)
                }
            );
        }
        function R(e, t) {
            var n,
                r = {};
            for (n in e) r[n] = e[n];
            for (n in t) r[n] = t[n];
            return r;
        }
        (E.getIcon = function () {
            var e = !1;
            return (
                t.element
                    ? (e = t.element)
                    : t.elementId
                      ? (e = g.getElementById(t.elementId)).setAttribute('href', e.getAttribute('src'))
                      : !1 ===
                            (e = (function () {
                                for (var e = g.getElementsByTagName('head')[0].getElementsByTagName('link'), t = e.length, n = t - 1; n >= 0; n--) if (/(^|\s)icon(\s|$)/i.test(e[n].getAttribute('rel'))) return e[n];
                                return !1;
                            })()) && ((e = g.createElement('link')).setAttribute('rel', 'icon'), g.getElementsByTagName('head')[0].appendChild(e)),
                e.setAttribute('type', 'image/png'),
                e
            );
        }),
            (E.setIcon = function (e) {
                var r = e.toDataURL('image/png');
                if ((t.dataUrl && t.dataUrl(r), t.element)) t.element.setAttribute('href', r), t.element.setAttribute('src', r);
                else if (t.elementId) {
                    var o = g.getElementById(t.elementId);
                    o.setAttribute('href', r), o.setAttribute('src', r);
                } else if (h.ff || h.opera) {
                    var i = n;
                    (n = g.createElement('link')), h.opera && n.setAttribute('rel', 'icon'), n.setAttribute('rel', 'icon'), n.setAttribute('type', 'image/png'), g.getElementsByTagName('head')[0].appendChild(n), n.setAttribute('href', r), i.parentNode && i.parentNode.removeChild(i);
                } else n.setAttribute('href', r);
            });
        var I = {};
        (I.duration = 40),
            (I.types = {}),
            (I.types.fade = [
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.1
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.2
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.3
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.4
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.5
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.6
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.7
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.8
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.9
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                }
            ]),
            (I.types.none = [
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                }
            ]),
            (I.types.pop = [
                {
                    x: 1,
                    y: 1,
                    w: 0,
                    h: 0,
                    o: 1
                },
                {
                    x: 0.9,
                    y: 0.9,
                    w: 0.1,
                    h: 0.1,
                    o: 1
                },
                {
                    x: 0.8,
                    y: 0.8,
                    w: 0.2,
                    h: 0.2,
                    o: 1
                },
                {
                    x: 0.7,
                    y: 0.7,
                    w: 0.3,
                    h: 0.3,
                    o: 1
                },
                {
                    x: 0.6,
                    y: 0.6,
                    w: 0.4,
                    h: 0.4,
                    o: 1
                },
                {
                    x: 0.5,
                    y: 0.5,
                    w: 0.5,
                    h: 0.5,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                }
            ]),
            (I.types.popFade = [
                {
                    x: 0.75,
                    y: 0.75,
                    w: 0,
                    h: 0,
                    o: 0
                },
                {
                    x: 0.65,
                    y: 0.65,
                    w: 0.1,
                    h: 0.1,
                    o: 0.2
                },
                {
                    x: 0.6,
                    y: 0.6,
                    w: 0.2,
                    h: 0.2,
                    o: 0.4
                },
                {
                    x: 0.55,
                    y: 0.55,
                    w: 0.3,
                    h: 0.3,
                    o: 0.6
                },
                {
                    x: 0.5,
                    y: 0.5,
                    w: 0.4,
                    h: 0.4,
                    o: 0.8
                },
                {
                    x: 0.45,
                    y: 0.45,
                    w: 0.5,
                    h: 0.5,
                    o: 0.9
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                }
            ]),
            (I.types.slide = [
                {
                    x: 0.4,
                    y: 1,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.9,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.9,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.8,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.7,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.6,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.5,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1
                }
            ]),
            (I.run = function (e, n, r, o) {
                var a = I.types[g.hidden || g.msHidden || g.webkitHidden || g.mozHidden ? 'none' : t.animation];
                if (((o = !0 === r ? (void 0 !== o ? o : a.length - 1) : void 0 !== o ? o : 0), (n = n || function () {}), !(o < a.length) || !(o >= 0))) return void n();
                b[t.type](R(e, a[o])),
                    (f = setTimeout(function () {
                        r ? (o -= 1) : (o += 1), I.run(e, n, r, o);
                    }, I.duration)),
                    E.setIcon(i);
            }),
            ((t = R(w, e)).bgColor = A(t.bgColor)),
            (t.textColor = A(t.textColor)),
            (t.position = t.position.toLowerCase()),
            (t.animation = I.types['' + t.animation] ? t.animation : w.animation),
            (g = t.win.document);
        var T = t.position.indexOf('up') > -1,
            _ = t.position.indexOf('left') > -1;
        if (T || _)
            for (var M = 0; M < I.types['' + t.animation].length; M++) {
                var U = I.types['' + t.animation][M];
                T && (U.y < 0.6 ? (U.y = U.y - 0.4) : (U.y = U.y - 2 * U.y + (1 - U.w))), _ && (U.x < 0.6 ? (U.x = U.x - 0.4) : (U.x = U.x - 2 * U.x + (1 - U.h))), (I.types['' + t.animation][M] = U);
            }
        return (
            (t.type = b['' + t.type] ? t.type : w.type),
            (n = E.getIcon()),
            (i = document.createElement('canvas')),
            (c = document.createElement('img')),
            n.hasAttribute('href')
                ? (c.setAttribute('crossOrigin', 'anonymous'),
                  (c.onload = function () {
                      (r = c.height > 0 ? c.height : 32), (o = c.width > 0 ? c.width : 32), (i.height = r), (i.width = o), (a = i.getContext('2d')), x.ready();
                  }),
                  c.setAttribute('src', n.getAttribute('href')))
                : ((c.onload = function () {
                      (r = 32), (o = 32), (c.height = r), (c.width = o), (i.height = r), (i.width = o), (a = i.getContext('2d')), x.ready();
                  }),
                  c.setAttribute('src', '')),
            {
                badge: function (e, t) {
                    (t = ('string' == typeof t ? { animation: t } : t) || {}),
                        (p = function () {
                            try {
                                if ('number' == typeof e ? e > 0 : '' !== e) {
                                    var n = {
                                        type: 'badge',
                                        options: { n: e }
                                    };
                                    if (
                                        ('animation' in t && I.types['' + t.animation] && (n.options.animation = '' + t.animation),
                                        'type' in t && b['' + t.type] && (n.options.type = '' + t.type),
                                        ['bgColor', 'textColor'].forEach(function (e) {
                                            e in t && (n.options[e] = A(t[e]));
                                        }),
                                        ['fontStyle', 'fontFamily'].forEach(function (e) {
                                            e in t && (n.options[e] = t[e]);
                                        }),
                                        m.push(n),
                                        m.length > 100)
                                    )
                                        throw Error('Too many badges requests in queue.');
                                    x.start();
                                } else x.reset();
                            } catch (e) {
                                throw Error('Error setting badge. Message: ' + e.message);
                            }
                        }),
                        s && p();
                },
                video: function (e) {
                    (p = function () {
                        try {
                            if ('stop' === e) {
                                (u = !0), x.reset(), (u = !1);
                                return;
                            }
                            e.addEventListener(
                                'play',
                                function () {
                                    C(this);
                                },
                                !1
                            );
                        } catch (e) {
                            throw Error('Error setting video. Message: ' + e.message);
                        }
                    }),
                        s && p();
                },
                image: function (e) {
                    (p = function () {
                        try {
                            var t = e.width,
                                n = e.height,
                                c = document.createElement('img'),
                                s = t / o < n / r ? t / o : n / r;
                            c.setAttribute('crossOrigin', 'anonymous'),
                                (c.onload = function () {
                                    a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), E.setIcon(i);
                                }),
                                c.setAttribute('src', e.getAttribute('src')),
                                (c.height = n / s),
                                (c.width = t / s);
                        } catch (e) {
                            throw Error('Error setting image. Message: ' + e.message);
                        }
                    }),
                        s && p();
                },
                webcam: function (e) {
                    if (
                        ((window.URL && window.URL.createObjectURL) ||
                            ((window.URL = window.URL || {}),
                            (window.URL.createObjectURL = function (e) {
                                return e;
                            })),
                        h.supported)
                    ) {
                        var t = !1;
                        (navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia),
                            (p = function () {
                                try {
                                    if ('stop' === e) {
                                        (u = !0), x.reset(), (u = !1);
                                        return;
                                    }
                                    ((t = document.createElement('video')).width = o),
                                        (t.height = r),
                                        navigator.getUserMedia(
                                            {
                                                video: !0,
                                                audio: !1
                                            },
                                            function (e) {
                                                (t.src = URL.createObjectURL(e)), t.play(), C(t);
                                            },
                                            function () {}
                                        );
                                } catch (e) {
                                    throw Error('Error setting webcam. Message: ' + e.message);
                                }
                            }),
                            s && p();
                    }
                },
                reset: x.reset,
                browser: { supported: h.supported }
            }
        );
    };
    'undefined' != typeof define && define.amd
        ? define([], function () {
              return t;
          })
        : e.exports
          ? (e.exports = t)
          : (this.Favico = t);
})();
