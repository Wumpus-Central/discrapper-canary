!(function () {
    var e = function (t) {
        t = t || {};
        var e,
            o,
            n,
            r,
            i,
            a,
            s,
            l,
            h,
            c,
            f,
            u,
            d,
            y,
            p,
            g,
            w = {
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
        ((d = {}).ff = "undefined" != typeof InstallTrigger),
            (d.chrome = !!window.chrome),
            (d.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0),
            (d.ie = !1),
            (d.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0),
            (d.supported = d.chrome || d.ff || d.opera);
        var x = [];
        (f = function () {}), (l = u = !1);
        var m = {};
        (m.ready = function () {
            (l = !0), m.reset(), f();
        }),
            (m.reset = function () {
                l &&
                    ((x = []),
                    (h = !1),
                    (c = !1),
                    a.clearRect(0, 0, r, n),
                    a.drawImage(s, 0, 0, r, n),
                    E.setIcon(i),
                    window.clearTimeout(y),
                    window.clearTimeout(p));
            }),
            (m.start = function () {
                if (l && !c) {
                    var t = function () {
                        (h = x[0]), (c = !1), x.length > 0 && (x.shift(), m.start());
                    };
                    if (x.length > 0) {
                        c = !0;
                        var o = function () {
                            ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(
                                function (t) {
                                    t in x[0].options && (e[t] = x[0].options[t]);
                                },
                            ),
                                I.run(
                                    x[0].options,
                                    function () {
                                        t();
                                    },
                                    !1,
                                );
                        };
                        h
                            ? I.run(
                                  h.options,
                                  function () {
                                      o();
                                  },
                                  !0,
                              )
                            : o();
                    }
                }
            });
        var b = {},
            v = function (t) {
                return (
                    (t.n = "number" == typeof t.n ? Math.abs(0 | t.n) : t.n),
                    (t.x = r * t.x),
                    (t.y = n * t.y),
                    (t.w = r * t.w),
                    (t.h = n * t.h),
                    (t.len = ("" + t.n).length),
                    t
                );
            };
        function C(t) {
            if (t.paused || t.ended || u) return !1;
            try {
                a.clearRect(0, 0, r, n), a.drawImage(t, 0, 0, r, n);
            } catch (t) {}
            (p = setTimeout(function () {
                C(t);
            }, I.duration)),
                E.setIcon(i);
        }
        (b.circle = function (t) {
            t = v(t);
            var o = !1;
            2 === t.len
                ? ((t.x = t.x - 0.4 * t.w), (t.w = 1.4 * t.w), (o = !0))
                : t.len >= 3 && ((t.x = t.x - 0.65 * t.w), (t.w = 1.65 * t.w), (o = !0)),
                a.clearRect(0, 0, r, n),
                a.drawImage(s, 0, 0, r, n),
                a.beginPath(),
                (a.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? 0.85 : 1)) + "px " + e.fontFamily),
                (a.textAlign = "center"),
                o
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
                          (t.n > 9999 ? 9 : Math.floor(t.n / 1000)) + "k+",
                          Math.floor(t.x + t.w / 2),
                          Math.floor(t.y + t.h - 0.2 * t.h),
                      )
                    : a.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - 0.15 * t.h)),
                a.closePath();
        }),
            (b.rectangle = function (t) {
                t = v(t);
                2 === t.len
                    ? ((t.x = t.x - 0.4 * t.w), (t.w = 1.4 * t.w))
                    : t.len >= 3 && ((t.x = t.x - 0.65 * t.w), (t.w = 1.65 * t.w)),
                    a.clearRect(0, 0, r, n),
                    a.drawImage(s, 0, 0, r, n),
                    a.beginPath(),
                    (a.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? 0.9 : 1)) + "px " + e.fontFamily),
                    (a.textAlign = "center"),
                    (a.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")"),
                    a.fillRect(t.x, t.y, t.w, t.h),
                    (a.fillStyle =
                        "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")"),
                    "number" == typeof t.n && t.n > 999
                        ? a.fillText(
                              (t.n > 9999 ? 9 : Math.floor(t.n / 1000)) + "k+",
                              Math.floor(t.x + t.w / 2),
                              Math.floor(t.y + t.h - 0.2 * t.h),
                          )
                        : a.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - 0.15 * t.h)),
                    a.closePath();
            });
        var E = {};
        function A(t) {
            t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, o, n) {
                return e + e + o + o + n + n;
            });
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return (
                !!e && {
                    r: parseInt(e[1], 16),
                    g: parseInt(e[2], 16),
                    b: parseInt(e[3], 16),
                }
            );
        }
        function M(t, e) {
            var o,
                n = {};
            for (o in t) n[o] = t[o];
            for (o in e) n[o] = e[o];
            return n;
        }
        (E.getIcon = function () {
            var t = !1;
            return (
                e.element
                    ? (t = e.element)
                    : e.elementId
                      ? (t = g.getElementById(e.elementId)).setAttribute("href", t.getAttribute("src"))
                      : !1 ===
                            (t = (function () {
                                for (
                                    var t = g.getElementsByTagName("head")[0].getElementsByTagName("link"),
                                        e = t.length,
                                        o = e - 1;
                                    o >= 0;
                                    o--
                                )
                                    if (/(^|\s)icon(\s|$)/i.test(t[o].getAttribute("rel"))) return t[o];
                                return !1;
                            })()) &&
                        ((t = g.createElement("link")).setAttribute("rel", "icon"),
                        g.getElementsByTagName("head")[0].appendChild(t)),
                t.setAttribute("type", "image/png"),
                t
            );
        }),
            (E.setIcon = function (t) {
                var n = t.toDataURL("image/png");
                if ((e.dataUrl && e.dataUrl(n), e.element))
                    e.element.setAttribute("href", n), e.element.setAttribute("src", n);
                else if (e.elementId) {
                    var r = g.getElementById(e.elementId);
                    r.setAttribute("href", n), r.setAttribute("src", n);
                } else if (d.ff || d.opera) {
                    var i = o;
                    (o = g.createElement("link")),
                        d.opera && o.setAttribute("rel", "icon"),
                        o.setAttribute("rel", "icon"),
                        o.setAttribute("type", "image/png"),
                        g.getElementsByTagName("head")[0].appendChild(o),
                        o.setAttribute("href", n),
                        i.parentNode && i.parentNode.removeChild(i);
                } else o.setAttribute("href", n);
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
                    o: 0,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.1,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.2,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.3,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.4,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.5,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.6,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.7,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.8,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 0.9,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
            ]),
            (I.types.none = [
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
            ]),
            (I.types.pop = [
                {
                    x: 1,
                    y: 1,
                    w: 0,
                    h: 0,
                    o: 1,
                },
                {
                    x: 0.9,
                    y: 0.9,
                    w: 0.1,
                    h: 0.1,
                    o: 1,
                },
                {
                    x: 0.8,
                    y: 0.8,
                    w: 0.2,
                    h: 0.2,
                    o: 1,
                },
                {
                    x: 0.7,
                    y: 0.7,
                    w: 0.3,
                    h: 0.3,
                    o: 1,
                },
                {
                    x: 0.6,
                    y: 0.6,
                    w: 0.4,
                    h: 0.4,
                    o: 1,
                },
                {
                    x: 0.5,
                    y: 0.5,
                    w: 0.5,
                    h: 0.5,
                    o: 1,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
            ]),
            (I.types.popFade = [
                {
                    x: 0.75,
                    y: 0.75,
                    w: 0,
                    h: 0,
                    o: 0,
                },
                {
                    x: 0.65,
                    y: 0.65,
                    w: 0.1,
                    h: 0.1,
                    o: 0.2,
                },
                {
                    x: 0.6,
                    y: 0.6,
                    w: 0.2,
                    h: 0.2,
                    o: 0.4,
                },
                {
                    x: 0.55,
                    y: 0.55,
                    w: 0.3,
                    h: 0.3,
                    o: 0.6,
                },
                {
                    x: 0.5,
                    y: 0.5,
                    w: 0.4,
                    h: 0.4,
                    o: 0.8,
                },
                {
                    x: 0.45,
                    y: 0.45,
                    w: 0.5,
                    h: 0.5,
                    o: 0.9,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
            ]),
            (I.types.slide = [
                {
                    x: 0.4,
                    y: 1,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
                {
                    x: 0.4,
                    y: 0.9,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
                {
                    x: 0.4,
                    y: 0.9,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
                {
                    x: 0.4,
                    y: 0.8,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
                {
                    x: 0.4,
                    y: 0.7,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
                {
                    x: 0.4,
                    y: 0.6,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
                {
                    x: 0.4,
                    y: 0.5,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
                {
                    x: 0.4,
                    y: 0.4,
                    w: 0.6,
                    h: 0.6,
                    o: 1,
                },
            ]),
            (I.run = function (t, o, n, r) {
                var a = I.types[g.hidden || g.msHidden || g.webkitHidden || g.mozHidden ? "none" : e.animation];
                if (
                    ((r = !0 === n ? (void 0 !== r ? r : a.length - 1) : void 0 !== r ? r : 0),
                    (o = o || function () {}),
                    !(r < a.length) || !(r >= 0))
                )
                    return void o();
                b[e.type](M(t, a[r])),
                    (y = setTimeout(function () {
                        n ? (r -= 1) : (r += 1), I.run(t, o, n, r);
                    }, I.duration)),
                    E.setIcon(i);
            }),
            ((e = M(w, t)).bgColor = A(e.bgColor)),
            (e.textColor = A(e.textColor)),
            (e.position = e.position.toLowerCase()),
            (e.animation = I.types["" + e.animation] ? e.animation : w.animation),
            (g = e.win.document);
        var T = e.position.indexOf("up") > -1,
            U = e.position.indexOf("left") > -1;
        if (T || U)
            for (var R = 0; R < I.types["" + e.animation].length; R++) {
                var S = I.types["" + e.animation][R];
                T && (S.y < 0.6 ? (S.y = S.y - 0.4) : (S.y = S.y - 2 * S.y + (1 - S.w))),
                    U && (S.x < 0.6 ? (S.x = S.x - 0.4) : (S.x = S.x - 2 * S.x + (1 - S.h))),
                    (I.types["" + e.animation][R] = S);
            }
        return (
            (e.type = b["" + e.type] ? e.type : w.type),
            (o = E.getIcon()),
            (i = document.createElement("canvas")),
            (s = document.createElement("img")),
            o.hasAttribute("href")
                ? (s.setAttribute("crossOrigin", "anonymous"),
                  (s.onload = function () {
                      (n = s.height > 0 ? s.height : 32),
                          (r = s.width > 0 ? s.width : 32),
                          (i.height = n),
                          (i.width = r),
                          (a = i.getContext("2d")),
                          m.ready();
                  }),
                  s.setAttribute("src", o.getAttribute("href")))
                : ((s.onload = function () {
                      (n = 32),
                          (r = 32),
                          (s.height = n),
                          (s.width = r),
                          (i.height = n),
                          (i.width = r),
                          (a = i.getContext("2d")),
                          m.ready();
                  }),
                  s.setAttribute("src", "")),
            {
                badge: function (t, e) {
                    (e = ("string" == typeof e ? { animation: e } : e) || {}),
                        (f = function () {
                            try {
                                if ("number" == typeof t ? t > 0 : "" !== t) {
                                    var o = {
                                        type: "badge",
                                        options: { n: t },
                                    };
                                    if (
                                        ("animation" in e &&
                                            I.types["" + e.animation] &&
                                            (o.options.animation = "" + e.animation),
                                        "type" in e && b["" + e.type] && (o.options.type = "" + e.type),
                                        ["bgColor", "textColor"].forEach(function (t) {
                                            t in e && (o.options[t] = A(e[t]));
                                        }),
                                        ["fontStyle", "fontFamily"].forEach(function (t) {
                                            t in e && (o.options[t] = e[t]);
                                        }),
                                        x.push(o),
                                        x.length > 100)
                                    )
                                        throw Error("Too many badges requests in queue.");
                                    m.start();
                                } else m.reset();
                            } catch (t) {
                                throw Error("Error setting badge. Message: " + t.message);
                            }
                        }),
                        l && f();
                },
                video: function (t) {
                    (f = function () {
                        try {
                            if ("stop" === t) {
                                (u = !0), m.reset(), (u = !1);
                                return;
                            }
                            t.addEventListener(
                                "play",
                                function () {
                                    C(this);
                                },
                                !1,
                            );
                        } catch (t) {
                            throw Error("Error setting video. Message: " + t.message);
                        }
                    }),
                        l && f();
                },
                image: function (t) {
                    (f = function () {
                        try {
                            var e = t.width,
                                o = t.height,
                                s = document.createElement("img"),
                                l = e / r < o / n ? e / r : o / n;
                            s.setAttribute("crossOrigin", "anonymous"),
                                (s.onload = function () {
                                    a.clearRect(0, 0, r, n), a.drawImage(s, 0, 0, r, n), E.setIcon(i);
                                }),
                                s.setAttribute("src", t.getAttribute("src")),
                                (s.height = o / l),
                                (s.width = e / l);
                        } catch (t) {
                            throw Error("Error setting image. Message: " + t.message);
                        }
                    }),
                        l && f();
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
                        (navigator.getUserMedia =
                            navigator.getUserMedia ||
                            navigator.oGetUserMedia ||
                            navigator.msGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.webkitGetUserMedia),
                            (f = function () {
                                try {
                                    if ("stop" === t) {
                                        (u = !0), m.reset(), (u = !1);
                                        return;
                                    }
                                    ((e = document.createElement("video")).width = r),
                                        (e.height = n),
                                        navigator.getUserMedia(
                                            {
                                                video: !0,
                                                audio: !1,
                                            },
                                            function (t) {
                                                (e.src = URL.createObjectURL(t)), e.play(), C(e);
                                            },
                                            function () {},
                                        );
                                } catch (t) {
                                    throw Error("Error setting webcam. Message: " + t.message);
                                }
                            }),
                            l && f();
                    }
                },
                reset: m.reset,
                browser: { supported: d.supported },
            }
        );
    };
    "undefined" != typeof define && define.amd
        ? define([], function () {
              return e;
          })
        : t.exports
          ? (t.exports = e)
          : (this.Favico = e);
})();
