n.d(t, { Z: () => N }), n(388685), n(781311), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(755721),
    u = n(481060),
    d = n(194359),
    p = n(313201),
    f = n(657682),
    m = n(981631),
    h = n(295907),
    g = n(388032),
    _ = n(470840),
    b = n(197571);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = n(349181),
    y = {
        canSend: !1,
        hint: null,
        success: null,
        error: null,
    },
    v = (0, p.hQ)(),
    C = "".concat(v, "-decription"),
    S = "".concat(v, "-error");
function T(e, t) {
    switch (t.type) {
        case "RESET":
            return y;
        case "SUCCESS":
            return O(E({}, y), { success: t.text });
        case "HINT":
            return O(E({}, y), {
                canSend: !0,
                hint: t.text,
            });
        case "ERROR":
            return O(E({}, e), {
                canSend: !0,
                error: t.text,
            });
    }
}
function N(e) {
    let { placeholder: t = g.intl.string(g.t["Rn/sLl"]) } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        [s, p] = i.useReducer(T, y),
        { canSend: E, hint: O, error: N, success: j } = s;
    return (
        i.useEffect(() => {
            null != j &&
                (o()(null != n.current, "Input is submitting when not mounted"),
                (n.current.value = ""),
                n.current.focus());
        }, [j, n]),
        (0, r.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(), o()(null != n.current, "Input is submitted when not mounted");
                let t = n.current.value.trim();
                !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
                let r = (0, f.Zy)(t);
                if (null != r)
                    return void p({
                        type: "ERROR",
                        text: r,
                    });
                d.Z.sendRequest({
                    discordTag: t,
                    context: { location: "Add Friend" },
                }).then(
                    () =>
                        p({
                            type: "SUCCESS",
                            text: g.intl.format(g.t.Rtl1Ep, { discordTag: t }),
                        }),
                    (e) => {
                        var n;
                        return p({
                            type: "ERROR",
                            text: (0, f.NF)(null == (n = e.body) ? void 0 : n.code, t),
                        });
                    },
                );
            },
            autoComplete: "off",
            children: [
                (0, r.jsxs)("div", {
                    className: _.addFriendWumpusWrapper,
                    children: [
                        (0, r.jsx)(u.Text, {
                            tag: "div",
                            variant: "heading-md/normal",
                            children: g.intl.string(g.t["Rn/sLl"]),
                        }),
                        (0, r.jsx)("img", {
                            src: I,
                            alt: "Wumpus Waving",
                        }),
                    ],
                }),
                (0, r.jsx)(u.tEY, {
                    focusTarget: n,
                    ringTarget: l,
                    ringClassName: _.ring,
                    children: (0, r.jsxs)("div", {
                        ref: l,
                        className: a()(_.addFriendInputWrapper, {
                            [_.success]: j,
                            [_.error]: N,
                        }),
                        children: [
                            (0, r.jsx)(c.Is, {
                                id: v,
                                inputRef: n,
                                className: _.addFriendInput,
                                inputClassName: _.input,
                                onKeyPress: (e) => {
                                    let t = e.currentTarget.value;
                                    if (e.key !== h.mR.Enter && t.includes("#")) {
                                        o()(null != n.current, "Input is handling keypress when not mounted");
                                        let r = t.indexOf("#"),
                                            i = n.current.selectionStart,
                                            l =
                                                e.key === h.mR.Backspace ||
                                                e.key === h.mR.ArrowRight ||
                                                e.key === h.mR.ArrowLeft,
                                            a = e.which >= 48 && e.which <= 57;
                                        null != i && i > r && /^(.+?#\d{4})$/.test(t) && !l
                                            ? e.preventDefault()
                                            : null == i || !(i > r) || a || l || e.preventDefault();
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0) return void p({ type: "RESET" });
                                    let t = "",
                                        [, n] = e.split("#");
                                    null != n && (t = e + m.LYt.slice(null != n ? n.length + 1 : 0)),
                                        p({
                                            type: "HINT",
                                            text: t,
                                        });
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
                                "aria-invalid": null != N || void 0,
                                "aria-describedby": null != N ? S : C,
                            }),
                            null != O &&
                                (0, r.jsx)("div", {
                                    className: _.addFriendHint,
                                    "aria-hidden": !0,
                                    children: O,
                                }),
                            (0, r.jsx)(u.Button, {
                                variant: "primary",
                                size: "sm",
                                text: g.intl.string(g.t["PMsq/b"]),
                                disabled: !E,
                                type: "submit",
                            }),
                        ],
                    }),
                }),
                null != N &&
                    (0, r.jsx)("div", {
                        role: "alert",
                        children: (0, r.jsx)(u.Text, {
                            id: S,
                            variant: "text-sm/normal",
                            className: b.marginTop8,
                            color: "text-feedback-critical",
                            children: N,
                        }),
                    }),
                null != j &&
                    (0, r.jsx)("div", {
                        role: "status",
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: b.marginTop8,
                            color: "text-feedback-positive",
                            children: j,
                        }),
                    }),
            ],
        })
    );
}
