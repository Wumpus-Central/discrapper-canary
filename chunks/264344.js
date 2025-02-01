(e = n.nmd(e)),
    function () {
        var i = {
                function: !0,
                object: !0
            },
            r = (i[typeof window] && window) || this,
            a = i[typeof t] && t,
            s = i.object && e && !e.nodeType && e,
            o = a && s && 'object' == typeof n.g && n.g;
        o && (o.global === o || o.window === o || o.self === o) && (r = o);
        var l = 9007199254740991,
            u = /\bOpera/,
            c = Object.prototype,
            d = c.hasOwnProperty,
            f = c.toString;
        function _(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function p(e, t, n) {
            var i = {
                '10.0': '10',
                6.4: '10 Technical Preview',
                6.3: '8.1',
                6.2: '8',
                6.1: 'Server 2008 R2 / 7',
                '6.0': 'Server 2008 / Vista',
                5.2: 'Server 2003 / XP 64-bit',
                5.1: 'XP',
                5.01: '2000 SP1',
                '5.0': '2000',
                '4.0': 'NT',
                '4.90': 'ME'
            };
            return (
                t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (i = i[/[\d.]+$/.exec(e)]) && (e = 'Windows ' + i),
                (e = String(e)),
                t && n && (e = e.replace(RegExp(t, 'i'), n)),
                (e = m(
                    e
                        .replace(/ ce$/i, ' CE')
                        .replace(/\bhpw/i, 'web')
                        .replace(/\bMacintosh\b/, 'Mac OS')
                        .replace(/_PowerPC\b/i, ' OS')
                        .replace(/\b(OS X) [^ \d]+/i, '$1')
                        .replace(/\bMac (OS X)\b/, '$1')
                        .replace(/\/(\d)/, ' $1')
                        .replace(/_/g, '.')
                        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
                        .replace(/\bx86\.64\b/gi, 'x86_64')
                        .replace(/\b(Windows Phone) OS\b/, '$1')
                        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
                        .split(' on ')[0]
                ))
            );
        }
        function h(e, t) {
            var n = -1,
                i = e ? e.length : 0;
            if ('number' == typeof i && i > -1 && i <= l) for (; ++n < i; ) t(e[n], n, e);
            else g(e, t);
        }
        function m(e) {
            return (e = T(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : _(e);
        }
        function g(e, t) {
            for (var n in e) d.call(e, n) && t(e[n], n, e);
        }
        function E(e) {
            return null == e ? _(e) : f.call(e).slice(8, -1);
        }
        function v(e, t) {
            var n = null != e ? typeof e[t] : 'number';
            return !/^(?:boolean|number|string|undefined)$/.test(n) && ('object' != n || !!e[t]);
        }
        function y(e) {
            return String(e).replace(/([ -])(?!$)/g, '$1?');
        }
        function I(e, t) {
            var n = null;
            return (
                h(e, function (i, r) {
                    n = t(n, i, r, e);
                }),
                n
            );
        }
        function T(e) {
            return String(e).replace(/^ +| +$/g, '');
        }
        function b(e) {
            var t,
                n,
                i = r,
                a = e && 'object' == typeof e && 'String' != E(e);
            a && ((i = e), (e = null));
            var s = i.navigator || {},
                o = s.userAgent || '';
            e || (e = o);
            var l = a ? !!s.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(f.toString()),
                c = 'Object',
                d = a ? c : 'ScriptBridgingProxyObject',
                _ = a ? c : 'Environment',
                h = a && i.java ? 'JavaPackage' : E(i.java),
                S = a ? c : 'RuntimeObject',
                A = /\bJava/.test(h) && i.java,
                N = A && E(i.environment) == _,
                C = A ? 'a' : 'α',
                R = A ? 'b' : 'β',
                O = i.document || {},
                D = i.operamini || i.opera,
                x = u.test((x = a && D ? D['[[Class]]'] : E(D))) ? x : (D = null),
                L = e,
                P = [],
                w = null,
                M = e == o,
                k = M && D && 'function' == typeof D.version && D.version(),
                U = V([
                    {
                        label: 'EdgeHTML',
                        pattern: 'Edge'
                    },
                    'Trident',
                    {
                        label: 'WebKit',
                        pattern: 'AppleWebKit'
                    },
                    'iCab',
                    'Presto',
                    'NetFront',
                    'Tasman',
                    'KHTML',
                    'Gecko'
                ]),
                G = H([
                    'Adobe AIR',
                    'Arora',
                    'Avant Browser',
                    'Breach',
                    'Camino',
                    'Electron',
                    'Epiphany',
                    'Fennec',
                    'Flock',
                    'Galeon',
                    'GreenBrowser',
                    'iCab',
                    'Iceweasel',
                    'K-Meleon',
                    'Konqueror',
                    'Lunascape',
                    'Maxthon',
                    {
                        label: 'Microsoft Edge',
                        pattern: '(?:Edge|Edg|EdgA|EdgiOS)'
                    },
                    'Midori',
                    'Nook Browser',
                    'PaleMoon',
                    'PhantomJS',
                    'Raven',
                    'Rekonq',
                    'RockMelt',
                    {
                        label: 'Samsung Internet',
                        pattern: 'SamsungBrowser'
                    },
                    'SeaMonkey',
                    {
                        label: 'Silk',
                        pattern: '(?:Cloud9|Silk-Accelerated)'
                    },
                    'Sleipnir',
                    'SlimBrowser',
                    {
                        label: 'SRWare Iron',
                        pattern: 'Iron'
                    },
                    'Sunrise',
                    'Swiftfox',
                    'Vivaldi',
                    'Waterfox',
                    'WebPositive',
                    {
                        label: 'Yandex Browser',
                        pattern: 'YaBrowser'
                    },
                    {
                        label: 'UC Browser',
                        pattern: 'UCBrowser'
                    },
                    'Opera Mini',
                    {
                        label: 'Opera Mini',
                        pattern: 'OPiOS'
                    },
                    'Opera',
                    {
                        label: 'Opera',
                        pattern: 'OPR'
                    },
                    'Chromium',
                    'Chrome',
                    {
                        label: 'Chrome',
                        pattern: '(?:HeadlessChrome)'
                    },
                    {
                        label: 'Chrome Mobile',
                        pattern: '(?:CriOS|CrMo)'
                    },
                    {
                        label: 'Firefox',
                        pattern: '(?:Firefox|Minefield)'
                    },
                    {
                        label: 'Firefox for iOS',
                        pattern: 'FxiOS'
                    },
                    {
                        label: 'IE',
                        pattern: 'IEMobile'
                    },
                    {
                        label: 'IE',
                        pattern: 'MSIE'
                    },
                    'Safari'
                ]),
                B = W([
                    {
                        label: 'BlackBerry',
                        pattern: 'BB10'
                    },
                    'BlackBerry',
                    {
                        label: 'Galaxy S',
                        pattern: 'GT-I9000'
                    },
                    {
                        label: 'Galaxy S2',
                        pattern: 'GT-I9100'
                    },
                    {
                        label: 'Galaxy S3',
                        pattern: 'GT-I9300'
                    },
                    {
                        label: 'Galaxy S4',
                        pattern: 'GT-I9500'
                    },
                    {
                        label: 'Galaxy S5',
                        pattern: 'SM-G900'
                    },
                    {
                        label: 'Galaxy S6',
                        pattern: 'SM-G920'
                    },
                    {
                        label: 'Galaxy S6 Edge',
                        pattern: 'SM-G925'
                    },
                    {
                        label: 'Galaxy S7',
                        pattern: 'SM-G930'
                    },
                    {
                        label: 'Galaxy S7 Edge',
                        pattern: 'SM-G935'
                    },
                    'Google TV',
                    'Lumia',
                    'iPad',
                    'iPod',
                    'iPhone',
                    'Kindle',
                    {
                        label: 'Kindle Fire',
                        pattern: '(?:Cloud9|Silk-Accelerated)'
                    },
                    'Nexus',
                    'Nook',
                    'PlayBook',
                    'PlayStation Vita',
                    'PlayStation',
                    'TouchPad',
                    'Transformer',
                    {
                        label: 'Wii U',
                        pattern: 'WiiU'
                    },
                    'Wii',
                    'Xbox One',
                    {
                        label: 'Xbox 360',
                        pattern: 'Xbox'
                    },
                    'Xoom'
                ]),
                Z = j({
                    Apple: {
                        iPad: 1,
                        iPhone: 1,
                        iPod: 1
                    },
                    Alcatel: {},
                    Archos: {},
                    Amazon: {
                        Kindle: 1,
                        'Kindle Fire': 1
                    },
                    Asus: { Transformer: 1 },
                    'Barnes & Noble': { Nook: 1 },
                    BlackBerry: { PlayBook: 1 },
                    Google: {
                        'Google TV': 1,
                        Nexus: 1
                    },
                    HP: { TouchPad: 1 },
                    HTC: {},
                    Huawei: {},
                    Lenovo: {},
                    LG: {},
                    Microsoft: {
                        Xbox: 1,
                        'Xbox One': 1
                    },
                    Motorola: { Xoom: 1 },
                    Nintendo: {
                        'Wii U': 1,
                        Wii: 1
                    },
                    Nokia: { Lumia: 1 },
                    Oppo: {},
                    Samsung: {
                        'Galaxy S': 1,
                        'Galaxy S2': 1,
                        'Galaxy S3': 1,
                        'Galaxy S4': 1
                    },
                    Sony: {
                        PlayStation: 1,
                        'PlayStation Vita': 1
                    },
                    Xiaomi: {
                        Mi: 1,
                        Redmi: 1
                    }
                }),
                F = Y([
                    'Windows Phone',
                    'KaiOS',
                    'Android',
                    'CentOS',
                    {
                        label: 'Chrome OS',
                        pattern: 'CrOS'
                    },
                    'Debian',
                    {
                        label: 'DragonFly BSD',
                        pattern: 'DragonFly'
                    },
                    'Fedora',
                    'FreeBSD',
                    'Gentoo',
                    'Haiku',
                    'Kubuntu',
                    'Linux Mint',
                    'OpenBSD',
                    'Red Hat',
                    'SuSE',
                    'Ubuntu',
                    'Xubuntu',
                    'Cygwin',
                    'Symbian OS',
                    'hpwOS',
                    'webOS ',
                    'webOS',
                    'Tablet OS',
                    'Tizen',
                    'Linux',
                    'Mac OS X',
                    'Macintosh',
                    'Mac',
                    'Windows 98;',
                    'Windows '
                ]);
            function V(t) {
                return I(t, function (t, n) {
                    return t || (RegExp('\\b' + (n.pattern || y(n)) + '\\b', 'i').exec(e) && (n.label || n));
                });
            }
            function j(t) {
                return I(t, function (t, n, i) {
                    return t || ((n[B] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(B)] || RegExp('\\b' + y(i) + '(?:\\b|\\w*\\d)', 'i').exec(e)) && i);
                });
            }
            function H(t) {
                return I(t, function (t, n) {
                    return t || (RegExp('\\b' + (n.pattern || y(n)) + '\\b', 'i').exec(e) && (n.label || n));
                });
            }
            function Y(t) {
                return I(t, function (t, n) {
                    var i = n.pattern || y(n);
                    return !t && (t = RegExp('\\b' + i + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(e)) && (t = p(t, i, n.label || n)), t;
                });
            }
            function W(t) {
                return I(t, function (t, n) {
                    var i = n.pattern || y(n);
                    return (
                        !t &&
                            (t = RegExp('\\b' + i + ' *\\d+[.\\w_]*', 'i').exec(e) || RegExp('\\b' + i + ' *\\w+-[\\w]*', 'i').exec(e) || RegExp('\\b' + i + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(e)) &&
                            ((t = String(n.label && !RegExp(i, 'i').test(n.label) ? n.label : t).split('/'))[1] && !/[\d.]+/.test(t[0]) && (t[0] += ' ' + t[1]),
                            (n = n.label || n),
                            (t = m(
                                t[0]
                                    .replace(RegExp(i, 'i'), n)
                                    .replace(RegExp('; *(?:' + n + '[_-])?', 'i'), ' ')
                                    .replace(RegExp('(' + n + ')[-_.]?(\\w)', 'i'), '$1 $2')
                            ))),
                        t
                    );
                });
            }
            function K(t) {
                return I(t, function (t, n) {
                    return t || (RegExp(n + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(e) || 0)[1] || null;
                });
            }
            function z() {
                return this.description || '';
            }
            if ((U && (U = [U]), /\bAndroid\b/.test(F) && !B && (t = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) && (B = T(t[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, '') || null), Z && !B ? (B = W([Z])) : Z && B && (B = B.replace(RegExp('^(' + y(Z) + ')[-_.\\s]', 'i'), Z + ' ').replace(RegExp('^(' + y(Z) + ')[-_.]?(\\w)', 'i'), Z + ' $2')), (t = /\bGoogle TV\b/.exec(B)) && (B = t[0]), /\bSimulator\b/i.test(e) && (B = (B ? B + ' ' : '') + 'Simulator'), 'Opera Mini' == G && /\bOPiOS\b/.test(e) && P.push('running in Turbo/Uncompressed mode'), 'IE' == G && /\blike iPhone OS\b/.test(e) ? ((Z = (t = b(e.replace(/like iPhone OS/, ''))).manufacturer), (B = t.product)) : /^iP/.test(B) ? (G || (G = 'Safari'), (F = 'iOS' + ((t = / OS ([\d_]+)/i.exec(e)) ? ' ' + t[1].replace(/_/g, '.') : ''))) : 'Konqueror' == G && /^Linux\b/i.test(F) ? (F = 'Kubuntu') : (Z && 'Google' != Z && ((/Chrome/.test(G) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(B))) || (/\bAndroid\b/.test(F) && /^Chrome/.test(G) && /\bVersion\//i.test(e)) ? ((G = 'Android Browser'), (F = /\bAndroid\b/.test(F) ? F : 'Android')) : 'Silk' == G ? (/\bMobi/i.test(e) || ((F = 'Android'), P.unshift('desktop mode')), /Accelerated *= *true/i.test(e) && P.unshift('accelerated')) : 'UC Browser' == G && /\bUCWEB\b/.test(e) ? P.push('speed mode') : 'PaleMoon' == G && (t = /\bFirefox\/([\d.]+)\b/.exec(e)) ? P.push('identifying as Firefox ' + t[1]) : 'Firefox' == G && (t = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (F || (F = 'Firefox OS'), B || (B = t[1])) : !G || (t = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(G)) ? (G && !B && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(t + '/') + 8)) && (G = null), (t = B || Z || F) && (B || Z || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(F)) && (G = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(F) ? F : t) + ' Browser')) : 'Electron' == G && (t = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && P.push('Chromium ' + t), k || (k = K(['(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)', 'Version', y(G), '(?:Firefox|Minefield|NetFront)'])), (t = ('iCab' == U && parseFloat(k) > 3 && 'WebKit') || (/\bOpera\b/.test(G) && (/\bOPR\b/.test(e) ? 'Blink' : 'Presto')) || (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(U) && 'WebKit') || (!U && /\bMSIE\b/i.test(e) && ('Mac OS' == F ? 'Tasman' : 'Trident')) || ('WebKit' == U && /\bPlayStation\b(?! Vita\b)/i.test(G) && 'NetFront')) && (U = [t]), 'IE' == G && (t = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? ((G += ' Mobile'), (F = 'Windows Phone ' + (/\+$/.test(t) ? t : t + '.x')), P.unshift('desktop mode')) : /\bWPDesktop\b/i.test(e) ? ((G = 'IE Mobile'), (F = 'Windows Phone 8.x'), P.unshift('desktop mode'), k || (k = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : 'IE' != G && 'Trident' == U && (t = /\brv:([\d.]+)/.exec(e)) && (G && P.push('identifying as ' + G + (k ? ' ' + k : '')), (G = 'IE'), (k = t[1])), M)) {
                if (v(i, 'global')) {
                    if ((A && ((L = (t = A.lang.System).getProperty('os.arch')), (F = F || t.getProperty('os.name') + ' ' + t.getProperty('os.version'))), N)) {
                        try {
                            (k = i.require('ringo/engine').version.join('.')), (G = 'RingoJS');
                        } catch (e) {
                            (t = i.system) && t.global.system == i.system && ((G = 'Narwhal'), F || (F = t[0].os || null));
                        }
                        G || (G = 'Rhino');
                    } else 'object' == typeof i.process && !i.process.browser && (t = i.process) && ('object' == typeof t.versions && ('string' == typeof t.versions.electron ? (P.push('Node ' + t.versions.node), (G = 'Electron'), (k = t.versions.electron)) : 'string' == typeof t.versions.nw && (P.push('Chromium ' + k, 'Node ' + t.versions.node), (G = 'NW.js'), (k = t.versions.nw))), G || ((G = 'Node.js'), (L = t.arch), (F = t.platform), (k = (k = /[\d.]+/.exec(t.version)) ? k[0] : null)));
                } else E((t = i.runtime)) == d ? ((G = 'Adobe AIR'), (F = t.flash.system.Capabilities.os)) : E((t = i.phantom)) == S ? ((G = 'PhantomJS'), (k = (t = t.version || null) && t.major + '.' + t.minor + '.' + t.patch)) : 'number' == typeof O.documentMode && (t = /\bTrident\/(\d+)/i.exec(e)) ? ((k = [k, O.documentMode]), (t = +t[1] + 4) != k[1] && (P.push('IE ' + k[1] + ' mode'), U && (U[1] = ''), (k[1] = t)), (k = 'IE' == G ? String(k[1].toFixed(1)) : k[0])) : 'number' == typeof O.documentMode && /^(?:Chrome|Firefox)\b/.test(G) && (P.push('masking as ' + G + ' ' + k), (G = 'IE'), (k = '11.0'), (U = ['Trident']), (F = 'Windows'));
                F = F && m(F);
            }
            if ((k && (t = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(k) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ';' + (M && s.appMinorVersion)) || (/\bMinefield\b/i.test(e) && 'a')) && ((w = /b/i.test(t) ? 'beta' : 'alpha'), (k = k.replace(RegExp(t + '\\+?$'), '') + ('beta' == w ? R : C) + (/\d+\+?/.exec(t) || ''))), 'Fennec' == G || ('Firefox' == G && /\b(?:Android|Firefox OS|KaiOS)\b/.test(F)))) G = 'Firefox Mobile';
            else if ('Maxthon' == G && k) k = k.replace(/\.[\d.]+/, '.x');
            else if (/\bXbox\b/i.test(B)) 'Xbox 360' == B && (F = null), 'Xbox 360' == B && /\bIEMobile\b/.test(e) && P.unshift('mobile mode');
            else if ((/^(?:Chrome|IE|Opera)$/.test(G) || (G && !B && !/Browser|Mobi/.test(G))) && ('Windows CE' == F || /Mobi/i.test(e))) G += ' Mobile';
            else if ('IE' == G && M)
                try {
                    null === i.external && P.unshift('platform preview');
                } catch (e) {
                    P.unshift('embedded');
                }
            else (/\bBlackBerry\b/.test(B) || /\bBB10\b/.test(e)) && (t = (RegExp(B.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(e) || 0)[1] || k) ? ((F = ((t = [t, /BB10/.test(e)])[1] ? ((B = null), (Z = 'BlackBerry')) : 'Device Software') + ' ' + t[0]), (k = null)) : this != g && 'Wii' != B && ((M && D) || (/Opera/.test(G) && /\b(?:MSIE|Firefox)\b/i.test(e)) || ('Firefox' == G && /\bOS X (?:\d+\.){2,}/.test(F)) || ('IE' == G && ((F && !/^Win/.test(F) && k > 5.5) || (/\bWindows XP\b/.test(F) && k > 8) || (8 == k && !/\bTrident\b/.test(e))))) && !u.test((t = b.call(g, e.replace(u, '') + ';'))) && t.name && ((t = 'ing as ' + t.name + ((t = t.version) ? ' ' + t : '')), u.test(G) ? (/\bIE\b/.test(t) && 'Mac OS' == F && (F = null), (t = 'identify' + t)) : ((t = 'mask' + t), (G = x ? m(x.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera'), /\bIE\b/.test(t) && (F = null), M || (k = null)), (U = ['Presto']), P.push(t));
            (t = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && ((t = [parseFloat(t.replace(/\.(\d)$/, '.0$1')), t]), 'Safari' == G && '+' == t[1].slice(-1) ? ((G = 'WebKit Nightly'), (w = 'alpha'), (k = t[1].slice(0, -1))) : (k == t[1] || k == (t[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (k = null), (t[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1]), 537.36 == t[0] && 537.36 == t[2] && parseFloat(t[1]) >= 28 && 'WebKit' == U && (U = ['Blink']), M && (l || t[1]) ? (U && (U[1] = 'like Chrome'), (t = t[1] || ((t = t[0]) < 530 ? 1 : t < 532 ? 2 : t < 532.05 ? 3 : t < 533 ? 4 : t < 534.03 ? 5 : t < 534.07 ? 6 : t < 534.1 ? 7 : t < 534.13 ? 8 : t < 534.16 ? 9 : t < 534.24 ? 10 : t < 534.3 ? 11 : t < 535.01 ? 12 : t < 535.02 ? '13+' : t < 535.07 ? 15 : t < 535.11 ? 16 : t < 535.19 ? 17 : t < 536.05 ? 18 : t < 536.1 ? 19 : t < 537.01 ? 20 : t < 537.11 ? '21+' : t < 537.13 ? 23 : t < 537.18 ? 24 : t < 537.24 ? 25 : t < 537.36 ? 26 : 'Blink' != U ? '27' : '28'))) : (U && (U[1] = 'like Safari'), (t = (t = t[0]) < 400 ? 1 : t < 500 ? 2 : t < 526 ? 3 : t < 533 ? 4 : t < 534 ? '4+' : t < 535 ? 5 : t < 537 ? 6 : t < 538 ? 7 : t < 601 ? 8 : t < 602 ? 9 : t < 604 ? 10 : t < 606 ? 11 : t < 608 ? 12 : '12')), U && (U[1] += ' ' + (t += 'number' == typeof t ? '.x' : /[.+]/.test(t) ? '' : '+')), 'Safari' == G && (!k || parseInt(k) > 45) ? (k = t) : 'Chrome' == G && /\bHeadlessChrome/i.test(e) && P.unshift('headless')),
                'Opera' == G && (t = /\bzbov|zvav$/.exec(F)) ? ((G += ' '), P.unshift('desktop mode'), 'zvav' == t ? ((G += 'Mini'), (k = null)) : (G += 'Mobile'), (F = F.replace(RegExp(' *' + t + '$'), ''))) : 'Safari' == G && /\bChrome\b/.exec(U && U[1]) ? (P.unshift('desktop mode'), (G = 'Chrome Mobile'), (k = null), /\bOS X\b/.test(F) ? ((Z = 'Apple'), (F = 'iOS 4.3+')) : (F = null)) : /\bSRWare Iron\b/.test(G) && !k && (k = K('Chrome')),
                k && 0 == k.indexOf((t = /[\d.]+$/.exec(F))) && e.indexOf('/' + t + '-') > -1 && (F = T(F.replace(t, ''))),
                F && -1 != F.indexOf(G) && !RegExp(G + ' OS').test(F) && (F = F.replace(RegExp(' *' + y(G) + ' *'), '')),
                U && !/\b(?:Avant|Nook)\b/.test(G) && (/Browser|Lunascape|Maxthon/.test(G) || ('Safari' != G && /^iOS/.test(F) && /\bSafari\b/.test(U[1])) || (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(G) && U[1])) && (t = U[U.length - 1]) && P.push(t),
                P.length && (P = ['(' + P.join('; ') + ')']),
                Z && B && 0 > B.indexOf(Z) && P.push('on ' + Z),
                B && P.push((/^on /.test(P[P.length - 1]) ? '' : 'on ') + B),
                F &&
                    ((n = (t = / ([\d.+]+)$/.exec(F)) && '/' == F.charAt(F.length - t[0].length - 1)),
                    (F = {
                        architecture: 32,
                        family: t && !n ? F.replace(t[0], '') : F,
                        version: t ? t[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !n ? ' ' + e : '') + (64 == this.architecture ? ' 64-bit' : '');
                        }
                    })),
                (t = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(L)) && !/\bi686\b/i.test(L) ? (F && ((F.architecture = 64), (F.family = F.family.replace(RegExp(' *' + t), ''))), G && (/\bWOW64\b/i.test(e) || (M && /\w(?:86|32)$/.test(s.cpuClass || s.platform) && !/\bWin64; x64\b/i.test(e))) && P.unshift('32-bit')) : F && /^OS X/.test(F.family) && 'Chrome' == G && parseFloat(k) >= 39 && (F.architecture = 64),
                e || (e = null);
            var q = {};
            return (
                (q.description = e),
                (q.layout = U && U[0]),
                (q.manufacturer = Z),
                (q.name = G),
                (q.prerelease = w),
                (q.product = B),
                (q.ua = e),
                (q.version = G && k),
                (q.os = F || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return 'null';
                    }
                }),
                (q.parse = b),
                (q.toString = z),
                q.version && P.unshift(k),
                q.name && P.unshift(G),
                F && G && !(F == String(F).split(' ')[0] && (F == G.split(' ')[0] || B)) && P.push(B ? '(' + F + ')' : 'on ' + F),
                P.length && (q.description = P.join(' ')),
                q
            );
        }
        var S = b();
        'function' == typeof define && 'object' == typeof define.amd && define.amd
            ? ((r.platform = S),
              define(function () {
                  return S;
              }))
            : a && s
              ? g(S, function (e, t) {
                    a[t] = e;
                })
              : (r.platform = S);
    }.call(this);
