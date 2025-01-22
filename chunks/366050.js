let i, a;
var o,
    s = r(47120);
var l = r(442837),
    u = r(570140),
    c = r(981631),
    d = r(354459);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = new Map(),
    h = {},
    _ = c.VD2.BOTTOM_RIGHT,
    m = {
        [d.cL.VIDEO]: d.l8[d.cL.VIDEO],
        [d.cL.CAMERA_PREVIEW]: d.l8[d.cL.CAMERA_PREVIEW]
    };
function g(e) {
    var n, r;
    let { id: o, component: s, props: l } = e;
    if (null != p.get(o)) return;
    let u = {
        id: o,
        component: s,
        position: null !== (n = l.position) && void 0 !== n ? n : _,
        props: l,
        docked: null !== (r = l.docked) && void 0 !== r && r
    };
    p.set(o, u), s === c.NYg.VIDEO ? null == i && (i = o) : s === c.NYg.EMBED_IFRAME && null == a && (a = o);
}
function E(e) {
    let { id: n } = e;
    if (!p.has(n)) return !1;
    {
        p.delete(n);
        let e = Array.from(p.keys());
        i === n
            ? (i = e.find((e) => {
                  let n = p.get(e);
                  return null != n && n.component === c.NYg.VIDEO;
              }))
            : a === n &&
              (a = e.find((e) => {
                  let n = p.get(e);
                  return null != n && n.component === c.NYg.EMBED_IFRAME;
              }));
    }
}
function v(e) {
    let { id: n, position: r } = e;
    if (null == n || (i !== n && a !== n)) return !1;
    {
        let e = new Map();
        p.forEach((n, i) => {
            e.set(i, {
                ...n,
                position: r
            });
        }),
            (p = e),
            (_ = r);
    }
}
function y(e) {
    let { width: n, pipType: r } = e;
    m[r] = n;
}
function b(e) {
    let { id: n, rect: r } = e;
    h[n] = r;
}
function I(e) {
    let { id: n } = e;
    if (i !== n && a !== n) return !1;
    {
        let e = p.get(n);
        if (null == e) return !1;
        p.set(n, {
            ...e,
            hidden: !0
        });
    }
}
function T(e) {
    let { id: n } = e;
    if (i !== n && a !== n) return !1;
    {
        let e = p.get(n);
        if (null == e) return !1;
        p.set(n, {
            ...e,
            hidden: !1
        });
    }
}
function S(e) {
    let { id: n } = e,
        r = p.get(n);
    null != r && (r.component === c.NYg.VIDEO ? (i = n) : r.component === c.NYg.EMBED_IFRAME && (a = n));
}
function A() {
    (i = null), (a = null), (p = new Map());
}
class C extends (o = l.ZP.PersistedStore) {
    initialize(e) {
        if (null == e) {
            (_ = c.VD2.BOTTOM_RIGHT),
                (m = {
                    [d.cL.VIDEO]: d.l8[d.cL.VIDEO],
                    [d.cL.CAMERA_PREVIEW]: d.l8[d.cL.CAMERA_PREVIEW]
                });
            return;
        }
        (_ = e.openPosition), (m = e.pipWidths);
    }
    get pipWindow() {
        var e;
        return null == i && null == a ? null : p.get(null !== (e = null != i ? i : a) && void 0 !== e ? e : '');
    }
    get pipVideoWindow() {
        return null == i ? null : p.get(i);
    }
    get pipActivityWindow() {
        return null == a ? null : p.get(a);
    }
    get pipWindows() {
        return p;
    }
    pipWidth(e) {
        return m[e];
    }
    isEmbeddedActivityHidden() {
        return null == a;
    }
    getDockedRect(e) {
        return h[e];
    }
    isOpen(e) {
        return null != e && p.has(e);
    }
    getState() {
        return {
            openPosition: _,
            pipWidths: m
        };
    }
}
f(C, 'displayName', 'PictureInPictureStore'),
    f(C, 'persistKey', 'PictureInPictureStore'),
    f(C, 'migrations', [
        (e) => {
            var n, r;
            return {
                pipWidths: {
                    [d.cL.VIDEO]: null !== (n = e.pipWidth) && void 0 !== n ? n : d.l8[d.cL.VIDEO],
                    [d.cL.CAMERA_PREVIEW]: d.l8[d.cL.CAMERA_PREVIEW]
                },
                openPosition: null !== (r = e.openPosition) && void 0 !== r ? r : c.VD2.BOTTOM_RIGHT
            };
        }
    ]),
    (n.Z = new C(u.Z, {
        PICTURE_IN_PICTURE_OPEN: g,
        PICTURE_IN_PICTURE_CLOSE: E,
        PICTURE_IN_PICTURE_MOVE: v,
        PICTURE_IN_PICTURE_RESIZE: y,
        PICTURE_IN_PICTURE_HIDE: I,
        PICTURE_IN_PICTURE_SHOW: T,
        PICTURE_IN_PICTURE_UPDATE_RECT: b,
        PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: S,
        LOGOUT: A
    }));
