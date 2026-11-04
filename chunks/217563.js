var e = t(477900);
t(582128);
var l = t(855986),
    a = t(477782),
    c = t(597798),
    s = t(308877),
    r = t(984813),
    o = t(576705),
    u = t(309010),
    d = t(652215),
    A = t(792996);
t.d(
    i,
    {},
    {
        A: function (n, i) {
            let t = (0, l.bG)([o.A], () => o.A.can(d.xBc.CONNECT, n), [n]),
                b = (0, l.bG)([u.Ay], () => u.Ay.getVoiceChannelId()),
                g = (0, r.mz)(i),
                h = b === n.id;
            return n.isGuildVocal() && t && null != g && !h
                ? (0, e.jsx)(a.Dr, {
                      id: "join-muted-custom-join-sound",
                      label: A.intl.string(A.t.saLMWc),
                      action: () => {
                          ((0, s.A)(n.id), c.default.selectVoiceChannel(n.id));
                      },
                  })
                : null;
        },
    },
);
