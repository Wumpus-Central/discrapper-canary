"use strict";
n.d(t, { Ng: () => s, TW: () => i, mD: () => r });
let i = (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.ownerDocument) ? t : document;
    },
    r = (e) => (e && "window" in e && e.window === e ? e : i(e).defaultView || window);
function s(e) {
    return (
        null !== e &&
        "object" == typeof e &&
        "nodeType" in e &&
        "number" == typeof e.nodeType &&
        e.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
        "host" in e
    );
}
