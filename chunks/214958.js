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
            d = u.hasOwnProperty,
            c = u.toString;
        function _(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function h(e) {
            return (e = g(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : _(e);
        }
        function f(e, t) {
            for (var n in e) d.call(e, n) && t(e[n], n, e);
        }
        function E(e) {
            return null == e ? _(e) : c.call(e).slice(8, -1);
        }
        function p(e) {
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
            else f(e, i);
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
                u = e && "object" == typeof e && "String" != E(e);
            u && ((o = e), (e = null));
            var d = o.navigator || {},
                _ = d.userAgent || "";
            e || (e = _);
            var I = u ? !!d.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(c.toString()),
                T = "Object",
                S = u && o.java ? "JavaPackage" : E(o.java),
                N = /\bJava/.test(S) && o.java,
                C = N && E(o.environment) == (u ? T : "Environment"),
                y = N ? "a" : "\u03B1",
                v = N ? "b" : "\u03B2",
                R = o.document || {},
                O = o.operamini || o.opera,
                b = l.test((b = u && O ? O["[[Class]]"] : E(O))) ? b : (O = null),
                L = e,
                D = [],
                P = null,
                w = e == _,
                M = w && O && "function" == typeof O.version && O.version(),
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
                        return t || (RegExp("\\b" + (n.pattern || p(n)) + "\\b", "i").exec(e) && (n.label || n));
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
                        return t || (RegExp("\\b" + (n.pattern || p(n)) + "\\b", "i").exec(e) && (n.label || n));
                    },
                ),
                k = F([
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
                                RegExp("\\b" + p(i) + "(?:\\b|\\w*\\d)", "i").exec(e)) &&
                                i)
                        );
                    },
                ),
                V = m(
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
                            a = n.pattern || p(n);
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
                                    h(
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
            function F(t) {
                return m(t, function (t, n) {
                    var i = n.pattern || p(n);
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
                            (t = h(
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
                /\bAndroid\b/.test(V) &&
                    !k &&
                    (s = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) &&
                    (k = g(s[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
                G && !k
                    ? (k = F([G]))
                    : G &&
                      k &&
                      (k = k
                          .replace(RegExp("^(" + p(G) + ")[-_.\\s]", "i"), G + " ")
                          .replace(RegExp("^(" + p(G) + ")[-_.]?(\\w)", "i"), G + " $2")),
                (s = /\bGoogle TV\b/.exec(k)) && (k = s[0]),
                /\bSimulator\b/i.test(e) && (k = (k ? k + " " : "") + "Simulator"),
                "Opera Mini" == U && /\bOPiOS\b/.test(e) && D.push("running in Turbo/Uncompressed mode"),
                "IE" == U && /\blike iPhone OS\b/.test(e)
                    ? ((G = (s = A(e.replace(/like iPhone OS/, ""))).manufacturer), (k = s.product))
                    : /^iP/.test(k)
                      ? (U || (U = "Safari"),
                        (V = "iOS" + ((s = / OS ([\d_]+)/i.exec(e)) ? " " + s[1].replace(/_/g, ".") : "")))
                      : "Konqueror" == U && /^Linux\b/i.test(V)
                        ? (V = "Kubuntu")
                        : (G &&
                                "Google" != G &&
                                ((/Chrome/.test(U) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(k))) ||
                            (/\bAndroid\b/.test(V) && /^Chrome/.test(U) && /\bVersion\//i.test(e))
                          ? ((U = "Android Browser"), (V = /\bAndroid\b/.test(V) ? V : "Android"))
                          : "Silk" == U
                            ? (/\bMobi/i.test(e) || ((V = "Android"), D.unshift("desktop mode")),
                              /Accelerated *= *true/i.test(e) && D.unshift("accelerated"))
                            : "UC Browser" == U && /\bUCWEB\b/.test(e)
                              ? D.push("speed mode")
                              : "PaleMoon" == U && (s = /\bFirefox\/([\d.]+)\b/.exec(e))
                                ? D.push("identifying as Firefox " + s[1])
                                : "Firefox" == U && (s = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                                  ? (V || (V = "Firefox OS"), k || (k = s[1]))
                                  : !U || (s = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(U))
                                    ? (U && !k && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(s + "/") + 8)) && (U = null),
                                      (s = k || G || V) &&
                                          (k || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V)) &&
                                          (U = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(V) ? V : s) + " Browser"))
                                    : "Electron" == U &&
                                      (s = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                                      D.push("Chromium " + s),
                M ||
                    (M = B([
                        "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
                        "Version",
                        p(U),
                        "(?:Firefox|Minefield|NetFront)",
                    ])),
                (s =
                    ("iCab" == x && parseFloat(M) > 3 && "WebKit") ||
                    (/\bOpera\b/.test(U) && (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
                    (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(x) && "WebKit") ||
                    (!x && /\bMSIE\b/i.test(e) && ("Mac OS" == V ? "Tasman" : "Trident")) ||
                    ("WebKit" == x && /\bPlayStation\b(?! Vita\b)/i.test(U) && "NetFront")) && (x = [s]),
                "IE" == U && (s = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                    ? ((U += " Mobile"),
                      (V = "Windows Phone " + (/\+$/.test(s) ? s : s + ".x")),
                      D.unshift("desktop mode"))
                    : /\bWPDesktop\b/i.test(e)
                      ? ((U = "IE Mobile"),
                        (V = "Windows Phone 8.x"),
                        D.unshift("desktop mode"),
                        M || (M = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                      : "IE" != U &&
                        "Trident" == x &&
                        (s = /\brv:([\d.]+)/.exec(e)) &&
                        (U && D.push("identifying as " + U + (M ? " " + M : "")), (U = "IE"), (M = s[1])),
                w)
            ) {
                if (
                    ((n = "global"),
                    (i = null != (t = o) ? typeof t[n] : "number"),
                    /^(?:boolean|number|string|undefined)$/.test(i) || ("object" == i && !t[n]))
                )
                    E((s = o.runtime)) == (u ? T : "ScriptBridgingProxyObject")
                        ? ((U = "Adobe AIR"), (V = s.flash.system.Capabilities.os))
                        : E((s = o.phantom)) == (u ? T : "RuntimeObject")
                          ? ((U = "PhantomJS"),
                            (M = (s = s.version || null) && s.major + "." + s.minor + "." + s.patch))
                          : "number" == typeof R.documentMode && (s = /\bTrident\/(\d+)/i.exec(e))
                            ? ((M = [M, R.documentMode]),
                              (s = +s[1] + 4) != M[1] && (D.push("IE " + M[1] + " mode"), x && (x[1] = ""), (M[1] = s)),
                              (M = "IE" == U ? String(M[1].toFixed(1)) : M[0]))
                            : "number" == typeof R.documentMode &&
                              /^(?:Chrome|Firefox)\b/.test(U) &&
                              (D.push("masking as " + U + " " + M),
                              (U = "IE"),
                              (M = "11.0"),
                              (x = ["Trident"]),
                              (V = "Windows"));
                else if (
                    (N &&
                        ((L = (s = N.lang.System).getProperty("os.arch")),
                        (V = V || s.getProperty("os.name") + " " + s.getProperty("os.version"))),
                    C)
                ) {
                    try {
                        (M = o.require("ringo/engine").version.join(".")), (U = "RingoJS");
                    } catch (e) {
                        (s = o.system) && s.global.system == o.system && ((U = "Narwhal"), V || (V = s[0].os || null));
                    }
                    U || (U = "Rhino");
                } else
                    "object" == typeof o.process &&
                        !o.process.browser &&
                        (s = o.process) &&
                        ("object" == typeof s.versions &&
                            ("string" == typeof s.versions.electron
                                ? (D.push("Node " + s.versions.node), (U = "Electron"), (M = s.versions.electron))
                                : "string" == typeof s.versions.nw &&
                                  (D.push("Chromium " + M, "Node " + s.versions.node),
                                  (U = "NW.js"),
                                  (M = s.versions.nw))),
                        U ||
                            ((U = "Node.js"),
                            (L = s.arch),
                            (V = s.platform),
                            (M = (M = /[\d.]+/.exec(s.version)) ? M[0] : null)));
                V = V && h(V);
            }
            if (
                (M &&
                    (s =
                        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(M) ||
                        /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (w && d.appMinorVersion)) ||
                        (/\bMinefield\b/i.test(e) && "a")) &&
                    ((P = /b/i.test(s) ? "beta" : "alpha"),
                    (M = M.replace(RegExp(s + "\\+?$"), "") + ("beta" == P ? v : y) + (/\d+\+?/.exec(s) || ""))),
                "Fennec" == U || ("Firefox" == U && /\b(?:Android|Firefox OS|KaiOS)\b/.test(V)))
            )
                U = "Firefox Mobile";
            else if ("Maxthon" == U && M) M = M.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(k))
                "Xbox 360" == k && (V = null), "Xbox 360" == k && /\bIEMobile\b/.test(e) && D.unshift("mobile mode");
            else if (
                (/^(?:Chrome|IE|Opera)$/.test(U) || (U && !k && !/Browser|Mobi/.test(U))) &&
                ("Windows CE" == V || /Mobi/i.test(e))
            )
                U += " Mobile";
            else if ("IE" == U && w)
                try {
                    null === o.external && D.unshift("platform preview");
                } catch (e) {
                    D.unshift("embedded");
                }
            else
                (/\bBlackBerry\b/.test(k) || /\bBB10\b/.test(e)) &&
                (s = (RegExp(k.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || M)
                    ? ((V =
                          ((s = [s, /BB10/.test(e)])[1] ? ((k = null), (G = "BlackBerry")) : "Device Software") +
                          " " +
                          s[0]),
                      (M = null))
                    : this != f &&
                      "Wii" != k &&
                      ((w && O) ||
                          (/Opera/.test(U) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                          ("Firefox" == U && /\bOS X (?:\d+\.){2,}/.test(V)) ||
                          ("IE" == U &&
                              ((V && !/^Win/.test(V) && M > 5.5) ||
                                  (/\bWindows XP\b/.test(V) && M > 8) ||
                                  (8 == M && !/\bTrident\b/.test(e))))) &&
                      !l.test((s = A.call(f, e.replace(l, "") + ";"))) &&
                      s.name &&
                      ((s = "ing as " + s.name + ((s = s.version) ? " " + s : "")),
                      l.test(U)
                          ? (/\bIE\b/.test(s) && "Mac OS" == V && (V = null), (s = "identify" + s))
                          : ((s = "mask" + s),
                            (U = b ? h(b.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                            /\bIE\b/.test(s) && (V = null),
                            w || (M = null)),
                      (x = ["Presto"]),
                      D.push(s));
            (s = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
                ((s = [parseFloat(s.replace(/\.(\d)$/, ".0$1")), s]),
                "Safari" == U && "+" == s[1].slice(-1)
                    ? ((U = "WebKit Nightly"), (P = "alpha"), (M = s[1].slice(0, -1)))
                    : (M == s[1] || M == (s[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (M = null),
                (s[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1]),
                537.36 == s[0] && 537.36 == s[2] && parseFloat(s[1]) >= 28 && "WebKit" == x && (x = ["Blink"]),
                w && (I || s[1])
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
                "Safari" == U && (!M || parseInt(M) > 45)
                    ? (M = s)
                    : "Chrome" == U && /\bHeadlessChrome/i.test(e) && D.unshift("headless")),
                "Opera" == U && (s = /\bzbov|zvav$/.exec(V))
                    ? ((U += " "),
                      D.unshift("desktop mode"),
                      "zvav" == s ? ((U += "Mini"), (M = null)) : (U += "Mobile"),
                      (V = V.replace(RegExp(" *" + s + "$"), "")))
                    : "Safari" == U && /\bChrome\b/.exec(x && x[1])
                      ? (D.unshift("desktop mode"),
                        (U = "Chrome Mobile"),
                        (M = null),
                        /\bOS X\b/.test(V) ? ((G = "Apple"), (V = "iOS 4.3+")) : (V = null))
                      : /\bSRWare Iron\b/.test(U) && !M && (M = B("Chrome")),
                M &&
                    0 == M.indexOf((s = /[\d.]+$/.exec(V))) &&
                    e.indexOf("/" + s + "-") > -1 &&
                    (V = g(V.replace(s, ""))),
                V &&
                    -1 != V.indexOf(U) &&
                    !RegExp(U + " OS").test(V) &&
                    (V = V.replace(RegExp(" *" + p(U) + " *"), "")),
                x &&
                    !/\b(?:Avant|Nook)\b/.test(U) &&
                    (/Browser|Lunascape|Maxthon/.test(U) ||
                        ("Safari" != U && /^iOS/.test(V) && /\bSafari\b/.test(x[1])) ||
                        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                            U,
                        ) &&
                            x[1])) &&
                    (s = x[x.length - 1]) &&
                    D.push(s),
                D.length && (D = ["(" + D.join("; ") + ")"]),
                G && k && 0 > k.indexOf(G) && D.push("on " + G),
                k && D.push((/^on /.test(D[D.length - 1]) ? "" : "on ") + k),
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
                (s = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(L)) && !/\bi686\b/i.test(L)
                    ? (V && ((V.architecture = 64), (V.family = V.family.replace(RegExp(" *" + s), ""))),
                      U &&
                          (/\bWOW64\b/i.test(e) ||
                              (w && /\w(?:86|32)$/.test(d.cpuClass || d.platform) && !/\bWin64; x64\b/i.test(e))) &&
                          D.unshift("32-bit"))
                    : V && /^OS X/.test(V.family) && "Chrome" == U && parseFloat(M) >= 39 && (V.architecture = 64),
                e || (e = null);
            var j = {};
            return (
                (j.description = e),
                (j.layout = x && x[0]),
                (j.manufacturer = G),
                (j.name = U),
                (j.prerelease = P),
                (j.product = k),
                (j.ua = e),
                (j.version = U && M),
                (j.os = V || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return "null";
                    },
                }),
                (j.parse = A),
                (j.toString = function () {
                    return this.description || "";
                }),
                j.version && D.unshift(M),
                j.name && D.unshift(U),
                V &&
                    U &&
                    !(V == String(V).split(" ")[0] && (V == U.split(" ")[0] || k)) &&
                    D.push(k ? "(" + V + ")" : "on " + V),
                D.length && (j.description = D.join(" ")),
                j
            );
        }
        var I = A();
        "function" == typeof define && "object" == typeof define.amd && define.amd
            ? ((r.platform = I),
              define(function () {
                  return I;
              }))
            : s && a
              ? f(I, function (e, t) {
                    s[t] = e;
                })
              : (r.platform = I);
    }.call(this);
