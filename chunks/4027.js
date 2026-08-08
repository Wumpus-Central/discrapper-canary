i.d(n, { default: () => O });
var t = i(477900);
i(582128);
var l = i(477782),
    r = i(192308),
    d = i(980707),
    s = i(442433),
    a = i(847767),
    c = i(358367),
    j = i(468389),
    u = i(793574),
    o = i(50268),
    x = i(93055),
    h = i(438653),
    g = i(527835),
    X = i(250737),
    A = i(73028),
    _ = i(280450),
    b = i(605691),
    m = i(848977),
    M = i(995102),
    U = i(439191),
    C = i(652215),
    p = i(375708);
function E(e) {
    let { channel: n, onSelect: a } = e,
        c = n.isOwner(_.default.getId()),
        x = (0, m.A)(n),
        b = (0, M.A)(n),
        U = (0, o.A)({ id: n.id, label: p.intl.string(p.t.gFHI3k) }),
        C = (0, j.A)(n),
        E = (0, h.C)(n),
        N = (0, X.A)(n),
        O = (0, g.A)(n),
        f = c
            ? (0, t.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: p.intl.string(p.t.ngRFjZ),
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              i.e("41295"),
                              i.e("75091"),
                              i.e("91922"),
                              i.e("71845"),
                              i.e("77084"),
                              i.e("78195"),
                              i.e("66580"),
                              i.e("99108"),
                              i.e("95067"),
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
              onClose: s.Z_,
              onSelect: a,
              children: [
                  (0, t.jsx)(l.rX, { children: x }),
                  (0, t.jsxs)(l.rX, { children: [O, N] }),
                  (0, t.jsxs)(l.rX, {
                      children: [
                          f,
                          (0, t.jsx)(l.Dr, {
                              id: "edit-gdm",
                              label: p.intl.string(p.t["5Q9+/L"]),
                              action: () => (0, A.U)(n.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, t.jsx)(l.rX, { children: C }),
                  (0, t.jsx)(l.rX, { children: b }),
                  (0, t.jsx)(l.rX, { children: E }),
                  (0, t.jsx)(l.rX, { children: U }),
              ],
          });
}
function N(e) {
    let { channel: n, selected: a, onSelect: c } = e,
        x = n.isOwner(_.default.getId()),
        g = (0, m.A)(n),
        X = (0, M.A)(n),
        C = (0, b.A)(n, a),
        E = (0, o.A)({ id: n.id, label: p.intl.string(p.t.gFHI3k) }),
        N = (0, j.A)(n),
        O = (0, U.A)(n),
        f = (0, h.z)(n),
        D = (0, h.C)(n),
        I = x
            ? (0, t.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: p.intl.string(p.t.ngRFjZ),
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              i.e("41295"),
                              i.e("75091"),
                              i.e("91922"),
                              i.e("71845"),
                              i.e("77084"),
                              i.e("78195"),
                              i.e("66580"),
                              i.e("99108"),
                              i.e("95067"),
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
              onClose: s.Z_,
              onSelect: c,
              children: [
                  (0, t.jsx)(l.rX, { children: g }),
                  (0, t.jsxs)(l.rX, { children: [O, f] }),
                  (0, t.jsxs)(l.rX, {
                      children: [
                          I,
                          (0, t.jsx)(l.Dr, {
                              id: "edit-gdm",
                              label: p.intl.string(p.t["5Q9+/L"]),
                              action: () => (0, A.U)(n.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, t.jsx)(l.rX, { children: N }),
                  (0, t.jsx)(l.rX, { children: X }),
                  (0, t.jsxs)(l.rX, { children: [D, C] }),
                  (0, t.jsx)(l.rX, { children: E }),
              ],
          });
}
let O = (0, c.A)(
    (0, a.A)(
        function (e) {
            return (0, x.DZ)() ? (0, t.jsx)(E, { ...e }) : (0, t.jsx)(N, { ...e });
        },
        { object: C.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.GROUP_DM_MENU],
);
