t.d(n, { Z: () => c });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    a = t(655922),
    o = t(158776),
    u = t(981631),
    s = t(388032);
function c(e, n) {
    let t = (0, r.e7)([o.Z], () => (0, a.Z)(o.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)), [e]);
    return null == t
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'watch-stream',
              label: s.NW.string(s.t['7Xq/nZ']),
              action: () => {
                  null == n || n(), window.open(t, '_blank');
              }
          });
}
