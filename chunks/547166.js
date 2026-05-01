l.d(e, { default: () => k });
var n = l(627968),
    i = l(64700),
    a = l(189213),
    r = l(732159),
    s = l(17928),
    o = l(150934),
    u = l(260598),
    c = l(66834),
    d = l(504049),
    h = l(734057),
    g = l(427262),
    m = l(226698),
    C = l(652215),
    p = l(221314),
    f = l(375708),
    x = l(614487);
function k(t) {
    let { guildId: e, user: l, location: k, modReportId: T, ...b } = t,
        [A, v] = i.useState(""),
        [j, y] = i.useState(!1),
        I = (0, d.$9)(e, { location: k, targetUserId: l.id }),
        { isModReportClosed: E, isModReport: M } = (0, s.cf)([h.A], () => {
            let t = h.A.getChannel(T);
            return { isModReportClosed: t?.isArchivedThread(), isModReport: t?.isModeratorReportChannel() };
        }),
        S = i.useCallback(() => {
            c.A.kickUser(e, l.id, A, T).then(() => {
                j && null != T && m.A.resolveFlag(T);
            }),
                I(d.Nj.KICK),
                null != T && b.onClose?.();
        }, [e, l.id, A, I, T, j, b]),
        w = i.useCallback((t) => {
            v(t);
        }, []);
    return null != T && M
        ? (0, n.jsx)(a.Modal, {
              ...b,
              title: f.intl.formatToPlainString(f.t["1Ie87p"], { user: l.username }),
              subtitle: f.intl.format(f.t["/yH0UT"], { user: `@${g.Ay.getName(l)}` }),
              actions: [{ text: f.intl.string(f.t["3glT6Z"]), onClick: S, size: "sm", variant: "critical-primary" }],
              actionBarInput: E
                  ? void 0
                  : (0, n.jsx)(o.S, {
                        checked: j,
                        onChange: (t) => {
                            y(t);
                        },
                        label: f.intl.string(p.default["8yIKem"]),
                    }),
              children: (0, n.jsx)(u.f, {
                  label: f.intl.string(null != T ? f.t.hmKy8E : f.t["+2QEPt"]),
                  maxLength: C.hlA,
                  onChange: w,
                  value: A,
                  rows: 2,
              }),
          })
        : (0, n.jsx)(r.ConfirmModal, {
              title: f.intl.formatToPlainString(f.t["1Ie87p"], { user: l.username }),
              subtitle: f.intl.format(f.t["/yH0UT"], { user: `@${g.Ay.getName(l)}` }),
              confirmText: f.intl.string(f.t["3glT6Z"]),
              cancelText: f.intl.string(f.t["ETE/oC"]),
              onConfirm: S,
              ...b,
              children: (0, n.jsx)("div", {
                  className: x.Y,
                  children: (0, n.jsx)(u.f, {
                      label: f.intl.string(f.t["+2QEPt"]),
                      maxLength: C.hlA,
                      onChange: w,
                      value: A,
                      rows: 2,
                  }),
              }),
          });
}
