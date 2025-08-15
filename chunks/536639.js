n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var l = n(481060),
    r = n(332148),
    s = n(257559),
    a = n(151007),
    o = n(981631),
    u = n(388032);
function c(e, t) {
    return e.state !== o.yb.SEND_FAILED && (0, a.Z)(e, t)
        ? !1 === e.pinned
            ? (0, i.jsx)(l.sNh, {
                  id: "pin",
                  action: function (n) {
                      n.shiftKey ? r.Z.pinMessage(t, e.id) : s.Z.confirmPin(t, e);
                  },
                  label: u.intl.string(u.t["CvQ18/"]),
                  icon: l.qQX,
              })
            : (0, i.jsx)(l.sNh, {
                  id: "unpin",
                  action: function (n) {
                      n.shiftKey ? r.Z.unpinMessage(t, e.id) : s.Z.confirmUnpin(t, e);
                  },
                  label: u.intl.string(u.t["Bse+Fx"]),
                  icon: l.qQX,
              })
        : null;
}
