d.d(t, { a: () => lv, c: () => lj, i: () => lH, n: () => lf, o: () => lE, r: () => lQ, s: () => lU, t: () => lB });
var i,
    e,
    c,
    a,
    s = d(327169),
    n = d(287822),
    Z = (l) => "string" == typeof l,
    b = () => {
        let l,
            t,
            d = new Promise((d, i) => {
                (l = d), (t = i);
            });
        return (d.resolve = l), (d.reject = t), d;
    },
    m = (l) => (null == l ? "" : "" + l),
    o = /###/g,
    u = (l) => (l && l.indexOf("###") > -1 ? l.replace(o, ".") : l),
    h = (l) => !l || Z(l),
    W = (l, t, d) => {
        let i = Z(t) ? t.split(".") : t,
            e = 0;
        for (; e < i.length - 1; ) {
            if (h(l)) return {};
            let t = u(i[e]);
            !l[t] && d && (l[t] = new d()), (l = Object.prototype.hasOwnProperty.call(l, t) ? l[t] : {}), ++e;
        }
        return h(l) ? {} : { obj: l, k: u(i[e]) };
    },
    G = (l, t, d) => {
        let { obj: i, k: e } = W(l, t, Object);
        if (void 0 !== i || 1 === t.length) {
            i[e] = d;
            return;
        }
        let c = t[t.length - 1],
            a = t.slice(0, t.length - 1),
            s = W(l, a, Object);
        for (; void 0 === s.obj && a.length; )
            (c = `${a[a.length - 1]}.${c}`),
                (s = W(l, (a = a.slice(0, a.length - 1)), Object)),
                s?.obj && void 0 !== s.obj[`${s.k}.${c}`] && (s.obj = void 0);
        s.obj[`${s.k}.${c}`] = d;
    },
    p = (l, t) => {
        let { obj: d, k: i } = W(l, t);
        if (d && Object.prototype.hasOwnProperty.call(d, i)) return d[i];
    },
    N = (l, t, d) => {
        for (let i in t)
            "__proto__" !== i &&
                "constructor" !== i &&
                (i in l
                    ? Z(l[i]) || l[i] instanceof String || Z(t[i]) || t[i] instanceof String
                        ? d && (l[i] = t[i])
                        : N(l[i], t[i], d)
                    : (l[i] = t[i]));
        return l;
    },
    M = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" },
    X = (l) => (Z(l) ? l.replace(/[&<>"'\/]/g, (l) => M[l]) : l),
    r = class {
        constructor(l) {
            (this.capacity = l), (this.regExpMap = new Map()), (this.regExpQueue = []);
        }
        getRegExp(l) {
            let t = this.regExpMap.get(l);
            if (void 0 !== t) return t;
            let d = new RegExp(l);
            return (
                this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
                this.regExpMap.set(l, d),
                this.regExpQueue.push(l),
                d
            );
        }
    },
    y = [" ", ",", "?", "!", ";"],
    Y = new r(20),
    T = (l, t, d = ".") => {
        if (!l) return;
        if (l[t]) {
            if (!Object.prototype.hasOwnProperty.call(l, t)) return;
            return l[t];
        }
        let i = t.split(d),
            e = l;
        for (let l = 0; l < i.length; ) {
            let t;
            if (!e || "object" != typeof e) return;
            let c = "";
            for (let a = l; a < i.length; ++a)
                if ((a !== l && (c += d), (c += i[a]), void 0 !== (t = e[c]))) {
                    if (["string", "number", "boolean"].indexOf(typeof t) > -1 && a < i.length - 1) continue;
                    l += a - l + 1;
                    break;
                }
            e = t;
        }
        return e;
    },
    V = (l) => l?.replace("_", "-"),
    L = {
        type: "logger",
        log(l) {
            this.output("log", l);
        },
        warn(l) {
            this.output("warn", l);
        },
        error(l) {
            this.output("error", l);
        },
        output(l, t) {
            console?.[l]?.apply?.(console, t);
        },
    },
    I = new (class l {
        constructor(l, t = {}) {
            this.init(l, t);
        }
        init(l, t = {}) {
            (this.prefix = t.prefix || "i18next:"), (this.logger = l || L), (this.options = t), (this.debug = t.debug);
        }
        log(...l) {
            return this.forward(l, "log", "", !0);
        }
        warn(...l) {
            return this.forward(l, "warn", "", !0);
        }
        error(...l) {
            return this.forward(l, "error", "");
        }
        deprecate(...l) {
            return this.forward(l, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(l, t, d, i) {
            return i && !this.debug ? null : (Z(l[0]) && (l[0] = `${d}${this.prefix} ${l[0]}`), this.logger[t](l));
        }
        create(t) {
            return new l(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
        }
        clone(t) {
            return ((t = t || this.options).prefix = t.prefix || this.prefix), new l(this.logger, t);
        }
    })(),
    z = class {
        constructor() {
            this.observers = {};
        }
        on(l, t) {
            return (
                l.split(" ").forEach((l) => {
                    this.observers[l] || (this.observers[l] = new Map());
                    let d = this.observers[l].get(t) || 0;
                    this.observers[l].set(t, d + 1);
                }),
                this
            );
        }
        off(l, t) {
            if (this.observers[l]) {
                if (!t) return void delete this.observers[l];
                this.observers[l].delete(t);
            }
        }
        emit(l, ...t) {
            this.observers[l] &&
                Array.from(this.observers[l].entries()).forEach(([l, d]) => {
                    for (let i = 0; i < d; i++) l(...t);
                }),
                this.observers["*"] &&
                    Array.from(this.observers["*"].entries()).forEach(([d, i]) => {
                        for (let e = 0; e < i; e++) d.apply(d, [l, ...t]);
                    });
        }
    },
    w = class extends z {
        constructor(l, t = { ns: ["translation"], defaultNS: "translation" }) {
            super(),
                (this.data = l || {}),
                (this.options = t),
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(l) {
            0 > this.options.ns.indexOf(l) && this.options.ns.push(l);
        }
        removeNamespaces(l) {
            let t = this.options.ns.indexOf(l);
            t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(l, t, d, i = {}) {
            let e,
                c = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                a = void 0 !== i.ignoreJSONStructure ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
            l.indexOf(".") > -1
                ? (e = l.split("."))
                : ((e = [l, t]),
                  d && (Array.isArray(d) ? e.push(...d) : Z(d) && c ? e.push(...d.split(c)) : e.push(d)));
            let s = p(this.data, e);
            return (!s && !t && !d && l.indexOf(".") > -1 && ((l = e[0]), (t = e[1]), (d = e.slice(2).join("."))),
            !s && a && Z(d))
                ? T(this.data?.[l]?.[t], d, c)
                : s;
        }
        addResource(l, t, d, i, e = { silent: !1 }) {
            let c = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                a = [l, t];
            d && (a = a.concat(c ? d.split(c) : d)),
                l.indexOf(".") > -1 && ((a = l.split(".")), (i = t), (t = a[1])),
                this.addNamespaces(t),
                G(this.data, a, i),
                e.silent || this.emit("added", l, t, d, i);
        }
        addResources(l, t, d, i = { silent: !1 }) {
            for (let i in d) (Z(d[i]) || Array.isArray(d[i])) && this.addResource(l, t, i, d[i], { silent: !0 });
            i.silent || this.emit("added", l, t, d);
        }
        addResourceBundle(l, t, d, i, e, c = { silent: !1, skipCopy: !1 }) {
            let a = [l, t];
            l.indexOf(".") > -1 && ((a = l.split(".")), (i = d), (d = t), (t = a[1])), this.addNamespaces(t);
            let s = p(this.data, a) || {};
            c.skipCopy || (d = JSON.parse(JSON.stringify(d))),
                i ? N(s, d, e) : (s = { ...s, ...d }),
                G(this.data, a, s),
                c.silent || this.emit("added", l, t, d);
        }
        removeResourceBundle(l, t) {
            this.hasResourceBundle(l, t) && delete this.data[l][t],
                this.removeNamespaces(t),
                this.emit("removed", l, t);
        }
        hasResourceBundle(l, t) {
            return void 0 !== this.getResource(l, t);
        }
        getResourceBundle(l, t) {
            return t || (t = this.options.defaultNS), this.getResource(l, t);
        }
        getDataByLanguage(l) {
            return this.data[l];
        }
        hasLanguageSomeTranslations(l) {
            let t = this.getDataByLanguage(l);
            return !!((t && Object.keys(t)) || []).find((l) => t[l] && Object.keys(t[l]).length > 0);
        }
        toJSON() {
            return this.data;
        }
    },
    R = {
        processors: {},
        addPostProcessor(l) {
            this.processors[l.name] = l;
        },
        handle(l, t, d, i, e) {
            return (
                l.forEach((l) => {
                    t = this.processors[l]?.process(t, d, i, e) ?? t;
                }),
                t
            );
        },
    },
    S = Symbol("i18next/PATH_KEY");
function C(l, t) {
    let d,
        i,
        e,
        { [S]: c } = l(
            ((i = []),
            ((e = Object.create(null)).get = (l, t) =>
                (d?.revoke?.(), t === S) ? i : (i.push(t), (d = Proxy.revocable(l, e)).proxy)),
            Proxy.revocable(Object.create(null), e).proxy),
        );
    return c.join(t?.keySeparator ?? ".");
}
var x = {},
    g = (l) => !Z(l) && "boolean" != typeof l && "number" != typeof l,
    D = class l extends z {
        constructor(l, t = {}) {
            super(),
                ((l, t, d) => {
                    l.forEach((l) => {
                        t[l] && (d[l] = t[l]);
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
                    l,
                    this,
                ),
                (this.options = t),
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                (this.logger = I.create("translator"));
        }
        changeLanguage(l) {
            l && (this.language = l);
        }
        exists(l, t = { interpolation: {} }) {
            let d = { ...t };
            if (null == l) return !1;
            let i = this.resolve(l, d);
            if (i?.res === void 0) return !1;
            let e = g(i.res);
            return !1 !== d.returnObjects || !e;
        }
        extractFromKey(l, t) {
            let d = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
            void 0 === d && (d = ":");
            let i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                e = t.ns || this.options.defaultNS || [],
                c = d && l.indexOf(d) > -1,
                a =
                    !this.options.userDefinedKeySeparator &&
                    !t.keySeparator &&
                    !this.options.userDefinedNsSeparator &&
                    !t.nsSeparator &&
                    !((l, t, d) => {
                        (t = t || ""), (d = d || "");
                        let i = y.filter((l) => 0 > t.indexOf(l) && 0 > d.indexOf(l));
                        if (0 === i.length) return !0;
                        let e = Y.getRegExp(`(${i.map((l) => ("?" === l ? "\\?" : l)).join("|")})`),
                            c = !e.test(l);
                        if (!c) {
                            let t = l.indexOf(d);
                            t > 0 && !e.test(l.substring(0, t)) && (c = !0);
                        }
                        return c;
                    })(l, d, i);
            if (c && !a) {
                let t = l.match(this.interpolator.nestingRegexp);
                if (t && t.length > 0) return { key: l, namespaces: Z(e) ? [e] : e };
                let c = l.split(d);
                (d !== i || (d === i && this.options.ns.indexOf(c[0]) > -1)) && (e = c.shift()), (l = c.join(i));
            }
            return { key: l, namespaces: Z(e) ? [e] : e };
        }
        translate(t, d, i) {
            let e = "object" == typeof d ? { ...d } : d;
            if (
                ("object" != typeof e &&
                    this.options.overloadTranslationOptionHandler &&
                    (e = this.options.overloadTranslationOptionHandler(arguments)),
                "object" == typeof e && (e = { ...e }),
                e || (e = {}),
                null == t)
            )
                return "";
            "function" == typeof t && (t = C(t, { ...this.options, ...e })), Array.isArray(t) || (t = [String(t)]);
            let c = void 0 !== e.returnDetails ? e.returnDetails : this.options.returnDetails,
                a = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                { key: s, namespaces: n } = this.extractFromKey(t[t.length - 1], e),
                b = n[n.length - 1],
                m = void 0 !== e.nsSeparator ? e.nsSeparator : this.options.nsSeparator;
            void 0 === m && (m = ":");
            let o = e.lng || this.language,
                u = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if (o?.toLowerCase() === "cimode")
                return u
                    ? c
                        ? {
                              res: `${b}${m}${s}`,
                              usedKey: s,
                              exactUsedKey: s,
                              usedLng: o,
                              usedNS: b,
                              usedParams: this.getUsedParamsDetails(e),
                          }
                        : `${b}${m}${s}`
                    : c
                      ? {
                            res: s,
                            usedKey: s,
                            exactUsedKey: s,
                            usedLng: o,
                            usedNS: b,
                            usedParams: this.getUsedParamsDetails(e),
                        }
                      : s;
            let h = this.resolve(t, e),
                W = h?.res,
                G = h?.usedKey || s,
                p = h?.exactUsedKey || s,
                N = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays,
                M = !this.i18nFormat || this.i18nFormat.handleAsObject,
                X = void 0 !== e.count && !Z(e.count),
                r = l.hasDefaultValue(e),
                y = X ? this.pluralResolver.getSuffix(o, e.count, e) : "",
                Y = e.ordinal && X ? this.pluralResolver.getSuffix(o, e.count, { ordinal: !1 }) : "",
                T = X && !e.ordinal && 0 === e.count,
                V =
                    (T && e[`defaultValue${this.options.pluralSeparator}zero`]) ||
                    e[`defaultValue${y}`] ||
                    e[`defaultValue${Y}`] ||
                    e.defaultValue,
                L = W;
            M && !W && r && (L = V);
            let I = g(L),
                z = Object.prototype.toString.apply(L);
            if (
                M &&
                L &&
                I &&
                0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(z) &&
                !(Z(N) && Array.isArray(L))
            ) {
                if (!e.returnObjects && !this.options.returnObjects) {
                    this.options.returnedObjectHandler ||
                        this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                    let l = this.options.returnedObjectHandler
                        ? this.options.returnedObjectHandler(G, L, { ...e, ns: n })
                        : `key '${s} (${this.language})' returned an object instead of string.`;
                    return c ? ((h.res = l), (h.usedParams = this.getUsedParamsDetails(e)), h) : l;
                }
                if (a) {
                    let l = Array.isArray(L),
                        t = l ? [] : {},
                        d = l ? p : G;
                    for (let l in L)
                        if (Object.prototype.hasOwnProperty.call(L, l)) {
                            let i = `${d}${a}${l}`;
                            r && !W
                                ? (t[l] = this.translate(i, {
                                      ...e,
                                      defaultValue: g(V) ? V[l] : void 0,
                                      joinArrays: !1,
                                      ns: n,
                                  }))
                                : (t[l] = this.translate(i, { ...e, joinArrays: !1, ns: n })),
                                t[l] === i && (t[l] = L[l]);
                        }
                    W = t;
                }
            } else if (M && Z(N) && Array.isArray(W)) (W = W.join(N)) && (W = this.extendTranslation(W, t, e, i));
            else {
                let l = !1,
                    d = !1;
                !this.isValidLookup(W) && r && ((l = !0), (W = V)), this.isValidLookup(W) || ((d = !0), (W = s));
                let c =
                        (e.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && d
                            ? void 0
                            : W,
                    n = r && V !== W && this.options.updateMissing;
                if (d || l || n) {
                    if ((this.logger.log(n ? "updateKey" : "missingKey", o, b, s, n ? V : W), a)) {
                        let l = this.resolve(s, { ...e, keySeparator: !1 });
                        l &&
                            l.res &&
                            this.logger.warn(
                                "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
                            );
                    }
                    let l = [],
                        t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                    if ("fallback" === this.options.saveMissingTo && t && t[0])
                        for (let d = 0; d < t.length; d++) l.push(t[d]);
                    else
                        "all" === this.options.saveMissingTo
                            ? (l = this.languageUtils.toResolveHierarchy(e.lng || this.language))
                            : l.push(e.lng || this.language);
                    let d = (l, t, d) => {
                        let i = r && d !== W ? d : c;
                        this.options.missingKeyHandler
                            ? this.options.missingKeyHandler(l, b, t, i, n, e)
                            : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(l, b, t, i, n, e),
                            this.emit("missingKey", l, b, t, W);
                    };
                    this.options.saveMissing &&
                        (this.options.saveMissingPlurals && X
                            ? l.forEach((l) => {
                                  let t = this.pluralResolver.getSuffixes(l, e);
                                  T &&
                                      e[`defaultValue${this.options.pluralSeparator}zero`] &&
                                      0 > t.indexOf(`${this.options.pluralSeparator}zero`) &&
                                      t.push(`${this.options.pluralSeparator}zero`),
                                      t.forEach((t) => {
                                          d([l], s + t, e[`defaultValue${t}`] || V);
                                      });
                              })
                            : d(l, s, V));
                }
                (W = this.extendTranslation(W, t, e, h, i)),
                    d && W === s && this.options.appendNamespaceToMissingKey && (W = `${b}${m}${s}`),
                    (d || l) &&
                        this.options.parseMissingKeyHandler &&
                        (W = this.options.parseMissingKeyHandler(
                            this.options.appendNamespaceToMissingKey ? `${b}${m}${s}` : s,
                            l ? W : void 0,
                            e,
                        ));
            }
            return c ? ((h.res = W), (h.usedParams = this.getUsedParamsDetails(e)), h) : W;
        }
        extendTranslation(l, t, d, i, e) {
            if (this.i18nFormat?.parse)
                l = this.i18nFormat.parse(
                    l,
                    { ...this.options.interpolation.defaultVariables, ...d },
                    d.lng || this.language || i.usedLng,
                    i.usedNS,
                    i.usedKey,
                    { resolved: i },
                );
            else if (!d.skipInterpolation) {
                let c;
                d.interpolation &&
                    this.interpolator.init({
                        ...d,
                        interpolation: { ...this.options.interpolation, ...d.interpolation },
                    });
                let a =
                    Z(l) &&
                    (d?.interpolation?.skipOnVariables !== void 0
                        ? d.interpolation.skipOnVariables
                        : this.options.interpolation.skipOnVariables);
                if (a) {
                    let t = l.match(this.interpolator.nestingRegexp);
                    c = t && t.length;
                }
                let s = d.replace && !Z(d.replace) ? d.replace : d;
                if (
                    (this.options.interpolation.defaultVariables &&
                        (s = { ...this.options.interpolation.defaultVariables, ...s }),
                    (l = this.interpolator.interpolate(l, s, d.lng || this.language || i.usedLng, d)),
                    a)
                ) {
                    let t = l.match(this.interpolator.nestingRegexp);
                    c < (t && t.length) && (d.nest = !1);
                }
                !d.lng && i && i.res && (d.lng = this.language || i.usedLng),
                    !1 !== d.nest &&
                        (l = this.interpolator.nest(
                            l,
                            (...l) =>
                                e?.[0] !== l[0] || d.context
                                    ? this.translate(...l, t)
                                    : (this.logger.warn(
                                          `It seems you are nesting recursively key: ${l[0]} in key: ${t[0]}`,
                                      ),
                                      null),
                            d,
                        )),
                    d.interpolation && this.interpolator.reset();
            }
            let c = d.postProcess || this.options.postProcess,
                a = Z(c) ? [c] : c;
            return (
                null != l &&
                    a?.length &&
                    !1 !== d.applyPostProcessor &&
                    (l = R.handle(
                        a,
                        l,
                        t,
                        this.options && this.options.postProcessPassResolved
                            ? { i18nResolved: { ...i, usedParams: this.getUsedParamsDetails(d) }, ...d }
                            : d,
                        this,
                    )),
                l
            );
        }
        resolve(l, t = {}) {
            let d, i, e, c, a;
            return (
                Z(l) && (l = [l]),
                l.forEach((l) => {
                    if (this.isValidLookup(d)) return;
                    let s = this.extractFromKey(l, t),
                        n = s.key;
                    i = n;
                    let b = s.namespaces;
                    this.options.fallbackNS && (b = b.concat(this.options.fallbackNS));
                    let m = void 0 !== t.count && !Z(t.count),
                        o = m && !t.ordinal && 0 === t.count,
                        u = void 0 !== t.context && (Z(t.context) || "number" == typeof t.context) && "" !== t.context,
                        h = t.lngs
                            ? t.lngs
                            : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
                    b.forEach((l) => {
                        this.isValidLookup(d) ||
                            ((a = l),
                            !x[`${h[0]}-${l}`] &&
                                this.utils?.hasLoadedNamespace &&
                                !this.utils?.hasLoadedNamespace(a) &&
                                ((x[`${h[0]}-${l}`] = !0),
                                this.logger.warn(
                                    `key "${i}" for languages "${h.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,
                                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                                )),
                            h.forEach((i) => {
                                let a;
                                if (this.isValidLookup(d)) return;
                                c = i;
                                let s = [n];
                                if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(s, n, i, l, t);
                                else {
                                    let l;
                                    m && (l = this.pluralResolver.getSuffix(i, t.count, t));
                                    let d = `${this.options.pluralSeparator}zero`,
                                        e = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                    if (
                                        (m &&
                                            (t.ordinal &&
                                                0 === l.indexOf(e) &&
                                                s.push(n + l.replace(e, this.options.pluralSeparator)),
                                            s.push(n + l),
                                            o && s.push(n + d)),
                                        u)
                                    ) {
                                        let i = `${n}${this.options.contextSeparator || "_"}${t.context}`;
                                        s.push(i),
                                            m &&
                                                (t.ordinal &&
                                                    0 === l.indexOf(e) &&
                                                    s.push(i + l.replace(e, this.options.pluralSeparator)),
                                                s.push(i + l),
                                                o && s.push(i + d));
                                    }
                                }
                                for (; (a = s.pop()); )
                                    this.isValidLookup(d) || ((e = a), (d = this.getResource(i, l, a, t)));
                            }));
                    });
                }),
                { res: d, usedKey: i, exactUsedKey: e, usedLng: c, usedNS: a }
            );
        }
        isValidLookup(l) {
            return (
                void 0 !== l &&
                !(!this.options.returnNull && null === l) &&
                !(!this.options.returnEmptyString && "" === l)
            );
        }
        getResource(l, t, d, i = {}) {
            return this.i18nFormat?.getResource
                ? this.i18nFormat.getResource(l, t, d, i)
                : this.resourceStore.getResource(l, t, d, i);
        }
        getUsedParamsDetails(l = {}) {
            let t = l.replace && !Z(l.replace),
                d = t ? l.replace : l;
            if (
                (t && void 0 !== l.count && (d.count = l.count),
                this.options.interpolation.defaultVariables &&
                    (d = { ...this.options.interpolation.defaultVariables, ...d }),
                !t)
            )
                for (let l of ((d = { ...d }),
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
                    delete d[l];
            return d;
        }
        static hasDefaultValue(l) {
            for (let t in l)
                if (
                    Object.prototype.hasOwnProperty.call(l, t) &&
                    "defaultValue" === t.substring(0, 12) &&
                    void 0 !== l[t]
                )
                    return !0;
            return !1;
        }
    },
    j = class {
        constructor(l) {
            (this.options = l),
                (this.supportedLngs = this.options.supportedLngs || !1),
                (this.logger = I.create("languageUtils"));
        }
        getScriptPartFromCode(l) {
            if (!(l = V(l)) || 0 > l.indexOf("-")) return null;
            let t = l.split("-");
            return 2 === t.length || (t.pop(), "x" === t[t.length - 1].toLowerCase())
                ? null
                : this.formatLanguageCode(t.join("-"));
        }
        getLanguagePartFromCode(l) {
            if (!(l = V(l)) || 0 > l.indexOf("-")) return l;
            let t = l.split("-");
            return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(l) {
            if (Z(l) && l.indexOf("-") > -1) {
                let t;
                try {
                    t = Intl.getCanonicalLocales(l)[0];
                } catch (l) {}
                return (t && this.options.lowerCaseLng && (t = t.toLowerCase()), t)
                    ? t
                    : this.options.lowerCaseLng
                      ? l.toLowerCase()
                      : l;
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? l.toLowerCase() : l;
        }
        isSupportedCode(l) {
            return (
                ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) &&
                    (l = this.getLanguagePartFromCode(l)),
                !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(l) > -1
            );
        }
        getBestMatchFromCodes(l) {
            let t;
            return l
                ? (l.forEach((l) => {
                      if (t) return;
                      let d = this.formatLanguageCode(l);
                      (!this.options.supportedLngs || this.isSupportedCode(d)) && (t = d);
                  }),
                  !t &&
                      this.options.supportedLngs &&
                      l.forEach((l) => {
                          if (t) return;
                          let d = this.getScriptPartFromCode(l);
                          if (this.isSupportedCode(d)) return (t = d);
                          let i = this.getLanguagePartFromCode(l);
                          if (this.isSupportedCode(i)) return (t = i);
                          t = this.options.supportedLngs.find((l) => {
                              if (
                                  l === i ||
                                  (!(0 > l.indexOf("-") && 0 > i.indexOf("-")) &&
                                      ((l.indexOf("-") > 0 &&
                                          0 > i.indexOf("-") &&
                                          l.substring(0, l.indexOf("-")) === i) ||
                                          (0 === l.indexOf(i) && i.length > 1)))
                              )
                                  return l;
                          });
                      }),
                  t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                  t)
                : null;
        }
        getFallbackCodes(l, t) {
            if (!l) return [];
            if (("function" == typeof l && (l = l(t)), Z(l) && (l = [l]), Array.isArray(l))) return l;
            if (!t) return l.default || [];
            let d = l[t];
            return (
                d || (d = l[this.getScriptPartFromCode(t)]),
                d || (d = l[this.formatLanguageCode(t)]),
                d || (d = l[this.getLanguagePartFromCode(t)]),
                d || (d = l.default),
                d || []
            );
        }
        toResolveHierarchy(l, t) {
            let d = this.getFallbackCodes((!1 === t ? [] : t) || this.options.fallbackLng || [], l),
                i = [],
                e = (l) => {
                    l &&
                        (this.isSupportedCode(l)
                            ? i.push(l)
                            : this.logger.warn(`rejecting language code not found in supportedLngs: ${l}`));
                };
            return (
                Z(l) && (l.indexOf("-") > -1 || l.indexOf("_") > -1)
                    ? ("languageOnly" !== this.options.load && e(this.formatLanguageCode(l)),
                      "languageOnly" !== this.options.load &&
                          "currentOnly" !== this.options.load &&
                          e(this.getScriptPartFromCode(l)),
                      "currentOnly" !== this.options.load && e(this.getLanguagePartFromCode(l)))
                    : Z(l) && e(this.formatLanguageCode(l)),
                d.forEach((l) => {
                    0 > i.indexOf(l) && e(this.formatLanguageCode(l));
                }),
                i
            );
        }
    },
    U = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
    F = { select: (l) => (1 === l ? "one" : "other"), resolvedOptions: () => ({ pluralCategories: ["one", "other"] }) },
    O = class {
        constructor(l, t = {}) {
            (this.languageUtils = l),
                (this.options = t),
                (this.logger = I.create("pluralResolver")),
                (this.pluralRulesCache = {});
        }
        addRule(l, t) {
            this.rules[l] = t;
        }
        clearCache() {
            this.pluralRulesCache = {};
        }
        getRule(l, t = {}) {
            let d,
                i = V("dev" === l ? "en" : l),
                e = t.ordinal ? "ordinal" : "cardinal",
                c = JSON.stringify({ cleanedCode: i, type: e });
            if (c in this.pluralRulesCache) return this.pluralRulesCache[c];
            try {
                d = new Intl.PluralRules(i, { type: e });
            } catch (e) {
                if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), F;
                if (!l.match(/-|_/)) return F;
                let i = this.languageUtils.getLanguagePartFromCode(l);
                d = this.getRule(i, t);
            }
            return (this.pluralRulesCache[c] = d), d;
        }
        needsPlural(l, t = {}) {
            let d = this.getRule(l, t);
            return d || (d = this.getRule("dev", t)), d?.resolvedOptions().pluralCategories.length > 1;
        }
        getPluralFormsOfKey(l, t, d = {}) {
            return this.getSuffixes(l, d).map((l) => `${t}${l}`);
        }
        getSuffixes(l, t = {}) {
            let d = this.getRule(l, t);
            return (d || (d = this.getRule("dev", t)), d)
                ? d
                      .resolvedOptions()
                      .pluralCategories.sort((l, t) => U[l] - U[t])
                      .map((l) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${l}`)
                : [];
        }
        getSuffix(l, t, d = {}) {
            let i = this.getRule(l, d);
            return i
                ? `${this.options.prepend}${d.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}`
                : (this.logger.warn(`no plural rule found for: ${l}`), this.getSuffix("dev", t, d));
        }
    },
    J = (l, t, d, i = ".", e = !0) => {
        let c,
            a = void 0 !== (c = p(l, d)) ? c : p(t, d);
        return !a && e && Z(d) && void 0 === (a = T(l, d, i)) && (a = T(t, d, i)), a;
    },
    k = class {
        constructor(l = {}) {
            (this.logger = I.create("interpolator")),
                (this.options = l),
                (this.format = l?.interpolation?.format || ((l) => l)),
                this.init(l);
        }
        init(l = {}) {
            l.interpolation || (l.interpolation = { escapeValue: !0 });
            let {
                escape: t,
                escapeValue: d,
                useRawValueToEscape: i,
                prefix: e,
                prefixEscaped: c,
                suffix: a,
                suffixEscaped: s,
                formatSeparator: n,
                unescapeSuffix: Z,
                unescapePrefix: b,
                nestingPrefix: m,
                nestingPrefixEscaped: o,
                nestingSuffix: u,
                nestingSuffixEscaped: h,
                nestingOptionsSeparator: W,
                maxReplaces: G,
                alwaysFormat: p,
            } = l.interpolation;
            (this.escape = void 0 !== t ? t : X),
                (this.escapeValue = void 0 === d || d),
                (this.useRawValueToEscape = void 0 !== i && i),
                (this.prefix = e ? e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : c || "{{"),
                (this.suffix = a ? a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : s || "}}"),
                (this.formatSeparator = n || ","),
                (this.unescapePrefix = Z ? "" : b || "-"),
                (this.unescapeSuffix = this.unescapePrefix ? "" : Z || ""),
                (this.nestingPrefix = m
                    ? m.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    : o || "$t(".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")),
                (this.nestingSuffix = u
                    ? u.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    : h || ")".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")),
                (this.nestingOptionsSeparator = W || ","),
                (this.maxReplaces = G || 1e3),
                (this.alwaysFormat = void 0 !== p && p),
                this.resetRegExp();
        }
        reset() {
            this.options && this.init(this.options);
        }
        resetRegExp() {
            let l = (l, t) => (l?.source === t ? ((l.lastIndex = 0), l) : RegExp(t, "g"));
            (this.regexp = l(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
                (this.regexpUnescape = l(
                    this.regexpUnescape,
                    `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
                )),
                (this.nestingRegexp = l(
                    this.nestingRegexp,
                    `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`,
                ));
        }
        interpolate(l, t, d, i) {
            let e,
                c,
                a,
                s = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {},
                n = (l) => {
                    if (0 > l.indexOf(this.formatSeparator)) {
                        let e = J(t, s, l, this.options.keySeparator, this.options.ignoreJSONStructure);
                        return this.alwaysFormat ? this.format(e, void 0, d, { ...i, ...t, interpolationkey: l }) : e;
                    }
                    let e = l.split(this.formatSeparator),
                        c = e.shift().trim(),
                        a = e.join(this.formatSeparator).trim();
                    return this.format(J(t, s, c, this.options.keySeparator, this.options.ignoreJSONStructure), a, d, {
                        ...i,
                        ...t,
                        interpolationkey: c,
                    });
                };
            this.resetRegExp();
            let b = i?.missingInterpolationHandler || this.options.missingInterpolationHandler,
                o =
                    i?.interpolation?.skipOnVariables !== void 0
                        ? i.interpolation.skipOnVariables
                        : this.options.interpolation.skipOnVariables;
            return (
                [
                    { regex: this.regexpUnescape, safeValue: (l) => l.replace(/\$/g, "$$$$") },
                    {
                        regex: this.regexp,
                        safeValue: (l) =>
                            this.escapeValue ? this.escape(l).replace(/\$/g, "$$$$") : l.replace(/\$/g, "$$$$"),
                    },
                ].forEach((t) => {
                    for (a = 0; (e = t.regex.exec(l)); ) {
                        let d = e[1].trim();
                        if (void 0 === (c = n(d)))
                            if ("function" == typeof b) {
                                let t = b(l, e, i);
                                c = Z(t) ? t : "";
                            } else if (i && Object.prototype.hasOwnProperty.call(i, d)) c = "";
                            else if (o) {
                                c = e[0];
                                continue;
                            } else this.logger.warn(`missed to pass in variable ${d} for interpolating ${l}`), (c = "");
                        else Z(c) || this.useRawValueToEscape || (c = m(c));
                        let s = t.safeValue(c);
                        if (
                            ((l = l.replace(e[0], s)),
                            o
                                ? ((t.regex.lastIndex += c.length), (t.regex.lastIndex -= e[0].length))
                                : (t.regex.lastIndex = 0),
                            ++a >= this.maxReplaces)
                        )
                            break;
                    }
                }),
                l
            );
        }
        nest(l, t, d = {}) {
            let i,
                e,
                c,
                a = (l, t) => {
                    let d = this.nestingOptionsSeparator;
                    if (0 > l.indexOf(d)) return l;
                    let i = l.split(RegExp(`${d}[ ]*{`)),
                        e = `{${i[1]}`;
                    l = i[0];
                    let a = (e = this.interpolate(e, c)).match(/'/g),
                        s = e.match(/"/g);
                    (((a?.length ?? 0) % 2 != 0 || s) && s.length % 2 == 0) || (e = e.replace(/'/g, '"'));
                    try {
                        (c = JSON.parse(e)), t && (c = { ...t, ...c });
                    } catch (t) {
                        return (
                            this.logger.warn(`failed parsing options string in nesting for key ${l}`, t), `${l}${d}${e}`
                        );
                    }
                    return c.defaultValue && c.defaultValue.indexOf(this.prefix) > -1 && delete c.defaultValue, l;
                };
            for (; (i = this.nestingRegexp.exec(l)); ) {
                let s = [];
                ((c = (c = { ...d }).replace && !Z(c.replace) ? c.replace : c).applyPostProcessor = !1),
                    delete c.defaultValue;
                let n = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
                if (
                    (-1 !== n &&
                        ((s = i[1]
                            .slice(n)
                            .split(this.formatSeparator)
                            .map((l) => l.trim())
                            .filter(Boolean)),
                        (i[1] = i[1].slice(0, n))),
                    (e = t(a.call(this, i[1].trim(), c), c)) && i[0] === l && !Z(e))
                )
                    return e;
                Z(e) || (e = m(e)),
                    e || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${l}`), (e = "")),
                    s.length &&
                        (e = s.reduce(
                            (l, t) => this.format(l, t, d.lng, { ...d, interpolationkey: i[1].trim() }),
                            e.trim(),
                        )),
                    (l = l.replace(i[0], e)),
                    (this.regexp.lastIndex = 0);
            }
            return l;
        }
    },
    E = (l) => {
        let t = {};
        return (d, i, e) => {
            let c = e;
            e &&
                e.interpolationkey &&
                e.formatParams &&
                e.formatParams[e.interpolationkey] &&
                e[e.interpolationkey] &&
                (c = { ...c, [e.interpolationkey]: void 0 });
            let a = i + JSON.stringify(c),
                s = t[a];
            return s || ((s = l(V(i), e)), (t[a] = s)), s(d);
        };
    },
    v = (l) => (t, d, i) => l(V(d), i)(t),
    K = class {
        constructor(l = {}) {
            (this.logger = I.create("formatter")), (this.options = l), this.init(l);
        }
        init(l, t = { interpolation: {} }) {
            this.formatSeparator = t.interpolation.formatSeparator || ",";
            let d = t.cacheInBuiltFormats ? E : v;
            this.formats = {
                number: d((l, t) => {
                    let d = new Intl.NumberFormat(l, { ...t });
                    return (l) => d.format(l);
                }),
                currency: d((l, t) => {
                    let d = new Intl.NumberFormat(l, { ...t, style: "currency" });
                    return (l) => d.format(l);
                }),
                datetime: d((l, t) => {
                    let d = new Intl.DateTimeFormat(l, { ...t });
                    return (l) => d.format(l);
                }),
                relativetime: d((l, t) => {
                    let d = new Intl.RelativeTimeFormat(l, { ...t });
                    return (l) => d.format(l, t.range || "day");
                }),
                list: d((l, t) => {
                    let d = new Intl.ListFormat(l, { ...t });
                    return (l) => d.format(l);
                }),
            };
        }
        add(l, t) {
            this.formats[l.toLowerCase().trim()] = t;
        }
        addCached(l, t) {
            this.formats[l.toLowerCase().trim()] = E(t);
        }
        format(l, t, d, i = {}) {
            let e = t.split(this.formatSeparator);
            if (e.length > 1 && e[0].indexOf("(") > 1 && 0 > e[0].indexOf(")") && e.find((l) => l.indexOf(")") > -1)) {
                let l = e.findIndex((l) => l.indexOf(")") > -1);
                e[0] = [e[0], ...e.splice(1, l)].join(this.formatSeparator);
            }
            return e.reduce((l, t) => {
                let { formatName: e, formatOptions: c } = ((l) => {
                    let t = l.toLowerCase().trim(),
                        d = {};
                    if (l.indexOf("(") > -1) {
                        let i = l.split("(");
                        t = i[0].toLowerCase().trim();
                        let e = i[1].substring(0, i[1].length - 1);
                        "currency" === t && 0 > e.indexOf(":")
                            ? d.currency || (d.currency = e.trim())
                            : "relativetime" === t && 0 > e.indexOf(":")
                              ? d.range || (d.range = e.trim())
                              : e.split(";").forEach((l) => {
                                    if (l) {
                                        let [t, ...i] = l.split(":"),
                                            e = i
                                                .join(":")
                                                .trim()
                                                .replace(/^'+|'+$/g, ""),
                                            c = t.trim();
                                        d[c] || (d[c] = e),
                                            "false" === e && (d[c] = !1),
                                            "true" === e && (d[c] = !0),
                                            isNaN(e) || (d[c] = parseInt(e, 10));
                                    }
                                });
                    }
                    return { formatName: t, formatOptions: d };
                })(t);
                if (this.formats[e]) {
                    let t = l;
                    try {
                        let a = i?.formatParams?.[i.interpolationkey] || {},
                            s = a.locale || a.lng || i.locale || i.lng || d;
                        t = this.formats[e](l, s, { ...c, ...i, ...a });
                    } catch (l) {
                        this.logger.warn(l);
                    }
                    return t;
                }
                return this.logger.warn(`there was no format function for ${e}`), l;
            }, l);
        }
    },
    H = class extends z {
        constructor(l, t, d, i = {}) {
            super(),
                (this.backend = l),
                (this.store = t),
                (this.services = d),
                (this.languageUtils = d.languageUtils),
                (this.options = i),
                (this.logger = I.create("backendConnector")),
                (this.waitingReads = []),
                (this.maxParallelReads = i.maxParallelReads || 10),
                (this.readingCalls = 0),
                (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
                (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
                (this.state = {}),
                (this.queue = []),
                this.backend?.init?.(d, i.backend, i);
        }
        queueLoad(l, t, d, i) {
            let e = {},
                c = {},
                a = {},
                s = {};
            return (
                l.forEach((l) => {
                    let i = !0;
                    t.forEach((t) => {
                        let a = `${l}|${t}`;
                        !d.reload && this.store.hasResourceBundle(l, t)
                            ? (this.state[a] = 2)
                            : this.state[a] < 0 ||
                              (1 === this.state[a]
                                  ? void 0 === c[a] && (c[a] = !0)
                                  : ((this.state[a] = 1),
                                    (i = !1),
                                    void 0 === c[a] && (c[a] = !0),
                                    void 0 === e[a] && (e[a] = !0),
                                    void 0 === s[t] && (s[t] = !0)));
                    }),
                        i || (a[l] = !0);
                }),
                (Object.keys(e).length || Object.keys(c).length) &&
                    this.queue.push({
                        pending: c,
                        pendingCount: Object.keys(c).length,
                        loaded: {},
                        errors: [],
                        callback: i,
                    }),
                {
                    toLoad: Object.keys(e),
                    pending: Object.keys(c),
                    toLoadLanguages: Object.keys(a),
                    toLoadNamespaces: Object.keys(s),
                }
            );
        }
        loaded(l, t, d) {
            let i = l.split("|"),
                e = i[0],
                c = i[1];
            t && this.emit("failedLoading", e, c, t),
                !t && d && this.store.addResourceBundle(e, c, d, void 0, void 0, { skipCopy: !0 }),
                (this.state[l] = t ? -1 : 2),
                t && d && (this.state[l] = 0);
            let a = {};
            this.queue.forEach((d) => {
                ((l, t, d, i) => {
                    let { obj: e, k: c } = W(l, t, Object);
                    (e[c] = e[c] || []), e[c].push(d);
                })(d.loaded, [e], c),
                    void 0 !== d.pending[l] && (delete d.pending[l], d.pendingCount--),
                    t && d.errors.push(t),
                    0 !== d.pendingCount ||
                        d.done ||
                        (Object.keys(d.loaded).forEach((l) => {
                            a[l] || (a[l] = {});
                            let t = d.loaded[l];
                            t.length &&
                                t.forEach((t) => {
                                    void 0 === a[l][t] && (a[l][t] = !0);
                                });
                        }),
                        (d.done = !0),
                        d.errors.length ? d.callback(d.errors) : d.callback());
            }),
                this.emit("loaded", a),
                (this.queue = this.queue.filter((l) => !l.done));
        }
        read(l, t, d, i = 0, e = this.retryTimeout, c) {
            if (!l.length) return c(null, {});
            if (this.readingCalls >= this.maxParallelReads)
                return void this.waitingReads.push({ lng: l, ns: t, fcName: d, tried: i, wait: e, callback: c });
            this.readingCalls++;
            let a = (a, s) => {
                    if ((this.readingCalls--, this.waitingReads.length > 0)) {
                        let l = this.waitingReads.shift();
                        this.read(l.lng, l.ns, l.fcName, l.tried, l.wait, l.callback);
                    }
                    a && s && i < this.maxRetries
                        ? setTimeout(() => {
                              this.read.call(this, l, t, d, i + 1, 2 * e, c);
                          }, e)
                        : c(a, s);
                },
                s = this.backend[d].bind(this.backend);
            if (2 === s.length) {
                try {
                    let d = s(l, t);
                    d && "function" == typeof d.then ? d.then((l) => a(null, l)).catch(a) : a(null, d);
                } catch (l) {
                    a(l);
                }
                return;
            }
            return s(l, t, a);
        }
        prepareLoading(l, t, d = {}, i) {
            if (!this.backend)
                return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
            Z(l) && (l = this.languageUtils.toResolveHierarchy(l)), Z(t) && (t = [t]);
            let e = this.queueLoad(l, t, d, i);
            if (!e.toLoad.length) return e.pending.length || i(), null;
            e.toLoad.forEach((l) => {
                this.loadOne(l);
            });
        }
        load(l, t, d) {
            this.prepareLoading(l, t, {}, d);
        }
        reload(l, t, d) {
            this.prepareLoading(l, t, { reload: !0 }, d);
        }
        loadOne(l, t = "") {
            let d = l.split("|"),
                i = d[0],
                e = d[1];
            this.read(i, e, "read", void 0, void 0, (d, c) => {
                d && this.logger.warn(`${t}loading namespace ${e} for language ${i} failed`, d),
                    !d && c && this.logger.log(`${t}loaded namespace ${e} for language ${i}`, c),
                    this.loaded(l, d, c);
            });
        }
        saveMissing(l, t, d, i, e, c = {}, a = () => {}) {
            if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t))
                return void this.logger.warn(
                    `did not save key "${d}" as the namespace "${t}" was not yet loaded`,
                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                );
            if (null != d && "" !== d) {
                if (this.backend?.create) {
                    let s = { ...c, isUpdate: e },
                        n = this.backend.create.bind(this.backend);
                    if (n.length < 6)
                        try {
                            let e;
                            (e = 5 === n.length ? n(l, t, d, i, s) : n(l, t, d, i)) && "function" == typeof e.then
                                ? e.then((l) => a(null, l)).catch(a)
                                : a(null, e);
                        } catch (l) {
                            a(l);
                        }
                    else n(l, t, d, i, a, s);
                }
                l && l[0] && this.store.addResource(l[0], t, d, i);
            }
        }
    },
    Q = () => ({
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
        overloadTranslationOptionHandler: (l) => {
            let t = {};
            if (
                ("object" == typeof l[1] && (t = l[1]),
                Z(l[1]) && (t.defaultValue = l[1]),
                Z(l[2]) && (t.tDescription = l[2]),
                "object" == typeof l[2] || "object" == typeof l[3])
            ) {
                let d = l[3] || l[2];
                Object.keys(d).forEach((l) => {
                    t[l] = d[l];
                });
            }
            return t;
        },
        interpolation: {
            escapeValue: !0,
            format: (l) => l,
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
    P = (l) => (
        Z(l.ns) && (l.ns = [l.ns]),
        Z(l.fallbackLng) && (l.fallbackLng = [l.fallbackLng]),
        Z(l.fallbackNS) && (l.fallbackNS = [l.fallbackNS]),
        l.supportedLngs?.indexOf?.("cimode") < 0 && (l.supportedLngs = l.supportedLngs.concat(["cimode"])),
        "boolean" == typeof l.initImmediate && (l.initAsync = l.initImmediate),
        l
    ),
    f = () => {},
    B = class l extends z {
        constructor(l = {}, t) {
            if (
                (super(),
                (this.options = P(l)),
                (this.services = {}),
                (this.logger = I),
                (this.modules = { external: [] }),
                ((l) => {
                    Object.getOwnPropertyNames(Object.getPrototypeOf(l)).forEach((t) => {
                        "function" == typeof l[t] && (l[t] = l[t].bind(l));
                    });
                })(this),
                t && !this.isInitialized && !l.isClone)
            ) {
                if (!this.options.initAsync) return this.init(l, t), this;
                setTimeout(() => {
                    this.init(l, t);
                }, 0);
            }
        }
        init(l = {}, t) {
            (this.isInitializing = !0),
                "function" == typeof l && ((t = l), (l = {})),
                null == l.defaultNS &&
                    l.ns &&
                    (Z(l.ns) ? (l.defaultNS = l.ns) : 0 > l.ns.indexOf("translation") && (l.defaultNS = l.ns[0]));
            let d = Q();
            (this.options = { ...d, ...this.options, ...P(l) }),
                (this.options.interpolation = { ...d.interpolation, ...this.options.interpolation }),
                void 0 !== l.keySeparator && (this.options.userDefinedKeySeparator = l.keySeparator),
                void 0 !== l.nsSeparator && (this.options.userDefinedNsSeparator = l.nsSeparator);
            let i = (l) => (l ? ("function" == typeof l ? new l() : l) : null);
            if (!this.options.isClone) {
                let l;
                this.modules.logger ? I.init(i(this.modules.logger), this.options) : I.init(null, this.options),
                    (l = this.modules.formatter ? this.modules.formatter : K);
                let t = new j(this.options);
                this.store = new w(this.options.resources, this.options);
                let e = this.services;
                (e.logger = I),
                    (e.resourceStore = this.store),
                    (e.languageUtils = t),
                    (e.pluralResolver = new O(t, {
                        prepend: this.options.pluralSeparator,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    this.options.interpolation.format &&
                        this.options.interpolation.format !== d.interpolation.format &&
                        this.logger.deprecate(
                            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting",
                        ),
                    l &&
                        (!this.options.interpolation.format ||
                            this.options.interpolation.format === d.interpolation.format) &&
                        ((e.formatter = i(l)),
                        e.formatter.init && e.formatter.init(e, this.options),
                        (this.options.interpolation.format = e.formatter.format.bind(e.formatter))),
                    (e.interpolator = new k(this.options)),
                    (e.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
                    (e.backendConnector = new H(i(this.modules.backend), e.resourceStore, e, this.options)),
                    e.backendConnector.on("*", (l, ...t) => {
                        this.emit(l, ...t);
                    }),
                    this.modules.languageDetector &&
                        ((e.languageDetector = i(this.modules.languageDetector)),
                        e.languageDetector.init && e.languageDetector.init(e, this.options.detection, this.options)),
                    this.modules.i18nFormat &&
                        ((e.i18nFormat = i(this.modules.i18nFormat)), e.i18nFormat.init && e.i18nFormat.init(this)),
                    (this.translator = new D(this.services, this.options)),
                    this.translator.on("*", (l, ...t) => {
                        this.emit(l, ...t);
                    }),
                    this.modules.external.forEach((l) => {
                        l.init && l.init(this);
                    });
            }
            if (
                ((this.format = this.options.interpolation.format),
                t || (t = f),
                this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
            ) {
                let l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                l.length > 0 && "dev" !== l[0] && (this.options.lng = l[0]);
            }
            this.services.languageDetector ||
                this.options.lng ||
                this.logger.warn("init: no languageDetector is used and no lng is defined"),
                ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((l) => {
                    this[l] = (...t) => this.store[l](...t);
                }),
                ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((l) => {
                    this[l] = (...t) => (this.store[l](...t), this);
                });
            let e = b(),
                c = () => {
                    let l = (l, d) => {
                        (this.isInitializing = !1),
                            this.isInitialized &&
                                !this.initializedStoreOnce &&
                                this.logger.warn(
                                    "init: i18next is already initialized. You should call init just once!",
                                ),
                            (this.isInitialized = !0),
                            this.options.isClone || this.logger.log("initialized", this.options),
                            this.emit("initialized", this.options),
                            e.resolve(d),
                            t(l, d);
                    };
                    if (this.languages && !this.isInitialized) return l(null, this.t.bind(this));
                    this.changeLanguage(this.options.lng, l);
                };
            return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), e;
        }
        loadResources(l, t = f) {
            let d = t,
                i = Z(l) ? l : this.language;
            if (("function" == typeof l && (d = l), !this.options.resources || this.options.partialBundledLanguages)) {
                if (i?.toLowerCase() === "cimode" && (!this.options.preload || 0 === this.options.preload.length))
                    return d();
                let l = [],
                    t = (t) => {
                        t &&
                            "cimode" !== t &&
                            this.services.languageUtils.toResolveHierarchy(t).forEach((t) => {
                                "cimode" !== t && 0 > l.indexOf(t) && l.push(t);
                            });
                    };
                i ? t(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => t(l)),
                    this.options.preload?.forEach?.((l) => t(l)),
                    this.services.backendConnector.load(l, this.options.ns, (l) => {
                        l || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), d(l);
                    });
            } else d(null);
        }
        reloadResources(l, t, d) {
            let i = b();
            return (
                "function" == typeof l && ((d = l), (l = void 0)),
                "function" == typeof t && ((d = t), (t = void 0)),
                l || (l = this.languages),
                t || (t = this.options.ns),
                d || (d = f),
                this.services.backendConnector.reload(l, t, (l) => {
                    i.resolve(), d(l);
                }),
                i
            );
        }
        use(l) {
            if (!l)
                throw Error(
                    "You are passing an undefined module! Please check the object you are passing to i18next.use()",
                );
            if (!l.type)
                throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
            return (
                "backend" === l.type && (this.modules.backend = l),
                ("logger" === l.type || (l.log && l.warn && l.error)) && (this.modules.logger = l),
                "languageDetector" === l.type && (this.modules.languageDetector = l),
                "i18nFormat" === l.type && (this.modules.i18nFormat = l),
                "postProcessor" === l.type && R.addPostProcessor(l),
                "formatter" === l.type && (this.modules.formatter = l),
                "3rdParty" === l.type && this.modules.external.push(l),
                this
            );
        }
        setResolvedLanguage(l) {
            if (l && this.languages && !(["cimode", "dev"].indexOf(l) > -1)) {
                for (let l = 0; l < this.languages.length; l++) {
                    let t = this.languages[l];
                    if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                        this.resolvedLanguage = t;
                        break;
                    }
                }
                !this.resolvedLanguage &&
                    0 > this.languages.indexOf(l) &&
                    this.store.hasLanguageSomeTranslations(l) &&
                    ((this.resolvedLanguage = l), this.languages.unshift(l));
            }
        }
        changeLanguage(l, t) {
            this.isLanguageChangingTo = l;
            let d = b();
            this.emit("languageChanging", l);
            let i = (l) => {
                    (this.language = l),
                        (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
                        (this.resolvedLanguage = void 0),
                        this.setResolvedLanguage(l);
                },
                e = (e, c) => {
                    c
                        ? this.isLanguageChangingTo === l &&
                          (i(c),
                          this.translator.changeLanguage(c),
                          (this.isLanguageChangingTo = void 0),
                          this.emit("languageChanged", c),
                          this.logger.log("languageChanged", c))
                        : (this.isLanguageChangingTo = void 0),
                        d.resolve((...l) => this.t(...l)),
                        t && t(e, (...l) => this.t(...l));
                },
                c = (t) => {
                    l || t || !this.services.languageDetector || (t = []);
                    let d = Z(t) ? t : t && t[0],
                        c = this.store.hasLanguageSomeTranslations(d)
                            ? d
                            : this.services.languageUtils.getBestMatchFromCodes(Z(t) ? [t] : t);
                    c &&
                        (this.language || i(c),
                        this.translator.language || this.translator.changeLanguage(c),
                        this.services.languageDetector?.cacheUserLanguage?.(c)),
                        this.loadResources(c, (l) => {
                            e(l, c);
                        });
                };
            return (
                l || !this.services.languageDetector || this.services.languageDetector.async
                    ? !l && this.services.languageDetector && this.services.languageDetector.async
                        ? 0 === this.services.languageDetector.detect.length
                            ? this.services.languageDetector.detect().then(c)
                            : this.services.languageDetector.detect(c)
                        : c(l)
                    : c(this.services.languageDetector.detect()),
                d
            );
        }
        getFixedT(l, t, d) {
            let i = (l, t, ...e) => {
                let c, a;
                ((c =
                    "object" != typeof t
                        ? this.options.overloadTranslationOptionHandler([l, t].concat(e))
                        : { ...t }).lng = c.lng || i.lng),
                    (c.lngs = c.lngs || i.lngs),
                    (c.ns = c.ns || i.ns),
                    "" !== c.keyPrefix && (c.keyPrefix = c.keyPrefix || d || i.keyPrefix);
                let s = this.options.keySeparator || ".";
                return (
                    c.keyPrefix && Array.isArray(l)
                        ? (a = l.map(
                              (l) => (
                                  "function" == typeof l && (l = C(l, { ...this.options, ...t })),
                                  `${c.keyPrefix}${s}${l}`
                              ),
                          ))
                        : ("function" == typeof l && (l = C(l, { ...this.options, ...t })),
                          (a = c.keyPrefix ? `${c.keyPrefix}${s}${l}` : l)),
                    this.t(a, c)
                );
            };
            return Z(l) ? (i.lng = l) : (i.lngs = l), (i.ns = t), (i.keyPrefix = d), i;
        }
        t(...l) {
            return this.translator?.translate(...l);
        }
        exists(...l) {
            return this.translator?.exists(...l);
        }
        setDefaultNamespace(l) {
            this.options.defaultNS = l;
        }
        hasLoadedNamespace(l, t = {}) {
            if (!this.isInitialized)
                return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
            if (!this.languages || !this.languages.length)
                return (
                    this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1
                );
            let d = t.lng || this.resolvedLanguage || this.languages[0],
                i = !!this.options && this.options.fallbackLng,
                e = this.languages[this.languages.length - 1];
            if ("cimode" === d.toLowerCase()) return !0;
            let c = (l, t) => {
                let d = this.services.backendConnector.state[`${l}|${t}`];
                return -1 === d || 0 === d || 2 === d;
            };
            if (t.precheck) {
                let l = t.precheck(this, c);
                if (void 0 !== l) return l;
            }
            return !!(
                this.hasResourceBundle(d, l) ||
                !this.services.backendConnector.backend ||
                (this.options.resources && !this.options.partialBundledLanguages) ||
                (c(d, l) && (!i || c(e, l)))
            );
        }
        loadNamespaces(l, t) {
            let d = b();
            return this.options.ns
                ? (Z(l) && (l = [l]),
                  l.forEach((l) => {
                      0 > this.options.ns.indexOf(l) && this.options.ns.push(l);
                  }),
                  this.loadResources((l) => {
                      d.resolve(), t && t(l);
                  }),
                  d)
                : (t && t(), Promise.resolve());
        }
        loadLanguages(l, t) {
            let d = b();
            Z(l) && (l = [l]);
            let i = this.options.preload || [],
                e = l.filter((l) => 0 > i.indexOf(l) && this.services.languageUtils.isSupportedCode(l));
            return e.length
                ? ((this.options.preload = i.concat(e)),
                  this.loadResources((l) => {
                      d.resolve(), t && t(l);
                  }),
                  d)
                : (t && t(), Promise.resolve());
        }
        dir(l) {
            if (
                (l || (l = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)),
                !l)
            )
                return "rtl";
            try {
                let t = new Intl.Locale(l);
                if (t && t.getTextInfo) {
                    let l = t.getTextInfo();
                    if (l && l.direction) return l.direction;
                }
            } catch (l) {}
            let t = this.services?.languageUtils || new j(Q());
            return l.toLowerCase().indexOf("-latn") > 1
                ? "ltr"
                : [
                        "ar",
                        "shu",
                        "sqr",
                        "ssh",
                        "xaa",
                        "yhd",
                        "yud",
                        "aao",
                        "abh",
                        "abv",
                        "acm",
                        "acq",
                        "acw",
                        "acx",
                        "acy",
                        "adf",
                        "ads",
                        "aeb",
                        "aec",
                        "afb",
                        "ajp",
                        "apc",
                        "apd",
                        "arb",
                        "arq",
                        "ars",
                        "ary",
                        "arz",
                        "auz",
                        "avl",
                        "ayh",
                        "ayl",
                        "ayn",
                        "ayp",
                        "bbz",
                        "pga",
                        "he",
                        "iw",
                        "ps",
                        "pbt",
                        "pbu",
                        "pst",
                        "prp",
                        "prd",
                        "ug",
                        "ur",
                        "ydd",
                        "yds",
                        "yih",
                        "ji",
                        "yi",
                        "hbo",
                        "men",
                        "xmn",
                        "fa",
                        "jpr",
                        "peo",
                        "pes",
                        "prs",
                        "dv",
                        "sam",
                        "ckb",
                    ].indexOf(t.getLanguagePartFromCode(l)) > -1 || l.toLowerCase().indexOf("-arab") > 1
                  ? "rtl"
                  : "ltr";
        }
        static createInstance(t = {}, d) {
            let i = new l(t, d);
            return (i.createInstance = l.createInstance), i;
        }
        cloneInstance(t = {}, d = f) {
            let i = t.forkResourceStore;
            i && delete t.forkResourceStore;
            let e = { ...this.options, ...t, isClone: !0 },
                c = new l(e);
            return (
                (void 0 !== t.debug || void 0 !== t.prefix) && (c.logger = c.logger.clone(t)),
                ["store", "services", "language"].forEach((l) => {
                    c[l] = this[l];
                }),
                (c.services = { ...this.services }),
                (c.services.utils = { hasLoadedNamespace: c.hasLoadedNamespace.bind(c) }),
                i &&
                    ((c.store = new w(
                        Object.keys(this.store.data).reduce(
                            (l, t) => (
                                (l[t] = { ...this.store.data[t] }),
                                (l[t] = Object.keys(l[t]).reduce((d, i) => ((d[i] = { ...l[t][i] }), d), l[t])),
                                l
                            ),
                            {},
                        ),
                        e,
                    )),
                    (c.services.resourceStore = c.store)),
                t.interpolation && (c.services.interpolator = new k(e)),
                (c.translator = new D(c.services, e)),
                c.translator.on("*", (l, ...t) => {
                    c.emit(l, ...t);
                }),
                c.init(e, d),
                (c.translator.options = e),
                (c.translator.backendConnector.services.utils = { hasLoadedNamespace: c.hasLoadedNamespace.bind(c) }),
                c
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
B.createInstance,
    B.dir,
    B.init,
    B.loadResources,
    B.reloadResources,
    B.use,
    B.changeLanguage,
    B.getFixedT,
    B.t,
    B.exists,
    B.setDefaultNamespace,
    B.hasLoadedNamespace,
    B.loadNamespaces,
    B.loadLanguages;
var { slice: A, forEach: _ } = [],
    $ = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    q = function (l, t) {
        let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { path: "/" },
            i = `${l}=${encodeURIComponent(t)}`;
        if (d.maxAge > 0) {
            let l = d.maxAge - 0;
            if (Number.isNaN(l)) throw Error("maxAge should be a Number");
            i += `; Max-Age=${Math.floor(l)}`;
        }
        if (d.domain) {
            if (!$.test(d.domain)) throw TypeError("option domain is invalid");
            i += `; Domain=${d.domain}`;
        }
        if (d.path) {
            if (!$.test(d.path)) throw TypeError("option path is invalid");
            i += `; Path=${d.path}`;
        }
        if (d.expires) {
            if ("function" != typeof d.expires.toUTCString) throw TypeError("option expires is invalid");
            i += `; Expires=${d.expires.toUTCString()}`;
        }
        if ((d.httpOnly && (i += "; HttpOnly"), d.secure && (i += "; Secure"), d.sameSite))
            switch ("string" == typeof d.sameSite ? d.sameSite.toLowerCase() : d.sameSite) {
                case !0:
                case "strict":
                    i += "; SameSite=Strict";
                    break;
                case "lax":
                    i += "; SameSite=Lax";
                    break;
                case "none":
                    i += "; SameSite=None";
                    break;
                default:
                    throw TypeError("option sameSite is invalid");
            }
        return d.partitioned && (i += "; Partitioned"), i;
    },
    ll = {
        create(l, t, d, i) {
            let e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { path: "/", sameSite: "strict" };
            d && ((e.expires = new Date()), e.expires.setTime(e.expires.getTime() + 60 * d * 1e3)),
                i && (e.domain = i),
                (document.cookie = q(l, t, e));
        },
        read(l) {
            let t = `${l}=`,
                d = document.cookie.split(";");
            for (let l = 0; l < d.length; l++) {
                let i = d[l];
                for (; " " === i.charAt(0); ) i = i.substring(1, i.length);
                if (0 === i.indexOf(t)) return i.substring(t.length, i.length);
            }
            return null;
        },
        remove(l, t) {
            this.create(l, "", -1, t);
        },
    },
    lt = {
        name: "cookie",
        lookup(l) {
            let { lookupCookie: t } = l;
            if (t && "u" > typeof document) return ll.read(t) || void 0;
        },
        cacheUserLanguage(l, t) {
            let { lookupCookie: d, cookieMinutes: i, cookieDomain: e, cookieOptions: c } = t;
            d && "u" > typeof document && ll.create(d, l, i, e, c);
        },
    },
    ld = {
        name: "querystring",
        lookup(l) {
            let t,
                { lookupQuerystring: d } = l;
            if ("u" > typeof window) {
                let { search: l } = window.location;
                !window.location.search &&
                    window.location.hash?.indexOf("?") > -1 &&
                    (l = window.location.hash.substring(window.location.hash.indexOf("?")));
                let i = l.substring(1).split("&");
                for (let l = 0; l < i.length; l++) {
                    let e = i[l].indexOf("=");
                    e > 0 && i[l].substring(0, e) === d && (t = i[l].substring(e + 1));
                }
            }
            return t;
        },
    },
    li = {
        name: "hash",
        lookup(l) {
            let t,
                { lookupHash: d, lookupFromHashIndex: i } = l;
            if ("u" > typeof window) {
                let { hash: l } = window.location;
                if (l && l.length > 2) {
                    let e = l.substring(1);
                    if (d) {
                        let l = e.split("&");
                        for (let i = 0; i < l.length; i++) {
                            let e = l[i].indexOf("=");
                            e > 0 && l[i].substring(0, e) === d && (t = l[i].substring(e + 1));
                        }
                    }
                    if (t) return t;
                    if (!t && i > -1) {
                        let t = l.match(/\/([a-zA-Z-]*)/g);
                        if (!Array.isArray(t)) return;
                        return t["number" == typeof i ? i : 0]?.replace("/", "");
                    }
                }
            }
            return t;
        },
    },
    le = null,
    lc = () => {
        if (null !== le) return le;
        try {
            if (!(le = "u" > typeof window && null !== window.localStorage)) return !1;
            let l = "i18next.translate.boo";
            window.localStorage.setItem(l, "foo"), window.localStorage.removeItem(l);
        } catch (l) {
            le = !1;
        }
        return le;
    },
    la = {
        name: "localStorage",
        lookup(l) {
            let { lookupLocalStorage: t } = l;
            if (t && lc()) return window.localStorage.getItem(t) || void 0;
        },
        cacheUserLanguage(l, t) {
            let { lookupLocalStorage: d } = t;
            d && lc() && window.localStorage.setItem(d, l);
        },
    },
    ls = null,
    ln = () => {
        if (null !== ls) return ls;
        try {
            if (!(ls = "u" > typeof window && null !== window.sessionStorage)) return !1;
            let l = "i18next.translate.boo";
            window.sessionStorage.setItem(l, "foo"), window.sessionStorage.removeItem(l);
        } catch (l) {
            ls = !1;
        }
        return ls;
    },
    lZ = {
        name: "sessionStorage",
        lookup(l) {
            let { lookupSessionStorage: t } = l;
            if (t && ln()) return window.sessionStorage.getItem(t) || void 0;
        },
        cacheUserLanguage(l, t) {
            let { lookupSessionStorage: d } = t;
            d && ln() && window.sessionStorage.setItem(d, l);
        },
    },
    lb = {
        name: "navigator",
        lookup(l) {
            let t = [];
            if ("u" > typeof navigator) {
                let { languages: l, userLanguage: d, language: i } = navigator;
                if (l) for (let d = 0; d < l.length; d++) t.push(l[d]);
                d && t.push(d), i && t.push(i);
            }
            return t.length > 0 ? t : void 0;
        },
    },
    lm = {
        name: "htmlTag",
        lookup(l) {
            let t,
                { htmlTag: d } = l,
                i = d || ("u" > typeof document ? document.documentElement : null);
            return i && "function" == typeof i.getAttribute && (t = i.getAttribute("lang")), t;
        },
    },
    lo = {
        name: "path",
        lookup(l) {
            let { lookupFromPathIndex: t } = l;
            if ("u" < typeof window) return;
            let d = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            if (Array.isArray(d)) return d["number" == typeof t ? t : 0]?.replace("/", "");
        },
    },
    lu = {
        name: "subdomain",
        lookup(l) {
            let { lookupFromSubdomainIndex: t } = l,
                d =
                    "u" > typeof window &&
                    window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
            if (d) return d["number" == typeof t ? t + 1 : 1];
        },
    },
    lh = !1;
try {
    document.cookie, (lh = !0);
} catch (l) {}
var lW = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
lh || lW.splice(1, 1);
var lG = class {
    constructor(l) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (this.type = "languageDetector"), (this.detectors = {}), this.init(l, t);
    }
    init() {
        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { languageUtils: {} },
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (this.services = l),
            (this.options = (function (l) {
                return (
                    _.call(A.call(arguments, 1), (t) => {
                        if (t) for (let d in t) void 0 === l[d] && (l[d] = t[d]);
                    }),
                    l
                );
            })(t, this.options || {}, {
                order: lW,
                lookupQuerystring: "lng",
                lookupCookie: "i18next",
                lookupLocalStorage: "i18nextLng",
                lookupSessionStorage: "i18nextLng",
                caches: ["localStorage"],
                excludeCacheFor: ["cimode"],
                convertDetectedLanguage: (l) => l,
            })),
            "string" == typeof this.options.convertDetectedLanguage &&
                this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
                (this.options.convertDetectedLanguage = (l) => l.replace("-", "_")),
            this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
            (this.i18nOptions = d),
            this.addDetector(lt),
            this.addDetector(ld),
            this.addDetector(la),
            this.addDetector(lZ),
            this.addDetector(lb),
            this.addDetector(lm),
            this.addDetector(lo),
            this.addDetector(lu),
            this.addDetector(li);
    }
    addDetector(l) {
        return (this.detectors[l.name] = l), this;
    }
    detect() {
        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.order,
            t = [];
        return (l.forEach((l) => {
            if (this.detectors[l]) {
                let d = this.detectors[l].lookup(this.options);
                d && "string" == typeof d && (d = [d]), d && (t = t.concat(d));
            }
        }),
        (t = t
            .filter(
                (l) =>
                    null != l &&
                    !(
                        "string" == typeof l &&
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
                        ].some((t) => t.test(l))
                    ),
            )
            .map((l) => this.options.convertDetectedLanguage(l))),
        this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes)
            ? t
            : t.length > 0
              ? t[0]
              : null;
    }
    cacheUserLanguage(l) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.caches;
        !t ||
            (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(l) > -1) ||
            t.forEach((t) => {
                this.detectors[t] && this.detectors[t].cacheUserLanguage(l, this.options);
            });
    }
};
function lp(l) {
    return (lp =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (l) {
                  return typeof l;
              }
            : function (l) {
                  return l && "function" == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype
                      ? "symbol"
                      : typeof l;
              })(l);
}
lG.type = "languageDetector";
function lN() {
    return (
        "function" == typeof XMLHttpRequest ||
        ("u" < typeof XMLHttpRequest ? "undefined" : lp(XMLHttpRequest)) === "object"
    );
}
function lM(l, t) {
    var d = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(l);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(l, t).enumerable;
            })),
            d.push.apply(d, i);
    }
    return d;
}
function lX(l) {
    for (var t = 1; t < arguments.length; t++) {
        var d = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? lM(Object(d), !0).forEach(function (t) {
                  var i, e, c;
                  (i = l),
                      (e = t),
                      (c = d[t]),
                      (e = (function (l) {
                          var t = (function (l, t) {
                              if ("object" != lr(l) || !l) return l;
                              var d = l[Symbol.toPrimitive];
                              if (void 0 !== d) {
                                  var i = d.call(l, t || "default");
                                  if ("object" != lr(i)) return i;
                                  throw TypeError("@@toPrimitive must return a primitive value.");
                              }
                              return ("string" === t ? String : Number)(l);
                          })(l, "string");
                          return "symbol" == lr(t) ? t : t + "";
                      })(e)) in i
                          ? Object.defineProperty(i, e, { value: c, enumerable: !0, configurable: !0, writable: !0 })
                          : (i[e] = c);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(d))
              : lM(Object(d)).forEach(function (t) {
                    Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(d, t));
                });
    }
    return l;
}
function lr(l) {
    return (lr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (l) {
                  return typeof l;
              }
            : function (l) {
                  return l && "function" == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype
                      ? "symbol"
                      : typeof l;
              })(l);
}
var ly = "function" == typeof fetch ? fetch : void 0;
if (
    ("u" > typeof global && global.fetch
        ? (ly = global.fetch)
        : "u" > typeof window && window.fetch && (ly = window.fetch),
    lN() &&
        ("u" > typeof global && global.XMLHttpRequest
            ? (c = global.XMLHttpRequest)
            : "u" > typeof window && window.XMLHttpRequest && (c = window.XMLHttpRequest)),
    "function" == typeof ActiveXObject &&
        ("u" > typeof global && global.ActiveXObject
            ? (a = global.ActiveXObject)
            : "u" > typeof window && window.ActiveXObject && (a = window.ActiveXObject)),
    "function" != typeof ly && (ly = void 0),
    !ly && !c && !a)
)
    try {
        d.e("88600")
            .then(d.bind(d, 240459))
            .then((l) => (0, s.r)(l.default, 1))
            .then(function (l) {
                ly = l.default;
            })
            .catch(function () {});
    } catch (l) {}
var lY = function (l, t) {
        if (t && "object" === lr(t)) {
            var d = "";
            for (var i in t) d += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(t[i]);
            if (!d) return l;
            l = l + (-1 !== l.indexOf("?") ? "&" : "?") + d.slice(1);
        }
        return l;
    },
    lT = function (l, t, d, i) {
        var e = function (l) {
            if (!l.ok) return d(l.statusText || "Error", { status: l.status });
            l.text()
                .then(function (t) {
                    d(null, { status: l.status, data: t });
                })
                .catch(d);
        };
        if (i) {
            var c = i(l, t);
            if (c instanceof Promise) return void c.then(e).catch(d);
        }
        "function" == typeof fetch ? fetch(l, t).then(e).catch(d) : ly(l, t).then(e).catch(d);
    },
    lV = !1,
    lL = function (l, t, d, i) {
        l.queryStringParams && (t = lY(t, l.queryStringParams));
        var e = lX({}, "function" == typeof l.customHeaders ? l.customHeaders() : l.customHeaders);
        "u" < typeof window &&
            "u" > typeof global &&
            void 0 !== global.process &&
            global.process.versions &&
            global.process.versions.node &&
            (e["User-Agent"] = "i18next-http-backend (node/"
                .concat(global.process.version, "; ")
                .concat(global.process.platform, " ")
                .concat(global.process.arch, ")")),
            d && (e["Content-Type"] = "application/json");
        var c = "function" == typeof l.requestOptions ? l.requestOptions(d) : l.requestOptions,
            a = lX({ method: d ? "POST" : "GET", body: d ? l.stringify(d) : void 0, headers: e }, lV ? {} : c),
            s = "function" == typeof l.alternateFetch && l.alternateFetch.length >= 1 ? l.alternateFetch : void 0;
        try {
            lT(t, a, i, s);
        } catch (l) {
            if (!c || 0 === Object.keys(c).length || !l.message || 0 > l.message.indexOf("not implemented"))
                return i(l);
            try {
                Object.keys(c).forEach(function (l) {
                    delete a[l];
                }),
                    lT(t, a, i, s),
                    (lV = !0);
            } catch (l) {
                i(l);
            }
        }
    },
    lI = function (l, t, d, i) {
        d && "object" === lr(d) && (d = lY("", d).slice(1)), l.queryStringParams && (t = lY(t, l.queryStringParams));
        try {
            var e = c ? new c() : new a("MSXML2.XMLHTTP.3.0");
            e.open(d ? "POST" : "GET", t, 1),
                l.crossDomain || e.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                (e.withCredentials = !!l.withCredentials),
                d && e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                e.overrideMimeType && e.overrideMimeType("application/json");
            var s = l.customHeaders;
            if ((s = "function" == typeof s ? s() : s)) for (var n in s) e.setRequestHeader(n, s[n]);
            (e.onreadystatechange = function () {
                e.readyState > 3 &&
                    i(e.status >= 400 ? e.statusText : null, { status: e.status, data: e.responseText });
            }),
                e.send(d);
        } catch (l) {
            console && console.log(l);
        }
    },
    lz = function (l, t, d, i) {
        return ("function" == typeof d && ((i = d), (d = void 0)),
        (i = i || function () {}),
        ly && 0 !== t.indexOf("file:"))
            ? lL(l, t, d, i)
            : lN() || "function" == typeof ActiveXObject
              ? lI(l, t, d, i)
              : void i(Error("No fetch and no xhr implementation found!"));
    };
function lw(l) {
    return (lw =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (l) {
                  return typeof l;
              }
            : function (l) {
                  return l && "function" == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype
                      ? "symbol"
                      : typeof l;
              })(l);
}
function lR(l, t) {
    var d = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(l);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(l, t).enumerable;
            })),
            d.push.apply(d, i);
    }
    return d;
}
function lS(l) {
    for (var t = 1; t < arguments.length; t++) {
        var d = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? lR(Object(d), !0).forEach(function (t) {
                  lC(l, t, d[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(d))
              : lR(Object(d)).forEach(function (t) {
                    Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(d, t));
                });
    }
    return l;
}
function lC(l, t, d) {
    return (
        (t = lx(t)) in l
            ? Object.defineProperty(l, t, { value: d, enumerable: !0, configurable: !0, writable: !0 })
            : (l[t] = d),
        l
    );
}
function lx(l) {
    var t = (function (l, t) {
        if ("object" != lw(l) || !l) return l;
        var d = l[Symbol.toPrimitive];
        if (void 0 !== d) {
            var i = d.call(l, t || "default");
            if ("object" != lw(i)) return i;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(l);
    })(l, "string");
    return "symbol" == lw(t) ? t : t + "";
}
var lg =
    ((i = function l(t) {
        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!(this instanceof l)) throw TypeError("Cannot call a class as a function");
        (this.services = t), (this.options = d), (this.allOptions = i), (this.type = "backend"), this.init(t, d, i);
    }),
    (e = [
        {
            key: "init",
            value: function (l) {
                var t = this,
                    d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (
                    ((this.services = l),
                    (this.options = lS(
                        lS(
                            lS(
                                {},
                                {
                                    loadPath: "/locales/{{lng}}/{{ns}}.json",
                                    addPath: "/locales/add/{{lng}}/{{ns}}",
                                    parse: function (l) {
                                        return JSON.parse(l);
                                    },
                                    stringify: JSON.stringify,
                                    parsePayload: function (l, t, d) {
                                        return lC({}, t, d || "");
                                    },
                                    parseLoadPayload: function (l, t) {},
                                    request: lz,
                                    reloadInterval: "u" < typeof window && 36e5,
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
                        d,
                    )),
                    (this.allOptions = i),
                    this.services && this.options.reloadInterval)
                ) {
                    var e = setInterval(function () {
                        return t.reload();
                    }, this.options.reloadInterval);
                    "object" === lw(e) && "function" == typeof e.unref && e.unref();
                }
            },
        },
        {
            key: "readMulti",
            value: function (l, t, d) {
                this._readAny(l, l, t, t, d);
            },
        },
        {
            key: "read",
            value: function (l, t, d) {
                this._readAny([l], l, [t], t, d);
            },
        },
        {
            key: "_readAny",
            value: function (l, t, d, i, e) {
                var c,
                    a,
                    s = this,
                    n = this.options.loadPath;
                "function" == typeof this.options.loadPath && (n = this.options.loadPath(l, d)),
                    (n = (a = c = n) && "function" == typeof a.then ? c : Promise.resolve(c)).then(function (c) {
                        if (!c) return e(null, {});
                        var a = s.services.interpolator.interpolate(c, { lng: l.join("+"), ns: d.join("+") });
                        s.loadUrl(a, e, t, i);
                    });
            },
        },
        {
            key: "loadUrl",
            value: function (l, t, d, i) {
                var e = this,
                    c = this.options.parseLoadPayload("string" == typeof d ? [d] : d, "string" == typeof i ? [i] : i);
                this.options.request(this.options, l, c, function (c, a) {
                    if (a && ((a.status >= 500 && a.status < 600) || !a.status))
                        return t("failed loading " + l + "; status code: " + a.status, !0);
                    if (a && a.status >= 400 && a.status < 500)
                        return t("failed loading " + l + "; status code: " + a.status, !1);
                    if (!a && c && c.message) {
                        var s,
                            n,
                            Z = c.message.toLowerCase();
                        if (
                            ["failed", "fetch", "network", "load"].find(function (l) {
                                return Z.indexOf(l) > -1;
                            })
                        )
                            return t("failed loading " + l + ": " + c.message, !0);
                    }
                    if (c) return t(c, !1);
                    try {
                        s = "string" == typeof a.data ? e.options.parse(a.data, d, i) : a.data;
                    } catch (t) {
                        n = "failed parsing " + l + " to json";
                    }
                    if (n) return t(n, !1);
                    t(null, s);
                });
            },
        },
        {
            key: "create",
            value: function (l, t, d, i, e) {
                var c = this;
                if (this.options.addPath) {
                    "string" == typeof l && (l = [l]);
                    var a = this.options.parsePayload(t, d, i),
                        s = 0,
                        n = [],
                        Z = [];
                    l.forEach(function (d) {
                        var i = c.options.addPath;
                        "function" == typeof c.options.addPath && (i = c.options.addPath(d, t));
                        var b = c.services.interpolator.interpolate(i, { lng: d, ns: t });
                        c.options.request(c.options, b, a, function (t, d) {
                            (s += 1), n.push(t), Z.push(d), s === l.length && "function" == typeof e && e(n, Z);
                        });
                    });
                }
            },
        },
        {
            key: "reload",
            value: function () {
                var l = this,
                    t = this.services,
                    d = t.backendConnector,
                    i = t.languageUtils,
                    e = t.logger,
                    c = d.language;
                if (!c || "cimode" !== c.toLowerCase()) {
                    var a = [],
                        s = function (l) {
                            i.toResolveHierarchy(l).forEach(function (l) {
                                0 > a.indexOf(l) && a.push(l);
                            });
                        };
                    s(c),
                        this.allOptions.preload &&
                            this.allOptions.preload.forEach(function (l) {
                                return s(l);
                            }),
                        a.forEach(function (t) {
                            l.allOptions.ns.forEach(function (l) {
                                d.read(t, l, "read", null, null, function (i, c) {
                                    i &&
                                        e.warn(
                                            "loading namespace ".concat(l, " for language ").concat(t, " failed"),
                                            i,
                                        ),
                                        !i && c && e.log("loaded namespace ".concat(l, " for language ").concat(t), c),
                                        d.loaded("".concat(t, "|").concat(l), i, c);
                                });
                            });
                        });
                }
            },
        },
    ]),
    (function (l, t) {
        for (var d = 0; d < t.length; d++) {
            var i = t[d];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(l, lx(i.key), i);
        }
    })(i.prototype, e),
    Object.defineProperty(i, "prototype", { writable: !1 }),
    i);
lg.type = "backend";
var lD = {
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
    lj = Object.keys(lD);
function lU(l) {
    let t = lD[l];
    return t ? t.emoji : (lD[l.split("-")[0] || l]?.emoji ?? "\uD83C\uDF10");
}
var lF = "incode:i18n:language",
    lO = (l) => {
        let t,
            d = l.split(".");
        return (t = (d[d.length - 1] || "missing key").replace(/([A-Z])/g, " $1")).charAt(0).toUpperCase() + t.slice(1);
    },
    lJ = new lG();
function lk(l, t) {
    for (let [d, i] of Object.entries(t)) i && l.addResourceBundle(d, "default", i, !0, !0);
}
function lE() {
    try {
        if ("u" < typeof localStorage) return null;
        return localStorage.getItem(lF);
    } catch {
        return null;
    }
}
function lv(l = {}) {
    let { lang: t, loadPath: d, skipRemoteLoad: i, translations: e } = l,
        c = B.createInstance(),
        a = lE(),
        s = !0 !== i;
    return (
        s && c.use(lg),
        c
            .use(lJ)
            .init({
                lng: a ?? t,
                fallbackLng: "en",
                supportedLngs: lj,
                ns: ["default"],
                defaultNS: "default",
                partialBundledLanguages: !0,
                keySeparator: ".",
                interpolation: { escapeValue: !1 },
                backend: s
                    ? {
                          loadPath:
                              d ??
                              "https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=cg41dUINoxdp8BaHDQLJhA",
                      }
                    : void 0,
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
                    lookupLocalStorage: lF,
                    lookupSessionStorage: lF,
                    caches: ["localStorage"],
                },
                initImmediate: !1,
                parseMissingKeyHandler: lO,
            }),
        e &&
            (lk(c, e),
            c.on("loaded", () => {
                lk(c, e);
            })),
        c
    );
}
lJ.addDetector({
    name: "navigatorOnlyLanguage",
    lookup() {
        if ("u" < typeof navigator) return "en";
        let l = navigator.language;
        return lj.includes(l) ? l : l.split("-")[0];
    },
});
var lK = null;
function lH(l) {
    lK = l;
}
function lQ() {
    return null !== lK;
}
var lP = ({ class: l }) =>
    (0, n.v)("svg", {
        width: "13",
        height: "14",
        viewBox: "0 0 13 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        class: l,
        children: (0, n.v)("path", {
            d: "M0 8.08009V5.92009H9.198L4.698 1.87009L6.228 0.340088L12.6 6.28009V7.70209L6.228 13.6601L4.698 12.1301L9.198 8.08009H0Z",
            fill: "currentColor",
        }),
    });
function lf() {
    let l = (lK || (lK = lv()), lK),
        [, t] = (0, n.p)(0),
        [d, i] = (0, n.p)(l.isInitialized);
    return (
        (0, n._)(() => {
            let d = () => {
                    t((l) => l + 1);
                },
                e = () => {
                    i(!0), t((l) => l + 1);
                };
            return (
                l.on("languageChanged", d),
                l.on("initialized", e),
                l.on("loaded", d),
                () => {
                    l.off("languageChanged", d), l.off("initialized", e), l.off("loaded", d);
                }
            );
        }, [l]),
        { t: (0, n.d)(() => l.t.bind(l), [l]), ready: d, i18n: l }
    );
}
var lB = ({
    i18nKey: l,
    boldClass: t = "IncodeTransBold",
    arrowClass: d = "IncodeTransArrow",
    components: i,
    defaultValue: e,
}) => {
    let { t: c } = lf(),
        a = e ? c(l, { defaultValue: e }) : c(l),
        s = "<strong>|<\\/strong>|<br\\s*\\/?>|<arrow\\s*\\/>",
        Z = i
            ? Object.keys(i)
                  .map((l) => `<${l}>|<\\/${l}>`)
                  .join("|")
            : "",
        b = Z ? `${s}|${Z}` : s,
        m = a.split(RegExp(`(${b})`, "g")),
        o = !1,
        u = null;
    return (0, n.v)(n.x, {
        children: m.map((l, e) => {
            if ("<strong>" === l) return (o = !0), null;
            if ("</strong>" === l) return (o = !1), null;
            if (/^<br\s*\/?>$/.test(l)) return (0, n.v)("br", {}, e);
            if (/^<arrow\s*\/>$/.test(l)) return (0, n.v)(lP, { class: d }, e);
            if (i) {
                let t = l.match(/^<(\w+)>$/);
                if (t && i[t[1]]) return (u = t[1]), null;
                let d = l.match(/^<\/(\w+)>$/);
                if (d && i[d[1]]) return (u = null), null;
            }
            return l
                ? u && i
                    ? (0, n.y)(i[u], { key: e }, l)
                    : o
                      ? (0, n.v)("span", { class: t, children: l }, e)
                      : (0, n.v)(n.x, { children: l }, e)
                : null;
        }),
    });
};
