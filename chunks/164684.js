"use strict";
s.d(t, { Y: () => g, x: () => h });
var n = s(627968),
    i = s(397927),
    r = s(157559),
    a = s(793574),
    l = s(203982),
    c = s(216623),
    o = s(85109),
    d = s(226017),
    u = s(652215);
s(811233);
var p = s(985018);
async function g(e) {
    let { displayToast: t = !1, ...g } = e;
    if (null == o.A.getSavedMessage(g.channelId, g.messageId) && !(0, d.A)())
        return void (0, i.mMO)(async () => {
            let { default: e } = await s.e("159").then(s.bind(s, 530951));
            return (t) => (0, n.jsx)(e, { source: a.A.FOR_LATER_HELPERS, ...t });
        });
    if (
        null !=
            (await (0, c.oN)(g).catch(
                (e) => (
                    e?.body?.code === u.t02.TOO_MANY_SAVED_MESSAGES
                        ? r.A.show({
                              title: p.intl.string(p.t.mlbiZW),
                              body: p.intl.formatToPlainString(p.t["1zVbEG"], { max: 200 }),
                              cancelText: p.intl.string(p.t.BddRzS),
                              confirmText: p.intl.string(p.t.ZGbTcy),
                              onConfirm: () => l._.dispatch(u.jej.TOGGLE_FOR_LATER),
                          })
                        : (0, i.showToast)(
                              (0, i.createToast)(e?.body?.message ?? p.intl.string(p.t.R0RpRX), i.ToastType.FAILURE),
                          ),
                    null
                ),
            )) &&
        t
    ) {
        let e = null != g.dueAt ? p.intl.string(p.t.i1IsOy) : p.intl.string(p.t["WQdL/6"]),
            t = null != g.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
        (0, i.showToast)((0, i.createToast)(e, t));
    }
}
async function h(e) {
    let { displayToast: t = !1, ...s } = e;
    if (
        null !=
            (await (0, c.cf)(s).catch(
                (e) => (
                    (0, i.showToast)(
                        (0, i.createToast)(e?.body?.message ?? p.intl.string(p.t.R0RpRX), i.ToastType.FAILURE),
                    ),
                    null
                ),
            )) &&
        t
    ) {
        let e = null != s.dueAt ? p.intl.string(p.t.D0tS02) : p.intl.string(p.t["5KOMiV"]),
            t = null != s.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
        (0, i.showToast)((0, i.createToast)(e, t));
    }
}
