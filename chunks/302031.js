n.d(t, { Ay: () => L, Bs: () => T });
var i,
    s = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(661531),
    d = n(87221),
    u = n(834730),
    c = n(408278),
    m = n(39623),
    x = n(952270),
    h = n(683063),
    j = n(939249),
    g = n(379257),
    p = n(306537),
    N = n(36149),
    f = n(390248),
    b = n(338717),
    I = n(403362),
    v = n(105292),
    E = n(881013),
    A = (((i = A || {}).TEXT = "text"), (i.ATTACHMENT = "attachment"), (i.EMBED = "embed"), i);
function C(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: r()(E.pR, t), children: v.intl.string(v.t["F+x38C"]) });
}
function S(e) {
    let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
    return (0, s.jsx)("div", {
        className: r()(E.W5, t),
        children: i
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(d.D, { size: "lg", color: o.A.colors.WHITE }),
                      n &&
                          (0, s.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-overlay-light",
                              className: E.Vs,
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
            return (0, I.xb)(t);
    }
}
function y(e) {
    let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: l } = e;
    return t !== b.Oc.EXPLICIT_CONTENT && t !== b.Oc.GORE_CONTENT && t !== b.Oc.SELF_HARM_CONTENT
        ? null
        : (0, s.jsx)("div", {
              className: r()(E.fA, l),
              children: (0, s.jsx)(c.K, {
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
            (0, f.Wi)({ obscure: this.state.visible }),
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
                obscurityControlClassName: d,
                isVerifiedTeen: u,
            } = this.props,
            { visible: c } = this.state,
            m = (0, s.jsx)(T.Consumer, {
                children: (m) => {
                    let x = m || c || !l;
                    return b._K.has(a) && !t
                        ? (0, s.jsxs)("div", {
                              "aria-label": x ? void 0 : this.ariaLabel,
                              "aria-expanded": x,
                              style: i,
                              className: r()(n, E.ur, E.q2, E.Dq, E.OZ, { [E.R]: !x, [E.h5]: o }),
                              role: x ? "presentation" : "button",
                              tabIndex: x ? -1 : 0,
                              children: [
                                  x ? null : (0, s.jsx)(O, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !x, className: E.Qu, children: e(!x) }),
                                  u
                                      ? null
                                      : (0, s.jsx)(y, {
                                            obscureReason: a,
                                            isVisible: c,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: d,
                                        }),
                              ],
                          })
                        : (0, s.jsxs)(j.D, {
                              onClick: x ? void 0 : this.removeObscurity,
                              "aria-label": x ? void 0 : this.ariaLabel,
                              "aria-expanded": x,
                              style: i,
                              className: r()(n, E.ur, E.q2, E.Dq, { [E.R]: !x, [E.rP]: !x }),
                              role: x ? "presentation" : "button",
                              tabIndex: x ? -1 : 0,
                              children: [
                                  x || t ? null : (0, s.jsx)(O, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !x, className: E.Qu, children: e(!x) }),
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
            { visible: d } = this.state;
        return (0, s.jsx)(T.Consumer, {
            children: (u) => {
                let c = u || d;
                return b._K.has(a)
                    ? (0, s.jsxs)("div", {
                          "aria-label": d ? void 0 : this.ariaLabel,
                          "aria-expanded": c,
                          style: n,
                          className: r()(t, E.ur, E.q2, E.x, E.OZ, { [E.R]: !c }),
                          role: c ? "presentation" : "button",
                          tabIndex: c ? -1 : 0,
                          children: [
                              c ? null : (0, s.jsx)(O, { reason: a, isSingleMosaicItem: i }),
                              (0, s.jsx)("div", { "aria-hidden": !c, className: E.Qu, children: e(!c) }),
                              o
                                  ? null
                                  : (0, s.jsx)(y, {
                                        obscureReason: a,
                                        isVisible: d,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: l,
                                    }),
                          ],
                      })
                    : (0, s.jsxs)(j.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": c,
                          className: r()(t, E.ur, E.q2, E.x, { [E.R]: !c }),
                          onClick: c ? void 0 : this.removeObscurity,
                          style: n,
                          role: c ? "presentation" : "button",
                          tabIndex: c ? -1 : 0,
                          children: [
                              c ? null : (0, s.jsx)(O, { reason: a, className: E.E6 }),
                              (0, s.jsx)("div", { "aria-hidden": !c, children: e(!c) }),
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
                onMouseLeave: d,
            } = this.props,
            { visible: u } = this.state,
            c = (0, s.jsx)(T.Consumer, {
                children: (c) => {
                    let m = c || u || !i,
                        x = l.Children.toArray(e(m)),
                        h = l.Children.map(x, (e) => (l.isValidElement(e) && null != t ? t(e, m) : e));
                    return (0, s.jsx)(j.D, {
                        tag: "span",
                        onClick: m ? void 0 : this.removeObscurity,
                        onMouseEnter: o,
                        onMouseLeave: d,
                        "aria-label": m ? void 0 : this.ariaLabel,
                        "aria-expanded": m,
                        tabIndex: m ? -1 : 0,
                        role: m ? "presentation" : "button",
                        className: r()("obscured", n, E.ur, E.F0, { [E.R]: !m, [E.yo]: a }),
                        children: (0, s.jsx)("span", {
                            className: E.kx,
                            children: (0, s.jsx)("span", { "aria-hidden": !m, className: E.AV, children: h }),
                        }),
                    });
                },
            });
        return this.renderWithTooltip(c);
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
                return (0, I.xb)(e);
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
                return (0, I.xb)(e);
        }
    }
}
function P(e) {
    let t = (0, f._R)() && null != e.reason && b.tY.has(e.reason),
        n = (0, N.yM)();
    return (0, s.jsx)(k, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
}
((P.Types = A), (P.Reasons = b.Oc));
let L = P;
