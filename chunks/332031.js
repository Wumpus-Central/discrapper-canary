n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(655922),
    o = n(158776),
    s = n(981631),
    u = n(388032);
function c(e, t) {
    let n = (0, l.e7)([o.Z], () => (0, a.Z)(o.Z.findActivity(e, (e) => e.type === s.IIU.STREAMING)), [e]);
    return null == n
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'watch-stream',
              label: u.NW.string(u.t['7Xq/nZ']),
              action: () => {
                  null == t || t(), window.open(n, '_blank');
              }
          });
}
