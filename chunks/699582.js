var i,
    r = n(863714),
    a = n(635535),
    s = {},
    o = (function () {
        var e = {};
        try {
            return Object.defineProperty(e, 'a', {}), 'a' in e;
        } catch (e) {
            return !1;
        }
    })(),
    l = !o && !Object.prototype.__defineGetter__,
    u = Object.prototype.hasOwnProperty,
    c = o
        ? Object.defineProperty
        : function (e, t, n) {
              'get' in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!u.call(e, t) || 'value' in n) && (e[t] = n.value);
          },
    d =
        Array.prototype.indexOf ||
        function (e) {
            var t = this;
            if (!t.length) return -1;
            for (var n = arguments[1] || 0, i = t.length; n < i; n++) if (t[n] === e) return n;
            return -1;
        },
    f =
        Object.create ||
        function (e, t) {
            var n;
            function i() {}
            for (var r in ((i.prototype = e), (n = new i()), t)) u.call(t, r) && c(n, r, t[r]);
            return n;
        },
    _ = Array.prototype.slice,
    p = Array.prototype.concat,
    h = Array.prototype.push,
    m = Array.prototype.join,
    g = Array.prototype.shift,
    E =
        (Array.prototype.unshift,
        Function.prototype.bind ||
            function (e) {
                var t = this,
                    n = _.call(arguments, 1);
                return 1 === t.length
                    ? function (i) {
                          return t.apply(e, p.call(n, _.call(arguments)));
                      }
                    : function () {
                          return t.apply(e, p.call(n, _.call(arguments)));
                      };
            }),
    v = f(null),
    y = Math.random(),
    I = f(null, {
        narrow: {},
        short: {},
        long: {}
    }),
    T = !1,
    b = !1,
    S = /^[A-Z]{3}$/,
    A = /-u(?:-[0-9a-z]{2,8})+/gi,
    N = {
        tags: {
            'art-lojban': 'jbo',
            'i-ami': 'ami',
            'i-bnn': 'bnn',
            'i-hak': 'hak',
            'i-klingon': 'tlh',
            'i-lux': 'lb',
            'i-navajo': 'nv',
            'i-pwn': 'pwn',
            'i-tao': 'tao',
            'i-tay': 'tay',
            'i-tsu': 'tsu',
            'no-bok': 'nb',
            'no-nyn': 'nn',
            'sgn-BE-FR': 'sfb',
            'sgn-BE-NL': 'vgt',
            'sgn-CH-DE': 'sgg',
            'zh-guoyu': 'cmn',
            'zh-hakka': 'hak',
            'zh-min-nan': 'nan',
            'zh-xiang': 'hsn',
            'sgn-BR': 'bzs',
            'sgn-CO': 'csn',
            'sgn-DE': 'gsg',
            'sgn-DK': 'dsl',
            'sgn-ES': 'ssp',
            'sgn-FR': 'fsl',
            'sgn-GB': 'bfi',
            'sgn-GR': 'gss',
            'sgn-IE': 'isg',
            'sgn-IT': 'ise',
            'sgn-JP': 'jsl',
            'sgn-MX': 'mfs',
            'sgn-NI': 'ncs',
            'sgn-NL': 'dse',
            'sgn-NO': 'nsl',
            'sgn-PT': 'psr',
            'sgn-SE': 'swl',
            'sgn-US': 'ase',
            'sgn-ZA': 'sfs',
            'zh-cmn': 'cmn',
            'zh-cmn-Hans': 'cmn-Hans',
            'zh-cmn-Hant': 'cmn-Hant',
            'zh-gan': 'gan',
            'zh-wuu': 'wuu',
            'zh-yue': 'yue'
        },
        subtags: {
            BU: 'MM',
            DD: 'DE',
            FX: 'FR',
            TP: 'TL',
            YD: 'YE',
            ZR: 'CD',
            heploc: 'alalc97',
            in: 'id',
            iw: 'he',
            ji: 'yi',
            jw: 'jv',
            mo: 'ro',
            ayx: 'nun',
            bjd: 'drl',
            ccq: 'rki',
            cjr: 'mom',
            cka: 'cmr',
            cmk: 'xch',
            drh: 'khk',
            drw: 'prs',
            gav: 'dev',
            hrr: 'jal',
            ibi: 'opa',
            kgh: 'kml',
            lcq: 'ppr',
            mst: 'mry',
            myt: 'mry',
            sca: 'hle',
            tie: 'ras',
            tkk: 'twm',
            tlw: 'weo',
            tnf: 'prs',
            ybd: 'rki',
            yma: 'lrr'
        },
        extLang: {
            aao: ['aao', 'ar'],
            abh: ['abh', 'ar'],
            abv: ['abv', 'ar'],
            acm: ['acm', 'ar'],
            acq: ['acq', 'ar'],
            acw: ['acw', 'ar'],
            acx: ['acx', 'ar'],
            acy: ['acy', 'ar'],
            adf: ['adf', 'ar'],
            ads: ['ads', 'sgn'],
            aeb: ['aeb', 'ar'],
            aec: ['aec', 'ar'],
            aed: ['aed', 'sgn'],
            aen: ['aen', 'sgn'],
            afb: ['afb', 'ar'],
            afg: ['afg', 'sgn'],
            ajp: ['ajp', 'ar'],
            apc: ['apc', 'ar'],
            apd: ['apd', 'ar'],
            arb: ['arb', 'ar'],
            arq: ['arq', 'ar'],
            ars: ['ars', 'ar'],
            ary: ['ary', 'ar'],
            arz: ['arz', 'ar'],
            ase: ['ase', 'sgn'],
            asf: ['asf', 'sgn'],
            asp: ['asp', 'sgn'],
            asq: ['asq', 'sgn'],
            asw: ['asw', 'sgn'],
            auz: ['auz', 'ar'],
            avl: ['avl', 'ar'],
            ayh: ['ayh', 'ar'],
            ayl: ['ayl', 'ar'],
            ayn: ['ayn', 'ar'],
            ayp: ['ayp', 'ar'],
            bbz: ['bbz', 'ar'],
            bfi: ['bfi', 'sgn'],
            bfk: ['bfk', 'sgn'],
            bjn: ['bjn', 'ms'],
            bog: ['bog', 'sgn'],
            bqn: ['bqn', 'sgn'],
            bqy: ['bqy', 'sgn'],
            btj: ['btj', 'ms'],
            bve: ['bve', 'ms'],
            bvl: ['bvl', 'sgn'],
            bvu: ['bvu', 'ms'],
            bzs: ['bzs', 'sgn'],
            cdo: ['cdo', 'zh'],
            cds: ['cds', 'sgn'],
            cjy: ['cjy', 'zh'],
            cmn: ['cmn', 'zh'],
            coa: ['coa', 'ms'],
            cpx: ['cpx', 'zh'],
            csc: ['csc', 'sgn'],
            csd: ['csd', 'sgn'],
            cse: ['cse', 'sgn'],
            csf: ['csf', 'sgn'],
            csg: ['csg', 'sgn'],
            csl: ['csl', 'sgn'],
            csn: ['csn', 'sgn'],
            csq: ['csq', 'sgn'],
            csr: ['csr', 'sgn'],
            czh: ['czh', 'zh'],
            czo: ['czo', 'zh'],
            doq: ['doq', 'sgn'],
            dse: ['dse', 'sgn'],
            dsl: ['dsl', 'sgn'],
            dup: ['dup', 'ms'],
            ecs: ['ecs', 'sgn'],
            esl: ['esl', 'sgn'],
            esn: ['esn', 'sgn'],
            eso: ['eso', 'sgn'],
            eth: ['eth', 'sgn'],
            fcs: ['fcs', 'sgn'],
            fse: ['fse', 'sgn'],
            fsl: ['fsl', 'sgn'],
            fss: ['fss', 'sgn'],
            gan: ['gan', 'zh'],
            gds: ['gds', 'sgn'],
            gom: ['gom', 'kok'],
            gse: ['gse', 'sgn'],
            gsg: ['gsg', 'sgn'],
            gsm: ['gsm', 'sgn'],
            gss: ['gss', 'sgn'],
            gus: ['gus', 'sgn'],
            hab: ['hab', 'sgn'],
            haf: ['haf', 'sgn'],
            hak: ['hak', 'zh'],
            hds: ['hds', 'sgn'],
            hji: ['hji', 'ms'],
            hks: ['hks', 'sgn'],
            hos: ['hos', 'sgn'],
            hps: ['hps', 'sgn'],
            hsh: ['hsh', 'sgn'],
            hsl: ['hsl', 'sgn'],
            hsn: ['hsn', 'zh'],
            icl: ['icl', 'sgn'],
            ils: ['ils', 'sgn'],
            inl: ['inl', 'sgn'],
            ins: ['ins', 'sgn'],
            ise: ['ise', 'sgn'],
            isg: ['isg', 'sgn'],
            isr: ['isr', 'sgn'],
            jak: ['jak', 'ms'],
            jax: ['jax', 'ms'],
            jcs: ['jcs', 'sgn'],
            jhs: ['jhs', 'sgn'],
            jls: ['jls', 'sgn'],
            jos: ['jos', 'sgn'],
            jsl: ['jsl', 'sgn'],
            jus: ['jus', 'sgn'],
            kgi: ['kgi', 'sgn'],
            knn: ['knn', 'kok'],
            kvb: ['kvb', 'ms'],
            kvk: ['kvk', 'sgn'],
            kvr: ['kvr', 'ms'],
            kxd: ['kxd', 'ms'],
            lbs: ['lbs', 'sgn'],
            lce: ['lce', 'ms'],
            lcf: ['lcf', 'ms'],
            liw: ['liw', 'ms'],
            lls: ['lls', 'sgn'],
            lsg: ['lsg', 'sgn'],
            lsl: ['lsl', 'sgn'],
            lso: ['lso', 'sgn'],
            lsp: ['lsp', 'sgn'],
            lst: ['lst', 'sgn'],
            lsy: ['lsy', 'sgn'],
            ltg: ['ltg', 'lv'],
            lvs: ['lvs', 'lv'],
            lzh: ['lzh', 'zh'],
            max: ['max', 'ms'],
            mdl: ['mdl', 'sgn'],
            meo: ['meo', 'ms'],
            mfa: ['mfa', 'ms'],
            mfb: ['mfb', 'ms'],
            mfs: ['mfs', 'sgn'],
            min: ['min', 'ms'],
            mnp: ['mnp', 'zh'],
            mqg: ['mqg', 'ms'],
            mre: ['mre', 'sgn'],
            msd: ['msd', 'sgn'],
            msi: ['msi', 'ms'],
            msr: ['msr', 'sgn'],
            mui: ['mui', 'ms'],
            mzc: ['mzc', 'sgn'],
            mzg: ['mzg', 'sgn'],
            mzy: ['mzy', 'sgn'],
            nan: ['nan', 'zh'],
            nbs: ['nbs', 'sgn'],
            ncs: ['ncs', 'sgn'],
            nsi: ['nsi', 'sgn'],
            nsl: ['nsl', 'sgn'],
            nsp: ['nsp', 'sgn'],
            nsr: ['nsr', 'sgn'],
            nzs: ['nzs', 'sgn'],
            okl: ['okl', 'sgn'],
            orn: ['orn', 'ms'],
            ors: ['ors', 'ms'],
            pel: ['pel', 'ms'],
            pga: ['pga', 'ar'],
            pks: ['pks', 'sgn'],
            prl: ['prl', 'sgn'],
            prz: ['prz', 'sgn'],
            psc: ['psc', 'sgn'],
            psd: ['psd', 'sgn'],
            pse: ['pse', 'ms'],
            psg: ['psg', 'sgn'],
            psl: ['psl', 'sgn'],
            pso: ['pso', 'sgn'],
            psp: ['psp', 'sgn'],
            psr: ['psr', 'sgn'],
            pys: ['pys', 'sgn'],
            rms: ['rms', 'sgn'],
            rsi: ['rsi', 'sgn'],
            rsl: ['rsl', 'sgn'],
            sdl: ['sdl', 'sgn'],
            sfb: ['sfb', 'sgn'],
            sfs: ['sfs', 'sgn'],
            sgg: ['sgg', 'sgn'],
            sgx: ['sgx', 'sgn'],
            shu: ['shu', 'ar'],
            slf: ['slf', 'sgn'],
            sls: ['sls', 'sgn'],
            sqk: ['sqk', 'sgn'],
            sqs: ['sqs', 'sgn'],
            ssh: ['ssh', 'ar'],
            ssp: ['ssp', 'sgn'],
            ssr: ['ssr', 'sgn'],
            svk: ['svk', 'sgn'],
            swc: ['swc', 'sw'],
            swh: ['swh', 'sw'],
            swl: ['swl', 'sgn'],
            syy: ['syy', 'sgn'],
            tmw: ['tmw', 'ms'],
            tse: ['tse', 'sgn'],
            tsm: ['tsm', 'sgn'],
            tsq: ['tsq', 'sgn'],
            tss: ['tss', 'sgn'],
            tsy: ['tsy', 'sgn'],
            tza: ['tza', 'sgn'],
            ugn: ['ugn', 'sgn'],
            ugy: ['ugy', 'sgn'],
            ukl: ['ukl', 'sgn'],
            uks: ['uks', 'sgn'],
            urk: ['urk', 'ms'],
            uzn: ['uzn', 'uz'],
            uzs: ['uzs', 'uz'],
            vgt: ['vgt', 'sgn'],
            vkk: ['vkk', 'ms'],
            vkt: ['vkt', 'ms'],
            vsi: ['vsi', 'sgn'],
            vsl: ['vsl', 'sgn'],
            vsv: ['vsv', 'sgn'],
            wuu: ['wuu', 'zh'],
            xki: ['xki', 'sgn'],
            xml: ['xml', 'sgn'],
            xmm: ['xmm', 'ms'],
            xms: ['xms', 'sgn'],
            yds: ['yds', 'sgn'],
            ysl: ['ysl', 'sgn'],
            yue: ['yue', 'zh'],
            zib: ['zib', 'sgn'],
            zlm: ['zlm', 'ms'],
            zmi: ['zmi', 'ms'],
            zsl: ['zsl', 'sgn'],
            zsm: ['zsm', 'ms']
        }
    },
    C = {
        BHD: 3,
        BYR: 0,
        XOF: 0,
        BIF: 0,
        XAF: 0,
        CLF: 4,
        CLP: 0,
        KMF: 0,
        DJF: 0,
        XPF: 0,
        GNF: 0,
        ISK: 0,
        IQD: 3,
        JPY: 0,
        JOD: 3,
        KRW: 0,
        KWD: 3,
        LYD: 3,
        OMR: 3,
        PYG: 0,
        RWF: 0,
        TND: 3,
        UGX: 0,
        UYI: 0,
        VUV: 0,
        VND: 0
    };
function R(e) {
    return !(!r.expBCP47Syntax.test(e) || r.expVariantDupes.test(e) || r.expSingletonDupes.test(e));
}
function O(e) {
    var t, n;
    n = (e = e.toLowerCase()).split('-');
    for (var i = 1, a = n.length; i < a; i++)
        if (2 === n[i].length) n[i] = n[i].toUpperCase();
        else if (4 === n[i].length) n[i] = n[i].charAt(0).toUpperCase() + n[i].slice(1);
        else if (1 === n[i].length && 'x' !== n[i]) break;
    (t = (e = m.call(n, '-')).match(r.expExtSequences)) && t.length > 1 && (t.sort(), (e = e.replace(RegExp('(?:' + r.expExtSequences.source + ')+', 'i'), m.call(t, '')))), u.call(N.tags, e) && (e = N.tags[e]), (n = e.split('-'));
    for (var i = 1, a = n.length; i < a; i++) u.call(N.subtags, n[i]) ? (n[i] = N.subtags[n[i]]) : u.call(N.extLang, n[i]) && ((n[i] = N.extLang[n[i]][0]), 1 === i && N.extLang[n[1]][1] === n[0] && ((n = _.call(n, i++)), (a -= 1)));
    return m.call(n, '-');
}
function D() {
    return i;
}
function L(e) {
    var t = eh(String(e));
    return !1 !== S.test(t);
}
function x(e) {
    if (void 0 === e) return new e_();
    for (var t = new e_(), e = 'string' == typeof e ? [e] : e, n = em(e), i = n.length, r = 0; r < i; ) {
        var a = String(r);
        if (a in n) {
            var s = n[a];
            if (null == s || ('string' != typeof s && 'object' != typeof s)) throw TypeError('String or Object type expected');
            var o = String(s);
            if (!R(o)) throw RangeError("'" + o + "' is not a structurally valid language tag");
            (o = O(o)), -1 === d.call(t, o) && h.call(t, o);
        }
        r++;
    }
    return t;
}
function P(e, t) {
    for (var n = t; ; ) {
        if (d.call(e, n) > -1) return n;
        var i = n.lastIndexOf('-');
        if (i < 0) return;
        i >= 2 && '-' === n.charAt(i - 2) && (i -= 2), (n = n.substring(0, i));
    }
}
function w(e, t) {
    for (var n, i = 0, r = t.length; i < r && !n; ) {
        var a = t[i],
            s = String(a).replace(A, ''),
            n = P(e, s);
        i++;
    }
    var o = new ef();
    if (void 0 !== n) {
        if (((o['[[locale]]'] = n), String(a) !== String(s))) {
            var l = a.match(A)[0],
                u = a.indexOf('-u-');
            (o['[[extension]]'] = l), (o['[[extensionIndex]]'] = u);
        }
    } else o['[[locale]]'] = D();
    return o;
}
function M(e, t) {
    return w(e, t);
}
function k(e, t, n, i, r) {
    if (0 === e.length) throw ReferenceError('No locale data has been provided for this object yet.');
    if ('lookup' === n['[[localeMatcher]]']) var a = w(e, t);
    else var a = M(e, t);
    var s = a['[[locale]]'];
    if (u.call(a, '[[extension]]'))
        var o = a['[[extension]]'],
            l = a['[[extensionIndex]]'],
            c = String.prototype.split,
            f = c.call(o, '-'),
            _ = f.length;
    var p = new ef();
    p['[[dataLocale]]'] = s;
    for (var h = '-u', m = 0, g = i.length; m < g; ) {
        var E = i[m],
            v = r[s][E],
            y = v['0'],
            I = '',
            T = d;
        if (void 0 !== f) {
            var b = T.call(f, E);
            if (-1 !== b) {
                if (b + 1 < _ && f[b + 1].length > 2) {
                    var S = f[b + 1],
                        A = T.call(v, S);
                    if (-1 !== A)
                        var y = S,
                            I = '-' + E + '-' + y;
                } else {
                    var A = T(v, 'true');
                    if (-1 !== A) var y = 'true';
                }
            }
        }
        if (u.call(n, '[[' + E + ']]')) {
            var N = n['[[' + E + ']]'];
            -1 !== T.call(v, N) && N !== y && ((y = N), (I = ''));
        }
        (p['[[' + E + ']]'] = y), (h += I), m++;
    }
    if (h.length > 2) var s = s.substring(0, l) + h + s.substring(l);
    return (p['[[locale]]'] = s), p;
}
function U(e, t) {
    for (var n = t.length, i = new e_(), r = 0; r < n; ) {
        var a = t[r];
        void 0 !== P(e, String(a).replace(A, '')) && h.call(i, a), r++;
    }
    return _.call(i);
}
function G(e, t) {
    return U(e, t);
}
function B(e, t, n) {
    if (void 0 !== n) {
        var n = new ef(em(n)),
            i = n.localeMatcher;
        if (void 0 !== i && 'lookup' !== (i = String(i)) && 'best fit' !== i) throw RangeError('matcher should be "lookup" or "best fit"');
    }
    if (void 0 === i || 'best fit' === i) var r = G(e, t);
    else var r = U(e, t);
    for (var a in r)
        u.call(r, a) &&
            c(r, a, {
                writable: !1,
                configurable: !1,
                value: r[a]
            });
    return c(r, 'length', { writable: !1 }), r;
}
function Z(e, t, n, i, r) {
    var a = e[t];
    if (void 0 !== a) {
        if (((a = 'boolean' === n ? !!a : 'string' === n ? String(a) : a), void 0 !== i && -1 === d.call(i, a))) throw RangeError("'" + a + "' is not an allowed value for `" + t + '`');
        return a;
    }
    return r;
}
function F(e, t, n, i, r) {
    var a = e[t];
    if (void 0 !== a) {
        if (isNaN((a = Number(a))) || a < n || a > i) throw RangeError('Value is not a number or outside accepted range');
        return Math.floor(a);
    }
    return r;
}
function V() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== s ? j(em(this), e, t) : new s.NumberFormat(e, t);
}
function j(e, t, n) {
    var i = eg(e),
        r = ep();
    if (!0 === i['[[initializedIntlObject]]']) throw TypeError('`this` object has already been initialized as an Intl object');
    c(e, '__getInternalProperties', {
        value: function () {
            if (arguments[0] === y) return i;
        }
    }),
        (i['[[initializedIntlObject]]'] = !0);
    var a = x(t);
    n = void 0 === n ? {} : em(n);
    var s = new ef(),
        o = Z(n, 'localeMatcher', 'string', new e_('lookup', 'best fit'), 'best fit');
    s['[[localeMatcher]]'] = o;
    var u = v.NumberFormat['[[localeData]]'],
        d = k(v.NumberFormat['[[availableLocales]]'], a, s, v.NumberFormat['[[relevantExtensionKeys]]'], u);
    (i['[[locale]]'] = d['[[locale]]']), (i['[[numberingSystem]]'] = d['[[nu]]']), (i['[[dataLocale]]'] = d['[[dataLocale]]']);
    var f = d['[[dataLocale]]'],
        _ = Z(n, 'style', 'string', new e_('decimal', 'percent', 'currency'), 'decimal');
    i['[[style]]'] = _;
    var p = Z(n, 'currency', 'string');
    if (void 0 !== p && !L(p)) throw RangeError("'" + p + "' is not a valid currency code");
    if ('currency' === _ && void 0 === p) throw TypeError('Currency code is required when style is currency');
    if ('currency' === _) {
        (p = p.toUpperCase()), (i['[[currency]]'] = p);
        var h = H(p);
    }
    var m = Z(n, 'currencyDisplay', 'string', new e_('code', 'symbol', 'name'), 'symbol');
    'currency' === _ && (i['[[currencyDisplay]]'] = m);
    var g = F(n, 'minimumIntegerDigits', 1, 21, 1);
    i['[[minimumIntegerDigits]]'] = g;
    var E = F(n, 'minimumFractionDigits', 0, 20, 'currency' === _ ? h : 0);
    i['[[minimumFractionDigits]]'] = E;
    var I = 'currency' === _ ? Math.max(E, h) : 'percent' === _ ? Math.max(E, 0) : Math.max(E, 3),
        T = F(n, 'maximumFractionDigits', E, 20, I);
    i['[[maximumFractionDigits]]'] = T;
    var b = n.minimumSignificantDigits,
        S = n.maximumSignificantDigits;
    (void 0 !== b || void 0 !== S) && ((b = F(n, 'minimumSignificantDigits', 1, 21, 1)), (S = F(n, 'maximumSignificantDigits', b, 21, 21)), (i['[[minimumSignificantDigits]]'] = b), (i['[[maximumSignificantDigits]]'] = S));
    var A = Z(n, 'useGrouping', 'boolean', void 0, !0);
    i['[[useGrouping]]'] = A;
    var N = u[f].patterns[_];
    return (i['[[positivePattern]]'] = N.positivePattern), (i['[[negativePattern]]'] = N.negativePattern), (i['[[boundFormat]]'] = void 0), (i['[[initializedNumberFormat]]'] = !0), l && (e.format = Y.call(e)), r.exp.test(r.input), e;
}
function H(e) {
    return void 0 !== C[e] ? C[e] : 2;
}
function Y() {
    var e = this != null && 'object' == typeof this && eg(this);
    if (!e || !e['[[initializedNumberFormat]]']) throw TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');
    if (void 0 === e['[[boundFormat]]']) {
        var t = function (e) {
                return W(this, Number(e));
            },
            n = E.call(t, this);
        e['[[boundFormat]]'] = n;
    }
    return e['[[boundFormat]]'];
}
function W(e, t) {
    var n,
        i = ep(),
        r = eg(e),
        a = r['[[dataLocale]]'],
        s = r['[[numberingSystem]]'],
        o = v.NumberFormat['[[localeData]]'][a],
        l = o.symbols[s] || o.symbols.latn,
        c = !1;
    if (!1 === isFinite(t)) isNaN(t) ? (n = l.nan) : ((n = l.infinity), t < 0 && (c = !0));
    else {
        if ((t < 0 && ((c = !0), (t = -t)), 'percent' === r['[[style]]'] && (t *= 100), (n = u.call(r, '[[minimumSignificantDigits]]') && u.call(r, '[[maximumSignificantDigits]]') ? K(t, r['[[minimumSignificantDigits]]'], r['[[maximumSignificantDigits]]']) : z(t, r['[[minimumIntegerDigits]]'], r['[[minimumFractionDigits]]'], r['[[maximumFractionDigits]]'])), q[s])) {
            var d = q[r['[[numberingSystem]]']];
            n = String(n).replace(/\d/g, function (e) {
                return d[e];
            });
        } else n = String(n);
        if (((n = n.replace(/\./g, l.decimal)), !0 === r['[[useGrouping]]'])) {
            var f = n.split(l.decimal),
                _ = f[0],
                p = o.patterns.primaryGroupSize || 3,
                g = o.patterns.secondaryGroupSize || p;
            if (_.length > p) {
                var E = new e_(),
                    y = _.length - p,
                    I = y % g,
                    T = _.slice(0, I);
                for (T.length && h.call(E, T); I < y; ) h.call(E, _.slice(I, I + g)), (I += g);
                h.call(E, _.slice(y)), (f[0] = m.call(E, l.group));
            }
            n = m.call(f, l.decimal);
        }
    }
    var b = r[!0 === c ? '[[negativePattern]]' : '[[positivePattern]]'];
    if (((b = b.replace('{number}', n)), 'currency' === r['[[style]]'])) {
        var S,
            A = r['[[currency]]'],
            N = o.currencies[A];
        (S = ('symbol' === r['[[currencyDisplay]]'] && N) || A), (b = b.replace('{currency}', S));
    }
    return i.exp.test(i.input), b;
}
function K(e, t, n) {
    var i = n;
    if (0 === e)
        var r = m.call(Array(i + 1), '0'),
            a = 0;
    else
        var a = eu(Math.abs(e)),
            s = Math.round(Math.exp(Math.abs(a - i + 1) * Math.LN10)),
            r = String(Math.round(a - i + 1 < 0 ? e * s : e / s));
    if (a >= i) return r + m.call(Array(a - i + 1 + 1), '0');
    if (a === i - 1) return r;
    if ((a >= 0 ? (r = r.slice(0, a + 1) + '.' + r.slice(a + 1)) : a < 0 && (r = '0.' + m.call(Array(-(a + 1) + 1), '0') + r), r.indexOf('.') >= 0 && n > t)) {
        for (var o = n - t; o > 0 && '0' === r.charAt(r.length - 1); ) (r = r.slice(0, -1)), o--;
        '.' === r.charAt(r.length - 1) && (r = r.slice(0, -1));
    }
    return r;
}
function z(e, t, n, i) {
    var r,
        a = Number.prototype.toFixed.call(e, i),
        s = a.split('.')[0].length,
        o = i - n,
        l = (r = a.indexOf('e')) > -1 ? a.slice(r + 1) : 0;
    for (l && ((a = a.slice(0, r).replace('.', '')), (a += m.call(Array(l - (a.length - 1) + 1), '0') + '.' + m.call(Array(i + 1), '0')), (s = a.length)); o > 0 && '0' === a.slice(-1); ) (a = a.slice(0, -1)), o--;
    if (('.' === a.slice(-1) && (a = a.slice(0, -1)), s < t)) var u = m.call(Array(t - s + 1), '0');
    return (u || '') + a;
}
c(s, 'NumberFormat', {
    configurable: !0,
    writable: !0,
    value: V
}),
    c(s.NumberFormat, 'prototype', { writable: !1 }),
    (v.NumberFormat = {
        '[[availableLocales]]': [],
        '[[relevantExtensionKeys]]': ['nu'],
        '[[localeData]]': {}
    }),
    c(s.NumberFormat, 'supportedLocalesOf', {
        configurable: !0,
        writable: !0,
        value: E.call(ec, v.NumberFormat)
    }),
    c(s.NumberFormat.prototype, 'format', {
        configurable: !0,
        get: Y
    });
var q = {
    arab: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
    arabext: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
    bali: ['᭐', '᭑', '᭒', '᭓', '᭔', '᭕', '᭖', '᭗', '᭘', '᭙'],
    beng: ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'],
    deva: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
    fullwide: ['０', '１', '２', '３', '４', '５', '６', '７', '８', '９'],
    gujr: ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'],
    guru: ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'],
    hanidec: ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
    khmr: ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'],
    knda: ['೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'],
    laoo: ['໐', '໑', '໒', '໓', '໔', '໕', '໖', '໗', '໘', '໙'],
    latn: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    limb: ['᥆', '᥇', '᥈', '᥉', '᥊', '᥋', '᥌', '᥍', '᥎', '᥏'],
    mlym: ['൦', '൧', '൨', '൩', '൪', '൫', '൬', '൭', '൮', '൯'],
    mong: ['᠐', '᠑', '᠒', '᠓', '᠔', '᠕', '᠖', '᠗', '᠘', '᠙'],
    mymr: ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'],
    orya: ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'],
    tamldec: ['௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'],
    telu: ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯'],
    thai: ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'],
    tibt: ['༠', '༡', '༢', '༣', '༤', '༥', '༦', '༧', '༨', '༩']
};
function Q() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== s ? X(em(this), e, t) : new s.DateTimeFormat(e, t);
}
function X(e, t, n) {
    var i = eg(e),
        r = ep();
    if (!0 === i['[[initializedIntlObject]]']) throw TypeError('`this` object has already been initialized as an Intl object');
    c(e, '__getInternalProperties', {
        value: function () {
            if (arguments[0] === y) return i;
        }
    }),
        (i['[[initializedIntlObject]]'] = !0);
    var a = x(t),
        n = ee(n, 'any', 'date'),
        s = new ef();
    (T = Z(n, 'localeMatcher', 'string', new e_('lookup', 'best fit'), 'best fit')), (s['[[localeMatcher]]'] = T);
    var o = v.DateTimeFormat,
        d = o['[[localeData]]'],
        f = k(o['[[availableLocales]]'], a, s, o['[[relevantExtensionKeys]]'], d);
    (i['[[locale]]'] = f['[[locale]]']), (i['[[calendar]]'] = f['[[ca]]']), (i['[[numberingSystem]]'] = f['[[nu]]']), (i['[[dataLocale]]'] = f['[[dataLocale]]']);
    var _ = f['[[dataLocale]]'],
        p = n.timeZone;
    if (void 0 !== p && 'UTC' !== (p = eh(p))) throw RangeError('timeZone is not supported.');
    for (var h in ((i['[[timeZone]]'] = p), (s = new ef()), J))
        if (u.call(J, h)) {
            var m = Z(n, h, 'string', J[h]);
            s['[[' + h + ']]'] = m;
        }
    var g,
        E = d[_],
        I = $(E.formats),
        T = Z(n, 'formatMatcher', 'string', new e_('basic', 'best fit'), 'best fit');
    for (var h in ((E.formats = I), (g = 'basic' === T ? et(s, I) : ei(s, I)), J))
        if (u.call(J, h) && u.call(g, h)) {
            var b = g[h];
            i['[[' + h + ']]'] = b;
        }
    var S,
        A = Z(n, 'hour12', 'boolean');
    if (i['[[hour]]']) {
        if (((A = void 0 === A ? E.hour12 : A), (i['[[hour12]]'] = A), !0 === A)) {
            var N = E.hourNo0;
            (i['[[hourNo0]]'] = N), (S = g.pattern12);
        } else S = g.pattern;
    } else S = g.pattern;
    return (i['[[pattern]]'] = S), (i['[[boundFormat]]'] = void 0), (i['[[initializedDateTimeFormat]]'] = !0), l && (e.format = er.call(e)), r.exp.test(r.input), e;
}
c(s.NumberFormat.prototype, 'resolvedOptions', {
    configurable: !0,
    writable: !0,
    value: function () {
        var e,
            t = new ef(),
            n = ['locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'],
            i = this != null && 'object' == typeof this && eg(this);
        if (!i || !i['[[initializedNumberFormat]]']) throw TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');
        for (var r = 0, a = n.length; r < a; r++)
            u.call(i, (e = '[[' + n[r] + ']]')) &&
                (t[n[r]] = {
                    value: i[e],
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
        return f({}, t);
    }
}),
    c(s, 'DateTimeFormat', {
        configurable: !0,
        writable: !0,
        value: Q
    }),
    c(Q, 'prototype', { writable: !1 });
var J = {
    weekday: ['narrow', 'short', 'long'],
    era: ['narrow', 'short', 'long'],
    year: ['2-digit', 'numeric'],
    month: ['2-digit', 'numeric', 'narrow', 'short', 'long'],
    day: ['2-digit', 'numeric'],
    hour: ['2-digit', 'numeric'],
    minute: ['2-digit', 'numeric'],
    second: ['2-digit', 'numeric'],
    timeZoneName: ['short', 'long']
};
function $(e) {
    return '[object Array]' === Object.prototype.toString.call(e) ? e : a.createDateTimeFormats(e);
}
function ee(e, t, n) {
    if (void 0 === e) e = null;
    else {
        var i = em(e);
        for (var r in ((e = new ef()), i)) e[r] = i[r];
    }
    var e = f(e),
        a = !0;
    return ('date' === t || 'any' === t) && (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) && (a = !1), ('time' === t || 'any' === t) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (a = !1), a && ('date' === n || 'all' === n) && (e.year = e.month = e.day = 'numeric'), a && ('time' === n || 'all' === n) && (e.hour = e.minute = e.second = 'numeric'), e;
}
function et(e, t) {
    return en(e, t);
}
function en(e, t, n) {
    for (var i, r = 8, a = 120, s = 20, o = 8, l = 6, c = 6, f = 3, _ = -1 / 0, p = 0, h = t.length; p < h; ) {
        var m = t[p],
            g = 0;
        for (var E in J)
            if (u.call(J, E)) {
                var v = e['[[' + E + ']]'],
                    y = u.call(m, E) ? m[E] : void 0;
                if (void 0 === v && void 0 !== y) g -= s;
                else if (void 0 !== v && void 0 === y) g -= a;
                else {
                    var I = ['2-digit', 'numeric', 'narrow', 'short', 'long'],
                        T = d.call(I, v),
                        b = Math.max(Math.min(d.call(I, y) - T, 2), -2);
                    n && ((('numeric' === v || '2-digit' === v) && 'numeric' !== y && '2-digit' !== y) || ('numeric' !== v && '2-digit' !== v && ('2-digit' === y || 'numeric' === y))) && (g -= r), 2 === b ? (g -= l) : 1 === b ? (g -= f) : -1 === b ? (g -= c) : -2 === b && (g -= o);
                }
            }
        g > _ && ((_ = g), (i = m)), p++;
    }
    return i;
}
function ei(e, t) {
    return en(e, t, !0);
}
function er() {
    var e = this != null && 'object' == typeof this && eg(this);
    if (!e || !e['[[initializedDateTimeFormat]]']) throw TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');
    if (void 0 === e['[[boundFormat]]']) {
        var t = function () {
                var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
                return ea(this, e);
            },
            n = E.call(t, this);
        e['[[boundFormat]]'] = n;
    }
    return e['[[boundFormat]]'];
}
function ea(e, t) {
    if (!isFinite(t)) throw RangeError('Invalid valid date passed to format');
    var n = e.__getInternalProperties(y),
        i = ep(),
        r = n['[[locale]]'],
        a = new s.NumberFormat([r], { useGrouping: !1 }),
        o = new s.NumberFormat([r], {
            minimumIntegerDigits: 2,
            useGrouping: !1
        }),
        l = es(t, n['[[calendar]]'], n['[[timeZone]]']),
        c = n['[[pattern]]'],
        d = n['[[dataLocale]]'],
        f = v.DateTimeFormat['[[localeData]]'][d].calendars,
        _ = n['[[calendar]]'];
    for (var p in J)
        if (u.call(n, '[[' + p + ']]')) {
            var h,
                m,
                g = n['[[' + p + ']]'],
                E = l['[[' + p + ']]'];
            if (('year' === p && E <= 0 ? (E = 1 - E) : 'month' === p ? E++ : 'hour' === p && !0 === n['[[hour12]]'] && ((E %= 12), (h = E !== l['[[' + p + ']]']), 0 === E && !0 === n['[[hourNo0]]'] && (E = 12)), 'numeric' === g)) m = W(a, E);
            else if ('2-digit' === g) (m = W(o, E)).length > 2 && (m = m.slice(-2));
            else if (g in I)
                switch (p) {
                    case 'month':
                        m = ed(f, _, 'months', g, l['[[' + p + ']]']);
                        break;
                    case 'weekday':
                        try {
                            m = ed(f, _, 'days', g, l['[[' + p + ']]']);
                        } catch (e) {
                            throw Error('Could not find weekday data for locale ' + r);
                        }
                        break;
                    case 'timeZoneName':
                        m = '';
                        break;
                    default:
                        m = l['[[' + p + ']]'];
                }
            c = c.replace('{' + p + '}', m);
        }
    return !0 === n['[[hour12]]'] && ((m = ed(f, _, 'dayPeriods', h ? 'pm' : 'am')), (c = c.replace('{ampm}', m))), i.exp.test(i.input), c;
}
function es(e, t, n) {
    var i = new Date(e),
        r = 'get' + (n || '');
    return new ef({
        '[[weekday]]': i[r + 'Day'](),
        '[[era]]': +(i[r + 'FullYear']() >= 0),
        '[[year]]': i[r + 'FullYear'](),
        '[[month]]': i[r + 'Month'](),
        '[[day]]': i[r + 'Date'](),
        '[[hour]]': i[r + 'Hours'](),
        '[[minute]]': i[r + 'Minutes'](),
        '[[second]]': i[r + 'Seconds'](),
        '[[inDST]]': !1
    });
}
(v.DateTimeFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['ca', 'nu'],
    '[[localeData]]': {}
}),
    c(s.DateTimeFormat, 'supportedLocalesOf', {
        configurable: !0,
        writable: !0,
        value: E.call(ec, v.DateTimeFormat)
    }),
    c(s.DateTimeFormat.prototype, 'format', {
        configurable: !0,
        get: er
    }),
    c(s.DateTimeFormat.prototype, 'resolvedOptions', {
        writable: !0,
        configurable: !0,
        value: function () {
            var e,
                t = new ef(),
                n = ['locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'],
                i = this != null && 'object' == typeof this && eg(this);
            if (!i || !i['[[initializedDateTimeFormat]]']) throw TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');
            for (var r = 0, a = n.length; r < a; r++)
                u.call(i, (e = '[[' + n[r] + ']]')) &&
                    (t[n[r]] = {
                        value: i[e],
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                    });
            return f({}, t);
        }
    });
var eo = (s.__localeSensitiveProtos = {
    Number: {},
    Date: {}
});
function el(e, t) {
    if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
    var n,
        r = [t],
        a = t.split('-');
    for (a.length > 2 && 4 === a[1].length && h.call(r, a[0] + '-' + a[2]); (n = g.call(r)); ) h.call(v.NumberFormat['[[availableLocales]]'], n), (v.NumberFormat['[[localeData]]'][n] = e.number), e.date && ((e.date.nu = e.number.nu), h.call(v.DateTimeFormat['[[availableLocales]]'], n), (v.DateTimeFormat['[[localeData]]'][n] = e.date));
    void 0 === i && (i = t), T || (j(s.NumberFormat.prototype), (T = !0)), e.date && !b && (X(s.DateTimeFormat.prototype), (b = !0));
}
function eu(e) {
    if ('function' == typeof Math.log10) return Math.floor(Math.log10(e));
    var t = Math.round(Math.log(e) * Math.LOG10E);
    return t - (Number('1e' + t) > e);
}
function ec(e) {
    if (!u.call(this, '[[availableLocales]]')) throw TypeError('supportedLocalesOf() is not a constructor');
    var t = ep(),
        n = arguments[1],
        i = this['[[availableLocales]]'],
        r = x(e);
    return t.exp.test(t.input), B(i, r, n);
}
function ed(e, t, n, i, r) {
    var a = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
        s = {
            narrow: ['short', 'long'],
            short: ['long', 'narrow'],
            long: ['short', 'narrow']
        },
        o = u.call(a, i) ? a[i] : u.call(a, s[i][0]) ? a[s[i][0]] : a[s[i][1]];
    return null != r ? o[r] : o;
}
function ef(e) {
    for (var t in e)
        (e instanceof ef || u.call(e, t)) &&
            c(this, t, {
                value: e[t],
                enumerable: !0,
                writable: !0,
                configurable: !0
            });
}
function e_() {
    c(this, 'length', {
        writable: !0,
        value: 0
    }),
        arguments.length && h.apply(this, _.call(arguments));
}
function ep() {
    for (var e = /[.?*+^$[\]\\(){}|-]/g, t = RegExp.lastMatch || '', n = RegExp.multiline ? 'm' : '', i = { input: RegExp.input }, r = new e_(), a = !1, s = {}, o = 1; o <= 9; o++) a = (s['$' + o] = RegExp['$' + o]) || a;
    if (((t = t.replace(e, '\\$&')), a))
        for (var o = 1; o <= 9; o++) {
            var l = s['$' + o];
            l ? ((l = l.replace(e, '\\$&')), (t = t.replace(l, '(' + l + ')'))) : (t = '()' + t), h.call(r, t.slice(0, t.indexOf('(') + 1)), (t = t.slice(t.indexOf('(') + 1));
        }
    return (i.exp = new RegExp(m.call(r, '') + t, n)), i;
}
function eh(e) {
    for (var t = e.length; t--; ) {
        var n = e.charAt(t);
        n >= 'a' && n <= 'z' && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1));
    }
    return e;
}
function em(e) {
    if (null == e) throw TypeError('Cannot convert null or undefined to object');
    return Object(e);
}
function eg(e) {
    return u.call(e, '__getInternalProperties') ? e.__getInternalProperties(y) : f(null);
}
(eo.Number.toLocaleString = function () {
    if ('[object Number]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a number for Number.prototype.toLocaleString()');
    return W(new V(arguments[0], arguments[1]), this);
}),
    (eo.Date.toLocaleString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = ee(n, 'any', 'all');
        return ea(new Q(t, n), e);
    }),
    (eo.Date.toLocaleDateString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = ee(n, 'date', 'date');
        return ea(new Q(t, n), e);
    }),
    (eo.Date.toLocaleTimeString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = ee(n, 'time', 'time');
        return ea(new Q(t, n), e);
    }),
    c(s, '__applyLocaleSensitivePrototypes', {
        writable: !0,
        configurable: !0,
        value: function () {
            for (var e in (c(Number.prototype, 'toLocaleString', {
                writable: !0,
                configurable: !0,
                value: eo.Number.toLocaleString
            }),
            c(Date.prototype, 'toLocaleString', {
                writable: !0,
                configurable: !0,
                value: eo.Date.toLocaleString
            }),
            eo.Date))
                u.call(eo.Date, e) &&
                    c(Date.prototype, e, {
                        writable: !0,
                        configurable: !0,
                        value: eo.Date[e]
                    });
        }
    }),
    c(s, '__addLocaleData', {
        value: function (e) {
            if (!R(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            el(e, e.locale);
        }
    }),
    (ef.prototype = f(null)),
    (e_.prototype = f(null)),
    (t.default = s);
