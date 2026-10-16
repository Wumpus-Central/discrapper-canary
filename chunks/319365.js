n.d(t, { D7: () => c, h1: () => o });
var l = n(477900),
    i = n(582128),
    s = n(727011),
    a = n(120570);
let r = i.createContext({ isFocused: !1, isFocusedRef: { current: !1 }, setIsFocused: () => {} });
function o(e) {
    let { channelId: t, children: n } = e,
        [o, c] = i.useState(!1),
        d = i.useRef(o),
        u = i.useCallback((e) => {
            ((d.current = e), c(e));
        }, []);
    i.useEffect(() => {
        function e() {
            let e = a.A.getSelectedConversationId(t);
            null != e &&
                a.A.consumeFocusRequest() &&
                (u(!0), s.X.trackFocusModeImpression({ channelId: t, conversationId: e }));
        }
        return (a.A.addChangeListener(e), e(), () => a.A.removeChangeListener(e));
    }, [t, u]);
    let h = i.useMemo(() => ({ isFocused: o, isFocusedRef: d, setIsFocused: u }), [o, u]);
    return (0, l.jsx)(r.Provider, { value: h, children: n });
}
function c() {
    return i.useContext(r);
}
