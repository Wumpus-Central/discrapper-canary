n.d(t, { E3: () => o, KH: () => u, Vw: () => c, dJ: () => a });
var s = n(64700),
    l = n(870844),
    i = n(353640);
let a = "custom-themes-share-modal",
    r = {
        searchText: "",
        selectedDestinations: [],
        message: {},
        messageText: "",
        channel: {},
        maxDestinations: 5,
        send: async () => {},
        sending: !1,
        canSend: () => !1,
    };
function o() {
    return (0, l.y)()((e, t) => ({
        ...r,
        canSend: () => !t().sending && t().selectedDestinations.length > 0,
        updateSearchText: (t) => e({ searchText: t }),
        updateSelectShareDestinations: (t) => e({ selectedDestinations: t }),
        updateMessage: (t) => e({ message: t }),
        updateChannel: (t) => e({ channel: t }),
        updateSending: (t) => e({ sending: t }),
        updateMessageText: (t) => e({ messageText: t }),
        setSend: (t) => e({ send: t }),
    }));
}
let u = (0, s.createContext)(null);
function c() {
    return (0, i.P)((0, s.useContext)(u));
}
