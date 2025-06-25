n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => T,
    E: () => v
});
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(70097),
    u = n(751648),
    m = n(790542),
    g = n(317257),
    p = n(970815),
    h = n(622562),
    f = n(937860),
    b = n(335346),
    _ = n(981631),
    x = n(388032),
    E = n(806539),
    j = n(293401),
    O = n(447489),
    C = n(484885);
let S = () => {
        let e = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, i.jsx)('div', {
            className: j.centerContent,
            children: e
                ? (0, i.jsx)('img', {
                      src: O.Z,
                      className: j.orbAsset,
                      alt: 'Orb'
                  })
                : (0, i.jsxs)(d.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: j.orbAsset,
                      children: [
                          (0, i.jsx)('source', {
                              src: C.Z,
                              type: 'video/webm'
                          }),
                          (0, i.jsx)('img', {
                              src: O.Z,
                              className: j.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    v = (e) => {
        let { descriptionText: t = x.intl.string(x.t['6If1Cw']), onClose: n = () => {} } = e;
        return (0, i.jsxs)('div', {
            className: l()(j.container, E.baseCardOutline),
            children: [
                (0, i.jsx)(f.s, { onClick: n }),
                (0, i.jsx)(b.V, {
                    rightOffset: 20,
                    invertTail: !0,
                    tailSpineClassName: j.coachmarkTailSpine,
                    tailTargetInnerClassName: j.coachmarkTailTargetInner
                }),
                (0, i.jsx)(S, {}),
                (0, i.jsx)('div', {
                    className: j.contentContainer,
                    children: (0, i.jsxs)('div', {
                        className: j.textContainer,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: 'heading-md/bold',
                                color: 'header-primary',
                                className: j.coachmarkTitle,
                                children: x.intl.string(x.t['D/nzVl'])
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                className: j.coachmarkDescription,
                                children: t
                            })
                        ]
                    })
                })
            ]
        });
    };
function T(e) {
    var { backgroundElementRef: t, onClickPill: n, onClose: s, onCloseCallback: l } = e;
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
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
        }
    })(e, ['backgroundElementRef', 'onClickPill', 'onClose', 'onCloseCallback']);
    let { balance: a } = (0, m.A)(),
        o = r.useCallback(async () => {
            await (0, u.j2)(), await s(), l();
        }, [s, l]),
        c = r.useCallback(async () => {
            await o(), n();
        }, [n, o]);
    return (0, i.jsxs)(h.E9, {
        className: j.coachmarkModalContainer,
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
            (0, i.jsx)(p.A4, {
                isInModalOverlay: !0,
                onClick: c,
                balance: a,
                balanceWidgetMode: g.b.DEFAULT
            }),
            (0, i.jsx)(v, { onClose: o })
        ]
    });
}
