e.d(n, { Y: () => R, x: () => f });
var l = e(477900),
    i = e(873298),
    a = e(192308),
    s = e(691540),
    d = e(857250),
    r = e(97483),
    u = e(157559),
    c = e(113367),
    o = e(625494),
    g = e(8506),
    A = e(216623),
    O = e(85109),
    p = e(652215),
    C = e(375708);
async function R(t) {
    let { displayToast: n = !1, ...R } = t;
    if (null == O.A.getSavedMessage(R.channelId, R.messageId) && !(0, g.we)("addOrUpdateSavedMessage"))
        return void (0, a.openModalLazy)(async () => {
            let { default: t } = await Promise.all([e.e("22540"), e.e("63238")]).then(e.bind(e, 530951));
            return (n) => (0, l.jsx)(t, { ...n });
        });
    if (
        null !=
            (await (0, A.oN)(R).catch((t) => {
                if (t?.body?.code === p.t02.TOO_MANY_SAVED_MESSAGES) {
                    let t = null != R.dueAt;
                    return (
                        u.A.show({
                            title: C.intl.string(C.t.mlbiZW),
                            body: C.intl.formatToPlainString(t ? C.t.Anr1Dg : C.t["1zVbEG"], {
                                max: (0, g.lF)("addOrUpdateSavedMessage", t),
                            }),
                            cancelText: C.intl.string(C.t.BddRzS),
                            confirmText: C.intl.string(C.t.ZGbTcy),
                            onConfirm: () => o._.dispatch(p.jej.TOGGLE_INBOX, i.Y2.BOOKMARKS),
                        }),
                        null
                    );
                }
                return (0, s.P0)((0, d.o)(t?.body?.message ?? C.intl.string(C.t.R0RpRX), r.Ck.FAILURE)), null;
            })) &&
        n
    ) {
        let t = null != R.dueAt ? C.intl.string(C.t.i1IsOy) : C.intl.string(C.t["WQdL/6"]),
            n = null != R.dueAt ? r.Ck.CLOCK : r.Ck.BOOKMARK;
        (0, c.Dc)({ message: t, icon: n });
    }
}
async function f(t) {
    let { displayToast: n = !1, isReminder: e, ...l } = t;
    if (
        null !=
            (await (0, A.cf)(l).catch(
                (t) => ((0, s.P0)((0, d.o)(t?.body?.message ?? C.intl.string(C.t.R0RpRX), r.Ck.FAILURE)), null),
            )) &&
        n
    ) {
        let t = null != l.dueAt || e ? C.intl.string(C.t.D0tS02) : C.intl.string(C.t["5KOMiV"]),
            n = null != l.dueAt || e ? r.Ck.CLOCK : r.Ck.BOOKMARK;
        (0, c.Dc)({ message: t, icon: n });
    }
}
