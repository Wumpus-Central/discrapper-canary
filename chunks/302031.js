n.d(t, { Ay: () => _, Bs: () => k });
var i,
    l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(661531),
    d = n(346055),
    u = n(87221),
    c = n(834730),
    m = n(408278),
    x = n(39623),
    h = n(952270),
    j = n(939249),
    g = n(379257),
    p = n(306537),
    N = n(36149),
    f = n(390248),
    b = n(338717),
    I = n(403362),
    v = n(105292),
    A = n(881013),
    E = (((i = E || {}).TEXT = "text"), (i.ATTACHMENT = "attachment"), (i.EMBED = "embed"), i);
function C(e) {
    let { hidden: t, children: n } = e,
        i = s.useRef(null);
    return ((0, d.f)(i, t), (0, l.jsx)("span", { ref: i, "aria-hidden": t, className: A.AV, children: n }));
}
function S(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: r()(A.pR, t), children: v.intl.string(v.t["F+x38C"]) });
}
function y(e) {
    let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
    return (0, l.jsx)("div", {
        className: r()(A.W5, t),
        children: i
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(u.D, { size: "lg", color: o.A.colors.WHITE }),
                      n &&
                          (0, l.jsx)(c.E, {
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
            return (0, l.jsx)(S, { className: n });
        case b.Oc.EXPLICIT_CONTENT:
        case b.Oc.GORE_CONTENT:
        case b.Oc.SELF_HARM_CONTENT:
            return (0, l.jsx)(y, { isSingleMosaicItem: i, className: n });
        case b.Oc.POTENTIAL_EXPLICIT_CONTENT:
            return (0, l.jsx)(y, { isSingleMosaicItem: i, className: n, obscureOnly: !0 });
        default:
            return (0, I.xb)(t);
    }
}
function T(e) {
    let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: s } = e;
    return t !== b.Oc.EXPLICIT_CONTENT && t !== b.Oc.GORE_CONTENT && t !== b.Oc.SELF_HARM_CONTENT
        ? null
        : (0, l.jsx)("div", {
              className: r()(A.fA, s),
              children: (0, l.jsx)(m.K, {
                  icon: n ? x.EyeIcon : h.EyeSlashIcon,
                  variant: "overlay-secondary",
                  size: "sm",
                  onClick: i,
                  "aria-label": v.intl.string(v.t.ex5G9m),
              }),
          });
}
let k = s.createContext(!1);
class P extends s.PureComponent {
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
    renderObscuredAttachment() {
        let {
                children: e,
                inline: t,
                className: n,
                containerStyles: i,
                obscured: s = !0,
                reason: a = b.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: d,
                isVerifiedTeen: u,
            } = this.props,
            { visible: c } = this.state;
        return (0, l.jsx)(k.Consumer, {
            children: (m) => {
                let x = m || c || !s;
                return b._K.has(a) && !t
                    ? (0, l.jsxs)("div", {
                          "aria-label": x ? void 0 : this.ariaLabel,
                          "aria-expanded": x,
                          style: i,
                          className: r()(n, A.ur, A.q2, A.Dq, A.OZ, { [A.R]: !x, [A.h5]: o }),
                          role: x ? "presentation" : "button",
                          tabIndex: x ? -1 : 0,
                          children: [
                              x ? null : (0, l.jsx)(O, { reason: a, isSingleMosaicItem: o }),
                              (0, l.jsx)("div", { "aria-hidden": !x, inert: !x, className: A.Qu, children: e(!x) }),
                              u
                                  ? null
                                  : (0, l.jsx)(T, {
                                        obscureReason: a,
                                        isVisible: c,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: d,
                                    }),
                          ],
                      })
                    : (0, l.jsxs)(j.D, {
                          onClick: x ? void 0 : this.removeObscurity,
                          "aria-label": x ? void 0 : this.ariaLabel,
                          "aria-expanded": x,
                          style: i,
                          className: r()(n, A.ur, A.q2, A.Dq, { [A.R]: !x, [A.rP]: !x }),
                          role: x ? "presentation" : "button",
                          tabIndex: x ? -1 : 0,
                          children: [
                              x || t ? null : (0, l.jsx)(O, { reason: a, isSingleMosaicItem: o }),
                              (0, l.jsx)("div", { "aria-hidden": !x, inert: !x, className: A.Qu, children: e(!x) }),
                          ],
                      });
            },
        });
    }
    renderObscuredEmbed() {
        let {
                children: e,
                className: t,
                containerStyles: n,
                isSingleMosaicItem: i,
                obscurityControlClassName: s,
                reason: a = b.Oc.SPOILER,
                isVerifiedTeen: o,
            } = this.props,
            { visible: d } = this.state;
        return (0, l.jsx)(k.Consumer, {
            children: (u) => {
                let c = u || d;
                return b._K.has(a)
                    ? (0, l.jsxs)("div", {
                          "aria-label": d ? void 0 : this.ariaLabel,
                          "aria-expanded": c,
                          style: n,
                          className: r()(t, A.ur, A.q2, A.x, A.OZ, { [A.R]: !c }),
                          role: c ? "presentation" : "button",
                          tabIndex: c ? -1 : 0,
                          children: [
                              c ? null : (0, l.jsx)(O, { reason: a, isSingleMosaicItem: i }),
                              (0, l.jsx)("div", { "aria-hidden": !c, inert: !c, className: A.Qu, children: e(!c) }),
                              o
                                  ? null
                                  : (0, l.jsx)(T, {
                                        obscureReason: a,
                                        isVisible: d,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: s,
                                    }),
                          ],
                      })
                    : (0, l.jsxs)(j.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": c,
                          className: r()(t, A.ur, A.q2, A.x, { [A.R]: !c }),
                          onClick: c ? void 0 : this.removeObscurity,
                          style: n,
                          role: c ? "presentation" : "button",
                          tabIndex: c ? -1 : 0,
                          children: [
                              c ? null : (0, l.jsx)(O, { reason: a, className: A.E6 }),
                              (0, l.jsx)("div", { "aria-hidden": !c, inert: !c, children: e(!c) }),
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
            { visible: u } = this.state;
        return (0, l.jsx)(k.Consumer, {
            children: (c) => {
                let m = c || u || !i,
                    x = s.Children.toArray(e(m)),
                    h = s.Children.map(x, (e) => (s.isValidElement(e) && null != t ? t(e, m) : e));
                return (0, l.jsx)(j.D, {
                    tag: "span",
                    onClick: m ? void 0 : this.removeObscurity,
                    onMouseEnter: o,
                    onMouseLeave: d,
                    "aria-label": m ? void 0 : this.ariaLabel,
                    "aria-expanded": m,
                    tabIndex: m ? -1 : 0,
                    role: m ? "presentation" : "button",
                    className: r()("obscured", n, A.ur, A.F0, { [A.R]: !m, [A.yo]: a }),
                    children: (0, l.jsx)("span", {
                        className: A.kx,
                        children: (0, l.jsx)(C, { hidden: !m, children: h }),
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
function L(e) {
    let t = (0, f._R)() && null != e.reason && b.tY.has(e.reason),
        n = (0, N.yM)();
    return (0, l.jsx)(P, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
}
((L.Types = E), (L.Reasons = b.Oc));
let _ = L;
