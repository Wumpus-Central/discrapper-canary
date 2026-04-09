l.d(e, { default: () => f }), l(321073);
var n = l(627968),
    i = l(64700),
    r = l(503698),
    a = l.n(r),
    s = l(158954),
    u = l(311907),
    o = l(397927),
    d = l(686956),
    c = l(504049),
    g = l(734057),
    h = l(927813),
    p = l(562153),
    v = l(226698),
    A = l(652215),
    b = l(641131),
    R = l(985018),
    C = l(465818);
function x() {
    return [
        { id: "none", value: 0, label: R.intl.string(R.t["4obaMS"]) },
        { id: "1hour", value: +h.A.Seconds.HOUR, label: R.intl.string(R.t.RKpitY) },
        { id: "6hours", value: 6 * h.A.Seconds.HOUR, label: R.intl.string(R.t["8WfJZ8"]) },
        { id: "12hours", value: 12 * h.A.Seconds.HOUR, label: R.intl.string(R.t.p1up7u) },
        { id: "1day", value: +h.A.Seconds.DAY, label: R.intl.string(R.t.XuVkkD) },
        { id: "3days", value: 3 * h.A.Seconds.DAY, label: R.intl.string(R.t["gMcDS+"]) },
        { id: "7days", value: 7 * h.A.Seconds.DAY, label: R.intl.string(R.t.FA7IUk) },
    ];
}
let S = x()[1].value,
    m = x()[0].value;
function f(t) {
    let e,
        {
            guildId: l,
            user: r,
            location: h,
            userIds: f,
            onBanMultiple: j,
            transitionState: k,
            onClose: M,
            canBulkBan: E = !1,
            modReportId: y,
        } = t,
        [T, O] = i.useState(null != y ? m : S),
        [_, B] = i.useState(""),
        [D, U] = i.useState(null),
        { isModReportClosed: I, isModReport: Y } = (0, u.cf)([g.A], () => {
            let t = g.A.getChannel(y);
            return { isModReportClosed: t?.isArchivedThread(), isModReport: t?.isModeratorReportChannel() };
        }),
        [K, P] = i.useState(!1),
        [W, w] = i.useState(!1),
        F = (0, c.$9)(l, { location: h, targetUserId: r?.id, targets: f }),
        H = i.useCallback(() => {
            let t = D ?? _;
            if (null != j) {
                if (!(null != f && f?.size > 0 && E) || K) return;
                if ("" === _.trim()) return void P(!0);
                j(l, [...f], T, t);
            } else {
                if (null == r) return;
                d.A.banUser(l, r?.id, T, t, y).then(() => {
                    W && null != y && v.A.resolveFlag(y);
                });
            }
            F(c.Nj.BAN), M();
        }, [D, _, j, F, M, f, E, K, l, T, r, y, W]),
        J = i.useCallback((t) => {
            O(t);
        }, []),
        L = i.useCallback((t) => {
            B(t), P(!1), U(null);
        }, []),
        N = i.useCallback(
            (t) => {
                U(t), K && P(!1);
            },
            [K],
        ),
        X = Y && !I && null != y,
        z = [
            { name: R.intl.string(R.t.tamLhT), value: R.intl.string(R.t.tamLhT) },
            { name: R.intl.string(R.t.UmxjMg), value: R.intl.string(R.t.UmxjMg) },
            { name: R.intl.string(R.t.EXY1d8), value: R.intl.string(R.t.EXY1d8) },
            { name: R.intl.string(R.t.BcZTKu), value: "other" },
        ],
        V = (() => {
            if (null != j && null != f) return R.intl.formatToPlainString(R.t.HVJexf, { count: f?.size });
            if (null == r) return "";
            let t = p.Ay.getName(l, null, r);
            return R.intl.formatToPlainString(null != y ? R.t.WDR8Xd : R.t.jeKpok, { username: `@${t}` });
        })(),
        Z = null == y ? null : R.intl.string(R.t.pQjhIK);
    return (0, n.jsx)(s.Modal, {
        onClose: M,
        transitionState: k,
        title: V,
        subtitle: Z ?? void 0,
        actions:
            ((e = []),
            Y || e.push({ variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: M }),
            e.push({ variant: "critical-primary", text: R.intl.string(R.t["5MBJ5M"]), onClick: H }),
            e),
        actionBarInput: X
            ? (0, n.jsx)(o.Checkbox, { checked: W, onChange: (t) => w(t), label: R.intl.string(b.default["8yIKem"]) })
            : void 0,
        children: (0, n.jsxs)(o.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, n.jsxs)(o.BJc, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        K && (0, n.jsx)(o.wx6, { type: "critical", children: R.intl.string(R.t.IrYX1y) }),
                        (0, n.jsx)(o.z6M, {
                            required: !0,
                            label: R.intl.string(null != y ? R.t["+KCLVp"] : R.t.w4Ivys),
                            value: _,
                            options: z.map((t) => ({ ...t })),
                            onChange: L,
                        }),
                        (0, n.jsx)("div", {
                            className: a()(C.Ar, { [C.R]: "other" !== _ }),
                            children: (0, n.jsx)(o.fs1, {
                                maxLength: A.hlA,
                                onChange: N,
                                value: D ?? "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(o.l6P, {
                    label: R.intl.string(null != y ? R.t.ERSM8H : R.t["8l3W0y"]),
                    options: x(),
                    value: T,
                    onSelectionChange: J,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
