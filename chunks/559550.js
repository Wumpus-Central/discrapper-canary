let n,
    i = Symbol.for("react-aria.i18n.locale"),
    o = Symbol.for("react-aria.i18n.strings");
r.d(
    t,
    {},
    {
        B: class e {
            constructor(e, t = "en-US") {
                ((this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e))), (this.defaultLocale = t));
            }
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
                            let i = ((n = e), Intl.Locale ? new Intl.Locale(n).language : n.split("-")[0]),
                                o = (function (e) {
                                    if (Intl.Locale) return new Intl.Locale(e).script;
                                })(e);
                            if (o && t[`${i}-${o}`]) return t[`${i}-${o}`];
                            if (t[i]) return t[i];
                            for (let e in t) if (e.startsWith(i + "-")) return t[e];
                            return t[r];
                        })(e, this.strings, this.defaultLocale)),
                        (this.strings[e] = t)),
                    t
                );
            }
            static getGlobalDictionaryForPackage(t) {
                if ("u" < typeof window) return null;
                let r = window[i];
                if (void 0 === n) {
                    let t = window[o];
                    if (!t) return null;
                    for (let i in ((n = {}), t)) n[i] = new e({ [r]: t[i] }, r);
                }
                let a = n?.[t];
                if (!a)
                    throw Error(
                        `Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`,
                    );
                return a;
            }
        },
    },
);
