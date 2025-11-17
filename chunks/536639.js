n.d(t, { Z: () => c });
var i = n(54381);
n(473749);
var l = n(481060),
    s = n(332148),
    r = n(151007),
    a = n(819514),
    o = n(981631),
    u = n(388032);
function c(e, t) {
    return e.state !== o.yb.SEND_FAILED && (0, r.Z)(e, t)
        ? !1 === e.pinned
            ? (0, i.jsx)(l.sNh, {
                  id: "pin",
                  action: function (n) {
                      n.shiftKey ? s.Z.pinMessage(t, e.id) : a.Z.confirmPin(t, e);
                  },
                  label: u.intl.string(u.t.CvQ18w),
                  icon: l.qQX,
              })
            : (0, i.jsx)(l.sNh, {
                  id: "unpin",
                  action: function (n) {
                      n.shiftKey ? s.Z.unpinMessage(t, e.id) : a.Z.confirmUnpin(t, e);
                  },
                  label: u.intl.string(u.t["Bse+F/"]),
                  icon: l.qQX,
              })
        : null;
}
