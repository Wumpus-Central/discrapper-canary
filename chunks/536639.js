n.d(t, { Z: () => g });
var i = n(255367);
n(73800);
var l = n(442837),
    r = n(481060),
    s = n(332148),
    a = n(257559),
    o = n(496675),
    c = n(151007),
    d = n(981631),
    u = n(388032);
function g(e, t) {
    let n = (0, l.e7)([o.Z], () => o.Z.can(d.Plq.MANAGE_MESSAGES, t), [t]);
    return e.state !== d.yb.SEND_FAILED && (0, c.Z)(e, t, n)
        ? !1 === e.pinned
            ? (0, i.jsx)(r.sNh, {
                  id: 'pin',
                  action: function (n) {
                      n.shiftKey ? s.Z.pinMessage(t, e.id) : a.Z.confirmPin(t, e);
                  },
                  label: u.intl.string(u.t['CvQ18/']),
                  icon: r.qQX
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'unpin',
                  action: function (n) {
                      n.shiftKey ? s.Z.unpinMessage(t, e.id) : a.Z.confirmUnpin(t, e);
                  },
                  label: u.intl.string(u.t['Bse+Fx']),
                  icon: r.qQX
              })
        : null;
}
