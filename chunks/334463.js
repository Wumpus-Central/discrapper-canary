let i, r, l;
n.d(t, { A: () => E });
var s = n(17928),
    a = n(73153),
    o = n(652215),
    u = n(806931);
let c = new Map(),
    d = {},
    h = o.CUs.BOTTOM_RIGHT,
    m = { [u.R8.VIDEO]: u.fG[u.R8.VIDEO], [u.R8.CAMERA_PREVIEW]: u.fG[u.R8.CAMERA_PREVIEW] };
class A extends s.Ay.PersistedStore {
    static displayName = "PictureInPictureStore";
    static persistKey = "PictureInPictureStore";
    static migrations = [
        (e) => ({
            pipWidths: {
                [u.R8.VIDEO]: e.pipWidth ?? u.fG[u.R8.VIDEO],
                [u.R8.CAMERA_PREVIEW]: u.fG[u.R8.CAMERA_PREVIEW],
            },
            openPosition: e.openPosition ?? o.CUs.BOTTOM_RIGHT,
        }),
    ];
    initialize(e) {
        if (null == e) {
            ((h = o.CUs.BOTTOM_RIGHT),
                (m = { [u.R8.VIDEO]: u.fG[u.R8.VIDEO], [u.R8.CAMERA_PREVIEW]: u.fG[u.R8.CAMERA_PREVIEW] }));
            return;
        }
        ((h = e.openPosition), (m = e.pipWidths));
    }
    get pipWindow() {
        return null == i && null == r && null == l ? null : c.get(i ?? r ?? l ?? "");
    }
    get pipVideoWindow() {
        return null == i ? null : c.get(i);
    }
    get pipActivityWindow() {
        return null == r ? null : c.get(r);
    }
    get pipFrameWindow() {
        return null == l ? null : c.get(l);
    }
    get pipWindows() {
        return c;
    }
    pipWidth(e) {
        return m[e];
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
        return null != e && c.has(e);
    }
    getState() {
        return { openPosition: h, pipWidths: m };
    }
}
let E = new A(a.h, {
    PICTURE_IN_PICTURE_OPEN: function (e) {
        let { id: t, component: n, props: s } = e;
        if (null != c.get(t)) return;
        let a = { id: t, component: n, position: s.position ?? h, props: s, docked: s.docked ?? !1 };
        switch ((c.set(t, a), n)) {
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
                  : l === t &&
                    (l = e.find((e) => {
                        let t = c.get(e);
                        return null != t && t.component === o.o1q.FRAME;
                    }));
        }
    },
    PICTURE_IN_PICTURE_MOVE: function (e) {
        let { id: t, position: n } = e;
        if (null == t || (i !== t && r !== t && l !== t)) return !1;
        {
            let e = new Map();
            (c.forEach((t, i) => {
                e.set(i, { ...t, position: n });
            }),
                (c = e),
                (h = n));
        }
    },
    PICTURE_IN_PICTURE_RESIZE: function (e) {
        let { width: t, pipType: n } = e;
        m[n] = t;
    },
    PICTURE_IN_PICTURE_HIDE: function (e) {
        let { id: t } = e;
        if (i !== t && r !== t && l !== t) return !1;
        {
            let e = c.get(t);
            if (null == e) return !1;
            c.set(t, { ...e, hidden: !0 });
        }
    },
    PICTURE_IN_PICTURE_SHOW: function (e) {
        let { id: t } = e;
        if (i !== t && r !== t && l !== t) return !1;
        {
            let e = c.get(t);
            if (null == e) return !1;
            c.set(t, { ...e, hidden: !1 });
        }
    },
    PICTURE_IN_PICTURE_UPDATE_RECT: function (e) {
        let { id: t, rect: n } = e;
        d[t] = n;
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
                    l = t;
                    break;
                default:
                    n.component;
            }
    },
    LOGOUT: function () {
        ((i = null), (r = null), (l = null), (c = new Map()));
    },
});
