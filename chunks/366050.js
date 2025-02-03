let i, r;
n.d(t, { Z: () => A }), n(47120);
var a,
    s = n(442837),
    o = n(570140),
    l = n(981631),
    u = n(354459);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = new Map(),
    f = {},
    _ = l.VD2.BOTTOM_RIGHT,
    p = {
        [u.cL.VIDEO]: u.l8[u.cL.VIDEO],
        [u.cL.CAMERA_PREVIEW]: u.l8[u.cL.CAMERA_PREVIEW]
    };
function h(e) {
    var t, n;
    let { id: a, component: s, props: o } = e;
    if (null != d.get(a)) return;
    let u = {
        id: a,
        component: s,
        position: null !== (t = o.position) && void 0 !== t ? t : _,
        props: o,
        docked: null !== (n = o.docked) && void 0 !== n && n
    };
    d.set(a, u), s === l.NYg.VIDEO ? null == i && (i = a) : s === l.NYg.EMBED_IFRAME && null == r && (r = a);
}
function m(e) {
    let { id: t } = e;
    if (!d.has(t)) return !1;
    {
        d.delete(t);
        let e = Array.from(d.keys());
        i === t
            ? (i = e.find((e) => {
                  let t = d.get(e);
                  return null != t && t.component === l.NYg.VIDEO;
              }))
            : r === t &&
              (r = e.find((e) => {
                  let t = d.get(e);
                  return null != t && t.component === l.NYg.EMBED_IFRAME;
              }));
    }
}
function g(e) {
    let { id: t, position: n } = e;
    if (null == t || (i !== t && r !== t)) return !1;
    {
        let e = new Map();
        d.forEach((t, i) => {
            e.set(i, {
                ...t,
                position: n
            });
        }),
            (d = e),
            (_ = n);
    }
}
function E(e) {
    let { width: t, pipType: n } = e;
    p[n] = t;
}
function v(e) {
    let { id: t, rect: n } = e;
    f[t] = n;
}
function y(e) {
    let { id: t } = e;
    if (i !== t && r !== t) return !1;
    {
        let e = d.get(t);
        if (null == e) return !1;
        d.set(t, {
            ...e,
            hidden: !0
        });
    }
}
function I(e) {
    let { id: t } = e;
    if (i !== t && r !== t) return !1;
    {
        let e = d.get(t);
        if (null == e) return !1;
        d.set(t, {
            ...e,
            hidden: !1
        });
    }
}
function b(e) {
    let { id: t } = e,
        n = d.get(t);
    null != n && (n.component === l.NYg.VIDEO ? (i = t) : n.component === l.NYg.EMBED_IFRAME && (r = t));
}
function T() {
    (i = null), (r = null), (d = new Map());
}
class S extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        if (null == e) {
            (_ = l.VD2.BOTTOM_RIGHT),
                (p = {
                    [u.cL.VIDEO]: u.l8[u.cL.VIDEO],
                    [u.cL.CAMERA_PREVIEW]: u.l8[u.cL.CAMERA_PREVIEW]
                });
            return;
        }
        (_ = e.openPosition), (p = e.pipWidths);
    }
    get pipWindow() {
        var e;
        return null == i && null == r ? null : d.get(null !== (e = null != i ? i : r) && void 0 !== e ? e : '');
    }
    get pipVideoWindow() {
        return null == i ? null : d.get(i);
    }
    get pipActivityWindow() {
        return null == r ? null : d.get(r);
    }
    get pipWindows() {
        return d;
    }
    pipWidth(e) {
        return p[e];
    }
    isEmbeddedActivityHidden() {
        return null == r;
    }
    getDockedRect(e) {
        return f[e];
    }
    isOpen(e) {
        return null != e && d.has(e);
    }
    getState() {
        return {
            openPosition: _,
            pipWidths: p
        };
    }
}
c(S, 'displayName', 'PictureInPictureStore'),
    c(S, 'persistKey', 'PictureInPictureStore'),
    c(S, 'migrations', [
        (e) => {
            var t, n;
            return {
                pipWidths: {
                    [u.cL.VIDEO]: null !== (t = e.pipWidth) && void 0 !== t ? t : u.l8[u.cL.VIDEO],
                    [u.cL.CAMERA_PREVIEW]: u.l8[u.cL.CAMERA_PREVIEW]
                },
                openPosition: null !== (n = e.openPosition) && void 0 !== n ? n : l.VD2.BOTTOM_RIGHT
            };
        }
    ]);
let A = new S(o.Z, {
    PICTURE_IN_PICTURE_OPEN: h,
    PICTURE_IN_PICTURE_CLOSE: m,
    PICTURE_IN_PICTURE_MOVE: g,
    PICTURE_IN_PICTURE_RESIZE: E,
    PICTURE_IN_PICTURE_HIDE: y,
    PICTURE_IN_PICTURE_SHOW: I,
    PICTURE_IN_PICTURE_UPDATE_RECT: v,
    PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: b,
    LOGOUT: T
});
