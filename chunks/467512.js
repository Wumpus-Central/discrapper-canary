n.d(t, { c: () => u });
var r = n(570140),
    i = n(680287),
    a = n(786761);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            }));
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
    let { channelId: t, message: n, items: o, shouldUploadFailureSendNotification: l } = e,
        u = new i.Z(),
        d = (0, a.e5)(c(s({}, n), { id: u._file.id }));
    (u.on('start', (e) => {
        r.Z.dispatch({
            type: 'UPLOAD_START',
            channelId: t,
            file: e,
            message: d,
            uploader: u
        });
    }),
        u.on('progress', (e) => {
            r.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: t,
                file: e
            });
        }),
        u.on('error', (e, n, i, a) => {
            r.Z.dispatch({
                type: 'UPLOAD_FAIL',
                channelId: t,
                file: e,
                messageId: d.id,
                shouldSendNotification: l
            });
        }),
        u.on('complete', (e) => {
            u._aborted &&
                r.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: t,
                    file: e,
                    aborted: !0
                });
        }));
    let _ = await u.uploadFiles(o);
    if (!u._aborted)
        return {
            attachments: _,
            uploader: u
        };
}
