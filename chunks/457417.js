"use strict";
n.d(t, { E3: () => l, KH: () => u, Vw: () => c, dJ: () => s });
var r = n(64700),
    i = n(870844),
    a = n(353640);
let s = "custom-themes-share-modal",
    o = {
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
    l = () =>
        (0, i.y)()((e, t) => ({
            ...o,
            canSend: () => !t().sending && t().selectedDestinations.length > 0,
            updateSearchText: (t) => e({ searchText: t }),
            updateSelectShareDestinations: (t) => e({ selectedDestinations: t }),
            updateMessage: (t) => e({ message: t }),
            updateChannel: (t) => e({ channel: t }),
            updateSending: (t) => e({ sending: t }),
            updateMessageText: (t) => e({ messageText: t }),
            setSend: (t) => e({ send: t }),
        })),
    u = (0, r.createContext)(null),
    c = () => (0, a.P)((0, r.useContext)(u));
