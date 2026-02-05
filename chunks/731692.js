"use strict";
let r;
n.d(t, { B: () => s });
let i = Symbol.for("react-aria.i18n.locale"),
    a = Symbol.for("react-aria.i18n.strings");
class s {
    getStringForLocale(e, t) {
        let n = this.getStringsForLocale(t)[e];
        if (!n) throw Error(`Could not find intl message ${e} in ${t} locale`);
        return n;
    }
    getStringsForLocale(e) {
        let t = this.strings[e];
        return t || ((t = o(e, this.strings, this.defaultLocale)), (this.strings[e] = t)), t;
    }
    static getGlobalDictionaryForPackage(e) {
        if ("u" < typeof window) return null;
        let t = window[i];
        if (void 0 === r) {
            let e = window[a];
            if (!e) return null;
            for (let n in ((r = {}), e)) r[n] = new s({ [t]: e[n] }, t);
        }
        let n = null == r ? void 0 : r[e];
        if (!n)
            throw Error(
                `Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`,
            );
        return n;
    }
    constructor(e, t = "en-US") {
        (this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e))), (this.defaultLocale = t);
    }
}
function o(e, t, n = "en-US") {
    if (t[e]) return t[e];
    let r = l(e);
    if (t[r]) return t[r];
    for (let e in t) if (e.startsWith(r + "-")) return t[e];
    return t[n];
}
function l(e) {
    return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
