"use strict";
n.d(t, { X: () => C, default: () => R });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(189213),
    l = n(17928),
    u = n(939249),
    c = n(177953),
    d = n(22231),
    _ = n(123292),
    h = n(292666),
    f = n(308528),
    p = n(964486),
    E = n(793574),
    m = n(688810),
    g = n(571694),
    A = n(47167),
    I = n(734057),
    T = n(174459),
    S = n(396787),
    y = n(652215),
    N = n(375708),
    v = n(740885);
function C(e) {
    let {
            channel: t,
            previewIcon: n,
            onIconChange: r,
            onIconRemove: s,
            analyticsLocations: o,
            petite: l = !1,
            className: h,
            allowRemovingIcon: f = !0,
        } = e,
        p = void 0 !== n ? n : t?.icon != null ? (0, g.Y)(t, 120) : null,
        { analyticsLocations: A } = (0, m.Ay)(o, E.A.GROUP_DM_ICON_EDITOR),
        I = l ? 32 : 64;
    return (0, i.jsxs)("div", {
        className: a()(v.r2, h),
        children: [
            (0, i.jsxs)(u.D, {
                className: a()(v.zc, { [v.ud]: l }),
                "aria-label": N.intl.string(N.t["0qPSMV"]),
                onClick: () => (0, S.F5)(r, A),
                children: [
                    null != p
                        ? (0, i.jsx)("img", { src: p, alt: "", className: v.Dp })
                        : (0, i.jsx)("div", {
                              className: v.Pz,
                              children: (0, i.jsx)(c.n, { size: "custom", width: I, height: I, color: "currentColor" }),
                          }),
                    (0, i.jsx)("div", {
                        className: v.qc,
                        children: (0, i.jsx)(d.R, { color: "currentColor", size: l ? "xs" : "refresh_sm" }),
                    }),
                ],
            }),
            null != p && f
                ? (0, i.jsx)(_.Q, {
                      variant: "critical",
                      onClick: s,
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
let R = function (e) {
    let {
            channelId: t,
            onClose: n,
            transitionState: s,
            setHasPendingChanges: a,
            closeOrShowDiscardChangesAlert: u,
            location: c,
        } = e,
        d = (0, l.bG)([I.A], () => I.A.getChannel(t)),
        _ = d?.name,
        g = (0, A.e5)(d),
        [R, O] = r.useState(_ ?? ""),
        [b, D] = r.useState(void 0),
        L = void 0 !== b,
        { analyticsLocations: w } = (0, m.Ay)(c, E.A.GROUP_DM_EDIT_MODAL),
        M = {
            channel_id: t,
            channel_type: d?.type,
            location: c,
            location_stack: w,
            old_name_set: "" !== _,
            old_icon_set: d?.icon != null,
        };
    return (r.useEffect(() => {
        a(R !== _ || L);
    }, [R, _, L, a]),
    (0, p.Ay)(
        () => (
            T.default.track(y.HAw.GDM_EDIT_INTERACTED, { ...M, action: "opened" }),
            () => {
                T.default.track(y.HAw.GDM_EDIT_INTERACTED, { ...M, action: "dismissed" });
            }
        ),
    ),
    null == d)
        ? null
        : (0, i.jsx)(m.f5, {
              value: w,
              children: (0, i.jsx)("form", {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let i = R !== _,
                          r = void 0 !== b;
                      if (
                          (T.default.track(y.HAw.GDM_EDIT_INTERACTED, {
                              ...M,
                              action: "saved",
                              new_name_set: "" !== R,
                              new_icon_set: (r ? b : d?.icon) != null,
                              name_changed: i,
                              icon_changed: r,
                          }),
                          i || r)
                      ) {
                          let e = {};
                          i && (e.name = R), r && (e.icon = b), f.A.updateChannel(t, e, c).catch(S.XA);
                      }
                      n();
                  },
                  children: (0, i.jsx)(o.Modal, {
                      title: N.intl.string(N.t["5Q9+/L"]),
                      actions: [
                          { text: N.intl.string(N.t["ETE/oC"]), variant: "secondary", onClick: u },
                          {
                              text: N.intl.string(N.t["R3BPH+"]),
                              variant: "primary",
                              type: "submit",
                              disabled: R === _ && !L,
                          },
                      ],
                      onClose: () => Promise.resolve(u()),
                      transitionState: s,
                      children: (0, i.jsxs)("div", {
                          className: v.jE,
                          children: [
                              (0, i.jsx)(C, {
                                  channel: d,
                                  previewIcon: b,
                                  onIconChange: (e) => D(e.imageUri),
                                  onIconRemove: () => D(null),
                                  analyticsLocations: w,
                              }),
                              (0, i.jsx)(h.k, {
                                  "aria-label": N.intl.string(N.t.GEGW3P),
                                  placeholder: g ?? "",
                                  maxLength: y.Ign,
                                  value: R,
                                  onChange: O,
                                  autoFocus: !0,
                              }),
                          ],
                      }),
                  }),
              }),
          });
};
