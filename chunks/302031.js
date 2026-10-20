n.d(t, { Ay: () => P, Bs: () => T });
var i,
    s = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(661531),
    d = n(87221),
    c = n(834730),
    u = n(939249),
    m = n(952270),
    x = n(39623),
    j = n(683063),
    h = n(379257),
    g = n(306537),
    p = n(36149),
    I = n(390248),
    N = n(338717),
    b = n(403362),
    f = n(105292),
    v = n(881013),
    A = (((i = A || {}).TEXT = "text"), (i.ATTACHMENT = "attachment"), (i.EMBED = "embed"), i);
function E(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: r()(v.pR, t), children: f.intl.string(f.t["F+x38C"]) });
}
function C(e) {
    let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
    return (0, s.jsx)("div", {
        className: r()(v.W5, t),
        children: i
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(d.D, { size: "lg", color: o.A.colors.WHITE }),
                      n &&
                          (0, s.jsx)(c.E, {
                              variant: "text-sm/normal",
                              color: "text-overlay-light",
                              className: v.Vs,
                              children: f.intl.string(f.t.SpxcUR),
                          }),
                  ],
              }),
    });
}
function S(e) {
    let { reason: t = N.Oc.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
    switch (t) {
        case N.Oc.SPOILER:
            return (0, s.jsx)(E, { className: n });
        case N.Oc.EXPLICIT_CONTENT:
        case N.Oc.GORE_CONTENT:
        case N.Oc.SELF_HARM_CONTENT:
            return (0, s.jsx)(C, { isSingleMosaicItem: i, className: n });
        case N.Oc.POTENTIAL_EXPLICIT_CONTENT:
            return (0, s.jsx)(C, { isSingleMosaicItem: i, className: n, obscureOnly: !0 });
        default:
            return (0, b.xb)(t);
    }
}
function O(e) {
    let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: l } = e;
    return t !== N.Oc.EXPLICIT_CONTENT && t !== N.Oc.GORE_CONTENT && t !== N.Oc.SELF_HARM_CONTENT
        ? null
        : (0, s.jsx)("div", {
              className: r()(v.fA, l),
              children: (0, s.jsx)(u.D, {
                  className: v.kw,
                  onClick: i,
                  "aria-label": f.intl.string(f.t.ex5G9m),
                  children: n
                      ? (0, s.jsx)(x.EyeIcon, { size: "md", color: "currentColor" })
                      : (0, s.jsx)(m.EyeSlashIcon, { size: "md", color: "currentColor" }),
              }),
          });
}
let T = l.createContext(!1);
class y extends l.PureComponent {
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
            return void h.A.showAgeVerificationGetStartedModal({ entryPoint: g.q1.OBSCURED_MEDIA });
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
                reason: a = N.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: d,
                isVerifiedTeen: c,
            } = this.props,
            { visible: m } = this.state,
            x = (0, s.jsx)(T.Consumer, {
                children: (x) => {
                    let j = x || m || !l;
                    return N._K.has(a) && !t
                        ? (0, s.jsxs)("div", {
                              "aria-label": j ? void 0 : this.ariaLabel,
                              "aria-expanded": j,
                              style: i,
                              className: r()(n, v.ur, v.q2, v.Dq, v.OZ, { [v.R]: !j, [v.h5]: o }),
                              role: j ? "presentation" : "button",
                              tabIndex: j ? -1 : 0,
                              children: [
                                  j ? null : (0, s.jsx)(S, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !j, className: v.Qu, children: e(!j) }),
                                  c
                                      ? null
                                      : (0, s.jsx)(O, {
                                            obscureReason: a,
                                            isVisible: m,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: d,
                                        }),
                              ],
                          })
                        : (0, s.jsxs)(u.D, {
                              onClick: j ? void 0 : this.removeObscurity,
                              "aria-label": j ? void 0 : this.ariaLabel,
                              "aria-expanded": j,
                              style: i,
                              className: r()(n, v.ur, v.q2, v.Dq, { [v.R]: !j, [v.rP]: !j }),
                              role: j ? "presentation" : "button",
                              tabIndex: j ? -1 : 0,
                              children: [
                                  j || t ? null : (0, s.jsx)(S, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !j, className: v.Qu, children: e(!j) }),
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
                isSingleMosaicItem: i,
                obscurityControlClassName: l,
                reason: a = N.Oc.SPOILER,
                isVerifiedTeen: o,
            } = this.props,
            { visible: d } = this.state;
        return (0, s.jsx)(T.Consumer, {
            children: (c) => {
                let m = c || d;
                return N._K.has(a)
                    ? (0, s.jsxs)("div", {
                          "aria-label": d ? void 0 : this.ariaLabel,
                          "aria-expanded": m,
                          style: n,
                          className: r()(t, v.ur, v.q2, v.x, v.OZ, { [v.R]: !m }),
                          role: m ? "presentation" : "button",
                          tabIndex: m ? -1 : 0,
                          children: [
                              m ? null : (0, s.jsx)(S, { reason: a, isSingleMosaicItem: i }),
                              (0, s.jsx)("div", { "aria-hidden": !m, className: v.Qu, children: e(!m) }),
                              o
                                  ? null
                                  : (0, s.jsx)(O, {
                                        obscureReason: a,
                                        isVisible: d,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: l,
                                    }),
                          ],
                      })
                    : (0, s.jsxs)(u.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": m,
                          className: r()(t, v.ur, v.q2, v.x, { [v.R]: !m }),
                          onClick: m ? void 0 : this.removeObscurity,
                          style: n,
                          role: m ? "presentation" : "button",
                          tabIndex: m ? -1 : 0,
                          children: [
                              m ? null : (0, s.jsx)(S, { reason: a, className: v.E6 }),
                              (0, s.jsx)("div", { "aria-hidden": !m, children: e(!m) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: i } = this.state,
            a = (0, s.jsx)(T.Consumer, {
                children: (a) => {
                    let o = a || i,
                        d = l.Children.toArray(e(o)),
                        c = l.Children.map(d, (e) => (l.isValidElement(e) && null != t ? t(e, o) : e));
                    return (0, s.jsx)(u.D, {
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
                return (0, b.xb)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = N.Oc.SPOILER } = this.props;
        switch (e) {
            case N.Oc.SPOILER:
                return f.intl.string(f.t["F+x38C"]);
            case N.Oc.EXPLICIT_CONTENT:
            case N.Oc.GORE_CONTENT:
            case N.Oc.SELF_HARM_CONTENT:
                return f.intl.string(f.t.mlJ8Vf);
            case N.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return f.intl.string(f.t.MRdR7z);
            default:
                return (0, b.xb)(e);
        }
    }
    get tooltipText() {
        let { reason: e = N.Oc.SPOILER } = this.props;
        switch (e) {
            case N.Oc.SPOILER:
                return f.intl.string(f.t["F+x38C"]);
            case N.Oc.EXPLICIT_CONTENT:
            case N.Oc.GORE_CONTENT:
            case N.Oc.SELF_HARM_CONTENT:
                return f.intl.string(f.t.mlJ8Vf);
            case N.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return f.intl.string(f.t.MRdR7z);
            default:
                return (0, b.xb)(e);
        }
    }
}
function k(e) {
    let t = (0, I._R)() && null != e.reason && N.tY.has(e.reason),
        n = (0, p.yM)();
    return (0, s.jsx)(y, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
}
((k.Types = A), (k.Reasons = N.Oc));
let P = k;
