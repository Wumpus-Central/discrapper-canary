var i = t(477900);
t(582128);
var r = t(477782),
    l = t(7909),
    a = t(406704),
    d = t(652215),
    o = t(792996);
t.d(
    e,
    {},
    {
        A: function (n) {
            if (!(0, a.H_)(n) || n.type !== d.rbe.PRIVATE_THREAD) return null;
            let e = n.threadMetadata?.invitable ?? !0;
            return (0, i.jsx)(r.sL, {
                id: "toggle-thread-invitable",
                label: o.intl.string(o.t.s2rpNf),
                checked: e,
                action: () => l.A.setInvitable(n, !e),
            });
        },
    },
);
