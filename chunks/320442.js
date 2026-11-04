var t = n(477900);
n(582128);
var l = n(477782),
    d = n(192308),
    r = n(165862),
    s = n(442433),
    a = n(847767),
    c = n(358367),
    u = n(793574),
    A = n(605691),
    g = n(511904),
    o = n(995102),
    h = n(50268),
    j = n(73028),
    x = n(46653),
    E = n(914853),
    _ = n(708653),
    M = n(297460),
    N = n(652215),
    X = n(792996);
let b = (0, c.A)(
    (0, a.A)(
        function (e) {
            let { channel: i, selected: a, onSelect: c, widgetType: N } = e,
                b = i.isOwner(x.default.getId()),
                U = (0, M.A)({ kind: "CHANNEL", channel: i, guildId: i.getGuildId?.() ?? null }, N),
                p = (0, g.A)(i),
                C = (0, o.A)(i),
                { toggleFavoriteItem: I } = (0, _.Ay)(E.x.MESSAGES, i, N),
                O = (0, A.A)(i, a),
                k = (0, h.A)({ id: i.id, label: X.intl.string(X.t.gFHI3k) }),
                m = b
                    ? (0, t.jsx)(l.Dr, {
                          id: "instant-invites",
                          label: X.intl.string(X.t.ngRFjZ),
                          action: () =>
                              (0, d.mM)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e(876400),
                                      n.e(207998),
                                      n.e(817298),
                                      n.e(25658),
                                      n.e(66580),
                                      n.e(319664),
                                  ]).then(n.bind(n, 454963));
                                  return (n) => (0, t.jsx)(e, { channelId: i.id, ...n });
                              }),
                      })
                    : null;
            return null == i || i.isManaged()
                ? null
                : (0, t.jsxs)(r.W, {
                      navId: "overlay-gdm-context",
                      "aria-label": X.intl.string(X.t.Xm41aV),
                      onClose: s.Z_,
                      onSelect: c,
                      children: [
                          (0, t.jsxs)(l.rX, { children: [p, U, I] }),
                          (0, t.jsxs)(l.rX, {
                              children: [
                                  m,
                                  (0, t.jsx)(l.Dr, {
                                      id: "edit-gdm",
                                      label: X.intl.string(X.t["5Q9+/L"]),
                                      action: () => (0, j.U)(i.id, u.A.GROUP_DM_CONTEXT_MENU),
                                  }),
                              ],
                          }),
                          (0, t.jsx)(l.rX, { children: C }),
                          (0, t.jsx)(l.rX, { children: O }),
                          (0, t.jsx)(l.rX, { children: k }),
                      ],
                  });
        },
        { object: N.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.OVERLAY, u.A.GROUP_DM_MENU],
);
n.d(i, {}, { default: b });
