"use strict";
function r(e) {
    window.DiscordSentry?.addBreadcrumb({
        type: "default",
        level: "info",
        category: e.category,
        message: e.message,
        data: e.data,
        timestamp: Date.now(),
    });
}
n.d(t, { A: () => r });
