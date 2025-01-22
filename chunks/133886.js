let i;
r.d(n, {
    E: function () {
        return f;
    },
    J: function () {
        return s;
    }
});
let a = Symbol.for('react-aria.i18n.locale'),
    o = Symbol.for('react-aria.i18n.strings');
class s {
    getStringForLocale(e, n) {
        let r = this.getStringsForLocale(n)[e];
        if (!r) throw Error(`Could not find intl message ${e} in ${n} locale`);
        return r;
    }
    getStringsForLocale(e) {
        let n = this.strings[e];
        return !n && ((n = l(e, this.strings, this.defaultLocale)), (this.strings[e] = n)), n;
    }
    static getGlobalDictionaryForPackage(e) {
        if ('undefined' == typeof window) return null;
        let n = window[a];
        if (void 0 === i) {
            let e = window[o];
            if (!e) return null;
            for (let r in ((i = {}), e)) i[r] = new s({ [n]: e[r] }, n);
        }
        let r = null == i ? void 0 : i[e];
        if (!r) throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
        return r;
    }
    constructor(e, n = 'en-US') {
        (this.strings = { ...e }), (this.defaultLocale = n);
    }
}
function l(e, n, r = 'en-US') {
    if (n[e]) return n[e];
    let i = u(e);
    if (n[i]) return n[i];
    for (let e in n) if (e.startsWith(i + '-')) return n[e];
    return n[r];
}
function u(e) {
    return Intl.Locale ? new Intl.Locale(e).language : e.split('-')[0];
}
let c = new Map(),
    d = new Map();
class f {
    format(e, n) {
        let r = this.strings.getStringForLocale(e, this.locale);
        return 'function' == typeof r ? r(n, this) : r;
    }
    plural(e, n, r = 'cardinal') {
        let i = n['=' + e];
        if (i) return 'function' == typeof i ? i() : i;
        let a = this.locale + ':' + r,
            o = c.get(a);
        return !o && ((o = new Intl.PluralRules(this.locale, { type: r })), c.set(a, o)), 'function' == typeof (i = n[o.select(e)] || n.other) ? i() : i;
    }
    number(e) {
        let n = d.get(this.locale);
        return !n && ((n = new Intl.NumberFormat(this.locale)), d.set(this.locale, n)), n.format(e);
    }
    select(e, n) {
        let r = e[n] || e.other;
        return 'function' == typeof r ? r() : r;
    }
    constructor(e, n) {
        (this.locale = e), (this.strings = n);
    }
}
