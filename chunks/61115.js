n.d(t, {
    C: () => A,
    default: () => T
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(481060),
    c = n(493773),
    u = n(600164),
    d = n(626135),
    f = n(617136),
    _ = n(113434),
    p = n(569984),
    h = n(981631),
    m = n(388032),
    g = n(61942),
    E = n(677486);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = 2500,
    S = 467;
function T(e) {
    let { questId: t, survey: n, transitionState: o, onClose: a, onSubmit: f } = e,
        p = (0, _.B4)(t),
        [b, v] = i.useState(0),
        [T, A] = (0, l.q_F)(() => ({
            from: { width: '0%' },
            config: { duration: I }
        })),
        R = (e) => {
            f(),
                v(1),
                null != p &&
                    d.default.track(
                        h.rMx.QUEST_SURVEY_SUBMITTED,
                        O(y({}, C(p, n)), {
                            choice: e.text,
                            choice_id: e.key
                        })
                    );
        },
        P = async (e) => {
            1 === e && (await A({ width: '100%' }), a());
        };
    return (
        (0, c.ZP)(() => {
            null != p && d.default.track(h.rMx.QUEST_SURVEY_DISPLAYED, C(p, n));
        }),
        null == p && a(),
        (0, r.jsx)(l.Y0X, {
            transitionState: o,
            size: l.CgR.DYNAMIC,
            className: g.modalRoot,
            children: (0, r.jsxs)(l.MyZ, {
                activeSlide: b,
                width: S,
                onSlideReady: P,
                children: [
                    (0, r.jsxs)(l.Mi4, {
                        id: 0,
                        children: [
                            (0, r.jsxs)(l.xBx, {
                                direction: u.Z.Direction.VERTICAL,
                                separator: !1,
                                className: g.modalHeader,
                                children: [
                                    (0, r.jsx)(l.olH, {
                                        className: g.closeBtn,
                                        onClick: a
                                    }),
                                    (0, r.jsx)('img', {
                                        src: E,
                                        alt: '',
                                        className: g.asset
                                    }),
                                    (0, r.jsx)(l.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: n.title
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: n.subtitle
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.hzk, {
                                className: g.modalContent,
                                children: n.choices.map((e) =>
                                    (0, r.jsx)(
                                        N,
                                        {
                                            choice: e,
                                            onClick: R
                                        },
                                        e.key
                                    )
                                )
                            })
                        ]
                    }),
                    (0, r.jsxs)(l.Mi4, {
                        id: 1,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: g.completedModalContent,
                                children: [
                                    (0, r.jsx)('img', {
                                        src: E,
                                        alt: '',
                                        className: g.asset
                                    }),
                                    (0, r.jsx)(l.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: m.NW.string(m.t.KTjjrK)
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: m.NW.string(m.t.AvbrEB)
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.mzw, {
                                children: (0, r.jsxs)('div', {
                                    className: g.closeButtonContainer,
                                    children: [
                                        (0, r.jsx)(l.zxk, {
                                            onClick: a,
                                            children: m.NW.string(m.t.cpT0Cg)
                                        }),
                                        (0, r.jsx)(s.animated.div, {
                                            className: g.progressOverlay,
                                            style: T
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function N(e) {
    let { className: t, choice: n, onClick: i } = e;
    return (0, r.jsxs)(l.P3F, {
        className: a()(g.choiceContainer, t),
        onClick: () => i(n),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/semibold',
                children: n.text
            }),
            (0, r.jsx)(l.Fbu, {})
        ]
    });
}
function A(e) {
    let t = !1;
    (0, l.ZDy)(
        async () => {
            let { default: i } = await Promise.resolve().then(n.bind(n, 61115));
            return (n) =>
                (0, r.jsx)(
                    i,
                    O(y({}, n, e), {
                        onSubmit: () => {
                            t = !0;
                        }
                    })
                );
        },
        {
            onCloseCallback: () => {
                let n = p.Z.getQuest(e.questId);
                null != n && d.default.track(h.rMx.QUEST_SURVEY_DISMISSED, O(y({}, C(n, e.survey)), { submitted: t }));
            }
        }
    );
}
function C(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, f.uk)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text)
    };
}
