o.d(t, { n: () => i, t: () => u });
var l = o(31144),
    n = o(248702),
    a = o(899656),
    r = o(489771),
    d = o(734045),
    s = o(695119),
    i = ({
        label: e,
        value: t,
        error: o,
        errorParams: i,
        suggestions: c,
        readonly: u,
        required: p,
        labelHint: m,
        onChange: v,
        onSearch: h,
        onSelect: A,
        onBlur: g,
    }) => {
        let { t: b } = (0, l.n)(),
            [y, k] = (0, n.p)(!1),
            [I, f] = (0, n.p)(!1),
            [S, w] = (0, n.p)(""),
            [x, N] = (0, n.p)(-1),
            [$, C] = (0, n.p)(-1),
            M = (0, n.l)(null),
            E = (0, n.l)(null),
            D = (0, n.l)(null),
            _ = "ekyc-address-listbox",
            F = "ekyc-address-mobile-listbox",
            B = "ekyc-address-modal-title",
            H = (0, a.r)(),
            P = b(e);
        (0, n._)(() => {
            function e(e) {
                M.current && !M.current.contains(e.target) && k(!1);
            }
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, []),
            (0, n._)(() => {
                N(-1), C(-1);
            }, [c]),
            (0, n._)(() => {
                let e = H ? D : E,
                    t = H ? $ : x;
                t < 0 || e.current?.children[t]?.scrollIntoView({ block: "nearest" });
            }, [x, $, H]);
        let q = (0, n.h)(
                (e) => {
                    A(e), k(!1), f(!1), N(-1), C(-1);
                },
                [A],
            ),
            K = (0, n.h)(() => {
                f(!1), C(-1);
            }, []),
            L = (e, t, o) => (l) => {
                0 !== c.length &&
                    ("ArrowDown" === l.key
                        ? (l.preventDefault(), t((e) => (e < c.length - 1 ? e + 1 : 0)))
                        : "ArrowUp" === l.key
                          ? (l.preventDefault(), t((e) => (e > 0 ? e - 1 : c.length - 1)))
                          : "Enter" === l.key && e() >= 0
                            ? (l.preventDefault(), q(c[e()]))
                            : "Escape" === l.key && o && o());
            },
            O = L(
                () => x,
                N,
                () => {
                    k(!1), N(-1);
                },
            ),
            U = L(() => $, C),
            V = !H && y && c.length > 0,
            j = V && x >= 0 ? `${_}-option-${x}` : void 0;
        return (0, n.v)("div", {
            className: "IncodeAddressAutocomplete",
            ref: M,
            children: [
                (0, n.v)(r.t, {
                    id: "ekyc-street",
                    label: P,
                    labelHint: m,
                    name: "street",
                    value: t,
                    readOnly: u,
                    required: p,
                    error: (0, d.i)(b, o, i),
                    onInput: (e) => {
                        var t;
                        v((t = e.target.value)), t.length >= 3 ? (H ? (f(!0), w(t), h(t)) : (h(t), k(!0))) : k(!1);
                    },
                    onKeyDown: O,
                    onBlur: g,
                    role: "combobox",
                    "aria-expanded": V,
                    "aria-controls": _,
                    "aria-activedescendant": j,
                    "aria-autocomplete": "list",
                    "data-testid": "ekyc-address-input",
                }),
                V &&
                    (0, n.v)("ul", {
                        ref: E,
                        id: _,
                        role: "listbox",
                        className: "IncodeAddressAutocompleteSuggestions",
                        children: c.map((e, t) =>
                            (0, n.v)(
                                "li",
                                {
                                    id: `${_}-option-${t}`,
                                    role: "option",
                                    "aria-selected": t === x,
                                    className: `IncodeAddressAutocompleteSuggestion ${t === x ? "IncodeAddressAutocompleteSuggestionActive" : ""}`,
                                    onClick: () => q(e),
                                    children: e.label,
                                },
                                e.id,
                            ),
                        ),
                    }),
                H &&
                    (0, n.v)(s.t, {
                        isOpen: I,
                        onClose: K,
                        labelledById: B,
                        children: [
                            (0, n.v)("div", {
                                className: "IncodeAddressAutocompleteModalHeader",
                                children: [
                                    (0, n.v)("h3", { id: B, children: b("verification.addressSearch") }),
                                    (0, n.v)("button", {
                                        className: "IncodeAddressAutocompleteModalClose",
                                        onClick: K,
                                        type: "button",
                                        "aria-label": b("common.close"),
                                        children: "\xd7",
                                    }),
                                ],
                            }),
                            (0, n.v)("div", {
                                className: "IncodeAddressAutocompleteModalBody",
                                children: [
                                    (0, n.v)("input", {
                                        className: "IncodeAddressAutocompleteModalInput",
                                        type: "text",
                                        value: S,
                                        placeholder: b("verification.addressPlaceholder"),
                                        "aria-label": b("verification.addressSearch"),
                                        role: "combobox",
                                        "aria-expanded": c.length > 0,
                                        "aria-controls": F,
                                        "aria-activedescendant": $ >= 0 ? `${F}-option-${$}` : void 0,
                                        "aria-autocomplete": "list",
                                        onInput: (e) => {
                                            let t = e.target.value;
                                            w(t), t.length >= 3 && h(t);
                                        },
                                        onKeyDown: U,
                                        autoFocus: !0,
                                    }),
                                    c.length > 0 &&
                                        (0, n.v)("ul", {
                                            ref: D,
                                            id: F,
                                            role: "listbox",
                                            className: "IncodeAddressAutocompleteModalSuggestions",
                                            children: c.map((e, t) =>
                                                (0, n.v)(
                                                    "li",
                                                    {
                                                        id: `${F}-option-${t}`,
                                                        role: "option",
                                                        "aria-selected": t === $,
                                                        className: `IncodeAddressAutocompleteModalSuggestion ${t === $ ? "IncodeAddressAutocompleteModalSuggestionActive" : ""}`,
                                                        onClick: () => q(e),
                                                        children: e.label,
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    (0, n.v)("button", {
                                        className: "IncodeAddressAutocompleteEnterManually",
                                        onClick: K,
                                        type: "button",
                                        children: b("verification.enterManually"),
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        });
    },
    c = /^(?:[\u{1F1E6}-\u{1F1FF}]{2}|\p{Extended_Pictographic})\s*/u;
function u(e) {
    return e.replace(c, "").trimStart();
}
