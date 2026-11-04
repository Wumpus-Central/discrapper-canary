var i = n(477900);
n(582128);
var r = n(855986),
    l = n(192308),
    a = n(477782),
    d = n(964404),
    u = n(469707),
    s = n(513963),
    c = n(951829),
    f = n(792996);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let [n, o, A] = (0, u.A)(e, t),
                b = (0, r.bG)([d.Ay], () => d.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
            return n
                ? (0, i.jsx)(a.sL, {
                      id: "self-stream-hide",
                      label: f.intl.string(f.t.aol7iW),
                      checked: !o,
                      action: function () {
                          if (b || o) return A(!o);
                          (0, l.qf)((e) => (0, i.jsx)(s.A, { ...e, type: c.f.STREAM, onConfirm: () => A(!o) }));
                      },
                  })
                : null;
        },
    },
);
