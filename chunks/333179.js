e.d(l, { default: () => T }), e(321073);
var n = e(627968),
    i = e(64700),
    a = e(503698),
    r = e.n(a),
    s = e(189213),
    u = e(17928),
    o = e(150934),
    d = e(331322),
    c = e(683071),
    g = e(144228),
    h = e(260598),
    v = e(691885),
    p = e(686956),
    A = e(504049),
    b = e(734057),
    S = e(927813),
    m = e(562153),
    C = e(226698),
    f = e(652215),
    x = e(221314),
    k = e(985018),
    j = e(667562);
function M() {
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
let y = M()[1].value,
    R = M()[0].value;
function T(t) {
    let l,
        {
            guildId: e,
            user: a,
            location: S,
            userIds: T,
            onBanMultiple: U,
            transitionState: I,
            onClose: Y,
            canBulkBan: B = !1,
            modReportId: D,
        } = t,
        [K, _] = i.useState(null != D ? R : y),
        [w, E] = i.useState(""),
        [H, X] = i.useState(null),
        { isModReportClosed: F, isModReport: L } = (0, u.cf)([b.A], () => {
            let t = b.A.getChannel(D);
            return { isModReportClosed: t?.isArchivedThread(), isModReport: t?.isModeratorReportChannel() };
        }),
        [N, W] = i.useState(!1),
        [z, J] = i.useState(!1),
        O = (0, A.$9)(e, { location: S, targetUserId: a?.id, targets: T }),
        V = i.useCallback(() => {
            let t = H ?? w;
            if (null != U) {
                if (!(null != T && T?.size > 0 && B) || N) return;
                if ("" === w.trim()) return void W(!0);
                U(e, [...T], K, t);
            } else {
                if (null == a) return;
                p.A.banUser(e, a?.id, K, t, D).then(() => {
                    z && null != D && C.A.resolveFlag(D);
                });
            }
            O(A.Nj.BAN), Y();
        }, [H, w, U, O, Y, T, B, N, e, K, a, D, z]),
        P = i.useCallback((t) => {
            _(t);
        }, []),
        Z = i.useCallback((t) => {
            E(t), W(!1), X(null);
        }, []),
        $ = i.useCallback(
            (t) => {
                X(t), N && W(!1);
            },
            [N],
        ),
        q = L && !F && null != D,
        Q = [
            { name: k.intl.string(k.t.tamLhT), value: k.intl.string(k.t.tamLhT) },
            { name: k.intl.string(k.t.UmxjMg), value: k.intl.string(k.t.UmxjMg) },
            { name: k.intl.string(k.t.EXY1d8), value: k.intl.string(k.t.EXY1d8) },
            { name: k.intl.string(k.t.BcZTKu), value: "other" },
        ],
        G = (() => {
            if (null != U && null != T) return k.intl.formatToPlainString(k.t.HVJexf, { count: T?.size });
            if (null == a) return "";
            let t = m.Ay.getName(e, null, a);
            return k.intl.formatToPlainString(null != D ? k.t.WDR8Xd : k.t.jeKpok, { username: `@${t}` });
        })(),
        tt = null == D ? null : k.intl.string(k.t.pQjhIK);
    return (0, n.jsx)(s.Modal, {
        onClose: Y,
        transitionState: I,
        title: G,
        subtitle: tt ?? void 0,
        actions:
            ((l = []),
            L || l.push({ variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: Y }),
            l.push({ variant: "critical-primary", text: k.intl.string(k.t["5MBJ5M"]), onClick: V }),
            l),
        actionBarInput: q
            ? (0, n.jsx)(o.S, { checked: z, onChange: (t) => J(t), label: k.intl.string(x.default["8yIKem"]) })
            : void 0,
        children: (0, n.jsxs)(d.B, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, n.jsxs)(d.B, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        N && (0, n.jsx)(c.w, { type: "critical", children: k.intl.string(k.t.IrYX1y) }),
                        (0, n.jsx)(g.z, {
                            required: !0,
                            label: k.intl.string(null != D ? k.t["+KCLVp"] : k.t.w4Ivys),
                            value: w,
                            options: Q.map((t) => ({ ...t })),
                            onChange: Z,
                        }),
                        (0, n.jsx)("div", {
                            className: r()(j.Ar, { [j.R]: "other" !== w }),
                            children: (0, n.jsx)(h.f, {
                                maxLength: f.hlA,
                                onChange: $,
                                value: H ?? "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(v.l, {
                    label: k.intl.string(null != D ? k.t.ERSM8H : k.t["8l3W0y"]),
                    options: M(),
                    value: K,
                    onSelectionChange: P,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
