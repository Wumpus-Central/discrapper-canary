n.d(t, { Z: () => E }), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(570140),
    c = n(401430),
    u = n(155268),
    d = n(600164),
    f = n(695103),
    p = n(388032),
    _ = n(39205),
    m = n(197571);
let h = /^\d+$|^$/;
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
        [v, S] = i.useState("8080"),
        [I, T] = i.useState("localhost"),
        A = h.test(y);
    async function C() {
        c.q$();
        let e = g(I, v, y);
        null != (await c.Wt(y, e)) && t();
    }
    function N() {
        c.mc(), O(""), T(null);
    }
    function P(e) {
        O(e);
    }
    function R(e) {
        T(e);
    }
    function w() {
        return null == E
            ? null
            : (0, r.jsx)("div", {
                  className: m.marginBottom20,
                  children: (0, r.jsx)(s.M14, {
                      type: "critical",
                      children: E,
                  }),
              });
    }
    function D() {
        return "localhost" !== I
            ? null
            : (0, r.jsx)("div", {
                  className: _.inputWrapper,
                  children: (0, r.jsx)(s.oil, {
                      required: !0,
                      label: p.intl.string(p.t.fF4zxq),
                      value: v,
                      maxLength: 5,
                      onChange: (e) => S(e),
                      disabled: b,
                  }),
              });
    }
    i.useEffect(() => () => l.Z.wait(() => c.q$()), []);
    let x = null != u && u === y,
        L = x ? N : C,
        j = i.useMemo(
            () => [
                {
                    loading: b,
                    disabled: !A || 0 === y.length || ("localhost" === I && 0 === v.length),
                    variant: x ? "critical-primary" : "active",
                    text: x ? p.intl.string(p.t.d6TR3I) : p.intl.string(p.t.qwuK5I),
                    onClick: L,
                },
            ],
            [y.length, b, x, A, v.length, L, I],
        );
    return (0, r.jsxs)(a.Modal, {
        title: p.intl.string(p.t.f8fzky),
        subtitle: p.intl.string(p.t.a6Vill),
        actions: j,
        onClose: t,
        transitionState: n,
        children: [
            w(),
            (0, r.jsxs)(d.Z, {
                direction: d.Z.Direction.VERTICAL,
                align: d.Z.Align.START,
                children: [
                    (0, r.jsx)("div", {
                        className: _.inputWrapper,
                        children: (0, r.jsx)(s.oil, {
                            label: p.intl.string(p.t.P6TzgI),
                            required: !0,
                            value: y,
                            maxLength: 19,
                            error: A ? null : p.intl.string(p.t.gPNgKO),
                            onChange: P,
                            disabled: b,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: _.inputWrapper,
                        children: (0, r.jsx)(s.q4e, {
                            label: p.intl.string(p.t["/GTqXG"]),
                            isDisabled: !A || "" === y,
                            value: I,
                            options: [
                                {
                                    value: "localhost",
                                    label: p.intl.string(p.t["+Y9Y6r"]),
                                    key: "localhost",
                                },
                                {
                                    value: "proxy",
                                    label: p.intl.string(p.t.uaksyW),
                                    key: "proxy",
                                },
                            ],
                            onChange: R,
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    D(),
                ],
            }),
        ],
    });
}
