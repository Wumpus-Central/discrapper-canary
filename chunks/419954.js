var e = u(963935);
function r(t, n, u) {
    return { ...u, key: t, type: n };
}
function i(t, n, u) {
    return { ...u, key: t, type: n };
}
u.d(
    n,
    {},
    {
        AK: function (t, n) {
            return i(t, e.Z6.NAVIGATOR, n);
        },
        D1: function (t, n) {
            return r(t, e.Z6.LIST, n);
        },
        E2: function (t, n) {
            return i(t, e.Z6.CUSTOM, n);
        },
        FW: function (t, n) {
            return r(t, e.Z6.FIELD_SET, n);
        },
        Hn: function (t, n) {
            let u = n.selectionMode ?? "single";
            return { ...n, selectionMode: u, key: t, type: e.Z6.SELECT };
        },
        Hr: function (t) {
            return r("$Root", e.Z6.ROOT, t);
        },
        Qx: function (t, n) {
            return i(t, e.Z6.RADIO, n);
        },
        Tf: function (t, n) {
            return i(t, e.Z6.BUTTON, n);
        },
        WI: function (t, n) {
            return r(t, e.Z6.SECTION, n);
        },
        bd: function (t, n) {
            return r(t, e.Z6.ACCORDION, n);
        },
        gN: function (t, n) {
            return r(t, e.Z6.RELATED, n);
        },
        hl: function (t) {
            return (function t(n) {
                if ("buildLayout" in n && "function" == typeof n.buildLayout) {
                    let u = n.buildLayout().map(t),
                        { buildLayout: e, ...r } = n,
                        i = { ...r, layout: u };
                    return (u.forEach((t) => (t.parent = i)), i);
                }
                return n;
            })(t);
        },
        i4: function (t, n) {
            return r(t, e.Z6.SIDEBAR_ITEM, n);
        },
        sN: function (t, n) {
            return i(t, e.Z6.SLIDER, n);
        },
        t0: function (t, n) {
            return r(t, e.Z6.NESTED_PANEL_NAVIGATOR, n);
        },
        t_: function (t, n) {
            return r(t, e.Z6.PANEL, n);
        },
        v_: function (t, n) {
            return i(t, e.Z6.STATIC, n);
        },
        zC: function (t, n) {
            return r(t, e.Z6.SPLIT, n);
        },
        zD: function (t, n) {
            return i(t, e.Z6.TOGGLE, n);
        },
        zY: function (t, n) {
            return r(t, e.Z6.CARD, n);
        },
        zZ: function (t, n) {
            return r(t, e.Z6.CATEGORY, n);
        },
    },
);
