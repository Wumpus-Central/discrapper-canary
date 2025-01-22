var i = r(863714),
    a = r(635535),
    o,
    s = {},
    l = (function () {
        var e = {};
        try {
            return Object.defineProperty(e, 'a', {}), 'a' in e;
        } catch (e) {
            return !1;
        }
    })(),
    u = !l && !Object.prototype.__defineGetter__,
    c = Object.prototype.hasOwnProperty,
    d = l
        ? Object.defineProperty
        : function (e, n, r) {
              'get' in r && e.__defineGetter__ ? e.__defineGetter__(n, r.get) : (!c.call(e, n) || 'value' in r) && (e[n] = r.value);
          },
    f =
        Array.prototype.indexOf ||
        function (e) {
            var n = this;
            if (!n.length) return -1;
            for (var r = arguments[1] || 0, i = n.length; r < i; r++) if (n[r] === e) return r;
            return -1;
        },
    p =
        Object.create ||
        function (e, n) {
            var r;
            function i() {}
            for (var a in ((i.prototype = e), (r = new i()), n)) c.call(n, a) && d(r, a, n[a]);
            return r;
        },
    h = Array.prototype.slice,
    _ = Array.prototype.concat,
    m = Array.prototype.push,
    g = Array.prototype.join,
    E = Array.prototype.shift,
    v =
        (Array.prototype.unshift,
        Function.prototype.bind ||
            function (e) {
                var n = this,
                    r = h.call(arguments, 1);
                return 1 === n.length
                    ? function (i) {
                          return n.apply(e, _.call(r, h.call(arguments)));
                      }
                    : function () {
                          return n.apply(e, _.call(r, h.call(arguments)));
                      };
            }),
    y = p(null),
    b = Math.random(),
    I = p(null, {
        narrow: {},
        short: {},
        long: {}
    }),
    T = !1,
    S = !1,
    A = /^[A-Z]{3}$/,
    C = /-u(?:-[0-9a-z]{2,8})+/gi,
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
    R = {
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
function O(e) {
    return !(!i.expBCP47Syntax.test(e) || i.expVariantDupes.test(e) || i.expSingletonDupes.test(e)) && !0;
}
function D(e) {
    var n, r;
    r = (e = e.toLowerCase()).split('-');
    for (var a = 1, o = r.length; a < o; a++)
        if (2 === r[a].length) r[a] = r[a].toUpperCase();
        else if (4 === r[a].length) r[a] = r[a].charAt(0).toUpperCase() + r[a].slice(1);
        else if (1 === r[a].length && 'x' !== r[a]) break;
    (n = (e = g.call(r, '-')).match(i.expExtSequences)) && n.length > 1 && (n.sort(), (e = e.replace(RegExp('(?:' + i.expExtSequences.source + ')+', 'i'), g.call(n, '')))), c.call(N.tags, e) && (e = N.tags[e]), (r = e.split('-'));
    for (var a = 1, o = r.length; a < o; a++) c.call(N.subtags, r[a]) ? (r[a] = N.subtags[r[a]]) : c.call(N.extLang, r[a]) && ((r[a] = N.extLang[r[a]][0]), 1 === a && N.extLang[r[1]][1] === r[0] && ((r = h.call(r, a++)), (o -= 1)));
    return g.call(r, '-');
}
function L() {
    return o;
}
function x(e) {
    var n = em(String(e));
    return !1 !== A.test(n) && !0;
}
function w(e) {
    if (void 0 === e) return new eh();
    for (var n = new eh(), e = 'string' == typeof e ? [e] : e, r = eg(e), i = r.length, a = 0; a < i; ) {
        var o = String(a);
        if (o in r) {
            var s = r[o];
            if (null == s || ('string' != typeof s && 'object' != typeof s)) throw TypeError('String or Object type expected');
            var l = String(s);
            if (!O(l)) throw RangeError("'" + l + "' is not a structurally valid language tag");
            (l = D(l)), -1 === f.call(n, l) && m.call(n, l);
        }
        a++;
    }
    return n;
}
function P(e, n) {
    for (var r = n; ; ) {
        if (f.call(e, r) > -1) return r;
        var i = r.lastIndexOf('-');
        if (i < 0) return;
        i >= 2 && '-' === r.charAt(i - 2) && (i -= 2), (r = r.substring(0, i));
    }
}
function M(e, n) {
    for (var r, i = 0, a = n.length; i < a && !r; ) {
        var o = n[i],
            s = String(o).replace(C, ''),
            r = P(e, s);
        i++;
    }
    var l = new ep();
    if (void 0 !== r) {
        if (((l['[[locale]]'] = r), String(o) !== String(s))) {
            var u = o.match(C)[0],
                c = o.indexOf('-u-');
            (l['[[extension]]'] = u), (l['[[extensionIndex]]'] = c);
        }
    } else l['[[locale]]'] = L();
    return l;
}
function k(e, n) {
    return M(e, n);
}
function U(e, n, r, i, a) {
    if (0 === e.length) throw ReferenceError('No locale data has been provided for this object yet.');
    if ('lookup' === r['[[localeMatcher]]']) var o = M(e, n);
    else var o = k(e, n);
    var s = o['[[locale]]'];
    if (c.call(o, '[[extension]]'))
        var l = o['[[extension]]'],
            u = o['[[extensionIndex]]'],
            d = String.prototype.split,
            p = d.call(l, '-'),
            h = p.length;
    var _ = new ep();
    _['[[dataLocale]]'] = s;
    for (var m = '-u', g = 0, E = i.length; g < E; ) {
        var v = i[g],
            y = a[s][v],
            b = y['0'],
            I = '',
            T = f;
        if (void 0 !== p) {
            var S = T.call(p, v);
            if (-1 !== S) {
                if (S + 1 < h && p[S + 1].length > 2) {
                    var A = p[S + 1],
                        C = T.call(y, A);
                    if (-1 !== C)
                        var b = A,
                            I = '-' + v + '-' + b;
                } else {
                    var C = T(y, 'true');
                    if (-1 !== C) var b = 'true';
                }
            }
        }
        if (c.call(r, '[[' + v + ']]')) {
            var N = r['[[' + v + ']]'];
            -1 !== T.call(y, N) && N !== b && ((b = N), (I = ''));
        }
        (_['[[' + v + ']]'] = b), (m += I), g++;
    }
    if (m.length > 2) var s = s.substring(0, u) + m + s.substring(u);
    return (_['[[locale]]'] = s), _;
}
function B(e, n) {
    for (var r = n.length, i = new eh(), a = 0; a < r; ) {
        var o = n[a];
        void 0 !== P(e, String(o).replace(C, '')) && m.call(i, o), a++;
    }
    return h.call(i);
}
function G(e, n) {
    return B(e, n);
}
function Z(e, n, r) {
    if (void 0 !== r) {
        var r = new ep(eg(r)),
            i = r.localeMatcher;
        if (void 0 !== i && 'lookup' !== (i = String(i)) && 'best fit' !== i) throw RangeError('matcher should be "lookup" or "best fit"');
    }
    if (void 0 === i || 'best fit' === i) var a = G(e, n);
    else var a = B(e, n);
    for (var o in a)
        c.call(a, o) &&
            d(a, o, {
                writable: !1,
                configurable: !1,
                value: a[o]
            });
    return d(a, 'length', { writable: !1 }), a;
}
function F(e, n, r, i, a) {
    var o = e[n];
    if (void 0 !== o) {
        if (((o = 'boolean' === r ? !!o : 'string' === r ? String(o) : o), void 0 !== i && -1 === f.call(i, o))) throw RangeError("'" + o + "' is not an allowed value for `" + n + '`');
        return o;
    }
    return a;
}
function V(e, n, r, i, a) {
    var o = e[n];
    if (void 0 !== o) {
        if (isNaN((o = Number(o))) || o < r || o > i) throw RangeError('Value is not a number or outside accepted range');
        return Math.floor(o);
    }
    return a;
}
function j() {
    var e = arguments[0],
        n = arguments[1];
    return this && this !== s ? H(eg(this), e, n) : new s.NumberFormat(e, n);
}
function H(e, n, r) {
    var i = eE(e),
        a = e_();
    if (!0 === i['[[initializedIntlObject]]']) throw TypeError('`this` object has already been initialized as an Intl object');
    d(e, '__getInternalProperties', {
        value: function () {
            if (arguments[0] === b) return i;
        }
    }),
        (i['[[initializedIntlObject]]'] = !0);
    var o = w(n);
    r = void 0 === r ? {} : eg(r);
    var s = new ep(),
        l = F(r, 'localeMatcher', 'string', new eh('lookup', 'best fit'), 'best fit');
    s['[[localeMatcher]]'] = l;
    var c = y.NumberFormat['[[localeData]]'],
        f = U(y.NumberFormat['[[availableLocales]]'], o, s, y.NumberFormat['[[relevantExtensionKeys]]'], c);
    (i['[[locale]]'] = f['[[locale]]']), (i['[[numberingSystem]]'] = f['[[nu]]']), (i['[[dataLocale]]'] = f['[[dataLocale]]']);
    var p = f['[[dataLocale]]'],
        h = F(r, 'style', 'string', new eh('decimal', 'percent', 'currency'), 'decimal');
    i['[[style]]'] = h;
    var _ = F(r, 'currency', 'string');
    if (void 0 !== _ && !x(_)) throw RangeError("'" + _ + "' is not a valid currency code");
    if ('currency' === h && void 0 === _) throw TypeError('Currency code is required when style is currency');
    if ('currency' === h) {
        (_ = _.toUpperCase()), (i['[[currency]]'] = _);
        var m = Y(_);
    }
    var g = F(r, 'currencyDisplay', 'string', new eh('code', 'symbol', 'name'), 'symbol');
    'currency' === h && (i['[[currencyDisplay]]'] = g);
    var E = V(r, 'minimumIntegerDigits', 1, 21, 1);
    i['[[minimumIntegerDigits]]'] = E;
    var v = V(r, 'minimumFractionDigits', 0, 20, 'currency' === h ? m : 0);
    i['[[minimumFractionDigits]]'] = v;
    var I = 'currency' === h ? Math.max(v, m) : 'percent' === h ? Math.max(v, 0) : Math.max(v, 3),
        T = V(r, 'maximumFractionDigits', v, 20, I);
    i['[[maximumFractionDigits]]'] = T;
    var S = r.minimumSignificantDigits,
        A = r.maximumSignificantDigits;
    (void 0 !== S || void 0 !== A) && ((S = V(r, 'minimumSignificantDigits', 1, 21, 1)), (A = V(r, 'maximumSignificantDigits', S, 21, 21)), (i['[[minimumSignificantDigits]]'] = S), (i['[[maximumSignificantDigits]]'] = A));
    var C = F(r, 'useGrouping', 'boolean', void 0, !0);
    i['[[useGrouping]]'] = C;
    var N = c[p].patterns[h];
    return (i['[[positivePattern]]'] = N.positivePattern), (i['[[negativePattern]]'] = N.negativePattern), (i['[[boundFormat]]'] = void 0), (i['[[initializedNumberFormat]]'] = !0), u && (e.format = W.call(e)), a.exp.test(a.input), e;
}
function Y(e) {
    return void 0 !== R[e] ? R[e] : 2;
}
function W() {
    var e = this != null && 'object' == typeof this && eE(this);
    if (!e || !e['[[initializedNumberFormat]]']) throw TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');
    if (void 0 === e['[[boundFormat]]']) {
        var n = function (e) {
                return K(this, Number(e));
            },
            r = v.call(n, this);
        e['[[boundFormat]]'] = r;
    }
    return e['[[boundFormat]]'];
}
function K(e, n) {
    var r,
        i = e_(),
        a = eE(e),
        o = a['[[dataLocale]]'],
        s = a['[[numberingSystem]]'],
        l = y.NumberFormat['[[localeData]]'][o],
        u = l.symbols[s] || l.symbols.latn,
        d = !1;
    if (!1 === isFinite(n)) isNaN(n) ? (r = u.nan) : ((r = u.infinity), n < 0 && (d = !0));
    else {
        if ((n < 0 && ((d = !0), (n = -n)), 'percent' === a['[[style]]'] && (n *= 100), (r = c.call(a, '[[minimumSignificantDigits]]') && c.call(a, '[[maximumSignificantDigits]]') ? z(n, a['[[minimumSignificantDigits]]'], a['[[maximumSignificantDigits]]']) : q(n, a['[[minimumIntegerDigits]]'], a['[[minimumFractionDigits]]'], a['[[maximumFractionDigits]]'])), Q[s])) {
            var f = Q[a['[[numberingSystem]]']];
            r = String(r).replace(/\d/g, function (e) {
                return f[e];
            });
        } else r = String(r);
        if (((r = r.replace(/\./g, u.decimal)), !0 === a['[[useGrouping]]'])) {
            var p = r.split(u.decimal),
                h = p[0],
                _ = l.patterns.primaryGroupSize || 3,
                E = l.patterns.secondaryGroupSize || _;
            if (h.length > _) {
                var v = new eh(),
                    b = h.length - _,
                    I = b % E,
                    T = h.slice(0, I);
                for (T.length && m.call(v, T); I < b; ) m.call(v, h.slice(I, I + E)), (I += E);
                m.call(v, h.slice(b)), (p[0] = g.call(v, u.group));
            }
            r = g.call(p, u.decimal);
        }
    }
    var S = a[!0 === d ? '[[negativePattern]]' : '[[positivePattern]]'];
    if (((S = S.replace('{number}', r)), 'currency' === a['[[style]]'])) {
        var A,
            C = a['[[currency]]'],
            N = l.currencies[C];
        if ('symbol' === a['[[currencyDisplay]]']) A = N || C;
        else A = C;
        S = S.replace('{currency}', A);
    }
    return i.exp.test(i.input), S;
}
function z(e, n, r) {
    var i = r;
    if (0 === e)
        var a = g.call(Array(i + 1), '0'),
            o = 0;
    else
        var o = ec(Math.abs(e)),
            s = Math.round(Math.exp(Math.abs(o - i + 1) * Math.LN10)),
            a = String(Math.round(o - i + 1 < 0 ? e * s : e / s));
    if (o >= i) return a + g.call(Array(o - i + 1 + 1), '0');
    if (o === i - 1) return a;
    o >= 0 ? (a = a.slice(0, o + 1) + '.' + a.slice(o + 1)) : o < 0 && (a = '0.' + g.call(Array(-(o + 1) + 1), '0') + a);
    if (a.indexOf('.') >= 0 && r > n) {
        for (var l = r - n; l > 0 && '0' === a.charAt(a.length - 1); ) (a = a.slice(0, -1)), l--;
        '.' === a.charAt(a.length - 1) && (a = a.slice(0, -1));
    }
    return a;
}
function q(e, n, r, i) {
    var a,
        o = Number.prototype.toFixed.call(e, i),
        s = o.split('.')[0].length,
        l = i - r,
        u = (a = o.indexOf('e')) > -1 ? o.slice(a + 1) : 0;
    for (u && ((o = o.slice(0, a).replace('.', '')), (o += g.call(Array(u - (o.length - 1) + 1), '0') + '.' + g.call(Array(i + 1), '0')), (s = o.length)); l > 0 && '0' === o.slice(-1); ) (o = o.slice(0, -1)), l--;
    if (('.' === o.slice(-1) && (o = o.slice(0, -1)), s < n)) var c = g.call(Array(n - s + 1), '0');
    return (c || '') + o;
}
d(s, 'NumberFormat', {
    configurable: !0,
    writable: !0,
    value: j
}),
    d(s.NumberFormat, 'prototype', { writable: !1 }),
    (y.NumberFormat = {
        '[[availableLocales]]': [],
        '[[relevantExtensionKeys]]': ['nu'],
        '[[localeData]]': {}
    }),
    d(s.NumberFormat, 'supportedLocalesOf', {
        configurable: !0,
        writable: !0,
        value: v.call(ed, y.NumberFormat)
    }),
    d(s.NumberFormat.prototype, 'format', {
        configurable: !0,
        get: W
    });
var Q = {
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
function X() {
    var e = arguments[0],
        n = arguments[1];
    return this && this !== s ? J(eg(this), e, n) : new s.DateTimeFormat(e, n);
}
function J(e, n, r) {
    var i = eE(e),
        a = e_();
    if (!0 === i['[[initializedIntlObject]]']) throw TypeError('`this` object has already been initialized as an Intl object');
    d(e, '__getInternalProperties', {
        value: function () {
            if (arguments[0] === b) return i;
        }
    }),
        (i['[[initializedIntlObject]]'] = !0);
    var o = w(n),
        r = et(r, 'any', 'date'),
        s = new ep();
    (T = F(r, 'localeMatcher', 'string', new eh('lookup', 'best fit'), 'best fit')), (s['[[localeMatcher]]'] = T);
    var l = y.DateTimeFormat,
        f = l['[[localeData]]'],
        p = U(l['[[availableLocales]]'], o, s, l['[[relevantExtensionKeys]]'], f);
    (i['[[locale]]'] = p['[[locale]]']), (i['[[calendar]]'] = p['[[ca]]']), (i['[[numberingSystem]]'] = p['[[nu]]']), (i['[[dataLocale]]'] = p['[[dataLocale]]']);
    var h = p['[[dataLocale]]'],
        _ = r.timeZone;
    if (void 0 !== _ && 'UTC' !== (_ = em(_))) throw RangeError('timeZone is not supported.');
    for (var m in ((i['[[timeZone]]'] = _), (s = new ep()), $))
        if (c.call($, m)) {
            var g = F(r, m, 'string', $[m]);
            s['[[' + m + ']]'] = g;
        }
    var E,
        v = f[h],
        I = ee(v.formats),
        T = F(r, 'formatMatcher', 'string', new eh('basic', 'best fit'), 'best fit');
    for (var m in ((v.formats = I), (E = 'basic' === T ? en(s, I) : ei(s, I)), $))
        if (c.call($, m) && c.call(E, m)) {
            var S = E[m];
            i['[[' + m + ']]'] = S;
        }
    var A,
        C = F(r, 'hour12', 'boolean');
    if (i['[[hour]]']) {
        if (((C = void 0 === C ? v.hour12 : C), (i['[[hour12]]'] = C), !0 === C)) {
            var N = v.hourNo0;
            (i['[[hourNo0]]'] = N), (A = E.pattern12);
        } else A = E.pattern;
    } else A = E.pattern;
    return (i['[[pattern]]'] = A), (i['[[boundFormat]]'] = void 0), (i['[[initializedDateTimeFormat]]'] = !0), u && (e.format = ea.call(e)), a.exp.test(a.input), e;
}
d(s.NumberFormat.prototype, 'resolvedOptions', {
    configurable: !0,
    writable: !0,
    value: function () {
        var e,
            n = new ep(),
            r = ['locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'],
            i = this != null && 'object' == typeof this && eE(this);
        if (!i || !i['[[initializedNumberFormat]]']) throw TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');
        for (var a = 0, o = r.length; a < o; a++)
            c.call(i, (e = '[[' + r[a] + ']]')) &&
                (n[r[a]] = {
                    value: i[e],
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
        return p({}, n);
    }
}),
    d(s, 'DateTimeFormat', {
        configurable: !0,
        writable: !0,
        value: X
    }),
    d(X, 'prototype', { writable: !1 });
var $ = {
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
function ee(e) {
    return '[object Array]' === Object.prototype.toString.call(e) ? e : a.createDateTimeFormats(e);
}
function et(e, n, r) {
    if (void 0 === e) e = null;
    else {
        var i = eg(e);
        for (var a in ((e = new ep()), i)) e[a] = i[a];
    }
    var e = p(e),
        o = !0;
    return ('date' === n || 'any' === n) && (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) && (o = !1), ('time' === n || 'any' === n) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (o = !1), o && ('date' === r || 'all' === r) && (e.year = e.month = e.day = 'numeric'), o && ('time' === r || 'all' === r) && (e.hour = e.minute = e.second = 'numeric'), e;
}
function en(e, n) {
    return er(e, n);
}
function er(e, n, r) {
    for (var i, a = 8, o = 120, s = 20, l = 8, u = 6, d = 6, p = 3, h = -1 / 0, _ = 0, m = n.length; _ < m; ) {
        var g = n[_],
            E = 0;
        for (var v in $)
            if (c.call($, v)) {
                var y = e['[[' + v + ']]'],
                    b = c.call(g, v) ? g[v] : void 0;
                if (void 0 === y && void 0 !== b) E -= s;
                else if (void 0 !== y && void 0 === b) E -= o;
                else {
                    var I = ['2-digit', 'numeric', 'narrow', 'short', 'long'],
                        T = f.call(I, y),
                        S = Math.max(Math.min(f.call(I, b) - T, 2), -2);
                    r && ((('numeric' === y || '2-digit' === y) && 'numeric' !== b && '2-digit' !== b) || ('numeric' !== y && '2-digit' !== y && ('2-digit' === b || 'numeric' === b))) && (E -= a), 2 === S ? (E -= u) : 1 === S ? (E -= p) : -1 === S ? (E -= d) : -2 === S && (E -= l);
                }
            }
        E > h && ((h = E), (i = g)), _++;
    }
    return i;
}
function ei(e, n) {
    return er(e, n, !0);
}
function ea() {
    var e = this != null && 'object' == typeof this && eE(this);
    if (!e || !e['[[initializedDateTimeFormat]]']) throw TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');
    if (void 0 === e['[[boundFormat]]']) {
        var n = function () {
                var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
                return eo(this, e);
            },
            r = v.call(n, this);
        e['[[boundFormat]]'] = r;
    }
    return e['[[boundFormat]]'];
}
function eo(e, n) {
    if (!isFinite(n)) throw RangeError('Invalid valid date passed to format');
    var r = e.__getInternalProperties(b),
        i = e_(),
        a = r['[[locale]]'],
        o = new s.NumberFormat([a], { useGrouping: !1 }),
        l = new s.NumberFormat([a], {
            minimumIntegerDigits: 2,
            useGrouping: !1
        }),
        u = es(n, r['[[calendar]]'], r['[[timeZone]]']),
        d = r['[[pattern]]'],
        f = r['[[dataLocale]]'],
        p = y.DateTimeFormat['[[localeData]]'][f].calendars,
        h = r['[[calendar]]'];
    for (var _ in $)
        if (c.call(r, '[[' + _ + ']]')) {
            var m,
                g,
                E = r['[[' + _ + ']]'],
                v = u['[[' + _ + ']]'];
            if (('year' === _ && v <= 0 ? (v = 1 - v) : 'month' === _ ? v++ : 'hour' === _ && !0 === r['[[hour12]]'] && ((v %= 12), (m = v !== u['[[' + _ + ']]']), 0 === v && !0 === r['[[hourNo0]]'] && (v = 12)), 'numeric' === E)) g = K(o, v);
            else if ('2-digit' === E) (g = K(l, v)).length > 2 && (g = g.slice(-2));
            else if (E in I)
                switch (_) {
                    case 'month':
                        g = ef(p, h, 'months', E, u['[[' + _ + ']]']);
                        break;
                    case 'weekday':
                        try {
                            g = ef(p, h, 'days', E, u['[[' + _ + ']]']);
                        } catch (e) {
                            throw Error('Could not find weekday data for locale ' + a);
                        }
                        break;
                    case 'timeZoneName':
                        g = '';
                        break;
                    default:
                        g = u['[[' + _ + ']]'];
                }
            d = d.replace('{' + _ + '}', g);
        }
    return !0 === r['[[hour12]]'] && ((g = ef(p, h, 'dayPeriods', m ? 'pm' : 'am')), (d = d.replace('{ampm}', g))), i.exp.test(i.input), d;
}
function es(e, n, r) {
    var i = new Date(e),
        a = 'get' + (r || '');
    return new ep({
        '[[weekday]]': i[a + 'Day'](),
        '[[era]]': +(i[a + 'FullYear']() >= 0),
        '[[year]]': i[a + 'FullYear'](),
        '[[month]]': i[a + 'Month'](),
        '[[day]]': i[a + 'Date'](),
        '[[hour]]': i[a + 'Hours'](),
        '[[minute]]': i[a + 'Minutes'](),
        '[[second]]': i[a + 'Seconds'](),
        '[[inDST]]': !1
    });
}
(y.DateTimeFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['ca', 'nu'],
    '[[localeData]]': {}
}),
    d(s.DateTimeFormat, 'supportedLocalesOf', {
        configurable: !0,
        writable: !0,
        value: v.call(ed, y.DateTimeFormat)
    }),
    d(s.DateTimeFormat.prototype, 'format', {
        configurable: !0,
        get: ea
    }),
    d(s.DateTimeFormat.prototype, 'resolvedOptions', {
        writable: !0,
        configurable: !0,
        value: function () {
            var e,
                n = new ep(),
                r = ['locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'],
                i = this != null && 'object' == typeof this && eE(this);
            if (!i || !i['[[initializedDateTimeFormat]]']) throw TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');
            for (var a = 0, o = r.length; a < o; a++)
                c.call(i, (e = '[[' + r[a] + ']]')) &&
                    (n[r[a]] = {
                        value: i[e],
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                    });
            return p({}, n);
        }
    });
var el = (s.__localeSensitiveProtos = {
    Number: {},
    Date: {}
});
function eu(e, n) {
    if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
    var r,
        i = [n],
        a = n.split('-');
    for (a.length > 2 && 4 === a[1].length && m.call(i, a[0] + '-' + a[2]); (r = E.call(i)); ) m.call(y.NumberFormat['[[availableLocales]]'], r), (y.NumberFormat['[[localeData]]'][r] = e.number), e.date && ((e.date.nu = e.number.nu), m.call(y.DateTimeFormat['[[availableLocales]]'], r), (y.DateTimeFormat['[[localeData]]'][r] = e.date));
    void 0 === o && (o = n), !T && (H(s.NumberFormat.prototype), (T = !0)), e.date && !S && (J(s.DateTimeFormat.prototype), (S = !0));
}
function ec(e) {
    if ('function' == typeof Math.log10) return Math.floor(Math.log10(e));
    var n = Math.round(Math.log(e) * Math.LOG10E);
    return n - (Number('1e' + n) > e);
}
function ed(e) {
    if (!c.call(this, '[[availableLocales]]')) throw TypeError('supportedLocalesOf() is not a constructor');
    var n = e_(),
        r = arguments[1],
        i = this['[[availableLocales]]'],
        a = w(e);
    return n.exp.test(n.input), Z(i, a, r);
}
function ef(e, n, r, i, a) {
    var o = e[n] && e[n][r] ? e[n][r] : e.gregory[r],
        s = {
            narrow: ['short', 'long'],
            short: ['long', 'narrow'],
            long: ['short', 'narrow']
        },
        l = c.call(o, i) ? o[i] : c.call(o, s[i][0]) ? o[s[i][0]] : o[s[i][1]];
    return null != a ? l[a] : l;
}
function ep(e) {
    for (var n in e)
        (e instanceof ep || c.call(e, n)) &&
            d(this, n, {
                value: e[n],
                enumerable: !0,
                writable: !0,
                configurable: !0
            });
}
function eh() {
    d(this, 'length', {
        writable: !0,
        value: 0
    }),
        arguments.length && m.apply(this, h.call(arguments));
}
function e_() {
    for (var e = /[.?*+^$[\]\\(){}|-]/g, n = RegExp.lastMatch || '', r = RegExp.multiline ? 'm' : '', i = { input: RegExp.input }, a = new eh(), o = !1, s = {}, l = 1; l <= 9; l++) o = (s['$' + l] = RegExp['$' + l]) || o;
    if (((n = n.replace(e, '\\$&')), o))
        for (var l = 1; l <= 9; l++) {
            var u = s['$' + l];
            u ? ((u = u.replace(e, '\\$&')), (n = n.replace(u, '(' + u + ')'))) : (n = '()' + n), m.call(a, n.slice(0, n.indexOf('(') + 1)), (n = n.slice(n.indexOf('(') + 1));
        }
    return (i.exp = new RegExp(g.call(a, '') + n, r)), i;
}
function em(e) {
    for (var n = e.length; n--; ) {
        var r = e.charAt(n);
        r >= 'a' && r <= 'z' && (e = e.slice(0, n) + r.toUpperCase() + e.slice(n + 1));
    }
    return e;
}
function eg(e) {
    if (null == e) throw TypeError('Cannot convert null or undefined to object');
    return Object(e);
}
function eE(e) {
    return c.call(e, '__getInternalProperties') ? e.__getInternalProperties(b) : p(null);
}
(el.Number.toLocaleString = function () {
    if ('[object Number]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a number for Number.prototype.toLocaleString()');
    return K(new j(arguments[0], arguments[1]), this);
}),
    (el.Date.toLocaleString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var n = arguments[0],
            r = arguments[1],
            r = et(r, 'any', 'all');
        return eo(new X(n, r), e);
    }),
    (el.Date.toLocaleDateString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var n = arguments[0],
            r = arguments[1],
            r = et(r, 'date', 'date');
        return eo(new X(n, r), e);
    }),
    (el.Date.toLocaleTimeString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var n = arguments[0],
            r = arguments[1],
            r = et(r, 'time', 'time');
        return eo(new X(n, r), e);
    }),
    d(s, '__applyLocaleSensitivePrototypes', {
        writable: !0,
        configurable: !0,
        value: function () {
            for (var e in (d(Number.prototype, 'toLocaleString', {
                writable: !0,
                configurable: !0,
                value: el.Number.toLocaleString
            }),
            d(Date.prototype, 'toLocaleString', {
                writable: !0,
                configurable: !0,
                value: el.Date.toLocaleString
            }),
            el.Date))
                c.call(el.Date, e) &&
                    d(Date.prototype, e, {
                        writable: !0,
                        configurable: !0,
                        value: el.Date[e]
                    });
        }
    }),
    d(s, '__addLocaleData', {
        value: function (e) {
            if (!O(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            eu(e, e.locale);
        }
    }),
    (ep.prototype = p(null)),
    (eh.prototype = p(null)),
    (n.default = s);
