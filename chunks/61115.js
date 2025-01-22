r.r(n),
    r.d(n, {
        default: function () {
            return S;
        },
        openQuestSurveyModal: function () {
            return C;
        }
    });
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(642128),
    d = r(481060),
    f = r(493773),
    p = r(600164),
    h = r(626135),
    _ = r(617136),
    m = r(113434),
    g = r(569984),
    E = r(981631),
    v = r(388032),
    y = r(7302),
    b = r(677486);
let I = 2500,
    T = 467;
function S(e) {
    let { questId: n, survey: r, transitionState: i, onClose: a, onSubmit: l } = e,
        u = (0, m.B4)(n),
        [_, g] = s.useState(0),
        [S, C] = (0, d.useSpring)(() => ({
            from: { width: '0%' },
            config: { duration: I }
        })),
        R = (e) => {
            l(),
                g(1),
                null != u &&
                    h.default.track(E.rMx.QUEST_SURVEY_SUBMITTED, {
                        ...N(u, r),
                        choice: e.text,
                        choice_id: e.key
                    });
        },
        O = async (e) => {
            1 === e && (await C({ width: '100%' }), a());
        };
    return (
        (0, f.Z)(() => {
            null != u && h.default.track(E.rMx.QUEST_SURVEY_DISPLAYED, N(u, r));
        }),
        null == u && a(),
        (0, o.jsx)(d.ModalRoot, {
            transitionState: i,
            size: d.ModalSize.DYNAMIC,
            className: y.modalRoot,
            children: (0, o.jsxs)(d.Slides, {
                activeSlide: _,
                width: T,
                onSlideReady: O,
                children: [
                    (0, o.jsxs)(d.Slide, {
                        id: 0,
                        children: [
                            (0, o.jsxs)(d.ModalHeader, {
                                direction: p.Z.Direction.VERTICAL,
                                separator: !1,
                                className: y.modalHeader,
                                children: [
                                    (0, o.jsx)(d.ModalCloseButton, {
                                        className: y.closeBtn,
                                        onClick: a
                                    }),
                                    (0, o.jsx)('img', {
                                        src: b,
                                        alt: '',
                                        className: y.asset
                                    }),
                                    (0, o.jsx)(d.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: r.title
                                    }),
                                    (0, o.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: r.subtitle
                                    })
                                ]
                            }),
                            (0, o.jsx)(d.ModalContent, {
                                className: y.modalContent,
                                children: r.choices.map((e) =>
                                    (0, o.jsx)(
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
                    (0, o.jsxs)(d.Slide, {
                        id: 1,
                        children: [
                            (0, o.jsxs)(d.ModalContent, {
                                className: y.completedModalContent,
                                children: [
                                    (0, o.jsx)('img', {
                                        src: b,
                                        alt: '',
                                        className: y.asset
                                    }),
                                    (0, o.jsx)(d.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: v.intl.string(v.t.KTjjrK)
                                    }),
                                    (0, o.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: v.intl.string(v.t.AvbrEB)
                                    })
                                ]
                            }),
                            (0, o.jsx)(d.ModalFooter, {
                                children: (0, o.jsxs)('div', {
                                    className: y.closeButtonContainer,
                                    children: [
                                        (0, o.jsx)(d.Button, {
                                            onClick: a,
                                            children: v.intl.string(v.t.cpT0Cg)
                                        }),
                                        (0, o.jsx)(c.animated.div, {
                                            className: y.progressOverlay,
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
    return (0, o.jsxs)(d.Clickable, {
        className: u()(y.choiceContainer, n),
        onClick: () => i(r),
        children: [
            (0, o.jsx)(d.Text, {
                variant: 'text-sm/semibold',
                children: r.text
            }),
            (0, o.jsx)(d.ChevronSmallRightIcon, {})
        ]
    });
}
function C(e) {
    let n = !1;
    (0, d.openModalLazy)(
        async () => {
            let { default: i } = await Promise.resolve().then(r.bind(r, 61115));
            return (r) =>
                (0, o.jsx)(i, {
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
        quest_status: (0, _.uk)(e),
        survey_id: n.id,
        survey_title: n.title,
        survey_subtitle: n.subtitle,
        choices: n.choices.map((e) => e.text)
    };
}
!(function (e) {
    (e[(e.SURVEY = 0)] = 'SURVEY'), (e[(e.COMPLETE = 1)] = 'COMPLETE');
})(i || (i = {}));
