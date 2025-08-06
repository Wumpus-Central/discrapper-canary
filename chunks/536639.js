n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(332148),
    a = n(257559),
    s = n(151007),
    l = n(981631),
    c = n(388032);
function u(e, t) {
    function n(n) {
        n.shiftKey ? o.Z.pinMessage(t, e.id) : a.Z.confirmPin(t, e);
    }
    function u(n) {
        n.shiftKey ? o.Z.unpinMessage(t, e.id) : a.Z.confirmUnpin(t, e);
    }
    return e.state !== l.yb.SEND_FAILED && (0, s.Z)(e, t)
        ? !1 === e.pinned
            ? (0, r.jsx)(i.sNh, {
                  id: 'pin',
                  action: n,
                  label: c.intl.string(c.t['CvQ18/']),
                  icon: i.qQX
              })
            : (0, r.jsx)(i.sNh, {
                  id: 'unpin',
                  action: u,
                  label: c.intl.string(c.t['Bse+Fx']),
                  icon: i.qQX
              })
        : null;
}
