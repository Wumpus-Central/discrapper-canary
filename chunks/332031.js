n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(655922),
    a = n(158776),
    s = n(981631),
    u = n(388032);
function d(e, t) {
    let n = (0, l.e7)([a.Z], () => (0, o.Z)(a.Z.findActivity(e, (e) => e.type === s.IIU.STREAMING)), [e]);
    return null == n
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'watch-stream',
              label: u.intl.string(u.t['7Xq/nZ']),
              action: () => {
                  null == t || t(), window.open(n, '_blank');
              }
          });
}
