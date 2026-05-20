i.d(n, { default: () => O });
var t = i(627968);
i(64700);
var l = i(477782),
    r = i(192308),
    d = i(980707),
    a = i(442433),
    s = i(847767),
    c = i(358367),
    j = i(468389),
    u = i(793574),
    o = i(50268),
    x = i(313281),
    h = i(133238),
    g = i(572763),
    X = i(671470),
    A = i(73028),
    _ = i(495544),
    b = i(605691),
    m = i(848977),
    M = i(995102),
    U = i(652215),
    p = i(375708);
function E(e) {
    let { channel: n, onSelect: s } = e,
        c = n.isOwner(_.default.getId()),
        x = (0, m.A)(n),
        b = (0, M.A)(n),
        U = (0, o.A)({ id: n.id, label: p.intl.string(p.t.gFHI3k) }),
        E = (0, j.A)(n),
        N = (0, h.y)(n),
        O = (0, g.A)(n),
        f = (0, X.A)(n),
        C = c
            ? (0, t.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: p.intl.string(p.t.ngRFjZ),
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              i.e("93561"),
                              i.e("67485"),
                              i.e("83299"),
                              i.e("44710"),
                              i.e("40333"),
                              i.e("66580"),
                              i.e("99108"),
                              i.e("32305"),
                          ]).then(i.bind(i, 409352));
                          return (i) => (0, t.jsx)(e, { channelId: n.id, ...i });
                      }),
              })
            : null;
    return null == n || n.isManaged()
        ? null
        : (0, t.jsxs)(d.W, {
              "data-menu-migrated-auto": !0,
              navId: "gdm-context",
              "aria-label": p.intl.string(p.t.Xm41aV),
              onClose: a.Z_,
              onSelect: s,
              children: [
                  (0, t.jsx)(l.rX, { children: x }),
                  (0, t.jsxs)(l.rX, { children: [f, O] }),
                  (0, t.jsxs)(l.rX, {
                      children: [
                          C,
                          (0, t.jsx)(l.Dr, {
                              id: "edit-gdm",
                              label: p.intl.string(p.t["5Q9+/L"]),
                              action: () => (0, A.U)(n.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, t.jsx)(l.rX, { children: E }),
                  (0, t.jsx)(l.rX, { children: b }),
                  (0, t.jsx)(l.rX, { children: N }),
                  (0, t.jsx)(l.rX, { children: U }),
              ],
          });
}
function N(e) {
    let { channel: n, selected: s, onSelect: c } = e,
        x = n.isOwner(_.default.getId()),
        g = (0, m.A)(n),
        X = (0, M.A)(n),
        U = (0, b.A)(n, s),
        E = (0, o.A)({ id: n.id, label: p.intl.string(p.t.gFHI3k) }),
        N = (0, j.A)(n),
        O = (0, h.m)(n),
        f = (0, h.y)(n),
        C = x
            ? (0, t.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: p.intl.string(p.t.ngRFjZ),
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              i.e("93561"),
                              i.e("67485"),
                              i.e("83299"),
                              i.e("44710"),
                              i.e("40333"),
                              i.e("66580"),
                              i.e("99108"),
                              i.e("32305"),
                          ]).then(i.bind(i, 409352));
                          return (i) => (0, t.jsx)(e, { channelId: n.id, ...i });
                      }),
              })
            : null;
    return null == n || n.isManaged()
        ? null
        : (0, t.jsxs)(d.W, {
              "data-menu-migrated-auto": !0,
              navId: "gdm-context",
              "aria-label": p.intl.string(p.t.Xm41aV),
              onClose: a.Z_,
              onSelect: c,
              children: [
                  (0, t.jsx)(l.rX, { children: g }),
                  (0, t.jsx)(l.rX, { children: O }),
                  (0, t.jsxs)(l.rX, {
                      children: [
                          C,
                          (0, t.jsx)(l.Dr, {
                              id: "edit-gdm",
                              label: p.intl.string(p.t["5Q9+/L"]),
                              action: () => (0, A.U)(n.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, t.jsx)(l.rX, { children: N }),
                  (0, t.jsx)(l.rX, { children: X }),
                  (0, t.jsxs)(l.rX, { children: [f, U] }),
                  (0, t.jsx)(l.rX, { children: E }),
              ],
          });
}
let O = (0, c.A)(
    (0, s.A)(
        function (e) {
            return (0, x.DZ)() ? (0, t.jsx)(E, { ...e }) : (0, t.jsx)(N, { ...e });
        },
        { object: U.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.GROUP_DM_MENU],
);
