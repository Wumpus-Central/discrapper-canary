"use strict";
let r, i, a, s;
n.d(t, { A: () => C });
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
function h(e) {
    let { id: t, component: n, props: o } = e;
    if (null != d.get(t)) return;
    let l = { id: t, component: n, position: o.position ?? f, props: o, docked: o.docked ?? !1 };
    d.set(t, l),
        n === u.o1q.VIDEO
            ? null == r && (r = t)
            : n === u.o1q.ACTIVITY
              ? null == i && (i = t)
              : n === u.o1q.FRAME
                ? null == a && (a = t)
                : n === u.o1q.HAVEN && null == s && (s = t);
}
function m(e) {
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
              : a === t
                ? (a = e.find((e) => {
                      let t = d.get(e);
                      return null != t && t.component === u.o1q.FRAME;
                  }))
                : s === t &&
                  (s = e.find((e) => {
                      let t = d.get(e);
                      return null != t && t.component === u.o1q.HAVEN;
                  }));
    }
}
function g(e) {
    let { id: t, position: n } = e;
    if (null == t || (r !== t && i !== t && a !== t && s !== t)) return !1;
    {
        let e = new Map();
        d.forEach((t, r) => {
            e.set(r, { ...t, position: n });
        }),
            (d = e),
            (f = n);
    }
}
function E(e) {
    let { width: t, pipType: n } = e;
    p[n] = t;
}
function A(e) {
    let { id: t, rect: n } = e;
    _[t] = n;
}
function I(e) {
    let { id: t } = e;
    if (r !== t && i !== t && a !== t && s !== t) return !1;
    {
        let e = d.get(t);
        if (null == e) return !1;
        d.set(t, { ...e, hidden: !0 });
    }
}
function T(e) {
    let { id: t } = e;
    if (r !== t && i !== t && a !== t && s !== t) return !1;
    {
        let e = d.get(t);
        if (null == e) return !1;
        d.set(t, { ...e, hidden: !1 });
    }
}
function y(e) {
    let { id: t } = e,
        n = d.get(t);
    null != n &&
        (n.component === u.o1q.VIDEO
            ? (r = t)
            : n.component === u.o1q.ACTIVITY
              ? (i = t)
              : n.component === u.o1q.FRAME
                ? (a = t)
                : n.component === u.o1q.HAVEN && (s = t));
}
function S() {
    (r = null), (i = null), (a = null), (s = null), (d = new Map());
}
class v extends o.Ay.PersistedStore {
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
        return null == r && null == i && null == a && null == s ? null : d.get(r ?? i ?? a ?? s ?? "");
    }
    get pipVideoWindow() {
        return null == r ? null : d.get(r);
    }
    get pipActivityWindow() {
        return null == i ? null : d.get(i);
    }
    get pipFrameWindow() {
        return null == a ? null : d.get(a);
    }
    get pipHavenWindow() {
        return null == s ? null : d.get(s);
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
        return null == a;
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
let C = new v(l.h, {
    PICTURE_IN_PICTURE_OPEN: h,
    PICTURE_IN_PICTURE_CLOSE: m,
    PICTURE_IN_PICTURE_MOVE: g,
    PICTURE_IN_PICTURE_RESIZE: E,
    PICTURE_IN_PICTURE_HIDE: I,
    PICTURE_IN_PICTURE_SHOW: T,
    PICTURE_IN_PICTURE_UPDATE_RECT: A,
    PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: y,
    LOGOUT: S,
});
