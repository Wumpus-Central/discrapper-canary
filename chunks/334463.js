"use strict";
let r, i, s, a;
n.d(t, { A: () => p });
var o = n(311907),
    l = n(73153),
    u = n(652215),
    d = n(806931);
let c = new Map(),
    _ = {},
    f = u.CUs.BOTTOM_RIGHT,
    E = {
        [d.R8.VIDEO]: d.fG[d.R8.VIDEO],
        [d.R8.CAMERA_PREVIEW]: d.fG[d.R8.CAMERA_PREVIEW],
        [d.R8.HAVEN]: d.fG[d.R8.HAVEN],
    };
class h extends o.Ay.PersistedStore {
    static displayName = "PictureInPictureStore";
    static persistKey = "PictureInPictureStore";
    static migrations = [
        (e) => ({
            pipWidths: {
                [d.R8.VIDEO]: e.pipWidth ?? d.fG[d.R8.VIDEO],
                [d.R8.CAMERA_PREVIEW]: d.fG[d.R8.CAMERA_PREVIEW],
                [d.R8.HAVEN]: d.fG[d.R8.HAVEN] ?? d.fG[d.R8.VIDEO],
            },
            openPosition: e.openPosition ?? u.CUs.BOTTOM_RIGHT,
        }),
    ];
    initialize(e) {
        if (null == e) {
            (f = u.CUs.BOTTOM_RIGHT),
                (E = {
                    [d.R8.VIDEO]: d.fG[d.R8.VIDEO],
                    [d.R8.CAMERA_PREVIEW]: d.fG[d.R8.CAMERA_PREVIEW],
                    [d.R8.HAVEN]: d.fG[d.R8.HAVEN] ?? d.fG[d.R8.VIDEO],
                });
            return;
        }
        (f = e.openPosition), (E = e.pipWidths);
    }
    get pipWindow() {
        return null == r && null == i && null == s && null == a ? null : c.get(r ?? i ?? s ?? a ?? "");
    }
    get pipVideoWindow() {
        return null == r ? null : c.get(r);
    }
    get pipActivityWindow() {
        return null == i ? null : c.get(i);
    }
    get pipFrameWindow() {
        return null == s ? null : c.get(s);
    }
    get pipHavenWindow() {
        return null == a ? null : c.get(a);
    }
    get pipWindows() {
        return c;
    }
    pipWidth(e) {
        return E[e];
    }
    isEmbeddedActivityHidden() {
        return null == i;
    }
    isFrameHidden() {
        return null == s;
    }
    getDockedRect(e) {
        return _[e];
    }
    isOpen(e) {
        return null != e && c.has(e);
    }
    getState() {
        return { openPosition: f, pipWidths: E };
    }
}
let p = new h(l.h, {
    PICTURE_IN_PICTURE_OPEN: function (e) {
        let { id: t, component: n, props: o } = e;
        if (null != c.get(t)) return;
        let l = { id: t, component: n, position: o.position ?? f, props: o, docked: o.docked ?? !1 };
        c.set(t, l),
            n === u.o1q.VIDEO
                ? null == r && (r = t)
                : n === u.o1q.ACTIVITY
                  ? null == i && (i = t)
                  : n === u.o1q.FRAME
                    ? null == s && (s = t)
                    : n === u.o1q.HAVEN && null == a && (a = t);
    },
    PICTURE_IN_PICTURE_CLOSE: function (e) {
        let { id: t } = e;
        if (!c.has(t)) return !1;
        {
            c.delete(t);
            let e = Array.from(c.keys());
            r === t
                ? (r = e.find((e) => {
                      let t = c.get(e);
                      return null != t && t.component === u.o1q.VIDEO;
                  }))
                : i === t
                  ? (i = e.find((e) => {
                        let t = c.get(e);
                        return null != t && t.component === u.o1q.ACTIVITY;
                    }))
                  : s === t
                    ? (s = e.find((e) => {
                          let t = c.get(e);
                          return null != t && t.component === u.o1q.FRAME;
                      }))
                    : a === t &&
                      (a = e.find((e) => {
                          let t = c.get(e);
                          return null != t && t.component === u.o1q.HAVEN;
                      }));
        }
    },
    PICTURE_IN_PICTURE_MOVE: function (e) {
        let { id: t, position: n } = e;
        if (null == t || (r !== t && i !== t && s !== t && a !== t)) return !1;
        {
            let e = new Map();
            c.forEach((t, r) => {
                e.set(r, { ...t, position: n });
            }),
                (c = e),
                (f = n);
        }
    },
    PICTURE_IN_PICTURE_RESIZE: function (e) {
        let { width: t, pipType: n } = e;
        E[n] = t;
    },
    PICTURE_IN_PICTURE_HIDE: function (e) {
        let { id: t } = e;
        if (r !== t && i !== t && s !== t && a !== t) return !1;
        {
            let e = c.get(t);
            if (null == e) return !1;
            c.set(t, { ...e, hidden: !0 });
        }
    },
    PICTURE_IN_PICTURE_SHOW: function (e) {
        let { id: t } = e;
        if (r !== t && i !== t && s !== t && a !== t) return !1;
        {
            let e = c.get(t);
            if (null == e) return !1;
            c.set(t, { ...e, hidden: !1 });
        }
    },
    PICTURE_IN_PICTURE_UPDATE_RECT: function (e) {
        let { id: t, rect: n } = e;
        _[t] = n;
    },
    PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function (e) {
        let { id: t } = e,
            n = c.get(t);
        null != n &&
            (n.component === u.o1q.VIDEO
                ? (r = t)
                : n.component === u.o1q.ACTIVITY
                  ? (i = t)
                  : n.component === u.o1q.FRAME
                    ? (s = t)
                    : n.component === u.o1q.HAVEN && (a = t));
    },
    LOGOUT: function () {
        (r = null), (i = null), (s = null), (a = null), (c = new Map());
    },
});
