t.d(n, {
    Z: function () {
        return g;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(332148),
    o = t(257559),
    s = t(496675),
    u = t(151007),
    d = t(981631),
    c = t(388032);
function g(e, n) {
    let t = (0, l.e7)([s.Z], () => s.Z.can(d.Plq.MANAGE_MESSAGES, n), [n]);
    return e.state !== d.yb.SEND_FAILED && (0, u.Z)(e, n, t)
        ? !1 === e.pinned
            ? (0, i.jsx)(r.MenuItem, {
                  id: 'pin',
                  action: function (t) {
                      t.shiftKey ? a.Z.pinMessage(n, e.id) : o.Z.confirmPin(n, e);
                  },
                  label: c.intl.string(c.t['CvQ18/']),
                  icon: r.PinIcon
              })
            : (0, i.jsx)(r.MenuItem, {
                  id: 'unpin',
                  action: function (t) {
                      t.shiftKey ? a.Z.unpinMessage(n, e.id) : o.Z.confirmUnpin(n, e);
                  },
                  label: c.intl.string(c.t['Bse+Fx']),
                  icon: r.PinIcon
              })
        : null;
}
