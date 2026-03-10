i.d(t, { default: () => y });
var e = i(627968);
i(64700);
var l = i(397927),
    r = i(442433),
    a = i(847767),
    d = i(358367),
    s = i(468389),
    u = i(793574),
    o = i(50268),
    c = i(515610),
    h = i(133238),
    A = i(795144),
    f = i(671470),
    g = i(73028),
    j = i(961350),
    x = i(605691),
    _ = i(848977),
    b = i(995102),
    m = i(652215),
    p = i(985018);
function v(n) {
    let { channel: t, onSelect: a } = n,
        d = t.isOwner(j.default.getId()),
        c = (0, _.A)(t),
        x = (0, b.Ay)(t),
        m = (0, o.A)({ id: t.id, label: p.intl.string(p.t.gFHI3k) }),
        v = (0, s.A)(t),
        O = (0, h.y)(t),
        y = (0, A.A)(t),
        G = (0, f.A)(t),
        X = d
            ? (0, e.jsx)(l.Drp, {
                  id: "instant-invites",
                  label: p.intl.string(p.t.ngRFjZ),
                  action: () =>
                      (0, l.mMO)(async () => {
                          let { default: n } = await i.e("48574").then(i.bind(i, 830541));
                          return (i) => (0, e.jsx)(n, { channelId: t.id, ...i });
                      }),
              })
            : null;
    return null == t || t.isManaged()
        ? null
        : (0, e.jsxs)(l.W1t, {
              "data-menu-migrated-auto": !0,
              navId: "gdm-context",
              "aria-label": p.intl.string(p.t.Xm41aV),
              onClose: r.Z_,
              onSelect: a,
              children: [
                  (0, e.jsx)(l.rXV, { children: c }),
                  (0, e.jsx)(l.rXV, { children: G }),
                  (0, e.jsx)(l.rXV, { children: y }),
                  (0, e.jsxs)(l.rXV, {
                      children: [
                          X,
                          (0, e.jsx)(l.Drp, {
                              id: "edit-gdm",
                              label: p.intl.string(p.t["5Q9+/L"]),
                              action: () => (0, g.U)(t.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, e.jsx)(l.rXV, { children: v }),
                  (0, e.jsx)(l.rXV, { children: x }),
                  (0, e.jsx)(l.rXV, { children: O }),
                  (0, e.jsx)(l.rXV, { children: m }),
              ],
          });
}
function O(n) {
    let { channel: t, selected: a, onSelect: d } = n,
        c = t.isOwner(j.default.getId()),
        A = (0, _.A)(t),
        f = (0, b.Ay)(t),
        m = (0, x.A)(t, a),
        v = (0, o.A)({ id: t.id, label: p.intl.string(p.t.gFHI3k) }),
        O = (0, s.A)(t),
        y = (0, h.m)(t),
        G = (0, h.y)(t),
        X = c
            ? (0, e.jsx)(l.Drp, {
                  id: "instant-invites",
                  label: p.intl.string(p.t.ngRFjZ),
                  action: () =>
                      (0, l.mMO)(async () => {
                          let { default: n } = await i.e("48574").then(i.bind(i, 830541));
                          return (i) => (0, e.jsx)(n, { channelId: t.id, ...i });
                      }),
              })
            : null;
    return null == t || t.isManaged()
        ? null
        : (0, e.jsxs)(l.W1t, {
              "data-menu-migrated-auto": !0,
              navId: "gdm-context",
              "aria-label": p.intl.string(p.t.Xm41aV),
              onClose: r.Z_,
              onSelect: d,
              children: [
                  (0, e.jsxs)(l.rXV, { children: [A, y] }),
                  (0, e.jsxs)(l.rXV, {
                      children: [
                          X,
                          (0, e.jsx)(l.Drp, {
                              id: "edit-gdm",
                              label: p.intl.string(p.t["5Q9+/L"]),
                              action: () => (0, g.U)(t.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, e.jsx)(l.rXV, { children: O }),
                  (0, e.jsx)(l.rXV, { children: f }),
                  (0, e.jsxs)(l.rXV, { children: [G, m] }),
                  (0, e.jsx)(l.rXV, { children: v }),
              ],
          });
}
let y = (0, d.A)(
    (0, a.A)(
        function (n) {
            return (0, c.A)() ? (0, e.jsx)(v, { ...n }) : (0, e.jsx)(O, { ...n });
        },
        { object: m.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.GROUP_DM_MENU],
);
