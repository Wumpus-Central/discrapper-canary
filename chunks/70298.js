"use strict";
function i() {
    let e = window;
    return (
        null != e.jQuery ||
        null != e.$ ||
        null != e.BetterDiscord ||
        null != e.BdApi ||
        null != e.rambox ||
        null != e.Vencord ||
        null != e.VencordNative
    );
}
n.d(t, { b: () => i });
