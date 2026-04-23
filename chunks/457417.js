l.d(t, { E3: () => o, KH: () => c, Vw: () => d, dJ: () => r });
var a = l(64700),
    n = l(870844),
    s = l(353640);
let r = "custom-themes-share-modal",
    i = {
        searchText: "",
        selectedDestinations: [],
        message: {},
        messageText: "",
        channel: {},
        maxDestinations: 5,
        send: async () => {},
        sending: !1,
        canSend: () => !1,
    },
    o = () =>
        (0, n.y)()((e, t) => ({
            ...i,
            canSend: () => !t().sending && t().selectedDestinations.length > 0,
            updateSearchText: (t) => e({ searchText: t }),
            updateSelectShareDestinations: (t) => e({ selectedDestinations: t }),
            updateMessage: (t) => e({ message: t }),
            updateChannel: (t) => e({ channel: t }),
            updateSending: (t) => e({ sending: t }),
            updateMessageText: (t) => e({ messageText: t }),
            setSend: (t) => e({ send: t }),
        })),
    c = (0, a.createContext)(null),
    d = () => (0, s.P)((0, a.useContext)(c));
