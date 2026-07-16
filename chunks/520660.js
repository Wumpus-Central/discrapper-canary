n.d(l, { default: () => H });
var t = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    c = n(312742),
    a = n(295868),
    o = n(661531),
    u = n(292666),
    d = n(408278),
    h = n(285796),
    f = n(772838),
    m = n(939249),
    x = n(245604),
    g = n(834730),
    p = n(913122),
    C = n(44234),
    j = n(513461),
    v = n(242273),
    y = n(260197),
    N = n(375708),
    b = n(423396);
let k = "MULTIPLE_CHOICE";
function E(e) {
    let { choice: l, index: n, onChange: s, onClear: o, onReorder: m, isDropHovered: x } = e,
        g = i.useRef(null),
        p = i.useRef(null),
        [, j, v] = (0, c.i)({
            type: k,
            item: { choice: l, index: n },
            end: (e, l) => {
                null == e || l.didDrop() || m(e.choice, null, !0);
            },
        }),
        [, y] = (0, a.H)({
            accept: k,
            hover: (e, l) => {
                let { index: t } = e,
                    i = g.current?.getBoundingClientRect(),
                    s = l.getClientOffset();
                if (null == i || null == s) return;
                let r = (i.bottom - i.top) / 2,
                    c = s.y - i.top;
                (t < n && c < r) || (t > n && c > r) || m(e.choice, n, !1);
            },
            drop: (e) => {
                m(e.choice, n, !0);
            },
        });
    return (
        i.useLayoutEffect(
            () => (
                j(p),
                v(y(g)),
                () => {
                    j(null), y(null);
                }
            ),
            [j, y, v],
        ),
        (0, t.jsxs)("div", {
            ref: g,
            className: r()(b.XQ, { [b.cB]: x }),
            "data-dnd-name": l,
            children: [
                (0, t.jsx)("div", {
                    className: b.R6,
                    children: (0, t.jsx)(C.A, { height: 20, width: 20, className: b.IC }),
                }),
                (0, t.jsxs)("div", {
                    className: b.I6,
                    children: [
                        (0, t.jsx)(u.k, {
                            autoFocus: !0,
                            onChange: (e) => s(e),
                            placeholder: N.intl.formatToPlainString(N.t["Ep/pbH"], { index: n + 1 }),
                            value: l,
                        }),
                        (0, t.jsx)("div", {
                            className: b.mt,
                            children: (0, t.jsx)(d.K, {
                                icon: h.a,
                                size: "sm",
                                "aria-label": N.intl.string(N.t.VkKicb),
                                variant: "icon-only",
                                onClick: o,
                            }),
                        }),
                    ],
                }),
                (0, t.jsx)("div", {
                    ref: p,
                    className: b.cK,
                    "data-dnd-name": l,
                    children: (0, t.jsx)(f.W, { size: "xs", color: "currentColor", className: b.co }),
                }),
            ],
        })
    );
}
let H = function (e) {
    let { field: l, onSave: n, onClose: s } = e,
        [r, c] = i.useState(l?.label ?? ""),
        [a, d] = i.useState(l?.choices ?? [""]),
        [h, f] = i.useState(null),
        [C, k] = i.useState(null);
    function H(e, l, n) {
        if (null == a) return;
        null != h && f(null);
        let t = a.indexOf(e),
            i = [...a];
        null != l && l !== t && (i.splice(t, 1), i.splice(l, 0, e), d(i)), n ? null !== l && k(null) : l !== C && k(l);
    }
    async function I() {
        null != h && f(null);
        let e = r.trim();
        if ("" === e) return void f(N.intl.string(N.t["G+TI44"]));
        if (0 === a.map((e) => e.trim()).filter((e) => "" !== e).length) return void f(N.intl.string(N.t.jZoHgI));
        let l = { field_type: j.rX.MULTIPLE_CHOICE, label: e, choices: a, required: !0 };
        try {
            await n(l), s();
        } catch (e) {
            f(new p.LG(e).getAnyErrorMessage());
        }
    }
    return (0, t.jsxs)(v.A, {
        ...e,
        errorText: h,
        title: N.intl.string(N.t.ooKh3m),
        onConfirm: I,
        onCancel: s,
        children: [
            (0, t.jsx)("div", {
                className: b.Ef,
                children: (0, t.jsx)(u.k, {
                    autoFocus: !0,
                    onChange: function (e) {
                        null != h && f(null);
                        let l = e.replace(/(\r\n|\n|\r)/g, " ");
                        l.length > y.Ty && (l = e.slice(0, y.Ty)), c(l);
                    },
                    placeholder: N.intl.string(N.t.fqVmbL),
                    value: r,
                }),
            }),
            (0, t.jsx)("div", { className: b.yF }),
            a.map((e, l) =>
                (0, t.jsx)(
                    E,
                    {
                        choice: e,
                        index: l,
                        onChange: (e) => {
                            let n, t;
                            return (
                                null != h && f(null),
                                (n = e.replace(/(\r\n|\n|\r)/g, " ")).length > y.yR && (n = n.slice(0, y.yR)),
                                void (((t = [...a])[l] = n), d(t))
                            );
                        },
                        onClear: () => {
                            let e;
                            return (
                                null != h && f(null),
                                void d(0 === (e = [...a.slice(0, l), ...a.slice(l + 1)]).length ? [""] : e)
                            );
                        },
                        onReorder: H,
                        isDropHovered: l === C,
                    },
                    `choice-${l}`,
                ),
            ),
            a.length !== y.Hz &&
                (0, t.jsx)("div", {
                    className: b.C5,
                    children: (0, t.jsxs)(m.D, {
                        className: b.bK,
                        onClick: function () {
                            null != h && f(null), a.length !== y.Hz && d([...a, ""]);
                        },
                        children: [
                            (0, t.jsx)(x.U, {
                                size: "custom",
                                height: 17,
                                width: 17,
                                color: o.A.unsafe_rawColors.BLUE_345.css,
                            }),
                            (0, t.jsx)(g.E, {
                                color: "text-link",
                                variant: "text-md/normal",
                                children: N.intl.string(N.t.sVfx9r),
                            }),
                        ],
                    }),
                }),
        ],
    });
};
