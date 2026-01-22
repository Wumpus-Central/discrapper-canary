n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(453771),
    s = n(619517),
    o = n(922667),
    l = n(652215),
    c = n(985018);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
class m extends i.Component {
    render() {
        let e = this.props,
            {
                src: t,
                fileSize: n,
                className: i,
                mediaPlayerClassName: u,
                poster: f,
                fileName: h,
                naturalWidth: m,
                naturalHeight: g,
                playable: E,
                downloadable: b = !0,
                volume: y,
                autoPlay: O,
                autoMute: A,
                responsive: v,
                mediaLayoutType: S,
                mimeType: I,
                renderOverlayContent: T,
                renderLinkComponent: C,
                onClick: N,
                onPlay: R,
                onPause: w,
                onEnded: P,
                onControlsShow: D,
                onControlsHide: x,
                onVolumeChange: L,
                onMute: j,
                disableArrowKeySeek: M,
                alt: k = c.intl.string(c.t.FlNoSV),
            } = e,
            U = _(e, [
                "src",
                "fileSize",
                "className",
                "mediaPlayerClassName",
                "poster",
                "fileName",
                "naturalWidth",
                "naturalHeight",
                "playable",
                "downloadable",
                "volume",
                "autoPlay",
                "autoMute",
                "responsive",
                "mediaLayoutType",
                "mimeType",
                "renderOverlayContent",
                "renderLinkComponent",
                "onClick",
                "onPlay",
                "onPause",
                "onEnded",
                "onControlsShow",
                "onControlsHide",
                "onVolumeChange",
                "onMute",
                "disableArrowKeySeek",
                "alt",
            ]);
        return (0, r.jsx)(
            s.Ay,
            p(
                d(
                    {
                        alt: k,
                        className: i,
                        src: f,
                    },
                    U,
                ),
                {
                    minWidth: o.Ay.minWidth,
                    minHeight: o.Ay.minHeight,
                    shouldLink: !1,
                    shouldAnimate: !1,
                    mediaLayoutType: S,
                    responsive: v,
                    children: (e) => {
                        let {
                                src: i,
                                size: { width: s, height: c },
                            } = e,
                            d = !((m <= l.AaC && g <= l.oJQ) || (m <= l.oJQ && g <= l.AaC));
                        return (0, r.jsx)(o.Ay, {
                            alt: k,
                            className: u,
                            forceExternal: d,
                            src: t,
                            poster: i,
                            width: s,
                            height: c,
                            responsive: v,
                            volume: y,
                            autoPlay: null != O && O,
                            autoMute: null != A && A,
                            type: o.Ay.Types.VIDEO,
                            mediaLayoutType: S,
                            fileName: h,
                            fileSize: null == n ? void 0 : (0, a.Hb)(n),
                            fileSizeBytes: null == n ? void 0 : n,
                            playable: E,
                            renderLinkComponent: C,
                            renderOverlayContent: T,
                            onClick: N,
                            onPlay: R,
                            onPause: w,
                            onEnded: P,
                            onVolumeChange: L,
                            onMute: j,
                            onControlsShow: D,
                            onControlsHide: x,
                            mimeType: I,
                            downloadable: b,
                            disableArrowKeySeek: M,
                        });
                    },
                },
            ),
        );
    }
}
