n.d(t, { Ay: () => R, Bs: () => P });
var i,
    s = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(661531),
    d = n(346055),
    u = n(87221),
    c = n(834730),
    m = n(408278),
    x = n(39623),
    h = n(952270),
    j = n(683063),
    g = n(939249),
    p = n(379257),
    N = n(306537),
    f = n(36149),
    b = n(390248),
    I = n(338717),
    v = n(403362),
    E = n(105292),
    A = n(881013),
    C = (((i = C || {}).TEXT = "text"), (i.ATTACHMENT = "attachment"), (i.EMBED = "embed"), i);
function S(e) {
    let { hidden: t, children: n } = e,
        i = l.useRef(null);
    return ((0, d.f)(i, t), (0, s.jsx)("span", { ref: i, "aria-hidden": t, className: A.AV, children: n }));
}
function O(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: r()(A.pR, t), children: E.intl.string(E.t["F+x38C"]) });
}
function y(e) {
    let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
    return (0, s.jsx)("div", {
        className: r()(A.W5, t),
        children: i
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(u.D, { size: "lg", color: o.A.colors.WHITE }),
                      n &&
                          (0, s.jsx)(c.E, {
                              variant: "text-sm/normal",
                              color: "text-overlay-light",
                              className: A.Vs,
                              children: E.intl.string(E.t.SpxcUR),
                          }),
                  ],
              }),
    });
}
function T(e) {
    let { reason: t = I.Oc.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
    switch (t) {
        case I.Oc.SPOILER:
            return (0, s.jsx)(O, { className: n });
        case I.Oc.EXPLICIT_CONTENT:
        case I.Oc.GORE_CONTENT:
        case I.Oc.SELF_HARM_CONTENT:
            return (0, s.jsx)(y, { isSingleMosaicItem: i, className: n });
        case I.Oc.POTENTIAL_EXPLICIT_CONTENT:
            return (0, s.jsx)(y, { isSingleMosaicItem: i, className: n, obscureOnly: !0 });
        default:
            return (0, v.xb)(t);
    }
}
function k(e) {
    let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: l } = e;
    return t !== I.Oc.EXPLICIT_CONTENT && t !== I.Oc.GORE_CONTENT && t !== I.Oc.SELF_HARM_CONTENT
        ? null
        : (0, s.jsx)("div", {
              className: r()(A.fA, l),
              children: (0, s.jsx)(m.K, {
                  icon: n ? x.EyeIcon : h.EyeSlashIcon,
                  variant: "overlay-secondary",
                  size: "sm",
                  onClick: i,
                  "aria-label": E.intl.string(E.t.ex5G9m),
              }),
          });
}
let P = l.createContext(!1);
class L extends l.PureComponent {
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
            (0, b.Wi)({ obscure: this.state.visible }),
            this.props.shouldAgeVerify)
        )
            return void p.A.showAgeVerificationGetStartedModal({ entryPoint: N.q1.OBSCURED_MEDIA });
        let { onToggleObscurity: t } = this.props;
        (null != t && t(e), this.setState((e) => ({ visible: !e.visible })));
    };
    obscure = () => {
        let { visible: e } = this.state;
        e && this.setState({ visible: !1 });
    };
    renderWithTooltip(e) {
        return this.state.visible ? e : (0, s.jsx)(j.u, { position: "left", body: this.tooltipText, children: e });
    }
    renderObscuredAttachment() {
        let {
                children: e,
                inline: t,
                className: n,
                containerStyles: i,
                obscured: l = !0,
                reason: a = I.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: d,
                isVerifiedTeen: u,
            } = this.props,
            { visible: c } = this.state,
            m = (0, s.jsx)(P.Consumer, {
                children: (m) => {
                    let x = m || c || !l;
                    return I._K.has(a) && !t
                        ? (0, s.jsxs)("div", {
                              "aria-label": x ? void 0 : this.ariaLabel,
                              "aria-expanded": x,
                              style: i,
                              className: r()(n, A.ur, A.q2, A.Dq, A.OZ, { [A.R]: !x, [A.h5]: o }),
                              role: x ? "presentation" : "button",
                              tabIndex: x ? -1 : 0,
                              children: [
                                  x ? null : (0, s.jsx)(T, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !x, inert: !x, className: A.Qu, children: e(!x) }),
                                  u
                                      ? null
                                      : (0, s.jsx)(k, {
                                            obscureReason: a,
                                            isVisible: c,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: d,
                                        }),
                              ],
                          })
                        : (0, s.jsxs)(g.D, {
                              onClick: x ? void 0 : this.removeObscurity,
                              "aria-label": x ? void 0 : this.ariaLabel,
                              "aria-expanded": x,
                              style: i,
                              className: r()(n, A.ur, A.q2, A.Dq, { [A.R]: !x, [A.rP]: !x }),
                              role: x ? "presentation" : "button",
                              tabIndex: x ? -1 : 0,
                              children: [
                                  x || t ? null : (0, s.jsx)(T, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !x, inert: !x, className: A.Qu, children: e(!x) }),
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
                reason: a = I.Oc.SPOILER,
                isVerifiedTeen: o,
            } = this.props,
            { visible: d } = this.state;
        return (0, s.jsx)(P.Consumer, {
            children: (u) => {
                let c = u || d;
                return I._K.has(a)
                    ? (0, s.jsxs)("div", {
                          "aria-label": d ? void 0 : this.ariaLabel,
                          "aria-expanded": c,
                          style: n,
                          className: r()(t, A.ur, A.q2, A.x, A.OZ, { [A.R]: !c }),
                          role: c ? "presentation" : "button",
                          tabIndex: c ? -1 : 0,
                          children: [
                              c ? null : (0, s.jsx)(T, { reason: a, isSingleMosaicItem: i }),
                              (0, s.jsx)("div", { "aria-hidden": !c, inert: !c, className: A.Qu, children: e(!c) }),
                              o
                                  ? null
                                  : (0, s.jsx)(k, {
                                        obscureReason: a,
                                        isVisible: d,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: l,
                                    }),
                          ],
                      })
                    : (0, s.jsxs)(g.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": c,
                          className: r()(t, A.ur, A.q2, A.x, { [A.R]: !c }),
                          onClick: c ? void 0 : this.removeObscurity,
                          style: n,
                          role: c ? "presentation" : "button",
                          tabIndex: c ? -1 : 0,
                          children: [
                              c ? null : (0, s.jsx)(T, { reason: a, className: A.E6 }),
                              (0, s.jsx)("div", { "aria-hidden": !c, inert: !c, children: e(!c) }),
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
            c = (0, s.jsx)(P.Consumer, {
                children: (c) => {
                    let m = c || u || !i,
                        x = l.Children.toArray(e(m)),
                        h = l.Children.map(x, (e) => (l.isValidElement(e) && null != t ? t(e, m) : e));
                    return (0, s.jsx)(g.D, {
                        tag: "span",
                        onClick: m ? void 0 : this.removeObscurity,
                        onMouseEnter: o,
                        onMouseLeave: d,
                        "aria-label": m ? void 0 : this.ariaLabel,
                        "aria-expanded": m,
                        tabIndex: m ? -1 : 0,
                        role: m ? "presentation" : "button",
                        className: r()("obscured", n, A.ur, A.F0, { [A.R]: !m, [A.yo]: a }),
                        children: (0, s.jsx)("span", {
                            className: A.kx,
                            children: (0, s.jsx)(S, { hidden: !m, children: h }),
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
                return (0, v.xb)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = I.Oc.SPOILER } = this.props;
        switch (e) {
            case I.Oc.SPOILER:
                return E.intl.string(E.t["F+x38C"]);
            case I.Oc.EXPLICIT_CONTENT:
            case I.Oc.GORE_CONTENT:
            case I.Oc.SELF_HARM_CONTENT:
                return E.intl.string(E.t.mlJ8Vf);
            case I.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return E.intl.string(E.t.MRdR7z);
            default:
                return (0, v.xb)(e);
        }
    }
    get tooltipText() {
        let { reason: e = I.Oc.SPOILER } = this.props;
        switch (e) {
            case I.Oc.SPOILER:
                return E.intl.string(E.t["F+x38C"]);
            case I.Oc.EXPLICIT_CONTENT:
            case I.Oc.GORE_CONTENT:
            case I.Oc.SELF_HARM_CONTENT:
                return E.intl.string(E.t.mlJ8Vf);
            case I.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return E.intl.string(E.t.MRdR7z);
            default:
                return (0, v.xb)(e);
        }
    }
}
function _(e) {
    let t = (0, b._R)() && null != e.reason && I.tY.has(e.reason),
        n = (0, f.yM)();
    return (0, s.jsx)(L, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
}
((_.Types = C), (_.Reasons = I.Oc));
let R = _;
