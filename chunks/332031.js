n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(655922),
    a = n(158776),
    u = n(981631),
    c = n(388032);
function s(e, t) {
    let n = (0, l.e7)([a.Z], () => (0, o.Z)(a.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)), [e]);
    return null == n
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'watch-stream',
              label: c.NW.string(c.t['7Xq/nZ']),
              action: () => {
                  null == t || t(), window.open(n, '_blank');
              }
          });
}
