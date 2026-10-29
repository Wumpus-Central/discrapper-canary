n.d(t, { Ay: () => _, Bs: () => T });
var i,
    s = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(661531),
    c = n(87221),
    d = n(834730),
    u = n(408278),
    m = n(39623),
    x = n(952270),
    h = n(683063),
    j = n(939249),
    g = n(379257),
    p = n(306537),
    N = n(36149),
    I = n(390248),
    b = n(338717),
    f = n(403362),
    v = n(105292),
    A = n(881013),
    E = (((i = E || {}).TEXT = "text"), (i.ATTACHMENT = "attachment"), (i.EMBED = "embed"), i);
function C(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: r()(A.pR, t), children: v.intl.string(v.t["F+x38C"]) });
}
function S(e) {
    let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
    return (0, s.jsx)("div", {
        className: r()(A.W5, t),
        children: i
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(c.D, { size: "lg", color: o.A.colors.WHITE }),
                      n &&
                          (0, s.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-overlay-light",
                              className: A.Vs,
                              children: v.intl.string(v.t.SpxcUR),
                          }),
                  ],
              }),
    });
}
function O(e) {
    let { reason: t = b.Oc.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
    switch (t) {
        case b.Oc.SPOILER:
            return (0, s.jsx)(C, { className: n });
        case b.Oc.EXPLICIT_CONTENT:
        case b.Oc.GORE_CONTENT:
        case b.Oc.SELF_HARM_CONTENT:
            return (0, s.jsx)(S, { isSingleMosaicItem: i, className: n });
        case b.Oc.POTENTIAL_EXPLICIT_CONTENT:
            return (0, s.jsx)(S, { isSingleMosaicItem: i, className: n, obscureOnly: !0 });
        default:
            return (0, f.xb)(t);
    }
}
function y(e) {
    let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: l } = e;
    return t !== b.Oc.EXPLICIT_CONTENT && t !== b.Oc.GORE_CONTENT && t !== b.Oc.SELF_HARM_CONTENT
        ? null
        : (0, s.jsx)("div", {
              className: r()(A.fA, l),
              children: (0, s.jsx)(u.K, {
                  icon: n ? m.EyeIcon : x.EyeSlashIcon,
                  variant: "overlay-secondary",
                  size: "sm",
                  onClick: i,
                  "aria-label": v.intl.string(v.t.ex5G9m),
              }),
          });
}
let T = l.createContext(!1);
class k extends l.PureComponent {
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
            (0, I.Wi)({ obscure: this.state.visible }),
            this.props.shouldAgeVerify)
        )
            return void g.A.showAgeVerificationGetStartedModal({ entryPoint: p.q1.OBSCURED_MEDIA });
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
                containerStyles: i,
                obscured: l = !0,
                reason: a = b.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: c,
                isVerifiedTeen: d,
            } = this.props,
            { visible: u } = this.state,
            m = (0, s.jsx)(T.Consumer, {
                children: (m) => {
                    let x = m || u || !l;
                    return b._K.has(a) && !t
                        ? (0, s.jsxs)("div", {
                              "aria-label": x ? void 0 : this.ariaLabel,
                              "aria-expanded": x,
                              style: i,
                              className: r()(n, A.ur, A.q2, A.Dq, A.OZ, { [A.R]: !x, [A.h5]: o }),
                              role: x ? "presentation" : "button",
                              tabIndex: x ? -1 : 0,
                              children: [
                                  x ? null : (0, s.jsx)(O, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !x, className: A.Qu, children: e(!x) }),
                                  d
                                      ? null
                                      : (0, s.jsx)(y, {
                                            obscureReason: a,
                                            isVisible: u,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: c,
                                        }),
                              ],
                          })
                        : (0, s.jsxs)(j.D, {
                              onClick: x ? void 0 : this.removeObscurity,
                              "aria-label": x ? void 0 : this.ariaLabel,
                              "aria-expanded": x,
                              style: i,
                              className: r()(n, A.ur, A.q2, A.Dq, { [A.R]: !x, [A.rP]: !x }),
                              role: x ? "presentation" : "button",
                              tabIndex: x ? -1 : 0,
                              children: [
                                  x || t ? null : (0, s.jsx)(O, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !x, className: A.Qu, children: e(!x) }),
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
                obscurityControlClassName: l,
                reason: a = b.Oc.SPOILER,
                isVerifiedTeen: o,
            } = this.props,
            { visible: c } = this.state;
        return (0, s.jsx)(T.Consumer, {
            children: (d) => {
                let u = d || c;
                return b._K.has(a)
                    ? (0, s.jsxs)("div", {
                          "aria-label": c ? void 0 : this.ariaLabel,
                          "aria-expanded": u,
                          style: n,
                          className: r()(t, A.ur, A.q2, A.x, A.OZ, { [A.R]: !u }),
                          role: u ? "presentation" : "button",
                          tabIndex: u ? -1 : 0,
                          children: [
                              u ? null : (0, s.jsx)(O, { reason: a, isSingleMosaicItem: i }),
                              (0, s.jsx)("div", { "aria-hidden": !u, className: A.Qu, children: e(!u) }),
                              o
                                  ? null
                                  : (0, s.jsx)(y, {
                                        obscureReason: a,
                                        isVisible: c,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: l,
                                    }),
                          ],
                      })
                    : (0, s.jsxs)(j.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": u,
                          className: r()(t, A.ur, A.q2, A.x, { [A.R]: !u }),
                          onClick: u ? void 0 : this.removeObscurity,
                          style: n,
                          role: u ? "presentation" : "button",
                          tabIndex: u ? -1 : 0,
                          children: [
                              u ? null : (0, s.jsx)(O, { reason: a, className: A.E6 }),
                              (0, s.jsx)("div", { "aria-hidden": !u, children: e(!u) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let {
                children: e,
                renderTextElement: t,
                className: n,
                obscured: i = !0,
                hovered: a = !1,
                onMouseEnter: o,
                onMouseLeave: c,
            } = this.props,
            { visible: d } = this.state,
            u = (0, s.jsx)(T.Consumer, {
                children: (u) => {
                    let m = u || d || !i,
                        x = l.Children.toArray(e(m)),
                        h = l.Children.map(x, (e) => (l.isValidElement(e) && null != t ? t(e, m) : e));
                    return (0, s.jsx)(j.D, {
                        tag: "span",
                        onClick: m ? void 0 : this.removeObscurity,
                        onMouseEnter: o,
                        onMouseLeave: c,
                        "aria-label": m ? void 0 : this.ariaLabel,
                        "aria-expanded": m,
                        tabIndex: m ? -1 : 0,
                        role: m ? "presentation" : "button",
                        className: r()("obscured", n, A.ur, A.F0, { [A.R]: !m, [A.yo]: a }),
                        children: (0, s.jsx)("span", {
                            className: A.kx,
                            children: (0, s.jsx)("span", { "aria-hidden": !m, className: A.AV, children: h }),
                        }),
                    });
                },
            });
        return this.renderWithTooltip(u);
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
                return (0, f.xb)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = b.Oc.SPOILER } = this.props;
        switch (e) {
            case b.Oc.SPOILER:
                return v.intl.string(v.t["F+x38C"]);
            case b.Oc.EXPLICIT_CONTENT:
            case b.Oc.GORE_CONTENT:
            case b.Oc.SELF_HARM_CONTENT:
                return v.intl.string(v.t.mlJ8Vf);
            case b.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return v.intl.string(v.t.MRdR7z);
            default:
                return (0, f.xb)(e);
        }
    }
    get tooltipText() {
        let { reason: e = b.Oc.SPOILER } = this.props;
        switch (e) {
            case b.Oc.SPOILER:
                return v.intl.string(v.t["F+x38C"]);
            case b.Oc.EXPLICIT_CONTENT:
            case b.Oc.GORE_CONTENT:
            case b.Oc.SELF_HARM_CONTENT:
                return v.intl.string(v.t.mlJ8Vf);
            case b.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return v.intl.string(v.t.MRdR7z);
            default:
                return (0, f.xb)(e);
        }
    }
}
function P(e) {
    let t = (0, I._R)() && null != e.reason && b.tY.has(e.reason),
        n = (0, N.yM)();
    return (0, s.jsx)(k, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
}
((P.Types = E), (P.Reasons = b.Oc));
let _ = P;
