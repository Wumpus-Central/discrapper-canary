n.d(e, { X: () => w, default: () => E });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(189213),
    o = n(17928),
    c = n(939249),
    d = n(177953),
    u = n(22231),
    h = n(123292),
    _ = n(292666),
    p = n(308528),
    m = n(964486),
    v = n(793574),
    A = n(688810),
    f = n(571694),
    x = n(47167),
    y = n(734057),
    g = n(954571),
    D = n(396787),
    j = n(652215),
    C = n(985018),
    I = n(740885);
function w(t) {
    let {
            channel: e,
            previewIcon: n,
            onIconChange: l,
            onIconRemove: a,
            analyticsLocations: r,
            petite: o = !1,
            className: _,
            allowRemovingIcon: p = !0,
        } = t,
        m = void 0 !== n ? n : e?.icon != null ? (0, f.Y)(e, 120) : null,
        { analyticsLocations: x } = (0, A.Ay)(r, v.A.GROUP_DM_ICON_EDITOR),
        y = o ? 32 : 64;
    return (0, i.jsxs)("div", {
        className: s()(I.r2, _),
        children: [
            (0, i.jsxs)(c.D, {
                className: s()(I.zc, { [I.ud]: o }),
                "aria-label": C.intl.string(C.t["0qPSMV"]),
                onClick: () => (0, D.F5)(l, x),
                children: [
                    null != m
                        ? (0, i.jsx)("img", { src: m, alt: "", className: I.Dp })
                        : (0, i.jsx)("div", {
                              className: I.Pz,
                              children: (0, i.jsx)(d.n, { size: "custom", width: y, height: y, color: "currentColor" }),
                          }),
                    (0, i.jsx)("div", {
                        className: I.qc,
                        children: (0, i.jsx)(u.R, { color: "currentColor", size: o ? "xs" : "refresh_sm" }),
                    }),
                ],
            }),
            null != m && p
                ? (0, i.jsx)(h.Q, {
                      variant: "critical",
                      onClick: a,
                      "aria-label": C.intl.string(C.t["uY+Nk/"]),
                      text: C.intl.string(C.t["uY+Nk/"]),
                      textVariant: "text-sm/medium",
                      size: "sm",
                      role: "button",
                      type: "button",
                  })
                : null,
        ],
    });
}
let E = function (t) {
    let {
            channelId: e,
            onClose: n,
            transitionState: a,
            setHasPendingChanges: s,
            closeOrShowDiscardChangesAlert: c,
            location: d,
        } = t,
        u = (0, o.bG)([y.A], () => y.A.getChannel(e)),
        h = u?.name,
        f = (0, x.e5)(u),
        [E, b] = l.useState(h ?? ""),
        [R, T] = l.useState(void 0),
        k = void 0 !== R,
        { analyticsLocations: N } = (0, A.Ay)(d, v.A.GROUP_DM_EDIT_MODAL),
        P = {
            channel_id: e,
            channel_type: u?.type,
            location: d,
            location_stack: N,
            old_name_set: "" !== h,
            old_icon_set: u?.icon != null,
        };
    return (l.useEffect(() => {
        s(E !== h || k);
    }, [E, h, k, s]),
    (0, m.Ay)(
        () => (
            g.default.track(j.HAw.GDM_EDIT_INTERACTED, { ...P, action: "opened" }),
            () => {
                g.default.track(j.HAw.GDM_EDIT_INTERACTED, { ...P, action: "dismissed" });
            }
        ),
    ),
    null == u)
        ? null
        : (0, i.jsx)(A.f5, {
              value: N,
              children: (0, i.jsx)("form", {
                  onSubmit: (t) => {
                      t.preventDefault();
                      let i = E !== h,
                          l = void 0 !== R;
                      if (
                          (g.default.track(j.HAw.GDM_EDIT_INTERACTED, {
                              ...P,
                              action: "saved",
                              new_name_set: "" !== E,
                              new_icon_set: (l ? R : u?.icon) != null,
                              name_changed: i,
                              icon_changed: l,
                          }),
                          i || l)
                      ) {
                          let t = {};
                          i && (t.name = E), l && (t.icon = R), p.A.updateChannel(e, t, d).catch(D.XA);
                      }
                      n();
                  },
                  children: (0, i.jsx)(r.Modal, {
                      title: C.intl.string(C.t["5Q9+/L"]),
                      actions: [
                          { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: c },
                          {
                              text: C.intl.string(C.t["R3BPH+"]),
                              variant: "primary",
                              type: "submit",
                              disabled: E === h && !k,
                          },
                      ],
                      onClose: () => Promise.resolve(c()),
                      transitionState: a,
                      children: (0, i.jsxs)("div", {
                          className: I.jE,
                          children: [
                              (0, i.jsx)(w, {
                                  channel: u,
                                  previewIcon: R,
                                  onIconChange: (t) => T(t.imageUri),
                                  onIconRemove: () => T(null),
                                  analyticsLocations: N,
                              }),
                              (0, i.jsx)(_.k, {
                                  "aria-label": C.intl.string(C.t.GEGW3P),
                                  placeholder: f ?? "",
                                  maxLength: j.Ign,
                                  value: E,
                                  onChange: b,
                                  autoFocus: !0,
                              }),
                          ],
                      }),
                  }),
              }),
          });
};
