r.d(t, { default: () => y });
var l = r(627968),
    a = r(64700),
    n = r(189213),
    o = r(732159),
    i = r(311907),
    s = r(150934),
    d = r(260598),
    u = r(686956),
    c = r(504049),
    g = r(734057),
    h = r(427262),
    p = r(226698),
    b = r(652215),
    m = r(221314),
    x = r(985018),
    f = r(614487);
function y(e) {
    let { guildId: t, user: r, location: y, modReportId: v, ...C } = e,
        [w, j] = a.useState(""),
        [A, E] = a.useState(!1),
        T = (0, c.$9)(t, { location: y, targetUserId: r.id }),
        { isModReportClosed: M, isModReport: P } = (0, i.cf)([g.A], () => {
            let e = g.A.getChannel(v);
            return { isModReportClosed: e?.isArchivedThread(), isModReport: e?.isModeratorReportChannel() };
        }),
        R = a.useCallback(() => {
            u.A.kickUser(t, r.id, w, v).then(() => {
                A && null != v && p.A.resolveFlag(v);
            }),
                T(c.Nj.KICK),
                null != v && C.onClose?.();
        }, [t, r.id, w, T, v, A, C]),
        _ = a.useCallback((e) => {
            j(e);
        }, []);
    return null != v && P
        ? (0, l.jsx)(n.Modal, {
              ...C,
              title: x.intl.formatToPlainString(x.t["1Ie87p"], { user: r.username }),
              subtitle: x.intl.format(x.t["/yH0UT"], { user: `@${h.Ay.getName(r)}` }),
              actions: [{ text: x.intl.string(x.t["3glT6Z"]), onClick: R, size: "sm", variant: "critical-primary" }],
              actionBarInput: M
                  ? void 0
                  : (0, l.jsx)(s.S, {
                        checked: A,
                        onChange: (e) => {
                            E(e);
                        },
                        label: x.intl.string(m.default["8yIKem"]),
                    }),
              children: (0, l.jsx)(d.f, {
                  label: x.intl.string(null != v ? x.t.hmKy8E : x.t["+2QEPt"]),
                  maxLength: b.hlA,
                  onChange: _,
                  value: w,
                  rows: 2,
              }),
          })
        : (0, l.jsx)(o.ConfirmModal, {
              title: x.intl.formatToPlainString(x.t["1Ie87p"], { user: r.username }),
              subtitle: x.intl.format(x.t["/yH0UT"], { user: `@${h.Ay.getName(r)}` }),
              confirmText: x.intl.string(x.t["3glT6Z"]),
              cancelText: x.intl.string(x.t["ETE/oC"]),
              onConfirm: R,
              ...C,
              children: (0, l.jsx)("div", {
                  className: f.Y,
                  children: (0, l.jsx)(d.f, {
                      label: x.intl.string(x.t["+2QEPt"]),
                      maxLength: b.hlA,
                      onChange: _,
                      value: w,
                      rows: 2,
                  }),
              }),
          });
}
