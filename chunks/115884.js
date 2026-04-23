n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    c = n(573725),
    d = n(834730),
    u = n(187322),
    m = n(821609),
    A = n(49229),
    h = n(915089),
    x = n(953051),
    p = n(395422),
    g = n(652215),
    N = n(650583),
    f = n(985018),
    _ = n(235351),
    I = n(818050);
let v = n(892799),
    j = { canSend: !1, hint: null, success: null, error: null },
    C = (0, h.Ld)(),
    y = `${C}-decription`,
    S = `${C}-error`;
function E(e, t) {
    switch (t.type) {
        case "RESET":
            return j;
        case "SUCCESS":
            return { ...j, success: t.text };
        case "HINT":
            return { ...j, canSend: !0, hint: t.text };
        case "ERROR":
            return { ...e, canSend: !0, error: t.text };
    }
}
function T(e) {
    let { placeholder: t = f.intl.string(f.t["Rn/sLl"]) } = e,
        n = s.useRef(null),
        l = s.useRef(null),
        [r, h] = s.useReducer(E, j),
        { canSend: T, hint: b, error: P, success: L } = r;
    return (
        s.useEffect(() => {
            null != L &&
                (o()(null != n.current, "Input is submitting when not mounted"),
                (n.current.value = ""),
                n.current.focus());
        }, [L, n]),
        (0, i.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(), o()(null != n.current, "Input is submitted when not mounted");
                let t = n.current.value.trim();
                !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
                let i = (0, p.Ty)(t);
                null != i
                    ? h({ type: "ERROR", text: i })
                    : A.A.sendRequest({ discordTag: t, context: { location: "Add Friend" } }).then(
                          () => h({ type: "SUCCESS", text: f.intl.format(f.t.Rtl1Ep, { discordTag: t }) }),
                          (e) => h({ type: "ERROR", text: (0, p.vU)(e.body?.code, t) }),
                      );
            },
            autoComplete: "off",
            children: [
                (0, i.jsxs)("div", {
                    className: _.QR,
                    children: [
                        (0, i.jsx)(d.E, {
                            tag: "div",
                            variant: "heading-md/normal",
                            children: f.intl.string(f.t["Rn/sLl"]),
                        }),
                        (0, i.jsx)("img", { src: v, alt: "Wumpus Waving" }),
                    ],
                }),
                (0, i.jsx)(u.vN, {
                    focusTarget: n,
                    ringTarget: l,
                    ringClassName: _.hN,
                    children: (0, i.jsxs)("div", {
                        ref: l,
                        className: a()(_.fc, { [_.kX]: L, [_.z3]: P }),
                        children: [
                            (0, i.jsx)(c.p, {
                                id: C,
                                inputRef: n,
                                className: _.QP,
                                inputClassName: _.hF,
                                onKeyPress: (e) => {
                                    let t = e.currentTarget.value;
                                    if (e.key !== N.N$.Enter && t.includes("#")) {
                                        o()(null != n.current, "Input is handling keypress when not mounted");
                                        let i = t.indexOf("#"),
                                            s = n.current.selectionStart,
                                            l =
                                                e.key === N.N$.Backspace ||
                                                e.key === N.N$.ArrowRight ||
                                                e.key === N.N$.ArrowLeft,
                                            a = (0, x.A)(e.key);
                                        null != s && s > i && /^(.+?#\d{4})$/.test(t) && !l
                                            ? e.preventDefault()
                                            : null == s || !(s > i) || a || l || e.preventDefault();
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0) return void h({ type: "RESET" });
                                    let t = "",
                                        [, n] = e.split("#");
                                    null != n && (t = e + g.RoK.slice(null != n ? n.length + 1 : 0)),
                                        h({ type: "HINT", text: t });
                                },
                                maxLength: 37,
                                autoFocus: !0,
                                autoComplete: "off",
                                name: "add-friend",
                                "data-form-type": "other",
                                "data-lpignore": !0,
                                "data-1p-ignore": !0,
                                placeholder: t,
                                "aria-label": t,
                                "aria-invalid": null != P || void 0,
                                "aria-describedby": null != P ? S : y,
                            }),
                            null != b && (0, i.jsx)("div", { className: _.dQ, "aria-hidden": !0, children: b }),
                            (0, i.jsx)(m.$, {
                                variant: "primary",
                                size: "sm",
                                text: f.intl.string(f.t["PMsq/b"]),
                                disabled: !T,
                                type: "submit",
                            }),
                        ],
                    }),
                }),
                null != P &&
                    (0, i.jsx)("div", {
                        role: "alert",
                        children: (0, i.jsx)(d.E, {
                            id: S,
                            variant: "text-sm/normal",
                            className: I.Ot,
                            color: "text-feedback-critical",
                            children: P,
                        }),
                    }),
                null != L &&
                    (0, i.jsx)("div", {
                        role: "status",
                        children: (0, i.jsx)(d.E, {
                            variant: "text-sm/normal",
                            className: I.Ot,
                            color: "text-feedback-positive",
                            children: L,
                        }),
                    }),
            ],
        })
    );
}
