n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(27457),
    l = n(131951),
    a = n(938243);
function s(e) {
    var {
            aspectRatio: t,
            blocked: n,
            ignored: s,
            channel: o,
            className: c,
            focused: u,
            children: d,
            inCall: h,
            inPopout: p,
            noBorder: f,
            onClick: g,
            onContextMenu: m,
            onDoubleClick: b,
            onVideoResize: y,
            paused: x,
            pulseSpeakingIndicator: j,
            participant: _,
            width: O,
        } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, [
            "aspectRatio",
            "blocked",
            "ignored",
            "channel",
            "className",
            "focused",
            "children",
            "inCall",
            "inPopout",
            "noBorder",
            "onClick",
            "onContextMenu",
            "onDoubleClick",
            "onVideoResize",
            "paused",
            "pulseSpeakingIndicator",
            "participant",
            "width",
        ]);
    let C = l.Z.getVideoComponent();
    return (0, r.jsx)("div", {
        style: { width: O },
        className: a.spaceBetweenTiles,
        children: (0, r.jsxs)("div", {
            className: a.tileSizer,
            style: { aspectRatio: t },
            children: [
                (0, r.jsx)(
                    i.ZP,
                    (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            blocked: n,
                            ignored: s,
                            channel: o,
                            className: c,
                            focused: u,
                            inCall: h,
                            inPopout: p,
                            noBorder: f,
                            onClick: g,
                            onContextMenu: m,
                            onDoubleClick: b,
                            onVideoResize: y,
                            participant: _,
                            paused: x,
                            pulseSpeakingIndicator: j,
                            videoComponent: C,
                            width: O,
                        },
                        v,
                    ),
                ),
                d,
            ],
        }),
    });
}
