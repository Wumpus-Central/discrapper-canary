n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(510659),
    a = n(511341),
    s = n(215105),
    l = n(429974),
    c = n(228168);
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
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e, t) {
    return e === c.P.REACT
        ? {
              position: 'left',
              align: 'top',
              animationPosition: 'right',
              spacing: 8
          }
        : {
              position: 'bottom',
              align: t === c.y0.FULL_SIZE ? 'center' : 'left',
              animationPosition: 'top',
              spacing: 6
          };
}
function g(e) {
    var { user: t, guildId: n, channelId: u, profileType: f, onClose: h, children: g } = e,
        E = _(e, ['user', 'guildId', 'channelId', 'profileType', 'onClose', 'children']);
    let { interactionType: v, interactionSource: b, resetInteraction: y, interactionSourceId: O } = (0, o.Xo)(),
        S = f === c.y0.FULL_SIZE ? (0, l.z)(t.id, n) : void 0,
        I = b === E.sourceType && v === c.P.REACT,
        T = b === E.sourceType && v === c.P.REPLY,
        N = (I || T) && O === E.sourceId;
    return (0, r.jsx)(
        i.yRy,
        p(
            d(
                {
                    renderPopout: (e) => {
                        let { setPopoutRef: i } = e,
                            o = I ? a.Z : s.Z;
                        return (0, r.jsx)(
                            o,
                            d(
                                {
                                    user: t,
                                    guildId: n,
                                    channelId: u,
                                    profileType: f,
                                    onClose: h,
                                    modalKey: S,
                                    setPopoutRef: i
                                },
                                E
                            )
                        );
                    },
                    onRequestClose: () => {
                        y(), null == h || h();
                    },
                    shouldShow: N
                },
                m(v, f)
            ),
            { children: g }
        )
    );
}
