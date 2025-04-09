n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => S,
    E: () => O
});
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(607070),
    c = n(70097),
    d = n(751648),
    u = n(790542),
    m = n(317257),
    g = n(970815),
    p = n(622562),
    h = n(432792),
    f = n(937860),
    b = n(981631),
    N = n(388032),
    x = n(806539),
    _ = n(293401),
    E = n(447489),
    j = n(484885);
let C = () => {
        let e = (0, a.e7)([o.Z], () => o.Z.useReducedMotion);
        return (0, r.jsx)('div', {
            className: _.centerContent,
            children: e
                ? (0, r.jsx)('img', {
                      src: E.Z,
                      className: _.orbAsset,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(c.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: _.orbAsset,
                      children: [
                          (0, r.jsx)('source', {
                              src: j.Z,
                              type: 'video/webm'
                          }),
                          (0, r.jsx)('img', {
                              src: E.Z,
                              className: _.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    O = (e) => {
        let { descriptionText: t = N.NW.string(N.t['6If1Cw']), onClose: n = () => {} } = e;
        return (0, r.jsxs)('div', {
            className: s()(_.container, x.baseCardOutline),
            children: [
                (0, r.jsx)(f.s, { onClick: n }),
                (0, r.jsx)(h.VK, {
                    rightOffset: 20,
                    invertTail: !0,
                    tailSpineClassName: _.coachmarkTailSpine,
                    tailTargetInnerClassName: _.coachmarkTailTargetInner
                }),
                (0, r.jsx)(C, {}),
                (0, r.jsx)('div', {
                    className: _.contentContainer,
                    children: (0, r.jsxs)('div', {
                        className: _.textContainer,
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-md/bold',
                                color: 'header-primary',
                                className: _.coachmarkTitle,
                                children: N.NW.string(N.t['D/nzVl'])
                            }),
                            (0, r.jsx)(l.Text, {
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
function S(e) {
    var { backgroundElementRef: t, onClickPill: n, onClose: i, onCloseCallback: s } = e;
    !(function (e, t) {
        if (null != e) {
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
        }
    })(e, ['backgroundElementRef', 'onClickPill', 'onClose', 'onCloseCallback']);
    let { balance: a } = (0, u.A)(),
        l = async () => {
            await (0, d.j2)(), await i(), s();
        };
    return (0, r.jsxs)(p.E9, {
        className: _.coachmarkModalContainer,
        backgroundElementRef: t,
        onGetBoundingRect: b.dG4,
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
            (0, r.jsx)(g.A4, {
                onClick: async () => {
                    await l(), n();
                },
                balance: a,
                balanceWidgetMode: m.b.DEFAULT
            }),
            (0, r.jsx)(O, { onClose: l })
        ]
    });
}
