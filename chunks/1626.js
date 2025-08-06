n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(111618),
    a = n(730954),
    s = n(981631),
    l = n(388032);
function c(e, t) {
    return e.state !== s.yb.SEND_FAILED
        ? null
        : (0, r.jsx)(i.sNh, {
              id: "resend",
              label: l.intl.string(l.t.lXHojo),
              action: () => (0, a.Z)(t, e, void 0, o.Z.getOptions(e.id)),
          });
}
