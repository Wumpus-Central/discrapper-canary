"use strict";
function r(e) {
    i()?.reportEvent?.(e);
}
function i() {
    return "u" > typeof window ? window.__DISCORD_DEVTOOLS : null;
}
n.d(t, { HF: () => r });
