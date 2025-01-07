r.r(n),
    r.d(n, {
        default: function () {
            return S;
        },
        openQuestSurveyModal: function () {
            return N;
        }
    });
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(666912),
    d = r(481060),
    f = r(493773),
    _ = r(600164),
    h = r(626135),
    p = r(617136),
    m = r(113434),
    g = r(569984),
    E = r(981631),
    v = r(388032),
    I = r(7302),
    T = r(677486);
let b = 2500,
    y = 467;
function S(e) {
    let { questId: n, survey: r, transitionState: i, onClose: a, onSubmit: l } = e,
        u = (0, m.B4)(n),
        [p, g] = o.useState(0),
        [S, N] = (0, d.useSpring)(() => ({
            from: { width: '0%' },
            config: { duration: b }
        })),
        R = (e) => {
            l(),
                g(1),
                null != u &&
                    h.default.track(E.rMx.QUEST_SURVEY_SUBMITTED, {
                        ...C(u, r),
                        choice: e.text,
                        choice_id: e.key
                    });
        },
        O = async (e) => {
            1 === e && (await N({ width: '100%' }), a());
        };
    return (
        (0, f.Z)(() => {
            null != u && h.default.track(E.rMx.QUEST_SURVEY_DISPLAYED, C(u, r));
        }),
        null == u && a(),
        (0, s.jsx)(d.ModalRoot, {
            transitionState: i,
            size: d.ModalSize.DYNAMIC,
            className: I.modalRoot,
            children: (0, s.jsxs)(d.Slides, {
                activeSlide: p,
                width: y,
                onSlideReady: O,
                children: [
                    (0, s.jsxs)(d.Slide, {
                        id: 0,
                        children: [
                            (0, s.jsxs)(d.ModalHeader, {
                                direction: _.Z.Direction.VERTICAL,
                                separator: !1,
                                className: I.modalHeader,
                                children: [
                                    (0, s.jsx)(d.ModalCloseButton, {
                                        className: I.closeBtn,
                                        onClick: a
                                    }),
                                    (0, s.jsx)('img', {
                                        src: T,
                                        alt: '',
                                        className: I.asset
                                    }),
                                    (0, s.jsx)(d.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: r.title
                                    }),
                                    (0, s.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: r.subtitle
                                    })
                                ]
                            }),
                            (0, s.jsx)(d.ModalContent, {
                                className: I.modalContent,
                                children: r.choices.map((e) =>
                                    (0, s.jsx)(
                                        A,
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
                    (0, s.jsxs)(d.Slide, {
                        id: 1,
                        children: [
                            (0, s.jsxs)(d.ModalContent, {
                                className: I.completedModalContent,
                                children: [
                                    (0, s.jsx)('img', {
                                        src: T,
                                        alt: '',
                                        className: I.asset
                                    }),
                                    (0, s.jsx)(d.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: v.intl.string(v.t.KTjjrK)
                                    }),
                                    (0, s.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: v.intl.string(v.t.AvbrEB)
                                    })
                                ]
                            }),
                            (0, s.jsx)(d.ModalFooter, {
                                children: (0, s.jsxs)('div', {
                                    className: I.closeButtonContainer,
                                    children: [
                                        (0, s.jsx)(d.Button, {
                                            onClick: a,
                                            children: v.intl.string(v.t.cpT0Cg)
                                        }),
                                        (0, s.jsx)(c.animated.div, {
                                            className: I.progressOverlay,
                                            style: S
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
function A(e) {
    let { className: n, choice: r, onClick: i } = e;
    return (0, s.jsxs)(d.Clickable, {
        className: u()(I.choiceContainer, n),
        onClick: () => i(r),
        children: [
            (0, s.jsx)(d.Text, {
                variant: 'text-sm/semibold',
                children: r.text
            }),
            (0, s.jsx)(d.ChevronSmallRightIcon, {})
        ]
    });
}
function N(e) {
    let n = !1;
    (0, d.openModalLazy)(
        async () => {
            let { default: i } = await Promise.resolve().then(r.bind(r, 61115));
            return (r) =>
                (0, s.jsx)(i, {
                    ...r,
                    ...e,
                    onSubmit: () => {
                        n = !0;
                    }
                });
        },
        {
            onCloseCallback: () => {
                let r = g.Z.getQuest(e.questId);
                null != r &&
                    h.default.track(E.rMx.QUEST_SURVEY_DISMISSED, {
                        ...C(r, e.survey),
                        submitted: n
                    });
            }
        }
    );
}
function C(e, n) {
    return {
        quest_id: e.id,
        quest_status: (0, p.uk)(e),
        survey_id: n.id,
        survey_title: n.title,
        survey_subtitle: n.subtitle,
        choices: n.choices.map((e) => e.text)
    };
}
!(function (e) {
    (e[(e.SURVEY = 0)] = 'SURVEY'), (e[(e.COMPLETE = 1)] = 'COMPLETE');
})(i || (i = {}));
