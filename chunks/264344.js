(e = n.nmd(e)),
    function () {
        var r = {
                function: !0,
                object: !0,
            },
            i = (r[typeof window] && window) || this,
            a = r[typeof t] && t,
            o = r.object && e && !e.nodeType && e,
            s = a && o && "object" == typeof n.g && n.g;
        s && (s.global === s || s.window === s || s.self === s) && (i = s);
        var l = 9007199254740991,
            c = /\bOpera/,
            u = Object.prototype,
            d = u.hasOwnProperty,
            f = u.toString;
        function p(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function _(e, t, n) {
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
                (e = h(
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
        function m(e, t) {
            var n = -1,
                r = e ? e.length : 0;
            if ("number" == typeof r && r > -1 && r <= l) for (; ++n < r; ) t(e[n], n, e);
            else g(e, t);
        }
        function h(e) {
            return (e = v(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : p(e);
        }
        function g(e, t) {
            for (var n in e) d.call(e, n) && t(e[n], n, e);
        }
        function E(e) {
            return null == e ? p(e) : f.call(e).slice(8, -1);
        }
        function b(e, t) {
            var n = null != e ? typeof e[t] : "number";
            return !/^(?:boolean|number|string|undefined)$/.test(n) && ("object" != n || !!e[t]);
        }
        function y(e) {
            return String(e).replace(/([ -])(?!$)/g, "$1?");
        }
        function O(e, t) {
            var n = null;
            return (
                m(e, function (r, i) {
                    n = t(n, r, i, e);
                }),
                n
            );
        }
        function v(e) {
            return String(e).replace(/^ +| +$/g, "");
        }
        function S(e) {
            var t,
                n,
                r = i,
                a = e && "object" == typeof e && "String" != E(e);
            a && ((r = e), (e = null));
            var o = r.navigator || {},
                s = o.userAgent || "";
            e || (e = s);
            var l = a ? !!o.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(f.toString()),
                u = "Object",
                d = a ? u : "ScriptBridgingProxyObject",
                p = a ? u : "Environment",
                m = a && r.java ? "JavaPackage" : E(r.java),
                I = a ? u : "RuntimeObject",
                T = /\bJava/.test(m) && r.java,
                A = T && E(r.environment) == p,
                C = T ? "a" : "α",
                N = T ? "b" : "β",
                P = r.document || {},
                R = r.operamini || r.opera,
                D = c.test((D = a && R ? R["[[Class]]"] : E(R))) ? D : (R = null),
                w = e,
                x = [],
                L = null,
                j = e == s,
                M = j && R && "function" == typeof R.version && R.version(),
                k = F([
                    {
                        label: "EdgeHTML",
                        pattern: "Edge",
                    },
                    "Trident",
                    {
                        label: "WebKit",
                        pattern: "AppleWebKit",
                    },
                    "iCab",
                    "Presto",
                    "NetFront",
                    "Tasman",
                    "KHTML",
                    "Gecko",
                ]),
                U = H([
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
                    {
                        label: "Microsoft Edge",
                        pattern: "(?:Edge|Edg|EdgA|EdgiOS)",
                    },
                    "Midori",
                    "Nook Browser",
                    "PaleMoon",
                    "PhantomJS",
                    "Raven",
                    "Rekonq",
                    "RockMelt",
                    {
                        label: "Samsung Internet",
                        pattern: "SamsungBrowser",
                    },
                    "SeaMonkey",
                    {
                        label: "Silk",
                        pattern: "(?:Cloud9|Silk-Accelerated)",
                    },
                    "Sleipnir",
                    "SlimBrowser",
                    {
                        label: "SRWare Iron",
                        pattern: "Iron",
                    },
                    "Sunrise",
                    "Swiftfox",
                    "Vivaldi",
                    "Waterfox",
                    "WebPositive",
                    {
                        label: "Yandex Browser",
                        pattern: "YaBrowser",
                    },
                    {
                        label: "UC Browser",
                        pattern: "UCBrowser",
                    },
                    "Opera Mini",
                    {
                        label: "Opera Mini",
                        pattern: "OPiOS",
                    },
                    "Opera",
                    {
                        label: "Opera",
                        pattern: "OPR",
                    },
                    "Chromium",
                    "Chrome",
                    {
                        label: "Chrome",
                        pattern: "(?:HeadlessChrome)",
                    },
                    {
                        label: "Chrome Mobile",
                        pattern: "(?:CriOS|CrMo)",
                    },
                    {
                        label: "Firefox",
                        pattern: "(?:Firefox|Minefield)",
                    },
                    {
                        label: "Firefox for iOS",
                        pattern: "FxiOS",
                    },
                    {
                        label: "IE",
                        pattern: "IEMobile",
                    },
                    {
                        label: "IE",
                        pattern: "MSIE",
                    },
                    "Safari",
                ]),
                G = W([
                    {
                        label: "BlackBerry",
                        pattern: "BB10",
                    },
                    "BlackBerry",
                    {
                        label: "Galaxy S",
                        pattern: "GT-I9000",
                    },
                    {
                        label: "Galaxy S2",
                        pattern: "GT-I9100",
                    },
                    {
                        label: "Galaxy S3",
                        pattern: "GT-I9300",
                    },
                    {
                        label: "Galaxy S4",
                        pattern: "GT-I9500",
                    },
                    {
                        label: "Galaxy S5",
                        pattern: "SM-G900",
                    },
                    {
                        label: "Galaxy S6",
                        pattern: "SM-G920",
                    },
                    {
                        label: "Galaxy S6 Edge",
                        pattern: "SM-G925",
                    },
                    {
                        label: "Galaxy S7",
                        pattern: "SM-G930",
                    },
                    {
                        label: "Galaxy S7 Edge",
                        pattern: "SM-G935",
                    },
                    "Google TV",
                    "Lumia",
                    "iPad",
                    "iPod",
                    "iPhone",
                    "Kindle",
                    {
                        label: "Kindle Fire",
                        pattern: "(?:Cloud9|Silk-Accelerated)",
                    },
                    "Nexus",
                    "Nook",
                    "PlayBook",
                    "PlayStation Vita",
                    "PlayStation",
                    "TouchPad",
                    "Transformer",
                    {
                        label: "Wii U",
                        pattern: "WiiU",
                    },
                    "Wii",
                    "Xbox One",
                    {
                        label: "Xbox 360",
                        pattern: "Xbox",
                    },
                    "Xoom",
                ]),
                Z = V({
                    Apple: {
                        iPad: 1,
                        iPhone: 1,
                        iPod: 1,
                    },
                    Alcatel: {},
                    Archos: {},
                    Amazon: {
                        Kindle: 1,
                        "Kindle Fire": 1,
                    },
                    Asus: { Transformer: 1 },
                    "Barnes & Noble": { Nook: 1 },
                    BlackBerry: { PlayBook: 1 },
                    Google: {
                        "Google TV": 1,
                        Nexus: 1,
                    },
                    HP: { TouchPad: 1 },
                    HTC: {},
                    Huawei: {},
                    Lenovo: {},
                    LG: {},
                    Microsoft: {
                        Xbox: 1,
                        "Xbox One": 1,
                    },
                    Motorola: { Xoom: 1 },
                    Nintendo: {
                        "Wii U": 1,
                        Wii: 1,
                    },
                    Nokia: { Lumia: 1 },
                    Oppo: {},
                    Samsung: {
                        "Galaxy S": 1,
                        "Galaxy S2": 1,
                        "Galaxy S3": 1,
                        "Galaxy S4": 1,
                    },
                    Sony: {
                        PlayStation: 1,
                        "PlayStation Vita": 1,
                    },
                    Xiaomi: {
                        Mi: 1,
                        Redmi: 1,
                    },
                }),
                B = Y([
                    "Windows Phone",
                    "KaiOS",
                    "Android",
                    "CentOS",
                    {
                        label: "Chrome OS",
                        pattern: "CrOS",
                    },
                    "Debian",
                    {
                        label: "DragonFly BSD",
                        pattern: "DragonFly",
                    },
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
            function F(t) {
                return O(t, function (t, n) {
                    return t || (RegExp("\\b" + (n.pattern || y(n)) + "\\b", "i").exec(e) && (n.label || n));
                });
            }
            function V(t) {
                return O(t, function (t, n, r) {
                    return (
                        t ||
                        ((n[G] ||
                            n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(G)] ||
                            RegExp("\\b" + y(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) &&
                            r)
                    );
                });
            }
            function H(t) {
                return O(t, function (t, n) {
                    return t || (RegExp("\\b" + (n.pattern || y(n)) + "\\b", "i").exec(e) && (n.label || n));
                });
            }
            function Y(t) {
                return O(t, function (t, n) {
                    var r = n.pattern || y(n);
                    return (
                        !t &&
                            (t = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) &&
                            (t = _(t, r, n.label || n)),
                        t
                    );
                });
            }
            function W(t) {
                return O(t, function (t, n) {
                    var r = n.pattern || y(n);
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
                            (t = h(
                                t[0]
                                    .replace(RegExp(r, "i"), n)
                                    .replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ")
                                    .replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"),
                            ))),
                        t
                    );
                });
            }
            function K(t) {
                return O(t, function (t, n) {
                    return (
                        t ||
                        (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] ||
                        null
                    );
                });
            }
            function z() {
                return this.description || "";
            }
            if (
                (k && (k = [k]),
                /\bAndroid\b/.test(B) &&
                    !G &&
                    (t = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) &&
                    (G = v(t[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
                Z && !G
                    ? (G = W([Z]))
                    : Z &&
                      G &&
                      (G = G.replace(RegExp("^(" + y(Z) + ")[-_.\\s]", "i"), Z + " ").replace(
                          RegExp("^(" + y(Z) + ")[-_.]?(\\w)", "i"),
                          Z + " $2",
                      )),
                (t = /\bGoogle TV\b/.exec(G)) && (G = t[0]),
                /\bSimulator\b/i.test(e) && (G = (G ? G + " " : "") + "Simulator"),
                "Opera Mini" == U && /\bOPiOS\b/.test(e) && x.push("running in Turbo/Uncompressed mode"),
                "IE" == U && /\blike iPhone OS\b/.test(e)
                    ? ((Z = (t = S(e.replace(/like iPhone OS/, ""))).manufacturer), (G = t.product))
                    : /^iP/.test(G)
                      ? (U || (U = "Safari"),
                        (B = "iOS" + ((t = / OS ([\d_]+)/i.exec(e)) ? " " + t[1].replace(/_/g, ".") : "")))
                      : "Konqueror" == U && /^Linux\b/i.test(B)
                        ? (B = "Kubuntu")
                        : (Z &&
                                "Google" != Z &&
                                ((/Chrome/.test(U) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(G))) ||
                            (/\bAndroid\b/.test(B) && /^Chrome/.test(U) && /\bVersion\//i.test(e))
                          ? ((U = "Android Browser"), (B = /\bAndroid\b/.test(B) ? B : "Android"))
                          : "Silk" == U
                            ? (/\bMobi/i.test(e) || ((B = "Android"), x.unshift("desktop mode")),
                              /Accelerated *= *true/i.test(e) && x.unshift("accelerated"))
                            : "UC Browser" == U && /\bUCWEB\b/.test(e)
                              ? x.push("speed mode")
                              : "PaleMoon" == U && (t = /\bFirefox\/([\d.]+)\b/.exec(e))
                                ? x.push("identifying as Firefox " + t[1])
                                : "Firefox" == U && (t = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                                  ? (B || (B = "Firefox OS"), G || (G = t[1]))
                                  : !U || (t = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(U))
                                    ? (U && !G && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(t + "/") + 8)) && (U = null),
                                      (t = G || Z || B) &&
                                          (G || Z || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(B)) &&
                                          (U = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(B) ? B : t) + " Browser"))
                                    : "Electron" == U &&
                                      (t = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                                      x.push("Chromium " + t),
                M ||
                    (M = K([
                        "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
                        "Version",
                        y(U),
                        "(?:Firefox|Minefield|NetFront)",
                    ])),
                (t =
                    ("iCab" == k && parseFloat(M) > 3 && "WebKit") ||
                    (/\bOpera\b/.test(U) && (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
                    (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(k) && "WebKit") ||
                    (!k && /\bMSIE\b/i.test(e) && ("Mac OS" == B ? "Tasman" : "Trident")) ||
                    ("WebKit" == k && /\bPlayStation\b(?! Vita\b)/i.test(U) && "NetFront")) && (k = [t]),
                "IE" == U && (t = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                    ? ((U += " Mobile"),
                      (B = "Windows Phone " + (/\+$/.test(t) ? t : t + ".x")),
                      x.unshift("desktop mode"))
                    : /\bWPDesktop\b/i.test(e)
                      ? ((U = "IE Mobile"),
                        (B = "Windows Phone 8.x"),
                        x.unshift("desktop mode"),
                        M || (M = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                      : "IE" != U &&
                        "Trident" == k &&
                        (t = /\brv:([\d.]+)/.exec(e)) &&
                        (U && x.push("identifying as " + U + (M ? " " + M : "")), (U = "IE"), (M = t[1])),
                j)
            ) {
                if (b(r, "global"))
                    if (
                        (T &&
                            ((w = (t = T.lang.System).getProperty("os.arch")),
                            (B = B || t.getProperty("os.name") + " " + t.getProperty("os.version"))),
                        A)
                    ) {
                        try {
                            (M = r.require("ringo/engine").version.join(".")), (U = "RingoJS");
                        } catch (e) {
                            (t = r.system) &&
                                t.global.system == r.system &&
                                ((U = "Narwhal"), B || (B = t[0].os || null));
                        }
                        U || (U = "Rhino");
                    } else
                        "object" == typeof r.process &&
                            !r.process.browser &&
                            (t = r.process) &&
                            ("object" == typeof t.versions &&
                                ("string" == typeof t.versions.electron
                                    ? (x.push("Node " + t.versions.node), (U = "Electron"), (M = t.versions.electron))
                                    : "string" == typeof t.versions.nw &&
                                      (x.push("Chromium " + M, "Node " + t.versions.node),
                                      (U = "NW.js"),
                                      (M = t.versions.nw))),
                            U ||
                                ((U = "Node.js"),
                                (w = t.arch),
                                (B = t.platform),
                                (M = (M = /[\d.]+/.exec(t.version)) ? M[0] : null)));
                else
                    E((t = r.runtime)) == d
                        ? ((U = "Adobe AIR"), (B = t.flash.system.Capabilities.os))
                        : E((t = r.phantom)) == I
                          ? ((U = "PhantomJS"),
                            (M = (t = t.version || null) && t.major + "." + t.minor + "." + t.patch))
                          : "number" == typeof P.documentMode && (t = /\bTrident\/(\d+)/i.exec(e))
                            ? ((M = [M, P.documentMode]),
                              (t = +t[1] + 4) != M[1] && (x.push("IE " + M[1] + " mode"), k && (k[1] = ""), (M[1] = t)),
                              (M = "IE" == U ? String(M[1].toFixed(1)) : M[0]))
                            : "number" == typeof P.documentMode &&
                              /^(?:Chrome|Firefox)\b/.test(U) &&
                              (x.push("masking as " + U + " " + M),
                              (U = "IE"),
                              (M = "11.0"),
                              (k = ["Trident"]),
                              (B = "Windows"));
                B = B && h(B);
            }
            if (
                (M &&
                    (t =
                        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(M) ||
                        /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (j && o.appMinorVersion)) ||
                        (/\bMinefield\b/i.test(e) && "a")) &&
                    ((L = /b/i.test(t) ? "beta" : "alpha"),
                    (M = M.replace(RegExp(t + "\\+?$"), "") + ("beta" == L ? N : C) + (/\d+\+?/.exec(t) || ""))),
                "Fennec" == U || ("Firefox" == U && /\b(?:Android|Firefox OS|KaiOS)\b/.test(B)))
            )
                U = "Firefox Mobile";
            else if ("Maxthon" == U && M) M = M.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(G))
                "Xbox 360" == G && (B = null), "Xbox 360" == G && /\bIEMobile\b/.test(e) && x.unshift("mobile mode");
            else if (
                (/^(?:Chrome|IE|Opera)$/.test(U) || (U && !G && !/Browser|Mobi/.test(U))) &&
                ("Windows CE" == B || /Mobi/i.test(e))
            )
                U += " Mobile";
            else if ("IE" == U && j)
                try {
                    null === r.external && x.unshift("platform preview");
                } catch (e) {
                    x.unshift("embedded");
                }
            else
                (/\bBlackBerry\b/.test(G) || /\bBB10\b/.test(e)) &&
                (t = (RegExp(G.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || M)
                    ? ((B =
                          ((t = [t, /BB10/.test(e)])[1] ? ((G = null), (Z = "BlackBerry")) : "Device Software") +
                          " " +
                          t[0]),
                      (M = null))
                    : this != g &&
                      "Wii" != G &&
                      ((j && R) ||
                          (/Opera/.test(U) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                          ("Firefox" == U && /\bOS X (?:\d+\.){2,}/.test(B)) ||
                          ("IE" == U &&
                              ((B && !/^Win/.test(B) && M > 5.5) ||
                                  (/\bWindows XP\b/.test(B) && M > 8) ||
                                  (8 == M && !/\bTrident\b/.test(e))))) &&
                      !c.test((t = S.call(g, e.replace(c, "") + ";"))) &&
                      t.name &&
                      ((t = "ing as " + t.name + ((t = t.version) ? " " + t : "")),
                      c.test(U)
                          ? (/\bIE\b/.test(t) && "Mac OS" == B && (B = null), (t = "identify" + t))
                          : ((t = "mask" + t),
                            (U = D ? h(D.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                            /\bIE\b/.test(t) && (B = null),
                            j || (M = null)),
                      (k = ["Presto"]),
                      x.push(t));
            (t = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
                ((t = [parseFloat(t.replace(/\.(\d)$/, ".0$1")), t]),
                "Safari" == U && "+" == t[1].slice(-1)
                    ? ((U = "WebKit Nightly"), (L = "alpha"), (M = t[1].slice(0, -1)))
                    : (M == t[1] || M == (t[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (M = null),
                (t[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1]),
                537.36 == t[0] && 537.36 == t[2] && parseFloat(t[1]) >= 28 && "WebKit" == k && (k = ["Blink"]),
                j && (l || t[1])
                    ? (k && (k[1] = "like Chrome"),
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
                                                                            : "Blink" != k
                                                                              ? "27"
                                                                              : "28")))
                    : (k && (k[1] = "like Safari"),
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
                                              : t < 602
                                                ? 9
                                                : t < 604
                                                  ? 10
                                                  : t < 606
                                                    ? 11
                                                    : t < 608
                                                      ? 12
                                                      : "12")),
                k && (k[1] += " " + (t += "number" == typeof t ? ".x" : /[.+]/.test(t) ? "" : "+")),
                "Safari" == U && (!M || parseInt(M) > 45)
                    ? (M = t)
                    : "Chrome" == U && /\bHeadlessChrome/i.test(e) && x.unshift("headless")),
                "Opera" == U && (t = /\bzbov|zvav$/.exec(B))
                    ? ((U += " "),
                      x.unshift("desktop mode"),
                      "zvav" == t ? ((U += "Mini"), (M = null)) : (U += "Mobile"),
                      (B = B.replace(RegExp(" *" + t + "$"), "")))
                    : "Safari" == U && /\bChrome\b/.exec(k && k[1])
                      ? (x.unshift("desktop mode"),
                        (U = "Chrome Mobile"),
                        (M = null),
                        /\bOS X\b/.test(B) ? ((Z = "Apple"), (B = "iOS 4.3+")) : (B = null))
                      : /\bSRWare Iron\b/.test(U) && !M && (M = K("Chrome")),
                M &&
                    0 == M.indexOf((t = /[\d.]+$/.exec(B))) &&
                    e.indexOf("/" + t + "-") > -1 &&
                    (B = v(B.replace(t, ""))),
                B &&
                    -1 != B.indexOf(U) &&
                    !RegExp(U + " OS").test(B) &&
                    (B = B.replace(RegExp(" *" + y(U) + " *"), "")),
                k &&
                    !/\b(?:Avant|Nook)\b/.test(U) &&
                    (/Browser|Lunascape|Maxthon/.test(U) ||
                        ("Safari" != U && /^iOS/.test(B) && /\bSafari\b/.test(k[1])) ||
                        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                            U,
                        ) &&
                            k[1])) &&
                    (t = k[k.length - 1]) &&
                    x.push(t),
                x.length && (x = ["(" + x.join("; ") + ")"]),
                Z && G && 0 > G.indexOf(Z) && x.push("on " + Z),
                G && x.push((/^on /.test(x[x.length - 1]) ? "" : "on ") + G),
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
                      U &&
                          (/\bWOW64\b/i.test(e) ||
                              (j && /\w(?:86|32)$/.test(o.cpuClass || o.platform) && !/\bWin64; x64\b/i.test(e))) &&
                          x.unshift("32-bit"))
                    : B && /^OS X/.test(B.family) && "Chrome" == U && parseFloat(M) >= 39 && (B.architecture = 64),
                e || (e = null);
            var q = {};
            return (
                (q.description = e),
                (q.layout = k && k[0]),
                (q.manufacturer = Z),
                (q.name = U),
                (q.prerelease = L),
                (q.product = G),
                (q.ua = e),
                (q.version = U && M),
                (q.os = B || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return "null";
                    },
                }),
                (q.parse = S),
                (q.toString = z),
                q.version && x.unshift(M),
                q.name && x.unshift(U),
                B &&
                    U &&
                    !(B == String(B).split(" ")[0] && (B == U.split(" ")[0] || G)) &&
                    x.push(G ? "(" + B + ")" : "on " + B),
                x.length && (q.description = x.join(" ")),
                q
            );
        }
        var I = S();
        "function" == typeof define && "object" == typeof define.amd && define.amd
            ? ((i.platform = I),
              define(function () {
                  return I;
              }))
            : a && o
              ? g(I, function (e, t) {
                    a[t] = e;
                })
              : (i.platform = I);
    }.call(this);
