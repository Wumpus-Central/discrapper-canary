n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(679492),
    s = n(403777),
    o = n(23568),
    l = n(187921),
    c = n(518477),
    u = n(996988);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function g(e) {
    let { interactionType: t, interactionSource: n, themeType: r } = e;
    return t === c.AQ.REACT
        ? {
              position: "left",
              align: "top",
              animationPosition: "right",
              spacing: 8,
          }
        : r === u.d.MODAL || r === u.d.MODAL_V2 || n === c.dS.ACTIVITY
          ? {
                position: "bottom",
                align: "center",
                animationPosition: "top",
                spacing: 6,
            }
          : {
                position: "bottom",
                align: "left",
                animationPosition: "top",
                spacing: 6,
            };
}

function E(e) {
    let { user: t, guildId: n, channelId: d, themeType: p, onClose: m, children: E } = e,
        b = h(e, ["user", "guildId", "channelId", "themeType", "onClose", "children"]),
        {
            interactionType: y,
            interactionSource: O,
            resetInteraction: A,
            interactionSourceId: v,
            interactionPopoutTargetRef: S,
        } = (0, a.Pq)(),
        I = [u.d.MODAL, u.d.MODAL_V2].includes(p) ? (0, s.n)(t.id, n) : void 0,
        T = O === b.sourceType && y === c.AQ.REACT,
        C = O === b.sourceType && y === c.AQ.REPLY,
        N = (T || C) && v === b.sourceId;
    return (0, r.jsx)(
        i.YNO,
        _(
            f(
                {
                    targetElementRef: null != S ? S : void 0,
                    renderPopout: (e) => {
                        let { setPopoutRef: i } = e,
                            a = T ? o.A : l.A;
                        return (0, r.jsx)(
                            a,
                            f(
                                {
                                    user: t,
                                    guildId: n,
                                    channelId: d,
                                    themeType: p,
                                    onClose: m,
                                    modalKey: I,
                                    setPopoutRef: i,
                                },
                                b,
                            ),
                        );
                    },
                    onRequestClose: () => {
                        A(), null == m || m();
                    },
                    shouldShow: N,
                },
                g({
                    interactionType: y,
                    interactionSource: O,
                    themeType: p,
                }),
            ),
            {
                children: E,
            },
        ),
    );
}
