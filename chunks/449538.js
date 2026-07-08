s.d(t, { cd: () => d, if: () => O, OJ: () => l, ekybMachine: () => N, j5: () => L }), s(257300);
var r = s(209688),
    i = s(588233),
    n = s(171251);
s(886421), s(799201), s(401959);
var u = s(64755),
    a = s(354805),
    o = s(711177);
let d = ["BR", "CN", "FR", "DE", "IL", "IT", "MX", "ES", "GB", "US"],
    l = ["CM", "KE", "NG"],
    c = [...d, ...l],
    b = new Set(c),
    m = [
        "name-user_input",
        "taxId-user_input",
        "street-user_input",
        "houseNo-user_input",
        "address2-user_input",
        "city-user_input",
        "state-user_input",
        "postalCode-user_input",
    ],
    f = {
        "name-user_input": "businessName",
        "street-user_input": "street",
        "houseNo-user_input": "houseNo",
        "address2-user_input": "addressLine2",
        "city-user_input": "city",
        "state-user_input": "state",
        "postalCode-user_input": "postalCode",
        "taxId-user_input": "taxId",
    },
    p = ["BR"],
    h = ["NG", "CM", "KE"],
    g = [],
    y = ["BR", "GB", "FR"],
    U = ["street", "houseNo", "addressLine2", "city", "state", "postalCode"],
    S = ["ubo"],
    _ = [
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
    k = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
    E = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
function v(e, t) {
    let s = 11 - (t.reduce((t, s, r) => t + Number.parseInt(e.charAt(r), 10) * s, 0) % 11);
    return s >= 10 && (s = 0), s.toString();
}
let C = new Set(["ekyb.error.requiredField"]),
    A = { name: "ekyb.uboName", surname: "ekyb.uboSurname" };
function I(e, t, s) {
    let r = e.filter((e) => "ubos-user_input" !== e && !e.startsWith("socure"));
    return (
        "GB" === t && (r = r.filter((e) => "state-user_input" !== e)),
        "MX" === t &&
            (r = r.filter((e) => {
                if ("ubos-user_input" === e) return !1;
                let t = f[e] ?? e;
                return !U.includes(t) || "postalCode" === t;
            })),
        [...r]
            .sort((e, t) => {
                let s = m.indexOf(e),
                    r = m.indexOf(t);
                return -1 !== s && -1 !== r ? s - r : -1 !== s ? -1 : +(-1 !== r);
            })
            .map((e) => {
                let s = f[e] ?? e,
                    r =
                        !!S.includes(s) ||
                        ("businessName" === s ? g.includes(t) : "addressLine2" === s || (!U.includes(s) && !1)),
                    i = { name: s, type: "text", label: `ekyb.${s}`, required: !r };
                return (
                    "taxId" === s &&
                        ((i.required = !0),
                        "CN" === t && (i.label = "verification.labels.prcId"),
                        "BR" === t && (i.displayLabel = "CPF")),
                    "postalCode" === s && (i.maxLength = (0, a.c)(t)),
                    "state" === s &&
                        "US" === t &&
                        ((i.type = "dropdown"), (i.options = a.u), (i.placeholder = "verification.placeholder.state")),
                    i
                );
            })
    );
}
function B(e) {
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
function x(e, t, s, r, i) {
    let n = {};
    for (let r of e) {
        let e = t[r.name],
            i = (function (e, t, s, r) {
                let i = (t ?? "").trim();
                if (s && !i) return "ekyb.error.requiredField";
                if ("taxId" === e) {
                    if (
                        p.includes(r) &&
                        i &&
                        !(function (e) {
                            if (!e || "string" != typeof e) return !1;
                            let t = e.trim();
                            if (
                                (18 === t.length && (t = t.replace(/\./g, "").replace(/\//g, "").replace(/-/g, "")),
                                14 !== t.length || !/^\d+$/.test(t) || _.includes(t))
                            )
                                return !1;
                            let s = v(t, k);
                            if (t.charAt(12) !== s) return !1;
                            let r = v(t, E);
                            return t.charAt(13) === r;
                        })(i)
                    )
                        return "ekyb.error.invalidTaxId";
                    if (h.includes(r) && !i) return;
                }
                if ("postalCode" === e && i && !(0, a.l)(i, r)) return (0, a.s)(r);
            })(r.name, e, r.required, s);
        i && (n[r.name] = i);
    }
    if (!y.includes(s)) {
        let s = {};
        for (let e of U) s[e] = t[e];
        if (
            !U.some((e) => {
                let t = s[e];
                return void 0 !== t && "" !== t.trim();
            })
        )
            for (let s of e.filter((e) => U.includes(e.name) && e.required))
                n[s.name] || (t[s.name] ?? "").trim() || (n[s.name] = "ekyb.error.requiredField");
    }
    if (i)
        for (let e = 0; e < r.length; e++) {
            let t = 0 === e,
                s = "" !== r[e].name.trim() || "" !== r[e].surname.trim();
            (t || s) &&
                (r[e].name.trim() || (n[`ubo-${e}-name`] = "ekyb.error.requiredField"),
                r[e].surname.trim() || (n[`ubo-${e}-surname`] = "ekyb.error.requiredField"));
        }
    return { errors: n, isValid: 0 === Object.keys(n).length };
}
function O(e, t, s, r, i) {
    let n = {},
        u = {},
        o = new Map(i?.map((e) => [e.name, e.displayLabel ?? e.label]));
    for (let [i, d] of Object.entries(e)) {
        let e = C.has(d);
        if (e && (s || t[i])) {
            n[i] = a.r;
            let e = o.get(i);
            if (e) u[i] = { fieldName: e };
            else {
                let e = i.match(/^ubo-\d+-(name|surname)$/);
                e && (u[i] = { fieldName: A[e[1]] ?? i });
            }
        } else !e && t[i] && (n[i] = d);
        if (n[i] && "postalCode" === i && a.a.has(d)) {
            let e = a.i[r];
            if (void 0 !== e) u[i] = { ...(u[i] ?? {}), length: e };
            else {
                let e = (0, a.c)(r);
                ("US" === r || "BR" === r) && (e -= 1), (u[i] = { ...(u[i] ?? {}), maxLength: e });
            }
        }
    }
    return { displayErrors: n, errorParams: u };
}
async function F(e) {
    let t = (await (0, o.t)(e)).flowModules.find((e) => "EKYB" === e.key);
    if (!t) throw Error("EKYB module not found in flow configuration");
    return t.configuration;
}
async function w(e, t) {
    let s = await r.t.post(n.t.ekybSubmit, e, { signal: t });
    if (!s.ok) throw Error(`POST ${n.t.ekybSubmit} failed: ${s.status} ${s.statusText}`);
    return s.data;
}
let M = (0, u.a)(async ({ signal: e }) => F(e)),
    T = (0, u.a)(async ({ input: e, signal: t }) => w(e, t)),
    N = (0, u.t)({
        types: { context: {}, events: {}, input: {} },
        actors: { fetchEkybModuleConfig: M, submitEkyb: T, debounceSearch: a.t },
        actions: {
            applyFetchedConfig: (0, u.r)(({ event: e }) => {
                let t = e.output,
                    s = {
                        checkBusinessName: t.checkBusinessName,
                        checkAddress: t.checkAddress,
                        checkTaxId: t.checkTaxId,
                        checkUniqueBeneficialOwner: t.checkUniqueBeneficialOwner,
                    },
                    r = B(s),
                    i = !1 !== s.checkUniqueBeneficialOwner && r.includes("ubos-user_input"),
                    n = I(r, "US", i),
                    u = { country: "US" },
                    a = i ? [{ id: "ubo-1", name: "", surname: "" }] : [],
                    { errors: o, isValid: d } = x(n, u, "US", a, i);
                return {
                    config: s,
                    country: "US",
                    availableCountries: c,
                    fields: n,
                    values: u,
                    errors: o,
                    isValid: d,
                    ubos: a,
                    canAddUbo: i,
                    hasUbos: i,
                    submitAttempted: !1,
                    addressSuggestions: [],
                    _nextUboId: 2,
                    _searchQuery: "",
                };
            }),
            setCountry: (0, u.r)(({ context: e, event: t }) => {
                let s,
                    { country: r } = t,
                    i = B(e.config),
                    n = !1 !== e.config.checkUniqueBeneficialOwner && i.includes("ubos-user_input") && "MX" !== r,
                    u = I(i, r, n),
                    a = e._nextUboId;
                n
                    ? e.ubos.length > 0
                        ? (s = e.ubos)
                        : ((s = [{ id: `ubo-${a}`, name: "", surname: "" }]), (a += 1))
                    : (s = []);
                let o = { ...e.values, country: r, state: "" },
                    { errors: d, isValid: l } = x(u, o, r, s, n);
                return {
                    country: r,
                    fields: u,
                    values: o,
                    errors: d,
                    isValid: l,
                    ubos: s,
                    canAddUbo: n && s.length < 8,
                    hasUbos: n,
                    _nextUboId: a,
                };
            }),
            updateField: (0, u.r)(({ context: e, event: t }) => {
                var s;
                let { name: r, value: i } = t,
                    n = ((s = e.country), "postalCode" === r ? (0, a.o)(i, s) : i),
                    u = { ...e.values, [r]: n },
                    { errors: o, isValid: d } = x(e.fields, u, e.country, e.ubos, e.hasUbos);
                return { values: u, errors: o, isValid: d };
            }),
            addUbo: (0, u.r)(({ context: e }) => {
                let t = e._nextUboId,
                    s = [...e.ubos, { id: `ubo-${t}`, name: "", surname: "" }],
                    r = s.length < 8,
                    { errors: i, isValid: n } = x(e.fields, e.values, e.country, s, e.hasUbos);
                return { ubos: s, canAddUbo: r, errors: i, isValid: n, _nextUboId: t + 1 };
            }),
            removeUbo: (0, u.r)(({ context: e, event: t }) => {
                let { index: s } = t,
                    r = e.ubos.filter((e, t) => t !== s),
                    i = r.length < 8,
                    { errors: n, isValid: u } = x(e.fields, e.values, e.country, r, e.hasUbos);
                return { ubos: r, canAddUbo: i, errors: n, isValid: u };
            }),
            setUboField: (0, u.r)(({ context: e, event: t }) => {
                let { index: s, field: r, value: i } = t,
                    n = e.ubos.map((e, t) => (t === s ? { ...e, [r]: i } : e)),
                    { errors: u, isValid: a } = x(e.fields, e.values, e.country, n, e.hasUbos);
                return { ubos: n, errors: u, isValid: a };
            }),
            setErrorMessage: (0, u.r)(({ event: e }) => ({ errorMessage: String(e.error ?? "verification.error") })),
            clearErrorMessage: (0, u.r)({ errorMessage: () => "" }),
            markSubmitAttempted: (0, u.r)({ submitAttempted: () => !0 }),
            fillAddressFields: (0, u.r)(({ context: e, event: t }) => {
                let { suggestion: s } = t,
                    r = new Set(e.fields.map((e) => e.name)),
                    { values: i } = (0, a.n)(e.values, {}, s, r),
                    { errors: n, isValid: u } = x(e.fields, i, e.country, e.ubos, e.hasUbos);
                return { values: i, addressSuggestions: [], errors: n, isValid: u };
            }),
            setAddressSuggestions: (0, u.r)(({ event: e }) => ({ addressSuggestions: e.suggestions })),
        },
        guards: {
            hasFlowId: ({ context: e }) => !!e.config.flowId,
            isValid: ({ context: e }) => e.isValid,
            canAddUbo: ({ context: e }) => e.canAddUbo,
            isValidUboIndex: ({ context: e, event: t }) => {
                let { index: s } = t;
                return Number.isInteger(s) && s >= 0 && s < e.ubos.length;
            },
            isSupportedCountry: ({ event: e }) => {
                let { country: t } = e;
                return b.has(t);
            },
        },
    }).createMachine({
        id: "ekyb",
        initial: "idle",
        context: ({ input: e }) => {
            var t;
            let s =
                    (t = e.config).flowId || t.verificationFields
                        ? t
                        : {
                              checkBusinessName: t.checkBusinessName,
                              checkAddress: t.checkAddress,
                              checkTaxId: t.checkTaxId,
                              checkUniqueBeneficialOwner: t.checkUniqueBeneficialOwner,
                          },
                r = B(s),
                i = !1 !== s.checkUniqueBeneficialOwner && r.includes("ubos-user_input"),
                n = I(r, "US", i),
                u = { country: "US" },
                a = i ? [{ id: "ubo-1", name: "", surname: "" }] : [],
                { errors: o, isValid: d } = x(n, u, "US", a, i);
            return {
                config: s,
                country: "US",
                availableCountries: c,
                fields: n,
                values: u,
                errors: o,
                isValid: d,
                ubos: a,
                canAddUbo: i,
                hasUbos: i,
                errorMessage: "",
                submitAttempted: !1,
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
                initial: "idle",
                states: {
                    idle: {},
                    searching: {
                        invoke: {
                            id: "debounceSearch",
                            src: "debounceSearch",
                            input: ({ context: e }) => ({ query: e._searchQuery }),
                        },
                        on: { RESULTS: { target: "idle", actions: "setAddressSuggestions" } },
                    },
                },
                on: {
                    SET_COUNTRY: { guard: "isSupportedCountry", actions: "setCountry" },
                    SET_FIELD: { actions: "updateField" },
                    SEARCH_ADDRESS: {
                        target: ".searching",
                        actions: (0, u.r)(({ event: e }) => ({ _searchQuery: e.query, addressSuggestions: [] })),
                    },
                    SELECT_ADDRESS: { target: ".idle", actions: "fillAddressFields" },
                    ADD_UBO: { guard: "canAddUbo", actions: "addUbo" },
                    REMOVE_UBO: { guard: "isValidUboIndex", actions: "removeUbo" },
                    SET_UBO_FIELD: { guard: "isValidUboIndex", actions: "setUboField" },
                    SUBMIT: [{ target: "submitting", guard: "isValid" }, { actions: "markSubmitAttempted" }],
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
                                s = { country: e.country, plugins: ["ekyb"], uboNames: t };
                            for (let t of e.fields) {
                                let r = e.values[t.name];
                                void 0 !== r && "" !== r && (s[t.name] = r);
                            }
                            return s;
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
                errors: t.errors,
                isValid: t.isValid,
                ubos: t.ubos,
                canAddUbo: t.canAddUbo,
                addressSuggestions: t.addressSuggestions,
                submitAttempted: t.submitAttempted,
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
function D({ actor: e, trackElementClicked: t }) {
    return {
        load() {
            e.send({ type: "LOAD" });
        },
        setCountry(t) {
            e.send({ type: "SET_COUNTRY", country: t });
        },
        setField(t, s) {
            e.send({ type: "SET_FIELD", name: t, value: s });
        },
        addUbo() {
            t?.("addUbo"), e.send({ type: "ADD_UBO" });
        },
        removeUbo(s) {
            t?.(`removeUbo.${s}`), e.send({ type: "REMOVE_UBO", index: s });
        },
        setUboField(t, s, r) {
            e.send({ type: "SET_UBO_FIELD", index: t, field: s, value: r });
        },
        searchAddress(t) {
            e.send({ type: "SEARCH_ADDRESS", query: t });
        },
        selectAddress(t) {
            e.send({ type: "SELECT_ADDRESS", suggestion: t });
        },
        submit() {
            t?.("submit"), e.send({ type: "SUBMIT" });
        },
        retry() {
            t?.("retry"), e.send({ type: "RETRY" });
        },
        close() {
            t?.("close"), e.send({ type: "CLOSE" });
        },
    };
}
function L(e) {
    return (0, u.c)({
        actor: (0, u.s)(N, { input: { config: e.config } }).start(),
        mapState: R,
        createApi: D,
        instrumentation: (0, i.o)(i.n.ekyb),
    });
}
