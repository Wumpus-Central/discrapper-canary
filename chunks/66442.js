n.d(t, { X: () => I, default: () => w });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(189213),
    c = n(17928),
    r = n(939249),
    d = n(177953),
    u = n(22231),
    h = n(123292),
    m = n(292666),
    _ = n(308528),
    A = n(964486),
    p = n(793574),
    v = n(688810),
    x = n(571694),
    y = n(47167),
    f = n(734057),
    g = n(174459),
    D = n(396787),
    C = n(652215),
    j = n(375708),
    E = n(740885);
function I(e) {
    let {
            channel: t,
            previewIcon: n,
            onIconChange: i,
            onIconRemove: l,
            analyticsLocations: o,
            petite: c = !1,
            className: m,
            allowRemovingIcon: _ = !0,
        } = e,
        A = void 0 !== n ? n : t?.icon != null ? (0, x.Y)(t, 120) : null,
        { analyticsLocations: y } = (0, v.Ay)(o, p.A.GROUP_DM_ICON_EDITOR),
        f = c ? 32 : 64;
    return (0, a.jsxs)("div", {
        className: s()(E.r2, m),
        children: [
            (0, a.jsxs)(r.D, {
                className: s()(E.zc, { [E.ud]: c }),
                "aria-label": j.intl.string(j.t["0qPSMV"]),
                onClick: () => (0, D.F5)(i, y),
                children: [
                    null != A
                        ? (0, a.jsx)("img", { src: A, alt: "", className: E.Dp })
                        : (0, a.jsx)("div", {
                              className: E.Pz,
                              children: (0, a.jsx)(d.n, { size: "custom", width: f, height: f, color: "currentColor" }),
                          }),
                    (0, a.jsx)("div", {
                        className: E.qc,
                        children: (0, a.jsx)(u.R, { color: "currentColor", size: c ? "xs" : "refresh_sm" }),
                    }),
                ],
            }),
            null != A && _
                ? (0, a.jsx)(h.Q, {
                      variant: "critical",
                      onClick: l,
                      "aria-label": j.intl.string(j.t["uY+Nk/"]),
                      text: j.intl.string(j.t["uY+Nk/"]),
                      textVariant: "text-sm/medium",
                      size: "sm",
                      role: "button",
                      type: "button",
                  })
                : null,
        ],
    });
}
let w = function (e) {
    let {
            channelId: t,
            onClose: n,
            transitionState: l,
            setHasPendingChanges: s,
            closeOrShowDiscardChangesAlert: r,
            location: d,
        } = e,
        u = (0, c.bG)([f.A], () => f.A.getChannel(t)),
        h = u?.name,
        x = (0, y.e5)(u),
        [w, T] = i.useState(h ?? ""),
        [b, k] = i.useState(void 0),
        R = void 0 !== b,
        { analyticsLocations: N } = (0, v.Ay)(d, p.A.GROUP_DM_EDIT_MODAL),
        M = {
            channel_id: t,
            channel_type: u?.type,
            location: d,
            location_stack: N,
            old_name_set: "" !== h,
            old_icon_set: u?.icon != null,
        };
    return (i.useEffect(() => {
        s(w !== h || R);
    }, [w, h, R, s]),
    (0, A.Ay)(
        () => (
            g.default.track(C.HAw.GDM_EDIT_INTERACTED, { ...M, action: "opened" }),
            () => {
                g.default.track(C.HAw.GDM_EDIT_INTERACTED, { ...M, action: "dismissed" });
            }
        ),
    ),
    null == u)
        ? null
        : (0, a.jsx)(v.f5, {
              value: N,
              children: (0, a.jsx)("form", {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let a = w !== h,
                          i = void 0 !== b;
                      if (
                          (g.default.track(C.HAw.GDM_EDIT_INTERACTED, {
                              ...M,
                              action: "saved",
                              new_name_set: "" !== w,
                              new_icon_set: (i ? b : u?.icon) != null,
                              name_changed: a,
                              icon_changed: i,
                          }),
                          a || i)
                      ) {
                          let e = {};
                          a && (e.name = w), i && (e.icon = b), _.A.updateChannel(t, e, d).catch(D.XA);
                      }
                      n();
                  },
                  children: (0, a.jsx)(o.Modal, {
                      title: j.intl.string(j.t["5Q9+/L"]),
                      actions: [
                          { text: j.intl.string(j.t["ETE/oC"]), variant: "secondary", onClick: r },
                          {
                              text: j.intl.string(j.t["R3BPH+"]),
                              variant: "primary",
                              type: "submit",
                              disabled: w === h && !R,
                          },
                      ],
                      onClose: () => Promise.resolve(r()),
                      transitionState: l,
                      children: (0, a.jsxs)("div", {
                          className: E.jE,
                          children: [
                              (0, a.jsx)(I, {
                                  channel: u,
                                  previewIcon: b,
                                  onIconChange: (e) => k(e.imageUri),
                                  onIconRemove: () => k(null),
                                  analyticsLocations: N,
                              }),
                              (0, a.jsx)(m.k, {
                                  "aria-label": j.intl.string(j.t.GEGW3P),
                                  placeholder: x ?? "",
                                  maxLength: C.Ign,
                                  value: w,
                                  onChange: T,
                                  autoFocus: !0,
                              }),
                          ],
                      }),
                  }),
              }),
          });
};
