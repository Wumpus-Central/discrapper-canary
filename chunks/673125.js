n.d(t, { Z: () => y }), n(653041), n(47120);
var r,
    l = n(442837),
    i = n(570140),
    a = n(633302),
    o = n(594174),
    s = n(176354),
    u = n(984063),
    c = n(88315),
    d = n(813900);
function f(e, t, n) {
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
function m(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = {},
    g = {},
    E = {},
    h = !0,
    v = null;
function b(e) {
    if (null == g[e]) {
        let t = o.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, d.Ks),
            r = new Image();
        (r.src = n), (g[e] = r);
    }
}
class S extends (r = l.ZP.Store) {
    get visibleOverlayCanvas() {
        return h;
    }
    getDrawables(e) {
        return null != p[e] ? p[e] : [];
    }
    getAvatarImage(e) {
        return g[e];
    }
    getEmojiImage(e) {
        return E[e];
    }
    getDrawMode() {
        return v;
    }
}
f(S, 'displayName', 'SharedCanvasStore');
let y = new S(i.Z, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
        let { lineId: t, newPoints: n, userId: r, streamerId: l } = e,
            i = p[l];
        if (null == i)
            p[l] = [
                {
                    type: u.W.LINE,
                    id: t,
                    userId: r,
                    points: n
                }
            ];
        else {
            let e = i.find((e) => e.id === t);
            null == e
                ? i.push({
                      type: u.W.LINE,
                      id: t,
                      userId: r,
                      points: n
                  })
                : (0, c.P7)(e) && e.points.push(...n);
        }
        b(r);
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
        var t, n, r, l, i;
        let { emojiHose: o, streamerId: c, userId: f } = e,
            g =
                ((l = m({}, o)),
                (i = i = { type: u.W.EMOJI_HOSE }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                l);
        if (null == p[c]) p[c] = [g];
        else {
            let e = p[c].findIndex((e) => e.id === o.id);
            e >= 0 ? (p[c][e] = m({}, p[c][e], g)) : p[c].push(g);
        }
        let h = null != (n = null != (t = o.emojiId) ? t : o.emojiName) ? n : '';
        if (null == E[h]) {
            let e = null != o.emojiName ? a.ZP.convertNameToSurrogate(o.emojiName) : null;
            (E[h] = new Image()),
                (E[h].src = (0, s.qc)(
                    {
                        id: o.emojiId,
                        name: null != (r = null != e ? e : o.emojiName) ? r : '',
                        animated: !1
                    },
                    d.qh
                ));
        }
        b(f);
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
        v = t;
    },
    TOGGLE_OVERLAY_CANVAS: function (e) {
        let {} = e;
        h = !h;
    }
});
