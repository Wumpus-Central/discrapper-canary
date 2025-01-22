r.d(n, {
    Cb: function () {
        return i;
    },
    Hv: function () {
        return E;
    },
    JD: function () {
        return m;
    },
    VY: function () {
        return p;
    },
    y_: function () {
        return g;
    },
    ym: function () {
        return f;
    }
});
var i,
    a = r(789020);
var o = r(911969),
    s = r(406432),
    l = r(630388),
    u = r(591759),
    c = r(981631);
function d(e) {
    return {
        version: e.version,
        flags: e.flags
    };
}
function f(e) {
    var n;
    return {
        url: e.url,
        proxyUrl: e.proxy_url,
        height: e.height,
        width: e.width,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholder_version,
        contentType: e.content_type,
        loadingState: e.loading_state,
        contentScanMetadata: null != e.content_scan_metadata ? d(e.content_scan_metadata) : void 0,
        srcIsAnimated: (0, l.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, c.J0y.IS_ANIMATED)
    };
}
function p(e) {
    var n, r;
    let i = 0;
    return (
        (0, l.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, c.J0y.CONTAINS_EXPLICIT_MEDIA) && (i += 1),
        {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            contentType: e.content_type,
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            loadingState: o.f.LOADED_SUCCESS,
            contentScanMetadata:
                null == e.content_scan_version
                    ? void 0
                    : {
                          version: e.content_scan_version,
                          flags: i
                      },
            srcIsAnimated: (0, l.yE)(null !== (r = e.flags) && void 0 !== r ? r : 0, c.J0y.IS_ANIMATED)
        }
    );
}
function h(e) {
    return (0, s.tw)(e.contentType) ? 'IMAGE' : (0, s.X2)(e.contentType) && null != e.proxyUrl && null != u.Z.toURLSafe(e.proxyUrl) ? 'VIDEO' : 'INVALID';
}
function _(e) {
    return (0, s.CO)(e.filename) ? 'IMAGE' : (0, s.NU)(e.filename) ? 'VIDEO' : 'INVALID';
}
function m(e, n) {
    return {
        ...p(e),
        type: _(e),
        alt: e.description,
        sourceMetadata: {
            message: n,
            identifier: {
                type: 'attachment',
                attachmentId: e.id,
                filename: e.filename,
                title: e.title,
                size: e.size
            }
        }
    };
}
function g(e) {
    return {
        ...e,
        type: h(e)
    };
}
function E(e, n, r) {
    return {
        type: r,
        url: e.url,
        proxyUrl: e.proxyURL,
        width: e.width,
        height: e.height,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholderVersion,
        sourceMetadata: n
    };
}
!(function (e) {
    e[(e.EXPLICIT = 1)] = 'EXPLICIT';
})(i || (i = {}));
