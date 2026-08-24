(e = r.nmd(e)),
    function () {
        "use strict";
        var n = { function: !0, object: !0 },
            o = (n[typeof window] && window) || this,
            i = n[typeof t] && t,
            a = n.object && e && !e.nodeType && e,
            s = i && a && "object" == typeof r.g && r.g;
        s && (s.global === s || s.window === s || s.self === s) && (o = s);
        var l = /\bOpera/,
            u = Object.prototype,
            c = u.hasOwnProperty,
            f = u.toString;
        function p(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function d(e) {
            return (e = g(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : p(e);
        }
        function h(e, t) {
            for (var r in e) c.call(e, r) && t(e[r], r, e);
        }
        function m(e) {
            return null == e ? p(e) : f.call(e).slice(8, -1);
        }
        function v(e) {
            return String(e).replace(/([ -])(?!$)/g, "$1?");
        }
        function y(e, t) {
            var r = null,
                n = function (n, o) {
                    r = t(r, n, o, e);
                },
                o = -1,
                i = e ? e.length : 0;
            if ("number" == typeof i && i > -1 && i <= 0x1fffffffffffff) for (; ++o < i; ) n(e[o], o, e);
            else h(e, n);
            return r;
        }
        function g(e) {
            return String(e).replace(/^ +| +$/g, "");
        }
        function b(e) {
            var t,
                r,
                n,
                i,
                a,
                s = o,
                u = e && "object" == typeof e && "String" != m(e);
            u && ((s = e), (e = null));
            var c = s.navigator || {},
                p = c.userAgent || "";
            e || (e = p);
            var w = u ? !!c.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(f.toString()),
                _ = "Object",
                S = u && s.java ? "JavaPackage" : m(s.java),
                x = /\bJava/.test(S) && s.java,
                E = x && m(s.environment) == (u ? _ : "Environment"),
                k = x ? "a" : "\u03B1",
                C = x ? "b" : "\u03B2",
                T = s.document || {},
                M = s.operamini || s.opera,
                P = l.test((P = u && M ? M["[[Class]]"] : m(M))) ? P : (M = null),
                A = e,
                O = [],
                I = null,
                D = e == p,
                L = D && M && "function" == typeof M.version && M.version(),
                R = y(
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
                    function (t, r) {
                        return t || (RegExp("\\b" + (r.pattern || v(r)) + "\\b", "i").exec(e) && (r.label || r));
                    },
                ),
                F = y(
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
                    function (t, r) {
                        return t || (RegExp("\\b" + (r.pattern || v(r)) + "\\b", "i").exec(e) && (r.label || r));
                    },
                ),
                N = $([
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
                j = y(
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
                    function (t, r, n) {
                        return (
                            t ||
                            ((r[N] ||
                                r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(N)] ||
                                RegExp("\\b" + v(n) + "(?:\\b|\\w*\\d)", "i").exec(e)) &&
                                n)
                        );
                    },
                ),
                B = y(
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
                    function (t, r) {
                        var n,
                            o,
                            i,
                            a = r.pattern || v(r);
                        return (
                            !t &&
                                (t = RegExp("\\b" + a + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) &&
                                ((n = t),
                                (o = r.label || r),
                                (i = {
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
                                    o &&
                                    /^Win/i.test(n) &&
                                    !/^Windows Phone /i.test(n) &&
                                    (i = i[/[\d.]+$/.exec(n)]) &&
                                    (n = "Windows " + i),
                                (n = String(n)),
                                a && o && (n = n.replace(RegExp(a, "i"), o)),
                                (t = n =
                                    d(
                                        n
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
            function $(t) {
                return y(t, function (t, r) {
                    var n = r.pattern || v(r);
                    return (
                        !t &&
                            (t =
                                RegExp("\\b" + n + " *\\d+[.\\w_]*", "i").exec(e) ||
                                RegExp("\\b" + n + " *\\w+-[\\w]*", "i").exec(e) ||
                                RegExp("\\b" + n + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) &&
                            ((t = String(r.label && !RegExp(n, "i").test(r.label) ? r.label : t).split("/"))[1] &&
                                !/[\d.]+/.test(t[0]) &&
                                (t[0] += " " + t[1]),
                            (r = r.label || r),
                            (t = d(
                                t[0]
                                    .replace(RegExp(n, "i"), r)
                                    .replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ")
                                    .replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"),
                            ))),
                        t
                    );
                });
            }
            function K(t) {
                return y(t, function (t, r) {
                    return (
                        t ||
                        (RegExp(r + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] ||
                        null
                    );
                });
            }
            if (
                (R && (R = [R]),
                /\bAndroid\b/.test(B) &&
                    !N &&
                    (i = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) &&
                    (N = g(i[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
                j && !N
                    ? (N = $([j]))
                    : j &&
                      N &&
                      (N = N.replace(RegExp("^(" + v(j) + ")[-_.\\s]", "i"), j + " ").replace(
                          RegExp("^(" + v(j) + ")[-_.]?(\\w)", "i"),
                          j + " $2",
                      )),
                (i = /\bGoogle TV\b/.exec(N)) && (N = i[0]),
                /\bSimulator\b/i.test(e) && (N = (N ? N + " " : "") + "Simulator"),
                "Opera Mini" == F && /\bOPiOS\b/.test(e) && O.push("running in Turbo/Uncompressed mode"),
                "IE" == F && /\blike iPhone OS\b/.test(e)
                    ? ((j = (i = b(e.replace(/like iPhone OS/, ""))).manufacturer), (N = i.product))
                    : /^iP/.test(N)
                      ? (F || (F = "Safari"),
                        (B = "iOS" + ((i = / OS ([\d_]+)/i.exec(e)) ? " " + i[1].replace(/_/g, ".") : "")))
                      : "Konqueror" == F && /^Linux\b/i.test(B)
                        ? (B = "Kubuntu")
                        : (j &&
                                "Google" != j &&
                                ((/Chrome/.test(F) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(N))) ||
                            (/\bAndroid\b/.test(B) && /^Chrome/.test(F) && /\bVersion\//i.test(e))
                          ? ((F = "Android Browser"), (B = /\bAndroid\b/.test(B) ? B : "Android"))
                          : "Silk" == F
                            ? (/\bMobi/i.test(e) || ((B = "Android"), O.unshift("desktop mode")),
                              /Accelerated *= *true/i.test(e) && O.unshift("accelerated"))
                            : "UC Browser" == F && /\bUCWEB\b/.test(e)
                              ? O.push("speed mode")
                              : "PaleMoon" == F && (i = /\bFirefox\/([\d.]+)\b/.exec(e))
                                ? O.push("identifying as Firefox " + i[1])
                                : "Firefox" == F && (i = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                                  ? (B || (B = "Firefox OS"), N || (N = i[1]))
                                  : !F || (i = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(F))
                                    ? (F && !N && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(i + "/") + 8)) && (F = null),
                                      (i = N || j || B) &&
                                          (N || j || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(B)) &&
                                          (F = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(B) ? B : i) + " Browser"))
                                    : "Electron" == F &&
                                      (i = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                                      O.push("Chromium " + i),
                L ||
                    (L = K([
                        "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
                        "Version",
                        v(F),
                        "(?:Firefox|Minefield|NetFront)",
                    ])),
                (i =
                    ("iCab" == R && parseFloat(L) > 3 && "WebKit") ||
                    (/\bOpera\b/.test(F) && (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
                    (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(R) && "WebKit") ||
                    (!R && /\bMSIE\b/i.test(e) && ("Mac OS" == B ? "Tasman" : "Trident")) ||
                    ("WebKit" == R && /\bPlayStation\b(?! Vita\b)/i.test(F) && "NetFront")) && (R = [i]),
                "IE" == F && (i = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                    ? ((F += " Mobile"),
                      (B = "Windows Phone " + (/\+$/.test(i) ? i : i + ".x")),
                      O.unshift("desktop mode"))
                    : /\bWPDesktop\b/i.test(e)
                      ? ((F = "IE Mobile"),
                        (B = "Windows Phone 8.x"),
                        O.unshift("desktop mode"),
                        L || (L = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                      : "IE" != F &&
                        "Trident" == R &&
                        (i = /\brv:([\d.]+)/.exec(e)) &&
                        (F && O.push("identifying as " + F + (L ? " " + L : "")), (F = "IE"), (L = i[1])),
                D)
            ) {
                if (
                    ((r = "global"),
                    (n = null != (t = s) ? typeof t[r] : "number"),
                    /^(?:boolean|number|string|undefined)$/.test(n) || ("object" == n && !t[r]))
                )
                    m((i = s.runtime)) == (u ? _ : "ScriptBridgingProxyObject")
                        ? ((F = "Adobe AIR"), (B = i.flash.system.Capabilities.os))
                        : m((i = s.phantom)) == (u ? _ : "RuntimeObject")
                          ? ((F = "PhantomJS"),
                            (L = (i = i.version || null) && i.major + "." + i.minor + "." + i.patch))
                          : "number" == typeof T.documentMode && (i = /\bTrident\/(\d+)/i.exec(e))
                            ? ((L = [L, T.documentMode]),
                              (i = +i[1] + 4) != L[1] && (O.push("IE " + L[1] + " mode"), R && (R[1] = ""), (L[1] = i)),
                              (L = "IE" == F ? String(L[1].toFixed(1)) : L[0]))
                            : "number" == typeof T.documentMode &&
                              /^(?:Chrome|Firefox)\b/.test(F) &&
                              (O.push("masking as " + F + " " + L),
                              (F = "IE"),
                              (L = "11.0"),
                              (R = ["Trident"]),
                              (B = "Windows"));
                else if (
                    (x &&
                        ((A = (i = x.lang.System).getProperty("os.arch")),
                        (B = B || i.getProperty("os.name") + " " + i.getProperty("os.version"))),
                    E)
                ) {
                    try {
                        (L = s.require("ringo/engine").version.join(".")), (F = "RingoJS");
                    } catch (e) {
                        (i = s.system) && i.global.system == s.system && ((F = "Narwhal"), B || (B = i[0].os || null));
                    }
                    F || (F = "Rhino");
                } else
                    "object" == typeof s.process &&
                        !s.process.browser &&
                        (i = s.process) &&
                        ("object" == typeof i.versions &&
                            ("string" == typeof i.versions.electron
                                ? (O.push("Node " + i.versions.node), (F = "Electron"), (L = i.versions.electron))
                                : "string" == typeof i.versions.nw &&
                                  (O.push("Chromium " + L, "Node " + i.versions.node),
                                  (F = "NW.js"),
                                  (L = i.versions.nw))),
                        F ||
                            ((F = "Node.js"),
                            (A = i.arch),
                            (B = i.platform),
                            (L = (L = /[\d.]+/.exec(i.version)) ? L[0] : null)));
                B = B && d(B);
            }
            if (
                (L &&
                    (i =
                        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(L) ||
                        /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (D && c.appMinorVersion)) ||
                        (/\bMinefield\b/i.test(e) && "a")) &&
                    ((I = /b/i.test(i) ? "beta" : "alpha"),
                    (L = L.replace(RegExp(i + "\\+?$"), "") + ("beta" == I ? C : k) + (/\d+\+?/.exec(i) || ""))),
                "Fennec" == F || ("Firefox" == F && /\b(?:Android|Firefox OS|KaiOS)\b/.test(B)))
            )
                F = "Firefox Mobile";
            else if ("Maxthon" == F && L) L = L.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(N))
                "Xbox 360" == N && (B = null), "Xbox 360" == N && /\bIEMobile\b/.test(e) && O.unshift("mobile mode");
            else if (
                (/^(?:Chrome|IE|Opera)$/.test(F) || (F && !N && !/Browser|Mobi/.test(F))) &&
                ("Windows CE" == B || /Mobi/i.test(e))
            )
                F += " Mobile";
            else if ("IE" == F && D)
                try {
                    null === s.external && O.unshift("platform preview");
                } catch (e) {
                    O.unshift("embedded");
                }
            else
                (/\bBlackBerry\b/.test(N) || /\bBB10\b/.test(e)) &&
                (i = (RegExp(N.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || L)
                    ? ((B =
                          ((i = [i, /BB10/.test(e)])[1] ? ((N = null), (j = "BlackBerry")) : "Device Software") +
                          " " +
                          i[0]),
                      (L = null))
                    : this != h &&
                      "Wii" != N &&
                      ((D && M) ||
                          (/Opera/.test(F) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                          ("Firefox" == F && /\bOS X (?:\d+\.){2,}/.test(B)) ||
                          ("IE" == F &&
                              ((B && !/^Win/.test(B) && L > 5.5) ||
                                  (/\bWindows XP\b/.test(B) && L > 8) ||
                                  (8 == L && !/\bTrident\b/.test(e))))) &&
                      !l.test((i = b.call(h, e.replace(l, "") + ";"))) &&
                      i.name &&
                      ((i = "ing as " + i.name + ((i = i.version) ? " " + i : "")),
                      l.test(F)
                          ? (/\bIE\b/.test(i) && "Mac OS" == B && (B = null), (i = "identify" + i))
                          : ((i = "mask" + i),
                            (F = P ? d(P.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                            /\bIE\b/.test(i) && (B = null),
                            D || (L = null)),
                      (R = ["Presto"]),
                      O.push(i));
            (i = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
                ((i = [parseFloat(i.replace(/\.(\d)$/, ".0$1")), i]),
                "Safari" == F && "+" == i[1].slice(-1)
                    ? ((F = "WebKit Nightly"), (I = "alpha"), (L = i[1].slice(0, -1)))
                    : (L == i[1] || L == (i[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (L = null),
                (i[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1]),
                537.36 == i[0] && 537.36 == i[2] && parseFloat(i[1]) >= 28 && "WebKit" == R && (R = ["Blink"]),
                D && (w || i[1])
                    ? (R && (R[1] = "like Chrome"),
                      (i =
                          i[1] ||
                          ((i = i[0]) < 530
                              ? 1
                              : i < 532
                                ? 2
                                : i < 532.05
                                  ? 3
                                  : i < 533
                                    ? 4
                                    : i < 534.03
                                      ? 5
                                      : i < 534.07
                                        ? 6
                                        : i < 534.1
                                          ? 7
                                          : i < 534.13
                                            ? 8
                                            : i < 534.16
                                              ? 9
                                              : i < 534.24
                                                ? 10
                                                : i < 534.3
                                                  ? 11
                                                  : i < 535.01
                                                    ? 12
                                                    : i < 535.02
                                                      ? "13+"
                                                      : i < 535.07
                                                        ? 15
                                                        : i < 535.11
                                                          ? 16
                                                          : i < 535.19
                                                            ? 17
                                                            : i < 536.05
                                                              ? 18
                                                              : i < 536.1
                                                                ? 19
                                                                : i < 537.01
                                                                  ? 20
                                                                  : i < 537.11
                                                                    ? "21+"
                                                                    : i < 537.13
                                                                      ? 23
                                                                      : i < 537.18
                                                                        ? 24
                                                                        : i < 537.24
                                                                          ? 25
                                                                          : i < 537.36
                                                                            ? 26
                                                                            : "Blink" != R
                                                                              ? "27"
                                                                              : "28")))
                    : (R && (R[1] = "like Safari"),
                      (i =
                          (i = i[0]) < 400
                              ? 1
                              : i < 500
                                ? 2
                                : i < 526
                                  ? 3
                                  : i < 533
                                    ? 4
                                    : i < 534
                                      ? "4+"
                                      : i < 535
                                        ? 5
                                        : i < 537
                                          ? 6
                                          : i < 538
                                            ? 7
                                            : i < 601
                                              ? 8
                                              : i < 602
                                                ? 9
                                                : i < 604
                                                  ? 10
                                                  : i < 606
                                                    ? 11
                                                    : i < 608
                                                      ? 12
                                                      : "12")),
                R && (R[1] += " " + (i += "number" == typeof i ? ".x" : /[.+]/.test(i) ? "" : "+")),
                "Safari" == F && (!L || parseInt(L) > 45)
                    ? (L = i)
                    : "Chrome" == F && /\bHeadlessChrome/i.test(e) && O.unshift("headless")),
                "Opera" == F && (i = /\bzbov|zvav$/.exec(B))
                    ? ((F += " "),
                      O.unshift("desktop mode"),
                      "zvav" == i ? ((F += "Mini"), (L = null)) : (F += "Mobile"),
                      (B = B.replace(RegExp(" *" + i + "$"), "")))
                    : "Safari" == F && /\bChrome\b/.exec(R && R[1])
                      ? (O.unshift("desktop mode"),
                        (F = "Chrome Mobile"),
                        (L = null),
                        /\bOS X\b/.test(B) ? ((j = "Apple"), (B = "iOS 4.3+")) : (B = null))
                      : /\bSRWare Iron\b/.test(F) && !L && (L = K("Chrome")),
                L &&
                    0 == L.indexOf((i = /[\d.]+$/.exec(B))) &&
                    e.indexOf("/" + i + "-") > -1 &&
                    (B = g(B.replace(i, ""))),
                B &&
                    -1 != B.indexOf(F) &&
                    !RegExp(F + " OS").test(B) &&
                    (B = B.replace(RegExp(" *" + v(F) + " *"), "")),
                R &&
                    !/\b(?:Avant|Nook)\b/.test(F) &&
                    (/Browser|Lunascape|Maxthon/.test(F) ||
                        ("Safari" != F && /^iOS/.test(B) && /\bSafari\b/.test(R[1])) ||
                        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                            F,
                        ) &&
                            R[1])) &&
                    (i = R[R.length - 1]) &&
                    O.push(i),
                O.length && (O = ["(" + O.join("; ") + ")"]),
                j && N && 0 > N.indexOf(j) && O.push("on " + j),
                N && O.push((/^on /.test(O[O.length - 1]) ? "" : "on ") + N),
                B &&
                    ((a = (i = / ([\d.+]+)$/.exec(B)) && "/" == B.charAt(B.length - i[0].length - 1)),
                    (B = {
                        architecture: 32,
                        family: i && !a ? B.replace(i[0], "") : B,
                        version: i ? i[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !a ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "");
                        },
                    })),
                (i = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(A)) && !/\bi686\b/i.test(A)
                    ? (B && ((B.architecture = 64), (B.family = B.family.replace(RegExp(" *" + i), ""))),
                      F &&
                          (/\bWOW64\b/i.test(e) ||
                              (D && /\w(?:86|32)$/.test(c.cpuClass || c.platform) && !/\bWin64; x64\b/i.test(e))) &&
                          O.unshift("32-bit"))
                    : B && /^OS X/.test(B.family) && "Chrome" == F && parseFloat(L) >= 39 && (B.architecture = 64),
                e || (e = null);
            var V = {};
            return (
                (V.description = e),
                (V.layout = R && R[0]),
                (V.manufacturer = j),
                (V.name = F),
                (V.prerelease = I),
                (V.product = N),
                (V.ua = e),
                (V.version = F && L),
                (V.os = B || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return "null";
                    },
                }),
                (V.parse = b),
                (V.toString = function () {
                    return this.description || "";
                }),
                V.version && O.unshift(L),
                V.name && O.unshift(F),
                B &&
                    F &&
                    !(B == String(B).split(" ")[0] && (B == F.split(" ")[0] || N)) &&
                    O.push(N ? "(" + B + ")" : "on " + B),
                O.length && (V.description = O.join(" ")),
                V
            );
        }
        var w = b();
        "function" == typeof define && "object" == typeof define.amd && define.amd
            ? ((o.platform = w),
              define(function () {
                  return w;
              }))
            : i && a
              ? h(w, function (e, t) {
                    i[t] = e;
                })
              : (o.platform = w);
    }.call(this);
