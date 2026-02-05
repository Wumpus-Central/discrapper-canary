"use strict";
n.d(t, { Ay: () => b, Bs: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(435371),
    u = n(397927),
    c = n(935649),
    d = n(847599),
    _ = n(36149),
    f = n(390248),
    p = n(338717),
    h = n(403362),
    m = n(985018),
    g = n(388963),
    E = (function (e) {
        return (e.TEXT = "text"), (e.ATTACHMENT = "attachment"), (e.EMBED = "embed"), e;
    })(E || {});
let A = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("div", { className: s()(g.pR, t), children: m.intl.string(m.t["F+x38C"]) });
    },
    I = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
        return (0, r.jsx)("div", {
            className: s()(g.W5, t),
            children: i
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.DAq, { size: "lg", color: o.A.colors.WHITE }),
                          n &&
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  color: "always-white",
                                  className: g.Vs,
                                  children: m.intl.string(m.t.SpxcUR),
                              }),
                      ],
                  }),
        });
    },
    T = (e) => {
        let { reason: t = p.Oc.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
        switch (t) {
            case p.Oc.SPOILER:
                return (0, r.jsx)(A, { className: n });
            case p.Oc.EXPLICIT_CONTENT:
            case p.Oc.GORE_CONTENT:
            case p.Oc.SELF_HARM_CONTENT:
                return (0, r.jsx)(I, { isSingleMosaicItem: i, className: n });
            case p.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return (0, r.jsx)(I, { isSingleMosaicItem: i, className: n, obscureOnly: !0 });
            default:
                return (0, h.xb)(t);
        }
    },
    y = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: a } = e;
        return t !== p.Oc.EXPLICIT_CONTENT && t !== p.Oc.GORE_CONTENT && t !== p.Oc.SELF_HARM_CONTENT
            ? null
            : (0, r.jsx)("div", {
                  className: s()(g.fA, a),
                  children: (0, r.jsx)(u.DUT, {
                      className: g.kw,
                      onClick: i,
                      "aria-label": m.intl.string(m.t.ex5G9m),
                      children: n
                          ? (0, r.jsx)(u.bMW, { size: "md", color: "currentColor" })
                          : (0, r.jsx)(u.G3N, { size: "md", color: "currentColor" }),
                  }),
              });
    },
    S = i.createContext(!1);
class v extends i.PureComponent {
    state = { visible: !1 };
    removeObscurity = (e) => {
        let { visible: t } = this.state;
        if (t) return;
        t || (e.preventDefault(), e.stopPropagation()), this.setState({ visible: !0 });
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
            return void c.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.OBSCURED_MEDIA });
        let { onToggleObscurity: t } = this.props;
        null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
    };
    obscure = () => {
        let { visible: e } = this.state;
        e && this.setState({ visible: !1 });
    };
    renderWithTooltip(e) {
        return this.state.visible ? e : (0, r.jsx)(l.un, { position: "left", body: this.tooltipText, children: e });
    }
    renderObscuredAttachment() {
        let {
                children: e,
                inline: t,
                className: n,
                containerStyles: i,
                obscured: a = !0,
                reason: o = p.Oc.SPOILER,
                isSingleMosaicItem: l = !1,
                obscurityControlClassName: c,
                isVerifiedTeen: d,
            } = this.props,
            { visible: _ } = this.state,
            f = (0, r.jsx)(S.Consumer, {
                children: (f) => {
                    let h = f || _ || !a;
                    return p._K.has(o) && !t
                        ? (0, r.jsxs)("div", {
                              "aria-label": h ? void 0 : this.ariaLabel,
                              "aria-expanded": h,
                              style: i,
                              className: s()(n, g.ur, g.q2, g.Dq, g.OZ, { [g.R]: !h, [g.h5]: l }),
                              role: h ? "presentation" : "button",
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h || t ? null : (0, r.jsx)(T, { reason: o, isSingleMosaicItem: l }),
                                  (0, r.jsx)("div", { "aria-hidden": !h, className: g.Qu, children: e(!h) }),
                                  d
                                      ? null
                                      : (0, r.jsx)(y, {
                                            obscureReason: o,
                                            isVisible: _,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: c,
                                        }),
                              ],
                          })
                        : (0, r.jsxs)(u.DUT, {
                              onClick: h ? void 0 : this.removeObscurity,
                              "aria-label": h ? void 0 : this.ariaLabel,
                              "aria-expanded": h,
                              style: i,
                              className: s()(n, g.ur, g.q2, g.Dq, { [g.R]: !h, [g.rP]: !h }),
                              role: h ? "presentation" : "button",
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h || t ? null : (0, r.jsx)(T, { reason: o, isSingleMosaicItem: l }),
                                  (0, r.jsx)("div", { "aria-hidden": !h, className: g.Qu, children: e(!h) }),
                              ],
                          });
                },
            });
        return t ? this.renderWithTooltip(f) : f;
    }
    renderObscuredEmbed() {
        let {
                children: e,
                className: t,
                containerStyles: n,
                isSingleMosaicItem: i,
                obscurityControlClassName: a,
                reason: o = p.Oc.SPOILER,
                isVerifiedTeen: l,
            } = this.props,
            { visible: c } = this.state;
        return (0, r.jsx)(S.Consumer, {
            children: (d) => {
                let _ = d || c;
                return p._K.has(o)
                    ? (0, r.jsxs)("div", {
                          "aria-label": c ? void 0 : this.ariaLabel,
                          "aria-expanded": _,
                          style: n,
                          className: s()(t, g.ur, g.q2, g.x, g.OZ, { [g.R]: !_ }),
                          role: _ ? "presentation" : "button",
                          tabIndex: _ ? -1 : 0,
                          children: [
                              _ ? null : (0, r.jsx)(T, { reason: o, isSingleMosaicItem: i }),
                              (0, r.jsx)("div", { "aria-hidden": !_, className: g.Qu, children: e(!_) }),
                              l
                                  ? null
                                  : (0, r.jsx)(y, {
                                        obscureReason: o,
                                        isVisible: c,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: a,
                                    }),
                          ],
                      })
                    : (0, r.jsxs)(u.DUT, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": _,
                          className: s()(t, g.ur, g.q2, g.x, { [g.R]: !_ }),
                          onClick: _ ? void 0 : this.removeObscurity,
                          style: n,
                          role: _ ? "presentation" : "button",
                          tabIndex: _ ? -1 : 0,
                          children: [
                              _ ? null : (0, r.jsx)(T, { reason: o, className: g.E6 }),
                              (0, r.jsx)("div", { "aria-hidden": !_, children: e(!_) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: a } = this.state,
            o = (0, r.jsx)(S.Consumer, {
                children: (o) => {
                    let l = o || a,
                        c = i.Children.toArray(e(l)),
                        d = i.Children.map(c, (e) => (i.isValidElement(e) && null != t ? t(e, l) : e));
                    return (0, r.jsx)(u.DUT, {
                        tag: "span",
                        onClick: l ? void 0 : this.removeObscurity,
                        "aria-label": l ? void 0 : this.ariaLabel,
                        "aria-expanded": l,
                        tabIndex: l ? -1 : 0,
                        role: l ? "presentation" : "button",
                        className: s()("obscured", n, g.ur, g.F0, { [g.R]: !l }),
                        children: (0, r.jsx)("span", {
                            className: g.kx,
                            children: (0, r.jsx)("span", { "aria-hidden": !l, className: g.AV, children: d }),
                        }),
                    });
                },
            });
        return this.renderWithTooltip(o);
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
                return (0, h.xb)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = p.Oc.SPOILER } = this.props;
        switch (e) {
            case p.Oc.SPOILER:
                return m.intl.string(m.t["F+x38C"]);
            case p.Oc.EXPLICIT_CONTENT:
            case p.Oc.GORE_CONTENT:
            case p.Oc.SELF_HARM_CONTENT:
                return m.intl.string(m.t.mlJ8Vf);
            case p.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return m.intl.string(m.t.MRdR7z);
            default:
                return (0, h.xb)(e);
        }
    }
    get tooltipText() {
        let { reason: e = p.Oc.SPOILER } = this.props;
        switch (e) {
            case p.Oc.SPOILER:
                return m.intl.string(m.t["F+x38C"]);
            case p.Oc.EXPLICIT_CONTENT:
            case p.Oc.GORE_CONTENT:
            case p.Oc.SELF_HARM_CONTENT:
                return m.intl.string(m.t.mlJ8Vf);
            case p.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return m.intl.string(m.t.MRdR7z);
            default:
                return (0, h.xb)(e);
        }
    }
}
let C = (e) => {
    let t = (0, f._R)() && null != e.reason && p.tY.has(e.reason),
        n = (0, _.yM)();
    return (0, r.jsx)(v, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
};
(C.Types = E), (C.Reasons = p.Oc);
let b = C;
