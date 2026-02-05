n.d(t, { X: () => S, default: () => T });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(308528),
    u = n(964486),
    h = n(793574),
    m = n(688810),
    A = n(571694),
    p = n(47167),
    g = n(734057),
    f = n(954571),
    _ = n(396787),
    E = n(652215),
    C = n(985018),
    x = n(353528);
function S(e) {
    let {
            channel: t,
            previewIcon: n,
            onIconChange: l,
            onIconRemove: a,
            analyticsLocations: r,
            petite: o = !1,
            className: d,
            allowRemovingIcon: u = !0,
        } = e,
        p = void 0 !== n ? n : t?.icon != null ? (0, A.Y)(t, 120) : null,
        { analyticsLocations: g } = (0, m.Ay)(r, h.A.GROUP_DM_ICON_EDITOR),
        f = o ? 32 : 64;
    return (0, i.jsxs)("div", {
        className: s()(x.r2, d),
        children: [
            (0, i.jsxs)(c.DUT, {
                className: s()(x.zc, { [x.ud]: o }),
                "aria-label": C.intl.string(C.t["0qPSMV"]),
                onClick: () => (0, _.F5)(l, g),
                children: [
                    null != p
                        ? (0, i.jsx)("img", { src: p, alt: "", className: x.Dp })
                        : (0, i.jsx)("div", {
                              className: x.Pz,
                              children: (0, i.jsx)(c.nFg, {
                                  size: "custom",
                                  width: f,
                                  height: f,
                                  color: "currentColor",
                              }),
                          }),
                    (0, i.jsx)("div", {
                        className: x.qc,
                        children: (0, i.jsx)(c.R2l, { color: "currentColor", size: o ? "xs" : "refresh_sm" }),
                    }),
                ],
            }),
            null != p && u
                ? (0, i.jsx)(c.QWc, {
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
let T = function (e) {
    let {
            channelId: t,
            onClose: n,
            transitionState: a,
            setHasPendingChanges: s,
            closeOrShowDiscardChangesAlert: A,
            location: T,
        } = e,
        I = (0, o.bG)([g.A], () => g.A.getChannel(t)),
        N = I?.name,
        v = (0, p.e5)(I),
        [y, b] = l.useState(N ?? ""),
        [R, j] = l.useState(void 0),
        M = void 0 !== R,
        { analyticsLocations: D } = (0, m.Ay)(T, h.A.GROUP_DM_EDIT_MODAL),
        O = {
            channel_id: t,
            channel_type: I?.type,
            location: T,
            location_stack: D,
            old_name_set: "" !== N,
            old_icon_set: I?.icon != null,
        };
    return (l.useEffect(() => {
        s(y !== N || M);
    }, [y, N, M, s]),
    (0, u.Ay)(
        () => (
            f.default.track(E.HAw.GDM_EDIT_INTERACTED, { ...O, action: "opened" }),
            () => {
                f.default.track(E.HAw.GDM_EDIT_INTERACTED, { ...O, action: "dismissed" });
            }
        ),
    ),
    null == I)
        ? null
        : (0, i.jsx)(m.f5, {
              value: D,
              children: (0, i.jsx)("form", {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let i = y !== N,
                          l = void 0 !== R;
                      if (
                          (f.default.track(E.HAw.GDM_EDIT_INTERACTED, {
                              ...O,
                              action: "saved",
                              new_name_set: "" !== y,
                              new_icon_set: (l ? R : I?.icon) != null,
                              name_changed: i,
                              icon_changed: l,
                          }),
                          i || l)
                      ) {
                          let e = {};
                          i && (e.name = y), l && (e.icon = R), d.A.updateChannel(t, e, T).catch(_.XA);
                      }
                      n();
                  },
                  children: (0, i.jsx)(r.Modal, {
                      title: C.intl.string(C.t["5Q9+/L"]),
                      actions: [
                          { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: A },
                          {
                              text: C.intl.string(C.t["R3BPH+"]),
                              variant: "primary",
                              type: "submit",
                              disabled: y === N && !M,
                          },
                      ],
                      onClose: () => Promise.resolve(A()),
                      transitionState: a,
                      children: (0, i.jsxs)("div", {
                          className: x.jE,
                          children: [
                              (0, i.jsx)(S, {
                                  channel: I,
                                  previewIcon: R,
                                  onIconChange: (e) => j(e.imageUri),
                                  onIconRemove: () => j(null),
                                  analyticsLocations: D,
                              }),
                              (0, i.jsx)(c.ksK, {
                                  "aria-label": C.intl.string(C.t.GEGW3P),
                                  placeholder: v ?? "",
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
