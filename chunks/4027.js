i.d(n, { default: () => f });
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
    _ = i(687340),
    b = i(280450),
    m = i(605691),
    M = i(868548),
    U = i(995102),
    C = i(439191),
    p = i(652215),
    E = i(375708);
function N(e) {
    let { channel: n, onSelect: a } = e,
        c = n.isOwner(b.default.getId()),
        x = (0, M.A)(n),
        _ = (0, U.A)(n),
        m = (0, o.A)({ id: n.id, label: E.intl.string(E.t.gFHI3k) }),
        C = (0, j.A)(n),
        p = (0, h.C)(n),
        N = (0, X.A)(n),
        O = (0, g.A)(n),
        f = c
            ? (0, t.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: E.intl.string(E.t.ngRFjZ),
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              i.e("585461"),
                              i.e("207998"),
                              i.e("803511"),
                              i.e("241324"),
                              i.e("577084"),
                              i.e("678195"),
                              i.e("66580"),
                              i.e("399108"),
                              i.e("695067"),
                              i.e("232305"),
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
              "aria-label": E.intl.string(E.t.Xm41aV),
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
                              label: E.intl.string(E.t["5Q9+/L"]),
                              action: () => (0, A.U)(n.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, t.jsx)(l.rX, { children: C }),
                  (0, t.jsx)(l.rX, { children: _ }),
                  (0, t.jsx)(l.rX, { children: p }),
                  (0, t.jsx)(l.rX, { children: m }),
              ],
          });
}
function O(e) {
    let { channel: n, selected: a, onSelect: c } = e,
        x = n.isOwner(b.default.getId()),
        g = (0, M.A)(n),
        X = (0, U.A)(n),
        p = (0, m.A)(n, a),
        N = (0, o.A)({ id: n.id, label: E.intl.string(E.t.gFHI3k) }),
        O = (0, j.A)(n),
        f = (0, C.A)(n),
        D = (0, h.z)(n),
        I = (0, h.C)(n),
        T = (0, _.A)(n),
        k = x
            ? (0, t.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: E.intl.string(E.t.ngRFjZ),
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              i.e("585461"),
                              i.e("207998"),
                              i.e("803511"),
                              i.e("241324"),
                              i.e("577084"),
                              i.e("678195"),
                              i.e("66580"),
                              i.e("399108"),
                              i.e("695067"),
                              i.e("232305"),
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
              "aria-label": E.intl.string(E.t.Xm41aV),
              onClose: s.Z_,
              onSelect: c,
              children: [
                  (0, t.jsx)(l.rX, { children: g }),
                  (0, t.jsxs)(l.rX, { children: [T, f, D] }),
                  (0, t.jsxs)(l.rX, {
                      children: [
                          k,
                          (0, t.jsx)(l.Dr, {
                              id: "edit-gdm",
                              label: E.intl.string(E.t["5Q9+/L"]),
                              action: () => (0, A.U)(n.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, t.jsx)(l.rX, { children: O }),
                  (0, t.jsx)(l.rX, { children: X }),
                  (0, t.jsxs)(l.rX, { children: [I, p] }),
                  (0, t.jsx)(l.rX, { children: N }),
              ],
          });
}
let f = (0, c.A)(
    (0, a.A)(
        function (e) {
            return (0, x.DZ)() ? (0, t.jsx)(N, { ...e }) : (0, t.jsx)(O, { ...e });
        },
        { object: p.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.GROUP_DM_MENU],
);
