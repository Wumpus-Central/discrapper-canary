e.d(l, { default: () => U }), e(321073);
var n = e(627968),
    i = e(64700),
    a = e(503698),
    r = e.n(a),
    s = e(189213),
    u = e(17928),
    o = e(150934),
    d = e(331322),
    c = e(683071),
    g = e(773812),
    h = e(260598),
    v = e(691885),
    p = e(66834),
    b = e(504049),
    A = e(734057),
    S = e(927813),
    m = e(562153),
    C = e(226698),
    f = e(652215),
    k = e(221314),
    x = e(375708),
    j = e(667562);
function M() {
    return [
        { id: "none", value: 0, label: x.intl.string(x.t["4obaMS"]) },
        { id: "1hour", value: +S.A.Seconds.HOUR, label: x.intl.string(x.t.RKpitY) },
        { id: "6hours", value: 6 * S.A.Seconds.HOUR, label: x.intl.string(x.t["8WfJZ8"]) },
        { id: "12hours", value: 12 * S.A.Seconds.HOUR, label: x.intl.string(x.t.p1up7u) },
        { id: "1day", value: +S.A.Seconds.DAY, label: x.intl.string(x.t.XuVkkD) },
        { id: "3days", value: 3 * S.A.Seconds.DAY, label: x.intl.string(x.t["gMcDS+"]) },
        { id: "7days", value: 7 * S.A.Seconds.DAY, label: x.intl.string(x.t.FA7IUk) },
    ];
}
let y = M()[1].value,
    R = M()[0].value;
function U(t) {
    let l,
        {
            guildId: e,
            user: a,
            location: S,
            userIds: U,
            onBanMultiple: I,
            transitionState: T,
            onClose: Y,
            canBulkBan: B = !1,
            modReportId: D,
        } = t,
        [K, w] = i.useState(null != D ? R : y),
        [E, H] = i.useState(""),
        [X, L] = i.useState(null),
        { isModReportClosed: N, isModReport: W } = (0, u.cf)([A.A], () => {
            let t = A.A.getChannel(D);
            return { isModReportClosed: t?.isArchivedThread(), isModReport: t?.isModeratorReportChannel() };
        }),
        [z, F] = i.useState(!1),
        [J, O] = i.useState(!1),
        V = (0, b.$9)(e, { location: S, targetUserId: a?.id, targets: U }),
        P = i.useCallback(() => {
            let t = X ?? E;
            if (null != I) {
                if (!(null != U && U?.size > 0 && B) || z) return;
                if ("" === E.trim()) return void F(!0);
                I(e, [...U], K, t);
            } else {
                if (null == a) return;
                p.A.banUser(e, a?.id, K, t, D).then(() => {
                    J && null != D && C.A.resolveFlag(D);
                });
            }
            V(b.Nj.BAN), Y();
        }, [X, E, I, V, Y, U, B, z, e, K, a, D, J]),
        Z = i.useCallback((t) => {
            w(t);
        }, []),
        $ = i.useCallback((t) => {
            H(t), F(!1), L(null);
        }, []),
        _ = i.useCallback(
            (t) => {
                L(t), z && F(!1);
            },
            [z],
        ),
        q = W && !N && null != D,
        Q = [
            { name: x.intl.string(x.t.tamLhT), value: x.intl.string(x.t.tamLhT) },
            { name: x.intl.string(x.t.UmxjMg), value: x.intl.string(x.t.UmxjMg) },
            { name: x.intl.string(x.t.EXY1d8), value: x.intl.string(x.t.EXY1d8) },
            { name: x.intl.string(x.t.BcZTKu), value: "other" },
        ],
        G = (() => {
            if (null != I && null != U) return x.intl.formatToPlainString(x.t.HVJexf, { count: U?.size });
            if (null == a) return "";
            let t = m.Ay.getName(e, null, a);
            return x.intl.formatToPlainString(null != D ? x.t.WDR8Xd : x.t.jeKpok, { username: `@${t}` });
        })(),
        tt = null == D ? null : x.intl.string(x.t.pQjhIK);
    return (0, n.jsx)(s.Modal, {
        onClose: Y,
        transitionState: T,
        title: G,
        subtitle: tt ?? void 0,
        actions:
            ((l = []),
            W || l.push({ variant: "secondary", text: x.intl.string(x.t["ETE/oC"]), onClick: Y }),
            l.push({ variant: "critical-primary", text: x.intl.string(x.t["5MBJ5M"]), onClick: P }),
            l),
        actionBarInput: q
            ? (0, n.jsx)(o.S, { checked: J, onChange: (t) => O(t), label: x.intl.string(k.default["8yIKem"]) })
            : void 0,
        children: (0, n.jsxs)(d.B, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, n.jsxs)(d.B, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        z && (0, n.jsx)(c.w, { type: "critical", children: x.intl.string(x.t.IrYX1y) }),
                        (0, n.jsx)(g.z, {
                            required: !0,
                            label: x.intl.string(null != D ? x.t["+KCLVp"] : x.t.w4Ivys),
                            value: E,
                            options: Q.map((t) => ({ ...t })),
                            onChange: $,
                        }),
                        (0, n.jsx)("div", {
                            className: r()(j.Ar, { [j.R]: "other" !== E }),
                            children: (0, n.jsx)(h.f, {
                                maxLength: f.hlA,
                                onChange: _,
                                value: X ?? "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(v.l, {
                    label: x.intl.string(null != D ? x.t.ERSM8H : x.t["8l3W0y"]),
                    options: M(),
                    value: K,
                    onSelectionChange: Z,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
