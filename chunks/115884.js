n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(284009),
    o = n.n(s),
    d = n(421380),
    c = n(397927),
    u = n(49229),
    A = n(915089),
    h = n(953051),
    _ = n(395422),
    m = n(652215),
    g = n(650583),
    p = n(985018),
    E = n(235351),
    I = n(818050);
let f = n(892799),
    C = { canSend: !1, hint: null, success: null, error: null },
    T = (0, A.Ld)(),
    N = `${T}-decription`,
    S = `${T}-error`;
function x(e, t) {
    switch (t.type) {
        case "RESET":
            return C;
        case "SUCCESS":
            return { ...C, success: t.text };
        case "HINT":
            return { ...C, canSend: !0, hint: t.text };
        case "ERROR":
            return { ...e, canSend: !0, error: t.text };
    }
}
function b(e) {
    let { placeholder: t = p.intl.string(p.t["Rn/sLl"]) } = e,
        n = l.useRef(null),
        a = l.useRef(null),
        [s, A] = l.useReducer(x, C),
        { canSend: b, hint: v, error: y, success: O } = s;
    return (
        l.useEffect(() => {
            null != O &&
                (o()(null != n.current, "Input is submitting when not mounted"),
                (n.current.value = ""),
                n.current.focus());
        }, [O, n]),
        (0, i.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(), o()(null != n.current, "Input is submitted when not mounted");
                let t = n.current.value.trim();
                !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
                let i = (0, _.Ty)(t);
                null != i
                    ? A({ type: "ERROR", text: i })
                    : u.A.sendRequest({ discordTag: t, context: { location: "Add Friend" } }).then(
                          () => A({ type: "SUCCESS", text: p.intl.format(p.t.Rtl1Ep, { discordTag: t }) }),
                          (e) => A({ type: "ERROR", text: (0, _.vU)(e.body?.code, t) }),
                      );
            },
            autoComplete: "off",
            children: [
                (0, i.jsxs)("div", {
                    className: E.QR,
                    children: [
                        (0, i.jsx)(c.Text, {
                            tag: "div",
                            variant: "heading-md/normal",
                            children: p.intl.string(p.t["Rn/sLl"]),
                        }),
                        (0, i.jsx)("img", { src: f, alt: "Wumpus Waving" }),
                    ],
                }),
                (0, i.jsx)(c.vN3, {
                    focusTarget: n,
                    ringTarget: a,
                    ringClassName: E.hN,
                    children: (0, i.jsxs)("div", {
                        ref: a,
                        className: r()(E.fc, { [E.kX]: O, [E.z3]: y }),
                        children: [
                            (0, i.jsx)(d.ob, {
                                id: T,
                                inputRef: n,
                                className: E.QP,
                                inputClassName: E.hF,
                                onKeyPress: (e) => {
                                    let t = e.currentTarget.value;
                                    if (e.key !== g.N$.Enter && t.includes("#")) {
                                        o()(null != n.current, "Input is handling keypress when not mounted");
                                        let i = t.indexOf("#"),
                                            l = n.current.selectionStart,
                                            a =
                                                e.key === g.N$.Backspace ||
                                                e.key === g.N$.ArrowRight ||
                                                e.key === g.N$.ArrowLeft,
                                            r = (0, h.A)(e.key);
                                        null != l && l > i && /^(.+?#\d{4})$/.test(t) && !a
                                            ? e.preventDefault()
                                            : null == l || !(l > i) || r || a || e.preventDefault();
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0) return void A({ type: "RESET" });
                                    let t = "",
                                        [, n] = e.split("#");
                                    null != n && (t = e + m.RoK.slice(null != n ? n.length + 1 : 0)),
                                        A({ type: "HINT", text: t });
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
                                "aria-invalid": null != y || void 0,
                                "aria-describedby": null != y ? S : N,
                            }),
                            null != v && (0, i.jsx)("div", { className: E.dQ, "aria-hidden": !0, children: v }),
                            (0, i.jsx)(c.Button, {
                                variant: "primary",
                                size: "sm",
                                text: p.intl.string(p.t["PMsq/b"]),
                                disabled: !b,
                                type: "submit",
                            }),
                        ],
                    }),
                }),
                null != y &&
                    (0, i.jsx)("div", {
                        role: "alert",
                        children: (0, i.jsx)(c.Text, {
                            id: S,
                            variant: "text-sm/normal",
                            className: I.Ot,
                            color: "text-feedback-critical",
                            children: y,
                        }),
                    }),
                null != O &&
                    (0, i.jsx)("div", {
                        role: "status",
                        children: (0, i.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: I.Ot,
                            color: "text-feedback-positive",
                            children: O,
                        }),
                    }),
            ],
        })
    );
}
