"use strict";
n.d(t, { Ay: () => L, Bs: () => j });
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(827734),
    c = n(459192),
    u = n(87221),
    d = n(834730),
    h = n(939249),
    m = n(952270),
    p = n(39623),
    f = n(935649),
    g = n(847599),
    _ = n(787301),
    x = n(36149),
    A = n(390248),
    C = n(338717),
    E = n(403362),
    I = n(985018),
    v = n(766184),
    y = (((i = y || {}).TEXT = "text"), (i.ATTACHMENT = "attachment"), (i.EMBED = "embed"), i);
let S = (e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", { className: a()(v.pR, t), children: I.intl.string(I.t["F+x38C"]) });
    },
    b = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
        return (0, l.jsx)("div", {
            className: a()(v.W5, t),
            children: i
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.D, { size: "lg", color: o.A.colors.WHITE }),
                          n &&
                              (0, l.jsx)(d.E, {
                                  variant: "text-sm/normal",
                                  color: "always-white",
                                  className: v.Vs,
                                  children: I.intl.string(I.t.SpxcUR),
                              }),
                      ],
                  }),
        });
    },
    N = (e) => {
        let { reason: t = C.Oc.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
        switch (t) {
            case C.Oc.SPOILER:
                return (0, l.jsx)(S, { className: n });
            case C.Oc.EXPLICIT_CONTENT:
            case C.Oc.GORE_CONTENT:
            case C.Oc.SELF_HARM_CONTENT:
                return (0, l.jsx)(b, { isSingleMosaicItem: i, className: n });
            case C.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return (0, l.jsx)(b, { isSingleMosaicItem: i, className: n, obscureOnly: !0 });
            default:
                return (0, E.xb)(t);
        }
    },
    T = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: s } = e;
        return t !== C.Oc.EXPLICIT_CONTENT && t !== C.Oc.GORE_CONTENT && t !== C.Oc.SELF_HARM_CONTENT
            ? null
            : (0, l.jsx)("div", {
                  className: a()(v.fA, s),
                  children: (0, l.jsx)(h.D, {
                      className: v.kw,
                      onClick: i,
                      "aria-label": I.intl.string(I.t.ex5G9m),
                      children: n
                          ? (0, l.jsx)(p.b, { size: "md", color: "currentColor" })
                          : (0, l.jsx)(m.G, { size: "md", color: "currentColor" }),
                  }),
              });
    },
    j = s.createContext(!1);
class R extends s.PureComponent {
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
            (0, A.Wi)({ obscure: this.state.visible }),
            this.props.shouldAgeVerify)
        ) {
            let e = await (0, x.tC)();
            if (!(null != e ? "passed" === e : _.A.getReactiveCheckPassed()))
                return void f.A.showAgeVerificationGetStartedModal({ entryPoint: g.q1.OBSCURED_MEDIA });
        }
        let { onToggleObscurity: t } = this.props;
        null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
    };
    obscure = () => {
        let { visible: e } = this.state;
        e && this.setState({ visible: !1 });
    };
    renderWithTooltip(e) {
        return this.state.visible ? e : (0, l.jsx)(c.u, { position: "left", body: this.tooltipText, children: e });
    }
    renderObscuredAttachment() {
        let {
                children: e,
                inline: t,
                className: n,
                containerStyles: i,
                obscured: s = !0,
                reason: r = C.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: c,
                isVerifiedTeen: u,
            } = this.props,
            { visible: d } = this.state,
            m = (0, l.jsx)(j.Consumer, {
                children: (m) => {
                    let p = m || d || !s;
                    return C._K.has(r) && !t
                        ? (0, l.jsxs)("div", {
                              "aria-label": p ? void 0 : this.ariaLabel,
                              "aria-expanded": p,
                              style: i,
                              className: a()(n, v.ur, v.q2, v.Dq, v.OZ, { [v.R]: !p, [v.h5]: o }),
                              role: p ? "presentation" : "button",
                              tabIndex: p ? -1 : 0,
                              children: [
                                  p ? null : (0, l.jsx)(N, { reason: r, isSingleMosaicItem: o }),
                                  (0, l.jsx)("div", { "aria-hidden": !p, className: v.Qu, children: e(!p) }),
                                  u
                                      ? null
                                      : (0, l.jsx)(T, {
                                            obscureReason: r,
                                            isVisible: d,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: c,
                                        }),
                              ],
                          })
                        : (0, l.jsxs)(h.D, {
                              onClick: p ? void 0 : this.removeObscurity,
                              "aria-label": p ? void 0 : this.ariaLabel,
                              "aria-expanded": p,
                              style: i,
                              className: a()(n, v.ur, v.q2, v.Dq, { [v.R]: !p, [v.rP]: !p }),
                              role: p ? "presentation" : "button",
                              tabIndex: p ? -1 : 0,
                              children: [
                                  p || t ? null : (0, l.jsx)(N, { reason: r, isSingleMosaicItem: o }),
                                  (0, l.jsx)("div", { "aria-hidden": !p, className: v.Qu, children: e(!p) }),
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
                obscurityControlClassName: s,
                reason: r = C.Oc.SPOILER,
                isVerifiedTeen: o,
            } = this.props,
            { visible: c } = this.state;
        return (0, l.jsx)(j.Consumer, {
            children: (u) => {
                let d = u || c;
                return C._K.has(r)
                    ? (0, l.jsxs)("div", {
                          "aria-label": c ? void 0 : this.ariaLabel,
                          "aria-expanded": d,
                          style: n,
                          className: a()(t, v.ur, v.q2, v.x, v.OZ, { [v.R]: !d }),
                          role: d ? "presentation" : "button",
                          tabIndex: d ? -1 : 0,
                          children: [
                              d ? null : (0, l.jsx)(N, { reason: r, isSingleMosaicItem: i }),
                              (0, l.jsx)("div", { "aria-hidden": !d, className: v.Qu, children: e(!d) }),
                              o
                                  ? null
                                  : (0, l.jsx)(T, {
                                        obscureReason: r,
                                        isVisible: c,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: s,
                                    }),
                          ],
                      })
                    : (0, l.jsxs)(h.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": d,
                          className: a()(t, v.ur, v.q2, v.x, { [v.R]: !d }),
                          onClick: d ? void 0 : this.removeObscurity,
                          style: n,
                          role: d ? "presentation" : "button",
                          tabIndex: d ? -1 : 0,
                          children: [
                              d ? null : (0, l.jsx)(N, { reason: r, className: v.E6 }),
                              (0, l.jsx)("div", { "aria-hidden": !d, children: e(!d) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: i } = this.state,
            r = (0, l.jsx)(j.Consumer, {
                children: (r) => {
                    let o = r || i,
                        c = s.Children.toArray(e(o)),
                        u = s.Children.map(c, (e) => (s.isValidElement(e) && null != t ? t(e, o) : e));
                    return (0, l.jsx)(h.D, {
                        tag: "span",
                        onClick: o ? void 0 : this.removeObscurity,
                        "aria-label": o ? void 0 : this.ariaLabel,
                        "aria-expanded": o,
                        tabIndex: o ? -1 : 0,
                        role: o ? "presentation" : "button",
                        className: a()("obscured", n, v.ur, v.F0, { [v.R]: !o }),
                        children: (0, l.jsx)("span", {
                            className: v.kx,
                            children: (0, l.jsx)("span", { "aria-hidden": !o, className: v.AV, children: u }),
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
let w = (e) => {
    let t = (0, A._R)() && null != e.reason && C.tY.has(e.reason),
        n = (0, x.yM)();
    return (0, l.jsx)(R, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
};
(w.Types = y), (w.Reasons = C.Oc);
let L = w;
