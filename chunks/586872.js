n.d(t, { L: () => u });
var r = n(73153),
    i = n(425059),
    a = n(141468);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function u(e) {
    let { channelId: t, message: n, items: s, shouldUploadFailureSendNotification: l } = e,
        u = new i.A(),
        d = (0, a.rh)(c(o({}, n), { id: u._file.id }));
    u.on("start", (e) => {
        r.h.dispatch({
            type: "UPLOAD_START",
            channelId: t,
            file: e,
            message: d,
            uploader: u,
        });
    }),
        u.on("progress", (e) => {
            r.h.dispatch({
                type: "UPLOAD_PROGRESS",
                channelId: t,
                file: e,
            });
        }),
        u.on("error", (e, n, i, a) => {
            r.h.dispatch({
                type: "UPLOAD_FAIL",
                channelId: t,
                file: e,
                messageId: d.id,
                shouldSendNotification: l,
            });
        }),
        u.on("complete", (e) => {
            u._aborted &&
                r.h.dispatch({
                    type: "UPLOAD_COMPLETE",
                    channelId: t,
                    file: e,
                    aborted: !0,
                });
        });
    let f = await u.uploadFiles(s);
    if (!u._aborted)
        return {
            attachments: f,
            uploader: u,
        };
}
