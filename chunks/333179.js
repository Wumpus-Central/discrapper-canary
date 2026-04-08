l.d(e, { default: () => k }), l(321073);
var n = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(158954),
    u = l(311907),
    o = l(397927),
    d = l(686956),
    c = l(504049),
    g = l(734057),
    h = l(927813),
    v = l(562153),
    p = l(226698),
    b = l(652215),
    A = l(733045),
    x = l(985018),
    C = l(4885);
function m() {
    return [
        { id: "none", value: 0, label: x.intl.string(x.t["4obaMS"]) },
        { id: "1hour", value: +h.A.Seconds.HOUR, label: x.intl.string(x.t.RKpitY) },
        { id: "6hours", value: 6 * h.A.Seconds.HOUR, label: x.intl.string(x.t["8WfJZ8"]) },
        { id: "12hours", value: 12 * h.A.Seconds.HOUR, label: x.intl.string(x.t.p1up7u) },
        { id: "1day", value: +h.A.Seconds.DAY, label: x.intl.string(x.t.XuVkkD) },
        { id: "3days", value: 3 * h.A.Seconds.DAY, label: x.intl.string(x.t["gMcDS+"]) },
        { id: "7days", value: 7 * h.A.Seconds.DAY, label: x.intl.string(x.t.FA7IUk) },
    ];
}
let S = m()[1].value,
    f = m()[0].value;
function k(t) {
    let e,
        {
            guildId: l,
            user: a,
            location: h,
            userIds: k,
            onBanMultiple: j,
            transitionState: M,
            onClose: y,
            canBulkBan: R = !1,
            modReportId: T,
        } = t,
        [U, I] = i.useState(null != T ? f : S),
        [Y, B] = i.useState(""),
        [D, K] = i.useState(null),
        { isModReportClosed: _, isModReport: w } = (0, u.cf)([g.A], () => {
            let t = g.A.getChannel(T);
            return { isModReportClosed: t?.isArchivedThread(), isModReport: t?.isModeratorReportChannel() };
        }),
        [E, H] = i.useState(!1),
        [J, X] = i.useState(!1),
        F = (0, c.$9)(l, { location: h, targetUserId: a?.id, targets: k }),
        L = i.useCallback(() => {
            let t = D ?? Y;
            if (null != j) {
                if (!(null != k && k?.size > 0 && R) || E) return;
                if ("" === Y.trim()) return void H(!0);
                j(l, [...k], U, t);
            } else {
                if (null == a) return;
                d.A.banUser(l, a?.id, U, t, T).then(() => {
                    J && null != T && p.A.resolveFlag(T);
                });
            }
            F(c.Nj.BAN), y();
        }, [D, Y, j, F, y, k, R, E, l, U, a, T, J]),
        N = i.useCallback((t) => {
            I(t);
        }, []),
        W = i.useCallback((t) => {
            B(t), H(!1), K(null);
        }, []),
        z = i.useCallback(
            (t) => {
                K(t), E && H(!1);
            },
            [E],
        ),
        O = w && !_ && null != T,
        P = [
            { name: x.intl.string(x.t.tamLhT), value: x.intl.string(x.t.tamLhT) },
            { name: x.intl.string(x.t.UmxjMg), value: x.intl.string(x.t.UmxjMg) },
            { name: x.intl.string(x.t.EXY1d8), value: x.intl.string(x.t.EXY1d8) },
            { name: x.intl.string(x.t.BcZTKu), value: "other" },
        ],
        V = (() => {
            if (null != j && null != k) return x.intl.formatToPlainString(x.t.HVJexf, { count: k?.size });
            if (null == a) return "";
            let t = v.Ay.getName(l, null, a);
            return x.intl.formatToPlainString(null != T ? x.t.WDR8Xd : x.t.jeKpok, { username: `@${t}` });
        })(),
        Z = null == T ? null : x.intl.string(x.t.pQjhIK);
    return (0, n.jsx)(s.Modal, {
        onClose: y,
        transitionState: M,
        title: V,
        subtitle: Z ?? void 0,
        actions:
            ((e = []),
            w || e.push({ variant: "secondary", text: x.intl.string(x.t["ETE/oC"]), onClick: y }),
            e.push({ variant: "critical-primary", text: x.intl.string(x.t["5MBJ5M"]), onClick: L }),
            e),
        actionBarInput: O
            ? (0, n.jsx)(o.Checkbox, { checked: J, onChange: (t) => X(t), label: x.intl.string(A.default["8yIKem"]) })
            : void 0,
        children: (0, n.jsxs)(o.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, n.jsxs)(o.BJc, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        E && (0, n.jsx)(o.wx6, { type: "critical", children: x.intl.string(x.t.IrYX1y) }),
                        (0, n.jsx)(o.z6M, {
                            required: !0,
                            label: x.intl.string(null != T ? x.t["+KCLVp"] : x.t.w4Ivys),
                            value: Y,
                            options: P.map((t) => ({ ...t })),
                            onChange: W,
                        }),
                        (0, n.jsx)("div", {
                            className: r()(C.Ar, { [C.R]: "other" !== Y }),
                            children: (0, n.jsx)(o.fs1, {
                                maxLength: b.hlA,
                                onChange: z,
                                value: D ?? "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(o.l6P, {
                    label: x.intl.string(null != T ? x.t.ERSM8H : x.t["8l3W0y"]),
                    options: m(),
                    value: U,
                    onSelectionChange: N,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
