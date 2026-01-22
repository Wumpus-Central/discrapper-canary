n.d(t, {
    A: () => N,
}),
    n(896048),
    n(733351),
    n(747238);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    c = n(421380),
    u = n(397927),
    d = n(49229),
    p = n(915089),
    f = n(395422),
    h = n(652215),
    A = n(650583),
    g = n(985018),
    m = n(680982),
    b = n(473169);

function _(e) {
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

function E(e, t) {
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
let O = n(892799),
    y = {
        canSend: !1,
        hint: null,
        success: null,
        error: null,
    },
    I = (0, p.Ld)(),
    v = "".concat(I, "-decription"),
    S = "".concat(I, "-error");

function C(e, t) {
    switch (t.type) {
        case "RESET":
            return y;
        case "SUCCESS":
            return E(_({}, y), {
                success: t.text,
            });
        case "HINT":
            return E(_({}, y), {
                canSend: !0,
                hint: t.text,
            });
        case "ERROR":
            return E(_({}, e), {
                canSend: !0,
                error: t.text,
            });
    }
}

function N(e) {
    let { placeholder: t = g.intl.string(g.t["Rn/sLl"]) } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        [s, p] = i.useReducer(C, y),
        { canSend: _, hint: E, error: N, success: T } = s;
    return (
        i.useEffect(() => {
            null != T &&
                (o()(null != n.current, "Input is submitting when not mounted"),
                (n.current.value = ""),
                n.current.focus());
        }, [T, n]),
        (0, r.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(), o()(null != n.current, "Input is submitted when not mounted");
                let t = n.current.value.trim();
                !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
                let r = (0, f.Ty)(t);
                null != r
                    ? p({
                          type: "ERROR",
                          text: r,
                      })
                    : d.A.sendRequest({
                          discordTag: t,
                          context: {
                              location: "Add Friend",
                          },
                      }).then(
                          () =>
                              p({
                                  type: "SUCCESS",
                                  text: g.intl.format(g.t.Rtl1Ep, {
                                      discordTag: t,
                                  }),
                              }),
                          (e) => {
                              var n;
                              return p({
                                  type: "ERROR",
                                  text: (0, f.vU)(null == (n = e.body) ? void 0 : n.code, t),
                              });
                          },
                      );
            },
            autoComplete: "off",
            children: [
                (0, r.jsxs)("div", {
                    className: m.QR,
                    children: [
                        (0, r.jsx)(u.Text, {
                            tag: "div",
                            variant: "heading-md/normal",
                            children: g.intl.string(g.t["Rn/sLl"]),
                        }),
                        (0, r.jsx)("img", {
                            src: O,
                            alt: "Wumpus Waving",
                        }),
                    ],
                }),
                (0, r.jsx)(u.vN3, {
                    focusTarget: n,
                    ringTarget: l,
                    ringClassName: m.hN,
                    children: (0, r.jsxs)("div", {
                        ref: l,
                        className: a()(m.fc, {
                            [m.kX]: T,
                            [m.z3]: N,
                        }),
                        children: [
                            (0, r.jsx)(c.ob, {
                                id: I,
                                inputRef: n,
                                className: m.QP,
                                inputClassName: m.hF,
                                onKeyPress: (e) => {
                                    let t = e.currentTarget.value;
                                    if (e.key !== A.N$.Enter && t.includes("#")) {
                                        o()(null != n.current, "Input is handling keypress when not mounted");
                                        let r = t.indexOf("#"),
                                            i = n.current.selectionStart,
                                            l =
                                                e.key === A.N$.Backspace ||
                                                e.key === A.N$.ArrowRight ||
                                                e.key === A.N$.ArrowLeft,
                                            a = e.which >= 48 && e.which <= 57;
                                        null != i && i > r && /^(.+?#\d{4})$/.test(t) && !l
                                            ? e.preventDefault()
                                            : null == i || !(i > r) || a || l || e.preventDefault();
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0)
                                        return void p({
                                            type: "RESET",
                                        });
                                    let t = "",
                                        [, n] = e.split("#");
                                    null != n && (t = e + h.RoK.slice(null != n ? n.length + 1 : 0)),
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
                                "aria-describedby": null != N ? S : v,
                            }),
                            null != E &&
                                (0, r.jsx)("div", {
                                    className: m.dQ,
                                    "aria-hidden": !0,
                                    children: E,
                                }),
                            (0, r.jsx)(u.Button, {
                                variant: "primary",
                                size: "sm",
                                text: g.intl.string(g.t["PMsq/b"]),
                                disabled: !_,
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
                            className: b.Ot,
                            color: "text-feedback-critical",
                            children: N,
                        }),
                    }),
                null != T &&
                    (0, r.jsx)("div", {
                        role: "status",
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: b.Ot,
                            color: "text-feedback-positive",
                            children: T,
                        }),
                    }),
            ],
        })
    );
}
