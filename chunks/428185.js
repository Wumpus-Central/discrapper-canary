var a = n(477900);
n(582128);
var r = n(732159),
    e = n(435183),
    o = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { channelId: i, application: n, onClose: s, ...c } = t;
            return (0, a.jsx)(r.u, {
                title: o.intl.string(o.t.JmUENg),
                subtitle: o.intl.format(o.t["6l2osp"], { applicationName: n.name }),
                confirmText: o.intl.string(o.t["cY+Oob"]),
                cancelText: o.intl.string(o.t["ETE/oC"]),
                onConfirm: async function (t) {
                    try {
                        await e.Ay.removeLinkedLobby(i);
                    } catch (i) {
                        throw (t(o.intl.string(o.t["6D5WVg"])), i);
                    }
                },
                onClose: s,
                ...c,
                variant: "primary",
            });
        },
    },
);
