n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(780384),
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
function C(e) {
    let { channel: t, onJump: C } = e,
        { messages: x, loading: v } = (0, r.cj)([u.Z], () => {
            let e = u.Z.getPinnedMessages(t.id),
                n = null != e ? e.messages : g;
            return {
                messages: n,
                loading: null == n || (null != e && e.loading)
            };
        }),
        _ = (0, r.e7)([h.ZP], () => h.ZP.hasUnreadPins(t.id));
    return (
        (0, c.Z)(() => {
            x.some(d.k5) && o.Z.fetchPins(t.id, !0);
        }),
        l.useEffect(() => {
            _ && o.Z.ackPins(t.id);
        }, [_, t.id]),
        (0, i.jsx)(s.Dialog, {
            'aria-label': f.intl.string(f.t['mp1N//']),
            children: (0, i.jsx)(p.ZP, {
                onFetch: function () {
                    o.Z.ackPins(t.id), o.Z.fetchPins(t.id);
                },
                channel: t,
                messages: x,
                loading: v,
                analyticsName: 'Channel Pins',
                onCloseMessage: function (e, n) {
                    null != e && (n.shiftKey ? o.Z.unpinMessage(t, e.id) : m.Z.confirmUnpin(t, e));
                },
                onJump: C,
                getProTip: function () {
                    return t.isPrivate() ? f.intl.string(f.t['3dLGAg']) : f.intl.string(f.t.KTbRcn);
                },
                renderHeader: () =>
                    (0, i.jsx)(p.h4, {
                        icon: s.PinIcon,
                        title: f.intl.string(f.t['mp1N//'])
                    }),
                renderEmptyState: function (e) {
                    let l = f.intl.string(f.t.fmyaWF);
                    t.isPrivate() && (l = f.intl.string(f.t.rhqcbG));
                    let r = (0, a.ap)(e) ? n(306059) : n(281485);
                    return (0, i.jsx)(
                        p.nH,
                        {
                            msg: l,
                            image: r
                        },
                        'emptystate'
                    );
                },
                listName: 'pins'
            })
        })
    );
}
