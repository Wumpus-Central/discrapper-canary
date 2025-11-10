n.d(t, { Z: () => E }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(570140),
    c = n(401430),
    u = n(155268),
    d = n(600164),
    f = n(695103),
    _ = n(388032),
    p = n(39205),
    h = n(197571);
let m = /^\d+$|^$/;
function g(e, t, n) {
    if (null == e) return null;
    switch (e) {
        case "localhost":
            return "https://localhost:".concat(t);
        case "proxy":
            return (0, u.ZP)(n);
    }
}
function E(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: u,
            authorizationError: E,
            authorizing: b,
        } = (0, o.cj)([f.Z], () => ({
            authorizedApplicationId: f.Z.testModeApplicationId,
            authorizationError: f.Z.error,
            authorizing: f.Z.isFetchingAuthorization,
        })),
        [y, O] = i.useState(null != u ? u : ""),
        [v, I] = i.useState("8080"),
        [S, T] = i.useState("localhost"),
        A = m.test(y);
    async function C() {
        c.q$();
        let e = g(S, v, y);
        null != (await c.Wt(y, e)) && t();
    }
    function N() {
        c.mc(), O(""), T(null);
    }
    function R(e) {
        O(e);
    }
    function P(e) {
        T(e);
    }
    function w() {
        return null == E
            ? null
            : (0, r.jsx)("div", {
                  className: h.marginBottom20,
                  children: (0, r.jsx)(s.M14, {
                      type: "critical",
                      children: E,
                  }),
              });
    }
    function D() {
        return "localhost" !== S
            ? null
            : (0, r.jsx)("div", {
                  className: p.inputWrapper,
                  children: (0, r.jsx)(s.oil, {
                      required: !0,
                      label: _.intl.string(_.t.fF4zxq),
                      value: v,
                      maxLength: 5,
                      onChange: (e) => I(e),
                      disabled: b,
                  }),
              });
    }
    i.useEffect(() => () => l.Z.wait(() => c.q$()), []);
    let x = null != u && u === y,
        L = x ? N : C,
        M = i.useMemo(
            () => [
                {
                    loading: b,
                    disabled: !A || 0 === y.length || ("localhost" === S && 0 === v.length),
                    variant: x ? "critical-primary" : "active",
                    text: x ? _.intl.string(_.t.d6TR3I) : _.intl.string(_.t.qwuK5I),
                    onClick: L,
                },
            ],
            [y.length, b, x, A, v.length, L, S],
        );
    return (0, r.jsxs)(a.Modal, {
        title: _.intl.string(_.t.f8fzky),
        subtitle: _.intl.string(_.t.a6Vill),
        actions: M,
        onClose: t,
        transitionState: n,
        children: [
            w(),
            (0, r.jsxs)(d.Z, {
                direction: d.Z.Direction.VERTICAL,
                align: d.Z.Align.START,
                children: [
                    (0, r.jsx)("div", {
                        className: p.inputWrapper,
                        children: (0, r.jsx)(s.oil, {
                            label: _.intl.string(_.t.P6TzgI),
                            required: !0,
                            value: y,
                            maxLength: 19,
                            error: A ? null : _.intl.string(_.t.gPNgKO),
                            onChange: R,
                            disabled: b,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: p.inputWrapper,
                        children: (0, r.jsx)(s.q4e, {
                            label: _.intl.string(_.t["/GTqXG"]),
                            isDisabled: !A || "" === y,
                            value: S,
                            options: [
                                {
                                    value: "localhost",
                                    label: _.intl.string(_.t["+Y9Y6r"]),
                                    key: "localhost",
                                },
                                {
                                    value: "proxy",
                                    label: _.intl.string(_.t.uaksyW),
                                    key: "proxy",
                                },
                            ],
                            onChange: P,
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    D(),
                ],
            }),
        ],
    });
}
