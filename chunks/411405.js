n.d(t, {
    ZP: () => P,
    aQ: () => C,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    c = n(168107),
    u = n(480916),
    d = n(81643),
    f = n(247206),
    _ = n(557069),
    p = n(936141),
    h = n(823379),
    m = n(388032),
    g = n(3954);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var v = (function (e) {
    return (e.TEXT = "text"), (e.ATTACHMENT = "attachment"), (e.EMBED = "embed"), e;
})(v || {});
let I = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("div", {
            className: o()(g.spoilerWarning, t),
            children: m.intl.string(m.t["F+x38C"]),
        });
    },
    S = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
        return (0, r.jsx)("div", {
            className: o()(g.explicitContentWarning, t),
            children: i
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.fFY, {
                              size: "lg",
                              color: s.Z.colors.WHITE,
                          }),
                          n &&
                              (0, r.jsx)(l.Text, {
                                  variant: "text-sm/normal",
                                  color: "always-white",
                                  className: g.explicitContentWarningText,
                                  children: m.intl.string(m.t.SpxcUR),
                              }),
                      ],
                  }),
        });
    },
    T = (e) => {
        let { reason: t = p.wk.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
        switch (t) {
            case p.wk.SPOILER:
                return (0, r.jsx)(I, { className: n });
            case p.wk.EXPLICIT_CONTENT:
            case p.wk.GORE_CONTENT:
            case p.wk.SELF_HARM_CONTENT:
                return (0, r.jsx)(S, {
                    isSingleMosaicItem: i,
                    className: n,
                });
            case p.wk.POTENTIAL_EXPLICIT_CONTENT:
                return (0, r.jsx)(S, {
                    isSingleMosaicItem: i,
                    className: n,
                    obscureOnly: !0,
                });
            default:
                return (0, h.vE)(t);
        }
    },
    A = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: a } = e;
        return t !== p.wk.EXPLICIT_CONTENT && t !== p.wk.GORE_CONTENT && t !== p.wk.SELF_HARM_CONTENT
            ? null
            : (0, r.jsx)("div", {
                  className: o()(g.obscureButtonContainer, a),
                  children: (0, r.jsx)(l.P3F, {
                      className: g.obscureHoverButton,
                      onClick: i,
                      "aria-label": m.intl.string(m.t.ex5G9m),
                      children: n
                          ? (0, r.jsx)(l.tEF, {
                                size: "md",
                                color: "currentColor",
                            })
                          : (0, r.jsx)(l.kZF, {
                                size: "md",
                                color: "currentColor",
                            }),
                  }),
              });
    },
    C = i.createContext(!1);
class N extends i.PureComponent {
    renderWithTooltip(e) {
        return (0, r.jsx)(l.aML, {
            position: "left",
            text: this.state.visible ? null : this.tooltipText,
            children: (t) => {
                let { onMouseEnter: n, onMouseLeave: r } = t;
                return i.cloneElement(i.Children.only(e), {
                    onMouseEnter: n,
                    onMouseLeave: r,
                });
            },
        });
    }
    renderObscuredAttachment() {
        let {
                children: e,
                inline: t,
                className: n,
                containerStyles: i,
                obscured: a = !0,
                reason: s = p.wk.SPOILER,
                isSingleMosaicItem: c = !1,
                obscurityControlClassName: u,
                shouldAgeVerify: d,
                isVerifiedTeen: f,
                forceOpaqueObscure: _,
            } = this.props,
            { visible: h } = this.state,
            m = (0, r.jsx)(C.Consumer, {
                children: (m) => {
                    let E = m || h || !a;
                    return p.Xh.has(s) && !t
                        ? (0, r.jsxs)("div", {
                              "aria-label": E ? void 0 : this.ariaLabel,
                              "aria-expanded": E,
                              style: i,
                              className: o()(n, g.spoilerContent, g.spoilerContainer, g.attachmentContainer, {
                                  [g.hidden]: !E,
                                  [g.constrainedObscureContent]: c,
                                  [g.opaque]: d || f || _,
                              }),
                              role: E ? "presentation" : "button",
                              tabIndex: E ? -1 : 0,
                              children: [
                                  E || t
                                      ? null
                                      : (0, r.jsx)(T, {
                                            reason: s,
                                            isSingleMosaicItem: c,
                                        }),
                                  (0, r.jsx)("div", {
                                      "aria-hidden": !E,
                                      className: g.spoilerInnerContainer,
                                      children: e(!E),
                                  }),
                                  f
                                      ? null
                                      : (0, r.jsx)(A, {
                                            obscureReason: s,
                                            isVisible: h,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: u,
                                        }),
                              ],
                          })
                        : (0, r.jsxs)(l.P3F, {
                              onClick: E ? void 0 : this.removeObscurity,
                              "aria-label": E ? void 0 : this.ariaLabel,
                              "aria-expanded": E,
                              style: i,
                              className: o()(n, g.spoilerContent, g.spoilerContainer, g.attachmentContainer, {
                                  [g.hidden]: !E,
                                  [g.hiddenSpoiler]: !E,
                              }),
                              role: E ? "presentation" : "button",
                              tabIndex: E ? -1 : 0,
                              children: [
                                  E || t
                                      ? null
                                      : (0, r.jsx)(T, {
                                            reason: s,
                                            isSingleMosaicItem: c,
                                        }),
                                  (0, r.jsx)("div", {
                                      "aria-hidden": !E,
                                      className: g.spoilerInnerContainer,
                                      children: e(!E),
                                  }),
                              ],
                          });
                },
            });
        return t ? this.renderWithTooltip(m) : m;
    }
    renderObscuredEmbed() {
        let {
                children: e,
                className: t,
                containerStyles: n,
                isSingleMosaicItem: i,
                obscurityControlClassName: a,
                reason: s = p.wk.SPOILER,
                shouldAgeVerify: c,
                isVerifiedTeen: u,
                forceOpaqueObscure: d,
            } = this.props,
            { visible: f } = this.state;
        return (0, r.jsx)(C.Consumer, {
            children: (_) => {
                let h = _ || f;
                return p.Xh.has(s)
                    ? (0, r.jsxs)("div", {
                          "aria-label": f ? void 0 : this.ariaLabel,
                          "aria-expanded": h,
                          style: n,
                          className: o()(t, g.spoilerContent, g.spoilerContainer, g.embedContainer, {
                              [g.hidden]: !h,
                              [g.opaque]: c || u || d,
                          }),
                          role: h ? "presentation" : "button",
                          tabIndex: h ? -1 : 0,
                          children: [
                              h
                                  ? null
                                  : (0, r.jsx)(T, {
                                        reason: s,
                                        isSingleMosaicItem: i,
                                    }),
                              (0, r.jsx)("div", {
                                  "aria-hidden": !h,
                                  className: g.spoilerInnerContainer,
                                  children: e(!h),
                              }),
                              u
                                  ? null
                                  : (0, r.jsx)(A, {
                                        obscureReason: s,
                                        isVisible: f,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: a,
                                    }),
                          ],
                      })
                    : (0, r.jsxs)(l.P3F, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": h,
                          className: o()(t, g.spoilerContent, g.spoilerContainer, g.embedContainer, { [g.hidden]: !h }),
                          onClick: h ? void 0 : this.removeObscurity,
                          style: n,
                          role: h ? "presentation" : "button",
                          tabIndex: h ? -1 : 0,
                          children: [
                              h
                                  ? null
                                  : (0, r.jsx)(T, {
                                        reason: s,
                                        className: g.embed,
                                    }),
                              (0, r.jsx)("div", {
                                  "aria-hidden": !h,
                                  children: e(!h),
                              }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: a } = this.state,
            s = (0, r.jsx)(C.Consumer, {
                children: (s) => {
                    let c = s || a,
                        u = i.Children.toArray(e(c)),
                        d = i.Children.map(u, (e) => (i.isValidElement(e) && null != t ? t(e, c) : e));
                    return (0, r.jsx)(l.P3F, {
                        tag: "span",
                        onClick: c ? void 0 : this.removeObscurity,
                        "aria-label": c ? void 0 : this.ariaLabel,
                        "aria-expanded": c,
                        tabIndex: c ? -1 : 0,
                        role: c ? "presentation" : "button",
                        className: o()("obscured", n, g.spoilerContent, g.spoilerMarkdownContent, { [g.hidden]: !c }),
                        children: (0, r.jsx)("span", {
                            className: g.obscuredTextContent,
                            children: (0, r.jsx)("span", {
                                "aria-hidden": !c,
                                className: g.obscuredTextContentInner,
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
        let { reason: e = p.wk.SPOILER } = this.props;
        switch (e) {
            case p.wk.SPOILER:
                return m.intl.string(m.t["F+x38C"]);
            case p.wk.EXPLICIT_CONTENT:
            case p.wk.GORE_CONTENT:
            case p.wk.SELF_HARM_CONTENT:
                return m.intl.string(m.t.mlJ8Vf);
            case p.wk.POTENTIAL_EXPLICIT_CONTENT:
                return m.intl.string(m.t.MRdR7z);
            default:
                return (0, h.vE)(e);
        }
    }
    get tooltipText() {
        let { reason: e = p.wk.SPOILER } = this.props;
        switch (e) {
            case p.wk.SPOILER:
                return m.intl.string(m.t["F+x38C"]);
            case p.wk.EXPLICIT_CONTENT:
            case p.wk.GORE_CONTENT:
            case p.wk.SELF_HARM_CONTENT:
                return m.intl.string(m.t.mlJ8Vf);
            case p.wk.POTENTIAL_EXPLICIT_CONTENT:
                return m.intl.string(m.t.MRdR7z);
            default:
                return (0, h.vE)(e);
        }
    }
    constructor(...e) {
        super(...e),
            E(this, "state", { visible: !1 }),
            E(this, "removeObscurity", (e) => {
                let { visible: t } = this.state;
                if (t) return;
                t || (e.preventDefault(), e.stopPropagation()), this.setState({ visible: !0 });
                let { onReveal: n } = this.props;
                null != n && n();
            }),
            E(this, "handleToggleObscurity", (e) => {
                if (
                    (e.stopPropagation(),
                    e.nativeEvent.stopPropagation(),
                    (0, f.Jl)({ obscure: this.state.visible }),
                    this.props.shouldAgeVerify)
                )
                    return void c.Z.showAgeVerificationGetStartedModal({ entryPoint: u.cU.OBSCURED_MEDIA });
                let { onToggleObscurity: t } = this.props;
                null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
            }),
            E(this, "obscure", () => {
                let { visible: e } = this.state;
                e && this.setState({ visible: !1 });
            });
    }
}
let R = (e) => {
    let t = (0, f.m8)() && null != e.reason && p.eq.has(e.reason),
        n = (0, d.Jm)(),
        i = (0, _.z)("ObscuredConnected");
    return (0, r.jsx)(
        N,
        O(b({}, e), {
            shouldAgeVerify: t,
            isVerifiedTeen: n,
            forceOpaqueObscure: i,
        }),
    );
};
(R.Types = v), (R.Reasons = p.wk);
let P = R;
