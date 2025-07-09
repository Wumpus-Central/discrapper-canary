n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => T,
    E: () => S
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
    h = n(622562),
    f = n(937860),
    b = n(335346),
    x = n(981631),
    _ = n(388032),
    j = n(806539),
    E = n(293401),
    O = n(447489),
    C = n(484885);
let v = () => {
        let e = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, i.jsx)('div', {
            className: E.centerContent,
            children: e
                ? (0, i.jsx)('img', {
                      src: O.Z,
                      className: E.orbAsset,
                      alt: 'Orb'
                  })
                : (0, i.jsxs)(d.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: E.orbAsset,
                      children: [
                          (0, i.jsx)('source', {
                              src: C.Z,
                              type: 'video/webm'
                          }),
                          (0, i.jsx)('img', {
                              src: O.Z,
                              className: E.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    S = (e) => {
        let { descriptionText: t = _.intl.string(_.t['6If1Cw']), onClose: n = () => {} } = e;
        return (0, i.jsxs)('div', {
            className: a()(E.container, j.baseCardOutline),
            children: [
                (0, i.jsx)(f.s, { onClick: n }),
                (0, i.jsx)(b.V, {
                    rightOffset: 20,
                    invertTail: !0,
                    tailSpineClassName: E.coachmarkTailSpine,
                    tailTargetInnerClassName: E.coachmarkTailTargetInner
                }),
                (0, i.jsx)(v, {}),
                (0, i.jsx)('div', {
                    className: E.contentContainer,
                    children: (0, i.jsxs)('div', {
                        className: E.textContainer,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: 'heading-md/bold',
                                color: 'header-primary',
                                className: E.coachmarkTitle,
                                children: _.intl.string(_.t['D/nzVl'])
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
function T(e) {
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
    return (0, i.jsxs)(h.E9, {
        className: E.coachmarkModalContainer,
        backgroundElementRef: t,
        onGetBoundingRect: x.dG4,
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
            (0, i.jsx)(S, { onClose: o })
        ]
    });
}
