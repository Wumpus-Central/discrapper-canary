var t = i(477900);
i(582128);
var l = i(477782),
    r = i(192308),
    s = i(165862),
    d = i(442433),
    a = i(847767),
    c = i(358367),
    j = i(468389),
    u = i(793574),
    x = i(50268),
    h = i(93055),
    g = i(438653),
    o = i(250737),
    X = i(73028),
    A = i(687340),
    m = i(46653),
    _ = i(605691),
    b = i(511904),
    M = i(906964),
    U = i(995102),
    C = i(439191),
    E = i(652215),
    N = i(792996);
function O(e) {
    let { channel: n, onSelect: a } = e,
        c = n.isOwner(m.default.getId()),
        h = (0, b.A)(n),
        A = (0, U.A)(n),
        _ = (0, x.A)({ id: n.id, label: N.intl.string(N.t.gFHI3k) }),
        C = (0, j.A)(n),
        E = (0, g.C)(n),
        O = (0, o.A)(n),
        f = (0, M.A)(n),
        D = c
            ? (0, t.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: N.intl.string(N.t.ngRFjZ),
                  action: () =>
                      (0, r.mM)(async () => {
                          let { default: e } = await Promise.all([
                              i.e(876400),
                              i.e(207998),
                              i.e(126301),
                              i.e(880472),
                              i.e(25658),
                              i.e(577084),
                              i.e(124006),
                              i.e(678195),
                              i.e(66580),
                              i.e(695067),
                              i.e(319664),
                          ]).then(i.bind(i, 454963));
                          return (i) => (0, t.jsx)(e, { channelId: n.id, ...i });
                      }),
              })
            : null;
    return null == n || n.isManaged()
        ? null
        : (0, t.jsxs)(s.W, {
              "data-menu-migrated-auto": !0,
              navId: "gdm-context",
              "aria-label": N.intl.string(N.t.Xm41aV),
              onClose: d.Z_,
              onSelect: a,
              children: [
                  (0, t.jsx)(l.rX, { children: h }),
                  (0, t.jsxs)(l.rX, { children: [f, O] }),
                  (0, t.jsxs)(l.rX, {
                      children: [
                          D,
                          (0, t.jsx)(l.Dr, {
                              id: "edit-gdm",
                              label: N.intl.string(N.t["5Q9+/L"]),
                              action: () => (0, X.U)(n.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, t.jsx)(l.rX, { children: C }),
                  (0, t.jsx)(l.rX, { children: A }),
                  (0, t.jsx)(l.rX, { children: E }),
                  (0, t.jsx)(l.rX, { children: _ }),
              ],
          });
}
function f(e) {
    let { channel: n, selected: a, onSelect: c } = e,
        h = n.isOwner(m.default.getId()),
        o = (0, b.A)(n),
        M = (0, U.A)(n),
        E = (0, _.A)(n, a),
        O = (0, x.A)({ id: n.id, label: N.intl.string(N.t.gFHI3k) }),
        f = (0, j.A)(n),
        D = (0, C.A)(n),
        I = (0, g.z)(n),
        T = (0, g.C)(n),
        p = (0, A.A)(n),
        k = h
            ? (0, t.jsx)(l.Dr, {
                  id: "instant-invites",
                  label: N.intl.string(N.t.ngRFjZ),
                  action: () =>
                      (0, r.mM)(async () => {
                          let { default: e } = await Promise.all([
                              i.e(876400),
                              i.e(207998),
                              i.e(126301),
                              i.e(880472),
                              i.e(25658),
                              i.e(577084),
                              i.e(124006),
                              i.e(678195),
                              i.e(66580),
                              i.e(695067),
                              i.e(319664),
                          ]).then(i.bind(i, 454963));
                          return (i) => (0, t.jsx)(e, { channelId: n.id, ...i });
                      }),
              })
            : null;
    return null == n || n.isManaged()
        ? null
        : (0, t.jsxs)(s.W, {
              "data-menu-migrated-auto": !0,
              navId: "gdm-context",
              "aria-label": N.intl.string(N.t.Xm41aV),
              onClose: d.Z_,
              onSelect: c,
              children: [
                  (0, t.jsx)(l.rX, { children: o }),
                  (0, t.jsxs)(l.rX, { children: [p, D, I] }),
                  (0, t.jsxs)(l.rX, {
                      children: [
                          k,
                          (0, t.jsx)(l.Dr, {
                              id: "edit-gdm",
                              label: N.intl.string(N.t["5Q9+/L"]),
                              action: () => (0, X.U)(n.id, u.A.GROUP_DM_CONTEXT_MENU),
                          }),
                      ],
                  }),
                  (0, t.jsx)(l.rX, { children: f }),
                  (0, t.jsx)(l.rX, { children: M }),
                  (0, t.jsxs)(l.rX, { children: [T, E] }),
                  (0, t.jsx)(l.rX, { children: O }),
              ],
          });
}
let D = (0, c.A)(
    (0, a.A)(
        function (e) {
            return (0, h.DZ)() ? (0, t.jsx)(O, { ...e }) : (0, t.jsx)(f, { ...e });
        },
        { object: E.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.GROUP_DM_MENU],
);
i.d(n, {}, { default: D });
