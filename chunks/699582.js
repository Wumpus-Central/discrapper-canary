var r,
    i = n(863714),
    o = n(635535),
    a = {},
    s = (function () {
        var e = {};
        try {
            return Object.defineProperty(e, 'a', {}), 'a' in e;
        } catch (e) {
            return !1;
        }
    })(),
    l = !s && !Object.prototype.__defineGetter__,
    c = Object.prototype.hasOwnProperty,
    u = s
        ? Object.defineProperty
        : function (e, t, n) {
              'get' in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!c.call(e, t) || 'value' in n) && (e[t] = n.value);
          },
    d =
        Array.prototype.indexOf ||
        function (e) {
            var t = this;
            if (!t.length) return -1;
            for (var n = arguments[1] || 0, r = t.length; n < r; n++) if (t[n] === e) return n;
            return -1;
        },
    f =
        Object.create ||
        function (e, t) {
            var n;
            function r() {}
            for (var i in ((r.prototype = e), (n = new r()), t)) c.call(t, i) && u(n, i, t[i]);
            return n;
        },
    p = Array.prototype.slice,
    _ = Array.prototype.concat,
    h = Array.prototype.push,
    m = Array.prototype.join,
    g = Array.prototype.shift,
    E =
        (Array.prototype.unshift,
        Function.prototype.bind ||
            function (e) {
                var t = this,
                    n = p.call(arguments, 1);
                return 1 === t.length
                    ? function (r) {
                          return t.apply(e, _.call(n, p.call(arguments)));
                      }
                    : function () {
                          return t.apply(e, _.call(n, p.call(arguments)));
                      };
            }),
    v = f(null),
    b = Math.random(),
    y = f(null, {
        narrow: {},
        short: {},
        long: {}
    }),
    O = !1,
    S = !1,
    I = /^[A-Z]{3}$/,
    T = /-u(?:-[0-9a-z]{2,8})+/gi,
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
    A = {
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
function C(e) {
    return !(!i.expBCP47Syntax.test(e) || i.expVariantDupes.test(e) || i.expSingletonDupes.test(e));
}
function R(e) {
    var t, n;
    n = (e = e.toLowerCase()).split('-');
    for (var r = 1, o = n.length; r < o; r++)
        if (2 === n[r].length) n[r] = n[r].toUpperCase();
        else if (4 === n[r].length) n[r] = n[r].charAt(0).toUpperCase() + n[r].slice(1);
        else if (1 === n[r].length && 'x' !== n[r]) break;
    (t = (e = m.call(n, '-')).match(i.expExtSequences)) && t.length > 1 && (t.sort(), (e = e.replace(RegExp('(?:' + i.expExtSequences.source + ')+', 'i'), m.call(t, '')))), c.call(N.tags, e) && (e = N.tags[e]), (n = e.split('-'));
    for (var r = 1, o = n.length; r < o; r++) c.call(N.subtags, n[r]) ? (n[r] = N.subtags[n[r]]) : c.call(N.extLang, n[r]) && ((n[r] = N.extLang[n[r]][0]), 1 === r && N.extLang[n[1]][1] === n[0] && ((n = p.call(n, r++)), (o -= 1)));
    return m.call(n, '-');
}
function P() {
    return r;
}
function w(e) {
    var t = eh(String(e));
    return !1 !== I.test(t);
}
function D(e) {
    if (void 0 === e) return new ep();
    for (var t = new ep(), e = 'string' == typeof e ? [e] : e, n = em(e), r = n.length, i = 0; i < r; ) {
        var o = String(i);
        if (o in n) {
            var a = n[o];
            if (null == a || ('string' != typeof a && 'object' != typeof a)) throw TypeError('String or Object type expected');
            var s = String(a);
            if (!C(s)) throw RangeError("'" + s + "' is not a structurally valid language tag");
            (s = R(s)), -1 === d.call(t, s) && h.call(t, s);
        }
        i++;
    }
    return t;
}
function x(e, t) {
    for (var n = t; ; ) {
        if (d.call(e, n) > -1) return n;
        var r = n.lastIndexOf('-');
        if (r < 0) return;
        r >= 2 && '-' === n.charAt(r - 2) && (r -= 2), (n = n.substring(0, r));
    }
}
function L(e, t) {
    for (var n, r = 0, i = t.length; r < i && !n; ) {
        var o = t[r],
            a = String(o).replace(T, ''),
            n = x(e, a);
        r++;
    }
    var s = new ef();
    if (void 0 !== n) {
        if (((s['[[locale]]'] = n), String(o) !== String(a))) {
            var l = o.match(T)[0],
                c = o.indexOf('-u-');
            (s['[[extension]]'] = l), (s['[[extensionIndex]]'] = c);
        }
    } else s['[[locale]]'] = P();
    return s;
}
function M(e, t) {
    return L(e, t);
}
function k(e, t, n, r, i) {
    if (0 === e.length) throw ReferenceError('No locale data has been provided for this object yet.');
    if ('lookup' === n['[[localeMatcher]]']) var o = L(e, t);
    else var o = M(e, t);
    var a = o['[[locale]]'];
    if (c.call(o, '[[extension]]'))
        var s = o['[[extension]]'],
            l = o['[[extensionIndex]]'],
            u = String.prototype.split,
            f = u.call(s, '-'),
            p = f.length;
    var _ = new ef();
    _['[[dataLocale]]'] = a;
    for (var h = '-u', m = 0, g = r.length; m < g; ) {
        var E = r[m],
            v = i[a][E],
            b = v['0'],
            y = '',
            O = d;
        if (void 0 !== f) {
            var S = O.call(f, E);
            if (-1 !== S) {
                if (S + 1 < p && f[S + 1].length > 2) {
                    var I = f[S + 1],
                        T = O.call(v, I);
                    if (-1 !== T)
                        var b = I,
                            y = '-' + E + '-' + b;
                } else {
                    var T = O(v, 'true');
                    if (-1 !== T) var b = 'true';
                }
            }
        }
        if (c.call(n, '[[' + E + ']]')) {
            var N = n['[[' + E + ']]'];
            -1 !== O.call(v, N) && N !== b && ((b = N), (y = ''));
        }
        (_['[[' + E + ']]'] = b), (h += y), m++;
    }
    if (h.length > 2) var a = a.substring(0, l) + h + a.substring(l);
    return (_['[[locale]]'] = a), _;
}
function j(e, t) {
    for (var n = t.length, r = new ep(), i = 0; i < n; ) {
        var o = t[i];
        void 0 !== x(e, String(o).replace(T, '')) && h.call(r, o), i++;
    }
    return p.call(r);
}
function U(e, t) {
    return j(e, t);
}
function G(e, t, n) {
    if (void 0 !== n) {
        var n = new ef(em(n)),
            r = n.localeMatcher;
        if (void 0 !== r && 'lookup' !== (r = String(r)) && 'best fit' !== r) throw RangeError('matcher should be "lookup" or "best fit"');
    }
    if (void 0 === r || 'best fit' === r) var i = U(e, t);
    else var i = j(e, t);
    for (var o in i)
        c.call(i, o) &&
            u(i, o, {
                writable: !1,
                configurable: !1,
                value: i[o]
            });
    return u(i, 'length', { writable: !1 }), i;
}
function B(e, t, n, r, i) {
    var o = e[t];
    if (void 0 !== o) {
        if (((o = 'boolean' === n ? !!o : 'string' === n ? String(o) : o), void 0 !== r && -1 === d.call(r, o))) throw RangeError("'" + o + "' is not an allowed value for `" + t + '`');
        return o;
    }
    return i;
}
function Z(e, t, n, r, i) {
    var o = e[t];
    if (void 0 !== o) {
        if (isNaN((o = Number(o))) || o < n || o > r) throw RangeError('Value is not a number or outside accepted range');
        return Math.floor(o);
    }
    return i;
}
function F() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== a ? V(em(this), e, t) : new a.NumberFormat(e, t);
}
function V(e, t, n) {
    var r = eg(e),
        i = e_();
    if (!0 === r['[[initializedIntlObject]]']) throw TypeError('`this` object has already been initialized as an Intl object');
    u(e, '__getInternalProperties', {
        value: function () {
            if (arguments[0] === b) return r;
        }
    }),
        (r['[[initializedIntlObject]]'] = !0);
    var o = D(t);
    n = void 0 === n ? {} : em(n);
    var a = new ef(),
        s = B(n, 'localeMatcher', 'string', new ep('lookup', 'best fit'), 'best fit');
    a['[[localeMatcher]]'] = s;
    var c = v.NumberFormat['[[localeData]]'],
        d = k(v.NumberFormat['[[availableLocales]]'], o, a, v.NumberFormat['[[relevantExtensionKeys]]'], c);
    (r['[[locale]]'] = d['[[locale]]']), (r['[[numberingSystem]]'] = d['[[nu]]']), (r['[[dataLocale]]'] = d['[[dataLocale]]']);
    var f = d['[[dataLocale]]'],
        p = B(n, 'style', 'string', new ep('decimal', 'percent', 'currency'), 'decimal');
    r['[[style]]'] = p;
    var _ = B(n, 'currency', 'string');
    if (void 0 !== _ && !w(_)) throw RangeError("'" + _ + "' is not a valid currency code");
    if ('currency' === p && void 0 === _) throw TypeError('Currency code is required when style is currency');
    if ('currency' === p) {
        (_ = _.toUpperCase()), (r['[[currency]]'] = _);
        var h = H(_);
    }
    var m = B(n, 'currencyDisplay', 'string', new ep('code', 'symbol', 'name'), 'symbol');
    'currency' === p && (r['[[currencyDisplay]]'] = m);
    var g = Z(n, 'minimumIntegerDigits', 1, 21, 1);
    r['[[minimumIntegerDigits]]'] = g;
    var E = Z(n, 'minimumFractionDigits', 0, 20, 'currency' === p ? h : 0);
    r['[[minimumFractionDigits]]'] = E;
    var y = 'currency' === p ? Math.max(E, h) : 'percent' === p ? Math.max(E, 0) : Math.max(E, 3),
        O = Z(n, 'maximumFractionDigits', E, 20, y);
    r['[[maximumFractionDigits]]'] = O;
    var S = n.minimumSignificantDigits,
        I = n.maximumSignificantDigits;
    (void 0 !== S || void 0 !== I) && ((S = Z(n, 'minimumSignificantDigits', 1, 21, 1)), (I = Z(n, 'maximumSignificantDigits', S, 21, 21)), (r['[[minimumSignificantDigits]]'] = S), (r['[[maximumSignificantDigits]]'] = I));
    var T = B(n, 'useGrouping', 'boolean', void 0, !0);
    r['[[useGrouping]]'] = T;
    var N = c[f].patterns[p];
    return (r['[[positivePattern]]'] = N.positivePattern), (r['[[negativePattern]]'] = N.negativePattern), (r['[[boundFormat]]'] = void 0), (r['[[initializedNumberFormat]]'] = !0), l && (e.format = W.call(e)), i.exp.test(i.input), e;
}
function H(e) {
    return void 0 !== A[e] ? A[e] : 2;
}
function W() {
    var e = this != null && 'object' == typeof this && eg(this);
    if (!e || !e['[[initializedNumberFormat]]']) throw TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');
    if (void 0 === e['[[boundFormat]]']) {
        var t = function (e) {
                return Y(this, Number(e));
            },
            n = E.call(t, this);
        e['[[boundFormat]]'] = n;
    }
    return e['[[boundFormat]]'];
}
function Y(e, t) {
    var n,
        r = e_(),
        i = eg(e),
        o = i['[[dataLocale]]'],
        a = i['[[numberingSystem]]'],
        s = v.NumberFormat['[[localeData]]'][o],
        l = s.symbols[a] || s.symbols.latn,
        u = !1;
    if (!1 === isFinite(t)) isNaN(t) ? (n = l.nan) : ((n = l.infinity), t < 0 && (u = !0));
    else {
        if ((t < 0 && ((u = !0), (t = -t)), 'percent' === i['[[style]]'] && (t *= 100), (n = c.call(i, '[[minimumSignificantDigits]]') && c.call(i, '[[maximumSignificantDigits]]') ? K(t, i['[[minimumSignificantDigits]]'], i['[[maximumSignificantDigits]]']) : z(t, i['[[minimumIntegerDigits]]'], i['[[minimumFractionDigits]]'], i['[[maximumFractionDigits]]'])), q[a])) {
            var d = q[i['[[numberingSystem]]']];
            n = String(n).replace(/\d/g, function (e) {
                return d[e];
            });
        } else n = String(n);
        if (((n = n.replace(/\./g, l.decimal)), !0 === i['[[useGrouping]]'])) {
            var f = n.split(l.decimal),
                p = f[0],
                _ = s.patterns.primaryGroupSize || 3,
                g = s.patterns.secondaryGroupSize || _;
            if (p.length > _) {
                var E = new ep(),
                    b = p.length - _,
                    y = b % g,
                    O = p.slice(0, y);
                for (O.length && h.call(E, O); y < b; ) h.call(E, p.slice(y, y + g)), (y += g);
                h.call(E, p.slice(b)), (f[0] = m.call(E, l.group));
            }
            n = m.call(f, l.decimal);
        }
    }
    var S = i[!0 === u ? '[[negativePattern]]' : '[[positivePattern]]'];
    if (((S = S.replace('{number}', n)), 'currency' === i['[[style]]'])) {
        var I,
            T = i['[[currency]]'],
            N = s.currencies[T];
        (I = ('symbol' === i['[[currencyDisplay]]'] && N) || T), (S = S.replace('{currency}', I));
    }
    return r.exp.test(r.input), S;
}
function K(e, t, n) {
    var r = n;
    if (0 === e)
        var i = m.call(Array(r + 1), '0'),
            o = 0;
    else
        var o = ec(Math.abs(e)),
            a = Math.round(Math.exp(Math.abs(o - r + 1) * Math.LN10)),
            i = String(Math.round(o - r + 1 < 0 ? e * a : e / a));
    if (o >= r) return i + m.call(Array(o - r + 1 + 1), '0');
    if (o === r - 1) return i;
    if ((o >= 0 ? (i = i.slice(0, o + 1) + '.' + i.slice(o + 1)) : o < 0 && (i = '0.' + m.call(Array(-(o + 1) + 1), '0') + i), i.indexOf('.') >= 0 && n > t)) {
        for (var s = n - t; s > 0 && '0' === i.charAt(i.length - 1); ) (i = i.slice(0, -1)), s--;
        '.' === i.charAt(i.length - 1) && (i = i.slice(0, -1));
    }
    return i;
}
function z(e, t, n, r) {
    var i,
        o = Number.prototype.toFixed.call(e, r),
        a = o.split('.')[0].length,
        s = r - n,
        l = (i = o.indexOf('e')) > -1 ? o.slice(i + 1) : 0;
    for (l && ((o = o.slice(0, i).replace('.', '')), (o += m.call(Array(l - (o.length - 1) + 1), '0') + '.' + m.call(Array(r + 1), '0')), (a = o.length)); s > 0 && '0' === o.slice(-1); ) (o = o.slice(0, -1)), s--;
    if (('.' === o.slice(-1) && (o = o.slice(0, -1)), a < t)) var c = m.call(Array(t - a + 1), '0');
    return (c || '') + o;
}
u(a, 'NumberFormat', {
    configurable: !0,
    writable: !0,
    value: F
}),
    u(a.NumberFormat, 'prototype', { writable: !1 }),
    (v.NumberFormat = {
        '[[availableLocales]]': [],
        '[[relevantExtensionKeys]]': ['nu'],
        '[[localeData]]': {}
    }),
    u(a.NumberFormat, 'supportedLocalesOf', {
        configurable: !0,
        writable: !0,
        value: E.call(eu, v.NumberFormat)
    }),
    u(a.NumberFormat.prototype, 'format', {
        configurable: !0,
        get: W
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
    return this && this !== a ? X(em(this), e, t) : new a.DateTimeFormat(e, t);
}
function X(e, t, n) {
    var r = eg(e),
        i = e_();
    if (!0 === r['[[initializedIntlObject]]']) throw TypeError('`this` object has already been initialized as an Intl object');
    u(e, '__getInternalProperties', {
        value: function () {
            if (arguments[0] === b) return r;
        }
    }),
        (r['[[initializedIntlObject]]'] = !0);
    var o = D(t),
        n = ee(n, 'any', 'date'),
        a = new ef();
    (O = B(n, 'localeMatcher', 'string', new ep('lookup', 'best fit'), 'best fit')), (a['[[localeMatcher]]'] = O);
    var s = v.DateTimeFormat,
        d = s['[[localeData]]'],
        f = k(s['[[availableLocales]]'], o, a, s['[[relevantExtensionKeys]]'], d);
    (r['[[locale]]'] = f['[[locale]]']), (r['[[calendar]]'] = f['[[ca]]']), (r['[[numberingSystem]]'] = f['[[nu]]']), (r['[[dataLocale]]'] = f['[[dataLocale]]']);
    var p = f['[[dataLocale]]'],
        _ = n.timeZone;
    if (void 0 !== _ && 'UTC' !== (_ = eh(_))) throw RangeError('timeZone is not supported.');
    for (var h in ((r['[[timeZone]]'] = _), (a = new ef()), J))
        if (c.call(J, h)) {
            var m = B(n, h, 'string', J[h]);
            a['[[' + h + ']]'] = m;
        }
    var g,
        E = d[p],
        y = $(E.formats),
        O = B(n, 'formatMatcher', 'string', new ep('basic', 'best fit'), 'best fit');
    for (var h in ((E.formats = y), (g = 'basic' === O ? et(a, y) : er(a, y)), J))
        if (c.call(J, h) && c.call(g, h)) {
            var S = g[h];
            r['[[' + h + ']]'] = S;
        }
    var I,
        T = B(n, 'hour12', 'boolean');
    if (r['[[hour]]']) {
        if (((T = void 0 === T ? E.hour12 : T), (r['[[hour12]]'] = T), !0 === T)) {
            var N = E.hourNo0;
            (r['[[hourNo0]]'] = N), (I = g.pattern12);
        } else I = g.pattern;
    } else I = g.pattern;
    return (r['[[pattern]]'] = I), (r['[[boundFormat]]'] = void 0), (r['[[initializedDateTimeFormat]]'] = !0), l && (e.format = ei.call(e)), i.exp.test(i.input), e;
}
u(a.NumberFormat.prototype, 'resolvedOptions', {
    configurable: !0,
    writable: !0,
    value: function () {
        var e,
            t = new ef(),
            n = ['locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'],
            r = this != null && 'object' == typeof this && eg(this);
        if (!r || !r['[[initializedNumberFormat]]']) throw TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');
        for (var i = 0, o = n.length; i < o; i++)
            c.call(r, (e = '[[' + n[i] + ']]')) &&
                (t[n[i]] = {
                    value: r[e],
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
        return f({}, t);
    }
}),
    u(a, 'DateTimeFormat', {
        configurable: !0,
        writable: !0,
        value: Q
    }),
    u(Q, 'prototype', { writable: !1 });
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
    return '[object Array]' === Object.prototype.toString.call(e) ? e : o.createDateTimeFormats(e);
}
function ee(e, t, n) {
    if (void 0 === e) e = null;
    else {
        var r = em(e);
        for (var i in ((e = new ef()), r)) e[i] = r[i];
    }
    var e = f(e),
        o = !0;
    return ('date' === t || 'any' === t) && (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) && (o = !1), ('time' === t || 'any' === t) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (o = !1), o && ('date' === n || 'all' === n) && (e.year = e.month = e.day = 'numeric'), o && ('time' === n || 'all' === n) && (e.hour = e.minute = e.second = 'numeric'), e;
}
function et(e, t) {
    return en(e, t);
}
function en(e, t, n) {
    for (var r, i = 8, o = 120, a = 20, s = 8, l = 6, u = 6, f = 3, p = -1 / 0, _ = 0, h = t.length; _ < h; ) {
        var m = t[_],
            g = 0;
        for (var E in J)
            if (c.call(J, E)) {
                var v = e['[[' + E + ']]'],
                    b = c.call(m, E) ? m[E] : void 0;
                if (void 0 === v && void 0 !== b) g -= a;
                else if (void 0 !== v && void 0 === b) g -= o;
                else {
                    var y = ['2-digit', 'numeric', 'narrow', 'short', 'long'],
                        O = d.call(y, v),
                        S = Math.max(Math.min(d.call(y, b) - O, 2), -2);
                    n && ((('numeric' === v || '2-digit' === v) && 'numeric' !== b && '2-digit' !== b) || ('numeric' !== v && '2-digit' !== v && ('2-digit' === b || 'numeric' === b))) && (g -= i), 2 === S ? (g -= l) : 1 === S ? (g -= f) : -1 === S ? (g -= u) : -2 === S && (g -= s);
                }
            }
        g > p && ((p = g), (r = m)), _++;
    }
    return r;
}
function er(e, t) {
    return en(e, t, !0);
}
function ei() {
    var e = this != null && 'object' == typeof this && eg(this);
    if (!e || !e['[[initializedDateTimeFormat]]']) throw TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');
    if (void 0 === e['[[boundFormat]]']) {
        var t = function () {
                var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
                return eo(this, e);
            },
            n = E.call(t, this);
        e['[[boundFormat]]'] = n;
    }
    return e['[[boundFormat]]'];
}
function eo(e, t) {
    if (!isFinite(t)) throw RangeError('Invalid valid date passed to format');
    var n = e.__getInternalProperties(b),
        r = e_(),
        i = n['[[locale]]'],
        o = new a.NumberFormat([i], { useGrouping: !1 }),
        s = new a.NumberFormat([i], {
            minimumIntegerDigits: 2,
            useGrouping: !1
        }),
        l = ea(t, n['[[calendar]]'], n['[[timeZone]]']),
        u = n['[[pattern]]'],
        d = n['[[dataLocale]]'],
        f = v.DateTimeFormat['[[localeData]]'][d].calendars,
        p = n['[[calendar]]'];
    for (var _ in J)
        if (c.call(n, '[[' + _ + ']]')) {
            var h,
                m,
                g = n['[[' + _ + ']]'],
                E = l['[[' + _ + ']]'];
            if (('year' === _ && E <= 0 ? (E = 1 - E) : 'month' === _ ? E++ : 'hour' === _ && !0 === n['[[hour12]]'] && ((E %= 12), (h = E !== l['[[' + _ + ']]']), 0 === E && !0 === n['[[hourNo0]]'] && (E = 12)), 'numeric' === g)) m = Y(o, E);
            else if ('2-digit' === g) (m = Y(s, E)).length > 2 && (m = m.slice(-2));
            else if (g in y)
                switch (_) {
                    case 'month':
                        m = ed(f, p, 'months', g, l['[[' + _ + ']]']);
                        break;
                    case 'weekday':
                        try {
                            m = ed(f, p, 'days', g, l['[[' + _ + ']]']);
                        } catch (e) {
                            throw Error('Could not find weekday data for locale ' + i);
                        }
                        break;
                    case 'timeZoneName':
                        m = '';
                        break;
                    default:
                        m = l['[[' + _ + ']]'];
                }
            u = u.replace('{' + _ + '}', m);
        }
    return !0 === n['[[hour12]]'] && ((m = ed(f, p, 'dayPeriods', h ? 'pm' : 'am')), (u = u.replace('{ampm}', m))), r.exp.test(r.input), u;
}
function ea(e, t, n) {
    var r = new Date(e),
        i = 'get' + (n || '');
    return new ef({
        '[[weekday]]': r[i + 'Day'](),
        '[[era]]': +(r[i + 'FullYear']() >= 0),
        '[[year]]': r[i + 'FullYear'](),
        '[[month]]': r[i + 'Month'](),
        '[[day]]': r[i + 'Date'](),
        '[[hour]]': r[i + 'Hours'](),
        '[[minute]]': r[i + 'Minutes'](),
        '[[second]]': r[i + 'Seconds'](),
        '[[inDST]]': !1
    });
}
(v.DateTimeFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['ca', 'nu'],
    '[[localeData]]': {}
}),
    u(a.DateTimeFormat, 'supportedLocalesOf', {
        configurable: !0,
        writable: !0,
        value: E.call(eu, v.DateTimeFormat)
    }),
    u(a.DateTimeFormat.prototype, 'format', {
        configurable: !0,
        get: ei
    }),
    u(a.DateTimeFormat.prototype, 'resolvedOptions', {
        writable: !0,
        configurable: !0,
        value: function () {
            var e,
                t = new ef(),
                n = ['locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'],
                r = this != null && 'object' == typeof this && eg(this);
            if (!r || !r['[[initializedDateTimeFormat]]']) throw TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');
            for (var i = 0, o = n.length; i < o; i++)
                c.call(r, (e = '[[' + n[i] + ']]')) &&
                    (t[n[i]] = {
                        value: r[e],
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                    });
            return f({}, t);
        }
    });
var es = (a.__localeSensitiveProtos = {
    Number: {},
    Date: {}
});
function el(e, t) {
    if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
    var n,
        i = [t],
        o = t.split('-');
    for (o.length > 2 && 4 === o[1].length && h.call(i, o[0] + '-' + o[2]); (n = g.call(i)); ) h.call(v.NumberFormat['[[availableLocales]]'], n), (v.NumberFormat['[[localeData]]'][n] = e.number), e.date && ((e.date.nu = e.number.nu), h.call(v.DateTimeFormat['[[availableLocales]]'], n), (v.DateTimeFormat['[[localeData]]'][n] = e.date));
    void 0 === r && (r = t), O || (V(a.NumberFormat.prototype), (O = !0)), e.date && !S && (X(a.DateTimeFormat.prototype), (S = !0));
}
function ec(e) {
    if ('function' == typeof Math.log10) return Math.floor(Math.log10(e));
    var t = Math.round(Math.log(e) * Math.LOG10E);
    return t - (Number('1e' + t) > e);
}
function eu(e) {
    if (!c.call(this, '[[availableLocales]]')) throw TypeError('supportedLocalesOf() is not a constructor');
    var t = e_(),
        n = arguments[1],
        r = this['[[availableLocales]]'],
        i = D(e);
    return t.exp.test(t.input), G(r, i, n);
}
function ed(e, t, n, r, i) {
    var o = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
        a = {
            narrow: ['short', 'long'],
            short: ['long', 'narrow'],
            long: ['short', 'narrow']
        },
        s = c.call(o, r) ? o[r] : c.call(o, a[r][0]) ? o[a[r][0]] : o[a[r][1]];
    return null != i ? s[i] : s;
}
function ef(e) {
    for (var t in e)
        (e instanceof ef || c.call(e, t)) &&
            u(this, t, {
                value: e[t],
                enumerable: !0,
                writable: !0,
                configurable: !0
            });
}
function ep() {
    u(this, 'length', {
        writable: !0,
        value: 0
    }),
        arguments.length && h.apply(this, p.call(arguments));
}
function e_() {
    for (var e = /[.?*+^$[\]\\(){}|-]/g, t = RegExp.lastMatch || '', n = RegExp.multiline ? 'm' : '', r = { input: RegExp.input }, i = new ep(), o = !1, a = {}, s = 1; s <= 9; s++) o = (a['$' + s] = RegExp['$' + s]) || o;
    if (((t = t.replace(e, '\\$&')), o))
        for (var s = 1; s <= 9; s++) {
            var l = a['$' + s];
            l ? ((l = l.replace(e, '\\$&')), (t = t.replace(l, '(' + l + ')'))) : (t = '()' + t), h.call(i, t.slice(0, t.indexOf('(') + 1)), (t = t.slice(t.indexOf('(') + 1));
        }
    return (r.exp = new RegExp(m.call(i, '') + t, n)), r;
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
    return c.call(e, '__getInternalProperties') ? e.__getInternalProperties(b) : f(null);
}
(es.Number.toLocaleString = function () {
    if ('[object Number]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a number for Number.prototype.toLocaleString()');
    return Y(new F(arguments[0], arguments[1]), this);
}),
    (es.Date.toLocaleString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = ee(n, 'any', 'all');
        return eo(new Q(t, n), e);
    }),
    (es.Date.toLocaleDateString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = ee(n, 'date', 'date');
        return eo(new Q(t, n), e);
    }),
    (es.Date.toLocaleTimeString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = ee(n, 'time', 'time');
        return eo(new Q(t, n), e);
    }),
    u(a, '__applyLocaleSensitivePrototypes', {
        writable: !0,
        configurable: !0,
        value: function () {
            for (var e in (u(Number.prototype, 'toLocaleString', {
                writable: !0,
                configurable: !0,
                value: es.Number.toLocaleString
            }),
            u(Date.prototype, 'toLocaleString', {
                writable: !0,
                configurable: !0,
                value: es.Date.toLocaleString
            }),
            es.Date))
                c.call(es.Date, e) &&
                    u(Date.prototype, e, {
                        writable: !0,
                        configurable: !0,
                        value: es.Date[e]
                    });
        }
    }),
    u(a, '__addLocaleData', {
        value: function (e) {
            if (!C(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            el(e, e.locale);
        }
    }),
    (ef.prototype = f(null)),
    (ep.prototype = f(null)),
    (t.default = a);
