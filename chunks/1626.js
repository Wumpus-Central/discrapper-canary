n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(111618),
    l = n(730954),
    o = n(981631),
    s = n(388032);
function c(e, t) {
    return e.state !== o.yb.SEND_FAILED
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'resend',
              label: s.NW.string(s.t.lXHojo),
              action: () => (0, l.Z)(t, e, void 0, a.Z.getOptions(e.id))
          });
}
