n.d(t, { default: () => k }), n(388685);
var r = n(255367),
    s = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(215569),
    l = n(481060),
    u = n(401190),
    p = n(490529),
    c = n(57875),
    d = n(368003),
    h = n(981631),
    g = n(388032),
    m = n(204699),
    x = n(197571);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let j = (e) =>
        (0, r.jsx)("div", {
            className: m.innerContentWrapper,
            children: e.children,
        }),
    f = {
        [h.gkr.HOUSE_1]: n(530530),
        [h.gkr.HOUSE_2]: n(230651),
        [h.gkr.HOUSE_3]: n(497494),
    },
    y = {
        [h.gkr.HOUSE_1]: m.quizResultLogoWrapperHouse1,
        [h.gkr.HOUSE_2]: m.quizResultLogoWrapperHouse2,
        [h.gkr.HOUSE_3]: m.quizResultLogoWrapperHouse3,
    };
class S extends s.Component {
    getSelectedHouseID() {
        let e,
            { responses: t } = this.state,
            n = {},
            r = 0;
        return (Object.keys(t).forEach((s) => {
            let i = t[s];
            null == n[i] && (n[i] = 0), n[i]++, n[i] > r && ((e = i), (r = n[i]));
        }),
        null == e || e === h.jsM)
            ? (0, p.uj)()
            : e;
    }
    renderUnknownErrorMessage() {
        return (0, r.jsx)(
            c.Z,
            {
                children: (0, r.jsxs)(s.Fragment, {
                    children: [
                        (0, r.jsx)(l.X6q, {
                            className: m.quizResultHeading,
                            variant: "heading-xl/semibold",
                            children: g.intl.string(g.t["8A8ry8"]),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: g.intl.format(g.t["4JWDXl"], {
                                emailAddress: "hypesquad@".concat(h.U9i),
                                emailAddressLink: "mailto:hypesquad@".concat(h.U9i),
                            }),
                        }),
                    ],
                }),
            },
            "error",
        );
    }
    renderQuizResult() {
        let { selectedHouse: e } = this.state;
        if (null == e) return null;
        let t = g.intl.formatToPlainString(g.t.HrcQAA, { house: (0, p.X8)(e) });
        return (0, r.jsx)(
            c.Z,
            {
                children: (0, r.jsxs)(s.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(m.quizResultLogoWrapper, y[e], x.marginBottom20),
                            children: (0, r.jsx)("img", {
                                alt: t,
                                className: m.quizResultLogo,
                                src: f[e],
                            }),
                        }),
                        (0, r.jsx)(l.X6q, {
                            className: m.quizResultHeading,
                            variant: "heading-xl/semibold",
                            children: t,
                        }),
                        (0, r.jsx)(l.Text, {
                            className: m.quizResultBody,
                            variant: "text-sm/normal",
                            children: {
                                [h.gkr.HOUSE_1]: g.intl.string(g.t["hNL/nJ"]),
                                [h.gkr.HOUSE_2]: g.intl.string(g.t.jVomur),
                                [h.gkr.HOUSE_3]: g.intl.string(g.t["+kg5zs"]),
                            }[e],
                        }),
                    ],
                }),
            },
            "submit-step",
        );
    }
    renderContent() {
        let { currentStep: e, hasUnknownError: t, hasSubmittedHouse: n, questions: s } = this.state;
        if (t) return this.renderUnknownErrorMessage();
        if (n) return this.renderQuizResult();
        let i = s[e];
        return (0, r.jsx)(
            c.Z,
            {
                children: (0, r.jsx)(
                    d.Z,
                    {
                        onSelect: this.handleQuestionSelect,
                        options: i.options,
                        prompt: i.prompt,
                    },
                    e,
                ),
            },
            e,
        );
    }
    renderHeaderCopy() {
        let { currentStep: e, hasUnknownError: t, hasSubmittedHouse: n, questions: r } = this.state;
        return t
            ? g.intl.string(g.t.fMgJMz)
            : n
              ? g.intl.string(g.t.mW2CNz)
              : g.intl.formatToPlainString(g.t["4n8Pb2"], {
                    currentQuestion: e + 1,
                    questionCount: r.length,
                });
    }
    renderNewsletterWarning() {
        return (0, r.jsx)(c.Z, {
            children: (0, r.jsx)(l.Text, {
                className: m.nameFormPreface,
                variant: "text-md/normal",
                children: g.intl.string(g.t["3kUvgo"]),
            }),
        });
    }
    renderPrimaryAction() {
        let {
                currentStep: e,
                responses: t,
                hasUnknownError: n,
                hasSubmittedHouse: s,
                isRequestPending: i,
                questions: o,
            } = this.state,
            a = null == t[e];
        return n
            ? (0, r.jsx)(l.zxk, {
                  variant: "primary",
                  text: g.intl.string(g.t["5BGOBA"]),
                  type: "submit",
                  onClick: this.handleSubmitButtonClick,
                  loading: i,
              })
            : s
              ? (0, r.jsx)(l.zxk, {
                    variant: "primary",
                    text: g.intl.string(g.t["Wc/k5O"]),
                    type: "submit",
                    onClick: this.props.onClose,
                })
              : e === o.length - 1
                ? (0, r.jsx)(l.zxk, {
                      variant: "primary",
                      text: g.intl.string(g.t.j5vHo6),
                      disabled: a,
                      type: "submit",
                      onClick: this.handleSubmitButtonClick,
                      loading: i,
                  })
                : (0, r.jsx)(l.zxk, {
                      variant: "primary",
                      text: g.intl.string(g.t.cgonQE),
                      disabled: a,
                      type: "submit",
                      onClick: this.handleNextQuestionButtonClick,
                  });
    }
    renderSecondaryAction() {
        let { hasSubmittedHouse: e } = this.state;
        return e
            ? null
            : (0, r.jsx)(l.zxk, {
                  variant: "secondary",
                  text: g.intl.string(g.t["5NfNYm"]),
                  type: "button",
                  onClick: this.props.onClose,
              });
    }
    render() {
        let { selectedHouse: e } = this.state,
            { transitionState: t } = this.props;
        return (0, r.jsxs)(l.Y0X, {
            size: null == e ? l.CgR.MEDIUM : l.CgR.SMALL,
            transitionState: t,
            parentComponent: "HouseSelectionModal",
            children: [
                (0, r.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, r.jsx)(l.X6q, {
                        variant: "heading-lg/semibold",
                        children: this.renderHeaderCopy(),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: m.outerContentWrapper,
                    children: (0, r.jsx)(a.W, {
                        component: j,
                        children: this.renderContent(),
                    }),
                }),
                (0, r.jsxs)(l.mzw, {
                    children: [this.renderPrimaryAction(), this.renderSecondaryAction()],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            b(this, "state", {
                currentStep: 0,
                hasSubmittedHouse: !1,
                hasUnknownError: !1,
                isRequestPending: !1,
                questions: (0, p.tI)(),
                responses: {},
                selectedHouse: null,
            }),
            b(this, "handleQuestionSelect", (e) => {
                this.setState((t) => ({
                    responses: (function (e, t) {
                        return (
                            (t = null != t ? t : {}),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(t)).forEach(function (n) {
                                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                  }),
                            e
                        );
                    })(
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        b(e, t, n[t]);
                                    });
                            }
                            return e;
                        })({}, t.responses),
                        { [t.currentStep]: e },
                    ),
                }));
            }),
            b(this, "handleSubmitButtonClick", () => {
                let e = this.getSelectedHouseID();
                this.setState({ isRequestPending: !0 }, () => {
                    u.Z.joinHypeSquadOnline({ houseID: e })
                        .then(() => {
                            this.setState({
                                hasUnknownError: !1,
                                hasSubmittedHouse: !0,
                                isRequestPending: !1,
                                selectedHouse: e,
                            });
                        })
                        .catch(() => {
                            this.setState({
                                hasUnknownError: !0,
                                hasSubmittedHouse: !1,
                                isRequestPending: !1,
                            });
                        });
                });
            }),
            b(this, "handleKeyDown", (e) => {
                e.keyCode === h.yXg.ENTER && this.handleSubmitButtonClick();
            }),
            b(this, "handleNextQuestionButtonClick", () => {
                this.setState((e) => ({ currentStep: e.currentStep + 1 }));
            });
    }
}
let k = S;
