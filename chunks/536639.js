n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(332148),
    o = n(257559),
    s = n(496675),
    c = n(151007),
    u = n(981631),
    d = n(388032);
function f(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.can(u.Plq.MANAGE_MESSAGES, t), [t]);
    return e.state !== u.yb.SEND_FAILED && (0, c.Z)(e, t, n)
        ? !1 === e.pinned
            ? (0, r.jsx)(l.sNh, {
                  id: 'pin',
                  action: function (n) {
                      n.shiftKey ? a.Z.pinMessage(t, e.id) : o.Z.confirmPin(t, e);
                  },
                  label: d.NW.string(d.t['CvQ18/']),
                  icon: l.qQX
              })
            : (0, r.jsx)(l.sNh, {
                  id: 'unpin',
                  action: function (n) {
                      n.shiftKey ? a.Z.unpinMessage(t, e.id) : o.Z.confirmUnpin(t, e);
                  },
                  label: d.NW.string(d.t['Bse+Fx']),
                  icon: l.qQX
              })
        : null;
}
