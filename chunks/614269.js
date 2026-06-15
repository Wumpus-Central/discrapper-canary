"use strict";
n.d(t, { u: () => i });
class i {
    static isHlsUrl(e) {
        return null != e && e.split("?")[0].endsWith(".m3u8");
    }
}
