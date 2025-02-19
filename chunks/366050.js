let r, i;
n.d(t, { Z: () => C }), n(47120);
var o,
    a = n(442837),
    s = n(570140),
    l = n(981631),
    c = n(354459);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = new Map(),
    h = {},
    m = l.VD2.BOTTOM_RIGHT,
    g = {
        [c.cL.VIDEO]: c.l8[c.cL.VIDEO],
        [c.cL.CAMERA_PREVIEW]: c.l8[c.cL.CAMERA_PREVIEW]
    };
function E(e) {
    var t, n;
    let { id: o, component: a, props: s } = e;
    if (null != _.get(o)) return;
    let c = {
        id: o,
        component: a,
        position: null !== (t = s.position) && void 0 !== t ? t : m,
        props: s,
        docked: null !== (n = s.docked) && void 0 !== n && n
    };
    _.set(o, c), a === l.NYg.VIDEO ? null == r && (r = o) : a === l.NYg.EMBED_IFRAME && null == i && (i = o);
}
function v(e) {
    let { id: t } = e;
    if (!_.has(t)) return !1;
    {
        _.delete(t);
        let e = Array.from(_.keys());
        r === t
            ? (r = e.find((e) => {
                  let t = _.get(e);
                  return null != t && t.component === l.NYg.VIDEO;
              }))
            : i === t &&
              (i = e.find((e) => {
                  let t = _.get(e);
                  return null != t && t.component === l.NYg.EMBED_IFRAME;
              }));
    }
}
function b(e) {
    let { id: t, position: n } = e;
    if (null == t || (r !== t && i !== t)) return !1;
    {
        let e = new Map();
        _.forEach((t, r) => {
            e.set(r, p(d({}, t), { position: n }));
        }),
            (_ = e),
            (m = n);
    }
}
function y(e) {
    let { width: t, pipType: n } = e;
    g[n] = t;
}
function O(e) {
    let { id: t, rect: n } = e;
    h[t] = n;
}
function S(e) {
    let { id: t } = e;
    if (r !== t && i !== t) return !1;
    {
        let e = _.get(t);
        if (null == e) return !1;
        _.set(t, p(d({}, e), { hidden: !0 }));
    }
}
function I(e) {
    let { id: t } = e;
    if (r !== t && i !== t) return !1;
    {
        let e = _.get(t);
        if (null == e) return !1;
        _.set(t, p(d({}, e), { hidden: !1 }));
    }
}
function T(e) {
    let { id: t } = e,
        n = _.get(t);
    null != n && (n.component === l.NYg.VIDEO ? (r = t) : n.component === l.NYg.EMBED_IFRAME && (i = t));
}
function N() {
    (r = null), (i = null), (_ = new Map());
}
class A extends (o = a.ZP.PersistedStore) {
    initialize(e) {
        if (null == e) {
            (m = l.VD2.BOTTOM_RIGHT),
                (g = {
                    [c.cL.VIDEO]: c.l8[c.cL.VIDEO],
                    [c.cL.CAMERA_PREVIEW]: c.l8[c.cL.CAMERA_PREVIEW]
                });
            return;
        }
        (m = e.openPosition), (g = e.pipWidths);
    }
    get pipWindow() {
        var e;
        return null == r && null == i ? null : _.get(null !== (e = null != r ? r : i) && void 0 !== e ? e : '');
    }
    get pipVideoWindow() {
        return null == r ? null : _.get(r);
    }
    get pipActivityWindow() {
        return null == i ? null : _.get(i);
    }
    get pipWindows() {
        return _;
    }
    pipWidth(e) {
        return g[e];
    }
    isEmbeddedActivityHidden() {
        return null == i;
    }
    getDockedRect(e) {
        return h[e];
    }
    isOpen(e) {
        return null != e && _.has(e);
    }
    getState() {
        return {
            openPosition: m,
            pipWidths: g
        };
    }
}
u(A, 'displayName', 'PictureInPictureStore'),
    u(A, 'persistKey', 'PictureInPictureStore'),
    u(A, 'migrations', [
        (e) => {
            var t, n;
            return {
                pipWidths: {
                    [c.cL.VIDEO]: null !== (t = e.pipWidth) && void 0 !== t ? t : c.l8[c.cL.VIDEO],
                    [c.cL.CAMERA_PREVIEW]: c.l8[c.cL.CAMERA_PREVIEW]
                },
                openPosition: null !== (n = e.openPosition) && void 0 !== n ? n : l.VD2.BOTTOM_RIGHT
            };
        }
    ]);
let C = new A(s.Z, {
    PICTURE_IN_PICTURE_OPEN: E,
    PICTURE_IN_PICTURE_CLOSE: v,
    PICTURE_IN_PICTURE_MOVE: b,
    PICTURE_IN_PICTURE_RESIZE: y,
    PICTURE_IN_PICTURE_HIDE: S,
    PICTURE_IN_PICTURE_SHOW: I,
    PICTURE_IN_PICTURE_UPDATE_RECT: O,
    PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: T,
    LOGOUT: N
});
