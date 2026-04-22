n.d(t, { m: () => r });
var i = n(600975);
let l = {
        enableRequestToStream: !1,
        enableVCStatusIcons: !1,
        enableOpenTIVForPing: !1,
        enableRequestToStreamOverlayNotification: !1,
    },
    r = (0, i.C)({
        kind: "guild",
        id: "2025-08_request_to_stream",
        label: "Request to Stream",
        defaultConfig: l,
        treatments: [
            { id: 1, label: "VC Status Icons", config: { ...l, enableVCStatusIcons: !0 } },
            {
                id: 2,
                label: "Request to Stream without Overlay Notification",
                config: { ...l, enableVCStatusIcons: !0, enableRequestToStream: !0, enableOpenTIVForPing: !0 },
            },
            {
                id: 3,
                label: "Request to Stream with Overlay Notification",
                config: {
                    ...l,
                    enableVCStatusIcons: !0,
                    enableRequestToStream: !0,
                    enableOpenTIVForPing: !0,
                    enableRequestToStreamOverlayNotification: !0,
                },
            },
        ],
    });
