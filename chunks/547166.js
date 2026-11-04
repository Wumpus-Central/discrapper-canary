var l = n(477900),
    i = n(582128),
    a = n(855986),
    r = n(189213),
    s = n(103557),
    o = n(150934),
    u = n(732159),
    c = n(778858),
    d = n(298702),
    g = n(266990),
    h = n(504049),
    m = n(734057),
    p = n(427262),
    C = n(226698);
n(652215);
var f = n(307805),
    x = n(792996),
    T = n(61578);
n.d(
    e,
    {},
    {
        default: function (t) {
            let { guildId: e, user: n, location: b, modReportId: k, ...v } = t,
                [j, y] = i.useState(""),
                [A, I] = i.useState(!1),
                S = (0, h.$9)(e, { location: b, targetUserId: n.id }),
                { isModReportClosed: E, isModReport: N } = (0, a.cf)([m.A], () => {
                    let t = m.A.getChannel(k);
                    return { isModReportClosed: t?.isArchivedThread(), isModReport: t?.isModeratorReportChannel() };
                }),
                P = i.useCallback(() => {
                    (c.A.kickUser(e, n.id, j, k).then(() => {
                        A && null != k && C.A.resolveFlag(k);
                    }),
                        S(h.Nj.KICK),
                        null != k && v.onClose?.());
                }, [e, n.id, j, S, k, A, v]),
                U = i.useCallback((t) => {
                    y(t);
                }, []),
                w = (0, d.iD)(e, n.bot ? (0, d.SJ)(n.id) : null),
                K = (0, l.jsx)(s.f, {
                    label: x.intl.string(x.t["+2QEPt"]),
                    maxLength: 512,
                    onChange: U,
                    value: j,
                    rows: 2,
                });
            return null != w && null == k
                ? (0, l.jsx)(g.BU, {
                      ...v,
                      app: w,
                      confirmText: x.intl.string(x.t["3glT6Z"]),
                      onPlainConfirm: P,
                      children: (0, l.jsx)("div", { className: T.Y, children: K }),
                  })
                : null != k && N
                  ? (0, l.jsx)(r.a, {
                        ...v,
                        title: x.intl.formatToPlainString(x.t["1Ie87p"], { user: n.username }),
                        subtitle: x.intl.format(x.t["/yH0UT"], { user: `@${p.Ay.getName(n)}` }),
                        actions: [
                            { text: x.intl.string(x.t["3glT6Z"]), onClick: P, size: "sm", variant: "critical-primary" },
                        ],
                        actionBarInput: E
                            ? void 0
                            : (0, l.jsx)(o.S, {
                                  checked: A,
                                  onChange: (t) => {
                                      I(t);
                                  },
                                  label: x.intl.string(f.default["8yIKem"]),
                              }),
                        children: (0, l.jsx)(s.f, {
                            label: x.intl.string(null != k ? x.t.hmKy8E : x.t["+2QEPt"]),
                            maxLength: 512,
                            onChange: U,
                            value: j,
                            rows: 2,
                        }),
                    })
                  : (0, l.jsx)(u.u, {
                        title: x.intl.formatToPlainString(x.t["1Ie87p"], { user: n.username }),
                        subtitle: x.intl.format(x.t["/yH0UT"], { user: `@${p.Ay.getName(n)}` }),
                        confirmText: x.intl.string(x.t["3glT6Z"]),
                        cancelText: x.intl.string(x.t["ETE/oC"]),
                        onConfirm: P,
                        ...v,
                        children: (0, l.jsx)("div", { className: T.Y, children: K }),
                    });
        },
    },
);
