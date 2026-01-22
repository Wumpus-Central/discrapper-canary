n.d(t, {
    X: () => E,
    default: () => _,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(311907),
    c = n(397927),
    u = n(308528),
    d = n(964486),
    f = n(793574),
    p = n(688810),
    h = n(571694),
    b = n(47167),
    g = n(734057),
    m = n(954571),
    A = n(396787),
    y = n(652215),
    O = n(985018),
    j = n(353528);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let {
            channel: t,
            previewIcon: n,
            onIconChange: l,
            onIconRemove: i,
            analyticsLocations: s,
            petite: o = !1,
            className: u,
            allowRemovingIcon: d = !0,
        } = e,
        b = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, h.Y)(t, 120) : null,
        { analyticsLocations: g } = (0, p.Ay)(s, f.A.GROUP_DM_ICON_EDITOR),
        m = o ? 32 : 64;
    return (0, r.jsxs)("div", {
        className: a()(j.r2, u),
        children: [
            (0, r.jsxs)(c.DUT, {
                className: a()(j.zc, { [j.ud]: o }),
                "aria-label": O.intl.string(O.t["0qPSMV"]),
                onClick: () => (0, A.F5)(l, g),
                children: [
                    null != b
                        ? (0, r.jsx)("img", {
                              src: b,
                              alt: "",
                              className: j.Dp,
                          })
                        : (0, r.jsx)("div", {
                              className: j.Pz,
                              children: (0, r.jsx)(c.nFg, {
                                  size: "custom",
                                  width: m,
                                  height: m,
                                  color: "currentColor",
                              }),
                          }),
                    (0, r.jsx)("div", {
                        className: j.qc,
                        children: (0, r.jsx)(c.R2l, {
                            color: "currentColor",
                            size: o ? "xs" : "refresh_sm",
                        }),
                    }),
                ],
            }),
            null != b && d
                ? (0, r.jsx)(c.QWc, {
                      variant: "critical",
                      onClick: i,
                      "aria-label": O.intl.string(O.t["uY+Nk/"]),
                      text: O.intl.string(O.t["uY+Nk/"]),
                      textVariant: "text-sm/medium",
                      size: "sm",
                      role: "button",
                      type: "button",
                  })
                : null,
        ],
    });
}
let _ = function (e) {
    let {
            channelId: t,
            onClose: n,
            transitionState: i,
            setHasPendingChanges: a,
            closeOrShowDiscardChangesAlert: h,
            location: _,
        } = e,
        C = (0, o.bG)([g.A], () => g.A.getChannel(t)),
        S = null == C ? void 0 : C.name,
        I = (0, b.e5)(C),
        [N, T] = l.useState(null != S ? S : ""),
        [P, w] = l.useState(void 0),
        R = void 0 !== P,
        { analyticsLocations: D } = (0, p.Ay)(_, f.A.GROUP_DM_EDIT_MODAL),
        M = {
            channel_id: t,
            channel_type: null == C ? void 0 : C.type,
            location: _,
            location_stack: D,
            old_name_set: "" !== S,
            old_icon_set: (null == C ? void 0 : C.icon) != null,
        };
    return (l.useEffect(() => {
        a(N !== S || R);
    }, [N, S, R, a]),
    (0, d.Ay)(
        () => (
            m.default.track(y.HAw.GDM_EDIT_INTERACTED, x(v({}, M), { action: "opened" })),
            () => {
                m.default.track(y.HAw.GDM_EDIT_INTERACTED, x(v({}, M), { action: "dismissed" }));
            }
        ),
    ),
    null == C)
        ? null
        : (0, r.jsx)(p.f5, {
              value: D,
              children: (0, r.jsx)("form", {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let r = N !== S,
                          l = void 0 !== P;
                      if (
                          (m.default.track(
                              y.HAw.GDM_EDIT_INTERACTED,
                              x(v({}, M), {
                                  action: "saved",
                                  new_name_set: "" !== N,
                                  new_icon_set: (l ? P : null == C ? void 0 : C.icon) != null,
                                  name_changed: r,
                                  icon_changed: l,
                              }),
                          ),
                          r || l)
                      ) {
                          let e = {};
                          r && (e.name = N), l && (e.icon = P), u.A.updateChannel(t, e, _).catch(A.XA);
                      }
                      n();
                  },
                  children: (0, r.jsx)(s.Modal, {
                      title: O.intl.string(O.t["5Q9+/L"]),
                      actions: [
                          {
                              text: O.intl.string(O.t["ETE/oC"]),
                              variant: "secondary",
                              onClick: h,
                          },
                          {
                              text: O.intl.string(O.t["R3BPH+"]),
                              variant: "primary",
                              type: "submit",
                              disabled: N === S && !R,
                          },
                      ],
                      onClose: () => Promise.resolve(h()),
                      transitionState: i,
                      children: (0, r.jsxs)("div", {
                          className: j.jE,
                          children: [
                              (0, r.jsx)(E, {
                                  channel: C,
                                  previewIcon: P,
                                  onIconChange: (e) => w(e.imageUri),
                                  onIconRemove: () => w(null),
                                  analyticsLocations: D,
                              }),
                              (0, r.jsx)(c.ksK, {
                                  "aria-label": O.intl.string(O.t.GEGW3P),
                                  placeholder: null != I ? I : "",
                                  value: N,
                                  onChange: T,
                                  autoFocus: !0,
                              }),
                          ],
                      }),
                  }),
              }),
          });
};
