var l = n(477900),
    i = n(582128),
    s = n(727011);
let a = i.createContext({
    conversationFocus: null,
    setConversationFocus: () => {},
    dismissReason: null,
    clearDismissReason: () => {},
    dismissFocus: () => {},
});
n.d(
    t,
    {},
    {
        D7: function () {
            return i.useContext(a);
        },
        h1: function (e) {
            let { channelId: t, children: n } = e,
                [r, o] = i.useState(null),
                [c, d] = i.useState(null),
                u = i.useCallback(() => d(null), []),
                h = i.useCallback(
                    (e) => {
                        null != r &&
                            (s.X.trackFocusModeDismissed({
                                channelId: t,
                                conversationId: r.conversationId,
                                dismissReason: e,
                            }),
                            d(e),
                            o(null));
                    },
                    [t, r],
                ),
                m = i.useMemo(
                    () => ({
                        conversationFocus: r,
                        setConversationFocus: o,
                        dismissReason: c,
                        clearDismissReason: u,
                        dismissFocus: h,
                    }),
                    [r, c, u, h],
                );
            return (0, l.jsx)(a.Provider, { value: m, children: n });
        },
    },
);
