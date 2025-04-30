n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => R,
    E: () => y
});
var r = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(481060),
    i = n(607070),
    c = n(70097),
    u = n(751648),
    d = n(790542),
    m = n(317257),
    f = n(970815),
    h = n(622562),
    b = n(432792),
    p = n(937860),
    g = n(981631),
    C = n(388032),
    N = n(806539),
    O = n(293401),
    v = n(447489),
    x = n(484885);
let j = () => {
        let e = (0, l.e7)([i.Z], () => i.Z.useReducedMotion);
        return (0, r.jsx)('div', {
            className: O.centerContent,
            children: e
                ? (0, r.jsx)('img', {
                      src: v.Z,
                      className: O.orbAsset,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(c.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: O.orbAsset,
                      children: [
                          (0, r.jsx)('source', {
                              src: x.Z,
                              type: 'video/webm'
                          }),
                          (0, r.jsx)('img', {
                              src: v.Z,
                              className: O.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    y = (e) => {
        let { descriptionText: t = C.intl.string(C.t['6If1Cw']), onClose: n = () => {} } = e;
        return (0, r.jsxs)('div', {
            className: s()(O.container, N.baseCardOutline),
            children: [
                (0, r.jsx)(p.s, { onClick: n }),
                (0, r.jsx)(b.VK, {
                    rightOffset: 20,
                    invertTail: !0,
                    tailSpineClassName: O.coachmarkTailSpine,
                    tailTargetInnerClassName: O.coachmarkTailTargetInner
                }),
                (0, r.jsx)(j, {}),
                (0, r.jsx)('div', {
                    className: O.contentContainer,
                    children: (0, r.jsxs)('div', {
                        className: O.textContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: 'heading-md/bold',
                                color: 'header-primary',
                                className: O.coachmarkTitle,
                                children: C.intl.string(C.t['D/nzVl'])
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                className: O.coachmarkDescription,
                                children: t
                            })
                        ]
                    })
                })
            ]
        });
    };
function R(e) {
    var { backgroundElementRef: t, onClickPill: n, onClose: a, onCloseCallback: s } = e;
    !(function (e, t) {
        if (null != e) {
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
        }
    })(e, ['backgroundElementRef', 'onClickPill', 'onClose', 'onCloseCallback']);
    let { balance: l } = (0, d.A)(),
        o = async () => {
            await (0, u.j2)(), await a(), s();
        };
    return (0, r.jsxs)(h.E9, {
        className: O.coachmarkModalContainer,
        backgroundElementRef: t,
        onGetBoundingRect: g.dG4,
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
            (0, r.jsx)(f.A4, {
                onClick: async () => {
                    await o(), n();
                },
                balance: l,
                balanceWidgetMode: m.b.DEFAULT
            }),
            (0, r.jsx)(y, { onClose: o })
        ]
    });
}
