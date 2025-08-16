n.d(t, {
    LD: () => c,
    Qn: () => u,
    SB: () => l,
    TC: () => s,
}),
    n(415506);
var r = n(544891),
    i = n(668757),
    a = n(476326);
let o = 50;
function s(e, t) {
    if (t.id === e.uri || (null != t.id && t.id === e.id)) return !0;
    if (t.item.platform === a.ow.REACT_NATIVE) {
        let { item: r } = t,
            { filename: i } = e;
        if (r.originalUri === e.uri) return !0;
        if (null != i) {
            var n;
            if (null == (n = r.originalUri) ? void 0 : n.includes(i)) return !0;
        }
    }
    return !1;
}
function l(e, t) {
    return 0 === t ? 0 : Math.min(Math.floor((e / t) * 100), 100);
}
class c {
    sliceBody(e, t) {
        return e instanceof File ? e.slice(t) : e;
    }
    doUpload(e, t) {
        return (
            (null == t ? void 0 : t.fileByteRange) != null && (e.body = this.sliceBody(e.body, t.fileByteRange.start)),
            r.tn.put(e)
        );
    }
}
class u {
    doUpload(e, t) {
        var n, r, a;
        let s,
            l = (0, i.gi)();
        if (null == l) throw Error("Libdiscore client is not available");
        if (
            ((null == (n = e.body) ? void 0 : n.uri) !== void 0 &&
                "string" == typeof e.body.uri &&
                (s = e.body.uri.startsWith("file://") ? e.body.uri.slice(7) : e.body.uri),
            void 0 === s || "" === s)
        )
            throw Error("No file path found in request body");
        let c = {
                path: s,
                byteRangeStart: null == t || null == (r = t.fileByteRange) ? void 0 : r.start,
                byteRangeEnd: null == t || null == (a = t.fileByteRange) ? void 0 : a.end,
            },
            u = l.httpRequest(e.url, {
                method: "PUT",
                body: c,
                headers: e.headers,
            });
        return new Promise((t, n) => {
            let r = () => {
                var i, a, s, c;
                if (null == (i = e.signal) ? void 0 : i.aborted) {
                    n(Error("Request cancelled")), l.cancelHttpRequest(u);
                    return;
                }
                let d = l.getHttpRequestStatus(u);
                if ((null == d ? void 0 : d.status) === "success")
                    t({
                        status: null == (a = d.response) ? void 0 : a.status,
                        headers: null == (s = d.response) ? void 0 : s.headers,
                        text: null == (c = d.response) ? void 0 : c.body,
                    });
                else if ((null == d ? void 0 : d.status) === "error") n(Error(d.error));
                else if ((null == d ? void 0 : d.status) === "progressing") {
                    if (void 0 !== e.onRequestProgress && null != d.uploaded_bytes && d.uploaded_bytes > 0) {
                        let t = {
                            loaded: d.uploaded_bytes,
                            total: d.total_bytes,
                        };
                        e.onRequestProgress(t);
                    }
                    setTimeout(r, o);
                } else n(Error("Unknown upload status"));
            };
            r();
        });
    }
    constructor() {
        if (!(0, i.X6)()) throw Error("Libdiscore is not loaded");
    }
}
