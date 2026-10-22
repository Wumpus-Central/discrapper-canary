n.d(t, { D7: () => c, h1: () => o });
var l = n(477900),
    i = n(582128),
    s = n(727011),
    a = n(120570);
let r = i.createContext({ isFocused: !1, setIsFocused: () => {} });
function o(e) {
    let { channelId: t, children: n } = e,
        [o, c] = i.useState(!1);
    i.useEffect(() => {
        function e() {
            let e = a.A.getSelectedConversationId(t);
            null != e &&
                a.A.consumeFocusRequest() &&
                (c(!0), s.X.trackFocusModeImpression({ channelId: t, conversationId: e }));
        }
        return (a.A.addChangeListener(e), e(), () => a.A.removeChangeListener(e));
    }, [t]);
    let d = i.useMemo(() => ({ isFocused: o, setIsFocused: c }), [o]);
    return (0, l.jsx)(r.Provider, { value: d, children: n });
}
function c() {
    return i.useContext(r);
}
