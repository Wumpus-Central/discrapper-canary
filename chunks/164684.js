n.d(t, { Y: () => A, x: () => m });
var i = n(627968),
    l = n(397927),
    a = n(157559),
    r = n(793574),
    s = n(203982),
    o = n(216623),
    d = n(85109),
    c = n(226017),
    u = n(652215);
n(811233);
var g = n(985018);
async function A(e) {
    let { displayToast: t = !1, ...A } = e;
    if (null == d.A.getSavedMessage(A.channelId, A.messageId) && !(0, c.A)())
        return void (0, l.mMO)(async () => {
            let { default: e } = await n.e("22540").then(n.bind(n, 530951));
            return (t) => (0, i.jsx)(e, { source: r.A.FOR_LATER_HELPERS, ...t });
        });
    if (
        null !=
            (await (0, o.oN)(A).catch(
                (e) => (
                    e?.body?.code === u.t02.TOO_MANY_SAVED_MESSAGES
                        ? a.A.show({
                              title: g.intl.string(g.t.mlbiZW),
                              body: g.intl.formatToPlainString(g.t["1zVbEG"], { max: 200 }),
                              cancelText: g.intl.string(g.t.BddRzS),
                              confirmText: g.intl.string(g.t.ZGbTcy),
                              onConfirm: () => s._.dispatch(u.jej.TOGGLE_FOR_LATER),
                          })
                        : (0, l.showToast)(
                              (0, l.createToast)(e?.body?.message ?? g.intl.string(g.t.R0RpRX), l.ToastType.FAILURE),
                          ),
                    null
                ),
            )) &&
        t
    ) {
        let e = null != A.dueAt ? g.intl.string(g.t.i1IsOy) : g.intl.string(g.t["WQdL/6"]),
            t = null != A.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t));
    }
}
async function m(e) {
    let { displayToast: t = !1, ...n } = e;
    if (
        null !=
            (await (0, o.cf)(n).catch(
                (e) => (
                    (0, l.showToast)(
                        (0, l.createToast)(e?.body?.message ?? g.intl.string(g.t.R0RpRX), l.ToastType.FAILURE),
                    ),
                    null
                ),
            )) &&
        t
    ) {
        let e = null != n.dueAt ? g.intl.string(g.t.D0tS02) : g.intl.string(g.t["5KOMiV"]),
            t = null != n.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t));
    }
}
