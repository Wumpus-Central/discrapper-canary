i.d(n, { default: () => f });
var t = i(627968);
i(64700);
var l = i(477782),
    r = i(192308),
    d = i(980707),
    s = i(442433),
    a = i(847767),
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
    U = i(439191),
    p = i(652215),
    E = i(375708);
function N(e) {
    let { channel: n, onSelect: a } = e,
        c = n.isOwner(_.default.getId()),
        x = (0, m.A)(n),
        b = (0, M.A)(n),
        U = (0, o.A)({ id: n.id, label: E.intl.string(E.t.gFHI3k) }),
        p = (0, j.A)(n),
        N = (0, h.y)(n),
        O = (0, g.A)(n),
        f = (0, X.A)(n),
        C = c
            ? (0, t.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: E.intl.string(E.t.ngRFjZ),
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              i.e("93561"),
                              i.e("99496"),
                              i.e("83299"),
                              i.e("21837"),
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
              "aria-label": E.intl.string(E.t.Xm41aV),
              onClose: s.Z_,
              onSelect: a,
              children: [
                  (0, t.jsx)(l.rX, { children: x }),
                  (0, t.jsxs)(l.rX, { children: [f, O] }),
                  (0, t.jsxs)(l.rX, {
                      children: [
                          C,
                          (0, t.jsx)(l.Dr, {
                              id: "edit-gdm",
                              label: E.intl.string(E.t["5Q9+/L"]),
                              action: () => (0, A.U)(n.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, t.jsx)(l.rX, { children: p }),
                  (0, t.jsx)(l.rX, { children: b }),
                  (0, t.jsx)(l.rX, { children: N }),
                  (0, t.jsx)(l.rX, { children: U }),
              ],
          });
}
function O(e) {
    let { channel: n, selected: a, onSelect: c } = e,
        x = n.isOwner(_.default.getId()),
        g = (0, m.A)(n),
        X = (0, M.A)(n),
        p = (0, b.A)(n, a),
        N = (0, o.A)({ id: n.id, label: E.intl.string(E.t.gFHI3k) }),
        O = (0, j.A)(n),
        f = (0, U.A)(n),
        C = (0, h.m)(n),
        D = (0, h.y)(n),
        I = x
            ? (0, t.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: E.intl.string(E.t.ngRFjZ),
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              i.e("93561"),
                              i.e("99496"),
                              i.e("83299"),
                              i.e("21837"),
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
              "aria-label": E.intl.string(E.t.Xm41aV),
              onClose: s.Z_,
              onSelect: c,
              children: [
                  (0, t.jsx)(l.rX, { children: g }),
                  (0, t.jsxs)(l.rX, { children: [f, C] }),
                  (0, t.jsxs)(l.rX, {
                      children: [
                          I,
                          (0, t.jsx)(l.Dr, {
                              id: "edit-gdm",
                              label: E.intl.string(E.t["5Q9+/L"]),
                              action: () => (0, A.U)(n.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, t.jsx)(l.rX, { children: O }),
                  (0, t.jsx)(l.rX, { children: X }),
                  (0, t.jsxs)(l.rX, { children: [D, p] }),
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
