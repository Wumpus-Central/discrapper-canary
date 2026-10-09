n.d(t, { Ay: () => G, Bs: () => y });
var l,
    s = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(661531),
    u = n(87221),
    c = n(834730),
    d = n(939249),
    m = n(952270),
    x = n(39623),
    h = n(683063),
    j = n(379257),
    p = n(306537),
    g = n(36149),
    f = n(390248),
    N = n(338717),
    I = n(403362),
    A = n(660183),
    v = n(881013),
    b = (((l = b || {}).TEXT = "text"), (l.ATTACHMENT = "attachment"), (l.EMBED = "embed"), l);
function S(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: r()(v.pR, t), children: A.intl.string(A.t["F+x38C"]) });
}
function E(e) {
    let { className: t, isSingleMosaicItem: n, obscureOnly: l } = e;
    return (0, s.jsx)("div", {
        className: r()(v.W5, t),
        children: l
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(u.D, { size: "lg", color: o.A.colors.WHITE }),
                      n &&
                          (0, s.jsx)(c.E, {
                              variant: "text-sm/normal",
                              color: "text-overlay-light",
                              className: v.Vs,
                              children: A.intl.string(A.t.SpxcUR),
                          }),
                  ],
              }),
    });
}
function C(e) {
    let { reason: t = N.Oc.SPOILER, className: n, isSingleMosaicItem: l = !1 } = e;
    switch (t) {
        case N.Oc.SPOILER:
            return (0, s.jsx)(S, { className: n });
        case N.Oc.EXPLICIT_CONTENT:
        case N.Oc.GORE_CONTENT:
        case N.Oc.SELF_HARM_CONTENT:
            return (0, s.jsx)(E, { isSingleMosaicItem: l, className: n });
        case N.Oc.POTENTIAL_EXPLICIT_CONTENT:
            return (0, s.jsx)(E, { isSingleMosaicItem: l, className: n, obscureOnly: !0 });
        default:
            return (0, I.xb)(t);
    }
}
function T(e) {
    let { obscureReason: t, isVisible: n, handleToggleObscurity: l, obscurityControlClassName: i } = e;
    return t !== N.Oc.EXPLICIT_CONTENT && t !== N.Oc.GORE_CONTENT && t !== N.Oc.SELF_HARM_CONTENT
        ? null
        : (0, s.jsx)("div", {
              className: r()(v.fA, i),
              children: (0, s.jsx)(d.D, {
                  className: v.kw,
                  onClick: l,
                  "aria-label": A.intl.string(A.t.ex5G9m),
                  children: n
                      ? (0, s.jsx)(x.EyeIcon, { size: "md", color: "currentColor" })
                      : (0, s.jsx)(m.EyeSlashIcon, { size: "md", color: "currentColor" }),
              }),
          });
}
let y = i.createContext(!1);
class O extends i.PureComponent {
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
            return void j.A.showAgeVerificationGetStartedModal({ entryPoint: p.q1.OBSCURED_MEDIA });
        let { onToggleObscurity: t } = this.props;
        (null != t && t(e), this.setState((e) => ({ visible: !e.visible })));
    };
    obscure = () => {
        let { visible: e } = this.state;
        e && this.setState({ visible: !1 });
    };
    renderWithTooltip(e) {
        return this.state.visible ? e : (0, s.jsx)(h.u, { position: "left", body: this.tooltipText, children: e });
    }
    renderObscuredAttachment() {
        let {
                children: e,
                inline: t,
                className: n,
                containerStyles: l,
                obscured: i = !0,
                reason: a = N.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: u,
                isVerifiedTeen: c,
            } = this.props,
            { visible: m } = this.state,
            x = (0, s.jsx)(y.Consumer, {
                children: (x) => {
                    let h = x || m || !i;
                    return N._K.has(a) && !t
                        ? (0, s.jsxs)("div", {
                              "aria-label": h ? void 0 : this.ariaLabel,
                              "aria-expanded": h,
                              style: l,
                              className: r()(n, v.ur, v.q2, v.Dq, v.OZ, { [v.R]: !h, [v.h5]: o }),
                              role: h ? "presentation" : "button",
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h ? null : (0, s.jsx)(C, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !h, className: v.Qu, children: e(!h) }),
                                  c
                                      ? null
                                      : (0, s.jsx)(T, {
                                            obscureReason: a,
                                            isVisible: m,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: u,
                                        }),
                              ],
                          })
                        : (0, s.jsxs)(d.D, {
                              onClick: h ? void 0 : this.removeObscurity,
                              "aria-label": h ? void 0 : this.ariaLabel,
                              "aria-expanded": h,
                              style: l,
                              className: r()(n, v.ur, v.q2, v.Dq, { [v.R]: !h, [v.rP]: !h }),
                              role: h ? "presentation" : "button",
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h || t ? null : (0, s.jsx)(C, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !h, className: v.Qu, children: e(!h) }),
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
                obscurityControlClassName: i,
                reason: a = N.Oc.SPOILER,
                isVerifiedTeen: o,
            } = this.props,
            { visible: u } = this.state;
        return (0, s.jsx)(y.Consumer, {
            children: (c) => {
                let m = c || u;
                return N._K.has(a)
                    ? (0, s.jsxs)("div", {
                          "aria-label": u ? void 0 : this.ariaLabel,
                          "aria-expanded": m,
                          style: n,
                          className: r()(t, v.ur, v.q2, v.x, v.OZ, { [v.R]: !m }),
                          role: m ? "presentation" : "button",
                          tabIndex: m ? -1 : 0,
                          children: [
                              m ? null : (0, s.jsx)(C, { reason: a, isSingleMosaicItem: l }),
                              (0, s.jsx)("div", { "aria-hidden": !m, className: v.Qu, children: e(!m) }),
                              o
                                  ? null
                                  : (0, s.jsx)(T, {
                                        obscureReason: a,
                                        isVisible: u,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: i,
                                    }),
                          ],
                      })
                    : (0, s.jsxs)(d.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": m,
                          className: r()(t, v.ur, v.q2, v.x, { [v.R]: !m }),
                          onClick: m ? void 0 : this.removeObscurity,
                          style: n,
                          role: m ? "presentation" : "button",
                          tabIndex: m ? -1 : 0,
                          children: [
                              m ? null : (0, s.jsx)(C, { reason: a, className: v.E6 }),
                              (0, s.jsx)("div", { "aria-hidden": !m, children: e(!m) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: l } = this.state,
            a = (0, s.jsx)(y.Consumer, {
                children: (a) => {
                    let o = a || l,
                        u = i.Children.toArray(e(o)),
                        c = i.Children.map(u, (e) => (i.isValidElement(e) && null != t ? t(e, o) : e));
                    return (0, s.jsx)(d.D, {
                        tag: "span",
                        onClick: o ? void 0 : this.removeObscurity,
                        "aria-label": o ? void 0 : this.ariaLabel,
                        "aria-expanded": o,
                        tabIndex: o ? -1 : 0,
                        role: o ? "presentation" : "button",
                        className: r()("obscured", n, v.ur, v.F0, { [v.R]: !o }),
                        children: (0, s.jsx)("span", {
                            className: v.kx,
                            children: (0, s.jsx)("span", { "aria-hidden": !o, className: v.AV, children: c }),
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
                return (0, I.xb)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = N.Oc.SPOILER } = this.props;
        switch (e) {
            case N.Oc.SPOILER:
                return A.intl.string(A.t["F+x38C"]);
            case N.Oc.EXPLICIT_CONTENT:
            case N.Oc.GORE_CONTENT:
            case N.Oc.SELF_HARM_CONTENT:
                return A.intl.string(A.t.mlJ8Vf);
            case N.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return A.intl.string(A.t.MRdR7z);
            default:
                return (0, I.xb)(e);
        }
    }
    get tooltipText() {
        let { reason: e = N.Oc.SPOILER } = this.props;
        switch (e) {
            case N.Oc.SPOILER:
                return A.intl.string(A.t["F+x38C"]);
            case N.Oc.EXPLICIT_CONTENT:
            case N.Oc.GORE_CONTENT:
            case N.Oc.SELF_HARM_CONTENT:
                return A.intl.string(A.t.mlJ8Vf);
            case N.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return A.intl.string(A.t.MRdR7z);
            default:
                return (0, I.xb)(e);
        }
    }
}
function k(e) {
    let t = (0, f._R)() && null != e.reason && N.tY.has(e.reason),
        n = (0, g.yM)();
    return (0, s.jsx)(O, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
}
((k.Types = b), (k.Reasons = N.Oc));
let G = k;
