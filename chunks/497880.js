n.d(e, { default: () => A }), n(388685), n(781311), n(539854);
var l = n(951288),
    i = n(647438),
    r = n(120356),
    a = n.n(r),
    u = n(793030),
    o = n(442837),
    s = n(481060),
    c = n(749210),
    d = n(910693),
    _ = n(592125),
    g = n(70956),
    v = n(5192),
    b = n(501517),
    f = n(981631),
    E = n(43617),
    p = n(388032),
    M = n(144736);
function h() {
    return [
        {
            value: 0,
            label: p.intl.string(p.t["4obaMS"]),
        },
        {
            value: +g.Z.Seconds.HOUR,
            label: p.intl.string(p.t.RKpitY),
        },
        {
            value: 6 * g.Z.Seconds.HOUR,
            label: p.intl.string(p.t["8WfJZ8"]),
        },
        {
            value: 12 * g.Z.Seconds.HOUR,
            label: p.intl.string(p.t.p1up7u),
        },
        {
            value: +g.Z.Seconds.DAY,
            label: p.intl.string(p.t.XuVkkD),
        },
        {
            value: 3 * g.Z.Seconds.DAY,
            label: p.intl.string(p.t["gMcDS+"]),
        },
        {
            value: 7 * g.Z.Seconds.DAY,
            label: p.intl.string(p.t.FA7IUk),
        },
    ];
}
let S = h()[1].value,
    m = h()[0].value;
function A(t) {
    let {
            guildId: e,
            user: n,
            location: r,
            userIds: g,
            onBanMultiple: A,
            transitionState: C,
            onClose: O,
            canBulkBan: y = !1,
            modReportId: T,
        } = t,
        [j, k] = i.useState(null != T ? m : S),
        [x, D] = i.useState(""),
        [I, R] = i.useState(null),
        { isModReportClosed: U, isModReport: N } = (0, o.cj)([_.Z], () => {
            let t = _.Z.getChannel(T);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel(),
            };
        }),
        [Z, P] = i.useState(!1),
        [Y, F] = i.useState(!1),
        L = (0, d.sE)(e, {
            location: r,
            targetUserId: null == n ? void 0 : n.id,
            targets: g,
        }),
        B = i.useCallback(() => {
            let t = null != I ? I : x;
            if (null != A) {
                if (!(null != g && (null == g ? void 0 : g.size) > 0 && y) || Z) return;
                if ("" === x.trim() && !Z) return void P(!0);
                A(e, [...g], j, t);
            } else {
                if (null == n) return;
                c.Z.banUser(e, null == n ? void 0 : n.id, j, t, T).then(() => {
                    Y && null != T && b.Z.resolveFlag(T);
                });
            }
            L(d.jQ.BAN), O();
        }, [I, x, A, L, O, g, y, Z, e, j, n, T, Y]),
        w = i.useCallback((t) => {
            k(t);
        }, []),
        H = i.useCallback((t) => {
            D(t), P(!1), R(null);
        }, []),
        K = i.useCallback(
            (t) => {
                R(t), Z && P(!1);
            },
            [Z],
        ),
        G = N && !U && null != T,
        V = [
            {
                name: p.intl.string(p.t.tamLhT),
                value: p.intl.string(p.t.tamLhT),
            },
            {
                name: p.intl.string(p.t.UmxjMg),
                value: p.intl.string(p.t.UmxjMg),
            },
            {
                name: p.intl.string(p.t.EXY1d8),
                value: p.intl.string(p.t.EXY1d8),
            },
            {
                name: p.intl.string(p.t.BcZTKu),
                value: "other",
            },
        ],
        X = (() => {
            if (null != A && null != g)
                return p.intl.formatToPlainString(p.t.HVJexf, { count: null == g ? void 0 : g.size });
            if (null == n) return "";
            let t = v.ZP.getName(e, null, n);
            return p.intl.formatToPlainString(null != T ? p.t.WDR8Xd : p.t.jeKpok, { username: "@".concat(t) });
        })(),
        q = null == T ? null : p.intl.string(p.t.pQjhIK);
    return (0, l.jsx)(u.Modal, {
        onClose: O,
        transitionState: C,
        title: X,
        subtitle: null != q ? q : void 0,
        actions: (() => {
            let t = [];
            return (
                N ||
                    t.push({
                        variant: "secondary",
                        text: p.intl.string(p.t["ETE/oC"]),
                        onClick: O,
                    }),
                t.push({
                    variant: "critical-primary",
                    text: p.intl.string(p.t["5MBJ5M"]),
                    onClick: B,
                }),
                t
            );
        })(),
        actionBarInput: G
            ? (0, l.jsx)(s.Checkbox, {
                  checked: Y,
                  onChange: (t) => F(t),
                  label: p.intl.string(E.default["8yIKem"]),
              })
            : void 0,
        children: (0, l.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, l.jsxs)(s.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        Z &&
                            (0, l.jsx)(s.M14, {
                                type: "critical",
                                children: p.intl.string(p.t.IrYX1y),
                            }),
                        (0, l.jsx)(s.FXm, {
                            required: !0,
                            label: p.intl.string(null != T ? p.t["+KCLVp"] : p.t.w4Ivys),
                            value: x,
                            options: V.map((t) =>
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
                            onChange: H,
                        }),
                        (0, l.jsx)("div", {
                            className: a()(M.reasonFreeText, { [M.hidden]: "other" !== x }),
                            children: (0, l.jsx)(s.Kx8, {
                                maxLength: f.GNZ,
                                onChange: K,
                                value: null != I ? I : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(s.q4e, {
                    label: p.intl.string(null != T ? p.t.ERSM8H : p.t["8l3W0y"]),
                    options: h(),
                    value: j,
                    onChange: w,
                }),
            ],
        }),
    });
}
