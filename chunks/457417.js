var s = n(582128),
    l = n(976245),
    i = n(196765);
let a = {
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
    r = (0, s.createContext)(null);
n.d(
    t,
    {},
    {
        E3: function () {
            return (0, l.y)()((e, t) => ({
                ...a,
                canSend: () => !t().sending && t().selectedDestinations.length > 0,
                updateSearchText: (t) => e({ searchText: t }),
                updateSelectShareDestinations: (t) => e({ selectedDestinations: t }),
                updateMessage: (t) => e({ message: t }),
                updateChannel: (t) => e({ channel: t }),
                updateSending: (t) => e({ sending: t }),
                updateMessageText: (t) => e({ messageText: t }),
                setSend: (t) => e({ send: t }),
            }));
        },
        KH: r,
        Vw: function () {
            return (0, i.P)((0, s.useContext)(r));
        },
        dJ: "custom-themes-share-modal",
    },
);
