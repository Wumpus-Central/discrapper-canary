n.d(t, { Y: () => g, x: () => A });
var i = n(627968),
    l = n(397927),
    a = n(157559),
    r = n(203982),
    s = n(216623),
    o = n(85109),
    d = n(226017),
    c = n(652215);
n(811233);
var u = n(985018);
async function g(e) {
    let { displayToast: t = !1, ...g } = e;
    if (null == o.A.getSavedMessage(g.channelId, g.messageId) && !(0, d.A)())
        return void (0, l.mMO)(async () => {
            let { default: e } = await n.e("22540").then(n.bind(n, 530951));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    if (
        null !=
            (await (0, s.oN)(g).catch(
                (e) => (
                    e?.body?.code === c.t02.TOO_MANY_SAVED_MESSAGES
                        ? a.A.show({
                              title: u.intl.string(u.t.mlbiZW),
                              body: u.intl.formatToPlainString(u.t["1zVbEG"], { max: 200 }),
                              cancelText: u.intl.string(u.t.BddRzS),
                              confirmText: u.intl.string(u.t.ZGbTcy),
                              onConfirm: () => r._.dispatch(c.jej.TOGGLE_FOR_LATER),
                          })
                        : (0, l.showToast)(
                              (0, l.createToast)(e?.body?.message ?? u.intl.string(u.t.R0RpRX), l.ToastType.FAILURE),
                          ),
                    null
                ),
            )) &&
        t
    ) {
        let e = null != g.dueAt ? u.intl.string(u.t.i1IsOy) : u.intl.string(u.t["WQdL/6"]),
            t = null != g.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t));
    }
}
async function A(e) {
    let { displayToast: t = !1, ...n } = e;
    if (
        null !=
            (await (0, s.cf)(n).catch(
                (e) => (
                    (0, l.showToast)(
                        (0, l.createToast)(e?.body?.message ?? u.intl.string(u.t.R0RpRX), l.ToastType.FAILURE),
                    ),
                    null
                ),
            )) &&
        t
    ) {
        let e = null != n.dueAt ? u.intl.string(u.t.D0tS02) : u.intl.string(u.t["5KOMiV"]),
            t = null != n.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t));
    }
}
