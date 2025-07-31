n.d(t, {
    E: () => T,
    WrappedBalanceWidgetEarnedOrbsCoachmarkModal: () => I
});
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(70097),
    u = n(751648),
    m = n(790542),
    p = n(317257),
    g = n(970815),
    h = n(543936),
    f = n(622562),
    b = n(937860),
    x = n(335346),
    _ = n(981631),
    j = n(388032),
    O = n(806539),
    E = n(293401),
    C = n(447489),
    v = n(484885);
let S = () => {
        let e = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, i.jsx)('div', {
            className: E.centerContent,
            children: e
                ? (0, i.jsx)('img', {
                      src: C.Z,
                      className: E.orbAsset,
                      alt: 'Orb'
                  })
                : (0, i.jsxs)(d.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: E.orbAsset,
                      children: [
                          (0, i.jsx)('source', {
                              src: v.Z,
                              type: 'video/webm'
                          }),
                          (0, i.jsx)('img', {
                              src: C.Z,
                              className: E.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    T = (e) => {
        let { descriptionText: t = j.intl.string(j.t['6If1Cw']), onClose: n = () => {} } = e;
        return (0, i.jsxs)('div', {
            className: a()(E.container, O.baseCardOutline),
            children: [
                (0, i.jsx)(b.s, { onClick: n }),
                (0, i.jsx)(x.V, {
                    rightOffset: 20,
                    invertTail: !0,
                    tailSpineClassName: E.coachmarkTailSpine,
                    tailTargetInnerClassName: E.coachmarkTailTargetInner
                }),
                (0, i.jsx)(S, {}),
                (0, i.jsx)('div', {
                    className: E.contentContainer,
                    children: (0, i.jsxs)('div', {
                        className: E.textContainer,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: 'heading-md/bold',
                                color: 'header-primary',
                                className: E.coachmarkTitle,
                                children: j.intl.string(j.t['D/nzVl'])
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                className: E.coachmarkDescription,
                                children: t
                            })
                        ]
                    })
                })
            ]
        });
    };
function N(e) {
    var { backgroundElementRef: t, onClickPill: n, onClose: s, onCloseCallback: a } = e;
    !(function (e, t) {
        if (null != e) {
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
        }
    })(e, ['backgroundElementRef', 'onClickPill', 'onClose', 'onCloseCallback']);
    let { balance: l } = (0, m.A)(),
        o = r.useCallback(async () => {
            (await (0, u.j2)(), await s(), a());
        }, [s, a]),
        c = r.useCallback(async () => {
            (await o(), n());
        }, [n, o]);
    return (0, i.jsxs)(f.E9, {
        className: E.coachmarkModalContainer,
        backgroundElementRef: t,
        onGetBoundingRect: _.dG4,
        getOffsetsRelativeToElement: () => ({
            top: 0,
            right: 0
        }),
        minimumOffsets: { right: 12 },
        fallbackAbsoluteOffsets: {
            top: 84,
            right: 32
        },
        children: [
            (0, i.jsx)(g.A4, {
                isInModalOverlay: !0,
                onClick: c,
                balance: l,
                balanceWidgetMode: p.b.DEFAULT
            }),
            (0, i.jsx)(T, { onClose: o })
        ]
    });
}
function I(e) {
    return (0, i.jsx)(h.x, {
        errorSource: 'ORBS_EARNED_ORBS_COACHMARK_MODAL',
        children: (0, i.jsx)(
            N,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            ((i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i));
                        }));
                }
                return e;
            })({}, e)
        )
    });
}
