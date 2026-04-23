t.d(e, { default: () => p });
var i = t(627968);
t(64700);
var l = t(477782),
    r = t(192308),
    a = t(550079),
    d = t(442433),
    s = t(847767),
    o = t(358367),
    u = t(468389),
    c = t(793574),
    h = t(50268),
    A = t(313281),
    f = t(133238),
    g = t(795144),
    _ = t(671470),
    j = t(73028),
    x = t(495544),
    b = t(605691),
    m = t(848977),
    y = t(995102),
    v = t(652215),
    G = t(985018);
function O(n) {
    let { channel: e, onSelect: s } = n,
        o = e.isOwner(x.default.getId()),
        A = (0, m.A)(e),
        b = (0, y.A)(e),
        v = (0, h.A)({ id: e.id, label: G.intl.string(G.t.gFHI3k) }),
        O = (0, u.A)(e),
        X = (0, f.y)(e),
        p = (0, g.A)(e),
        C = (0, _.A)(e),
        D = o
            ? (0, i.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: G.intl.string(G.t.ngRFjZ),
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: n } = await Promise.all([t.e("40333"), t.e("32305")]).then(t.bind(t, 409352));
                          return (t) => (0, i.jsx)(n, { channelId: e.id, ...t });
                      }),
              })
            : null;
    return null == e || e.isManaged()
        ? null
        : (0, i.jsxs)(a.W, {
              "data-menu-migrated-auto": !0,
              navId: "gdm-context",
              "aria-label": G.intl.string(G.t.Xm41aV),
              onClose: d.Z_,
              onSelect: s,
              children: [
                  (0, i.jsx)(l.rX, { children: A }),
                  (0, i.jsxs)(l.rX, { children: [C, p] }),
                  (0, i.jsxs)(l.rX, {
                      children: [
                          D,
                          (0, i.jsx)(l.Dr, {
                              id: "edit-gdm",
                              label: G.intl.string(G.t["5Q9+/L"]),
                              action: () => (0, j.U)(e.id, c.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, i.jsx)(l.rX, { children: O }),
                  (0, i.jsx)(l.rX, { children: b }),
                  (0, i.jsx)(l.rX, { children: X }),
                  (0, i.jsx)(l.rX, { children: v }),
              ],
          });
}
function X(n) {
    let { channel: e, selected: s, onSelect: o } = n,
        A = e.isOwner(x.default.getId()),
        g = (0, m.A)(e),
        _ = (0, y.A)(e),
        v = (0, b.A)(e, s),
        O = (0, h.A)({ id: e.id, label: G.intl.string(G.t.gFHI3k) }),
        X = (0, u.A)(e),
        p = (0, f.m)(e),
        C = (0, f.y)(e),
        D = A
            ? (0, i.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: G.intl.string(G.t.ngRFjZ),
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: n } = await Promise.all([t.e("40333"), t.e("32305")]).then(t.bind(t, 409352));
                          return (t) => (0, i.jsx)(n, { channelId: e.id, ...t });
                      }),
              })
            : null;
    return null == e || e.isManaged()
        ? null
        : (0, i.jsxs)(a.W, {
              "data-menu-migrated-auto": !0,
              navId: "gdm-context",
              "aria-label": G.intl.string(G.t.Xm41aV),
              onClose: d.Z_,
              onSelect: o,
              children: [
                  (0, i.jsx)(l.rX, { children: g }),
                  (0, i.jsx)(l.rX, { children: p }),
                  (0, i.jsxs)(l.rX, {
                      children: [
                          D,
                          (0, i.jsx)(l.Dr, {
                              id: "edit-gdm",
                              label: G.intl.string(G.t["5Q9+/L"]),
                              action: () => (0, j.U)(e.id, c.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, i.jsx)(l.rX, { children: X }),
                  (0, i.jsx)(l.rX, { children: _ }),
                  (0, i.jsxs)(l.rX, { children: [C, v] }),
                  (0, i.jsx)(l.rX, { children: O }),
              ],
          });
}
let p = (0, o.A)(
    (0, s.A)(
        function (n) {
            return (0, A.DZ)() ? (0, i.jsx)(O, { ...n }) : (0, i.jsx)(X, { ...n });
        },
        { object: v.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.GROUP_DM_MENU],
);
