"use strict";
let n;
r.d(t, { B: () => a });
let i = Symbol.for("react-aria.i18n.locale"),
    o = Symbol.for("react-aria.i18n.strings");
class a {
    getStringForLocale(e, t) {
        let r = this.getStringsForLocale(t)[e];
        if (!r) throw Error(`Could not find intl message ${e} in ${t} locale`);
        return r;
    }
    getStringsForLocale(e) {
        let t = this.strings[e];
        return (
            t ||
                ((t = (function (e, t, r = "en-US") {
                    var n;
                    if (t[e]) return t[e];
                    let i = ((n = e), Intl.Locale ? new Intl.Locale(n).language : n.split("-")[0]);
                    if (t[i]) return t[i];
                    for (let e in t) if (e.startsWith(i + "-")) return t[e];
                    return t[r];
                })(e, this.strings, this.defaultLocale)),
                (this.strings[e] = t)),
            t
        );
    }
    static getGlobalDictionaryForPackage(e) {
        if ("u" < typeof window) return null;
        let t = window[i];
        if (void 0 === n) {
            let e = window[o];
            if (!e) return null;
            for (let r in ((n = {}), e)) n[r] = new a({ [t]: e[r] }, t);
        }
        let r = null == n ? void 0 : n[e];
        if (!r)
            throw Error(
                `Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`,
            );
        return r;
    }
    constructor(e, t = "en-US") {
        (this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e))), (this.defaultLocale = t);
    }
}
