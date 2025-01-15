t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(346610),
    a = t(868643),
    o = t(245216),
    s = t(996861),
    u = t(388032);
function d(e, n) {
    let t = (0, a.a)(e),
        { canForwardMessages: d } = (0, r.yk)({ location: 'MessageActionsMenu' }, { autoTrackExposure: !1 });
    return t && d
        ? (0, i.jsx)(l.MenuItem, {
              id: 'forward',
              label: u.intl.string(u.t.I3ltXF),
              icon: o.Z,
              action: () => {
                  (0, s.ts)(n, e);
              }
          })
        : null;
}
