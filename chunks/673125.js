n.d(t, { Z: () => x }), n(653041), n(47120);
var i,
    l,
    a,
    r = n(442837),
    s = n(570140),
    o = n(633302),
    c = n(594174),
    u = n(176354),
    d = n(984063),
    m = n(88315),
    f = n(813900);
let p = {},
    h = {},
    g = {},
    v = !0,
    _ = null;
function S(e) {
    if (null == h[e]) {
        let t = c.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, f.Ks),
            i = new Image();
        (i.src = n), (h[e] = i);
    }
}
class I extends (i = r.ZP.Store) {
    get visibleOverlayCanvas() {
        return v;
    }
    getDrawables(e) {
        return null != p[e] ? p[e] : [];
    }
    getAvatarImage(e) {
        return h[e];
    }
    getEmojiImage(e) {
        return g[e];
    }
    getDrawMode() {
        return _;
    }
}
(a = 'SharedCanvasStore'),
    (l = 'displayName') in I
        ? Object.defineProperty(I, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[l] = a);
let x = new I(s.Z, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
        let { lineId: t, newPoints: n, userId: i, streamerId: l } = e,
            a = p[l];
        if (null == a)
            p[l] = [
                {
                    type: d.W.LINE,
                    id: t,
                    userId: i,
                    points: n
                }
            ];
        else {
            let e = a.find((e) => e.id === t);
            null == e
                ? a.push({
                      type: d.W.LINE,
                      id: t,
                      userId: i,
                      points: n
                  })
                : (0, m.P7)(e) && e.points.push(...n);
        }
        S(i);
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
        var t, n, i;
        let { emojiHose: l, streamerId: a, userId: r } = e,
            s = {
                ...l,
                type: d.W.EMOJI_HOSE
            };
        if (null == p[a]) p[a] = [s];
        else {
            let e = p[a].findIndex((e) => e.id === l.id);
            e >= 0
                ? (p[a][e] = {
                      ...p[a][e],
                      ...s
                  })
                : p[a].push(s);
        }
        let c = null !== (n = null !== (t = l.emojiId) && void 0 !== t ? t : l.emojiName) && void 0 !== n ? n : '';
        if (null == g[c]) {
            let e = null != l.emojiName ? o.ZP.convertNameToSurrogate(l.emojiName) : null;
            (g[c] = new Image()),
                (g[c].src = (0, u.qc)(
                    {
                        id: l.emojiId,
                        name: null !== (i = null != e ? e : l.emojiName) && void 0 !== i ? i : '',
                        animated: !1
                    },
                    f.qh
                ));
        }
        S(r);
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
        _ = t;
    },
    TOGGLE_OVERLAY_CANVAS: function (e) {
        let {} = e;
        v = !v;
    }
});
