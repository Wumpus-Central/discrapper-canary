n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(346610),
    s = n(868643),
    r = n(245216),
    o = n(996861),
    d = n(388032);
function c(e, t) {
    let n = (0, s.a)(e),
        { canForwardMessages: c } = (0, a.yk)({ location: 'MessageActionsMenu' }, { autoTrackExposure: !1 });
    return n && c
        ? (0, i.jsx)(l.sNh, {
              id: 'forward',
              label: d.intl.string(d.t.I3ltXF),
              icon: r.Z,
              action: () => {
                  (0, o.ts)(t, e);
              }
          })
        : null;
}
