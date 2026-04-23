l.d(t, { default: () => E }), l(321073);
var r = l(627968),
    n = l(64700),
    a = l(503698),
    i = l.n(a),
    o = l(189213),
    s = l(17928),
    u = l(150934),
    d = l(331322),
    c = l(683071),
    g = l(144228),
    h = l(260598),
    p = l(691885),
    b = l(686956),
    v = l(504049),
    x = l(734057),
    m = l(927813),
    f = l(562153),
    y = l(226698),
    A = l(652215),
    j = l(221314),
    C = l(985018),
    S = l(667562);
function w() {
    return [
        { id: "none", value: 0, label: C.intl.string(C.t["4obaMS"]) },
        { id: "1hour", value: +m.A.Seconds.HOUR, label: C.intl.string(C.t.RKpitY) },
        { id: "6hours", value: 6 * m.A.Seconds.HOUR, label: C.intl.string(C.t["8WfJZ8"]) },
        { id: "12hours", value: 12 * m.A.Seconds.HOUR, label: C.intl.string(C.t.p1up7u) },
        { id: "1day", value: +m.A.Seconds.DAY, label: C.intl.string(C.t.XuVkkD) },
        { id: "3days", value: 3 * m.A.Seconds.DAY, label: C.intl.string(C.t["gMcDS+"]) },
        { id: "7days", value: 7 * m.A.Seconds.DAY, label: C.intl.string(C.t.FA7IUk) },
    ];
}
let M = w()[1].value,
    R = w()[0].value;
function E(e) {
    let t,
        {
            guildId: l,
            user: a,
            location: m,
            userIds: E,
            onBanMultiple: k,
            transitionState: _,
            onClose: T,
            canBulkBan: P = !1,
            modReportId: z,
        } = e,
        [F, I] = n.useState(null != z ? R : M),
        [O, V] = n.useState(""),
        [D, B] = n.useState(null),
        { isModReportClosed: L, isModReport: H } = (0, s.cf)([x.A], () => {
            let e = x.A.getChannel(z);
            return { isModReportClosed: e?.isArchivedThread(), isModReport: e?.isModeratorReportChannel() };
        }),
        [N, U] = n.useState(!1),
        [W, Y] = n.useState(!1),
        $ = (0, v.$9)(l, { location: m, targetUserId: a?.id, targets: E }),
        K = n.useCallback(() => {
            let e = D ?? O;
            if (null != k) {
                if (!(null != E && E?.size > 0 && P) || N) return;
                if ("" === O.trim()) return void U(!0);
                k(l, [...E], F, e);
            } else {
                if (null == a) return;
                b.A.banUser(l, a?.id, F, e, z).then(() => {
                    W && null != z && y.A.resolveFlag(z);
                });
            }
            $(v.Nj.BAN), T();
        }, [D, O, k, $, T, E, P, N, l, F, a, z, W]),
        X = n.useCallback((e) => {
            I(e);
        }, []),
        J = n.useCallback((e) => {
            V(e), U(!1), B(null);
        }, []),
        q = n.useCallback(
            (e) => {
                B(e), N && U(!1);
            },
            [N],
        ),
        Z = H && !L && null != z,
        G = [
            { name: C.intl.string(C.t.tamLhT), value: C.intl.string(C.t.tamLhT) },
            { name: C.intl.string(C.t.UmxjMg), value: C.intl.string(C.t.UmxjMg) },
            { name: C.intl.string(C.t.EXY1d8), value: C.intl.string(C.t.EXY1d8) },
            { name: C.intl.string(C.t.BcZTKu), value: "other" },
        ],
        Q = (() => {
            if (null != k && null != E) return C.intl.formatToPlainString(C.t.HVJexf, { count: E?.size });
            if (null == a) return "";
            let e = f.Ay.getName(l, null, a);
            return C.intl.formatToPlainString(null != z ? C.t.WDR8Xd : C.t.jeKpok, { username: `@${e}` });
        })(),
        ee = null == z ? null : C.intl.string(C.t.pQjhIK);
    return (0, r.jsx)(o.Modal, {
        onClose: T,
        transitionState: _,
        title: Q,
        subtitle: ee ?? void 0,
        actions:
            ((t = []),
            H || t.push({ variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: T }),
            t.push({ variant: "critical-primary", text: C.intl.string(C.t["5MBJ5M"]), onClick: K }),
            t),
        actionBarInput: Z
            ? (0, r.jsx)(u.S, { checked: W, onChange: (e) => Y(e), label: C.intl.string(j.default["8yIKem"]) })
            : void 0,
        children: (0, r.jsxs)(d.B, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsxs)(d.B, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        N && (0, r.jsx)(c.w, { type: "critical", children: C.intl.string(C.t.IrYX1y) }),
                        (0, r.jsx)(g.z, {
                            required: !0,
                            label: C.intl.string(null != z ? C.t["+KCLVp"] : C.t.w4Ivys),
                            value: O,
                            options: G.map((e) => ({ ...e })),
                            onChange: J,
                        }),
                        (0, r.jsx)("div", {
                            className: i()(S.Ar, { [S.R]: "other" !== O }),
                            children: (0, r.jsx)(h.f, {
                                maxLength: A.hlA,
                                onChange: q,
                                value: D ?? "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(p.l, {
                    label: C.intl.string(null != z ? C.t.ERSM8H : C.t["8l3W0y"]),
                    options: w(),
                    value: F,
                    onSelectionChange: X,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
