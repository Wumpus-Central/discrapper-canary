e.d(n, { x: () => g, Y: () => o });
var i = e(873298),
    a = e(858899),
    l = e(157559),
    r = e(113367),
    s = e(625494),
    c = e(216623),
    u = e(652215),
    d = e(105292);
async function o(t) {
    let { displayToast: n = !1, ...e } = t;
    if (
        null !=
            (await (0, c.oN)(e).catch((t) => {
                if (t?.body?.code === u.t02.TOO_MANY_SAVED_MESSAGES) {
                    let t = null != e.dueAt;
                    return (
                        l.A.show({
                            title: d.intl.string(d.t.mlbiZW),
                            body: d.intl.formatToPlainString(t ? d.t.Anr1Dg : d.t["1zVbEG"], { max: t ? 50 : 500 }),
                            cancelText: d.intl.string(d.t.BddRzS),
                            confirmText: d.intl.string(d.t.ZGbTcy),
                            onConfirm: () => s._.dispatch(u.jej.TOGGLE_INBOX, t ? i.Y2.REMINDERS : i.Y2.BOOKMARKS),
                        }),
                        null
                    );
                }
                return ((0, a.P0)({ text: t?.body?.message ?? d.intl.string(d.t.R0RpRX), variant: "critical" }), null);
            })) &&
        n
    ) {
        let t = null != e.dueAt ? d.intl.string(d.t.i1IsOy) : d.intl.string(d.t["WQdL/6"]),
            n = null != e.dueAt ? "clock" : "bookmark";
        (0, r.Dc)({ message: t, icon: n });
    }
}
async function g(t) {
    let { displayToast: n = !1, isReminder: e, ...i } = t;
    if (
        null !=
            (await (0, c.cf)(i).catch(
                (t) => ((0, a.P0)({ text: t?.body?.message ?? d.intl.string(d.t.R0RpRX), variant: "critical" }), null),
            )) &&
        n
    ) {
        let t = null != i.dueAt || e ? d.intl.string(d.t.D0tS02) : d.intl.string(d.t["5KOMiV"]),
            n = null != i.dueAt || e ? "clock" : "bookmark";
        (0, r.Dc)({ message: t, icon: n });
    }
}
