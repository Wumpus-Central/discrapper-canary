n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(477782),
    l = n(308528),
    a = n(734057),
    d = n(985018);
function s(e, t) {
    let n = a.A.getChannel(e);
    return null == n || n.isMultiUserDM()
        ? null
        : (0, r.jsx)(i.Dr, {
              id: "close-dm",
              label: d.intl.string(d.t.jsvgc3),
              action: () => l.A.closePrivateChannel(e, t),
          });
}
