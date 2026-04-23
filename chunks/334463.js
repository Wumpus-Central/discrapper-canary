"use strict";
let r, i, s, a;
n.d(t, { A: () => E });
var o = n(311907),
    l = n(73153),
    u = n(652215),
    c = n(806931);
let d = new Map(),
    _ = {},
    f = u.CUs.BOTTOM_RIGHT,
    p = {
        [c.R8.VIDEO]: c.fG[c.R8.VIDEO],
        [c.R8.CAMERA_PREVIEW]: c.fG[c.R8.CAMERA_PREVIEW],
        [c.R8.HAVEN]: c.fG[c.R8.HAVEN],
    };
class h extends o.Ay.PersistedStore {
    static displayName = "PictureInPictureStore";
    static persistKey = "PictureInPictureStore";
    static migrations = [
        (e) => ({
            pipWidths: {
                [c.R8.VIDEO]: e.pipWidth ?? c.fG[c.R8.VIDEO],
                [c.R8.CAMERA_PREVIEW]: c.fG[c.R8.CAMERA_PREVIEW],
                [c.R8.HAVEN]: c.fG[c.R8.HAVEN] ?? c.fG[c.R8.VIDEO],
            },
            openPosition: e.openPosition ?? u.CUs.BOTTOM_RIGHT,
        }),
    ];
    initialize(e) {
        if (null == e) {
            (f = u.CUs.BOTTOM_RIGHT),
                (p = {
                    [c.R8.VIDEO]: c.fG[c.R8.VIDEO],
                    [c.R8.CAMERA_PREVIEW]: c.fG[c.R8.CAMERA_PREVIEW],
                    [c.R8.HAVEN]: c.fG[c.R8.HAVEN] ?? c.fG[c.R8.VIDEO],
                });
            return;
        }
        (f = e.openPosition), (p = e.pipWidths);
    }
    get pipWindow() {
        return null == r && null == i && null == s && null == a ? null : d.get(r ?? i ?? s ?? a ?? "");
    }
    get pipVideoWindow() {
        return null == r ? null : d.get(r);
    }
    get pipActivityWindow() {
        return null == i ? null : d.get(i);
    }
    get pipFrameWindow() {
        return null == s ? null : d.get(s);
    }
    get pipHavenWindow() {
        return null == a ? null : d.get(a);
    }
    get pipWindows() {
        return d;
    }
    pipWidth(e) {
        return p[e];
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
        return null != e && d.has(e);
    }
    getState() {
        return { openPosition: f, pipWidths: p };
    }
}
let E = new h(l.h, {
    PICTURE_IN_PICTURE_OPEN: function (e) {
        let { id: t, component: n, props: o } = e;
        if (null != d.get(t)) return;
        let l = { id: t, component: n, position: o.position ?? f, props: o, docked: o.docked ?? !1 };
        d.set(t, l),
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
        if (!d.has(t)) return !1;
        {
            d.delete(t);
            let e = Array.from(d.keys());
            r === t
                ? (r = e.find((e) => {
                      let t = d.get(e);
                      return null != t && t.component === u.o1q.VIDEO;
                  }))
                : i === t
                  ? (i = e.find((e) => {
                        let t = d.get(e);
                        return null != t && t.component === u.o1q.ACTIVITY;
                    }))
                  : s === t
                    ? (s = e.find((e) => {
                          let t = d.get(e);
                          return null != t && t.component === u.o1q.FRAME;
                      }))
                    : a === t &&
                      (a = e.find((e) => {
                          let t = d.get(e);
                          return null != t && t.component === u.o1q.HAVEN;
                      }));
        }
    },
    PICTURE_IN_PICTURE_MOVE: function (e) {
        let { id: t, position: n } = e;
        if (null == t || (r !== t && i !== t && s !== t && a !== t)) return !1;
        {
            let e = new Map();
            d.forEach((t, r) => {
                e.set(r, { ...t, position: n });
            }),
                (d = e),
                (f = n);
        }
    },
    PICTURE_IN_PICTURE_RESIZE: function (e) {
        let { width: t, pipType: n } = e;
        p[n] = t;
    },
    PICTURE_IN_PICTURE_HIDE: function (e) {
        let { id: t } = e;
        if (r !== t && i !== t && s !== t && a !== t) return !1;
        {
            let e = d.get(t);
            if (null == e) return !1;
            d.set(t, { ...e, hidden: !0 });
        }
    },
    PICTURE_IN_PICTURE_SHOW: function (e) {
        let { id: t } = e;
        if (r !== t && i !== t && s !== t && a !== t) return !1;
        {
            let e = d.get(t);
            if (null == e) return !1;
            d.set(t, { ...e, hidden: !1 });
        }
    },
    PICTURE_IN_PICTURE_UPDATE_RECT: function (e) {
        let { id: t, rect: n } = e;
        _[t] = n;
    },
    PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function (e) {
        let { id: t } = e,
            n = d.get(t);
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
        (r = null), (i = null), (s = null), (a = null), (d = new Map());
    },
});
