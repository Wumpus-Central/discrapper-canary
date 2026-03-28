"use strict";
n.d(t, { Ay: () => R, Bs: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(435371),
    u = n(397927),
    c = n(935649),
    d = n(847599),
    _ = n(787301),
    f = n(36149),
    p = n(390248),
    h = n(338717),
    m = n(403362),
    E = n(985018),
    g = n(962296),
    A = (function (e) {
        return (e.TEXT = "text"), (e.ATTACHMENT = "attachment"), (e.EMBED = "embed"), e;
    })(A || {});
let I = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("div", { className: a()(g.pR, t), children: E.intl.string(E.t["F+x38C"]) });
    },
    T = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
        return (0, r.jsx)("div", {
            className: a()(g.W5, t),
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
                                  children: E.intl.string(E.t.SpxcUR),
                              }),
                      ],
                  }),
        });
    },
    S = (e) => {
        let { reason: t = h.Oc.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
        switch (t) {
            case h.Oc.SPOILER:
                return (0, r.jsx)(I, { className: n });
            case h.Oc.EXPLICIT_CONTENT:
            case h.Oc.GORE_CONTENT:
            case h.Oc.SELF_HARM_CONTENT:
                return (0, r.jsx)(T, { isSingleMosaicItem: i, className: n });
            case h.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return (0, r.jsx)(T, { isSingleMosaicItem: i, className: n, obscureOnly: !0 });
            default:
                return (0, m.xb)(t);
        }
    },
    y = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: s } = e;
        return t !== h.Oc.EXPLICIT_CONTENT && t !== h.Oc.GORE_CONTENT && t !== h.Oc.SELF_HARM_CONTENT
            ? null
            : (0, r.jsx)("div", {
                  className: a()(g.fA, s),
                  children: (0, r.jsx)(u.DUT, {
                      className: g.kw,
                      onClick: i,
                      "aria-label": E.intl.string(E.t.ex5G9m),
                      children: n
                          ? (0, r.jsx)(u.bMW, { size: "md", color: "currentColor" })
                          : (0, r.jsx)(u.G3N, { size: "md", color: "currentColor" }),
                  }),
              });
    },
    v = i.createContext(!1);
class N extends i.PureComponent {
    state = { visible: !1 };
    removeObscurity = (e) => {
        let { visible: t } = this.state;
        if (t) return;
        e.preventDefault(), e.stopPropagation(), this.setState({ visible: !0 });
        let { onReveal: n } = this.props;
        null != n && n();
    };
    handleToggleObscurity = async (e) => {
        if (
            (e.stopPropagation(),
            e.nativeEvent.stopPropagation(),
            (0, p.Wi)({ obscure: this.state.visible }),
            this.props.shouldAgeVerify)
        ) {
            let e = await (0, f.tC)();
            if (!(null != e ? "passed" === e : _.A.getReactiveCheckPassed()))
                return void c.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.OBSCURED_MEDIA });
        }
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
                obscured: s = !0,
                reason: o = h.Oc.SPOILER,
                isSingleMosaicItem: l = !1,
                obscurityControlClassName: c,
                isVerifiedTeen: d,
            } = this.props,
            { visible: _ } = this.state,
            f = (0, r.jsx)(v.Consumer, {
                children: (f) => {
                    let p = f || _ || !s;
                    return h._K.has(o) && !t
                        ? (0, r.jsxs)("div", {
                              "aria-label": p ? void 0 : this.ariaLabel,
                              "aria-expanded": p,
                              style: i,
                              className: a()(n, g.ur, g.q2, g.Dq, g.OZ, { [g.R]: !p, [g.h5]: l }),
                              role: p ? "presentation" : "button",
                              tabIndex: p ? -1 : 0,
                              children: [
                                  p ? null : (0, r.jsx)(S, { reason: o, isSingleMosaicItem: l }),
                                  (0, r.jsx)("div", { "aria-hidden": !p, className: g.Qu, children: e(!p) }),
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
                              onClick: p ? void 0 : this.removeObscurity,
                              "aria-label": p ? void 0 : this.ariaLabel,
                              "aria-expanded": p,
                              style: i,
                              className: a()(n, g.ur, g.q2, g.Dq, { [g.R]: !p, [g.rP]: !p }),
                              role: p ? "presentation" : "button",
                              tabIndex: p ? -1 : 0,
                              children: [
                                  p || t ? null : (0, r.jsx)(S, { reason: o, isSingleMosaicItem: l }),
                                  (0, r.jsx)("div", { "aria-hidden": !p, className: g.Qu, children: e(!p) }),
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
                obscurityControlClassName: s,
                reason: o = h.Oc.SPOILER,
                isVerifiedTeen: l,
            } = this.props,
            { visible: c } = this.state;
        return (0, r.jsx)(v.Consumer, {
            children: (d) => {
                let _ = d || c;
                return h._K.has(o)
                    ? (0, r.jsxs)("div", {
                          "aria-label": c ? void 0 : this.ariaLabel,
                          "aria-expanded": _,
                          style: n,
                          className: a()(t, g.ur, g.q2, g.x, g.OZ, { [g.R]: !_ }),
                          role: _ ? "presentation" : "button",
                          tabIndex: _ ? -1 : 0,
                          children: [
                              _ ? null : (0, r.jsx)(S, { reason: o, isSingleMosaicItem: i }),
                              (0, r.jsx)("div", { "aria-hidden": !_, className: g.Qu, children: e(!_) }),
                              l
                                  ? null
                                  : (0, r.jsx)(y, {
                                        obscureReason: o,
                                        isVisible: c,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: s,
                                    }),
                          ],
                      })
                    : (0, r.jsxs)(u.DUT, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": _,
                          className: a()(t, g.ur, g.q2, g.x, { [g.R]: !_ }),
                          onClick: _ ? void 0 : this.removeObscurity,
                          style: n,
                          role: _ ? "presentation" : "button",
                          tabIndex: _ ? -1 : 0,
                          children: [
                              _ ? null : (0, r.jsx)(S, { reason: o, className: g.E6 }),
                              (0, r.jsx)("div", { "aria-hidden": !_, children: e(!_) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: s } = this.state,
            o = (0, r.jsx)(v.Consumer, {
                children: (o) => {
                    let l = o || s,
                        c = i.Children.toArray(e(l)),
                        d = i.Children.map(c, (e) => (i.isValidElement(e) && null != t ? t(e, l) : e));
                    return (0, r.jsx)(u.DUT, {
                        tag: "span",
                        onClick: l ? void 0 : this.removeObscurity,
                        "aria-label": l ? void 0 : this.ariaLabel,
                        "aria-expanded": l,
                        tabIndex: l ? -1 : 0,
                        role: l ? "presentation" : "button",
                        className: a()("obscured", n, g.ur, g.F0, { [g.R]: !l }),
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
                return (0, m.xb)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = h.Oc.SPOILER } = this.props;
        switch (e) {
            case h.Oc.SPOILER:
                return E.intl.string(E.t["F+x38C"]);
            case h.Oc.EXPLICIT_CONTENT:
            case h.Oc.GORE_CONTENT:
            case h.Oc.SELF_HARM_CONTENT:
                return E.intl.string(E.t.mlJ8Vf);
            case h.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return E.intl.string(E.t.MRdR7z);
            default:
                return (0, m.xb)(e);
        }
    }
    get tooltipText() {
        let { reason: e = h.Oc.SPOILER } = this.props;
        switch (e) {
            case h.Oc.SPOILER:
                return E.intl.string(E.t["F+x38C"]);
            case h.Oc.EXPLICIT_CONTENT:
            case h.Oc.GORE_CONTENT:
            case h.Oc.SELF_HARM_CONTENT:
                return E.intl.string(E.t.mlJ8Vf);
            case h.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return E.intl.string(E.t.MRdR7z);
            default:
                return (0, m.xb)(e);
        }
    }
}
let C = (e) => {
    let t = (0, p._R)() && null != e.reason && h.tY.has(e.reason),
        n = (0, f.yM)();
    return (0, r.jsx)(N, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
};
(C.Types = A), (C.Reasons = h.Oc);
let R = C;
