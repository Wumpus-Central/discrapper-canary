n.d(t, {
    C: () => b,
    default: () => I
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(481060),
    u = n(493773),
    c = n(600164),
    d = n(626135),
    f = n(617136),
    _ = n(113434),
    p = n(569984),
    h = n(981631),
    m = n(388032),
    g = n(388230),
    E = n(677486);
let v = 2500,
    y = 467;
function I(e) {
    let { questId: t, survey: n, transitionState: a, onClose: s, onSubmit: f } = e,
        p = (0, _.B4)(t),
        [I, b] = r.useState(0),
        [A, N] = (0, l.q_F)(() => ({
            from: { width: '0%' },
            config: { duration: v }
        })),
        C = (e) => {
            f(),
                b(1),
                null != p &&
                    d.default.track(h.rMx.QUEST_SURVEY_SUBMITTED, {
                        ...S(p, n),
                        choice: e.text,
                        choice_id: e.key
                    });
        },
        R = async (e) => {
            1 === e && (await N({ width: '100%' }), s());
        };
    return (
        (0, u.ZP)(() => {
            null != p && d.default.track(h.rMx.QUEST_SURVEY_DISPLAYED, S(p, n));
        }),
        null == p && s(),
        (0, i.jsx)(l.Y0X, {
            transitionState: a,
            size: l.CgR.DYNAMIC,
            className: g.modalRoot,
            children: (0, i.jsxs)(l.MyZ, {
                activeSlide: I,
                width: y,
                onSlideReady: R,
                children: [
                    (0, i.jsxs)(l.Mi4, {
                        id: 0,
                        children: [
                            (0, i.jsxs)(l.xBx, {
                                direction: c.Z.Direction.VERTICAL,
                                separator: !1,
                                className: g.modalHeader,
                                children: [
                                    (0, i.jsx)(l.olH, {
                                        className: g.closeBtn,
                                        onClick: s
                                    }),
                                    (0, i.jsx)('img', {
                                        src: E,
                                        alt: '',
                                        className: g.asset
                                    }),
                                    (0, i.jsx)(l.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: n.title
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: n.subtitle
                                    })
                                ]
                            }),
                            (0, i.jsx)(l.hzk, {
                                className: g.modalContent,
                                children: n.choices.map((e) =>
                                    (0, i.jsx)(
                                        T,
                                        {
                                            choice: e,
                                            onClick: C
                                        },
                                        e.key
                                    )
                                )
                            })
                        ]
                    }),
                    (0, i.jsxs)(l.Mi4, {
                        id: 1,
                        children: [
                            (0, i.jsxs)(l.hzk, {
                                className: g.completedModalContent,
                                children: [
                                    (0, i.jsx)('img', {
                                        src: E,
                                        alt: '',
                                        className: g.asset
                                    }),
                                    (0, i.jsx)(l.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: m.intl.string(m.t.KTjjrK)
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: m.intl.string(m.t.AvbrEB)
                                    })
                                ]
                            }),
                            (0, i.jsx)(l.mzw, {
                                children: (0, i.jsxs)('div', {
                                    className: g.closeButtonContainer,
                                    children: [
                                        (0, i.jsx)(l.zxk, {
                                            onClick: s,
                                            children: m.intl.string(m.t.cpT0Cg)
                                        }),
                                        (0, i.jsx)(o.animated.div, {
                                            className: g.progressOverlay,
                                            style: A
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
function T(e) {
    let { className: t, choice: n, onClick: r } = e;
    return (0, i.jsxs)(l.P3F, {
        className: s()(g.choiceContainer, t),
        onClick: () => r(n),
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/semibold',
                children: n.text
            }),
            (0, i.jsx)(l.Fbu, {})
        ]
    });
}
function b(e) {
    let t = !1;
    (0, l.ZDy)(
        async () => {
            let { default: r } = await Promise.resolve().then(n.bind(n, 61115));
            return (n) =>
                (0, i.jsx)(r, {
                    ...n,
                    ...e,
                    onSubmit: () => {
                        t = !0;
                    }
                });
        },
        {
            onCloseCallback: () => {
                let n = p.Z.getQuest(e.questId);
                null != n &&
                    d.default.track(h.rMx.QUEST_SURVEY_DISMISSED, {
                        ...S(n, e.survey),
                        submitted: t
                    });
            }
        }
    );
}
function S(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, f.uk)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text)
    };
}
