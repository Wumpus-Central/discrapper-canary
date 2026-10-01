n.d(e, { default: () => k });
var l = n(477900),
    i = n(582128),
    a = n(17928),
    r = n(189213),
    s = n(150934),
    o = n(103557),
    u = n(732159),
    c = n(66834),
    d = n(504049),
    h = n(734057),
    g = n(427262),
    m = n(226698),
    C = n(652215),
    p = n(39470),
    f = n(375708),
    x = n(61578);
function k(t) {
    let { guildId: e, user: n, location: k, modReportId: T, ...b } = t,
        [A, v] = i.useState(""),
        [j, y] = i.useState(!1),
        I = (0, d.$9)(e, { location: k, targetUserId: n.id }),
        { isModReportClosed: E, isModReport: S } = (0, a.cf)([h.A], () => {
            let t = h.A.getChannel(T);
            return { isModReportClosed: t?.isArchivedThread(), isModReport: t?.isModeratorReportChannel() };
        }),
        w = i.useCallback(() => {
            (c.A.kickUser(e, n.id, A, T).then(() => {
                j && null != T && m.A.resolveFlag(T);
            }),
                I(d.Nj.KICK),
                null != T && b.onClose?.());
        }, [e, n.id, A, I, T, j, b]),
        K = i.useCallback((t) => {
            v(t);
        }, []);
    return null != T && S
        ? (0, l.jsx)(r.a, {
              ...b,
              title: f.intl.formatToPlainString(f.t["1Ie87p"], { user: n.username }),
              subtitle: f.intl.format(f.t["/yH0UT"], { user: `@${g.Ay.getName(n)}` }),
              actions: [{ text: f.intl.string(f.t["3glT6Z"]), onClick: w, size: "sm", variant: "critical-primary" }],
              actionBarInput: E
                  ? void 0
                  : (0, l.jsx)(s.S, {
                        checked: j,
                        onChange: (t) => {
                            y(t);
                        },
                        label: f.intl.string(p.default["8yIKem"]),
                    }),
              children: (0, l.jsx)(o.f, {
                  label: f.intl.string(null != T ? f.t.hmKy8E : f.t["+2QEPt"]),
                  maxLength: C.hlA,
                  onChange: K,
                  value: A,
                  rows: 2,
              }),
          })
        : (0, l.jsx)(u.u, {
              title: f.intl.formatToPlainString(f.t["1Ie87p"], { user: n.username }),
              subtitle: f.intl.format(f.t["/yH0UT"], { user: `@${g.Ay.getName(n)}` }),
              confirmText: f.intl.string(f.t["3glT6Z"]),
              cancelText: f.intl.string(f.t["ETE/oC"]),
              onConfirm: w,
              ...b,
              children: (0, l.jsx)("div", {
                  className: x.Y,
                  children: (0, l.jsx)(o.f, {
                      label: f.intl.string(f.t["+2QEPt"]),
                      maxLength: C.hlA,
                      onChange: K,
                      value: A,
                      rows: 2,
                  }),
              }),
          });
}
