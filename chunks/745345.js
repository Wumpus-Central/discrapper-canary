r.d(t, { idOcrStateMachine: () => E, W: () => p, Ti: () => S });
var a = r(209688),
    i = r(588233),
    n = r(171251),
    o = r(64755),
    s = r(260872),
    d = class {
        utcToIsoDateString(e) {
            if (null == e || "" === e) return "";
            let t = new Date(e);
            return Number.isNaN(t.getTime())
                ? ""
                : `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`;
        }
        parseIsoDateStringToEpochMs(e) {
            return Date.parse(e);
        }
        getAgeInYears(e, t) {
            let r = new Date(t),
                a =
                    "string" == typeof e && /^\d{4}-\d{2}-\d{2}$/.test(e)
                        ? (() => {
                              let [t, r, a] = e.split("-").map(Number);
                              return new Date(t, r - 1, a);
                          })()
                        : new Date(e),
                i = r.getFullYear() - a.getFullYear(),
                n = r.getMonth() - a.getMonth();
            return (n < 0 || (0 === n && r.getDate() < a.getDate())) && i--, i;
        }
    };
let c = new d();
async function l(e, t) {
    let r = t ? n.t.ocrDataSecondId : n.t.ocrData,
        i = await a.t.get(r, { signal: e });
    if (!i.ok) throw Error(`GET ${r} failed: ${i.status} ${i.statusText}`);
    return i.data;
}
async function u(e, t, r) {
    let i = r ? n.t.updateEditableOcrDataSecondId : n.t.updateEditableOcrData,
        o = await a.t.put(
            i,
            ((e) => {
                let t = { ...e },
                    r = t.name?.trim();
                if (
                    (r && (t.name = r),
                    r && !t.firstName?.trim() && !t.paternalLastName?.trim() && !t.maternalLastName?.trim())
                ) {
                    let e = r.split(/\s+/).filter(Boolean);
                    3 === e.length && ((t.firstName = e[0]), (t.paternalLastName = e[1]), (t.maternalLastName = e[2]));
                }
                let a = {};
                for (let e of Object.keys(t)) {
                    let r = t[e];
                    if (void 0 !== r) {
                        if ("birthDate" === e) {
                            a[e] = c.parseIsoDateStringToEpochMs(r);
                            continue;
                        }
                        a[e] = "string" == typeof r ? r.trim() : r;
                    }
                }
                return a;
            })(e),
            { signal: t },
        );
    if (!o.ok) throw Error(`PUT failed: ${i} failed: ${o.status} ${o.statusText}`);
    return o.data;
}
let m = [
        "65985b7ec335fa20effa547b",
        "657b823ddb312196b5dd30f8",
        "659843c207413e34c407fc1d",
        "657c8b7a188817b6ec04b26c",
        "6793bba8845d50f53f5fb910",
        "679826a35ec9927c65407873",
        "6838c03fae866c13e63fbaf4",
        "681a14fb37a49f2319cbf359",
        "68e5318406c77c2b6993ed8f",
        "68e531531a6892418eecd21f",
        "68e5314706c77c2b6993eb99",
    ],
    g = [
        {
            key: "documentNumber",
            labelKey: "userData.cpf",
            type: "text",
            validation: [{ type: "required" }, { type: "cpf" }],
            required: !0,
        },
    ],
    f = [
        { key: "name", labelKey: "userData.fullName", type: "text", validation: [{ type: "required" }], required: !0 },
        {
            key: "birthDate",
            labelKey: "userData.dateOfBirth",
            type: "date",
            validation: [{ type: "required" }, { type: "minAge", years: 18 }],
            required: !0,
        },
        {
            key: "gender",
            labelKey: "userData.sex",
            type: "radio",
            options: [
                { label: "common.male", value: "M" },
                { label: "common.female", value: "F" },
            ],
            required: !1,
        },
        {
            key: "issuingCountry",
            labelKey: "userData.issuingCountry",
            type: "text",
            validation: [{ type: "required" }],
            required: !0,
        },
        {
            key: "documentNumber",
            labelKey: "userData.documentNumber",
            type: "text",
            validation: [{ type: "required" }],
            required: !0,
        },
        {
            key: "address",
            labelKey: "userData.address",
            type: "text",
            validation: [{ type: "required" }],
            required: !0,
        },
    ],
    p = (e) => {
        let { flowId: t } = e;
        return t && m.includes(t) ? g : f;
    },
    D = new d(),
    y = () => ({
        required: (e, t) => (e.trim() ? void 0 : "modifiableOCR.cantBeEmpty"),
        minAge: (e, t) => {
            if (e.trim() && "minAge" === t.type)
                return D.getAgeInYears(e, (0, i.x)()) < t.years ? "modifiableOCR.ageRange" : void 0;
        },
        cpf: (e, t) => {
            if ("cpf" === t.type && e.trim()) return (0, s.t)(e) ? void 0 : "verification.errors.invalidTaxId";
        },
    }),
    b = (e) => ("string" == typeof e ? e.trim() : String(e ?? "")),
    v = (e, t, r) => {
        if (t.validation)
            for (let a of t.validation) {
                let t = r[a.type](e, a);
                if (t) return t;
            }
    },
    h = (e, t) => {
        let r = y();
        return t.reduce((t, a) => {
            let i = v(b(e[a.key]), a, r);
            return i && (t[a.key] = i), t;
        }, {});
    },
    O = () => ({}),
    E = (0, o.t)({
        types: { context: {}, events: {}, input: {} },
        actors: {
            getOcrData: (0, o.a)(async ({ input: e, signal: t }) => l(t, e.isSecondId)),
            updateOcrData: (0, o.a)(async ({ input: e, signal: t }) => u(e.params, t, e.isSecondId)),
        },
        actions: {
            setInitialData: (0, o.r)(({ event: e }) => {
                var t;
                let r;
                return {
                    formData: {
                        name:
                            ((t = r = e.output),
                            t.name?.fullName
                                ? t.name.fullName
                                : [
                                      t.name?.givenName ?? t.givenName ?? t.firstName,
                                      t.name?.paternalLastName ?? t.fathersSurname,
                                      t.name?.maternalLastName ?? t.mothersSurname,
                                  ]
                                      .filter(Boolean)
                                      .join(" ")
                                      .trim() ||
                                  (t.fullNameMrz ?? "")),
                        firstName: r.firstName ?? r.givenName ?? r.name?.givenName ?? "",
                        lastName: r.fathersSurname ?? r.name?.paternalLastName ?? "",
                        paternalLastName: r.fathersSurname ?? r.name?.paternalLastName ?? "",
                        maternalLastName: r.mothersSurname ?? r.name?.maternalLastName ?? "",
                        birthDate: c.utcToIsoDateString(r.birthDate),
                        gender: r.gender ?? "",
                        address: r.address ?? "",
                        documentNumber: r.documentNumber ?? "",
                        personalNumber: r.personalNumber ?? "",
                        curp: r.curp ?? "",
                        issuingCountry: r.issuingCountry ?? "",
                        expireAt: r.expireAt,
                        email: "",
                    },
                    editedFields: {},
                    validationErrors: void 0,
                    error: void 0,
                };
            }),
            updateField: (0, o.r)(({ context: e, event: t }) => {
                let { field: r, value: a } = t;
                return { formData: { ...e.formData, [r]: a }, editedFields: { ...e.editedFields, [r]: a } };
            }),
            clearFieldValidationError: (0, o.r)(({ context: e, event: t }) => {
                if ("DATA_CHANGED" !== t.type) return {};
                let { field: r } = t,
                    a = e.validationErrors;
                if (!a?.[r]) return {};
                let i = { ...a };
                return delete i[r], { validationErrors: Object.keys(i).length > 0 ? i : void 0 };
            }),
            setOcrValidationErrors: (0, o.r)(({ context: e }) => ({ validationErrors: h(e.formData, p(e.config)) })),
            validateFormField: (0, o.r)(({ context: e, event: t }) => {
                if ("VALIDATE_FIELD" !== t.type) return {};
                let { field: r } = t,
                    a = ((e, t, r) => {
                        let a = r.find((e) => e.key === t);
                        if (!a) return;
                        let i = y();
                        return v(b(e[a.key]), a, i);
                    })(e.formData, r, p(e.config)),
                    i = { ...(e.validationErrors ?? {}) };
                return a ? (i[r] = a) : delete i[r], { validationErrors: Object.keys(i).length > 0 ? i : void 0 };
            }),
            setError: (0, o.r)(({ event: e }) => ({ error: String(e.error) })),
            beginSecondIdOcrPhase: (0, o.r)(() => ({
                activeOcrDocument: "second",
                editedFields: {},
                validationErrors: void 0,
            })),
            resetForRetry: (0, o.r)(() => ({
                activeOcrDocument: "first",
                formData: O(),
                editedFields: {},
                error: void 0,
                validationErrors: void 0,
            })),
            computeValidationResult: (0, o.r)(({ context: e }) => ({ validationErrors: h(e.formData, p(e.config)) })),
        },
        guards: {
            isOcrEditable: ({ context: e }) => !0 === e.config.editableOcr,
            shouldLoadSecondOcrAfterFirst: ({ context: e }) =>
                !0 === e.config.secondId && "first" === e.activeOcrDocument,
            isOcrFormValid: ({ context: e }) => 0 === Object.keys(e.validationErrors ?? {}).length,
            shouldSubmit: ({ context: e }) =>
                0 === Object.keys(e.validationErrors ?? {}).length && Object.keys(e.editedFields).length > 0,
            shouldProceedWithoutSubmitToSecondId: ({ context: e }) =>
                0 === Object.keys(e.validationErrors ?? {}).length &&
                0 === Object.keys(e.editedFields).length &&
                !0 === e.config.secondId &&
                "first" === e.activeOcrDocument,
        },
    }).createMachine({
        id: "idOcr",
        initial: "idle",
        context: ({ input: e }) => {
            let t = O();
            return { config: e.config, formData: t, editedFields: {}, activeOcrDocument: "first" };
        },
        states: {
            idle: { on: { LOAD: [{ target: "loading" }] } },
            loading: {
                invoke: {
                    src: "getOcrData",
                    input: ({ context: e }) => ({ isSecondId: "second" === e.activeOcrDocument }),
                    onDone: [
                        { target: "inputting", guard: "isOcrEditable", actions: "setInitialData" },
                        { target: "readonly", actions: "setInitialData" },
                    ],
                    onError: { target: "error", actions: "setError" },
                },
            },
            readonly: {
                on: {
                    CONTINUE: [
                        { target: "loading", guard: "shouldLoadSecondOcrAfterFirst", actions: "beginSecondIdOcrPhase" },
                        { target: "success" },
                    ],
                },
            },
            inputting: {
                on: {
                    DATA_CHANGED: { actions: ["updateField", "clearFieldValidationError"] },
                    VALIDATE_FIELD: { actions: "validateFormField" },
                    CONTINUE: { target: "validatingContinue" },
                },
            },
            validatingContinue: {
                entry: "computeValidationResult",
                always: [
                    { guard: "shouldSubmit", target: "submitting" },
                    {
                        guard: "shouldProceedWithoutSubmitToSecondId",
                        target: "loading",
                        actions: "beginSecondIdOcrPhase",
                    },
                    { guard: "isOcrFormValid", target: "success" },
                    { target: "inputting" },
                ],
            },
            submitting: {
                invoke: {
                    src: "updateOcrData",
                    input: ({ context: e }) => ({
                        params: e.editedFields,
                        isSecondId: "second" === e.activeOcrDocument,
                    }),
                    onDone: [
                        { target: "loading", guard: "shouldLoadSecondOcrAfterFirst", actions: "beginSecondIdOcrPhase" },
                        { target: "success" },
                    ],
                    onError: { target: "error", actions: "setError" },
                },
            },
            error: { on: { RETRY: { target: "loading", actions: "resetForRetry" } } },
            success: { after: { 3e3: "finished" } },
            finished: { type: "final" },
        },
    });
function N(e) {
    let { context: t } = e,
        r = !0 === t.config.editableOcr;
    return e.matches("idle")
        ? { status: "idle" }
        : e.matches("loading")
          ? { status: "loading", ocrDocument: t.activeOcrDocument }
          : e.matches("readonly")
            ? { status: "readonly", formData: t.formData, editableOcr: r, ocrDocument: t.activeOcrDocument }
            : e.matches("inputting")
              ? {
                    status: "inputting",
                    formData: t.formData,
                    editedFields: t.editedFields,
                    editableOcr: r,
                    ocrDocument: t.activeOcrDocument,
                    validationErrors: t.validationErrors,
                }
              : e.matches("submitting")
                ? { status: "submitting", ocrDocument: t.activeOcrDocument }
                : e.matches("success")
                  ? { status: "success" }
                  : e.matches("finished")
                    ? { status: "finished" }
                    : e.matches("error")
                      ? { status: "error", error: t.error ?? "Unknown error" }
                      : { status: "idle" };
}
function F({ actor: e, trackElementClicked: t }) {
    return {
        load() {
            e.send({ type: "LOAD" });
        },
        setField(t, r) {
            e.send({ type: "DATA_CHANGED", field: t, value: r });
        },
        validateField(t) {
            e.send({ type: "VALIDATE_FIELD", field: t });
        },
        continue() {
            e.send({ type: "CONTINUE" }), t?.("continue");
        },
        retry() {
            e.send({ type: "RETRY" });
        },
    };
}
function S(e) {
    return (0, o.c)({
        actor: (0, o.s)(E, { input: { config: e.config } }).start(),
        mapState: N,
        createApi: F,
        instrumentation: (0, i.o)(i.n.idOcr),
    });
}
