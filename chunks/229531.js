"use strict";
n.d(t, { U: () => a });
var i = n(998218);
let r = {
    "image/avif": "avif",
    "image/gif": "gif",
    "image/heic": "heic",
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "video/mp4": "mp4",
    "video/quicktime": "mov",
    "video/webm": "webm",
};
function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        (n
            ? (function (e) {
                  let t = i.A.toURLSafe(e)?.searchParams.get("format")?.toLowerCase();
                  if (null != t && "" !== t) return "jpeg" === t ? "jpg" : t;
              })(e)
            : void 0) ??
        (function (e) {
            if (null == e) return;
            let t = e.toLowerCase();
            if (!/^(image|video)\//.test(t)) return;
            let n = r[t];
            if (null != n) return n;
            let i = t.split("/")[1];
            return "jpeg" === i ? "jpg" : null != i ? i : void 0;
        })(t) ??
        (function (e) {
            let t = i.A.toURLSafe(e);
            if (null == t) return;
            let n = t.pathname?.split(".")?.pop()?.toLowerCase();
            return null != n && n.length <= 5 ? n : void 0;
        })(e)
    );
}
