e.d(t, { default: () => G });
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(442433),
    a = e(847767),
    d = e(358367),
    s = e(468389),
    u = e(793574),
    c = e(50268),
    o = e(515610),
    h = e(133238),
    A = e(795144),
    f = e(671470),
    g = e(73028),
    j = e(961350),
    x = e(605691),
    _ = e(848977),
    m = e(995102),
    b = e(652215),
    p = e(985018);
function v(n) {
    let { channel: t, onSelect: a } = n,
        d = t.isOwner(j.default.getId()),
        o = (0, _.A)(t),
        x = (0, m.A)(t),
        b = (0, c.A)({ id: t.id, label: p.intl.string(p.t.gFHI3k) }),
        v = (0, s.A)(t),
        O = (0, h.y)(t),
        G = (0, A.A)(t),
        X = (0, f.A)(t),
        y = d
            ? (0, i.jsx)(l.Drp, {
                  id: "instant-invites",
                  label: p.intl.string(p.t.ngRFjZ),
                  action: () =>
                      (0, l.mMO)(async () => {
                          let { default: n } = await e.e("48574").then(e.bind(e, 830541));
                          return (e) => (0, i.jsx)(n, { channelId: t.id, ...e });
                      }),
              })
            : null;
    return null == t || t.isManaged()
        ? null
        : (0, i.jsxs)(l.W1t, {
              "data-menu-migrated-auto": !0,
              navId: "gdm-context",
              "aria-label": p.intl.string(p.t.Xm41aV),
              onClose: r.Z_,
              onSelect: a,
              children: [
                  (0, i.jsx)(l.rXV, { children: o }),
                  (0, i.jsx)(l.rXV, { children: X }),
                  (0, i.jsx)(l.rXV, { children: G }),
                  (0, i.jsxs)(l.rXV, {
                      children: [
                          y,
                          (0, i.jsx)(l.Drp, {
                              id: "edit-gdm",
                              label: p.intl.string(p.t["5Q9+/L"]),
                              action: () => (0, g.U)(t.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, i.jsx)(l.rXV, { children: v }),
                  (0, i.jsx)(l.rXV, { children: x }),
                  (0, i.jsx)(l.rXV, { children: O }),
                  (0, i.jsx)(l.rXV, { children: b }),
              ],
          });
}
function O(n) {
    let { channel: t, selected: a, onSelect: d } = n,
        o = t.isOwner(j.default.getId()),
        A = (0, _.A)(t),
        f = (0, m.A)(t),
        b = (0, x.A)(t, a),
        v = (0, c.A)({ id: t.id, label: p.intl.string(p.t.gFHI3k) }),
        O = (0, s.A)(t),
        G = (0, h.m)(t),
        X = (0, h.y)(t),
        y = o
            ? (0, i.jsx)(l.Drp, {
                  id: "instant-invites",
                  label: p.intl.string(p.t.ngRFjZ),
                  action: () =>
                      (0, l.mMO)(async () => {
                          let { default: n } = await e.e("48574").then(e.bind(e, 830541));
                          return (e) => (0, i.jsx)(n, { channelId: t.id, ...e });
                      }),
              })
            : null;
    return null == t || t.isManaged()
        ? null
        : (0, i.jsxs)(l.W1t, {
              "data-menu-migrated-auto": !0,
              navId: "gdm-context",
              "aria-label": p.intl.string(p.t.Xm41aV),
              onClose: r.Z_,
              onSelect: d,
              children: [
                  (0, i.jsx)(l.rXV, { children: A }),
                  (0, i.jsx)(l.rXV, { children: G }),
                  (0, i.jsxs)(l.rXV, {
                      children: [
                          y,
                          (0, i.jsx)(l.Drp, {
                              id: "edit-gdm",
                              label: p.intl.string(p.t["5Q9+/L"]),
                              action: () => (0, g.U)(t.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, i.jsx)(l.rXV, { children: O }),
                  (0, i.jsx)(l.rXV, { children: f }),
                  (0, i.jsxs)(l.rXV, { children: [X, b] }),
                  (0, i.jsx)(l.rXV, { children: v }),
              ],
          });
}
let G = (0, d.A)(
    (0, a.A)(
        function (n) {
            return (0, o.A)() ? (0, i.jsx)(v, { ...n }) : (0, i.jsx)(O, { ...n });
        },
        { object: b.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.GROUP_DM_MENU],
);
