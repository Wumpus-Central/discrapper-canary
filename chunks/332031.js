t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(655922),
    u = t(158776),
    o = t(981631),
    d = t(388032);
function s(e) {
    let n = (0, i.e7)([u.Z], () => (0, a.Z)(u.Z.findActivity(e, (e) => e.type === o.IIU.STREAMING)), [e]);
    return null == n
        ? null
        : (0, l.jsx)(r.MenuItem, {
              id: 'watch-stream',
              label: d.intl.string(d.t['7Xq/nZ']),
              action: () => window.open(n, '_blank')
          });
}
