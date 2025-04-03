!(function (r, n) {
    var i = 'function',
        o = 'undefined',
        a = 'object',
        u = 'string',
        s = 'major',
        c = 'model',
        l = 'name',
        f = 'type',
        p = 'vendor',
        h = 'version',
        d = 'architecture',
        g = 'console',
        y = 'mobile',
        v = 'tablet',
        m = 'smarttv',
        _ = 'wearable',
        b = 'embedded',
        S = 'Amazon',
        w = 'Apple',
        x = 'ASUS',
        k = 'BlackBerry',
        E = 'Browser',
        C = 'Chrome',
        D = 'Firefox',
        O = 'Google',
        K = 'Huawei',
        T = 'Microsoft',
        M = 'Motorola',
        A = 'Opera',
        I = 'Samsung',
        B = 'Sharp',
        L = 'Sony',
        R = 'Xiaomi',
        F = 'Zebra',
        N = 'Facebook',
        P = 'Chromium OS',
        z = 'Mac OS',
        j = function (t, e) {
            var r = {};
            for (var n in t) e[n] && e[n].length % 2 == 0 ? (r[n] = e[n].concat(t[n])) : (r[n] = t[n]);
            return r;
        },
        U = function (t) {
            for (var e = {}, r = 0; r < t.length; r++) e[t[r].toUpperCase()] = t[r];
            return e;
        },
        q = function (t, e) {
            return typeof t === u && -1 !== H(e).indexOf(H(t));
        },
        H = function (t) {
            return t.toLowerCase();
        },
        W = function (t, e) {
            if (typeof t === u) return (t = t.replace(/^\s\s*/, '')), typeof e === o ? t : t.substring(0, 350);
        },
        V = function (t, e) {
            for (var r, o, u, s, c, l, f = 0; f < e.length && !c; ) {
                var p = e[f],
                    h = e[f + 1];
                for (r = o = 0; r < p.length && !c && p[r]; ) if ((c = p[r++].exec(t))) for (u = 0; u < h.length; u++) (l = c[++o]), typeof (s = h[u]) === a && s.length > 0 ? (2 === s.length ? (typeof s[1] == i ? (this[s[0]] = s[1].call(this, l)) : (this[s[0]] = s[1])) : 3 === s.length ? (typeof s[1] !== i || (s[1].exec && s[1].test) ? (this[s[0]] = l ? l.replace(s[1], s[2]) : void 0) : (this[s[0]] = l ? s[1].call(this, l, s[2]) : void 0)) : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : n)) : (this[s] = l || n);
                f += 2;
            }
        },
        G = function (t, e) {
            for (var r in e)
                if (typeof e[r] === a && e[r].length > 0) {
                    for (var i = 0; i < e[r].length; i++) if (q(e[r][i], t)) return '?' === r ? n : r;
                } else if (q(e[r], t)) return '?' === r ? n : r;
            return t;
        },
        J = {
            ME: '4.90',
            'NT 3.11': 'NT3.51',
            'NT 4.0': 'NT4.0',
            2000: 'NT 5.0',
            XP: ['NT 5.1', 'NT 5.2'],
            Vista: 'NT 6.0',
            7: 'NT 6.1',
            8: 'NT 6.2',
            8.1: 'NT 6.3',
            10: ['NT 6.4', 'NT 10.0'],
            RT: 'ARM'
        },
        $ = {
            browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [h, [l, 'Chrome']],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [h, [l, 'Edge']],
                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                [l, h],
                [/opios[\/ ]+([\w\.]+)/i],
                [h, [l, A + ' Mini']],
                [/\bopr\/([\w\.]+)/i],
                [h, [l, A]],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                [l, h],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [h, [l, 'UC' + E]],
                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                [h, [l, 'WeChat(Win) Desktop']],
                [/micromessenger\/([\w\.]+)/i],
                [h, [l, 'WeChat']],
                [/konqueror\/([\w\.]+)/i],
                [h, [l, 'Konqueror']],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [h, [l, 'IE']],
                [/ya(?:search)?browser\/([\w\.]+)/i],
                [h, [l, 'Yandex']],
                [/(avast|avg)\/([\w\.]+)/i],
                [[l, /(.+)/, '$1 Secure ' + E], h],
                [/\bfocus\/([\w\.]+)/i],
                [h, [l, D + ' Focus']],
                [/\bopt\/([\w\.]+)/i],
                [h, [l, A + ' Touch']],
                [/coc_coc\w+\/([\w\.]+)/i],
                [h, [l, 'Coc Coc']],
                [/dolfin\/([\w\.]+)/i],
                [h, [l, 'Dolphin']],
                [/coast\/([\w\.]+)/i],
                [h, [l, A + ' Coast']],
                [/miuibrowser\/([\w\.]+)/i],
                [h, [l, 'MIUI ' + E]],
                [/fxios\/([-\w\.]+)/i],
                [h, [l, D]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[l, '360 ' + E]],
                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                [[l, /(.+)/, '$1 ' + E], h],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[l, /_/g, ' '], h],
                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                [l, h],
                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                [l],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[l, N], h],
                [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                [l, h],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [h, [l, 'GSA']],
                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                [h, [l, 'TikTok']],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [h, [l, C + ' Headless']],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[l, C + ' WebView'], h],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [h, [l, 'Android ' + E]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [l, h],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [h, [l, 'Mobile Safari']],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [h, l],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                    l,
                    [
                        h,
                        G,
                        {
                            '1.0': '/8',
                            1.2: '/1',
                            1.3: '/3',
                            '2.0': '/412',
                            '2.0.2': '/416',
                            '2.0.3': '/417',
                            '2.0.4': '/419',
                            '?': '/'
                        }
                    ]
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [l, h],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[l, 'Netscape'], h],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [h, [l, D + ' Reality']],
                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                [l, h],
                [/(cobalt)\/([\w\.]+)/i],
                [l, [h, /master.|lts./, '']]
            ],
            cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[d, 'amd64']], [/(ia32(?=;))/i], [[d, H]], [/((?:i[346]|x)86)[;\)]/i], [[d, 'ia32']], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[d, 'arm64']], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[d, 'armhf']], [/windows (ce|mobile); ppc;/i], [[d, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[d, /ower/, '', H]], [/(sun4\w)[;\)]/i], [[d, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[d, H]]],
            device: [
                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                [c, [p, I], [f, v]],
                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                [c, [p, I], [f, y]],
                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                [c, [p, w], [f, y]],
                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                [c, [p, w], [f, v]],
                [/(macintosh);/i],
                [c, [p, w]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [c, [p, B], [f, y]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [c, [p, K], [f, v]],
                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                [c, [p, K], [f, y]],
                [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                [
                    [c, /_/g, ' '],
                    [p, R],
                    [f, y]
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                    [c, /_/g, ' '],
                    [p, R],
                    [f, v]
                ],
                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                [c, [p, 'OPPO'], [f, y]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [c, [p, 'Vivo'], [f, y]],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [c, [p, 'Realme'], [f, y]],
                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                [c, [p, M], [f, y]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [c, [p, M], [f, v]],
                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                [c, [p, 'LG'], [f, v]],
                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                [c, [p, 'LG'], [f, y]],
                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                [c, [p, 'Lenovo'], [f, v]],
                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                [
                    [c, /_/g, ' '],
                    [p, 'Nokia'],
                    [f, y]
                ],
                [/(pixel c)\b/i],
                [c, [p, O], [f, v]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [c, [p, O], [f, y]],
                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [c, [p, L], [f, y]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                    [c, 'Xperia Tablet'],
                    [p, L],
                    [f, v]
                ],
                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                [c, [p, 'OnePlus'], [f, y]],
                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                [c, [p, S], [f, v]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                    [c, /(.+)/g, 'Fire Phone $1'],
                    [p, S],
                    [f, y]
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [c, p, [f, v]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [c, [p, k], [f, y]],
                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                [c, [p, x], [f, v]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [c, [p, x], [f, y]],
                [/(nexus 9)/i],
                [c, [p, 'HTC'], [f, v]],
                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                [p, [c, /_/g, ' '], [f, y]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [c, [p, 'Acer'], [f, v]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [c, [p, 'Meizu'], [f, y]],
                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                [p, c, [f, y]],
                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                [p, c, [f, v]],
                [/(surface duo)/i],
                [c, [p, T], [f, v]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [c, [p, 'Fairphone'], [f, y]],
                [/(u304aa)/i],
                [c, [p, 'AT&T'], [f, y]],
                [/\bsie-(\w*)/i],
                [c, [p, 'Siemens'], [f, y]],
                [/\b(rct\w+) b/i],
                [c, [p, 'RCA'], [f, v]],
                [/\b(venue[\d ]{2,7}) b/i],
                [c, [p, 'Dell'], [f, v]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [c, [p, 'Verizon'], [f, v]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [c, [p, 'Barnes & Noble'], [f, v]],
                [/\b(tm\d{3}\w+) b/i],
                [c, [p, 'NuVision'], [f, v]],
                [/\b(k88) b/i],
                [c, [p, 'ZTE'], [f, v]],
                [/\b(nx\d{3}j) b/i],
                [c, [p, 'ZTE'], [f, y]],
                [/\b(gen\d{3}) b.+49h/i],
                [c, [p, 'Swiss'], [f, y]],
                [/\b(zur\d{3}) b/i],
                [c, [p, 'Swiss'], [f, v]],
                [/\b((zeki)?tb.*\b) b/i],
                [c, [p, 'Zeki'], [f, v]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[p, 'Dragon Touch'], c, [f, v]],
                [/\b(ns-?\w{0,9}) b/i],
                [c, [p, 'Insignia'], [f, v]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [c, [p, 'NextBook'], [f, v]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[p, 'Voice'], c, [f, y]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[p, 'LvTel'], c, [f, y]],
                [/\b(ph-1) /i],
                [c, [p, 'Essential'], [f, y]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [c, [p, 'Envizen'], [f, v]],
                [/\b(trio[-\w\. ]+) b/i],
                [c, [p, 'MachSpeed'], [f, v]],
                [/\btu_(1491) b/i],
                [c, [p, 'Rotor'], [f, v]],
                [/(shield[\w ]+) b/i],
                [c, [p, 'Nvidia'], [f, v]],
                [/(sprint) (\w+)/i],
                [p, c, [f, y]],
                [/(kin\.[onetw]{3})/i],
                [
                    [c, /\./g, ' '],
                    [p, T],
                    [f, y]
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [c, [p, F], [f, v]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [c, [p, F], [f, y]],
                [/smart-tv.+(samsung)/i],
                [p, [f, m]],
                [/hbbtv.+maple;(\d+)/i],
                [
                    [c, /^/, 'SmartTV'],
                    [p, I],
                    [f, m]
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                    [p, 'LG'],
                    [f, m]
                ],
                [/(apple) ?tv/i],
                [p, [c, w + ' TV'], [f, m]],
                [/crkey/i],
                [
                    [c, C + 'cast'],
                    [p, O],
                    [f, m]
                ],
                [/droid.+aft(\w+)( bui|\))/i],
                [c, [p, S], [f, m]],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [c, [p, B], [f, m]],
                [/(bravia[\w ]+)( bui|\))/i],
                [c, [p, L], [f, m]],
                [/(mitv-\w{5}) bui/i],
                [c, [p, R], [f, m]],
                [/Hbbtv.*(technisat) (.*);/i],
                [p, c, [f, m]],
                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                [
                    [p, W],
                    [c, W],
                    [f, m]
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[f, m]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [p, c, [f, g]],
                [/droid.+; (shield) bui/i],
                [c, [p, 'Nvidia'], [f, g]],
                [/(playstation [345portablevi]+)/i],
                [c, [p, L], [f, g]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [c, [p, T], [f, g]],
                [/((pebble))app/i],
                [p, c, [f, _]],
                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                [c, [p, w], [f, _]],
                [/droid.+; (glass) \d/i],
                [c, [p, O], [f, _]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [c, [p, F], [f, _]],
                [/(quest( 2| pro)?)/i],
                [c, [p, N], [f, _]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [p, [f, b]],
                [/(aeobc)\b/i],
                [c, [p, S], [f, b]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [c, [f, y]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [c, [f, v]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[f, v]],
                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                [[f, y]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [c, [p, 'Generic']]
            ],
            engine: [[/windows.+ edge\/([\w\.]+)/i], [h, [l, 'EdgeHTML']], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [h, [l, 'Blink']], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [l, h], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [h, l]],
            os: [
                [/microsoft (windows) (vista|xp)/i],
                [l, h],
                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                [l, [h, G, J]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                    [l, 'Windows'],
                    [h, G, J]
                ],
                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                [
                    [h, /_/g, '.'],
                    [l, 'iOS']
                ],
                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                [
                    [l, z],
                    [h, /_/g, '.']
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [h, l],
                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                [l, h],
                [/\(bb(10);/i],
                [h, [l, k]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [h, [l, 'Symbian']],
                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                [h, [l, D + ' OS']],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [h, [l, 'webOS']],
                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                [h, [l, 'watchOS']],
                [/crkey\/([\d\.]+)/i],
                [h, [l, C + 'cast']],
                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                [[l, P], h],
                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                [l, h],
                [/(sunos) ?([\w\.\d]*)/i],
                [[l, 'Solaris'], h],
                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                [l, h]
            ]
        },
        X = function (t, e) {
            if ((typeof t === a && ((e = t), (t = n)), !(this instanceof X))) return new X(t, e).getResult();
            var g = typeof r !== o && r.navigator ? r.navigator : n,
                m = t || (g && g.userAgent ? g.userAgent : ''),
                _ = g && g.userAgentData ? g.userAgentData : n,
                b = e ? j($, e) : $,
                S = g && g.userAgent == m;
            return (
                (this.getBrowser = function () {
                    var t,
                        e = {};
                    return (e[l] = n), (e[h] = n), V.call(e, m, b.browser), (e[s] = typeof (t = e[h]) === u ? t.replace(/[^\d\.]/g, '').split('.')[0] : n), S && g && g.brave && typeof g.brave.isBrave == i && (e[l] = 'Brave'), e;
                }),
                (this.getCPU = function () {
                    var t = {};
                    return (t[d] = n), V.call(t, m, b.cpu), t;
                }),
                (this.getDevice = function () {
                    var t = {};
                    return (t[p] = n), (t[c] = n), (t[f] = n), V.call(t, m, b.device), S && !t[f] && _ && _.mobile && (t[f] = y), S && 'Macintosh' == t[c] && g && typeof g.standalone !== o && g.maxTouchPoints && g.maxTouchPoints > 2 && ((t[c] = 'iPad'), (t[f] = v)), t;
                }),
                (this.getEngine = function () {
                    var t = {};
                    return (t[l] = n), (t[h] = n), V.call(t, m, b.engine), t;
                }),
                (this.getOS = function () {
                    var t = {};
                    return (t[l] = n), (t[h] = n), V.call(t, m, b.os), S && !t[l] && _ && 'Unknown' != _.platform && (t[l] = _.platform.replace(/chrome os/i, P).replace(/macos/i, z)), t;
                }),
                (this.getResult = function () {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    };
                }),
                (this.getUA = function () {
                    return m;
                }),
                (this.setUA = function (t) {
                    return (m = typeof t === u && t.length > 350 ? W(t, 350) : t), this;
                }),
                this.setUA(m),
                this
            );
        };
    (X.VERSION = '0.7.36'),
        (X.BROWSER = U([l, h, s])),
        (X.CPU = U([d])),
        (X.DEVICE = U([c, p, f, g, y, m, v, _, b])),
        (X.ENGINE = X.OS = U([l, h])),
        typeof e !== o
            ? (t.exports && (e = t.exports = X), (e.UAParser = X))
            : typeof define === i && define.amd
              ? define(function () {
                    return X;
                })
              : typeof r !== o && (r.UAParser = X);
    var Z = typeof r !== o && (r.jQuery || r.Zepto);
    if (Z && !Z.ua) {
        var Y = new X();
        (Z.ua = Y.getResult()),
            (Z.ua.get = function () {
                return Y.getUA();
            }),
            (Z.ua.set = function (t) {
                Y.setUA(t);
                var e = Y.getResult();
                for (var r in e) Z.ua[r] = e[r];
            });
    }
})('object' == typeof window ? window : this);
