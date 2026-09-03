!(function () {
    var t = function (e) {
        e = e || {};
        var t,
            r,
            n,
            a,
            o,
            i,
            s,
            l,
            c,
            u,
            h,
            p,
            f,
            d,
            m,
            g,
            b = {
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
        ((f = {}).ff = "u" > typeof InstallTrigger),
            (f.chrome = !!window.chrome),
            (f.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0),
            (f.ie = !1),
            (f.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0),
            (f.supported = f.chrome || f.ff || f.opera);
        var y = [];
        (h = function () {}), (l = p = !1);
        var v = {};
        (v.ready = function () {
            (l = !0), v.reset(), h();
        }),
            (v.reset = function () {
                l &&
                    ((y = []),
                    (c = !1),
                    (u = !1),
                    i.clearRect(0, 0, a, n),
                    i.drawImage(s, 0, 0, a, n),
                    x.setIcon(o),
                    window.clearTimeout(d),
                    window.clearTimeout(m));
            }),
            (v.start = function () {
                if (l && !u) {
                    var e = function () {
                        (c = y[0]), (u = !1), y.length > 0 && (y.shift(), v.start());
                    };
                    if (y.length > 0) {
                        u = !0;
                        var r = function () {
                            ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(
                                function (e) {
                                    e in y[0].options && (t[e] = y[0].options[e]);
                                },
                            ),
                                S.run(
                                    y[0].options,
                                    function () {
                                        e();
                                    },
                                    !1,
                                );
                        };
                        c
                            ? S.run(
                                  c.options,
                                  function () {
                                      r();
                                  },
                                  !0,
                              )
                            : r();
                    }
                }
            });
        var w = {},
            _ = function (e) {
                return (
                    (e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n),
                    (e.x = a * e.x),
                    (e.y = n * e.y),
                    (e.w = a * e.w),
                    (e.h = n * e.h),
                    (e.len = ("" + e.n).length),
                    e
                );
            };
        function M(e) {
            if (e.paused || e.ended || p) return !1;
            try {
                i.clearRect(0, 0, a, n), i.drawImage(e, 0, 0, a, n);
            } catch (e) {}
            (m = setTimeout(function () {
                M(e);
            }, S.duration)),
                x.setIcon(o);
        }
        (w.circle = function (e) {
            e = _(e);
            var r = !1;
            2 === e.len
                ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w), (r = !0))
                : e.len >= 3 && ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w), (r = !0)),
                i.clearRect(0, 0, a, n),
                i.drawImage(s, 0, 0, a, n),
                i.beginPath(),
                (i.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? 0.85 : 1)) + "px " + t.fontFamily),
                (i.textAlign = "center"),
                r
                    ? (i.moveTo(e.x + e.w / 2, e.y),
                      i.lineTo(e.x + e.w - e.h / 2, e.y),
                      i.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2),
                      i.lineTo(e.x + e.w, e.y + e.h - e.h / 2),
                      i.quadraticCurveTo(e.x + e.w, e.y + e.h, e.x + e.w - e.h / 2, e.y + e.h),
                      i.lineTo(e.x + e.h / 2, e.y + e.h),
                      i.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2),
                      i.lineTo(e.x, e.y + e.h / 2),
                      i.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y))
                    : i.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI),
                (i.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")"),
                i.fill(),
                i.closePath(),
                i.beginPath(),
                i.stroke(),
                (i.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")"),
                "number" == typeof e.n && e.n > 999
                    ? i.fillText(
                          (e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+",
                          Math.floor(e.x + e.w / 2),
                          Math.floor(e.y + e.h - 0.2 * e.h),
                      )
                    : i.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.15 * e.h)),
                i.closePath();
        }),
            (w.rectangle = function (e) {
                e = _(e);
                2 === e.len
                    ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w))
                    : e.len >= 3 && ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w)),
                    i.clearRect(0, 0, a, n),
                    i.drawImage(s, 0, 0, a, n),
                    i.beginPath(),
                    (i.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? 0.9 : 1)) + "px " + t.fontFamily),
                    (i.textAlign = "center"),
                    (i.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")"),
                    i.fillRect(e.x, e.y, e.w, e.h),
                    (i.fillStyle =
                        "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")"),
                    "number" == typeof e.n && e.n > 999
                        ? i.fillText(
                              (e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+",
                              Math.floor(e.x + e.w / 2),
                              Math.floor(e.y + e.h - 0.2 * e.h),
                          )
                        : i.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - 0.15 * e.h)),
                    i.closePath();
            });
        var x = {};
        function C(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, r, n) {
                return t + t + r + r + n + n;
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return !!t && { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) };
        }
        function R(e, t) {
            var r,
                n = {};
            for (r in e) n[r] = e[r];
            for (r in t) n[r] = t[r];
            return n;
        }
        (x.getIcon = function () {
            var e = !1;
            return (
                t.element
                    ? (e = t.element)
                    : t.elementId
                      ? (e = g.getElementById(t.elementId)).setAttribute("href", e.getAttribute("src"))
                      : !1 ===
                            (e = (function () {
                                for (
                                    var e = g.getElementsByTagName("head")[0].getElementsByTagName("link"),
                                        t = e.length,
                                        r = t - 1;
                                    r >= 0;
                                    r--
                                )
                                    if (/(^|\s)icon(\s|$)/i.test(e[r].getAttribute("rel"))) return e[r];
                                return !1;
                            })()) &&
                        ((e = g.createElement("link")).setAttribute("rel", "icon"),
                        g.getElementsByTagName("head")[0].appendChild(e)),
                e.setAttribute("type", "image/png"),
                e
            );
        }),
            (x.setIcon = function (e) {
                var n = e.toDataURL("image/png");
                if ((t.dataUrl && t.dataUrl(n), t.element))
                    t.element.setAttribute("href", n), t.element.setAttribute("src", n);
                else if (t.elementId) {
                    var a = g.getElementById(t.elementId);
                    a.setAttribute("href", n), a.setAttribute("src", n);
                } else if (f.ff || f.opera) {
                    var o = r;
                    (r = g.createElement("link")),
                        f.opera && r.setAttribute("rel", "icon"),
                        r.setAttribute("rel", "icon"),
                        r.setAttribute("type", "image/png"),
                        g.getElementsByTagName("head")[0].appendChild(r),
                        r.setAttribute("href", n),
                        o.parentNode && o.parentNode.removeChild(o);
                } else r.setAttribute("href", n);
            });
        var S = {};
        (S.duration = 40),
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
            (S.run = function (e, r, n, a) {
                var i = S.types[g.hidden || g.msHidden || g.webkitHidden || g.mozHidden ? "none" : t.animation];
                ((a = !0 === n ? (void 0 !== a ? a : i.length - 1) : void 0 !== a ? a : 0),
                (r = r || function () {}),
                a < i.length && a >= 0)
                    ? (w[t.type](R(e, i[a])),
                      (d = setTimeout(function () {
                          n ? (a -= 1) : (a += 1), S.run(e, r, n, a);
                      }, S.duration)),
                      x.setIcon(o))
                    : r();
            }),
            ((t = R(b, e)).bgColor = C(t.bgColor)),
            (t.textColor = C(t.textColor)),
            (t.position = t.position.toLowerCase()),
            (t.animation = S.types["" + t.animation] ? t.animation : b.animation),
            (g = t.win.document);
        var E = t.position.indexOf("up") > -1,
            A = t.position.indexOf("left") > -1;
        if (E || A)
            for (var T = 0; T < S.types["" + t.animation].length; T++) {
                var P = S.types["" + t.animation][T];
                E && (P.y < 0.6 ? (P.y = P.y - 0.4) : (P.y = P.y - 2 * P.y + (1 - P.w))),
                    A && (P.x < 0.6 ? (P.x = P.x - 0.4) : (P.x = P.x - 2 * P.x + (1 - P.h))),
                    (S.types["" + t.animation][T] = P);
            }
        return (
            (t.type = w["" + t.type] ? t.type : b.type),
            (r = x.getIcon()),
            (o = document.createElement("canvas")),
            (s = document.createElement("img")),
            r.hasAttribute("href")
                ? (s.setAttribute("crossOrigin", "anonymous"),
                  (s.onload = function () {
                      (n = s.height > 0 ? s.height : 32),
                          (a = s.width > 0 ? s.width : 32),
                          (o.height = n),
                          (o.width = a),
                          (i = o.getContext("2d")),
                          v.ready();
                  }),
                  s.setAttribute("src", r.getAttribute("href")))
                : ((s.onload = function () {
                      (n = 32),
                          (a = 32),
                          (s.height = n),
                          (s.width = a),
                          (o.height = n),
                          (o.width = a),
                          (i = o.getContext("2d")),
                          v.ready();
                  }),
                  s.setAttribute("src", "")),
            {
                badge: function (e, t) {
                    (t = ("string" == typeof t ? { animation: t } : t) || {}),
                        (h = function () {
                            try {
                                if ("number" == typeof e ? e > 0 : "" !== e) {
                                    var r = { type: "badge", options: { n: e } };
                                    if (
                                        ("animation" in t &&
                                            S.types["" + t.animation] &&
                                            (r.options.animation = "" + t.animation),
                                        "type" in t && w["" + t.type] && (r.options.type = "" + t.type),
                                        ["bgColor", "textColor"].forEach(function (e) {
                                            e in t && (r.options[e] = C(t[e]));
                                        }),
                                        ["fontStyle", "fontFamily"].forEach(function (e) {
                                            e in t && (r.options[e] = t[e]);
                                        }),
                                        y.push(r),
                                        y.length > 100)
                                    )
                                        throw Error("Too many badges requests in queue.");
                                    v.start();
                                } else v.reset();
                            } catch (e) {
                                throw Error("Error setting badge. Message: " + e.message);
                            }
                        }),
                        l && h();
                },
                video: function (e) {
                    (h = function () {
                        try {
                            if ("stop" === e) {
                                (p = !0), v.reset(), (p = !1);
                                return;
                            }
                            e.addEventListener(
                                "play",
                                function () {
                                    M(this);
                                },
                                !1,
                            );
                        } catch (e) {
                            throw Error("Error setting video. Message: " + e.message);
                        }
                    }),
                        l && h();
                },
                image: function (e) {
                    (h = function () {
                        try {
                            var t = e.width,
                                r = e.height,
                                s = document.createElement("img"),
                                l = t / a < r / n ? t / a : r / n;
                            s.setAttribute("crossOrigin", "anonymous"),
                                (s.onload = function () {
                                    i.clearRect(0, 0, a, n), i.drawImage(s, 0, 0, a, n), x.setIcon(o);
                                }),
                                s.setAttribute("src", e.getAttribute("src")),
                                (s.height = r / l),
                                (s.width = t / l);
                        } catch (e) {
                            throw Error("Error setting image. Message: " + e.message);
                        }
                    }),
                        l && h();
                },
                webcam: function (e) {
                    if (
                        ((window.URL && window.URL.createObjectURL) ||
                            ((window.URL = window.URL || {}),
                            (window.URL.createObjectURL = function (e) {
                                return e;
                            })),
                        f.supported)
                    ) {
                        var t = !1;
                        (navigator.getUserMedia =
                            navigator.getUserMedia ||
                            navigator.oGetUserMedia ||
                            navigator.msGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.webkitGetUserMedia),
                            (h = function () {
                                try {
                                    if ("stop" === e) {
                                        (p = !0), v.reset(), (p = !1);
                                        return;
                                    }
                                    ((t = document.createElement("video")).width = a),
                                        (t.height = n),
                                        navigator.getUserMedia(
                                            { video: !0, audio: !1 },
                                            function (e) {
                                                (t.src = URL.createObjectURL(e)), t.play(), M(t);
                                            },
                                            function () {},
                                        );
                                } catch (e) {
                                    throw Error("Error setting webcam. Message: " + e.message);
                                }
                            }),
                            l && h();
                    }
                },
                reset: v.reset,
                browser: { supported: f.supported },
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
