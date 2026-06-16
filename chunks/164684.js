e.d(n, { Y: () => m, x: () => C });
var i = e(627968),
    a = e(192308),
    l = e(691540),
    s = e(857250),
    r = e(97483),
    d = e(157559),
    u = e(625494),
    c = e(216623),
    o = e(85109),
    g = e(226017),
    h = e(652215);
e(811233);
var A = e(375708);
async function m(t) {
    let { displayToast: n = !1, ...m } = t;
    if (null == o.A.getSavedMessage(m.channelId, m.messageId) && !(0, g.A)())
        return void (0, a.openModalLazy)(async () => {
            let { default: t } = await Promise.all([e.e("22540"), e.e("63238")]).then(e.bind(e, 530951));
            return (n) => (0, i.jsx)(t, { ...n });
        });
    if (
        null !=
            (await (0, c.oN)(m).catch(
                (t) => (
                    t?.body?.code === h.t02.TOO_MANY_SAVED_MESSAGES
                        ? d.A.show({
                              title: A.intl.string(A.t.mlbiZW),
                              body: A.intl.formatToPlainString(A.t["1zVbEG"], { max: 200 }),
                              cancelText: A.intl.string(A.t.BddRzS),
                              confirmText: A.intl.string(A.t.ZGbTcy),
                              onConfirm: () => u._.dispatch(h.jej.TOGGLE_FOR_LATER),
                          })
                        : (0, l.P0)((0, s.o)(t?.body?.message ?? A.intl.string(A.t.R0RpRX), r.Ck.FAILURE)),
                    null
                ),
            )) &&
        n
    ) {
        let t = null != m.dueAt ? A.intl.string(A.t.i1IsOy) : A.intl.string(A.t["WQdL/6"]),
            n = null != m.dueAt ? r.Ck.CLOCK : r.Ck.BOOKMARK;
        (0, l.P0)((0, s.o)(t, n));
    }
}
async function C(t) {
    let { displayToast: n = !1, ...e } = t;
    if (
        null !=
            (await (0, c.cf)(e).catch(
                (t) => ((0, l.P0)((0, s.o)(t?.body?.message ?? A.intl.string(A.t.R0RpRX), r.Ck.FAILURE)), null),
            )) &&
        n
    ) {
        let t = null != e.dueAt ? A.intl.string(A.t.D0tS02) : A.intl.string(A.t["5KOMiV"]),
            n = null != e.dueAt ? r.Ck.CLOCK : r.Ck.BOOKMARK;
        (0, l.P0)((0, s.o)(t, n));
    }
}
