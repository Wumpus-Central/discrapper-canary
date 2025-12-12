n.d(t, {
    ZP: () => w,
    aQ: () => N,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(692547),
    l = n(681715),
    c = n(481060),
    u = n(168107),
    d = n(480916),
    f = n(81643),
    p = n(247206),
    _ = n(557069),
    m = n(936141),
    h = n(823379),
    g = n(388032),
    E = n(3954);
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
function y(e) {
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
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var S = (function (e) {
    return (e.TEXT = "text"), (e.ATTACHMENT = "attachment"), (e.EMBED = "embed"), e;
})(S || {});
let I = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("div", {
            className: a()(E.spoilerWarning, t),
            children: g.intl.string(g.t["F+x38C"]),
        });
    },
    T = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
        return (0, r.jsx)("div", {
            className: a()(E.explicitContentWarning, t),
            children: i
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.fFY, {
                              size: "lg",
                              color: s.Z.colors.WHITE,
                          }),
                          n &&
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "always-white",
                                  className: E.explicitContentWarningText,
                                  children: g.intl.string(g.t.SpxcUR),
                              }),
                      ],
                  }),
        });
    },
    C = (e) => {
        let { reason: t = m.wk.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
        switch (t) {
            case m.wk.SPOILER:
                return (0, r.jsx)(I, { className: n });
            case m.wk.EXPLICIT_CONTENT:
            case m.wk.GORE_CONTENT:
            case m.wk.SELF_HARM_CONTENT:
                return (0, r.jsx)(T, {
                    isSingleMosaicItem: i,
                    className: n,
                });
            case m.wk.POTENTIAL_EXPLICIT_CONTENT:
                return (0, r.jsx)(T, {
                    isSingleMosaicItem: i,
                    className: n,
                    obscureOnly: !0,
                });
            default:
                return (0, h.vE)(t);
        }
    },
    A = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: o } = e;
        return t !== m.wk.EXPLICIT_CONTENT && t !== m.wk.GORE_CONTENT && t !== m.wk.SELF_HARM_CONTENT
            ? null
            : (0, r.jsx)("div", {
                  className: a()(E.obscureButtonContainer, o),
                  children: (0, r.jsx)(c.P3F, {
                      className: E.obscureHoverButton,
                      onClick: i,
                      "aria-label": g.intl.string(g.t.ex5G9m),
                      children: n
                          ? (0, r.jsx)(c.tEF, {
                                size: "md",
                                color: "currentColor",
                            })
                          : (0, r.jsx)(c.kZF, {
                                size: "md",
                                color: "currentColor",
                            }),
                  }),
              });
    },
    N = i.createContext(!1);
class P extends i.PureComponent {
    renderWithTooltip(e) {
        return this.state.visible
            ? e
            : (0, r.jsx)(l.i_, {
                  position: "left",
                  body: this.tooltipText,
                  children: e,
              });
    }
    renderObscuredAttachment() {
        let {
                children: e,
                inline: t,
                className: n,
                containerStyles: i,
                obscured: o = !0,
                reason: s = m.wk.SPOILER,
                isSingleMosaicItem: l = !1,
                obscurityControlClassName: u,
                shouldAgeVerify: d,
                isVerifiedTeen: f,
                forceOpaqueObscure: p,
            } = this.props,
            { visible: _ } = this.state,
            h = (0, r.jsx)(N.Consumer, {
                children: (h) => {
                    let g = h || _ || !o;
                    return m.Xh.has(s) && !t
                        ? (0, r.jsxs)("div", {
                              "aria-label": g ? void 0 : this.ariaLabel,
                              "aria-expanded": g,
                              style: i,
                              className: a()(n, E.spoilerContent, E.spoilerContainer, E.attachmentContainer, {
                                  [E.hidden]: !g,
                                  [E.constrainedObscureContent]: l,
                                  [E.opaque]: d || f || p,
                              }),
                              role: g ? "presentation" : "button",
                              tabIndex: g ? -1 : 0,
                              children: [
                                  g || t
                                      ? null
                                      : (0, r.jsx)(C, {
                                            reason: s,
                                            isSingleMosaicItem: l,
                                        }),
                                  (0, r.jsx)("div", {
                                      "aria-hidden": !g,
                                      className: E.spoilerInnerContainer,
                                      children: e(!g),
                                  }),
                                  f
                                      ? null
                                      : (0, r.jsx)(A, {
                                            obscureReason: s,
                                            isVisible: _,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: u,
                                        }),
                              ],
                          })
                        : (0, r.jsxs)(c.P3F, {
                              onClick: g ? void 0 : this.removeObscurity,
                              "aria-label": g ? void 0 : this.ariaLabel,
                              "aria-expanded": g,
                              style: i,
                              className: a()(n, E.spoilerContent, E.spoilerContainer, E.attachmentContainer, {
                                  [E.hidden]: !g,
                                  [E.hiddenSpoiler]: !g,
                              }),
                              role: g ? "presentation" : "button",
                              tabIndex: g ? -1 : 0,
                              children: [
                                  g || t
                                      ? null
                                      : (0, r.jsx)(C, {
                                            reason: s,
                                            isSingleMosaicItem: l,
                                        }),
                                  (0, r.jsx)("div", {
                                      "aria-hidden": !g,
                                      className: E.spoilerInnerContainer,
                                      children: e(!g),
                                  }),
                              ],
                          });
                },
            });
        return t ? this.renderWithTooltip(h) : h;
    }
    renderObscuredEmbed() {
        let {
                children: e,
                className: t,
                containerStyles: n,
                isSingleMosaicItem: i,
                obscurityControlClassName: o,
                reason: s = m.wk.SPOILER,
                shouldAgeVerify: l,
                isVerifiedTeen: u,
                forceOpaqueObscure: d,
            } = this.props,
            { visible: f } = this.state;
        return (0, r.jsx)(N.Consumer, {
            children: (p) => {
                let _ = p || f;
                return m.Xh.has(s)
                    ? (0, r.jsxs)("div", {
                          "aria-label": f ? void 0 : this.ariaLabel,
                          "aria-expanded": _,
                          style: n,
                          className: a()(t, E.spoilerContent, E.spoilerContainer, E.embedContainer, {
                              [E.hidden]: !_,
                              [E.opaque]: l || u || d,
                          }),
                          role: _ ? "presentation" : "button",
                          tabIndex: _ ? -1 : 0,
                          children: [
                              _
                                  ? null
                                  : (0, r.jsx)(C, {
                                        reason: s,
                                        isSingleMosaicItem: i,
                                    }),
                              (0, r.jsx)("div", {
                                  "aria-hidden": !_,
                                  className: E.spoilerInnerContainer,
                                  children: e(!_),
                              }),
                              u
                                  ? null
                                  : (0, r.jsx)(A, {
                                        obscureReason: s,
                                        isVisible: f,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: o,
                                    }),
                          ],
                      })
                    : (0, r.jsxs)(c.P3F, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": _,
                          className: a()(t, E.spoilerContent, E.spoilerContainer, E.embedContainer, { [E.hidden]: !_ }),
                          onClick: _ ? void 0 : this.removeObscurity,
                          style: n,
                          role: _ ? "presentation" : "button",
                          tabIndex: _ ? -1 : 0,
                          children: [
                              _
                                  ? null
                                  : (0, r.jsx)(C, {
                                        reason: s,
                                        className: E.embed,
                                    }),
                              (0, r.jsx)("div", {
                                  "aria-hidden": !_,
                                  children: e(!_),
                              }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: o } = this.state,
            s = (0, r.jsx)(N.Consumer, {
                children: (s) => {
                    let l = s || o,
                        u = i.Children.toArray(e(l)),
                        d = i.Children.map(u, (e) => (i.isValidElement(e) && null != t ? t(e, l) : e));
                    return (0, r.jsx)(c.P3F, {
                        tag: "span",
                        onClick: l ? void 0 : this.removeObscurity,
                        "aria-label": l ? void 0 : this.ariaLabel,
                        "aria-expanded": l,
                        tabIndex: l ? -1 : 0,
                        role: l ? "presentation" : "button",
                        className: a()("obscured", n, E.spoilerContent, E.spoilerMarkdownContent, { [E.hidden]: !l }),
                        children: (0, r.jsx)("span", {
                            className: E.obscuredTextContent,
                            children: (0, r.jsx)("span", {
                                "aria-hidden": !l,
                                className: E.obscuredTextContentInner,
                                children: d,
                            }),
                        }),
                    });
                },
            });
        return this.renderWithTooltip(s);
    }
    render() {
        let { type: e = "text" } = this.props;
        switch (e) {
            case "text":
                return this.renderObscuredText();
            case "attachment":
                return this.renderObscuredAttachment();
            case "embed":
                return this.renderObscuredEmbed();
            default:
                return (0, h.vE)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = m.wk.SPOILER } = this.props;
        switch (e) {
            case m.wk.SPOILER:
                return g.intl.string(g.t["F+x38C"]);
            case m.wk.EXPLICIT_CONTENT:
            case m.wk.GORE_CONTENT:
            case m.wk.SELF_HARM_CONTENT:
                return g.intl.string(g.t.mlJ8Vf);
            case m.wk.POTENTIAL_EXPLICIT_CONTENT:
                return g.intl.string(g.t.MRdR7z);
            default:
                return (0, h.vE)(e);
        }
    }
    get tooltipText() {
        let { reason: e = m.wk.SPOILER } = this.props;
        switch (e) {
            case m.wk.SPOILER:
                return g.intl.string(g.t["F+x38C"]);
            case m.wk.EXPLICIT_CONTENT:
            case m.wk.GORE_CONTENT:
            case m.wk.SELF_HARM_CONTENT:
                return g.intl.string(g.t.mlJ8Vf);
            case m.wk.POTENTIAL_EXPLICIT_CONTENT:
                return g.intl.string(g.t.MRdR7z);
            default:
                return (0, h.vE)(e);
        }
    }
    constructor(...e) {
        super(...e),
            b(this, "state", { visible: !1 }),
            b(this, "removeObscurity", (e) => {
                let { visible: t } = this.state;
                if (t) return;
                t || (e.preventDefault(), e.stopPropagation()), this.setState({ visible: !0 });
                let { onReveal: n } = this.props;
                null != n && n();
            }),
            b(this, "handleToggleObscurity", (e) => {
                if (
                    (e.stopPropagation(),
                    e.nativeEvent.stopPropagation(),
                    (0, p.Jl)({ obscure: this.state.visible }),
                    this.props.shouldAgeVerify)
                )
                    return void u.Z.showAgeVerificationGetStartedModal({ entryPoint: d.cU.OBSCURED_MEDIA });
                let { onToggleObscurity: t } = this.props;
                null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
            }),
            b(this, "obscure", () => {
                let { visible: e } = this.state;
                e && this.setState({ visible: !1 });
            });
    }
}
let R = (e) => {
    let t = (0, p.m8)() && null != e.reason && m.eq.has(e.reason),
        n = (0, f.Jm)(),
        i = (0, _.z)("ObscuredConnected");
    return (0, r.jsx)(
        P,
        v(y({}, e), {
            shouldAgeVerify: t,
            isVerifiedTeen: n,
            forceOpaqueObscure: i,
        }),
    );
};
(R.Types = S), (R.Reasons = m.wk);
let w = R;
