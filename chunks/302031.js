var s,
    i = t(477900),
    l = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(646514),
    d = t(346055),
    c = t(87221),
    u = t(834730),
    m = t(408278),
    h = t(39623),
    x = t(952270),
    j = t(939249),
    g = t(871309),
    p = t(171576),
    b = t(36149),
    N = t(390248),
    f = t(338717),
    I = t(403362),
    v = t(792996),
    C = t(881013),
    A = (((s = A || {}).TEXT = "text"), (s.ATTACHMENT = "attachment"), (s.EMBED = "embed"), s);
function E(e) {
    let { hidden: n, children: t } = e,
        s = l.useRef(null);
    return ((0, d.f)(s, n), (0, i.jsx)("span", { ref: s, "aria-hidden": n, className: C.AV, children: t }));
}
function y(e) {
    let { className: n } = e;
    return (0, i.jsx)("div", { className: r()(C.pR, n), children: v.intl.string(v.t["F+x38C"]) });
}
function S(e) {
    let { className: n, isSingleMosaicItem: t, obscureOnly: s } = e;
    return (0, i.jsx)("div", {
        className: r()(C.W5, n),
        children: s
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.D, { size: "lg", color: o.A.colors.WHITE }),
                      t &&
                          (0, i.jsx)(u.E, {
                              variant: "body-sm/normal",
                              color: "text-overlay-light",
                              className: C.Vs,
                              children: v.intl.string(v.t.SpxcUR),
                          }),
                  ],
              }),
    });
}
function O(e) {
    let { reason: n = f.Oc.SPOILER, className: t, isSingleMosaicItem: s = !1 } = e;
    switch (n) {
        case f.Oc.SPOILER:
            return (0, i.jsx)(y, { className: t });
        case f.Oc.EXPLICIT_CONTENT:
        case f.Oc.GORE_CONTENT:
        case f.Oc.SELF_HARM_CONTENT:
            return (0, i.jsx)(S, { isSingleMosaicItem: s, className: t });
        case f.Oc.POTENTIAL_EXPLICIT_CONTENT:
            return (0, i.jsx)(S, { isSingleMosaicItem: s, className: t, obscureOnly: !0 });
        default:
            return (0, I.xb)(n);
    }
}
function T(e) {
    let { obscureReason: n, isVisible: t, handleToggleObscurity: s, obscurityControlClassName: l } = e;
    return n !== f.Oc.EXPLICIT_CONTENT && n !== f.Oc.GORE_CONTENT && n !== f.Oc.SELF_HARM_CONTENT
        ? null
        : (0, i.jsx)("div", {
              className: r()(C.fA, l),
              children: (0, i.jsx)(m.K, {
                  icon: t ? h.EyeIcon : x.EyeSlashIcon,
                  variant: "overlay-secondary",
                  size: "sm",
                  onClick: s,
                  "aria-label": v.intl.string(v.t.ex5G9m),
              }),
          });
}
let k = l.createContext(!1);
class _ extends l.PureComponent {
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
            (0, N.Wi)({ obscure: this.state.visible }),
            this.props.shouldAgeVerify)
        )
            return void g.A.showAgeVerificationGetStartedModal({ entryPoint: p.q1.OBSCURED_MEDIA });
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
                containerStyles: s,
                obscured: l = !0,
                reason: a = f.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: d,
                isVerifiedTeen: c,
            } = this.props,
            { visible: u } = this.state;
        return (0, i.jsx)(k.Consumer, {
            children: (m) => {
                let h = m || u || !l;
                return f._K.has(a) && !n
                    ? (0, i.jsxs)("div", {
                          "aria-label": h ? void 0 : this.ariaLabel,
                          "aria-expanded": h,
                          style: s,
                          className: r()(t, C.ur, C.q2, C.Dq, C.OZ, { [C.R]: !h, [C.h5]: o }),
                          role: h ? "presentation" : "button",
                          tabIndex: h ? -1 : 0,
                          children: [
                              h ? null : (0, i.jsx)(O, { reason: a, isSingleMosaicItem: o }),
                              (0, i.jsx)("div", { "aria-hidden": !h, inert: !h, className: C.Qu, children: e(!h) }),
                              c
                                  ? null
                                  : (0, i.jsx)(T, {
                                        obscureReason: a,
                                        isVisible: u,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: d,
                                    }),
                          ],
                      })
                    : (0, i.jsxs)(j.D, {
                          onClick: h ? void 0 : this.removeObscurity,
                          "aria-label": h ? void 0 : this.ariaLabel,
                          "aria-expanded": h,
                          style: s,
                          className: r()(t, C.ur, C.q2, C.Dq, { [C.R]: !h, [C.rP]: !h }),
                          role: h ? "presentation" : "button",
                          tabIndex: h ? -1 : 0,
                          children: [
                              h || n ? null : (0, i.jsx)(O, { reason: a, isSingleMosaicItem: o }),
                              (0, i.jsx)("div", { "aria-hidden": !h, inert: !h, className: C.Qu, children: e(!h) }),
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
                isSingleMosaicItem: s,
                obscurityControlClassName: l,
                reason: a = f.Oc.SPOILER,
                isVerifiedTeen: o,
            } = this.props,
            { visible: d } = this.state;
        return (0, i.jsx)(k.Consumer, {
            children: (c) => {
                let u = c || d;
                return f._K.has(a)
                    ? (0, i.jsxs)("div", {
                          "aria-label": d ? void 0 : this.ariaLabel,
                          "aria-expanded": u,
                          style: t,
                          className: r()(n, C.ur, C.q2, C.x, C.OZ, { [C.R]: !u }),
                          role: u ? "presentation" : "button",
                          tabIndex: u ? -1 : 0,
                          children: [
                              u ? null : (0, i.jsx)(O, { reason: a, isSingleMosaicItem: s }),
                              (0, i.jsx)("div", { "aria-hidden": !u, inert: !u, className: C.Qu, children: e(!u) }),
                              o
                                  ? null
                                  : (0, i.jsx)(T, {
                                        obscureReason: a,
                                        isVisible: d,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: l,
                                    }),
                          ],
                      })
                    : (0, i.jsxs)(j.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": u,
                          className: r()(n, C.ur, C.q2, C.x, { [C.R]: !u }),
                          onClick: u ? void 0 : this.removeObscurity,
                          style: t,
                          role: u ? "presentation" : "button",
                          tabIndex: u ? -1 : 0,
                          children: [
                              u ? null : (0, i.jsx)(O, { reason: a, className: C.E6 }),
                              (0, i.jsx)("div", { "aria-hidden": !u, inert: !u, children: e(!u) }),
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
                obscured: s = !0,
                hovered: a = !1,
                onMouseEnter: o,
                onMouseLeave: d,
            } = this.props,
            { visible: c } = this.state;
        return (0, i.jsx)(k.Consumer, {
            children: (u) => {
                let m = u || c || !s,
                    h = l.Children.toArray(e(m)),
                    x = l.Children.map(h, (e) => (l.isValidElement(e) && null != n ? n(e, m) : e));
                return (0, i.jsx)(j.D, {
                    tag: "span",
                    onClick: m ? void 0 : this.removeObscurity,
                    onMouseEnter: o,
                    onMouseLeave: d,
                    "aria-label": m ? void 0 : this.ariaLabel,
                    "aria-expanded": m,
                    tabIndex: m ? -1 : 0,
                    role: m ? "presentation" : "button",
                    className: r()("obscured", t, C.ur, C.F0, { [C.R]: !m, [C.yo]: a }),
                    children: (0, i.jsx)("span", {
                        className: C.kx,
                        children: (0, i.jsx)(E, { hidden: !m, children: x }),
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
        let { reason: e = f.Oc.SPOILER } = this.props;
        switch (e) {
            case f.Oc.SPOILER:
                return v.intl.string(v.t["F+x38C"]);
            case f.Oc.EXPLICIT_CONTENT:
            case f.Oc.GORE_CONTENT:
            case f.Oc.SELF_HARM_CONTENT:
                return v.intl.string(v.t.mlJ8Vf);
            case f.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return v.intl.string(v.t.MRdR7z);
            default:
                return (0, I.xb)(e);
        }
    }
}
function R(e) {
    let n = (0, N._R)() && null != e.reason && f.tY.has(e.reason),
        t = (0, b.yM)();
    return (0, i.jsx)(_, { ...e, shouldAgeVerify: n, isVerifiedTeen: t });
}
((R.Types = A), (R.Reasons = f.Oc), t.d(n, {}, { Ay: R, Bs: k }));
