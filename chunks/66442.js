"use strict";
n.d(t, { X: () => v, default: () => O });
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
    f = n(292666),
    h = n(308528),
    p = n(964486),
    E = n(793574),
    m = n(688810),
    g = n(571694),
    A = n(47167),
    I = n(734057),
    T = n(174459),
    S = n(396787),
    N = n(652215),
    y = n(375708),
    C = n(740885);
function v(e) {
    let {
            channel: t,
            previewIcon: n,
            onIconChange: r,
            onIconRemove: s,
            analyticsLocations: o,
            petite: l = !1,
            className: f,
            allowRemovingIcon: h = !0,
        } = e,
        p = void 0 !== n ? n : t?.icon != null ? (0, g.Y)(t, 120) : null,
        { analyticsLocations: A } = (0, m.Ay)(o, E.A.GROUP_DM_ICON_EDITOR),
        I = l ? 32 : 64;
    return (0, i.jsxs)("div", {
        className: a()(C.r2, f),
        children: [
            (0, i.jsxs)(u.D, {
                className: a()(C.zc, { [C.ud]: l }),
                "aria-label": y.intl.string(y.t["0qPSMV"]),
                onClick: () => (0, S.F5)(r, A),
                children: [
                    null != p
                        ? (0, i.jsx)("img", { src: p, alt: "", className: C.Dp })
                        : (0, i.jsx)("div", {
                              className: C.Pz,
                              children: (0, i.jsx)(c.n, { size: "custom", width: I, height: I, color: "currentColor" }),
                          }),
                    (0, i.jsx)("div", {
                        className: C.qc,
                        children: (0, i.jsx)(d.R, { color: "currentColor", size: l ? "xs" : "refresh_sm" }),
                    }),
                ],
            }),
            null != p && h
                ? (0, i.jsx)(_.Q, {
                      variant: "critical",
                      onClick: s,
                      "aria-label": y.intl.string(y.t["uY+Nk/"]),
                      text: y.intl.string(y.t["uY+Nk/"]),
                      textVariant: "text-sm/medium",
                      size: "sm",
                      role: "button",
                      type: "button",
                  })
                : null,
        ],
    });
}
let O = function (e) {
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
        [O, R] = r.useState(_ ?? ""),
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
        a(O !== _ || L);
    }, [O, _, L, a]),
    (0, p.Ay)(
        () => (
            T.default.track(N.HAw.GDM_EDIT_INTERACTED, { ...M, action: "opened" }),
            () => {
                T.default.track(N.HAw.GDM_EDIT_INTERACTED, { ...M, action: "dismissed" });
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
                      let i = O !== _,
                          r = void 0 !== b;
                      if (
                          (T.default.track(N.HAw.GDM_EDIT_INTERACTED, {
                              ...M,
                              action: "saved",
                              new_name_set: "" !== O,
                              new_icon_set: (r ? b : d?.icon) != null,
                              name_changed: i,
                              icon_changed: r,
                          }),
                          i || r)
                      ) {
                          let e = {};
                          i && (e.name = O), r && (e.icon = b), h.A.updateChannel(t, e, c).catch(S.XA);
                      }
                      n();
                  },
                  children: (0, i.jsx)(o.Modal, {
                      title: y.intl.string(y.t["5Q9+/L"]),
                      actions: [
                          { text: y.intl.string(y.t["ETE/oC"]), variant: "secondary", onClick: u },
                          {
                              text: y.intl.string(y.t["R3BPH+"]),
                              variant: "primary",
                              type: "submit",
                              disabled: O === _ && !L,
                          },
                      ],
                      onClose: () => Promise.resolve(u()),
                      transitionState: s,
                      children: (0, i.jsxs)("div", {
                          className: C.jE,
                          children: [
                              (0, i.jsx)(v, {
                                  channel: d,
                                  previewIcon: b,
                                  onIconChange: (e) => D(e.imageUri),
                                  onIconRemove: () => D(null),
                                  analyticsLocations: w,
                              }),
                              (0, i.jsx)(f.k, {
                                  "aria-label": y.intl.string(y.t.GEGW3P),
                                  placeholder: g ?? "",
                                  maxLength: N.Ign,
                                  value: O,
                                  onChange: R,
                                  autoFocus: !0,
                              }),
                          ],
                      }),
                  }),
              }),
          });
};
