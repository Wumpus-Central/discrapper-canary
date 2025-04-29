n.d(t, {
    Cb: () => f,
    Hv: () => y,
    JD: () => E,
    VY: () => h,
    y_: () => b,
    ym: () => p
}),
    n(997841),
    n(953529);
var r = n(911969),
    i = n(406432),
    o = n(630388),
    a = n(591759),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var f = (function (e) {
    return (e[(e.EXPLICIT = 1)] = 'EXPLICIT'), e;
})({});
function _(e) {
    return {
        version: e.version,
        flags: e.flags
    };
}
function p(e) {
    var t;
    return {
        url: e.url,
        proxyUrl: e.proxy_url,
        height: e.height,
        width: e.width,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholder_version,
        contentType: e.content_type,
        loadingState: e.loading_state,
        contentScanMetadata: null != e.content_scan_metadata ? _(e.content_scan_metadata) : void 0,
        srcIsAnimated: (0, o.yE)(null != (t = e.flags) ? t : 0, s.J0y.IS_ANIMATED)
    };
}
function h(e) {
    var t, n;
    let i = 0;
    return (
        (0, o.yE)(null != (t = e.flags) ? t : 0, s.J0y.CONTAINS_EXPLICIT_MEDIA) && (i += 1),
        {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            contentType: e.content_type,
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            loadingState: r.f.LOADED_SUCCESS,
            contentScanMetadata:
                null == e.content_scan_version
                    ? void 0
                    : {
                          version: e.content_scan_version,
                          flags: i
                      },
            srcIsAnimated: (0, o.yE)(null != (n = e.flags) ? n : 0, s.J0y.IS_ANIMATED)
        }
    );
}
function m(e) {
    return (0, i.tw)(e.contentType) ? 'IMAGE' : (0, i.X2)(e.contentType) && null != e.proxyUrl && null != a.Z.toURLSafe(e.proxyUrl) ? 'VIDEO' : 'INVALID';
}
function g(e) {
    return (0, i.CO)(e.filename) ? 'IMAGE' : (0, i.NU)(e.filename) ? 'VIDEO' : 'INVALID';
}
function E(e, t) {
    return d(c({}, h(e)), {
        type: g(e),
        alt: e.description,
        sourceMetadata: {
            message: t,
            identifier: {
                type: 'attachment',
                attachmentId: e.id,
                filename: e.filename,
                title: e.title,
                size: e.size
            }
        }
    });
}
function b(e, t) {
    return d(c({}, e), {
        type: m(e),
        sourceMetadata: { message: t }
    });
}
function y(e, t, n) {
    return {
        type: n,
        url: e.url,
        proxyUrl: e.proxyURL,
        width: e.width,
        height: e.height,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholderVersion,
        sourceMetadata: t
    };
}
