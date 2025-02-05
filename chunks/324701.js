n.d(t, {
    x: () => p,
    z: () => h
});
var i = n(200651),
    l = n(481060),
    a = n(668781),
    r = n(100527),
    s = n(585483),
    o = n(192720),
    c = n(768943),
    d = n(175006),
    u = n(981631),
    m = n(989925),
    _ = n(388032);
async function h(e) {
    let { displayToast: t = !1, ...h } = e;
    if (null == c.Z.getSavedMessage(h.channelId, h.messageId) && !(0, d.Z)()) {
        (0, l.ZDy)(async () => {
            let { default: e } = await n.e('34906').then(n.bind(n, 639565));
            return (t) =>
                (0, i.jsx)(e, {
                    source: r.Z.FOR_LATER_HELPERS,
                    ...t
                });
        });
        return;
    }
    if (
        null !=
            (await (0, o.XA)(h).catch((e) => {
                var t, n, i;
                return (
                    (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === u.evJ.TOO_MANY_SAVED_MESSAGES
                        ? a.Z.show({
                              title: _.intl.string(_.t.mlbiZW),
                              body: _.intl.formatToPlainString(_.t['1zVbEB'], { max: m.D }),
                              cancelText: _.intl.string(_.t.BddRzc),
                              confirmText: _.intl.string(_.t.ZGbTc3),
                              onConfirm: () => s.S.dispatch(u.CkL.TOGGLE_FOR_LATER)
                          })
                        : (0, l.showToast)((0, l.createToast)(null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : _.intl.string(_.t.R0RpRU), l.ToastType.FAILURE)),
                    null
                );
            })) &&
        t
    ) {
        let e = null != h.dueAt ? _.intl.string(_.t.i1IsOz) : _.intl.string(_.t['WQdL//']),
            t = null != h.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t));
    }
}
async function p(e) {
    let { displayToast: t = !1, ...n } = e;
    if (
        null !=
            (await (0, o.ep)(n).catch((e) => {
                var t, n;
                return (0, l.showToast)((0, l.createToast)(null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : _.intl.string(_.t.R0RpRU), l.ToastType.FAILURE)), null;
            })) &&
        t
    ) {
        let e = null != n.dueAt ? _.intl.string(_.t.D0tS09) : _.intl.string(_.t['5KOMiY']),
            t = null != n.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t));
    }
}
