n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(846027),
    a = n(72897),
    s = n(131951),
    c = n(388032);
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        u = (0, a.rB)({ location: 'useOutputAudioDeviceItems' }),
        d = (0, i.e7)([s.Z], s.Z.getOutputDeviceId),
        p =
            null ==
            (t = u.find((e) => {
                let { id: t } = e;
                return t === d;
            }))
                ? void 0
                : t.name,
        f = u.map((t) => {
            let { id: n, disabled: i, name: a } = t;
            return (0, r.jsx)(
                l.k5B,
                {
                    group: 'output-devices',
                    id: 'output-'.concat(n),
                    disabled: i,
                    label: a,
                    checked: n === d,
                    action: () => o.Z.setOutputDevice(n, { analyticsLocations: e })
                },
                'output-'.concat(n)
            );
        });
    return n
        ? (0, r.jsx)(l.sNh, {
              id: 'output-devices',
              label: c.intl.string(c.t['6Ww0iI']),
              subtext: p,
              children: f
          })
        : (0, r.jsx)(l.kSQ, {
              label: c.intl.string(c.t['6Ww0iI']),
              children: f
          });
}
