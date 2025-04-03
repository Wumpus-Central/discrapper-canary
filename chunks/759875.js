n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(346610),
    a = n(868643),
    o = n(245216),
    s = n(996861),
    c = n(388032);
function u(e, t) {
    let n = (0, a.a)(e),
        { canForwardMessages: u } = (0, l.yk)({ location: 'MessageActionsMenu' }, { autoTrackExposure: !1 });
    return n && u
        ? (0, r.jsx)(i.sNh, {
              id: 'forward',
              label: c.NW.string(c.t.I3ltXF),
              icon: o.Z,
              action: () => {
                  (0, s.ts)(t, e);
              }
          })
        : null;
}
