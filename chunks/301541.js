n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(308528),
    o = n(267102),
    u = n(474397),
    c = n(961350),
    s = n(652215),
    d = n(985018);

function A(e, t, n) {
    let A = (0, o.aL)();
    return (0, l.bG)([c.default], () => c.default.getId() === e) || t === s.BRT.POPOUT
        ? null
        : (0, r.jsx)(i.Drp, {
              id: "message-user",
              label: d.intl.string(d.t.OAJQlP),
              action: () => {
                  (0, u.A)(t, !0),
                      a.A.openPrivateChannel({
                          recipientIds: e,
                      }),
                      A.dispatch(s.jej.POPOUT_CLOSE),
                      (0, i.s7G)();
              },
              icon: n,
          });
}
