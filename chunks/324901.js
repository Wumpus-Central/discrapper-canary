(r.r(t),
    r.d(t, {
        ALL_COUNTRIES: () => c,
        DEV_ONLY_COUNTRIES: () => l,
        SUPPORTED_COUNTRIES: () => d,
        createEkybManager: () => $,
        ekybMachine: () => x,
        isSupportedCountry: () => m,
        toEkybConfig: () => A,
    }),
    r(580607));
var s = r(41851),
    n = r(269882),
    i = r(528239);
(r(829601), r(924260), r(489510), r(886347), r(219877), r(309076));
var a = r(646613);
r(761969);
var o = r(297200),
    u = r(647051);
let d = ["BR", "CN", "FR", "DE", "IL", "IT", "MX", "ES", "GB", "US"],
    l = ["CM", "KE", "NG"],
    c = [...d, ...l],
    f = new Set(c);
function m(e) {
    return f.has(e);
}
let p = [
        "name-user_input",
        "taxId-user_input",
        "street-user_input",
        "houseNo-user_input",
        "address2-user_input",
        "city-user_input",
        "state-user_input",
        "postalCode-user_input",
    ],
    b = {
        "name-user_input": "businessName",
        "street-user_input": "street",
        "houseNo-user_input": "houseNo",
        "address2-user_input": "addressLine2",
        "city-user_input": "city",
        "state-user_input": "state",
        "postalCode-user_input": "postalCode",
        "taxId-user_input": "taxId",
    },
    g = ["BR"],
    h = [],
    y = ["BR", "GB", "FR"],
    E = ["street", "houseNo", "addressLine2", "city", "state", "postalCode"],
    v = ["ubo"],
    _ = { name: "ekyb.uboName", surname: "ekyb.uboSurname" },
    k = [
        "00000000000000",
        "11111111111111",
        "22222222222222",
        "33333333333333",
        "44444444444444",
        "55555555555555",
        "66666666666666",
        "77777777777777",
        "88888888888888",
        "99999999999999",
    ],
    S = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
    U = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
function A(e) {
    return e.flowId || e.verificationFields
        ? e
        : {
              checkBusinessName: e.checkBusinessName,
              checkAddress: e.checkAddress,
              checkTaxId: e.checkTaxId,
              checkUniqueBeneficialOwner: e.checkUniqueBeneficialOwner,
          };
}
function C(e, t) {
    let r = 11 - (t.reduce((t, r, s) => t + Number.parseInt(e.charAt(s), 10) * r, 0) % 11);
    return (r >= 10 && (r = 0), r.toString());
}
let I = () => ({
        required: (e, t, r) => {
            if (e.trim().length > 0) return;
            let s = r.displayLabel ?? r.label;
            return s ? { key: o.s, params: { fieldName: s } } : { key: o.s };
        },
        streetLevelRequired: (e) => {
            if (!(e.trim().length > 0)) return o.c;
        },
        cnpj: (e) => {
            if (0 !== e.trim().length)
                return !(function (e) {
                    if (!e || "string" != typeof e) return !1;
                    let t = e.trim();
                    if (
                        (18 === t.length && (t = t.replace(/\./g, "").replace(/\//g, "").replace(/-/g, "")),
                        14 !== t.length || !/^\d+$/.test(t) || k.includes(t))
                    )
                        return !1;
                    let r = C(t, S);
                    if (t.charAt(12) !== r) return !1;
                    let s = C(t, U);
                    return t.charAt(13) === s;
                })(e)
                    ? { key: "ekyb.error.invalidTaxId" }
                    : void 0;
        },
        postalCodeFormat: (e, t) => {
            if ("postalCodeFormat" === t.type && 0 !== e.trim().length && !(0, o.o)(e, t.country))
                return {
                    key: (0, o.i)(t.country),
                    params: ((e) => {
                        let t = o.n[e];
                        if (void 0 !== t) return { length: t };
                        let r = (0, o.a)(e);
                        return (("US" === e || "BR" === e) && (r -= 1), { maxLength: r });
                    })(t.country),
                };
        },
    }),
    O = (e) => ("string" == typeof e ? e : String(e ?? "")),
    D = (e, t, r, s) => {
        if (t)
            for (let n of t) {
                let t = s[n.type](e, n, r);
                if (t) return t;
            }
    };
function F(e, t, r) {
    let s = e.filter((e) => "ubos-user_input" !== e && !e.startsWith("socure"));
    return (
        "GB" === t && (s = s.filter((e) => "state-user_input" !== e)),
        "MX" === t &&
            (s = s.filter((e) => {
                if ("ubos-user_input" === e) return !1;
                let t = b[e] ?? e;
                return !E.includes(t) || "postalCode" === t;
            })),
        [...s]
            .sort((e, t) => {
                let r = p.indexOf(e),
                    s = p.indexOf(t);
                return -1 !== r && -1 !== s ? r - s : -1 !== r ? -1 : +(-1 !== s);
            })
            .map((e) => {
                var r;
                let s,
                    n = b[e] ?? e,
                    i =
                        !!v.includes(n) ||
                        ("businessName" === n ? h.includes(t) : "addressLine2" === n || (!E.includes(n) && !1)),
                    a = { name: n, type: "text", label: `ekyb.${n}`, required: !i };
                ("taxId" === n &&
                    ((a.required = !0),
                    "CN" === t && (a.label = "verification.labels.prcId"),
                    "BR" === t && (a.displayLabel = "CPF")),
                    "postalCode" === n && (a.maxLength = (0, o.a)(t)),
                    "state" === n &&
                        "US" === t &&
                        ((a.type = "dropdown"), (a.options = o.d), (a.placeholder = "verification.placeholder.state")));
                let u =
                    ((r = a.required),
                    (s = []),
                    r && s.push({ type: "required" }),
                    "taxId" === n && g.includes(t) && s.push({ type: "cnpj" }),
                    "postalCode" === n && s.push({ type: "postalCodeFormat", country: t }),
                    s);
                return (u.length > 0 && (a.validation = u), a);
            })
    );
}
function N(e) {
    if (e.verificationFields && e.verificationFields.length > 0) return e.verificationFields;
    let t = [];
    return (
        !1 !== e.checkBusinessName && t.push("name-user_input"),
        !1 !== e.checkAddress &&
            t.push(
                "street-user_input",
                "houseNo-user_input",
                "address2-user_input",
                "city-user_input",
                "state-user_input",
                "postalCode-user_input",
            ),
        !1 !== e.checkTaxId && t.push("taxId-user_input"),
        !1 !== e.checkUniqueBeneficialOwner && t.push("ubos-user_input"),
        t
    );
}
let B = (0, a.a)(async ({ signal: e }) =>
        (async function (e) {
            let t = (await (0, u.t)(e)).flowModules.find((e) => "EKYB" === e.key);
            if (!t) throw Error("EKYB module not found in flow configuration");
            return t.configuration;
        })(e),
    ),
    T = (0, a.a)(async ({ input: e, signal: t }) =>
        (async function (e, t) {
            let r = await s.t.post(i.t.ekybSubmit, e, { signal: t });
            if (!r.ok) throw Error(`POST ${i.t.ekybSubmit} failed: ${r.status} ${r.statusText}`);
            return r.data;
        })(e, t),
    ),
    L = ["street", "city", "state", "postalCode", "houseNo"],
    x = (0, a.t)({
        types: { context: {}, events: {}, input: {} },
        actors: { fetchEkybModuleConfig: B, submitEkyb: T, debounceSearch: o.t },
        actions: {
            applyFetchedConfig: (0, a.r)(({ event: e }) => {
                let t = e.output,
                    r = {
                        checkBusinessName: t.checkBusinessName,
                        checkAddress: t.checkAddress,
                        checkTaxId: t.checkTaxId,
                        checkUniqueBeneficialOwner: t.checkUniqueBeneficialOwner,
                    },
                    s = N(r),
                    n = !1 !== r.checkUniqueBeneficialOwner && s.includes("ubos-user_input");
                return {
                    config: r,
                    country: "US",
                    availableCountries: c,
                    fields: F(s, "US", n),
                    values: { country: "US" },
                    validationErrors: void 0,
                    ubos: n ? [{ id: "ubo-1", name: "", surname: "" }] : [],
                    canAddUbo: n,
                    hasUbos: n,
                    addressSuggestions: [],
                    _nextUboId: 2,
                    _searchQuery: "",
                };
            }),
            setCountry: (0, a.r)(({ context: e, event: t }) => {
                let r,
                    { country: s } = t,
                    n = N(e.config),
                    i = !1 !== e.config.checkUniqueBeneficialOwner && n.includes("ubos-user_input") && "MX" !== s,
                    a = F(n, s, i),
                    o = e._nextUboId;
                return (
                    i
                        ? e.ubos.length > 0
                            ? (r = e.ubos)
                            : ((r = [{ id: `ubo-${o}`, name: "", surname: "" }]), (o += 1))
                        : (r = []),
                    {
                        country: s,
                        fields: a,
                        values: { ...e.values, country: s, state: "" },
                        validationErrors: void 0,
                        ubos: r,
                        canAddUbo: i && r.length < 8,
                        hasUbos: i,
                        _nextUboId: o,
                    }
                );
            }),
            updateField: (0, a.r)(({ context: e, event: t }) => {
                var r, s, n;
                if ("DATA_CHANGED" !== t.type) return {};
                let i = ((r = t.name), (s = t.value), (n = e.country), "postalCode" === r ? (0, o.r)(s, n) : s);
                return { values: { ...e.values, [t.name]: i } };
            }),
            clearFieldValidationError: (0, a.r)(({ context: e, event: t }) => {
                if ("DATA_CHANGED" !== t.type) return {};
                let r = e.validationErrors;
                if (!r?.[t.name]) return {};
                let s = { ...r };
                return (delete s[t.name], { validationErrors: Object.keys(s).length > 0 ? s : void 0 });
            }),
            validateFormField: (0, a.r)(({ context: e, event: t }) => {
                if ("VALIDATE_FIELD" !== t.type) return {};
                let { name: r } = t,
                    s = /^ubo-\d+-(name|surname)$/.test(r)
                        ? (function (e, t) {
                              let r = t.match(/^ubo-(\d+)-(name|surname)$/);
                              if (!r) return;
                              let s = Number(r[1]),
                                  n = r[2];
                              if (s < 0 || s >= e.length) return;
                              let i = e[s],
                                  a = "" !== i.name.trim() || "" !== i.surname.trim();
                              if ((0 === s || a) && !i[n].trim()) return { key: o.s, params: { fieldName: _[n] } };
                          })(e.ubos, r)
                        : (function (e, t, r) {
                              let s = r.find((e) => e.name === t);
                              if (!s) return;
                              let n = I();
                              return D(O(e[s.name]), s.validation, s, n);
                          })(e.values, r, e.fields),
                    n = { ...(e.validationErrors ?? {}) };
                return (s ? (n[r] = s) : delete n[r], { validationErrors: Object.keys(n).length > 0 ? n : void 0 });
            }),
            computeValidationResult: (0, a.r)(({ context: e }) => {
                var t, r, s, n, i;
                let a,
                    u,
                    d,
                    l,
                    c =
                        ((t = e.values),
                        (r = e.fields),
                        (s = e.country),
                        (n = e.ubos),
                        (i = e.hasUbos),
                        (a = I()),
                        (u = r.reduce((e, r) => {
                            let s = D(O(t[r.name]), r.validation, r, a);
                            return (s && (e[r.name] = s), e);
                        }, {})),
                        (d = (function (e, t, r) {
                            if (y.includes(r)) return {};
                            let s = {};
                            for (let e of E) s[e] = t[e];
                            if (
                                E.some((e) => {
                                    let t = s[e];
                                    return void 0 !== t && "" !== t.trim();
                                })
                            )
                                return {};
                            let n = {};
                            for (let r of e.filter((e) => E.includes(e.name) && e.required))
                                if (!(t[r.name] ?? "").trim()) {
                                    let e = r.displayLabel ?? r.label;
                                    n[r.name] = { key: o.s, params: { fieldName: e } };
                                }
                            return n;
                        })(r, t, s)),
                        (l = (function (e, t) {
                            if (!t) return {};
                            let r = {};
                            for (let t = 0; t < e.length; t++) {
                                let s = 0 === t,
                                    n = "" !== e[t].name.trim() || "" !== e[t].surname.trim();
                                (s || n) &&
                                    (e[t].name.trim() ||
                                        (r[`ubo-${t}-name`] = { key: o.s, params: { fieldName: _.name } }),
                                    e[t].surname.trim() ||
                                        (r[`ubo-${t}-surname`] = { key: o.s, params: { fieldName: _.surname } }));
                            }
                            return r;
                        })(n, i)),
                        { ...d, ...u, ...l });
                return { validationErrors: Object.keys(c).length > 0 ? c : void 0 };
            }),
            addUbo: (0, a.r)(({ context: e }) => {
                let t = e._nextUboId,
                    r = [...e.ubos, { id: `ubo-${t}`, name: "", surname: "" }];
                return { ubos: r, canAddUbo: r.length < 8, _nextUboId: t + 1 };
            }),
            removeUbo: (0, a.r)(({ context: e, event: t }) => {
                let r,
                    { index: s } = t,
                    n = e.ubos.filter((e, t) => t !== s),
                    i = n.length < 8,
                    a = e.validationErrors;
                if (a) {
                    let e = {};
                    for (let [t, r] of Object.entries(a)) {
                        let n = t.match(/^ubo-(\d+)-(name|surname)$/);
                        if (!n) {
                            e[t] = r;
                            continue;
                        }
                        let i = Number(n[1]);
                        if (i === s) continue;
                        let a = i > s ? i - 1 : i;
                        e[`ubo-${a}-${n[2]}`] = r;
                    }
                    r = Object.keys(e).length > 0 ? e : void 0;
                }
                return { ubos: n, canAddUbo: i, validationErrors: r };
            }),
            setUboField: (0, a.r)(({ context: e, event: t }) => {
                let { index: r, field: s, value: n } = t,
                    i = e.ubos.map((e, t) => (t === r ? { ...e, [s]: n } : e)),
                    a = `ubo-${r}-${s}`,
                    o = e.validationErrors;
                if (!o?.[a]) return { ubos: i };
                let u = { ...o };
                return (delete u[a], { ubos: i, validationErrors: Object.keys(u).length > 0 ? u : void 0 });
            }),
            setErrorMessage: (0, a.r)(({ event: e }) => ({ errorMessage: String(e.error ?? "verification.error") })),
            clearErrorMessage: (0, a.r)({ errorMessage: () => "" }),
            fillAddressFields: (0, a.r)(({ context: e, event: t }) => {
                let { suggestion: r } = t,
                    s = new Set(e.fields.map((e) => e.name)),
                    { values: n } = (0, o.l)(e.values, {}, r, s),
                    i = e.validationErrors,
                    a = i;
                if (i) {
                    let e = { ...i };
                    for (let t of L) delete e[t];
                    a = Object.keys(e).length > 0 ? e : void 0;
                }
                let u = (0, o.u)(r, s);
                return (
                    void 0 !== u && (a = { ...a, street: u }),
                    { values: n, addressSuggestions: [], _searchQuery: "", validationErrors: a }
                );
            }),
            setAddressSuggestions: (0, a.r)(({ event: e }) => ({ addressSuggestions: e.suggestions })),
        },
        guards: {
            hasFlowId: ({ context: e }) => !!e.config.flowId,
            hasNoValidationErrors: ({ context: e }) => 0 === Object.keys(e.validationErrors ?? {}).length,
            canAddUbo: ({ context: e }) => e.canAddUbo,
            isValidUboIndex: ({ context: e, event: t }) => {
                let { index: r } = t;
                return Number.isInteger(r) && r >= 0 && r < e.ubos.length;
            },
            isSupportedCountry: ({ event: e }) => {
                let { country: t } = e;
                return m(t);
            },
        },
    }).createMachine({
        id: "ekyb",
        initial: "idle",
        context: ({ input: e }) => {
            let t = A(e.config),
                r = N(t),
                s = !1 !== t.checkUniqueBeneficialOwner && r.includes("ubos-user_input");
            return {
                config: t,
                country: "US",
                availableCountries: c,
                fields: F(r, "US", s),
                values: { country: "US" },
                validationErrors: void 0,
                ubos: s ? [{ id: "ubo-1", name: "", surname: "" }] : [],
                canAddUbo: s,
                hasUbos: s,
                errorMessage: "",
                addressSuggestions: [],
                _nextUboId: 2,
                _searchQuery: "",
            };
        },
        states: {
            idle: { on: { LOAD: [{ target: "loading", guard: "hasFlowId" }, { target: "form" }] } },
            loading: {
                invoke: {
                    id: "fetchEkybModuleConfig",
                    src: "fetchEkybModuleConfig",
                    onDone: { target: "form", actions: "applyFetchedConfig" },
                    onError: "form",
                },
            },
            form: {
                initial: "inputting",
                states: {
                    inputting: {
                        on: {
                            DATA_CHANGED: { actions: ["updateField", "clearFieldValidationError"] },
                            VALIDATE_FIELD: { actions: "validateFormField" },
                            SUBMIT: { target: "validatingSubmit" },
                        },
                    },
                    searching: {
                        invoke: {
                            id: "debounceSearch",
                            src: "debounceSearch",
                            input: ({ context: e }) => ({ query: e._searchQuery }),
                        },
                        on: {
                            DATA_CHANGED: { actions: ["updateField", "clearFieldValidationError"] },
                            VALIDATE_FIELD: { actions: "validateFormField" },
                            RESULTS: { target: "inputting", actions: "setAddressSuggestions" },
                        },
                    },
                    validatingSubmit: {
                        entry: "computeValidationResult",
                        always: [
                            { guard: "hasNoValidationErrors", target: "#ekyb.submitting" },
                            { target: "inputting" },
                        ],
                    },
                },
                on: {
                    SET_COUNTRY: { guard: "isSupportedCountry", actions: "setCountry" },
                    ADD_UBO: { guard: "canAddUbo", actions: "addUbo" },
                    REMOVE_UBO: { guard: "isValidUboIndex", actions: "removeUbo" },
                    SET_UBO_FIELD: { guard: "isValidUboIndex", actions: "setUboField" },
                    SEARCH_ADDRESS: {
                        target: ".searching",
                        actions: (0, a.r)(({ event: e }) => ({ _searchQuery: e.query, addressSuggestions: [] })),
                    },
                    SELECT_ADDRESS: { target: ".inputting", actions: "fillAddressFields" },
                    CLOSE: { target: "closed" },
                },
            },
            submitting: {
                invoke: {
                    id: "submitEkyb",
                    src: "submitEkyb",
                    input: ({ context: e }) =>
                        (function (e) {
                            let t = e.ubos
                                    .filter((e) => e.name.trim() || e.surname.trim())
                                    .map((e) => `${e.name.trim()} ${e.surname.trim()}`.trim()),
                                r = { country: e.country, plugins: ["ekyb"], uboNames: t };
                            for (let t of e.fields) {
                                let s = e.values[t.name];
                                void 0 !== s && "" !== s && (r[t.name] = s);
                            }
                            return r;
                        })(e),
                    onDone: { target: "success" },
                    onError: { target: "error", actions: "setErrorMessage" },
                },
            },
            success: { after: { 3e3: "finished" } },
            error: { on: { RETRY: { target: "form", actions: "clearErrorMessage" }, CLOSE: { target: "closed" } } },
            finished: { type: "final" },
            closed: { type: "final" },
        },
    });
function R(e) {
    let t = (0, n.o)(e.value);
    if (void 0 !== t)
        switch (t) {
            case "idle":
            case "loading":
            case "form":
                return "eKYB.default";
            case "submitting":
                return "eKYB.processing";
            case "success":
            case "finished":
                return "eKYB.success";
            case "error":
                return "eKYB.error";
            default:
                return;
        }
}
function w(e) {
    let { context: t } = e;
    return e.matches("idle") || e.matches("loading")
        ? { status: "loading" }
        : e.matches("form")
          ? {
                status: "form",
                country: t.country,
                availableCountries: t.availableCountries,
                fields: t.fields,
                values: t.values,
                validationErrors: t.validationErrors,
                isValid: 0 === Object.keys(t.validationErrors ?? {}).length,
                ubos: t.ubos,
                canAddUbo: t.canAddUbo,
                addressSuggestions: t.addressSuggestions,
            }
          : e.matches("submitting")
            ? { status: "submitting" }
            : e.matches("success")
              ? { status: "success" }
              : e.matches("error")
                ? { status: "error", errorMessage: t.errorMessage }
                : e.matches("finished")
                  ? { status: "finished" }
                  : e.matches("closed")
                    ? { status: "closed" }
                    : { status: "loading" };
}
function M({ actor: e, trackElementClicked: t }) {
    return {
        load() {
            e.send({ type: "LOAD" });
        },
        setCountry(t) {
            e.send({ type: "SET_COUNTRY", country: t });
        },
        setField(t, r) {
            e.send({ type: "DATA_CHANGED", name: t, value: r });
        },
        validateField(t) {
            e.send({ type: "VALIDATE_FIELD", name: t });
        },
        addUbo() {
            (t?.("addUbo"), e.send({ type: "ADD_UBO" }));
        },
        removeUbo(r) {
            (t?.(`removeUbo.${r}`), e.send({ type: "REMOVE_UBO", index: r }));
        },
        setUboField(t, r, s) {
            e.send({ type: "SET_UBO_FIELD", index: t, field: r, value: s });
        },
        searchAddress(t) {
            e.send({ type: "SEARCH_ADDRESS", query: t });
        },
        selectAddress(t) {
            e.send({ type: "SELECT_ADDRESS", suggestion: t });
        },
        submit() {
            (t?.("submit"), e.send({ type: "SUBMIT" }));
        },
        retry() {
            (t?.("retry"), e.send({ type: "RETRY" }));
        },
        close() {
            (t?.("close"), e.send({ type: "CLOSE" }));
        },
    };
}
function $(e) {
    return (0, a.l)({
        actor: (0, a.s)(x, { input: { config: e.config } }).start(),
        mapState: w,
        createApi: M,
        instrumentation: (0, n.s)(n.n.ekyb, { getEventScreenName: R }),
    });
}
(r(673661), r(502220));
