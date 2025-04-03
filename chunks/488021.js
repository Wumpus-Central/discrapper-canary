n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(846027),
    a = n(253052),
    s = n(131951),
    c = n(388032);
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        u = (0, a.Z)(),
        d = (0, l.e7)([s.Z], () => s.Z.getOutputDeviceId()),
        p = null == (t = u[d]) ? void 0 : t.name,
        f = Object.values(u).map((t) => {
            let { id: n, disabled: l, name: a } = t;
            return (0, r.jsx)(
                i.k5B,
                {
                    group: 'output-devices',
                    id: 'output-'.concat(n),
                    disabled: l,
                    label: a,
                    checked: n === d,
                    action: () => o.Z.setOutputDevice(n, { analyticsLocations: e })
                },
                'output-'.concat(n)
            );
        });
    return n
        ? (0, r.jsx)(i.sNh, {
              id: 'output-devices',
              label: c.NW.string(c.t['6Ww0iI']),
              subtext: p,
              children: f
          })
        : (0, r.jsx)(i.kSQ, {
              label: c.NW.string(c.t['6Ww0iI']),
              children: f
          });
}
