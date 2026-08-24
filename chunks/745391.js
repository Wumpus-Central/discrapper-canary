"use strict";
r.d(t, { Ng: () => o, TW: () => n, mD: () => i });
let n = (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.ownerDocument) ? t : document;
    },
    i = (e) => (e && "window" in e && e.window === e ? e : n(e).defaultView || window);
function o(e) {
    return (
        null !== e &&
        "object" == typeof e &&
        "nodeType" in e &&
        "number" == typeof e.nodeType &&
        e.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
        "host" in e
    );
}
