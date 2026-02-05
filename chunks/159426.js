i.d(t, { m: () => l });
var n = i(600975);
let a = {
        enableRequestToStream: !1,
        enableVCStatusIcons: !1,
        enableOpenTIVForPing: !1,
        enableRequestToStreamOverlayNotification: !1,
    },
    l = (0, n.C)({
        kind: "guild",
        id: "2025-08_request_to_stream",
        label: "Request to Stream",
        defaultConfig: a,
        treatments: [
            { id: 1, label: "VC Status Icons", config: { ...a, enableVCStatusIcons: !0 } },
            {
                id: 2,
                label: "Request to Stream without Overlay Notification",
                config: { ...a, enableVCStatusIcons: !0, enableRequestToStream: !0, enableOpenTIVForPing: !0 },
            },
            {
                id: 3,
                label: "Request to Stream with Overlay Notification",
                config: {
                    ...a,
                    enableVCStatusIcons: !0,
                    enableRequestToStream: !0,
                    enableOpenTIVForPing: !0,
                    enableRequestToStreamOverlayNotification: !0,
                },
            },
        ],
    });
