n.d(i, { default: () => s });
var a = n(627968);
n(64700);
var r = n(732159),
    e = n(435183),
    o = n(375708);
let s = function (t) {
    let { channelId: i, application: n, onClose: s, ...c } = t;
    async function l(t) {
        try {
            await e.Ay.removeLinkedLobby(i);
        } catch (i) {
            throw (t(o.intl.string(o.t["6D5WVg"])), i);
        }
    }
    return (0, a.jsx)(r.ConfirmModal, {
        title: o.intl.string(o.t.JmUENg),
        subtitle: o.intl.format(o.t["6l2osp"], { applicationName: n.name }),
        confirmText: o.intl.string(o.t["cY+Oob"]),
        cancelText: o.intl.string(o.t["ETE/oC"]),
        onConfirm: l,
        onClose: s,
        ...c,
        variant: "primary",
    });
};
