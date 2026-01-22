n.d(t, {
    Ay: () => w,
    Bs: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(435371),
    c = n(397927),
    u = n(935649),
    d = n(847599),
    f = n(36149),
    p = n(390248),
    _ = n(338717),
    h = n(403362),
    m = n(985018),
    g = n(388963);
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
var A = (function (e) {
    return (e.TEXT = "text"), (e.ATTACHMENT = "attachment"), (e.EMBED = "embed"), e;
})(A || {});
let v = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("div", {
            className: s()(g.pR, t),
            children: m.intl.string(m.t["F+x38C"]),
        });
    },
    S = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
        return (0, r.jsx)("div", {
            className: s()(g.W5, t),
            children: i
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.DAq, {
                              size: "lg",
                              color: o.A.colors.WHITE,
                          }),
                          n &&
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "always-white",
                                  className: g.Vs,
                                  children: m.intl.string(m.t.SpxcUR),
                              }),
                      ],
                  }),
        });
    },
    I = (e) => {
        let { reason: t = _.Oc.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
        switch (t) {
            case _.Oc.SPOILER:
                return (0, r.jsx)(v, { className: n });
            case _.Oc.EXPLICIT_CONTENT:
            case _.Oc.GORE_CONTENT:
            case _.Oc.SELF_HARM_CONTENT:
                return (0, r.jsx)(S, {
                    isSingleMosaicItem: i,
                    className: n,
                });
            case _.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return (0, r.jsx)(S, {
                    isSingleMosaicItem: i,
                    className: n,
                    obscureOnly: !0,
                });
            default:
                return (0, h.xb)(t);
        }
    },
    T = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: a } = e;
        return t !== _.Oc.EXPLICIT_CONTENT && t !== _.Oc.GORE_CONTENT && t !== _.Oc.SELF_HARM_CONTENT
            ? null
            : (0, r.jsx)("div", {
                  className: s()(g.fA, a),
                  children: (0, r.jsx)(c.DUT, {
                      className: g.kw,
                      onClick: i,
                      "aria-label": m.intl.string(m.t.ex5G9m),
                      children: n
                          ? (0, r.jsx)(c.bMW, {
                                size: "md",
                                color: "currentColor",
                            })
                          : (0, r.jsx)(c.G3N, {
                                size: "md",
                                color: "currentColor",
                            }),
                  }),
              });
    },
    C = i.createContext(!1);
class N extends i.PureComponent {
    renderWithTooltip(e) {
        return this.state.visible
            ? e
            : (0, r.jsx)(l.un, {
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
                obscured: a = !0,
                reason: o = _.Oc.SPOILER,
                isSingleMosaicItem: l = !1,
                obscurityControlClassName: u,
                isVerifiedTeen: d,
            } = this.props,
            { visible: f } = this.state,
            p = (0, r.jsx)(C.Consumer, {
                children: (p) => {
                    let h = p || f || !a;
                    return _._K.has(o) && !t
                        ? (0, r.jsxs)("div", {
                              "aria-label": h ? void 0 : this.ariaLabel,
                              "aria-expanded": h,
                              style: i,
                              className: s()(n, g.ur, g.q2, g.Dq, g.OZ, {
                                  [g.R]: !h,
                                  [g.h5]: l,
                              }),
                              role: h ? "presentation" : "button",
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h || t
                                      ? null
                                      : (0, r.jsx)(I, {
                                            reason: o,
                                            isSingleMosaicItem: l,
                                        }),
                                  (0, r.jsx)("div", {
                                      "aria-hidden": !h,
                                      className: g.Qu,
                                      children: e(!h),
                                  }),
                                  d
                                      ? null
                                      : (0, r.jsx)(T, {
                                            obscureReason: o,
                                            isVisible: f,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: u,
                                        }),
                              ],
                          })
                        : (0, r.jsxs)(c.DUT, {
                              onClick: h ? void 0 : this.removeObscurity,
                              "aria-label": h ? void 0 : this.ariaLabel,
                              "aria-expanded": h,
                              style: i,
                              className: s()(n, g.ur, g.q2, g.Dq, {
                                  [g.R]: !h,
                                  [g.rP]: !h,
                              }),
                              role: h ? "presentation" : "button",
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h || t
                                      ? null
                                      : (0, r.jsx)(I, {
                                            reason: o,
                                            isSingleMosaicItem: l,
                                        }),
                                  (0, r.jsx)("div", {
                                      "aria-hidden": !h,
                                      className: g.Qu,
                                      children: e(!h),
                                  }),
                              ],
                          });
                },
            });
        return t ? this.renderWithTooltip(p) : p;
    }
    renderObscuredEmbed() {
        let {
                children: e,
                className: t,
                containerStyles: n,
                isSingleMosaicItem: i,
                obscurityControlClassName: a,
                reason: o = _.Oc.SPOILER,
                isVerifiedTeen: l,
            } = this.props,
            { visible: u } = this.state;
        return (0, r.jsx)(C.Consumer, {
            children: (d) => {
                let f = d || u;
                return _._K.has(o)
                    ? (0, r.jsxs)("div", {
                          "aria-label": u ? void 0 : this.ariaLabel,
                          "aria-expanded": f,
                          style: n,
                          className: s()(t, g.ur, g.q2, g.x, g.OZ, { [g.R]: !f }),
                          role: f ? "presentation" : "button",
                          tabIndex: f ? -1 : 0,
                          children: [
                              f
                                  ? null
                                  : (0, r.jsx)(I, {
                                        reason: o,
                                        isSingleMosaicItem: i,
                                    }),
                              (0, r.jsx)("div", {
                                  "aria-hidden": !f,
                                  className: g.Qu,
                                  children: e(!f),
                              }),
                              l
                                  ? null
                                  : (0, r.jsx)(T, {
                                        obscureReason: o,
                                        isVisible: u,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: a,
                                    }),
                          ],
                      })
                    : (0, r.jsxs)(c.DUT, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": f,
                          className: s()(t, g.ur, g.q2, g.x, { [g.R]: !f }),
                          onClick: f ? void 0 : this.removeObscurity,
                          style: n,
                          role: f ? "presentation" : "button",
                          tabIndex: f ? -1 : 0,
                          children: [
                              f
                                  ? null
                                  : (0, r.jsx)(I, {
                                        reason: o,
                                        className: g.E6,
                                    }),
                              (0, r.jsx)("div", {
                                  "aria-hidden": !f,
                                  children: e(!f),
                              }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: a } = this.state,
            o = (0, r.jsx)(C.Consumer, {
                children: (o) => {
                    let l = o || a,
                        u = i.Children.toArray(e(l)),
                        d = i.Children.map(u, (e) => (i.isValidElement(e) && null != t ? t(e, l) : e));
                    return (0, r.jsx)(c.DUT, {
                        tag: "span",
                        onClick: l ? void 0 : this.removeObscurity,
                        "aria-label": l ? void 0 : this.ariaLabel,
                        "aria-expanded": l,
                        tabIndex: l ? -1 : 0,
                        role: l ? "presentation" : "button",
                        className: s()("obscured", n, g.ur, g.F0, { [g.R]: !l }),
                        children: (0, r.jsx)("span", {
                            className: g.kx,
                            children: (0, r.jsx)("span", {
                                "aria-hidden": !l,
                                className: g.AV,
                                children: d,
                            }),
                        }),
                    });
                },
            });
        return this.renderWithTooltip(o);
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
                return (0, h.xb)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = _.Oc.SPOILER } = this.props;
        switch (e) {
            case _.Oc.SPOILER:
                return m.intl.string(m.t["F+x38C"]);
            case _.Oc.EXPLICIT_CONTENT:
            case _.Oc.GORE_CONTENT:
            case _.Oc.SELF_HARM_CONTENT:
                return m.intl.string(m.t.mlJ8Vf);
            case _.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return m.intl.string(m.t.MRdR7z);
            default:
                return (0, h.xb)(e);
        }
    }
    get tooltipText() {
        let { reason: e = _.Oc.SPOILER } = this.props;
        switch (e) {
            case _.Oc.SPOILER:
                return m.intl.string(m.t["F+x38C"]);
            case _.Oc.EXPLICIT_CONTENT:
            case _.Oc.GORE_CONTENT:
            case _.Oc.SELF_HARM_CONTENT:
                return m.intl.string(m.t.mlJ8Vf);
            case _.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return m.intl.string(m.t.MRdR7z);
            default:
                return (0, h.xb)(e);
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
                    (0, p.Wi)({ obscure: this.state.visible }),
                    this.props.shouldAgeVerify)
                )
                    return void u.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.OBSCURED_MEDIA });
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
    let t = (0, p._R)() && null != e.reason && _.tY.has(e.reason),
        n = (0, f.yM)();
    return (0, r.jsx)(
        N,
        O(b({}, e), {
            shouldAgeVerify: t,
            isVerifiedTeen: n,
        }),
    );
};
(R.Types = A), (R.Reasons = _.Oc);
let w = R;
