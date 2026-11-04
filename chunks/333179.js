e(321073);
var n = e(477900),
    i = e(582128),
    a = e(503698),
    r = e.n(a),
    s = e(855986),
    u = e(189213),
    o = e(150934),
    d = e(331322),
    c = e(683071),
    g = e(771871),
    h = e(103557),
    v = e(691885),
    p = e(778858),
    b = e(504049),
    m = e(734057),
    S = e(927813),
    f = e(562153),
    A = e(226698);
e(652215);
var C = e(307805),
    k = e(792996),
    x = e(949057);
function j() {
    return [
        { id: "none", value: 0, label: k.intl.string(k.t["4obaMS"]) },
        { id: "1hour", value: +S.A.Seconds.HOUR, label: k.intl.string(k.t.RKpitY) },
        { id: "6hours", value: 6 * S.A.Seconds.HOUR, label: k.intl.string(k.t["8WfJZ8"]) },
        { id: "12hours", value: 12 * S.A.Seconds.HOUR, label: k.intl.string(k.t.p1up7u) },
        { id: "1day", value: +S.A.Seconds.DAY, label: k.intl.string(k.t.XuVkkD) },
        { id: "3days", value: 3 * S.A.Seconds.DAY, label: k.intl.string(k.t["gMcDS+"]) },
        { id: "7days", value: 7 * S.A.Seconds.DAY, label: k.intl.string(k.t.FA7IUk) },
    ];
}
let y = j()[1].value,
    M = j()[0].value;
e.d(
    l,
    {},
    {
        default: function (t) {
            let l,
                {
                    guildId: e,
                    user: a,
                    location: S,
                    userIds: R,
                    onBanMultiple: U,
                    transitionState: I,
                    onClose: T,
                    canBulkBan: Y = !1,
                    modReportId: B,
                } = t,
                [D, K] = i.useState(null != B ? M : y),
                [w, E] = i.useState(""),
                [H, X] = i.useState(null),
                { isModReportClosed: L, isModReport: N } = (0, s.cf)([m.A], () => {
                    let t = m.A.getChannel(B);
                    return { isModReportClosed: t?.isArchivedThread(), isModReport: t?.isModeratorReportChannel() };
                }),
                [W, z] = i.useState(!1),
                [F, J] = i.useState(!1),
                O = (0, b.$9)(e, { location: S, targetUserId: a?.id, targets: R }),
                V = i.useCallback(() => {
                    let t = H ?? w;
                    if (null != U) {
                        if (!(null != R && R?.size > 0 && Y) || W) return;
                        if ("" === w.trim()) return void z(!0);
                        U(e, [...R], D, t);
                    } else {
                        if (null == a) return;
                        p.A.banUser(e, a?.id, D, t, B).then(() => {
                            F && null != B && A.A.resolveFlag(B);
                        });
                    }
                    (O(b.Nj.BAN), T());
                }, [H, w, U, O, T, R, Y, W, e, D, a, B, F]),
                P = i.useCallback((t) => {
                    K(t);
                }, []),
                Z = i.useCallback((t) => {
                    (E(t), z(!1), X(null));
                }, []),
                $ = i.useCallback(
                    (t) => {
                        (X(t), W && z(!1));
                    },
                    [W],
                ),
                _ = N && !L && null != B,
                q = [
                    { name: k.intl.string(k.t.tamLhT), value: k.intl.string(k.t.tamLhT) },
                    { name: k.intl.string(k.t.UmxjMg), value: k.intl.string(k.t.UmxjMg) },
                    { name: k.intl.string(k.t.EXY1d8), value: k.intl.string(k.t.EXY1d8) },
                    { name: k.intl.string(k.t.BcZTKu), value: "other" },
                ],
                Q = (function () {
                    if (null != U && null != R) return k.intl.formatToPlainString(k.t.HVJexf, { count: R?.size });
                    if (null == a) return "";
                    let t = f.Ay.getName(e, null, a);
                    return k.intl.formatToPlainString(null != B ? k.t.WDR8Xd : k.t.jeKpok, { username: `@${t}` });
                })(),
                G = null == B ? null : k.intl.string(k.t.pQjhIK);
            return (0, n.jsx)(u.a, {
                onClose: T,
                transitionState: I,
                title: Q,
                subtitle: G ?? void 0,
                actions:
                    ((l = []),
                    N || l.push({ variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: T }),
                    l.push({ variant: "critical-primary", text: k.intl.string(k.t["5MBJ5M"]), onClick: V }),
                    l),
                actionBarInput: _
                    ? (0, n.jsx)(o.S, { checked: F, onChange: (t) => J(t), label: k.intl.string(C.default["8yIKem"]) })
                    : void 0,
                children: (0, n.jsxs)(d.B, {
                    direction: "vertical",
                    gap: 24,
                    children: [
                        (0, n.jsxs)(d.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                W &&
                                    (0, n.jsx)(c.w, {
                                        type: "critical",
                                        message: k.intl.string(k.t.IrYX1y),
                                        role: "alert",
                                    }),
                                (0, n.jsx)(g.z, {
                                    required: !0,
                                    label: k.intl.string(null != B ? k.t["+KCLVp"] : k.t.w4Ivys),
                                    value: "" === w ? void 0 : w,
                                    options: q.map((t) => ({ ...t })),
                                    onChange: Z,
                                }),
                                (0, n.jsx)("div", {
                                    className: r()(x.Ar, { [x.R]: "other" !== w }),
                                    children: (0, n.jsx)(h.f, {
                                        maxLength: 512,
                                        onChange: $,
                                        value: H ?? "",
                                        rows: 5,
                                        autoFocus: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(v.l, {
                            label: k.intl.string(null != B ? k.t.ERSM8H : k.t["8l3W0y"]),
                            options: j(),
                            value: D,
                            onSelectionChange: P,
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    ],
                }),
            });
        },
    },
);
