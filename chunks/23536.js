n.d(t, { Z: () => _ }), n(784620), n(973216);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(780384),
    s = n(481060),
    o = n(332148),
    c = n(493773),
    d = n(198620),
    u = n(819514),
    p = n(598999),
    h = n(210887),
    f = n(624453),
    g = n(306680),
    m = n(388032);
let b = [];
function _(e) {
    let { channel: t, onJump: _ } = e,
        { items: y, state: O } = (0, l.cj)([f.Z], () => {
            var e, n;
            let r = f.Z.getPins(t.id);
            return {
                items: null != (e = null == r ? void 0 : r.items) ? e : b,
                state: null != (n = null == r ? void 0 : r.state) ? n : f.M.LOADING,
            };
        }),
        j = i.useMemo(() => y.map((e) => e.message), [y]),
        x = (0, l.e7)([g.ZP], () => g.ZP.hasUnreadPins(t.id));
    i.useEffect(() => {
        x && o.Z.ackPins(t.id);
    }, [x, t.id]),
        (0, c.ZP)(() => {
            j.some(d.k5) && o.Z.fetchPins(t.id, { reset: !0 });
        });
    let v = i.useCallback(() => {
            o.Z.fetchPins(t.id);
        }, [t.id]),
        C = i.useCallback(() => {
            var e;
            o.Z.fetchPins(t.id, { before: null == (e = y.at(-1)) ? void 0 : e.pinnedAt });
        }, [t.id, y]),
        I = (0, l.e7)([h.Z], () => (0, a.ap)(h.Z.theme));
    return (0, r.jsx)(s.VqE, {
        "aria-label": m.intl.string(m.t["mp1N/2"]),
        children: (0, r.jsx)(p.ZP, {
            channel: t,
            onFetch: v,
            messages: j,
            loading: O === f.M.LOADING,
            hasMore: O === f.M.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function () {
                if (y.length > 0) return;
                let e = m.intl.string(t.isPrivate() ? m.t.rhqcbJ : m.t.fmyaWJ),
                    i = I ? n(306059) : n(281485);
                return (0, r.jsx)(
                    p.nH,
                    {
                        msg: e,
                        image: i,
                    },
                    "emptystate",
                );
            },
            renderHeader: () =>
                (0, r.jsx)(p.h4, {
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
            closeAriaLabel: m.intl.string(m.t["Bse+F/"]),
        }),
    });
}
