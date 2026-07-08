(e = r.nmd(e)),
    function () {
        "use strict";
        var n = { function: !0, object: !0 },
            i = (n[typeof window] && window) || this,
            o = n[typeof t] && t,
            a = n.object && e && !e.nodeType && e,
            s = o && a && "object" == typeof r.g && r.g;
        s && (s.global === s || s.window === s || s.self === s) && (i = s);
        var l = /\bOpera/,
            u = Object.prototype,
            c = u.hasOwnProperty,
            f = u.toString;
        function d(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function p(e) {
            return (e = y(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : d(e);
        }
        function h(e, t) {
            for (var r in e) c.call(e, r) && t(e[r], r, e);
        }
        function m(e) {
            return null == e ? d(e) : f.call(e).slice(8, -1);
        }
        function g(e) {
            return String(e).replace(/([ -])(?!$)/g, "$1?");
        }
        function v(e, t) {
            var r = null,
                n = function (n, i) {
                    r = t(r, n, i, e);
                },
                i = -1,
                o = e ? e.length : 0;
            if ("number" == typeof o && o > -1 && o <= 0x1fffffffffffff) for (; ++i < o; ) n(e[i], i, e);
            else h(e, n);
            return r;
        }
        function y(e) {
            return String(e).replace(/^ +| +$/g, "");
        }
        function b(e) {
            var t,
                r,
                n,
                o,
                a,
                s = i,
                u = e && "object" == typeof e && "String" != m(e);
            u && ((s = e), (e = null));
            var c = s.navigator || {},
                d = c.userAgent || "";
            e || (e = d);
            var w = u ? !!c.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(f.toString()),
                _ = "Object",
                x = u && s.java ? "JavaPackage" : m(s.java),
                E = /\bJava/.test(x) && s.java,
                S = E && m(s.environment) == (u ? _ : "Environment"),
                k = E ? "a" : "\u03B1",
                T = E ? "b" : "\u03B2",
                C = s.document || {},
                P = s.operamini || s.opera,
                A = l.test((A = u && P ? P["[[Class]]"] : m(P))) ? A : (P = null),
                O = e,
                M = [],
                I = null,
                R = e == d,
                D = R && P && "function" == typeof P.version && P.version(),
                L = v(
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
                        return t || (RegExp("\\b" + (r.pattern || g(r)) + "\\b", "i").exec(e) && (r.label || r));
                    },
                ),
                F = v(
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
                        return t || (RegExp("\\b" + (r.pattern || g(r)) + "\\b", "i").exec(e) && (r.label || r));
                    },
                ),
                N = B([
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
                j = v(
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
                                RegExp("\\b" + g(n) + "(?:\\b|\\w*\\d)", "i").exec(e)) &&
                                n)
                        );
                    },
                ),
                V = v(
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
                            i,
                            o,
                            a = r.pattern || g(r);
                        return (
                            !t &&
                                (t = RegExp("\\b" + a + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) &&
                                ((n = t),
                                (i = r.label || r),
                                (o = {
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
                                    /^Win/i.test(n) &&
                                    !/^Windows Phone /i.test(n) &&
                                    (o = o[/[\d.]+$/.exec(n)]) &&
                                    (n = "Windows " + o),
                                (n = String(n)),
                                a && i && (n = n.replace(RegExp(a, "i"), i)),
                                (t = n =
                                    p(
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
            function B(t) {
                return v(t, function (t, r) {
                    var n = r.pattern || g(r);
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
                            (t = p(
                                t[0]
                                    .replace(RegExp(n, "i"), r)
                                    .replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ")
                                    .replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"),
                            ))),
                        t
                    );
                });
            }
            function U(t) {
                return v(t, function (t, r) {
                    return (
                        t ||
                        (RegExp(r + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] ||
                        null
                    );
                });
            }
            if (
                (L && (L = [L]),
                /\bAndroid\b/.test(V) &&
                    !N &&
                    (o = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) &&
                    (N = y(o[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
                j && !N
                    ? (N = B([j]))
                    : j &&
                      N &&
                      (N = N.replace(RegExp("^(" + g(j) + ")[-_.\\s]", "i"), j + " ").replace(
                          RegExp("^(" + g(j) + ")[-_.]?(\\w)", "i"),
                          j + " $2",
                      )),
                (o = /\bGoogle TV\b/.exec(N)) && (N = o[0]),
                /\bSimulator\b/i.test(e) && (N = (N ? N + " " : "") + "Simulator"),
                "Opera Mini" == F && /\bOPiOS\b/.test(e) && M.push("running in Turbo/Uncompressed mode"),
                "IE" == F && /\blike iPhone OS\b/.test(e)
                    ? ((j = (o = b(e.replace(/like iPhone OS/, ""))).manufacturer), (N = o.product))
                    : /^iP/.test(N)
                      ? (F || (F = "Safari"),
                        (V = "iOS" + ((o = / OS ([\d_]+)/i.exec(e)) ? " " + o[1].replace(/_/g, ".") : "")))
                      : "Konqueror" == F && /^Linux\b/i.test(V)
                        ? (V = "Kubuntu")
                        : (j &&
                                "Google" != j &&
                                ((/Chrome/.test(F) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(N))) ||
                            (/\bAndroid\b/.test(V) && /^Chrome/.test(F) && /\bVersion\//i.test(e))
                          ? ((F = "Android Browser"), (V = /\bAndroid\b/.test(V) ? V : "Android"))
                          : "Silk" == F
                            ? (/\bMobi/i.test(e) || ((V = "Android"), M.unshift("desktop mode")),
                              /Accelerated *= *true/i.test(e) && M.unshift("accelerated"))
                            : "UC Browser" == F && /\bUCWEB\b/.test(e)
                              ? M.push("speed mode")
                              : "PaleMoon" == F && (o = /\bFirefox\/([\d.]+)\b/.exec(e))
                                ? M.push("identifying as Firefox " + o[1])
                                : "Firefox" == F && (o = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                                  ? (V || (V = "Firefox OS"), N || (N = o[1]))
                                  : !F || (o = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(F))
                                    ? (F && !N && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(o + "/") + 8)) && (F = null),
                                      (o = N || j || V) &&
                                          (N || j || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V)) &&
                                          (F = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(V) ? V : o) + " Browser"))
                                    : "Electron" == F &&
                                      (o = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                                      M.push("Chromium " + o),
                D ||
                    (D = U([
                        "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
                        "Version",
                        g(F),
                        "(?:Firefox|Minefield|NetFront)",
                    ])),
                (o =
                    ("iCab" == L && parseFloat(D) > 3 && "WebKit") ||
                    (/\bOpera\b/.test(F) && (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
                    (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(L) && "WebKit") ||
                    (!L && /\bMSIE\b/i.test(e) && ("Mac OS" == V ? "Tasman" : "Trident")) ||
                    ("WebKit" == L && /\bPlayStation\b(?! Vita\b)/i.test(F) && "NetFront")) && (L = [o]),
                "IE" == F && (o = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                    ? ((F += " Mobile"),
                      (V = "Windows Phone " + (/\+$/.test(o) ? o : o + ".x")),
                      M.unshift("desktop mode"))
                    : /\bWPDesktop\b/i.test(e)
                      ? ((F = "IE Mobile"),
                        (V = "Windows Phone 8.x"),
                        M.unshift("desktop mode"),
                        D || (D = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                      : "IE" != F &&
                        "Trident" == L &&
                        (o = /\brv:([\d.]+)/.exec(e)) &&
                        (F && M.push("identifying as " + F + (D ? " " + D : "")), (F = "IE"), (D = o[1])),
                R)
            ) {
                if (
                    ((r = "global"),
                    (n = null != (t = s) ? typeof t[r] : "number"),
                    /^(?:boolean|number|string|undefined)$/.test(n) || ("object" == n && !t[r]))
                )
                    m((o = s.runtime)) == (u ? _ : "ScriptBridgingProxyObject")
                        ? ((F = "Adobe AIR"), (V = o.flash.system.Capabilities.os))
                        : m((o = s.phantom)) == (u ? _ : "RuntimeObject")
                          ? ((F = "PhantomJS"),
                            (D = (o = o.version || null) && o.major + "." + o.minor + "." + o.patch))
                          : "number" == typeof C.documentMode && (o = /\bTrident\/(\d+)/i.exec(e))
                            ? ((D = [D, C.documentMode]),
                              (o = +o[1] + 4) != D[1] && (M.push("IE " + D[1] + " mode"), L && (L[1] = ""), (D[1] = o)),
                              (D = "IE" == F ? String(D[1].toFixed(1)) : D[0]))
                            : "number" == typeof C.documentMode &&
                              /^(?:Chrome|Firefox)\b/.test(F) &&
                              (M.push("masking as " + F + " " + D),
                              (F = "IE"),
                              (D = "11.0"),
                              (L = ["Trident"]),
                              (V = "Windows"));
                else if (
                    (E &&
                        ((O = (o = E.lang.System).getProperty("os.arch")),
                        (V = V || o.getProperty("os.name") + " " + o.getProperty("os.version"))),
                    S)
                ) {
                    try {
                        (D = s.require("ringo/engine").version.join(".")), (F = "RingoJS");
                    } catch (e) {
                        (o = s.system) && o.global.system == s.system && ((F = "Narwhal"), V || (V = o[0].os || null));
                    }
                    F || (F = "Rhino");
                } else
                    "object" == typeof s.process &&
                        !s.process.browser &&
                        (o = s.process) &&
                        ("object" == typeof o.versions &&
                            ("string" == typeof o.versions.electron
                                ? (M.push("Node " + o.versions.node), (F = "Electron"), (D = o.versions.electron))
                                : "string" == typeof o.versions.nw &&
                                  (M.push("Chromium " + D, "Node " + o.versions.node),
                                  (F = "NW.js"),
                                  (D = o.versions.nw))),
                        F ||
                            ((F = "Node.js"),
                            (O = o.arch),
                            (V = o.platform),
                            (D = (D = /[\d.]+/.exec(o.version)) ? D[0] : null)));
                V = V && p(V);
            }
            if (
                (D &&
                    (o =
                        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(D) ||
                        /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (R && c.appMinorVersion)) ||
                        (/\bMinefield\b/i.test(e) && "a")) &&
                    ((I = /b/i.test(o) ? "beta" : "alpha"),
                    (D = D.replace(RegExp(o + "\\+?$"), "") + ("beta" == I ? T : k) + (/\d+\+?/.exec(o) || ""))),
                "Fennec" == F || ("Firefox" == F && /\b(?:Android|Firefox OS|KaiOS)\b/.test(V)))
            )
                F = "Firefox Mobile";
            else if ("Maxthon" == F && D) D = D.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(N))
                "Xbox 360" == N && (V = null), "Xbox 360" == N && /\bIEMobile\b/.test(e) && M.unshift("mobile mode");
            else if (
                (/^(?:Chrome|IE|Opera)$/.test(F) || (F && !N && !/Browser|Mobi/.test(F))) &&
                ("Windows CE" == V || /Mobi/i.test(e))
            )
                F += " Mobile";
            else if ("IE" == F && R)
                try {
                    null === s.external && M.unshift("platform preview");
                } catch (e) {
                    M.unshift("embedded");
                }
            else
                (/\bBlackBerry\b/.test(N) || /\bBB10\b/.test(e)) &&
                (o = (RegExp(N.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || D)
                    ? ((V =
                          ((o = [o, /BB10/.test(e)])[1] ? ((N = null), (j = "BlackBerry")) : "Device Software") +
                          " " +
                          o[0]),
                      (D = null))
                    : this != h &&
                      "Wii" != N &&
                      ((R && P) ||
                          (/Opera/.test(F) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                          ("Firefox" == F && /\bOS X (?:\d+\.){2,}/.test(V)) ||
                          ("IE" == F &&
                              ((V && !/^Win/.test(V) && D > 5.5) ||
                                  (/\bWindows XP\b/.test(V) && D > 8) ||
                                  (8 == D && !/\bTrident\b/.test(e))))) &&
                      !l.test((o = b.call(h, e.replace(l, "") + ";"))) &&
                      o.name &&
                      ((o = "ing as " + o.name + ((o = o.version) ? " " + o : "")),
                      l.test(F)
                          ? (/\bIE\b/.test(o) && "Mac OS" == V && (V = null), (o = "identify" + o))
                          : ((o = "mask" + o),
                            (F = A ? p(A.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                            /\bIE\b/.test(o) && (V = null),
                            R || (D = null)),
                      (L = ["Presto"]),
                      M.push(o));
            (o = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
                ((o = [parseFloat(o.replace(/\.(\d)$/, ".0$1")), o]),
                "Safari" == F && "+" == o[1].slice(-1)
                    ? ((F = "WebKit Nightly"), (I = "alpha"), (D = o[1].slice(0, -1)))
                    : (D == o[1] || D == (o[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (D = null),
                (o[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1]),
                537.36 == o[0] && 537.36 == o[2] && parseFloat(o[1]) >= 28 && "WebKit" == L && (L = ["Blink"]),
                R && (w || o[1])
                    ? (L && (L[1] = "like Chrome"),
                      (o =
                          o[1] ||
                          ((o = o[0]) < 530
                              ? 1
                              : o < 532
                                ? 2
                                : o < 532.05
                                  ? 3
                                  : o < 533
                                    ? 4
                                    : o < 534.03
                                      ? 5
                                      : o < 534.07
                                        ? 6
                                        : o < 534.1
                                          ? 7
                                          : o < 534.13
                                            ? 8
                                            : o < 534.16
                                              ? 9
                                              : o < 534.24
                                                ? 10
                                                : o < 534.3
                                                  ? 11
                                                  : o < 535.01
                                                    ? 12
                                                    : o < 535.02
                                                      ? "13+"
                                                      : o < 535.07
                                                        ? 15
                                                        : o < 535.11
                                                          ? 16
                                                          : o < 535.19
                                                            ? 17
                                                            : o < 536.05
                                                              ? 18
                                                              : o < 536.1
                                                                ? 19
                                                                : o < 537.01
                                                                  ? 20
                                                                  : o < 537.11
                                                                    ? "21+"
                                                                    : o < 537.13
                                                                      ? 23
                                                                      : o < 537.18
                                                                        ? 24
                                                                        : o < 537.24
                                                                          ? 25
                                                                          : o < 537.36
                                                                            ? 26
                                                                            : "Blink" != L
                                                                              ? "27"
                                                                              : "28")))
                    : (L && (L[1] = "like Safari"),
                      (o =
                          (o = o[0]) < 400
                              ? 1
                              : o < 500
                                ? 2
                                : o < 526
                                  ? 3
                                  : o < 533
                                    ? 4
                                    : o < 534
                                      ? "4+"
                                      : o < 535
                                        ? 5
                                        : o < 537
                                          ? 6
                                          : o < 538
                                            ? 7
                                            : o < 601
                                              ? 8
                                              : o < 602
                                                ? 9
                                                : o < 604
                                                  ? 10
                                                  : o < 606
                                                    ? 11
                                                    : o < 608
                                                      ? 12
                                                      : "12")),
                L && (L[1] += " " + (o += "number" == typeof o ? ".x" : /[.+]/.test(o) ? "" : "+")),
                "Safari" == F && (!D || parseInt(D) > 45)
                    ? (D = o)
                    : "Chrome" == F && /\bHeadlessChrome/i.test(e) && M.unshift("headless")),
                "Opera" == F && (o = /\bzbov|zvav$/.exec(V))
                    ? ((F += " "),
                      M.unshift("desktop mode"),
                      "zvav" == o ? ((F += "Mini"), (D = null)) : (F += "Mobile"),
                      (V = V.replace(RegExp(" *" + o + "$"), "")))
                    : "Safari" == F && /\bChrome\b/.exec(L && L[1])
                      ? (M.unshift("desktop mode"),
                        (F = "Chrome Mobile"),
                        (D = null),
                        /\bOS X\b/.test(V) ? ((j = "Apple"), (V = "iOS 4.3+")) : (V = null))
                      : /\bSRWare Iron\b/.test(F) && !D && (D = U("Chrome")),
                D &&
                    0 == D.indexOf((o = /[\d.]+$/.exec(V))) &&
                    e.indexOf("/" + o + "-") > -1 &&
                    (V = y(V.replace(o, ""))),
                V &&
                    -1 != V.indexOf(F) &&
                    !RegExp(F + " OS").test(V) &&
                    (V = V.replace(RegExp(" *" + g(F) + " *"), "")),
                L &&
                    !/\b(?:Avant|Nook)\b/.test(F) &&
                    (/Browser|Lunascape|Maxthon/.test(F) ||
                        ("Safari" != F && /^iOS/.test(V) && /\bSafari\b/.test(L[1])) ||
                        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                            F,
                        ) &&
                            L[1])) &&
                    (o = L[L.length - 1]) &&
                    M.push(o),
                M.length && (M = ["(" + M.join("; ") + ")"]),
                j && N && 0 > N.indexOf(j) && M.push("on " + j),
                N && M.push((/^on /.test(M[M.length - 1]) ? "" : "on ") + N),
                V &&
                    ((a = (o = / ([\d.+]+)$/.exec(V)) && "/" == V.charAt(V.length - o[0].length - 1)),
                    (V = {
                        architecture: 32,
                        family: o && !a ? V.replace(o[0], "") : V,
                        version: o ? o[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !a ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "");
                        },
                    })),
                (o = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(O)) && !/\bi686\b/i.test(O)
                    ? (V && ((V.architecture = 64), (V.family = V.family.replace(RegExp(" *" + o), ""))),
                      F &&
                          (/\bWOW64\b/i.test(e) ||
                              (R && /\w(?:86|32)$/.test(c.cpuClass || c.platform) && !/\bWin64; x64\b/i.test(e))) &&
                          M.unshift("32-bit"))
                    : V && /^OS X/.test(V.family) && "Chrome" == F && parseFloat(D) >= 39 && (V.architecture = 64),
                e || (e = null);
            var K = {};
            return (
                (K.description = e),
                (K.layout = L && L[0]),
                (K.manufacturer = j),
                (K.name = F),
                (K.prerelease = I),
                (K.product = N),
                (K.ua = e),
                (K.version = F && D),
                (K.os = V || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return "null";
                    },
                }),
                (K.parse = b),
                (K.toString = function () {
                    return this.description || "";
                }),
                K.version && M.unshift(D),
                K.name && M.unshift(F),
                V &&
                    F &&
                    !(V == String(V).split(" ")[0] && (V == F.split(" ")[0] || N)) &&
                    M.push(N ? "(" + V + ")" : "on " + V),
                M.length && (K.description = M.join(" ")),
                K
            );
        }
        var w = b();
        "function" == typeof define && "object" == typeof define.amd && define.amd
            ? ((i.platform = w),
              define(function () {
                  return w;
              }))
            : o && a
              ? h(w, function (e, t) {
                    o[t] = e;
                })
              : (i.platform = w);
    }.call(this);
