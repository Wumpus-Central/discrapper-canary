n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var i = n(17928),
    r = n(477782),
    a = n(192308),
    o = n(308528),
    d = n(267102),
    u = n(474397),
    s = n(495544),
    c = n(652215),
    A = n(985018);
function E(e, t, n) {
    let E = (0, d.aL)();
    return (0, i.bG)([s.default], () => s.default.getId() === e) || t === c.BRT.POPOUT
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "message-user",
              label: A.intl.string(A.t.OAJQlP),
              action: () => {
                  (0, u.A)(t, !0),
                      o.A.openPrivateChannel({ recipientIds: e }),
                      E.dispatch(c.jej.POPOUT_CLOSE),
                      (0, a.closeAllModals)();
              },
              icon: n,
              leadingAccessory: null != n ? { type: "icon", icon: n } : void 0,
          });
}
