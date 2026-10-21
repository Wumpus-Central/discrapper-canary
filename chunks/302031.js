n.d(t, { Ay: () => P, Bs: () => T });
var i,
    s = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(661531),
    c = n(87221),
    d = n(834730),
    u = n(939249),
    m = n(952270),
    x = n(39623),
    h = n(683063),
    j = n(379257),
    g = n(306537),
    p = n(36149),
    I = n(390248),
    N = n(338717),
    b = n(403362),
    f = n(105292),
    A = n(881013),
    v = (((i = v || {}).TEXT = "text"), (i.ATTACHMENT = "attachment"), (i.EMBED = "embed"), i);
function E(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: r()(A.pR, t), children: f.intl.string(f.t["F+x38C"]) });
}
function C(e) {
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
              className: r()(A.fA, l),
              children: (0, s.jsx)(u.D, {
                  className: A.kw,
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
            return void j.A.showAgeVerificationGetStartedModal({ entryPoint: g.q1.OBSCURED_MEDIA });
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
                reason: a = N.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: c,
                isVerifiedTeen: d,
            } = this.props,
            { visible: m } = this.state,
            x = (0, s.jsx)(T.Consumer, {
                children: (x) => {
                    let h = x || m || !l;
                    return N._K.has(a) && !t
                        ? (0, s.jsxs)("div", {
                              "aria-label": h ? void 0 : this.ariaLabel,
                              "aria-expanded": h,
                              style: i,
                              className: r()(n, A.ur, A.q2, A.Dq, A.OZ, { [A.R]: !h, [A.h5]: o }),
                              role: h ? "presentation" : "button",
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h ? null : (0, s.jsx)(S, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !h, className: A.Qu, children: e(!h) }),
                                  d
                                      ? null
                                      : (0, s.jsx)(O, {
                                            obscureReason: a,
                                            isVisible: m,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: c,
                                        }),
                              ],
                          })
                        : (0, s.jsxs)(u.D, {
                              onClick: h ? void 0 : this.removeObscurity,
                              "aria-label": h ? void 0 : this.ariaLabel,
                              "aria-expanded": h,
                              style: i,
                              className: r()(n, A.ur, A.q2, A.Dq, { [A.R]: !h, [A.rP]: !h }),
                              role: h ? "presentation" : "button",
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h || t ? null : (0, s.jsx)(S, { reason: a, isSingleMosaicItem: o }),
                                  (0, s.jsx)("div", { "aria-hidden": !h, className: A.Qu, children: e(!h) }),
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
            { visible: c } = this.state;
        return (0, s.jsx)(T.Consumer, {
            children: (d) => {
                let m = d || c;
                return N._K.has(a)
                    ? (0, s.jsxs)("div", {
                          "aria-label": c ? void 0 : this.ariaLabel,
                          "aria-expanded": m,
                          style: n,
                          className: r()(t, A.ur, A.q2, A.x, A.OZ, { [A.R]: !m }),
                          role: m ? "presentation" : "button",
                          tabIndex: m ? -1 : 0,
                          children: [
                              m ? null : (0, s.jsx)(S, { reason: a, isSingleMosaicItem: i }),
                              (0, s.jsx)("div", { "aria-hidden": !m, className: A.Qu, children: e(!m) }),
                              o
                                  ? null
                                  : (0, s.jsx)(O, {
                                        obscureReason: a,
                                        isVisible: c,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: l,
                                    }),
                          ],
                      })
                    : (0, s.jsxs)(u.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": m,
                          className: r()(t, A.ur, A.q2, A.x, { [A.R]: !m }),
                          onClick: m ? void 0 : this.removeObscurity,
                          style: n,
                          role: m ? "presentation" : "button",
                          tabIndex: m ? -1 : 0,
                          children: [
                              m ? null : (0, s.jsx)(S, { reason: a, className: A.E6 }),
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
                        c = l.Children.toArray(e(o)),
                        d = l.Children.map(c, (e) => (l.isValidElement(e) && null != t ? t(e, o) : e));
                    return (0, s.jsx)(u.D, {
                        tag: "span",
                        onClick: o ? void 0 : this.removeObscurity,
                        "aria-label": o ? void 0 : this.ariaLabel,
                        "aria-expanded": o,
                        tabIndex: o ? -1 : 0,
                        role: o ? "presentation" : "button",
                        className: r()("obscured", n, A.ur, A.F0, { [A.R]: !o }),
                        children: (0, s.jsx)("span", {
                            className: A.kx,
                            children: (0, s.jsx)("span", { "aria-hidden": !o, className: A.AV, children: d }),
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
((k.Types = v), (k.Reasons = N.Oc));
let P = k;
