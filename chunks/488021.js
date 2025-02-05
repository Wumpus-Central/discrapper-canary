n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(846027),
    s = n(253052),
    o = n(131951),
    u = n(388032);
function c(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        c = (0, s.Z)(),
        d = (0, i.e7)([o.Z], () => o.Z.getOutputDeviceId()),
        m = null === (t = c[d]) || void 0 === t ? void 0 : t.name,
        f = Object.values(c).map((t) => {
            let { id: n, disabled: i, name: s } = t;
            return (0, l.jsx)(
                r.k5B,
                {
                    group: 'output-devices',
                    id: 'output-'.concat(n),
                    disabled: i,
                    label: s,
                    checked: n === d,
                    action: () => a.Z.setOutputDevice(n, { analyticsLocations: e })
                },
                'output-'.concat(n)
            );
        });
    return n
        ? (0, l.jsx)(r.sNh, {
              id: 'output-devices',
              label: u.intl.string(u.t['6Ww0iI']),
              subtext: m,
              children: f
          })
        : (0, l.jsx)(r.kSQ, {
              label: u.intl.string(u.t['6Ww0iI']),
              children: f
          });
}
