n.d(t, { A: () => _ }), n(321073), n(896048);
var l,
    r = n(311907),
    i = n(73153),
    a = n(7584),
    s = n(287809),
    o = n(690521),
    c = n(134753),
    u = n(666717);
function d(e, t, n) {
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
n(824217);
let p = {},
    b = {},
    g = {},
    m = !0,
    h = null;
function A(e) {
    if (null == b[e]) {
        let t = s.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, 80),
            l = new Image();
        (l.src = n), (b[e] = l);
    }
}
class y extends (l = r.Ay.Store) {
    initialize() {
        this.waitFor(s.default);
    }
    get visibleOverlayCanvas() {
        return m;
    }
    getDrawables(e) {
        return null != p[e] ? p[e] : [];
    }
    getAvatarImage(e) {
        return b[e];
    }
    getEmojiImage(e) {
        return g[e];
    }
    getDrawMode() {
        return h;
    }
}
d(y, "displayName", "SharedCanvasStore");
let _ = new y(i.h, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
        let { lineId: t, newPoints: n, userId: l, streamerId: r } = e,
            i = p[r];
        if (null == i)
            p[r] = [
                {
                    type: c.Z.LINE,
                    id: t,
                    userId: l,
                    points: n,
                },
            ];
        else {
            let e = i.find((e) => e.id === t);
            null == e
                ? i.push({
                      type: c.Z.LINE,
                      id: t,
                      userId: l,
                      points: n,
                  })
                : (0, u.PA)(e) && e.points.push(...n);
        }
        A(l);
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
        var t, n, l, r, i;
        let { emojiHose: s, streamerId: u, userId: d } = e,
            b =
                ((r = f({}, s)),
                (i = i = { type: c.Z.EMOJI_HOSE }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                r);
        if (null == p[u]) p[u] = [b];
        else {
            let e = p[u].findIndex((e) => e.id === s.id);
            e >= 0 ? (p[u][e] = f({}, p[u][e], b)) : p[u].push(b);
        }
        let m = null != (t = null != (n = s.emojiId) ? n : s.emojiName) ? t : "";
        if (null == g[m]) {
            let e = null != s.emojiName ? a.Ay.convertNameToSurrogate(s.emojiName) : null;
            (g[m] = new Image()),
                (g[m].src = (0, o.Ez)(
                    {
                        id: s.emojiId,
                        name: null != (l = null != e ? e : s.emojiName) ? l : "",
                        animated: !1,
                    },
                    48,
                ));
        }
        A(d);
    },
    SHARED_CANVAS_CLEAR_DRAWABLES: function (e) {
        let { drawables: t, streamerId: n } = e;
        if (null != p[n]) {
            let e = new Set();
            t.forEach((t) => e.add(t.id)), (p[n] = p[n].filter((t) => !e.has(t.id)));
        }
    },
    SHARED_CANVAS_SET_DRAW_MODE: function (e) {
        let { drawMode: t } = e;
        h = t;
    },
    TOGGLE_OVERLAY_CANVAS: function (e) {
        let {} = e;
        m = !m;
    },
});
