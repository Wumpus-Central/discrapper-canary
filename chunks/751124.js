let i = new (n(626584).A)("createWebSocket");
n.d(
    t,
    {},
    {
        A: function (e, t) {
            try {
                return new WebSocket(e, t);
            } catch (n) {
                throw (i.warn(`Failed to create websocket for url '${e}' (protocols: ${JSON.stringify(t)})`), n);
            }
        },
    },
);
