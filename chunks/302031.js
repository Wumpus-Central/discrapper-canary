"use strict";
n.d(t, { Ay: () => w, Bs: () => b });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(661531),
    u = n(459192),
    c = n(87221),
    d = n(834730),
    _ = n(939249),
    h = n(952270),
    f = n(39623),
    p = n(139716),
    E = n(847599),
    m = n(787301),
    g = n(36149),
    A = n(390248),
    I = n(338717),
    T = n(403362),
    S = n(375708),
    y = n(766184),
    C = (((i = C || {}).TEXT = "text"), (i.ATTACHMENT = "attachment"), (i.EMBED = "embed"), i);
function N(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: o()(y.pR, t), children: S.intl.string(S.t["F+x38C"]) });
}
function v(e) {
    let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
    return (0, r.jsx)("div", {
        className: o()(y.W5, t),
        children: i
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.D, { size: "lg", color: l.A.colors.WHITE }),
                      n &&
                          (0, r.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "always-white",
                              className: y.Vs,
                              children: S.intl.string(S.t.SpxcUR),
                          }),
                  ],
              }),
    });
}
function R(e) {
    let { reason: t = I.Oc.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
    switch (t) {
        case I.Oc.SPOILER:
            return (0, r.jsx)(N, { className: n });
        case I.Oc.EXPLICIT_CONTENT:
        case I.Oc.GORE_CONTENT:
        case I.Oc.SELF_HARM_CONTENT:
            return (0, r.jsx)(v, { isSingleMosaicItem: i, className: n });
        case I.Oc.POTENTIAL_EXPLICIT_CONTENT:
            return (0, r.jsx)(v, { isSingleMosaicItem: i, className: n, obscureOnly: !0 });
        default:
            return (0, T.xb)(t);
    }
}
function O(e) {
    let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: s } = e;
    return t !== I.Oc.EXPLICIT_CONTENT && t !== I.Oc.GORE_CONTENT && t !== I.Oc.SELF_HARM_CONTENT
        ? null
        : (0, r.jsx)("div", {
              className: o()(y.fA, s),
              children: (0, r.jsx)(_.D, {
                  className: y.kw,
                  onClick: i,
                  "aria-label": S.intl.string(S.t.ex5G9m),
                  children: n
                      ? (0, r.jsx)(f.b, { size: "md", color: "currentColor" })
                      : (0, r.jsx)(h.G, { size: "md", color: "currentColor" }),
              }),
          });
}
let b = s.createContext(!1);
class D extends s.PureComponent {
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
            let e = await (0, g.tC)();
            if (!(null != e ? "passed" === e : m.A.getReactiveCheckPassed()))
                return void p.A.showAgeVerificationGetStartedModal({ entryPoint: E.q1.OBSCURED_MEDIA });
        }
        let { onToggleObscurity: t } = this.props;
        null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
    };
    obscure = () => {
        let { visible: e } = this.state;
        e && this.setState({ visible: !1 });
    };
    renderWithTooltip(e) {
        return this.state.visible ? e : (0, r.jsx)(u.u, { position: "left", body: this.tooltipText, children: e });
    }
    renderObscuredAttachment() {
        let {
                children: e,
                inline: t,
                className: n,
                containerStyles: i,
                obscured: s = !0,
                reason: a = I.Oc.SPOILER,
                isSingleMosaicItem: l = !1,
                obscurityControlClassName: u,
                isVerifiedTeen: c,
            } = this.props,
            { visible: d } = this.state,
            h = (0, r.jsx)(b.Consumer, {
                children: (h) => {
                    let f = h || d || !s;
                    return I._K.has(a) && !t
                        ? (0, r.jsxs)("div", {
                              "aria-label": f ? void 0 : this.ariaLabel,
                              "aria-expanded": f,
                              style: i,
                              className: o()(n, y.ur, y.q2, y.Dq, y.OZ, { [y.R]: !f, [y.h5]: l }),
                              role: f ? "presentation" : "button",
                              tabIndex: f ? -1 : 0,
                              children: [
                                  f ? null : (0, r.jsx)(R, { reason: a, isSingleMosaicItem: l }),
                                  (0, r.jsx)("div", { "aria-hidden": !f, className: y.Qu, children: e(!f) }),
                                  c
                                      ? null
                                      : (0, r.jsx)(O, {
                                            obscureReason: a,
                                            isVisible: d,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: u,
                                        }),
                              ],
                          })
                        : (0, r.jsxs)(_.D, {
                              onClick: f ? void 0 : this.removeObscurity,
                              "aria-label": f ? void 0 : this.ariaLabel,
                              "aria-expanded": f,
                              style: i,
                              className: o()(n, y.ur, y.q2, y.Dq, { [y.R]: !f, [y.rP]: !f }),
                              role: f ? "presentation" : "button",
                              tabIndex: f ? -1 : 0,
                              children: [
                                  f || t ? null : (0, r.jsx)(R, { reason: a, isSingleMosaicItem: l }),
                                  (0, r.jsx)("div", { "aria-hidden": !f, className: y.Qu, children: e(!f) }),
                              ],
                          });
                },
            });
        return t ? this.renderWithTooltip(h) : h;
    }
    renderObscuredEmbed() {
        let {
                children: e,
                className: t,
                containerStyles: n,
                isSingleMosaicItem: i,
                obscurityControlClassName: s,
                reason: a = I.Oc.SPOILER,
                isVerifiedTeen: l,
            } = this.props,
            { visible: u } = this.state;
        return (0, r.jsx)(b.Consumer, {
            children: (c) => {
                let d = c || u;
                return I._K.has(a)
                    ? (0, r.jsxs)("div", {
                          "aria-label": u ? void 0 : this.ariaLabel,
                          "aria-expanded": d,
                          style: n,
                          className: o()(t, y.ur, y.q2, y.x, y.OZ, { [y.R]: !d }),
                          role: d ? "presentation" : "button",
                          tabIndex: d ? -1 : 0,
                          children: [
                              d ? null : (0, r.jsx)(R, { reason: a, isSingleMosaicItem: i }),
                              (0, r.jsx)("div", { "aria-hidden": !d, className: y.Qu, children: e(!d) }),
                              l
                                  ? null
                                  : (0, r.jsx)(O, {
                                        obscureReason: a,
                                        isVisible: u,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: s,
                                    }),
                          ],
                      })
                    : (0, r.jsxs)(_.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": d,
                          className: o()(t, y.ur, y.q2, y.x, { [y.R]: !d }),
                          onClick: d ? void 0 : this.removeObscurity,
                          style: n,
                          role: d ? "presentation" : "button",
                          tabIndex: d ? -1 : 0,
                          children: [
                              d ? null : (0, r.jsx)(R, { reason: a, className: y.E6 }),
                              (0, r.jsx)("div", { "aria-hidden": !d, children: e(!d) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: i } = this.state,
            a = (0, r.jsx)(b.Consumer, {
                children: (a) => {
                    let l = a || i,
                        u = s.Children.toArray(e(l)),
                        c = s.Children.map(u, (e) => (s.isValidElement(e) && null != t ? t(e, l) : e));
                    return (0, r.jsx)(_.D, {
                        tag: "span",
                        onClick: l ? void 0 : this.removeObscurity,
                        "aria-label": l ? void 0 : this.ariaLabel,
                        "aria-expanded": l,
                        tabIndex: l ? -1 : 0,
                        role: l ? "presentation" : "button",
                        className: o()("obscured", n, y.ur, y.F0, { [y.R]: !l }),
                        children: (0, r.jsx)("span", {
                            className: y.kx,
                            children: (0, r.jsx)("span", { "aria-hidden": !l, className: y.AV, children: c }),
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
                return (0, T.xb)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = I.Oc.SPOILER } = this.props;
        switch (e) {
            case I.Oc.SPOILER:
                return S.intl.string(S.t["F+x38C"]);
            case I.Oc.EXPLICIT_CONTENT:
            case I.Oc.GORE_CONTENT:
            case I.Oc.SELF_HARM_CONTENT:
                return S.intl.string(S.t.mlJ8Vf);
            case I.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return S.intl.string(S.t.MRdR7z);
            default:
                return (0, T.xb)(e);
        }
    }
    get tooltipText() {
        let { reason: e = I.Oc.SPOILER } = this.props;
        switch (e) {
            case I.Oc.SPOILER:
                return S.intl.string(S.t["F+x38C"]);
            case I.Oc.EXPLICIT_CONTENT:
            case I.Oc.GORE_CONTENT:
            case I.Oc.SELF_HARM_CONTENT:
                return S.intl.string(S.t.mlJ8Vf);
            case I.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return S.intl.string(S.t.MRdR7z);
            default:
                return (0, T.xb)(e);
        }
    }
}
function L(e) {
    let t = (0, A._R)() && null != e.reason && I.tY.has(e.reason),
        n = (0, g.yM)();
    return (0, r.jsx)(D, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
}
(L.Types = C), (L.Reasons = I.Oc);
let w = L;
