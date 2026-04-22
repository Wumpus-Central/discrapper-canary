n.d(t, { X: () => T, default: () => y });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(189213),
    o = n(311907),
    c = n(939249),
    d = n(177953),
    u = n(22231),
    h = n(123292),
    m = n(292666),
    A = n(308528),
    g = n(964486),
    p = n(793574),
    _ = n(688810),
    f = n(571694),
    E = n(47167),
    C = n(734057),
    x = n(954571),
    S = n(396787),
    I = n(652215),
    N = n(985018),
    v = n(740885);
function T(e) {
    let {
            channel: t,
            previewIcon: n,
            onIconChange: l,
            onIconRemove: a,
            analyticsLocations: r,
            petite: o = !1,
            className: m,
            allowRemovingIcon: A = !0,
        } = e,
        g = void 0 !== n ? n : t?.icon != null ? (0, f.Y)(t, 120) : null,
        { analyticsLocations: E } = (0, _.Ay)(r, p.A.GROUP_DM_ICON_EDITOR),
        C = o ? 32 : 64;
    return (0, i.jsxs)("div", {
        className: s()(v.r2, m),
        children: [
            (0, i.jsxs)(c.D, {
                className: s()(v.zc, { [v.ud]: o }),
                "aria-label": N.intl.string(N.t["0qPSMV"]),
                onClick: () => (0, S.F5)(l, E),
                children: [
                    null != g
                        ? (0, i.jsx)("img", { src: g, alt: "", className: v.Dp })
                        : (0, i.jsx)("div", {
                              className: v.Pz,
                              children: (0, i.jsx)(d.n, { size: "custom", width: C, height: C, color: "currentColor" }),
                          }),
                    (0, i.jsx)("div", {
                        className: v.qc,
                        children: (0, i.jsx)(u.R, { color: "currentColor", size: o ? "xs" : "refresh_sm" }),
                    }),
                ],
            }),
            null != g && A
                ? (0, i.jsx)(h.Q, {
                      variant: "critical",
                      onClick: a,
                      "aria-label": N.intl.string(N.t["uY+Nk/"]),
                      text: N.intl.string(N.t["uY+Nk/"]),
                      textVariant: "text-sm/medium",
                      size: "sm",
                      role: "button",
                      type: "button",
                  })
                : null,
        ],
    });
}
let y = function (e) {
    let {
            channelId: t,
            onClose: n,
            transitionState: a,
            setHasPendingChanges: s,
            closeOrShowDiscardChangesAlert: c,
            location: d,
        } = e,
        u = (0, o.bG)([C.A], () => C.A.getChannel(t)),
        h = u?.name,
        f = (0, E.e5)(u),
        [y, b] = l.useState(h ?? ""),
        [j, R] = l.useState(void 0),
        M = void 0 !== j,
        { analyticsLocations: L } = (0, _.Ay)(d, p.A.GROUP_DM_EDIT_MODAL),
        D = {
            channel_id: t,
            channel_type: u?.type,
            location: d,
            location_stack: L,
            old_name_set: "" !== h,
            old_icon_set: u?.icon != null,
        };
    return (l.useEffect(() => {
        s(y !== h || M);
    }, [y, h, M, s]),
    (0, g.Ay)(
        () => (
            x.default.track(I.HAw.GDM_EDIT_INTERACTED, { ...D, action: "opened" }),
            () => {
                x.default.track(I.HAw.GDM_EDIT_INTERACTED, { ...D, action: "dismissed" });
            }
        ),
    ),
    null == u)
        ? null
        : (0, i.jsx)(_.f5, {
              value: L,
              children: (0, i.jsx)("form", {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let i = y !== h,
                          l = void 0 !== j;
                      if (
                          (x.default.track(I.HAw.GDM_EDIT_INTERACTED, {
                              ...D,
                              action: "saved",
                              new_name_set: "" !== y,
                              new_icon_set: (l ? j : u?.icon) != null,
                              name_changed: i,
                              icon_changed: l,
                          }),
                          i || l)
                      ) {
                          let e = {};
                          i && (e.name = y), l && (e.icon = j), A.A.updateChannel(t, e, d).catch(S.XA);
                      }
                      n();
                  },
                  children: (0, i.jsx)(r.Modal, {
                      title: N.intl.string(N.t["5Q9+/L"]),
                      actions: [
                          { text: N.intl.string(N.t["ETE/oC"]), variant: "secondary", onClick: c },
                          {
                              text: N.intl.string(N.t["R3BPH+"]),
                              variant: "primary",
                              type: "submit",
                              disabled: y === h && !M,
                          },
                      ],
                      onClose: () => Promise.resolve(c()),
                      transitionState: a,
                      children: (0, i.jsxs)("div", {
                          className: v.jE,
                          children: [
                              (0, i.jsx)(T, {
                                  channel: u,
                                  previewIcon: j,
                                  onIconChange: (e) => R(e.imageUri),
                                  onIconRemove: () => R(null),
                                  analyticsLocations: L,
                              }),
                              (0, i.jsx)(m.k, {
                                  "aria-label": N.intl.string(N.t.GEGW3P),
                                  placeholder: f ?? "",
                                  maxLength: I.Ign,
                                  value: y,
                                  onChange: b,
                                  autoFocus: !0,
                              }),
                          ],
                      }),
                  }),
              }),
          });
};
