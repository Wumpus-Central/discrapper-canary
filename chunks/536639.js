n.d(t, { Z: () => c });
var i = n(951288);
n(647438);
var l = n(481060),
    s = n(332148),
    r = n(257559),
    a = n(151007),
    o = n(981631),
    u = n(388032);
function c(e, t) {
    return e.state !== o.yb.SEND_FAILED && (0, a.Z)(e, t)
        ? !1 === e.pinned
            ? (0, i.jsx)(l.sNh, {
                  id: "pin",
                  action: function (n) {
                      n.shiftKey ? s.Z.pinMessage(t, e.id) : r.Z.confirmPin(t, e);
                  },
                  label: u.intl.string(u.t["CvQ18/"]),
                  icon: l.qQX,
              })
            : (0, i.jsx)(l.sNh, {
                  id: "unpin",
                  action: function (n) {
                      n.shiftKey ? s.Z.unpinMessage(t, e.id) : r.Z.confirmUnpin(t, e);
                  },
                  label: u.intl.string(u.t["Bse+Fx"]),
                  icon: l.qQX,
              })
        : null;
}
