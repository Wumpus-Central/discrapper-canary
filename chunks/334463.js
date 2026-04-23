"use strict";
let i, r, s, a;
n.d(t, { A: () => f });
var o = n(17928),
    l = n(228366),
    d = n(652215),
    _ = n(806931);
let u = new Map(),
    c = {},
    E = d.CUs.BOTTOM_RIGHT,
    h = {
        [_.R8.VIDEO]: _.fG[_.R8.VIDEO],
        [_.R8.CAMERA_PREVIEW]: _.fG[_.R8.CAMERA_PREVIEW],
        [_.R8.HAVEN]: _.fG[_.R8.HAVEN],
    };
class m extends o.Ay.PersistedStore {
    static displayName = "PictureInPictureStore";
    static persistKey = "PictureInPictureStore";
    static migrations = [
        (e) => ({
            pipWidths: {
                [_.R8.VIDEO]: e.pipWidth ?? _.fG[_.R8.VIDEO],
                [_.R8.CAMERA_PREVIEW]: _.fG[_.R8.CAMERA_PREVIEW],
                [_.R8.HAVEN]: _.fG[_.R8.HAVEN] ?? _.fG[_.R8.VIDEO],
            },
            openPosition: e.openPosition ?? d.CUs.BOTTOM_RIGHT,
        }),
    ];
    initialize(e) {
        if (null == e) {
            (E = d.CUs.BOTTOM_RIGHT),
                (h = {
                    [_.R8.VIDEO]: _.fG[_.R8.VIDEO],
                    [_.R8.CAMERA_PREVIEW]: _.fG[_.R8.CAMERA_PREVIEW],
                    [_.R8.HAVEN]: _.fG[_.R8.HAVEN] ?? _.fG[_.R8.VIDEO],
                });
            return;
        }
        (E = e.openPosition), (h = e.pipWidths);
    }
    get pipWindow() {
        return null == i && null == r && null == s && null == a ? null : u.get(i ?? r ?? s ?? a ?? "");
    }
    get pipVideoWindow() {
        return null == i ? null : u.get(i);
    }
    get pipActivityWindow() {
        return null == r ? null : u.get(r);
    }
    get pipFrameWindow() {
        return null == s ? null : u.get(s);
    }
    get pipHavenWindow() {
        return null == a ? null : u.get(a);
    }
    get pipWindows() {
        return u;
    }
    pipWidth(e) {
        return h[e];
    }
    isEmbeddedActivityHidden() {
        return null == r;
    }
    isFrameHidden() {
        return null == s;
    }
    getDockedRect(e) {
        return c[e];
    }
    isOpen(e) {
        return null != e && u.has(e);
    }
    getState() {
        return { openPosition: E, pipWidths: h };
    }
}
let f = new m(l.h, {
    PICTURE_IN_PICTURE_OPEN: function (e) {
        let { id: t, component: n, props: o } = e;
        if (null != u.get(t)) return;
        let l = { id: t, component: n, position: o.position ?? E, props: o, docked: o.docked ?? !1 };
        u.set(t, l),
            n === d.o1q.VIDEO
                ? null == i && (i = t)
                : n === d.o1q.ACTIVITY
                  ? null == r && (r = t)
                  : n === d.o1q.FRAME
                    ? null == s && (s = t)
                    : n === d.o1q.HAVEN && null == a && (a = t);
    },
    PICTURE_IN_PICTURE_CLOSE: function (e) {
        let { id: t } = e;
        if (!u.has(t)) return !1;
        {
            u.delete(t);
            let e = Array.from(u.keys());
            i === t
                ? (i = e.find((e) => {
                      let t = u.get(e);
                      return null != t && t.component === d.o1q.VIDEO;
                  }))
                : r === t
                  ? (r = e.find((e) => {
                        let t = u.get(e);
                        return null != t && t.component === d.o1q.ACTIVITY;
                    }))
                  : s === t
                    ? (s = e.find((e) => {
                          let t = u.get(e);
                          return null != t && t.component === d.o1q.FRAME;
                      }))
                    : a === t &&
                      (a = e.find((e) => {
                          let t = u.get(e);
                          return null != t && t.component === d.o1q.HAVEN;
                      }));
        }
    },
    PICTURE_IN_PICTURE_MOVE: function (e) {
        let { id: t, position: n } = e;
        if (null == t || (i !== t && r !== t && s !== t && a !== t)) return !1;
        {
            let e = new Map();
            u.forEach((t, i) => {
                e.set(i, { ...t, position: n });
            }),
                (u = e),
                (E = n);
        }
    },
    PICTURE_IN_PICTURE_RESIZE: function (e) {
        let { width: t, pipType: n } = e;
        h[n] = t;
    },
    PICTURE_IN_PICTURE_HIDE: function (e) {
        let { id: t } = e;
        if (i !== t && r !== t && s !== t && a !== t) return !1;
        {
            let e = u.get(t);
            if (null == e) return !1;
            u.set(t, { ...e, hidden: !0 });
        }
    },
    PICTURE_IN_PICTURE_SHOW: function (e) {
        let { id: t } = e;
        if (i !== t && r !== t && s !== t && a !== t) return !1;
        {
            let e = u.get(t);
            if (null == e) return !1;
            u.set(t, { ...e, hidden: !1 });
        }
    },
    PICTURE_IN_PICTURE_UPDATE_RECT: function (e) {
        let { id: t, rect: n } = e;
        c[t] = n;
    },
    PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function (e) {
        let { id: t } = e,
            n = u.get(t);
        null != n &&
            (n.component === d.o1q.VIDEO
                ? (i = t)
                : n.component === d.o1q.ACTIVITY
                  ? (r = t)
                  : n.component === d.o1q.FRAME
                    ? (s = t)
                    : n.component === d.o1q.HAVEN && (a = t));
    },
    LOGOUT: function () {
        (i = null), (r = null), (s = null), (a = null), (u = new Map());
    },
});
