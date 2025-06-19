n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(846027),
    o = n(679613),
    s = n(72897),
    c = n(131951),
    u = n(388032);
function d(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { sortDevicesByFrecency: d } = (0, o._)({ location: 'useOutputAudioDeviceItems' }),
        f = (0, s.rB)({ sortDevicesByFrecency: d }),
        p = (0, i.e7)([c.Z], c.Z.getOutputDeviceId),
        m =
            null ==
            (t = f.find((e) => {
                let { id: t } = e;
                return t === p;
            }))
                ? void 0
                : t.name,
        g = f.map((t) => {
            let { id: n, disabled: i, name: o } = t;
            return (0, r.jsx)(
                l.k5B,
                {
                    group: 'output-devices',
                    id: 'output-'.concat(n),
                    disabled: i,
                    label: o,
                    checked: n === p,
                    action: () => a.Z.setOutputDevice(n, { analyticsLocations: e })
                },
                'output-'.concat(n)
            );
        });
    return n
        ? (0, r.jsx)(l.sNh, {
              id: 'output-devices',
              label: u.intl.string(u.t['6Ww0iI']),
              subtext: m,
              children: g
          })
        : (0, r.jsx)(l.kSQ, {
              label: u.intl.string(u.t['6Ww0iI']),
              children: g
          });
}
