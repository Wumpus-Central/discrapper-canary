n.d(t, { Y: () => m, x: () => f });
var i = n(627968),
    l = n(192308),
    a = n(691540),
    r = n(857250),
    s = n(97483),
    o = n(157559),
    d = n(203982),
    c = n(216623),
    u = n(85109),
    g = n(226017),
    A = n(652215);
n(811233);
var h = n(985018);
async function m(e) {
    let { displayToast: t = !1, ...m } = e;
    if (null == u.A.getSavedMessage(m.channelId, m.messageId) && !(0, g.A)())
        return void (0, l.openModalLazy)(async () => {
            let { default: e } = await n.e("22540").then(n.bind(n, 530951));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    if (
        null !=
            (await (0, c.oN)(m).catch(
                (e) => (
                    e?.body?.code === A.t02.TOO_MANY_SAVED_MESSAGES
                        ? o.A.show({
                              title: h.intl.string(h.t.mlbiZW),
                              body: h.intl.formatToPlainString(h.t["1zVbEG"], { max: 200 }),
                              cancelText: h.intl.string(h.t.BddRzS),
                              confirmText: h.intl.string(h.t.ZGbTcy),
                              onConfirm: () => d._.dispatch(A.jej.TOGGLE_FOR_LATER),
                          })
                        : (0, a.P0)((0, r.o)(e?.body?.message ?? h.intl.string(h.t.R0RpRX), s.Ck.FAILURE)),
                    null
                ),
            )) &&
        t
    ) {
        let e = null != m.dueAt ? h.intl.string(h.t.i1IsOy) : h.intl.string(h.t["WQdL/6"]),
            t = null != m.dueAt ? s.Ck.CLOCK : s.Ck.BOOKMARK;
        (0, a.P0)((0, r.o)(e, t));
    }
}
async function f(e) {
    let { displayToast: t = !1, ...n } = e;
    if (
        null !=
            (await (0, c.cf)(n).catch(
                (e) => ((0, a.P0)((0, r.o)(e?.body?.message ?? h.intl.string(h.t.R0RpRX), s.Ck.FAILURE)), null),
            )) &&
        t
    ) {
        let e = null != n.dueAt ? h.intl.string(h.t.D0tS02) : h.intl.string(h.t["5KOMiV"]),
            t = null != n.dueAt ? s.Ck.CLOCK : s.Ck.BOOKMARK;
        (0, a.P0)((0, r.o)(e, t));
    }
}
