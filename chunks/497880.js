n.d(e, { default: () => C }), n(388685), n(781311), n(539854);
var l = n(54381),
    i = n(473749),
    r = n(120356),
    a = n.n(r),
    u = n(793030),
    o = n(442837),
    s = n(199849),
    c = n(481060),
    d = n(749210),
    _ = n(910693),
    g = n(592125),
    v = n(70956),
    b = n(5192),
    f = n(501517),
    E = n(981631),
    p = n(342153),
    M = n(388032),
    h = n(144736);
function S() {
    return [
        {
            value: 0,
            label: M.intl.string(M.t["4obaMS"]),
        },
        {
            value: +v.Z.Seconds.HOUR,
            label: M.intl.string(M.t.RKpitY),
        },
        {
            value: 6 * v.Z.Seconds.HOUR,
            label: M.intl.string(M.t["8WfJZ8"]),
        },
        {
            value: 12 * v.Z.Seconds.HOUR,
            label: M.intl.string(M.t.p1up7u),
        },
        {
            value: +v.Z.Seconds.DAY,
            label: M.intl.string(M.t.XuVkkD),
        },
        {
            value: 3 * v.Z.Seconds.DAY,
            label: M.intl.string(M.t["gMcDS+"]),
        },
        {
            value: 7 * v.Z.Seconds.DAY,
            label: M.intl.string(M.t.FA7IUk),
        },
    ];
}
let m = S()[1].value,
    A = S()[0].value;
function C(t) {
    let {
            guildId: e,
            user: n,
            location: r,
            userIds: v,
            onBanMultiple: C,
            transitionState: O,
            onClose: y,
            canBulkBan: T = !1,
            modReportId: j,
        } = t,
        [k, x] = i.useState(null != j ? A : m),
        [D, I] = i.useState(""),
        [R, U] = i.useState(null),
        { isModReportClosed: N, isModReport: Z } = (0, o.cj)([g.Z], () => {
            let t = g.Z.getChannel(j);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel(),
            };
        }),
        [P, Y] = i.useState(!1),
        [F, L] = i.useState(!1),
        B = (0, _.sE)(e, {
            location: r,
            targetUserId: null == n ? void 0 : n.id,
            targets: v,
        }),
        w = i.useCallback(() => {
            let t = null != R ? R : D;
            if (null != C) {
                if (!(null != v && (null == v ? void 0 : v.size) > 0 && T) || P) return;
                if ("" === D.trim() && !P) return void Y(!0);
                C(e, [...v], k, t);
            } else {
                if (null == n) return;
                d.Z.banUser(e, null == n ? void 0 : n.id, k, t, j).then(() => {
                    F && null != j && f.Z.resolveFlag(j);
                });
            }
            B(_.jQ.BAN), y();
        }, [R, D, C, B, y, v, T, P, e, k, n, j, F]),
        H = i.useCallback((t) => {
            x(t);
        }, []),
        K = i.useCallback((t) => {
            I(t), Y(!1), U(null);
        }, []),
        G = i.useCallback(
            (t) => {
                U(t), P && Y(!1);
            },
            [P],
        ),
        V = Z && !N && null != j,
        X = [
            {
                name: M.intl.string(M.t.tamLhT),
                value: M.intl.string(M.t.tamLhT),
            },
            {
                name: M.intl.string(M.t.UmxjMg),
                value: M.intl.string(M.t.UmxjMg),
            },
            {
                name: M.intl.string(M.t.EXY1d8),
                value: M.intl.string(M.t.EXY1d8),
            },
            {
                name: M.intl.string(M.t.BcZTKu),
                value: "other",
            },
        ],
        W = (() => {
            if (null != C && null != v)
                return M.intl.formatToPlainString(M.t.HVJexf, { count: null == v ? void 0 : v.size });
            if (null == n) return "";
            let t = b.ZP.getName(e, null, n);
            return M.intl.formatToPlainString(null != j ? M.t.WDR8Xd : M.t.jeKpok, { username: "@".concat(t) });
        })(),
        q = null == j ? null : M.intl.string(M.t.pQjhIK);
    return (0, l.jsx)(u.Modal, {
        onClose: y,
        transitionState: O,
        title: W,
        subtitle: null != q ? q : void 0,
        actions: (() => {
            let t = [];
            return (
                Z ||
                    t.push({
                        variant: "secondary",
                        text: M.intl.string(M.t["ETE/oC"]),
                        onClick: y,
                    }),
                t.push({
                    variant: "critical-primary",
                    text: M.intl.string(M.t["5MBJ5M"]),
                    onClick: w,
                }),
                t
            );
        })(),
        actionBarInput: V
            ? (0, l.jsx)(c.Checkbox, {
                  checked: F,
                  onChange: (t) => L(t),
                  label: M.intl.string(p.default["8yIKem"]),
              })
            : void 0,
        children: (0, l.jsxs)(c.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, l.jsxs)(c.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        P &&
                            (0, l.jsx)(c.M14, {
                                type: "critical",
                                children: M.intl.string(M.t.IrYX1y),
                            }),
                        (0, l.jsx)(c.FXm, {
                            required: !0,
                            label: M.intl.string(null != j ? M.t["+KCLVp"] : M.t.w4Ivys),
                            value: D,
                            options: X.map((t) =>
                                (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (e) {
                                                var l;
                                                (l = n[e]),
                                                    e in t
                                                        ? Object.defineProperty(t, e, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (t[e] = l);
                                            });
                                    }
                                    return t;
                                })({}, t),
                            ),
                            onChange: K,
                        }),
                        (0, l.jsx)("div", {
                            className: a()(h.reasonFreeText, { [h.hidden]: "other" !== D }),
                            children: (0, l.jsx)(c.Kx8, {
                                maxLength: E.GNZ,
                                onChange: G,
                                value: null != R ? R : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(s.y6, {
                    label: M.intl.string(null != j ? M.t.ERSM8H : M.t["8l3W0y"]),
                    options: S(),
                    value: k,
                    onChange: H,
                }),
            ],
        }),
    });
}
