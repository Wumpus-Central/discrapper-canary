"use strict";
let i, r, a;
n.d(t, { A: () => h });
var s = n(17928),
    l = n(228366),
    o = n(652215),
    d = n(806931);
let c = new Map(),
    u = {},
    _ = o.CUs.BOTTOM_RIGHT,
    E = { [d.R8.VIDEO]: d.fG[d.R8.VIDEO], [d.R8.CAMERA_PREVIEW]: d.fG[d.R8.CAMERA_PREVIEW] };
class A extends s.Ay.PersistedStore {
    static displayName = "PictureInPictureStore";
    static persistKey = "PictureInPictureStore";
    static migrations = [
        (e) => ({
            pipWidths: {
                [d.R8.VIDEO]: e.pipWidth ?? d.fG[d.R8.VIDEO],
                [d.R8.CAMERA_PREVIEW]: d.fG[d.R8.CAMERA_PREVIEW],
            },
            openPosition: e.openPosition ?? o.CUs.BOTTOM_RIGHT,
        }),
    ];
    initialize(e) {
        if (null == e) {
            (_ = o.CUs.BOTTOM_RIGHT),
                (E = { [d.R8.VIDEO]: d.fG[d.R8.VIDEO], [d.R8.CAMERA_PREVIEW]: d.fG[d.R8.CAMERA_PREVIEW] });
            return;
        }
        (_ = e.openPosition), (E = e.pipWidths);
    }
    get pipWindow() {
        return null == i && null == r && null == a ? null : c.get(i ?? r ?? a ?? "");
    }
    get pipVideoWindow() {
        return null == i ? null : c.get(i);
    }
    get pipActivityWindow() {
        return null == r ? null : c.get(r);
    }
    get pipFrameWindow() {
        return null == a ? null : c.get(a);
    }
    get pipWindows() {
        return c;
    }
    pipWidth(e) {
        return E[e];
    }
    isEmbeddedActivityHidden() {
        return null == r;
    }
    isFrameHidden() {
        return null == a;
    }
    getDockedRect(e) {
        return u[e];
    }
    isOpen(e) {
        return null != e && c.has(e);
    }
    getState() {
        return { openPosition: _, pipWidths: E };
    }
}
let h = new A(l.h, {
    PICTURE_IN_PICTURE_OPEN: function (e) {
        let { id: t, component: n, props: s } = e;
        if (null != c.get(t)) return;
        let l = { id: t, component: n, position: s.position ?? _, props: s, docked: s.docked ?? !1 };
        switch ((c.set(t, l), n)) {
            case o.o1q.VIDEO:
                null == i && (i = t);
                break;
            case o.o1q.ACTIVITY:
                null == r && (r = t);
                break;
            case o.o1q.FRAME:
                null == a && (a = t);
        }
    },
    PICTURE_IN_PICTURE_CLOSE: function (e) {
        let { id: t } = e;
        if (!c.has(t)) return !1;
        {
            c.delete(t);
            let e = Array.from(c.keys());
            i === t
                ? (i = e.find((e) => {
                      let t = c.get(e);
                      return null != t && t.component === o.o1q.VIDEO;
                  }))
                : r === t
                  ? (r = e.find((e) => {
                        let t = c.get(e);
                        return null != t && t.component === o.o1q.ACTIVITY;
                    }))
                  : a === t &&
                    (a = e.find((e) => {
                        let t = c.get(e);
                        return null != t && t.component === o.o1q.FRAME;
                    }));
        }
    },
    PICTURE_IN_PICTURE_MOVE: function (e) {
        let { id: t, position: n } = e;
        if (null == t || (i !== t && r !== t && a !== t)) return !1;
        {
            let e = new Map();
            c.forEach((t, i) => {
                e.set(i, { ...t, position: n });
            }),
                (c = e),
                (_ = n);
        }
    },
    PICTURE_IN_PICTURE_RESIZE: function (e) {
        let { width: t, pipType: n } = e;
        E[n] = t;
    },
    PICTURE_IN_PICTURE_HIDE: function (e) {
        let { id: t } = e;
        if (i !== t && r !== t && a !== t) return !1;
        {
            let e = c.get(t);
            if (null == e) return !1;
            c.set(t, { ...e, hidden: !0 });
        }
    },
    PICTURE_IN_PICTURE_SHOW: function (e) {
        let { id: t } = e;
        if (i !== t && r !== t && a !== t) return !1;
        {
            let e = c.get(t);
            if (null == e) return !1;
            c.set(t, { ...e, hidden: !1 });
        }
    },
    PICTURE_IN_PICTURE_UPDATE_RECT: function (e) {
        let { id: t, rect: n } = e;
        u[t] = n;
    },
    PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function (e) {
        let { id: t } = e,
            n = c.get(t);
        if (null != n)
            switch (n.component) {
                case o.o1q.VIDEO:
                    i = t;
                    break;
                case o.o1q.ACTIVITY:
                    r = t;
                    break;
                case o.o1q.FRAME:
                    a = t;
                    break;
                default:
                    n.component;
            }
    },
    LOGOUT: function () {
        (i = null), (r = null), (a = null), (c = new Map());
    },
});
