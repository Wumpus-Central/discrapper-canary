n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(111618),
    o = n(730954),
    a = n(981631),
    s = n(388032);
function c(e, t) {
    return e.state !== a.yb.SEND_FAILED
        ? null
        : (0, r.jsx)(i.sNh, {
              id: "resend",
              label: s.intl.string(s.t.lXHojr),
              action: () => (0, o.Z)(t, e, void 0, l.Z.getOptions(e.id)),
          });
}
