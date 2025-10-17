n.d(t, { Z: () => y }), n(784620), n(973216);
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
function y(e) {
    let { channel: t, onJump: y } = e,
        { items: _, state: j } = (0, l.cj)([h.Z], () => {
            var e, n;
            let r = h.Z.getPins(t.id);
            return {
                items: null != (e = null == r ? void 0 : r.items) ? e : b,
                state: null != (n = null == r ? void 0 : r.state) ? n : h.M.LOADING,
            };
        }),
        O = i.useMemo(() => _.map((e) => e.message), [_]),
        x = (0, l.e7)([f.ZP], () => f.ZP.hasUnreadPins(t.id));
    i.useEffect(() => {
        x && o.Z.ackPins(t.id);
    }, [x, t.id]),
        (0, c.ZP)(() => {
            O.some(d.k5) && o.Z.fetchPins(t.id, { reset: !0 });
        });
    let v = i.useCallback(() => {
            o.Z.fetchPins(t.id);
        }, [t.id]),
        C = i.useCallback(() => {
            var e;
            o.Z.fetchPins(t.id, { before: null == (e = _.at(-1)) ? void 0 : e.pinnedAt });
        }, [t.id, _]),
        I = (0, l.e7)([p.Z], () => (0, a.ap)(p.Z.theme));
    return (0, r.jsx)(s.VqE, {
        "aria-label": m.intl.string(m.t["mp1N//"]),
        children: (0, r.jsx)(g.ZP, {
            channel: t,
            onFetch: v,
            messages: O,
            loading: j === h.M.LOADING,
            hasMore: j === h.M.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function () {
                if (_.length > 0) return;
                let e = m.intl.string(t.isPrivate() ? m.t.rhqcbG : m.t.fmyaWF),
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
                    title: m.intl.string(m.t["mp1N//"]),
                }),
            onCloseMessage: function (e, n) {
                null != e && (n.shiftKey ? o.Z.unpinMessage(t, e.id) : u.Z.confirmUnpin(t, e));
            },
            onJump: y,
            loadMore: C,
            getProTip: function () {
                return t.isPrivate() ? m.intl.string(m.t["3dLGAg"]) : m.intl.string(m.t.KTbRcn);
            },
            listName: "pins",
        }),
    });
}
