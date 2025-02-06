n.d(t, { Z: () => S }), n(653041), n(47120);
var l,
    i,
    r,
    a = n(442837),
    s = n(570140),
    o = n(633302),
    u = n(594174),
    c = n(176354),
    d = n(984063),
    m = n(88315),
    f = n(813900);
let h = {},
    p = {},
    v = {},
    g = !0,
    E = null;
function x(e) {
    if (null == p[e]) {
        let t = u.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, f.Ks),
            l = new Image();
        (l.src = n), (p[e] = l);
    }
}
class Z extends (l = a.ZP.Store) {
    get visibleOverlayCanvas() {
        return g;
    }
    getDrawables(e) {
        return null != h[e] ? h[e] : [];
    }
    getAvatarImage(e) {
        return p[e];
    }
    getEmojiImage(e) {
        return v[e];
    }
    getDrawMode() {
        return E;
    }
}
(r = 'SharedCanvasStore'),
    (i = 'displayName') in Z
        ? Object.defineProperty(Z, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (Z[i] = r);
let S = new Z(s.Z, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
        let { lineId: t, newPoints: n, userId: l, streamerId: i } = e,
            r = h[i];
        if (null == r)
            h[i] = [
                {
                    type: d.W.LINE,
                    id: t,
                    userId: l,
                    points: n
                }
            ];
        else {
            let e = r.find((e) => e.id === t);
            null == e
                ? r.push({
                      type: d.W.LINE,
                      id: t,
                      userId: l,
                      points: n
                  })
                : (0, m.P7)(e) && e.points.push(...n);
        }
        x(l);
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
        var t, n, l;
        let { emojiHose: i, streamerId: r, userId: a } = e,
            s = {
                ...i,
                type: d.W.EMOJI_HOSE
            };
        if (null == h[r]) h[r] = [s];
        else {
            let e = h[r].findIndex((e) => e.id === i.id);
            e >= 0
                ? (h[r][e] = {
                      ...h[r][e],
                      ...s
                  })
                : h[r].push(s);
        }
        let u = null !== (n = null !== (t = i.emojiId) && void 0 !== t ? t : i.emojiName) && void 0 !== n ? n : '';
        if (null == v[u]) {
            let e = null != i.emojiName ? o.ZP.convertNameToSurrogate(i.emojiName) : null;
            (v[u] = new Image()),
                (v[u].src = (0, c.qc)(
                    {
                        id: i.emojiId,
                        name: null !== (l = null != e ? e : i.emojiName) && void 0 !== l ? l : '',
                        animated: !1
                    },
                    f.qh
                ));
        }
        x(a);
    },
    SHARED_CANVAS_CLEAR_DRAWABLES: function (e) {
        let { drawables: t, streamerId: n } = e;
        if (null != h[n]) {
            let e = new Set();
            t.forEach((t) => e.add(t.id)), (h[n] = h[n].filter((t) => !e.has(t.id)));
        }
    },
    SHARED_CANVAS_SET_DRAW_MODE: function (e) {
        let { drawMode: t } = e;
        E = t;
    },
    TOGGLE_OVERLAY_CANVAS: function (e) {
        let {} = e;
        g = !g;
    }
});
