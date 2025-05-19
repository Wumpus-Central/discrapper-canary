n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => N,
    E: () => C
});
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    s = n(481060),
    c = n(607070),
    u = n(70097),
    f = n(751648),
    d = n(790542),
    b = n(317257),
    m = n(970815),
    p = n(622562),
    h = n(937860),
    g = n(335346),
    v = n(981631),
    O = n(388032),
    y = n(1603),
    j = n(93970),
    w = n(447489),
    x = n(484885);
let k = () => {
        let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, r.jsx)('div', {
            className: j.centerContent,
            children: e
                ? (0, r.jsx)('img', {
                      src: w.Z,
                      className: j.orbAsset,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(u.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: j.orbAsset,
                      children: [
                          (0, r.jsx)('source', {
                              src: x.Z,
                              type: 'video/webm'
                          }),
                          (0, r.jsx)('img', {
                              src: w.Z,
                              className: j.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    C = (e) => {
        let { descriptionText: t = O.intl.string(O.t['6If1Cw']), onClose: n = () => {} } = e;
        return (0, r.jsxs)('div', {
            className: i()(j.container, y.baseCardOutline),
            children: [
                (0, r.jsx)(h.s, { onClick: n }),
                (0, r.jsx)(g.V, {
                    rightOffset: 20,
                    invertTail: !0,
                    tailSpineClassName: j.coachmarkTailSpine,
                    tailTargetInnerClassName: j.coachmarkTailTargetInner
                }),
                (0, r.jsx)(k, {}),
                (0, r.jsx)('div', {
                    className: j.contentContainer,
                    children: (0, r.jsxs)('div', {
                        className: j.textContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-md/bold',
                                color: 'header-primary',
                                className: j.coachmarkTitle,
                                children: O.intl.string(O.t['D/nzVl'])
                            }),
                            (0, r.jsx)(s.Text, {
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
function N(e) {
    var { backgroundElementRef: t, onClickPill: n, onClose: a, onCloseCallback: i } = e;
    !(function (e, t) {
        if (null != e) {
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
        }
    })(e, ['backgroundElementRef', 'onClickPill', 'onClose', 'onCloseCallback']);
    let { balance: o } = (0, d.A)(),
        s = l.useCallback(async () => {
            await (0, f.j2)(), await a(), i();
        }, [a, i]),
        c = l.useCallback(async () => {
            await s(), n();
        }, [n, s]);
    return (0, r.jsxs)(p.E9, {
        className: j.coachmarkModalContainer,
        backgroundElementRef: t,
        onGetBoundingRect: v.dG4,
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
            (0, r.jsx)(m.A4, {
                isInModalOverlay: !0,
                onClick: c,
                balance: o,
                balanceWidgetMode: b.b.DEFAULT
            }),
            (0, r.jsx)(C, { onClose: s })
        ]
    });
}
