n.d(e, { Y: () => E, x: () => T });
var a = n(477900),
    i = n(873298),
    l = n(192308),
    s = n(691540),
    d = n(857250),
    r = n(97483),
    o = n(157559),
    c = n(793574),
    O = n(113367),
    u = n(625494),
    _ = n(269073),
    A = n(216623),
    R = n(85109),
    g = n(652215),
    S = n(375708);
async function E(t) {
    let { displayToast: e = !1, ...E } = t;
    if (null == R.A.getSavedMessage(E.channelId, E.messageId) && !(0, _.we)("addOrUpdateSavedMessage"))
        return void (0, l.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e("978204"), n.e("422540")]).then(n.bind(n, 530951));
            return (e) => (0, a.jsx)(t, { ...e, analyticsLocations: [c.A.FOR_LATER_ROADBLOCK] });
        });
    if (
        null !=
            (await (0, A.oN)(E).catch((t) => {
                if (t?.body?.code === g.t02.TOO_MANY_SAVED_MESSAGES) {
                    let t = null != E.dueAt;
                    if ((0, _.e4)("addOrUpdateSavedMessage")) {
                        let e = (0, _.lF)("addOrUpdateSavedMessage", t);
                        return (
                            (0, l.openModalLazy)(async () => {
                                let { default: i } = await Promise.all([n.e("978204"), n.e("422540")]).then(
                                    n.bind(n, 530951),
                                );
                                return (n) =>
                                    (0, a.jsx)(i, {
                                        ...n,
                                        isReminder: t,
                                        limit: e,
                                        analyticsLocations: [c.A.FOR_LATER_ROADBLOCK],
                                    });
                            }),
                            null
                        );
                    }
                    return (
                        o.A.show({
                            title: S.intl.string(S.t.mlbiZW),
                            body: S.intl.formatToPlainString(t ? S.t.Anr1Dg : S.t["1zVbEG"], {
                                max: (0, _.lF)("addOrUpdateSavedMessage", t),
                            }),
                            cancelText: S.intl.string(S.t.BddRzS),
                            confirmText: S.intl.string(S.t.ZGbTcy),
                            onConfirm: () => u._.dispatch(g.jej.TOGGLE_INBOX, t ? i.Y2.REMINDERS : i.Y2.BOOKMARKS),
                        }),
                        null
                    );
                }
                return (0, s.P0)((0, d.o)(t?.body?.message ?? S.intl.string(S.t.R0RpRX), r.Ck.FAILURE)), null;
            })) &&
        e
    ) {
        let t = null != E.dueAt ? S.intl.string(S.t.i1IsOy) : S.intl.string(S.t["WQdL/6"]),
            e = null != E.dueAt ? r.Ck.CLOCK : r.Ck.BOOKMARK;
        (0, O.Dc)({ message: t, icon: e });
    }
}
async function T(t) {
    let { displayToast: e = !1, isReminder: n, ...a } = t;
    if (
        null !=
            (await (0, A.cf)(a).catch(
                (t) => ((0, s.P0)((0, d.o)(t?.body?.message ?? S.intl.string(S.t.R0RpRX), r.Ck.FAILURE)), null),
            )) &&
        e
    ) {
        let t = null != a.dueAt || n ? S.intl.string(S.t.D0tS02) : S.intl.string(S.t["5KOMiV"]),
            e = null != a.dueAt || n ? r.Ck.CLOCK : r.Ck.BOOKMARK;
        (0, O.Dc)({ message: t, icon: e });
    }
}
