n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    s = n(332148),
    r = n(257559),
    o = n(496675),
    d = n(151007),
    c = n(981631),
    u = n(388032);
function g(e, t) {
    let n = (0, l.e7)([o.Z], () => o.Z.can(c.Plq.MANAGE_MESSAGES, t), [t]);
    return e.state !== c.yb.SEND_FAILED && (0, d.Z)(e, t, n)
        ? !1 === e.pinned
            ? (0, i.jsx)(a.sNh, {
                  id: 'pin',
                  action: function (n) {
                      n.shiftKey ? s.Z.pinMessage(t, e.id) : r.Z.confirmPin(t, e);
                  },
                  label: u.intl.string(u.t['CvQ18/']),
                  icon: a.qQX
              })
            : (0, i.jsx)(a.sNh, {
                  id: 'unpin',
                  action: function (n) {
                      n.shiftKey ? s.Z.unpinMessage(t, e.id) : r.Z.confirmUnpin(t, e);
                  },
                  label: u.intl.string(u.t['Bse+Fx']),
                  icon: a.qQX
              })
        : null;
}
