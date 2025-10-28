n.d(t, { Z: () => _ }), n(784620), n(973216);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(780384),
    s = n(481060),
    o = n(332148),
    c = n(493773),
    d = n(198620),
    u = n(819514),
    p = n(210887),
    h = n(624453),
    f = n(306680),
    g = n(494404),
    m = n(388032);
let b = [];
function _(e) {
    let { channel: t, onJump: _ } = e,
        { items: y, state: x } = (0, l.cj)([h.Z], () => {
            var e, n;
            let r = h.Z.getPins(t.id);
            return {
                items: null != (e = null == r ? void 0 : r.items) ? e : b,
                state: null != (n = null == r ? void 0 : r.state) ? n : h.M.LOADING,
            };
        }),
        v = i.useMemo(() => y.map((e) => e.message), [y]),
        j = (0, l.e7)([f.ZP], () => f.ZP.hasUnreadPins(t.id));
    i.useEffect(() => {
        j && o.Z.ackPins(t.id);
    }, [j, t.id]),
        (0, c.ZP)(() => {
            v.some(d.k5) && o.Z.fetchPins(t.id, { reset: !0 });
        });
    let O = i.useCallback(() => {
            o.Z.fetchPins(t.id);
        }, [t.id]),
        C = i.useCallback(() => {
            var e;
            o.Z.fetchPins(t.id, { before: null == (e = y.at(-1)) ? void 0 : e.pinnedAt });
        }, [t.id, y]),
        I = (0, l.e7)([p.Z], () => (0, a.ap)(p.Z.theme));
    return (0, r.jsx)(s.VqE, {
        "aria-label": m.intl.string(m.t["mp1N/2"]),
        children: (0, r.jsx)(g.ZP, {
            channel: t,
            onFetch: O,
            messages: v,
            loading: x === h.M.LOADING,
            hasMore: x === h.M.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function () {
                if (y.length > 0) return;
                let e = m.intl.string(t.isPrivate() ? m.t.rhqcbJ : m.t.fmyaWJ),
                    i = I ? n(306059) : n(281485);
                return (0, r.jsx)(
                    g.nH,
                    {
                        msg: e,
                        image: i,
                    },
                    "emptystate",
                );
            },
            renderHeader: () =>
                (0, r.jsx)(g.h4, {
                    icon: s.qQX,
                    title: m.intl.string(m.t["mp1N/2"]),
                }),
            onCloseMessage: function (e, n) {
                null != e && (n.shiftKey ? o.Z.unpinMessage(t, e.id) : u.Z.confirmUnpin(t, e));
            },
            onJump: _,
            loadMore: C,
            getProTip: function () {
                return t.isPrivate() ? m.intl.string(m.t["3dLGAs"]) : m.intl.string(m.t.KTbRcg);
            },
            listName: "pins",
        }),
    });
}
