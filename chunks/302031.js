"use strict";
n.d(t, { Ay: () => M, Bs: () => y });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(661531),
    d = n(87221),
    c = n(834730),
    u = n(939249),
    _ = n(952270),
    E = n(39623),
    A = n(459192),
    h = n(379257),
    I = n(847599),
    f = n(787301),
    p = n(36149),
    T = n(390248),
    m = n(338717),
    g = n(403362),
    S = n(375708),
    N = n(766184),
    C = (((i = C || {}).TEXT = "text"), (i.ATTACHMENT = "attachment"), (i.EMBED = "embed"), i);
function R(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: l()(N.pR, t), children: S.intl.string(S.t["F+x38C"]) });
}
function O(e) {
    let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
    return (0, r.jsx)("div", {
        className: l()(N.W5, t),
        children: i
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.D, { size: "lg", color: o.A.colors.WHITE }),
                      n &&
                          (0, r.jsx)(c.E, {
                              variant: "text-sm/normal",
                              color: "text-overlay-light",
                              className: N.Vs,
                              children: S.intl.string(S.t.SpxcUR),
                          }),
                  ],
              }),
    });
}
function L(e) {
    let { reason: t = m.Oc.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
    switch (t) {
        case m.Oc.SPOILER:
            return (0, r.jsx)(R, { className: n });
        case m.Oc.EXPLICIT_CONTENT:
        case m.Oc.GORE_CONTENT:
        case m.Oc.SELF_HARM_CONTENT:
            return (0, r.jsx)(O, { isSingleMosaicItem: i, className: n });
        case m.Oc.POTENTIAL_EXPLICIT_CONTENT:
            return (0, r.jsx)(O, { isSingleMosaicItem: i, className: n, obscureOnly: !0 });
        default:
            return (0, g.xb)(t);
    }
}
function D(e) {
    let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: a } = e;
    return t !== m.Oc.EXPLICIT_CONTENT && t !== m.Oc.GORE_CONTENT && t !== m.Oc.SELF_HARM_CONTENT
        ? null
        : (0, r.jsx)("div", {
              className: l()(N.fA, a),
              children: (0, r.jsx)(u.D, {
                  className: N.kw,
                  onClick: i,
                  "aria-label": S.intl.string(S.t.ex5G9m),
                  children: n
                      ? (0, r.jsx)(E.b, { size: "md", color: "currentColor" })
                      : (0, r.jsx)(_.G, { size: "md", color: "currentColor" }),
              }),
          });
}
let y = a.createContext(!1);
class v extends a.PureComponent {
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
            (0, T.Wi)({ obscure: this.state.visible }),
            this.props.shouldAgeVerify)
        ) {
            let e = await (0, p.tC)();
            if (!(null != e ? "passed" === e : f.A.getReactiveCheckPassed()))
                return void h.A.showAgeVerificationGetStartedModal({ entryPoint: I.q1.OBSCURED_MEDIA });
        }
        let { onToggleObscurity: t } = this.props;
        null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
    };
    obscure = () => {
        let { visible: e } = this.state;
        e && this.setState({ visible: !1 });
    };
    renderWithTooltip(e) {
        return this.state.visible ? e : (0, r.jsx)(A.u, { position: "left", body: this.tooltipText, children: e });
    }
    renderObscuredAttachment() {
        let {
                children: e,
                inline: t,
                className: n,
                containerStyles: i,
                obscured: a = !0,
                reason: s = m.Oc.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: d,
                isVerifiedTeen: c,
            } = this.props,
            { visible: _ } = this.state,
            E = (0, r.jsx)(y.Consumer, {
                children: (E) => {
                    let A = E || _ || !a;
                    return m._K.has(s) && !t
                        ? (0, r.jsxs)("div", {
                              "aria-label": A ? void 0 : this.ariaLabel,
                              "aria-expanded": A,
                              style: i,
                              className: l()(n, N.ur, N.q2, N.Dq, N.OZ, { [N.R]: !A, [N.h5]: o }),
                              role: A ? "presentation" : "button",
                              tabIndex: A ? -1 : 0,
                              children: [
                                  A ? null : (0, r.jsx)(L, { reason: s, isSingleMosaicItem: o }),
                                  (0, r.jsx)("div", { "aria-hidden": !A, className: N.Qu, children: e(!A) }),
                                  c
                                      ? null
                                      : (0, r.jsx)(D, {
                                            obscureReason: s,
                                            isVisible: _,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: d,
                                        }),
                              ],
                          })
                        : (0, r.jsxs)(u.D, {
                              onClick: A ? void 0 : this.removeObscurity,
                              "aria-label": A ? void 0 : this.ariaLabel,
                              "aria-expanded": A,
                              style: i,
                              className: l()(n, N.ur, N.q2, N.Dq, { [N.R]: !A, [N.rP]: !A }),
                              role: A ? "presentation" : "button",
                              tabIndex: A ? -1 : 0,
                              children: [
                                  A || t ? null : (0, r.jsx)(L, { reason: s, isSingleMosaicItem: o }),
                                  (0, r.jsx)("div", { "aria-hidden": !A, className: N.Qu, children: e(!A) }),
                              ],
                          });
                },
            });
        return t ? this.renderWithTooltip(E) : E;
    }
    renderObscuredEmbed() {
        let {
                children: e,
                className: t,
                containerStyles: n,
                isSingleMosaicItem: i,
                obscurityControlClassName: a,
                reason: s = m.Oc.SPOILER,
                isVerifiedTeen: o,
            } = this.props,
            { visible: d } = this.state;
        return (0, r.jsx)(y.Consumer, {
            children: (c) => {
                let _ = c || d;
                return m._K.has(s)
                    ? (0, r.jsxs)("div", {
                          "aria-label": d ? void 0 : this.ariaLabel,
                          "aria-expanded": _,
                          style: n,
                          className: l()(t, N.ur, N.q2, N.x, N.OZ, { [N.R]: !_ }),
                          role: _ ? "presentation" : "button",
                          tabIndex: _ ? -1 : 0,
                          children: [
                              _ ? null : (0, r.jsx)(L, { reason: s, isSingleMosaicItem: i }),
                              (0, r.jsx)("div", { "aria-hidden": !_, className: N.Qu, children: e(!_) }),
                              o
                                  ? null
                                  : (0, r.jsx)(D, {
                                        obscureReason: s,
                                        isVisible: d,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: a,
                                    }),
                          ],
                      })
                    : (0, r.jsxs)(u.D, {
                          "aria-label": this.ariaLabel,
                          "aria-expanded": _,
                          className: l()(t, N.ur, N.q2, N.x, { [N.R]: !_ }),
                          onClick: _ ? void 0 : this.removeObscurity,
                          style: n,
                          role: _ ? "presentation" : "button",
                          tabIndex: _ ? -1 : 0,
                          children: [
                              _ ? null : (0, r.jsx)(L, { reason: s, className: N.E6 }),
                              (0, r.jsx)("div", { "aria-hidden": !_, children: e(!_) }),
                          ],
                      });
            },
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: i } = this.state,
            s = (0, r.jsx)(y.Consumer, {
                children: (s) => {
                    let o = s || i,
                        d = a.Children.toArray(e(o)),
                        c = a.Children.map(d, (e) => (a.isValidElement(e) && null != t ? t(e, o) : e));
                    return (0, r.jsx)(u.D, {
                        tag: "span",
                        onClick: o ? void 0 : this.removeObscurity,
                        "aria-label": o ? void 0 : this.ariaLabel,
                        "aria-expanded": o,
                        tabIndex: o ? -1 : 0,
                        role: o ? "presentation" : "button",
                        className: l()("obscured", n, N.ur, N.F0, { [N.R]: !o }),
                        children: (0, r.jsx)("span", {
                            className: N.kx,
                            children: (0, r.jsx)("span", { "aria-hidden": !o, className: N.AV, children: c }),
                        }),
                    });
                },
            });
        return this.renderWithTooltip(s);
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
                return (0, g.xb)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = m.Oc.SPOILER } = this.props;
        switch (e) {
            case m.Oc.SPOILER:
                return S.intl.string(S.t["F+x38C"]);
            case m.Oc.EXPLICIT_CONTENT:
            case m.Oc.GORE_CONTENT:
            case m.Oc.SELF_HARM_CONTENT:
                return S.intl.string(S.t.mlJ8Vf);
            case m.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return S.intl.string(S.t.MRdR7z);
            default:
                return (0, g.xb)(e);
        }
    }
    get tooltipText() {
        let { reason: e = m.Oc.SPOILER } = this.props;
        switch (e) {
            case m.Oc.SPOILER:
                return S.intl.string(S.t["F+x38C"]);
            case m.Oc.EXPLICIT_CONTENT:
            case m.Oc.GORE_CONTENT:
            case m.Oc.SELF_HARM_CONTENT:
                return S.intl.string(S.t.mlJ8Vf);
            case m.Oc.POTENTIAL_EXPLICIT_CONTENT:
                return S.intl.string(S.t.MRdR7z);
            default:
                return (0, g.xb)(e);
        }
    }
}
function b(e) {
    let t = (0, T._R)() && null != e.reason && m.tY.has(e.reason),
        n = (0, p.yM)();
    return (0, r.jsx)(v, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
}
(b.Types = C), (b.Reasons = m.Oc);
let M = b;
