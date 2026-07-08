i.d(r, { CpfOcr: () => p });
var t = i(248702),
    s = i(899656),
    a = i(517e3),
    n = i(727571),
    l = i(443781);
i(73795);
var c = i(242003),
    o = i(590875),
    u = i(489771),
    d = i(21603),
    p = ({ onFinish: e, onError: r }) => {
        let [i, p] = (0, s.o)(() => (0, d.ll)()),
            [f, v] = (0, t.p)(!1),
            [h, C] = (0, t.p)(!1),
            [g, b] = (0, t.p)(!1);
        if (
            ((0, t._)(() => {
                "finished" === i.status && e?.();
            }, [i.status, e]),
            (0, t._)(() => {
                "error" === i.status && r?.(i.error);
            }, [i, r]),
            "idle" === i.status || "loading" === i.status || "submitting" === i.status)
        )
            return (0, t.v)(n.t, {
                className: "IncodeCpfOcrPage",
                children: (0, t.v)("div", {
                    class: "IncodeCpfOcrLoading",
                    children: (0, t.v)(l.t, { fullScreen: !1 }),
                }),
            });
        if ("error" === i.status)
            return (0, t.v)(o.t, {
                status: "failure",
                failureTitle: "N\xe3o foi poss\xedvel verificar o CPF",
                onRetry: () => p.retry(),
            });
        if ("finished" === i.status) return null;
        let m = "inputting" === i.status ? { cpf: i.cpf, isValid: i.isValid } : { cpf: "", isValid: !1 },
            I = 11 === m.cpf.replace(/\D/g, "").length,
            F = h && !m.isValid && (I || (f && !g)) ? "Insira um CPF v\xe1lido" : void 0;
        return (0, t.v)(n.t, {
            className: "IncodeCpfOcrPage",
            title: "Insira e verifique o n\xfamero do seu CPF",
            children: (0, t.v)("div", {
                class: "IncodeCpfOcr",
                children: [
                    (0, t.v)(a.r, { size: 32 }),
                    (0, t.v)(u.t, {
                        id: "cpf-ocr-input",
                        label: "",
                        value: m.cpf,
                        placeholder: "Seu CPF",
                        maxLength: 14,
                        inputMode: "numeric",
                        "aria-label": "CPF",
                        onInput: (e) => {
                            C(!0), p.setCpf(e.target.value);
                        },
                        onFocus: () => {
                            b(!0);
                        },
                        onBlur: () => {
                            b(!1), v(!0);
                        },
                        error: F,
                        showErrorIcon: !0,
                    }),
                    (0, t.v)(a.r, {}),
                    (0, t.v)(c.t, {
                        type: "button",
                        onClick: () => p.submit(),
                        disabled: !m.isValid,
                        "data-testid": "cpf-ocr-continue",
                        children: "Continuar",
                    }),
                ],
            }),
        });
    };
