n.d(t, { Z: () => y }), n(784620), n(973216);
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
function y(e) {
    let { channel: t, onJump: y } = e,
        { items: O, state: x } = (0, l.cj)([f.Z], () => {
            var e, n;
            let r = f.Z.getPins(t.id);
            return {
                items: null != (e = null == r ? void 0 : r.items) ? e : b,
                state: null != (n = null == r ? void 0 : r.state) ? n : f.M.LOADING,
            };
        }),
        j = i.useMemo(() => O.map((e) => e.message), [O]),
        v = (0, l.e7)([g.ZP], () => g.ZP.hasUnreadPins(t.id));
    i.useEffect(() => {
        v && o.Z.ackPins(t.id);
    }, [v, t.id]),
        (0, c.ZP)(() => {
            j.some(d.k5) && o.Z.fetchPins(t.id, { reset: !0 });
        });
    let C = i.useCallback(() => {
            o.Z.fetchPins(t.id);
        }, [t.id]),
        I = i.useCallback(() => {
            var e;
            o.Z.fetchPins(t.id, { before: null == (e = O.at(-1)) ? void 0 : e.pinnedAt });
        }, [t.id, O]),
        _ = (0, l.e7)([h.Z], () => (0, a.ap)(h.Z.theme));
    return (0, r.jsx)(s.VqE, {
        "aria-label": m.intl.string(m.t["mp1N/2"]),
        children: (0, r.jsx)(p.ZP, {
            channel: t,
            onFetch: C,
            messages: j,
            loading: x === f.M.LOADING,
            hasMore: x === f.M.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function () {
                if (O.length > 0) return;
                let e = m.intl.string(t.isPrivate() ? m.t.rhqcbJ : m.t.fmyaWJ),
                    i = _ ? n(306059) : n(281485);
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
            onJump: y,
            loadMore: I,
            getProTip: function () {
                return t.isPrivate() ? m.intl.string(m.t["3dLGAs"]) : m.intl.string(m.t.KTbRcg);
            },
            listName: "pins",
            closeAriaLabel: m.intl.string(m.t["Bse+F/"]),
        }),
    });
}
