var t = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    c = n(126600),
    a = n(840508),
    o = n(646514),
    u = n(95477),
    d = n(408278),
    h = n(285796),
    f = n(772838),
    m = n(939249),
    g = n(245604),
    x = n(834730),
    p = n(627784),
    v = n(44234),
    C = n(513461),
    j = n(242273);
n(260197);
var b = n(792996),
    N = n(94499);
let k = "MULTIPLE_CHOICE";
function y(e) {
    let { choice: l, index: n, onChange: s, onClear: o, onReorder: m, isDropHovered: g } = e,
        x = i.useRef(null),
        p = i.useRef(null),
        [, C, j] = (0, c.i)({
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
                    i = x.current?.getBoundingClientRect(),
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
                C(p),
                j(y(x)),
                () => {
                    (C(null), y(null));
                }
            ),
            [C, y, j],
        ),
        (0, t.jsxs)("div", {
            ref: x,
            className: r()(N.XQ, { [N.cB]: g }),
            "data-dnd-name": l,
            children: [
                (0, t.jsx)("div", {
                    className: N.R6,
                    children: (0, t.jsx)(v.A, { height: 20, width: 20, className: N.IC }),
                }),
                (0, t.jsxs)("div", {
                    className: N.I6,
                    children: [
                        (0, t.jsx)(u.k, {
                            autoFocus: !0,
                            onChange: (e) => s(e),
                            placeholder: b.intl.formatToPlainString(b.t["Ep/pbH"], { index: n + 1 }),
                            value: l,
                        }),
                        (0, t.jsx)("div", {
                            className: N.mt,
                            children: (0, t.jsx)(d.K, {
                                icon: h.a,
                                size: "sm",
                                "aria-label": b.intl.string(b.t.VkKicb),
                                variant: "icon-only",
                                onClick: o,
                            }),
                        }),
                    ],
                }),
                (0, t.jsx)("div", {
                    ref: p,
                    className: N.cK,
                    "data-dnd-name": l,
                    children: (0, t.jsx)(f.W, { size: "xs", color: "currentColor", className: N.co }),
                }),
            ],
        })
    );
}
n.d(
    l,
    {},
    {
        default: function (e) {
            let { field: l, onSave: n, onClose: s } = e,
                [r, c] = i.useState(l?.label ?? ""),
                [a, d] = i.useState(l?.choices ?? [""]),
                [h, f] = i.useState(null),
                [v, k] = i.useState(null);
            function E(e, l, n) {
                if (null == a) return;
                null != h && f(null);
                let t = a.indexOf(e),
                    i = [...a];
                (null != l && l !== t && (i.splice(t, 1), i.splice(l, 0, e), d(i)),
                    n ? null !== l && k(null) : l !== v && k(l));
            }
            return (0, t.jsxs)(j.A, {
                ...e,
                errorText: h,
                title: b.intl.string(b.t.ooKh3m),
                onConfirm: async function () {
                    null != h && f(null);
                    let e = r.trim();
                    if ("" === e) return void f(b.intl.string(b.t["G+TI44"]));
                    if (0 === a.map((e) => e.trim()).filter((e) => "" !== e).length)
                        return void f(b.intl.string(b.t.jZoHgI));
                    let l = { field_type: C.rX.MULTIPLE_CHOICE, label: e, choices: a, required: !0 };
                    try {
                        (await n(l), s());
                    } catch (e) {
                        f(new p.LG(e).getAnyErrorMessage());
                    }
                },
                onCancel: s,
                children: [
                    (0, t.jsx)("div", {
                        className: N.Ef,
                        children: (0, t.jsx)(u.k, {
                            autoFocus: !0,
                            onChange: function (e) {
                                null != h && f(null);
                                let l = e.replace(/(\r\n|\n|\r)/g, " ");
                                (l.length > 300 && (l = e.slice(0, 300)), c(l));
                            },
                            placeholder: b.intl.string(b.t.fqVmbL),
                            value: r,
                        }),
                    }),
                    (0, t.jsx)("div", { className: N.yF }),
                    a.map((e, l) =>
                        (0, t.jsx)(
                            y,
                            {
                                choice: e,
                                index: l,
                                onChange: (e) => {
                                    let n, t;
                                    return (
                                        null != h && f(null),
                                        (n = e.replace(/(\r\n|\n|\r)/g, " ")).length > 150 && (n = n.slice(0, 150)),
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
                                onReorder: E,
                                isDropHovered: l === v,
                            },
                            `choice-${l}`,
                        ),
                    ),
                    8 !== a.length &&
                        (0, t.jsx)("div", {
                            className: N.C5,
                            children: (0, t.jsxs)(m.D, {
                                className: N.bK,
                                onClick: function () {
                                    (null != h && f(null), 8 !== a.length && d([...a, ""]));
                                },
                                children: [
                                    (0, t.jsx)(g.U, {
                                        size: "custom",
                                        height: 17,
                                        width: 17,
                                        color: o.A.unsafe_rawColors.BLUE_345.css,
                                    }),
                                    (0, t.jsx)(x.E, {
                                        color: "text-link",
                                        variant: "body-md/normal",
                                        children: b.intl.string(b.t.sVfx9r),
                                    }),
                                ],
                            }),
                        }),
                ],
            });
        },
    },
);
