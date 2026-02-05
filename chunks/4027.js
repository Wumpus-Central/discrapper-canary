e.d(n, { default: () => m });
var i = e(627968);
e(64700);
var l = e(397927),
    a = e(442433),
    r = e(847767),
    d = e(358367),
    o = e(468389),
    s = e(793574),
    u = e(50268),
    c = e(133238),
    A = e(795144),
    f = e(73028),
    h = e(961350),
    v = e(605691),
    _ = e(848977),
    p = e(995102),
    g = e(652215),
    C = e(985018);
let m = (0, d.A)(
    (0, r.A)(
        function (t) {
            let { channel: n, selected: r, onSelect: d } = t,
                g = n.isOwner(h.default.getId()),
                m = (0, _.A)(n),
                b = (0, p.Ay)(n),
                E = (0, v.A)(n, r),
                O = (0, u.A)({ id: n.id, label: C.intl.string(C.t.gFHI3k) }),
                y = (0, o.A)(n),
                T = (0, c.m)(n),
                R = (0, c.y)(n),
                G = (0, A.A)(n),
                U = g
                    ? (0, i.jsx)(l.Drp, {
                          id: "instant-invites",
                          label: C.intl.string(C.t.ngRFjZ),
                          action: () =>
                              (0, l.mMO)(async () => {
                                  let { default: t } = await e.e("48574").then(e.bind(e, 830541));
                                  return (e) => (0, i.jsx)(t, { channelId: n.id, ...e });
                              }),
                      })
                    : null;
            return null == n || n.isManaged()
                ? null
                : (0, i.jsxs)(l.W1t, {
                      "data-menu-migrated-auto": !0,
                      navId: "gdm-context",
                      "aria-label": C.intl.string(C.t.Xm41aV),
                      onClose: a.Z_,
                      onSelect: d,
                      children: [
                          (0, i.jsxs)(l.rXV, { children: [m, T, G] }),
                          (0, i.jsxs)(l.rXV, {
                              children: [
                                  U,
                                  (0, i.jsx)(l.Drp, {
                                      id: "edit-gdm",
                                      label: C.intl.string(C.t["5Q9+/L"]),
                                      action: () => (0, f.U)(n.id, s.A.GROUP_DM_CONTEXT_MENU),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(l.rXV, { children: y }),
                          (0, i.jsx)(l.rXV, { children: b }),
                          (0, i.jsxs)(l.rXV, { children: [R, E] }),
                          (0, i.jsx)(l.rXV, { children: O }),
                      ],
                  });
        },
        { object: g.ZSU.CONTEXT_MENU },
    ),
    [s.A.CONTEXT_MENU, s.A.GROUP_DM_MENU],
);
