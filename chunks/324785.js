r.d(e, { default: () => T });
var l = r(627968),
    n = r(64700),
    i = r(158954),
    a = r(311907),
    s = r(397927),
    o = r(686956),
    u = r(504049),
    c = r(734057),
    d = r(427262),
    h = r(226698),
    g = r(652215),
    p = r(641131),
    m = r(985018),
    C = r(544800);
function T(t) {
    let { guildId: e, user: r, location: T, modReportId: f, ...x } = t,
        [E, R] = n.useState(""),
        [b, k] = n.useState(!1),
        A = (0, u.$9)(e, { location: T, targetUserId: r.id }),
        { isModReportClosed: v, isModReport: j } = (0, a.cf)([c.A], () => {
            let t = c.A.getChannel(f);
            return { isModReportClosed: t?.isArchivedThread(), isModReport: t?.isModeratorReportChannel() };
        }),
        y = n.useCallback(() => {
            o.A.kickUser(e, r.id, E, f).then(() => {
                b && null != f && h.A.resolveFlag(f);
            }),
                A(u.Nj.KICK),
                null != f && x.onClose?.();
        }, [e, r.id, E, A, f, b, x]),
        M = n.useCallback((t) => {
            R(t);
        }, []);
    return null != f && j
        ? (0, l.jsx)(i.Modal, {
              ...x,
              title: m.intl.formatToPlainString(m.t["1Ie87p"], { user: r.username }),
              subtitle: m.intl.format(m.t["/yH0UT"], { user: `@${d.Ay.getName(r)}` }),
              actions: [{ text: m.intl.string(m.t["3glT6Z"]), onClick: y, size: "sm", variant: "critical-primary" }],
              actionBarInput: v
                  ? void 0
                  : (0, l.jsx)(s.Checkbox, {
                        checked: b,
                        onChange: (t) => {
                            k(t);
                        },
                        label: m.intl.string(p.default["8yIKem"]),
                    }),
              children: (0, l.jsx)(s.fs1, {
                  label: m.intl.string(null != f ? m.t.hmKy8E : m.t["+2QEPt"]),
                  maxLength: g.hlA,
                  onChange: M,
                  value: E,
                  rows: 2,
              }),
          })
        : (0, l.jsx)(i.ConfirmModal, {
              title: m.intl.formatToPlainString(m.t["1Ie87p"], { user: r.username }),
              subtitle: m.intl.format(m.t["/yH0UT"], { user: `@${d.Ay.getName(r)}` }),
              confirmText: m.intl.string(m.t["3glT6Z"]),
              cancelText: m.intl.string(m.t["ETE/oC"]),
              onConfirm: y,
              ...x,
              children: (0, l.jsx)("div", {
                  className: C.Y,
                  children: (0, l.jsx)(s.fs1, {
                      label: m.intl.string(m.t["+2QEPt"]),
                      maxLength: g.hlA,
                      onChange: M,
                      value: E,
                      rows: 2,
                  }),
              }),
          });
}
