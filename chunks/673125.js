n(653041), n(47120);
var i,
    l,
    a,
    r,
    s = n(442837),
    o = n(570140),
    c = n(633302),
    u = n(594174),
    d = n(176354),
    m = n(984063),
    f = n(88315),
    p = n(813900);
let h = {},
    g = {},
    v = {},
    S = !0,
    I = null;
function _(e) {
    if (null == g[e]) {
        let t = u.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, p.Ks),
            i = new Image();
        (i.src = n), (g[e] = i);
    }
}
class x extends (i = s.ZP.Store) {
    get visibleOverlayCanvas() {
        return S;
    }
    getDrawables(e) {
        return null != h[e] ? h[e] : [];
    }
    getAvatarImage(e) {
        return g[e];
    }
    getEmojiImage(e) {
        return v[e];
    }
    getDrawMode() {
        return I;
    }
}
(r = 'SharedCanvasStore'),
    (a = 'displayName') in (l = x)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r);
let E = new x(o.Z, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
        let { lineId: t, newPoints: n, userId: i, streamerId: l } = e,
            a = h[l];
        if (null == a)
            h[l] = [
                {
                    type: m.W.LINE,
                    id: t,
                    userId: i,
                    points: n
                }
            ];
        else {
            let e = a.find((e) => e.id === t);
            null == e
                ? a.push({
                      type: m.W.LINE,
                      id: t,
                      userId: i,
                      points: n
                  })
                : (0, f.P7)(e) && e.points.push(...n);
        }
        _(i);
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
        var t, n, i;
        let { emojiHose: l, streamerId: a, userId: r } = e,
            s = {
                ...l,
                type: m.W.EMOJI_HOSE
            };
        if (null == h[a]) h[a] = [s];
        else {
            let e = h[a].findIndex((e) => e.id === l.id);
            e >= 0
                ? (h[a][e] = {
                      ...h[a][e],
                      ...s
                  })
                : h[a].push(s);
        }
        let o = null !== (n = null !== (t = l.emojiId) && void 0 !== t ? t : l.emojiName) && void 0 !== n ? n : '';
        if (null == v[o]) {
            let e = null != l.emojiName ? c.ZP.convertNameToSurrogate(l.emojiName) : null;
            (v[o] = new Image()),
                (v[o].src = (0, d.qc)(
                    {
                        id: l.emojiId,
                        name: null !== (i = null != e ? e : l.emojiName) && void 0 !== i ? i : '',
                        animated: !1
                    },
                    p.qh
                ));
        }
        _(r);
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
        I = t;
    },
    TOGGLE_OVERLAY_CANVAS: function (e) {
        let {} = e;
        S = !S;
    }
});
t.Z = E;
