l.d(e, { default: () => k });
var n = l(477900),
    i = l(582128),
    a = l(17928),
    r = l(189213),
    s = l(103557),
    o = l(150934),
    u = l(732159),
    c = l(66834),
    d = l(298702),
    h = l(266990),
    g = l(504049),
    m = l(734057),
    p = l(427262),
    C = l(226698),
    f = l(652215),
    x = l(812676),
    T = l(105292),
    b = l(61578);
function k(t) {
    let { guildId: e, user: l, location: k, modReportId: j, ...v } = t,
        [A, y] = i.useState(""),
        [I, S] = i.useState(!1),
        E = (0, g.$9)(e, { location: k, targetUserId: l.id }),
        { isModReportClosed: N, isModReport: P } = (0, a.cf)([m.A], () => {
            let t = m.A.getChannel(j);
            return { isModReportClosed: t?.isArchivedThread(), isModReport: t?.isModeratorReportChannel() };
        }),
        U = i.useCallback(() => {
            (c.A.kickUser(e, l.id, A, j).then(() => {
                I && null != j && C.A.resolveFlag(j);
            }),
                E(g.Nj.KICK),
                null != j && v.onClose?.());
        }, [e, l.id, A, E, j, I, v]),
        w = i.useCallback((t) => {
            y(t);
        }, []),
        K = (0, d.iD)(e, l.bot ? (0, d.SJ)(l.id) : null),
        M = (0, n.jsx)(s.f, { label: T.intl.string(T.t["+2QEPt"]), maxLength: f.hlA, onChange: w, value: A, rows: 2 });
    return null != K && null == j
        ? (0, n.jsx)(h.BU, {
              ...v,
              app: K,
              confirmText: T.intl.string(T.t["3glT6Z"]),
              onPlainConfirm: U,
              children: (0, n.jsx)("div", { className: b.Y, children: M }),
          })
        : null != j && P
          ? (0, n.jsx)(r.a, {
                ...v,
                title: T.intl.formatToPlainString(T.t["1Ie87p"], { user: l.username }),
                subtitle: T.intl.format(T.t["/yH0UT"], { user: `@${p.Ay.getName(l)}` }),
                actions: [{ text: T.intl.string(T.t["3glT6Z"]), onClick: U, size: "sm", variant: "critical-primary" }],
                actionBarInput: N
                    ? void 0
                    : (0, n.jsx)(o.S, {
                          checked: I,
                          onChange: (t) => {
                              S(t);
                          },
                          label: T.intl.string(x.default["8yIKem"]),
                      }),
                children: (0, n.jsx)(s.f, {
                    label: T.intl.string(null != j ? T.t.hmKy8E : T.t["+2QEPt"]),
                    maxLength: f.hlA,
                    onChange: w,
                    value: A,
                    rows: 2,
                }),
            })
          : (0, n.jsx)(u.u, {
                title: T.intl.formatToPlainString(T.t["1Ie87p"], { user: l.username }),
                subtitle: T.intl.format(T.t["/yH0UT"], { user: `@${p.Ay.getName(l)}` }),
                confirmText: T.intl.string(T.t["3glT6Z"]),
                cancelText: T.intl.string(T.t["ETE/oC"]),
                onConfirm: U,
                ...v,
                children: (0, n.jsx)("div", { className: b.Y, children: M }),
            });
}
