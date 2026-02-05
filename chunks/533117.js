n.d(t, { A: () => f }), n(321073);
var i = n(311907),
    l = n(73153),
    a = n(7584),
    s = n(287809),
    r = n(690521),
    o = n(134753),
    c = n(666717);
n(824217);
let d = {},
    u = {},
    h = {},
    m = !0,
    A = null;
function p(e) {
    if (null == u[e]) {
        let t = s.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, 80),
            i = new Image();
        (i.src = n), (u[e] = i);
    }
}
class g extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "SharedCanvasStore";
    get visibleOverlayCanvas() {
        return m;
    }
    getDrawables(e) {
        return null != d[e] ? d[e] : [];
    }
    getAvatarImage(e) {
        return u[e];
    }
    getEmojiImage(e) {
        return h[e];
    }
    getDrawMode() {
        return A;
    }
}
let f = new g(l.h, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
        let { lineId: t, newPoints: n, userId: i, streamerId: l } = e,
            a = d[l];
        if (null == a) d[l] = [{ type: o.Z.LINE, id: t, userId: i, points: n }];
        else {
            let e = a.find((e) => e.id === t);
            null == e ? a.push({ type: o.Z.LINE, id: t, userId: i, points: n }) : (0, c.PA)(e) && e.points.push(...n);
        }
        p(i);
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
        let { emojiHose: t, streamerId: n, userId: i } = e,
            l = { ...t, type: o.Z.EMOJI_HOSE };
        if (null == d[n]) d[n] = [l];
        else {
            let e = d[n].findIndex((e) => e.id === t.id);
            e >= 0 ? (d[n][e] = { ...d[n][e], ...l }) : d[n].push(l);
        }
        let s = t.emojiId ?? t.emojiName ?? "";
        if (null == h[s]) {
            let e = null != t.emojiName ? a.Ay.convertNameToSurrogate(t.emojiName) : null;
            (h[s] = new Image()),
                (h[s].src = (0, r.Ez)({ id: t.emojiId, name: e ?? t.emojiName ?? "", animated: !1 }, 48));
        }
        p(i);
    },
    SHARED_CANVAS_CLEAR_DRAWABLES: function (e) {
        let { drawables: t, streamerId: n } = e;
        if (null != d[n]) {
            let e = new Set();
            t.forEach((t) => e.add(t.id)), (d[n] = d[n].filter((t) => !e.has(t.id)));
        }
    },
    SHARED_CANVAS_SET_DRAW_MODE: function (e) {
        let { drawMode: t } = e;
        A = t;
    },
    TOGGLE_OVERLAY_CANVAS: function (e) {
        let {} = e;
        m = !m;
    },
});
