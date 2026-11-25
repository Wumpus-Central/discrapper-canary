var l,
    s = t(477900),
    a = t(582128),
    i = t(503698),
    r = t.n(i),
    o = t(646514),
    u = t(346055),
    c = t(87221),
    d = t(834730),
    m = t(408278),
    x = t(39623),
    h = t(952270),
    p = t(939249),
    j = t(871309),
    g = t(171576),
    f = t(36149),
    v = t(390248),
    N = t(338717),
    I = t(403362),
    b = t(792996),
    E = t(881013),
    A = (((l = A || {}).TEXT = "text"), (l.ATTACHMENT = "attachment"), (l.EMBED = "embed"), l);
function C(e) {
    let { hidden: n, children: t } = e,
        l = a.useRef(null);
    return ((0, u.f)(l, n), (0, s.jsx)("span", { ref: l, "aria-hidden": n, className: E.AV, children: t }));
}
function T(e) {
    let { className: n } = e;
    return (0, s.jsx)("div", { className: r()(E.pR, n), children: b.intl.string(b.t["F+x38C"]) });
}
function y(e) {
    let { className: n, isSingleMosaicItem: t, obscureOnly: l } = e;
    return (0, s.jsx)("div", {
        className: r()(E.W5, n),
        children: l
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(c.ImageWarningIcon, { size: "lg", color: o.A.colors.WHITE }),
                      t &&
                          (0, s.jsx)(d.E, {
                              variant: "body-sm/normal",
                              color: "text-overlay-light",
                              className: E.Vs,
                              children: b.intl.string(b.t.SpxcUR),
                          }),
                  ],
              }),
    });
}
function _(e) {
    let { reason: n = N.Oc.SPOILER, className: t, isSingleMosaicItem: l = !1 } = e;
    switch (n) {
        case N.Oc.SPOILER:
            return (0, s.jsx)(T, { className: t });
        case N.Oc.EXPLICIT_CONTENT:
        case N.Oc.GORE_CONTENT:
        case N.Oc.SELF_HARM_CONTENT:
            return (0, s.jsx)(y, { isSingleMosaicItem: l, className: t });
        case N.Oc.POTENTIAL_EXPLICIT_CONTENT:
            return (0, s.jsx)(y, { isSingleMosaicItem: l, className: t, obscureOnly: !0 });
        default:
            return (0, I.xb)(n);
    }
}
function S(e) {
    let { obscureReason: n, isVisible: t, handleToggleObscurity: l, obscurityControlClassName: a } = e;
    return n !== N.Oc.EXPLICIT_CONTENT && n !== N.Oc.GORE_CONTENT && n !== N.Oc.SELF_HARM_CONTENT
        ? null
        : (0, s.jsx)("div", {
              className: r()(E.fA, a),
              children: (0, s.jsx)(m.K, {
                  icon: t ? x.EyeIcon : h.EyeSlashIcon,
                  variant: "overlay-secondary",
                  size: "sm",
                  onClick: l,
                  "aria-label": b.intl.string(b.t.ex5G9m),
              }),
          });
}
let O = a.createContext(!1);
class R extends a.PureComponent {
    state = { visible: !1 };
    removeObscurity = (e) => {
        let { visible: n } = this.state;
        if (n) return;
        (e.preventDefault(), e.stopPropagation(), this.setState({ visible: !0 }));
        let { onReveal: t } = this.props;
        null != t && t();
    };
    handleToggleObscurity = (e) => {
        if (
            (e.stopPropagation(),
            e.nativeEvent.stopPropagation(),
            (0, v.Wi)({ obscure: this.state.visible }),
            this.props.shouldAgeVerify)
        )
            return void j.A.showAgeVerificationGetStartedModal({ entryPoint: g.q1.OBSCURED_MEDIA });
        let { onToggleObscurity: n } = this.props;
        (null != n && n(e), this.setState((e) => ({ visible: !e.visible })));
    };
    obscure = () => {
        let { visible: e } = this.state;
        e && this.setState({ visible: !1 });
    };
    renderObscuredAttachment() {
        let {
                children: e,
                inline: n,
                className: t,
                containerStyles: l,
                obscured: a = !0,
                reason: i = N.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: u,
                isVerifiedTeen: c,
            } = this.props,
            { visible: d } = this.state;
        return (0, s.jsx)(O.Consumer, {
            children: (m) => {
                let x = m || d || !a;
                return N._K.has(i) && !n
                    ? (0, s.jsxs)("div", {
                          "aria-label": x ? void 0 : this.ariaLabel,
                          "aria-expanded": x,
                          style: l,
                          className: r()(t, E.ur, E.q2, E.Dq, E.OZ, { [E.R]: !x, [E.h5]: o }),
                          role: x ? "presentation" : "button",
                          tabIndex: x ? -1 : 0,
                          children: [
                              x ? null : (0, s.jsx)(_, { reason: i, isSingleMosaicItem: o }),
                              (0, s.jsx)("div", { "aria-hidden": !x, inert: !x, className: E.Qu, children: e(!x) }),
                              c
                                  ? null
                                  : (0, s.jsx)(S, {
                                        obscureReason: i,
                                        isVisible: d,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: u,
                                    }),
                          ],
                      })
                    : (0, s.jsxs)(p.D, {
                          onClick: x ? void 0 : this.removeObscurity,
                          "aria-label": x ? void 0 : this.ariaLabel,
                          "aria-expanded": x,
                          style: l,
                          className: r()(t, E.ur, E.q2, E.Dq, { [E.R]: !x, [E.rP]: !x }),
                          role: x ? "presentation" : "button",
                          tabIndex: x ? -1 : 0,
                          children: [
                              x || n ? null : (0, s.jsx)(_, { reason: i, isSingleMosaicItem: o }),
                              (0, s.jsx)("div", { "aria-hidden": !x, inert: !x, className: E.Qu, children: e(!x) }),
                          ],
                      });
            },
        });
    }
    renderObscuredEmbed() {
        let {
                children: e,
                className: n,
                containerStyles: t,
                isSingleMosaicItem: l,
                obscurityControlClassName: a,
                reason: i = N.Oc.SPOILER,
                isVerifiedTeen: o,
            } = this.props,
            { visible: u } = this.state;
        return (0, s.jsx)(O.Consumer, {
            children: (c) => {
                let d = c || u;
                return N._K.has(i)
                    ? (0, s.jsxs)("div", {
                          "aria-label": u ? void 0 : this.ariaLabel,
                          "aria-expanded": d,
                          style: t,
                          className: r()(n, E.ur, E.q2, E.x, E.OZ, { [E.R]: !d }),
                          role: d ? "presentation" : "button",
                          tabIndex: d ? -1 : 0,
                          children: [
                              d ? null : (0, s.jsx)(_, { reason: i, isSingleMosaicItem: l }),
                              (0, s.jsx)("div", { "aria-hidden": !d, inert: !d, className: E.Qu, children: e(!d) }),
                              o
                                  ? null
                                  : (0, s.jsx)(S, {
                                        obscureReason: i,
                                        isVisible: u,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: a,
                                    }),
                          ],
                      })
                    : (0, s.jsxs)(p.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": d,
                          className: r()(n, E.ur, E.q2, E.x, { [E.R]: !d }),
                          onClick: d ? void 0 : this.removeObscurity,
                          style: t,
                          role: d ? "presentation" : "button",
                          tabIndex: d ? -1 : 0,
                          children: [
                              d ? null : (0, s.jsx)(_, { reason: i, className: E.E6 }),
                              (0, s.jsx)("div", { "aria-hidden": !d, inert: !d, children: e(!d) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let {
                children: e,
                renderTextElement: n,
                className: t,
                obscured: l = !0,
                hovered: i = !1,
                onMouseEnter: o,
                onMouseLeave: u,
            } = this.props,
            { visible: c } = this.state;
        return (0, s.jsx)(O.Consumer, {
            children: (d) => {
                let m = d || c || !l,
                    x = a.Children.toArray(e(m)),
                    h = a.Children.map(x, (e) => (a.isValidElement(e) && null != n ? n(e, m) : e));
                return (0, s.jsx)(p.D, {
                    tag: "span",
                    onClick: m ? void 0 : this.removeObscurity,
                    onMouseEnter: o,
                    onMouseLeave: u,
                    "aria-label": m ? void 0 : this.ariaLabel,
                    "aria-expanded": m,
                    tabIndex: m ? -1 : 0,
                    role: m ? "presentation" : "button",
                    className: r()("obscured", t, E.ur, E.F0, { [E.R]: !m, [E.yo]: i }),
                    children: (0, s.jsx)("span", {
                        className: E.kx,
                        children: (0, s.jsx)(C, { hidden: !m, children: h }),
                    }),
                });
            },
        });
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
                return b.intl.string(b.t["F+x38C"]);
            case N.Oc.EXPLICIT_CONTENT:
            case N.Oc.GORE_CONTENT:
            case N.Oc.SELF_HARM_CONTENT:
                return b.intl.string(b.t.mlJ8Vf);
            case N.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return b.intl.string(b.t.MRdR7z);
            default:
                return (0, I.xb)(e);
        }
    }
}
function M(e) {
    let n = (0, v._R)() && null != e.reason && N.tY.has(e.reason),
        t = (0, f.yM)();
    return (0, s.jsx)(R, { ...e, shouldAgeVerify: n, isVerifiedTeen: t });
}
((M.Types = A), (M.Reasons = N.Oc), t.d(n, {}, { Ay: M, Bs: O }));
