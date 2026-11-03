n.d(t, { X: () => E, default: () => b });
var a = n(477900),
    i = n(582128),
    l = n(503698),
    s = n.n(l),
    o = n(17928),
    c = n(189213),
    r = n(939249),
    d = n(177953),
    u = n(22231),
    h = n(123292),
    m = n(95477),
    _ = n(308528),
    A = n(964486),
    y = n(793574),
    p = n(688810),
    v = n(571694),
    x = n(47167),
    f = n(734057),
    g = n(174459),
    D = n(396787),
    C = n(652215),
    j = n(105292),
    I = n(689094);
function E(e) {
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
        A = void 0 !== n ? n : t?.icon != null ? (0, v.Y)(t, 120) : null,
        { analyticsLocations: x } = (0, p.Ay)(o, y.A.GROUP_DM_ICON_EDITOR),
        f = c ? 32 : 64;
    return (0, a.jsxs)("div", {
        className: s()(I.r2, m),
        children: [
            (0, a.jsxs)(r.D, {
                className: s()(I.zc, { [I.ud]: c }),
                "aria-label": j.intl.string(j.t["0qPSMV"]),
                onClick: () => (0, D.F5)(i, x),
                children: [
                    null != A
                        ? (0, a.jsx)("img", { src: A, alt: "", className: I.Dp })
                        : (0, a.jsx)("div", {
                              className: I.Pz,
                              children: (0, a.jsx)(d.n, { size: "custom", width: f, height: f, color: "currentColor" }),
                          }),
                    (0, a.jsx)("div", {
                        className: I.qc,
                        children: (0, a.jsx)(u.PencilIcon, { color: "currentColor", size: c ? "xs" : "refresh_sm" }),
                    }),
                ],
            }),
            null != A && _
                ? (0, a.jsx)(h.Q, {
                      variant: "critical",
                      onClick: l,
                      "aria-label": j.intl.string(j.t["uY+Nk/"]),
                      text: j.intl.string(j.t["uY+Nk/"]),
                      textVariant: "body-sm/medium",
                      size: "sm",
                      role: "button",
                      type: "button",
                  })
                : null,
        ],
    });
}
let b = function (e) {
    let {
            channelId: t,
            onClose: n,
            transitionState: l,
            setHasPendingChanges: s,
            closeOrShowDiscardChangesAlert: r,
            location: d,
        } = e,
        u = (0, o.bG)([f.A], () => f.A.getChannel(t)),
        h = u?.name,
        v = (0, x.e5)(u),
        [b, w] = i.useState(h ?? ""),
        [T, k] = i.useState(void 0),
        N = void 0 !== T,
        { analyticsLocations: R } = (0, p.Ay)(d, y.A.GROUP_DM_EDIT_MODAL),
        P = {
            channel_id: t,
            channel_type: u?.type,
            location: d,
            location_stack: R,
            old_name_set: "" !== h,
            old_icon_set: u?.icon != null,
        };
    return (i.useEffect(() => {
        s(b !== h || N);
    }, [b, h, N, s]),
    (0, A.Ay)(
        () => (
            g.default.track(C.HAw.GDM_EDIT_INTERACTED, { ...P, action: "opened" }),
            () => {
                g.default.track(C.HAw.GDM_EDIT_INTERACTED, { ...P, action: "dismissed" });
            }
        ),
    ),
    null == u)
        ? null
        : (0, a.jsx)(p.f5, {
              value: R,
              children: (0, a.jsx)("form", {
                  onSubmit: function (e) {
                      e.preventDefault();
                      let a = b !== h,
                          i = void 0 !== T;
                      if (
                          (g.default.track(C.HAw.GDM_EDIT_INTERACTED, {
                              ...P,
                              action: "saved",
                              new_name_set: "" !== b,
                              new_icon_set: (i ? T : u?.icon) != null,
                              name_changed: a,
                              icon_changed: i,
                          }),
                          a || i)
                      ) {
                          let e = {};
                          (a && (e.name = b), i && (e.icon = T), _.A.updateChannel(t, e, d).catch(D.XA));
                      }
                      n();
                  },
                  children: (0, a.jsx)(c.a, {
                      title: j.intl.string(j.t["5Q9+/L"]),
                      actions: [
                          { text: j.intl.string(j.t["ETE/oC"]), variant: "secondary", onClick: r },
                          {
                              text: j.intl.string(j.t["R3BPH+"]),
                              variant: "primary",
                              type: "submit",
                              disabled: b === h && !N,
                          },
                      ],
                      onClose: () => Promise.resolve(r()),
                      transitionState: l,
                      children: (0, a.jsxs)("div", {
                          className: I.jE,
                          children: [
                              (0, a.jsx)(E, {
                                  channel: u,
                                  previewIcon: T,
                                  onIconChange: (e) => k(e.imageUri),
                                  onIconRemove: () => k(null),
                                  analyticsLocations: R,
                              }),
                              (0, a.jsx)(m.k, {
                                  "aria-label": j.intl.string(j.t.GEGW3P),
                                  placeholder: v ?? "",
                                  maxLength: C.Ign,
                                  value: b,
                                  onChange: w,
                                  autoFocus: !0,
                              }),
                          ],
                      }),
                  }),
              }),
          });
};
