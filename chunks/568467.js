e.d(n, { x: () => A, Y: () => h });
var i = e(873298),
    l = e(739187),
    a = e(857250),
    s = e(97483),
    r = e(157559),
    u = e(113367),
    d = e(625494),
    c = e(216623),
    o = e(652215),
    g = e(660183);
async function h(t) {
    let { displayToast: n = !1, ...e } = t;
    if (
        null !=
            (await (0, c.oN)(e).catch((t) => {
                if (t?.body?.code === o.t02.TOO_MANY_SAVED_MESSAGES) {
                    let t = null != e.dueAt;
                    return (
                        r.A.show({
                            title: g.intl.string(g.t.mlbiZW),
                            body: g.intl.formatToPlainString(t ? g.t.Anr1Dg : g.t["1zVbEG"], { max: t ? 50 : 500 }),
                            cancelText: g.intl.string(g.t.BddRzS),
                            confirmText: g.intl.string(g.t.ZGbTcy),
                            onConfirm: () => d._.dispatch(o.jej.TOGGLE_INBOX, t ? i.Y2.REMINDERS : i.Y2.BOOKMARKS),
                        }),
                        null
                    );
                }
                return ((0, l.P)((0, a.o)(t?.body?.message ?? g.intl.string(g.t.R0RpRX), s.Ck.FAILURE)), null);
            })) &&
        n
    ) {
        let t = null != e.dueAt ? g.intl.string(g.t.i1IsOy) : g.intl.string(g.t["WQdL/6"]),
            n = null != e.dueAt ? s.Ck.CLOCK : s.Ck.BOOKMARK;
        (0, u.Dc)({ message: t, icon: n });
    }
}
async function A(t) {
    let { displayToast: n = !1, isReminder: e, ...i } = t;
    if (
        null !=
            (await (0, c.cf)(i).catch(
                (t) => ((0, l.P)((0, a.o)(t?.body?.message ?? g.intl.string(g.t.R0RpRX), s.Ck.FAILURE)), null),
            )) &&
        n
    ) {
        let t = null != i.dueAt || e ? g.intl.string(g.t.D0tS02) : g.intl.string(g.t["5KOMiV"]),
            n = null != i.dueAt || e ? s.Ck.CLOCK : s.Ck.BOOKMARK;
        (0, u.Dc)({ message: t, icon: n });
    }
}
