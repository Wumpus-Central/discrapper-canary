t.d(r, { pX: () => S, curpValidationMachine: () => h, h9: () => p, eI: () => l });
var a = t(768672),
    i = t(368499),
    n = t(288052),
    o = t(168056);
let u =
        /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HMX](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
    l = [
        { value: "NE", label: "Born Abroad" },
        { value: "AS", label: "Aguascalientes" },
        { value: "BC", label: "Baja California" },
        { value: "BS", label: "Baja California Sur" },
        { value: "CC", label: "Campeche" },
        { value: "CL", label: "Coahuila de Zaragoza" },
        { value: "CM", label: "Colima" },
        { value: "CS", label: "Chiapas" },
        { value: "CH", label: "Chihuahua" },
        { value: "DF", label: "Distrito Federal" },
        { value: "DG", label: "Durango" },
        { value: "GT", label: "Guanajuato" },
        { value: "GR", label: "Guerrero" },
        { value: "HG", label: "Hidalgo" },
        { value: "JC", label: "Jalisco" },
        { value: "MC", label: "Estado de M\xe9xico" },
        { value: "MN", label: "Michoacan de Ocampo" },
        { value: "MS", label: "Morelos" },
        { value: "NT", label: "Nayarit" },
        { value: "NL", label: "Nuevo Le\xf3n" },
        { value: "OC", label: "Oaxaca" },
        { value: "PL", label: "Puebla" },
        { value: "QT", label: "Queretaro de Arteaga" },
        { value: "QR", label: "Quintana Roo" },
        { value: "SP", label: "San Luis Potosi" },
        { value: "SL", label: "Sinaloa" },
        { value: "SR", label: "Sonora" },
        { value: "TC", label: "Tabasco" },
        { value: "TS", label: "Tamaulipas" },
        { value: "TL", label: "Tlaxcala" },
        { value: "VZ", label: "Veracruz" },
        { value: "YN", label: "Yucatan" },
        { value: "ZS", label: "Zacatecas" },
    ];
async function s(e) {
    let r = await a.t.get(n.t.ocrData, { signal: e });
    if (!r.ok) throw Error(`GET ${n.t.ocrData} failed: ${r.status} ${r.statusText}`);
    return r.data;
}
async function c(e, r) {
    let t = await a.t.post(n.t.addCurp, { curp: e }, { signal: r });
    if (!t.ok) throw Error(`POST ${n.t.addCurp} failed: ${t.status} ${t.statusText}`);
    return t.data;
}
async function d(e, r) {
    let t = {
            name: e.name,
            firstLastName: e.firstLastName,
            secondLastName: e.secondLastName,
            gender: e.gender,
            birthDate: (function (e) {
                let [r, t, a] = e.split("-");
                return `${a}/${t}/${r}`;
            })(e.birthDate),
            state: e.birthState,
        },
        i = await a.t.post(n.t.addCurpV2, t, { signal: r });
    if (!i.ok) throw Error(`POST ${n.t.addCurpV2} failed: ${i.status} ${i.statusText}`);
    return i.data;
}
let p = [
        {
            key: "name",
            labelKey: "curp.labels.firstName",
            type: "text",
            required: !0,
            autoComplete: "given-name",
            validation: [{ type: "required" }],
        },
        {
            key: "firstLastName",
            labelKey: "curp.labels.firstLast",
            type: "text",
            required: !0,
            autoComplete: "family-name",
            validation: [{ type: "required" }],
        },
        { key: "secondLastName", labelKey: "curp.labels.secondLast", type: "text", required: !1 },
        {
            key: "gender",
            labelKey: "curp.labels.genderV2",
            type: "dropdown",
            required: !0,
            validation: [{ type: "required" }],
        },
        {
            key: "birthDate",
            labelKey: "curp.labels.dob",
            type: "date",
            required: !0,
            autoComplete: "bday",
            validation: [{ type: "required" }],
        },
        {
            key: "birthState",
            labelKey: "curp.labels.birthState",
            type: "dropdown",
            required: !0,
            validation: [{ type: "required" }],
        },
    ],
    g = { key: "curp", labelKey: "curp.placeholder.curp", validation: [{ type: "curpFormat" }] },
    f = () => ({
        required: (e) => (0 === e.trim().length ? "curp.errors.fieldRequired" : void 0),
        curpFormat: (e) => {
            if (0 !== e.trim().length)
                return "string" == typeof e && 18 === e.length && u.test(e.toUpperCase())
                    ? void 0
                    : "curp.errors.invalidCurpFormat";
        },
    }),
    C = (e) => ("string" == typeof e ? e : String(e ?? "")),
    E = (e, r, t) => {
        if (r)
            for (let a of r) {
                let r = t[a.type](e);
                if (r) return r;
            }
    },
    y = (e, r = g) => {
        let t = f();
        return E(C(e), r.validation, t);
    },
    m = { name: "", firstLastName: "", secondLastName: "", gender: "", birthDate: "", birthState: "" },
    v = (e, r, t) => {
        let a = { ...(e ?? {}) };
        return t ? (a[r] = t) : delete a[r], Object.keys(a).length > 0 ? a : void 0;
    },
    h = (0, o.t)({
        types: { context: {}, events: {}, input: {} },
        actors: {
            fetchOcrData: (0, o.a)(async ({ signal: e }) => s(e)),
            verifyCurp: (0, o.a)(async ({ input: e, signal: r }) => c(e.curp, r)),
            generateCurpActor: (0, o.a)(async ({ input: e, signal: r }) => d(e.form, r)),
        },
        actions: {
            setCurpFromOcr: (0, o.r)(({ event: e }) => ({ curp: (e.output?.curp ?? "").toUpperCase() })),
            setCurp: (0, o.r)(({ event: e }) => ({ curp: e.curp.toUpperCase() })),
            clearEnterCurpFieldError: (0, o.r)(({ context: e }) => ({
                enterCurpValidationErrors: ((e, r) => {
                    if (!e?.[r]) return e;
                    let t = { ...e };
                    return delete t[r], Object.keys(t).length > 0 ? t : void 0;
                })(e.enterCurpValidationErrors, "curp"),
            })),
            validateEnterCurpFieldAction: (0, o.r)(({ context: e }) => ({
                enterCurpValidationErrors: v(e.enterCurpValidationErrors, "curp", y(e.curp)),
            })),
            computeEnterCurpValidationResult: (0, o.r)(({ context: e }) => {
                let r = y(e.curp);
                return { enterCurpValidationErrors: r ? { curp: r } : void 0 };
            }),
            resetEnterCurpValidationErrors: (0, o.r)({ enterCurpValidationErrors: () => void 0 }),
            setGenerateForm: (0, o.r)(({ context: e, event: r }) => ({
                generateForm: { ...e.generateForm, ...r.form },
                generateCurpValidationErrors: ((e, r) => {
                    if (!e) return;
                    let t = { ...e };
                    for (let e of r) delete t[e];
                    return Object.keys(t).length > 0 ? t : void 0;
                })(e.generateCurpValidationErrors, Object.keys(r.form)),
            })),
            validateGenerateCurpFieldAction: (0, o.r)(({ context: e, event: r }) => {
                if ("VALIDATE_FIELD" !== r.type || "curp" === r.field) return {};
                let t = ((e, r, t) => {
                    let a = t.find((e) => e.key === r);
                    if (!a) return;
                    let i = f();
                    return E(C(e[r]), a.validation, i);
                })(e.generateForm, r.field, p);
                return { generateCurpValidationErrors: v(e.generateCurpValidationErrors, r.field, t) };
            }),
            computeGenerateValidationResult: (0, o.r)(({ context: e }) => {
                var r;
                let t,
                    a =
                        ((r = e.generateForm),
                        (t = f()),
                        p.reduce((e, a) => {
                            let i = E(C(r[a.key]), a.validation, t);
                            return i && (e[a.key] = i), e;
                        }, {}));
                return { generateCurpValidationErrors: Object.keys(a).length > 0 ? a : void 0 };
            }),
            resetGenerateCurpValidationErrors: (0, o.r)({ generateCurpValidationErrors: () => void 0 }),
            setGeneratedCurp: (0, o.r)(({ event: e }) => {
                let r = e.output?.curp ?? "";
                return { generatedCurp: r, curp: r };
            }),
            decrementRetries: (0, o.r)(({ context: e }) => ({ retriesLeft: Math.max(0, e.retriesLeft - 1) })),
            setFromGenerate: (0, o.r)({ fromGenerate: () => !0 }),
            clearFromGenerate: (0, o.r)({ fromGenerate: () => !1 }),
            setAutoVerify: (0, o.r)({ fromAutoVerify: () => !0 }),
            clearAutoVerify: (0, o.r)({ fromAutoVerify: () => !1 }),
            setError: (0, o.r)(({ event: e }) => ({ error: String(e.error) })),
        },
        guards: {
            hasPrefillFromOcr: ({ context: e }) => !1 !== e.config.prefillFromOcr,
            hasOcrCurp: ({ event: e }) => !!e.output?.curp?.trim(),
            canRetry: ({ context: e }) => e.retriesLeft > 0,
            isDeceased: ({ event: e }) => e.output?.deceasedStatus === "DECEASED",
            isScrapingFallback: ({ event: e }) => e.output?.result === "Attempting validation by scraping method",
            isGenerateSuccess: ({ event: e }) => {
                let r = e.output;
                return !!(r?.success && r?.curp);
            },
            isVerifySuccess: ({ event: e }) => e.output?.success === !0,
            shouldVerify: ({ context: e }) =>
                e.curp.trim().length > 0 && 0 === Object.keys(e.enterCurpValidationErrors ?? {}).length,
            isGenerateFormValidGuard: ({ context: e }) =>
                0 === Object.keys(e.generateCurpValidationErrors ?? {}).length,
        },
    }).createMachine({
        id: "curpValidation",
        initial: "idle",
        context: ({ input: e }) => ({
            config: e.config,
            curp: "",
            generateForm: { ...m },
            retriesLeft: e.config.maxRetries ?? 1,
            generatedCurp: void 0,
            error: void 0,
            fromGenerate: !1,
            fromAutoVerify: !1,
        }),
        states: {
            idle: {
                on: {
                    LOAD: [{ target: "loading", guard: "hasPrefillFromOcr" }, { target: "enterCurp" }],
                    CLOSE: "closed",
                },
            },
            loading: {
                invoke: {
                    id: "fetchOcrData",
                    src: "fetchOcrData",
                    onDone: [
                        { target: "verifying", guard: "hasOcrCurp", actions: ["setCurpFromOcr", "setAutoVerify"] },
                        { target: "enterCurp" },
                    ],
                    onError: { target: "enterCurp" },
                },
                on: { CLOSE: "closed" },
            },
            enterCurp: {
                entry: "resetEnterCurpValidationErrors",
                initial: "inputting",
                states: {
                    inputting: {
                        on: {
                            SET_CURP: { actions: ["setCurp", "clearEnterCurpFieldError"] },
                            VALIDATE_FIELD: {
                                guard: ({ event: e }) => "curp" === e.field,
                                actions: "validateEnterCurpFieldAction",
                            },
                            VERIFY: { target: "validatingVerify" },
                            SWITCH_TO_GENERATE: { target: "#curpValidation.generateCurp", actions: "setFromGenerate" },
                        },
                    },
                    validatingVerify: {
                        entry: "computeEnterCurpValidationResult",
                        always: [
                            { guard: "shouldVerify", target: "#curpValidation.verifying", actions: "clearAutoVerify" },
                            { target: "inputting" },
                        ],
                    },
                },
                on: { CLOSE: "#curpValidation.closed" },
            },
            verifying: {
                invoke: {
                    id: "verifyCurp",
                    src: "verifyCurp",
                    input: ({ context: e }) => ({ curp: e.curp }),
                    onDone: [{ target: "success", guard: "isVerifySuccess" }, { target: "failure" }],
                    onError: { target: "failure", actions: "setError" },
                },
                on: { CLOSE: "closed" },
            },
            success: { after: { 3e3: "finished" }, on: { CLOSE: "closed" } },
            failure: {
                on: {
                    RETRY: [
                        {
                            target: "generateCurp",
                            guard: ({ context: e }) => e.retriesLeft > 0 && e.fromGenerate,
                            actions: "decrementRetries",
                        },
                        {
                            target: "enterCurp",
                            guard: ({ context: e }) => e.retriesLeft > 0 && !e.fromGenerate,
                            actions: ["decrementRetries", "clearFromGenerate"],
                        },
                    ],
                    CLOSE: "closed",
                },
                after: { 3e3: [{ target: "finished", guard: ({ context: e }) => e.retriesLeft <= 0 }] },
            },
            generateCurp: {
                entry: "resetGenerateCurpValidationErrors",
                initial: "inputting",
                states: {
                    inputting: {
                        on: {
                            SET_GENERATE_FORM: { actions: "setGenerateForm" },
                            VALIDATE_FIELD: {
                                guard: ({ event: e }) => "curp" !== e.field,
                                actions: "validateGenerateCurpFieldAction",
                            },
                            GENERATE: { target: "validatingGenerate" },
                        },
                    },
                    validatingGenerate: {
                        entry: "computeGenerateValidationResult",
                        always: [
                            { guard: "isGenerateFormValidGuard", target: "#curpValidation.generating" },
                            { target: "inputting" },
                        ],
                    },
                },
                on: { CLOSE: "#curpValidation.closed" },
            },
            generating: {
                invoke: {
                    id: "generateCurpActor",
                    src: "generateCurpActor",
                    input: ({ context: e }) => ({ form: e.generateForm }),
                    onDone: [
                        { target: "finished", guard: "isScrapingFallback" },
                        { target: "finished", guard: "isDeceased" },
                        { target: "confirmCurp", guard: "isGenerateSuccess", actions: "setGeneratedCurp" },
                        { target: "generateError", actions: "setFromGenerate" },
                    ],
                    onError: { target: "generateError", actions: ["setFromGenerate", "setError"] },
                },
                on: { CLOSE: "closed" },
            },
            confirmCurp: { on: { CONFIRM: { target: "verifying", actions: "clearAutoVerify" }, CLOSE: "closed" } },
            generateError: {
                on: {
                    RETRY: { target: "generateCurp", guard: "canRetry", actions: "decrementRetries" },
                    CLOSE: "closed",
                },
                after: { 3e3: [{ target: "finished", guard: ({ context: e }) => e.retriesLeft <= 0 }] },
            },
            finished: { type: "final" },
            closed: { type: "final" },
        },
    }),
    b = (e) => 0 === Object.keys(e ?? {}).length;
function V(e) {
    let r = (0, i.o)(e.value);
    if (void 0 !== r)
        switch (r) {
            case "idle":
            case "enterCurp":
                return "CURP.EnterCURP.default";
            case "loading":
                return "CURP.EnterCURP.processing";
            case "verifying":
                return "CURP.EnterCURP.verifying";
            case "success":
            case "finished":
                return "CURP.EnterCURP.Verified";
            case "failure":
                return "CURP.EnterCURP.notVerify";
            case "generateCurp":
                return "CURP.Gene.default";
            case "generating":
                return "CURP.Gene.generating";
            case "confirmCurp":
                return "CURP.Gene.confirm";
            case "generateError":
                return "CURP.Gene.error";
            default:
                return;
        }
}
function L(e) {
    let { context: r } = e;
    return e.matches("idle")
        ? { status: "idle" }
        : e.matches("loading")
          ? { status: "loading" }
          : e.matches("enterCurp")
            ? {
                  status: "enterCurp",
                  curp: r.curp,
                  isValid: b(r.enterCurpValidationErrors),
                  validationErrors: r.enterCurpValidationErrors,
              }
            : e.matches("verifying")
              ? { status: "verifying" }
              : e.matches("success")
                ? { status: "success" }
                : e.matches("failure")
                  ? { status: "failure", retriesLeft: r.retriesLeft, fromAutoVerify: r.fromAutoVerify }
                  : e.matches("generateCurp")
                    ? {
                          status: "generateCurp",
                          form: r.generateForm,
                          isValid: b(r.generateCurpValidationErrors),
                          validationErrors: r.generateCurpValidationErrors,
                      }
                    : e.matches("generating")
                      ? { status: "generating" }
                      : e.matches("confirmCurp")
                        ? { status: "confirmCurp", curp: r.curp }
                        : e.matches("generateError")
                          ? { status: "generateError", retriesLeft: r.retriesLeft }
                          : e.matches("finished")
                            ? { status: "finished" }
                            : e.matches("closed")
                              ? { status: "closed" }
                              : { status: "idle" };
}
function G({ actor: e, trackElementClicked: r }) {
    return {
        load() {
            e.send({ type: "LOAD" });
        },
        setCurp(r) {
            e.send({ type: "SET_CURP", curp: r });
        },
        validateField(r) {
            e.send({ type: "VALIDATE_FIELD", field: r });
        },
        verify() {
            r?.("verify"), e.send({ type: "VERIFY" });
        },
        switchToGenerate() {
            r?.("switchToGenerate"), e.send({ type: "SWITCH_TO_GENERATE" });
        },
        setGenerateForm(r) {
            e.send({ type: "SET_GENERATE_FORM", form: r });
        },
        generate() {
            r?.("generate"), e.send({ type: "GENERATE" });
        },
        confirmGenerated() {
            r?.("confirmGenerated"), e.send({ type: "CONFIRM" });
        },
        retry() {
            r?.("retry"), e.send({ type: "RETRY" });
        },
        close() {
            r?.("close"), e.send({ type: "CLOSE" });
        },
    };
}
function S(e) {
    return (0, o.l)({
        actor: (0, o.s)(h, { input: { config: e.config } }).start(),
        mapState: L,
        createApi: G,
        instrumentation: (0, i.s)(i.n.curpValidation, { getEventScreenName: V }),
    });
}
