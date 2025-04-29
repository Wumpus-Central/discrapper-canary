n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(111618),
    a = n(730954),
    o = n(981631),
    s = n(388032);
function c(e, t) {
    return e.state !== o.yb.SEND_FAILED
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'resend',
              label: s.intl.string(s.t.lXHojo),
              action: () => (0, a.Z)(t, e, void 0, l.Z.getOptions(e.id))
          });
}
