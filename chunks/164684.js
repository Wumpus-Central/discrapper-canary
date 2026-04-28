i.d(n, { Y: () => R, x: () => O });
var l = i(627968),
    e = i(192308),
    a = i(691540),
    s = i(857250),
    d = i(97483),
    o = i(157559),
    r = i(625494),
    c = i(216623),
    u = i(85109),
    g = i(226017),
    A = i(652215);
i(811233);
var C = i(985018);
async function R(t) {
    let { displayToast: n = !1, ...R } = t;
    if (null == u.A.getSavedMessage(R.channelId, R.messageId) && !(0, g.A)())
        return void (0, e.openModalLazy)(async () => {
            let { default: t } = await Promise.all([i.e("63238"), i.e("22540")]).then(i.bind(i, 530951));
            return (n) => (0, l.jsx)(t, { ...n });
        });
    if (
        null !=
            (await (0, c.oN)(R).catch(
                (t) => (
                    t?.body?.code === A.t02.TOO_MANY_SAVED_MESSAGES
                        ? o.A.show({
                              title: C.intl.string(C.t.mlbiZW),
                              body: C.intl.formatToPlainString(C.t["1zVbEG"], { max: 200 }),
                              cancelText: C.intl.string(C.t.BddRzS),
                              confirmText: C.intl.string(C.t.ZGbTcy),
                              onConfirm: () => r._.dispatch(A.jej.TOGGLE_FOR_LATER),
                          })
                        : (0, a.P0)((0, s.o)(t?.body?.message ?? C.intl.string(C.t.R0RpRX), d.Ck.FAILURE)),
                    null
                ),
            )) &&
        n
    ) {
        let t = null != R.dueAt ? C.intl.string(C.t.i1IsOy) : C.intl.string(C.t["WQdL/6"]),
            n = null != R.dueAt ? d.Ck.CLOCK : d.Ck.BOOKMARK;
        (0, a.P0)((0, s.o)(t, n));
    }
}
async function O(t) {
    let { displayToast: n = !1, ...i } = t;
    if (
        null !=
            (await (0, c.cf)(i).catch(
                (t) => ((0, a.P0)((0, s.o)(t?.body?.message ?? C.intl.string(C.t.R0RpRX), d.Ck.FAILURE)), null),
            )) &&
        n
    ) {
        let t = null != i.dueAt ? C.intl.string(C.t.D0tS02) : C.intl.string(C.t["5KOMiV"]),
            n = null != i.dueAt ? d.Ck.CLOCK : d.Ck.BOOKMARK;
        (0, a.P0)((0, s.o)(t, n));
    }
}
