"use strict";
n.d(t, { m: () => s });
var r = n(600975);
let i = {
        enableRequestToStream: !1,
        enableVCStatusIcons: !1,
        enableOpenTIVForPing: !1,
        enableRequestToStreamOverlayNotification: !1,
    },
    s = (0, r.C)({
        kind: "guild",
        id: "2025-08_request_to_stream",
        label: "Request to Stream",
        defaultConfig: i,
        treatments: [
            { id: 1, label: "VC Status Icons", config: { ...i, enableVCStatusIcons: !0 } },
            {
                id: 2,
                label: "Request to Stream without Overlay Notification",
                config: { ...i, enableVCStatusIcons: !0, enableRequestToStream: !0, enableOpenTIVForPing: !0 },
            },
            {
                id: 3,
                label: "Request to Stream with Overlay Notification",
                config: {
                    ...i,
                    enableVCStatusIcons: !0,
                    enableRequestToStream: !0,
                    enableOpenTIVForPing: !0,
                    enableRequestToStreamOverlayNotification: !0,
                },
            },
        ],
    });
