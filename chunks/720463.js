n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => k,
    E: () => C
});
var r = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    c = n(442837),
    i = n(481060),
    s = n(607070),
    l = n(70097),
    b = n(751648),
    u = n(790542),
    d = n(317257),
    f = n(970815),
    p = n(622562),
    m = n(432792),
    O = n(937860),
    h = n(981631),
    g = n(388032),
    j = n(806539),
    _ = n(293401),
    y = n(447489),
    v = n(484885);
let x = () => {
        let e = (0, c.e7)([s.Z], () => s.Z.useReducedMotion);
        return (0, r.jsx)('div', {
            className: _.centerContent,
            children: e
                ? (0, r.jsx)('img', {
                      src: y.Z,
                      className: _.orbAsset,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(l.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: _.orbAsset,
                      children: [
                          (0, r.jsx)('source', {
                              src: v.Z,
                              type: 'video/webm'
                          }),
                          (0, r.jsx)('img', {
                              src: y.Z,
                              className: _.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    C = (e) => {
        let { descriptionText: t = g.NW.string(g.t['6If1Cw']), onClose: n = () => {} } = e;
        return (0, r.jsxs)('div', {
            className: a()(_.container, j.baseCardOutline),
            children: [
                (0, r.jsx)(O.s, { onClick: n }),
                (0, r.jsx)(m.VK, {
                    rightOffset: 20,
                    invertTail: !0,
                    tailSpineClassName: _.coachmarkTailSpine,
                    tailTargetInnerClassName: _.coachmarkTailTargetInner
                }),
                (0, r.jsx)(x, {}),
                (0, r.jsx)('div', {
                    className: _.contentContainer,
                    children: (0, r.jsxs)('div', {
                        className: _.textContainer,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-md/bold',
                                color: 'header-primary',
                                className: _.coachmarkTitle,
                                children: g.NW.string(g.t['D/nzVl'])
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-sm/medium',
                                className: _.coachmarkDescription,
                                children: t
                            })
                        ]
                    })
                })
            ]
        });
    };
function k(e) {
    var { backgroundElementRef: t, onClickPill: n, onClose: o, onCloseCallback: a } = e;
    !(function (e, t) {
        if (null != e) {
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
        }
    })(e, ['backgroundElementRef', 'onClickPill', 'onClose', 'onCloseCallback']);
    let { balance: c } = (0, u.A)(),
        i = async () => {
            await (0, b.j2)(), await o(), a();
        };
    return (0, r.jsxs)(p.E, {
        className: _.coachmarkModalContainer,
        backgroundElementRef: t,
        onGetBoundingRect: h.dG4,
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
                    await i(), n();
                },
                balance: c,
                balanceWidgetMode: d.b.DEFAULT
            }),
            (0, r.jsx)(C, { onClose: i })
        ]
    });
}
