e.d(n, { x: () => g, Y: () => o });
var i = e(873298),
    l = e(376357),
    a = e(157559),
    s = e(113367),
    r = e(625494),
    u = e(216623),
    d = e(652215),
    c = e(660183);
async function o(t) {
    let { displayToast: n = !1, ...e } = t;
    if (
        null !=
            (await (0, u.oN)(e).catch((t) => {
                if (t?.body?.code === d.t02.TOO_MANY_SAVED_MESSAGES) {
                    let t = null != e.dueAt;
                    return (
                        a.A.show({
                            title: c.intl.string(c.t.mlbiZW),
                            body: c.intl.formatToPlainString(t ? c.t.Anr1Dg : c.t["1zVbEG"], { max: t ? 50 : 500 }),
                            cancelText: c.intl.string(c.t.BddRzS),
                            confirmText: c.intl.string(c.t.ZGbTcy),
                            onConfirm: () => r._.dispatch(d.jej.TOGGLE_INBOX, t ? i.Y2.REMINDERS : i.Y2.BOOKMARKS),
                        }),
                        null
                    );
                }
                return ((0, l.P0)((0, l.ox)(t?.body?.message ?? c.intl.string(c.t.R0RpRX), l.Ck.FAILURE)), null);
            })) &&
        n
    ) {
        let t = null != e.dueAt ? c.intl.string(c.t.i1IsOy) : c.intl.string(c.t["WQdL/6"]),
            n = null != e.dueAt ? l.Ck.CLOCK : l.Ck.BOOKMARK;
        (0, s.Dc)({ message: t, icon: n });
    }
}
async function g(t) {
    let { displayToast: n = !1, isReminder: e, ...i } = t;
    if (
        null !=
            (await (0, u.cf)(i).catch(
                (t) => ((0, l.P0)((0, l.ox)(t?.body?.message ?? c.intl.string(c.t.R0RpRX), l.Ck.FAILURE)), null),
            )) &&
        n
    ) {
        let t = null != i.dueAt || e ? c.intl.string(c.t.D0tS02) : c.intl.string(c.t["5KOMiV"]),
            n = null != i.dueAt || e ? l.Ck.CLOCK : l.Ck.BOOKMARK;
        (0, s.Dc)({ message: t, icon: n });
    }
}
