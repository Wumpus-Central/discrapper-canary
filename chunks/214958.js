(e = n.nmd(e)),
    function () {
        "use strict";
        var i = { function: !0, object: !0 },
            r = (i[typeof window] && window) || this,
            s = i[typeof t] && t,
            a = i.object && e && !e.nodeType && e,
            o = s && a && "object" == typeof n.g && n.g;
        o && (o.global === o || o.window === o || o.self === o) && (r = o);
        var l = /\bOpera/,
            u = Object.prototype,
            c = u.hasOwnProperty,
            d = u.toString;
        function _(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function f(e) {
            return (e = g(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : _(e);
        }
        function h(e, t) {
            for (var n in e) c.call(e, n) && t(e[n], n, e);
        }
        function p(e) {
            return null == e ? _(e) : d.call(e).slice(8, -1);
        }
        function E(e) {
            return String(e).replace(/([ -])(?!$)/g, "$1?");
        }
        function m(e, t) {
            var n = null,
                i = function (i, r) {
                    n = t(n, i, r, e);
                },
                r = -1,
                s = e ? e.length : 0;
            if ("number" == typeof s && s > -1 && s <= 0x1fffffffffffff) for (; ++r < s; ) i(e[r], r, e);
            else h(e, i);
            return n;
        }
        function g(e) {
            return String(e).replace(/^ +| +$/g, "");
        }
        function A(e) {
            var t,
                n,
                i,
                s,
                a,
                o = r,
                u = e && "object" == typeof e && "String" != p(e);
            u && ((o = e), (e = null));
            var c = o.navigator || {},
                _ = c.userAgent || "";
            e || (e = _);
            var I = u ? !!c.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(d.toString()),
                T = "Object",
                S = u && o.java ? "JavaPackage" : p(o.java),
                N = /\bJava/.test(S) && o.java,
                y = N && p(o.environment) == (u ? T : "Environment"),
                C = N ? "a" : "\u03B1",
                v = N ? "b" : "\u03B2",
                O = o.document || {},
                R = o.operamini || o.opera,
                b = l.test((b = u && R ? R["[[Class]]"] : p(R))) ? b : (R = null),
                D = e,
                L = [],
                w = null,
                M = e == _,
                P = M && R && "function" == typeof R.version && R.version(),
                x = m(
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
                        return t || (RegExp("\\b" + (n.pattern || E(n)) + "\\b", "i").exec(e) && (n.label || n));
                    },
                ),
                U = m(
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
                        { label: "Microsoft Edge", pattern: "(?:Edge|Edg|EdgA|EdgiOS)" },
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
                        "Vivaldi",
                        "Waterfox",
                        "WebPositive",
                        { label: "Yandex Browser", pattern: "YaBrowser" },
                        { label: "UC Browser", pattern: "UCBrowser" },
                        "Opera Mini",
                        { label: "Opera Mini", pattern: "OPiOS" },
                        "Opera",
                        { label: "Opera", pattern: "OPR" },
                        "Chromium",
                        "Chrome",
                        { label: "Chrome", pattern: "(?:HeadlessChrome)" },
                        { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
                        { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
                        { label: "Firefox for iOS", pattern: "FxiOS" },
                        { label: "IE", pattern: "IEMobile" },
                        { label: "IE", pattern: "MSIE" },
                        "Safari",
                    ],
                    function (t, n) {
                        return t || (RegExp("\\b" + (n.pattern || E(n)) + "\\b", "i").exec(e) && (n.label || n));
                    },
                ),
                k = V([
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
                        Alcatel: {},
                        Archos: {},
                        Amazon: { Kindle: 1, "Kindle Fire": 1 },
                        Asus: { Transformer: 1 },
                        "Barnes & Noble": { Nook: 1 },
                        BlackBerry: { PlayBook: 1 },
                        Google: { "Google TV": 1, Nexus: 1 },
                        HP: { TouchPad: 1 },
                        HTC: {},
                        Huawei: {},
                        Lenovo: {},
                        LG: {},
                        Microsoft: { Xbox: 1, "Xbox One": 1 },
                        Motorola: { Xoom: 1 },
                        Nintendo: { "Wii U": 1, Wii: 1 },
                        Nokia: { Lumia: 1 },
                        Oppo: {},
                        Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
                        Sony: { PlayStation: 1, "PlayStation Vita": 1 },
                        Xiaomi: { Mi: 1, Redmi: 1 },
                    },
                    function (t, n, i) {
                        return (
                            t ||
                            ((n[k] ||
                                n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(k)] ||
                                RegExp("\\b" + E(i) + "(?:\\b|\\w*\\d)", "i").exec(e)) &&
                                i)
                        );
                    },
                ),
                F = m(
                    [
                        "Windows Phone",
                        "KaiOS",
                        "Android",
                        "CentOS",
                        { label: "Chrome OS", pattern: "CrOS" },
                        "Debian",
                        { label: "DragonFly BSD", pattern: "DragonFly" },
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
                        var i,
                            r,
                            s,
                            a = n.pattern || E(n);
                        return (
                            !t &&
                                (t = RegExp("\\b" + a + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) &&
                                ((i = t),
                                (r = n.label || n),
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
                                    r &&
                                    /^Win/i.test(i) &&
                                    !/^Windows Phone /i.test(i) &&
                                    (s = s[/[\d.]+$/.exec(i)]) &&
                                    (i = "Windows " + s),
                                (i = String(i)),
                                a && r && (i = i.replace(RegExp(a, "i"), r)),
                                (t = i =
                                    f(
                                        i
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
            function V(t) {
                return m(t, function (t, n) {
                    var i = n.pattern || E(n);
                    return (
                        !t &&
                            (t =
                                RegExp("\\b" + i + " *\\d+[.\\w_]*", "i").exec(e) ||
                                RegExp("\\b" + i + " *\\w+-[\\w]*", "i").exec(e) ||
                                RegExp("\\b" + i + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) &&
                            ((t = String(n.label && !RegExp(i, "i").test(n.label) ? n.label : t).split("/"))[1] &&
                                !/[\d.]+/.test(t[0]) &&
                                (t[0] += " " + t[1]),
                            (n = n.label || n),
                            (t = f(
                                t[0]
                                    .replace(RegExp(i, "i"), n)
                                    .replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ")
                                    .replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"),
                            ))),
                        t
                    );
                });
            }
            function B(t) {
                return m(t, function (t, n) {
                    return (
                        t ||
                        (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] ||
                        null
                    );
                });
            }
            if (
                (x && (x = [x]),
                /\bAndroid\b/.test(F) &&
                    !k &&
                    (s = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) &&
                    (k = g(s[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
                G && !k
                    ? (k = V([G]))
                    : G &&
                      k &&
                      (k = k
                          .replace(RegExp("^(" + E(G) + ")[-_.\\s]", "i"), G + " ")
                          .replace(RegExp("^(" + E(G) + ")[-_.]?(\\w)", "i"), G + " $2")),
                (s = /\bGoogle TV\b/.exec(k)) && (k = s[0]),
                /\bSimulator\b/i.test(e) && (k = (k ? k + " " : "") + "Simulator"),
                "Opera Mini" == U && /\bOPiOS\b/.test(e) && L.push("running in Turbo/Uncompressed mode"),
                "IE" == U && /\blike iPhone OS\b/.test(e)
                    ? ((G = (s = A(e.replace(/like iPhone OS/, ""))).manufacturer), (k = s.product))
                    : /^iP/.test(k)
                      ? (U || (U = "Safari"),
                        (F = "iOS" + ((s = / OS ([\d_]+)/i.exec(e)) ? " " + s[1].replace(/_/g, ".") : "")))
                      : "Konqueror" == U && /^Linux\b/i.test(F)
                        ? (F = "Kubuntu")
                        : (G &&
                                "Google" != G &&
                                ((/Chrome/.test(U) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(k))) ||
                            (/\bAndroid\b/.test(F) && /^Chrome/.test(U) && /\bVersion\//i.test(e))
                          ? ((U = "Android Browser"), (F = /\bAndroid\b/.test(F) ? F : "Android"))
                          : "Silk" == U
                            ? (/\bMobi/i.test(e) || ((F = "Android"), L.unshift("desktop mode")),
                              /Accelerated *= *true/i.test(e) && L.unshift("accelerated"))
                            : "UC Browser" == U && /\bUCWEB\b/.test(e)
                              ? L.push("speed mode")
                              : "PaleMoon" == U && (s = /\bFirefox\/([\d.]+)\b/.exec(e))
                                ? L.push("identifying as Firefox " + s[1])
                                : "Firefox" == U && (s = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                                  ? (F || (F = "Firefox OS"), k || (k = s[1]))
                                  : !U || (s = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(U))
                                    ? (U && !k && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(s + "/") + 8)) && (U = null),
                                      (s = k || G || F) &&
                                          (k || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(F)) &&
                                          (U = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(F) ? F : s) + " Browser"))
                                    : "Electron" == U &&
                                      (s = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                                      L.push("Chromium " + s),
                P ||
                    (P = B([
                        "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
                        "Version",
                        E(U),
                        "(?:Firefox|Minefield|NetFront)",
                    ])),
                (s =
                    ("iCab" == x && parseFloat(P) > 3 && "WebKit") ||
                    (/\bOpera\b/.test(U) && (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
                    (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(x) && "WebKit") ||
                    (!x && /\bMSIE\b/i.test(e) && ("Mac OS" == F ? "Tasman" : "Trident")) ||
                    ("WebKit" == x && /\bPlayStation\b(?! Vita\b)/i.test(U) && "NetFront")) && (x = [s]),
                "IE" == U && (s = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                    ? ((U += " Mobile"),
                      (F = "Windows Phone " + (/\+$/.test(s) ? s : s + ".x")),
                      L.unshift("desktop mode"))
                    : /\bWPDesktop\b/i.test(e)
                      ? ((U = "IE Mobile"),
                        (F = "Windows Phone 8.x"),
                        L.unshift("desktop mode"),
                        P || (P = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                      : "IE" != U &&
                        "Trident" == x &&
                        (s = /\brv:([\d.]+)/.exec(e)) &&
                        (U && L.push("identifying as " + U + (P ? " " + P : "")), (U = "IE"), (P = s[1])),
                M)
            ) {
                if (
                    ((n = "global"),
                    (i = null != (t = o) ? typeof t[n] : "number"),
                    /^(?:boolean|number|string|undefined)$/.test(i) || ("object" == i && !t[n]))
                )
                    p((s = o.runtime)) == (u ? T : "ScriptBridgingProxyObject")
                        ? ((U = "Adobe AIR"), (F = s.flash.system.Capabilities.os))
                        : p((s = o.phantom)) == (u ? T : "RuntimeObject")
                          ? ((U = "PhantomJS"),
                            (P = (s = s.version || null) && s.major + "." + s.minor + "." + s.patch))
                          : "number" == typeof O.documentMode && (s = /\bTrident\/(\d+)/i.exec(e))
                            ? ((P = [P, O.documentMode]),
                              (s = +s[1] + 4) != P[1] && (L.push("IE " + P[1] + " mode"), x && (x[1] = ""), (P[1] = s)),
                              (P = "IE" == U ? String(P[1].toFixed(1)) : P[0]))
                            : "number" == typeof O.documentMode &&
                              /^(?:Chrome|Firefox)\b/.test(U) &&
                              (L.push("masking as " + U + " " + P),
                              (U = "IE"),
                              (P = "11.0"),
                              (x = ["Trident"]),
                              (F = "Windows"));
                else if (
                    (N &&
                        ((D = (s = N.lang.System).getProperty("os.arch")),
                        (F = F || s.getProperty("os.name") + " " + s.getProperty("os.version"))),
                    y)
                ) {
                    try {
                        (P = o.require("ringo/engine").version.join(".")), (U = "RingoJS");
                    } catch (e) {
                        (s = o.system) && s.global.system == o.system && ((U = "Narwhal"), F || (F = s[0].os || null));
                    }
                    U || (U = "Rhino");
                } else
                    "object" == typeof o.process &&
                        !o.process.browser &&
                        (s = o.process) &&
                        ("object" == typeof s.versions &&
                            ("string" == typeof s.versions.electron
                                ? (L.push("Node " + s.versions.node), (U = "Electron"), (P = s.versions.electron))
                                : "string" == typeof s.versions.nw &&
                                  (L.push("Chromium " + P, "Node " + s.versions.node),
                                  (U = "NW.js"),
                                  (P = s.versions.nw))),
                        U ||
                            ((U = "Node.js"),
                            (D = s.arch),
                            (F = s.platform),
                            (P = (P = /[\d.]+/.exec(s.version)) ? P[0] : null)));
                F = F && f(F);
            }
            if (
                (P &&
                    (s =
                        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(P) ||
                        /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (M && c.appMinorVersion)) ||
                        (/\bMinefield\b/i.test(e) && "a")) &&
                    ((w = /b/i.test(s) ? "beta" : "alpha"),
                    (P = P.replace(RegExp(s + "\\+?$"), "") + ("beta" == w ? v : C) + (/\d+\+?/.exec(s) || ""))),
                "Fennec" == U || ("Firefox" == U && /\b(?:Android|Firefox OS|KaiOS)\b/.test(F)))
            )
                U = "Firefox Mobile";
            else if ("Maxthon" == U && P) P = P.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(k))
                "Xbox 360" == k && (F = null), "Xbox 360" == k && /\bIEMobile\b/.test(e) && L.unshift("mobile mode");
            else if (
                (/^(?:Chrome|IE|Opera)$/.test(U) || (U && !k && !/Browser|Mobi/.test(U))) &&
                ("Windows CE" == F || /Mobi/i.test(e))
            )
                U += " Mobile";
            else if ("IE" == U && M)
                try {
                    null === o.external && L.unshift("platform preview");
                } catch (e) {
                    L.unshift("embedded");
                }
            else
                (/\bBlackBerry\b/.test(k) || /\bBB10\b/.test(e)) &&
                (s = (RegExp(k.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || P)
                    ? ((F =
                          ((s = [s, /BB10/.test(e)])[1] ? ((k = null), (G = "BlackBerry")) : "Device Software") +
                          " " +
                          s[0]),
                      (P = null))
                    : this != h &&
                      "Wii" != k &&
                      ((M && R) ||
                          (/Opera/.test(U) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                          ("Firefox" == U && /\bOS X (?:\d+\.){2,}/.test(F)) ||
                          ("IE" == U &&
                              ((F && !/^Win/.test(F) && P > 5.5) ||
                                  (/\bWindows XP\b/.test(F) && P > 8) ||
                                  (8 == P && !/\bTrident\b/.test(e))))) &&
                      !l.test((s = A.call(h, e.replace(l, "") + ";"))) &&
                      s.name &&
                      ((s = "ing as " + s.name + ((s = s.version) ? " " + s : "")),
                      l.test(U)
                          ? (/\bIE\b/.test(s) && "Mac OS" == F && (F = null), (s = "identify" + s))
                          : ((s = "mask" + s),
                            (U = b ? f(b.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                            /\bIE\b/.test(s) && (F = null),
                            M || (P = null)),
                      (x = ["Presto"]),
                      L.push(s));
            (s = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
                ((s = [parseFloat(s.replace(/\.(\d)$/, ".0$1")), s]),
                "Safari" == U && "+" == s[1].slice(-1)
                    ? ((U = "WebKit Nightly"), (w = "alpha"), (P = s[1].slice(0, -1)))
                    : (P == s[1] || P == (s[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (P = null),
                (s[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1]),
                537.36 == s[0] && 537.36 == s[2] && parseFloat(s[1]) >= 28 && "WebKit" == x && (x = ["Blink"]),
                M && (I || s[1])
                    ? (x && (x[1] = "like Chrome"),
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
                                                                            : "Blink" != x
                                                                              ? "27"
                                                                              : "28")))
                    : (x && (x[1] = "like Safari"),
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
                                              : s < 602
                                                ? 9
                                                : s < 604
                                                  ? 10
                                                  : s < 606
                                                    ? 11
                                                    : s < 608
                                                      ? 12
                                                      : "12")),
                x && (x[1] += " " + (s += "number" == typeof s ? ".x" : /[.+]/.test(s) ? "" : "+")),
                "Safari" == U && (!P || parseInt(P) > 45)
                    ? (P = s)
                    : "Chrome" == U && /\bHeadlessChrome/i.test(e) && L.unshift("headless")),
                "Opera" == U && (s = /\bzbov|zvav$/.exec(F))
                    ? ((U += " "),
                      L.unshift("desktop mode"),
                      "zvav" == s ? ((U += "Mini"), (P = null)) : (U += "Mobile"),
                      (F = F.replace(RegExp(" *" + s + "$"), "")))
                    : "Safari" == U && /\bChrome\b/.exec(x && x[1])
                      ? (L.unshift("desktop mode"),
                        (U = "Chrome Mobile"),
                        (P = null),
                        /\bOS X\b/.test(F) ? ((G = "Apple"), (F = "iOS 4.3+")) : (F = null))
                      : /\bSRWare Iron\b/.test(U) && !P && (P = B("Chrome")),
                P &&
                    0 == P.indexOf((s = /[\d.]+$/.exec(F))) &&
                    e.indexOf("/" + s + "-") > -1 &&
                    (F = g(F.replace(s, ""))),
                F &&
                    -1 != F.indexOf(U) &&
                    !RegExp(U + " OS").test(F) &&
                    (F = F.replace(RegExp(" *" + E(U) + " *"), "")),
                x &&
                    !/\b(?:Avant|Nook)\b/.test(U) &&
                    (/Browser|Lunascape|Maxthon/.test(U) ||
                        ("Safari" != U && /^iOS/.test(F) && /\bSafari\b/.test(x[1])) ||
                        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                            U,
                        ) &&
                            x[1])) &&
                    (s = x[x.length - 1]) &&
                    L.push(s),
                L.length && (L = ["(" + L.join("; ") + ")"]),
                G && k && 0 > k.indexOf(G) && L.push("on " + G),
                k && L.push((/^on /.test(L[L.length - 1]) ? "" : "on ") + k),
                F &&
                    ((a = (s = / ([\d.+]+)$/.exec(F)) && "/" == F.charAt(F.length - s[0].length - 1)),
                    (F = {
                        architecture: 32,
                        family: s && !a ? F.replace(s[0], "") : F,
                        version: s ? s[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !a ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "");
                        },
                    })),
                (s = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(D)) && !/\bi686\b/i.test(D)
                    ? (F && ((F.architecture = 64), (F.family = F.family.replace(RegExp(" *" + s), ""))),
                      U &&
                          (/\bWOW64\b/i.test(e) ||
                              (M && /\w(?:86|32)$/.test(c.cpuClass || c.platform) && !/\bWin64; x64\b/i.test(e))) &&
                          L.unshift("32-bit"))
                    : F && /^OS X/.test(F.family) && "Chrome" == U && parseFloat(P) >= 39 && (F.architecture = 64),
                e || (e = null);
            var H = {};
            return (
                (H.description = e),
                (H.layout = x && x[0]),
                (H.manufacturer = G),
                (H.name = U),
                (H.prerelease = w),
                (H.product = k),
                (H.ua = e),
                (H.version = U && P),
                (H.os = F || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return "null";
                    },
                }),
                (H.parse = A),
                (H.toString = function () {
                    return this.description || "";
                }),
                H.version && L.unshift(P),
                H.name && L.unshift(U),
                F &&
                    U &&
                    !(F == String(F).split(" ")[0] && (F == U.split(" ")[0] || k)) &&
                    L.push(k ? "(" + F + ")" : "on " + F),
                L.length && (H.description = L.join(" ")),
                H
            );
        }
        var I = A();
        "function" == typeof define && "object" == typeof define.amd && define.amd
            ? ((r.platform = I),
              define(function () {
                  return I;
              }))
            : s && a
              ? h(I, function (e, t) {
                    s[t] = e;
                })
              : (r.platform = I);
    }.call(this);
