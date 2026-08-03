n.d(e, { Y: () => C, x: () => M });
var a = n(477900),
    l = n(873298),
    i = n(192308),
    d = n(691540),
    s = n(857250),
    r = n(97483),
    u = n(157559),
    c = n(113367),
    o = n(625494),
    g = n(269073),
    O = n(216623),
    p = n(85109),
    A = n(652215),
    f = n(375708);
async function C(t) {
    let { displayToast: e = !1, ...C } = t;
    if (null == p.A.getSavedMessage(C.channelId, C.messageId) && !(0, g.we)("addOrUpdateSavedMessage"))
        return void (0, i.openModalLazy)(async () => {
            let { default: t } = await n.e("22540").then(n.bind(n, 530951));
            return (e) => (0, a.jsx)(t, { ...e });
        });
    if (
        null !=
            (await (0, O.oN)(C).catch((t) => {
                if (t?.body?.code === A.t02.TOO_MANY_SAVED_MESSAGES) {
                    let t = null != C.dueAt;
                    if ((0, g.e4)("addOrUpdateSavedMessage")) {
                        let e = (0, g.lF)("addOrUpdateSavedMessage", t);
                        return (
                            (0, i.openModalLazy)(async () => {
                                let { default: l } = await n.e("22540").then(n.bind(n, 530951));
                                return (n) => (0, a.jsx)(l, { ...n, isReminder: t, limit: e });
                            }),
                            null
                        );
                    }
                    return (
                        u.A.show({
                            title: f.intl.string(f.t.mlbiZW),
                            body: f.intl.formatToPlainString(t ? f.t.Anr1Dg : f.t["1zVbEG"], {
                                max: (0, g.lF)("addOrUpdateSavedMessage", t),
                            }),
                            cancelText: f.intl.string(f.t.BddRzS),
                            confirmText: f.intl.string(f.t.ZGbTcy),
                            onConfirm: () => o._.dispatch(A.jej.TOGGLE_INBOX, l.Y2.BOOKMARKS),
                        }),
                        null
                    );
                }
                return (0, d.P0)((0, s.o)(t?.body?.message ?? f.intl.string(f.t.R0RpRX), r.Ck.FAILURE)), null;
            })) &&
        e
    ) {
        let t = null != C.dueAt ? f.intl.string(f.t.i1IsOy) : f.intl.string(f.t["WQdL/6"]),
            e = null != C.dueAt ? r.Ck.CLOCK : r.Ck.BOOKMARK;
        (0, c.Dc)({ message: t, icon: e });
    }
}
async function M(t) {
    let { displayToast: e = !1, isReminder: n, ...a } = t;
    if (
        null !=
            (await (0, O.cf)(a).catch(
                (t) => ((0, d.P0)((0, s.o)(t?.body?.message ?? f.intl.string(f.t.R0RpRX), r.Ck.FAILURE)), null),
            )) &&
        e
    ) {
        let t = null != a.dueAt || n ? f.intl.string(f.t.D0tS02) : f.intl.string(f.t["5KOMiV"]),
            e = null != a.dueAt || n ? r.Ck.CLOCK : r.Ck.BOOKMARK;
        (0, c.Dc)({ message: t, icon: e });
    }
}
