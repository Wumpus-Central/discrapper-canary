"use strict";
n.d(t, { Ng: () => s, TW: () => r, mD: () => i });
let r = (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.ownerDocument) ? t : document;
    },
    i = (e) => (e && "window" in e && e.window === e ? e : r(e).defaultView || window);
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
