(e = n.nmd(e)),
    function () {
        "use strict";
        var r = { function: !0, object: !0 },
            i = (r[typeof window] && window) || this,
            s = r[typeof t] && t,
            a = r.object && e && !e.nodeType && e,
            o = s && a && "object" == typeof n.g && n.g;
        o && (o.global === o || o.window === o || o.self === o) && (i = o);
        var l = /\bOpera/,
            u = Object.prototype,
            d = u.hasOwnProperty,
            c = u.toString;
        function _(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function f(e) {
            return (e = g(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : _(e);
        }
        function E(e, t) {
            for (var n in e) d.call(e, n) && t(e[n], n, e);
        }
        function h(e) {
            return null == e ? _(e) : c.call(e).slice(8, -1);
        }
        function p(e) {
            return String(e).replace(/([ -])(?!$)/g, "$1?");
        }
        function m(e, t) {
            var n = null,
                r = function (r, i) {
                    n = t(n, r, i, e);
                },
                i = -1,
                s = e ? e.length : 0;
            if ("number" == typeof s && s > -1 && s <= 0x1fffffffffffff) for (; ++i < s; ) r(e[i], i, e);
            else E(e, r);
            return n;
        }
        function g(e) {
            return String(e).replace(/^ +| +$/g, "");
        }
        function A(e) {
            var t,
                n,
                r,
                s,
                a,
                o = i,
                u = e && "object" == typeof e && "String" != h(e);
            u && ((o = e), (e = null));
            var d = o.navigator || {},
                _ = d.userAgent || "";
            e || (e = _);
            var I = u ? !!d.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(c.toString()),
                T = "Object",
                S = u && o.java ? "JavaPackage" : h(o.java),
                y = /\bJava/.test(S) && o.java,
                N = y && h(o.environment) == (u ? T : "Environment"),
                O = y ? "a" : "α",
                R = y ? "b" : "β",
                v = o.document || {},
                C = o.operamini || o.opera,
                b = l.test((b = u && C ? C["[[Class]]"] : h(C))) ? b : (C = null),
                D = e,
                L = [],
                w = null,
                M = e == _,
                P = M && C && "function" == typeof C.version && C.version(),
                U = m(
                    [
                        { label: "EdgeHTML", pattern: "Edge" },
                        "Trident",
                        { label: "WebKit", pattern: "AppleWebKit" },
                        "iCab",
                        "Presto",
                        "NetFront",
                        "Tasman",
                        "KHTML",
                        "Gecko",
                    ],
                    function (t, n) {
                        return t || (RegExp("\\b" + (n.pattern || p(n)) + "\\b", "i").exec(e) && (n.label || n));
                    },
                ),
                k = m(
                    [
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
                    ],
                    function (t, n) {
                        return t || (RegExp("\\b" + (n.pattern || p(n)) + "\\b", "i").exec(e) && (n.label || n));
                    },
                ),
                x = F([
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
                G = m(
                    {
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
                    },
                    function (t, n, r) {
                        return (
                            t ||
                            ((n[x] ||
                                n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(x)] ||
                                RegExp("\\b" + p(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) &&
                                r)
                        );
                    },
                ),
                V = m(
                    [
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
                    ],
                    function (t, n) {
                        var r,
                            i,
                            s,
                            a = n.pattern || p(n);
                        return (
                            !t &&
                                (t = RegExp("\\b" + a + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) &&
                                ((r = t),
                                (i = n.label || n),
                                (s = {
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
                                }),
                                a &&
                                    i &&
                                    /^Win/i.test(r) &&
                                    !/^Windows Phone /i.test(r) &&
                                    (s = s[/[\d.]+$/.exec(r)]) &&
                                    (r = "Windows " + s),
                                (r = String(r)),
                                a && i && (r = r.replace(RegExp(a, "i"), i)),
                                (t = r =
                                    f(
                                        r
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
                                    ))),
                            t
                        );
                    },
                );
            function F(t) {
                return m(t, function (t, n) {
                    var r = n.pattern || p(n);
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
                            (t = f(
                                t[0]
                                    .replace(RegExp(r, "i"), n)
                                    .replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ")
                                    .replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"),
                            ))),
                        t
                    );
                });
            }
            if (
                (U && (U = [U]),
                G && !x && (x = F([G])),
                (s = /\bGoogle TV\b/.exec(x)) && (x = s[0]),
                /\bSimulator\b/i.test(e) && (x = (x ? x + " " : "") + "Simulator"),
                "Opera Mini" == k && /\bOPiOS\b/.test(e) && L.push("running in Turbo/Uncompressed mode"),
                "IE" == k && /\blike iPhone OS\b/.test(e)
                    ? ((G = (s = A(e.replace(/like iPhone OS/, ""))).manufacturer), (x = s.product))
                    : /^iP/.test(x)
                      ? (k || (k = "Safari"),
                        (V = "iOS" + ((s = / OS ([\d_]+)/i.exec(e)) ? " " + s[1].replace(/_/g, ".") : "")))
                      : "Konqueror" != k || /buntu/i.test(V)
                        ? (G &&
                              "Google" != G &&
                              ((/Chrome/.test(k) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(x))) ||
                          (/\bAndroid\b/.test(V) && /^Chrome/.test(k) && /\bVersion\//i.test(e))
                            ? ((k = "Android Browser"), (V = /\bAndroid\b/.test(V) ? V : "Android"))
                            : "Silk" == k
                              ? (/\bMobi/i.test(e) || ((V = "Android"), L.unshift("desktop mode")),
                                /Accelerated *= *true/i.test(e) && L.unshift("accelerated"))
                              : "PaleMoon" == k && (s = /\bFirefox\/([\d.]+)\b/.exec(e))
                                ? L.push("identifying as Firefox " + s[1])
                                : "Firefox" == k && (s = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                                  ? (V || (V = "Firefox OS"), x || (x = s[1]))
                                  : !k || (s = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(k))
                                    ? (k && !x && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(s + "/") + 8)) && (k = null),
                                      (s = x || G || V) &&
                                          (x || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V)) &&
                                          (k = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(V) ? V : s) + " Browser"))
                                    : "Electron" == k &&
                                      (s = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                                      L.push("Chromium " + s)
                        : (V = "Kubuntu"),
                P ||
                    (P = m(
                        [
                            "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
                            "Version",
                            p(k),
                            "(?:Firefox|Minefield|NetFront)",
                        ],
                        function (t, n) {
                            return (
                                t ||
                                (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) ||
                                    0)[1] ||
                                null
                            );
                        },
                    )),
                (s =
                    ("iCab" == U && parseFloat(P) > 3 && "WebKit") ||
                    (/\bOpera\b/.test(k) && (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
                    (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(U) && "WebKit") ||
                    (!U && /\bMSIE\b/i.test(e) && ("Mac OS" == V ? "Tasman" : "Trident")) ||
                    ("WebKit" == U && /\bPlayStation\b(?! Vita\b)/i.test(k) && "NetFront")) && (U = [s]),
                "IE" == k && (s = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                    ? ((k += " Mobile"),
                      (V = "Windows Phone " + (/\+$/.test(s) ? s : s + ".x")),
                      L.unshift("desktop mode"))
                    : /\bWPDesktop\b/i.test(e)
                      ? ((k = "IE Mobile"),
                        (V = "Windows Phone 8.x"),
                        L.unshift("desktop mode"),
                        P || (P = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                      : "IE" != k &&
                        "Trident" == U &&
                        (s = /\brv:([\d.]+)/.exec(e)) &&
                        (k && L.push("identifying as " + k + (P ? " " + P : "")), (k = "IE"), (P = s[1])),
                M)
            ) {
                if (
                    ((n = "global"),
                    (r = null != (t = o) ? typeof t[n] : "number"),
                    /^(?:boolean|number|string|undefined)$/.test(r) || ("object" == r && !t[n]))
                )
                    h((s = o.runtime)) == (u ? T : "ScriptBridgingProxyObject")
                        ? ((k = "Adobe AIR"), (V = s.flash.system.Capabilities.os))
                        : h((s = o.phantom)) == (u ? T : "RuntimeObject")
                          ? ((k = "PhantomJS"),
                            (P = (s = s.version || null) && s.major + "." + s.minor + "." + s.patch))
                          : "number" == typeof v.documentMode && (s = /\bTrident\/(\d+)/i.exec(e))
                            ? ((P = [P, v.documentMode]),
                              (s = +s[1] + 4) != P[1] && (L.push("IE " + P[1] + " mode"), U && (U[1] = ""), (P[1] = s)),
                              (P = "IE" == k ? String(P[1].toFixed(1)) : P[0]))
                            : "number" == typeof v.documentMode &&
                              /^(?:Chrome|Firefox)\b/.test(k) &&
                              (L.push("masking as " + k + " " + P),
                              (k = "IE"),
                              (P = "11.0"),
                              (U = ["Trident"]),
                              (V = "Windows"));
                else if (
                    (y &&
                        ((D = (s = y.lang.System).getProperty("os.arch")),
                        (V = V || s.getProperty("os.name") + " " + s.getProperty("os.version"))),
                    N)
                ) {
                    try {
                        (P = o.require("ringo/engine").version.join(".")), (k = "RingoJS");
                    } catch (e) {
                        (s = o.system) && s.global.system == o.system && ((k = "Narwhal"), V || (V = s[0].os || null));
                    }
                    k || (k = "Rhino");
                } else
                    "object" == typeof o.process &&
                        !o.process.browser &&
                        (s = o.process) &&
                        ("object" == typeof s.versions &&
                            ("string" == typeof s.versions.electron
                                ? (L.push("Node " + s.versions.node), (k = "Electron"), (P = s.versions.electron))
                                : "string" == typeof s.versions.nw &&
                                  (L.push("Chromium " + P, "Node " + s.versions.node),
                                  (k = "NW.js"),
                                  (P = s.versions.nw))),
                        k ||
                            ((k = "Node.js"),
                            (D = s.arch),
                            (V = s.platform),
                            (P = (P = /[\d.]+/.exec(s.version)) ? P[0] : null)));
                V = V && f(V);
            }
            if (
                (P &&
                    (s =
                        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(P) ||
                        /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (M && d.appMinorVersion)) ||
                        (/\bMinefield\b/i.test(e) && "a")) &&
                    ((w = /b/i.test(s) ? "beta" : "alpha"),
                    (P = P.replace(RegExp(s + "\\+?$"), "") + ("beta" == w ? R : O) + (/\d+\+?/.exec(s) || ""))),
                "Fennec" == k || ("Firefox" == k && /\b(?:Android|Firefox OS)\b/.test(V)))
            )
                k = "Firefox Mobile";
            else if ("Maxthon" == k && P) P = P.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(x))
                "Xbox 360" == x && (V = null), "Xbox 360" == x && /\bIEMobile\b/.test(e) && L.unshift("mobile mode");
            else if (
                (/^(?:Chrome|IE|Opera)$/.test(k) || (k && !x && !/Browser|Mobi/.test(k))) &&
                ("Windows CE" == V || /Mobi/i.test(e))
            )
                k += " Mobile";
            else if ("IE" == k && M)
                try {
                    null === o.external && L.unshift("platform preview");
                } catch (e) {
                    L.unshift("embedded");
                }
            else
                (/\bBlackBerry\b/.test(x) || /\bBB10\b/.test(e)) &&
                (s = (RegExp(x.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || P)
                    ? ((V =
                          ((s = [s, /BB10/.test(e)])[1] ? ((x = null), (G = "BlackBerry")) : "Device Software") +
                          " " +
                          s[0]),
                      (P = null))
                    : this != E &&
                      "Wii" != x &&
                      ((M && C) ||
                          (/Opera/.test(k) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                          ("Firefox" == k && /\bOS X (?:\d+\.){2,}/.test(V)) ||
                          ("IE" == k &&
                              ((V && !/^Win/.test(V) && P > 5.5) ||
                                  (/\bWindows XP\b/.test(V) && P > 8) ||
                                  (8 == P && !/\bTrident\b/.test(e))))) &&
                      !l.test((s = A.call(E, e.replace(l, "") + ";"))) &&
                      s.name &&
                      ((s = "ing as " + s.name + ((s = s.version) ? " " + s : "")),
                      l.test(k)
                          ? (/\bIE\b/.test(s) && "Mac OS" == V && (V = null), (s = "identify" + s))
                          : ((s = "mask" + s),
                            (k = b ? f(b.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                            /\bIE\b/.test(s) && (V = null),
                            M || (P = null)),
                      (U = ["Presto"]),
                      L.push(s));
            (s = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
                ((s = [parseFloat(s.replace(/\.(\d)$/, ".0$1")), s]),
                "Safari" == k && "+" == s[1].slice(-1)
                    ? ((k = "WebKit Nightly"), (w = "alpha"), (P = s[1].slice(0, -1)))
                    : (P == s[1] || P == (s[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (P = null),
                (s[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1]),
                537.36 == s[0] && 537.36 == s[2] && parseFloat(s[1]) >= 28 && "WebKit" == U && (U = ["Blink"]),
                M && (I || s[1])
                    ? (U && (U[1] = "like Chrome"),
                      (s =
                          s[1] ||
                          ((s = s[0]) < 530
                              ? 1
                              : s < 532
                                ? 2
                                : s < 532.05
                                  ? 3
                                  : s < 533
                                    ? 4
                                    : s < 534.03
                                      ? 5
                                      : s < 534.07
                                        ? 6
                                        : s < 534.1
                                          ? 7
                                          : s < 534.13
                                            ? 8
                                            : s < 534.16
                                              ? 9
                                              : s < 534.24
                                                ? 10
                                                : s < 534.3
                                                  ? 11
                                                  : s < 535.01
                                                    ? 12
                                                    : s < 535.02
                                                      ? "13+"
                                                      : s < 535.07
                                                        ? 15
                                                        : s < 535.11
                                                          ? 16
                                                          : s < 535.19
                                                            ? 17
                                                            : s < 536.05
                                                              ? 18
                                                              : s < 536.1
                                                                ? 19
                                                                : s < 537.01
                                                                  ? 20
                                                                  : s < 537.11
                                                                    ? "21+"
                                                                    : s < 537.13
                                                                      ? 23
                                                                      : s < 537.18
                                                                        ? 24
                                                                        : s < 537.24
                                                                          ? 25
                                                                          : s < 537.36
                                                                            ? 26
                                                                            : "Blink" != U
                                                                              ? "27"
                                                                              : "28")))
                    : (U && (U[1] = "like Safari"),
                      (s =
                          (s = s[0]) < 400
                              ? 1
                              : s < 500
                                ? 2
                                : s < 526
                                  ? 3
                                  : s < 533
                                    ? 4
                                    : s < 534
                                      ? "4+"
                                      : s < 535
                                        ? 5
                                        : s < 537
                                          ? 6
                                          : s < 538
                                            ? 7
                                            : s < 601
                                              ? 8
                                              : "8")),
                U && (U[1] += " " + (s += "number" == typeof s ? ".x" : /[.+]/.test(s) ? "" : "+")),
                "Safari" == k && (!P || parseInt(P) > 45) && (P = s)),
                "Opera" == k && (s = /\bzbov|zvav$/.exec(V))
                    ? ((k += " "),
                      L.unshift("desktop mode"),
                      "zvav" == s ? ((k += "Mini"), (P = null)) : (k += "Mobile"),
                      (V = V.replace(RegExp(" *" + s + "$"), "")))
                    : "Safari" == k &&
                      /\bChrome\b/.exec(U && U[1]) &&
                      (L.unshift("desktop mode"),
                      (k = "Chrome Mobile"),
                      (P = null),
                      /\bOS X\b/.test(V) ? ((G = "Apple"), (V = "iOS 4.3+")) : (V = null)),
                P &&
                    0 == P.indexOf((s = /[\d.]+$/.exec(V))) &&
                    e.indexOf("/" + s + "-") > -1 &&
                    (V = g(V.replace(s, ""))),
                U &&
                    !/\b(?:Avant|Nook)\b/.test(k) &&
                    (/Browser|Lunascape|Maxthon/.test(k) ||
                        ("Safari" != k && /^iOS/.test(V) && /\bSafari\b/.test(U[1])) ||
                        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
                            k,
                        ) &&
                            U[1])) &&
                    (s = U[U.length - 1]) &&
                    L.push(s),
                L.length && (L = ["(" + L.join("; ") + ")"]),
                G && x && 0 > x.indexOf(G) && L.push("on " + G),
                x && L.push((/^on /.test(L[L.length - 1]) ? "" : "on ") + x),
                V &&
                    ((a = (s = / ([\d.+]+)$/.exec(V)) && "/" == V.charAt(V.length - s[0].length - 1)),
                    (V = {
                        architecture: 32,
                        family: s && !a ? V.replace(s[0], "") : V,
                        version: s ? s[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !a ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "");
                        },
                    })),
                (s = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(D)) && !/\bi686\b/i.test(D)
                    ? (V && ((V.architecture = 64), (V.family = V.family.replace(RegExp(" *" + s), ""))),
                      k &&
                          (/\bWOW64\b/i.test(e) ||
                              (M && /\w(?:86|32)$/.test(d.cpuClass || d.platform) && !/\bWin64; x64\b/i.test(e))) &&
                          L.unshift("32-bit"))
                    : V && /^OS X/.test(V.family) && "Chrome" == k && parseFloat(P) >= 39 && (V.architecture = 64),
                e || (e = null);
            var B = {};
            return (
                (B.description = e),
                (B.layout = U && U[0]),
                (B.manufacturer = G),
                (B.name = k),
                (B.prerelease = w),
                (B.product = x),
                (B.ua = e),
                (B.version = k && P),
                (B.os = V || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return "null";
                    },
                }),
                (B.parse = A),
                (B.toString = function () {
                    return this.description || "";
                }),
                B.version && L.unshift(P),
                B.name && L.unshift(k),
                V &&
                    k &&
                    !(V == String(V).split(" ")[0] && (V == k.split(" ")[0] || x)) &&
                    L.push(x ? "(" + V + ")" : "on " + V),
                L.length && (B.description = L.join(" ")),
                B
            );
        }
        var I = A();
        "function" == typeof define && "object" == typeof define.amd && define.amd
            ? ((i.platform = I),
              define(function () {
                  return I;
              }))
            : s && a
              ? E(I, function (e, t) {
                    s[t] = e;
                })
              : (i.platform = I);
    }.call(this);
