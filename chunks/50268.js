var i = t(477900);
t(582128);
var c = t(284009),
    l = t.n(c),
    s = t(477782),
    o = t(473935),
    d = t(253932),
    a = t(957565);
t.d(
    e,
    {},
    {
        A: function (n) {
            let { id: e, label: t, onSuccess: c, shiftId: h, showIconFirst: r, showWithoutDeveloperMode: u } = n,
                p = d.Q_.useSetting();
            if (__OVERLAY__ || !(u || p) || !a.p5 || null == e) return null;
            let v = `devmode-copy-id-${e}`;
            return (0, i.jsx)(
                s.Dr,
                {
                    id: v,
                    label: t,
                    action: function (n) {
                        let t = null != h && n.shiftKey ? h : e;
                        (l()(null != t, "cannot copy null text"), (0, a.C)(t, c));
                    },
                    icon: r ? void 0 : o.IdIcon,
                    iconLeft: r ? o.IdIcon : void 0,
                    leadingAccessory: { type: "icon", icon: o.IdIcon },
                },
                v,
            );
        },
    },
);
