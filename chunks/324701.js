n.d(t, {
    x: () => p,
    z: () => _
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
    h = n(388032);
async function _(e) {
    let { displayToast: t = !1, ..._ } = e;
    if (null == c.Z.getSavedMessage(_.channelId, _.messageId) && !(0, d.Z)()) {
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
            (await (0, o.XA)(_).catch((e) => {
                var t, n, i;
                return (
                    (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === u.evJ.TOO_MANY_SAVED_MESSAGES
                        ? a.Z.show({
                              title: h.intl.string(h.t.mlbiZW),
                              body: h.intl.formatToPlainString(h.t['1zVbEB'], { max: m.D }),
                              cancelText: h.intl.string(h.t.BddRzc),
                              confirmText: h.intl.string(h.t.ZGbTc3),
                              onConfirm: () => s.S.dispatch(u.CkL.TOGGLE_FOR_LATER)
                          })
                        : (0, l.showToast)((0, l.createToast)(null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : h.intl.string(h.t.R0RpRU), l.ToastType.FAILURE)),
                    null
                );
            })) &&
        t
    ) {
        let e = null != _.dueAt ? h.intl.string(h.t.i1IsOz) : h.intl.string(h.t['WQdL//']),
            t = null != _.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t));
    }
}
async function p(e) {
    let { displayToast: t = !1, ...n } = e;
    if (
        null !=
            (await (0, o.ep)(n).catch((e) => {
                var t, n;
                return (0, l.showToast)((0, l.createToast)(null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : h.intl.string(h.t.R0RpRU), l.ToastType.FAILURE)), null;
            })) &&
        t
    ) {
        let e = null != n.dueAt ? h.intl.string(h.t.D0tS09) : h.intl.string(h.t['5KOMiY']),
            t = null != n.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t));
    }
}
