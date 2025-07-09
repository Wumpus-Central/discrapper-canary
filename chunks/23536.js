(n.d(t, { Z: () => _ }), n(784620), n(973216));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(780384),
    a = n(481060),
    s = n(332148),
    c = n(493773),
    u = n(198620),
    d = n(210887),
    p = n(624453),
    h = n(306680),
    f = n(494404),
    m = n(257559),
    g = n(388032);
let b = [];
function _(e) {
    let { channel: t, onJump: _ } = e,
        { items: y, state: C } = (0, l.cj)([p.Z], () => {
            var e, n;
            let r = p.Z.getPins(t.id);
            return {
                items: null != (e = null == r ? void 0 : r.items) ? e : b,
                state: null != (n = null == r ? void 0 : r.state) ? n : p.M.LOADING
            };
        }),
        x = i.useMemo(() => y.map((e) => e.message), [y]),
        v = (0, l.e7)([h.ZP], () => h.ZP.hasUnreadPins(t.id));
    (i.useEffect(() => {
        v && s.Z.ackPins(t.id);
    }, [v, t.id]),
        (0, c.ZP)(() => {
            x.some(u.k5) && s.Z.fetchPins(t.id, { reset: !0 });
        }));
    let O = i.useCallback(() => {
            s.Z.fetchPins(t.id);
        }, [t.id]),
        j = i.useCallback(() => {
            var e;
            s.Z.fetchPins(t.id, { before: null == (e = y.at(-1)) ? void 0 : e.pinnedAt });
        }, [t.id, y]),
        E = (0, l.e7)([d.Z], () => (0, o.ap)(d.Z.theme));
    return (0, r.jsx)(a.VqE, {
        'aria-label': g.intl.string(g.t['mp1N//']),
        children: (0, r.jsx)(f.ZP, {
            channel: t,
            onFetch: O,
            messages: x,
            loading: C === p.M.LOADING,
            hasMore: C === p.M.LOADED_HAS_MORE,
            analyticsName: 'Channel Pins',
            renderEmptyState: function () {
                if (y.length > 0) return;
                let e = g.intl.string(t.isPrivate() ? g.t.rhqcbG : g.t.fmyaWF),
                    i = E ? n(306059) : n(281485);
                return (0, r.jsx)(
                    f.nH,
                    {
                        msg: e,
                        image: i
                    },
                    'emptystate'
                );
            },
            renderHeader: () =>
                (0, r.jsx)(f.h4, {
                    icon: a.qQX,
                    title: g.intl.string(g.t['mp1N//'])
                }),
            onCloseMessage: function (e, n) {
                null != e && (n.shiftKey ? s.Z.unpinMessage(t, e.id) : m.Z.confirmUnpin(t, e));
            },
            onJump: _,
            loadMore: j,
            getProTip: function () {
                return t.isPrivate() ? g.intl.string(g.t['3dLGAg']) : g.intl.string(g.t.KTbRcn);
            },
            listName: 'pins'
        })
    });
}
