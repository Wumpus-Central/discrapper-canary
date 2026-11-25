!(function () {
    var e = function (t) {
        t = t || {};
        var e,
            n,
            i,
            r,
            o,
            a,
            s,
            c,
            l,
            u,
            h,
            f,
            d,
            p,
            g,
            m,
            _ = {
                bgColor: "#d00",
                textColor: "#fff",
                fontFamily: "sans-serif",
                fontStyle: "bold",
                type: "circle",
                position: "down",
                animation: "slide",
                elementId: !1,
                dataUrl: !1,
                win: window,
            };
        (((d = {}).ff = "u" > typeof InstallTrigger),
            (d.chrome = !!window.chrome),
            (d.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0),
            (d.ie = !1),
            (d.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0),
            (d.supported = d.chrome || d.ff || d.opera));
        var v = [];
        ((h = function () {}), (c = f = !1));
        var y = {};
        ((y.ready = function () {
            ((c = !0), y.reset(), h());
        }),
            (y.reset = function () {
                c &&
                    ((v = []),
                    (l = !1),
                    (u = !1),
                    a.clearRect(0, 0, r, i),
                    a.drawImage(s, 0, 0, r, i),
                    E.setIcon(o),
                    window.clearTimeout(p),
                    window.clearTimeout(g));
            }),
            (y.start = function () {
                if (c && !u) {
                    var t = function () {
                        ((l = v[0]), (u = !1), v.length > 0 && (v.shift(), y.start()));
                    };
                    if (v.length > 0) {
                        u = !0;
                        var n = function () {
                            (["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(
                                function (t) {
                                    t in v[0].options && (e[t] = v[0].options[t]);
                                },
                            ),
                                S.run(
                                    v[0].options,
                                    function () {
                                        t();
                                    },
                                    !1,
                                ));
                        };
                        l
                            ? S.run(
                                  l.options,
                                  function () {
                                      n();
                                  },
                                  !0,
                              )
                            : n();
                    }
                }
            }));
        var w = {},
            b = function (t) {
                return (
                    (t.n = "number" == typeof t.n ? Math.abs(0 | t.n) : t.n),
                    (t.x = r * t.x),
                    (t.y = i * t.y),
                    (t.w = r * t.w),
                    (t.h = i * t.h),
                    (t.len = ("" + t.n).length),
                    t
                );
            };
        function x(t) {
            if (t.paused || t.ended || f) return !1;
            try {
                (a.clearRect(0, 0, r, i), a.drawImage(t, 0, 0, r, i));
            } catch (t) {}
            ((g = setTimeout(function () {
                x(t);
            }, S.duration)),
                E.setIcon(o));
        }
        ((w.circle = function (t) {
            t = b(t);
            var n = !1;
            (2 === t.len
                ? ((t.x = t.x - 0.4 * t.w), (t.w = 1.4 * t.w), (n = !0))
                : t.len >= 3 && ((t.x = t.x - 0.65 * t.w), (t.w = 1.65 * t.w), (n = !0)),
                a.clearRect(0, 0, r, i),
                a.drawImage(s, 0, 0, r, i),
                a.beginPath(),
                (a.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? 0.85 : 1)) + "px " + e.fontFamily),
                (a.textAlign = "center"),
                n
                    ? (a.moveTo(t.x + t.w / 2, t.y),
                      a.lineTo(t.x + t.w - t.h / 2, t.y),
                      a.quadraticCurveTo(t.x + t.w, t.y, t.x + t.w, t.y + t.h / 2),
                      a.lineTo(t.x + t.w, t.y + t.h - t.h / 2),
                      a.quadraticCurveTo(t.x + t.w, t.y + t.h, t.x + t.w - t.h / 2, t.y + t.h),
                      a.lineTo(t.x + t.h / 2, t.y + t.h),
                      a.quadraticCurveTo(t.x, t.y + t.h, t.x, t.y + t.h - t.h / 2),
                      a.lineTo(t.x, t.y + t.h / 2),
                      a.quadraticCurveTo(t.x, t.y, t.x + t.h / 2, t.y))
                    : a.arc(t.x + t.w / 2, t.y + t.h / 2, t.h / 2, 0, 2 * Math.PI),
                (a.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")"),
                a.fill(),
                a.closePath(),
                a.beginPath(),
                a.stroke(),
                (a.fillStyle = "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")"),
                "number" == typeof t.n && t.n > 999
                    ? a.fillText(
                          (t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+",
                          Math.floor(t.x + t.w / 2),
                          Math.floor(t.y + t.h - 0.2 * t.h),
                      )
                    : a.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - 0.15 * t.h)),
                a.closePath());
        }),
            (w.rectangle = function (t) {
                (2 === (t = b(t)).len
                    ? ((t.x = t.x - 0.4 * t.w), (t.w = 1.4 * t.w))
                    : t.len >= 3 && ((t.x = t.x - 0.65 * t.w), (t.w = 1.65 * t.w)),
                    a.clearRect(0, 0, r, i),
                    a.drawImage(s, 0, 0, r, i),
                    a.beginPath(),
                    (a.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? 0.9 : 1)) + "px " + e.fontFamily),
                    (a.textAlign = "center"),
                    (a.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")"),
                    a.fillRect(t.x, t.y, t.w, t.h),
                    (a.fillStyle =
                        "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")"),
                    "number" == typeof t.n && t.n > 999
                        ? a.fillText(
                              (t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+",
                              Math.floor(t.x + t.w / 2),
                              Math.floor(t.y + t.h - 0.2 * t.h),
                          )
                        : a.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - 0.15 * t.h)),
                    a.closePath());
            }));
        var E = {};
        function T(t) {
            t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, i) {
                return e + e + n + n + i + i;
            });
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return !!e && { r: parseInt(e[1], 16), g: parseInt(e[2], 16), b: parseInt(e[3], 16) };
        }
        function A(t, e) {
            var n,
                i = {};
            for (n in t) i[n] = t[n];
            for (n in e) i[n] = e[n];
            return i;
        }
        ((E.getIcon = function () {
            var t = !1;
            return (
                e.element
                    ? (t = e.element)
                    : e.elementId
                      ? (t = m.getElementById(e.elementId)).setAttribute("href", t.getAttribute("src"))
                      : !1 ===
                            (t = (function () {
                                for (
                                    var t = m.getElementsByTagName("head")[0].getElementsByTagName("link"),
                                        e = t.length,
                                        n = e - 1;
                                    n >= 0;
                                    n--
                                )
                                    if (/(^|\s)icon(\s|$)/i.test(t[n].getAttribute("rel"))) return t[n];
                                return !1;
                            })()) &&
                        ((t = m.createElement("link")).setAttribute("rel", "icon"),
                        m.getElementsByTagName("head")[0].appendChild(t)),
                t.setAttribute("type", "image/png"),
                t
            );
        }),
            (E.setIcon = function (t) {
                var i = t.toDataURL("image/png");
                if ((e.dataUrl && e.dataUrl(i), e.element))
                    (e.element.setAttribute("href", i), e.element.setAttribute("src", i));
                else if (e.elementId) {
                    var r = m.getElementById(e.elementId);
                    (r.setAttribute("href", i), r.setAttribute("src", i));
                } else if (d.ff || d.opera) {
                    var o = n;
                    ((n = m.createElement("link")),
                        d.opera && n.setAttribute("rel", "icon"),
                        n.setAttribute("rel", "icon"),
                        n.setAttribute("type", "image/png"),
                        m.getElementsByTagName("head")[0].appendChild(n),
                        n.setAttribute("href", i),
                        o.parentNode && o.parentNode.removeChild(o));
                } else n.setAttribute("href", i);
            }));
        var S = {};
        ((S.duration = 40),
            (S.types = {}),
            (S.types.fade = [
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.1 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.2 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.3 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.4 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.5 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.6 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.7 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.8 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.9 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (S.types.none = [{ x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 }]),
            (S.types.pop = [
                { x: 1, y: 1, w: 0, h: 0, o: 1 },
                { x: 0.9, y: 0.9, w: 0.1, h: 0.1, o: 1 },
                { x: 0.8, y: 0.8, w: 0.2, h: 0.2, o: 1 },
                { x: 0.7, y: 0.7, w: 0.3, h: 0.3, o: 1 },
                { x: 0.6, y: 0.6, w: 0.4, h: 0.4, o: 1 },
                { x: 0.5, y: 0.5, w: 0.5, h: 0.5, o: 1 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (S.types.popFade = [
                { x: 0.75, y: 0.75, w: 0, h: 0, o: 0 },
                { x: 0.65, y: 0.65, w: 0.1, h: 0.1, o: 0.2 },
                { x: 0.6, y: 0.6, w: 0.2, h: 0.2, o: 0.4 },
                { x: 0.55, y: 0.55, w: 0.3, h: 0.3, o: 0.6 },
                { x: 0.5, y: 0.5, w: 0.4, h: 0.4, o: 0.8 },
                { x: 0.45, y: 0.45, w: 0.5, h: 0.5, o: 0.9 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (S.types.slide = [
                { x: 0.4, y: 1, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.8, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.7, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.6, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.5, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (S.run = function (t, n, i, r) {
                var a = S.types[m.hidden || m.msHidden || m.webkitHidden || m.mozHidden ? "none" : e.animation];
                ((r = !0 === i ? (void 0 !== r ? r : a.length - 1) : void 0 !== r ? r : 0),
                (n = n || function () {}),
                r < a.length && r >= 0)
                    ? (w[e.type](A(t, a[r])),
                      (p = setTimeout(function () {
                          (i ? (r -= 1) : (r += 1), S.run(t, n, i, r));
                      }, S.duration)),
                      E.setIcon(o))
                    : n();
            }),
            ((e = A(_, t)).bgColor = T(e.bgColor)),
            (e.textColor = T(e.textColor)),
            (e.position = e.position.toLowerCase()),
            (e.animation = S.types["" + e.animation] ? e.animation : _.animation),
            (m = e.win.document));
        var P = e.position.indexOf("up") > -1,
            R = e.position.indexOf("left") > -1;
        if (P || R)
            for (var C = 0; C < S.types["" + e.animation].length; C++) {
                var k = S.types["" + e.animation][C];
                (P && (k.y < 0.6 ? (k.y = k.y - 0.4) : (k.y = k.y - 2 * k.y + (1 - k.w))),
                    R && (k.x < 0.6 ? (k.x = k.x - 0.4) : (k.x = k.x - 2 * k.x + (1 - k.h))),
                    (S.types["" + e.animation][C] = k));
            }
        return (
            (e.type = w["" + e.type] ? e.type : _.type),
            (n = E.getIcon()),
            (o = document.createElement("canvas")),
            (s = document.createElement("img")),
            n.hasAttribute("href")
                ? (s.setAttribute("crossOrigin", "anonymous"),
                  (s.onload = function () {
                      ((i = s.height > 0 ? s.height : 32),
                          (r = s.width > 0 ? s.width : 32),
                          (o.height = i),
                          (o.width = r),
                          (a = o.getContext("2d")),
                          y.ready());
                  }),
                  s.setAttribute("src", n.getAttribute("href")))
                : ((s.onload = function () {
                      ((i = 32),
                          (r = 32),
                          (s.height = i),
                          (s.width = r),
                          (o.height = i),
                          (o.width = r),
                          (a = o.getContext("2d")),
                          y.ready());
                  }),
                  s.setAttribute("src", "")),
            {
                badge: function (t, e) {
                    ((e = ("string" == typeof e ? { animation: e } : e) || {}),
                        (h = function () {
                            try {
                                if ("number" == typeof t ? t > 0 : "" !== t) {
                                    var n = { type: "badge", options: { n: t } };
                                    if (
                                        ("animation" in e &&
                                            S.types["" + e.animation] &&
                                            (n.options.animation = "" + e.animation),
                                        "type" in e && w["" + e.type] && (n.options.type = "" + e.type),
                                        ["bgColor", "textColor"].forEach(function (t) {
                                            t in e && (n.options[t] = T(e[t]));
                                        }),
                                        ["fontStyle", "fontFamily"].forEach(function (t) {
                                            t in e && (n.options[t] = e[t]);
                                        }),
                                        v.push(n),
                                        v.length > 100)
                                    )
                                        throw Error("Too many badges requests in queue.");
                                    y.start();
                                } else y.reset();
                            } catch (t) {
                                throw Error("Error setting badge. Message: " + t.message);
                            }
                        }),
                        c && h());
                },
                video: function (t) {
                    ((h = function () {
                        try {
                            if ("stop" === t) {
                                ((f = !0), y.reset(), (f = !1));
                                return;
                            }
                            t.addEventListener(
                                "play",
                                function () {
                                    x(this);
                                },
                                !1,
                            );
                        } catch (t) {
                            throw Error("Error setting video. Message: " + t.message);
                        }
                    }),
                        c && h());
                },
                image: function (t) {
                    ((h = function () {
                        try {
                            var e = t.width,
                                n = t.height,
                                s = document.createElement("img"),
                                c = e / r < n / i ? e / r : n / i;
                            (s.setAttribute("crossOrigin", "anonymous"),
                                (s.onload = function () {
                                    (a.clearRect(0, 0, r, i), a.drawImage(s, 0, 0, r, i), E.setIcon(o));
                                }),
                                s.setAttribute("src", t.getAttribute("src")),
                                (s.height = n / c),
                                (s.width = e / c));
                        } catch (t) {
                            throw Error("Error setting image. Message: " + t.message);
                        }
                    }),
                        c && h());
                },
                webcam: function (t) {
                    if (
                        ((window.URL && window.URL.createObjectURL) ||
                            ((window.URL = window.URL || {}),
                            (window.URL.createObjectURL = function (t) {
                                return t;
                            })),
                        d.supported)
                    ) {
                        var e = !1;
                        ((navigator.getUserMedia =
                            navigator.getUserMedia ||
                            navigator.oGetUserMedia ||
                            navigator.msGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.webkitGetUserMedia),
                            (h = function () {
                                try {
                                    if ("stop" === t) {
                                        ((f = !0), y.reset(), (f = !1));
                                        return;
                                    }
                                    (((e = document.createElement("video")).width = r),
                                        (e.height = i),
                                        navigator.getUserMedia(
                                            { video: !0, audio: !1 },
                                            function (t) {
                                                ((e.src = URL.createObjectURL(t)), e.play(), x(e));
                                            },
                                            function () {},
                                        ));
                                } catch (t) {
                                    throw Error("Error setting webcam. Message: " + t.message);
                                }
                            }),
                            c && h());
                    }
                },
                reset: y.reset,
                browser: { supported: d.supported },
            }
        );
    };
    "u" > typeof define && define.amd
        ? define([], function () {
              return e;
          })
        : t.exports
          ? (t.exports = e)
          : (this.Favico = e);
})();
