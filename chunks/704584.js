i.d(t, { CustomFields: () => I });
var s = i(31144),
    n = i(248702),
    l = i(899656),
    a = i(458741),
    d = i(517e3),
    o = i(727571),
    u = i(242003),
    r = i(886567),
    c = i(489771),
    m = i(967325),
    g = i(971052),
    v = i(868282),
    h = i(352715),
    f = i(665846),
    p = { INTEGER: "number", DOUBLE: "number", STRING: "text" },
    b = { DOUBLE: "any" },
    F = ({ field: e, isDisabled: t, onChange: i }) => {
        let [s, l] = (0, n.p)("");
        return (0, n.v)("div", {
            class: "IncodeCustomFieldsField",
            children: (0, n.v)(g.t, {
                id: `custom-field-${e.name}`,
                name: e.name,
                label: e.label,
                disabled: t,
                value: s,
                onInput: (t) => {
                    let s = t.target.value;
                    l(s), i(e.name, s);
                },
            }),
        });
    },
    C = ({ field: e, isDisabled: t, onChange: i }) => {
        let s = `custom-field-${e.name}`;
        return "BOOLEAN" === e.type
            ? (0, n.v)("div", {
                  class: "IncodeCustomFieldsField",
                  children: (0, n.v)(m.t, {
                      id: s,
                      name: e.name,
                      label: e.label,
                      disabled: t,
                      onChange: (t) => i(e.name, t.target.checked),
                  }),
              })
            : "DATE" === e.type
              ? (0, n.v)(F, { field: e, isDisabled: t, onChange: i })
              : (0, n.v)("div", {
                    class: "IncodeCustomFieldsField",
                    children: (0, n.v)(c.t, {
                        id: s,
                        name: e.name,
                        label: e.label,
                        type: p[e.type] ?? "text",
                        step: b[e.type],
                        disabled: t,
                        onInput: (t) => i(e.name, t.target.value),
                    }),
                });
    },
    E = ({ config: e, manager: t, onFinish: i, onError: a }) => {
        let { t: c } = (0, s.n)(),
            m = (0, n.l)(null),
            [g, v] = (0, l.o)(
                () => {
                    if (t) return t;
                    if (!e) throw Error("CustomFields config is required");
                    return (0, f.s)({ config: e });
                },
                { manageLifecycle: !t, autoLoad: !0 },
            );
        if (
            ((0, n._)(() => {
                "finished" === g.status && i?.();
            }, [g, i]),
            (0, n._)(() => {
                "success" === g.status && m.current?.focus();
            }, [g.status]),
            "success" === g.status)
        )
            return (0, n.v)(h.t, {
                variant: "success",
                icon: (0, n.v)(r.t, { size: 64 }),
                title: c("customFields.completed"),
                titleRef: m,
                hideFooterBranding: !0,
            });
        if ("finished" === g.status) return null;
        let p =
            "inputting" === g.status || "submitting" === g.status ? c(g.title ? g.title : "customFields.title") : "";
        if ("submitting" === g.status)
            return (0, n.v)(h.t, {
                variant: "loading",
                icon: (0, n.v)(d.t, { size: 64 }),
                title: c("customFields.processing"),
                hideFooterBranding: !0,
            });
        let b = "inputting" === g.status && g.canSubmit,
            F = "inputting" === g.status ? g.customFields : [],
            E = (e, t) => {
                v.setField(e, t);
            };
        return (0, n.v)(o.t, {
            className: "IncodeCustomFieldsPage",
            title: p,
            hideFooterBranding: !0,
            children: (0, n.v)("form", {
                class: "IncodeCustomFieldsForm",
                onSubmit: (e) => {
                    e.preventDefault(), v.submit();
                },
                autoComplete: "off",
                children: [
                    F.map((e) => (0, n.v)(C, { field: e, isDisabled: !1, onChange: E }, e.name)),
                    (0, n.v)(d.r, {}),
                    (0, n.v)(u.t, { type: "submit", disabled: !b, children: c("customFields.continue") }),
                ],
            }),
        });
    },
    I = ({ config: e, manager: t, onFinish: i, onError: s }) =>
        (0, n.v)(a.t, { children: e || t ? (0, n.v)(E, { config: e, manager: t, onFinish: i, onError: s }) : null });
(0, v.t)(I, "incode-custom-fields");
