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
            c = u.hasOwnProperty,
            d = u.toString;
        function _(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function f(e) {
            return (e = g(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : _(e);
        }
        function p(e, t) {
            for (var n in e) c.call(e, n) && t(e[n], n, e);
        }
        function h(e) {
            return null == e ? _(e) : d.call(e).slice(8, -1);
        }
        function E(e) {
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
            else p(e, r);
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
            var c = o.navigator || {},
                _ = c.userAgent || "";
            e || (e = _);
            var I = u ? !!c.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(d.toString()),
                T = "Object",
                S = u && o.java ? "JavaPackage" : h(o.java),
                y = /\bJava/.test(S) && o.java,
                N = y && h(o.environment) == (u ? T : "Environment"),
                v = y ? "a" : "α",
                C = y ? "b" : "β",
                O = o.document || {},
                R = o.operamini || o.opera,
                b = l.test((b = u && R ? R["[[Class]]"] : h(R))) ? b : (R = null),
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
                U = V([
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
                    function (t, n, r) {
                        return (
                            t ||
                            ((n[U] ||
                                n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(U)] ||
                                RegExp("\\b" + E(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) &&
                                r)
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
                        var r,
                            i,
                            s,
                            a = n.pattern || E(n);
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
            function V(t) {
                return m(t, function (t, n) {
                    var r = n.pattern || E(n);
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
                    !U &&
                    (s = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) &&
                    (U = g(s[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
                G && !U
                    ? (U = V([G]))
                    : G &&
                      U &&
                      (U = U.replace(RegExp("^(" + E(G) + ")[-_.\\s]", "i"), G + " ").replace(
                          RegExp("^(" + E(G) + ")[-_.]?(\\w)", "i"),
                          G + " $2",
                      )),
                (s = /\bGoogle TV\b/.exec(U)) && (U = s[0]),
                /\bSimulator\b/i.test(e) && (U = (U ? U + " " : "") + "Simulator"),
                "Opera Mini" == k && /\bOPiOS\b/.test(e) && L.push("running in Turbo/Uncompressed mode"),
                "IE" == k && /\blike iPhone OS\b/.test(e)
                    ? ((G = (s = A(e.replace(/like iPhone OS/, ""))).manufacturer), (U = s.product))
                    : /^iP/.test(U)
                      ? (k || (k = "Safari"),
                        (F = "iOS" + ((s = / OS ([\d_]+)/i.exec(e)) ? " " + s[1].replace(/_/g, ".") : "")))
                      : "Konqueror" == k && /^Linux\b/i.test(F)
                        ? (F = "Kubuntu")
                        : (G &&
                                "Google" != G &&
                                ((/Chrome/.test(k) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(U))) ||
                            (/\bAndroid\b/.test(F) && /^Chrome/.test(k) && /\bVersion\//i.test(e))
                          ? ((k = "Android Browser"), (F = /\bAndroid\b/.test(F) ? F : "Android"))
                          : "Silk" == k
                            ? (/\bMobi/i.test(e) || ((F = "Android"), L.unshift("desktop mode")),
                              /Accelerated *= *true/i.test(e) && L.unshift("accelerated"))
                            : "UC Browser" == k && /\bUCWEB\b/.test(e)
                              ? L.push("speed mode")
                              : "PaleMoon" == k && (s = /\bFirefox\/([\d.]+)\b/.exec(e))
                                ? L.push("identifying as Firefox " + s[1])
                                : "Firefox" == k && (s = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                                  ? (F || (F = "Firefox OS"), U || (U = s[1]))
                                  : !k || (s = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(k))
                                    ? (k && !U && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(s + "/") + 8)) && (k = null),
                                      (s = U || G || F) &&
                                          (U || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(F)) &&
                                          (k = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(F) ? F : s) + " Browser"))
                                    : "Electron" == k &&
                                      (s = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                                      L.push("Chromium " + s),
                P ||
                    (P = B([
                        "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
                        "Version",
                        E(k),
                        "(?:Firefox|Minefield|NetFront)",
                    ])),
                (s =
                    ("iCab" == x && parseFloat(P) > 3 && "WebKit") ||
                    (/\bOpera\b/.test(k) && (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
                    (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(x) && "WebKit") ||
                    (!x && /\bMSIE\b/i.test(e) && ("Mac OS" == F ? "Tasman" : "Trident")) ||
                    ("WebKit" == x && /\bPlayStation\b(?! Vita\b)/i.test(k) && "NetFront")) && (x = [s]),
                "IE" == k && (s = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                    ? ((k += " Mobile"),
                      (F = "Windows Phone " + (/\+$/.test(s) ? s : s + ".x")),
                      L.unshift("desktop mode"))
                    : /\bWPDesktop\b/i.test(e)
                      ? ((k = "IE Mobile"),
                        (F = "Windows Phone 8.x"),
                        L.unshift("desktop mode"),
                        P || (P = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                      : "IE" != k &&
                        "Trident" == x &&
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
                        ? ((k = "Adobe AIR"), (F = s.flash.system.Capabilities.os))
                        : h((s = o.phantom)) == (u ? T : "RuntimeObject")
                          ? ((k = "PhantomJS"),
                            (P = (s = s.version || null) && s.major + "." + s.minor + "." + s.patch))
                          : "number" == typeof O.documentMode && (s = /\bTrident\/(\d+)/i.exec(e))
                            ? ((P = [P, O.documentMode]),
                              (s = +s[1] + 4) != P[1] && (L.push("IE " + P[1] + " mode"), x && (x[1] = ""), (P[1] = s)),
                              (P = "IE" == k ? String(P[1].toFixed(1)) : P[0]))
                            : "number" == typeof O.documentMode &&
                              /^(?:Chrome|Firefox)\b/.test(k) &&
                              (L.push("masking as " + k + " " + P),
                              (k = "IE"),
                              (P = "11.0"),
                              (x = ["Trident"]),
                              (F = "Windows"));
                else if (
                    (y &&
                        ((D = (s = y.lang.System).getProperty("os.arch")),
                        (F = F || s.getProperty("os.name") + " " + s.getProperty("os.version"))),
                    N)
                ) {
                    try {
                        (P = o.require("ringo/engine").version.join(".")), (k = "RingoJS");
                    } catch (e) {
                        (s = o.system) && s.global.system == o.system && ((k = "Narwhal"), F || (F = s[0].os || null));
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
                    (P = P.replace(RegExp(s + "\\+?$"), "") + ("beta" == w ? C : v) + (/\d+\+?/.exec(s) || ""))),
                "Fennec" == k || ("Firefox" == k && /\b(?:Android|Firefox OS|KaiOS)\b/.test(F)))
            )
                k = "Firefox Mobile";
            else if ("Maxthon" == k && P) P = P.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(U))
                "Xbox 360" == U && (F = null), "Xbox 360" == U && /\bIEMobile\b/.test(e) && L.unshift("mobile mode");
            else if (
                (/^(?:Chrome|IE|Opera)$/.test(k) || (k && !U && !/Browser|Mobi/.test(k))) &&
                ("Windows CE" == F || /Mobi/i.test(e))
            )
                k += " Mobile";
            else if ("IE" == k && M)
                try {
                    null === o.external && L.unshift("platform preview");
                } catch (e) {
                    L.unshift("embedded");
                }
            else
                (/\bBlackBerry\b/.test(U) || /\bBB10\b/.test(e)) &&
                (s = (RegExp(U.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || P)
                    ? ((F =
                          ((s = [s, /BB10/.test(e)])[1] ? ((U = null), (G = "BlackBerry")) : "Device Software") +
                          " " +
                          s[0]),
                      (P = null))
                    : this != p &&
                      "Wii" != U &&
                      ((M && R) ||
                          (/Opera/.test(k) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                          ("Firefox" == k && /\bOS X (?:\d+\.){2,}/.test(F)) ||
                          ("IE" == k &&
                              ((F && !/^Win/.test(F) && P > 5.5) ||
                                  (/\bWindows XP\b/.test(F) && P > 8) ||
                                  (8 == P && !/\bTrident\b/.test(e))))) &&
                      !l.test((s = A.call(p, e.replace(l, "") + ";"))) &&
                      s.name &&
                      ((s = "ing as " + s.name + ((s = s.version) ? " " + s : "")),
                      l.test(k)
                          ? (/\bIE\b/.test(s) && "Mac OS" == F && (F = null), (s = "identify" + s))
                          : ((s = "mask" + s),
                            (k = b ? f(b.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                            /\bIE\b/.test(s) && (F = null),
                            M || (P = null)),
                      (x = ["Presto"]),
                      L.push(s));
            (s = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
                ((s = [parseFloat(s.replace(/\.(\d)$/, ".0$1")), s]),
                "Safari" == k && "+" == s[1].slice(-1)
                    ? ((k = "WebKit Nightly"), (w = "alpha"), (P = s[1].slice(0, -1)))
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
                "Safari" == k && (!P || parseInt(P) > 45)
                    ? (P = s)
                    : "Chrome" == k && /\bHeadlessChrome/i.test(e) && L.unshift("headless")),
                "Opera" == k && (s = /\bzbov|zvav$/.exec(F))
                    ? ((k += " "),
                      L.unshift("desktop mode"),
                      "zvav" == s ? ((k += "Mini"), (P = null)) : (k += "Mobile"),
                      (F = F.replace(RegExp(" *" + s + "$"), "")))
                    : "Safari" == k && /\bChrome\b/.exec(x && x[1])
                      ? (L.unshift("desktop mode"),
                        (k = "Chrome Mobile"),
                        (P = null),
                        /\bOS X\b/.test(F) ? ((G = "Apple"), (F = "iOS 4.3+")) : (F = null))
                      : /\bSRWare Iron\b/.test(k) && !P && (P = B("Chrome")),
                P &&
                    0 == P.indexOf((s = /[\d.]+$/.exec(F))) &&
                    e.indexOf("/" + s + "-") > -1 &&
                    (F = g(F.replace(s, ""))),
                F &&
                    -1 != F.indexOf(k) &&
                    !RegExp(k + " OS").test(F) &&
                    (F = F.replace(RegExp(" *" + E(k) + " *"), "")),
                x &&
                    !/\b(?:Avant|Nook)\b/.test(k) &&
                    (/Browser|Lunascape|Maxthon/.test(k) ||
                        ("Safari" != k && /^iOS/.test(F) && /\bSafari\b/.test(x[1])) ||
                        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                            k,
                        ) &&
                            x[1])) &&
                    (s = x[x.length - 1]) &&
                    L.push(s),
                L.length && (L = ["(" + L.join("; ") + ")"]),
                G && U && 0 > U.indexOf(G) && L.push("on " + G),
                U && L.push((/^on /.test(L[L.length - 1]) ? "" : "on ") + U),
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
                      k &&
                          (/\bWOW64\b/i.test(e) ||
                              (M && /\w(?:86|32)$/.test(c.cpuClass || c.platform) && !/\bWin64; x64\b/i.test(e))) &&
                          L.unshift("32-bit"))
                    : F && /^OS X/.test(F.family) && "Chrome" == k && parseFloat(P) >= 39 && (F.architecture = 64),
                e || (e = null);
            var H = {};
            return (
                (H.description = e),
                (H.layout = x && x[0]),
                (H.manufacturer = G),
                (H.name = k),
                (H.prerelease = w),
                (H.product = U),
                (H.ua = e),
                (H.version = k && P),
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
                H.name && L.unshift(k),
                F &&
                    k &&
                    !(F == String(F).split(" ")[0] && (F == k.split(" ")[0] || U)) &&
                    L.push(U ? "(" + F + ")" : "on " + F),
                L.length && (H.description = L.join(" ")),
                H
            );
        }
        var I = A();
        "function" == typeof define && "object" == typeof define.amd && define.amd
            ? ((i.platform = I),
              define(function () {
                  return I;
              }))
            : s && a
              ? p(I, function (e, t) {
                    s[t] = e;
                })
              : (i.platform = I);
    }.call(this);
