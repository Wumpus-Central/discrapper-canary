n.d(t, { Y: () => _, x: () => p });
var a = n(627968),
    i = n(192308),
    s = n(691540),
    l = n(857250),
    r = n(97483),
    o = n(157559),
    c = n(625494),
    d = n(216623),
    u = n(85109),
    h = n(226017),
    m = n(652215);
n(811233);
var g = n(985018);
async function _(e) {
    let { displayToast: t = !1, ..._ } = e;
    if (null == u.A.getSavedMessage(_.channelId, _.messageId) && !(0, h.A)())
        return void (0, i.openModalLazy)(async () => {
            let { default: e } = await n.e("22540").then(n.bind(n, 530951));
            return (t) => (0, a.jsx)(e, { ...t });
        });
    if (
        null !=
            (await (0, d.oN)(_).catch(
                (e) => (
                    e?.body?.code === m.t02.TOO_MANY_SAVED_MESSAGES
                        ? o.A.show({
                              title: g.intl.string(g.t.mlbiZW),
                              body: g.intl.formatToPlainString(g.t["1zVbEG"], { max: 200 }),
                              cancelText: g.intl.string(g.t.BddRzS),
                              confirmText: g.intl.string(g.t.ZGbTcy),
                              onConfirm: () => c._.dispatch(m.jej.TOGGLE_FOR_LATER),
                          })
                        : (0, s.P0)((0, l.o)(e?.body?.message ?? g.intl.string(g.t.R0RpRX), r.Ck.FAILURE)),
                    null
                ),
            )) &&
        t
    ) {
        let e = null != _.dueAt ? g.intl.string(g.t.i1IsOy) : g.intl.string(g.t["WQdL/6"]),
            t = null != _.dueAt ? r.Ck.CLOCK : r.Ck.BOOKMARK;
        (0, s.P0)((0, l.o)(e, t));
    }
}
async function p(e) {
    let { displayToast: t = !1, ...n } = e;
    if (
        null !=
            (await (0, d.cf)(n).catch(
                (e) => ((0, s.P0)((0, l.o)(e?.body?.message ?? g.intl.string(g.t.R0RpRX), r.Ck.FAILURE)), null),
            )) &&
        t
    ) {
        let e = null != n.dueAt ? g.intl.string(g.t.D0tS02) : g.intl.string(g.t["5KOMiV"]),
            t = null != n.dueAt ? r.Ck.CLOCK : r.Ck.BOOKMARK;
        (0, s.P0)((0, l.o)(e, t));
    }
}
