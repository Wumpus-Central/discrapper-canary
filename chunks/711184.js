n.r(t), n(47120);
var s = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(215569),
    l = n(481060),
    u = n(401190),
    d = n(490529),
    c = n(57875),
    p = n(368003),
    h = n(981631),
    g = n(388032),
    m = n(900784),
    b = n(232186);
function x(e, t, n) {
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
let f = (e) =>
        (0, s.jsx)('div', {
            className: m.innerContentWrapper,
            children: e.children
        }),
    j = {
        [h.gkr.HOUSE_1]: n(530530),
        [h.gkr.HOUSE_2]: n(230651),
        [h.gkr.HOUSE_3]: n(497494)
    },
    S = {
        [h.gkr.HOUSE_1]: m.quizResultLogoWrapperHouse1,
        [h.gkr.HOUSE_2]: m.quizResultLogoWrapperHouse2,
        [h.gkr.HOUSE_3]: m.quizResultLogoWrapperHouse3
    },
    C = (e) =>
        ({
            [h.gkr.HOUSE_1]: g.intl.string(g.t['hNL/nJ']),
            [h.gkr.HOUSE_2]: g.intl.string(g.t.jVomur),
            [h.gkr.HOUSE_3]: g.intl.string(g.t['+kg5zs'])
        })[e];
class H extends r.Component {
    getSelectedHouseID() {
        let e;
        let { responses: t } = this.state,
            n = {},
            s = 0;
        return (Object.keys(t).forEach((r) => {
            let i = t[r];
            null == n[i] && (n[i] = 0), n[i]++, n[i] > s && ((e = i), (s = n[i]));
        }),
        null == e || e === h.jsM)
            ? (0, d.uj)()
            : e;
    }
    renderUnknownErrorMessage() {
        return (0, s.jsx)(
            c.Z,
            {
                children: (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsx)(l.Heading, {
                            className: m.quizResultHeading,
                            variant: 'heading-xl/semibold',
                            children: g.intl.string(g.t['8A8ry8'])
                        }),
                        (0, s.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: g.intl.format(g.t['4JWDXl'], {
                                emailAddress: 'hypesquad@'.concat(h.U9i),
                                emailAddressLink: 'mailto:hypesquad@'.concat(h.U9i)
                            })
                        })
                    ]
                })
            },
            'error'
        );
    }
    renderQuizResult() {
        let { selectedHouse: e } = this.state;
        if (null == e) return null;
        let t = g.intl.formatToPlainString(g.t.HrcQAA, { house: (0, d.X8)(e) });
        return (0, s.jsx)(
            c.Z,
            {
                children: (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsx)('div', {
                            className: o()(m.quizResultLogoWrapper, S[e], b.marginBottom20),
                            children: (0, s.jsx)('img', {
                                alt: t,
                                className: m.quizResultLogo,
                                src: j[e]
                            })
                        }),
                        (0, s.jsx)(l.Heading, {
                            className: m.quizResultHeading,
                            variant: 'heading-xl/semibold',
                            children: t
                        }),
                        (0, s.jsx)(l.Text, {
                            className: m.quizResultBody,
                            variant: 'text-sm/normal',
                            children: C(e)
                        })
                    ]
                })
            },
            'submit-step'
        );
    }
    renderContent() {
        let { currentStep: e, hasUnknownError: t, hasSubmittedHouse: n, questions: r } = this.state;
        if (t) return this.renderUnknownErrorMessage();
        if (n) return this.renderQuizResult();
        let i = r[e];
        return (0, s.jsx)(
            c.Z,
            {
                children: (0, s.jsx)(
                    p.Z,
                    {
                        onSelect: this.handleQuestionSelect,
                        options: i.options,
                        prompt: i.prompt
                    },
                    e
                )
            },
            e
        );
    }
    renderHeaderCopy() {
        let { currentStep: e, hasUnknownError: t, hasSubmittedHouse: n, questions: s } = this.state;
        return t
            ? g.intl.string(g.t.fMgJMz)
            : n
              ? g.intl.string(g.t.mW2CNz)
              : g.intl.formatToPlainString(g.t['4n8Pb2'], {
                    currentQuestion: e + 1,
                    questionCount: s.length
                });
    }
    renderNewsletterWarning() {
        return (0, s.jsx)(c.Z, {
            children: (0, s.jsx)(l.Text, {
                className: m.nameFormPreface,
                variant: 'text-md/normal',
                children: g.intl.string(g.t['3kUvgo'])
            })
        });
    }
    renderPrimaryAction() {
        let { currentStep: e, responses: t, hasUnknownError: n, hasSubmittedHouse: r, isRequestPending: i, questions: o } = this.state,
            a = null == t[e];
        return n
            ? (0, s.jsx)(l.Button, {
                  type: 'submit',
                  color: l.Button.Colors.BRAND,
                  onClick: this.handleSubmitButtonClick,
                  submitting: i,
                  children: g.intl.string(g.t['5BGOBA'])
              })
            : r
              ? (0, s.jsx)(l.Button, {
                    type: 'submit',
                    color: l.Button.Colors.BRAND,
                    onClick: this.props.onClose,
                    children: g.intl.string(g.t['Wc/k5O'])
                })
              : e === o.length - 1
                ? (0, s.jsx)(l.Button, {
                      disabled: a,
                      type: 'submit',
                      color: l.Button.Colors.BRAND,
                      onClick: this.handleSubmitButtonClick,
                      submitting: i,
                      children: g.intl.string(g.t.j5vHo6)
                  })
                : (0, s.jsx)(l.Button, {
                      disabled: a,
                      type: 'submit',
                      color: l.Button.Colors.BRAND,
                      onClick: this.handleNextQuestionButtonClick,
                      children: g.intl.string(g.t.cgonQE)
                  });
    }
    renderSecondaryAction() {
        let { hasSubmittedHouse: e } = this.state;
        return e
            ? null
            : (0, s.jsx)(l.Button, {
                  type: 'button',
                  look: l.Button.Looks.LINK,
                  color: l.Button.Colors.PRIMARY,
                  onClick: this.props.onClose,
                  children: g.intl.string(g.t['5NfNYm'])
              });
    }
    render() {
        let { selectedHouse: e } = this.state,
            { transitionState: t } = this.props;
        return (0, s.jsxs)(l.ModalRoot, {
            size: null == e ? l.ModalSize.MEDIUM : l.ModalSize.SMALL,
            transitionState: t,
            children: [
                (0, s.jsx)(l.ModalHeader, {
                    separator: !1,
                    children: (0, s.jsx)(l.Heading, {
                        variant: 'heading-lg/semibold',
                        children: this.renderHeaderCopy()
                    })
                }),
                (0, s.jsx)('div', {
                    className: m.outerContentWrapper,
                    children: (0, s.jsx)(a.W, {
                        component: f,
                        children: this.renderContent()
                    })
                }),
                (0, s.jsxs)(l.ModalFooter, {
                    children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'state', {
                currentStep: 0,
                hasSubmittedHouse: !1,
                hasUnknownError: !1,
                isRequestPending: !1,
                questions: (0, d.tI)(),
                responses: {},
                selectedHouse: null
            }),
            x(this, 'handleQuestionSelect', (e) => {
                this.setState((t) => ({
                    responses: {
                        ...t.responses,
                        [t.currentStep]: e
                    }
                }));
            }),
            x(this, 'handleSubmitButtonClick', () => {
                let e = this.getSelectedHouseID();
                this.setState({ isRequestPending: !0 }, () => {
                    u.Z.joinHypeSquadOnline({ houseID: e })
                        .then(() => {
                            this.setState({
                                hasUnknownError: !1,
                                hasSubmittedHouse: !0,
                                isRequestPending: !1,
                                selectedHouse: e
                            });
                        })
                        .catch(() => {
                            this.setState({
                                hasUnknownError: !0,
                                hasSubmittedHouse: !1,
                                isRequestPending: !1
                            });
                        });
                });
            }),
            x(this, 'handleKeyDown', (e) => {
                e.keyCode === h.yXg.ENTER && this.handleSubmitButtonClick();
            }),
            x(this, 'handleNextQuestionButtonClick', () => {
                this.setState((e) => ({ currentStep: e.currentStep + 1 }));
            });
    }
}
t.default = H;
