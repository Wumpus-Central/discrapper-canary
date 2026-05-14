i.d(n, { default: () => b });
var l = i(627968);
i(64700);
var t = i(477782),
    d = i(192308),
    a = i(980707),
    r = i(442433),
    s = i(847767),
    c = i(358367),
    o = i(793574),
    u = i(605691),
    A = i(848977),
    g = i(995102),
    h = i(50268),
    j = i(73028),
    x = i(495544),
    E = i(914853),
    _ = i(708653),
    M = i(297460),
    N = i(652215),
    X = i(375708);
let b = (0, c.A)(
    (0, s.A)(
        function (e) {
            let { channel: n, selected: s, onSelect: c, widgetType: N } = e,
                b = n.isOwner(x.default.getId()),
                p = (0, M.A)({ kind: "CHANNEL", channel: n, guildId: n.getGuildId?.() ?? null }, N),
                U = (0, A.A)(n),
                C = (0, g.A)(n),
                { toggleFavoriteItem: I } = (0, _.Ay)(E.x.MESSAGES, n, N),
                O = (0, u.A)(n, s),
                k = (0, h.A)({ id: n.id, label: X.intl.string(X.t.gFHI3k) }),
                v = b
                    ? (0, l.jsx)(t.Dr, {
                          id: "instant-invites",
                          label: X.intl.string(X.t.ngRFjZ),
                          action: () =>
                              (0, d.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      i.e("93561"),
                                      i.e("23199"),
                                      i.e("83299"),
                                      i.e("49579"),
                                      i.e("40333"),
                                      i.e("66580"),
                                      i.e("99108"),
                                      i.e("32305"),
                                  ]).then(i.bind(i, 409352));
                                  return (i) => (0, l.jsx)(e, { channelId: n.id, ...i });
                              }),
                      })
                    : null;
            return null == n || n.isManaged()
                ? null
                : (0, l.jsxs)(a.W, {
                      navId: "overlay-gdm-context",
                      "aria-label": X.intl.string(X.t.Xm41aV),
                      onClose: r.Z_,
                      onSelect: c,
                      children: [
                          (0, l.jsxs)(t.rX, { children: [U, p, I] }),
                          (0, l.jsxs)(t.rX, {
                              children: [
                                  v,
                                  (0, l.jsx)(t.Dr, {
                                      id: "edit-gdm",
                                      label: X.intl.string(X.t["5Q9+/L"]),
                                      action: () => (0, j.U)(n.id, o.A.GROUP_DM_CONTEXT_MENU),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(t.rX, { children: C }),
                          (0, l.jsx)(t.rX, { children: O }),
                          (0, l.jsx)(t.rX, { children: k }),
                      ],
                  });
        },
        { object: N.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.OVERLAY, o.A.GROUP_DM_MENU],
);
