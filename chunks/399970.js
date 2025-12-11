n.d(t, { Z: () => b }), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(199849),
    l = n(481060),
    c = n(570140),
    u = n(401430),
    d = n(155268),
    f = n(600164),
    p = n(695103),
    _ = n(388032),
    m = n(289253),
    h = n(478411);
let g = /^\d+$|^$/;
function E(e, t, n) {
    if (null == e) return null;
    switch (e) {
        case "localhost":
            return "https://localhost:".concat(t);
        case "proxy":
            return (0, d.ZP)(n);
    }
}
function b(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: d,
            authorizationError: b,
            authorizing: y,
        } = (0, o.cj)([p.Z], () => ({
            authorizedApplicationId: p.Z.testModeApplicationId,
            authorizationError: p.Z.error,
            authorizing: p.Z.isFetchingAuthorization,
        })),
        [O, v] = i.useState(null != d ? d : ""),
        [S, I] = i.useState("8080"),
        [T, C] = i.useState("localhost"),
        A = g.test(O);
    async function N() {
        u.q$();
        let e = E(T, S, O);
        null != (await u.Wt(O, e)) && t();
    }
    function P() {
        u.mc(), v(""), C(null);
    }
    function R(e) {
        v(e);
    }
    function w(e) {
        C(e);
    }
    function D() {
        return null == b
            ? null
            : (0, r.jsx)("div", {
                  className: h.marginBottom20,
                  children: (0, r.jsx)(l.M14, {
                      type: "critical",
                      children: b,
                  }),
              });
    }
    function x() {
        return "localhost" !== T
            ? null
            : (0, r.jsx)("div", {
                  className: m.inputWrapper,
                  children: (0, r.jsx)(l.oil, {
                      required: !0,
                      label: _.intl.string(_.t.fF4zxq),
                      value: S,
                      maxLength: 5,
                      onChange: (e) => I(e),
                      disabled: y,
                  }),
              });
    }
    i.useEffect(() => () => c.Z.wait(() => u.q$()), []);
    let L = null != d && d === O,
        j = L ? P : N,
        M = i.useMemo(
            () => [
                {
                    loading: y,
                    disabled: !A || 0 === O.length || ("localhost" === T && 0 === S.length),
                    variant: L ? "critical-primary" : "active",
                    text: L ? _.intl.string(_.t.d6TR3I) : _.intl.string(_.t.qwuK5I),
                    onClick: j,
                },
            ],
            [O.length, y, L, A, S.length, j, T],
        );
    return (0, r.jsxs)(a.Modal, {
        title: _.intl.string(_.t.f8fzky),
        subtitle: _.intl.string(_.t.a6Vill),
        actions: M,
        onClose: t,
        transitionState: n,
        children: [
            D(),
            (0, r.jsxs)(f.Z, {
                direction: f.Z.Direction.VERTICAL,
                align: f.Z.Align.START,
                children: [
                    (0, r.jsx)("div", {
                        className: m.inputWrapper,
                        children: (0, r.jsx)(l.oil, {
                            label: _.intl.string(_.t.P6TzgI),
                            required: !0,
                            value: O,
                            maxLength: 19,
                            error: A ? null : _.intl.string(_.t.gPNgKO),
                            onChange: R,
                            disabled: y,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: m.inputWrapper,
                        children: (0, r.jsx)(s.y6, {
                            label: _.intl.string(_.t["/GTqXG"]),
                            isDisabled: !A || "" === O,
                            value: T,
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
                            onChange: w,
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    x(),
                ],
            }),
        ],
    });
}
