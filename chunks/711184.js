s.d(t, { default: () => R }), s(47120);
var n = s(200651),
    r = s(192379),
    i = s(120356),
    o = s.n(i),
    l = s(215569),
    a = s(481060),
    u = s(401190),
    c = s(490529),
    p = s(57875),
    d = s(368003),
    h = s(981631),
    g = s(388032),
    m = s(900784),
    x = s(232186);
function k(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
let b = (e) =>
        (0, n.jsx)('div', {
            className: m.innerContentWrapper,
            children: e.children
        }),
    j = {
        [h.gkr.HOUSE_1]: s(530530),
        [h.gkr.HOUSE_2]: s(230651),
        [h.gkr.HOUSE_3]: s(497494)
    },
    z = {
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
class _ extends r.Component {
    getSelectedHouseID() {
        let e;
        let { responses: t } = this.state,
            s = {},
            n = 0;
        return (Object.keys(t).forEach((r) => {
            let i = t[r];
            null == s[i] && (s[i] = 0), s[i]++, s[i] > n && ((e = i), (n = s[i]));
        }),
        null == e || e === h.jsM)
            ? (0, c.uj)()
            : e;
    }
    renderUnknownErrorMessage() {
        return (0, n.jsx)(
            p.Z,
            {
                children: (0, n.jsxs)(r.Fragment, {
                    children: [
                        (0, n.jsx)(a.X6q, {
                            className: m.quizResultHeading,
                            variant: 'heading-xl/semibold',
                            children: g.intl.string(g.t['8A8ry8'])
                        }),
                        (0, n.jsx)(a.Text, {
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
        let t = g.intl.formatToPlainString(g.t.HrcQAA, { house: (0, c.X8)(e) });
        return (0, n.jsx)(
            p.Z,
            {
                children: (0, n.jsxs)(r.Fragment, {
                    children: [
                        (0, n.jsx)('div', {
                            className: o()(m.quizResultLogoWrapper, z[e], x.marginBottom20),
                            children: (0, n.jsx)('img', {
                                alt: t,
                                className: m.quizResultLogo,
                                src: j[e]
                            })
                        }),
                        (0, n.jsx)(a.X6q, {
                            className: m.quizResultHeading,
                            variant: 'heading-xl/semibold',
                            children: t
                        }),
                        (0, n.jsx)(a.Text, {
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
        let { currentStep: e, hasUnknownError: t, hasSubmittedHouse: s, questions: r } = this.state;
        if (t) return this.renderUnknownErrorMessage();
        if (s) return this.renderQuizResult();
        let i = r[e];
        return (0, n.jsx)(
            p.Z,
            {
                children: (0, n.jsx)(
                    d.Z,
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
        let { currentStep: e, hasUnknownError: t, hasSubmittedHouse: s, questions: n } = this.state;
        return t
            ? g.intl.string(g.t.fMgJMz)
            : s
              ? g.intl.string(g.t.mW2CNz)
              : g.intl.formatToPlainString(g.t['4n8Pb2'], {
                    currentQuestion: e + 1,
                    questionCount: n.length
                });
    }
    renderNewsletterWarning() {
        return (0, n.jsx)(p.Z, {
            children: (0, n.jsx)(a.Text, {
                className: m.nameFormPreface,
                variant: 'text-md/normal',
                children: g.intl.string(g.t['3kUvgo'])
            })
        });
    }
    renderPrimaryAction() {
        let { currentStep: e, responses: t, hasUnknownError: s, hasSubmittedHouse: r, isRequestPending: i, questions: o } = this.state,
            l = null == t[e];
        return s
            ? (0, n.jsx)(a.zxk, {
                  type: 'submit',
                  color: a.zxk.Colors.BRAND,
                  onClick: this.handleSubmitButtonClick,
                  submitting: i,
                  children: g.intl.string(g.t['5BGOBA'])
              })
            : r
              ? (0, n.jsx)(a.zxk, {
                    type: 'submit',
                    color: a.zxk.Colors.BRAND,
                    onClick: this.props.onClose,
                    children: g.intl.string(g.t['Wc/k5O'])
                })
              : e === o.length - 1
                ? (0, n.jsx)(a.zxk, {
                      disabled: l,
                      type: 'submit',
                      color: a.zxk.Colors.BRAND,
                      onClick: this.handleSubmitButtonClick,
                      submitting: i,
                      children: g.intl.string(g.t.j5vHo6)
                  })
                : (0, n.jsx)(a.zxk, {
                      disabled: l,
                      type: 'submit',
                      color: a.zxk.Colors.BRAND,
                      onClick: this.handleNextQuestionButtonClick,
                      children: g.intl.string(g.t.cgonQE)
                  });
    }
    renderSecondaryAction() {
        let { hasSubmittedHouse: e } = this.state;
        return e
            ? null
            : (0, n.jsx)(a.zxk, {
                  type: 'button',
                  look: a.zxk.Looks.LINK,
                  color: a.zxk.Colors.PRIMARY,
                  onClick: this.props.onClose,
                  children: g.intl.string(g.t['5NfNYm'])
              });
    }
    render() {
        let { selectedHouse: e } = this.state,
            { transitionState: t } = this.props;
        return (0, n.jsxs)(a.Y0X, {
            size: null == e ? a.CgR.MEDIUM : a.CgR.SMALL,
            transitionState: t,
            children: [
                (0, n.jsx)(a.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        children: this.renderHeaderCopy()
                    })
                }),
                (0, n.jsx)('div', {
                    className: m.outerContentWrapper,
                    children: (0, n.jsx)(l.W, {
                        component: b,
                        children: this.renderContent()
                    })
                }),
                (0, n.jsxs)(a.mzw, {
                    children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            k(this, 'state', {
                currentStep: 0,
                hasSubmittedHouse: !1,
                hasUnknownError: !1,
                isRequestPending: !1,
                questions: (0, c.tI)(),
                responses: {},
                selectedHouse: null
            }),
            k(this, 'handleQuestionSelect', (e) => {
                this.setState((t) => ({
                    responses: {
                        ...t.responses,
                        [t.currentStep]: e
                    }
                }));
            }),
            k(this, 'handleSubmitButtonClick', () => {
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
            k(this, 'handleKeyDown', (e) => {
                e.keyCode === h.yXg.ENTER && this.handleSubmitButtonClick();
            }),
            k(this, 'handleNextQuestionButtonClick', () => {
                this.setState((e) => ({ currentStep: e.currentStep + 1 }));
            });
    }
}
let R = _;
