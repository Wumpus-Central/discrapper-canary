n.d(t, { E3: () => o, KH: () => c, Vw: () => u, dJ: () => a });
var s = n(582128),
    l = n(976245),
    i = n(196765);
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
let c = (0, s.createContext)(null);
function u() {
    return (0, i.P)((0, s.useContext)(c));
}
