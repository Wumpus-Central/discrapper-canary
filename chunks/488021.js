n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(846027),
    s = n(253052),
    o = n(131951),
    c = n(388032);
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        u = (0, s.Z)(),
        d = (0, l.e7)([o.Z], () => o.Z.getOutputDeviceId()),
        m = null === (t = u[d]) || void 0 === t ? void 0 : t.name,
        f = Object.values(u).map((t) => {
            let { id: n, disabled: l, name: s } = t;
            return (0, i.jsx)(
                a.k5B,
                {
                    group: 'output-devices',
                    id: 'output-'.concat(n),
                    disabled: l,
                    label: s,
                    checked: n === d,
                    action: () => r.Z.setOutputDevice(n, { analyticsLocations: e })
                },
                'output-'.concat(n)
            );
        });
    return n
        ? (0, i.jsx)(a.sNh, {
              id: 'output-devices',
              label: c.intl.string(c.t['6Ww0iI']),
              subtext: m,
              children: f
          })
        : (0, i.jsx)(a.kSQ, {
              label: c.intl.string(c.t['6Ww0iI']),
              children: f
          });
}
