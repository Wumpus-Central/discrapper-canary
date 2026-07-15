r.d(i, { CpfOcr: () => p });
var t = r(287822),
    s = r(748922),
    a = r(898369),
    n = r(188043),
    l = r(211396);
r(599680);
var c = r(787146),
    u = r(878176),
    d = r(96798),
    o = r(364162),
    p = ({ manager: e, onFinish: i, onError: r }) => {
        let [p, f] = (0, s.u)(() => e ?? (0, o.ll)(), { manageLifecycle: !e }),
            [v, h] = (0, t.p)(!1),
            [C, g] = (0, t.p)(!1),
            [m, b] = (0, t.p)(!1);
        if (
            ((0, s.c)({ status: "finished" === p.status ? "finished" : "loading", onFinish: i }),
            (0, t._)(() => {
                "error" === p.status && r?.(p.error);
            }, [p, r]),
            "idle" === p.status || "loading" === p.status || "submitting" === p.status)
        )
            return (0, t.v)(n.t, {
                className: "IncodeCpfOcrPage",
                children: (0, t.v)("div", {
                    class: "IncodeCpfOcrLoading",
                    children: (0, t.v)(l.t, { fullScreen: !1 }),
                }),
            });
        if ("error" === p.status)
            return (0, t.v)(u.t, {
                status: "failure",
                failureTitle: "N\xe3o foi poss\xedvel verificar o CPF",
                onRetry: () => f.retry(),
            });
        if ("finished" === p.status) return null;
        let I = "inputting" === p.status ? { cpf: p.cpf, isValid: p.isValid } : { cpf: "", isValid: !1 },
            P = 11 === I.cpf.replace(/\D/g, "").length,
            F = C && !I.isValid && (P || (v && !m)) ? "Insira um CPF v\xe1lido" : void 0;
        return (0, t.v)(n.t, {
            className: "IncodeCpfOcrPage",
            title: "Insira e verifique o n\xfamero do seu CPF",
            children: (0, t.v)("div", {
                class: "IncodeCpfOcr",
                children: [
                    (0, t.v)(a.r, { size: 32 }),
                    (0, t.v)(d.t, {
                        id: "cpf-ocr-input",
                        label: "",
                        value: I.cpf,
                        placeholder: "Seu CPF",
                        maxLength: 14,
                        inputMode: "numeric",
                        "aria-label": "CPF",
                        onInput: (e) => {
                            g(!0), f.setCpf(e.target.value);
                        },
                        onFocus: () => {
                            b(!0);
                        },
                        onBlur: () => {
                            b(!1), h(!0);
                        },
                        error: F,
                        showErrorIcon: !0,
                    }),
                    (0, t.v)(a.r, {}),
                    (0, t.v)(c.t, {
                        type: "button",
                        onClick: () => f.submit(),
                        disabled: !I.isValid,
                        "data-testid": "cpf-ocr-continue",
                        children: "Continuar",
                    }),
                ],
            }),
        });
    };
