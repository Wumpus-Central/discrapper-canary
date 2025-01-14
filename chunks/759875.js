t.d(n, {
    Z: function () {
        return c;
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
function c(e, n) {
    let t = (0, a.a)(e),
        { canForwardMessages: c } = (0, r.yk)({ location: 'MessageActionsMenu' }, { autoTrackExposure: !1 });
    return t && c
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
