n.d(l, { default: () => U }), n(321073);
var e = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(189213),
    u = n(17928),
    o = n(150934),
    d = n(331322),
    c = n(683071),
    g = n(144228),
    h = n(260598),
    v = n(691885),
    p = n(66834),
    b = n(504049),
    A = n(734057),
    S = n(927813),
    f = n(562153),
    m = n(226698),
    C = n(652215),
    k = n(221314),
    x = n(375708),
    j = n(667562);
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
            guildId: n,
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
        V = (0, b.$9)(n, { location: S, targetUserId: a?.id, targets: U }),
        P = i.useCallback(() => {
            let t = X ?? E;
            if (null != I) {
                if (!(null != U && U?.size > 0 && B) || z) return;
                if ("" === E.trim()) return void F(!0);
                I(n, [...U], K, t);
            } else {
                if (null == a) return;
                p.A.banUser(n, a?.id, K, t, D).then(() => {
                    J && null != D && m.A.resolveFlag(D);
                });
            }
            V(b.Nj.BAN), Y();
        }, [X, E, I, V, Y, U, B, z, n, K, a, D, J]),
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
        G = (function () {
            if (null != I && null != U) return x.intl.formatToPlainString(x.t.HVJexf, { count: U?.size });
            if (null == a) return "";
            let t = f.Ay.getName(n, null, a);
            return x.intl.formatToPlainString(null != D ? x.t.WDR8Xd : x.t.jeKpok, { username: `@${t}` });
        })(),
        tt = null == D ? null : x.intl.string(x.t.pQjhIK);
    return (0, e.jsx)(s.Modal, {
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
            ? (0, e.jsx)(o.S, { checked: J, onChange: (t) => O(t), label: x.intl.string(k.default["8yIKem"]) })
            : void 0,
        children: (0, e.jsxs)(d.B, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, e.jsxs)(d.B, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        z && (0, e.jsx)(c.w, { type: "critical", children: x.intl.string(x.t.IrYX1y) }),
                        (0, e.jsx)(g.z, {
                            required: !0,
                            label: x.intl.string(null != D ? x.t["+KCLVp"] : x.t.w4Ivys),
                            value: "" === E ? void 0 : E,
                            options: Q.map((t) => ({ ...t })),
                            onChange: $,
                        }),
                        (0, e.jsx)("div", {
                            className: r()(j.Ar, { [j.R]: "other" !== E }),
                            children: (0, e.jsx)(h.f, {
                                maxLength: C.hlA,
                                onChange: _,
                                value: X ?? "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, e.jsx)(v.l, {
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
