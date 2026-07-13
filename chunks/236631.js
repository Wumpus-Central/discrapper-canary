d.d(t, {
    f: () => S,
    s: () => P,
    u: () => g,
    a: () => B,
    n: () => lh,
    l: () => D,
    p: () => C,
    r: () => lo,
    y: () => N,
    i: () => lb,
    t: () => lW,
    b: () => p,
    d: () => x,
    o: () => f,
});
var i = d(31144),
    c = d(248702);
d(115977);
var e = d(899656);
d(458741);
var a = d(517e3),
    s = d(727571),
    Z = d(542075),
    n = d(443781);
d(73795), d(988680);
var b = d(242003),
    m = d(288552),
    o = d(886567),
    u = d(858881),
    h = d(970316);
d(590875), d(489771), d(55808), d(227325), d(967325), d(734045), d(368697), d(713834), d(994187), d(695119);
var W = ({ className: l, ...t }) =>
        (0, c.v)("svg", {
            class: l,
            width: "33",
            height: "32",
            viewBox: "0 0 33 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            ...t,
            children: (0, c.v)("path", {
                d: "M16.5 0C25.3219 0 32.5 7.17642 32.5 16C32.5 24.8219 25.3219 32 16.5 32C7.67811 32 0.5 24.8219 0.5 16C0.5 7.17642 7.67811 0 16.5 0ZM13.6553 11.3701C13.1618 10.8767 12.3636 10.8767 11.8701 11.3701C11.3767 11.8636 11.3767 12.6618 11.8701 13.1553L14.9053 16.1924L11.8721 19.2256C11.3803 19.7191 11.3803 20.5173 11.8721 21.0107C12.3656 21.504 13.1658 21.5041 13.6592 21.0107L16.6924 17.9775L19.7334 21.0205C19.981 21.2664 20.3029 21.3916 20.6279 21.3916C20.9513 21.3916 21.2746 21.2664 21.5205 21.0205C22.014 20.527 22.014 19.7269 21.5205 19.2334L18.4775 16.1924L21.5107 13.1572C22.0041 12.6638 22.004 11.8639 21.5107 11.3721C21.0173 10.8786 20.2191 10.8786 19.7256 11.3721L16.6904 14.4053L13.6553 11.3701Z",
                fill: "#E71111",
            }),
        }),
    G = ({ onRetry: l, onContinue: t, attemptsRemaining: d }) => {
        let { t: e } = (0, i.n)(),
            n = (0, c.l)(null);
        return (
            (0, c._)(() => {
                n.current?.focus();
            }, []),
            (0, c.v)(s.t, {
                hideHeader: !0,
                hideFooterBranding: !0,
                className: "IncodeIdExpiredPage",
                "data-testid": "expired-id",
                children: [
                    (0, c.v)("div", {
                        class: "IncodeIdExpiredContent",
                        role: "alert",
                        children: [
                            (0, c.v)(W, { className: "IncodeIdExpiredIcon" }),
                            (0, c.v)(Z.t, {
                                ref: n,
                                tabIndex: -1,
                                className: "IncodeIdExpiredTitle",
                                children: e("idv2.capture.notifications.expiredId"),
                            }),
                            (0, c.v)(a.r, { size: 12 }),
                            (0, c.v)("p", {
                                class: "IncodeIdExpiredSubtitle",
                                children: e("idv2.capture.expiredId.pleaseTryWithADifferentId"),
                            }),
                            (0, c.v)(a.r, { size: 80 }),
                            void 0 === d
                                ? null
                                : (0, c.v)("p", {
                                      class: "IncodeIdExpiredAttemptsCounter",
                                      "data-testid": "expired-id-attempts-counter",
                                      children: `${d} ${e("idv2.capture.processing.attemptsRemainingLabel")}`,
                                  }),
                        ],
                    }),
                    (0, c.v)("div", {
                        class: "IncodeIdExpiredButtonContainer",
                        children: l
                            ? (0, c.v)(b.t, {
                                  variant: "primary",
                                  onClick: l,
                                  "data-testid": "expired-id-retry",
                                  children: e("idv2.capture.processing.tryAgain"),
                              })
                            : t
                              ? (0, c.v)(b.t, {
                                    variant: "primary",
                                    onClick: t,
                                    "data-testid": "expired-id-continue",
                                    children: e("idv2.capture.processing.continue"),
                                })
                              : null,
                    }),
                ],
            })
        );
    };
d(438273);
var p = ({ children: l, "aria-labelledby": t, class: d }) =>
        (0, c.v)("div", {
            class: `IncodeOverlay ${d ?? ""}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": t,
            children: (0, c.v)("div", {
                class: "IncodeOverlayContainer",
                children: (0, c.v)("div", { class: "IncodeOverlayBody", children: l }),
            }),
        }),
    N = ({ progress: l, label: t, className: d }) =>
        (0, c.v)("div", {
            class: (0, a.n)("IncodeProgressBarContainer", d),
            children: [
                (0, c.v)("div", {
                    class: "IncodeProgressBar",
                    role: "progressbar",
                    "aria-valuenow": l,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-label": t,
                    children: (0, c.v)("div", { class: "IncodeProgressBarFill", style: { width: `${l}%` } }),
                }),
                t
                    ? (0, c.v)(c.S, {
                          children: [
                              (0, c.v)(a.r, { size: 24 }),
                              (0, c.v)("p", { class: "IncodeProgressBarLabel", children: t }),
                          ],
                      })
                    : null,
            ],
        }),
    M = /^(\d{4})-(\d{2})-(\d{2})$/,
    X = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,
    y = { mm: "", dd: "", yyyy: "" },
    Y = (l) => {
        if (!l) return y;
        let t = M.exec(l);
        return t ? { yyyy: t[1], mm: t[2], dd: t[3] } : y;
    },
    r = ({ mm: l, dd: t, yyyy: d }) => {
        if (4 !== d.length || 0 === l.length || 0 === t.length) return "";
        let i = Number(d),
            c = Number(l),
            e = Number(t);
        return ((l, t, d) => {
            if (l < 1 || t < 1 || t > 12 || d < 1 || d > 31) return !1;
            let i = new Date(l, t - 1, d);
            return i.getFullYear() === l && i.getMonth() === t - 1 && i.getDate() === d;
        })(i, c, e)
            ? `${d}-${String(c).padStart(2, "0")}-${String(e).padStart(2, "0")}`
            : "";
    },
    T = { mm: { min: 1, max: 12, pad: 2 }, dd: { min: 1, max: 31, pad: 2 }, yyyy: { min: 1, max: 9999, pad: 4 } },
    V = { mm: 1, dd: 3, yyyy: 9 },
    L = (l, t) => String(t).padStart(T[l].pad, "0");
(0, c.a)(
    (
        {
            id: l,
            label: t,
            labelHint: d,
            "aria-label": e,
            error: s,
            showErrorIcon: Z,
            helper: n,
            showHelperIcon: b,
            required: u,
            suppressMessages: h = !1,
            class: W,
            value: G,
            onInput: p,
            disabled: N,
            min: y,
            max: I,
            name: z,
            autocomplete: w,
            autoComplete: R,
            ...C
        },
        S,
    ) => {
        let { i18n: x } = (0, i.n)(),
            g = (0, c.d)(
                () =>
                    ((l) => {
                        try {
                            let t = new Intl.DateTimeFormat(l || void 0).formatToParts(new Date(2e3, 0, 15)),
                                d = [];
                            for (let l of t)
                                "year" === l.type
                                    ? d.push("yyyy")
                                    : "month" === l.type
                                      ? d.push("mm")
                                      : "day" === l.type && d.push("dd");
                            if (3 === d.length && 3 === new Set(d).size) return d;
                        } catch {}
                        return ["mm", "dd", "yyyy"];
                    })(x.language),
                [x.language],
            ),
            D = (0, c.d)(() => {
                let l, t;
                return (
                    (l = { mm: null, dd: null, yyyy: null }),
                    (t = { mm: null, dd: null, yyyy: null }),
                    g.forEach((d, i) => {
                        (l[d] = g[i + 1] ?? null), (t[d] = g[i - 1] ?? null);
                    }),
                    { next: l, prev: t }
                );
            }, [g]),
            j = "string" == typeof R ? R : "string" == typeof w ? w : void 0,
            U = (0, c.l)(null),
            F = (0, c.l)(null),
            J = { mm: (0, c.l)(null), dd: (0, c.l)(null), yyyy: (0, c.l)(null) },
            [O, k] = (0, c.p)(() => Y(G));
        (0, c._)(() => {
            k((l) => (r(l) === (G ?? "") ? l : Y(G)));
        }, [G]),
            (0, c._)(() => {
                let l = U.current;
                if (!l) return;
                let t = G ?? "";
                l.value !== t && (l.value = t);
            }, [G]);
        let E = `${l}-label`,
            v = `${l}-helper`,
            K = `${l}-error`,
            H = `${l}-format-hint`,
            Q = (0, c.d)(() => {
                let l = { mm: "month", dd: "day", yyyy: "year" };
                return `Date format: ${g.map((t) => l[t]).join(", ")}.`;
            }, [g]),
            P = [H, !h && n ? v : null, !h && s ? K : null].filter(Boolean).join(" "),
            f = (l) => {
                let t = r(l),
                    d = U.current;
                d && (d.value = t);
                let i = new Event("input", { bubbles: !0 });
                Object.defineProperty(i, "target", { value: d, enumerable: !0, configurable: !0 }), p(i);
            },
            B = (l, t) => {
                let d = { ...O, [l]: t };
                if (d.dd && d.mm) {
                    let l = ((l, t) => {
                            let d = Number(l);
                            if (!Number.isFinite(d) || d < 1 || d > 12) return 31;
                            let i = Number(t);
                            return new Date(Number.isFinite(i) && i > 0 && 4 === t.length ? i : 2001, d, 0).getDate();
                        })(d.mm, d.yyyy),
                        t = Number(d.dd);
                    Number.isFinite(t) && t > l && (d = { ...d, dd: L("dd", l) });
                }
                k(d), f(d);
            },
            A = (l) => {
                if (!l) return;
                let t = J[l].current;
                if (!t) return;
                t.focus();
                let d = t.value.length;
                try {
                    t.setSelectionRange(d, d);
                } catch {}
            },
            _ = (l) => {
                let t = l.target;
                try {
                    t.select();
                } catch {}
            },
            $ = (l) => {
                let t = l.clipboardData?.getData("text")?.trim() ?? "";
                if (!t) return;
                let d = M.exec(t),
                    i = X.exec(t),
                    c = null;
                d
                    ? (c = { yyyy: d[1], mm: d[2], dd: d[3] })
                    : i && (c = { mm: i[1].padStart(2, "0"), dd: i[2].padStart(2, "0"), yyyy: i[3] }),
                    c && (l.preventDefault(), k(c), f(c), A("yyyy"));
            },
            q = (l) => {
                let t = l.target;
                k(Y(t.value)), p(l);
                let d = F.current;
                if (d && document.activeElement === t)
                    try {
                        d.focus();
                    } catch {}
            },
            ll = (l) => {
                if (N) return void l.preventDefault();
                let t = U.current;
                if (t) {
                    try {
                        t.click();
                    } catch {}
                    try {
                        "function" == typeof t.showPicker && t.showPicker();
                    } catch {}
                }
            },
            lt = !!r(O),
            ld = !!s,
            li = t ? { "aria-labelledby": E } : e ? { "aria-label": e } : {},
            lc = {
                mm: { maxLen: 2, placeholder: "MM", ariaLabel: "Month" },
                dd: { maxLen: 2, placeholder: "DD", ariaLabel: "Day" },
                yyyy: { maxLen: 4, placeholder: "YYYY", ariaLabel: "Year" },
            };
        return (0, c.v)("div", {
            class: (0, a.n)("IncodeInputComposed IncodeSegmentedDateInput", W),
            children: [
                t &&
                    (0, c.v)("label", {
                        id: E,
                        class: "IncodeInputComposedLabel",
                        htmlFor: `${l}-${g[0]}`,
                        "data-testid": `${l}-label`,
                        children: [
                            t,
                            d &&
                                (0, c.v)("span", {
                                    class: "IncodeInputComposedLabelHint",
                                    "data-testid": `${l}-label-hint`,
                                    children: d,
                                }),
                        ],
                    }),
                (0, c.v)("div", {
                    class: "IncodeInputComposedWrapper",
                    children: [
                        (0, c.v)("div", {
                            role: "group",
                            class: (0, a.n)(
                                "IncodeSegmentedDateInputField",
                                ld && "IncodeSegmentedDateInputField--invalid",
                                N && "IncodeSegmentedDateInputField--disabled",
                            ),
                            "data-has-value": lt ? "true" : void 0,
                            "data-disabled": N ? "true" : void 0,
                            "aria-invalid": ld ? "true" : void 0,
                            "aria-describedby": P || void 0,
                            ...li,
                            children: g.map((t, d) =>
                                (0, c.v)(
                                    c.S,
                                    {
                                        children: [
                                            ((t) => {
                                                let { maxLen: d, placeholder: i, ariaLabel: e } = lc[t];
                                                return (0, c.v)("input", {
                                                    ref: (l) => {
                                                        J[t].current = l;
                                                    },
                                                    id: `${l}-${t}`,
                                                    class: (0, a.n)(
                                                        "IncodeSegmentedDateInputSegment",
                                                        `IncodeSegmentedDateInputSegment--${t}`,
                                                    ),
                                                    type: "text",
                                                    inputMode: "numeric",
                                                    autoComplete: j
                                                        ? "bday" === j
                                                            ? "mm" === t
                                                                ? "bday-month"
                                                                : "dd" === t
                                                                  ? "bday-day"
                                                                  : "bday-year"
                                                            : j
                                                        : "off",
                                                    autoCorrect: "off",
                                                    spellcheck: !1,
                                                    maxLength: d,
                                                    size: d,
                                                    placeholder: i,
                                                    "aria-label": e,
                                                    "aria-required": u ? "true" : void 0,
                                                    "aria-invalid": ld ? "true" : void 0,
                                                    value: O[t],
                                                    disabled: N,
                                                    "data-testid": `${l}-${t}`,
                                                    onInput: (l) => {
                                                        let i = l.target,
                                                            c = i.value.replace(/\D/g, "").slice(0, d),
                                                            e = !1;
                                                        if (
                                                            (1 === c.length &&
                                                                Number(c) > V[t] &&
                                                                ((c = L(t, Number(c))), (e = !0)),
                                                            c.length === d)
                                                        ) {
                                                            let l = Number(c),
                                                                { max: d } = T[t];
                                                            Number.isFinite(l) && l > d && (c = L(t, d)), (e = !0);
                                                        }
                                                        c !== i.value && (i.value = c), B(t, c), e && A(D.next[t]);
                                                    },
                                                    onKeyDown: (l) => {
                                                        let d = l.target,
                                                            i = d.selectionStart ?? 0;
                                                        if ("ArrowUp" === l.key || "ArrowDown" === l.key) {
                                                            l.preventDefault();
                                                            let i = "ArrowUp" === l.key ? 1 : -1,
                                                                c = ((l, t, d) => {
                                                                    let { min: i, max: c } = T[l];
                                                                    if ("" === t)
                                                                        return "yyyy" === l
                                                                            ? L(l, new Date().getFullYear())
                                                                            : L(l, 1 === d ? i : c);
                                                                    let e = Number(t);
                                                                    if (Number.isNaN(e)) return L(l, i);
                                                                    let a = e + d;
                                                                    return a > c && (a = i), a < i && (a = c), L(l, a);
                                                                })(t, d.value, i);
                                                            (d.value = c), B(t, c);
                                                            try {
                                                                d.select();
                                                            } catch {}
                                                        } else
                                                            ("Backspace" === l.key && "" === d.value && 0 === i) ||
                                                            ("ArrowLeft" === l.key && 0 === i)
                                                                ? (l.preventDefault(), A(D.prev[t]))
                                                                : "ArrowRight" === l.key && i === d.value.length
                                                                  ? (l.preventDefault(), A(D.next[t]))
                                                                  : ("/" === l.key || "-" === l.key || " " === l.key) &&
                                                                    (d.value.length > 0
                                                                        ? (l.preventDefault(), A(D.next[t]))
                                                                        : l.preventDefault());
                                                    },
                                                    onBlur: (l) => {
                                                        let i = l.target.value;
                                                        if (!i) return;
                                                        let c = i.padStart(d, "0"),
                                                            e = Number(c),
                                                            { min: a, max: s } = T[t];
                                                        Number.isFinite(e) &&
                                                            (e < a ? (c = L(t, a)) : e > s && (c = L(t, s))),
                                                            c !== i && B(t, c);
                                                    },
                                                    onFocus: _,
                                                    onPaste: $,
                                                });
                                            })(t),
                                            d < g.length - 1 &&
                                                (0, c.v)("span", {
                                                    class: "IncodeSegmentedDateInputSeparator",
                                                    "aria-hidden": "true",
                                                    children: "/",
                                                }),
                                        ],
                                    },
                                    t,
                                ),
                            ),
                        }),
                        (0, c.v)("span", {
                            id: H,
                            class: "IncodeSrOnly",
                            "data-testid": `${l}-format-hint`,
                            children: Q,
                        }),
                        (0, c.v)("input", {
                            ref: (l) => {
                                (U.current = l), "function" == typeof S ? S(l) : S && (S.current = l);
                            },
                            id: l,
                            type: "date",
                            name: z,
                            defaultValue: G,
                            min: y,
                            max: I,
                            disabled: N,
                            required: u,
                            "aria-required": u ? "true" : void 0,
                            autoComplete: j ?? void 0,
                            class: "IncodeSegmentedDateInputHiddenNative",
                            tabIndex: -1,
                            "aria-hidden": "true",
                            "data-has-value": lt ? "true" : void 0,
                            "data-testid": `${l}-native`,
                            onInput: q,
                            onChange: q,
                            ...C,
                        }),
                        (0, c.v)("button", {
                            ref: F,
                            type: "button",
                            class: "IncodeSegmentedDateInputIconButton",
                            onClick: ll,
                            onTouchEnd: ll,
                            disabled: N,
                            "aria-label": "Open date picker",
                            "data-testid": `${l}-picker-trigger`,
                            children: (0, c.v)("span", {
                                class: "IncodeSegmentedDateInputIcon",
                                children: (0, c.v)(m.m, {}),
                            }),
                        }),
                    ],
                }),
                !h &&
                    s &&
                    (0, c.v)("div", {
                        class: "IncodeInputComposedErrorWrapper",
                        role: "alert",
                        "data-testid": `${l}-error-wrapper`,
                        children: [
                            Z &&
                                (0, c.v)("div", {
                                    class: "IncodeInputComposedIconWrapper",
                                    children: (0, c.v)(m.g, { size: 16 }),
                                }),
                            (0, c.v)("p", { id: K, class: "IncodeInputComposedError", children: s }),
                        ],
                    }),
                !h &&
                    n &&
                    !s &&
                    (0, c.v)("div", {
                        class: "IncodeInputComposedHelperWrapper",
                        "data-testid": `${l}-helper-wrapper`,
                        children: [
                            b &&
                                (0, c.v)("div", {
                                    class: "IncodeInputComposedIconWrapper",
                                    children: (0, c.v)(o.t, { size: 16 }),
                                }),
                            (0, c.v)("p", { id: v, class: "IncodeInputComposedHelper", children: n }),
                        ],
                    }),
            ],
        });
    },
).displayName = "SegmentedDateInput";
var I = (0, c.a)((l, t) => {
    let { class: d, rows: i = 4, ...e } = l;
    return (0, c.v)("textarea", { ...e, ref: t, rows: i, class: (0, a.n)("IncodeTextArea", d) });
});
function z({ children: l }) {
    return (0, c.v)("div", { class: "IncodeVerificationOptionCardList", children: l });
}
function w({ icon: l, title: t, testId: d, onClick: i, tag: e }) {
    return (0, c.v)("button", {
        type: "button",
        class: "IncodeVerificationOptionCard",
        onClick: i,
        "data-testid": d,
        "aria-labelledby": `${d}-label`,
        children: [
            (0, c.v)("span", {
                class: "IncodeVerificationOptionCardIcon",
                "aria-hidden": "true",
                "data-testid": `${d}-icon`,
                children: (0, c.v)(l, {}),
            }),
            (0, c.v)("span", {
                class: "IncodeVerificationOptionCardContent",
                children: [
                    (0, c.v)("span", {
                        id: `${d}-label`,
                        class: "IncodeVerificationOptionCardTitleTagContainer",
                        children: [
                            (0, c.v)("span", { class: "IncodeVerificationOptionCardTitle", children: t }),
                            e && (0, c.v)(R, { label: e }),
                        ],
                    }),
                    (0, c.v)("span", {
                        class: "IncodeVerificationOptionCardArrow",
                        "data-testid": "chevron-right-icon",
                        children: (0, c.v)(m.s, { size: 24, variant: "m" }),
                    }),
                ],
            }),
        ],
    });
}
function R({ label: l }) {
    return (0, c.v)("div", {
        class: "IncodeVerificationOptionCardTag",
        children: [(0, c.v)(m.t, {}), (0, c.v)("span", { children: l })],
    });
}
(0, c.a)(
    (
        {
            id: l,
            label: t,
            labelHint: d,
            "aria-label": i,
            error: e,
            showErrorIcon: s,
            helper: Z,
            showHelperIcon: n,
            required: b,
            rows: u = 4,
            class: h,
            ...W
        },
        G,
    ) => {
        let p = `${l}-helper`,
            N = `${l}-error`,
            M = [Z ? p : null, e ? N : null].filter(Boolean).join(" ");
        return (0, c.v)("div", {
            class: (0, a.n)("IncodeTextAreaComposed", h),
            children: [
                t &&
                    (0, c.v)("label", {
                        class: "IncodeTextAreaComposedLabel",
                        htmlFor: l,
                        "data-testid": `${l}-label`,
                        children: [
                            t,
                            d &&
                                (0, c.v)("span", {
                                    class: "IncodeTextAreaComposedLabelHint",
                                    "data-testid": `${l}-label-hint`,
                                    children: d,
                                }),
                        ],
                    }),
                (0, c.v)("div", {
                    class: "IncodeTextAreaComposedWrapper",
                    children: (0, c.v)(I, {
                        id: l,
                        rows: u,
                        ...W,
                        ref: G,
                        required: b,
                        ...(!t && i ? { "aria-label": i } : {}),
                        "aria-describedby": M || void 0,
                        "aria-required": b ? "true" : void 0,
                        "aria-invalid": e ? "true" : void 0,
                    }),
                }),
                e &&
                    (0, c.v)("div", {
                        class: "IncodeTextAreaComposedErrorWrapper",
                        "data-testid": `${l}-error-wrapper`,
                        children: [
                            s &&
                                (0, c.v)("div", {
                                    class: "IncodeTextAreaComposedIconWrapper",
                                    children: (0, c.v)(m.g, { size: 17 }),
                                }),
                            (0, c.v)("p", { id: N, class: "IncodeTextAreaComposedError", children: e }),
                        ],
                    }),
                Z &&
                    !e &&
                    (0, c.v)("div", {
                        class: "IncodeTextAreaComposedHelperWrapper",
                        "data-testid": `${l}-helper-wrapper`,
                        children: [
                            n &&
                                (0, c.v)("div", {
                                    class: "IncodeTextAreaComposedIconWrapper",
                                    children: (0, c.v)(o.t, { size: 17 }),
                                }),
                            (0, c.v)("p", { id: p, class: "IncodeTextAreaComposedHelper", children: Z }),
                        ],
                    }),
            ],
        });
    },
).displayName = "TextAreaComposed";
var C = (0, c.a)(
        (
            {
                variant: l,
                aspectRatio: t,
                orientation: d = "horizontal",
                frameState: i = "idle",
                className: e,
                children: s,
            },
            Z,
        ) => {
            let n = `IncodeCameraFrame${i.charAt(0).toUpperCase()}${i.slice(1)}`;
            return (0, c.v)("div", {
                ref: Z,
                class: (0, a.n)(
                    "IncodeCameraFrame",
                    "fill" === l && "IncodeCameraFrameFill",
                    "locked" === l && "IncodeCameraFrameLocked",
                    "locked" === l && "horizontal" === d && "IncodeCameraFrameHorizontal",
                    "locked" === l && "vertical" === d && "IncodeCameraFrameVertical",
                    n,
                    e,
                ),
                style: t ? { aspectRatio: t } : void 0,
                "aria-hidden": !0,
                children: s,
            });
        },
    ),
    S = ({ children: l, className: t }) => (0, c.v)("div", { class: (0, a.n)("IncodeCameraOverlay", t), children: l }),
    x = ({ title: l, subtitle: t, visible: d = !0, className: i, titleId: e }) => {
        let s = (0, c.l)(null);
        return (
            (0, c._)(() => {
                s.current?.focus();
            }, []),
            (0, c.v)("div", {
                class: (0, a.n)("IncodeCameraOverlayHeader", !d && "IncodeCameraOverlayHeaderHidden", i),
                children: [
                    (0, c.v)(Z.t, {
                        ref: s,
                        id: e,
                        className: "IncodeCameraOverlayHeaderTitle",
                        tabIndex: -1,
                        children: l,
                    }),
                    (0, c.v)("p", { class: "IncodeCameraOverlayHeaderSubtitle", children: t }),
                ],
            })
        );
    },
    g = ({ stream: l, children: t, videoRef: d, onPlaying: i, className: e, ...s }) => {
        let Z = (0, c.l)(null);
        return (
            (0, c._)(() => {
                Z.current && l && ((Z.current.srcObject = l), Z.current.play().catch(() => {}));
            }, [l]),
            (0, c.v)("div", {
                class: (0, a.n)("IncodeCameraView", e),
                ...s,
                children: [
                    (0, c.v)("div", {
                        class: "IncodeCameraViewVideo",
                        children: (0, c.v)("video", {
                            ref: (l) => {
                                (Z.current = l), "function" == typeof d ? d(l) : d && (d.current = l);
                            },
                            autoplay: !0,
                            playsInline: !0,
                            muted: !0,
                            onPlaying: i,
                            "aria-hidden": "true",
                            class: "IncodeCameraViewVideoElement",
                        }),
                    }),
                    t,
                ],
            })
        );
    },
    D = ({
        onOpenHelp: l,
        onCapture: t,
        isManualCapture: d,
        captureAriaLabel: e,
        captureAriaDescribedBy: a,
        helpAriaLabel: s,
        helpButtonRef: Z,
        captureButtonRef: n,
        encryptionLabel: o,
        children: u,
    }) => {
        let { t: h } = (0, i.n)();
        return (0, c.v)("div", {
            class: "IncodeCaptureFooter",
            children: [
                (0, c.v)("div", {
                    class: "IncodeCaptureFooterEncryption",
                    children: [
                        (0, c.v)(m.r, { className: "IncodeCaptureFooterEncryptionIcon" }),
                        (0, c.v)("span", { children: o ?? h("v2.capture.label") }),
                    ],
                }),
                d && t
                    ? (0, c.v)("div", {
                          class: "IncodeCaptureFooterCaptureSection",
                          children: [
                              u,
                              (0, c.v)("button", {
                                  ref: n,
                                  type: "button",
                                  class: "IncodeCaptureFooterCaptureButton",
                                  onClick: t,
                                  "aria-label": e ?? h("manualCapture.ariaLabel"),
                                  "aria-describedby": a,
                                  "data-testid": "capture-button",
                                  children: (0, c.v)(m.f, {}),
                              }),
                          ],
                      })
                    : null,
                (0, c.v)("div", {
                    class: "IncodeCaptureFooterHelp",
                    children: (0, c.v)(b.t, {
                        ref: Z,
                        variant: "link",
                        onClick: l,
                        "aria-label": s ?? h("idv2.needHelp.open"),
                        class: "IncodeCaptureFooterHelpButton",
                        children: (0, c.v)(m.i, {}),
                    }),
                }),
            ],
        });
    },
    j = ({ className: l }) =>
        (0, c.v)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: l,
            "aria-hidden": "true",
            children: [
                (0, c.v)("path", {
                    d: "M12.2597 4.15625C14.3285 4.1835 16.3243 4.916 17.9199 6.23242C18.2394 6.49605 18.2851 6.96957 18.0214 7.28906C17.7578 7.60828 17.2852 7.65315 16.9658 7.38965C15.6357 6.29217 13.9729 5.68098 12.249 5.65625C10.5346 5.67942 8.878 6.28369 7.5527 7.37207C6.03992 8.62375 4.84504 10.2126 4.06246 12.0107C4.83423 13.8004 6.01967 15.3822 7.52242 16.626C7.84151 16.8901 7.88613 17.3635 7.62203 17.6826C7.35793 18.0017 6.88449 18.0463 6.56539 17.7822C4.79235 16.3147 3.41234 14.427 2.5527 12.29C2.48019 12.1096 2.48144 11.9077 2.55465 11.7275C3.42639 9.58276 4.81515 7.68881 6.5986 6.21387L6.60055 6.21289C8.19264 4.90541 10.1832 4.18132 12.2412 4.15625H12.2597Z",
                    fill: "currentColor",
                }),
                (0, c.v)("path", {
                    d: "M19.3963 3.80561C19.6892 3.51272 20.165 3.51271 20.4579 3.80561C20.7504 4.09843 20.7504 4.57333 20.4579 4.86615L5.10728 20.2158C4.81438 20.5087 4.33962 20.5087 4.04673 20.2158C3.75401 19.9229 3.7539 19.4481 4.04673 19.1552L19.3963 3.80561Z",
                    fill: "currentColor",
                }),
                (0, c.v)("path", {
                    d: "M12.4287 8.18359C13.377 8.22855 14.2762 8.62583 14.9502 9.2998C15.2429 9.59271 15.243 10.0675 14.9502 10.3604C14.6574 10.653 14.1825 10.653 13.8897 10.3604C13.4528 9.92345 12.8603 9.6783 12.2422 9.67969H12.2412C10.9575 9.68196 9.91866 10.725 9.92092 12.0088V12.0127C9.91873 12.6266 10.1629 13.2142 10.5987 13.6455C10.893 13.9369 10.8949 14.4117 10.6035 14.7061C10.3122 15.0003 9.83736 15.0032 9.54299 14.7119C8.82092 13.9973 8.41718 13.0228 8.42092 12.0068C8.41946 9.89669 10.1276 8.18357 12.2383 8.17969L12.4287 8.18359Z",
                    fill: "currentColor",
                }),
                (0, c.v)("path", {
                    d: "M19.0536 8.34264C19.3864 8.09617 19.8559 8.16611 20.1024 8.49889C20.8393 9.49403 21.4571 10.5723 21.9413 11.7128C22.0214 11.9015 22.0206 12.1153 21.9393 12.3036C19.9504 16.911 16.3507 19.8602 12.2499 19.8602C11.3317 19.8602 10.421 19.7108 9.55163 19.4217C9.15858 19.2911 8.94538 18.8665 9.07605 18.4735C9.20672 18.0805 9.63127 17.8683 10.0243 17.9989C10.7428 18.2378 11.4942 18.3602 12.2499 18.3602C15.4814 18.3602 18.5736 16.0795 20.4296 12.0047C20.0129 11.0822 19.5004 10.2058 18.8973 9.39147C18.6509 9.05863 18.7208 8.58917 19.0536 8.34264Z",
                    fill: "currentColor",
                }),
                (0, c.v)("path", {
                    d: "M14.5349 12.4195C14.6094 12.0122 14.9996 11.7418 15.407 11.816C15.8145 11.8902 16.0848 12.2815 16.0105 12.689C15.7256 14.2521 14.5032 15.4787 12.9392 15.7662C12.5318 15.841 12.1411 15.571 12.0662 15.1636C11.9914 14.7563 12.2605 14.3655 12.6677 14.2906C13.6177 14.116 14.3617 13.3702 14.5349 12.4195Z",
                    fill: "currentColor",
                }),
            ],
        }),
    U = ({ className: l }) =>
        (0, c.v)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: l,
            "aria-hidden": "true",
            children: [
                (0, c.v)("path", {
                    d: "M2.25 15.1279V9.51172C2.25 7.88342 2.76123 6.43316 3.74023 5.38281C4.72472 4.32662 6.12676 3.73535 7.78223 3.73535H13.2705L13.3477 3.73926C13.7258 3.7777 14.0205 4.09705 14.0205 4.48535C14.0205 4.87365 13.7258 5.193 13.3477 5.23145L13.2705 5.23535H7.78223C6.49854 5.23535 5.50964 5.68477 4.83789 6.40527C4.16068 7.13181 3.75 8.19485 3.75 9.51172V15.1279C3.75003 16.4457 4.1591 17.5083 4.83496 18.2344C5.5052 18.9542 6.49361 19.4043 7.78223 19.4043H16.2158C17.5051 19.4043 18.4945 18.9544 19.165 18.2344C19.8412 17.5083 20.25 16.4456 20.25 15.1279V12.458C20.25 12.0438 20.5858 11.708 21 11.708C21.4142 11.708 21.75 12.0438 21.75 12.458V15.1279C21.75 16.7554 21.2412 18.2061 20.2627 19.2568C19.2785 20.3135 17.8755 20.9043 16.2158 20.9043H7.78223C6.12294 20.9043 4.72013 20.3136 3.73633 19.2568C2.7582 18.2061 2.25003 16.7553 2.25 15.1279Z",
                    fill: "currentColor",
                }),
                (0, c.v)("path", {
                    d: "M14.2705 14.4121C14.6846 14.4123 15.0205 14.748 15.0205 15.1621C15.0205 15.5762 14.6846 15.912 14.2705 15.9121H7.04102C6.62682 15.9121 6.29105 15.5763 6.29102 15.1621C6.29102 14.7479 6.6268 14.4121 7.04102 14.4121H14.2705ZM8.96094 10.6523C9.37494 10.6526 9.71094 10.9883 9.71094 11.4023C9.71094 11.8164 9.37494 12.1521 8.96094 12.1523H7.04102C6.6268 12.1523 6.29102 11.8166 6.29102 11.4023C6.29102 10.9881 6.6268 10.6523 7.04102 10.6523H8.96094Z",
                    fill: "currentColor",
                }),
                (0, c.v)("path", {
                    d: "M18.4043 3.0957C18.7183 3.0957 18.9986 3.29142 19.1074 3.58594L19.209 3.85938C19.5141 4.68491 20.1638 5.33534 20.9873 5.64062L21.2607 5.74219C21.5548 5.85125 21.75 6.13168 21.75 6.44531C21.75 6.75893 21.5548 7.03941 21.2607 7.14844L20.9873 7.25C20.215 7.5363 19.5953 8.1258 19.2695 8.87891L19.209 9.03125L19.1074 9.30469C18.9986 9.59909 18.7182 9.79492 18.4043 9.79492C18.0904 9.79492 17.81 9.59909 17.7012 9.30469L17.5996 9.03125C17.2945 8.20566 16.6448 7.55532 15.8213 7.25L15.5479 7.14844C15.2538 7.03941 15.0586 6.75893 15.0586 6.44531C15.0586 6.13168 15.2538 5.85125 15.5479 5.74219L15.8213 5.64062C16.6448 5.33534 17.2945 4.68491 17.5996 3.85938L17.7012 3.58594L17.749 3.48047C17.8799 3.24552 18.1294 3.0957 18.4043 3.0957ZM18.4043 5.49414C18.1366 5.85711 17.8158 6.17742 17.4531 6.44531C17.8156 6.71307 18.1367 7.03278 18.4043 7.39551C18.6718 7.03299 18.9922 6.71298 19.3545 6.44531C18.992 6.17751 18.6719 5.8569 18.4043 5.49414Z",
                    fill: "currentColor",
                }),
                (0, c.v)("path", {
                    d: "M13.9019 8.29492C14.232 8.29495 14.5236 8.51122 14.6196 8.82715C14.7187 9.15288 14.9733 9.4071 15.2974 9.50586C15.6128 9.60214 15.8286 9.89376 15.8286 10.2236C15.8285 10.5534 15.6127 10.8441 15.2974 10.9404C14.973 11.0393 14.7187 11.2942 14.6196 11.6201C14.5236 11.936 14.232 12.1513 13.9019 12.1514C13.5717 12.1514 13.2801 11.936 13.1841 11.6201C13.0851 11.2943 12.8307 11.0393 12.5063 10.9404C12.1909 10.8442 11.9752 10.5534 11.9751 10.2236C11.9751 9.89369 12.1908 9.60208 12.5063 9.50586C12.8305 9.40708 13.085 9.15282 13.1841 8.82715C13.2801 8.5112 13.5716 8.29492 13.9019 8.29492Z",
                    fill: "currentColor",
                }),
            ],
        }),
    F = ({ className: l }) =>
        (0, c.v)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: l,
            "aria-hidden": "true",
            children: [
                (0, c.v)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.51987 5.07032C4.36282 4.16615 5.5605 3.66406 6.96486 3.66406H17.0351C18.4424 3.66406 19.6405 4.16586 20.483 5.07066C21.3199 5.96941 21.75 7.20487 21.75 8.58033V11.5041C21.75 11.9183 21.4142 12.2541 21 12.2541C20.5858 12.2541 20.25 11.9183 20.25 11.5041V8.58033C20.25 7.5146 19.9198 6.66693 19.3852 6.09284C18.8563 5.52481 18.0719 5.16406 17.0351 5.16406H6.96486C5.93193 5.16406 5.14718 5.52452 4.61702 6.09318C4.08142 6.66769 3.75 7.51548 3.75 8.58033V15.1683C3.75 16.2346 4.08027 17.0822 4.61474 17.6561C5.1436 18.224 5.92794 18.5846 6.96486 18.5846H11.1224C11.5366 18.5846 11.8724 18.9204 11.8724 19.3346C11.8724 19.7488 11.5366 20.0846 11.1224 20.0846H6.96486C5.55768 20.0846 4.35959 19.5831 3.51704 18.6784C2.68011 17.7797 2.25 16.5442 2.25 15.1683V8.58033C2.25 7.20399 2.68237 5.96865 3.51987 5.07032Z",
                    fill: "currentColor",
                }),
                (0, c.v)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.25 9.71191C2.25 9.2977 2.58579 8.96191 3 8.96191H21C21.4142 8.96191 21.75 9.2977 21.75 9.71191C21.75 10.1261 21.4142 10.4619 21 10.4619H3C2.58579 10.4619 2.25 10.1261 2.25 9.71191Z",
                    fill: "currentColor",
                }),
                (0, c.v)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.4359 14.3971C17.5875 13.5487 16.2128 13.5487 15.3644 14.3971C14.516 15.2455 14.516 16.6202 15.3644 17.4686C16.2128 18.317 17.5875 18.317 18.4359 17.4686C19.2843 16.6202 19.2843 15.2455 18.4359 14.3971ZM14.3037 13.3364C15.7379 11.9022 18.0624 11.9022 19.4966 13.3364C20.9308 14.7706 20.9308 17.0951 19.4966 18.5293C18.0624 19.9635 15.7379 19.9635 14.3037 18.5293C12.8695 17.0951 12.8695 14.7706 14.3037 13.3364Z",
                    fill: "currentColor",
                }),
                (0, c.v)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.436 17.4707C18.7289 17.1778 19.2038 17.1778 19.4967 17.4707L21.0797 19.0538C21.3726 19.3467 21.3726 19.8215 21.0797 20.1144C20.7868 20.4073 20.3119 20.4073 20.019 20.1144L18.436 18.5314C18.1431 18.2385 18.1431 17.7636 18.436 17.4707Z",
                    fill: "currentColor",
                }),
            ],
        }),
    J = ({ className: l }) =>
        (0, c.v)("svg", {
            width: "64",
            height: "64",
            viewBox: "0 0 64 64",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: l,
            "aria-hidden": "true",
            children: [
                (0, c.v)("circle", { cx: "32", cy: "32", r: "32", fill: "#14151A" }),
                (0, c.v)("path", {
                    d: "M32 41C33.1045 41 34 41.8955 34 43C34 44.1045 33.1045 45 32 45C30.8954 45 30 44.1045 30 43C30 41.8954 30.8954 41 32 41ZM32 18.5C36.6906 18.5001 40.1669 22.0578 40.167 26.5605C40.167 28.8363 39.239 30.7175 37.7119 32.0381C36.5502 33.0426 35.086 33.6855 33.5 33.9863V38H30.5V31.2568L31.9072 31.1699C33.5141 31.0696 34.8469 30.5494 35.75 29.7686C36.6245 29.0121 37.167 27.9561 37.167 26.5605C37.1669 23.7203 35.0394 21.5001 32 21.5C28.9065 21.5001 26.7253 23.7825 26.1406 26.8418L23.1934 26.2793C23.9755 22.1855 27.1118 18.5001 32 18.5Z",
                    fill: "white",
                }),
            ],
        }),
    O = ({ open: l, onClose: t, onTakeManually: d, portalContainer: e }) => {
        let { t: a } = (0, i.n)(),
            s = (0, c.h)((l) => {
                l?.focus();
            }, []);
        return (0, c.v)(u.t.Root, {
            open: l,
            onOpenChange: (l) => {
                l || t();
            },
            class: "IncodeCommonIssuesFullScreen",
            hasBackdrop: !1,
            portalContainer: e ?? void 0,
            manageInitialFocus: !1,
            children: (0, c.v)(u.t.Content, {
                class: "IncodeCommonIssuesContent",
                children: [
                    (0, c.v)(u.t.Icon, { class: "IncodeCommonIssuesQuestionIcon", children: (0, c.v)(J, {}) }),
                    (0, c.v)(u.t.TitleSection, {
                        children: (0, c.v)(Z.t, {
                            id: "incode-modal-title",
                            ref: s,
                            className: "IncodeCommonIssuesTitle",
                            tabIndex: -1,
                            children: a("commonIssues.commonIssues"),
                        }),
                    }),
                    (0, c.v)("div", {
                        class: "IncodeCommonIssuesCards",
                        children: [
                            (0, c.v)("div", {
                                class: "IncodeCommonIssuesCard",
                                children: [
                                    (0, c.v)("div", {
                                        class: "IncodeCommonIssuesCardIcon",
                                        "aria-hidden": "true",
                                        children: (0, c.v)(U, {}),
                                    }),
                                    (0, c.v)("div", {
                                        class: "IncodeCommonIssuesCardText",
                                        children: [
                                            (0, c.v)("h3", {
                                                class: "IncodeCommonIssuesCardTitle",
                                                children: a("commonIssues.glarePresent"),
                                            }),
                                            (0, c.v)("p", {
                                                class: "IncodeCommonIssuesCardBody",
                                                children: a("commonIssues.glarePresentDescription"),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.v)("div", {
                                class: "IncodeCommonIssuesCard",
                                children: [
                                    (0, c.v)("div", {
                                        class: "IncodeCommonIssuesCardIcon",
                                        "aria-hidden": "true",
                                        children: (0, c.v)(j, {}),
                                    }),
                                    (0, c.v)("div", {
                                        class: "IncodeCommonIssuesCardText",
                                        children: [
                                            (0, c.v)("h3", {
                                                class: "IncodeCommonIssuesCardTitle",
                                                children: a("commonIssues.blurPresent"),
                                            }),
                                            (0, c.v)("p", {
                                                class: "IncodeCommonIssuesCardBody",
                                                children: a("commonIssues.blurPresentDescription"),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.v)("div", {
                                class: "IncodeCommonIssuesCard",
                                children: [
                                    (0, c.v)("div", {
                                        class: "IncodeCommonIssuesCardIcon",
                                        "aria-hidden": "true",
                                        children: (0, c.v)(F, {}),
                                    }),
                                    (0, c.v)("div", {
                                        class: "IncodeCommonIssuesCardText",
                                        children: [
                                            (0, c.v)("h3", {
                                                class: "IncodeCommonIssuesCardTitle",
                                                children: a("commonIssues.notReadable"),
                                            }),
                                            (0, c.v)("p", {
                                                class: "IncodeCommonIssuesCardBody",
                                                children: a("commonIssues.notReadableDescription"),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, c.v)(u.t.Actions, {
                        class: "IncodeCommonIssuesButtons",
                        children: [
                            (0, c.v)(b.t, {
                                variant: "link",
                                onClick: () => {
                                    d(), t();
                                },
                                class: "IncodeCommonIssuesTakeManually",
                                children: a("commonIssues.takeManually"),
                            }),
                            (0, c.v)(b.t, {
                                onClick: t,
                                class: "IncodeCommonIssuesTryAgain",
                                children: a("commonIssues.tryAgain"),
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    k = ({ orientation: l, mode: t, state: d, children: i, className: e }) => {
        let s = `IncodeCaptureFrame${d.charAt(0).toUpperCase() + d.slice(1)}`;
        return (0, c.v)("div", {
            class: (0, a.n)(
                "IncodeCaptureFrame",
                "vertical" !== l || "passport" === t ? "IncodeCaptureFrameHorizontal" : "IncodeCaptureFrameVertical",
                s,
                "passport" === t && "IncodeCaptureFramePassport",
                e,
            ),
            "aria-hidden": "true",
            role: "presentation",
            children: i,
        });
    },
    E = ({
        imageUrl: l,
        orientation: t,
        mode: d,
        borderState: e,
        topContent: Z,
        bottomContent: n,
        overlayContent: b,
        blurImage: o,
    }) => {
        let { t: u } = (0, i.n)();
        return (0, c.v)(s.t, {
            hideHeader: !0,
            hideFooterBranding: !0,
            children: (0, c.v)("div", {
                class: "IncodeIdProcessingLayout",
                children: (0, c.v)("div", {
                    class: "IncodeIdProcessingLayoutContent",
                    children: [
                        Z && (0, c.v)("div", { class: "IncodeIdProcessingTopArea", children: Z }),
                        (0, c.v)(k, {
                            orientation: t,
                            mode: "id" === d ? "front" : d,
                            state: e,
                            children: [
                                (0, c.v)("img", {
                                    src: l,
                                    alt: "",
                                    "aria-hidden": "true",
                                    class: (0, a.n)(
                                        "IncodeIdProcessingImage",
                                        o ? "IncodeIdProcessingImageBlurred" : void 0,
                                    ),
                                }),
                                b &&
                                    (0, c.v)("div", {
                                        class: "IncodeIdProcessingOverlay",
                                        "aria-hidden": "true",
                                        children: b,
                                    }),
                            ],
                        }),
                        (0, c.v)("div", {
                            class: "IncodeIdProcessingBottomArea",
                            children: [
                                (0, c.v)("div", {
                                    class: "IncodeCaptureEncryptionLabel",
                                    children: [
                                        (0, c.v)(m.r, { className: "IncodeCaptureEncryptionIcon" }),
                                        (0, c.v)("span", { children: u("v2.capture.label") }),
                                    ],
                                }),
                                n,
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    v = ({ imageUrl: l, progress: t, orientation: e, mode: a, blurImage: s }) => {
        let { t: n } = (0, i.n)(),
            b = (0, c.l)(null),
            m = "vertical" !== e || "passport" === a,
            [o, u] = (0, c.p)(null);
        return (
            (0, c._)(() => {
                b.current?.focus();
            }, []),
            (0, c._)(() => {
                m
                    ? d
                          .e("62204")
                          .then(d.bind(d, 261623))
                          .then((l) => {
                              u(l.default);
                          })
                    : Promise.resolve()
                          .then(d.bind(d, 881468))
                          .then((l) => l.n)
                          .then((l) => {
                              u(l.default);
                          });
            }, [m]),
            (0, c.v)(E, {
                imageUrl: l,
                orientation: e,
                mode: a,
                borderState: "analyzing",
                blurImage: s,
                topContent: (0, c.v)("div", {
                    class: "IncodeAnalyzingContent",
                    children: [
                        (0, c.v)(N, { progress: t }),
                        (0, c.v)(Z.t, {
                            ref: b,
                            id: "analyzing-title",
                            className: "IncodeAnalyzingTitle",
                            tabIndex: -1,
                            children: n("idv2.capture.processing.analyzing"),
                        }),
                    ],
                }),
                overlayContent: o
                    ? (0, c.v)(h.a, { animationData: o, loop: !0, className: "IncodeAnalyzingLottie" })
                    : null,
            })
        );
    },
    K = ({ className: l, ...t }) =>
        (0, c.v)("svg", {
            class: l,
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            ...t,
            children: (0, c.v)("path", {
                d: "M16 0C24.8363 0.00012782 32 7.1636 32 16C31.9999 24.8363 24.8363 31.9999 16 32C7.16362 32 7.37067e-05 24.8364 0 16C0 7.16352 7.16357 0 16 0ZM22.3486 11.2314C21.8838 10.7668 21.1503 10.736 20.6494 11.1387L20.6406 11.1455L20.5537 11.2236L13.7139 18.0635L11.4521 15.8008C10.9543 15.3032 10.1473 15.3033 9.64941 15.8008C9.18435 16.2658 9.15345 17.0008 9.55664 17.502L9.56348 17.5098L9.6416 17.5977L12.8125 20.7686C13.2775 21.2335 14.0117 21.2644 14.5127 20.8613L14.5205 20.8545L14.6084 20.7764L22.3486 13.0352C22.8467 12.5371 22.8467 11.7295 22.3486 11.2314Z",
                fill: "#189F60",
            }),
        }),
    H = ({
        variant: l,
        imageUrl: t,
        orientation: d,
        mode: e,
        title: s,
        subtitle: n,
        buttonText: m,
        onButtonClick: o,
        attemptsRemaining: u,
        blurImage: h,
    }) => {
        let { t: G } = (0, i.n)(),
            p = (0, c.l)(null);
        return (
            (0, c._)(() => {
                p.current?.focus();
            }, []),
            (0, c.v)(E, {
                imageUrl: t,
                orientation: d,
                mode: e,
                borderState: l,
                blurImage: h,
                topContent: (0, c.v)("div", {
                    class: "IncodeIdProcessingResultContent",
                    role: "status",
                    children: [
                        (0, c.v)("success" === l ? K : W, { className: "IncodeIdProcessingResultIcon" }),
                        (0, c.v)(a.r, { size: 16 }),
                        s &&
                            (0, c.v)(Z.t, {
                                ref: p,
                                className: "IncodeIdProcessingResultTitle",
                                tabIndex: -1,
                                children: s,
                            }),
                        n &&
                            (0, c.v)(c.S, {
                                children: [
                                    (0, c.v)(a.r, { size: 12 }),
                                    (0, c.v)("p", { class: "IncodeIdProcessingResultSubtitle", children: n }),
                                ],
                            }),
                    ],
                }),
                bottomContent: (0, c.v)("div", {
                    class: "IncodeIdProcessingResultButtonContainer",
                    children: [
                        void 0 !== u &&
                            u > 0 &&
                            (0, c.v)("p", {
                                class: "IncodeIdProcessingResultAttempts",
                                children: G("v2.idError.attemptsLeft", { count: u }),
                            }),
                        (0, c.v)(b.t, { onClick: o, "data-testid": "retry-button", children: m }),
                    ],
                }),
            })
        );
    },
    Q = ({ manager: l, state: t, blurImage: d }) => {
        let { t: e } = (0, i.n)();
        if (!t.previewImageUrl) return null;
        let a = "passport" === t.currentMode ? "passport" : "id";
        return (0, c.v)(H, {
            variant: "success",
            imageUrl: t.previewImageUrl,
            orientation: t.orientation,
            mode: a,
            title: e("idv2.capture.processing.successTitle"),
            subtitle: e(
                t.needsBackCapture
                    ? "idv2.capture.processing.successFrontSubtitle"
                    : t.needsFrontCapture
                      ? "idv2.capture.processing.successBackSubtitleScanFront"
                      : "idv2.capture.processing.successBackSubtitle",
            ),
            buttonText: e(
                t.needsBackCapture
                    ? "idv2.capture.processing.scanBack"
                    : t.needsFrontCapture
                      ? "idv2.capture.processing.scanFront"
                      : "idv2.capture.processing.continue",
            ),
            onButtonClick: () => l.nextStep(),
            blurImage: d,
        });
    },
    P = ({ manager: l, state: t, blurImage: d, ...e }) => {
        let { t: a } = (0, i.n)();
        if ("error" === t.status)
            return (0, c.v)("div", {
                class: "IncodeIdError",
                role: "alert",
                children: [
                    (0, c.v)("div", { class: "IncodeIdErrorMessage", children: t.error }),
                    (0, c.v)(b.t, {
                        onClick: () => l.reset(),
                        "data-testid": "retry-button",
                        children: a("idv2.capture.processing.tryAgain"),
                    }),
                ],
            });
        let s = "passport" === t.currentMode ? "passport" : "id";
        return t.previewImageUrl
            ? (0, c.v)(H, {
                  variant: "error",
                  imageUrl: t.previewImageUrl,
                  orientation: t.orientation,
                  mode: s,
                  title: t.uploadErrorMessage ? a(t.uploadErrorMessage) : void 0,
                  subtitle: t.uploadErrorDescription ? a(t.uploadErrorDescription) : void 0,
                  buttonText: a(t.canRetry ? "idv2.capture.processing.tryAgain" : "idv2.capture.processing.continue"),
                  onButtonClick: () => l.continueFromError(),
                  attemptsRemaining: t.attemptsRemaining,
                  blurImage: d,
              })
            : null;
    },
    f = ({ manager: l, attemptsRemaining: t }) =>
        (0, c.v)(G, { onRetry: () => l.retryCapture(), attemptsRemaining: t }),
    B = ({ manager: l }) => {
        let { t: t } = (0, i.n)(),
            d = (0, c.l)(null);
        return (
            (0, c._)(() => {
                d.current?.focus();
            }, []),
            (0, c.v)(s.t, {
                hideHeader: !0,
                hideFooterBranding: !0,
                className: "IncodeIdNoAttemptsPage",
                children: [
                    (0, c.v)("div", {
                        class: "IncodeIdNoAttemptsContent",
                        role: "alert",
                        children: [
                            (0, c.v)(W, { className: "IncodeIdNoAttemptsIcon" }),
                            (0, c.v)(Z.t, {
                                ref: d,
                                tabIndex: -1,
                                className: "IncodeIdNoAttemptsTitle",
                                children: t("idv2.capture.notifications.idScanFailed"),
                            }),
                            (0, c.v)(a.r, { size: 12 }),
                            (0, c.v)("p", {
                                class: "IncodeIdNoAttemptsSubtitle",
                                children: t("idv2.capture.processing.noAttemptsRemaining"),
                            }),
                            (0, c.v)(a.r, { size: 80 }),
                        ],
                    }),
                    (0, c.v)("div", {
                        class: "IncodeIdNoAttemptsButtonContainer",
                        children: (0, c.v)(b.t, {
                            variant: "primary",
                            onClick: () => {
                                l.continueExhausted();
                            },
                            children: t("idv2.capture.processing.continue"),
                        }),
                    }),
                ],
            })
        );
    },
    A = new Map(),
    _ = !1;
function $(l) {
    _ ||
        ((_ = !0),
        Promise.all([
            d.e("72536").then(d.bind(d, 865835)),
            d.e("2423").then(d.bind(d, 10826)),
            d.e("80968").then(d.bind(d, 124667)),
            d.e("76409").then(d.bind(d, 938720)),
            d.e("47444").then(d.bind(d, 756415)),
        ])
            .then(([t, d, i, c, e]) => {
                A.set("blur", t.default),
                    A.set("glare", d.default),
                    A.set("align", i.default),
                    A.set("front", c.default),
                    A.set("back", e.default),
                    l?.();
            })
            .catch(() => {}));
}
var q = ({ detectionStatus: l, mode: t, isCapturing: d }) => {
        let { t: e } = (0, i.n)(),
            s = (function (l, t) {
                let { t: d } = (0, i.n)(),
                    [, e] = (0, c.p)(0);
                if (
                    ((0, c._)(() => {
                        $(() => e((l) => l + 1));
                    }, []),
                    "blur" === l)
                )
                    return {
                        title: d("idv2.capture.notifications.blur.title"),
                        description: d("idv2.capture.notifications.blur.description"),
                        animationData: A.get("blur") ?? null,
                    };
                if ("glare" === l)
                    return {
                        title: d("idv2.capture.notifications.glare.title"),
                        description: d("idv2.capture.notifications.glare.description"),
                        animationData: A.get("glare") ?? null,
                    };
                if ("farAway" === l)
                    return {
                        title: d("idv2.capture.notifications.notAligned.title"),
                        description: d("idv2.capture.notifications.notAligned.description"),
                        animationData: A.get("align") ?? null,
                    };
                if ("wrongSide" === l) {
                    let l = "back" === t;
                    return {
                        title: d(
                            l
                                ? "idv2.capture.notifications.showBack.title"
                                : "idv2.capture.notifications.showFront.title",
                        ),
                        description: d(
                            l
                                ? "idv2.capture.notifications.showBack.description"
                                : "idv2.capture.notifications.showFront.description",
                        ),
                        animationData: A.get(l ? "back" : "front") ?? null,
                    };
                }
                return null;
            })(l, t),
            Z = (0, c.l)(null),
            n = (0, c.l)({ message: "", at: 0 }),
            b = (0, c.l)(l),
            m = (0, c.l)(!1),
            o = (0, c.l)(),
            u = (0, c.l)(),
            W = "detecting" === l || "idNotDetected" === l || "manualCapture" === l,
            G = "manualCapture" === l,
            p = "wrongSide" === l,
            N = "farAway" === l,
            M = "glare" === l,
            X = "blur" === l,
            y = (0, c.h)((l) => {
                let t = Date.now(),
                    d = n.current;
                if (l === d.message && t - d.at < 200) return;
                n.current = { message: l, at: t };
                let i = Z.current;
                i &&
                    (clearTimeout(o.current),
                    (i.textContent = ""),
                    (u.current = setTimeout(() => {
                        (i.textContent = l),
                            (o.current = setTimeout(() => {
                                i.textContent = "";
                            }, 3e3));
                    }, 50)));
            }, []),
            Y = (0, c.h)(
                () =>
                    e(
                        "passport" === t
                            ? "idv2.capture.fillFramePassport"
                            : "back" === t
                              ? "idv2.capture.fillFrameBack"
                              : "idv2.capture.fillFrameFront",
                    ),
                [t, e],
            );
        return (
            (0, c._)(() => {
                if (G) {
                    m.current = !1;
                    return;
                }
                if (m.current || !W) return;
                let l = setTimeout(() => {
                    (m.current = !0), y(Y());
                }, 500);
                return () => clearTimeout(l);
            }, [W, G, y, Y]),
            (0, c._)(() => {
                let t = b.current;
                (b.current = l),
                    "manualCapture" !== t && G && y(e("idv2.capture.manualCapture.modeSwitchAriaAnnouncement"));
            }, [y, l, G, e]),
            (0, c._)(() => {
                if (!d) {
                    if (p) {
                        let l =
                            "front" === t || "passport" === t
                                ? "idv2.capture.notifications.showFront"
                                : "idv2.capture.notifications.showBack";
                        y(`${e(`${l}.title`)}. ${e(`${l}.description`)}`);
                        return;
                    }
                    if (N) return void y(`${e("idv2.capture.notifications.notAligned.title")}.`);
                    if (M) return void y(`${e("idv2.capture.notifications.glare.title")}.`);
                    if (X) return void y(`${e("idv2.capture.notifications.blur.title")}.`);
                    W && m.current && y(Y());
                }
            }, [y, X, d, N, M, W, p, t, e, Y]),
            (0, c._)(
                () => () => {
                    clearTimeout(u.current), clearTimeout(o.current);
                },
                [],
            ),
            (0, c.v)(c.S, {
                children: [
                    (0, c.v)("div", { ref: Z, class: "IncodeSrOnly", "aria-live": "assertive", "aria-atomic": "true" }),
                    s
                        ? (0, c.v)("div", {
                              class: (0, a.n)("IncodeIdCaptureNotification"),
                              "aria-hidden": "true",
                              children: (0, c.v)("div", {
                                  class: "IncodeIdCaptureNotificationContent",
                                  children: [
                                      (0, c.v)("div", {
                                          class: (0, a.n)("IncodeIdCaptureNotificationText"),
                                          children: [
                                              (0, c.v)("div", {
                                                  class: "IncodeIdCaptureNotificationTitle",
                                                  children: s.title,
                                              }),
                                              s.description &&
                                                  (0, c.v)("div", {
                                                      class: "IncodeIdCaptureNotificationDescription",
                                                      children: s.description,
                                                  }),
                                          ],
                                      }),
                                      (0, c.v)(a.r, { size: 16, direction: "horizontal" }),
                                      s.animationData &&
                                          (0, c.v)("div", {
                                              class: "IncodeIdCaptureNotificationAnimation",
                                              children: (0, c.v)(h.a, { animationData: s.animationData, loop: !0 }),
                                          }),
                                  ],
                              }),
                          })
                        : null,
                ],
            })
        );
    },
    ll = (0, c.c)(() => d.e("60616").then(d.bind(d, 413787))),
    lt = (0, c.c)(() => d.e("33043").then(d.bind(d, 303454))),
    ld = (0, c.c)(() => d.e("42756").then(d.bind(d, 178191))),
    li = (0, c.c)(() => d.e("90458").then(d.bind(d, 989665))),
    lc = (0, c.c)(() => d.e("32457").then(d.bind(d, 811952))),
    le = (0, c.c)(() => d.e("82344").then(d.bind(d, 834779))),
    la = { "front-horizontal": 348, "back-horizontal": 348, "passport-horizontal": 342 },
    ls = { "front-vertical": 446, "back-vertical": 446, "passport-vertical": 342 },
    lZ = ({ mode: l, orientation: t, onAnimationEnd: d }) => {
        let i = (0, c.l)(null),
            [e, a] = (0, c.p)(1);
        return (
            (0, c._)(() => {
                let d = i.current;
                if (!d) return;
                let c = () => {
                    a(
                        (function (l, t, d, i) {
                            let c = `${l}-${t}`,
                                e = la[c];
                            if (e) return d / e;
                            let a = ls[c];
                            return a ? i / a : 1;
                        })(l, t, d.clientWidth, d.clientHeight),
                    );
                };
                c();
                let e = new ResizeObserver(c);
                return e.observe(d), () => e.disconnect();
            }, [l, t]),
            (0, c.v)("div", {
                ref: i,
                class: "IncodeIdHint",
                "aria-hidden": "true",
                role: "presentation",
                children: (0, c.v)("div", {
                    class: "IncodeIdHintAnimated",
                    onAnimationEnd: (l) => {
                        "slideUpAndDown" === l.animationName && d?.();
                    },
                    children: (0, c.v)(c.o, {
                        fallback: null,
                        children: (0, c.v)("div", {
                            class: "IncodeIdHintSvg",
                            style: { transform: `scale(${e})` },
                            children:
                                "front" === l
                                    ? (0, c.v)("horizontal" === t ? ll : lt, {})
                                    : "back" === l
                                      ? (0, c.v)("horizontal" === t ? ld : li, {})
                                      : "passport" === l
                                        ? (0, c.v)("horizontal" === t ? lc : le, {})
                                        : null,
                        }),
                    }),
                }),
            })
        );
    },
    ln = (0, c.a)(
        (
            {
                mode: l,
                orientation: t,
                detectionStatus: d,
                counterValue: e,
                isCapturing: s,
                showManualCapture: Z,
                onCapture: n,
                onOpenHelp: b,
                helpButtonRef: m,
                captureButtonRef: o,
            },
            u,
        ) => {
            let { t: h } = (0, i.n)();
            (0, c._)(() => {
                $();
            }, []);
            let W = (0, c.l)(!1),
                [G, p] = (0, c.p)(!1);
            (0, c._)(() => {
                if ("idNotDetected" === d) {
                    if (W.current) return;
                    (W.current = !0), p(!0);
                    return;
                }
                G && p(!1);
            }, [d, G]),
                (0, c._)(() => {
                    Z && o && o.current?.focus();
                }, [Z, o]);
            let N = (0, c.d)(() => {
                    if (s || "capturing" === d)
                        return { title: h("idv2.capture.takingPhoto"), subtitle: h("idv2.capture.dontMove") };
                    if ("detecting" === d || "idNotDetected" === d || "manualCapture" === d) {
                        let t = "manualCapture" === d;
                        return "passport" === l
                            ? {
                                  title: h("idv2.capture.fillFramePassport"),
                                  subtitle: t ? "" : h("idv2.capture.autoCapture"),
                              }
                            : "back" === l
                              ? {
                                    title: h("idv2.capture.fillFrameBack"),
                                    subtitle: t ? "" : h("idv2.capture.autoCapture"),
                                }
                              : {
                                    title: h("idv2.capture.fillFrameFront"),
                                    subtitle: t ? "" : h("idv2.capture.autoCapture"),
                                };
                    }
                    return null;
                }, [s, d, l, h]),
                M =
                    s || "capturing" === d
                        ? "capturing"
                        : "blur" === d || "glare" === d || "wrongSide" === d || "farAway" === d
                          ? "error"
                          : "idle",
                X = "passport" === l,
                y = "vertical" !== t || X ? "horizontal" : "vertical";
            return (0, c.v)(S, {
                className: "IncodeCaptureOverlayId",
                children: [
                    (0, c.v)("div", {
                        class: "IncodeCaptureTopSection",
                        children: [
                            (0, c.v)(q, { detectionStatus: d, mode: l, isCapturing: s }),
                            (0, c.v)(x, {
                                title: N?.title ?? "",
                                subtitle: N?.subtitle,
                                visible: null !== N,
                                titleId: "id-capture-heading",
                            }),
                        ],
                    }),
                    (0, c.v)(C, {
                        ref: u,
                        variant: "locked",
                        orientation: y,
                        frameState: M,
                        className: (0, a.n)(X && "IncodeCaptureFramePassport"),
                        children: [
                            s && e > 0 && (0, c.v)("div", { class: "IncodeCaptureCounter", children: e }),
                            G && (0, c.v)(lZ, { mode: l, orientation: t ?? "horizontal", onAnimationEnd: () => p(!1) }),
                        ],
                    }),
                    (0, c.v)("div", {
                        class: "IncodeSrOnly",
                        "aria-live": "polite",
                        "aria-atomic": "true",
                        children: s && e > 0 ? e : "",
                    }),
                    (0, c.v)(D, {
                        onOpenHelp: b,
                        onCapture: n,
                        isManualCapture: Z,
                        helpButtonRef: m,
                        captureButtonRef: o,
                        captureAriaDescribedBy: Z ? "manual-capture-tooltip" : void 0,
                        children: Z
                            ? (0, c.v)("div", {
                                  class: "IncodeIdManualCaptureTooltipContainer",
                                  children: (0, c.v)("div", {
                                      id: "manual-capture-tooltip",
                                      class: "IncodeIdManualCaptureTooltip",
                                      children: (0, c.v)("ol", {
                                          class: "IncodeIdManualCaptureTooltipList",
                                          children: [
                                              (0, c.v)("li", {
                                                  children: h(
                                                      X
                                                          ? "idv2.commonIssues.firstStepPassport"
                                                          : "idv2.commonIssues.firstStep",
                                                  ),
                                              }),
                                              (0, c.v)("li", { children: h("idv2.commonIssues.secondStep") }),
                                          ],
                                      }),
                                  }),
                              })
                            : null,
                    }),
                ],
            });
        },
    ),
    lb = ({ manager: l, state: t }) => {
        if ("uploading" === t.captureStatus && t.previewImageUrl) {
            let l = "passport" === t.currentMode ? "passport" : "id";
            return (0, c.v)(v, {
                imageUrl: t.previewImageUrl,
                progress: t.uploadProgress ?? 0,
                orientation: t.orientation,
                mode: l,
                blurImage: t.ageAssurance,
            });
        }
        return "success" === t.captureStatus && t.previewImageUrl
            ? (0, c.v)(Q, { manager: l, state: t, blurImage: t.ageAssurance })
            : "uploadError" === t.captureStatus && t.previewImageUrl
              ? (0, c.v)(P, { manager: l, state: t, blurImage: t.ageAssurance })
              : (0, c.v)(lm, { manager: l, state: t });
    },
    lm = ({ manager: l, state: t }) => {
        let d = (0, c.l)(null),
            i = (0, c.l)(null),
            a = (0, c.l)(null),
            Z = (0, c.l)(null),
            [n, b] = (0, c.p)(!1),
            m = (0, c.h)(() => {
                let t = d.current;
                if (!t) return;
                let i = t.getBoundingClientRect();
                l.updateDetectionArea({ x: i.left, y: i.top, width: i.width, height: i.height });
            }, [l]);
        (0, e.n)("resize", m), (0, e.t)(d, m);
        let o = "capturing" === t.captureStatus || "capturing" === t.detectionStatus,
            u = t.detectionStatus,
            h =
                "manualCapture" === u ||
                (t.showCaptureButtonInAuto && "detecting" === t.captureStatus && "capturing" !== u);
        return (0, c.v)(s.t, {
            hideHeader: !0,
            hideFooterBranding: !0,
            className: "IncodeIdCapturePage",
            children: [
                (0, c.v)(g, {
                    stream: t.stream,
                    onPlaying: m,
                    "aria-hidden": n || void 0,
                    children: (0, c.v)(ln, {
                        ref: d,
                        mode: t.currentMode,
                        orientation: t.orientation,
                        detectionStatus: t.detectionStatus,
                        counterValue: t.counterValue,
                        isCapturing: o,
                        showManualCapture: h,
                        onCapture: () => {
                            l.capture();
                        },
                        onOpenHelp: () => {
                            b(!0);
                        },
                        helpButtonRef: i,
                        captureButtonRef: a,
                    }),
                }),
                (0, c.v)("div", { ref: Z }),
                (0, c.v)(O, {
                    open: n,
                    onClose: () => {
                        b(!1),
                            requestAnimationFrame(() => {
                                a.current ? a.current.focus() : i.current?.focus();
                            });
                    },
                    onTakeManually: () => {
                        b(!1), l.switchToManualCapture();
                    },
                    portalContainer: Z.current,
                }),
            ],
        });
    },
    lo = ({ manager: l, state: t }) => {
        let { t: e } = (0, i.n)(),
            [s, Z] = (0, c.p)(!1),
            [n, b] = (0, c.p)(null),
            m = "passport" === t.selectedDocumentType,
            o = "back" === t.currentMode;
        (0, c._)(() => {
            m
                ? d
                      .e("41107")
                      .then(d.bind(d, 953566))
                      .then((l) => {
                          b(l.default);
                      })
                : o
                  ? d
                        .e("13096")
                        .then(d.bind(d, 543035))
                        .then((l) => {
                            b(l.default);
                        })
                  : d
                        .e("7943")
                        .then(d.bind(d, 768666))
                        .then((l) => {
                            b(l.default);
                        });
        }, [m, o]);
        let u = e(m ? "idv2.capture.passport.title" : o ? "idv2.backTutorial.title" : "idv2.tutorial.title"),
            W = e(m ? "idv2.capture.passport.subtitle" : o ? "idv2.backTutorial.subtitle" : "idv2.tutorial.subtitle"),
            G = e(o ? "idv2.backTutorial.disclaimer" : "idv2.tutorial.v2.autocapture");
        return (0, c.v)(h.i, {
            animationData: n,
            title: u,
            subtitle: W,
            onContinue: () => {
                Z(!0), l.nextStep();
            },
            buttonText: e("idv2.tutorial.startScan"),
            disclaimerText: G,
            isLoading: s,
            className: (0, a.n)("IncodeIdTutorial", m ? "IncodeIdTutorialPassport" : "IncodeIdTutorialId"),
        });
    },
    lu = {
        digitalIdUpload: {
            type: "digitalIdUpload",
            icon: () =>
                (0, c.v)("svg", {
                    width: "61",
                    height: "61",
                    viewBox: "0 0 61 61",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    focusable: "false",
                    class: "IncodeDigitalIdIcon",
                    children: [
                        (0, c.v)("title", { children: "Digital ID Icon" }),
                        (0, c.v)("g", {
                            clipPath: "url(#clip0_24620_2022)",
                            children: [
                                (0, c.v)("g", {
                                    clipPath: "url(#clip1_24620_2022)",
                                    children: [
                                        (0, c.v)("path", {
                                            d: "M15.792 9.26169C15.792 8.51041 16.401 7.90137 17.1523 7.90137L44.0187 7.90137C44.77 7.90137 45.379 8.51041 45.379 9.26169L45.379 50.4115C45.379 51.1628 44.77 51.7718 44.0187 51.7718L17.1523 51.7718C16.401 51.7718 15.792 51.1628 15.792 50.4115L15.792 9.26169Z",
                                            fill: "white",
                                        }),
                                        (0, c.v)("rect", {
                                            x: "31.0889",
                                            y: "13.8564",
                                            width: "12.9231",
                                            height: "15.8138",
                                            rx: "1.36032",
                                            fill: "#EAF0F6",
                                        }),
                                        (0, c.v)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M36.0471 19.967C36.0471 20.1823 35.8722 20.3577 35.6564 20.3577H34.2571C34.0418 20.3577 33.8664 20.1823 33.8664 19.967V18.5677C33.8664 18.3519 34.0418 18.177 34.2571 18.177H35.6564C35.8722 18.177 36.0471 18.3519 36.0471 18.5677V19.967ZM35.6564 17.2588H34.2571C33.5354 17.2588 32.9482 17.846 32.9482 18.5677V19.967C32.9482 20.6887 33.5354 21.2759 34.2571 21.2759H35.6564C36.3781 21.2759 36.9653 20.6887 36.9653 19.967V18.5677C36.9653 17.846 36.3781 17.2588 35.6564 17.2588Z",
                                            class: "IncodeDigitalIdIconFill",
                                        }),
                                        (0, c.v)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M34.9571 18.8086C34.7037 18.8086 34.498 19.017 34.498 19.2704C34.498 19.5239 34.7037 19.7295 34.9571 19.7295C35.2106 19.7295 35.4162 19.5239 35.4162 19.2704V19.2649C35.4162 19.0115 35.2106 18.8086 34.9571 18.8086Z",
                                            class: "IncodeDigitalIdIconFill",
                                        }),
                                        (0, c.v)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M34.9571 23.9736C34.7037 23.9736 34.498 24.1821 34.498 24.4355C34.498 24.6889 34.7037 24.8946 34.9571 24.8946C35.2106 24.8946 35.4162 24.6889 35.4162 24.4355V24.43C35.4162 24.1766 35.2106 23.9736 34.9571 23.9736Z",
                                            class: "IncodeDigitalIdIconFill",
                                        }),
                                        (0, c.v)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M36.0471 25.132C36.0471 25.3473 35.8722 25.5227 35.6564 25.5227H34.2571C34.0418 25.5227 33.8664 25.3473 33.8664 25.132V23.7327C33.8664 23.5169 34.0418 23.342 34.2571 23.342H35.6564C35.8722 23.342 36.0471 23.5169 36.0471 23.7327V25.132ZM35.6564 22.4238H34.2571C33.5354 22.4238 32.9482 23.011 32.9482 23.7327V25.132C32.9482 25.8537 33.5354 26.4409 34.2571 26.4409H35.6564C36.3781 26.4409 36.9653 25.8537 36.9653 25.132V23.7327C36.9653 23.011 36.3781 22.4238 35.6564 22.4238Z",
                                            class: "IncodeDigitalIdIconFill",
                                        }),
                                        (0, c.v)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M41.2239 25.132C41.2239 25.3473 41.049 25.5227 40.8332 25.5227H39.4339C39.2186 25.5227 39.0432 25.3473 39.0432 25.132V23.7327C39.0432 23.5169 39.2186 23.342 39.4339 23.342H40.8332C41.049 23.342 41.2239 23.5169 41.2239 23.7327V25.132ZM40.8332 22.4238H39.4339C38.7122 22.4238 38.125 23.011 38.125 23.7327V25.132C38.125 25.8537 38.7122 26.4409 39.4339 26.4409H40.8332C41.5549 26.4409 42.1421 25.8537 42.1421 25.132V23.7327C42.1421 23.011 41.5549 22.4238 40.8332 22.4238Z",
                                            class: "IncodeDigitalIdIconFill",
                                        }),
                                        (0, c.v)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M40.1183 23.9658C39.8649 23.9658 39.6592 24.1715 39.6592 24.4249V24.43C39.6592 24.6834 39.8649 24.8863 40.1183 24.8863C40.3717 24.8863 40.5774 24.6783 40.5774 24.4249C40.5774 24.1715 40.3717 23.9658 40.1183 23.9658Z",
                                            class: "IncodeDigitalIdIconFill",
                                        }),
                                        (0, c.v)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M38.5841 18.1797C38.8375 18.1797 39.0432 17.9741 39.0432 17.7206V17.7151C39.0432 17.4617 38.8375 17.2588 38.5841 17.2588C38.3307 17.2588 38.125 17.4672 38.125 17.7206C38.125 17.9741 38.3307 18.1797 38.5841 18.1797Z",
                                            class: "IncodeDigitalIdIconFill",
                                        }),
                                        (0, c.v)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M40.9929 17.2588H40.1183C39.8644 17.2588 39.6592 17.4645 39.6592 17.7179C39.6592 17.9713 39.8644 18.177 40.1183 18.177H40.9929C41.1118 18.177 41.2086 18.2738 41.2086 18.3932V19.2673C41.2086 19.5207 41.4138 19.7264 41.6677 19.7264C41.9211 19.7264 42.1268 19.5207 42.1268 19.2673V18.3932C42.1268 17.7675 41.6181 17.2588 40.9929 17.2588Z",
                                            class: "IncodeDigitalIdIconFill",
                                        }),
                                        (0, c.v)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M41.6677 20.3545H40.1183C39.8649 20.3545 39.6592 20.5602 39.6592 20.8136C39.6592 21.067 39.8649 21.2727 40.1183 21.2727H41.6677C41.9211 21.2727 42.1268 21.067 42.1268 20.8136C42.1268 20.5602 41.9211 20.3545 41.6677 20.3545Z",
                                            class: "IncodeDigitalIdIconFill",
                                        }),
                                        (0, c.v)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M38.5841 21.2762C38.8375 21.2762 39.0432 21.0705 39.0432 20.8171V19.9426C39.0432 19.8237 39.1401 19.7268 39.2594 19.7268H40.1335C40.387 19.7268 40.5926 19.5211 40.5926 19.2677C40.5926 19.0143 40.387 18.8086 40.1335 18.8086H39.2594C38.6337 18.8086 38.125 19.3173 38.125 19.9426V20.8171C38.125 21.0705 38.3307 21.2762 38.5841 21.2762Z",
                                            class: "IncodeDigitalIdIconFill",
                                        }),
                                        (0, c.v)("rect", {
                                            x: "18.0088",
                                            y: "32.5596",
                                            width: "10.3725",
                                            height: "2.04049",
                                            rx: "0.680162",
                                            fill: "#EBECEF",
                                        }),
                                        (0, c.v)("rect", {
                                            x: "15.792",
                                            y: "10.2881",
                                            width: "29.587",
                                            height: "2.04049",
                                            fill: "#EBECEF",
                                        }),
                                        (0, c.v)("rect", {
                                            x: "18.0088",
                                            y: "36.1318",
                                            width: "10.3725",
                                            height: "2.04049",
                                            rx: "0.680162",
                                            fill: "#EBECEF",
                                        }),
                                        (0, c.v)("rect", {
                                            x: "18.0088",
                                            y: "39.7002",
                                            width: "13.7733",
                                            height: "2.04049",
                                            rx: "0.680162",
                                            fill: "#EBECEF",
                                        }),
                                    ],
                                }),
                                (0, c.v)("path", {
                                    d: "M44.0186 7.40527C45.0437 7.40527 45.875 8.23653 45.875 9.26172L45.875 50.4111C45.875 51.4363 45.0437 52.2676 44.0186 52.2676L17.1523 52.2676C16.1272 52.2676 15.2959 51.4363 15.2959 50.4111L15.2959 9.26172C15.2959 8.23653 16.1272 7.40527 17.1523 7.40527L44.0186 7.40527Z",
                                    stroke: "#EBECEF",
                                    "stroke-width": "0.991903",
                                }),
                                (0, c.v)("g", {
                                    clipPath: "url(#clip2_24620_2022)",
                                    children: [
                                        (0, c.v)("rect", {
                                            x: "17.1406",
                                            y: "13.9385",
                                            width: "12.9231",
                                            height: "15.7324",
                                            rx: "0.936455",
                                            class: "IncodeDigitalIdIconFill",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M21.8309 24.4387V24.4627C21.8243 24.9696 21.3976 25.3508 20.5508 25.6062C21.5712 26.3475 22.5916 26.9405 23.612 26.9405C24.6323 26.9405 25.6528 26.3475 26.6732 25.6062C25.8321 25.3505 25.4054 24.9687 25.393 24.461C25.393 24.2683 25.3937 22.3909 25.3946 22.1982C25.4554 22.2068 25.4502 22.2013 25.3946 22.1859C25.3963 21.551 25.399 22.382 25.4028 21.5145C25.4066 20.6469 21.772 19.8708 21.8253 22.2529C21.8261 22.4958 21.8275 24.1637 21.8309 24.4387Z",
                                            fill: "url(#paint0_linear_24620_2022)",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M30.0636 27.3311C30.0636 27.7906 30.0636 28.306 30.0636 28.736C30.0636 29.2532 29.6443 29.6722 29.1272 29.6722H18.0771C17.5599 29.6722 17.1406 29.2532 17.1406 28.736C17.1406 28.3274 17.1406 27.8355 17.1406 27.3678C17.7416 26.2926 21.2377 25.2953 21.2377 25.2953C21.5621 25.8813 22.5143 26.4159 23.489 26.4398C24.5467 26.4657 25.6309 25.931 25.9681 25.2949C25.9681 25.2949 29.4626 26.2556 30.0636 27.3311Z",
                                            fill: "#CECECE",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M21.79 23.277C23.2839 23.1218 24.6905 23.7686 24.6905 23.7686C24.6905 23.7686 24.4117 25.2333 21.79 24.8076V23.277Z",
                                            fill: "#CDCDCD",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M20.5573 20.2079C20.7564 19.8756 21.0049 20.1041 21.1042 20.2599L21.243 21.7372C21.2381 21.8658 21.1611 21.9474 20.9602 21.9729C20.7091 22.0046 20.5432 21.3207 20.4853 21.0654C20.4275 20.8101 20.3083 20.6232 20.5573 20.2079Z",
                                            fill: "url(#paint1_linear_24620_2022)",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M26.5706 20.2909C26.3745 19.9567 26.1239 20.1829 26.0231 20.3377L25.8704 21.8136C25.874 21.9422 25.9503 22.0246 26.1509 22.0519C26.4017 22.0861 26.5741 21.4038 26.6344 21.149C26.6946 20.8943 26.8156 20.7085 26.5706 20.2909Z",
                                            fill: "url(#paint2_linear_24620_2022)",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M26.3682 20.5538C26.3682 22.6903 24.8215 24.4222 23.6143 24.4222C22.2939 24.4222 20.8604 22.6903 20.8604 20.5538C20.8604 18.6502 21.0123 16.6162 23.6143 16.6162C26.2163 16.6162 26.3682 18.6062 26.3682 20.5538Z",
                                            fill: "#FAFAFA",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, c.v)("defs", {
                            children: [
                                (0, c.v)("linearGradient", {
                                    id: "paint0_linear_24620_2022",
                                    x1: "23.3405",
                                    y1: "22.3978",
                                    x2: "23.3405",
                                    y2: "25.346",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { stopColor: "#B1B1B1" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint1_linear_24620_2022",
                                    x1: "21.0945",
                                    y1: "20.9548",
                                    x2: "20.6152",
                                    y2: "21.0435",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { offset: "0.171875", stopColor: "#BDBDBD" }),
                                        (0, c.v)("stop", { offset: "0.640625", stopColor: "#E1E1E1" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "#DDDDDD" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint2_linear_24620_2022",
                                    x1: "26.0263",
                                    y1: "21.0327",
                                    x2: "26.5047",
                                    y2: "21.1259",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { offset: "0.0416667", stopColor: "#B5B5B5" }),
                                        (0, c.v)("stop", { offset: "0.362488", stopColor: "#E2E2E2" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("clipPath", {
                                    id: "clip0_24620_2022",
                                    children: (0, c.v)("rect", {
                                        width: "60",
                                        height: "60",
                                        fill: "white",
                                        transform: "translate(0.5 0.5)",
                                    }),
                                }),
                                (0, c.v)("clipPath", {
                                    id: "clip1_24620_2022",
                                    children: (0, c.v)("path", {
                                        d: "M15.792 9.26169C15.792 8.51041 16.401 7.90137 17.1523 7.90137L44.0187 7.90137C44.77 7.90137 45.379 8.51041 45.379 9.26169L45.379 50.4115C45.379 51.1628 44.77 51.7718 44.0187 51.7718L17.1523 51.7718C16.401 51.7718 15.792 51.1628 15.792 50.4115L15.792 9.26169Z",
                                        fill: "white",
                                    }),
                                }),
                                (0, c.v)("clipPath", {
                                    id: "clip2_24620_2022",
                                    children: (0, c.v)("rect", {
                                        x: "17.1406",
                                        y: "13.9385",
                                        width: "12.9231",
                                        height: "15.7324",
                                        rx: "0.680162",
                                        fill: "white",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            title: "idv2.chooser.digitalIdUploadButtonTitle",
            testId: "verification-option-digitalIdUpload",
            weight: 1,
        },
        id: {
            type: "id",
            icon: () =>
                (0, c.v)("svg", {
                    width: "119",
                    height: "86",
                    viewBox: "0 0 119 86",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "IncodeIdCardIcon",
                    "aria-hidden": "true",
                    children: [
                        (0, c.v)("title", { children: "ID Card" }),
                        (0, c.v)("rect", {
                            x: "21.9619",
                            y: "21.5",
                            width: "75",
                            height: "43",
                            rx: "2",
                            fill: "white",
                        }),
                        (0, c.v)("rect", {
                            x: "27.9619",
                            y: "28.5",
                            width: "75",
                            height: "43",
                            rx: "5",
                            fill: "#C9C9C9",
                            fillOpacity: "0.15",
                        }),
                        (0, c.v)("path", {
                            d: "M20.4619 23C20.4619 21.3431 21.8051 20 23.4619 20H95.4615C97.1184 20 98.4615 21.3431 98.4615 23V63C98.4615 64.6569 97.1184 66 95.4615 66H23.4619C21.8051 66 20.4619 64.6569 20.4619 63V23Z",
                            fill: "#C9C9C9",
                            fillOpacity: "0.8",
                        }),
                        (0, c.v)("path", {
                            d: "M21.8955 23.4292C21.8955 22.3246 22.7909 21.4292 23.8955 21.4292L94.6455 21.4292C95.7501 21.4292 96.6455 22.3246 96.6455 23.4292V62.2859C96.6455 63.3904 95.7501 64.2859 94.6455 64.2859H23.8955C22.7909 64.2859 21.8955 63.3904 21.8955 62.2859L21.8955 23.4292Z",
                            fill: "white",
                        }),
                        (0, c.v)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M25.8823 32.3917C25.8825 31.8415 26.3287 31.3955 26.879 31.3955L91.6618 31.3955C92.2123 31.3955 92.6585 31.8417 92.6585 32.3922C92.6585 32.9426 92.2123 33.3888 91.6618 33.3888L26.879 33.3888C26.3283 33.3888 25.882 32.9423 25.8823 32.3917Z",
                            fill: "#C9C9C9",
                            fillOpacity: "0.5",
                        }),
                        (0, c.v)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M67.7418 37.376H49.8018V40.366H67.7418V37.376ZM67.7418 43.356H49.8018V46.346H67.7418V43.356ZM49.8018 49.336H73.7218V52.326H49.8018V49.336ZM57.7751 55.316H49.8018V58.306H57.7751V55.316Z",
                            fill: "#C9C9C9",
                            fillOpacity: "0.5",
                        }),
                        (0, c.v)("rect", {
                            x: "25.8818",
                            y: "24.4189",
                            width: "30.8967",
                            height: "3.98667",
                            rx: "1",
                            fill: "#C9C9C9",
                            fillOpacity: "0.5",
                        }),
                        (0, c.v)("rect", {
                            x: "86.2949",
                            y: "24.4907",
                            width: "5.98",
                            height: "3.93138",
                            fill: "#EAF0F6",
                        }),
                        (0, c.v)("rect", {
                            x: "25.9619",
                            y: "35.5",
                            width: "21",
                            height: "24",
                            rx: "2",
                            class: "IncodeIdCardIconFill",
                        }),
                        (0, c.v)("path", {
                            d: "M33.1299 52.4194C33.1197 53.1963 31.7713 53.4449 30.8652 54.3192C32.4418 55.4552 34.7203 56.2194 36.2968 56.2194C38.1314 56.2194 40.2521 55.4552 41.8286 54.3192C40.9225 53.4449 39.4915 53.1976 39.4724 52.4194C39.4724 52.1241 39.4734 49.2469 39.4748 48.9516C39.4748 43.9789 32.9404 41.0204 33.1213 49.0328C33.1247 50.1617 33.1299 51.2906 33.1299 52.4194Z",
                            fill: "url(#paint0_linear_id)",
                        }),
                        (0, c.v)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M46.8878 58.0411C46.6518 58.8827 45.8789 59.4998 44.9619 59.4998H27.9619C26.8573 59.4998 25.9619 58.6044 25.9619 57.4998V55.9798C27.7245 54.5329 32.1686 53.3223 32.1686 53.3223C32.1686 54.3609 34.749 55.9866 36.3086 56.0133C38.4831 56.0133 40.4486 54.3615 40.4486 53.3223C40.4486 53.3223 45.3648 54.9117 46.3136 56.6256C46.5256 57.0086 46.7176 57.5035 46.8878 58.0411Z",
                            fill: "#CECECE",
                        }),
                        (0, c.v)("path", {
                            d: "M41.9208 45.2935C42.0455 44.8283 41.7694 44.3501 41.3042 44.2254L41.2126 44.2009C40.7848 44.0863 40.3389 44.3105 40.176 44.7224L39.4794 46.4827C39.272 47.0069 39.609 47.5872 40.1671 47.6669L40.4782 47.7113C40.915 47.7737 41.3296 47.4999 41.4438 47.0737L41.9208 45.2935Z",
                            fill: "url(#paint1_linear_id)",
                        }),
                        (0, c.v)("path", {
                            d: "M31.0031 45.294C30.8784 44.8288 31.1545 44.3506 31.6197 44.2259C32.085 44.1013 32.5632 44.3774 32.6878 44.8426L33.1392 46.5274C33.2639 46.9926 32.9878 47.4708 32.5226 47.5955C32.0573 47.7201 31.5791 47.444 31.4545 46.9788L31.0031 45.294Z",
                            fill: "url(#paint2_linear_id)",
                        }),
                        (0, c.v)("path", {
                            d: "M41.2581 45.0854C41.2581 48.9044 38.5641 52.0004 36.4616 52.0004C34.1619 52.0004 31.665 48.9044 31.665 45.0854C31.665 41.6827 31.9296 38.0469 36.4616 38.0469C40.9935 38.0469 41.2581 41.6041 41.2581 45.0854Z",
                            fill: "url(#paint3_linear_id)",
                        }),
                        (0, c.v)("defs", {
                            children: [
                                (0, c.v)("linearGradient", {
                                    id: "paint0_linear_id",
                                    x1: "35.8774",
                                    y1: "49.2574",
                                    x2: "35.8774",
                                    y2: "53.7757",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { stopColor: "#B1B1B1" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint1_linear_id",
                                    x1: "39.9447",
                                    y1: "46.8213",
                                    x2: "41.2507",
                                    y2: "46.8737",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { offset: "0.0416667", stopColor: "#B5B5B5" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint2_linear_id",
                                    x1: "32.0377",
                                    y1: "46.8216",
                                    x2: "30.7317",
                                    y2: "46.874",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { offset: "0.0416667", stopColor: "#B5B5B5" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint3_linear_id",
                                    x1: "31.7839",
                                    y1: "45.028",
                                    x2: "38.5592",
                                    y2: "45.0529",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { stopColor: "#E0E0E0" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            title: "idv2.chooser.idButtonTitle",
            testId: "verification-option-id",
            weight: 2,
        },
        passport: {
            type: "passport",
            icon: () =>
                (0, c.v)("svg", {
                    width: "118",
                    height: "86",
                    viewBox: "0 0 118 86",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "IncodePassportIcon",
                    "aria-hidden": "true",
                    children: [
                        (0, c.v)("title", { children: "Passport" }),
                        (0, c.v)("g", {
                            "clip-path": "url(#clip0_25823_31181)",
                            children: [
                                (0, c.v)("rect", {
                                    x: "29.5381",
                                    y: "11",
                                    width: "67",
                                    height: "75",
                                    rx: "5",
                                    fill: "#C9C9C9",
                                    "fill-opacity": "0.15",
                                }),
                                (0, c.v)("rect", {
                                    x: "26.8977",
                                    y: "5.66234",
                                    width: "64.3575",
                                    height: "74.3225",
                                    rx: "4.21024",
                                    stroke: "#C9C9C9",
                                    "stroke-opacity": "0.8",
                                    "stroke-width": "1.24563",
                                }),
                                (0, c.v)("path", {
                                    d: "M27.4343 42.2949L90.6311 42.2949V76.3413C90.6311 77.9982 89.2879 79.3413 87.6311 79.3413L30.4343 79.3413C28.7775 79.3413 27.4343 77.9982 27.4343 76.3413L27.4343 42.2949Z",
                                    fill: "white",
                                }),
                                (0, c.v)("path", {
                                    d: "M55.6033 66.4102C55.7667 66.4102 55.8991 66.5427 55.8992 66.7061V68.1143C55.8991 68.2777 55.7667 68.4101 55.6033 68.4102H47.1951C47.0317 68.4101 46.8992 68.2777 46.8992 68.1143L46.8992 66.7061C46.8992 66.5427 47.0317 66.4102 47.1951 66.4102H55.6033ZM72.6033 62.4102C72.7667 62.4102 72.8991 62.5427 72.8992 62.7061V64.1143C72.8991 64.2777 72.7667 64.4101 72.6033 64.4102H47.1951C47.0317 64.4101 46.8992 64.2777 46.8992 64.1143V62.7061C46.8992 62.5427 47.0317 62.4102 47.1951 62.4102L72.6033 62.4102ZM65.6033 58.4102C65.7667 58.4102 65.8991 58.5427 65.8992 58.7061V60.1143C65.8991 60.2777 65.7667 60.4101 65.6033 60.4102L47.1951 60.4102C47.0317 60.4101 46.8992 60.2777 46.8992 60.1143V58.7061C46.8992 58.5427 47.0317 58.4102 47.1951 58.4102L65.6033 58.4102ZM65.6033 54.4102C65.7667 54.4102 65.8991 54.5427 65.8992 54.7061V56.1143C65.8991 56.2777 65.7667 56.4101 65.6033 56.4102L47.1951 56.4102C47.0317 56.4101 46.8992 56.2777 46.8992 56.1143V54.7061C46.8992 54.5427 47.0317 54.4102 47.1951 54.4102L65.6033 54.4102Z",
                                    fill: "#E9E9EB",
                                }),
                                (0, c.v)("rect", {
                                    x: "80.4148",
                                    y: "66.9609",
                                    width: "6.44508",
                                    height: "1.95402",
                                    rx: "0.295996",
                                    fill: "#E9E9EB",
                                }),
                                (0, c.v)("rect", {
                                    x: "80.4148",
                                    y: "62.7734",
                                    width: "6.44508",
                                    height: "1.95402",
                                    rx: "0.295996",
                                    fill: "#E9E9EB",
                                }),
                                (0, c.v)("rect", {
                                    x: "80.4148",
                                    y: "58.5859",
                                    width: "6.44508",
                                    height: "1.95402",
                                    rx: "0.295996",
                                    fill: "#E9E9EB",
                                }),
                                (0, c.v)("path", {
                                    d: "M27.4343 71.7148L90.6311 71.7148L90.6311 76.342C90.6311 77.9989 89.2879 79.342 87.6311 79.342L30.4343 79.342C28.7775 79.342 27.4343 77.9989 27.4343 76.342L27.4343 71.7148Z",
                                    fill: "#F4F4F5",
                                }),
                                (0, c.v)("rect", {
                                    x: "31.8992",
                                    y: "46.4102",
                                    width: "26",
                                    height: "3",
                                    rx: "0.295996",
                                    fill: "#C9C9C9",
                                    "fill-opacity": "0.5",
                                }),
                                (0, c.v)("rect", {
                                    x: "81.8992",
                                    y: "46.4102",
                                    width: "5",
                                    height: "4",
                                    rx: "0.295996",
                                    fill: "#EAF0F6",
                                }),
                                (0, c.v)("rect", {
                                    x: "30.8992",
                                    y: "73.4102",
                                    width: "56",
                                    height: "2",
                                    rx: "0.295996",
                                    fill: "#C9C9C9",
                                    "fill-opacity": "0.5",
                                }),
                                (0, c.v)("rect", {
                                    x: "30.8992",
                                    y: "76.4102",
                                    width: "56",
                                    height: "2",
                                    rx: "0.295996",
                                    fill: "#C9C9C9",
                                    "fill-opacity": "0.5",
                                }),
                                (0, c.v)("g", {
                                    "clip-path": "url(#clip1_25823_31181)",
                                    children: (0, c.v)("g", {
                                        "clip-path": "url(#clip2_25823_31181)",
                                        children: [
                                            (0, c.v)("rect", {
                                                x: "31.2175",
                                                y: "52.8086",
                                                width: "14.1292",
                                                height: "16.9552",
                                                class: "IncodePassportIconFill",
                                            }),
                                            (0, c.v)("path", {
                                                d: "M45.6017 67.2893C46.2508 68.4508 46.6245 71.1294 46.6245 71.1294L30.2605 71.1294C30.2605 71.1294 30.6343 68.4505 31.2832 67.2893C31.9322 66.1282 35.8873 65.0512 35.8873 65.0512C36.2376 65.6841 37.2659 66.2614 38.3185 66.2872C39.4607 66.3151 40.6316 65.7377 40.9957 65.0508C40.9957 65.0508 44.9526 66.1279 45.6017 67.2893Z",
                                                fill: "white",
                                            }),
                                            (0, c.v)("path", {
                                                d: "M36.5209 64.13L36.5209 64.1559C36.5137 64.7033 36.0529 65.115 35.1384 65.3908C36.2404 66.1913 37.3424 66.8317 38.4443 66.8317C39.5462 66.8317 40.6482 66.1913 41.7501 65.3908C40.8419 65.1147 40.381 64.7024 40.3677 64.1541C40.3677 63.9459 40.3684 61.9185 40.3694 61.7104C40.4351 61.7196 40.4295 61.7138 40.3694 61.6971C40.3712 61.0115 40.3741 61.9089 40.3782 60.972C40.3823 60.0351 36.4572 59.1969 36.5149 61.7695C36.5156 62.0318 36.5172 63.833 36.5209 64.13Z",
                                                fill: "url(#paint0_linear_25823_31181)",
                                            }),
                                            (0, c.v)("path", {
                                                d: "M36.4685 62.8717C38.0818 62.7041 39.6008 63.4026 39.6008 63.4026C39.6008 63.4026 39.2997 64.9843 36.4685 64.5246L36.4685 62.8717Z",
                                                fill: "#CDCDCD",
                                            }),
                                            (0, c.v)("path", {
                                                d: "M45.6017 67.2893C46.2508 68.4508 46.6245 71.1294 46.6245 71.1294L30.2605 71.1294C30.2605 71.1294 30.6343 68.4505 31.2832 67.2893C31.9322 66.1282 35.8873 65.0512 35.8873 65.0512C35.8873 65.7551 37.2516 66.7701 38.3185 66.7881C39.8061 66.7881 40.9957 65.7551 40.9957 65.0508C40.9957 65.0508 44.9526 66.1279 45.6017 67.2893Z",
                                                fill: "#CECECE",
                                            }),
                                            (0, c.v)("path", {
                                                d: "M35.1459 59.5609C35.3611 59.2021 35.6294 59.4488 35.7366 59.6171L35.8865 61.2125C35.8812 61.3513 35.7981 61.4395 35.5811 61.467C35.3099 61.5013 35.1308 60.7627 35.0683 60.487C35.0058 60.2113 34.8771 60.0094 35.1459 59.5609Z",
                                                fill: "url(#paint1_linear_25823_31181)",
                                            }),
                                            (0, c.v)("path", {
                                                d: "M41.6385 59.6545C41.4268 59.2936 41.1562 59.5378 41.0473 59.705L40.8824 61.299C40.8863 61.4378 40.9687 61.5268 41.1854 61.5563C41.4562 61.5932 41.6423 60.8564 41.7074 60.5813C41.7725 60.3062 41.9031 60.1055 41.6385 59.6545Z",
                                                fill: "url(#paint2_linear_25823_31181)",
                                            }),
                                            (0, c.v)("path", {
                                                d: "M41.4251 59.9339C41.4251 62.2412 39.7548 64.1116 38.4511 64.1116C37.0252 64.1116 35.4771 62.2412 35.4771 59.9339C35.4771 57.8782 35.6411 55.6816 38.4511 55.6816C41.261 55.6816 41.4251 57.8307 41.4251 59.9339Z",
                                                fill: "url(#paint3_linear_25823_31181)",
                                            }),
                                        ],
                                    }),
                                }),
                                (0, c.v)("mask", {
                                    id: "path-23-inside-1_25823_31181",
                                    fill: "white",
                                    children: (0, c.v)("path", {
                                        d: "M87.6289 6.28516C89.2858 6.28516 90.6289 7.6283 90.6289 9.28516L90.6289 42.8236L27.517 42.8236L27.517 9.28516C27.517 7.6283 28.8602 6.28516 30.517 6.28516L87.6289 6.28516Z",
                                    }),
                                }),
                                (0, c.v)("path", {
                                    d: "M87.6289 6.28516C89.2858 6.28516 90.6289 7.6283 90.6289 9.28516L90.6289 42.8236L27.517 42.8236L27.517 9.28516C27.517 7.6283 28.8602 6.28516 30.517 6.28516L87.6289 6.28516Z",
                                    fill: "#F4F4F5",
                                }),
                                (0, c.v)("path", {
                                    d: "M90.6289 6.28516L90.6289 42.8236L90.6289 6.28516ZM27.517 42.8236L27.517 6.28516L27.517 42.8236ZM27.517 6.28516L90.6289 6.28516L27.517 6.28516ZM90.6289 44.0362L27.517 44.0362V41.6111L90.6289 41.6111V44.0362Z",
                                    fill: "#C9C9C9",
                                    "fill-opacity": "0.8",
                                    mask: "url(#path-23-inside-1_25823_31181)",
                                }),
                            ],
                        }),
                        (0, c.v)("defs", {
                            children: [
                                (0, c.v)("linearGradient", {
                                    id: "paint0_linear_25823_31181",
                                    x1: "38.1511",
                                    y1: "61.9259",
                                    x2: "38.1511",
                                    y2: "65.1098",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { "stop-color": "#B1B1B1" }),
                                        (0, c.v)("stop", { offset: "1", "stop-color": "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint1_linear_25823_31181",
                                    x1: "35.7261",
                                    y1: "60.3676",
                                    x2: "35.2086",
                                    y2: "60.4633",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { offset: "0.171875", "stop-color": "#BDBDBD" }),
                                        (0, c.v)("stop", { offset: "0.640625", "stop-color": "#E1E1E1" }),
                                        (0, c.v)("stop", { offset: "1", "stop-color": "#DDDDDD" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint2_linear_25823_31181",
                                    x1: "41.0508",
                                    y1: "60.4556",
                                    x2: "41.5674",
                                    y2: "60.5562",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { offset: "0.0416667", "stop-color": "#B5B5B5" }),
                                        (0, c.v)("stop", { offset: "0.362488", "stop-color": "#E2E2E2" }),
                                        (0, c.v)("stop", { offset: "1", "stop-color": "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint3_linear_25823_31181",
                                    x1: "35.8426",
                                    y1: "59.8572",
                                    x2: "40.0436",
                                    y2: "59.8731",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { "stop-color": "#E0E0E0" }),
                                        (0, c.v)("stop", { offset: "1", "stop-color": "white" }),
                                    ],
                                }),
                                (0, c.v)("clipPath", {
                                    id: "clip0_25823_31181",
                                    children: (0, c.v)("rect", { width: "118", height: "86", fill: "white" }),
                                }),
                                (0, c.v)("clipPath", {
                                    id: "clip1_25823_31181",
                                    children: (0, c.v)("rect", {
                                        x: "31.2625",
                                        y: "52.7891",
                                        width: "14.0499",
                                        height: "17.0253",
                                        rx: "2",
                                        fill: "white",
                                    }),
                                }),
                                (0, c.v)("clipPath", {
                                    id: "clip2_25823_31181",
                                    children: (0, c.v)("rect", {
                                        width: "18.0004",
                                        height: "18.0005",
                                        fill: "white",
                                        transform: "translate(29.4441 52.7891)",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            title: "idv2.chooser.passportButtonTitle",
            testId: "verification-option-passport",
            weight: 3,
        },
        digitalId: {
            icon: () =>
                (0, c.v)("svg", {
                    width: "60",
                    height: "60",
                    viewBox: "0 0 60 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    focusable: "false",
                    class: "IncodeDeviceWalletsIcon",
                    children: [
                        (0, c.v)("title", { children: "Mobile Driver License icon" }),
                        (0, c.v)("g", {
                            clipPath: "url(#clip0_26265_2591)",
                            children: (0, c.v)("g", {
                                clipPath: "url(#clip1_26265_2591)",
                                children: (0, c.v)("g", {
                                    clipPath: "url(#clip2_26265_2591)",
                                    children: [
                                        (0, c.v)("rect", {
                                            x: "24.1111",
                                            y: "10.0779",
                                            width: "20.52",
                                            height: "42.066",
                                            rx: "2.565",
                                            fill: "#C9C9C9",
                                            fillOpacity: "0.15",
                                        }),
                                        (0, c.v)("rect", {
                                            x: "18.3396",
                                            y: "49.7073",
                                            width: "41.8095",
                                            height: "23.3415",
                                            rx: "2.69325",
                                            transform: "rotate(-90 18.3396 49.7073)",
                                            fill: "#F7F7F7",
                                            stroke: "#D4D4D4",
                                            strokeWidth: "0.769499",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M20.0591 13.217C20.0591 12.367 20.7481 11.678 21.5981 11.678L38.4211 11.678C39.2711 11.678 39.9601 12.367 39.9601 13.217V21.7093C39.9601 22.5593 39.2711 23.2483 38.4211 23.2483L21.5981 23.2483C20.7481 23.2483 20.0591 22.5593 20.0591 21.7093V13.217Z",
                                            fill: "#C9C9C9",
                                            fillOpacity: "0.8",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M20.5217 13.1669C20.5217 12.6002 20.9811 12.1409 21.5477 12.1409L38.4711 12.1409C39.0378 12.1409 39.4971 12.6002 39.4971 13.1669V21.7596C39.4971 22.3263 39.0378 22.7856 38.4711 22.7856L21.5477 22.7856C20.9811 22.7856 20.5217 22.3263 20.5217 21.7596L20.5217 13.1669Z",
                                            fill: "white",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M30.2441 19.7498C30.3821 19.7498 30.4939 19.8619 30.4941 19.9998V20.2996C30.494 20.4375 30.3821 20.5496 30.2441 20.5496H28.6133C28.4753 20.5495 28.3634 20.4375 28.3633 20.2996V19.9998C28.3635 19.8619 28.4753 19.7498 28.6133 19.7498H30.2441ZM34.5059 18.1521C34.6438 18.1521 34.7556 18.2642 34.7559 18.4021V18.7019C34.7558 18.8399 34.6439 18.9519 34.5059 18.9519H28.6133C28.4753 18.9519 28.3634 18.8399 28.3633 18.7019V18.4021C28.3635 18.2642 28.4754 18.1521 28.6133 18.1521H34.5059ZM32.9082 16.5544C33.0462 16.5546 33.1582 16.6664 33.1582 16.8044V17.1033C33.1582 17.2413 33.0462 17.3532 32.9082 17.3533H28.6133C28.4752 17.3533 28.3633 17.2413 28.3633 17.1033V16.8044C28.3633 16.6664 28.4752 16.5544 28.6133 16.5544H32.9082ZM32.9082 14.9558C33.0462 14.9559 33.1582 15.0678 33.1582 15.2058V15.5046C33.1582 15.6427 33.0462 15.7546 32.9082 15.7546L28.6133 15.7546C28.4752 15.7546 28.3633 15.6427 28.3633 15.5046V15.2058C28.3633 15.0677 28.4752 14.9558 28.6133 14.9558L32.9082 14.9558Z",
                                            fill: "#C9C9C9",
                                            fillOpacity: "0.5",
                                        }),
                                        (0, c.v)("rect", {
                                            x: "21.9907",
                                            y: "14.4548",
                                            width: "5.61267",
                                            height: "6.41448",
                                            rx: "0.592504",
                                            class: "IncodeDeviceWalletsIconFill",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M23.9066 18.9767C23.9038 19.1843 23.5434 19.2508 23.3013 19.4844C23.7226 19.7881 24.3316 19.9923 24.753 19.9923C25.2433 19.9923 25.8101 19.7881 26.2314 19.4844C25.9893 19.2508 25.6068 19.1847 25.6017 18.9767C25.6017 18.8978 25.602 18.1288 25.6023 18.0498C25.6023 16.7208 23.8559 15.9301 23.9043 18.0716C23.9052 18.3733 23.9066 18.675 23.9066 18.9767Z",
                                            fill: "url(#paint0_linear_26265_2591)",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M25.8618 19.218C25.8813 19.2243 27.1775 19.6462 27.4292 20.1008C27.4826 20.1973 27.5292 20.3211 27.5728 20.4553C27.4966 20.6945 27.2756 20.8683 27.0112 20.8684H22.5835C22.2564 20.8684 21.9909 20.6037 21.9907 20.2766V19.928C22.4623 19.5415 23.6489 19.218 23.6489 19.218C23.6489 19.4956 24.3385 19.9296 24.7554 19.9368C25.3364 19.9366 25.8618 19.4957 25.8618 19.218Z",
                                            fill: "#CECECE",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M23.9065 18.142C24.5301 18.0755 25.1173 18.5857 25.1173 18.5857C25.1173 18.5857 25.0009 19.2133 23.9065 19.0309V18.142Z",
                                            fill: "#CDCDCD",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M26.2514 17.0855C26.2866 16.954 26.2086 16.8188 26.0771 16.7836C25.9562 16.7512 25.8302 16.8146 25.7841 16.931L25.6142 17.3606C25.5527 17.5159 25.6525 17.6878 25.8179 17.7114L25.8471 17.7156C25.9765 17.7341 26.0993 17.653 26.1332 17.5267L26.2514 17.0855Z",
                                            fill: "url(#paint1_linear_26265_2591)",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M23.3374 17.0726C23.3041 16.9482 23.3779 16.8204 23.5022 16.7871C23.6266 16.7538 23.7544 16.8276 23.7877 16.9519L23.9084 17.4022C23.9417 17.5265 23.8679 17.6543 23.7435 17.6877C23.6192 17.721 23.4914 17.6472 23.4581 17.5228L23.3374 17.0726Z",
                                            fill: "url(#paint2_linear_26265_2591)",
                                        }),
                                        (0, c.v)("path", {
                                            d: "M26.0796 17.0174C26.0796 18.0381 25.3595 18.8656 24.7976 18.8656C24.183 18.8656 23.5156 18.0381 23.5156 17.0174C23.5156 16.108 23.5863 15.1362 24.7976 15.1362C26.0088 15.1362 26.0796 16.087 26.0796 17.0174Z",
                                            fill: "url(#paint3_linear_26265_2591)",
                                        }),
                                        (0, c.v)("rect", {
                                            x: "22.0591",
                                            y: "43.936",
                                            width: "15.903",
                                            height: "3.078",
                                            rx: "0.512999",
                                            fill: "#E4E4E4",
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, c.v)("defs", {
                            children: [
                                (0, c.v)("linearGradient", {
                                    id: "paint0_linear_26265_2591",
                                    x1: "24.6409",
                                    y1: "18.1316",
                                    x2: "24.6409",
                                    y2: "19.3392",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { stopColor: "#B1B1B1" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint1_linear_26265_2591",
                                    x1: "25.7267",
                                    y1: "17.4809",
                                    x2: "26.0758",
                                    y2: "17.4949",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { offset: "0.0416667", stopColor: "#B5B5B5" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint2_linear_26265_2591",
                                    x1: "23.614",
                                    y1: "17.4808",
                                    x2: "23.2649",
                                    y2: "17.4948",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { offset: "0.0416667", stopColor: "#B5B5B5" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint3_linear_26265_2591",
                                    x1: "23.5474",
                                    y1: "17.0021",
                                    x2: "25.3582",
                                    y2: "17.0087",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { stopColor: "#E0E0E0" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("clipPath", {
                                    id: "clip0_26265_2591",
                                    children: (0, c.v)("rect", { width: "60", height: "60", fill: "white" }),
                                }),
                                (0, c.v)("clipPath", {
                                    id: "clip1_26265_2591",
                                    children: (0, c.v)("rect", {
                                        width: "60",
                                        height: "60",
                                        fill: "white",
                                        transform: "translate(0.5 0.5)",
                                    }),
                                }),
                                (0, c.v)("clipPath", {
                                    id: "clip2_26265_2591",
                                    children: (0, c.v)("rect", {
                                        width: "60.5339",
                                        height: "45.144",
                                        fill: "white",
                                        transform: "translate(0 7)",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            title: "idv2.chooser.digitalIdButtonTitle",
            testId: "verification-option-digitalId",
            type: "digitalId",
            weight: 4,
        },
        manualIdUpload: {
            type: "manualIdUpload",
            icon: () =>
                (0, c.v)("svg", {
                    width: "60",
                    height: "60",
                    viewBox: "0 0 60 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    focusable: "false",
                    class: "IncodeUploadIdIcon",
                    children: [
                        (0, c.v)("title", { children: "Upload document" }),
                        (0, c.v)("rect", {
                            x: "5.51713",
                            y: "15.51",
                            width: "50.4685",
                            height: "28.9353",
                            rx: "1.34583",
                            fill: "white",
                        }),
                        (0, c.v)("path", {
                            d: "M4.5 16.5187C4.5 15.4038 5.40382 14.5 6.51874 14.5L54.9682 14.5C56.0831 14.5 56.987 15.4038 56.987 16.5187L56.987 43.4353C56.987 44.5502 56.0831 45.454 54.9682 45.454L6.51874 45.454C5.40382 45.454 4.5 44.5502 4.5 43.4353L4.5 16.5187Z",
                            stroke: "#D2D2D2",
                            strokeLinecap: "round",
                            strokeDasharray: "3 3",
                        }),
                        (0, c.v)("path", {
                            d: "M5.47253 16.8082C5.47253 16.065 6.07508 15.4624 6.81836 15.4624L54.427 15.4624C55.1703 15.4624 55.7728 16.0649 55.7728 16.8082L55.7728 42.9554C55.7728 43.6987 55.1703 44.3012 54.427 44.3012L6.81836 44.3012C6.07508 44.3012 5.47253 43.6987 5.47253 42.9554L5.47253 16.8082Z",
                            fill: "white",
                        }),
                        (0, c.v)("path", {
                            d: "M46.1211 34.9621C45.8699 34.6688 45.5027 34.5 45.1165 34.5C44.7302 34.5 44.3631 34.6688 44.1118 34.9621L38.8186 41.1375C38.343 41.6923 38.4072 42.5277 38.9621 43.0033C39.517 43.479 40.3524 43.4147 40.828 42.8598L43.7932 39.4005V50.1767C43.7932 50.9075 44.3857 51.5 45.1165 51.5C45.8473 51.5 46.4398 50.9075 46.4398 50.1767V39.4005L49.405 42.8598C49.8805 43.4147 50.7159 43.479 51.2708 43.0033C51.8257 42.5277 51.8899 41.6923 51.4143 41.1375L46.1211 34.9621Z",
                            class: "IncodeUploadIdIconFill",
                            stroke: "white",
                            strokeWidth: "0.953729",
                        }),
                        (0, c.v)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.14731 22.8371C8.14748 22.4668 8.44769 22.1667 8.81798 22.1667L52.4112 22.1667C52.7816 22.1667 53.0819 22.467 53.0819 22.8374C53.0819 23.2078 52.7816 23.5081 52.4112 23.5081L8.81798 23.5081C8.44746 23.5081 8.14714 23.2076 8.14731 22.8371Z",
                            fill: "#C9C9C9",
                            fillOpacity: "0.5",
                        }),
                        (0, c.v)("path", {
                            d: "M29.6077 40.2766H24.2425V38.2639H29.6077V40.2766ZM35.2425 36.5002H24.2425L24.2425 34.5002H35.2425V36.5002ZM39.2425 32.5002H24.2425V30.5002L39.2425 30.5002V32.5002ZM44.2425 28.5002L24.2425 28.5002V26.5002L44.2425 26.5002V28.5002Z",
                            fill: "#C9C9C9",
                            fillOpacity: "0.5",
                        }),
                        (0, c.v)("rect", {
                            x: "8.147",
                            y: "17.4744",
                            width: "20.7908",
                            height: "2.68268",
                            rx: "0.672913",
                            fill: "#C9C9C9",
                            fillOpacity: "0.5",
                        }),
                        (0, c.v)("rect", {
                            x: "48.803",
                            y: "17.5209",
                            width: "4.02402",
                            height: "2.64548",
                            fill: "#EAF0F6",
                        }),
                        (0, c.v)("rect", {
                            x: "8.20379",
                            y: "24.9293",
                            width: "14.1312",
                            height: "16.1499",
                            rx: "1.34583",
                            class: "IncodeUploadIdIconFill",
                        }),
                        (0, c.v)("path", {
                            d: "M13.0303 36.3159C13.0234 36.8387 12.116 37.006 11.5063 37.5943C12.5672 38.3587 14.1004 38.8729 15.1613 38.8729C16.3958 38.8729 17.8228 38.3587 18.8837 37.5943C18.274 37.006 17.311 36.8395 17.2982 36.3159C17.2982 36.1172 17.2989 34.1811 17.2998 33.9823C17.2998 30.6362 12.9027 28.6453 13.0245 34.037C13.0268 34.7966 13.0303 35.5563 13.0303 36.3159Z",
                            fill: "url(#paint0_linear_2170_3031)",
                        }),
                        (0, c.v)("path", {
                            d: "M17.9489 36.922C17.9489 36.922 21.2577 37.9913 21.8962 39.1447C22.0394 39.4033 22.1671 39.7385 22.2819 40.1017C22.1216 40.6657 21.6044 41.0792 20.9889 41.0792H9.54949C8.80627 41.0792 8.2038 40.4767 8.20379 39.7335V38.7072C9.39205 37.7347 12.3776 36.922 12.3776 36.922C12.3777 37.6209 14.1143 38.7146 15.1637 38.7325C16.6268 38.7323 17.9488 37.6213 17.9489 36.922Z",
                            fill: "#CECECE",
                        }),
                        (0, c.v)("path", {
                            d: "M13.0259 34.2139C14.5961 34.0465 16.0744 35.3312 16.0744 35.3312C16.0744 35.3312 15.7813 36.9113 13.0259 36.4521V34.2139Z",
                            fill: "#CDCDCD",
                        }),
                        (0, c.v)("path", {
                            d: "M18.9402 31.5218C19.0241 31.2087 18.8383 30.8869 18.5252 30.8031L18.4636 30.7865C18.1757 30.7094 17.8757 30.8603 17.7661 31.1375L17.2974 32.322C17.1578 32.6748 17.3845 33.0653 17.7601 33.1189L17.9694 33.1488C18.2634 33.1907 18.5424 33.0065 18.6192 32.7197L18.9402 31.5218Z",
                            fill: "url(#paint1_linear_2170_3031)",
                        }),
                        (0, c.v)("path", {
                            d: "M11.5934 31.5218C11.5095 31.2087 11.6953 30.887 12.0084 30.8031C12.3214 30.7192 12.6432 30.905 12.7271 31.218L13.0309 32.3517C13.1148 32.6648 12.929 32.9866 12.6159 33.0705C12.3028 33.1543 11.9811 32.9686 11.8972 32.6555L11.5934 31.5218Z",
                            fill: "url(#paint2_linear_2170_3031)",
                        }),
                        (0, c.v)("path", {
                            d: "M18.4924 31.3797C18.4924 33.9496 16.6796 36.0329 15.2648 36.0329C13.7173 36.0329 12.0371 33.9496 12.0371 31.3797C12.0371 29.09 12.2152 26.6434 15.2648 26.6434C18.3144 26.6434 18.4924 29.0371 18.4924 31.3797Z",
                            fill: "url(#paint3_linear_2170_3031)",
                        }),
                        (0, c.v)("defs", {
                            children: [
                                (0, c.v)("linearGradient", {
                                    id: "paint0_linear_2170_3031",
                                    x1: "14.8791",
                                    y1: "34.1881",
                                    x2: "14.8791",
                                    y2: "37.2285",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { stopColor: "#B1B1B1" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint1_linear_2170_3031",
                                    x1: "17.6105",
                                    y1: "32.5499",
                                    x2: "18.4893",
                                    y2: "32.5851",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { offset: "0.0416667", stopColor: "#B5B5B5" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint2_linear_2170_3031",
                                    x1: "12.2896",
                                    y1: "32.5497",
                                    x2: "11.4108",
                                    y2: "32.585",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { offset: "0.0416667", stopColor: "#B5B5B5" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                                (0, c.v)("linearGradient", {
                                    id: "paint3_linear_2170_3031",
                                    x1: "12.1171",
                                    y1: "31.3411",
                                    x2: "16.6763",
                                    y2: "31.3579",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        (0, c.v)("stop", { stopColor: "#E0E0E0" }),
                                        (0, c.v)("stop", { offset: "1", stopColor: "white" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            title: "idv2.chooser.manualUploadButtonTitle",
            testId: "verification-option-manualIdUpload",
            weight: 5,
        },
    },
    lh = ({ manager: l, state: t }) => {
        let { t: d } = (0, i.n)(),
            e = (0, c.d)(
                () =>
                    t.availableDocumentTypes
                        .reduce((l, t) => {
                            let d = lu[t];
                            return d && l.push(d), l;
                        }, [])
                        .sort((l, t) => l.weight - t.weight),
                [t.availableDocumentTypes],
            );
        return (0, c.v)(s.t, {
            title: d("idv2.chooser.chooseHowToVerifyTitle"),
            "data-testid": "document-chooser-page",
            className: "IncodeChooserPage",
            children: (0, c.v)("div", {
                class: "IncodeChooserContainer",
                children: (0, c.v)(z, {
                    children: e.map((t) =>
                        (0, c.v)(
                            w,
                            {
                                icon: t.icon,
                                title: d(t.title),
                                testId: t.testId,
                                tag: t.tag ? d(t.tag) : void 0,
                                onClick: () => {
                                    var d;
                                    return (d = t.type), void l.selectDocument(d);
                                },
                            },
                            t.type,
                        ),
                    ),
                }),
            }),
        });
    },
    lW = ({ manager: l, direction: t }) => {
        let [e, s] = (0, c.p)(null),
            [b, m] = (0, c.p)(!1),
            { t: o } = (0, i.n)();
        (0, c._)(() => {
            d.e("70379")
                .then(d.bind(d, 225606))
                .then((l) => {
                    s(l.default);
                });
        }, []);
        let u = (0, c.h)(async () => {
            await new Promise((l) => setTimeout(l, 1e3)),
                "toBack" === t ? l.continueToBack() : l.continueToFront(),
                m(!0);
        }, [t, l]);
        return b
            ? (0, c.v)(n.t, { size: "large", title: `${o("webcam.loading")}...` })
            : e
              ? (0, c.v)("div", {
                    class: "IncodeFlipAnimation",
                    children: [
                        (0, c.v)(Z.t, {
                            role: "status",
                            className: "IncodeFlipAnimationTitle",
                            children: o(
                                "toBack" === t ? "idv2.flipAnimation.title" : "idv2.flipAnimation.titleToFront",
                            ),
                        }),
                        (0, c.v)(a.r, { size: 32 }),
                        (0, c.v)(h.a, { animationData: e, loop: !1, reverse: "toFront" === t, onComplete: u }),
                    ],
                })
              : null;
    };
