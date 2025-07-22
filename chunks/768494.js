(n.d(t, {
    Cb: () => _,
    Hv: () => y,
    JD: () => b,
    VY: () => m,
    hR: () => p,
    hg: () => g,
    ym: () => h
}),
    n(997841),
    n(953529));
var r = n(911969),
    i = n(406432),
    a = n(630388),
    o = n(591759),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            }));
    }
    return e;
}
function u(e, t) {
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
var _ = (function (e) {
    return ((e[(e.EXPLICIT = 1)] = 'EXPLICIT'), (e[(e.GORE = 2)] = 'GORE'), e);
})({});
function f(e) {
    return {
        version: e.version,
        flags: e.flags
    };
}
var p = (function (e) {
    return ((e[(e.IS_ANIMATED = 1)] = 'IS_ANIMATED'), e);
})({});
function h(e) {
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
        contentScanMetadata: null != e.content_scan_metadata ? f(e.content_scan_metadata) : void 0,
        flags: null != (t = e.flags) ? t : 0
    };
}
function m(e) {
    var t, n;
    let i = 0;
    (0, a.yE)(null != (t = e.flags) ? t : 0, s.J0y.CONTAINS_EXPLICIT_MEDIA) && (i |= 1);
    let o = 0;
    return (
        (0, a.yE)(null != (n = e.flags) ? n : 0, s.J0y.IS_ANIMATED) && (o |= 1),
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
            flags: o
        }
    );
}
function g(e) {
    return (0, i.tw)(e.contentType) ? 'IMAGE' : (0, i.X2)(e.contentType) && null != e.proxyUrl && null != o.Z.toURLSafe(e.proxyUrl) ? 'VIDEO' : 'INVALID';
}
function E(e) {
    return (0, i.CO)(e.filename) ? 'IMAGE' : (0, i.NU)(e.filename) ? 'VIDEO' : 'INVALID';
}
function b(e, t) {
    return d(c({}, m(e)), {
        type: E(e),
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
function y(e, t, n) {
    return {
        type: n,
        url: e.url,
        proxyUrl: e.proxyURL,
        width: e.width,
        height: e.height,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholderVersion,
        sourceMetadata: t,
        contentType: e.contentType
    };
}
