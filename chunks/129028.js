o.d(r, { t: () => t });
var a = o(248702),
    n = o(517e3),
    l = o(288552),
    d = o(886567),
    t = ({
        id: e,
        label: r,
        labelHint: o,
        placeholder: t = "Choose an option",
        value: i,
        options: s,
        onChange: c,
        error: p,
        helper: u,
        showErrorIcon: v,
        showHelperIcon: h,
        suppressMessages: b = !1,
        disabled: w = !1,
        required: D,
        searchable: m = !1,
        searchPlaceholder: I = "Search...",
        noResultsText: C = "No results found",
        name: f,
        tabIndex: g,
        onKeyDown: k,
        onBlur: $,
        renderSelectedLabel: y,
        siblingElement: T,
        enterKeyHint: x,
        class: E,
        "aria-label": L,
        "data-testid": S,
    }) => {
        let [A, H] = (0, a.p)(!1),
            [W, q] = (0, a.p)(!1),
            [_, F] = (0, a.p)(-1),
            [R, z] = (0, a.p)(""),
            B = (0, a.l)(null),
            K = (0, a.l)(null),
            M = (0, a.l)(null),
            N = (0, a.l)([]),
            O = (0, a.l)(null),
            P = (0, a.l)(""),
            U = (0, a.l)(),
            V = s.find((e) => e.value === i),
            j = V ? (y ? y(V) : V.label) : t,
            Z = m && R ? s.filter((e) => e.label.toLowerCase().includes(R.toLowerCase())) : s,
            G = `${e}-label`,
            J = `${e}-listbox`,
            Q = `${e}-helper`,
            X = `${e}-error`,
            Y = b ? "" : [u ? Q : null, p ? X : null].filter(Boolean).join(" ");
        (0, a._)(() => {
            if (!A) return;
            let e = requestAnimationFrame(() => {
                m && O.current && O.current.focus(),
                    requestAnimationFrame(() => {
                        M.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
                    });
            });
            return () => cancelAnimationFrame(e);
        }, [A, m]),
            (0, a._)(() => {
                A || (F(-1), z(""));
            }, [A]),
            (0, a._)(() => {
                _ >= 0 && N.current[_] && N.current[_]?.scrollIntoView({ block: "nearest", inline: "nearest" });
            }, [_]),
            (0, a._)(
                () => () => {
                    U.current && clearTimeout(U.current);
                },
                [],
            );
        let ee = (e) => {
            c(e), H(!1), F(-1), K.current?.focus();
        };
        return (0, a.v)("div", {
            class: (0, n.n)("IncodeDropdownComposed", E),
            ref: B,
            onBlur: (e) => {
                q(!1), B.current?.contains(e.relatedTarget) || (H(!1), $?.());
            },
            children: [
                f && (0, a.v)("input", { type: "hidden", name: f, value: i || "", disabled: w, required: D }),
                r &&
                    (0, a.v)("label", {
                        class: "IncodeDropdownComposedLabel",
                        id: G,
                        htmlFor: e,
                        "data-testid": `${e}-label`,
                        children: [
                            r,
                            o &&
                                (0, a.v)("span", {
                                    class: "IncodeDropdownComposedLabelHint",
                                    "data-testid": `${e}-label-hint`,
                                    children: o,
                                }),
                        ],
                    }),
                (0, a.v)("div", {
                    class: "IncodeDropdownComposedWrapper",
                    children: [
                        (0, a.v)("div", {
                            class: (0, n.n)("IncodeDropdownComposedTriggerRow", {
                                IncodeDropdownComposedTriggerRowWithSibling: !!T,
                            }),
                            children: [
                                (0, a.v)("button", {
                                    ref: K,
                                    type: "button",
                                    id: e,
                                    class: "IncodeDropdownComposedTrigger",
                                    onClick: () => {
                                        w || H((e) => !e);
                                    },
                                    onFocus: () => {
                                        q(!0);
                                    },
                                    onKeyDown: (e) => {
                                        if (w) return;
                                        k?.(e);
                                        let { key: r } = e;
                                        if (1 === r.length && /^[a-zA-Z0-9]$/.test(r)) {
                                            e.preventDefault(),
                                                U.current && clearTimeout(U.current),
                                                (P.current += r.toLowerCase());
                                            let o = Z.findIndex((e) => e.label.toLowerCase().startsWith(P.current));
                                            -1 !== o && (A || H(!0), F(o)),
                                                (U.current = setTimeout(() => {
                                                    P.current = "";
                                                }, 500));
                                            return;
                                        }
                                        switch (r) {
                                            case "ArrowDown":
                                                e.preventDefault(),
                                                    A ? F((e) => (e < Z.length - 1 ? e + 1 : e)) : (H(!0), F(0));
                                                break;
                                            case "ArrowUp":
                                                e.preventDefault(),
                                                    A ? F((e) => (e > 0 ? e - 1 : e)) : (H(!0), F(Z.length - 1));
                                                break;
                                            case "Home":
                                                e.preventDefault(), A && F(0);
                                                break;
                                            case "End":
                                                e.preventDefault(), A && F(Z.length - 1);
                                                break;
                                            case "Enter":
                                                e.preventDefault(), A && _ >= 0 && Z[_] ? ee(Z[_].value) : A || H(!0);
                                                break;
                                            case " ":
                                                e.preventDefault(),
                                                    A && _ >= 0 && Z[_] ? ee(Z[_].value) : A || (H(!0), F(0));
                                                break;
                                            case "Escape":
                                                e.preventDefault(), A && (H(!1), F(-1), K.current?.focus());
                                                break;
                                            case "Tab":
                                                A && (H(!1), F(-1));
                                        }
                                    },
                                    tabIndex: w ? -1 : (g ?? 0),
                                    disabled: w,
                                    "aria-haspopup": "listbox",
                                    "aria-expanded": A ? "true" : "false",
                                    "aria-disabled": w ? "true" : void 0,
                                    "aria-labelledby": r ? G : void 0,
                                    "aria-label": r ? void 0 : L,
                                    "aria-controls": A ? J : void 0,
                                    "aria-activedescendant": A && _ >= 0 ? `${e}-option-${_}` : void 0,
                                    "aria-invalid": p ? "true" : void 0,
                                    "aria-required": D ? "true" : void 0,
                                    "aria-describedby": Y || void 0,
                                    "data-error": p ? "true" : void 0,
                                    "data-focused": W || A ? "true" : void 0,
                                    "data-testid": S,
                                    children: [
                                        (0, a.v)("span", {
                                            class: V
                                                ? "IncodeDropdownComposedTriggerText"
                                                : "IncodeDropdownComposedTriggerPlaceholder",
                                            "aria-hidden": !r && L ? "true" : void 0,
                                            children: j,
                                        }),
                                        (0, a.v)("span", {
                                            class: "IncodeDropdownComposedTriggerIcon",
                                            "aria-hidden": "true",
                                            "data-open": A,
                                            children: (0, a.v)(l.l, {}),
                                        }),
                                    ],
                                }),
                                T && (0, a.v)("div", { class: "IncodeDropdownComposedSibling", children: T }),
                            ],
                        }),
                        A &&
                            (0, a.v)("div", {
                                ref: M,
                                class: "IncodeDropdownComposedList",
                                "data-error": p ? "true" : void 0,
                                children: [
                                    m &&
                                        (0, a.v)("div", {
                                            class: "IncodeDropdownComposedSearchWrapper",
                                            children: (0, a.v)("div", {
                                                class: "IncodeDropdownComposedSearchInner",
                                                children: [
                                                    (0, a.v)("input", {
                                                        ref: O,
                                                        type: "text",
                                                        class: "IncodeDropdownComposedSearchInput",
                                                        value: R,
                                                        onInput: (e) => {
                                                            z(e.target.value), F(0);
                                                        },
                                                        onKeyDown: (e) => {
                                                            let { key: r } = e;
                                                            switch (r) {
                                                                case "ArrowDown":
                                                                    e.preventDefault(),
                                                                        F((e) => (e < Z.length - 1 ? e + 1 : e));
                                                                    break;
                                                                case "ArrowUp":
                                                                    e.preventDefault(), F((e) => (e > 0 ? e - 1 : e));
                                                                    break;
                                                                case "Home":
                                                                    e.preventDefault(), F(0);
                                                                    break;
                                                                case "End":
                                                                    e.preventDefault(), F(Z.length - 1);
                                                                    break;
                                                                case "Enter":
                                                                    e.preventDefault(),
                                                                        _ >= 0 && Z[_] && ee(Z[_].value);
                                                                    break;
                                                                case "Escape":
                                                                    e.preventDefault(),
                                                                        H(!1),
                                                                        F(-1),
                                                                        K.current?.focus();
                                                                    break;
                                                                case "Tab":
                                                                    R || (H(!1), F(-1));
                                                            }
                                                        },
                                                        placeholder: I,
                                                        role: "combobox",
                                                        "aria-autocomplete": "list",
                                                        "aria-expanded": "true",
                                                        "aria-controls": J,
                                                        "aria-activedescendant": _ >= 0 ? `${e}-option-${_}` : void 0,
                                                        "aria-label": I,
                                                        autocomplete: "off",
                                                    }),
                                                    R
                                                        ? (0, a.v)("button", {
                                                              type: "button",
                                                              class: "IncodeDropdownComposedCloseIconButton",
                                                              onMouseDown: (e) => e.preventDefault(),
                                                              onClick: () => {
                                                                  R && (z(""), O.current?.focus());
                                                              },
                                                              "aria-label": "Clear search query",
                                                              children: (0, a.v)(l.o, {
                                                                  width: 20,
                                                                  height: 20,
                                                                  fillColor: "var(--icon-neutral-500)",
                                                              }),
                                                          })
                                                        : (0, a.v)("span", {
                                                              class: "IncodeDropdownComposedSearchIcon",
                                                              "aria-hidden": "true",
                                                              children: (0, a.v)(l.n, { size: 20 }),
                                                          }),
                                                ],
                                            }),
                                        }),
                                    (0, a.v)("div", {
                                        id: J,
                                        role: "listbox",
                                        "aria-labelledby": r ? G : void 0,
                                        "aria-label": r ? void 0 : (L ?? t),
                                        class: "IncodeDropdownComposedOptionsScroll",
                                        children:
                                            0 === Z.length
                                                ? (0, a.v)("div", {
                                                      class: "IncodeDropdownComposedNoResults",
                                                      children: C,
                                                  })
                                                : Z.map((r, o) => {
                                                      let n = i === r.value;
                                                      return (0, a.v)(
                                                          "div",
                                                          {
                                                              id: `${e}-option-${o}`,
                                                              role: "option",
                                                              "aria-label": r.ariaLabel,
                                                              "aria-selected": n ? "true" : "false",
                                                              class: "IncodeDropdownComposedOption",
                                                              "data-highlighted": _ === o,
                                                              ref: (e) => {
                                                                  N.current[o] = e;
                                                              },
                                                              onClick: () => ee(r.value),
                                                              onMouseDown: (e) => e.preventDefault(),
                                                              onMouseEnter: () => F(o),
                                                              children: [
                                                                  r.ariaLabel
                                                                      ? (0, a.v)("span", {
                                                                            "aria-hidden": "true",
                                                                            children: r.label,
                                                                        })
                                                                      : r.label,
                                                                  n &&
                                                                      (0, a.v)("span", {
                                                                          class: "IncodeDropdownComposedCheckmarkIcon",
                                                                          "aria-hidden": "true",
                                                                          children: (0, a.v)(l.u, {}),
                                                                      }),
                                                              ],
                                                          },
                                                          r.value,
                                                      );
                                                  }),
                                    }),
                                ],
                            }),
                    ],
                }),
                m &&
                    (0, a.v)("div", {
                        class: "IncodeDropdownComposedLiveRegion",
                        role: "status",
                        "aria-live": "polite",
                        "aria-atomic": "true",
                        children:
                            A && R
                                ? 0 === Z.length
                                    ? C
                                    : `${Z.length} result${1 === Z.length ? "" : "s"} available`
                                : "",
                    }),
                !b &&
                    p &&
                    (0, a.v)("div", {
                        class: "IncodeDropdownComposedErrorWrapper",
                        "data-testid": `${e}-error-wrapper`,
                        children: [
                            v &&
                                (0, a.v)("div", {
                                    class: "IncodeDropdownComposedIconWrapper",
                                    children: (0, a.v)(l.g, { size: 17 }),
                                }),
                            (0, a.v)("p", { id: X, class: "IncodeDropdownComposedError", children: p }),
                        ],
                    }),
                !b &&
                    u &&
                    !p &&
                    (0, a.v)("div", {
                        class: "IncodeDropdownComposedHelperWrapper",
                        "data-testid": `${e}-helper-wrapper`,
                        children: [
                            h &&
                                (0, a.v)("div", {
                                    class: "IncodeDropdownComposedIconWrapper",
                                    children: (0, a.v)(d.t, { size: 17 }),
                                }),
                            (0, a.v)("p", { id: Q, class: "IncodeDropdownComposedHelper", children: u }),
                        ],
                    }),
            ],
        });
    };
