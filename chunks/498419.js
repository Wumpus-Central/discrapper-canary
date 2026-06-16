!(function () {
    var t = function (e) {
        "use strict";
        e = e || {};
        var t,
            n,
            i,
            r,
            s,
            a,
            o,
            l,
            u,
            c,
            d,
            _,
            h,
            f,
            p,
            E,
            m = {
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
        ((h = {}).ff = "u" > typeof InstallTrigger),
            (h.chrome = !!window.chrome),
            (h.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0),
            (h.ie = !1),
            (h.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0),
            (h.supported = h.chrome || h.ff || h.opera);
        var g = [];
        (d = function () {}), (l = _ = !1);
        var A = {};
        (A.ready = function () {
            (l = !0), A.reset(), d();
        }),
            (A.reset = function () {
                l &&
                    ((g = []),
                    (u = !1),
                    (c = !1),
                    a.clearRect(0, 0, r, i),
                    a.drawImage(o, 0, 0, r, i),
                    y.setIcon(s),
                    window.clearTimeout(f),
                    window.clearTimeout(p));
            }),
            (A.start = function () {
                if (l && !c) {
                    var e = function () {
                        (u = g[0]), (c = !1), g.length > 0 && (g.shift(), A.start());
                    };
                    if (g.length > 0) {
                        c = !0;
                        var n = function () {
                            ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(
                                function (e) {
                                    e in g[0].options && (t[e] = g[0].options[e]);
                                },
                            ),
                                v.run(
                                    g[0].options,
                                    function () {
                                        e();
                                    },
                                    !1,
                                );
                        };
                        u
                            ? v.run(
                                  u.options,
                                  function () {
                                      n();
                                  },
                                  !0,
                              )
                            : n();
                    }
                }
            });
        var I = {},
            T = function (e) {
                return (
                    (e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n),
                    (e.x = r * e.x),
                    (e.y = i * e.y),
                    (e.w = r * e.w),
                    (e.h = i * e.h),
                    (e.len = ("" + e.n).length),
                    e
                );
            };
        function S(e) {
            if (e.paused || e.ended || _) return !1;
            try {
                a.clearRect(0, 0, r, i), a.drawImage(e, 0, 0, r, i);
            } catch (e) {}
            (p = setTimeout(function () {
                S(e);
            }, v.duration)),
                y.setIcon(s);
        }
        (I.circle = function (e) {
            e = T(e);
            var n = !1;
            2 === e.len
                ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w), (n = !0))
                : e.len >= 3 && ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w), (n = !0)),
                a.clearRect(0, 0, r, i),
                a.drawImage(o, 0, 0, r, i),
                a.beginPath(),
                (a.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? 0.85 : 1)) + "px " + t.fontFamily),
                (a.textAlign = "center"),
                n
                    ? (a.moveTo(e.x + e.w / 2, e.y),
                      a.lineTo(e.x + e.w - e.h / 2, e.y),
                      a.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2),
                      a.lineTo(e.x + e.w, e.y + e.h - e.h / 2),
                      a.quadraticCurveTo(e.x + e.w, e.y + e.h, e.x + e.w - e.h / 2, e.y + e.h),
                      a.lineTo(e.x + e.h / 2, e.y + e.h),
                      a.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2),
                      a.lineTo(e.x, e.y + e.h / 2),
                      a.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y))
                    : a.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI),
                (a.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")"),
                a.fill(),
                a.closePath(),
                a.beginPath(),
                a.stroke(),
                (a.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")"),
                "number" == typeof e.n && e.n > 999
                    ? a.fillText(
                          (e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+",
                          Math.floor(e.x + e.w / 2),
                          Math.floor(e.y + e.h - 0.2 * e.h),
                      )
                    : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.15 * e.h)),
                a.closePath();
        }),
            (I.rectangle = function (e) {
                e = T(e);
                2 === e.len
                    ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w))
                    : e.len >= 3 && ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w)),
                    a.clearRect(0, 0, r, i),
                    a.drawImage(o, 0, 0, r, i),
                    a.beginPath(),
                    (a.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? 0.9 : 1)) + "px " + t.fontFamily),
                    (a.textAlign = "center"),
                    (a.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")"),
                    a.fillRect(e.x, e.y, e.w, e.h),
                    (a.fillStyle =
                        "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")"),
                    "number" == typeof e.n && e.n > 999
                        ? a.fillText(
                              (e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+",
                              Math.floor(e.x + e.w / 2),
                              Math.floor(e.y + e.h - 0.2 * e.h),
                          )
                        : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.15 * e.h)),
                    a.closePath();
            });
        var y = {};
        function C(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
                return t + t + n + n + i + i;
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return !!t && { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) };
        }
        function N(e, t) {
            var n,
                i = {};
            for (n in e) i[n] = e[n];
            for (n in t) i[n] = t[n];
            return i;
        }
        (y.getIcon = function () {
            var e = !1;
            return (
                t.element
                    ? (e = t.element)
                    : t.elementId
                      ? (e = E.getElementById(t.elementId)).setAttribute("href", e.getAttribute("src"))
                      : !1 ===
                            (e = (function () {
                                for (
                                    var e = E.getElementsByTagName("head")[0].getElementsByTagName("link"),
                                        t = e.length,
                                        n = t - 1;
                                    n >= 0;
                                    n--
                                )
                                    if (/(^|\s)icon(\s|$)/i.test(e[n].getAttribute("rel"))) return e[n];
                                return !1;
                            })()) &&
                        ((e = E.createElement("link")).setAttribute("rel", "icon"),
                        E.getElementsByTagName("head")[0].appendChild(e)),
                e.setAttribute("type", "image/png"),
                e
            );
        }),
            (y.setIcon = function (e) {
                var i = e.toDataURL("image/png");
                if ((t.dataUrl && t.dataUrl(i), t.element))
                    t.element.setAttribute("href", i), t.element.setAttribute("src", i);
                else if (t.elementId) {
                    var r = E.getElementById(t.elementId);
                    r.setAttribute("href", i), r.setAttribute("src", i);
                } else if (h.ff || h.opera) {
                    var s = n;
                    (n = E.createElement("link")),
                        h.opera && n.setAttribute("rel", "icon"),
                        n.setAttribute("rel", "icon"),
                        n.setAttribute("type", "image/png"),
                        E.getElementsByTagName("head")[0].appendChild(n),
                        n.setAttribute("href", i),
                        s.parentNode && s.parentNode.removeChild(s);
                } else n.setAttribute("href", i);
            });
        var v = {};
        (v.duration = 40),
            (v.types = {}),
            (v.types.fade = [
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
            (v.types.none = [{ x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 }]),
            (v.types.pop = [
                { x: 1, y: 1, w: 0, h: 0, o: 1 },
                { x: 0.9, y: 0.9, w: 0.1, h: 0.1, o: 1 },
                { x: 0.8, y: 0.8, w: 0.2, h: 0.2, o: 1 },
                { x: 0.7, y: 0.7, w: 0.3, h: 0.3, o: 1 },
                { x: 0.6, y: 0.6, w: 0.4, h: 0.4, o: 1 },
                { x: 0.5, y: 0.5, w: 0.5, h: 0.5, o: 1 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (v.types.popFade = [
                { x: 0.75, y: 0.75, w: 0, h: 0, o: 0 },
                { x: 0.65, y: 0.65, w: 0.1, h: 0.1, o: 0.2 },
                { x: 0.6, y: 0.6, w: 0.2, h: 0.2, o: 0.4 },
                { x: 0.55, y: 0.55, w: 0.3, h: 0.3, o: 0.6 },
                { x: 0.5, y: 0.5, w: 0.4, h: 0.4, o: 0.8 },
                { x: 0.45, y: 0.45, w: 0.5, h: 0.5, o: 0.9 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (v.types.slide = [
                { x: 0.4, y: 1, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.8, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.7, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.6, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.5, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (v.run = function (e, n, i, r) {
                var a = v.types[E.hidden || E.msHidden || E.webkitHidden || E.mozHidden ? "none" : t.animation];
                ((r = !0 === i ? (void 0 !== r ? r : a.length - 1) : void 0 !== r ? r : 0),
                (n = n || function () {}),
                r < a.length && r >= 0)
                    ? (I[t.type](N(e, a[r])),
                      (f = setTimeout(function () {
                          i ? (r -= 1) : (r += 1), v.run(e, n, i, r);
                      }, v.duration)),
                      y.setIcon(s))
                    : n();
            }),
            ((t = N(m, e)).bgColor = C(t.bgColor)),
            (t.textColor = C(t.textColor)),
            (t.position = t.position.toLowerCase()),
            (t.animation = v.types["" + t.animation] ? t.animation : m.animation),
            (E = t.win.document);
        var R = t.position.indexOf("up") > -1,
            O = t.position.indexOf("left") > -1;
        if (R || O)
            for (var b = 0; b < v.types["" + t.animation].length; b++) {
                var D = v.types["" + t.animation][b];
                R && (D.y < 0.6 ? (D.y = D.y - 0.4) : (D.y = D.y - 2 * D.y + (1 - D.w))),
                    O && (D.x < 0.6 ? (D.x = D.x - 0.4) : (D.x = D.x - 2 * D.x + (1 - D.h))),
                    (v.types["" + t.animation][b] = D);
            }
        return (
            (t.type = I["" + t.type] ? t.type : m.type),
            (n = y.getIcon()),
            (s = document.createElement("canvas")),
            (o = document.createElement("img")),
            n.hasAttribute("href")
                ? (o.setAttribute("crossOrigin", "anonymous"),
                  (o.onload = function () {
                      (i = o.height > 0 ? o.height : 32),
                          (r = o.width > 0 ? o.width : 32),
                          (s.height = i),
                          (s.width = r),
                          (a = s.getContext("2d")),
                          A.ready();
                  }),
                  o.setAttribute("src", n.getAttribute("href")))
                : ((o.onload = function () {
                      (i = 32),
                          (r = 32),
                          (o.height = i),
                          (o.width = r),
                          (s.height = i),
                          (s.width = r),
                          (a = s.getContext("2d")),
                          A.ready();
                  }),
                  o.setAttribute("src", "")),
            {
                badge: function (e, t) {
                    (t = ("string" == typeof t ? { animation: t } : t) || {}),
                        (d = function () {
                            try {
                                if ("number" == typeof e ? e > 0 : "" !== e) {
                                    var n = { type: "badge", options: { n: e } };
                                    if (
                                        ("animation" in t &&
                                            v.types["" + t.animation] &&
                                            (n.options.animation = "" + t.animation),
                                        "type" in t && I["" + t.type] && (n.options.type = "" + t.type),
                                        ["bgColor", "textColor"].forEach(function (e) {
                                            e in t && (n.options[e] = C(t[e]));
                                        }),
                                        ["fontStyle", "fontFamily"].forEach(function (e) {
                                            e in t && (n.options[e] = t[e]);
                                        }),
                                        g.push(n),
                                        g.length > 100)
                                    )
                                        throw Error("Too many badges requests in queue.");
                                    A.start();
                                } else A.reset();
                            } catch (e) {
                                throw Error("Error setting badge. Message: " + e.message);
                            }
                        }),
                        l && d();
                },
                video: function (e) {
                    (d = function () {
                        try {
                            if ("stop" === e) {
                                (_ = !0), A.reset(), (_ = !1);
                                return;
                            }
                            e.addEventListener(
                                "play",
                                function () {
                                    S(this);
                                },
                                !1,
                            );
                        } catch (e) {
                            throw Error("Error setting video. Message: " + e.message);
                        }
                    }),
                        l && d();
                },
                image: function (e) {
                    (d = function () {
                        try {
                            var t = e.width,
                                n = e.height,
                                o = document.createElement("img"),
                                l = t / r < n / i ? t / r : n / i;
                            o.setAttribute("crossOrigin", "anonymous"),
                                (o.onload = function () {
                                    a.clearRect(0, 0, r, i), a.drawImage(o, 0, 0, r, i), y.setIcon(s);
                                }),
                                o.setAttribute("src", e.getAttribute("src")),
                                (o.height = n / l),
                                (o.width = t / l);
                        } catch (e) {
                            throw Error("Error setting image. Message: " + e.message);
                        }
                    }),
                        l && d();
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
                        (navigator.getUserMedia =
                            navigator.getUserMedia ||
                            navigator.oGetUserMedia ||
                            navigator.msGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.webkitGetUserMedia),
                            (d = function () {
                                try {
                                    if ("stop" === e) {
                                        (_ = !0), A.reset(), (_ = !1);
                                        return;
                                    }
                                    ((t = document.createElement("video")).width = r),
                                        (t.height = i),
                                        navigator.getUserMedia(
                                            { video: !0, audio: !1 },
                                            function (e) {
                                                (t.src = URL.createObjectURL(e)), t.play(), S(t);
                                            },
                                            function () {},
                                        );
                                } catch (e) {
                                    throw Error("Error setting webcam. Message: " + e.message);
                                }
                            }),
                            l && d();
                    }
                },
                reset: A.reset,
                browser: { supported: h.supported },
            }
        );
    };
    "u" > typeof define && define.amd
        ? define([], function () {
              return t;
          })
        : e.exports
          ? (e.exports = t)
          : (this.Favico = t);
})();
