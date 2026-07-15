d.d(t, { i: () => lK, n: () => tY, r: () => lH, t: () => tL });
var i,
    e = d(749378),
    c = d(768816),
    a = "user-agent",
    s = "function",
    n = "object",
    Z = "string",
    b = "undefined",
    m = "browser",
    o = "device",
    u = "engine",
    h = "result",
    W = "name",
    G = "type",
    p = "vendor",
    N = "version",
    M = "architecture",
    X = "major",
    r = "model",
    y = "console",
    Y = "mobile",
    T = "tablet",
    V = "smarttv",
    L = "wearable",
    I = "embedded",
    z = "inapp",
    w = "brands",
    R = "formFactors",
    S = "fullVersionList",
    C = "platform",
    x = "platformVersion",
    g = "bitness",
    D = "sec-ch-ua",
    j = D + "-full-version-list",
    U = D + "-arch",
    F = D + "-" + g,
    O = D + "-form-factors",
    J = D + "-" + Y,
    k = D + "-" + r,
    E = D + "-" + C,
    v = E + "-version",
    K = [w, S, Y, r, C, x, M, R, g],
    H = "Amazon",
    Q = "Apple",
    P = "ASUS",
    f = "BlackBerry",
    B = "Google",
    A = "Huawei",
    _ = "Lenovo",
    $ = "Honor",
    q = "Microsoft",
    ll = "Motorola",
    lt = "Nvidia",
    ld = "OnePlus",
    li = "OPPO",
    le = "Samsung",
    lc = "Sharp",
    la = "Sony",
    ls = "Xiaomi",
    ln = "Zebra",
    lZ = "Chrome",
    lb = "Chromium",
    lm = "Chromecast",
    lo = "Edge",
    lu = "Firefox",
    lh = "Opera",
    lW = "Facebook",
    lG = "Sogou",
    lp = "Mobile ",
    lN = " Browser",
    lM = "Windows",
    lX = typeof window !== b && window.navigator ? window.navigator : void 0,
    lr = lX && lX.userAgentData ? lX.userAgentData : void 0,
    ly = function (l, t) {
        var d = {},
            i = t;
        if (!lV(t)) for (var e in ((i = {}), t)) for (var c in t[e]) i[c] = t[e][c].concat(i[c] ? i[c] : []);
        for (var a in l) d[a] = i[a] && i[a].length % 2 == 0 ? i[a].concat(l[a]) : l[a];
        return d;
    },
    lY = function (l) {
        for (var t = {}, d = 0; d < l.length; d++) t[l[d].toUpperCase()] = l[d];
        return t;
    },
    lT = function (l, t) {
        if (typeof l === n && l.length > 0) {
            for (var d in l) if (lz(t) == lz(l[d])) return !0;
            return !1;
        }
        return !!lL(l) && lz(t) == lz(l);
    },
    lV = function (l, t) {
        for (var d in l) return /^(browser|cpu|device|engine|os)$/.test(d) || (!!t && lV(l[d]));
    },
    lL = function (l) {
        return typeof l === Z;
    },
    lI = function (l) {
        if (l) {
            for (var t = [], d = lS(/\\?\"/g, l).split(","), i = 0; i < d.length; i++)
                if (d[i].indexOf(";") > -1) {
                    var e = lx(d[i]).split(";v=");
                    t[i] = { brand: e[0], version: e[1] };
                } else t[i] = lx(d[i]);
            return t;
        }
    },
    lz = function (l) {
        return lL(l) ? l.toLowerCase() : l;
    },
    lw = function (l) {
        return lL(l) ? lS(/[^\d\.]/g, l).split(".")[0] : void 0;
    },
    lR = function (l) {
        for (var t in l)
            if (l.hasOwnProperty(t)) {
                var d = l[t];
                typeof d == n && 2 == d.length ? (this[d[0]] = d[1]) : (this[d] = void 0);
            }
        return this;
    },
    lS = function (l, t) {
        return lL(t) ? t.replace(l, "") : t;
    },
    lC = function (l) {
        return lS(/\\?\"/g, l);
    },
    lx = function (l, t) {
        return (l = lS(/^\s\s*/, String(l))), typeof t === b ? l : l.substring(0, t);
    },
    lg = function (l, t) {
        if (l && t)
            for (var d, i, e, c, a, Z, b = 0; b < t.length && !a; ) {
                var m = t[b],
                    o = t[b + 1];
                for (d = i = 0; d < m.length && !a && m[d]; )
                    if ((a = m[d++].exec(l)))
                        for (e = 0; e < o.length; e++)
                            (Z = a[++i]),
                                typeof (c = o[e]) === n && c.length > 0
                                    ? 2 === c.length
                                        ? typeof c[1] == s
                                            ? (this[c[0]] = c[1].call(this, Z))
                                            : (this[c[0]] = c[1])
                                        : c.length >= 3 &&
                                          (typeof c[1] !== s || (c[1].exec && c[1].test)
                                              ? 3 == c.length
                                                  ? (this[c[0]] = Z ? Z.replace(c[1], c[2]) : void 0)
                                                  : 4 == c.length
                                                    ? (this[c[0]] = Z ? c[3].call(this, Z.replace(c[1], c[2])) : void 0)
                                                    : c.length > 4 &&
                                                      (this[c[0]] = Z
                                                          ? c[3].apply(this, [Z.replace(c[1], c[2])].concat(c.slice(4)))
                                                          : void 0)
                                              : c.length > 3
                                                ? (this[c[0]] = Z ? c[1].apply(this, c.slice(2)) : void 0)
                                                : (this[c[0]] = Z ? c[1].call(this, Z, c[2]) : void 0))
                                    : (this[c] = Z || void 0);
                b += 2;
            }
    },
    lD = function (l, t) {
        for (var d in t)
            if (typeof t[d] === n && t[d].length > 0) {
                for (var i = 0; i < t[d].length; i++) if (lT(t[d][i], l)) return "?" === d ? void 0 : d;
            } else if (lT(t[d], l)) return "?" === d ? void 0 : d;
        return t.hasOwnProperty("*") ? t["*"] : l;
    },
    lj = {
        ME: "4.90",
        "NT 3.51": "3.51",
        "NT 4.0": "4.0",
        2e3: ["5.0", "5.01"],
        XP: ["5.1", "5.2"],
        Vista: "6.0",
        7: "6.1",
        8: "6.2",
        8.1: "6.3",
        10: ["6.4", "10.0"],
        NT: "",
    },
    lU = {
        embedded: "Automotive",
        mobile: "Mobile",
        tablet: ["Tablet", "EInk"],
        smarttv: "TV",
        wearable: "Watch",
        xr: ["VR", "XR"],
        "?": ["Desktop", "Unknown"],
        "*": void 0,
    },
    lF = {
        Chrome: "Google Chrome",
        Edge: "Microsoft Edge",
        "Edge WebView2": "Microsoft Edge WebView2",
        "Chrome WebView": "Android WebView",
        "Chrome Headless": "HeadlessChrome",
        "Huawei Browser": "HuaweiBrowser",
        "MIUI Browser": "Miui Browser",
        "Opera Mobi": "OperaMobile",
        Yandex: "YaBrowser",
    },
    lO = {
        browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [N, [W, lp + "Chrome"]],
            [/webview.+edge\/([\w\.]+)/i],
            [N, [W, lo + " WebView"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [N, [W, "Edge"]],
            [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [W, N],
            [/opios[\/ ]+([\w\.]+)/i],
            [N, [W, lh + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [N, [W, lh + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [N, [W, lh]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [N, [W, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [N, [W, "Maxthon"]],
            [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,
                /(brave)(?: chrome)?\/([\d\.]+)/i,
                /(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
                /(qwant)(?:ios|mobile)\/([\d\.]+)/i,
                /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i,
            ],
            [W, N],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [N, [W, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [N, [W, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [N, [W, "UCBrowser"]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [N, [W, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [N, [W, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [N, [W, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [N, [W, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [N, [W, "Smart " + _ + lN]],
            [/(av(?:ast|g|ira))\/([\w\.]+)/i],
            [[W, /(.+)/, "$1 Secure" + lN], N],
            [/norton\/([\w\.]+)/i],
            [N, [W, "Norton Private" + lN]],
            [/\bfocus\/([\w\.]+)/i],
            [N, [W, lu + " Focus"]],
            [/ mms\/([\w\.]+)$/i],
            [N, [W, lh + " Neon"]],
            [/ opt\/([\w\.]+)$/i],
            [N, [W, lh + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [N, [W, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [N, [W, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [N, [W, lh + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [N, [W, "MIUI" + lN]],
            [/fxios\/([\w\.-]+)/i],
            [N, [W, lp + lu]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [N, [W, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [[W, /(.+)/, "$1Browser"], N],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[W, /(.+)/, "$1" + lN], N],
            [/samsungbrowser\/([\w\.]+)/i],
            [N, [W, le + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [N, [W, lG + " Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[W, lG + " Mobile"], N],
            [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
            ],
            [W, N],
            [/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
            [W],
            [/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
            [N, W],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[W, lW], N, [G, z]],
            [
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /(daum)apps[\/ ]([\w\.]+)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(bing)(?:web|sapphire)\/([\w\.]+)/i,
                /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i,
            ],
            [W, N, [G, z]],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [N, [W, "GSA"], [G, z]],
            [/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
            [N, [W, "TikTok"], [G, z]],
            [/\[(linkedin)app\]/i],
            [W, [G, z]],
            [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
            [[W, /(.+)/, "Zalo"], N, [G, z]],
            [/(chromium)[\/ ]([-\w\.]+)/i],
            [W, N],
            [/ome-(lighthouse)$/i],
            [W, [G, "fetcher"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [N, [W, lZ + " Headless"]],
            [/wv\).+chrome\/([\w\.]+).+edgw\//i],
            [N, [W, lo + " WebView2"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[W, lZ + " WebView"], N],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [N, [W, "Android" + lN]],
            [/chrome\/([\w\.]+) mobile/i],
            [N, [W, lp + "Chrome"]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [W, N],
            [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
            [N, [W, lp + "Safari"]],
            [/iphone .*mobile(?:\/\w+ | ?)safari/i],
            [[W, lp + "Safari"]],
            [/version\/([\w\.\,]+) .*(safari)/i],
            [N, W],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [W, [N, "1"]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [W, N],
            [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
            [[W, lp + lu], N],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[W, "Netscape"], N],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [W, N],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [N, [W, lu + " Reality"]],
            [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,
                /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /\b(links) \(([\w\.]+)/i,
            ],
            [W, [N, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [W, [N, /[^\d\.]+./, ""]],
        ],
        cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [[M, "amd64"]],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [[M, "ia32"]],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [[M, "arm64"]],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [[M, "armhf"]],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [[M, "arm"]],
            [/ sun4\w[;\)]/i],
            [[M, "sparc"]],
            [
                /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
                /((ppc|powerpc)(64)?)( mac|;|\))/i,
                /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i,
            ],
            [[M, /ower/, "", lz]],
            [/mc680.0/i],
            [[M, "68k"]],
            [/winnt.+\[axp/i],
            [[M, "alpha"]],
        ],
        device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [r, [p, le], [G, T]],
            [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
                /sec-(sgh\w+)/i,
            ],
            [r, [p, le], [G, Y]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
            [r, [p, Q], [G, Y]],
            [/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
            [r, [p, Q], [G, T]],
            [/(macintosh);/i],
            [r, [p, Q]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [r, [p, lc], [G, Y]],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [r, [p, $], [G, T]],
            [/honor([-\w ]+)[;\)]/i],
            [r, [p, $], [G, Y]],
            [
                /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
            ],
            [r, [p, A], [G, T]],
            [/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
            [r, [p, A], [G, Y]],
            [
                /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
            ],
            [
                [r, /_/g, " "],
                [p, ls],
                [G, T],
            ],
            [
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
                / ([\w ]+) miui\/v?\d/i,
            ],
            [
                [r, /_/g, " "],
                [p, ls],
                [G, Y],
            ],
            [
                /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [r, [p, ld], [G, Y]],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [r, [p, li], [G, Y]],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [r, [p, lD, { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": li }], [G, T]],
            [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
            [r, [p, "BLU"], [G, Y]],
            [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [r, [p, "Vivo"], [G, Y]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [r, [p, "Realme"], [G, Y]],
            [
                /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
            ],
            [r, [p, _], [G, T]],
            [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
            [r, [p, _], [G, Y]],
            [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
                /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i,
            ],
            [r, [p, ll], [G, Y]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [r, [p, ll], [G, T]],
            [/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [r, [p, "LG"], [G, T]],
            [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
                /\blg-?([\d\w]+) bui/i,
            ],
            [r, [p, "LG"], [G, Y]],
            [/(nokia) (t[12][01])/i],
            [p, r, [G, T]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
            [
                [r, /_/g, " "],
                [G, Y],
                [p, "Nokia"],
            ],
            [/(pixel (c|tablet))\b/i],
            [r, [p, B], [G, T]],
            [
                /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i,
            ],
            [r, [p, B], [G, Y]],
            [/(google) (pixelbook( go)?)/i],
            [p, r],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [r, [p, la], [G, Y]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
                [r, "Xperia Tablet"],
                [p, la],
                [G, T],
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [r, [p, H], [G, T]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
                [r, /(.+)/g, "Fire Phone $1"],
                [p, H],
                [G, Y],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [r, p, [G, T]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
            [r, [p, f], [G, Y]],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [r, [p, P], [G, T]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [r, [p, P], [G, Y]],
            [/(nexus 9)/i],
            [r, [p, "HTC"], [G, T]],
            [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [p, [r, /_/g, " "], [G, Y]],
            [
                /tcl (xess p17aa)/i,
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i,
            ],
            [r, [p, "TCL"], [G, T]],
            [
                /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i,
            ],
            [r, [p, "TCL"], [G, Y]],
            [/(itel) ((\w+))/i],
            [[p, lz], r, [G, lD, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [r, [p, "Acer"], [G, T]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [r, [p, "Meizu"], [G, Y]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [r, [p, "Ulefone"], [G, Y]],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [r, [p, "Energizer"], [G, Y]],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [r, [p, "Cat"], [G, Y]],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [r, [p, "Smartfren"], [G, Y]],
            [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
            [r, [p, "Nothing"], [G, Y]],
            [
                /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
            ],
            [r, [p, "Archos"], [G, T]],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [r, [p, "Archos"], [G, Y]],
            [/; (n159v)/i],
            [r, [p, "HMD"], [G, Y]],
            [/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
            [p, r, [G, T]],
            [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
                /(hp) ([\w ]+\w)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(oppo) ?([\w ]+) bui/i,
                /(hisense) ([ehv][\w ]+)\)/i,
                /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i,
            ],
            [p, r, [G, Y]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i],
            [p, r, [G, T]],
            [/(surface duo)/i],
            [r, [p, q], [G, T]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [r, [p, "Fairphone"], [G, Y]],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [r, [p, lt], [G, T]],
            [/(sprint) (\w+)/i],
            [p, r, [G, Y]],
            [/(kin\.[onetw]{3})/i],
            [
                [r, /\./g, " "],
                [p, q],
                [G, Y],
            ],
            [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [r, [p, ln], [G, T]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [r, [p, ln], [G, Y]],
            [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
            [p, [G, V]],
            [/hbbtv.+maple;(\d+)/i],
            [
                [r, /^/, "SmartTV"],
                [p, le],
                [G, V],
            ],
            [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
            [p, r, [G, V]],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
                [p, "LG"],
                [G, V],
            ],
            [/(apple) ?tv/i],
            [p, [r, Q + " TV"], [G, V]],
            [/crkey.*devicetype\/chromecast/i],
            [
                [r, lm + " Third Generation"],
                [p, B],
                [G, V],
            ],
            [/crkey.*devicetype\/([^/]*)/i],
            [
                [r, /^/, "Chromecast "],
                [p, B],
                [G, V],
            ],
            [/fuchsia.*crkey/i],
            [
                [r, lm + " Nest Hub"],
                [p, B],
                [G, V],
            ],
            [/crkey/i],
            [
                [r, lm],
                [p, B],
                [G, V],
            ],
            [/(portaltv)/i],
            [r, [p, lW], [G, V]],
            [/droid.+aft(\w+)( bui|\))/i],
            [r, [p, H], [G, V]],
            [/(shield \w+ tv)/i],
            [r, [p, lt], [G, V]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [r, [p, lc], [G, V]],
            [/(bravia[\w ]+)( bui|\))/i],
            [r, [p, la], [G, V]],
            [/(mi(tv|box)-?\w+) bui/i],
            [r, [p, ls], [G, V]],
            [/Hbbtv.*(technisat) (.*);/i],
            [p, r, [G, V]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
                [p, /.+\/(\w+)/, "$1", lD, { LG: "lge" }],
                [r, lx],
                [G, V],
            ],
            [/(playstation \w+)/i],
            [r, [p, la], [G, y]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [r, [p, q], [G, y]],
            [
                /(ouya)/i,
                /(nintendo) (\w+)/i,
                /(retroid) (pocket ([^\)]+))/i,
                /(valve).+(steam deck)/i,
                /droid.+; ((shield|rgcube|gr0006))( bui|\))/i,
            ],
            [[p, lD, { Nvidia: "Shield", Anbernic: "RGCUBE", Logitech: "GR0006" }], r, [G, y]],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [r, [p, le], [G, L]],
            [/((pebble))app/i, /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [p, r, [G, L]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [r, [p, li], [G, L]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [r, [p, Q], [G, L]],
            [/(opwwe\d{3})/i],
            [r, [p, ld], [G, L]],
            [/(moto 360)/i],
            [r, [p, ll], [G, L]],
            [/(smartwatch 3)/i],
            [r, [p, la], [G, L]],
            [/(g watch r)/i],
            [r, [p, "LG"], [G, L]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [r, [p, ln], [G, L]],
            [/droid.+; (glass) \d/i],
            [r, [p, B], [G, "xr"]],
            [/(pico) ([\w ]+) os\d/i],
            [p, r, [G, "xr"]],
            [/(quest( \d| pro)?s?).+vr/i],
            [r, [p, lW], [G, "xr"]],
            [/mobile vr; rv.+firefox/i],
            [[G, "xr"]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [p, [G, I]],
            [/(aeobc)\b/i],
            [r, [p, H], [G, I]],
            [/(homepod).+mac os/i],
            [r, [p, Q], [G, I]],
            [/windows iot/i],
            [[G, I]],
            [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
            [r, [G, V]],
            [/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
            [[G, V]],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
            [r, [G, lD, { mobile: "Mobile", xr: "VR", "*": T }]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[G, T]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[G, Y]],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [r, [p, "Generic"]],
        ],
        engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [N, [W, lo + "HTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [W, N],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [N, [W, "Blink"]],
            [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
            ],
            [W, N],
            [/ladybird\//i],
            [[W, "LibWeb"]],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [N, W],
        ],
        os: [
            [/(windows nt) (6\.[23]); arm/i],
            [
                [W, /N/, "R"],
                [N, lD, lj],
            ],
            [
                /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
                /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i,
            ],
            [W, N],
            [/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
            [
                [N, /(;|\))/g, "", lD, lj],
                [W, lM],
            ],
            [/(windows ce)\/?([\d\.]*)/i],
            [W, N],
            [
                /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
                /\btvos ?([\w\.]+)/i,
                /cfnetwork\/.+darwin/i,
            ],
            [
                [N, /_/g, "."],
                [W, "iOS"],
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
            [
                [W, "macOS"],
                [N, /_/g, "."],
            ],
            [/android ([\d\.]+).*crkey/i],
            [N, [W, lm + " Android"]],
            [/fuchsia.*crkey\/([\d\.]+)/i],
            [N, [W, lm + " Fuchsia"]],
            [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
            [N, [W, lm + " SmartSpeaker"]],
            [/linux.*crkey\/([\d\.]+)/i],
            [N, [W, lm + " Linux"]],
            [/crkey\/([\d\.]+)/i],
            [N, [W, lm]],
            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
            [N, W],
            [/(ubuntu) ([\w\.]+) like android/i],
            [[W, /(.+)/, "$1 Touch"], N],
            [
                /(harmonyos)[\/ ]?([\d\.]*)/i,
                /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i,
            ],
            [W, N],
            [/\(bb(10);/i],
            [N, [W, f]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [N, [W, "Symbian"]],
            [
                /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i,
            ],
            [N, [W, lu + " OS"]],
            [/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
            [N, [W, "webOS"]],
            [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
            [
                [
                    N,
                    lD,
                    {
                        25: "120",
                        24: "108",
                        23: "94",
                        22: "87",
                        6: "79",
                        5: "68",
                        4: "53",
                        3: "38",
                        2: "538",
                        1: "537",
                        "*": "TV",
                    },
                ],
                [W, "webOS"],
            ],
            [/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
            [N, [W, "watchOS"]],
            [/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
            [N, [W, "Chrome OS"]],
            [/kepler ([\w\.]+); (aft|aeo)/i],
            [N, [W, "Vega OS"]],
            [
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) (\w+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /(pico) .+os([\w\.]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
                /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /\b(aix)[; ]([1-9\.]{0,4})/i,
                /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) ?(r\d)?/i,
            ],
            [W, N],
            [/(sunos) ?([\d\.]*)/i],
            [[W, "Solaris"], N],
            [/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [W, N],
        ],
    },
    lJ =
        ((i = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} }),
        lR.call(i.init, [
            [m, [W, N, X, G]],
            ["cpu", [M]],
            [o, [G, r, p]],
            [u, [W, N]],
            ["os", [W, N]],
        ]),
        lR.call(i.isIgnore, [
            [m, [N, X]],
            [u, [N]],
            ["os", [N]],
        ]),
        lR.call(i.isIgnoreRgx, [
            [m, / ?browser$/i],
            ["os", / ?os$/i],
        ]),
        lR.call(i.toString, [
            [m, [W, N]],
            ["cpu", [M]],
            [o, [p, r]],
            [u, [W, N]],
            ["os", [W, N]],
        ]),
        i),
    lk = function (l, t) {
        var d = lJ.init[t],
            i = lJ.isIgnore[t] || 0,
            e = lJ.isIgnoreRgx[t] || 0,
            c = lJ.toString[t] || 0;
        function a() {
            lR.call(this, d);
        }
        return (
            (a.prototype.getItem = function () {
                return l;
            }),
            (a.prototype.withClientHints = function () {
                return lr
                    ? lr.getHighEntropyValues(K).then(function (t) {
                          return l.setCH(new lE(t, !1)).parseCH().get();
                      })
                    : l.parseCH().get();
            }),
            (a.prototype.withFeatureCheck = function () {
                return l.detectFeature().get();
            }),
            t != h &&
                ((a.prototype.is = function (l) {
                    var t = !1;
                    for (var d in this)
                        if (
                            this.hasOwnProperty(d) &&
                            !lT(i, d) &&
                            lz(e ? lS(e, this[d]) : this[d]) == lz(e ? lS(e, l) : l)
                        ) {
                            if (((t = !0), l != b)) break;
                        } else if (l == b && t) {
                            t = !t;
                            break;
                        }
                    return t;
                }),
                (a.prototype.toString = function () {
                    var l = "";
                    for (var t in c) typeof this[c[t]] !== b && (l += (l ? " " : "") + this[c[t]]);
                    return l || b;
                })),
            (a.prototype.then = function (l) {
                var t = this,
                    d = function () {
                        for (var l in t) t.hasOwnProperty(l) && (this[l] = t[l]);
                    };
                d.prototype = {
                    is: a.prototype.is,
                    toString: a.prototype.toString,
                    withClientHints: a.prototype.withClientHints,
                    withFeatureCheck: a.prototype.withFeatureCheck,
                };
                var i = new d();
                return l(i), i;
            }),
            new a()
        );
    };
function lE(l, t) {
    if (((l = l || {}), lR.call(this, K), t))
        lR.call(this, [
            [w, lI(l[D])],
            [S, lI(l[j])],
            [Y, /\?1/.test(l[J])],
            [r, lC(l[k])],
            [C, lC(l[E])],
            [x, lC(l[v])],
            [M, lC(l[U])],
            [R, lI(l[O])],
            [g, lC(l[F])],
        ]);
    else for (var d in l) this.hasOwnProperty(d) && typeof l[d] !== b && (this[d] = l[d]);
}
function lv(l, t, d, i) {
    return (
        lR.call(this, [
            ["itemType", l],
            ["ua", t],
            ["uaCH", i],
            ["rgxMap", d],
            ["data", lk(this, l)],
        ]),
        this
    );
}
function lK(l, t, d) {
    if (
        (typeof l === n
            ? (lV(l, !0) ? (typeof t === n && (d = t), (t = l)) : ((d = l), (t = void 0)), (l = void 0))
            : typeof l !== Z || lV(t, !0) || ((d = t), (t = void 0)),
        d)
    )
        if (typeof d.append === s) {
            var i = {};
            d.forEach(function (l, t) {
                i[String(t).toLowerCase()] = l;
            }),
                (d = i);
        } else {
            var e = {};
            for (var c in d) d.hasOwnProperty(c) && (e[String(c).toLowerCase()] = d[c]);
            d = e;
        }
    if (!(this instanceof lK)) return new lK(l, t, d).getResult();
    var b = typeof l === Z ? l : d && d[a] ? d[a] : lX && lX.userAgent ? lX.userAgent : "",
        W = new lE(d, !0),
        G = t ? ly(lO, t) : lO,
        p = function (l) {
            return l == h
                ? function () {
                      return new lv(l, b, G, W)
                          .set("ua", b)
                          .set(m, this.getBrowser())
                          .set("cpu", this.getCPU())
                          .set(o, this.getDevice())
                          .set(u, this.getEngine())
                          .set("os", this.getOS())
                          .get();
                  }
                : function () {
                      return new lv(l, b, G[l], W).parseUA().get();
                  };
        };
    return (
        lR
            .call(this, [
                ["getBrowser", p(m)],
                ["getCPU", p("cpu")],
                ["getDevice", p(o)],
                ["getEngine", p(u)],
                ["getOS", p("os")],
                ["getResult", p(h)],
                [
                    "getUA",
                    function () {
                        return b;
                    },
                ],
                [
                    "setUA",
                    function (l) {
                        return lL(l) && (b = lx(l, 500)), this;
                    },
                ],
            ])
            .setUA(b),
        this
    );
}
function lH(l) {
    let t = (l ? new lK(l) : new lK()).getResult();
    return {
        device: { model: t.device.model, vendor: t.device.vendor, type: t.device.type },
        os: { name: t.os.name, version: t.os.version },
        browser: { name: t.browser.name, version: t.browser.version },
    };
}
(lv.prototype.get = function (l) {
    return l ? (this.data.hasOwnProperty(l) ? this.data[l] : void 0) : this.data;
}),
    (lv.prototype.set = function (l, t) {
        return (this.data[l] = t), this;
    }),
    (lv.prototype.setCH = function (l) {
        return (this.uaCH = l), this;
    }),
    (lv.prototype.detectFeature = function () {
        if (lX && lX.userAgent == this.ua)
            switch (this.itemType) {
                case m:
                    lX.brave && typeof lX.brave.isBrave == s && this.set(W, "Brave");
                    break;
                case o:
                    !this.get(G) && lr && lr[Y] && this.set(G, Y),
                        "Macintosh" == this.get(r) &&
                            lX &&
                            typeof lX.standalone !== b &&
                            lX.maxTouchPoints &&
                            lX.maxTouchPoints > 2 &&
                            this.set(r, "iPad").set(G, T);
                    break;
                case "os":
                    !this.get(W) && lr && lr[C] && this.set(W, lr[C]);
                    break;
                case h:
                    var l = this.data,
                        t = function (t) {
                            return l[t].getItem().detectFeature().get();
                        };
                    this.set(m, t(m)).set("cpu", t("cpu")).set(o, t(o)).set(u, t(u)).set("os", t("os"));
            }
        return this;
    }),
    (lv.prototype.parseUA = function () {
        switch ((this.itemType != h && lg.call(this.data, this.ua, this.rgxMap), this.itemType)) {
            case m:
                this.set(X, lw(this.get(N)));
                break;
            case "os":
                if ("iOS" == this.get(W) && "18.6" == this.get(N)) {
                    var l = /\) Version\/([\d\.]+)/.exec(this.ua);
                    l && parseInt(l[1].substring(0, 2), 10) >= 26 && this.set(N, l[1]);
                }
        }
        return this;
    }),
    (lv.prototype.parseCH = function () {
        var l = this.uaCH,
            t = this.rgxMap;
        switch (this.itemType) {
            case m:
            case u:
                var d,
                    i = l[S] || l[w];
                if (i)
                    for (var e = 0; e < i.length; e++) {
                        var c = i[e].brand || i[e],
                            a = i[e].version;
                        this.itemType == m &&
                            !/not.a.brand/i.test(c) &&
                            (!d || (/Chrom/.test(d) && c != lb) || (d == lo && /WebView2/.test(c))) &&
                            ((c = lD(c, lF)),
                            ((d = this.get(W)) && !/Chrom/.test(d) && /Chrom/.test(c)) ||
                                this.set(W, c).set(N, a).set(X, lw(a)),
                            (d = c)),
                            this.itemType == u && c == lb && this.set(N, a);
                    }
                break;
            case "cpu":
                var s = l[M];
                s && (s && "64" == l[g] && (s += "64"), lg.call(this.data, s + ";", t));
                break;
            case o:
                if ((l[Y] && this.set(G, Y), l[r] && (this.set(r, l[r]), !this.get(G) || !this.get(p)))) {
                    var n,
                        Z = {};
                    lg.call(Z, "droid 9; " + l[r] + ")", t),
                        !this.get(G) && Z.type && this.set(G, Z.type),
                        !this.get(p) && Z.vendor && this.set(p, Z.vendor);
                }
                if (l[R]) {
                    if ("string" != typeof l[R]) for (var b = 0; !n && b < l[R].length; ) n = lD(l[R][b++], lU);
                    else n = lD(l[R], lU);
                    this.set(G, n);
                }
                break;
            case "os":
                var y = l[C];
                if (y) {
                    var T = l[x];
                    y == lM && (T = parseInt(lw(T), 10) >= 13 ? "11" : "10"), this.set(W, y).set(N, T);
                }
                this.get(W) == lM && "Xbox" == l[r] && this.set(W, "Xbox").set(N, void 0);
                break;
            case h:
                var V = this.data,
                    L = function (t) {
                        return V[t].getItem().setCH(l).parseCH().get();
                    };
                this.set(m, L(m)).set("cpu", L("cpu")).set(o, L(o)).set(u, L(u)).set("os", L("os"));
        }
        return this;
    }),
    (lK.VERSION = "2.0.9"),
    (lK.BROWSER = lY([W, N, X, G])),
    (lK.CPU = lY([M])),
    (lK.DEVICE = lY([r, p, G, y, Y, V, T, L, I])),
    (lK.ENGINE = lK.OS = lY([W, N]));
let lQ = "thumbmark",
    lP = "https://api.thumbmarkjs.com",
    lf = {
        exclude: [],
        include: [],
        stabilize: ["private", "iframe"],
        logging: !0,
        timeout: 5e3,
        cache_api_call: !0,
        cache_lifetime_in_ms: 0,
        performance: !1,
        experimental: !1,
        property_name_factory: (l) => `${lQ}_${l}`,
    };
({ ...lf });
let lB = {
        private: [
            { exclude: ["canvas"], browsers: ["firefox", "safari>=17", "brave"] },
            { exclude: ["audio"], browsers: ["samsungbrowser", "safari"] },
            { exclude: ["fonts"], browsers: ["firefox"] },
            {
                exclude: [
                    "audio.sampleHash",
                    "hardware.deviceMemory",
                    "header.acceptLanguage.q",
                    "system.hardwareConcurrency",
                    "plugins",
                ],
                browsers: ["brave"],
            },
            { exclude: ["tls.extensions"], browsers: ["firefox", "chrome", "safari"] },
            { exclude: ["header.acceptLanguage"], browsers: ["edge", "chrome"] },
        ],
        iframe: [
            { exclude: ["system.applePayVersion", "system.cookieEnabled"], browsers: ["safari"] },
            { exclude: ["permissions"] },
        ],
        vpn: [{ exclude: ["ip"] }],
    },
    lA = "u" > typeof window ? window.OfflineAudioContext || window.webkitOfflineAudioContext : null;
function l_(l, t, d) {
    let i = [];
    for (let t = 0; t < l[0].data.length; t++) {
        let d = [];
        for (let i = 0; i < l.length; i++) d.push(l[i].data[t]);
        i.push(
            (function (l) {
                if (0 === l.length) return 0;
                let t = {};
                for (let d of l) t[d] = (t[d] || 0) + 1;
                let d = l[0];
                for (let l in t) t[l] > t[d] && (d = parseInt(l, 10));
                return d;
            })(d),
        );
    }
    return new ImageData(new Uint8ClampedArray(i), t, d);
}
function l$(l) {
    return (
        (l ^= l >>> 16),
        (l = Math.imul(l, 0x85ebca6b)),
        (l ^= l >>> 13),
        (l = Math.imul(l, 0xc2b2ae35)),
        (l ^= l >>> 16) >>> 0
    );
}
let lq = new Uint32Array([0x239b961b, 0xab0e9789, 0x38b34ae5, 0xa1e38b93]);
function l2(l, t) {
    return (l << t) | (l >>> (32 - t));
}
function l0(l, t = 0) {
    var d;
    if (
        ((t = t ? 0 | t : 0),
        "string" == typeof l &&
            (l = (function (l) {
                if ("u" > typeof TextEncoder) return new TextEncoder().encode(l).buffer;
                let t = [];
                for (let d = 0; d < l.length; d++) {
                    let i = l.charCodeAt(d);
                    i < 128
                        ? t.push(i)
                        : i < 2048
                          ? t.push(192 | (i >> 6), 128 | (63 & i))
                          : i < 55296 || i >= 57344
                            ? t.push(224 | (i >> 12), 128 | ((i >> 6) & 63), 128 | (63 & i))
                            : (d++,
                              (i = 65536 + (((1023 & i) << 10) | (1023 & l.charCodeAt(d)))),
                              t.push(240 | (i >> 18), 128 | ((i >> 12) & 63), 128 | ((i >> 6) & 63), 128 | (63 & i)));
                }
                return new Uint8Array(t).buffer;
            })(l)),
        !(l instanceof ArrayBuffer))
    )
        throw TypeError("Expected key to be ArrayBuffer or string");
    let i = new Uint32Array([t, t, t, t]);
    return (
        (function (l, t) {
            let d = (l.byteLength / 16) | 0,
                i = new Uint32Array(l, 0, 4 * d);
            for (let l = 0; l < d; l++) {
                let d = i.subarray(4 * l, 4 * (l + 1));
                (d[0] = Math.imul(d[0], lq[0])),
                    (d[0] = l2(d[0], 15)),
                    (d[0] = Math.imul(d[0], lq[1])),
                    (t[0] = t[0] ^ d[0]),
                    (t[0] = l2(t[0], 19)),
                    (t[0] = t[0] + t[1]),
                    (t[0] = Math.imul(t[0], 5) + 0x561ccd1b),
                    (d[1] = Math.imul(d[1], lq[1])),
                    (d[1] = l2(d[1], 16)),
                    (d[1] = Math.imul(d[1], lq[2])),
                    (t[1] = t[1] ^ d[1]),
                    (t[1] = l2(t[1], 17)),
                    (t[1] = t[1] + t[2]),
                    (t[1] = Math.imul(t[1], 5) + 0xbcaa747),
                    (d[2] = Math.imul(d[2], lq[2])),
                    (d[2] = l2(d[2], 17)),
                    (d[2] = Math.imul(d[2], lq[3])),
                    (t[2] = t[2] ^ d[2]),
                    (t[2] = l2(t[2], 15)),
                    (t[2] = t[2] + t[3]),
                    (t[2] = Math.imul(t[2], 5) + 0x96cd1c35),
                    (d[3] = Math.imul(d[3], lq[3])),
                    (d[3] = l2(d[3], 18)),
                    (d[3] = Math.imul(d[3], lq[0])),
                    (t[3] = t[3] ^ d[3]),
                    (t[3] = l2(t[3], 13)),
                    (t[3] = t[3] + t[0]),
                    (t[3] = Math.imul(t[3], 5) + 0x32ac3b17);
            }
        })(l, i),
        (function (l, t) {
            let d = (l.byteLength / 16) | 0,
                i = l.byteLength % 16,
                e = new Uint32Array(4),
                c = new Uint8Array(l, 16 * d, i);
            switch (i) {
                case 15:
                    e[3] = e[3] ^ (c[14] << 16);
                case 14:
                    e[3] = e[3] ^ (c[13] << 8);
                case 13:
                    (e[3] = e[3] ^ c[12]),
                        (e[3] = Math.imul(e[3], lq[3])),
                        (e[3] = l2(e[3], 18)),
                        (e[3] = Math.imul(e[3], lq[0])),
                        (t[3] = t[3] ^ e[3]);
                case 12:
                    e[2] = e[2] ^ (c[11] << 24);
                case 11:
                    e[2] = e[2] ^ (c[10] << 16);
                case 10:
                    e[2] = e[2] ^ (c[9] << 8);
                case 9:
                    (e[2] = e[2] ^ c[8]),
                        (e[2] = Math.imul(e[2], lq[2])),
                        (e[2] = l2(e[2], 17)),
                        (e[2] = Math.imul(e[2], lq[3])),
                        (t[2] = t[2] ^ e[2]);
                case 8:
                    e[1] = e[1] ^ (c[7] << 24);
                case 7:
                    e[1] = e[1] ^ (c[6] << 16);
                case 6:
                    e[1] = e[1] ^ (c[5] << 8);
                case 5:
                    (e[1] = e[1] ^ c[4]),
                        (e[1] = Math.imul(e[1], lq[1])),
                        (e[1] = l2(e[1], 16)),
                        (e[1] = Math.imul(e[1], lq[2])),
                        (t[1] = t[1] ^ e[1]);
                case 4:
                    e[0] = e[0] ^ (c[3] << 24);
                case 3:
                    e[0] = e[0] ^ (c[2] << 16);
                case 2:
                    e[0] = e[0] ^ (c[1] << 8);
                case 1:
                    (e[0] = e[0] ^ c[0]),
                        (e[0] = Math.imul(e[0], lq[0])),
                        (e[0] = l2(e[0], 15)),
                        (e[0] = Math.imul(e[0], lq[1])),
                        (t[0] = t[0] ^ e[0]);
            }
        })(l, i),
        (d = l),
        (i[0] = i[0] ^ d.byteLength),
        (i[1] = i[1] ^ d.byteLength),
        (i[2] = i[2] ^ d.byteLength),
        (i[3] = i[3] ^ d.byteLength),
        (i[0] = (i[0] + i[1]) | 0),
        (i[0] = (i[0] + i[2]) | 0),
        (i[0] = (i[0] + i[3]) | 0),
        (i[1] = (i[1] + i[0]) | 0),
        (i[2] = (i[2] + i[0]) | 0),
        (i[3] = (i[3] + i[0]) | 0),
        (i[0] = l$(i[0])),
        (i[1] = l$(i[1])),
        (i[2] = l$(i[2])),
        (i[3] = l$(i[3])),
        (i[0] = (i[0] + i[1]) | 0),
        (i[0] = (i[0] + i[2]) | 0),
        (i[0] = (i[0] + i[3]) | 0),
        (i[1] = (i[1] + i[0]) | 0),
        (i[2] = (i[2] + i[0]) | 0),
        (i[3] = (i[3] + i[0]) | 0),
        Array.from(new Uint8Array(i.buffer))
            .map((l) => l.toString(16).padStart(2, "0"))
            .join("")
    );
}
async function l1(l) {
    for (var t; !document.body; ) await new Promise((l) => setTimeout(l, 50, void 0));
    let d = document.createElement("iframe");
    d.setAttribute("frameBorder", "0");
    let i = d.style;
    i.setProperty("position", "fixed"),
        i.setProperty("display", "block", "important"),
        i.setProperty("visibility", "visible"),
        i.setProperty("border", "0"),
        i.setProperty("opacity", "0"),
        (d.src = "about:blank"),
        document.body.appendChild(d);
    let e = d.contentDocument || (null == (t = d.contentWindow) ? void 0 : t.document);
    if (!e) throw Error("Iframe document is not accessible");
    l({ iframe: e }),
        setTimeout(() => {
            document.body.removeChild(d);
        }, 0);
}
let l5 = [
        "Arial",
        "Arial Black",
        "Arial Narrow",
        "Arial Rounded MT",
        "Arimo",
        "Archivo",
        "Barlow",
        "Bebas Neue",
        "Bitter",
        "Bookman",
        "Calibri",
        "Cabin",
        "Candara",
        "Century",
        "Century Gothic",
        "Comic Sans MS",
        "Constantia",
        "Courier",
        "Courier New",
        "Crimson Text",
        "DM Mono",
        "DM Sans",
        "DM Serif Display",
        "DM Serif Text",
        "Dosis",
        "Droid Sans",
        "Exo",
        "Fira Code",
        "Fira Sans",
        "Franklin Gothic Medium",
        "Garamond",
        "Geneva",
        "Georgia",
        "Gill Sans",
        "Helvetica",
        "Impact",
        "Inconsolata",
        "Indie Flower",
        "Inter",
        "Josefin Sans",
        "Karla",
        "Lato",
        "Lexend",
        "Lucida Bright",
        "Lucida Console",
        "Lucida Sans Unicode",
        "Manrope",
        "Merriweather",
        "Merriweather Sans",
        "Montserrat",
        "Myriad",
        "Noto Sans",
        "Nunito",
        "Nunito Sans",
        "Open Sans",
        "Optima",
        "Orbitron",
        "Oswald",
        "Pacifico",
        "Palatino",
        "Perpetua",
        "PT Sans",
        "PT Serif",
        "Poppins",
        "Prompt",
        "Public Sans",
        "Quicksand",
        "Rajdhani",
        "Recursive",
        "Roboto",
        "Roboto Condensed",
        "Rockwell",
        "Rubik",
        "Segoe Print",
        "Segoe Script",
        "Segoe UI",
        "Sora",
        "Source Sans Pro",
        "Space Mono",
        "Tahoma",
        "Taviraj",
        "Times",
        "Times New Roman",
        "Titillium Web",
        "Trebuchet MS",
        "Ubuntu",
        "Varela Round",
        "Verdana",
        "Work Sans",
    ],
    l9 = ["monospace", "sans-serif", "serif"];
function l3(l, t) {
    return (l.font = `72px ${t}`), l.measureText("WwMmLli0Oo").width;
}
let l4 = (l, t, d, i) => {
        let e = (d - t) / i,
            c = 0;
        for (let d = 0; d < i; d++) c += l(t + (d + 0.5) * e);
        return c * e;
    },
    l7 = [
        "accelerometer",
        "accessibility",
        "accessibility-events",
        "ambient-light-sensor",
        "background-fetch",
        "background-sync",
        "bluetooth",
        "camera",
        "clipboard-read",
        "clipboard-write",
        "device-info",
        "display-capture",
        "gyroscope",
        "geolocation",
        "local-fonts",
        "magnetometer",
        "microphone",
        "midi",
        "nfc",
        "notifications",
        "payment-handler",
        "persistent-storage",
        "push",
        "speaker",
        "storage-access",
        "top-level-storage-access",
        "window-management",
        "query",
    ];
function l6() {
    var l, t, d, i, e, c;
    if ("u" < typeof navigator) return { name: "unknown", version: "unknown" };
    let a = navigator.userAgent,
        s = {
            edg: "Edge",
            edga: "Edge",
            edgios: "Edge",
            opr: "Opera",
            opx: "Opera",
            crios: "Chrome",
            fxios: "Firefox",
            samsung: "SamsungBrowser",
            vivaldi: "Vivaldi",
            brave: "Brave",
        };
    for (let n of [
        /(?<name>SamsungBrowser)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>EdgA|EdgiOS|Edg)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>OPR|OPX)\/(?<version>\d+(?:\.\d+)+)/,
        /Opera[\s\/](?<version>\d+(?:\.\d+)+)/,
        /Opera Mini\/(?<version>\d+(?:\.\d+)+)/,
        /Opera Mobi\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>Vivaldi)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>Brave)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>CriOS)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>FxiOS)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>Chrome|Chromium)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>Firefox|Waterfox|Iceweasel|IceCat)\/(?<version>\d+(?:\.\d+)+)/,
        /Version\/(?<version1>[\d.]+).*Safari\/[\d.]+|(?<name>Safari)\/(?<version2>[\d.]+)/,
        /(?<name>MSIE|Trident|IEMobile).+?(?<version>\d+(?:\.\d+)+)/,
        /(?<name>[A-Za-z]+)\/(?<version>\d+(?:\.\d+)+)/,
    ]) {
        let Z = a.match(n);
        if (Z) {
            let a = null == (l = Z.groups) ? void 0 : l.name,
                b =
                    (null == (t = Z.groups) ? void 0 : t.version) ||
                    (null == (d = Z.groups) ? void 0 : d.version1) ||
                    (null == (i = Z.groups) ? void 0 : i.version2);
            if (
                (!a &&
                    ((null == (e = Z.groups) ? void 0 : e.version1) ||
                        (null == (c = Z.groups) ? void 0 : c.version2)) &&
                    (a = "Safari"),
                !a && n.source.includes("Opera Mini") && (a = "Opera Mini"),
                !a && n.source.includes("Opera Mobi") && (a = "Opera Mobi"),
                !a && n.source.includes("Opera") && (a = "Opera"),
                !a && Z[1] && (a = Z[1]),
                !b && Z[2] && (b = Z[2]),
                a)
            )
                return { name: s[a.toLowerCase()] || a, version: b || "unknown" };
        }
    }
    return { name: "unknown", version: "unknown" };
}
function l8() {
    if ("u" < typeof navigator || !navigator.userAgent) return !1;
    let l = navigator.userAgent;
    return (
        /Mobi|Android|iPhone|iPod|IEMobile|Opera Mini|Opera Mobi|webOS|BlackBerry|Windows Phone/i.test(l) &&
        !/iPad/i.test(l)
    );
}
let tl = "SamsungBrowser" !== l6().name ? 1 : 3,
    tt,
    td = null;
function ti(l) {
    let t = [];
    return (
        (function l(d) {
            let i, e;
            if ((d && d.toJSON && "function" == typeof d.toJSON && (d = d.toJSON()), void 0 === d)) return;
            if ("number" == typeof d) return isFinite(d) ? "" + d : "null";
            if ("object" != typeof d) return JSON.stringify(d);
            if (Array.isArray(d)) {
                for (e = "[", i = 0; i < d.length; i++) i && (e += ","), (e += l(d[i]) || "null");
                return e + "]";
            }
            if (null === d) return "null";
            if (-1 !== t.indexOf(d)) throw TypeError("Converting circular structure to JSON");
            let c = t.push(d) - 1,
                a = Object.keys(d).sort();
            for (e = "", i = 0; i < a.length; i++) {
                let t = a[i],
                    c = l(d[t]);
                c && (e && (e += ","), (e += JSON.stringify(t) + ":" + c));
            }
            return t.splice(c, 1), "{" + e + "}";
        })(l) || ""
    );
}
let te = [
        "\uD835\uDD04",
        "\uD835\uDD05",
        "\u212D",
        "\uD835\uDD07",
        "\uD835\uDD08",
        "\uD835\uDD09",
        "\uD835\uDD38",
        "\uD835\uDD39",
        "\u2102",
        "\uD835\uDD3B",
        "\uD835\uDD3C",
        "\uD835\uDD3D",
    ],
    tc = [
        "\u03B2",
        "\u03C8",
        "\u03BB",
        "\u03B5",
        "\u03B6",
        "\u03B1",
        "\u03BE",
        "\u03BC",
        "\u03C1",
        "\u03C6",
        "\u03BA",
        "\u03C4",
        "\u03B7",
        "\u03C3",
        "\u03B9",
        "\u03C9",
        "\u03B3",
        "\u03BD",
        "\u03C7",
        "\u03B4",
        "\u03B8",
        "\u03C0",
        "\u03C5",
        "\u03BF",
    ];
function ta(l, t) {
    return `<math><mrow>${t}</mrow></math>`;
}
let ts = {
        audio: async function () {
            return lA
                ? (async function () {
                      return new Promise((l, t) => {
                          try {
                              let t,
                                  d = new lA(1, 5e3, 44100),
                                  i = d.createBufferSource(),
                                  e = d.createOscillator();
                              e.frequency.value = 1e3;
                              let c = d.createDynamicsCompressor();
                              (c.threshold.value = -50),
                                  (c.knee.value = 40),
                                  (c.ratio.value = 12),
                                  (c.attack.value = 0),
                                  (c.release.value = 0.2),
                                  e.connect(c),
                                  c.connect(d.destination),
                                  e.start(),
                                  (d.oncomplete = (e) => {
                                      (t = e.renderedBuffer.getChannelData(0)),
                                          l({
                                              sampleHash: (function (l) {
                                                  let t = 0;
                                                  for (let d = 0; d < l.length; ++d) t += Math.abs(l[d]);
                                                  return t;
                                              })(t),
                                              maxChannels: d.destination.maxChannelCount,
                                              channelCountMode: i.channelCountMode,
                                          });
                                  }),
                                  d.startRendering();
                          } catch (l) {
                              console.error("Error creating audio fingerprint:", l), t(l);
                          }
                      });
                  })()
                : null;
        },
        canvas: async function () {
            return new Promise((l) => {
                let t = Array.from({ length: 3 }, () =>
                    (function () {
                        let l = document.createElement("canvas"),
                            t = l.getContext("2d");
                        if (!t) return null;
                        (l.width = 280), (l.height = 20);
                        let d = t.createLinearGradient(0, 0, l.width, l.height);
                        d.addColorStop(0, "red"),
                            d.addColorStop(1 / 6, "orange"),
                            d.addColorStop(2 / 6, "yellow"),
                            d.addColorStop(0.5, "green"),
                            d.addColorStop(4 / 6, "blue"),
                            d.addColorStop(5 / 6, "indigo"),
                            d.addColorStop(1, "violet"),
                            (t.fillStyle = d),
                            t.fillRect(0, 0, l.width, l.height);
                        let i = "Random Text WMwmil10Oo";
                        return (
                            (t.font = "23.123px Arial"),
                            (t.fillStyle = "black"),
                            t.fillText(i, -5, 15),
                            (t.fillStyle = "rgba(0, 0, 255, 0.5)"),
                            t.fillText(i, -3.3, 17.7),
                            t.beginPath(),
                            t.moveTo(0, 0),
                            t.lineTo((2 * l.width) / 7, l.height),
                            (t.strokeStyle = "white"),
                            (t.lineWidth = 2),
                            t.stroke(),
                            t.getImageData(0, 0, l.width, l.height)
                        );
                    })(),
                ).filter((l) => null !== l);
                l(0 !== t.length ? { commonPixelsHash: l0(l_(t, 280, 20).data.toString()).toString() } : null);
            });
        },
        fonts: async function (l) {
            return new Promise((l) => {
                try {
                    l1(async ({ iframe: t }) => {
                        let d = t.createElement("canvas").getContext("2d");
                        if (!d) return void l(null);
                        let i = l9.map((l) => l3(d, l)),
                            e = {};
                        l5.forEach((l) => {
                            let t = l3(d, l);
                            i.includes(t) || (e[l] = t);
                        }),
                            l(e);
                    });
                } catch (t) {
                    l(null);
                }
            });
        },
        hardware: function () {
            return new Promise((l, t) => {
                let d,
                    i,
                    e = void 0 !== navigator.deviceMemory ? navigator.deviceMemory : 0,
                    c = window.performance && window.performance.memory ? window.performance.memory : 0;
                l({
                    videocard: (function () {
                        var l;
                        let t = document.createElement("canvas"),
                            d = null != (l = t.getContext("webgl")) ? l : t.getContext("experimental-webgl");
                        if (d && "getParameter" in d)
                            try {
                                let l = (d.getParameter(d.VENDOR) || "").toString(),
                                    t = (d.getParameter(d.RENDERER) || "").toString(),
                                    i = {
                                        vendor: l,
                                        renderer: t,
                                        version: (d.getParameter(d.VERSION) || "").toString(),
                                        shadingLanguageVersion: (
                                            d.getParameter(d.SHADING_LANGUAGE_VERSION) || ""
                                        ).toString(),
                                    };
                                if (!t.length || !l.length) {
                                    let l = d.getExtension("WEBGL_debug_renderer_info");
                                    if (l) {
                                        let t = (d.getParameter(l.UNMASKED_VENDOR_WEBGL) || "").toString(),
                                            e = (d.getParameter(l.UNMASKED_RENDERER_WEBGL) || "").toString();
                                        t && (i.vendorUnmasked = t), e && (i.rendererUnmasked = e);
                                    }
                                }
                                return i;
                            } catch (l) {}
                        return "undefined";
                    })(),
                    architecture:
                        ((i = new Uint8Array((d = new Float32Array(1)).buffer)),
                        (d[0] = 1 / 0),
                        (d[0] = d[0] - d[0]),
                        i[3]),
                    deviceMemory: e.toString() || "undefined",
                    jsHeapSizeLimit: c.jsHeapSizeLimit || 0,
                });
            });
        },
        locales: function () {
            return new Promise((l) => {
                l({ languages: navigator.language, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone });
            });
        },
        math: function () {
            return new Promise((l) => {
                l({
                    acos: Math.acos(0.5),
                    asin: l4(Math.asin, -1, 1, 97),
                    cos: l4(Math.cos, 0, Math.PI, 97),
                    largeCos: 0.7639704044417283,
                    largeSin: -0.6452512852657808,
                    largeTan: Math.tan(1e20),
                    sin: l4(Math.sin, -Math.PI, Math.PI, 97),
                    tan: l4(Math.tan, 0, 2 * Math.PI, 97),
                });
            });
        },
        permissions: async function (l) {
            var t;
            let d,
                i = (null == l ? void 0 : l.permissions_to_check) || l7;
            return (
                (t = await Promise.all(
                    Array.from({ length: 3 }, () =>
                        (async function (l) {
                            let t = {};
                            for (let d of l)
                                try {
                                    t[d] = (await navigator.permissions.query({ name: d })).state.toString();
                                } catch (l) {}
                            return t;
                        })(i),
                    ),
                )),
                (d = {}),
                i.forEach((l) => {
                    let i = (function (l) {
                        if (0 === l.length) return null;
                        let t = {};
                        l.forEach((l) => {
                            let d = String(l);
                            t[d] = (t[d] || 0) + 1;
                        });
                        let d = l[0],
                            i = 1;
                        return (
                            Object.keys(t).forEach((l) => {
                                t[l] > i && ((d = l), (i = t[l]));
                            }),
                            d
                        );
                    })(t.map((t) => (l in t ? t[l] : void 0)).filter((l) => void 0 !== l));
                    i && (d[l] = i);
                }),
                d
            );
        },
        plugins: async function () {
            let l = [];
            if (navigator.plugins)
                for (let t = 0; t < navigator.plugins.length; t++) {
                    let d = navigator.plugins[t];
                    l.push([d.name, d.filename, d.description].join("|"));
                }
            return new Promise((t) => {
                t({ plugins: l });
            });
        },
        screen: function () {
            return new Promise((l) => {
                let t, d, i, e;
                if ("u" < typeof matchMedia || "u" < typeof screen) return void l(null);
                let c = {
                    is_touchscreen: navigator.maxTouchPoints > 0,
                    maxTouchPoints: navigator.maxTouchPoints,
                    colorDepth: screen.colorDepth,
                    mediaMatches:
                        ((t = []),
                        Object.keys(
                            (d = {
                                "prefers-contrast": ["high", "more", "low", "less", "forced", "no-preference"],
                                "any-hover": ["hover", "none"],
                                "any-pointer": ["none", "coarse", "fine"],
                                pointer: ["none", "coarse", "fine"],
                                hover: ["hover", "none"],
                                update: ["fast", "slow"],
                                "inverted-colors": ["inverted", "none"],
                                "prefers-reduced-motion": ["reduce", "no-preference"],
                                "prefers-reduced-transparency": ["reduce", "no-preference"],
                                scripting: ["none", "initial-only", "enabled"],
                                "forced-colors": ["active", "none"],
                            }),
                        ).forEach((l) => {
                            d[l].forEach((d) => {
                                matchMedia(`(${l}: ${d})`).matches && t.push(`${l}: ${d}`);
                            });
                        }),
                        t),
                };
                l8() &&
                    navigator.maxTouchPoints > 0 &&
                    ((i = window.screen.width),
                    (e = window.screen.height),
                    (c.resolution = `${Math.max(i, e).toString()}x${Math.min(i, e).toString()}`)),
                    l(c);
            });
        },
        system: function () {
            return new Promise((l) => {
                let t = l6();
                l({
                    platform: window.navigator.platform,
                    productSub: navigator.productSub,
                    product: navigator.product,
                    useragent: navigator.userAgent,
                    hardwareConcurrency: navigator.hardwareConcurrency,
                    browser: { name: t.name, version: t.version },
                    mobile: l8(),
                    applePayVersion: (function () {
                        if ("https:" === window.location.protocol && "function" == typeof window.ApplePaySession)
                            try {
                                let l = window.ApplePaySession.supportsVersion;
                                for (let t = 15; t > 0; t--) if (l(t)) return t;
                            } catch (l) {}
                        return 0;
                    })(),
                    cookieEnabled: window.navigator.cookieEnabled,
                });
            });
        },
        webgl: async function () {
            "u" > typeof document &&
                (((tt = document.createElement("canvas")).width = 200),
                (tt.height = 100),
                (td = tt.getContext("webgl")));
            try {
                if (!td) throw Error("WebGL not supported");
                return {
                    commonPixelsHash: l0(
                        l_(
                            Array.from({ length: tl }, () =>
                                (function () {
                                    try {
                                        if (!td) throw Error("WebGL not supported");
                                        let l = td.createShader(td.VERTEX_SHADER),
                                            t = td.createShader(td.FRAGMENT_SHADER);
                                        if (!l || !t) throw Error("Failed to create shaders");
                                        if (
                                            (td.shaderSource(
                                                l,
                                                "\n          attribute vec2 position;\n          void main() {\n              gl_Position = vec4(position, 0.0, 1.0);\n          }\n      ",
                                            ),
                                            td.shaderSource(
                                                t,
                                                "\n          precision mediump float;\n          void main() {\n              gl_FragColor = vec4(0.812, 0.195, 0.553, 0.921); // Set line color\n          }\n      ",
                                            ),
                                            td.compileShader(l),
                                            !td.getShaderParameter(l, td.COMPILE_STATUS))
                                        )
                                            throw Error("Vertex shader compilation failed: " + td.getShaderInfoLog(l));
                                        if ((td.compileShader(t), !td.getShaderParameter(t, td.COMPILE_STATUS)))
                                            throw Error(
                                                "Fragment shader compilation failed: " + td.getShaderInfoLog(t),
                                            );
                                        let d = td.createProgram();
                                        if (!d) throw Error("Failed to create shader program");
                                        if (
                                            (td.attachShader(d, l),
                                            td.attachShader(d, t),
                                            td.linkProgram(d),
                                            !td.getProgramParameter(d, td.LINK_STATUS))
                                        )
                                            throw Error("Shader program linking failed: " + td.getProgramInfoLog(d));
                                        td.useProgram(d);
                                        let i = new Float32Array(548),
                                            e = (2 * Math.PI) / 137;
                                        for (let l = 0; l < 137; l++) {
                                            let t = l * e;
                                            (i[4 * l] = 0),
                                                (i[4 * l + 1] = 0),
                                                (i[4 * l + 2] = Math.cos(t) * (tt.width / 2)),
                                                (i[4 * l + 3] = Math.sin(t) * (tt.height / 2));
                                        }
                                        let c = td.createBuffer();
                                        td.bindBuffer(td.ARRAY_BUFFER, c),
                                            td.bufferData(td.ARRAY_BUFFER, i, td.STATIC_DRAW);
                                        let a = td.getAttribLocation(d, "position");
                                        td.enableVertexAttribArray(a),
                                            td.vertexAttribPointer(a, 2, td.FLOAT, !1, 0, 0),
                                            td.viewport(0, 0, tt.width, tt.height),
                                            td.clearColor(0, 0, 0, 1),
                                            td.clear(td.COLOR_BUFFER_BIT),
                                            td.drawArrays(td.LINES, 0, 274);
                                        let s = new Uint8ClampedArray(tt.width * tt.height * 4);
                                        return (
                                            td.readPixels(0, 0, tt.width, tt.height, td.RGBA, td.UNSIGNED_BYTE, s),
                                            new ImageData(s, tt.width, tt.height)
                                        );
                                    } catch (l) {
                                        return new ImageData(1, 1);
                                    } finally {
                                        td &&
                                            (td.bindBuffer(td.ARRAY_BUFFER, null),
                                            td.useProgram(null),
                                            td.viewport(0, 0, td.drawingBufferWidth, td.drawingBufferHeight),
                                            td.clearColor(0, 0, 0, 0));
                                    }
                                })(),
                            ),
                            tt.width,
                            tt.height,
                        ).data.toString(),
                    ).toString(),
                };
            } catch (l) {
                return { webgl: "unsupported" };
            }
        },
    },
    tn = {
        webrtc: async function () {
            return new Promise((l) => {
                try {
                    let t = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
                    if (!t) return void l({ supported: !1, error: "WebRTC not supported" });
                    let d = new t({ iceCandidatePoolSize: 1, iceServers: [] });
                    d.createDataChannel(""),
                        (async () => {
                            try {
                                let t = await d.createOffer({ offerToReceiveAudio: !0, offerToReceiveVideo: !0 });
                                await d.setLocalDescription(t);
                                let i = t.sdp || "",
                                    e = [
                                        ...new Set(
                                            (i.match(/extmap:\d+ [^\n\r]+/g) || []).map((l) =>
                                                l.replace(/extmap:\d+ /, ""),
                                            ),
                                        ),
                                    ].sort(),
                                    c = (l) => {
                                        let t = i.match(RegExp(`m=${l} [^\\s]+ [^\\s]+ ([^\\n\\r]+)`));
                                        return t ? t[1].split(" ") : [];
                                    },
                                    a = (l, t) =>
                                        t
                                            .map((t) => {
                                                let d = RegExp(`(rtpmap|fmtp|rtcp-fb):${t} (.+)`, "g"),
                                                    e = [...i.matchAll(d)];
                                                if (!e.length) return null;
                                                let c = {};
                                                return (
                                                    e.forEach((t) => {
                                                        let [d, i, e] = t,
                                                            a = e.split("/");
                                                        "rtpmap" === i
                                                            ? ((c.mimeType = `${l}/${a[0]}`),
                                                              (c.clockRate = +a[1]),
                                                              "audio" === l && (c.channels = +a[2] || 1))
                                                            : "rtcp-fb" === i
                                                              ? ((c.feedbackSupport = c.feedbackSupport || []),
                                                                c.feedbackSupport.push(e))
                                                              : "fmtp" === i && (c.sdpFmtpLine = e);
                                                    }),
                                                    c
                                                );
                                            })
                                            .filter(Boolean),
                                    s = a("audio", c("audio")),
                                    n = a("video", c("video")),
                                    Z = {
                                        audio: { count: s.length, hash: l0(ti(s)) },
                                        video: { count: n.length, hash: l0(ti(n)) },
                                        extensionsHash: l0(ti(e)),
                                    },
                                    b = await new Promise((l) => {
                                        let t = setTimeout(() => {
                                                d.removeEventListener("icecandidate", i),
                                                    d.close(),
                                                    l({ supported: !0, ...Z, timeout: !0 });
                                            }, 3e3),
                                            i = (e) => {
                                                let c = e.candidate;
                                                c &&
                                                    c.candidate &&
                                                    (clearTimeout(t),
                                                    d.removeEventListener("icecandidate", i),
                                                    d.close(),
                                                    l({ supported: !0, ...Z, candidateType: c.type || "" }));
                                            };
                                        d.addEventListener("icecandidate", i);
                                    });
                                l({ details: b, hash: l0(ti(b)) });
                            } catch (t) {
                                d.close(), l({ supported: !0, error: `WebRTC offer failed: ${t.message}` });
                            }
                        })();
                } catch (t) {
                    l({ supported: !1, error: `WebRTC error: ${t.message}` });
                }
            });
        },
        mathml: async function () {
            return new Promise((l) => {
                try {
                    l1(async ({ iframe: t }) => {
                        try {
                            let d, i;
                            if (
                                !(function (l) {
                                    try {
                                        let t = l.createElement("math");
                                        (t.innerHTML = "<mrow><mi>x</mi></mrow>"),
                                            (t.style.position = "absolute"),
                                            (t.style.visibility = "hidden"),
                                            l.body.appendChild(t);
                                        let d = t.getBoundingClientRect();
                                        return l.body.removeChild(t), d.width > 0 && d.height > 0;
                                    } catch (l) {
                                        return !1;
                                    }
                                })(t)
                            )
                                return void l({ supported: !1, error: "MathML not supported" });
                            let e = [
                                    ta(
                                        "integral",
                                        "<msubsup><mo>\u222B</mo><mi>a</mi><mi>b</mi></msubsup><mfrac><mrow><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow><mrow><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mfrac><mi>dx</mi>",
                                    ),
                                    ta(
                                        "fraction",
                                        "<mfrac><mrow><mi>\u03C0</mi><mo>\xd7</mo><msup><mi>r</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>\u03C3</mi></mrow></mfrac>",
                                    ),
                                    ta(
                                        "matrix",
                                        "<mo>[</mo><mtable><mtr><mtd><mi>\u03B1</mi></mtd><mtd><mi>\u03B2</mi></mtd></mtr><mtr><mtd><mi>\u03B3</mi></mtd><mtd><mi>\u03B4</mi></mtd></mtr></mtable><mo>]</mo>",
                                    ),
                                    ((d = "<mo>\u220F</mo>"),
                                    te.forEach((l, t) => {
                                        let i = 2 * t,
                                            e = tc.slice(i, i + 2);
                                        2 === e.length &&
                                            (d += `<mmultiscripts><mi>${l}</mi><none/><mi>${e[1]}</mi><mprescripts></mprescripts><mi>${e[0]}</mi><none/></mmultiscripts>`);
                                    }),
                                    ta(0, `<munderover><mmultiscripts>${d}</mmultiscripts></munderover>`)),
                                    ...((i = []),
                                    te.forEach((l, t) => {
                                        let d = 2 * t,
                                            e = tc.slice(d, d + 2);
                                        2 === e.length &&
                                            i.push(
                                                ta(
                                                    0,
                                                    `<mmultiscripts><mi>${l}</mi><none/><mi>${e[1]}</mi><mprescripts></mprescripts><mi>${e[0]}</mi><none/></mmultiscripts>`,
                                                ),
                                            );
                                    }),
                                    i),
                                ],
                                c = [],
                                a = "";
                            e.forEach((l, d) => {
                                let i = (function (l, t) {
                                    try {
                                        let d = t.createElement("math");
                                        (d.innerHTML = l.replace(/<\/?math>/g, "")),
                                            (d.style.whiteSpace = "nowrap"),
                                            (d.style.position = "absolute"),
                                            (d.style.visibility = "hidden"),
                                            (d.style.top = "-9999px"),
                                            t.body.appendChild(d);
                                        let i = d.getBoundingClientRect(),
                                            e = (t.defaultView || window).getComputedStyle(d),
                                            c = {
                                                dimensions: { width: i.width, height: i.height },
                                                fontInfo: {
                                                    fontFamily: e.fontFamily,
                                                    fontSize: e.fontSize,
                                                    fontWeight: e.fontWeight,
                                                    fontStyle: e.fontStyle,
                                                    lineHeight: e.lineHeight,
                                                    fontVariant: e.fontVariant || "normal",
                                                    fontStretch: e.fontStretch || "normal",
                                                    fontSizeAdjust: e.fontSizeAdjust || "none",
                                                    textRendering: e.textRendering || "auto",
                                                    fontFeatureSettings: e.fontFeatureSettings || "normal",
                                                    fontVariantNumeric: e.fontVariantNumeric || "normal",
                                                    fontKerning: e.fontKerning || "auto",
                                                },
                                            };
                                        return t.body.removeChild(d), c;
                                    } catch (l) {
                                        return { error: l.message };
                                    }
                                })(l, t);
                                c.push({ width: i.dimensions.width, height: i.dimensions.height }),
                                    0 === d && i.fontInfo && (a = l0(ti(i.fontInfo)));
                            });
                            let s = { fontStyleHash: a, dimensions: c };
                            l({ details: s, hash: l0(ti(s)) });
                        } catch (t) {
                            l({ supported: !1, error: `MathML error: ${t.message}` });
                        }
                    });
                } catch (t) {
                    l({ supported: !1, error: `MathML error: ${t.message}` });
                }
            });
        },
        speech: async function () {
            return new Promise((l) => {
                try {
                    if (
                        "u" < typeof window ||
                        !window.speechSynthesis ||
                        "function" != typeof window.speechSynthesis.getVoices
                    )
                        return void l({ supported: !1, error: "Speech Synthesis API not supported" });
                    let t = !1,
                        d = null,
                        i = (i) => {
                            if (!t) {
                                (t = !0), d && clearTimeout(d);
                                try {
                                    let t = i.map((l) => {
                                        let t = (l) => l.replace(/\\/g, "\\\\").replace(/,/g, "\\,");
                                        return [
                                            t(l.voiceURI || ""),
                                            t(l.name || ""),
                                            t(l.lang || ""),
                                            l.localService ? "1" : "0",
                                            l.default ? "1" : "0",
                                        ].join(",");
                                    });
                                    t.sort();
                                    let d = { voiceCount: i.length, voicesHash: l0(ti(t)) };
                                    l({ details: d, hash: l0(ti(d)) });
                                } catch (t) {
                                    l({ supported: !0, error: `Voice processing failed: ${t.message}` });
                                }
                            }
                        },
                        e = window.speechSynthesis.getVoices();
                    if (e.length > 0) return void i(e);
                    d = setTimeout(() => {
                        i(window.speechSynthesis.getVoices());
                    }, 800);
                    let c = () => {
                        window.speechSynthesis.removeEventListener("voiceschanged", c),
                            i(window.speechSynthesis.getVoices());
                    };
                    window.speechSynthesis.addEventListener("voiceschanged", c);
                } catch (t) {
                    l({ supported: !1, error: `Speech Synthesis error: ${t.message}` });
                }
            });
        },
    },
    tZ = {},
    tb = { timeout: "true" };
function tm(l, t) {
    var d;
    let i = l6();
    if ("unknown" === i.name && l.system && "object" == typeof l.system && !Array.isArray(l.system)) {
        let t = l.system.browser;
        t &&
            "object" == typeof t &&
            !Array.isArray(t) &&
            (i = { name: t.name || "unknown", version: t.version || "unknown" });
    }
    let e = i.name.toLowerCase(),
        c = parseInt(i.version.split(".")[0] || "0", 10),
        a = [...((null == t ? void 0 : t.exclude) || [])],
        s = (null == t ? void 0 : t.stabilize) || [],
        n = (null == t ? void 0 : t.include) || [];
    for (let l of s) {
        let t = lB[l];
        if (t)
            for (let l of t) {
                let t = !("browsers" in l),
                    i =
                        !t &&
                        (null == (d = l.browsers)
                            ? void 0
                            : d.some((l) => {
                                  let t = l.match(/(.+?)(>=)(\d+)/);
                                  if (t) {
                                      let [, l, , d] = t;
                                      return e === l && c >= parseInt(d, 10);
                                  }
                                  return e === l;
                              }));
                (t || i) && a.push(...l.exclude);
            }
    }
    return (function l(t, d = "") {
        let i = {};
        for (let [e, c] of Object.entries(t)) {
            let t = d ? `${d}.${e}` : e;
            if ("object" != typeof c || Array.isArray(c) || null === c) {
                let l = a.some((l) => t.startsWith(l)),
                    d = n.some((l) => t.startsWith(l));
                (l && !d) || (i[e] = c);
            } else {
                let d = l(c, t);
                Object.keys(d).length > 0 && (i[e] = d);
            }
        }
        return i;
    })(l);
}
let to = "visitor_id";
function tu(l) {
    return l.storage_property_name ? l.storage_property_name : l.property_name_factory(to);
}
let th = `${lQ}_${to}`;
function tW(l, t) {
    try {
        localStorage.setItem(tu(t), l);
    } catch (l) {}
}
let tG = "cache";
function tp(l) {
    try {
        let t = localStorage.getItem(l.property_name_factory(tG));
        return JSON.parse(t) || {};
    } catch (l) {}
    return {};
}
let tN = null,
    tM = null;
async function tX(l) {
    var t;
    if ("u" < typeof document || "u" < typeof window)
        return { thumbmark: "", components: {}, info: {}, version: "1.6.3", error: "Browser environment required" };
    let d = { ...lf, ...l },
        i = d.logging && !sessionStorage.getItem("_tmjs_l") && 1e-4 > Math.random(),
        { elapsed: e, resolvedComponents: c } = await tr({ ...ts, ...tZ }, d),
        a = {},
        s = {};
    if (i || d.experimental) {
        let { elapsed: l, resolvedComponents: t } = await tr(tn, d);
        (a = t), (s = l);
    }
    let n = d.api_key
            ? ((l, t) => {
                  if (l.cache_api_call) {
                      if (tM) return Promise.resolve(tM);
                      let t = (function (l) {
                          let t = tp(l);
                          if (t && t.apiResponse && t.apiResponseExpiry && Date.now() <= t.apiResponseExpiry)
                              return t.apiResponse;
                      })(l);
                      if (t) return Promise.resolve(t);
                      if (tN) return tN;
                  }
                  let d = `${l.api_endpoint || lP}/thumbmark`,
                      i = (function (l) {
                          try {
                              let t = tu(l),
                                  d = localStorage.getItem(t);
                              return d || t === th || ((d = localStorage.getItem(th)) && tW(d, l)), d;
                          } catch (l) {
                              return null;
                          }
                      })(l),
                      e = { components: t, options: l, clientHash: l0(ti(t)), version: "1.6.3" };
                  i && (e.visitorId = i);
                  let c = fetch(d, {
                          method: "POST",
                          headers: {
                              "x-api-key": l.api_key,
                              Authorization: "custom-authorized",
                              "Content-Type": "application/json",
                          },
                          body: JSON.stringify(e),
                      })
                          .then((l) => {
                              if (!l.ok) {
                                  if (403 === l.status) throw Error("INVALID_API_KEY");
                                  throw Error(`HTTP error! status: ${l.status}`);
                              }
                              return l.json();
                          })
                          .then(
                              (t) => (
                                  t.visitorId && t.visitorId !== i && tW(t.visitorId, l),
                                  (tM = t),
                                  (function (l, t) {
                                      if (l.cache_api_call && l.cache_lifetime_in_ms) {
                                          var d = {
                                              apiResponseExpiry:
                                                  l.cache_lifetime_in_ms > 2592e5
                                                      ? Date.now() + 2592e5
                                                      : Date.now() + l.cache_lifetime_in_ms,
                                              apiResponse: t,
                                          };
                                          let i = { ...tp(l), ...d };
                                          try {
                                              localStorage.setItem(l.property_name_factory(tG), JSON.stringify(i));
                                          } catch (l) {}
                                      }
                                  })(l, t),
                                  (tN = null),
                                  t
                              ),
                          )
                          .catch((l) => {
                              if (
                                  (console.error("Error fetching pro data", l),
                                  (tN = null),
                                  "INVALID_API_KEY" === l.message)
                              )
                                  throw l;
                              return null;
                          }),
                      a = l.timeout || 5e3;
                  return (tN = Promise.race([
                      c,
                      new Promise((t) => {
                          setTimeout(() => {
                              let d = tp(l);
                              d && d.apiResponse
                                  ? t(d.apiResponse)
                                  : t({ info: { timed_out: !0 }, ...(i && { visitorId: i }) });
                          }, a);
                      }),
                  ]));
              })(d, c)
            : null,
        Z = null;
    if (n)
        try {
            Z = await n;
        } catch (l) {
            if (l instanceof Error && "INVALID_API_KEY" === l.message)
                return {
                    error: "Invalid API key or quota exceeded",
                    components: {},
                    info: {},
                    version: "1.6.3",
                    thumbmark: "",
                };
            throw l;
        }
    let b = { ...e, ...s },
        m = d.performance ? { elapsed: b } : {},
        o = tm((null == Z ? void 0 : Z.components) || {}, d),
        u = { ...c, ...o },
        h = (null == Z ? void 0 : Z.info) || { uniqueness: { score: "api only" } },
        W = null != (t = null == Z ? void 0 : Z.thumbmark) ? t : l0(ti(u));
    return (
        i &&
            (async function (l, t, d, i = {}) {
                var e;
                let c = `${lP}/log`,
                    a = {
                        thumbmark: l,
                        components: t,
                        experimental: i,
                        version: "1.6.3",
                        options: d,
                        path: null == (e = null == window ? void 0 : window.location) ? void 0 : e.pathname,
                    };
                sessionStorage.setItem("_tmjs_l", "1");
                try {
                    await fetch(c, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(a),
                    });
                } catch (l) {}
            })(W, u, d, a).catch(() => {}),
        {
            ...((null == Z ? void 0 : Z.visitorId) && { visitorId: Z.visitorId }),
            thumbmark: W,
            components: u,
            info: h,
            version: "1.6.3",
            ...m,
            ...(Object.keys(a).length > 0 && d.experimental && { experimental: a }),
            ...((null == Z ? void 0 : Z.requestId) && { requestId: Z.requestId }),
        }
    );
}
async function tr(l, t) {
    var d, i;
    let e = { ...lf, ...t },
        c = Object.entries(l)
            .filter(([l]) => {
                var t;
                return !(null == (t = null == e ? void 0 : e.exclude) ? void 0 : t.includes(l));
            })
            .filter(([l]) => {
                var t, d, i, c;
                return (null == (t = null == e ? void 0 : e.include) ? void 0 : t.some((l) => l.includes(".")))
                    ? null == (d = null == e ? void 0 : e.include)
                        ? void 0
                        : d.some((t) => t.startsWith(l))
                    : 0 === (null == (i = null == e ? void 0 : e.include) ? void 0 : i.length) ||
                          (null == (c = null == e ? void 0 : e.include) ? void 0 : c.includes(l));
            }),
        a = c.map(([l]) => l),
        s = await ((d = c.map(([l, d]) => d(t))),
        (i = (null == e ? void 0 : e.timeout) || 5e3),
        Promise.all(
            d.map((l) => {
                let t = performance.now();
                return Promise.race([
                    l.then((l) => ({ value: l, elapsed: performance.now() - t })),
                    new Promise((l) => {
                        setTimeout(() => l(tb), i);
                    }).then((l) => ({ value: l, elapsed: performance.now() - t })),
                ]);
            }),
        )),
        n = {},
        Z = {};
    return (
        s.forEach((l, t) => {
            var d;
            null != l.value && ((Z[a[t]] = l.value), (n[a[t]] = null != (d = l.elapsed) ? d : 0));
        }),
        { elapsed: n, resolvedComponents: tm(Z, e) }
    );
}
var ty = class {
    constructor(l) {
        this.options = { ...lf, ...l };
    }
    async get(l) {
        return tX({ ...this.options, ...l });
    }
    getVersion() {
        return "1.6.3";
    }
    includeComponent(l, t) {
        tZ[l] = t;
    }
};
async function tY() {
    return (await new ty().get()).thumbmark;
}
let tT = ["callPhantom", "_phantom", "phantom", "__nightmare", "domAutomation", "domAutomationController"],
    tV = ["webdriver"];
function tL(l) {
    if (
        (function (l) {
            for (let t of tT) if (l.getWindowProperty(t)) return !0;
            for (let t of tV) if (l.getNavigatorProperty(t)) return !0;
            return !1;
        })(l) ||
        !lH().browser.name
    )
        return !0;
    let t = l.getMaxTouchPoints(),
        d = t > 0 || l.hasOnTouchStart();
    if (d && 1 !== t) return !1;
    let i = (0, c.t)();
    return !!(
        (d &&
            ((function (l) {
                var t;
                let d = (0, c.t)().toLowerCase();
                if (d.indexOf("edge/") >= 0 || d.indexOf("iemobile/") >= 0 || d.indexOf("opera mini") >= 0) return !1;
                let i =
                        (t = d).indexOf("edge/") >= 0 || t.indexOf("iemobile/") >= 0 || t.indexOf("opera mini") >= 0
                            ? "Other"
                            : t.indexOf("firefox/") >= 0
                              ? "Firefox"
                              : t.indexOf("opera/") >= 0 || t.indexOf(" opr/") >= 0
                                ? "Opera"
                                : t.indexOf("chrome/") >= 0
                                  ? "Chrome"
                                  : t.indexOf("safari/") >= 0
                                    ? t.indexOf("android 1.") >= 0 ||
                                      t.indexOf("android 2.") >= 0 ||
                                      t.indexOf("android 3.") >= 0 ||
                                      t.indexOf("android 4.") >= 0
                                        ? "AOSP"
                                        : "Safari"
                                    : t.indexOf("trident/") >= 0
                                      ? "Internet Explorer"
                                      : "Other",
                    e = l.getNavigatorProductSub();
                if (("Chrome" === i || "Safari" === i || "Opera" === i) && "20030107" !== e) return !0;
                let a = l.getEvalToStringLength();
                return (
                    (37 === a && "Safari" !== i && "Firefox" !== i && "Other" !== i) ||
                    (39 === a && "Internet Explorer" !== i && "Other" !== i) ||
                    (33 === a && "Chrome" !== i && "AOSP" !== i && "Opera" !== i && "Other" !== i) ||
                    (l.tryFirefoxToSource() && "Firefox" !== i && "Other" !== i)
                );
            })(l) ||
                i.includes("Mobile"))) ||
        ((0, e.r)(i) && !l.hasOnTouchStart())
    );
}
