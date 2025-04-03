r.d(t, { default: () => S }), r(47120);
var s = r(200651),
    n = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(215569),
    l = r(481060),
    u = r(401190),
    c = r(490529),
    p = r(57875),
    d = r(368003),
    h = r(981631),
    g = r(388032),
    m = r(147972),
    x = r(20493);
function b(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let j = (e) =>
        (0, s.jsx)('div', {
            className: m.innerContentWrapper,
            children: e.children
        }),
    f = {
        [h.gkr.HOUSE_1]: r(530530),
        [h.gkr.HOUSE_2]: r(230651),
        [h.gkr.HOUSE_3]: r(497494)
    },
    k = {
        [h.gkr.HOUSE_1]: m.quizResultLogoWrapperHouse1,
        [h.gkr.HOUSE_2]: m.quizResultLogoWrapperHouse2,
        [h.gkr.HOUSE_3]: m.quizResultLogoWrapperHouse3
    },
    y = (e) =>
        ({
            [h.gkr.HOUSE_1]: g.NW.string(g.t['hNL/nJ']),
            [h.gkr.HOUSE_2]: g.NW.string(g.t.jVomur),
            [h.gkr.HOUSE_3]: g.NW.string(g.t['+kg5zs'])
        })[e];
class W extends n.Component {
    getSelectedHouseID() {
        let e,
            { responses: t } = this.state,
            r = {},
            s = 0;
        return (Object.keys(t).forEach((n) => {
            let i = t[n];
            null == r[i] && (r[i] = 0), r[i]++, r[i] > s && ((e = i), (s = r[i]));
        }),
        null == e || e === h.jsM)
            ? (0, c.uj)()
            : e;
    }
    renderUnknownErrorMessage() {
        return (0, s.jsx)(
            p.Z,
            {
                children: (0, s.jsxs)(n.Fragment, {
                    children: [
                        (0, s.jsx)(l.X6q, {
                            className: m.quizResultHeading,
                            variant: 'heading-xl/semibold',
                            children: g.NW.string(g.t['8A8ry8'])
                        }),
                        (0, s.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: g.NW.format(g.t['4JWDXl'], {
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
        let t = g.NW.formatToPlainString(g.t.HrcQAA, { house: (0, c.X8)(e) });
        return (0, s.jsx)(
            p.Z,
            {
                children: (0, s.jsxs)(n.Fragment, {
                    children: [
                        (0, s.jsx)('div', {
                            className: o()(m.quizResultLogoWrapper, k[e], x.marginBottom20),
                            children: (0, s.jsx)('img', {
                                alt: t,
                                className: m.quizResultLogo,
                                src: f[e]
                            })
                        }),
                        (0, s.jsx)(l.X6q, {
                            className: m.quizResultHeading,
                            variant: 'heading-xl/semibold',
                            children: t
                        }),
                        (0, s.jsx)(l.Text, {
                            className: m.quizResultBody,
                            variant: 'text-sm/normal',
                            children: y(e)
                        })
                    ]
                })
            },
            'submit-step'
        );
    }
    renderContent() {
        let { currentStep: e, hasUnknownError: t, hasSubmittedHouse: r, questions: n } = this.state;
        if (t) return this.renderUnknownErrorMessage();
        if (r) return this.renderQuizResult();
        let i = n[e];
        return (0, s.jsx)(
            p.Z,
            {
                children: (0, s.jsx)(
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
        let { currentStep: e, hasUnknownError: t, hasSubmittedHouse: r, questions: s } = this.state;
        return t
            ? g.NW.string(g.t.fMgJMz)
            : r
              ? g.NW.string(g.t.mW2CNz)
              : g.NW.formatToPlainString(g.t['4n8Pb2'], {
                    currentQuestion: e + 1,
                    questionCount: s.length
                });
    }
    renderNewsletterWarning() {
        return (0, s.jsx)(p.Z, {
            children: (0, s.jsx)(l.Text, {
                className: m.nameFormPreface,
                variant: 'text-md/normal',
                children: g.NW.string(g.t['3kUvgo'])
            })
        });
    }
    renderPrimaryAction() {
        let { currentStep: e, responses: t, hasUnknownError: r, hasSubmittedHouse: n, isRequestPending: i, questions: o } = this.state,
            a = null == t[e];
        return r
            ? (0, s.jsx)(l.zxk, {
                  type: 'submit',
                  color: l.zxk.Colors.BRAND,
                  onClick: this.handleSubmitButtonClick,
                  submitting: i,
                  children: g.NW.string(g.t['5BGOBA'])
              })
            : n
              ? (0, s.jsx)(l.zxk, {
                    type: 'submit',
                    color: l.zxk.Colors.BRAND,
                    onClick: this.props.onClose,
                    children: g.NW.string(g.t['Wc/k5O'])
                })
              : e === o.length - 1
                ? (0, s.jsx)(l.zxk, {
                      disabled: a,
                      type: 'submit',
                      color: l.zxk.Colors.BRAND,
                      onClick: this.handleSubmitButtonClick,
                      submitting: i,
                      children: g.NW.string(g.t.j5vHo6)
                  })
                : (0, s.jsx)(l.zxk, {
                      disabled: a,
                      type: 'submit',
                      color: l.zxk.Colors.BRAND,
                      onClick: this.handleNextQuestionButtonClick,
                      children: g.NW.string(g.t.cgonQE)
                  });
    }
    renderSecondaryAction() {
        let { hasSubmittedHouse: e } = this.state;
        return e
            ? null
            : (0, s.jsx)(l.zxk, {
                  type: 'button',
                  look: l.zxk.Looks.LINK,
                  color: l.zxk.Colors.PRIMARY,
                  onClick: this.props.onClose,
                  children: g.NW.string(g.t['5NfNYm'])
              });
    }
    render() {
        let { selectedHouse: e } = this.state,
            { transitionState: t } = this.props;
        return (0, s.jsxs)(l.Y0X, {
            size: null == e ? l.CgR.MEDIUM : l.CgR.SMALL,
            transitionState: t,
            children: [
                (0, s.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, s.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        children: this.renderHeaderCopy()
                    })
                }),
                (0, s.jsx)('div', {
                    className: m.outerContentWrapper,
                    children: (0, s.jsx)(a.W, {
                        component: j,
                        children: this.renderContent()
                    })
                }),
                (0, s.jsxs)(l.mzw, {
                    children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', {
                currentStep: 0,
                hasSubmittedHouse: !1,
                hasUnknownError: !1,
                isRequestPending: !1,
                questions: (0, c.tI)(),
                responses: {},
                selectedHouse: null
            }),
            b(this, 'handleQuestionSelect', (e) => {
                this.setState((t) => {
                    var r, s;
                    return {
                        responses:
                            ((r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        s = Object.keys(r);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (s = s.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        s.forEach(function (t) {
                                            b(e, t, r[t]);
                                        });
                                }
                                return e;
                            })({}, t.responses)),
                            (s = s = { [t.currentStep]: e }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var s = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, s);
                                      }
                                      return r;
                                  })(Object(s)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                                  }),
                            r)
                    };
                });
            }),
            b(this, 'handleSubmitButtonClick', () => {
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
            b(this, 'handleKeyDown', (e) => {
                e.keyCode === h.yXg.ENTER && this.handleSubmitButtonClick();
            }),
            b(this, 'handleNextQuestionButtonClick', () => {
                this.setState((e) => ({ currentStep: e.currentStep + 1 }));
            });
    }
}
let S = W;
