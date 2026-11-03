n.d(e, { x: () => g, Y: () => u });
var i = n(873298),
    a = n(858899),
    r = n(157559),
    l = n(113367),
    s = n(625494),
    c = n(216623),
    d = n(652215),
    o = n(105292);
async function u(t) {
    let { displayToast: e = !1, ...n } = t;
    if (
        null !=
            (await (0, c.oN)(n).catch((t) => {
                if (t?.body?.code === d.t02.TOO_MANY_SAVED_MESSAGES) {
                    let t = null != n.dueAt;
                    return (
                        r.A.show({
                            title: o.intl.string(o.t.mlbiZW),
                            body: o.intl.formatToPlainString(t ? o.t.Anr1Dg : o.t["1zVbEG"], { max: t ? 50 : 500 }),
                            cancelText: o.intl.string(o.t.BddRzS),
                            confirmText: o.intl.string(o.t.ZGbTcy),
                            onConfirm: () => s._.dispatch(d.jej.TOGGLE_INBOX, t ? i.Y2.REMINDERS : i.Y2.BOOKMARKS),
                        }),
                        null
                    );
                }
                return ((0, a.P0)({ text: t?.body?.message ?? o.intl.string(o.t.R0RpRX), variant: "critical" }), null);
            })) &&
        e
    ) {
        let t = null != n.dueAt ? o.intl.string(o.t.i1IsOy) : o.intl.string(o.t["WQdL/6"]),
            e = null != n.dueAt ? "clock" : "bookmark";
        (0, l.Dc)({ message: t, icon: e });
    }
}
async function g(t) {
    let { displayToast: e = !1, isReminder: n, ...i } = t;
    if (
        null !=
            (await (0, c.cf)(i).catch(
                (t) => ((0, a.P0)({ text: t?.body?.message ?? o.intl.string(o.t.R0RpRX), variant: "critical" }), null),
            )) &&
        e
    ) {
        let t = null != i.dueAt || n ? o.intl.string(o.t.D0tS02) : o.intl.string(o.t["5KOMiV"]),
            e = null != i.dueAt || n ? "clock" : "bookmark";
        (0, l.Dc)({ message: t, icon: e });
    }
}
