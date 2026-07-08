i.d(t, { a: () => eU, i: () => e$, n: () => eW, o: () => eD, r: () => ej, t: () => eK });
var r,
    n,
    o,
    a,
    s = i(129050),
    l = i(248702),
    c = (e) => "string" == typeof e,
    d = () => {
        let e,
            t,
            i = new Promise((i, r) => {
                (e = i), (t = r);
            });
        return (i.resolve = e), (i.reject = t), i;
    },
    u = (e) => (null == e ? "" : "" + e),
    h = /###/g,
    p = (e) => (e && e.indexOf("###") > -1 ? e.replace(h, ".") : e),
    f = (e) => !e || c(e),
    m = (e, t, i) => {
        let r = c(t) ? t.split(".") : t,
            n = 0;
        for (; n < r.length - 1; ) {
            if (f(e)) return {};
            let t = p(r[n]);
            !e[t] && i && (e[t] = new i()), (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}), ++n;
        }
        return f(e) ? {} : { obj: e, k: p(r[n]) };
    },
    g = (e, t, i) => {
        let { obj: r, k: n } = m(e, t, Object);
        if (void 0 !== r || 1 === t.length) {
            r[n] = i;
            return;
        }
        let o = t[t.length - 1],
            a = t.slice(0, t.length - 1),
            s = m(e, a, Object);
        for (; void 0 === s.obj && a.length; )
            (o = `${a[a.length - 1]}.${o}`),
                (s = m(e, (a = a.slice(0, a.length - 1)), Object)),
                s?.obj && void 0 !== s.obj[`${s.k}.${o}`] && (s.obj = void 0);
        s.obj[`${s.k}.${o}`] = i;
    },
    v = (e, t) => {
        let { obj: i, k: r } = m(e, t);
        if (i && Object.prototype.hasOwnProperty.call(i, r)) return i[r];
    },
    C = (e, t, i) => {
        for (let r in t)
            "__proto__" !== r &&
                "constructor" !== r &&
                (r in e
                    ? c(e[r]) || e[r] instanceof String || c(t[r]) || t[r] instanceof String
                        ? i && (e[r] = t[r])
                        : C(e[r], t[r], i)
                    : (e[r] = t[r]));
        return e;
    },
    y = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" },
    w = (e) => (c(e) ? e.replace(/[&<>"'\/]/g, (e) => y[e]) : e),
    _ = class {
        constructor(e) {
            (this.capacity = e), (this.regExpMap = new Map()), (this.regExpQueue = []);
        }
        getRegExp(e) {
            let t = this.regExpMap.get(e);
            if (void 0 !== t) return t;
            let i = new RegExp(e);
            return (
                this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
                this.regExpMap.set(e, i),
                this.regExpQueue.push(e),
                i
            );
        }
    },
    b = [" ", ",", "?", "!", ";"],
    L = new _(20),
    S = (e, t, i = ".") => {
        if (!e) return;
        if (e[t]) return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
        let r = t.split(i),
            n = e;
        for (let e = 0; e < r.length; ) {
            if (!n || "object" != typeof n) return;
            let t,
                o = "";
            for (let a = e; a < r.length; ++a)
                if ((a !== e && (o += i), (o += r[a]), void 0 !== (t = n[o]))) {
                    if (["string", "number", "boolean"].indexOf(typeof t) > -1 && a < r.length - 1) continue;
                    e += a - e + 1;
                    break;
                }
            n = t;
        }
        return n;
    },
    E = (e) => e?.replace("_", "-"),
    I = {
        type: "logger",
        log(e) {
            this.output("log", e);
        },
        warn(e) {
            this.output("warn", e);
        },
        error(e) {
            this.output("error", e);
        },
        output(e, t) {
            console?.[e]?.apply?.(console, t);
        },
    },
    T = new (class e {
        constructor(e, t = {}) {
            this.init(e, t);
        }
        init(e, t = {}) {
            (this.prefix = t.prefix || "i18next:"), (this.logger = e || I), (this.options = t), (this.debug = t.debug);
        }
        log(...e) {
            return this.forward(e, "log", "", !0);
        }
        warn(...e) {
            return this.forward(e, "warn", "", !0);
        }
        error(...e) {
            return this.forward(e, "error", "");
        }
        deprecate(...e) {
            return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(e, t, i, r) {
            return r && !this.debug ? null : (c(e[0]) && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[t](e));
        }
        create(t) {
            return new e(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
        }
        clone(t) {
            return ((t ||= this.options).prefix = t.prefix || this.prefix), new e(this.logger, t);
        }
    })(),
    M = class {
        constructor() {
            this.observers = {};
        }
        on(e, t) {
            return (
                e.split(" ").forEach((e) => {
                    this.observers[e] || (this.observers[e] = new Map());
                    let i = this.observers[e].get(t) || 0;
                    this.observers[e].set(t, i + 1);
                }),
                this
            );
        }
        off(e, t) {
            if (this.observers[e]) {
                if (!t) return void delete this.observers[e];
                this.observers[e].delete(t);
            }
        }
        emit(e, ...t) {
            this.observers[e] &&
                Array.from(this.observers[e].entries()).forEach(([e, i]) => {
                    for (let r = 0; r < i; r++) e(...t);
                }),
                this.observers["*"] &&
                    Array.from(this.observers["*"].entries()).forEach(([i, r]) => {
                        for (let n = 0; n < r; n++) i.apply(i, [e, ...t]);
                    });
        }
    },
    x = class extends M {
        constructor(e, t = { ns: ["translation"], defaultNS: "translation" }) {
            super(),
                (this.data = e || {}),
                (this.options = t),
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(e) {
            0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
        }
        removeNamespaces(e) {
            let t = this.options.ns.indexOf(e);
            t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, i, r = {}) {
            let n = void 0 === r.keySeparator ? this.options.keySeparator : r.keySeparator,
                o = void 0 === r.ignoreJSONStructure ? this.options.ignoreJSONStructure : r.ignoreJSONStructure,
                a;
            e.indexOf(".") > -1
                ? (a = e.split("."))
                : ((a = [e, t]),
                  i && (Array.isArray(i) ? a.push(...i) : c(i) && n ? a.push(...i.split(n)) : a.push(i)));
            let s = v(this.data, a);
            return (
                !s && !t && !i && e.indexOf(".") > -1 && ((e = a[0]), (t = a[1]), (i = a.slice(2).join("."))),
                !s && o && c(i) ? S(this.data?.[e]?.[t], i, n) : s
            );
        }
        addResource(e, t, i, r, n = { silent: !1 }) {
            let o = void 0 === n.keySeparator ? this.options.keySeparator : n.keySeparator,
                a = [e, t];
            i && (a = a.concat(o ? i.split(o) : i)),
                e.indexOf(".") > -1 && ((a = e.split(".")), (r = t), (t = a[1])),
                this.addNamespaces(t),
                g(this.data, a, r),
                n.silent || this.emit("added", e, t, i, r);
        }
        addResources(e, t, i, r = { silent: !1 }) {
            for (let r in i) (c(i[r]) || Array.isArray(i[r])) && this.addResource(e, t, r, i[r], { silent: !0 });
            r.silent || this.emit("added", e, t, i);
        }
        addResourceBundle(e, t, i, r, n, o = { silent: !1, skipCopy: !1 }) {
            let a = [e, t];
            e.indexOf(".") > -1 && ((a = e.split(".")), (r = i), (i = t), (t = a[1])), this.addNamespaces(t);
            let s = v(this.data, a) || {};
            o.skipCopy || (i = JSON.parse(JSON.stringify(i))),
                r ? C(s, i, n) : (s = { ...s, ...i }),
                g(this.data, a, s),
                o.silent || this.emit("added", e, t, i);
        }
        removeResourceBundle(e, t) {
            this.hasResourceBundle(e, t) && delete this.data[e][t],
                this.removeNamespaces(t),
                this.emit("removed", e, t);
        }
        hasResourceBundle(e, t) {
            return void 0 !== this.getResource(e, t);
        }
        getResourceBundle(e, t) {
            return (t ||= this.options.defaultNS), this.getResource(e, t);
        }
        getDataByLanguage(e) {
            return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
            let t = this.getDataByLanguage(e);
            return !!((t && Object.keys(t)) || []).find((e) => t[e] && Object.keys(t[e]).length > 0);
        }
        toJSON() {
            return this.data;
        }
    },
    k = {
        processors: {},
        addPostProcessor(e) {
            this.processors[e.name] = e;
        },
        handle(e, t, i, r, n) {
            return (
                e.forEach((e) => {
                    t = this.processors[e]?.process(t, i, r, n) ?? t;
                }),
                t
            );
        },
    },
    O = Symbol("i18next/PATH_KEY");
function P(e, t) {
    let i,
        r,
        n,
        { [O]: o } = e(
            ((i = []),
            ((r = Object.create(null)).get = (e, t) => (
                n?.revoke?.(), t === O ? i : (i.push(t), (n = Proxy.revocable(e, r)).proxy)
            )),
            Proxy.revocable(Object.create(null), r).proxy),
        );
    return o.join(t?.keySeparator ?? ".");
}
var A = {},
    R = (e) => !c(e) && "boolean" != typeof e && "number" != typeof e,
    F = class e extends M {
        constructor(e, t = {}) {
            super(),
                ((e, t, i) => {
                    e.forEach((e) => {
                        t[e] && (i[e] = t[e]);
                    });
                })(
                    [
                        "resourceStore",
                        "languageUtils",
                        "pluralResolver",
                        "interpolator",
                        "backendConnector",
                        "i18nFormat",
                        "utils",
                    ],
                    e,
                    this,
                ),
                (this.options = t),
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                (this.logger = T.create("translator"));
        }
        changeLanguage(e) {
            e && (this.language = e);
        }
        exists(e, t = { interpolation: {} }) {
            let i = { ...t };
            if (null == e) return !1;
            let r = this.resolve(e, i);
            if (r?.res === void 0) return !1;
            let n = R(r.res);
            return !(!1 === i.returnObjects && n);
        }
        extractFromKey(e, t) {
            let i = void 0 === t.nsSeparator ? this.options.nsSeparator : t.nsSeparator;
            void 0 === i && (i = ":");
            let r = void 0 === t.keySeparator ? this.options.keySeparator : t.keySeparator,
                n = t.ns || this.options.defaultNS || [],
                o = i && e.indexOf(i) > -1,
                a =
                    !this.options.userDefinedKeySeparator &&
                    !t.keySeparator &&
                    !this.options.userDefinedNsSeparator &&
                    !t.nsSeparator &&
                    !((e, t, i) => {
                        (t ||= ""), (i ||= "");
                        let r = b.filter((e) => 0 > t.indexOf(e) && 0 > i.indexOf(e));
                        if (0 === r.length) return !0;
                        let n = L.getRegExp(`(${r.map((e) => ("?" === e ? "\\?" : e)).join("|")})`),
                            o = !n.test(e);
                        if (!o) {
                            let t = e.indexOf(i);
                            t > 0 && !n.test(e.substring(0, t)) && (o = !0);
                        }
                        return o;
                    })(e, i, r);
            if (o && !a) {
                let t = e.match(this.interpolator.nestingRegexp);
                if (t && t.length > 0) return { key: e, namespaces: c(n) ? [n] : n };
                let o = e.split(i);
                (i !== r || (i === r && this.options.ns.indexOf(o[0]) > -1)) && (n = o.shift()), (e = o.join(r));
            }
            return { key: e, namespaces: c(n) ? [n] : n };
        }
        translate(t, i, r) {
            let n = "object" == typeof i ? { ...i } : i;
            if (
                ("object" != typeof n &&
                    this.options.overloadTranslationOptionHandler &&
                    (n = this.options.overloadTranslationOptionHandler(arguments)),
                "object" == typeof n && (n = { ...n }),
                (n ||= {}),
                null == t)
            )
                return "";
            "function" == typeof t && (t = P(t, { ...this.options, ...n })), Array.isArray(t) || (t = [String(t)]);
            let o = void 0 === n.returnDetails ? this.options.returnDetails : n.returnDetails,
                a = void 0 === n.keySeparator ? this.options.keySeparator : n.keySeparator,
                { key: s, namespaces: l } = this.extractFromKey(t[t.length - 1], n),
                d = l[l.length - 1],
                u = void 0 === n.nsSeparator ? this.options.nsSeparator : n.nsSeparator;
            void 0 === u && (u = ":");
            let h = n.lng || this.language,
                p = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if (h?.toLowerCase() === "cimode")
                return p
                    ? o
                        ? {
                              res: `${d}${u}${s}`,
                              usedKey: s,
                              exactUsedKey: s,
                              usedLng: h,
                              usedNS: d,
                              usedParams: this.getUsedParamsDetails(n),
                          }
                        : `${d}${u}${s}`
                    : o
                      ? {
                            res: s,
                            usedKey: s,
                            exactUsedKey: s,
                            usedLng: h,
                            usedNS: d,
                            usedParams: this.getUsedParamsDetails(n),
                        }
                      : s;
            let f = this.resolve(t, n),
                m = f?.res,
                g = f?.usedKey || s,
                v = f?.exactUsedKey || s,
                C = void 0 === n.joinArrays ? this.options.joinArrays : n.joinArrays,
                y = !this.i18nFormat || this.i18nFormat.handleAsObject,
                w = void 0 !== n.count && !c(n.count),
                _ = e.hasDefaultValue(n),
                b = w ? this.pluralResolver.getSuffix(h, n.count, n) : "",
                L = n.ordinal && w ? this.pluralResolver.getSuffix(h, n.count, { ordinal: !1 }) : "",
                S = w && !n.ordinal && 0 === n.count,
                E =
                    (S && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
                    n[`defaultValue${b}`] ||
                    n[`defaultValue${L}`] ||
                    n.defaultValue,
                I = m;
            y && !m && _ && (I = E);
            let T = R(I),
                M = Object.prototype.toString.apply(I);
            if (
                y &&
                I &&
                T &&
                0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(M) &&
                !(c(C) && Array.isArray(I))
            ) {
                if (!n.returnObjects && !this.options.returnObjects) {
                    this.options.returnedObjectHandler ||
                        this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                    let e = this.options.returnedObjectHandler
                        ? this.options.returnedObjectHandler(g, I, { ...n, ns: l })
                        : `key '${s} (${this.language})' returned an object instead of string.`;
                    return o ? ((f.res = e), (f.usedParams = this.getUsedParamsDetails(n)), f) : e;
                }
                if (a) {
                    let e = Array.isArray(I),
                        t = e ? [] : {},
                        i = e ? v : g;
                    for (let e in I)
                        if (Object.prototype.hasOwnProperty.call(I, e)) {
                            let r = `${i}${a}${e}`;
                            _ && !m
                                ? (t[e] = this.translate(r, {
                                      ...n,
                                      defaultValue: R(E) ? E[e] : void 0,
                                      joinArrays: !1,
                                      ns: l,
                                  }))
                                : (t[e] = this.translate(r, { ...n, joinArrays: !1, ns: l })),
                                t[e] === r && (t[e] = I[e]);
                        }
                    m = t;
                }
            } else if (y && c(C) && Array.isArray(m)) (m = m.join(C)), (m &&= this.extendTranslation(m, t, n, r));
            else {
                let e = !1,
                    i = !1;
                !this.isValidLookup(m) && _ && ((e = !0), (m = E)), this.isValidLookup(m) || ((i = !0), (m = s));
                let o =
                        (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && i
                            ? void 0
                            : m,
                    l = _ && E !== m && this.options.updateMissing;
                if (i || e || l) {
                    if ((this.logger.log(l ? "updateKey" : "missingKey", h, d, s, l ? E : m), a)) {
                        let e = this.resolve(s, { ...n, keySeparator: !1 });
                        e &&
                            e.res &&
                            this.logger.warn(
                                "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
                            );
                    }
                    let e = [],
                        t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                    if ("fallback" === this.options.saveMissingTo && t && t[0])
                        for (let i = 0; i < t.length; i++) e.push(t[i]);
                    else
                        "all" === this.options.saveMissingTo
                            ? (e = this.languageUtils.toResolveHierarchy(n.lng || this.language))
                            : e.push(n.lng || this.language);
                    let i = (e, t, i) => {
                        let r = _ && i !== m ? i : o;
                        this.options.missingKeyHandler
                            ? this.options.missingKeyHandler(e, d, t, r, l, n)
                            : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(e, d, t, r, l, n),
                            this.emit("missingKey", e, d, t, m);
                    };
                    this.options.saveMissing &&
                        (this.options.saveMissingPlurals && w
                            ? e.forEach((e) => {
                                  let t = this.pluralResolver.getSuffixes(e, n);
                                  S &&
                                      n[`defaultValue${this.options.pluralSeparator}zero`] &&
                                      0 > t.indexOf(`${this.options.pluralSeparator}zero`) &&
                                      t.push(`${this.options.pluralSeparator}zero`),
                                      t.forEach((t) => {
                                          i([e], s + t, n[`defaultValue${t}`] || E);
                                      });
                              })
                            : i(e, s, E));
                }
                (m = this.extendTranslation(m, t, n, f, r)),
                    i && m === s && this.options.appendNamespaceToMissingKey && (m = `${d}${u}${s}`),
                    (i || e) &&
                        this.options.parseMissingKeyHandler &&
                        (m = this.options.parseMissingKeyHandler(
                            this.options.appendNamespaceToMissingKey ? `${d}${u}${s}` : s,
                            e ? m : void 0,
                            n,
                        ));
            }
            return o ? ((f.res = m), (f.usedParams = this.getUsedParamsDetails(n)), f) : m;
        }
        extendTranslation(e, t, i, r, n) {
            if (this.i18nFormat?.parse)
                e = this.i18nFormat.parse(
                    e,
                    { ...this.options.interpolation.defaultVariables, ...i },
                    i.lng || this.language || r.usedLng,
                    r.usedNS,
                    r.usedKey,
                    { resolved: r },
                );
            else if (!i.skipInterpolation) {
                i.interpolation &&
                    this.interpolator.init({
                        ...i,
                        interpolation: { ...this.options.interpolation, ...i.interpolation },
                    });
                let o =
                        c(e) &&
                        (i?.interpolation?.skipOnVariables === void 0
                            ? this.options.interpolation.skipOnVariables
                            : i.interpolation.skipOnVariables),
                    a;
                if (o) {
                    let t = e.match(this.interpolator.nestingRegexp);
                    a = t && t.length;
                }
                let s = i.replace && !c(i.replace) ? i.replace : i;
                if (
                    (this.options.interpolation.defaultVariables &&
                        (s = { ...this.options.interpolation.defaultVariables, ...s }),
                    (e = this.interpolator.interpolate(e, s, i.lng || this.language || r.usedLng, i)),
                    o)
                ) {
                    let t = e.match(this.interpolator.nestingRegexp);
                    a < (t && t.length) && (i.nest = !1);
                }
                !i.lng && r && r.res && (i.lng = this.language || r.usedLng),
                    !1 !== i.nest &&
                        (e = this.interpolator.nest(
                            e,
                            (...e) =>
                                n?.[0] !== e[0] || i.context
                                    ? this.translate(...e, t)
                                    : (this.logger.warn(
                                          `It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`,
                                      ),
                                      null),
                            i,
                        )),
                    i.interpolation && this.interpolator.reset();
            }
            let o = i.postProcess || this.options.postProcess,
                a = c(o) ? [o] : o;
            return (
                null != e &&
                    a?.length &&
                    !1 !== i.applyPostProcessor &&
                    (e = k.handle(
                        a,
                        e,
                        t,
                        this.options && this.options.postProcessPassResolved
                            ? { i18nResolved: { ...r, usedParams: this.getUsedParamsDetails(i) }, ...i }
                            : i,
                        this,
                    )),
                e
            );
        }
        resolve(e, t = {}) {
            let i, r, n, o, a;
            return (
                c(e) && (e = [e]),
                e.forEach((e) => {
                    if (this.isValidLookup(i)) return;
                    let s = this.extractFromKey(e, t),
                        l = s.key;
                    r = l;
                    let d = s.namespaces;
                    this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
                    let u = void 0 !== t.count && !c(t.count),
                        h = u && !t.ordinal && 0 === t.count,
                        p = void 0 !== t.context && (c(t.context) || "number" == typeof t.context) && "" !== t.context,
                        f = t.lngs
                            ? t.lngs
                            : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
                    d.forEach((e) => {
                        this.isValidLookup(i) ||
                            ((a = e),
                            !A[`${f[0]}-${e}`] &&
                                this.utils?.hasLoadedNamespace &&
                                !this.utils?.hasLoadedNamespace(a) &&
                                ((A[`${f[0]}-${e}`] = !0),
                                this.logger.warn(
                                    `key "${r}" for languages "${f.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,
                                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                                )),
                            f.forEach((r) => {
                                let a;
                                if (this.isValidLookup(i)) return;
                                o = r;
                                let s = [l];
                                if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(s, l, r, e, t);
                                else {
                                    let e;
                                    u && (e = this.pluralResolver.getSuffix(r, t.count, t));
                                    let i = `${this.options.pluralSeparator}zero`,
                                        n = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                    if (
                                        (u &&
                                            (t.ordinal &&
                                                0 === e.indexOf(n) &&
                                                s.push(l + e.replace(n, this.options.pluralSeparator)),
                                            s.push(l + e),
                                            h && s.push(l + i)),
                                        p)
                                    ) {
                                        let r = `${l}${this.options.contextSeparator || "_"}${t.context}`;
                                        s.push(r),
                                            u &&
                                                (t.ordinal &&
                                                    0 === e.indexOf(n) &&
                                                    s.push(r + e.replace(n, this.options.pluralSeparator)),
                                                s.push(r + e),
                                                h && s.push(r + i));
                                    }
                                }
                                for (; (a = s.pop()); )
                                    this.isValidLookup(i) || ((n = a), (i = this.getResource(r, e, a, t)));
                            }));
                    });
                }),
                { res: i, usedKey: r, exactUsedKey: n, usedLng: o, usedNS: a }
            );
        }
        isValidLookup(e) {
            return (
                void 0 !== e &&
                !(!this.options.returnNull && null === e) &&
                !(!this.options.returnEmptyString && "" === e)
            );
        }
        getResource(e, t, i, r = {}) {
            return this.i18nFormat?.getResource
                ? this.i18nFormat.getResource(e, t, i, r)
                : this.resourceStore.getResource(e, t, i, r);
        }
        getUsedParamsDetails(e = {}) {
            let t = e.replace && !c(e.replace),
                i = t ? e.replace : e;
            if (
                (t && void 0 !== e.count && (i.count = e.count),
                this.options.interpolation.defaultVariables &&
                    (i = { ...this.options.interpolation.defaultVariables, ...i }),
                !t)
            )
                for (let e of ((i = { ...i }),
                [
                    "defaultValue",
                    "ordinal",
                    "context",
                    "replace",
                    "lng",
                    "lngs",
                    "fallbackLng",
                    "ns",
                    "keySeparator",
                    "nsSeparator",
                    "returnObjects",
                    "returnDetails",
                    "joinArrays",
                    "postProcess",
                    "interpolation",
                ]))
                    delete i[e];
            return i;
        }
        static hasDefaultValue(e) {
            for (let t in e)
                if (
                    Object.prototype.hasOwnProperty.call(e, t) &&
                    "defaultValue" === t.substring(0, 12) &&
                    void 0 !== e[t]
                )
                    return !0;
            return !1;
        }
    },
    D = class {
        constructor(e) {
            (this.options = e),
                (this.supportedLngs = this.options.supportedLngs || !1),
                (this.logger = T.create("languageUtils"));
        }
        getScriptPartFromCode(e) {
            if (!(e = E(e)) || 0 > e.indexOf("-")) return null;
            let t = e.split("-");
            return 2 === t.length || (t.pop(), "x" === t[t.length - 1].toLowerCase())
                ? null
                : this.formatLanguageCode(t.join("-"));
        }
        getLanguagePartFromCode(e) {
            if (!(e = E(e)) || 0 > e.indexOf("-")) return e;
            let t = e.split("-");
            return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
            if (c(e) && e.indexOf("-") > -1) {
                let t;
                try {
                    t = Intl.getCanonicalLocales(e)[0];
                } catch {}
                return (
                    t && this.options.lowerCaseLng && (t = t.toLowerCase()),
                    t || (this.options.lowerCaseLng ? e.toLowerCase() : e)
                );
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
        }
        isSupportedCode(e) {
            return (
                ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) &&
                    (e = this.getLanguagePartFromCode(e)),
                !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
            );
        }
        getBestMatchFromCodes(e) {
            let t;
            return e
                ? (e.forEach((e) => {
                      if (t) return;
                      let i = this.formatLanguageCode(e);
                      (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
                  }),
                  !t &&
                      this.options.supportedLngs &&
                      e.forEach((e) => {
                          if (t) return;
                          let i = this.getScriptPartFromCode(e);
                          if (this.isSupportedCode(i)) return (t = i);
                          let r = this.getLanguagePartFromCode(e);
                          if (this.isSupportedCode(r)) return (t = r);
                          t = this.options.supportedLngs.find((e) => {
                              if (
                                  e === r ||
                                  (!(0 > e.indexOf("-") && 0 > r.indexOf("-")) &&
                                      ((e.indexOf("-") > 0 &&
                                          0 > r.indexOf("-") &&
                                          e.substring(0, e.indexOf("-")) === r) ||
                                          (0 === e.indexOf(r) && r.length > 1)))
                              )
                                  return e;
                          });
                      }),
                  (t ||= this.getFallbackCodes(this.options.fallbackLng)[0]))
                : null;
        }
        getFallbackCodes(e, t) {
            if (!e) return [];
            if (("function" == typeof e && (e = e(t)), c(e) && (e = [e]), Array.isArray(e))) return e;
            if (!t) return e.default || [];
            let i = e[t];
            return (
                (i ||= e[this.getScriptPartFromCode(t)]),
                (i ||= e[this.formatLanguageCode(t)]),
                (i ||= e[this.getLanguagePartFromCode(t)]),
                (i ||= e.default) || []
            );
        }
        toResolveHierarchy(e, t) {
            let i = this.getFallbackCodes((!1 === t ? [] : t) || this.options.fallbackLng || [], e),
                r = [],
                n = (e) => {
                    e &&
                        (this.isSupportedCode(e)
                            ? r.push(e)
                            : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`));
                };
            return (
                c(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
                    ? ("languageOnly" !== this.options.load && n(this.formatLanguageCode(e)),
                      "languageOnly" !== this.options.load &&
                          "currentOnly" !== this.options.load &&
                          n(this.getScriptPartFromCode(e)),
                      "currentOnly" !== this.options.load && n(this.getLanguagePartFromCode(e)))
                    : c(e) && n(this.formatLanguageCode(e)),
                i.forEach((e) => {
                    0 > r.indexOf(e) && n(this.formatLanguageCode(e));
                }),
                r
            );
        }
    },
    U = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
    N = { select: (e) => (1 === e ? "one" : "other"), resolvedOptions: () => ({ pluralCategories: ["one", "other"] }) },
    H = class {
        constructor(e, t = {}) {
            (this.languageUtils = e),
                (this.options = t),
                (this.logger = T.create("pluralResolver")),
                (this.pluralRulesCache = {});
        }
        addRule(e, t) {
            this.rules[e] = t;
        }
        clearCache() {
            this.pluralRulesCache = {};
        }
        getRule(e, t = {}) {
            let i,
                r = E("dev" === e ? "en" : e),
                n = t.ordinal ? "ordinal" : "cardinal",
                o = JSON.stringify({ cleanedCode: r, type: n });
            if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
            try {
                i = new Intl.PluralRules(r, { type: n });
            } catch {
                if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), N;
                if (!e.match(/-|_/)) return N;
                let r = this.languageUtils.getLanguagePartFromCode(e);
                i = this.getRule(r, t);
            }
            return (this.pluralRulesCache[o] = i), i;
        }
        needsPlural(e, t = {}) {
            let i = this.getRule(e, t);
            return (i ||= this.getRule("dev", t)), i?.resolvedOptions().pluralCategories.length > 1;
        }
        getPluralFormsOfKey(e, t, i = {}) {
            return this.getSuffixes(e, i).map((e) => `${t}${e}`);
        }
        getSuffixes(e, t = {}) {
            let i = this.getRule(e, t);
            return (i ||= this.getRule("dev", t))
                ? i
                      .resolvedOptions()
                      .pluralCategories.sort((e, t) => U[e] - U[t])
                      .map((e) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`)
                : [];
        }
        getSuffix(e, t, i = {}) {
            let r = this.getRule(e, i);
            return r
                ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}`
                : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, i));
        }
    },
    V = (e, t, i, r = ".", n = !0) => {
        let o,
            a = void 0 === (o = v(e, i)) ? v(t, i) : o;
        return !a && n && c(i) && void 0 === (a = S(e, i, r)) && (a = S(t, i, r)), a;
    },
    B = class {
        constructor(e = {}) {
            (this.logger = T.create("interpolator")),
                (this.options = e),
                (this.format = e?.interpolation?.format || ((e) => e)),
                this.init(e);
        }
        init(e = {}) {
            e.interpolation ||= { escapeValue: !0 };
            let {
                escape: t,
                escapeValue: i,
                useRawValueToEscape: r,
                prefix: n,
                prefixEscaped: o,
                suffix: a,
                suffixEscaped: s,
                formatSeparator: l,
                unescapeSuffix: c,
                unescapePrefix: d,
                nestingPrefix: u,
                nestingPrefixEscaped: h,
                nestingSuffix: p,
                nestingSuffixEscaped: f,
                nestingOptionsSeparator: m,
                maxReplaces: g,
                alwaysFormat: v,
            } = e.interpolation;
            (this.escape = void 0 === t ? w : t),
                (this.escapeValue = void 0 === i || i),
                (this.useRawValueToEscape = void 0 !== r && r),
                (this.prefix = n ? n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : o || "{{"),
                (this.suffix = a ? a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : s || "}}"),
                (this.formatSeparator = l || ","),
                (this.unescapePrefix = c ? "" : d || "-"),
                (this.unescapeSuffix = this.unescapePrefix ? "" : c || ""),
                (this.nestingPrefix = u
                    ? u.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    : h || "$t(".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")),
                (this.nestingSuffix = p
                    ? p.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    : f || ")".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")),
                (this.nestingOptionsSeparator = m || ","),
                (this.maxReplaces = g || 1e3),
                (this.alwaysFormat = void 0 !== v && v),
                this.resetRegExp();
        }
        reset() {
            this.options && this.init(this.options);
        }
        resetRegExp() {
            let e = (e, t) => (e?.source === t ? ((e.lastIndex = 0), e) : RegExp(t, "g"));
            (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
                (this.regexpUnescape = e(
                    this.regexpUnescape,
                    `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
                )),
                (this.nestingRegexp = e(
                    this.nestingRegexp,
                    `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`,
                ));
        }
        interpolate(e, t, i, r) {
            let n,
                o,
                a,
                s = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {},
                l = (e) => {
                    if (0 > e.indexOf(this.formatSeparator)) {
                        let n = V(t, s, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                        return this.alwaysFormat ? this.format(n, void 0, i, { ...r, ...t, interpolationkey: e }) : n;
                    }
                    let n = e.split(this.formatSeparator),
                        o = n.shift().trim(),
                        a = n.join(this.formatSeparator).trim();
                    return this.format(V(t, s, o, this.options.keySeparator, this.options.ignoreJSONStructure), a, i, {
                        ...r,
                        ...t,
                        interpolationkey: o,
                    });
                };
            this.resetRegExp();
            let d = r?.missingInterpolationHandler || this.options.missingInterpolationHandler,
                h =
                    r?.interpolation?.skipOnVariables === void 0
                        ? this.options.interpolation.skipOnVariables
                        : r.interpolation.skipOnVariables;
            return (
                [
                    { regex: this.regexpUnescape, safeValue: (e) => e.replace(/\$/g, "$$$$") },
                    {
                        regex: this.regexp,
                        safeValue: (e) =>
                            this.escapeValue ? this.escape(e).replace(/\$/g, "$$$$") : e.replace(/\$/g, "$$$$"),
                    },
                ].forEach((t) => {
                    for (a = 0; (n = t.regex.exec(e)); ) {
                        let i = n[1].trim();
                        if (void 0 === (o = l(i)))
                            if ("function" == typeof d) {
                                let t = d(e, n, r);
                                o = c(t) ? t : "";
                            } else if (r && Object.prototype.hasOwnProperty.call(r, i)) o = "";
                            else if (h) {
                                o = n[0];
                                continue;
                            } else this.logger.warn(`missed to pass in variable ${i} for interpolating ${e}`), (o = "");
                        else c(o) || this.useRawValueToEscape || (o = u(o));
                        let s = t.safeValue(o);
                        if (
                            ((e = e.replace(n[0], s)),
                            h
                                ? ((t.regex.lastIndex += o.length), (t.regex.lastIndex -= n[0].length))
                                : (t.regex.lastIndex = 0),
                            ++a >= this.maxReplaces)
                        )
                            break;
                    }
                }),
                e
            );
        }
        nest(e, t, i = {}) {
            let r,
                n,
                o,
                a = (e, t) => {
                    let i = this.nestingOptionsSeparator;
                    if (0 > e.indexOf(i)) return e;
                    let r = e.split(RegExp(`${i}[ ]*{`)),
                        n = `{${r[1]}`;
                    e = r[0];
                    let a = (n = this.interpolate(n, o)).match(/'/g),
                        s = n.match(/"/g);
                    (((a?.length ?? 0) % 2 != 0 || s) && s.length % 2 == 0) || (n = n.replace(/'/g, '"'));
                    try {
                        (o = JSON.parse(n)), t && (o = { ...t, ...o });
                    } catch (t) {
                        return (
                            this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${i}${n}`
                        );
                    }
                    return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, e;
                };
            for (; (r = this.nestingRegexp.exec(e)); ) {
                let s = [];
                ((o = (o = { ...i }).replace && !c(o.replace) ? o.replace : o).applyPostProcessor = !1),
                    delete o.defaultValue;
                let l = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
                if (
                    (-1 !== l &&
                        ((s = r[1]
                            .slice(l)
                            .split(this.formatSeparator)
                            .map((e) => e.trim())
                            .filter(Boolean)),
                        (r[1] = r[1].slice(0, l))),
                    (n = t(a.call(this, r[1].trim(), o), o)) && r[0] === e && !c(n))
                )
                    return n;
                c(n) || (n = u(n)),
                    (n ||= (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), "")),
                    s.length &&
                        (n = s.reduce(
                            (e, t) => this.format(e, t, i.lng, { ...i, interpolationkey: r[1].trim() }),
                            n.trim(),
                        )),
                    (e = e.replace(r[0], n)),
                    (this.regexp.lastIndex = 0);
            }
            return e;
        }
    },
    $ = (e) => {
        let t = {};
        return (i, r, n) => {
            let o = n;
            n &&
                n.interpolationkey &&
                n.formatParams &&
                n.formatParams[n.interpolationkey] &&
                n[n.interpolationkey] &&
                (o = { ...o, [n.interpolationkey]: void 0 });
            let a = r + JSON.stringify(o),
                s = t[a];
            return s || ((s = e(E(r), n)), (t[a] = s)), s(i);
        };
    },
    z = (e) => (t, i, r) => e(E(i), r)(t),
    j = class {
        constructor(e = {}) {
            (this.logger = T.create("formatter")), (this.options = e), this.init(e);
        }
        init(e, t = { interpolation: {} }) {
            this.formatSeparator = t.interpolation.formatSeparator || ",";
            let i = t.cacheInBuiltFormats ? $ : z;
            this.formats = {
                number: i((e, t) => {
                    let i = new Intl.NumberFormat(e, { ...t });
                    return (e) => i.format(e);
                }),
                currency: i((e, t) => {
                    let i = new Intl.NumberFormat(e, { ...t, style: "currency" });
                    return (e) => i.format(e);
                }),
                datetime: i((e, t) => {
                    let i = new Intl.DateTimeFormat(e, { ...t });
                    return (e) => i.format(e);
                }),
                relativetime: i((e, t) => {
                    let i = new Intl.RelativeTimeFormat(e, { ...t });
                    return (e) => i.format(e, t.range || "day");
                }),
                list: i((e, t) => {
                    let i = new Intl.ListFormat(e, { ...t });
                    return (e) => i.format(e);
                }),
            };
        }
        add(e, t) {
            this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
            this.formats[e.toLowerCase().trim()] = $(t);
        }
        format(e, t, i, r = {}) {
            let n = t.split(this.formatSeparator);
            if (n.length > 1 && n[0].indexOf("(") > 1 && 0 > n[0].indexOf(")") && n.find((e) => e.indexOf(")") > -1)) {
                let e = n.findIndex((e) => e.indexOf(")") > -1);
                n[0] = [n[0], ...n.splice(1, e)].join(this.formatSeparator);
            }
            return n.reduce((e, t) => {
                let { formatName: n, formatOptions: o } = ((e) => {
                    let t = e.toLowerCase().trim(),
                        i = {};
                    if (e.indexOf("(") > -1) {
                        let r = e.split("(");
                        t = r[0].toLowerCase().trim();
                        let n = r[1].substring(0, r[1].length - 1);
                        "currency" === t && 0 > n.indexOf(":")
                            ? (i.currency ||= n.trim())
                            : "relativetime" === t && 0 > n.indexOf(":")
                              ? (i.range ||= n.trim())
                              : n.split(";").forEach((e) => {
                                    if (e) {
                                        let [t, ...r] = e.split(":"),
                                            n = r
                                                .join(":")
                                                .trim()
                                                .replace(/^'+|'+$/g, ""),
                                            o = t.trim();
                                        i[o] || (i[o] = n),
                                            "false" === n && (i[o] = !1),
                                            "true" === n && (i[o] = !0),
                                            isNaN(n) || (i[o] = parseInt(n, 10));
                                    }
                                });
                    }
                    return { formatName: t, formatOptions: i };
                })(t);
                if (this.formats[n]) {
                    let t = e;
                    try {
                        let a = r?.formatParams?.[r.interpolationkey] || {},
                            s = a.locale || a.lng || r.locale || r.lng || i;
                        t = this.formats[n](e, s, { ...o, ...r, ...a });
                    } catch (e) {
                        this.logger.warn(e);
                    }
                    return t;
                }
                return this.logger.warn(`there was no format function for ${n}`), e;
            }, e);
        }
    },
    Z = class extends M {
        constructor(e, t, i, r = {}) {
            super(),
                (this.backend = e),
                (this.store = t),
                (this.services = i),
                (this.languageUtils = i.languageUtils),
                (this.options = r),
                (this.logger = T.create("backendConnector")),
                (this.waitingReads = []),
                (this.maxParallelReads = r.maxParallelReads || 10),
                (this.readingCalls = 0),
                (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
                (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
                (this.state = {}),
                (this.queue = []),
                this.backend?.init?.(i, r.backend, r);
        }
        queueLoad(e, t, i, r) {
            let n = {},
                o = {},
                a = {},
                s = {};
            return (
                e.forEach((e) => {
                    let r = !0;
                    t.forEach((t) => {
                        let a = `${e}|${t}`;
                        !i.reload && this.store.hasResourceBundle(e, t)
                            ? (this.state[a] = 2)
                            : this.state[a] < 0 ||
                              (1 === this.state[a]
                                  ? void 0 === o[a] && (o[a] = !0)
                                  : ((this.state[a] = 1),
                                    (r = !1),
                                    void 0 === o[a] && (o[a] = !0),
                                    void 0 === n[a] && (n[a] = !0),
                                    void 0 === s[t] && (s[t] = !0)));
                    }),
                        r || (a[e] = !0);
                }),
                (Object.keys(n).length || Object.keys(o).length) &&
                    this.queue.push({
                        pending: o,
                        pendingCount: Object.keys(o).length,
                        loaded: {},
                        errors: [],
                        callback: r,
                    }),
                {
                    toLoad: Object.keys(n),
                    pending: Object.keys(o),
                    toLoadLanguages: Object.keys(a),
                    toLoadNamespaces: Object.keys(s),
                }
            );
        }
        loaded(e, t, i) {
            let r = e.split("|"),
                n = r[0],
                o = r[1];
            t && this.emit("failedLoading", n, o, t),
                !t && i && this.store.addResourceBundle(n, o, i, void 0, void 0, { skipCopy: !0 }),
                (this.state[e] = t ? -1 : 2),
                t && i && (this.state[e] = 0);
            let a = {};
            this.queue.forEach((i) => {
                ((e, t, i, r) => {
                    let { obj: n, k: o } = m(e, t, Object);
                    (n[o] = n[o] || []), n[o].push(i);
                })(i.loaded, [n], o),
                    void 0 !== i.pending[e] && (delete i.pending[e], i.pendingCount--),
                    t && i.errors.push(t),
                    0 !== i.pendingCount ||
                        i.done ||
                        (Object.keys(i.loaded).forEach((e) => {
                            a[e] || (a[e] = {});
                            let t = i.loaded[e];
                            t.length &&
                                t.forEach((t) => {
                                    void 0 === a[e][t] && (a[e][t] = !0);
                                });
                        }),
                        (i.done = !0),
                        i.errors.length ? i.callback(i.errors) : i.callback());
            }),
                this.emit("loaded", a),
                (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, i, r = 0, n = this.retryTimeout, o) {
            if (!e.length) return o(null, {});
            if (this.readingCalls >= this.maxParallelReads)
                return void this.waitingReads.push({ lng: e, ns: t, fcName: i, tried: r, wait: n, callback: o });
            this.readingCalls++;
            let a = (a, s) => {
                    if ((this.readingCalls--, this.waitingReads.length > 0)) {
                        let e = this.waitingReads.shift();
                        this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
                    }
                    a && s && r < this.maxRetries
                        ? setTimeout(() => {
                              this.read.call(this, e, t, i, r + 1, 2 * n, o);
                          }, n)
                        : o(a, s);
                },
                s = this.backend[i].bind(this.backend);
            if (2 === s.length) {
                try {
                    let i = s(e, t);
                    i && "function" == typeof i.then ? i.then((e) => a(null, e)).catch(a) : a(null, i);
                } catch (e) {
                    a(e);
                }
                return;
            }
            return s(e, t, a);
        }
        prepareLoading(e, t, i = {}, r) {
            if (!this.backend)
                return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
            c(e) && (e = this.languageUtils.toResolveHierarchy(e)), c(t) && (t = [t]);
            let n = this.queueLoad(e, t, i, r);
            if (!n.toLoad.length) return n.pending.length || r(), null;
            n.toLoad.forEach((e) => {
                this.loadOne(e);
            });
        }
        load(e, t, i) {
            this.prepareLoading(e, t, {}, i);
        }
        reload(e, t, i) {
            this.prepareLoading(e, t, { reload: !0 }, i);
        }
        loadOne(e, t = "") {
            let i = e.split("|"),
                r = i[0],
                n = i[1];
            this.read(r, n, "read", void 0, void 0, (i, o) => {
                i && this.logger.warn(`${t}loading namespace ${n} for language ${r} failed`, i),
                    !i && o && this.logger.log(`${t}loaded namespace ${n} for language ${r}`, o),
                    this.loaded(e, i, o);
            });
        }
        saveMissing(e, t, i, r, n, o = {}, a = () => {}) {
            if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t))
                return void this.logger.warn(
                    `did not save key "${i}" as the namespace "${t}" was not yet loaded`,
                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                );
            if (null != i && "" !== i) {
                if (this.backend?.create) {
                    let s = { ...o, isUpdate: n },
                        l = this.backend.create.bind(this.backend);
                    if (l.length < 6)
                        try {
                            let n;
                            (n = 5 === l.length ? l(e, t, i, r, s) : l(e, t, i, r)) && "function" == typeof n.then
                                ? n.then((e) => a(null, e)).catch(a)
                                : a(null, n);
                        } catch (e) {
                            a(e);
                        }
                    else l(e, t, i, r, a, s);
                }
                e && e[0] && this.store.addResource(e[0], t, i, r);
            }
        }
    },
    W = () => ({
        debug: !1,
        initAsync: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: (e) => {
            let t = {};
            if (
                ("object" == typeof e[1] && (t = e[1]),
                c(e[1]) && (t.defaultValue = e[1]),
                c(e[2]) && (t.tDescription = e[2]),
                "object" == typeof e[2] || "object" == typeof e[3])
            ) {
                let i = e[3] || e[2];
                Object.keys(i).forEach((e) => {
                    t[e] = i[e];
                });
            }
            return t;
        },
        interpolation: {
            escapeValue: !0,
            format: (e) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
        },
        cacheInBuiltFormats: !0,
    }),
    K = (e) => (
        c(e.ns) && (e.ns = [e.ns]),
        c(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
        c(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
        e.supportedLngs?.indexOf?.("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
        "boolean" == typeof e.initImmediate && (e.initAsync = e.initImmediate),
        e
    ),
    G = () => {},
    q = class e extends M {
        constructor(e = {}, t) {
            if (
                (super(),
                (this.options = K(e)),
                (this.services = {}),
                (this.logger = T),
                (this.modules = { external: [] }),
                ((e) => {
                    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
                        "function" == typeof e[t] && (e[t] = e[t].bind(e));
                    });
                })(this),
                t && !this.isInitialized && !e.isClone)
            ) {
                if (!this.options.initAsync) return this.init(e, t), this;
                setTimeout(() => {
                    this.init(e, t);
                }, 0);
            }
        }
        init(e = {}, t) {
            (this.isInitializing = !0),
                "function" == typeof e && ((t = e), (e = {})),
                null == e.defaultNS &&
                    e.ns &&
                    (c(e.ns) ? (e.defaultNS = e.ns) : 0 > e.ns.indexOf("translation") && (e.defaultNS = e.ns[0]));
            let i = W();
            (this.options = { ...i, ...this.options, ...K(e) }),
                (this.options.interpolation = { ...i.interpolation, ...this.options.interpolation }),
                void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator),
                void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator);
            let r = (e) => (e ? ("function" == typeof e ? new e() : e) : null);
            if (!this.options.isClone) {
                let e;
                this.modules.logger ? T.init(r(this.modules.logger), this.options) : T.init(null, this.options),
                    (e = this.modules.formatter ? this.modules.formatter : j);
                let t = new D(this.options);
                this.store = new x(this.options.resources, this.options);
                let n = this.services;
                (n.logger = T),
                    (n.resourceStore = this.store),
                    (n.languageUtils = t),
                    (n.pluralResolver = new H(t, {
                        prepend: this.options.pluralSeparator,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    this.options.interpolation.format &&
                        this.options.interpolation.format !== i.interpolation.format &&
                        this.logger.deprecate(
                            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting",
                        ),
                    e &&
                        (!this.options.interpolation.format ||
                            this.options.interpolation.format === i.interpolation.format) &&
                        ((n.formatter = r(e)),
                        n.formatter.init && n.formatter.init(n, this.options),
                        (this.options.interpolation.format = n.formatter.format.bind(n.formatter))),
                    (n.interpolator = new B(this.options)),
                    (n.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
                    (n.backendConnector = new Z(r(this.modules.backend), n.resourceStore, n, this.options)),
                    n.backendConnector.on("*", (e, ...t) => {
                        this.emit(e, ...t);
                    }),
                    this.modules.languageDetector &&
                        ((n.languageDetector = r(this.modules.languageDetector)),
                        n.languageDetector.init && n.languageDetector.init(n, this.options.detection, this.options)),
                    this.modules.i18nFormat &&
                        ((n.i18nFormat = r(this.modules.i18nFormat)), n.i18nFormat.init && n.i18nFormat.init(this)),
                    (this.translator = new F(this.services, this.options)),
                    this.translator.on("*", (e, ...t) => {
                        this.emit(e, ...t);
                    }),
                    this.modules.external.forEach((e) => {
                        e.init && e.init(this);
                    });
            }
            if (
                ((this.format = this.options.interpolation.format),
                (t ||= G),
                this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
            ) {
                let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0]);
            }
            this.services.languageDetector ||
                this.options.lng ||
                this.logger.warn("init: no languageDetector is used and no lng is defined"),
                ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((e) => {
                    this[e] = (...t) => this.store[e](...t);
                }),
                ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((e) => {
                    this[e] = (...t) => (this.store[e](...t), this);
                });
            let n = d(),
                o = () => {
                    let e = (e, i) => {
                        (this.isInitializing = !1),
                            this.isInitialized &&
                                !this.initializedStoreOnce &&
                                this.logger.warn(
                                    "init: i18next is already initialized. You should call init just once!",
                                ),
                            (this.isInitialized = !0),
                            this.options.isClone || this.logger.log("initialized", this.options),
                            this.emit("initialized", this.options),
                            n.resolve(i),
                            t(e, i);
                    };
                    if (this.languages && !this.isInitialized) return e(null, this.t.bind(this));
                    this.changeLanguage(this.options.lng, e);
                };
            return this.options.resources || !this.options.initAsync ? o() : setTimeout(o, 0), n;
        }
        loadResources(e, t = G) {
            let i = t,
                r = c(e) ? e : this.language;
            if (("function" == typeof e && (i = e), !this.options.resources || this.options.partialBundledLanguages)) {
                if (r?.toLowerCase() === "cimode" && (!this.options.preload || 0 === this.options.preload.length))
                    return i();
                let e = [],
                    t = (t) => {
                        t &&
                            "cimode" !== t &&
                            this.services.languageUtils.toResolveHierarchy(t).forEach((t) => {
                                "cimode" !== t && 0 > e.indexOf(t) && e.push(t);
                            });
                    };
                r ? t(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e) => t(e)),
                    this.options.preload?.forEach?.((e) => t(e)),
                    this.services.backendConnector.load(e, this.options.ns, (e) => {
                        e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), i(e);
                    });
            } else i(null);
        }
        reloadResources(e, t, i) {
            let r = d();
            return (
                "function" == typeof e && ((i = e), (e = void 0)),
                "function" == typeof t && ((i = t), (t = void 0)),
                (e ||= this.languages),
                (t ||= this.options.ns),
                (i ||= G),
                this.services.backendConnector.reload(e, t, (e) => {
                    r.resolve(), i(e);
                }),
                r
            );
        }
        use(e) {
            if (!e)
                throw Error(
                    "You are passing an undefined module! Please check the object you are passing to i18next.use()",
                );
            if (!e.type)
                throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
            return (
                "backend" === e.type && (this.modules.backend = e),
                ("logger" === e.type || (e.log && e.warn && e.error)) && (this.modules.logger = e),
                "languageDetector" === e.type && (this.modules.languageDetector = e),
                "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                "postProcessor" === e.type && k.addPostProcessor(e),
                "formatter" === e.type && (this.modules.formatter = e),
                "3rdParty" === e.type && this.modules.external.push(e),
                this
            );
        }
        setResolvedLanguage(e) {
            if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
                for (let e = 0; e < this.languages.length; e++) {
                    let t = this.languages[e];
                    if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                        this.resolvedLanguage = t;
                        break;
                    }
                }
                !this.resolvedLanguage &&
                    0 > this.languages.indexOf(e) &&
                    this.store.hasLanguageSomeTranslations(e) &&
                    ((this.resolvedLanguage = e), this.languages.unshift(e));
            }
        }
        changeLanguage(e, t) {
            this.isLanguageChangingTo = e;
            let i = d();
            this.emit("languageChanging", e);
            let r = (e) => {
                    (this.language = e),
                        (this.languages = this.services.languageUtils.toResolveHierarchy(e)),
                        (this.resolvedLanguage = void 0),
                        this.setResolvedLanguage(e);
                },
                n = (n, o) => {
                    o
                        ? this.isLanguageChangingTo === e &&
                          (r(o),
                          this.translator.changeLanguage(o),
                          (this.isLanguageChangingTo = void 0),
                          this.emit("languageChanged", o),
                          this.logger.log("languageChanged", o))
                        : (this.isLanguageChangingTo = void 0),
                        i.resolve((...e) => this.t(...e)),
                        t && t(n, (...e) => this.t(...e));
                },
                o = (t) => {
                    e || t || !this.services.languageDetector || (t = []);
                    let i = c(t) ? t : t && t[0],
                        o = this.store.hasLanguageSomeTranslations(i)
                            ? i
                            : this.services.languageUtils.getBestMatchFromCodes(c(t) ? [t] : t);
                    o &&
                        (this.language || r(o),
                        this.translator.language || this.translator.changeLanguage(o),
                        this.services.languageDetector?.cacheUserLanguage?.(o)),
                        this.loadResources(o, (e) => {
                            n(e, o);
                        });
                };
            return (
                e || !this.services.languageDetector || this.services.languageDetector.async
                    ? !e && this.services.languageDetector && this.services.languageDetector.async
                        ? 0 === this.services.languageDetector.detect.length
                            ? this.services.languageDetector.detect().then(o)
                            : this.services.languageDetector.detect(o)
                        : o(e)
                    : o(this.services.languageDetector.detect()),
                i
            );
        }
        getFixedT(e, t, i) {
            let r = (e, t, ...n) => {
                let o;
                ((o =
                    "object" == typeof t
                        ? { ...t }
                        : this.options.overloadTranslationOptionHandler([e, t].concat(n))).lng = o.lng || r.lng),
                    (o.lngs = o.lngs || r.lngs),
                    (o.ns = o.ns || r.ns),
                    "" !== o.keyPrefix && (o.keyPrefix = o.keyPrefix || i || r.keyPrefix);
                let a = this.options.keySeparator || ".",
                    s;
                return (
                    o.keyPrefix && Array.isArray(e)
                        ? (s = e.map(
                              (e) => (
                                  "function" == typeof e && (e = P(e, { ...this.options, ...t })),
                                  `${o.keyPrefix}${a}${e}`
                              ),
                          ))
                        : ("function" == typeof e && (e = P(e, { ...this.options, ...t })),
                          (s = o.keyPrefix ? `${o.keyPrefix}${a}${e}` : e)),
                    this.t(s, o)
                );
            };
            return c(e) ? (r.lng = e) : (r.lngs = e), (r.ns = t), (r.keyPrefix = i), r;
        }
        t(...e) {
            return this.translator?.translate(...e);
        }
        exists(...e) {
            return this.translator?.exists(...e);
        }
        setDefaultNamespace(e) {
            this.options.defaultNS = e;
        }
        hasLoadedNamespace(e, t = {}) {
            if (!this.isInitialized)
                return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
            if (!this.languages || !this.languages.length)
                return (
                    this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1
                );
            let i = t.lng || this.resolvedLanguage || this.languages[0],
                r = !!this.options && this.options.fallbackLng,
                n = this.languages[this.languages.length - 1];
            if ("cimode" === i.toLowerCase()) return !0;
            let o = (e, t) => {
                let i = this.services.backendConnector.state[`${e}|${t}`];
                return -1 === i || 0 === i || 2 === i;
            };
            if (t.precheck) {
                let e = t.precheck(this, o);
                if (void 0 !== e) return e;
            }
            return !!(
                this.hasResourceBundle(i, e) ||
                !this.services.backendConnector.backend ||
                (this.options.resources && !this.options.partialBundledLanguages) ||
                (o(i, e) && (!r || o(n, e)))
            );
        }
        loadNamespaces(e, t) {
            let i = d();
            return this.options.ns
                ? (c(e) && (e = [e]),
                  e.forEach((e) => {
                      0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
                  }),
                  this.loadResources((e) => {
                      i.resolve(), t && t(e);
                  }),
                  i)
                : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
            let i = d();
            c(e) && (e = [e]);
            let r = this.options.preload || [],
                n = e.filter((e) => 0 > r.indexOf(e) && this.services.languageUtils.isSupportedCode(e));
            return n.length
                ? ((this.options.preload = r.concat(n)),
                  this.loadResources((e) => {
                      i.resolve(), t && t(e);
                  }),
                  i)
                : (t && t(), Promise.resolve());
        }
        dir(e) {
            if (!(e ||= this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)))
                return "rtl";
            try {
                let t = new Intl.Locale(e);
                if (t && t.getTextInfo) {
                    let e = t.getTextInfo();
                    if (e && e.direction) return e.direction;
                }
            } catch {}
            let t = this.services?.languageUtils || new D(W());
            return e.toLowerCase().indexOf("-latn") > 1
                ? "ltr"
                : "ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb"
                        .split(".")
                        .indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1
                  ? "rtl"
                  : "ltr";
        }
        static createInstance(t = {}, i) {
            let r = new e(t, i);
            return (r.createInstance = e.createInstance), r;
        }
        cloneInstance(t = {}, i = G) {
            let r = t.forkResourceStore;
            r && delete t.forkResourceStore;
            let n = { ...this.options, ...t, isClone: !0 },
                o = new e(n);
            return (
                (void 0 !== t.debug || void 0 !== t.prefix) && (o.logger = o.logger.clone(t)),
                ["store", "services", "language"].forEach((e) => {
                    o[e] = this[e];
                }),
                (o.services = { ...this.services }),
                (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
                r &&
                    ((o.store = new x(
                        Object.keys(this.store.data).reduce(
                            (e, t) => (
                                (e[t] = { ...this.store.data[t] }),
                                (e[t] = Object.keys(e[t]).reduce((i, r) => ((i[r] = { ...e[t][r] }), i), e[t])),
                                e
                            ),
                            {},
                        ),
                        n,
                    )),
                    (o.services.resourceStore = o.store)),
                t.interpolation && (o.services.interpolator = new B(n)),
                (o.translator = new F(o.services, n)),
                o.translator.on("*", (e, ...t) => {
                    o.emit(e, ...t);
                }),
                o.init(n, i),
                (o.translator.options = n),
                (o.translator.backendConnector.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
                o
            );
        }
        toJSON() {
            return {
                options: this.options,
                store: this.store,
                language: this.language,
                languages: this.languages,
                resolvedLanguage: this.resolvedLanguage,
            };
        }
    }.createInstance();
q.createInstance,
    q.dir,
    q.init,
    q.loadResources,
    q.reloadResources,
    q.use,
    q.changeLanguage,
    q.getFixedT,
    q.t,
    q.exists,
    q.setDefaultNamespace,
    q.hasLoadedNamespace,
    q.loadNamespaces,
    q.loadLanguages;
var { slice: Y, forEach: Q } = [],
    X = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    J = function (e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { path: "/" },
            r = `${e}=${encodeURIComponent(t)}`;
        if (i.maxAge > 0) {
            let e = i.maxAge - 0;
            if (Number.isNaN(e)) throw Error("maxAge should be a Number");
            r += `; Max-Age=${Math.floor(e)}`;
        }
        if (i.domain) {
            if (!X.test(i.domain)) throw TypeError("option domain is invalid");
            r += `; Domain=${i.domain}`;
        }
        if (i.path) {
            if (!X.test(i.path)) throw TypeError("option path is invalid");
            r += `; Path=${i.path}`;
        }
        if (i.expires) {
            if ("function" != typeof i.expires.toUTCString) throw TypeError("option expires is invalid");
            r += `; Expires=${i.expires.toUTCString()}`;
        }
        if ((i.httpOnly && (r += "; HttpOnly"), i.secure && (r += "; Secure"), i.sameSite))
            switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                case !0:
                case "strict":
                    r += "; SameSite=Strict";
                    break;
                case "lax":
                    r += "; SameSite=Lax";
                    break;
                case "none":
                    r += "; SameSite=None";
                    break;
                default:
                    throw TypeError("option sameSite is invalid");
            }
        return i.partitioned && (r += "; Partitioned"), r;
    },
    ee = {
        create(e, t, i, r) {
            let n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { path: "/", sameSite: "strict" };
            i && ((n.expires = new Date()), n.expires.setTime(n.expires.getTime() + 60 * i * 1e3)),
                r && (n.domain = r),
                (document.cookie = J(e, t, n));
        },
        read(e) {
            let t = `${e}=`,
                i = document.cookie.split(";");
            for (let e = 0; e < i.length; e++) {
                let r = i[e];
                for (; " " === r.charAt(0); ) r = r.substring(1, r.length);
                if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
            }
            return null;
        },
        remove(e, t) {
            this.create(e, "", -1, t);
        },
    },
    et = {
        name: "cookie",
        lookup(e) {
            let { lookupCookie: t } = e;
            if (t && "u" > typeof document) return ee.read(t) || void 0;
        },
        cacheUserLanguage(e, t) {
            let { lookupCookie: i, cookieMinutes: r, cookieDomain: n, cookieOptions: o } = t;
            i && "u" > typeof document && ee.create(i, e, r, n, o);
        },
    },
    ei = {
        name: "querystring",
        lookup(e) {
            let { lookupQuerystring: t } = e,
                i;
            if ("u" > typeof window) {
                let { search: e } = window.location;
                !window.location.search &&
                    window.location.hash?.indexOf("?") > -1 &&
                    (e = window.location.hash.substring(window.location.hash.indexOf("?")));
                let r = e.substring(1).split("&");
                for (let e = 0; e < r.length; e++) {
                    let n = r[e].indexOf("=");
                    n > 0 && r[e].substring(0, n) === t && (i = r[e].substring(n + 1));
                }
            }
            return i;
        },
    },
    er = {
        name: "hash",
        lookup(e) {
            let { lookupHash: t, lookupFromHashIndex: i } = e,
                r;
            if ("u" > typeof window) {
                let { hash: e } = window.location;
                if (e && e.length > 2) {
                    let n = e.substring(1);
                    if (t) {
                        let e = n.split("&");
                        for (let i = 0; i < e.length; i++) {
                            let n = e[i].indexOf("=");
                            n > 0 && e[i].substring(0, n) === t && (r = e[i].substring(n + 1));
                        }
                    }
                    if (r) return r;
                    if (!r && i > -1) {
                        let t = e.match(/\/([a-zA-Z-]*)/g);
                        return Array.isArray(t) ? t["number" == typeof i ? i : 0]?.replace("/", "") : void 0;
                    }
                }
            }
            return r;
        },
    },
    en = null,
    eo = () => {
        if (null !== en) return en;
        try {
            if (!(en = "u" > typeof window && null !== window.localStorage)) return !1;
            let e = "i18next.translate.boo";
            window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
        } catch {
            en = !1;
        }
        return en;
    },
    ea = {
        name: "localStorage",
        lookup(e) {
            let { lookupLocalStorage: t } = e;
            if (t && eo()) return window.localStorage.getItem(t) || void 0;
        },
        cacheUserLanguage(e, t) {
            let { lookupLocalStorage: i } = t;
            i && eo() && window.localStorage.setItem(i, e);
        },
    },
    es = null,
    el = () => {
        if (null !== es) return es;
        try {
            if (!(es = "u" > typeof window && null !== window.sessionStorage)) return !1;
            let e = "i18next.translate.boo";
            window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
        } catch {
            es = !1;
        }
        return es;
    },
    ec = {
        name: "sessionStorage",
        lookup(e) {
            let { lookupSessionStorage: t } = e;
            if (t && el()) return window.sessionStorage.getItem(t) || void 0;
        },
        cacheUserLanguage(e, t) {
            let { lookupSessionStorage: i } = t;
            i && el() && window.sessionStorage.setItem(i, e);
        },
    },
    ed = {
        name: "navigator",
        lookup(e) {
            let t = [];
            if ("u" > typeof navigator) {
                let { languages: e, userLanguage: i, language: r } = navigator;
                if (e) for (let i = 0; i < e.length; i++) t.push(e[i]);
                i && t.push(i), r && t.push(r);
            }
            return t.length > 0 ? t : void 0;
        },
    },
    eu = {
        name: "htmlTag",
        lookup(e) {
            let { htmlTag: t } = e,
                i,
                r = t || ("u" > typeof document ? document.documentElement : null);
            return r && "function" == typeof r.getAttribute && (i = r.getAttribute("lang")), i;
        },
    },
    eh = {
        name: "path",
        lookup(e) {
            let { lookupFromPathIndex: t } = e;
            if (typeof window > "u") return;
            let i = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            if (Array.isArray(i)) return i["number" == typeof t ? t : 0]?.replace("/", "");
        },
    },
    ep = {
        name: "subdomain",
        lookup(e) {
            let { lookupFromSubdomainIndex: t } = e,
                i =
                    "u" > typeof window &&
                    window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
            if (i) return i["number" == typeof t ? t + 1 : 1];
        },
    },
    ef = !1;
try {
    document.cookie, (ef = !0);
} catch {}
var em = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
ef || em.splice(1, 1);
var eg = class {
    constructor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (this.type = "languageDetector"), (this.detectors = {}), this.init(e, t);
    }
    init() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { languageUtils: {} },
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (this.services = e),
            (this.options = (function (e) {
                return (
                    Q.call(Y.call(arguments, 1), (t) => {
                        if (t) for (let i in t) void 0 === e[i] && (e[i] = t[i]);
                    }),
                    e
                );
            })(t, this.options || {}, {
                order: em,
                lookupQuerystring: "lng",
                lookupCookie: "i18next",
                lookupLocalStorage: "i18nextLng",
                lookupSessionStorage: "i18nextLng",
                caches: ["localStorage"],
                excludeCacheFor: ["cimode"],
                convertDetectedLanguage: (e) => e,
            })),
            "string" == typeof this.options.convertDetectedLanguage &&
                this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
                (this.options.convertDetectedLanguage = (e) => e.replace("-", "_")),
            this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
            (this.i18nOptions = i),
            this.addDetector(et),
            this.addDetector(ei),
            this.addDetector(ea),
            this.addDetector(ec),
            this.addDetector(ed),
            this.addDetector(eu),
            this.addDetector(eh),
            this.addDetector(ep),
            this.addDetector(er);
    }
    addDetector(e) {
        return (this.detectors[e.name] = e), this;
    }
    detect() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.order,
            t = [];
        return (
            e.forEach((e) => {
                if (this.detectors[e]) {
                    let i = this.detectors[e].lookup(this.options);
                    i && "string" == typeof i && (i = [i]), i && (t = t.concat(i));
                }
            }),
            (t = t
                .filter(
                    (e) =>
                        null != e &&
                        !(
                            "string" == typeof e &&
                            [
                                /<\s*script.*?>/i,
                                /<\s*\/\s*script\s*>/i,
                                /<\s*img.*?on\w+\s*=/i,
                                /<\s*\w+\s*on\w+\s*=.*?>/i,
                                /javascript\s*:/i,
                                /vbscript\s*:/i,
                                /expression\s*\(/i,
                                /eval\s*\(/i,
                                /alert\s*\(/i,
                                /document\.cookie/i,
                                /document\.write\s*\(/i,
                                /window\.location/i,
                                /innerHTML/i,
                            ].some((t) => t.test(e))
                        ),
                )
                .map((e) => this.options.convertDetectedLanguage(e))),
            this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes
                ? t
                : t.length > 0
                  ? t[0]
                  : null
        );
    }
    cacheUserLanguage(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.caches;
        t &&
            ((this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1) ||
                t.forEach((t) => {
                    this.detectors[t] && this.detectors[t].cacheUserLanguage(e, this.options);
                }));
    }
};
function ev(e) {
    return (ev =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
eg.type = "languageDetector";
function eC() {
    return (
        "function" == typeof XMLHttpRequest ||
        (typeof XMLHttpRequest > "u" ? "undefined" : ev(XMLHttpRequest)) === "object"
    );
}
function ey(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function ew(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null == arguments[t] ? {} : arguments[t];
        t % 2
            ? ey(Object(i), !0).forEach(function (t) {
                  var r, n, o;
                  (r = e),
                      (n = t),
                      (o = i[t]),
                      (n = (function (e) {
                          var t = (function (e, t) {
                              if ("object" != e_(e) || !e) return e;
                              var i = e[Symbol.toPrimitive];
                              if (void 0 !== i) {
                                  var r = i.call(e, t || "default");
                                  if ("object" != e_(r)) return r;
                                  throw TypeError("@@toPrimitive must return a primitive value.");
                              }
                              return ("string" === t ? String : Number)(e);
                          })(e, "string");
                          return "symbol" == e_(t) ? t : t + "";
                      })(n)) in r
                          ? Object.defineProperty(r, n, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                          : (r[n] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : ey(Object(i)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                });
    }
    return e;
}
function e_(e) {
    return (e_ =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
var eb = "function" == typeof fetch ? fetch : void 0;
if (
    ("u" > typeof global && global.fetch
        ? (eb = global.fetch)
        : "u" > typeof window && window.fetch && (eb = window.fetch),
    eC() &&
        ("u" > typeof global && global.XMLHttpRequest
            ? (o = global.XMLHttpRequest)
            : "u" > typeof window && window.XMLHttpRequest && (o = window.XMLHttpRequest)),
    "function" == typeof ActiveXObject &&
        ("u" > typeof global && global.ActiveXObject
            ? (a = global.ActiveXObject)
            : "u" > typeof window && window.ActiveXObject && (a = window.ActiveXObject)),
    "function" != typeof eb && (eb = void 0),
    !eb && !o && !a)
)
    try {
        i.e("98789")
            .then(i.bind(i, 803300))
            .then((e) => (0, s.r)(e.default, 1))
            .then(function (e) {
                eb = e.default;
            })
            .catch(function () {});
    } catch {}
var eL = function (e, t) {
        if (t && "object" === e_(t)) {
            var i = "";
            for (var r in t) i += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(t[r]);
            if (!i) return e;
            e = e + (-1 === e.indexOf("?") ? "?" : "&") + i.slice(1);
        }
        return e;
    },
    eS = function (e, t, i, r) {
        var n = function (e) {
            if (!e.ok) return i(e.statusText || "Error", { status: e.status });
            e.text()
                .then(function (t) {
                    i(null, { status: e.status, data: t });
                })
                .catch(i);
        };
        if (r) {
            var o = r(e, t);
            if (o instanceof Promise) return void o.then(n).catch(i);
        }
        "function" == typeof fetch ? fetch(e, t).then(n).catch(i) : eb(e, t).then(n).catch(i);
    },
    eE = !1,
    eI = function (e, t, i, r) {
        e.queryStringParams && (t = eL(t, e.queryStringParams));
        var n = ew({}, "function" == typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
        typeof window > "u" &&
            "u" > typeof global &&
            void 0 !== global.process &&
            global.process.versions &&
            global.process.versions.node &&
            (n["User-Agent"] =
                `i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),
            i && (n["Content-Type"] = "application/json");
        var o = "function" == typeof e.requestOptions ? e.requestOptions(i) : e.requestOptions,
            a = ew({ method: i ? "POST" : "GET", body: i ? e.stringify(i) : void 0, headers: n }, eE ? {} : o),
            s = "function" == typeof e.alternateFetch && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
        try {
            eS(t, a, r, s);
        } catch (e) {
            if (!o || 0 === Object.keys(o).length || !e.message || 0 > e.message.indexOf("not implemented"))
                return r(e);
            try {
                Object.keys(o).forEach(function (e) {
                    delete a[e];
                }),
                    eS(t, a, r, s),
                    (eE = !0);
            } catch (e) {
                r(e);
            }
        }
    },
    eT = function (e, t, i, r) {
        i && "object" === e_(i) && (i = eL("", i).slice(1)), e.queryStringParams && (t = eL(t, e.queryStringParams));
        try {
            var n = o ? new o() : new a("MSXML2.XMLHTTP.3.0");
            n.open(i ? "POST" : "GET", t, 1),
                e.crossDomain || n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                (n.withCredentials = !!e.withCredentials),
                i && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                n.overrideMimeType && n.overrideMimeType("application/json");
            var s = e.customHeaders;
            if ((s = "function" == typeof s ? s() : s)) for (var l in s) n.setRequestHeader(l, s[l]);
            (n.onreadystatechange = function () {
                n.readyState > 3 &&
                    r(n.status >= 400 ? n.statusText : null, { status: n.status, data: n.responseText });
            }),
                n.send(i);
        } catch (e) {
            console && console.log(e);
        }
    },
    eM = function (e, t, i, r) {
        return ("function" == typeof i && ((r = i), (i = void 0)),
        (r ||= function () {}),
        eb && 0 !== t.indexOf("file:"))
            ? eI(e, t, i, r)
            : eC() || "function" == typeof ActiveXObject
              ? eT(e, t, i, r)
              : void r(Error("No fetch and no xhr implementation found!"));
    };
function ex(e) {
    return (ex =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function ek(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function eO(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null == arguments[t] ? {} : arguments[t];
        t % 2
            ? ek(Object(i), !0).forEach(function (t) {
                  eP(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : ek(Object(i)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                });
    }
    return e;
}
function eP(e, t, i) {
    return (
        (t = eA(t)) in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
        e
    );
}
function eA(e) {
    var t = (function (e, t) {
        if ("object" != ex(e) || !e) return e;
        var i = e[Symbol.toPrimitive];
        if (void 0 !== i) {
            var r = i.call(e, t || "default");
            if ("object" != ex(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == ex(t) ? t : t + "";
}
var eR =
    ((r = function e(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (function (e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        })(this, e),
            (this.services = t),
            (this.options = i),
            (this.allOptions = r),
            (this.type = "backend"),
            this.init(t, i, r);
    }),
    (n = [
        {
            key: "init",
            value: function (e) {
                var t = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (
                    ((this.services = e),
                    (this.options = eO(
                        eO(
                            eO(
                                {},
                                {
                                    loadPath: "/locales/{{lng}}/{{ns}}.json",
                                    addPath: "/locales/add/{{lng}}/{{ns}}",
                                    parse: function (e) {
                                        return JSON.parse(e);
                                    },
                                    stringify: JSON.stringify,
                                    parsePayload: function (e, t, i) {
                                        return eP({}, t, i || "");
                                    },
                                    parseLoadPayload: function (e, t) {},
                                    request: eM,
                                    reloadInterval: !("u" > typeof window) && 36e5,
                                    customHeaders: {},
                                    queryStringParams: {},
                                    crossDomain: !1,
                                    withCredentials: !1,
                                    overrideMimeType: !1,
                                    requestOptions: { mode: "cors", credentials: "same-origin", cache: "default" },
                                },
                            ),
                            this.options || {},
                        ),
                        i,
                    )),
                    (this.allOptions = r),
                    this.services && this.options.reloadInterval)
                ) {
                    var n = setInterval(function () {
                        return t.reload();
                    }, this.options.reloadInterval);
                    "object" === ex(n) && "function" == typeof n.unref && n.unref();
                }
            },
        },
        {
            key: "readMulti",
            value: function (e, t, i) {
                this._readAny(e, e, t, t, i);
            },
        },
        {
            key: "read",
            value: function (e, t, i) {
                this._readAny([e], e, [t], t, i);
            },
        },
        {
            key: "_readAny",
            value: function (e, t, i, r, n) {
                var o,
                    a,
                    s = this,
                    l = this.options.loadPath;
                "function" == typeof this.options.loadPath && (l = this.options.loadPath(e, i)),
                    (l = (a = o = l) && "function" == typeof a.then ? o : Promise.resolve(o)).then(function (o) {
                        if (!o) return n(null, {});
                        var a = s.services.interpolator.interpolate(o, { lng: e.join("+"), ns: i.join("+") });
                        s.loadUrl(a, n, t, r);
                    });
            },
        },
        {
            key: "loadUrl",
            value: function (e, t, i, r) {
                var n = this,
                    o = this.options.parseLoadPayload("string" == typeof i ? [i] : i, "string" == typeof r ? [r] : r);
                this.options.request(this.options, e, o, function (o, a) {
                    if (a && ((a.status >= 500 && a.status < 600) || !a.status))
                        return t("failed loading " + e + "; status code: " + a.status, !0);
                    if (a && a.status >= 400 && a.status < 500)
                        return t("failed loading " + e + "; status code: " + a.status, !1);
                    if (!a && o && o.message) {
                        var s,
                            l,
                            c = o.message.toLowerCase();
                        if (
                            ["failed", "fetch", "network", "load"].find(function (e) {
                                return c.indexOf(e) > -1;
                            })
                        )
                            return t("failed loading " + e + ": " + o.message, !0);
                    }
                    if (o) return t(o, !1);
                    try {
                        s = "string" == typeof a.data ? n.options.parse(a.data, i, r) : a.data;
                    } catch {
                        l = "failed parsing " + e + " to json";
                    }
                    if (l) return t(l, !1);
                    t(null, s);
                });
            },
        },
        {
            key: "create",
            value: function (e, t, i, r, n) {
                var o = this;
                if (this.options.addPath) {
                    "string" == typeof e && (e = [e]);
                    var a = this.options.parsePayload(t, i, r),
                        s = 0,
                        l = [],
                        c = [];
                    e.forEach(function (i) {
                        var r = o.options.addPath;
                        "function" == typeof o.options.addPath && (r = o.options.addPath(i, t));
                        var d = o.services.interpolator.interpolate(r, { lng: i, ns: t });
                        o.options.request(o.options, d, a, function (t, i) {
                            (s += 1), l.push(t), c.push(i), s === e.length && "function" == typeof n && n(l, c);
                        });
                    });
                }
            },
        },
        {
            key: "reload",
            value: function () {
                var e = this,
                    t = this.services,
                    i = t.backendConnector,
                    r = t.languageUtils,
                    n = t.logger,
                    o = i.language;
                if (!(o && "cimode" === o.toLowerCase())) {
                    var a = [],
                        s = function (e) {
                            r.toResolveHierarchy(e).forEach(function (e) {
                                0 > a.indexOf(e) && a.push(e);
                            });
                        };
                    s(o),
                        this.allOptions.preload &&
                            this.allOptions.preload.forEach(function (e) {
                                return s(e);
                            }),
                        a.forEach(function (t) {
                            e.allOptions.ns.forEach(function (e) {
                                i.read(t, e, "read", null, null, function (r, o) {
                                    r && n.warn(`loading namespace ${e} for language ${t} failed`, r),
                                        !r && o && n.log(`loaded namespace ${e} for language ${t}`, o),
                                        i.loaded(`${t}|${e}`, r, o);
                                });
                            });
                        });
                }
            },
        },
    ]),
    (function (e, t) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, eA(r.key), r);
        }
    })(r.prototype, n),
    Object.defineProperty(r, "prototype", { writable: !1 }),
    r);
eR.type = "backend";
var eF = {
        en: { emoji: "\uD83C\uDDFA\uD83C\uDDF8" },
        "en-DG": { emoji: "\uD83C\uDDEC\uD83C\uDDE7" },
        es: { emoji: "\uD83C\uDDEA\uD83C\uDDF8" },
        "es-ES": { emoji: "\uD83C\uDDEA\uD83C\uDDF8" },
        sr: { emoji: "\uD83C\uDDF7\uD83C\uDDF8" },
        "sr-Latn": { emoji: "\uD83C\uDDF7\uD83C\uDDF8" },
        fr: { emoji: "\uD83C\uDDEB\uD83C\uDDF7" },
        "pt-BR": { emoji: "\uD83C\uDDE7\uD83C\uDDF7" },
        pt: { emoji: "\uD83C\uDDF5\uD83C\uDDF9" },
        bn: { emoji: "\uD83C\uDDE7\uD83C\uDDE9" },
        zh: { emoji: "\uD83C\uDDE8\uD83C\uDDF3" },
        hi: { emoji: "\uD83C\uDDEE\uD83C\uDDF3" },
        id: { emoji: "\uD83C\uDDEE\uD83C\uDDE9" },
        ms: { emoji: "\uD83C\uDDF2\uD83C\uDDFE" },
        tr: { emoji: "\uD83C\uDDF9\uD83C\uDDF7" },
        vi: { emoji: "\uD83C\uDDFB\uD83C\uDDF3" },
        ht: { emoji: "\uD83C\uDDED\uD83C\uDDF9" },
        it: { emoji: "\uD83C\uDDEE\uD83C\uDDF9" },
        de: { emoji: "\uD83C\uDDE9\uD83C\uDDEA" },
        nl: { emoji: "\uD83C\uDDF3\uD83C\uDDF1" },
        "tl-PH": { emoji: "\uD83C\uDDF5\uD83C\uDDED" },
        pl: { emoji: "\uD83C\uDDF5\uD83C\uDDF1" },
        hu: { emoji: "\uD83C\uDDED\uD83C\uDDFA" },
        ro: { emoji: "\uD83C\uDDF7\uD83C\uDDF4" },
        hmn: { emoji: "\uD83C\uDF10" },
        so: { emoji: "\uD83C\uDDF8\uD83C\uDDF4" },
        ca: { emoji: "\uD83C\uDDEA\uD83C\uDDF8" },
        "af-ZA": { emoji: "\uD83C\uDDFF\uD83C\uDDE6" },
        ar: { emoji: "\uD83C\uDDF8\uD83C\uDDE6" },
        "ar-EG": { emoji: "\uD83C\uDDEA\uD83C\uDDEC" },
        "ar-AE": { emoji: "\uD83C\uDDE6\uD83C\uDDEA" },
        "zh-CN": { emoji: "\uD83C\uDDE8\uD83C\uDDF3" },
        "zh-TW": { emoji: "\uD83C\uDDF9\uD83C\uDDFC" },
        "zh-HANT": { emoji: "\uD83C\uDDF9\uD83C\uDDFC" },
        "cs-CZ": { emoji: "\uD83C\uDDE8\uD83C\uDDFF" },
        "da-DK": { emoji: "\uD83C\uDDE9\uD83C\uDDF0" },
        "fi-FI": { emoji: "\uD83C\uDDEB\uD83C\uDDEE" },
        "fr-CA": { emoji: "\uD83C\uDDE8\uD83C\uDDE6" },
        "el-GR": { emoji: "\uD83C\uDDEC\uD83C\uDDF7" },
        he: { emoji: "\uD83C\uDDEE\uD83C\uDDF1" },
        ja: { emoji: "\uD83C\uDDEF\uD83C\uDDF5" },
        "ja-JP": { emoji: "\uD83C\uDDEF\uD83C\uDDF5" },
        "ko-KP": { emoji: "\uD83C\uDDF0\uD83C\uDDF5" },
        "nb-NO": { emoji: "\uD83C\uDDF3\uD83C\uDDF4" },
        "fa-IR": { emoji: "\uD83C\uDDEE\uD83C\uDDF7" },
        "pt-PT": { emoji: "\uD83C\uDDF5\uD83C\uDDF9" },
        "ru-RU": { emoji: "\uD83C\uDDF7\uD83C\uDDFA" },
        "sr-YU": { emoji: "\uD83C\uDDF7\uD83C\uDDF8" },
        "es-419": { emoji: "\uD83C\uDF0E" },
        "es-MX": { emoji: "\uD83C\uDDF2\uD83C\uDDFD" },
        "sv-SE": { emoji: "\uD83C\uDDF8\uD83C\uDDEA" },
        "th-TH": { emoji: "\uD83C\uDDF9\uD83C\uDDED" },
        "uk-UA": { emoji: "\uD83C\uDDFA\uD83C\uDDE6" },
        am: { emoji: "\uD83C\uDDEA\uD83C\uDDF9" },
        az: { emoji: "\uD83C\uDDE6\uD83C\uDDFF" },
        bs: { emoji: "\uD83C\uDDE7\uD83C\uDDE6" },
        my: { emoji: "\uD83C\uDDF2\uD83C\uDDF2" },
        ceb: { emoji: "\uD83C\uDDF5\uD83C\uDDED" },
        cs: { emoji: "\uD83C\uDDE8\uD83C\uDDFF" },
        et: { emoji: "\uD83C\uDDEA\uD83C\uDDEA" },
        ka: { emoji: "\uD83C\uDDEC\uD83C\uDDEA" },
        el: { emoji: "\uD83C\uDDEC\uD83C\uDDF7" },
        jv: { emoji: "\uD83C\uDDEE\uD83C\uDDE9" },
        kk: { emoji: "\uD83C\uDDF0\uD83C\uDDFF" },
        km: { emoji: "\uD83C\uDDF0\uD83C\uDDED" },
        ko: { emoji: "\uD83C\uDDF0\uD83C\uDDF7" },
        ky: { emoji: "\uD83C\uDDF0\uD83C\uDDEC" },
        lo: { emoji: "\uD83C\uDDF1\uD83C\uDDE6" },
        lv: { emoji: "\uD83C\uDDF1\uD83C\uDDFB" },
        lt: { emoji: "\uD83C\uDDF1\uD83C\uDDF9" },
        mk: { emoji: "\uD83C\uDDF2\uD83C\uDDF0" },
        mn: { emoji: "\uD83C\uDDF2\uD83C\uDDF3" },
        ne: { emoji: "\uD83C\uDDF3\uD83C\uDDF5" },
        ru: { emoji: "\uD83C\uDDF7\uD83C\uDDFA" },
        sk: { emoji: "\uD83C\uDDF8\uD83C\uDDF0" },
        sl: { emoji: "\uD83C\uDDF8\uD83C\uDDEE" },
        sw: { emoji: "\uD83C\uDDF9\uD83C\uDDFF" },
        tl: { emoji: "\uD83C\uDDF5\uD83C\uDDED" },
        th: { emoji: "\uD83C\uDDF9\uD83C\uDDED" },
        uk: { emoji: "\uD83C\uDDFA\uD83C\uDDE6" },
        ur: { emoji: "\uD83C\uDDF5\uD83C\uDDF0" },
        uz: { emoji: "\uD83C\uDDFA\uD83C\uDDFF" },
        hr: { emoji: "\uD83C\uDDED\uD83C\uDDF7" },
    },
    eD = Object.keys(eF);
function eU(e) {
    let t = eF[e];
    return t ? t.emoji : (eF[e.split("-")[0] || e]?.emoji ?? "\uD83C\uDF10");
}
var eN = "incode:i18n:language",
    eH = (e) => {
        let t,
            i = e.split(".");
        return (t = (i[i.length - 1] || "missing key").replace(/([A-Z])/g, " $1")).charAt(0).toUpperCase() + t.slice(1);
    },
    eV = new eg();
function eB(e, t) {
    for (let [i, r] of Object.entries(t)) r && e.addResourceBundle(i, "default", r, !0, !0);
}
function e$(e = {}) {
    let { lang: t, translations: i } = e,
        r = q.createInstance();
    return (
        r
            .use(eR)
            .use(eV)
            .init({
                lng: t,
                fallbackLng: "en",
                supportedLngs: eD,
                ns: ["default"],
                defaultNS: "default",
                partialBundledLanguages: !0,
                keySeparator: ".",
                interpolation: { escapeValue: !1 },
                backend: {
                    loadPath:
                        "https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=cg41dUINoxdp8BaHDQLJhA",
                },
                detection: {
                    order: [
                        "querystring",
                        "cookie",
                        "localStorage",
                        "sessionStorage",
                        "navigatorOnlyLanguage",
                        "htmlTag",
                        "path",
                        "subdomain",
                    ],
                    lookupQuerystring: "lang",
                    lookupLocalStorage: eN,
                    lookupSessionStorage: eN,
                    caches: ["localStorage"],
                },
                initImmediate: !1,
                parseMissingKeyHandler: eH,
            }),
        i &&
            (eB(r, i),
            r.on("loaded", () => {
                eB(r, i);
            })),
        r
    );
}
eV.addDetector({
    name: "navigatorOnlyLanguage",
    lookup() {
        if (typeof navigator > "u") return "en";
        let e = navigator.language;
        return eD.includes(e) ? e : e.split("-")[0];
    },
});
var ez = null;
function ej(e) {
    ez = e;
}
var eZ = ({ class: e }) =>
    (0, l.v)("svg", {
        width: "13",
        height: "14",
        viewBox: "0 0 13 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        class: e,
        children: (0, l.v)("path", {
            d: "M0 8.08009V5.92009H9.198L4.698 1.87009L6.228 0.340088L12.6 6.28009V7.70209L6.228 13.6601L4.698 12.1301L9.198 8.08009H0Z",
            fill: "currentColor",
        }),
    });
function eW() {
    let e = (ez ||= e$()),
        [, t] = (0, l.p)(0),
        [i, r] = (0, l.p)(e.isInitialized);
    return (
        (0, l._)(() => {
            let i = () => {
                    t((e) => e + 1);
                },
                n = () => {
                    r(!0), t((e) => e + 1);
                };
            return (
                e.on("languageChanged", i),
                e.on("initialized", n),
                e.on("loaded", i),
                () => {
                    e.off("languageChanged", i), e.off("initialized", n), e.off("loaded", i);
                }
            );
        }, [e]),
        { t: (0, l.d)(() => e.t.bind(e), [e]), ready: i, i18n: e }
    );
}
var eK = ({
    i18nKey: e,
    boldClass: t = "IncodeTransBold",
    arrowClass: i = "IncodeTransArrow",
    components: r,
    defaultValue: n,
}) => {
    let { t: o } = eW(),
        a = n ? o(e, { defaultValue: n }) : o(e),
        s = "<strong>|<\\/strong>|<br\\s*\\/?>|<arrow\\s*\\/>",
        c = r
            ? Object.keys(r)
                  .map((e) => `<${e}>|<\\/${e}>`)
                  .join("|")
            : "",
        d = c ? `${s}|${c}` : s,
        u = a.split(RegExp(`(${d})`, "g")),
        h = !1,
        p = null;
    return (0, l.v)(l.S, {
        children: u.map((e, n) => {
            if ("<strong>" === e) return (h = !0), null;
            if ("</strong>" === e) return (h = !1), null;
            if (/^<br\s*\/?>$/.test(e)) return (0, l.v)("br", {}, n);
            if (/^<arrow\s*\/>$/.test(e)) return (0, l.v)(eZ, { class: i }, n);
            if (r) {
                let t = e.match(/^<(\w+)>$/);
                if (t && r[t[1]]) return (p = t[1]), null;
                let i = e.match(/^<\/(\w+)>$/);
                if (i && r[i[1]]) return (p = null), null;
            }
            return e
                ? p && r
                    ? (0, l.b)(r[p], { key: n }, e)
                    : h
                      ? (0, l.v)("span", { class: t, children: e }, n)
                      : (0, l.v)(l.S, { children: e }, n)
                : null;
        }),
    });
};
