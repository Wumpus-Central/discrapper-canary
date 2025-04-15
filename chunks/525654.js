(e = n.nmd(e)),
    function () {
        var r = {
                function: !0,
                object: !0
            },
            i = (r[typeof window] && window) || this,
            o = r[typeof t] && t,
            a = r.object && e && !e.nodeType && e,
            s = o && a && 'object' == typeof n.g && n.g;
        s && (s.global === s || s.window === s || s.self === s) && (i = s);
        var l = 9007199254740991,
            c = /\bOpera/,
            u = Object.prototype,
            d = u.hasOwnProperty,
            f = u.toString;
        function _(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function p(e, t, n) {
            var r = {
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
                t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = 'Windows ' + r),
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
                r = e ? e.length : 0;
            if ('number' == typeof r && r > -1 && r <= l) for (; ++n < r; ) t(e[n], n, e);
            else g(e, t);
        }
        function m(e) {
            return (e = O(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : _(e);
        }
        function g(e, t) {
            for (var n in e) d.call(e, n) && t(e[n], n, e);
        }
        function E(e) {
            return null == e ? _(e) : f.call(e).slice(8, -1);
        }
        function b(e, t) {
            var n = null != e ? typeof e[t] : 'number';
            return !/^(?:boolean|number|string|undefined)$/.test(n) && ('object' != n || !!e[t]);
        }
        function y(e) {
            return String(e).replace(/([ -])(?!$)/g, '$1?');
        }
        function v(e, t) {
            var n = null;
            return (
                h(e, function (r, i) {
                    n = t(n, r, i, e);
                }),
                n
            );
        }
        function O(e) {
            return String(e).replace(/^ +| +$/g, '');
        }
        function I(e) {
            var t,
                n,
                r = i,
                o = e && 'object' == typeof e && 'String' != E(e);
            o && ((r = e), (e = null));
            var a = r.navigator || {},
                s = a.userAgent || '';
            e || (e = s);
            var l = o ? !!a.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(f.toString()),
                u = 'Object',
                d = o ? u : 'ScriptBridgingProxyObject',
                _ = o ? u : 'Environment',
                h = o && r.java ? 'JavaPackage' : E(r.java),
                S = o ? u : 'RuntimeObject',
                T = /\bJava/.test(h) && r.java,
                N = T && E(r.environment) == _,
                A = T ? 'a' : 'α',
                C = T ? 'b' : 'β',
                R = r.document || {},
                P = r.operamini || r.opera,
                w = c.test((w = o && P ? P['[[Class]]'] : E(P))) ? w : (P = null),
                D = e,
                L = [],
                x = null,
                M = e == s,
                k = M && P && 'function' == typeof P.version && P.version(),
                j = V([
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
                U = H([
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
                        pattern: 'Edge'
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
                    'Waterfox',
                    'WebPositive',
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
                    'Chrome',
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
                G = Y([
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
                B = Z({
                    Apple: {
                        iPad: 1,
                        iPhone: 1,
                        iPod: 1
                    },
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
                    Samsung: {
                        'Galaxy S': 1,
                        'Galaxy S2': 1,
                        'Galaxy S3': 1,
                        'Galaxy S4': 1
                    },
                    Sony: {
                        PlayStation: 1,
                        'PlayStation Vita': 1
                    }
                }),
                F = W([
                    'Windows Phone',
                    'Android',
                    'CentOS',
                    {
                        label: 'Chrome OS',
                        pattern: 'CrOS'
                    },
                    'Debian',
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
                return v(t, function (t, n) {
                    return t || (RegExp('\\b' + (n.pattern || y(n)) + '\\b', 'i').exec(e) && (n.label || n));
                });
            }
            function Z(t) {
                return v(t, function (t, n, r) {
                    return t || ((n[G] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(G)] || RegExp('\\b' + y(r) + '(?:\\b|\\w*\\d)', 'i').exec(e)) && r);
                });
            }
            function H(t) {
                return v(t, function (t, n) {
                    return t || (RegExp('\\b' + (n.pattern || y(n)) + '\\b', 'i').exec(e) && (n.label || n));
                });
            }
            function W(t) {
                return v(t, function (t, n) {
                    var r = n.pattern || y(n);
                    return !t && (t = RegExp('\\b' + r + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(e)) && (t = p(t, r, n.label || n)), t;
                });
            }
            function Y(t) {
                return v(t, function (t, n) {
                    var r = n.pattern || y(n);
                    return (
                        !t &&
                            (t = RegExp('\\b' + r + ' *\\d+[.\\w_]*', 'i').exec(e) || RegExp('\\b' + r + ' *\\w+-[\\w]*', 'i').exec(e) || RegExp('\\b' + r + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(e)) &&
                            ((t = String(n.label && !RegExp(r, 'i').test(n.label) ? n.label : t).split('/'))[1] && !/[\d.]+/.test(t[0]) && (t[0] += ' ' + t[1]),
                            (n = n.label || n),
                            (t = m(
                                t[0]
                                    .replace(RegExp(r, 'i'), n)
                                    .replace(RegExp('; *(?:' + n + '[_-])?', 'i'), ' ')
                                    .replace(RegExp('(' + n + ')[-_.]?(\\w)', 'i'), '$1 $2')
                            ))),
                        t
                    );
                });
            }
            function K(t) {
                return v(t, function (t, n) {
                    return t || (RegExp(n + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(e) || 0)[1] || null;
                });
            }
            function z() {
                return this.description || '';
            }
            if ((j && (j = [j]), B && !G && (G = Y([B])), (t = /\bGoogle TV\b/.exec(G)) && (G = t[0]), /\bSimulator\b/i.test(e) && (G = (G ? G + ' ' : '') + 'Simulator'), 'Opera Mini' == U && /\bOPiOS\b/.test(e) && L.push('running in Turbo/Uncompressed mode'), 'IE' == U && /\blike iPhone OS\b/.test(e) ? ((B = (t = I(e.replace(/like iPhone OS/, ''))).manufacturer), (G = t.product)) : /^iP/.test(G) ? (U || (U = 'Safari'), (F = 'iOS' + ((t = / OS ([\d_]+)/i.exec(e)) ? ' ' + t[1].replace(/_/g, '.') : ''))) : 'Konqueror' != U || /buntu/i.test(F) ? ((B && 'Google' != B && ((/Chrome/.test(U) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(G))) || (/\bAndroid\b/.test(F) && /^Chrome/.test(U) && /\bVersion\//i.test(e)) ? ((U = 'Android Browser'), (F = /\bAndroid\b/.test(F) ? F : 'Android')) : 'Silk' == U ? (/\bMobi/i.test(e) || ((F = 'Android'), L.unshift('desktop mode')), /Accelerated *= *true/i.test(e) && L.unshift('accelerated')) : 'PaleMoon' == U && (t = /\bFirefox\/([\d.]+)\b/.exec(e)) ? L.push('identifying as Firefox ' + t[1]) : 'Firefox' == U && (t = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (F || (F = 'Firefox OS'), G || (G = t[1])) : !U || (t = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(U)) ? (U && !G && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(t + '/') + 8)) && (U = null), (t = G || B || F) && (G || B || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(F)) && (U = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(F) ? F : t) + ' Browser')) : 'Electron' == U && (t = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && L.push('Chromium ' + t)) : (F = 'Kubuntu'), k || (k = K(['(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))', 'Version', y(U), '(?:Firefox|Minefield|NetFront)'])), (t = ('iCab' == j && parseFloat(k) > 3 && 'WebKit') || (/\bOpera\b/.test(U) && (/\bOPR\b/.test(e) ? 'Blink' : 'Presto')) || (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(j) && 'WebKit') || (!j && /\bMSIE\b/i.test(e) && ('Mac OS' == F ? 'Tasman' : 'Trident')) || ('WebKit' == j && /\bPlayStation\b(?! Vita\b)/i.test(U) && 'NetFront')) && (j = [t]), 'IE' == U && (t = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? ((U += ' Mobile'), (F = 'Windows Phone ' + (/\+$/.test(t) ? t : t + '.x')), L.unshift('desktop mode')) : /\bWPDesktop\b/i.test(e) ? ((U = 'IE Mobile'), (F = 'Windows Phone 8.x'), L.unshift('desktop mode'), k || (k = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : 'IE' != U && 'Trident' == j && (t = /\brv:([\d.]+)/.exec(e)) && (U && L.push('identifying as ' + U + (k ? ' ' + k : '')), (U = 'IE'), (k = t[1])), M)) {
                if (b(r, 'global'))
                    if ((T && ((D = (t = T.lang.System).getProperty('os.arch')), (F = F || t.getProperty('os.name') + ' ' + t.getProperty('os.version'))), N)) {
                        try {
                            (k = r.require('ringo/engine').version.join('.')), (U = 'RingoJS');
                        } catch (e) {
                            (t = r.system) && t.global.system == r.system && ((U = 'Narwhal'), F || (F = t[0].os || null));
                        }
                        U || (U = 'Rhino');
                    } else 'object' == typeof r.process && !r.process.browser && (t = r.process) && ('object' == typeof t.versions && ('string' == typeof t.versions.electron ? (L.push('Node ' + t.versions.node), (U = 'Electron'), (k = t.versions.electron)) : 'string' == typeof t.versions.nw && (L.push('Chromium ' + k, 'Node ' + t.versions.node), (U = 'NW.js'), (k = t.versions.nw))), U || ((U = 'Node.js'), (D = t.arch), (F = t.platform), (k = (k = /[\d.]+/.exec(t.version)) ? k[0] : null)));
                else E((t = r.runtime)) == d ? ((U = 'Adobe AIR'), (F = t.flash.system.Capabilities.os)) : E((t = r.phantom)) == S ? ((U = 'PhantomJS'), (k = (t = t.version || null) && t.major + '.' + t.minor + '.' + t.patch)) : 'number' == typeof R.documentMode && (t = /\bTrident\/(\d+)/i.exec(e)) ? ((k = [k, R.documentMode]), (t = +t[1] + 4) != k[1] && (L.push('IE ' + k[1] + ' mode'), j && (j[1] = ''), (k[1] = t)), (k = 'IE' == U ? String(k[1].toFixed(1)) : k[0])) : 'number' == typeof R.documentMode && /^(?:Chrome|Firefox)\b/.test(U) && (L.push('masking as ' + U + ' ' + k), (U = 'IE'), (k = '11.0'), (j = ['Trident']), (F = 'Windows'));
                F = F && m(F);
            }
            if ((k && (t = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(k) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ';' + (M && a.appMinorVersion)) || (/\bMinefield\b/i.test(e) && 'a')) && ((x = /b/i.test(t) ? 'beta' : 'alpha'), (k = k.replace(RegExp(t + '\\+?$'), '') + ('beta' == x ? C : A) + (/\d+\+?/.exec(t) || ''))), 'Fennec' == U || ('Firefox' == U && /\b(?:Android|Firefox OS)\b/.test(F)))) U = 'Firefox Mobile';
            else if ('Maxthon' == U && k) k = k.replace(/\.[\d.]+/, '.x');
            else if (/\bXbox\b/i.test(G)) 'Xbox 360' == G && (F = null), 'Xbox 360' == G && /\bIEMobile\b/.test(e) && L.unshift('mobile mode');
            else if ((/^(?:Chrome|IE|Opera)$/.test(U) || (U && !G && !/Browser|Mobi/.test(U))) && ('Windows CE' == F || /Mobi/i.test(e))) U += ' Mobile';
            else if ('IE' == U && M)
                try {
                    null === r.external && L.unshift('platform preview');
                } catch (e) {
                    L.unshift('embedded');
                }
            else (/\bBlackBerry\b/.test(G) || /\bBB10\b/.test(e)) && (t = (RegExp(G.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(e) || 0)[1] || k) ? ((F = ((t = [t, /BB10/.test(e)])[1] ? ((G = null), (B = 'BlackBerry')) : 'Device Software') + ' ' + t[0]), (k = null)) : this != g && 'Wii' != G && ((M && P) || (/Opera/.test(U) && /\b(?:MSIE|Firefox)\b/i.test(e)) || ('Firefox' == U && /\bOS X (?:\d+\.){2,}/.test(F)) || ('IE' == U && ((F && !/^Win/.test(F) && k > 5.5) || (/\bWindows XP\b/.test(F) && k > 8) || (8 == k && !/\bTrident\b/.test(e))))) && !c.test((t = I.call(g, e.replace(c, '') + ';'))) && t.name && ((t = 'ing as ' + t.name + ((t = t.version) ? ' ' + t : '')), c.test(U) ? (/\bIE\b/.test(t) && 'Mac OS' == F && (F = null), (t = 'identify' + t)) : ((t = 'mask' + t), (U = w ? m(w.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera'), /\bIE\b/.test(t) && (F = null), M || (k = null)), (j = ['Presto']), L.push(t));
            (t = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && ((t = [parseFloat(t.replace(/\.(\d)$/, '.0$1')), t]), 'Safari' == U && '+' == t[1].slice(-1) ? ((U = 'WebKit Nightly'), (x = 'alpha'), (k = t[1].slice(0, -1))) : (k == t[1] || k == (t[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (k = null), (t[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1]), 537.36 == t[0] && 537.36 == t[2] && parseFloat(t[1]) >= 28 && 'WebKit' == j && (j = ['Blink']), M && (l || t[1]) ? (j && (j[1] = 'like Chrome'), (t = t[1] || ((t = t[0]) < 530 ? 1 : t < 532 ? 2 : t < 532.05 ? 3 : t < 533 ? 4 : t < 534.03 ? 5 : t < 534.07 ? 6 : t < 534.1 ? 7 : t < 534.13 ? 8 : t < 534.16 ? 9 : t < 534.24 ? 10 : t < 534.3 ? 11 : t < 535.01 ? 12 : t < 535.02 ? '13+' : t < 535.07 ? 15 : t < 535.11 ? 16 : t < 535.19 ? 17 : t < 536.05 ? 18 : t < 536.1 ? 19 : t < 537.01 ? 20 : t < 537.11 ? '21+' : t < 537.13 ? 23 : t < 537.18 ? 24 : t < 537.24 ? 25 : t < 537.36 ? 26 : 'Blink' != j ? '27' : '28'))) : (j && (j[1] = 'like Safari'), (t = (t = t[0]) < 400 ? 1 : t < 500 ? 2 : t < 526 ? 3 : t < 533 ? 4 : t < 534 ? '4+' : t < 535 ? 5 : t < 537 ? 6 : t < 538 ? 7 : t < 601 ? 8 : '8')), j && (j[1] += ' ' + (t += 'number' == typeof t ? '.x' : /[.+]/.test(t) ? '' : '+')), 'Safari' == U && (!k || parseInt(k) > 45) && (k = t)),
                'Opera' == U && (t = /\bzbov|zvav$/.exec(F)) ? ((U += ' '), L.unshift('desktop mode'), 'zvav' == t ? ((U += 'Mini'), (k = null)) : (U += 'Mobile'), (F = F.replace(RegExp(' *' + t + '$'), ''))) : 'Safari' == U && /\bChrome\b/.exec(j && j[1]) && (L.unshift('desktop mode'), (U = 'Chrome Mobile'), (k = null), /\bOS X\b/.test(F) ? ((B = 'Apple'), (F = 'iOS 4.3+')) : (F = null)),
                k && 0 == k.indexOf((t = /[\d.]+$/.exec(F))) && e.indexOf('/' + t + '-') > -1 && (F = O(F.replace(t, ''))),
                j && !/\b(?:Avant|Nook)\b/.test(U) && (/Browser|Lunascape|Maxthon/.test(U) || ('Safari' != U && /^iOS/.test(F) && /\bSafari\b/.test(j[1])) || (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(U) && j[1])) && (t = j[j.length - 1]) && L.push(t),
                L.length && (L = ['(' + L.join('; ') + ')']),
                B && G && 0 > G.indexOf(B) && L.push('on ' + B),
                G && L.push((/^on /.test(L[L.length - 1]) ? '' : 'on ') + G),
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
                (t = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(D)) && !/\bi686\b/i.test(D) ? (F && ((F.architecture = 64), (F.family = F.family.replace(RegExp(' *' + t), ''))), U && (/\bWOW64\b/i.test(e) || (M && /\w(?:86|32)$/.test(a.cpuClass || a.platform) && !/\bWin64; x64\b/i.test(e))) && L.unshift('32-bit')) : F && /^OS X/.test(F.family) && 'Chrome' == U && parseFloat(k) >= 39 && (F.architecture = 64),
                e || (e = null);
            var q = {};
            return (
                (q.description = e),
                (q.layout = j && j[0]),
                (q.manufacturer = B),
                (q.name = U),
                (q.prerelease = x),
                (q.product = G),
                (q.ua = e),
                (q.version = U && k),
                (q.os = F || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return 'null';
                    }
                }),
                (q.parse = I),
                (q.toString = z),
                q.version && L.unshift(k),
                q.name && L.unshift(U),
                F && U && !(F == String(F).split(' ')[0] && (F == U.split(' ')[0] || G)) && L.push(G ? '(' + F + ')' : 'on ' + F),
                L.length && (q.description = L.join(' ')),
                q
            );
        }
        var S = I();
        'function' == typeof define && 'object' == typeof define.amd && define.amd
            ? ((i.platform = S),
              define(function () {
                  return S;
              }))
            : o && a
              ? g(S, function (e, t) {
                    o[t] = e;
                })
              : (i.platform = S);
    }.call(this);
