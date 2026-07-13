"use strict";
n.d(t, { A: () => r });
let i = new (n(626584).A)("createWebSocket");
function r(e, t) {
    try {
        return new WebSocket(e, t);
    } catch (n) {
        throw (i.warn(`Failed to create websocket for url '${e}' (protocols: ${JSON.stringify(t)})`), n);
    }
}
