l.d(t, { Y: () => h, x: () => _ });
var a = l(627968),
    n = l(397927),
    s = l(157559),
    i = l(793574),
    r = l(203982),
    A = l(216623),
    c = l(85109),
    u = l(226017),
    d = l(652215);
l(811233);
var o = l(985018);
async function h(e) {
    let { displayToast: t = !1, ...h } = e;
    if (null == c.A.getSavedMessage(h.channelId, h.messageId) && !(0, u.A)())
        return void (0, n.mMO)(async () => {
            let { default: e } = await l.e("159").then(l.bind(l, 530951));
            return (t) => (0, a.jsx)(e, { source: i.A.FOR_LATER_HELPERS, ...t });
        });
    if (
        null !=
            (await (0, A.oN)(h).catch(
                (e) => (
                    e?.body?.code === d.t02.TOO_MANY_SAVED_MESSAGES
                        ? s.A.show({
                              title: o.intl.string(o.t.mlbiZW),
                              body: o.intl.formatToPlainString(o.t["1zVbEG"], { max: 200 }),
                              cancelText: o.intl.string(o.t.BddRzS),
                              confirmText: o.intl.string(o.t.ZGbTcy),
                              onConfirm: () => r._.dispatch(d.jej.TOGGLE_FOR_LATER),
                          })
                        : (0, n.showToast)(
                              (0, n.createToast)(e?.body?.message ?? o.intl.string(o.t.R0RpRX), n.ToastType.FAILURE),
                          ),
                    null
                ),
            )) &&
        t
    ) {
        let e = null != h.dueAt ? o.intl.string(o.t.i1IsOy) : o.intl.string(o.t["WQdL/6"]),
            t = null != h.dueAt ? n.ToastType.CLOCK : n.ToastType.BOOKMARK;
        (0, n.showToast)((0, n.createToast)(e, t));
    }
}
async function _(e) {
    let { displayToast: t = !1, ...l } = e;
    if (
        null !=
            (await (0, A.cf)(l).catch(
                (e) => (
                    (0, n.showToast)(
                        (0, n.createToast)(e?.body?.message ?? o.intl.string(o.t.R0RpRX), n.ToastType.FAILURE),
                    ),
                    null
                ),
            )) &&
        t
    ) {
        let e = null != l.dueAt ? o.intl.string(o.t.D0tS02) : o.intl.string(o.t["5KOMiV"]),
            t = null != l.dueAt ? n.ToastType.CLOCK : n.ToastType.BOOKMARK;
        (0, n.showToast)((0, n.createToast)(e, t));
    }
}
