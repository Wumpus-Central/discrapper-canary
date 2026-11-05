let i, r, l;
var s = n(855986),
    a = n(73153),
    o = n(652215),
    c = n(806931);
let u = new Map(),
    d = {},
    m = o.CUs.BOTTOM_RIGHT,
    h = { [c.R8.VIDEO]: c.fG[c.R8.VIDEO], [c.R8.CAMERA_PREVIEW]: c.fG[c.R8.CAMERA_PREVIEW] };
class g extends s.Ay.PersistedStore {
    static displayName = "PictureInPictureStore";
    static persistKey = "PictureInPictureStore";
    static migrations = [
        (e) => ({
            pipWidths: {
                [c.R8.VIDEO]: e.pipWidth ?? c.fG[c.R8.VIDEO],
                [c.R8.CAMERA_PREVIEW]: c.fG[c.R8.CAMERA_PREVIEW],
            },
            openPosition: e.openPosition ?? o.CUs.BOTTOM_RIGHT,
        }),
    ];
    initialize(e) {
        if (null == e) {
            ((m = o.CUs.BOTTOM_RIGHT),
                (h = { [c.R8.VIDEO]: c.fG[c.R8.VIDEO], [c.R8.CAMERA_PREVIEW]: c.fG[c.R8.CAMERA_PREVIEW] }));
            return;
        }
        ((m = e.openPosition), (h = e.pipWidths));
    }
    get pipWindow() {
        return null == i && null == r && null == l ? null : u.get(i ?? r ?? l ?? "");
    }
    get pipVideoWindow() {
        return null == i ? null : u.get(i);
    }
    get pipActivityWindow() {
        return null == r ? null : u.get(r);
    }
    get pipFrameWindow() {
        return null == l ? null : u.get(l);
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
        return null == l;
    }
    getDockedRect(e) {
        return d[e];
    }
    isOpen(e) {
        return null != e && u.has(e);
    }
    getState() {
        return { openPosition: m, pipWidths: h };
    }
}
let f = new g(a.h, {
    PICTURE_IN_PICTURE_OPEN: function (e) {
        let { id: t, component: n, props: s } = e;
        if (null != u.get(t)) return;
        let a = { id: t, component: n, position: s.position ?? m, props: s, docked: s.docked ?? !1 };
        switch ((u.set(t, a), n)) {
            case o.o1q.VIDEO:
                null == i && (i = t);
                break;
            case o.o1q.ACTIVITY:
                null == r && (r = t);
                break;
            case o.o1q.FRAME:
                null == l && (l = t);
        }
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
                      return null != t && t.component === o.o1q.VIDEO;
                  }))
                : r === t
                  ? (r = e.find((e) => {
                        let t = u.get(e);
                        return null != t && t.component === o.o1q.ACTIVITY;
                    }))
                  : l === t &&
                    (l = e.find((e) => {
                        let t = u.get(e);
                        return null != t && t.component === o.o1q.FRAME;
                    }));
        }
    },
    PICTURE_IN_PICTURE_MOVE: function (e) {
        let { id: t, position: n } = e;
        if (null == t || (i !== t && r !== t && l !== t)) return !1;
        {
            let e = new Map();
            (u.forEach((t, i) => {
                e.set(i, { ...t, position: n });
            }),
                (u = e),
                (m = n));
        }
    },
    PICTURE_IN_PICTURE_RESIZE: function (e) {
        let { width: t, pipType: n } = e;
        h[n] = t;
    },
    PICTURE_IN_PICTURE_HIDE: function (e) {
        let { id: t } = e;
        if (i !== t && r !== t && l !== t) return !1;
        {
            let e = u.get(t);
            if (null == e) return !1;
            u.set(t, { ...e, hidden: !0 });
        }
    },
    PICTURE_IN_PICTURE_SHOW: function (e) {
        let { id: t } = e;
        if (i !== t && r !== t && l !== t) return !1;
        {
            let e = u.get(t);
            if (null == e) return !1;
            u.set(t, { ...e, hidden: !1 });
        }
    },
    PICTURE_IN_PICTURE_UPDATE_RECT: function (e) {
        let { id: t, rect: n } = e;
        d[t] = n;
    },
    PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function (e) {
        let { id: t } = e,
            n = u.get(t);
        if (null != n)
            switch (n.component) {
                case o.o1q.VIDEO:
                    i = t;
                    break;
                case o.o1q.ACTIVITY:
                    r = t;
                    break;
                case o.o1q.FRAME:
                    l = t;
                    break;
                default:
                    n.component;
            }
    },
    LOGOUT: function () {
        ((i = null), (r = null), (l = null), (u = new Map()));
    },
});
n.d(t, {}, { A: f });
