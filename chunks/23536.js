n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(780384),
    s = n(481060),
    o = n(332148),
    c = n(493773),
    d = n(198620),
    u = n(624453),
    h = n(306680),
    p = n(494404),
    m = n(257559),
    f = n(388032);
let g = [];
function _(e) {
    let { channel: t, onJump: _ } = e,
        { messages: C, loading: x } = (0, a.cj)([u.Z], () => {
            let e = u.Z.getPinnedMessages(t.id),
                n = null != e ? e.messages : g;
            return {
                messages: n,
                loading: null == n || (null != e && e.loading)
            };
        }),
        v = (0, a.e7)([h.ZP], () => h.ZP.hasUnreadPins(t.id));
    return (
        (0, c.Z)(() => {
            C.some(d.k5) && o.Z.fetchPins(t.id, !0);
        }),
        l.useEffect(() => {
            v && o.Z.ackPins(t.id);
        }, [v, t.id]),
        (0, i.jsx)(s.VqE, {
            'aria-label': f.intl.string(f.t['mp1N//']),
            children: (0, i.jsx)(p.ZP, {
                onFetch: function () {
                    o.Z.ackPins(t.id), o.Z.fetchPins(t.id);
                },
                channel: t,
                messages: C,
                loading: x,
                analyticsName: 'Channel Pins',
                onCloseMessage: function (e, n) {
                    null != e && (n.shiftKey ? o.Z.unpinMessage(t, e.id) : m.Z.confirmUnpin(t, e));
                },
                onJump: _,
                getProTip: function () {
                    return t.isPrivate() ? f.intl.string(f.t['3dLGAg']) : f.intl.string(f.t.KTbRcn);
                },
                renderHeader: () =>
                    (0, i.jsx)(p.h4, {
                        icon: s.qQX,
                        title: f.intl.string(f.t['mp1N//'])
                    }),
                renderEmptyState: function (e) {
                    let l = f.intl.string(f.t.fmyaWF);
                    t.isPrivate() && (l = f.intl.string(f.t.rhqcbG));
                    let a = (0, r.ap)(e) ? n(306059) : n(281485);
                    return (0, i.jsx)(
                        p.nH,
                        {
                            msg: l,
                            image: a
                        },
                        'emptystate'
                    );
                },
                listName: 'pins'
            })
        })
    );
}
