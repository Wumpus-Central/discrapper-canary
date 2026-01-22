n.d(e, {
    default: () => m,
}),
    n(896048),
    n(733351),
    n(321073);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    u = n(158954),
    o = n(311907),
    s = n(397927),
    c = n(686956),
    d = n(504049),
    g = n(734057),
    A = n(927813),
    _ = n(562153),
    b = n(226698),
    v = n(652215),
    f = n(641131),
    E = n(985018),
    p = n(533503);

function h() {
    return [
        {
            id: "none",
            value: 0,
            label: E.intl.string(E.t["4obaMS"]),
        },
        {
            id: "1hour",
            value: +A.A.Seconds.HOUR,
            label: E.intl.string(E.t.RKpitY),
        },
        {
            id: "6hours",
            value: 6 * A.A.Seconds.HOUR,
            label: E.intl.string(E.t["8WfJZ8"]),
        },
        {
            id: "12hours",
            value: 12 * A.A.Seconds.HOUR,
            label: E.intl.string(E.t.p1up7u),
        },
        {
            id: "1day",
            value: +A.A.Seconds.DAY,
            label: E.intl.string(E.t.XuVkkD),
        },
        {
            id: "3days",
            value: 3 * A.A.Seconds.DAY,
            label: E.intl.string(E.t["gMcDS+"]),
        },
        {
            id: "7days",
            value: 7 * A.A.Seconds.DAY,
            label: E.intl.string(E.t.FA7IUk),
        },
    ];
}
let S = h()[1].value,
    M = h()[0].value;

function m(t) {
    let e,
        {
            guildId: n,
            user: r,
            location: A,
            userIds: m,
            onBanMultiple: C,
            transitionState: O,
            onClose: y,
            canBulkBan: T = !1,
            modReportId: j,
        } = t,
        [k, R] = i.useState(null != j ? M : S),
        [D, I] = i.useState(""),
        [U, N] = i.useState(null),
        { isModReportClosed: w, isModReport: x } = (0, o.cf)([g.A], () => {
            let t = g.A.getChannel(j);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel(),
            };
        }),
        [H, P] = i.useState(!1),
        [B, L] = i.useState(!1),
        Y = (0, d.$9)(n, {
            location: A,
            targetUserId: null == r ? void 0 : r.id,
            targets: m,
        }),
        K = i.useCallback(() => {
            let t = null != U ? U : D;
            if (null != C) {
                if (!(null != m && (null == m ? void 0 : m.size) > 0 && T) || H) return;
                if ("" === D.trim() && !H) return void P(!0);
                C(n, [...m], k, t);
            } else {
                if (null == r) return;
                c.A.banUser(n, null == r ? void 0 : r.id, k, t, j).then(() => {
                    B && null != j && b.A.resolveFlag(j);
                });
            }
            Y(d.Nj.BAN), y();
        }, [U, D, C, Y, y, m, T, H, n, k, r, j, B]),
        F = i.useCallback((t) => {
            R(t);
        }, []),
        V = i.useCallback((t) => {
            I(t), P(!1), N(null);
        }, []),
        W = i.useCallback(
            (t) => {
                N(t), H && P(!1);
            },
            [H],
        ),
        G = x && !w && null != j,
        J = [
            {
                name: E.intl.string(E.t.tamLhT),
                value: E.intl.string(E.t.tamLhT),
            },
            {
                name: E.intl.string(E.t.UmxjMg),
                value: E.intl.string(E.t.UmxjMg),
            },
            {
                name: E.intl.string(E.t.EXY1d8),
                value: E.intl.string(E.t.EXY1d8),
            },
            {
                name: E.intl.string(E.t.BcZTKu),
                value: "other",
            },
        ],
        X = (() => {
            if (null != C && null != m)
                return E.intl.formatToPlainString(E.t.HVJexf, {
                    count: null == m ? void 0 : m.size,
                });
            if (null == r) return "";
            let t = _.Ay.getName(n, null, r);
            return E.intl.formatToPlainString(null != j ? E.t.WDR8Xd : E.t.jeKpok, {
                username: "@".concat(t),
            });
        })(),
        z = null == j ? null : E.intl.string(E.t.pQjhIK);
    return (0, l.jsx)(u.Modal, {
        onClose: y,
        transitionState: O,
        title: X,
        subtitle: null != z ? z : void 0,
        actions:
            ((e = []),
            x ||
                e.push({
                    variant: "secondary",
                    text: E.intl.string(E.t["ETE/oC"]),
                    onClick: y,
                }),
            e.push({
                variant: "critical-primary",
                text: E.intl.string(E.t["5MBJ5M"]),
                onClick: K,
            }),
            e),
        actionBarInput: G
            ? (0, l.jsx)(s.Checkbox, {
                  checked: B,
                  onChange: (t) => L(t),
                  label: E.intl.string(f.default["8yIKem"]),
              })
            : void 0,
        children: (0, l.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, l.jsxs)(s.BJc, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        H &&
                            (0, l.jsx)(s.wx6, {
                                type: "critical",
                                children: E.intl.string(E.t.IrYX1y),
                            }),
                        (0, l.jsx)(s.z6M, {
                            required: !0,
                            label: E.intl.string(null != j ? E.t["+KCLVp"] : E.t.w4Ivys),
                            value: D,
                            options: J.map((t) =>
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
                            onChange: V,
                        }),
                        (0, l.jsx)("div", {
                            className: a()(p.Ar, {
                                [p.R]: "other" !== D,
                            }),
                            children: (0, l.jsx)(s.fs1, {
                                maxLength: v.hlA,
                                onChange: W,
                                value: null != U ? U : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(s.l6P, {
                    label: E.intl.string(null != j ? E.t.ERSM8H : E.t["8l3W0y"]),
                    options: h(),
                    value: k,
                    onSelectionChange: F,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
