e.d(n, { Y: () => m, x: () => C });
var i = e(627968),
    a = e(873298),
    l = e(192308),
    s = e(691540),
    r = e(857250),
    d = e(97483),
    u = e(157559),
    c = e(625494),
    o = e(216623),
    g = e(85109),
    h = e(226017),
    A = e(652215);
e(811233);
var O = e(375708);
async function m(t) {
    let { displayToast: n = !1, ...m } = t;
    if (null == g.A.getSavedMessage(m.channelId, m.messageId) && !(0, h.A)())
        return void (0, l.openModalLazy)(async () => {
            let { default: t } = await Promise.all([e.e("22540"), e.e("63238")]).then(e.bind(e, 530951));
            return (n) => (0, i.jsx)(t, { ...n });
        });
    if (
        null !=
            (await (0, o.oN)(m).catch(
                (t) => (
                    t?.body?.code === A.t02.TOO_MANY_SAVED_MESSAGES
                        ? u.A.show({
                              title: O.intl.string(O.t.mlbiZW),
                              body: O.intl.formatToPlainString(O.t["1zVbEG"], { max: 200 }),
                              cancelText: O.intl.string(O.t.BddRzS),
                              confirmText: O.intl.string(O.t.ZGbTcy),
                              onConfirm: () => c._.dispatch(A.jej.TOGGLE_INBOX, a.Y2.BOOKMARKS),
                          })
                        : (0, s.P0)((0, r.o)(t?.body?.message ?? O.intl.string(O.t.R0RpRX), d.Ck.FAILURE)),
                    null
                ),
            )) &&
        n
    ) {
        let t = null != m.dueAt ? O.intl.string(O.t.i1IsOy) : O.intl.string(O.t["WQdL/6"]),
            n = null != m.dueAt ? d.Ck.CLOCK : d.Ck.BOOKMARK;
        (0, s.P0)((0, r.o)(t, n));
    }
}
async function C(t) {
    let { displayToast: n = !1, isReminder: e, ...i } = t;
    if (
        null !=
            (await (0, o.cf)(i).catch(
                (t) => ((0, s.P0)((0, r.o)(t?.body?.message ?? O.intl.string(O.t.R0RpRX), d.Ck.FAILURE)), null),
            )) &&
        n
    ) {
        let t = null != i.dueAt || e ? O.intl.string(O.t.D0tS02) : O.intl.string(O.t["5KOMiV"]),
            n = null != i.dueAt || e ? d.Ck.CLOCK : d.Ck.BOOKMARK;
        (0, s.P0)((0, r.o)(t, n));
    }
}
