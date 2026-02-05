(e = n.nmd(e)),
    function () {
        "use strict";
        var r = { function: !0, object: !0 },
            i = (r[typeof window] && window) || this,
            a = r[typeof t] && t,
            s = r.object && e && !e.nodeType && e,
            o = a && s && "object" == typeof n.g && n.g;
        o && (o.global === o || o.window === o || o.self === o) && (i = o);
        var l = 0x1fffffffffffff,
            u = /\bOpera/,
            c = Object.prototype,
            d = c.hasOwnProperty,
            _ = c.toString;
        function f(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function p(e, t, n) {
            var r = {
                "10.0": "10",
                6.4: "10 Technical Preview",
                6.3: "8.1",
                6.2: "8",
                6.1: "Server 2008 R2 / 7",
                "6.0": "Server 2008 / Vista",
                5.2: "Server 2003 / XP 64-bit",
                5.1: "XP",
                5.01: "2000 SP1",
                "5.0": "2000",
                "4.0": "NT",
                "4.90": "ME",
            };
            return (
                t &&
                    n &&
                    /^Win/i.test(e) &&
                    !/^Windows Phone /i.test(e) &&
                    (r = r[/[\d.]+$/.exec(e)]) &&
                    (e = "Windows " + r),
                (e = String(e)),
                t && n && (e = e.replace(RegExp(t, "i"), n)),
                (e = m(
                    e
                        .replace(/ ce$/i, " CE")
                        .replace(/\bhpw/i, "web")
                        .replace(/\bMacintosh\b/, "Mac OS")
                        .replace(/_PowerPC\b/i, " OS")
                        .replace(/\b(OS X) [^ \d]+/i, "$1")
                        .replace(/\bMac (OS X)\b/, "$1")
                        .replace(/\/(\d)/, " $1")
                        .replace(/_/g, ".")
                        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                        .replace(/\bx86\.64\b/gi, "x86_64")
                        .replace(/\b(Windows Phone) OS\b/, "$1")
                        .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                        .split(" on ")[0],
                ))
            );
        }
        function h(e, t) {
            var n = -1,
                r = e ? e.length : 0;
            if ("number" == typeof r && r > -1 && r <= l) for (; ++n < r; ) t(e[n], n, e);
            else g(e, t);
        }
        function m(e) {
            return (e = y(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : f(e);
        }
        function g(e, t) {
            for (var n in e) d.call(e, n) && t(e[n], n, e);
        }
        function E(e) {
            return null == e ? f(e) : _.call(e).slice(8, -1);
        }
        function A(e, t) {
            var n = null != e ? typeof e[t] : "number";
            return !/^(?:boolean|number|string|undefined)$/.test(n) && ("object" != n || !!e[t]);
        }
        function I(e) {
            return String(e).replace(/([ -])(?!$)/g, "$1?");
        }
        function T(e, t) {
            var n = null;
            return (
                h(e, function (r, i) {
                    n = t(n, r, i, e);
                }),
                n
            );
        }
        function y(e) {
            return String(e).replace(/^ +| +$/g, "");
        }
        function S(e) {
            var t,
                n,
                r = i,
                a = e && "object" == typeof e && "String" != E(e);
            a && ((r = e), (e = null));
            var s = r.navigator || {},
                o = s.userAgent || "";
            e || (e = o);
            var l = a ? !!s.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(_.toString()),
                c = "Object",
                d = a ? c : "ScriptBridgingProxyObject",
                f = a ? c : "Environment",
                h = a && r.java ? "JavaPackage" : E(r.java),
                v = a ? c : "RuntimeObject",
                C = /\bJava/.test(h) && r.java,
                b = C && E(r.environment) == f,
                N = C ? "a" : "α",
                R = C ? "b" : "β",
                O = r.document || {},
                D = r.operamini || r.opera,
                L = u.test((L = a && D ? D["[[Class]]"] : E(D))) ? L : (D = null),
                w = e,
                x = [],
                P = null,
                M = e == o,
                k = M && D && "function" == typeof D.version && D.version(),
                U = j([
                    { label: "EdgeHTML", pattern: "Edge" },
                    "Trident",
                    { label: "WebKit", pattern: "AppleWebKit" },
                    "iCab",
                    "Presto",
                    "NetFront",
                    "Tasman",
                    "KHTML",
                    "Gecko",
                ]),
                G = Y([
                    "Adobe AIR",
                    "Arora",
                    "Avant Browser",
                    "Breach",
                    "Camino",
                    "Electron",
                    "Epiphany",
                    "Fennec",
                    "Flock",
                    "Galeon",
                    "GreenBrowser",
                    "iCab",
                    "Iceweasel",
                    "K-Meleon",
                    "Konqueror",
                    "Lunascape",
                    "Maxthon",
                    { label: "Microsoft Edge", pattern: "Edge" },
                    "Midori",
                    "Nook Browser",
                    "PaleMoon",
                    "PhantomJS",
                    "Raven",
                    "Rekonq",
                    "RockMelt",
                    { label: "Samsung Internet", pattern: "SamsungBrowser" },
                    "SeaMonkey",
                    { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
                    "Sleipnir",
                    "SlimBrowser",
                    { label: "SRWare Iron", pattern: "Iron" },
                    "Sunrise",
                    "Swiftfox",
                    "Waterfox",
                    "WebPositive",
                    "Opera Mini",
                    { label: "Opera Mini", pattern: "OPiOS" },
                    "Opera",
                    { label: "Opera", pattern: "OPR" },
                    "Chrome",
                    { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
                    { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
                    { label: "Firefox for iOS", pattern: "FxiOS" },
                    { label: "IE", pattern: "IEMobile" },
                    { label: "IE", pattern: "MSIE" },
                    "Safari",
                ]),
                V = K([
                    { label: "BlackBerry", pattern: "BB10" },
                    "BlackBerry",
                    { label: "Galaxy S", pattern: "GT-I9000" },
                    { label: "Galaxy S2", pattern: "GT-I9100" },
                    { label: "Galaxy S3", pattern: "GT-I9300" },
                    { label: "Galaxy S4", pattern: "GT-I9500" },
                    { label: "Galaxy S5", pattern: "SM-G900" },
                    { label: "Galaxy S6", pattern: "SM-G920" },
                    { label: "Galaxy S6 Edge", pattern: "SM-G925" },
                    { label: "Galaxy S7", pattern: "SM-G930" },
                    { label: "Galaxy S7 Edge", pattern: "SM-G935" },
                    "Google TV",
                    "Lumia",
                    "iPad",
                    "iPod",
                    "iPhone",
                    "Kindle",
                    { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
                    "Nexus",
                    "Nook",
                    "PlayBook",
                    "PlayStation Vita",
                    "PlayStation",
                    "TouchPad",
                    "Transformer",
                    { label: "Wii U", pattern: "WiiU" },
                    "Wii",
                    "Xbox One",
                    { label: "Xbox 360", pattern: "Xbox" },
                    "Xoom",
                ]),
                F = H({
                    Apple: { iPad: 1, iPhone: 1, iPod: 1 },
                    Archos: {},
                    Amazon: { Kindle: 1, "Kindle Fire": 1 },
                    Asus: { Transformer: 1 },
                    "Barnes & Noble": { Nook: 1 },
                    BlackBerry: { PlayBook: 1 },
                    Google: { "Google TV": 1, Nexus: 1 },
                    HP: { TouchPad: 1 },
                    HTC: {},
                    LG: {},
                    Microsoft: { Xbox: 1, "Xbox One": 1 },
                    Motorola: { Xoom: 1 },
                    Nintendo: { "Wii U": 1, Wii: 1 },
                    Nokia: { Lumia: 1 },
                    Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
                    Sony: { PlayStation: 1, "PlayStation Vita": 1 },
                }),
                B = W([
                    "Windows Phone",
                    "Android",
                    "CentOS",
                    { label: "Chrome OS", pattern: "CrOS" },
                    "Debian",
                    "Fedora",
                    "FreeBSD",
                    "Gentoo",
                    "Haiku",
                    "Kubuntu",
                    "Linux Mint",
                    "OpenBSD",
                    "Red Hat",
                    "SuSE",
                    "Ubuntu",
                    "Xubuntu",
                    "Cygwin",
                    "Symbian OS",
                    "hpwOS",
                    "webOS ",
                    "webOS",
                    "Tablet OS",
                    "Tizen",
                    "Linux",
                    "Mac OS X",
                    "Macintosh",
                    "Mac",
                    "Windows 98;",
                    "Windows ",
                ]);
            function j(t) {
                return T(t, function (t, n) {
                    return t || (RegExp("\\b" + (n.pattern || I(n)) + "\\b", "i").exec(e) && (n.label || n));
                });
            }
            function H(t) {
                return T(t, function (t, n, r) {
                    return (
                        t ||
                        ((n[V] ||
                            n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(V)] ||
                            RegExp("\\b" + I(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) &&
                            r)
                    );
                });
            }
            function Y(t) {
                return T(t, function (t, n) {
                    return t || (RegExp("\\b" + (n.pattern || I(n)) + "\\b", "i").exec(e) && (n.label || n));
                });
            }
            function W(t) {
                return T(t, function (t, n) {
                    var r = n.pattern || I(n);
                    return (
                        !t &&
                            (t = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) &&
                            (t = p(t, r, n.label || n)),
                        t
                    );
                });
            }
            function K(t) {
                return T(t, function (t, n) {
                    var r = n.pattern || I(n);
                    return (
                        !t &&
                            (t =
                                RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) ||
                                RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(e) ||
                                RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) &&
                            ((t = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : t).split("/"))[1] &&
                                !/[\d.]+/.test(t[0]) &&
                                (t[0] += " " + t[1]),
                            (n = n.label || n),
                            (t = m(
                                t[0]
                                    .replace(RegExp(r, "i"), n)
                                    .replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ")
                                    .replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"),
                            ))),
                        t
                    );
                });
            }
            function z(t) {
                return T(t, function (t, n) {
                    return (
                        t ||
                        (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] ||
                        null
                    );
                });
            }
            function $() {
                return this.description || "";
            }
            if (
                (U && (U = [U]),
                F && !V && (V = K([F])),
                (t = /\bGoogle TV\b/.exec(V)) && (V = t[0]),
                /\bSimulator\b/i.test(e) && (V = (V ? V + " " : "") + "Simulator"),
                "Opera Mini" == G && /\bOPiOS\b/.test(e) && x.push("running in Turbo/Uncompressed mode"),
                "IE" == G && /\blike iPhone OS\b/.test(e)
                    ? ((F = (t = S(e.replace(/like iPhone OS/, ""))).manufacturer), (V = t.product))
                    : /^iP/.test(V)
                      ? (G || (G = "Safari"),
                        (B = "iOS" + ((t = / OS ([\d_]+)/i.exec(e)) ? " " + t[1].replace(/_/g, ".") : "")))
                      : "Konqueror" != G || /buntu/i.test(B)
                        ? (F &&
                              "Google" != F &&
                              ((/Chrome/.test(G) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(V))) ||
                          (/\bAndroid\b/.test(B) && /^Chrome/.test(G) && /\bVersion\//i.test(e))
                            ? ((G = "Android Browser"), (B = /\bAndroid\b/.test(B) ? B : "Android"))
                            : "Silk" == G
                              ? (/\bMobi/i.test(e) || ((B = "Android"), x.unshift("desktop mode")),
                                /Accelerated *= *true/i.test(e) && x.unshift("accelerated"))
                              : "PaleMoon" == G && (t = /\bFirefox\/([\d.]+)\b/.exec(e))
                                ? x.push("identifying as Firefox " + t[1])
                                : "Firefox" == G && (t = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                                  ? (B || (B = "Firefox OS"), V || (V = t[1]))
                                  : !G || (t = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(G))
                                    ? (G && !V && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(t + "/") + 8)) && (G = null),
                                      (t = V || F || B) &&
                                          (V || F || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(B)) &&
                                          (G = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(B) ? B : t) + " Browser"))
                                    : "Electron" == G &&
                                      (t = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                                      x.push("Chromium " + t)
                        : (B = "Kubuntu"),
                k ||
                    (k = z([
                        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
                        "Version",
                        I(G),
                        "(?:Firefox|Minefield|NetFront)",
                    ])),
                (t =
                    ("iCab" == U && parseFloat(k) > 3 && "WebKit") ||
                    (/\bOpera\b/.test(G) && (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
                    (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(U) && "WebKit") ||
                    (!U && /\bMSIE\b/i.test(e) && ("Mac OS" == B ? "Tasman" : "Trident")) ||
                    ("WebKit" == U && /\bPlayStation\b(?! Vita\b)/i.test(G) && "NetFront")) && (U = [t]),
                "IE" == G && (t = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                    ? ((G += " Mobile"),
                      (B = "Windows Phone " + (/\+$/.test(t) ? t : t + ".x")),
                      x.unshift("desktop mode"))
                    : /\bWPDesktop\b/i.test(e)
                      ? ((G = "IE Mobile"),
                        (B = "Windows Phone 8.x"),
                        x.unshift("desktop mode"),
                        k || (k = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                      : "IE" != G &&
                        "Trident" == U &&
                        (t = /\brv:([\d.]+)/.exec(e)) &&
                        (G && x.push("identifying as " + G + (k ? " " + k : "")), (G = "IE"), (k = t[1])),
                M)
            ) {
                if (A(r, "global"))
                    if (
                        (C &&
                            ((w = (t = C.lang.System).getProperty("os.arch")),
                            (B = B || t.getProperty("os.name") + " " + t.getProperty("os.version"))),
                        b)
                    ) {
                        try {
                            (k = r.require("ringo/engine").version.join(".")), (G = "RingoJS");
                        } catch (e) {
                            (t = r.system) &&
                                t.global.system == r.system &&
                                ((G = "Narwhal"), B || (B = t[0].os || null));
                        }
                        G || (G = "Rhino");
                    } else
                        "object" == typeof r.process &&
                            !r.process.browser &&
                            (t = r.process) &&
                            ("object" == typeof t.versions &&
                                ("string" == typeof t.versions.electron
                                    ? (x.push("Node " + t.versions.node), (G = "Electron"), (k = t.versions.electron))
                                    : "string" == typeof t.versions.nw &&
                                      (x.push("Chromium " + k, "Node " + t.versions.node),
                                      (G = "NW.js"),
                                      (k = t.versions.nw))),
                            G ||
                                ((G = "Node.js"),
                                (w = t.arch),
                                (B = t.platform),
                                (k = (k = /[\d.]+/.exec(t.version)) ? k[0] : null)));
                else
                    E((t = r.runtime)) == d
                        ? ((G = "Adobe AIR"), (B = t.flash.system.Capabilities.os))
                        : E((t = r.phantom)) == v
                          ? ((G = "PhantomJS"),
                            (k = (t = t.version || null) && t.major + "." + t.minor + "." + t.patch))
                          : "number" == typeof O.documentMode && (t = /\bTrident\/(\d+)/i.exec(e))
                            ? ((k = [k, O.documentMode]),
                              (t = +t[1] + 4) != k[1] && (x.push("IE " + k[1] + " mode"), U && (U[1] = ""), (k[1] = t)),
                              (k = "IE" == G ? String(k[1].toFixed(1)) : k[0]))
                            : "number" == typeof O.documentMode &&
                              /^(?:Chrome|Firefox)\b/.test(G) &&
                              (x.push("masking as " + G + " " + k),
                              (G = "IE"),
                              (k = "11.0"),
                              (U = ["Trident"]),
                              (B = "Windows"));
                B = B && m(B);
            }
            if (
                (k &&
                    (t =
                        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(k) ||
                        /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (M && s.appMinorVersion)) ||
                        (/\bMinefield\b/i.test(e) && "a")) &&
                    ((P = /b/i.test(t) ? "beta" : "alpha"),
                    (k = k.replace(RegExp(t + "\\+?$"), "") + ("beta" == P ? R : N) + (/\d+\+?/.exec(t) || ""))),
                "Fennec" == G || ("Firefox" == G && /\b(?:Android|Firefox OS)\b/.test(B)))
            )
                G = "Firefox Mobile";
            else if ("Maxthon" == G && k) k = k.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(V))
                "Xbox 360" == V && (B = null), "Xbox 360" == V && /\bIEMobile\b/.test(e) && x.unshift("mobile mode");
            else if (
                (/^(?:Chrome|IE|Opera)$/.test(G) || (G && !V && !/Browser|Mobi/.test(G))) &&
                ("Windows CE" == B || /Mobi/i.test(e))
            )
                G += " Mobile";
            else if ("IE" == G && M)
                try {
                    null === r.external && x.unshift("platform preview");
                } catch (e) {
                    x.unshift("embedded");
                }
            else
                (/\bBlackBerry\b/.test(V) || /\bBB10\b/.test(e)) &&
                (t = (RegExp(V.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || k)
                    ? ((B =
                          ((t = [t, /BB10/.test(e)])[1] ? ((V = null), (F = "BlackBerry")) : "Device Software") +
                          " " +
                          t[0]),
                      (k = null))
                    : this != g &&
                      "Wii" != V &&
                      ((M && D) ||
                          (/Opera/.test(G) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                          ("Firefox" == G && /\bOS X (?:\d+\.){2,}/.test(B)) ||
                          ("IE" == G &&
                              ((B && !/^Win/.test(B) && k > 5.5) ||
                                  (/\bWindows XP\b/.test(B) && k > 8) ||
                                  (8 == k && !/\bTrident\b/.test(e))))) &&
                      !u.test((t = S.call(g, e.replace(u, "") + ";"))) &&
                      t.name &&
                      ((t = "ing as " + t.name + ((t = t.version) ? " " + t : "")),
                      u.test(G)
                          ? (/\bIE\b/.test(t) && "Mac OS" == B && (B = null), (t = "identify" + t))
                          : ((t = "mask" + t),
                            (G = L ? m(L.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                            /\bIE\b/.test(t) && (B = null),
                            M || (k = null)),
                      (U = ["Presto"]),
                      x.push(t));
            (t = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
                ((t = [parseFloat(t.replace(/\.(\d)$/, ".0$1")), t]),
                "Safari" == G && "+" == t[1].slice(-1)
                    ? ((G = "WebKit Nightly"), (P = "alpha"), (k = t[1].slice(0, -1)))
                    : (k == t[1] || k == (t[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (k = null),
                (t[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1]),
                537.36 == t[0] && 537.36 == t[2] && parseFloat(t[1]) >= 28 && "WebKit" == U && (U = ["Blink"]),
                M && (l || t[1])
                    ? (U && (U[1] = "like Chrome"),
                      (t =
                          t[1] ||
                          ((t = t[0]) < 530
                              ? 1
                              : t < 532
                                ? 2
                                : t < 532.05
                                  ? 3
                                  : t < 533
                                    ? 4
                                    : t < 534.03
                                      ? 5
                                      : t < 534.07
                                        ? 6
                                        : t < 534.1
                                          ? 7
                                          : t < 534.13
                                            ? 8
                                            : t < 534.16
                                              ? 9
                                              : t < 534.24
                                                ? 10
                                                : t < 534.3
                                                  ? 11
                                                  : t < 535.01
                                                    ? 12
                                                    : t < 535.02
                                                      ? "13+"
                                                      : t < 535.07
                                                        ? 15
                                                        : t < 535.11
                                                          ? 16
                                                          : t < 535.19
                                                            ? 17
                                                            : t < 536.05
                                                              ? 18
                                                              : t < 536.1
                                                                ? 19
                                                                : t < 537.01
                                                                  ? 20
                                                                  : t < 537.11
                                                                    ? "21+"
                                                                    : t < 537.13
                                                                      ? 23
                                                                      : t < 537.18
                                                                        ? 24
                                                                        : t < 537.24
                                                                          ? 25
                                                                          : t < 537.36
                                                                            ? 26
                                                                            : "Blink" != U
                                                                              ? "27"
                                                                              : "28")))
                    : (U && (U[1] = "like Safari"),
                      (t =
                          (t = t[0]) < 400
                              ? 1
                              : t < 500
                                ? 2
                                : t < 526
                                  ? 3
                                  : t < 533
                                    ? 4
                                    : t < 534
                                      ? "4+"
                                      : t < 535
                                        ? 5
                                        : t < 537
                                          ? 6
                                          : t < 538
                                            ? 7
                                            : t < 601
                                              ? 8
                                              : "8")),
                U && (U[1] += " " + (t += "number" == typeof t ? ".x" : /[.+]/.test(t) ? "" : "+")),
                "Safari" == G && (!k || parseInt(k) > 45) && (k = t)),
                "Opera" == G && (t = /\bzbov|zvav$/.exec(B))
                    ? ((G += " "),
                      x.unshift("desktop mode"),
                      "zvav" == t ? ((G += "Mini"), (k = null)) : (G += "Mobile"),
                      (B = B.replace(RegExp(" *" + t + "$"), "")))
                    : "Safari" == G &&
                      /\bChrome\b/.exec(U && U[1]) &&
                      (x.unshift("desktop mode"),
                      (G = "Chrome Mobile"),
                      (k = null),
                      /\bOS X\b/.test(B) ? ((F = "Apple"), (B = "iOS 4.3+")) : (B = null)),
                k &&
                    0 == k.indexOf((t = /[\d.]+$/.exec(B))) &&
                    e.indexOf("/" + t + "-") > -1 &&
                    (B = y(B.replace(t, ""))),
                U &&
                    !/\b(?:Avant|Nook)\b/.test(G) &&
                    (/Browser|Lunascape|Maxthon/.test(G) ||
                        ("Safari" != G && /^iOS/.test(B) && /\bSafari\b/.test(U[1])) ||
                        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
                            G,
                        ) &&
                            U[1])) &&
                    (t = U[U.length - 1]) &&
                    x.push(t),
                x.length && (x = ["(" + x.join("; ") + ")"]),
                F && V && 0 > V.indexOf(F) && x.push("on " + F),
                V && x.push((/^on /.test(x[x.length - 1]) ? "" : "on ") + V),
                B &&
                    ((n = (t = / ([\d.+]+)$/.exec(B)) && "/" == B.charAt(B.length - t[0].length - 1)),
                    (B = {
                        architecture: 32,
                        family: t && !n ? B.replace(t[0], "") : B,
                        version: t ? t[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !n ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "");
                        },
                    })),
                (t = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(w)) && !/\bi686\b/i.test(w)
                    ? (B && ((B.architecture = 64), (B.family = B.family.replace(RegExp(" *" + t), ""))),
                      G &&
                          (/\bWOW64\b/i.test(e) ||
                              (M && /\w(?:86|32)$/.test(s.cpuClass || s.platform) && !/\bWin64; x64\b/i.test(e))) &&
                          x.unshift("32-bit"))
                    : B && /^OS X/.test(B.family) && "Chrome" == G && parseFloat(k) >= 39 && (B.architecture = 64),
                e || (e = null);
            var q = {};
            return (
                (q.description = e),
                (q.layout = U && U[0]),
                (q.manufacturer = F),
                (q.name = G),
                (q.prerelease = P),
                (q.product = V),
                (q.ua = e),
                (q.version = G && k),
                (q.os = B || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return "null";
                    },
                }),
                (q.parse = S),
                (q.toString = $),
                q.version && x.unshift(k),
                q.name && x.unshift(G),
                B &&
                    G &&
                    !(B == String(B).split(" ")[0] && (B == G.split(" ")[0] || V)) &&
                    x.push(V ? "(" + B + ")" : "on " + B),
                x.length && (q.description = x.join(" ")),
                q
            );
        }
        var v = S();
        "function" == typeof define && "object" == typeof define.amd && define.amd
            ? ((i.platform = v),
              define(function () {
                  return v;
              }))
            : a && s
              ? g(v, function (e, t) {
                    a[t] = e;
                })
              : (i.platform = v);
    }.call(this);
