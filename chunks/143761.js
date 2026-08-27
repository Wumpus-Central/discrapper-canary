"use strict";
r.d(t, { Ng: () => a, TW: () => n, mD: () => i });
let n = (e) => {
        var t, r;
        return "object" == typeof (t = e) && null != t && "window" in t && t.window === t
            ? e.document
            : o((r = e)) && 9 === r.nodeType
              ? e
              : (e?.ownerDocument ?? ("u" > typeof document ? document : void 0));
    },
    i = (e) => {
        let t = n(e);
        return t?.defaultView ?? ("u" > typeof window ? window : void 0);
    };
function o(e) {
    return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType;
}
function a(e) {
    return o(e) && 11 === e.nodeType && "host" in e;
}
