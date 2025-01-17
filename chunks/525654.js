(e = r.nmd(e)),
    function () {
        var i = {
                function: !0,
                object: !0
            },
            a = (i[typeof window] && window) || this,
            s = a,
            o = i[typeof n] && n,
            l = i.object && e && !e.nodeType && e,
            u = o && l && 'object' == typeof r.g && r.g;
        u && (u.global === u || u.window === u || u.self === u) && (a = u);
        var c = 9007199254740991,
            d = /\bOpera/,
            f = this,
            _ = Object.prototype,
            h = _.hasOwnProperty,
            p = _.toString;
        function m(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function g(e, n, r) {
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
                n && r && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (i = i[/[\d.]+$/.exec(e)]) && (e = 'Windows ' + i),
                (e = String(e)),
                n && r && (e = e.replace(RegExp(n, 'i'), r)),
                (e = v(
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
        function E(e, n) {
            var r = -1,
                i = e ? e.length : 0;
            if ('number' == typeof i && i > -1 && i <= c) for (; ++r < i; ) n(e[r], r, e);
            else I(e, n);
        }
        function v(e) {
            return (e = A(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : m(e);
        }
        function I(e, n) {
            for (var r in e) h.call(e, r) && n(e[r], r, e);
        }
        function T(e) {
            return null == e ? m(e) : p.call(e).slice(8, -1);
        }
        function b(e, n) {
            var r = null != e ? typeof e[n] : 'number';
            return !/^(?:boolean|number|string|undefined)$/.test(r) && ('object' != r || !!e[n]);
        }
        function y(e) {
            return String(e).replace(/([ -])(?!$)/g, '$1?');
        }
        function S(e, n) {
            var r = null;
            return (
                E(e, function (i, a) {
                    r = n(r, i, a, e);
                }),
                r
            );
        }
        function A(e) {
            return String(e).replace(/^ +| +$/g, '');
        }
        function N(e) {
            var n,
                r,
                i = a,
                s = e && 'object' == typeof e && 'String' != T(e);
            s && ((i = e), (e = null));
            var o = i.navigator || {},
                l = o.userAgent || '';
            e || (e = l);
            var u = s ? !!o.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(p.toString()),
                c = 'Object',
                f = s ? c : 'ScriptBridgingProxyObject',
                _ = s ? c : 'Environment',
                h = s && i.java ? 'JavaPackage' : T(i.java),
                m = s ? c : 'RuntimeObject',
                E = /\bJava/.test(h) && i.java,
                C = E && T(i.environment) == _,
                R = E ? 'a' : 'α',
                O = E ? 'b' : 'β',
                D = i.document || {},
                L = i.operamini || i.opera,
                x = d.test((x = s && L ? L['[[Class]]'] : T(L))) ? x : (L = null),
                w = e,
                P = [],
                M = null,
                k = e == l,
                U = k && L && 'function' == typeof L.version && L.version(),
                B = j([
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
                G = Y([
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
                Z = K([
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
                F = H({
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
                V = W([
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
            function j(n) {
                return S(n, function (n, r) {
                    return n || (RegExp('\\b' + (r.pattern || y(r)) + '\\b', 'i').exec(e) && (r.label || r));
                });
            }
            function H(n) {
                return S(n, function (n, r, i) {
                    return n || ((r[Z] || r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(Z)] || RegExp('\\b' + y(i) + '(?:\\b|\\w*\\d)', 'i').exec(e)) && i);
                });
            }
            function Y(n) {
                return S(n, function (n, r) {
                    return n || (RegExp('\\b' + (r.pattern || y(r)) + '\\b', 'i').exec(e) && (r.label || r));
                });
            }
            function W(n) {
                return S(n, function (n, r) {
                    var i = r.pattern || y(r);
                    return !n && (n = RegExp('\\b' + i + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(e)) && (n = g(n, i, r.label || r)), n;
                });
            }
            function K(n) {
                return S(n, function (n, r) {
                    var i = r.pattern || y(r);
                    return (
                        !n &&
                            (n = RegExp('\\b' + i + ' *\\d+[.\\w_]*', 'i').exec(e) || RegExp('\\b' + i + ' *\\w+-[\\w]*', 'i').exec(e) || RegExp('\\b' + i + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(e)) &&
                            ((n = String(r.label && !RegExp(i, 'i').test(r.label) ? r.label : n).split('/'))[1] && !/[\d.]+/.test(n[0]) && (n[0] += ' ' + n[1]),
                            (r = r.label || r),
                            (n = v(
                                n[0]
                                    .replace(RegExp(i, 'i'), r)
                                    .replace(RegExp('; *(?:' + r + '[_-])?', 'i'), ' ')
                                    .replace(RegExp('(' + r + ')[-_.]?(\\w)', 'i'), '$1 $2')
                            ))),
                        n
                    );
                });
            }
            function z(n) {
                return S(n, function (n, r) {
                    return n || (RegExp(r + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(e) || 0)[1] || null;
                });
            }
            function q() {
                return this.description || '';
            }
            if ((B && (B = [B]), F && !Z && (Z = K([F])), (n = /\bGoogle TV\b/.exec(Z)) && (Z = n[0]), /\bSimulator\b/i.test(e) && (Z = (Z ? Z + ' ' : '') + 'Simulator'), 'Opera Mini' == G && /\bOPiOS\b/.test(e) && P.push('running in Turbo/Uncompressed mode'), 'IE' == G && /\blike iPhone OS\b/.test(e) ? ((F = (n = N(e.replace(/like iPhone OS/, ''))).manufacturer), (Z = n.product)) : /^iP/.test(Z) ? (G || (G = 'Safari'), (V = 'iOS' + ((n = / OS ([\d_]+)/i.exec(e)) ? ' ' + n[1].replace(/_/g, '.') : ''))) : 'Konqueror' != G || /buntu/i.test(V) ? ((F && 'Google' != F && ((/Chrome/.test(G) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(Z))) || (/\bAndroid\b/.test(V) && /^Chrome/.test(G) && /\bVersion\//i.test(e)) ? ((G = 'Android Browser'), (V = /\bAndroid\b/.test(V) ? V : 'Android')) : 'Silk' == G ? (!/\bMobi/i.test(e) && ((V = 'Android'), P.unshift('desktop mode')), /Accelerated *= *true/i.test(e) && P.unshift('accelerated')) : 'PaleMoon' == G && (n = /\bFirefox\/([\d.]+)\b/.exec(e)) ? P.push('identifying as Firefox ' + n[1]) : 'Firefox' == G && (n = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (V || (V = 'Firefox OS'), Z || (Z = n[1])) : !G || (n = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(G)) ? (G && !Z && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(n + '/') + 8)) && (G = null), (n = Z || F || V) && (Z || F || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V)) && (G = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(V) ? V : n) + ' Browser')) : 'Electron' == G && (n = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && P.push('Chromium ' + n)) : (V = 'Kubuntu'), !U && (U = z(['(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))', 'Version', y(G), '(?:Firefox|Minefield|NetFront)'])), (n = ('iCab' == B && parseFloat(U) > 3 && 'WebKit') || (/\bOpera\b/.test(G) && (/\bOPR\b/.test(e) ? 'Blink' : 'Presto')) || (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(B) && 'WebKit') || (!B && /\bMSIE\b/i.test(e) && ('Mac OS' == V ? 'Tasman' : 'Trident')) || ('WebKit' == B && /\bPlayStation\b(?! Vita\b)/i.test(G) && 'NetFront')) && (B = [n]), 'IE' == G && (n = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? ((G += ' Mobile'), (V = 'Windows Phone ' + (/\+$/.test(n) ? n : n + '.x')), P.unshift('desktop mode')) : /\bWPDesktop\b/i.test(e) ? ((G = 'IE Mobile'), (V = 'Windows Phone 8.x'), P.unshift('desktop mode'), U || (U = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : 'IE' != G && 'Trident' == B && (n = /\brv:([\d.]+)/.exec(e)) && (G && P.push('identifying as ' + G + (U ? ' ' + U : '')), (G = 'IE'), (U = n[1])), k)) {
                if (b(i, 'global')) {
                    if ((E && ((w = (n = E.lang.System).getProperty('os.arch')), (V = V || n.getProperty('os.name') + ' ' + n.getProperty('os.version'))), C)) {
                        try {
                            (U = i.require('ringo/engine').version.join('.')), (G = 'RingoJS');
                        } catch (e) {
                            (n = i.system) && n.global.system == i.system && ((G = 'Narwhal'), V || (V = n[0].os || null));
                        }
                        !G && (G = 'Rhino');
                    } else 'object' == typeof i.process && !i.process.browser && (n = i.process) && ('object' == typeof n.versions && ('string' == typeof n.versions.electron ? (P.push('Node ' + n.versions.node), (G = 'Electron'), (U = n.versions.electron)) : 'string' == typeof n.versions.nw && (P.push('Chromium ' + U, 'Node ' + n.versions.node), (G = 'NW.js'), (U = n.versions.nw))), !G && ((G = 'Node.js'), (w = n.arch), (V = n.platform), (U = (U = /[\d.]+/.exec(n.version)) ? U[0] : null)));
                } else T((n = i.runtime)) == f ? ((G = 'Adobe AIR'), (V = n.flash.system.Capabilities.os)) : T((n = i.phantom)) == m ? ((G = 'PhantomJS'), (U = (n = n.version || null) && n.major + '.' + n.minor + '.' + n.patch)) : 'number' == typeof D.documentMode && (n = /\bTrident\/(\d+)/i.exec(e)) ? ((U = [U, D.documentMode]), (n = +n[1] + 4) != U[1] && (P.push('IE ' + U[1] + ' mode'), B && (B[1] = ''), (U[1] = n)), (U = 'IE' == G ? String(U[1].toFixed(1)) : U[0])) : 'number' == typeof D.documentMode && /^(?:Chrome|Firefox)\b/.test(G) && (P.push('masking as ' + G + ' ' + U), (G = 'IE'), (U = '11.0'), (B = ['Trident']), (V = 'Windows'));
                V = V && v(V);
            }
            if ((U && (n = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(U) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ';' + (k && o.appMinorVersion)) || (/\bMinefield\b/i.test(e) && 'a')) && ((M = /b/i.test(n) ? 'beta' : 'alpha'), (U = U.replace(RegExp(n + '\\+?$'), '') + ('beta' == M ? O : R) + (/\d+\+?/.exec(n) || ''))), 'Fennec' == G || ('Firefox' == G && /\b(?:Android|Firefox OS)\b/.test(V)))) G = 'Firefox Mobile';
            else if ('Maxthon' == G && U) U = U.replace(/\.[\d.]+/, '.x');
            else if (/\bXbox\b/i.test(Z)) 'Xbox 360' == Z && (V = null), 'Xbox 360' == Z && /\bIEMobile\b/.test(e) && P.unshift('mobile mode');
            else if ((/^(?:Chrome|IE|Opera)$/.test(G) || (G && !Z && !/Browser|Mobi/.test(G))) && ('Windows CE' == V || /Mobi/i.test(e))) G += ' Mobile';
            else if ('IE' == G && k)
                try {
                    null === i.external && P.unshift('platform preview');
                } catch (e) {
                    P.unshift('embedded');
                }
            else (/\bBlackBerry\b/.test(Z) || /\bBB10\b/.test(e)) && (n = (RegExp(Z.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(e) || 0)[1] || U) ? ((V = ((n = [n, /BB10/.test(e)])[1] ? ((Z = null), (F = 'BlackBerry')) : 'Device Software') + ' ' + n[0]), (U = null)) : this != I && 'Wii' != Z && ((k && L) || (/Opera/.test(G) && /\b(?:MSIE|Firefox)\b/i.test(e)) || ('Firefox' == G && /\bOS X (?:\d+\.){2,}/.test(V)) || ('IE' == G && ((V && !/^Win/.test(V) && U > 5.5) || (/\bWindows XP\b/.test(V) && U > 8) || (8 == U && !/\bTrident\b/.test(e))))) && !d.test((n = N.call(I, e.replace(d, '') + ';'))) && n.name && ((n = 'ing as ' + n.name + ((n = n.version) ? ' ' + n : '')), d.test(G) ? (/\bIE\b/.test(n) && 'Mac OS' == V && (V = null), (n = 'identify' + n)) : ((n = 'mask' + n), (G = x ? v(x.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera'), /\bIE\b/.test(n) && (V = null), !k && (U = null)), (B = ['Presto']), P.push(n));
            (n = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && ((n = [parseFloat(n.replace(/\.(\d)$/, '.0$1')), n]), 'Safari' == G && '+' == n[1].slice(-1) ? ((G = 'WebKit Nightly'), (M = 'alpha'), (U = n[1].slice(0, -1))) : (U == n[1] || U == (n[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (U = null), (n[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1]), 537.36 == n[0] && 537.36 == n[2] && parseFloat(n[1]) >= 28 && 'WebKit' == B && (B = ['Blink']), k && (u || n[1]) ? (B && (B[1] = 'like Chrome'), (n = n[1] || ((n = n[0]) < 530 ? 1 : n < 532 ? 2 : n < 532.05 ? 3 : n < 533 ? 4 : n < 534.03 ? 5 : n < 534.07 ? 6 : n < 534.1 ? 7 : n < 534.13 ? 8 : n < 534.16 ? 9 : n < 534.24 ? 10 : n < 534.3 ? 11 : n < 535.01 ? 12 : n < 535.02 ? '13+' : n < 535.07 ? 15 : n < 535.11 ? 16 : n < 535.19 ? 17 : n < 536.05 ? 18 : n < 536.1 ? 19 : n < 537.01 ? 20 : n < 537.11 ? '21+' : n < 537.13 ? 23 : n < 537.18 ? 24 : n < 537.24 ? 25 : n < 537.36 ? 26 : 'Blink' != B ? '27' : '28'))) : (B && (B[1] = 'like Safari'), (n = (n = n[0]) < 400 ? 1 : n < 500 ? 2 : n < 526 ? 3 : n < 533 ? 4 : n < 534 ? '4+' : n < 535 ? 5 : n < 537 ? 6 : n < 538 ? 7 : n < 601 ? 8 : '8')), B && (B[1] += ' ' + (n += 'number' == typeof n ? '.x' : /[.+]/.test(n) ? '' : '+')), 'Safari' == G && (!U || parseInt(U) > 45) && (U = n)),
                'Opera' == G && (n = /\bzbov|zvav$/.exec(V)) ? ((G += ' '), P.unshift('desktop mode'), 'zvav' == n ? ((G += 'Mini'), (U = null)) : (G += 'Mobile'), (V = V.replace(RegExp(' *' + n + '$'), ''))) : 'Safari' == G && /\bChrome\b/.exec(B && B[1]) && (P.unshift('desktop mode'), (G = 'Chrome Mobile'), (U = null), /\bOS X\b/.test(V) ? ((F = 'Apple'), (V = 'iOS 4.3+')) : (V = null)),
                U && 0 == U.indexOf((n = /[\d.]+$/.exec(V))) && e.indexOf('/' + n + '-') > -1 && (V = A(V.replace(n, ''))),
                B && !/\b(?:Avant|Nook)\b/.test(G) && (/Browser|Lunascape|Maxthon/.test(G) || ('Safari' != G && /^iOS/.test(V) && /\bSafari\b/.test(B[1])) || (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(G) && B[1])) && (n = B[B.length - 1]) && P.push(n),
                P.length && (P = ['(' + P.join('; ') + ')']),
                F && Z && 0 > Z.indexOf(F) && P.push('on ' + F),
                Z && P.push((/^on /.test(P[P.length - 1]) ? '' : 'on ') + Z),
                V &&
                    ((r = (n = / ([\d.+]+)$/.exec(V)) && '/' == V.charAt(V.length - n[0].length - 1)),
                    (V = {
                        architecture: 32,
                        family: n && !r ? V.replace(n[0], '') : V,
                        version: n ? n[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !r ? ' ' + e : '') + (64 == this.architecture ? ' 64-bit' : '');
                        }
                    })),
                (n = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(w)) && !/\bi686\b/i.test(w) ? (V && ((V.architecture = 64), (V.family = V.family.replace(RegExp(' *' + n), ''))), G && (/\bWOW64\b/i.test(e) || (k && /\w(?:86|32)$/.test(o.cpuClass || o.platform) && !/\bWin64; x64\b/i.test(e))) && P.unshift('32-bit')) : V && /^OS X/.test(V.family) && 'Chrome' == G && parseFloat(U) >= 39 && (V.architecture = 64),
                e || (e = null);
            var Q = {};
            return (
                (Q.description = e),
                (Q.layout = B && B[0]),
                (Q.manufacturer = F),
                (Q.name = G),
                (Q.prerelease = M),
                (Q.product = Z),
                (Q.ua = e),
                (Q.version = G && U),
                (Q.os = V || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return 'null';
                    }
                }),
                (Q.parse = N),
                (Q.toString = q),
                Q.version && P.unshift(U),
                Q.name && P.unshift(G),
                V && G && !(V == String(V).split(' ')[0] && (V == G.split(' ')[0] || Z)) && P.push(Z ? '(' + V + ')' : 'on ' + V),
                P.length && (Q.description = P.join(' ')),
                Q
            );
        }
        var C = N();
        'function' == typeof define && 'object' == typeof define.amd && define.amd
            ? ((a.platform = C),
              define(function () {
                  return C;
              }))
            : o && l
              ? I(C, function (e, n) {
                    o[n] = e;
                })
              : (a.platform = C);
    }.call(this);
