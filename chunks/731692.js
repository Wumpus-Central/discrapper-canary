"use strict";
let r;
n.d(t, { B: () => a });
let i = Symbol.for("react-aria.i18n.locale"),
    s = Symbol.for("react-aria.i18n.strings");
class a {
    getStringForLocale(e, t) {
        let n = this.getStringsForLocale(t)[e];
        if (!n) throw Error(`Could not find intl message ${e} in ${t} locale`);
        return n;
    }
    getStringsForLocale(e) {
        let t = this.strings[e];
        return (
            t ||
                ((t = (function (e, t, n = "en-US") {
                    var r;
                    if (t[e]) return t[e];
                    let i = ((r = e), Intl.Locale ? new Intl.Locale(r).language : r.split("-")[0]);
                    if (t[i]) return t[i];
                    for (let e in t) if (e.startsWith(i + "-")) return t[e];
                    return t[n];
                })(e, this.strings, this.defaultLocale)),
                (this.strings[e] = t)),
            t
        );
    }
    static getGlobalDictionaryForPackage(e) {
        if ("u" < typeof window) return null;
        let t = window[i];
        if (void 0 === r) {
            let e = window[s];
            if (!e) return null;
            for (let n in ((r = {}), e)) r[n] = new a({ [t]: e[n] }, t);
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
