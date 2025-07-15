n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(846027),
    o = n(72897),
    s = n(131951),
    c = n(388032);
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        u = (0, o.rB)({ location: 'useOutputAudioDeviceItems' }),
        d = (0, i.e7)([s.Z], s.Z.getOutputDeviceId),
        f =
            null ==
            (t = u.find((e) => {
                let { id: t } = e;
                return t === d;
            }))
                ? void 0
                : t.name,
        p = u.map((t) => {
            let { id: n, disabled: i, name: o } = t;
            return (0, r.jsx)(
                l.k5B,
                {
                    group: 'output-devices',
                    id: 'output-'.concat(n),
                    disabled: i,
                    label: o,
                    checked: n === d,
                    action: () => a.Z.setOutputDevice(n, { analyticsLocations: e })
                },
                'output-'.concat(n)
            );
        });
    return n
        ? (0, r.jsx)(l.sNh, {
              id: 'output-devices',
              label: c.intl.string(c.t['6Ww0iI']),
              subtext: f,
              children: p
          })
        : (0, r.jsx)(l.kSQ, {
              label: c.intl.string(c.t['6Ww0iI']),
              children: p
          });
}
