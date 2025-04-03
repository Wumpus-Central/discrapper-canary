n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(780384),
    a = n(481060),
    s = n(332148),
    c = n(493773),
    u = n(198620),
    d = n(624453),
    p = n(306680),
    h = n(494404),
    f = n(257559),
    m = n(388032);
let g = [];
function b(e) {
    let { channel: t, onJump: b } = e,
        { messages: _, loading: C } = (0, l.cj)([d.Z], () => {
            let e = d.Z.getPinnedMessages(t.id),
                n = null != e ? e.messages : g;
            return {
                messages: n,
                loading: null == n || (null != e && e.loading)
            };
        }),
        y = (0, l.e7)([p.ZP], () => p.ZP.hasUnreadPins(t.id));
    return (
        (0, c.ZP)(() => {
            _.some(u.k5) && s.Z.fetchPins(t.id, !0);
        }),
        i.useEffect(() => {
            y && s.Z.ackPins(t.id);
        }, [y, t.id]),
        (0, r.jsx)(a.VqE, {
            'aria-label': m.NW.string(m.t['mp1N//']),
            children: (0, r.jsx)(h.ZP, {
                onFetch: function () {
                    s.Z.ackPins(t.id), s.Z.fetchPins(t.id);
                },
                channel: t,
                messages: _,
                loading: C,
                analyticsName: 'Channel Pins',
                onCloseMessage: function (e, n) {
                    null != e && (n.shiftKey ? s.Z.unpinMessage(t, e.id) : f.Z.confirmUnpin(t, e));
                },
                onJump: b,
                getProTip: function () {
                    return t.isPrivate() ? m.NW.string(m.t['3dLGAg']) : m.NW.string(m.t.KTbRcn);
                },
                renderHeader: () =>
                    (0, r.jsx)(h.h4, {
                        icon: a.qQX,
                        title: m.NW.string(m.t['mp1N//'])
                    }),
                renderEmptyState: function (e) {
                    let i = m.NW.string(m.t.fmyaWF);
                    t.isPrivate() && (i = m.NW.string(m.t.rhqcbG));
                    let l = (0, o.ap)(e) ? n(306059) : n(281485);
                    return (0, r.jsx)(
                        h.nH,
                        {
                            msg: i,
                            image: l
                        },
                        'emptystate'
                    );
                },
                listName: 'pins'
            })
        })
    );
}
