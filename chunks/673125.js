n.d(t, { Z: () => S }), n(539854), n(388685);
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
let _ = {},
    m = {},
    g = {},
    E = !0,
    b = null;
function v(e) {
    if (null == m[e]) {
        let t = o.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, d.Ks),
            r = new Image();
        (r.src = n), (m[e] = r);
    }
}
class h extends (r = i.ZP.Store) {
    get visibleOverlayCanvas() {
        return E;
    }
    getDrawables(e) {
        return null != _[e] ? _[e] : [];
    }
    getAvatarImage(e) {
        return m[e];
    }
    getEmojiImage(e) {
        return g[e];
    }
    getDrawMode() {
        return b;
    }
}
f(h, "displayName", "SharedCanvasStore");
let S = new h(l.Z, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
        let { lineId: t, newPoints: n, userId: r, streamerId: i } = e,
            l = _[i];
        if (null == l)
            _[i] = [
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
        v(r);
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
        var t, n, r, i, l;
        let { emojiHose: o, streamerId: u, userId: f } = e,
            m =
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
        if (null == _[u]) _[u] = [m];
        else {
            let e = _[u].findIndex((e) => e.id === o.id);
            e >= 0 ? (_[u][e] = p({}, _[u][e], m)) : _[u].push(m);
        }
        let E = null != (n = null != (t = o.emojiId) ? t : o.emojiName) ? n : "";
        if (null == g[E]) {
            let e = null != o.emojiName ? a.ZP.convertNameToSurrogate(o.emojiName) : null;
            (g[E] = new Image()),
                (g[E].src = (0, c.qc)(
                    {
                        id: o.emojiId,
                        name: null != (r = null != e ? e : o.emojiName) ? r : "",
                        animated: !1,
                    },
                    d.qh,
                ));
        }
        v(f);
    },
    SHARED_CANVAS_CLEAR_DRAWABLES: function (e) {
        let { drawables: t, streamerId: n } = e;
        if (null != _[n]) {
            let e = new Set();
            t.forEach((t) => e.add(t.id)), (_[n] = _[n].filter((t) => !e.has(t.id)));
        }
    },
    SHARED_CANVAS_SET_DRAW_MODE: function (e) {
        let { drawMode: t } = e;
        b = t;
    },
    TOGGLE_OVERLAY_CANVAS: function (e) {
        let {} = e;
        E = !E;
    },
});
