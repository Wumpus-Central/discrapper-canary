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
    _ = n(289253),
    h = n(478411);
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
        [v, S] = i.useState("8080"),
        [I, T] = i.useState("localhost"),
        C = m.test(y);
    async function A() {
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
    function w(e) {
        T(e);
    }
    function R() {
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
        L = x ? N : A,
        j = i.useMemo(
            () => [
                {
                    loading: b,
                    disabled: !C || 0 === y.length || ("localhost" === I && 0 === v.length),
                    variant: x ? "critical-primary" : "active",
                    text: x ? p.intl.string(p.t.d6TR3I) : p.intl.string(p.t.qwuK5I),
                    onClick: L,
                },
            ],
            [y.length, b, x, C, v.length, L, I],
        );
    return (0, r.jsxs)(a.Modal, {
        title: p.intl.string(p.t.f8fzky),
        subtitle: p.intl.string(p.t.a6Vill),
        actions: j,
        onClose: t,
        transitionState: n,
        children: [
            R(),
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
                            error: C ? null : p.intl.string(p.t.gPNgKO),
                            onChange: P,
                            disabled: b,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: _.inputWrapper,
                        children: (0, r.jsx)(s.PhF, {
                            selectionMode: "single",
                            label: p.intl.string(p.t["/GTqXG"]),
                            disabled: !C || "" === y,
                            value: I,
                            options: [
                                {
                                    value: "localhost",
                                    label: p.intl.string(p.t["+Y9Y6r"]),
                                    id: "localhost",
                                },
                                {
                                    value: "proxy",
                                    label: p.intl.string(p.t.uaksyW),
                                    id: "proxy",
                                },
                            ],
                            onSelectionChange: w,
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    D(),
                ],
            }),
        ],
    });
}
