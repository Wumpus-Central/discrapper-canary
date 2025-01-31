n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(111618),
    s = n(730954),
    r = n(981631),
    o = n(388032);
function d(e, t) {
    return e.state !== r.yb.SEND_FAILED
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'resend',
              label: o.intl.string(o.t.lXHojo),
              action: () => (0, s.Z)(t, e, void 0, a.Z.getOptions(e.id))
          });
}
