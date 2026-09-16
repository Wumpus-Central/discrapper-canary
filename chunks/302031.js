n.d(t, { Ay: () => O, Bs: () => b });
var l,
    i = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(661531),
    u = n(87221),
    c = n(834730),
    d = n(939249),
    h = n(952270),
    m = n(39623),
    f = n(683063),
    p = n(379257),
    g = n(847599),
    x = n(36149),
    A = n(390248),
    C = n(338717),
    E = n(403362),
    I = n(375708),
    y = n(881013),
    S = (((l = S || {}).TEXT = "text"), (l.ATTACHMENT = "attachment"), (l.EMBED = "embed"), l);
function v(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", { className: a()(y.pR, t), children: I.intl.string(I.t["F+x38C"]) });
}
function N(e) {
    let { className: t, isSingleMosaicItem: n, obscureOnly: l } = e;
    return (0, i.jsx)("div", {
        className: a()(y.W5, t),
        children: l
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(u.D, { size: "lg", color: o.A.colors.WHITE }),
                      n &&
                          (0, i.jsx)(c.E, {
                              variant: "text-sm/normal",
                              color: "text-overlay-light",
                              className: y.Vs,
                              children: I.intl.string(I.t.SpxcUR),
                          }),
                  ],
              }),
    });
}
function _(e) {
    let { reason: t = C.Oc.SPOILER, className: n, isSingleMosaicItem: l = !1 } = e;
    switch (t) {
        case C.Oc.SPOILER:
            return (0, i.jsx)(v, { className: n });
        case C.Oc.EXPLICIT_CONTENT:
        case C.Oc.GORE_CONTENT:
        case C.Oc.SELF_HARM_CONTENT:
            return (0, i.jsx)(N, { isSingleMosaicItem: l, className: n });
        case C.Oc.POTENTIAL_EXPLICIT_CONTENT:
            return (0, i.jsx)(N, { isSingleMosaicItem: l, className: n, obscureOnly: !0 });
        default:
            return (0, E.xb)(t);
    }
}
function j(e) {
    let { obscureReason: t, isVisible: n, handleToggleObscurity: l, obscurityControlClassName: s } = e;
    return t !== C.Oc.EXPLICIT_CONTENT && t !== C.Oc.GORE_CONTENT && t !== C.Oc.SELF_HARM_CONTENT
        ? null
        : (0, i.jsx)("div", {
              className: a()(y.fA, s),
              children: (0, i.jsx)(d.D, {
                  className: y.kw,
                  onClick: l,
                  "aria-label": I.intl.string(I.t.ex5G9m),
                  children: n
                      ? (0, i.jsx)(m.EyeIcon, { size: "md", color: "currentColor" })
                      : (0, i.jsx)(h.EyeSlashIcon, { size: "md", color: "currentColor" }),
              }),
          });
}
let b = s.createContext(!1);
class T extends s.PureComponent {
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
            (0, A.Wi)({ obscure: this.state.visible }),
            this.props.shouldAgeVerify)
        )
            return void p.A.showAgeVerificationGetStartedModal({ entryPoint: g.q1.OBSCURED_MEDIA });
        let { onToggleObscurity: t } = this.props;
        (null != t && t(e), this.setState((e) => ({ visible: !e.visible })));
    };
    obscure = () => {
        let { visible: e } = this.state;
        e && this.setState({ visible: !1 });
    };
    renderWithTooltip(e) {
        return this.state.visible ? e : (0, i.jsx)(f.u, { position: "left", body: this.tooltipText, children: e });
    }
    renderObscuredAttachment() {
        let {
                children: e,
                inline: t,
                className: n,
                containerStyles: l,
                obscured: s = !0,
                reason: r = C.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: u,
                isVerifiedTeen: c,
            } = this.props,
            { visible: h } = this.state,
            m = (0, i.jsx)(b.Consumer, {
                children: (m) => {
                    let f = m || h || !s;
                    return C._K.has(r) && !t
                        ? (0, i.jsxs)("div", {
                              "aria-label": f ? void 0 : this.ariaLabel,
                              "aria-expanded": f,
                              style: l,
                              className: a()(n, y.ur, y.q2, y.Dq, y.OZ, { [y.R]: !f, [y.h5]: o }),
                              role: f ? "presentation" : "button",
                              tabIndex: f ? -1 : 0,
                              children: [
                                  f ? null : (0, i.jsx)(_, { reason: r, isSingleMosaicItem: o }),
                                  (0, i.jsx)("div", { "aria-hidden": !f, className: y.Qu, children: e(!f) }),
                                  c
                                      ? null
                                      : (0, i.jsx)(j, {
                                            obscureReason: r,
                                            isVisible: h,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: u,
                                        }),
                              ],
                          })
                        : (0, i.jsxs)(d.D, {
                              onClick: f ? void 0 : this.removeObscurity,
                              "aria-label": f ? void 0 : this.ariaLabel,
                              "aria-expanded": f,
                              style: l,
                              className: a()(n, y.ur, y.q2, y.Dq, { [y.R]: !f, [y.rP]: !f }),
                              role: f ? "presentation" : "button",
                              tabIndex: f ? -1 : 0,
                              children: [
                                  f || t ? null : (0, i.jsx)(_, { reason: r, isSingleMosaicItem: o }),
                                  (0, i.jsx)("div", { "aria-hidden": !f, className: y.Qu, children: e(!f) }),
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
                isSingleMosaicItem: l,
                obscurityControlClassName: s,
                reason: r = C.Oc.SPOILER,
                isVerifiedTeen: o,
            } = this.props,
            { visible: u } = this.state;
        return (0, i.jsx)(b.Consumer, {
            children: (c) => {
                let h = c || u;
                return C._K.has(r)
                    ? (0, i.jsxs)("div", {
                          "aria-label": u ? void 0 : this.ariaLabel,
                          "aria-expanded": h,
                          style: n,
                          className: a()(t, y.ur, y.q2, y.x, y.OZ, { [y.R]: !h }),
                          role: h ? "presentation" : "button",
                          tabIndex: h ? -1 : 0,
                          children: [
                              h ? null : (0, i.jsx)(_, { reason: r, isSingleMosaicItem: l }),
                              (0, i.jsx)("div", { "aria-hidden": !h, className: y.Qu, children: e(!h) }),
                              o
                                  ? null
                                  : (0, i.jsx)(j, {
                                        obscureReason: r,
                                        isVisible: u,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: s,
                                    }),
                          ],
                      })
                    : (0, i.jsxs)(d.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": h,
                          className: a()(t, y.ur, y.q2, y.x, { [y.R]: !h }),
                          onClick: h ? void 0 : this.removeObscurity,
                          style: n,
                          role: h ? "presentation" : "button",
                          tabIndex: h ? -1 : 0,
                          children: [
                              h ? null : (0, i.jsx)(_, { reason: r, className: y.E6 }),
                              (0, i.jsx)("div", { "aria-hidden": !h, children: e(!h) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: l } = this.state,
            r = (0, i.jsx)(b.Consumer, {
                children: (r) => {
                    let o = r || l,
                        u = s.Children.toArray(e(o)),
                        c = s.Children.map(u, (e) => (s.isValidElement(e) && null != t ? t(e, o) : e));
                    return (0, i.jsx)(d.D, {
                        tag: "span",
                        onClick: o ? void 0 : this.removeObscurity,
                        "aria-label": o ? void 0 : this.ariaLabel,
                        "aria-expanded": o,
                        tabIndex: o ? -1 : 0,
                        role: o ? "presentation" : "button",
                        className: a()("obscured", n, y.ur, y.F0, { [y.R]: !o }),
                        children: (0, i.jsx)("span", {
                            className: y.kx,
                            children: (0, i.jsx)("span", { "aria-hidden": !o, className: y.AV, children: c }),
                        }),
                    });
                },
            });
        return this.renderWithTooltip(r);
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
                return (0, E.xb)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = C.Oc.SPOILER } = this.props;
        switch (e) {
            case C.Oc.SPOILER:
                return I.intl.string(I.t["F+x38C"]);
            case C.Oc.EXPLICIT_CONTENT:
            case C.Oc.GORE_CONTENT:
            case C.Oc.SELF_HARM_CONTENT:
                return I.intl.string(I.t.mlJ8Vf);
            case C.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return I.intl.string(I.t.MRdR7z);
            default:
                return (0, E.xb)(e);
        }
    }
    get tooltipText() {
        let { reason: e = C.Oc.SPOILER } = this.props;
        switch (e) {
            case C.Oc.SPOILER:
                return I.intl.string(I.t["F+x38C"]);
            case C.Oc.EXPLICIT_CONTENT:
            case C.Oc.GORE_CONTENT:
            case C.Oc.SELF_HARM_CONTENT:
                return I.intl.string(I.t.mlJ8Vf);
            case C.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return I.intl.string(I.t.MRdR7z);
            default:
                return (0, E.xb)(e);
        }
    }
}
function R(e) {
    let t = (0, A._R)() && null != e.reason && C.tY.has(e.reason),
        n = (0, x.yM)();
    return (0, i.jsx)(T, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
}
((R.Types = S), (R.Reasons = C.Oc));
let O = R;
