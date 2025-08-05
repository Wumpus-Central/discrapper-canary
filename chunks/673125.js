(n.d(t, { Z: () => C }), n(539854), n(388685));
var r,
    i = n(442837),
    a = n(570140),
    o = n(633302),
    s = n(594174),
    l = n(176354),
    c = n(984063),
    u = n(88315),
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = {},
    g = {},
    E = {},
    b = !0,
    y = null;
function O(e) {
    if (null == g[e]) {
        let t = s.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, d.Ks),
            r = new Image();
        ((r.src = n), (g[e] = r));
    }
}
function v(e) {
    let { lineId: t, newPoints: n, userId: r, streamerId: i } = e,
        a = m[i];
    if (null == a)
        m[i] = [
            {
                type: c.W.LINE,
                id: t,
                userId: r,
                points: n
            }
        ];
    else {
        let e = a.find((e) => e.id === t);
        null == e
            ? a.push({
                  type: c.W.LINE,
                  id: t,
                  userId: r,
                  points: n
              })
            : (0, u.P7)(e) && e.points.push(...n);
    }
    O(r);
}
function I(e) {
    var t, n, r;
    let { emojiHose: i, streamerId: a, userId: s } = e,
        u = h(_({}, i), { type: c.W.EMOJI_HOSE });
    if (null == m[a]) m[a] = [u];
    else {
        let e = m[a].findIndex((e) => e.id === i.id);
        e >= 0 ? (m[a][e] = _({}, m[a][e], u)) : m[a].push(u);
    }
    let f = null != (n = null != (t = i.emojiId) ? t : i.emojiName) ? n : '';
    if (null == E[f]) {
        let e = null != i.emojiName ? o.ZP.convertNameToSurrogate(i.emojiName) : null;
        ((E[f] = new Image()),
            (E[f].src = (0, l.qc)(
                {
                    id: i.emojiId,
                    name: null != (r = null != e ? e : i.emojiName) ? r : '',
                    animated: !1
                },
                d.qh
            )));
    }
    O(s);
}
function T(e) {
    let { drawables: t, streamerId: n } = e;
    if (null != m[n]) {
        let e = new Set();
        (t.forEach((t) => e.add(t.id)), (m[n] = m[n].filter((t) => !e.has(t.id))));
    }
}
function S(e) {
    let { drawMode: t } = e;
    y = t;
}
function A(e) {
    let {} = e;
    b = !b;
}
class N extends (r = i.ZP.Store) {
    get visibleOverlayCanvas() {
        return b;
    }
    getDrawables(e) {
        return null != m[e] ? m[e] : [];
    }
    getAvatarImage(e) {
        return g[e];
    }
    getEmojiImage(e) {
        return E[e];
    }
    getDrawMode() {
        return y;
    }
}
f(N, 'displayName', 'SharedCanvasStore');
let C = new N(a.Z, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: v,
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: I,
    SHARED_CANVAS_CLEAR_DRAWABLES: T,
    SHARED_CANVAS_SET_DRAW_MODE: S,
    TOGGLE_OVERLAY_CANVAS: A
});
