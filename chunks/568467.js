n.d(e, { x: () => g, Y: () => c });
var a = n(873298),
    r = n(858899),
    i = n(157559),
    l = n(113367),
    s = n(625494),
    d = n(216623),
    o = n(652215),
    u = n(105292);
async function c(t) {
    let { displayToast: e = !1, ...n } = t;
    if (
        null !=
            (await (0, d.oN)(n).catch((t) => {
                if (t?.body?.code === o.t02.TOO_MANY_SAVED_MESSAGES) {
                    let t = null != n.dueAt;
                    return (
                        i.A.show({
                            title: u.intl.string(u.t.mlbiZW),
                            body: u.intl.formatToPlainString(t ? u.t.Anr1Dg : u.t["1zVbEG"], { max: t ? 50 : 500 }),
                            cancelText: u.intl.string(u.t.BddRzS),
                            confirmText: u.intl.string(u.t.ZGbTcy),
                            onConfirm: () => s._.dispatch(o.jej.TOGGLE_INBOX, t ? a.Y2.REMINDERS : a.Y2.BOOKMARKS),
                        }),
                        null
                    );
                }
                return ((0, r.P0)({ text: t?.body?.message ?? u.intl.string(u.t.R0RpRX), variant: "critical" }), null);
            })) &&
        e
    ) {
        let t = null != n.dueAt ? u.intl.string(u.t.i1IsOy) : u.intl.string(u.t["WQdL/6"]),
            e = null != n.dueAt ? "clock" : "bookmark";
        (0, l.Dc)({ message: t, icon: e });
    }
}
async function g(t) {
    let { displayToast: e = !1, isReminder: n, ...a } = t;
    if (
        null !=
            (await (0, d.cf)(a).catch(
                (t) => ((0, r.P0)({ text: t?.body?.message ?? u.intl.string(u.t.R0RpRX), variant: "critical" }), null),
            )) &&
        e
    ) {
        let t = null != a.dueAt || n ? u.intl.string(u.t.D0tS02) : u.intl.string(u.t["5KOMiV"]),
            e = null != a.dueAt || n ? "clock" : "bookmark";
        (0, l.Dc)({ message: t, icon: e });
    }
}
