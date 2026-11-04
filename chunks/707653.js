var i = e(477900);
e(582128);
var r = e(477782),
    a = e(7909),
    l = e(406704),
    d = e(652215),
    s = e(792996);
e.d(
    n,
    {},
    {
        A: function (t) {
            if (!(0, l.H_)(t) || t.type !== d.rbe.PRIVATE_THREAD) return null;
            let n = t.threadMetadata?.invitable ?? !0;
            return (0, i.jsx)(r.sL, {
                id: "toggle-thread-invitable",
                label: s.intl.string(s.t.s2rpNf),
                checked: n,
                action: () => a.A.setInvitable(t, !n),
            });
        },
    },
);
