n.d(t, {
    x: function () {
        return p;
    },
    z: function () {
        return f;
    }
});
var i = n(200651),
    r = n(481060),
    l = n(668781),
    a = n(100527),
    o = n(585483),
    s = n(192720),
    c = n(768943),
    d = n(175006),
    u = n(981631),
    m = n(989925),
    h = n(388032);
async function f(e) {
    let { displayToast: t = !1, ...f } = e;
    if (null == c.Z.getSavedMessage(f.channelId, f.messageId) && !(0, d.Z)()) {
        (0, r.openModalLazy)(async () => {
            let { default: e } = await n.e('34906').then(n.bind(n, 639565));
            return (t) =>
                (0, i.jsx)(e, {
                    source: a.Z.FOR_LATER_HELPERS,
                    ...t
                });
        });
        return;
    }
    if (
        null !=
        (await (0, s.XA)(f).catch((e) => {
            var t, n, i;
            return (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === u.evJ.TOO_MANY_SAVED_MESSAGES
                ? (l.Z.show({
                      title: h.intl.string(h.t.mlbiZW),
                      body: h.intl.formatToPlainString(h.t['1zVbEB'], { max: m.D }),
                      cancelText: h.intl.string(h.t.BddRzc),
                      confirmText: h.intl.string(h.t.ZGbTc3),
                      onConfirm: () => o.S.dispatch(u.CkL.TOGGLE_FOR_LATER)
                  }),
                  null)
                : ((0, r.showToast)((0, r.createToast)(null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : h.intl.string(h.t.R0RpRU), r.ToastType.FAILURE)), null);
        }))
    ) {
        if (t) {
            let e = null != f.dueAt ? h.intl.string(h.t.i1IsOz) : h.intl.string(h.t['WQdL//']),
                t = null != f.dueAt ? r.ToastType.CLOCK : r.ToastType.BOOKMARK;
            (0, r.showToast)((0, r.createToast)(e, t));
        }
    }
}
async function p(e) {
    let { displayToast: t = !1, ...n } = e;
    if (
        null !=
        (await (0, s.ep)(n).catch((e) => {
            var t, n;
            return (0, r.showToast)((0, r.createToast)(null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : h.intl.string(h.t.R0RpRU), r.ToastType.FAILURE)), null;
        }))
    ) {
        if (t) {
            let e = null != n.dueAt ? h.intl.string(h.t.D0tS09) : h.intl.string(h.t['5KOMiY']),
                t = null != n.dueAt ? r.ToastType.CLOCK : r.ToastType.BOOKMARK;
            (0, r.showToast)((0, r.createToast)(e, t));
        }
    }
}
