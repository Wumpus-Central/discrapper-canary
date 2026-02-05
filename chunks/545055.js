"use strict";
function i(e) {
    return `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}/guilds/${e}/widget.json`;
}
function s(e) {
    let t = `${location.protocol}${window.GLOBAL_ENV.WIDGET_ENDPOINT}?id=${e}&theme=dark`;
    return `<iframe src="${t}" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>`;
}
n.d(t, { Z: () => s, k: () => i });
