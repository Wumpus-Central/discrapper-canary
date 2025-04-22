n.d(t, { Z: () => s });
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    o = n(655922),
    a = n(158776),
    u = n(981631),
    c = n(388032);
function s(e, t) {
    let n = (0, r.e7)([a.Z], () => (0, o.Z)(a.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)), [e]);
    return null == n
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'watch-stream',
              label: c.intl.string(c.t['7Xq/nZ']),
              action: () => {
                  null == t || t(), window.open(n, '_blank');
              }
          });
}
