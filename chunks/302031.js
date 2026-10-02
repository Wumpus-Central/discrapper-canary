n.d(t, { Ay: () => R, Bs: () => y });
var l,
    i = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(661531),
    u = n(87221),
    d = n(834730),
    c = n(939249),
    m = n(952270),
    x = n(39623),
    h = n(683063),
    j = n(379257),
    g = n(306537),
    p = n(36149),
    f = n(390248),
    A = n(338717),
    N = n(403362),
    I = n(375708),
    v = n(881013),
    b = (((l = b || {}).TEXT = "text"), (l.ATTACHMENT = "attachment"), (l.EMBED = "embed"), l);
function E(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", { className: r()(v.pR, t), children: I.intl.string(I.t["F+x38C"]) });
}
function S(e) {
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
                              color: "text-overlay-light",
                              className: v.Vs,
                              children: I.intl.string(I.t.SpxcUR),
                          }),
                  ],
              }),
    });
}
function C(e) {
    let { reason: t = A.Oc.SPOILER, className: n, isSingleMosaicItem: l = !1 } = e;
    switch (t) {
        case A.Oc.SPOILER:
            return (0, i.jsx)(E, { className: n });
        case A.Oc.EXPLICIT_CONTENT:
        case A.Oc.GORE_CONTENT:
        case A.Oc.SELF_HARM_CONTENT:
            return (0, i.jsx)(S, { isSingleMosaicItem: l, className: n });
        case A.Oc.POTENTIAL_EXPLICIT_CONTENT:
            return (0, i.jsx)(S, { isSingleMosaicItem: l, className: n, obscureOnly: !0 });
        default:
            return (0, N.xb)(t);
    }
}
function T(e) {
    let { obscureReason: t, isVisible: n, handleToggleObscurity: l, obscurityControlClassName: s } = e;
    return t !== A.Oc.EXPLICIT_CONTENT && t !== A.Oc.GORE_CONTENT && t !== A.Oc.SELF_HARM_CONTENT
        ? null
        : (0, i.jsx)("div", {
              className: r()(v.fA, s),
              children: (0, i.jsx)(c.D, {
                  className: v.kw,
                  onClick: l,
                  "aria-label": I.intl.string(I.t.ex5G9m),
                  children: n
                      ? (0, i.jsx)(x.EyeIcon, { size: "md", color: "currentColor" })
                      : (0, i.jsx)(m.EyeSlashIcon, { size: "md", color: "currentColor" }),
              }),
          });
}
let y = s.createContext(!1);
class O extends s.PureComponent {
    state = { visible: !1 };
    removeObscurity = (e) => {
        let { visible: t } = this.state;
        if (t) return;
        (e.preventDefault(), e.stopPropagation(), this.setState({ visible: !0 }));
        let { onReveal: n } = this.props;
        null != n && n();
    };
    handleToggleObscurity = (e) => {
        if (
            (e.stopPropagation(),
            e.nativeEvent.stopPropagation(),
            (0, f.Wi)({ obscure: this.state.visible }),
            this.props.shouldAgeVerify)
        )
            return void j.A.showAgeVerificationGetStartedModal({ entryPoint: g.q1.OBSCURED_MEDIA });
        let { onToggleObscurity: t } = this.props;
        (null != t && t(e), this.setState((e) => ({ visible: !e.visible })));
    };
    obscure = () => {
        let { visible: e } = this.state;
        e && this.setState({ visible: !1 });
    };
    renderWithTooltip(e) {
        return this.state.visible ? e : (0, i.jsx)(h.u, { position: "left", body: this.tooltipText, children: e });
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
                obscurityControlClassName: u,
                isVerifiedTeen: d,
            } = this.props,
            { visible: m } = this.state,
            x = (0, i.jsx)(y.Consumer, {
                children: (x) => {
                    let h = x || m || !s;
                    return A._K.has(a) && !t
                        ? (0, i.jsxs)("div", {
                              "aria-label": h ? void 0 : this.ariaLabel,
                              "aria-expanded": h,
                              style: l,
                              className: r()(n, v.ur, v.q2, v.Dq, v.OZ, { [v.R]: !h, [v.h5]: o }),
                              role: h ? "presentation" : "button",
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h ? null : (0, i.jsx)(C, { reason: a, isSingleMosaicItem: o }),
                                  (0, i.jsx)("div", { "aria-hidden": !h, className: v.Qu, children: e(!h) }),
                                  d
                                      ? null
                                      : (0, i.jsx)(T, {
                                            obscureReason: a,
                                            isVisible: m,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: u,
                                        }),
                              ],
                          })
                        : (0, i.jsxs)(c.D, {
                              onClick: h ? void 0 : this.removeObscurity,
                              "aria-label": h ? void 0 : this.ariaLabel,
                              "aria-expanded": h,
                              style: l,
                              className: r()(n, v.ur, v.q2, v.Dq, { [v.R]: !h, [v.rP]: !h }),
                              role: h ? "presentation" : "button",
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h || t ? null : (0, i.jsx)(C, { reason: a, isSingleMosaicItem: o }),
                                  (0, i.jsx)("div", { "aria-hidden": !h, className: v.Qu, children: e(!h) }),
                              ],
                          });
                },
            });
        return t ? this.renderWithTooltip(x) : x;
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
            { visible: u } = this.state;
        return (0, i.jsx)(y.Consumer, {
            children: (d) => {
                let m = d || u;
                return A._K.has(a)
                    ? (0, i.jsxs)("div", {
                          "aria-label": u ? void 0 : this.ariaLabel,
                          "aria-expanded": m,
                          style: n,
                          className: r()(t, v.ur, v.q2, v.x, v.OZ, { [v.R]: !m }),
                          role: m ? "presentation" : "button",
                          tabIndex: m ? -1 : 0,
                          children: [
                              m ? null : (0, i.jsx)(C, { reason: a, isSingleMosaicItem: l }),
                              (0, i.jsx)("div", { "aria-hidden": !m, className: v.Qu, children: e(!m) }),
                              o
                                  ? null
                                  : (0, i.jsx)(T, {
                                        obscureReason: a,
                                        isVisible: u,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: s,
                                    }),
                          ],
                      })
                    : (0, i.jsxs)(c.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": m,
                          className: r()(t, v.ur, v.q2, v.x, { [v.R]: !m }),
                          onClick: m ? void 0 : this.removeObscurity,
                          style: n,
                          role: m ? "presentation" : "button",
                          tabIndex: m ? -1 : 0,
                          children: [
                              m ? null : (0, i.jsx)(C, { reason: a, className: v.E6 }),
                              (0, i.jsx)("div", { "aria-hidden": !m, children: e(!m) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: l } = this.state,
            a = (0, i.jsx)(y.Consumer, {
                children: (a) => {
                    let o = a || l,
                        u = s.Children.toArray(e(o)),
                        d = s.Children.map(u, (e) => (s.isValidElement(e) && null != t ? t(e, o) : e));
                    return (0, i.jsx)(c.D, {
                        tag: "span",
                        onClick: o ? void 0 : this.removeObscurity,
                        "aria-label": o ? void 0 : this.ariaLabel,
                        "aria-expanded": o,
                        tabIndex: o ? -1 : 0,
                        role: o ? "presentation" : "button",
                        className: r()("obscured", n, v.ur, v.F0, { [v.R]: !o }),
                        children: (0, i.jsx)("span", {
                            className: v.kx,
                            children: (0, i.jsx)("span", { "aria-hidden": !o, className: v.AV, children: d }),
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
                return (0, N.xb)(e);
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
                return (0, N.xb)(e);
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
                return (0, N.xb)(e);
        }
    }
}
function _(e) {
    let t = (0, f._R)() && null != e.reason && A.tY.has(e.reason),
        n = (0, p.yM)();
    return (0, i.jsx)(O, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
}
((_.Types = b), (_.Reasons = A.Oc));
let R = _;
