r.r(n),
    r.d(n, {
        default: function () {
            return y;
        },
        openQuestSurveyModal: function () {
            return A;
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
    f = r(600164),
    _ = r(626135),
    h = r(617136),
    p = r(113434),
    m = r(569984),
    g = r(981631),
    E = r(388032),
    v = r(7302),
    I = r(677486);
let T = 2500,
    b = 467;
function y(e) {
    let { questId: n, survey: r, transitionState: i, onClose: a, onSubmit: l } = e,
        u = (0, p.B4)(n),
        [h, m] = o.useState(0),
        [y, A] = (0, d.useSpring)(() => ({
            from: { width: '0%' },
            config: { duration: T }
        })),
        C = (e) => {
            l(),
                m(1),
                null != u &&
                    _.default.track(g.rMx.QUEST_SURVEY_SUBMITTED, {
                        ...N(u, r),
                        choice: e.text,
                        choice_id: e.key
                    });
        },
        R = async (e) => {
            1 === e && (await A({ width: '100%' }), a());
        };
    return (
        o.useEffect(() => {
            null != u && _.default.track(g.rMx.QUEST_SURVEY_DISPLAYED, N(u, r));
        }, []),
        null == u && a(),
        (0, s.jsx)(d.ModalRoot, {
            transitionState: i,
            size: d.ModalSize.DYNAMIC,
            className: v.modalRoot,
            children: (0, s.jsxs)(d.Slides, {
                activeSlide: h,
                width: b,
                onSlideReady: R,
                children: [
                    (0, s.jsxs)(d.Slide, {
                        id: 0,
                        children: [
                            (0, s.jsxs)(d.ModalHeader, {
                                direction: f.Z.Direction.VERTICAL,
                                separator: !1,
                                className: v.modalHeader,
                                children: [
                                    (0, s.jsx)(d.ModalCloseButton, {
                                        className: v.closeBtn,
                                        onClick: a
                                    }),
                                    (0, s.jsx)('img', {
                                        src: I,
                                        alt: '',
                                        className: v.asset
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
                                className: v.modalContent,
                                children: r.choices.map((e) =>
                                    (0, s.jsx)(
                                        S,
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
                    (0, s.jsxs)(d.Slide, {
                        id: 1,
                        children: [
                            (0, s.jsxs)(d.ModalContent, {
                                className: v.completedModalContent,
                                children: [
                                    (0, s.jsx)('img', {
                                        src: I,
                                        alt: '',
                                        className: v.asset
                                    }),
                                    (0, s.jsx)(d.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: E.intl.string(E.t.KTjjrK)
                                    }),
                                    (0, s.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: E.intl.string(E.t.AvbrEB)
                                    })
                                ]
                            }),
                            (0, s.jsx)(d.ModalFooter, {
                                children: (0, s.jsxs)('div', {
                                    className: v.closeButtonContainer,
                                    children: [
                                        (0, s.jsx)(d.Button, {
                                            onClick: a,
                                            children: E.intl.string(E.t.cpT0Cg)
                                        }),
                                        (0, s.jsx)(c.animated.div, {
                                            className: v.progressOverlay,
                                            style: y
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
function S(e) {
    let { className: n, choice: r, onClick: i } = e;
    return (0, s.jsxs)(d.Clickable, {
        className: u()(v.choiceContainer, n),
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
function A(e) {
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
                let r = m.Z.getQuest(e.questId);
                null != r &&
                    _.default.track(g.rMx.QUEST_SURVEY_DISMISSED, {
                        ...N(r, e.survey),
                        submitted: n
                    });
            }
        }
    );
}
function N(e, n) {
    return {
        quest_id: e.id,
        quest_status: (0, h.uk)(e),
        survey_id: n.id,
        survey_title: n.title,
        survey_subtitle: n.subtitle,
        choices: n.choices.map((e) => e.text)
    };
}
!(function (e) {
    (e[(e.SURVEY = 0)] = 'SURVEY'), (e[(e.COMPLETE = 1)] = 'COMPLETE');
})(i || (i = {}));
