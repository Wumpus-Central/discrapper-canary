"use strict";
n.d(t, { Ay: () => L, Bs: () => T });
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(661531),
    c = n(459192),
    u = n(87221),
    d = n(834730),
    h = n(939249),
    m = n(952270),
    p = n(39623),
    f = n(139716),
    g = n(847599),
    _ = n(787301),
    x = n(36149),
    C = n(390248),
    A = n(338717),
    E = n(403362),
    I = n(985018),
    v = n(766184),
    y = (((l = y || {}).TEXT = "text"), (l.ATTACHMENT = "attachment"), (l.EMBED = "embed"), l);
let b = (e) => {
        let { className: t } = e;
        return (0, i.jsx)("div", { className: r()(v.pR, t), children: I.intl.string(I.t["F+x38C"]) });
    },
    S = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: l } = e;
        return (0, i.jsx)("div", {
            className: r()(v.W5, t),
            children: l
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.D, { size: "lg", color: o.A.colors.WHITE }),
                          n &&
                              (0, i.jsx)(d.E, {
                                  variant: "text-sm/normal",
                                  color: "always-white",
                                  className: v.Vs,
                                  children: I.intl.string(I.t.SpxcUR),
                              }),
                      ],
                  }),
        });
    },
    N = (e) => {
        let { reason: t = A.Oc.SPOILER, className: n, isSingleMosaicItem: l = !1 } = e;
        switch (t) {
            case A.Oc.SPOILER:
                return (0, i.jsx)(b, { className: n });
            case A.Oc.EXPLICIT_CONTENT:
            case A.Oc.GORE_CONTENT:
            case A.Oc.SELF_HARM_CONTENT:
                return (0, i.jsx)(S, { isSingleMosaicItem: l, className: n });
            case A.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return (0, i.jsx)(S, { isSingleMosaicItem: l, className: n, obscureOnly: !0 });
            default:
                return (0, E.xb)(t);
        }
    },
    j = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: l, obscurityControlClassName: s } = e;
        return t !== A.Oc.EXPLICIT_CONTENT && t !== A.Oc.GORE_CONTENT && t !== A.Oc.SELF_HARM_CONTENT
            ? null
            : (0, i.jsx)("div", {
                  className: r()(v.fA, s),
                  children: (0, i.jsx)(h.D, {
                      className: v.kw,
                      onClick: l,
                      "aria-label": I.intl.string(I.t.ex5G9m),
                      children: n
                          ? (0, i.jsx)(p.b, { size: "md", color: "currentColor" })
                          : (0, i.jsx)(m.G, { size: "md", color: "currentColor" }),
                  }),
              });
    },
    T = s.createContext(!1);
class w extends s.PureComponent {
    state = { visible: !1 };
    removeObscurity = (e) => {
        let { visible: t } = this.state;
        if (t) return;
        e.preventDefault(), e.stopPropagation(), this.setState({ visible: !0 });
        let { onReveal: n } = this.props;
        null != n && n();
    };
    handleToggleObscurity = async (e) => {
        if (
            (e.stopPropagation(),
            e.nativeEvent.stopPropagation(),
            (0, C.Wi)({ obscure: this.state.visible }),
            this.props.shouldAgeVerify)
        ) {
            let e = await (0, x.tC)();
            if (!(null != e ? "passed" === e : _.A.getReactiveCheckPassed()))
                return void f.A.showAgeVerificationGetStartedModal({ entryPoint: g.q1.OBSCURED_MEDIA });
        }
        let { onToggleObscurity: t } = this.props;
        null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
    };
    obscure = () => {
        let { visible: e } = this.state;
        e && this.setState({ visible: !1 });
    };
    renderWithTooltip(e) {
        return this.state.visible ? e : (0, i.jsx)(c.u, { position: "left", body: this.tooltipText, children: e });
    }
    renderObscuredAttachment() {
        let {
                children: e,
                inline: t,
                className: n,
                containerStyles: l,
                obscured: s = !0,
                reason: a = A.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: c,
                isVerifiedTeen: u,
            } = this.props,
            { visible: d } = this.state,
            m = (0, i.jsx)(T.Consumer, {
                children: (m) => {
                    let p = m || d || !s;
                    return A._K.has(a) && !t
                        ? (0, i.jsxs)("div", {
                              "aria-label": p ? void 0 : this.ariaLabel,
                              "aria-expanded": p,
                              style: l,
                              className: r()(n, v.ur, v.q2, v.Dq, v.OZ, { [v.R]: !p, [v.h5]: o }),
                              role: p ? "presentation" : "button",
                              tabIndex: p ? -1 : 0,
                              children: [
                                  p ? null : (0, i.jsx)(N, { reason: a, isSingleMosaicItem: o }),
                                  (0, i.jsx)("div", { "aria-hidden": !p, className: v.Qu, children: e(!p) }),
                                  u
                                      ? null
                                      : (0, i.jsx)(j, {
                                            obscureReason: a,
                                            isVisible: d,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: c,
                                        }),
                              ],
                          })
                        : (0, i.jsxs)(h.D, {
                              onClick: p ? void 0 : this.removeObscurity,
                              "aria-label": p ? void 0 : this.ariaLabel,
                              "aria-expanded": p,
                              style: l,
                              className: r()(n, v.ur, v.q2, v.Dq, { [v.R]: !p, [v.rP]: !p }),
                              role: p ? "presentation" : "button",
                              tabIndex: p ? -1 : 0,
                              children: [
                                  p || t ? null : (0, i.jsx)(N, { reason: a, isSingleMosaicItem: o }),
                                  (0, i.jsx)("div", { "aria-hidden": !p, className: v.Qu, children: e(!p) }),
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
                isSingleMosaicItem: l,
                obscurityControlClassName: s,
                reason: a = A.Oc.SPOILER,
                isVerifiedTeen: o,
            } = this.props,
            { visible: c } = this.state;
        return (0, i.jsx)(T.Consumer, {
            children: (u) => {
                let d = u || c;
                return A._K.has(a)
                    ? (0, i.jsxs)("div", {
                          "aria-label": c ? void 0 : this.ariaLabel,
                          "aria-expanded": d,
                          style: n,
                          className: r()(t, v.ur, v.q2, v.x, v.OZ, { [v.R]: !d }),
                          role: d ? "presentation" : "button",
                          tabIndex: d ? -1 : 0,
                          children: [
                              d ? null : (0, i.jsx)(N, { reason: a, isSingleMosaicItem: l }),
                              (0, i.jsx)("div", { "aria-hidden": !d, className: v.Qu, children: e(!d) }),
                              o
                                  ? null
                                  : (0, i.jsx)(j, {
                                        obscureReason: a,
                                        isVisible: c,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: s,
                                    }),
                          ],
                      })
                    : (0, i.jsxs)(h.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": d,
                          className: r()(t, v.ur, v.q2, v.x, { [v.R]: !d }),
                          onClick: d ? void 0 : this.removeObscurity,
                          style: n,
                          role: d ? "presentation" : "button",
                          tabIndex: d ? -1 : 0,
                          children: [
                              d ? null : (0, i.jsx)(N, { reason: a, className: v.E6 }),
                              (0, i.jsx)("div", { "aria-hidden": !d, children: e(!d) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: l } = this.state,
            a = (0, i.jsx)(T.Consumer, {
                children: (a) => {
                    let o = a || l,
                        c = s.Children.toArray(e(o)),
                        u = s.Children.map(c, (e) => (s.isValidElement(e) && null != t ? t(e, o) : e));
                    return (0, i.jsx)(h.D, {
                        tag: "span",
                        onClick: o ? void 0 : this.removeObscurity,
                        "aria-label": o ? void 0 : this.ariaLabel,
                        "aria-expanded": o,
                        tabIndex: o ? -1 : 0,
                        role: o ? "presentation" : "button",
                        className: r()("obscured", n, v.ur, v.F0, { [v.R]: !o }),
                        children: (0, i.jsx)("span", {
                            className: v.kx,
                            children: (0, i.jsx)("span", { "aria-hidden": !o, className: v.AV, children: u }),
                        }),
                    });
                },
            });
        return this.renderWithTooltip(a);
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
                return (0, E.xb)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = A.Oc.SPOILER } = this.props;
        switch (e) {
            case A.Oc.SPOILER:
                return I.intl.string(I.t["F+x38C"]);
            case A.Oc.EXPLICIT_CONTENT:
            case A.Oc.GORE_CONTENT:
            case A.Oc.SELF_HARM_CONTENT:
                return I.intl.string(I.t.mlJ8Vf);
            case A.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return I.intl.string(I.t.MRdR7z);
            default:
                return (0, E.xb)(e);
        }
    }
    get tooltipText() {
        let { reason: e = A.Oc.SPOILER } = this.props;
        switch (e) {
            case A.Oc.SPOILER:
                return I.intl.string(I.t["F+x38C"]);
            case A.Oc.EXPLICIT_CONTENT:
            case A.Oc.GORE_CONTENT:
            case A.Oc.SELF_HARM_CONTENT:
                return I.intl.string(I.t.mlJ8Vf);
            case A.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return I.intl.string(I.t.MRdR7z);
            default:
                return (0, E.xb)(e);
        }
    }
}
let R = (e) => {
    let t = (0, C._R)() && null != e.reason && A.tY.has(e.reason),
        n = (0, x.yM)();
    return (0, i.jsx)(w, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
};
(R.Types = y), (R.Reasons = A.Oc);
let L = R;
