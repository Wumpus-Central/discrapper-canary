n.d(t, { Ay: () => v, VW: () => f, fY: () => x, kZ: () => g, z3: () => p });
var l,
    a = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(629584),
    c = n(627363),
    d = n(207371),
    u = n(295813),
    h = n(375708),
    m = n(491920),
    f = (((l = {}).ACTIVITY = "activity"), (l.BOT = "bot"), l);
function p(e) {
    return `vibegrations-preview-mode-panel-${e}`;
}
function g(e) {
    switch (e) {
        case "activity":
            return h.intl.string(u.default.O5ij4K);
        case "bot":
            return h.intl.string(u.default.bBkuBd);
    }
}
function x(e, t) {
    let { data: n } = (0, c.YY)(e ?? void 0),
        { data: l } = (0, c.YY)(t ?? void 0),
        [a, s] = i.useState("activity"),
        r = null != n && (0, d.x)(n),
        o = null != t && l?.bot?.id != null;
    return { mode: a, setMode: s, hasBothModes: r && o };
}
function v(e) {
    let { mode: t, onChange: n, className: l } = e,
        s = i.useMemo(
            () => [
                { value: "activity", name: g("activity"), "aria-controls": p("activity") },
                { value: "bot", name: g("bot"), "aria-controls": p("bot") },
            ],
            [],
        ),
        c = i.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return (0, a.jsx)(o.I, {
        role: "tablist",
        look: "pill",
        className: r()(m.b, l),
        optionClassName: m.u,
        options: s,
        value: t,
        onChange: c,
    });
}
