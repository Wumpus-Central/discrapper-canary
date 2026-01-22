let r, i, a, s;
n.d(t, {
    A: () => w,
}),
    n(896048);
var o,
    l = n(311907),
    c = n(73153),
    u = n(652215),
    d = n(806931);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = new Map(),
    g = {},
    E = u.CUs.BOTTOM_RIGHT,
    b = {
        [d.R8.VIDEO]: d.fG[d.R8.VIDEO],
        [d.R8.CAMERA_PREVIEW]: d.fG[d.R8.CAMERA_PREVIEW],
        [d.R8.HAVEN]: d.fG[d.R8.HAVEN],
    };

function y(e) {
    var t, n;
    let { id: o, component: l, props: c } = e;
    if (null != m.get(o)) return;
    let d = {
        id: o,
        component: l,
        position: null != (t = c.position) ? t : E,
        props: c,
        docked: null != (n = c.docked) && n,
    };
    m.set(o, d),
        l === u.o1q.VIDEO
            ? null == r && (r = o)
            : l === u.o1q.ACTIVITY
              ? null == i && (i = o)
              : l === u.o1q.FRAME
                ? null == a && (a = o)
                : l === u.o1q.HAVEN && null == s && (s = o);
}

function O(e) {
    let { id: t } = e;
    if (!m.has(t)) return !1;
    {
        m.delete(t);
        let e = Array.from(m.keys());
        r === t
            ? (r = e.find((e) => {
                  let t = m.get(e);
                  return null != t && t.component === u.o1q.VIDEO;
              }))
            : i === t
              ? (i = e.find((e) => {
                    let t = m.get(e);
                    return null != t && t.component === u.o1q.ACTIVITY;
                }))
              : a === t
                ? (a = e.find((e) => {
                      let t = m.get(e);
                      return null != t && t.component === u.o1q.FRAME;
                  }))
                : s === t &&
                  (s = e.find((e) => {
                      let t = m.get(e);
                      return null != t && t.component === u.o1q.HAVEN;
                  }));
    }
}

function A(e) {
    let { id: t, position: n } = e;
    if (null == t || (r !== t && i !== t && a !== t && s !== t)) return !1;
    {
        let e = new Map();
        m.forEach((t, r) => {
            e.set(
                r,
                h(p({}, t), {
                    position: n,
                }),
            );
        }),
            (m = e),
            (E = n);
    }
}

function v(e) {
    let { width: t, pipType: n } = e;
    b[n] = t;
}

function S(e) {
    let { id: t, rect: n } = e;
    g[t] = n;
}

function I(e) {
    let { id: t } = e;
    if (r !== t && i !== t && a !== t && s !== t) return !1;
    {
        let e = m.get(t);
        if (null == e) return !1;
        m.set(
            t,
            h(p({}, e), {
                hidden: !0,
            }),
        );
    }
}

function T(e) {
    let { id: t } = e;
    if (r !== t && i !== t && a !== t && s !== t) return !1;
    {
        let e = m.get(t);
        if (null == e) return !1;
        m.set(
            t,
            h(p({}, e), {
                hidden: !1,
            }),
        );
    }
}

function C(e) {
    let { id: t } = e,
        n = m.get(t);
    null != n &&
        (n.component === u.o1q.VIDEO
            ? (r = t)
            : n.component === u.o1q.ACTIVITY
              ? (i = t)
              : n.component === u.o1q.FRAME
                ? (a = t)
                : n.component === u.o1q.HAVEN && (s = t));
}

function N() {
    (r = null), (i = null), (a = null), (s = null), (m = new Map());
}
class R extends (o = l.Ay.PersistedStore) {
    initialize(e) {
        if (null == e) {
            var t;
            (E = u.CUs.BOTTOM_RIGHT),
                (b = {
                    [d.R8.VIDEO]: d.fG[d.R8.VIDEO],
                    [d.R8.CAMERA_PREVIEW]: d.fG[d.R8.CAMERA_PREVIEW],
                    [d.R8.HAVEN]: null != (t = d.fG[d.R8.HAVEN]) ? t : d.fG[d.R8.VIDEO],
                });
            return;
        }
        (E = e.openPosition), (b = e.pipWidths);
    }
    get pipWindow() {
        var e, t, n;
        return null == r && null == i && null == a && null == s
            ? null
            : m.get(null != (e = null != (t = null != (n = null != r ? r : i) ? n : a) ? t : s) ? e : "");
    }
    get pipVideoWindow() {
        return null == r ? null : m.get(r);
    }
    get pipActivityWindow() {
        return null == i ? null : m.get(i);
    }
    get pipFrameWindow() {
        return null == a ? null : m.get(a);
    }
    get pipHavenWindow() {
        return null == s ? null : m.get(s);
    }
    get pipWindows() {
        return m;
    }
    pipWidth(e) {
        return b[e];
    }
    isEmbeddedActivityHidden() {
        return null == i;
    }
    isFrameHidden() {
        return null == a;
    }
    getDockedRect(e) {
        return g[e];
    }
    isOpen(e) {
        return null != e && m.has(e);
    }
    getState() {
        return {
            openPosition: E,
            pipWidths: b,
        };
    }
}
f(R, "displayName", "PictureInPictureStore"),
    f(R, "persistKey", "PictureInPictureStore"),
    f(R, "migrations", [
        (e) => {
            var t, n, r;
            return {
                pipWidths: {
                    [d.R8.VIDEO]: null != (t = e.pipWidth) ? t : d.fG[d.R8.VIDEO],
                    [d.R8.CAMERA_PREVIEW]: d.fG[d.R8.CAMERA_PREVIEW],
                    [d.R8.HAVEN]: null != (n = d.fG[d.R8.HAVEN]) ? n : d.fG[d.R8.VIDEO],
                },
                openPosition: null != (r = e.openPosition) ? r : u.CUs.BOTTOM_RIGHT,
            };
        },
    ]);
let w = new R(c.h, {
    PICTURE_IN_PICTURE_OPEN: y,
    PICTURE_IN_PICTURE_CLOSE: O,
    PICTURE_IN_PICTURE_MOVE: A,
    PICTURE_IN_PICTURE_RESIZE: v,
    PICTURE_IN_PICTURE_HIDE: I,
    PICTURE_IN_PICTURE_SHOW: T,
    PICTURE_IN_PICTURE_UPDATE_RECT: S,
    PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: C,
    LOGOUT: N,
});
