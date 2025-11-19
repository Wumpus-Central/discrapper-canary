n.d(t, { Z: () => y }), n(539854), n(388685);
var r,
    i = n(442837),
    l = n(570140),
    a = n(633302),
    o = n(594174),
    c = n(176354),
    s = n(984063),
    u = n(88315),
    d = n(813900);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let m = {},
    _ = {},
    g = {},
    b = !0,
    v = null;
function E(e) {
    if (null == _[e]) {
        let t = o.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, d.Ks),
            r = new Image();
        (r.src = n), (_[e] = r);
    }
}
class h extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(o.default);
    }
    get visibleOverlayCanvas() {
        return b;
    }
    getDrawables(e) {
        return null != m[e] ? m[e] : [];
    }
    getAvatarImage(e) {
        return _[e];
    }
    getEmojiImage(e) {
        return g[e];
    }
    getDrawMode() {
        return v;
    }
}
f(h, "displayName", "SharedCanvasStore");
let y = new h(l.Z, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
        let { lineId: t, newPoints: n, userId: r, streamerId: i } = e,
            l = m[i];
        if (null == l)
            m[i] = [
                {
                    type: s.W.LINE,
                    id: t,
                    userId: r,
                    points: n,
                },
            ];
        else {
            let e = l.find((e) => e.id === t);
            null == e
                ? l.push({
                      type: s.W.LINE,
                      id: t,
                      userId: r,
                      points: n,
                  })
                : (0, u.P7)(e) && e.points.push(...n);
        }
        E(r);
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
        var t, n, r, i, l;
        let { emojiHose: o, streamerId: u, userId: f } = e,
            _ =
                ((i = p({}, o)),
                (l = l = { type: s.W.EMOJI_HOSE }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                i);
        if (null == m[u]) m[u] = [_];
        else {
            let e = m[u].findIndex((e) => e.id === o.id);
            e >= 0 ? (m[u][e] = p({}, m[u][e], _)) : m[u].push(_);
        }
        let b = null != (n = null != (t = o.emojiId) ? t : o.emojiName) ? n : "";
        if (null == g[b]) {
            let e = null != o.emojiName ? a.ZP.convertNameToSurrogate(o.emojiName) : null;
            (g[b] = new Image()),
                (g[b].src = (0, c.qc)(
                    {
                        id: o.emojiId,
                        name: null != (r = null != e ? e : o.emojiName) ? r : "",
                        animated: !1,
                    },
                    d.qh,
                ));
        }
        E(f);
    },
    SHARED_CANVAS_CLEAR_DRAWABLES: function (e) {
        let { drawables: t, streamerId: n } = e;
        if (null != m[n]) {
            let e = new Set();
            t.forEach((t) => e.add(t.id)), (m[n] = m[n].filter((t) => !e.has(t.id)));
        }
    },
    SHARED_CANVAS_SET_DRAW_MODE: function (e) {
        let { drawMode: t } = e;
        v = t;
    },
    TOGGLE_OVERLAY_CANVAS: function (e) {
        let {} = e;
        b = !b;
    },
});
